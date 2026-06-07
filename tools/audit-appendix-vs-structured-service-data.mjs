/**
 * Compare each service appendix markdown ("Full source text" source) to structured
 * `ServiceData` strings in the backing TypeScript module (everything rendered above
 * the appendix on `/services/[slug]`).
 *
 * Run: node tools/audit-appendix-vs-structured-service-data.mjs
 *
 * Env:
 *   AUDIT_APPENDIX_ONLY_SLUGS=slug-a,slug-b — limit audit to these slugs (comma-separated).
 *   AUDIT_APPENDIX_FUZZY=1 — treat a chunk as covered if ≥85% of its tokens (len≥3)
 *     appear in the structured blob (reduces false positives when copy is paraphrased).
 *   AUDIT_APPENDIX_FAIL_ON_GAP=1 — exit 1 when any non–nav-backed slug has missing
 *     chunks in strict mode (fuzzy off).
 *   AUDIT_APPENDIX_MIN_CHUNK=80 — minimum raw chunk length before splitting (default 80).
 *   AUDIT_APPENDIX_MAX_CHUNKS=400 — cap chunks per slug for runtime (default 400).
 *
 * Output: tools/appendix-structured-gap-report.json + stdout summary.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const REPORT_OUT = path.join(ROOT, "tools/appendix-structured-gap-report.json");

const ONLY_SLUGS = (process.env.AUDIT_APPENDIX_ONLY_SLUGS || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
const FUZZY = process.env.AUDIT_APPENDIX_FUZZY === "1";
const FAIL_ON_GAP = process.env.AUDIT_APPENDIX_FAIL_ON_GAP === "1";
const MIN_CHUNK = Number(process.env.AUDIT_APPENDIX_MIN_CHUNK || 80);
const MAX_CHUNKS = Number(process.env.AUDIT_APPENDIX_MAX_CHUNKS || 400);

/** Same set as audit-lib-data-vs-documents.mjs — template-only slugs. */
const SKIP_APPENDIX_SLUGS = new Set([
  "all-legal-documents",
  "commercial-rental-agreement",
  "experience-letter",
  "appointment-letter",
  "affidavit-format",
  "salary-slip",
  "resignation-letter",
  "legal-heir-certificate",
  "relieving-letter",
  "partnership-deed",
  "gst-invoice",
  "authorised-signatory-in-gst",
  "delivery-challan",
  "offer-letter",
  "rent-receipt",
  "non-disclosure-agreement-nda",
  "shareholders-agreement",
  "memorandum-of-understanding",
  "share-purchase-agreement",
  "power-of-attorney",
  "rental-agreement",
  "employment-agreement",
  "esop",
]);

function norm(s) {
  return s
    .replace(/\\'/g, "'")
    .replace(/\*\*/g, "")
    .replace(/\s+/g, " ")
    .replace(/[‘’]/g, "'")
    .replace(/[""]/g, '"')
    .trim()
    .toLowerCase();
}

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), "utf8");
}

function exists(rel) {
  return fs.existsSync(path.join(ROOT, rel));
}

function parseNavBackedSlugs(src) {
  const marker = "const NAV_DOCUMENT_BACKED_DEFS";
  const start = src.indexOf(marker);
  if (start < 0) return [];
  const slice = src.slice(start);
  const out = [];
  const re = /^  \[\s*\n?\s*"([^"]+)"/gm;
  let m;
  while ((m = re.exec(slice)) !== null) out.push(m[1]);
  return out;
}

/** Keys inside `export const Name = { ... };` (line-based). */
function parseExportedRecordKeys(src, constName) {
  const lines = src.split("\n");
  const keys = [];
  let i = 0;
  while (i < lines.length && !lines[i].includes(`export const ${constName}`)) i++;
  if (i >= lines.length) throw new Error(`${constName} not found`);
  i++;
  let depth = 1;
  for (; i < lines.length; i++) {
    const line = lines[i];
    const open = (line.match(/\{/g) || []).length;
    const close = (line.match(/\}/g) || []).length;
    depth += open - close;
    if (depth <= 0) break;
    const m = line.match(/^\s*(?:"([^"]+)"|([a-zA-Z_][a-zA-Z0-9_]*))\s*:/);
    if (m && !/^\s*\.\.\./.test(line)) {
      keys.push(m[1] || m[2]);
    }
  }
  return keys;
}

