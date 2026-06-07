/**
 * Audit: `src/lib/data` service wiring vs root DOCUMENTS (via DOCUMENTS_extracted).
 *
 * 1) Category markdown: DOCUMENTS_extracted vs src/content/documents (normalized equality).
 * 2) Registration slices: paragraphs in src/content/documents/registration/*.md must appear
 *    in DOCUMENTS_extracted/Registration/company-registration.md.
 * 3) Every appendix file used on the site must be traceable to DOCUMENTS_extracted text
 *    (registration + corporate slices vs master docs; category files vs paired extracts).
 * 4) DOCUMENTS/*.zip docx entries (including Documentations.zip) vs DOCUMENTS_extracted/*.md where applicable.
 * 5) Orphan TS modules under lib/data/services not imported from index.ts.
 * 6) Free Legal Documents.docx vs free-legal-documents.ts (python extract).
 *
 * Run: node tools/audit-lib-data-vs-documents.mjs
 * Optional: AUDIT_TS_APPENDIX=1 — also flag long TS strings not found in appendix MD (noisy).
 * Optional: AUDIT_STRICT_DOC=1 — appendix paragraphs not found in TS (very noisy).
 * Optional: AUDIT_ARTICLE_BODIES=1 — diff compliance-extended-article-bodies.ts vs category MDs (paraphrase-heavy).
 * Optional: AUDIT_FREE_LEGAL_STRICT=1 — diff free-legal-documents.ts vs extracted Free Legal Documents.docx.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const CONTENT = path.join(ROOT, "src/content/documents");
const LIB_SERVICES = path.join(ROOT, "src/lib/data/services");
const DOCX_FREE_LEGAL = path.join(
  ROOT,
  "DOCUMENTS/Documentations/Free Legal Documents.docx"
);

/** docx path inside zip -> expected markdown under DOCUMENTS_extracted */
const ZIP_DOCX_TO_EXTRACTED = [
  [
    "DOCUMENTS/Compliance.zip",
    [
      [
        "Compliance/Audit & Due Diligence.docx",
        "DOCUMENTS_extracted/Compliance/audit-due-diligence.md",
      ],
      [
        "Compliance/Corporate Restructuring Compliance.docx",
        "DOCUMENTS_extracted/Compliance/corporate-restructuring-compliance.md",
      ],
      ["Compliance/Corporate Service.docx", "DOCUMENTS_extracted/Compliance/corporate-service.md"],
      ["Compliance/SEBI Compliance.docx", "DOCUMENTS_extracted/Compliance/sebi-compliance.md"],
    ],
  ],
  [
    "DOCUMENTS/Registration.zip",
    [
      [
        "Registration/Company Registration.docx",
        "DOCUMENTS_extracted/Registration/company-registration.md",
      ],
      [
        "Registration/Intellectual Property Services.docx",
        "DOCUMENTS_extracted/Registration/intellectual-property-services.md",
      ],
      [
        "Registration/Labour Law Services.docx",
        "DOCUMENTS_extracted/Registration/labour-law-services.md",
      ],
      [
        "Registration/Legal Registration.docx",
        "DOCUMENTS_extracted/Registration/legal-registration.md",
      ],
      [
        "Registration/Regulatory License.docx",
        "DOCUMENTS_extracted/Registration/regulatory-license.md",
      ],
    ],
  ],
  [
    "DOCUMENTS/MCA.zip",
    [
      [
        "MCA/Annually & Half-Yearly Complance.docx",
        "DOCUMENTS_extracted/MCA/annually-half-yearly-complance.md",
      ],
      ["MCA/Company Complance.docx", "DOCUMENTS_extracted/MCA/company-complance.md"],
      [
        "MCA/Legal Business Transformations.docx",
        "DOCUMENTS_extracted/MCA/legal-business-transformations.md",
      ],
      ["MCA/MCA Services.docx", "DOCUMENTS_extracted/MCA/mca-services.md"],
      [
        "MCA/Share Management Solutions.docx",
        "DOCUMENTS_extracted/MCA/share-management-solutions.md",
      ],
      [
        "MCA/Special Compliance Services.docx",
        "DOCUMENTS_extracted/MCA/special-compliance-services.md",
      ],
    ],
  ],
  [
    "DOCUMENTS/Taxation.zip",
    [
      ["Taxation/GST.docx", "DOCUMENTS_extracted/Taxation/gst.md"],
      ["Taxation/Income Tax.docx", "DOCUMENTS_extracted/Taxation/income-tax.md"],
      [
        "Taxation/Regulatory Return Filing.docx",
        "DOCUMENTS_extracted/Taxation/regulatory-return-filing.md",
      ],
    ],
  ],
  [
    "DOCUMENTS/Documentations.zip",
    [["Documentations/Free Legal Documents.docx", null]],
  ],
];