function segmentsForAppendix(fnName, inner) {
  const strs = [];
  const sre = /"([^"]+)"/g;
  let sm;
  while ((sm = sre.exec(inner)) !== null) strs.push(sm[1]);
  if (fnName === "reg") return ["registration", ...strs];
  if (fnName === "corp") return ["compliance", "corporate", ...strs];
  if (fnName === "cat") return ["categories", ...strs];
  return strs;
}

function parseAppendixMap(pathsSrc) {
  const aliasSegments = new Map();
  const aliasDef = /^const\s+(\w+)\s*=\s*cat\("([^"]+)"\)\s*;/gm;
  let am;
  while ((am = aliasDef.exec(pathsSrc)) !== null) {
    aliasSegments.set(am[1], segmentsForAppendix("cat", `"${am[2]}"`));
  }

  const lines = pathsSrc.split("\n");
  let i = 0;
  while (i < lines.length && !lines[i].includes("SERVICE_APPENDIX_SEGMENTS")) i++;
  while (i < lines.length && !lines[i].includes("= {")) i++;
  i++;
  let depth = 1;
  let buf = "";
  for (; i < lines.length; i++) {
    const line = lines[i];
    const open = (line.match(/\{/g) || []).length;
    const close = (line.match(/\}/g) || []).length;
    depth += open - close;
    if (depth <= 0) break;
    buf += line + "\n";
  }
  const block = buf;
  const map = new Map();
  const keyRe =
    /(?:^|\n)\s*(?:"([^"]+)"|([a-zA-Z_][a-zA-Z0-9_]*))\s*:\s*(reg|corp|cat)\(([\s\S]*?)\)\s*,/g;
  let m;
  while ((m = keyRe.exec(block)) !== null) {
    const key = m[1] || m[2];
    map.set(key, segmentsForAppendix(m[3], m[4]));
  }
  const keyReVar =
    /(?:^|\n)\s*(?:"([^"]+)"|([a-zA-Z_][a-zA-Z0-9_]*))\s*:\s*(\w+)\s*,/g;
  while ((m = keyReVar.exec(block)) !== null) {
    const key = m[1] || m[2];
    const v = m[3];
    if (v === "reg" || v === "corp" || v === "cat") continue;
    const segs = aliasSegments.get(v);
    if (segs) map.set(key, segs);
  }
  return map;
}

function parseImports(indexSrc) {
  const map = new Map();
  const re = /import\s+\{([\s\S]*?)\}\s+from\s+["']\.\/([^"']+)["']/g;
  let m;
  while ((m = re.exec(indexSrc)) !== null) {
    const rel = m[2];
    const body = m[1].replace(/\n/g, " ");
    for (const part of body.split(",")) {
      const name = part.trim().split(/\s+as\s+/)[0].trim();
      if (name && /^[A-Za-z_]/.test(name)) map.set(name, rel);
    }
  }
  return map;
}

function extractServiceDataBody(indexSrc) {
  const marker = "export const serviceData = ";
  const start = indexSrc.indexOf(marker);
  if (start === -1) return "";
  const open = indexSrc.indexOf("{", start);
  const range = braceRange(indexSrc, open);
  if (!range) return "";
  return indexSrc.slice(range.start + 1, range.end);
}

function braceRange(src, openIdx) {
  if (src[openIdx] !== "{") return null;
  let depth = 0;
  let i = openIdx;
  while (i < src.length) {
    const c = src[i];
    const n = src[i + 1];
    if (c === '"' || c === "'" || c === "`") {
      i = skipString(src, i);
      continue;
    }
    if (c === "/" && n === "/") {
      i += 2;
      while (i < src.length && src[i] !== "\n") i++;
      continue;
    }
    if (c === "/" && n === "*") {
      i += 2;
      while (i < src.length - 1 && !(src[i] === "*" && src[i + 1] === "/"))
        i++;
      i += 2;
      continue;
    }
    if (c === "{") depth++;
    if (c === "}") {
      depth--;
      if (depth === 0) return { start: openIdx, end: i };
    }
    i++;
  }
  return null;
}