const STRICT_DOC = process.env.AUDIT_STRICT_DOC === "1";
const AUDIT_TS_APPENDIX = process.env.AUDIT_TS_APPENDIX === "1";
const AUDIT_ARTICLE_BODIES = process.env.AUDIT_ARTICLE_BODIES === "1";
const AUDIT_FREE_LEGAL_STRICT = process.env.AUDIT_FREE_LEGAL_STRICT === "1";

/** Slugs with no appendix MD (templates only). */
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

/** Known mirrors: DOCUMENTS_extracted relative -> src/content/documents relative */
const CATEGORY_MIRROR_PAIRS = [
  [
    "DOCUMENTS_extracted/Registration/company-registration.md",
    "src/content/documents/categories/company-registration.md",
  ],
  [
    "DOCUMENTS_extracted/Compliance/corporate-service.md",
    "src/content/documents/categories/corporate-service.md",
  ],
  [
    "DOCUMENTS_extracted/Compliance/sebi-compliance.md",
    "src/content/documents/categories/sebi-compliance.md",
  ],
  [
    "DOCUMENTS_extracted/Compliance/audit-due-diligence.md",
    "src/content/documents/categories/audit-due-diligence.md",
  ],
  [
    "DOCUMENTS_extracted/Compliance/corporate-restructuring-compliance.md",
    "src/content/documents/categories/corporate-restructuring-compliance.md",
  ],
  [
    "DOCUMENTS_extracted/MCA/company-complance.md",
    "src/content/documents/categories/company-compliance.md",
  ],
  [
    "DOCUMENTS_extracted/MCA/annually-half-yearly-complance.md",
    "src/content/documents/categories/annual-half-yearly-compliance.md",
  ],
  [
    "DOCUMENTS_extracted/MCA/mca-services.md",
    "src/content/documents/categories/mca-services.md",
  ],
  [
    "DOCUMENTS_extracted/MCA/special-compliance-services.md",
    "src/content/documents/categories/special-compliance-services.md",
  ],
  [
    "DOCUMENTS_extracted/MCA/share-management-solutions.md",
    "src/content/documents/categories/share-management-solutions.md",
  ],
  [
    "DOCUMENTS_extracted/MCA/legal-business-transformations.md",
    "src/content/documents/categories/legal-business-transformations.md",
  ],
  [
    "DOCUMENTS_extracted/Registration/regulatory-license.md",
    "src/content/documents/categories/regulatory-license.md",
  ],
  [
    "DOCUMENTS_extracted/Registration/legal-registration.md",
    "src/content/documents/categories/legal-registration.md",
  ],
  [
    "DOCUMENTS_extracted/Registration/labour-law-services.md",
    "src/content/documents/categories/labour-law-services.md",
  ],
  [
    "DOCUMENTS_extracted/Registration/intellectual-property-services.md",
    "src/content/documents/categories/intellectual-property-services.md",
  ],
  [
    "DOCUMENTS_extracted/Taxation/gst.md",
    "src/content/documents/categories/gst.md",
  ],
  [
    "DOCUMENTS_extracted/Taxation/income-tax.md",
    "src/content/documents/categories/income-tax.md",
  ],
  [
    "DOCUMENTS_extracted/Taxation/regulatory-return-filing.md",
    "src/content/documents/categories/regulatory-return-filing.md",
  ],
];

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