function skipString(src, i) {
  const q = src[i];
  let j = i + 1;
  let esc = false;
  while (j < src.length) {
    if (esc) {
      esc = false;
      j++;
      continue;
    }
    if (src[j] === "\\") {
      esc = true;
      j++;
      continue;
    }
    if (src[j] === q) return j + 1;
    j++;
  }
  return src.length;
}

function parseServiceDataSlugSymbol(indexSrc) {
  const body = extractServiceDataBody(indexSrc);
  const slugToSymbol = new Map();
  const re =
    /(?:"([^"]+)"|([a-zA-Z_][a-zA-Z0-9_]*))\s*:\s*\n?\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*(?:,|$)/gm;
  let m;
  while ((m = re.exec(body)) !== null) {
    if (m[0].trim().startsWith("...")) continue;
    const slug = m[1] || m[2];
    const sym = m[3];
    slugToSymbol.set(slug, sym);
  }
  return slugToSymbol;
}

function parseExtraComplianceSlugs(extendedSrc) {
  const start = extendedSrc.indexOf("EXTRA_COMPLIANCE_PAGES");
  const open = extendedSrc.indexOf("{", start);
  const range = braceRange(extendedSrc, open);
  if (!range) return new Map();
  const body = extendedSrc.slice(range.start + 1, range.end);
  const map = new Map();
  const re = /"([\w-]+)"\s*:\s*\n?\s*([a-zA-Z_][a-zA-Z0-9_]*)/g;
  let m;
  while ((m = re.exec(body)) !== null) {
    map.set(m[1], m[2]);
  }
  return map;
}

function modulePathForSymbol(symbol, importMap, extraSymbols) {
  if (importMap.has(symbol)) return importMap.get(symbol);
  if (extraSymbols.has(symbol)) return "compliance/extended-compliance-services";
  return null;
}

/** Collect double-quoted, single-quoted, and template literals (skip templates with ${}). */
function collectStringLiterals(ts, minLen = 16) {
  const body = ts
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/[^\n]*/g, "");
  const out = [];
  let i = 0;
  while (i < body.length) {
    const c = body[i];
    if (c === "`") {
      let j = i + 1;
      let esc = false;
      while (j < body.length) {
        if (esc) {
          esc = false;
          j++;
          continue;
        }
        if (body[j] === "\\") {
          esc = true;
          j++;
          continue;
        }
        if (body[j] === "`") {
          const t = body.slice(i + 1, j);
          if (t.length >= minLen && !t.includes("${")) out.push(t);
          i = j + 1;
          break;
        }
        j++;
      }
      if (j >= body.length) i++;
      continue;
    }
    if (c === '"' || c === "'") {
      const q = c;
      let j = i + 1;
      let esc = false;
      while (j < body.length) {
        if (esc) {
          esc = false;
          j++;
          continue;
        }
        if (body[j] === "\\") {
          esc = true;
          j++;
          continue;
        }
        if (body[j] === q) {
          const t = body.slice(i + 1, j);
          if (t.length >= minLen) out.push(t);
          i = j + 1;
          break;
        }
        j++;
      }
      if (j >= body.length) i++;
      continue;
    }
    i++;
  }
  return [...new Set(out)];
}

function literalsBlob(ts, minLen = 16) {
  return norm(collectStringLiterals(ts, minLen).join("\n"));
}

/**
 * Extended compliance services: one export + `...fooExtras` spreads in
 * compliance-extended-article-bodies.ts — whole-file literal scan would mix slugs.
 */
function extractExtraComplianceStructuredNorm(
  extendedSrc,
  articleBodiesSrc,
  exportSymbol
) {
  const esc = exportSymbol.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(
    `export const ${esc}\\s*:\\s*ServiceData\\s*=\\s*(?:\\n\\s*)?buildComplianceServiceData\\(\\{`,
    "m"
  );
  const m = extendedSrc.match(re);
  if (!m) return norm("");

  const braceStart = m.index + m[0].length - 1;
  const range = braceRange(extendedSrc, braceStart);
  if (!range) return norm("");
  const inner = extendedSrc.slice(range.start + 1, range.end);
  const chunks = [literalsBlob(inner, 8)];

  const spreadRe = /\.\.\.(\w+)/g;
  let sm;
  while ((sm = spreadRe.exec(inner)) !== null) {
    const spreadName = sm[1];
    const escS = spreadName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const reSpread = new RegExp(
      `export const ${escS}\\s*(?::\\s*Partial<ServiceData>)?\\s*=\\s*\\{`,
      "m"
    );
    const ms = articleBodiesSrc.match(reSpread);
    if (!ms) continue;
    const open = ms.index + ms[0].length - 1;
    const r2 = braceRange(articleBodiesSrc, open);
    if (!r2) continue;
    const spreadInner = articleBodiesSrc.slice(r2.start + 1, r2.end);
    chunks.push(literalsBlob(spreadInner, 8));
  }
  return norm(chunks.join("\n"));
}