/** True if a sliding window of `needle` appears in `haystack` (both normalized). */
function normTextAnchoredInHaystack(haystackNorm, needleNorm, win = 48) {
  if (needleNorm.length <= win) return haystackNorm.includes(needleNorm);
  const step = Math.max(6, Math.floor(win / 5));
  for (let i = 0; i + win <= needleNorm.length; i += step) {
    if (haystackNorm.includes(needleNorm.slice(i, i + win))) return true;
  }
  return haystackNorm.includes(needleNorm.slice(0, win));
}

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), "utf8");
}

function exists(rel) {
  return fs.existsSync(path.join(ROOT, rel));
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

function parseAppendixMap() {
  const full = read("src/lib/documents/serviceAppendixPaths.ts");
  const lines = full.split("\n");
  let i = 0;
  while (i < lines.length && !lines[i].includes("SERVICE_APPENDIX_SEGMENTS")) i++;
  while (i < lines.length && !lines[i].includes("= {")) i++;
  i++;
  let depth = 1;
  let buf = "";
  for (; i < lines.length; i++) {
    const line = lines[i];
    depth += (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
    if (depth <= 0) break;
    buf += line + "\n";
  }
  const block = buf;
  const keyRe =
    /(?:^|\n)\s*(?:"([^"]+)"|([a-zA-Z_][a-zA-Z0-9_]*))\s*:\s*(reg|corp|cat)\(([\s\S]*?)\)\s*,/g;
  const map = new Map();
  let m;
  while ((m = keyRe.exec(block)) !== null) {
    const key = m[1] || m[2];
    map.set(key, segmentsForAppendix(m[3], m[4]));
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

function extractLongStrings(ts, minLen = 48) {
  const body = ts
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/[^\n]*/g, "");
  const out = [];
  let i = 0;
  while (i < body.length) {
    if (body[i] === "`") {
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
    if (body[i] === '"') {
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
        if (body[j] === '"') {
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

function modulePathForSymbol(symbol, importMap, extraSymbols) {
  if (importMap.has(symbol)) return importMap.get(symbol);
  if (extraSymbols.has(symbol)) return "compliance/extended-compliance-services";
  return null;
}

function collectTsFiles(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (name === "index.ts") continue;
    const st = fs.statSync(p);
    if (st.isDirectory()) collectTsFiles(p, acc);
    else if (name.endsWith(".ts")) acc.push(p);
  }
  return acc;
}

function auditCategoryMirrors(report) {
  for (const [a, b] of CATEGORY_MIRROR_PAIRS) {
    if (!exists(a)) {
      report.mirrorMissing.push(a);
      continue;
    }
    if (!exists(b)) {
      report.mirrorMissing.push(b);
      continue;
    }
    const na = norm(read(a));
    const nb = norm(read(b));
    if (na !== nb) {
      let idx = 0;
      const lim = Math.min(na.length, nb.length);
      while (idx < lim && na[idx] === nb[idx]) idx++;
      report.mirrorMismatches.push({
        extracted: a,
        content: b,
        lenExtracted: na.length,
        lenContent: nb.length,
        firstDiffAt: idx,
        snippetExtracted: na.slice(idx, idx + 160),
        snippetContent: nb.slice(idx, idx + 160),
      });
    }
  }
}

function auditRegistrationSlices(report) {
  const masterRel = "DOCUMENTS_extracted/Registration/company-registration.md";
  if (!exists(masterRel)) {
    report.registrationMasterMissing = masterRel;
    return;
  }
  const masterN = norm(read(masterRel));
  const regDir = path.join(CONTENT, "registration");
  if (!fs.existsSync(regDir)) return;
  for (const name of fs.readdirSync(regDir)) {
    if (!name.endsWith(".md")) continue;
    const slice = fs.readFileSync(path.join(regDir, name), "utf8");
    const paras = slice
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter((p) => p.length > 80 && !p.startsWith("#"));
    let missing = 0;
    const samples = [];
    for (const p of paras.slice(0, 12)) {
      const np = norm(p);
      if (np.length < 60) continue;
      if (!masterN.includes(np)) {
        missing++;
        if (samples.length < 3) samples.push(p.slice(0, 120).replace(/\n/g, " "));
      }
    }
    if (missing > 0) {
      report.registrationSliceGaps.push({
        file: `src/content/documents/registration/${name}`,
        paragraphsNotInMasterExtracted: missing,
        samples,
      });
    }
  }
}

function auditServiceSlugsVsAppendixWiring(report) {
  const indexSrc = read("src/lib/data/services/index.ts");
  const importMap = parseImports(indexSrc);
  const slugToSymbol = parseServiceDataSlugSymbol(indexSrc);
  const extendedSrc = read(
    "src/lib/data/services/compliance/extended-compliance-services.ts"
  );
  const extraMap = parseExtraComplianceSlugs(extendedSrc);
  const extraSymbols = new Set(extraMap.values());
  for (const [slug, sym] of extraMap) slugToSymbol.set(slug, sym);

  const appendixMap = parseAppendixMap();

  for (const [slug, symbol] of slugToSymbol) {
    if (SKIP_APPENDIX_SLUGS.has(slug)) continue;
    const segs = appendixMap.get(slug);
    if (!segs || !segs.length) {
      report.slugMissingAppendix.push(slug);
      continue;
    }
    const mdRel = path.join("src/content/documents", ...segs);
    if (!exists(mdRel)) {
      report.slugMissingMdFile.push({ slug, mdRel });
      continue;
    }
    const mod = modulePathForSymbol(symbol, importMap, extraSymbols);
    if (!mod) {
      report.slugUnknownSymbol.push({ slug, symbol });
      continue;
    }
    const tsPath = path.join(LIB_SERVICES, mod + ".ts");
    if (!fs.existsSync(tsPath)) {
      report.slugMissingTs.push({ slug, tsPath });
      continue;
    }

    if (!AUDIT_TS_APPENDIX) continue;

    const ts = fs.readFileSync(tsPath, "utf8");
    const strings = extractLongStrings(ts);
    const docN = norm(read(mdRel));
    const misses = [];
    for (const s of strings) {
      const ns = norm(s);
      if (ns.length < 50) continue;
      if (!docN.includes(ns)) {
        const parts = ns.split(/(?<=[.!?])\s+/).filter((x) => x.length > 55);
        const subOk =
          parts.length > 0 && parts.every((p) => docN.includes(p.trim()));
        if (!subOk) misses.push(s.slice(0, 160).replace(/\s+/g, " "));
      }
    }
    if (misses.length) {
      report.tsStringsNotInAppendix.push({
        slug,
        module: mod + ".ts",
        appendix: mdRel,
        count: misses.length,
        examples: misses.slice(0, 5),
      });
    }

    if (STRICT_DOC) {
      const docRaw = read(mdRel);
      const docParas = docRaw
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter((p) => p.length > 100);
      const tsBlob = norm(ts);
      const docMiss = [];
      for (const p of docParas.slice(0, 40)) {
        const np = norm(p);
        if (np.length < 80) continue;
        if (!tsBlob.includes(np)) docMiss.push(p.slice(0, 100));
      }
      if (docMiss.length)
        report.appendixParagraphsNotInTs.push({ slug, examples: docMiss.slice(0, 3) });
    }
  }
}

function auditAppendixTraceabilityToExtracted(report) {
  const appendixMap = parseAppendixMap();
  const seen = new Set();
  const masterRegPath = "DOCUMENTS_extracted/Registration/company-registration.md";
  const masterRegN = exists(masterRegPath) ? norm(read(masterRegPath)) : null;
  const masterCorpPath = "DOCUMENTS_extracted/Compliance/corporate-service.md";
  const masterCorpN = exists(masterCorpPath) ? norm(read(masterCorpPath)) : null;

  for (const segs of appendixMap.values()) {
    const k = segs.join("/");
    if (seen.has(k)) continue;
    seen.add(k);
    const rel = path.join("src/content/documents", ...segs);
    if (!exists(rel)) continue;

    const sub = segs[0];
    let sourceNorm = null;
    let sourceLabel = "";

    if (sub === "categories") {
      const fn = segs[1];
      const pair = CATEGORY_MIRROR_PAIRS.find(([, b]) =>
        b.endsWith(path.posix.join("categories", fn))
      );
      if (pair && exists(pair[0]) && exists(pair[1])) {
        if (norm(read(pair[0])) === norm(read(pair[1]))) continue;
        sourceNorm = norm(read(pair[0]));
        sourceLabel = pair[0];
      }
    } else if (sub === "registration" && masterRegN) {
      sourceNorm = masterRegN;
      sourceLabel = masterRegPath;
    } else if (sub === "compliance" && segs[1] === "corporate" && masterCorpN) {
      const mcaPath = "DOCUMENTS_extracted/MCA/company-complance.md";
      const mcaN = exists(mcaPath) ? norm(read(mcaPath)) : "";
      sourceNorm = masterCorpN + "\n" + mcaN;
      sourceLabel = `${masterCorpPath} + ${mcaPath}`;
    }

    if (!sourceNorm) {
      report.appendixNoExtractedSource.push(rel);
      continue;
    }

    const raw = read(rel);
    const paras = raw
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(
        (p) =>
          p.length > 80 &&
          !p.startsWith("#") &&
          !/\*\*note:\*\*/i.test(p) &&
          !/`DOCUMENTS\//i.test(p) &&
          !/Word document/i.test(p)
      );
    const missing = [];
    for (const p of paras) {
      const np = norm(p);
      if (np.length < 60) continue;
      if (!sourceNorm.includes(np)) missing.push(p.slice(0, 140).replace(/\n/g, " "));
    }
    if (missing.length) {
      report.appendixParagraphsNotInRootDocumentsExtracted.push({
        appendix: rel,
        source: sourceLabel,
        count: missing.length,
        examples: missing.slice(0, 4),
      });
    }
  }
}

function auditZipInventoryVsExtracted(report) {
  for (const [zipRel, entries] of ZIP_DOCX_TO_EXTRACTED) {
    const zpath = path.join(ROOT, zipRel);
    if (!fs.existsSync(zpath)) {
      report.zipMissing.push(zipRel);
      continue;
    }
    let listing = "";
    try {
      listing = execFileSync("unzip", ["-l", zpath], { encoding: "utf8" });
    } catch {
      report.zipUnreadable.push(zipRel);
      continue;
    }
    for (const [docxInner, mdExpected] of entries) {
      if (!listing.includes(docxInner)) {
        report.zipDocxEntryMissing.push({ zip: zipRel, expectedEntry: docxInner });
      }
      if (mdExpected && !exists(mdExpected)) {
        report.extractedMdMissingForDocx.push({
          zip: zipRel,
          docx: docxInner,
          expectedMd: mdExpected,
        });
      }
    }
  }
}

function auditArticleBodiesVsCategoryMds(report) {
  if (!AUDIT_ARTICLE_BODIES) {
    report.articleBodiesAudit = "skipped (set AUDIT_ARTICLE_BODIES=1 to diff vs category MDs)";
    return;
  }
  if (!exists("src/lib/data/services/compliance/compliance-extended-article-bodies.ts")) {
    report.articleBodiesAudit = "AUDIT_ARTICLE_BODIES: compliance-extended-article-bodies.ts missing";
    return;
  }
  const ts = read("src/lib/data/services/compliance/compliance-extended-article-bodies.ts");
  const strings = extractLongStrings(ts, 55);
  const cats = [
    "src/content/documents/categories/sebi-compliance.md",
    "src/content/documents/categories/audit-due-diligence.md",
    "src/content/documents/categories/corporate-restructuring-compliance.md",
  ];
  const blob = norm(cats.map((r) => (exists(r) ? read(r) : "")).join("\n"));
  const missesStrict = [];
  const missesFuzzy = [];
  for (const s of strings) {
    const ns = norm(s);
    if (ns.length < 55) continue;
    if (ns.includes("bharatfilings")) continue;
    if (blob.includes(ns)) continue;
    missesStrict.push(s.slice(0, 140).replace(/\s+/g, " "));
    if (!normTextAnchoredInHaystack(blob, ns, 48)) {
      missesFuzzy.push(s.slice(0, 140).replace(/\s+/g, " "));
    }
  }
  if (missesFuzzy.length) {
    report.articleBodiesNotInCategoryMds = {
      countStrict: missesStrict.length,
      countFuzzy: missesFuzzy.length,
      examples: missesFuzzy.slice(0, 8),
    };
  } else {
    report.articleBodiesAudit = "AUDIT_ARTICLE_BODIES: no fuzzy misses vs category MDs";
  }
}

function auditOrphanModules(report) {
  const indexSrc = read("src/lib/data/services/index.ts");
  const importMap = parseImports(indexSrc);
  const importedPaths = new Set(importMap.values());
  const allFiles = collectTsFiles(LIB_SERVICES);
  const relSet = new Set();
  for (const abs of allFiles) {
    const rel = path.relative(LIB_SERVICES, abs).replace(/\\/g, "/").replace(/\.ts$/, "");
    relSet.add(rel);
  }
  const skip = new Set([
    "compliance/compliance-service-factory",
    "compliance/corporate-service-nav",
    "compliance/compliance-extended-article-bodies",
    "_template",
  ]);
  for (const rel of relSet) {
    if (skip.has(rel)) continue;
    if (!importedPaths.has(rel) && rel !== "compliance/extended-compliance-services") {
      report.orphanModules.push(rel + ".ts");
    }
  }
}

function extractFreeLegalDocxText() {
  if (!fs.existsSync(DOCX_FREE_LEGAL)) return null;
  try {
    execFileSync(
      "python3",
      [
        path.join(ROOT, "tools/docx_extract.py"),
        path.join(ROOT, "DOCUMENTS"),
        "-o",
        path.join(ROOT, ".audit-docx-out"),
      ],
      { stdio: "pipe", cwd: ROOT }
    );
    const out = path.join(
      ROOT,
      ".audit-docx-out/Documentations/free-legal-documents.md"
    );
    if (fs.existsSync(out)) return norm(fs.readFileSync(out, "utf8"));
  } catch {
    return null;
  }
  return null;
}

function auditFreeLegalVsDocx(report) {
  const docN = extractFreeLegalDocxText();
  if (!docN) {
    report.freeLegalDocx = "skipped (python3/docx extract failed or doc missing)";
    return;
  }
  if (!AUDIT_FREE_LEGAL_STRICT) {
    report.freeLegalDocx = `ok, extracted ${docN.length} chars (set AUDIT_FREE_LEGAL_STRICT=1 for TS vs Word substring audit)`;
    return;
  }
  const ts = read("src/lib/data/services/documentations/free-legal-documents.ts");
  const boilerplate = [
    "share required details",
    "draft document is prepared",
    "template format",
    "as per document",
    "can placeholders be edited",
    "review placeholders, terms, and clauses",
    "provide party and document details",
  ];
  const strings = extractLongStrings(ts, 48);
  const missesStrict = [];
  const missesFuzzy = [];
  for (const s of strings) {
    const ns = norm(s);
    if (ns.length < 48) continue;
    if (boilerplate.some((b) => ns.includes(b))) continue;
    if (docN.includes(ns)) continue;
    missesStrict.push(s.slice(0, 120).replace(/\s+/g, " "));
    if (!normTextAnchoredInHaystack(docN, ns, 48)) {
      missesFuzzy.push(s.slice(0, 120).replace(/\s+/g, " "));
    }
  }
  if (missesFuzzy.length) {
    report.freeLegalTsNotInDocx = {
      countStrict: missesStrict.length,
      countFuzzy: missesFuzzy.length,
      examples: missesFuzzy.slice(0, 6),
    };
  }
}

function main() {
  const report = {
    mirrorMissing: [],
    mirrorMismatches: [],
    registrationMasterMissing: null,
    registrationSliceGaps: [],
    slugMissingAppendix: [],
    slugMissingMdFile: [],
    slugUnknownSymbol: [],
    slugMissingTs: [],
    tsStringsNotInAppendix: [],
    appendixParagraphsNotInTs: [],
    appendixNoExtractedSource: [],
    appendixParagraphsNotInRootDocumentsExtracted: [],
    zipMissing: [],
    zipUnreadable: [],
    zipDocxEntryMissing: [],
    extractedMdMissingForDocx: [],
    articleBodiesNotInCategoryMds: null,
    articleBodiesAudit: null,
    orphanModules: [],
    freeLegalDocx: "ok",
    freeLegalTsNotInDocx: null,
  };

  auditCategoryMirrors(report);
  auditRegistrationSlices(report);
  auditZipInventoryVsExtracted(report);
  auditAppendixTraceabilityToExtracted(report);
  auditServiceSlugsVsAppendixWiring(report);
  auditArticleBodiesVsCategoryMds(report);
  auditOrphanModules(report);
  auditFreeLegalVsDocx(report);

  const outPath = path.join(ROOT, "tools/audit-lib-data-vs-documents-report.json");
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2), "utf8");

  let exit = 0;
  const lines = [];
  lines.push("=== lib/data vs DOCUMENTS audit ===\n");
  lines.push(`Report written: ${path.relative(ROOT, outPath)}\n`);

  if (report.mirrorMissing.length) {
    exit = 1;
    lines.push("MISSING mirror files:", ...report.mirrorMissing.map((x) => `  - ${x}`), "");
  }
  if (report.mirrorMismatches.length) {
    exit = 1;
    lines.push(
      "MIRROR text differs (normalized) between DOCUMENTS_extracted and src/content/documents:"
    );
    for (const m of report.mirrorMismatches) {
      lines.push(
        `  - ${m.extracted} vs ${m.content} (lens ${m.lenExtracted}/${m.lenContent}, first diff @${m.firstDiffAt})`
      );
      lines.push(`      extracted: ${m.snippetExtracted}...`);
      lines.push(`      content:   ${m.snippetContent}...`);
    }
    lines.push("");
  }
  if (report.registrationMasterMissing) {
    lines.push("WARN: registration master missing:", report.registrationMasterMissing, "");
  }
  if (report.registrationSliceGaps.length) {
    exit = 1;
    lines.push("Registration slice paragraphs NOT found in master extracted doc:");
    for (const g of report.registrationSliceGaps) {
      lines.push(`  - ${g.file} (${g.paragraphsNotInMasterExtracted} hits)`);
    }
    lines.push("");
  }
  if (report.slugMissingAppendix.length) {
    exit = 1;
    lines.push("Slugs without appendix mapping:", ...report.slugMissingAppendix.map((s) => `  - ${s}`), "");
  }
  if (report.slugMissingMdFile.length) {
    exit = 1;
    lines.push("Missing markdown files:", JSON.stringify(report.slugMissingMdFile, null, 2), "");
  }
  if (report.slugUnknownSymbol.length) {
    exit = 1;
    lines.push("Unknown symbols:", JSON.stringify(report.slugUnknownSymbol, null, 2), "");
  }
  if (report.zipMissing.length) {
    exit = 1;
    lines.push("DOCUMENTS zip archives missing:", ...report.zipMissing.map((x) => `  - ${x}`), "");
  }
  if (report.zipUnreadable.length) {
    exit = 1;
    lines.push("Could not read zip listing:", ...report.zipUnreadable.map((x) => `  - ${x}`), "");
  }
  if (report.zipDocxEntryMissing.length) {
    exit = 1;
    lines.push("Expected docx entry not found inside zip:", JSON.stringify(report.zipDocxEntryMissing, null, 2), "");
  }
  if (report.extractedMdMissingForDocx.length) {
    exit = 1;
    lines.push(
      "DOCUMENTS_extracted markdown missing for a zip docx (re-run docx_extract):",
      JSON.stringify(report.extractedMdMissingForDocx, null, 2),
      ""
    );
  }
  if (report.appendixNoExtractedSource.length) {
    exit = 1;
    lines.push(
      "Appendix files with no mapped DOCUMENTS_extracted source:",
      ...report.appendixNoExtractedSource.map((x) => `  - ${x}`),
      ""
    );
  }
  if (report.appendixParagraphsNotInRootDocumentsExtracted.length) {
    exit = 1;
    lines.push(
      "Appendix paragraphs NOT found in root DOCUMENTS text (DOCUMENTS_extracted masters):"
    );
    for (const x of report.appendixParagraphsNotInRootDocumentsExtracted) {
      lines.push(`  - ${x.appendix} (source ${x.source}) [${x.count} paragraphs]`);
      for (const e of x.examples) lines.push(`      e.g. ${e}...`);
    }
    lines.push("");
  }
  if (report.tsStringsNotInAppendix.length) {
    exit = 1;
    lines.push(
      `TS long strings not found verbatim in appendix MD (${report.tsStringsNotInAppendix.length} services):`
    );
    for (const x of report.tsStringsNotInAppendix) {
      lines.push(`  - ${x.slug} (${x.module}) -> ${x.appendix} [${x.count} strings]`);
      for (const e of x.examples) lines.push(`      e.g. ${e}...`);
    }
    lines.push("");
  } else if (AUDIT_TS_APPENDIX) {
    lines.push("AUDIT_TS_APPENDIX: no TS strings failed appendix substring check.\n");
  } else {
    lines.push(
      "(Set AUDIT_TS_APPENDIX=1 to compare long TS marketing strings against appendix MD.)\n"
    );
  }
  if (report.articleBodiesNotInCategoryMds) {
    const ab = report.articleBodiesNotInCategoryMds;
    lines.push(
      "WARN (AUDIT_ARTICLE_BODIES): compliance-extended-article-bodies strings with no ~48-char anchor in category MDs:",
      `fuzzy=${ab.countFuzzy}`,
      `(strict=${ab.countStrict}; see report JSON)\n`
    );
  } else if (report.articleBodiesAudit) {
    lines.push(report.articleBodiesAudit + "\n");
  }
  if (report.orphanModules.length) {
    lines.push("WARN: TS modules not imported from index.ts:", ...report.orphanModules.map((x) => `  - ${x}`), "");
  }
  if (report.freeLegalTsNotInDocx) {
    const fl = report.freeLegalTsNotInDocx;
    lines.push(
      "WARN: Free legal TS strings with no ~48-char anchor in extracted Free Legal Documents.docx:",
      `fuzzy=${fl.countFuzzy}`,
      `(strict=${fl.countStrict}; boilerplate lines skipped; see report JSON)\n`
    );
  } else {
    lines.push(String(report.freeLegalDocx), "");
  }

  const summary = lines.join("\n");
  console.log(summary);
  process.exit(exit);
}

main();