/** Split thematic category markdown that concatenates many services (…\n\nOVERVIEW\n\n…). */
function extractOverviewSections(md) {
  const t = md.replace(/\r\n/g, "\n");
  const marker = "\n\nOVERVIEW\n\n";
  const sections = [];
  let pos = 0;
  while (true) {
    const ov = t.indexOf(marker, pos);
    if (ov === -1) break;
    const before = t.slice(0, ov).trim();
    const hm = before.match(/(?:^|\n\n)([^\n]+)\s*$/);
    const heading = hm ? hm[1].trim() : "";
    const afterOv = ov + marker.length;
    const rest = t.slice(afterOv);
    const nm = rest.match(/\n\n[^\n]+\n\nOVERVIEW\n\n/);
    const bodyEnd = nm ? afterOv + nm.index : t.length;
    const body = t.slice(afterOv, bodyEnd);
    sections.push({
      heading,
      text: `${heading}\n\nOVERVIEW\n\n${body}`.trim(),
    });
    pos = bodyEnd;
  }
  return sections;
}

function tokenSet(s) {
  return new Set(
    norm(s)
      .split(/[^a-z0-9]+/)
      .filter((x) => x.length > 2)
  );
}

function headingTitleOverlap(heading, tsTitle) {
  const a = tokenSet(heading);
  const b = tokenSet(tsTitle);
  if (a.size === 0 || b.size === 0) return 0;
  let inter = 0;
  for (const x of a) {
    if (b.has(x)) inter++;
  }
  return inter / Math.min(a.size, b.size);
}

/** Share of `tsTitle` tokens (len>2) that appear in `heading` — helps when titles differ in wording. */
function tsTokensInHeadingRatio(heading, tsTitle) {
  const ht = tokenSet(heading);
  const tt = [...tokenSet(tsTitle)];
  if (tt.length === 0) return 0;
  let hits = 0;
  for (const x of tt) {
    if (ht.has(x)) hits++;
  }
  return hits / tt.length;
}

function sectionMatchScore(heading, tsTitle) {
  return Math.max(
    headingTitleOverlap(heading, tsTitle),
    tsTokensInHeadingRatio(heading, tsTitle)
  );
}

/**
 * Shared `categories/*.md` appendices contain multiple services; slice to the OVERVIEW
 * block whose heading best matches `ServiceData.title`.
 */
function sliceCategoryAppendix(md, tsTitle) {
  const sections = extractOverviewSections(md);
  if (sections.length <= 1) {
    return {
      text: md,
      appendixSlice: "full",
      matchedHeading: sections[0]?.heading ?? null,
      sectionScore: sections.length === 1 ? 1 : 0,
    };
  }
  if (!tsTitle?.trim()) {
    return { text: md, appendixSlice: "fullNoTitle", matchedHeading: null, sectionScore: 0 };
  }
  let best = sections[0];
  let score = sectionMatchScore(best.heading, tsTitle);
  for (let i = 1; i < sections.length; i++) {
    const sc = sectionMatchScore(sections[i].heading, tsTitle);
    if (sc > score) {
      score = sc;
      best = sections[i];
    }
  }
  if (score < 0.2) {
    return {
      text: md,
      appendixSlice: "fullLowScore",
      matchedHeading: best?.heading ?? null,
      sectionScore: score,
    };
  }
  return {
    text: best.text,
    appendixSlice: "categorySection",
    matchedHeading: best.heading,
    sectionScore: score,
  };
}

function parseTitleFromServiceTs(ts) {
  const m = ts.match(/\btitle:\s*"((?:[^"\\]|\\.)*)"/);
  if (m) {
    try {
      return JSON.parse(`"${m[1]}"`);
    } catch {
      return m[1].replace(/\\"/g, '"');
    }
  }
  const m2 = ts.match(/\btitle:\s*`([^`]+)`/s);
  return m2 ? m2[1].trim().split("\n")[0].trim() : "";
}

function parseTitleFromExtendedExport(extendedSrc, exportSymbol) {
  const esc = exportSymbol.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(
    `export const ${esc}\\s*:\\s*ServiceData\\s*=\\s*(?:\\n\\s*)?buildComplianceServiceData\\(\\{`,
    "m"
  );
  const m = extendedSrc.match(re);
  if (!m) return "";
  const braceStart = m.index + m[0].length - 1;
  const range = braceRange(extendedSrc, braceStart);
  if (!range) return "";
  const inner = extendedSrc.slice(range.start + 1, range.end);
  return parseTitleFromServiceTs(inner);
}

function getNavStubMeta(navSrc, slug) {
  const esc = slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(
    `\\[\\s*\\n?\\s*"${esc}"\\s*,\\s*\\n?\\s*"([^"]+)"\\s*,\\s*\\n?\\s*\\[\\s*\\n?\\s*"([^"]+)"\\s*,\\s*\\n?\\s*"([^"]+)"\\s*\\]`,
    "m"
  );
  const m = navSrc.match(re);
  if (!m) return null;
  return { title: m[1], section: m[2], subSection: m[3] };
}

function parseNavStubStructuredBlob(navSrc, slug) {
  const meta = getNavStubMeta(navSrc, slug);
  if (!meta) return norm("");
  const { title, section, subSection } = meta;
  const note =
    "The **verbatim** text from our processed documentation library is shown below under **Full source text**.";
  const parts = [
    title,
    "Home",
    section,
    subSection,
    title,
    `${title}. Verbatim source documentation is included on this page.`,
    `**${title}**\n\n${note}`,
    note,
  ];
  return norm(parts.join("\n"));
}

function appendixChunks(md) {
  const raw = md.replace(/\r\n/g, "\n").trim();
  return raw
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => {
      if (p.length < MIN_CHUNK) return false;
      if (/^#{1,6}\s/m.test(p) && !p.includes("\n")) return false;
      if (/^#{1,6}\s+\S+$/m.test(p)) return false;
      if (/\*\*note:\*\*/i.test(p)) return false;
      if (/`DOCUMENTS\//i.test(p)) return false;
      if (/Word document/i.test(p)) return false;
      return true;
    })
    .slice(0, MAX_CHUNKS);
}

function tokenCoverage(chunkNorm, blobNorm) {
  const tokens = chunkNorm
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length >= 3);
  if (tokens.length === 0) return 1;
  let hits = 0;
  for (const t of tokens) {
    if (blobNorm.includes(t)) hits++;
  }
  return hits / tokens.length;
}

function chunkCovered(chunk, blobNorm, fuzzy) {
  const n = norm(chunk);
  if (n.length < 60) return true;
  if (blobNorm.includes(n)) return true;
  if (fuzzy && tokenCoverage(n, blobNorm) >= 0.85) return true;
  return false;
}

function main() {
  const indexSrc = read("src/lib/data/services/index.ts");
  const navSrc = read("src/lib/data/services/nav-document-backed-pages.ts");
  const pathsSrc = read("src/lib/documents/serviceAppendixPaths.ts");
  const extendedSrc = read("src/lib/data/services/compliance/extended-compliance-services.ts");
  const articleBodiesSrc = read(
    "src/lib/data/services/compliance/compliance-extended-article-bodies.ts"
  );

  const serviceKeysAll = [
    ...new Set([
      ...parseExportedRecordKeys(indexSrc, "serviceData"),
      ...parseExportedRecordKeys(extendedSrc, "EXTRA_COMPLIANCE_PAGES"),
      ...parseNavBackedSlugs(navSrc),
    ]),
  ];
  const serviceKeys = ONLY_SLUGS.length
    ? serviceKeysAll.filter((k) => ONLY_SLUGS.includes(k))
    : serviceKeysAll;
  const appendixMap = parseAppendixMap(pathsSrc);
  const importMap = parseImports(indexSrc);
  const slugToSymbol = parseServiceDataSlugSymbol(indexSrc);
  const extraMap = parseExtraComplianceSlugs(extendedSrc);
  const extraSymbols = new Set(extraMap.values());
  const navSet = new Set(parseNavBackedSlugs(navSrc));

  if (ONLY_SLUGS.length) {
    console.log(
      `AUDIT_APPENDIX_ONLY_SLUGS: filtering to ${serviceKeys.length} slug(s) (requested ${ONLY_SLUGS.length})`
    );
  }

  const report = {
    generatedAt: new Date().toISOString(),
    fuzzy: FUZZY,
    minChunkLen: MIN_CHUNK,
    maxChunksPerSlug: MAX_CHUNKS,
    slugs: [],
    summary: {
      totalSlugs: 0,
      skipped: 0,
      missingFile: 0,
      unknownModule: 0,
      nonStubWithGapsStrict: 0,
      nonStubWithGapsFuzzy: 0,
      categoryAppendixFullDocFallback: 0,
    },
    triageNotes: {
      strictMode:
        "A miss means the normalized appendix chunk text does not appear verbatim in structured TS string literals (overview, FAQs, lists, etc.).",
      fuzzyHint:
        "Each slug entry includes fuzzyMissingCount (85% token coverage) even when running with fuzzy=0 — use it to spot paraphrase-heavy gaps.",
      categoryFiles:
        "Shared categories/*.md files are sliced by OVERVIEW section heading vs ServiceData.title; if no heading scores ≥0.2, the full file is used (see appendixSlice: fullLowScore).",
    },
  };

  const stdoutLines = [];

  for (const slug of serviceKeys.sort()) {
    report.summary.totalSlugs++;
    if (SKIP_APPENDIX_SLUGS.has(slug)) {
      report.summary.skipped++;
      report.slugs.push({
        slug,
        skipped: true,
        reason: "SKIP_APPENDIX_SLUGS",
      });
      continue;
    }

    const segs = appendixMap.get(slug);
    if (!segs || !segs.length) {
      report.slugs.push({
        slug,
        error: "no appendix mapping",
      });
      continue;
    }

    const mdRel = path.join("src/content/documents", ...segs);
    const mdPath = path.join(ROOT, mdRel);
    if (!fs.existsSync(mdPath)) {
      report.summary.missingFile++;
      report.slugs.push({ slug, error: "appendix file missing", mdRel });
      continue;
    }

    const mdRaw = fs.readFileSync(mdPath, "utf8");
    const navBackedStub = navSet.has(slug);

    let structuredNorm;
    let tsModuleRel;
    let tsTitle = "";
    let appendixSliceMeta = {
      appendixSlice: "full",
      matchedHeading: null,
      sectionScore: 0,
    };

    const isCategoryAppendix = segs[0] === "categories";

    if (navBackedStub) {
      structuredNorm = parseNavStubStructuredBlob(navSrc, slug);
      tsModuleRel = "src/lib/data/services/nav-document-backed-pages.ts";
      tsTitle = getNavStubMeta(navSrc, slug)?.title ?? "";
    } else {
      let mod = null;
      let exportSymbol = null;
      if (extraMap.has(slug)) {
        exportSymbol = extraMap.get(slug);
        mod = modulePathForSymbol(exportSymbol, importMap, extraSymbols);
      } else {
        const sym = slugToSymbol.get(slug);
        if (sym) mod = modulePathForSymbol(sym, importMap, extraSymbols);
      }
      if (!mod) {
        report.summary.unknownModule++;
        report.slugs.push({ slug, error: "could not resolve TS module", navBackedStub });
        continue;
      }
      tsModuleRel = path.join("src/lib/data/services", mod + ".ts");
      const tsPath = path.join(ROOT, tsModuleRel);
      if (!exists(tsModuleRel)) {
        report.slugs.push({ slug, error: "ts file missing", tsModuleRel });
        continue;
      }
      if (
        extraMap.has(slug) &&
        mod === "compliance/extended-compliance-services" &&
        exportSymbol
      ) {
        structuredNorm = extractExtraComplianceStructuredNorm(
          extendedSrc,
          articleBodiesSrc,
          exportSymbol
        );
        tsTitle = parseTitleFromExtendedExport(extendedSrc, exportSymbol);
      } else {
        const ts = fs.readFileSync(tsPath, "utf8");
        structuredNorm = literalsBlob(ts, 16);
        tsTitle = parseTitleFromServiceTs(ts);
      }
    }

    let mdForChunks = mdRaw;
    if (isCategoryAppendix && tsTitle.trim()) {
      const sliced = sliceCategoryAppendix(mdRaw, tsTitle);
      mdForChunks = sliced.text;
      appendixSliceMeta = {
        appendixSlice: sliced.appendixSlice,
        matchedHeading: sliced.matchedHeading,
        sectionScore: sliced.sectionScore,
      };
    }

    const chunks = appendixChunks(mdForChunks);

    const missing = [];
    for (const ch of chunks) {
      if (!chunkCovered(ch, structuredNorm, FUZZY)) {
        missing.push(ch.slice(0, 220).replace(/\s+/g, " "));
      }
    }

    let fuzzyMissingCount = 0;
    if (!FUZZY) {
      for (const ch of chunks) {
        if (!chunkCovered(ch, structuredNorm, true)) fuzzyMissingCount++;
      }
    } else {
      fuzzyMissingCount = missing.length;
    }

    if (
      isCategoryAppendix &&
      appendixSliceMeta.appendixSlice === "fullLowScore"
    ) {
      report.summary.categoryAppendixFullDocFallback++;
    }

    const entry = {
      slug,
      navBackedStub,
      appendixFile: mdRel,
      tsModule: tsModuleRel,
      serviceTitle: tsTitle || null,
      appendixSlice: appendixSliceMeta.appendixSlice,
      appendixMatchedHeading: appendixSliceMeta.matchedHeading,
      appendixSectionScore: appendixSliceMeta.sectionScore,
      chunkCount: chunks.length,
      missingCount: missing.length,
      fuzzyMissingCount,
      missingSamples: missing.slice(0, 8),
    };
    report.slugs.push(entry);

    if (!navBackedStub && fuzzyMissingCount > 0) {
      report.summary.nonStubWithGapsFuzzy++;
    }

    if (!navBackedStub && missing.length && !FUZZY) {
      report.summary.nonStubWithGapsStrict++;
      stdoutLines.push(
        `${slug}: ${missing.length} appendix chunk(s) not found in structured TS (${mdRel})`
      );
    } else if (!navBackedStub && missing.length && FUZZY) {
      stdoutLines.push(
        `${slug}: ${missing.length} chunk(s) still uncovered with fuzzy=1`
      );
    }
  }

  let fuzzyClearsStrict = 0;
  for (const e of report.slugs) {
    if (
      e.missingCount > 0 &&
      e.fuzzyMissingCount === 0 &&
      !e.navBackedStub &&
      !e.skipped &&
      !e.error
    ) {
      fuzzyClearsStrict++;
    }
  }
  report.summary.nonStubStrictGapsClearedByFuzzy = fuzzyClearsStrict;

  fs.writeFileSync(REPORT_OUT, JSON.stringify(report, null, 2), "utf8");

  console.log(
    `appendix-vs-structured: wrote ${path.relative(ROOT, REPORT_OUT)} (fuzzy=${FUZZY})`
  );
  console.log(
    `summary: slugs=${report.summary.totalSlugs} skipped=${report.summary.skipped} missingMd=${report.summary.missingFile} unknownModule=${report.summary.unknownModule} nonStubGapsStrict=${report.summary.nonStubWithGapsStrict} nonStubResidualFuzzy=${report.summary.nonStubWithGapsFuzzy} categoryFullDocFallback=${report.summary.categoryAppendixFullDocFallback} strictGapsClearedByFuzzy=${report.summary.nonStubStrictGapsClearedByFuzzy}`
  );
  if (stdoutLines.length) {
    console.log("\nNon-stub slugs with gaps (first lines):");
    for (const line of stdoutLines.slice(0, 40)) console.log("  ", line);
    if (stdoutLines.length > 40) console.log(`  ... and ${stdoutLines.length - 40} more`);
  }

  if (FAIL_ON_GAP && !FUZZY && report.summary.nonStubWithGapsStrict > 0) {
    console.error(
      "\nAUDIT_APPENDIX_FAIL_ON_GAP=1: failing due to non–nav-backed strict gaps."
    );
    process.exit(1);
  }
}

main();
