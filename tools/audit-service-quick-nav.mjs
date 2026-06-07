/**
 * Audit Quick Navigation sections vs `ServicePageContent` visibility rules:
 * - Overview: always
 * - Advantages & Disadvantages: only if BOTH advantages and disadvantages arrays non-empty
 * - Eligibility, Documents, Process, FAQs: non-empty array
 * - Full source text: appendix markdown file exists and non-empty for this slug’s mapping
 *
 * Run: node tools/audit-service-quick-nav.mjs
 * Output: tools/service-quick-nav-report.json
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const REPORT_OUT = path.join(ROOT, "tools/service-quick-nav-report.json");

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

/** Extract `[...]` value for `prop` in object literal string (string/comment aware). */
function arrayNonemptyInObject(objStr, prop) {
  const re = new RegExp(`\\b${prop}\\s*:\\s*\\[`, "m");
  const m = objStr.match(re);
  if (!m) return false;
  const start = m.index + m[0].length;
  let i = start;
  let depth = 1;
  while (i < objStr.length && depth > 0) {
    const c = objStr[i];
    const n = objStr[i + 1];
    if (c === '"' || c === "'" || c === "`") {
      i = skipString(objStr, i);
      continue;
    }
    if (c === "/" && n === "/") {
      i += 2;
      while (i < objStr.length && objStr[i] !== "\n") i++;
      continue;
    }
    if (c === "/" && n === "*") {
      i += 2;
      while (i < objStr.length - 1 && !(objStr[i] === "*" && objStr[i + 1] === "/"))
        i++;
      i += 2;
      continue;
    }
    if (c === "[") depth++;
    else if (c === "]") depth--;
    i++;
  }
  const body = objStr
    .slice(start, i - 1)
    .replace(/\/\/[^\n]*/g, "")
    .trim();
  return body.length > 0;
}

function listSpreadNames(inner) {
  const names = [];
  const re = /\.\.\.(\w+)/g;
  let sm;
  while ((sm = re.exec(inner)) !== null) names.push(sm[1]);
  return names;
}

function getPartialObjectInner(articleSrc, spreadName) {
  const esc = spreadName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(
    `export const ${esc}\\s*(?::\\s*Partial<ServiceData>)?\\s*=\\s*\\{`,
    "m"
  );
  const ms = articleSrc.match(re);
  if (!ms) return null;
  const open = ms.index + ms[0].length - 1;
  const r2 = braceRange(articleSrc, open);
  if (!r2) return null;
  return articleSrc.slice(r2.start + 1, r2.end);
}

function arrayNonemptyAcross(inner, prop, articleSrc) {
  if (arrayNonemptyInObject(inner, prop)) return true;
  if (!articleSrc) return false;
  for (const sp of listSpreadNames(inner)) {
    const part = getPartialObjectInner(articleSrc, sp);
    if (part && arrayNonemptyInObject(part, prop)) return true;
  }
  return false;
}

function findBuildComplianceInner(extendedSrc, exportSymbol) {
  const esc = exportSymbol.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(
    `export const ${esc}\\s*:\\s*ServiceData\\s*=\\s*(?:\\n\\s*)?buildComplianceServiceData\\(\\{`,
    "m"
  );
  const m = extendedSrc.match(re);
  if (!m) return null;
  const braceStart = m.index + m[0].length - 1;
  const range = braceRange(extendedSrc, braceStart);
  if (!range) return null;
  return extendedSrc.slice(range.start + 1, range.end);
}

function findPlainServiceInner(ts, exportSymbol) {
  const esc = exportSymbol.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const patterns = [
    new RegExp(`export const ${esc}\\s*:\\s*ServiceData\\s*=\\s*\\{`, "m"),
    new RegExp(`export const ${esc}\\s*=\\s*\\{`, "m"),
  ];
  for (const re of patterns) {
    const m = ts.match(re);
    if (!m) continue;
    const open = m.index + m[0].length - 1;
    const range = braceRange(ts, open);
    if (range) return ts.slice(range.start + 1, range.end);
  }
  return null;
}

/** `baseData()` in free-legal-documents always sets disadvantages: [] → no Adv&Dis nav item. */
function isBaseDataFactoryExport(ts, exportSymbol) {
  const esc = exportSymbol.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`export const ${esc}\\s*=\\s*baseData\\(`, "m").test(ts);
}

function visibilityFromFreeLegalBaseData() {
  return {
    overview: true,
    advantagesDisadvantages: false,
    advantagesOnly: true,
    disadvantagesOnly: false,
    eligibility: true,
    documents: true,
    process: true,
    fees: true,
    faqs: true,
  };
}

function visibilityFromInner(inner, articleSrc) {
  const adv = arrayNonemptyAcross(inner, "advantages", articleSrc);
  const dis = arrayNonemptyAcross(inner, "disadvantages", articleSrc);
  return {
    overview: true,
    advantagesDisadvantages: adv && dis,
    advantagesOnly: adv && !dis,
    disadvantagesOnly: !adv && dis,
    eligibility: arrayNonemptyAcross(inner, "eligibility", articleSrc),
    documents: arrayNonemptyAcross(inner, "documents", articleSrc),
    process: arrayNonemptyAcross(inner, "registrationProcess", articleSrc),
    fees: arrayNonemptyAcross(inner, "fees", articleSrc),
    faqs: arrayNonemptyAcross(inner, "faqs", articleSrc),
  };
}

function navStubVisibility() {
  return {
    overview: true,
    advantagesDisadvantages: false,
    advantagesOnly: false,
    disadvantagesOnly: false,
    eligibility: false,
    documents: false,
    process: false,
    fees: false,
    faqs: false,
  };
}

function main() {
  const indexSrc = read("src/lib/data/services/index.ts");
  const navSrc = read("src/lib/data/services/nav-document-backed-pages.ts");
  const pathsSrc = read("src/lib/documents/serviceAppendixPaths.ts");
  const extendedSrc = read(
    "src/lib/data/services/compliance/extended-compliance-services.ts"
  );
  const articleBodiesSrc = read(
    "src/lib/data/services/compliance/compliance-extended-article-bodies.ts"
  );

  const serviceKeys = [
    ...new Set([
      ...parseExportedRecordKeys(indexSrc, "serviceData"),
      ...parseExportedRecordKeys(extendedSrc, "EXTRA_COMPLIANCE_PAGES"),
      ...parseNavBackedSlugs(navSrc),
    ]),
  ];
  const appendixMap = parseAppendixMap(pathsSrc);
  const importMap = parseImports(indexSrc);
  const slugToSymbol = parseServiceDataSlugSymbol(indexSrc);
  const extraMap = parseExtraComplianceSlugs(extendedSrc);
  const extraSymbols = new Set(extraMap.values());
  const navSet = new Set(parseNavBackedSlugs(navSrc));

  const report = {
    generatedAt: new Date().toISOString(),
    legend: {
      overview: "Always shown",
      advantagesDisadvantages:
        "Shown only when BOTH advantages[] and disadvantages[] are non-empty (ServicePageContent)",
      eligibility: "eligibility.length > 0",
      documents: "documents.length > 0",
      process: "registrationProcess.length > 0",
      fees: "fees.length > 0",
      faqs: "faqs.length > 0",
      freeLegalBaseData:
        "Free Legal Document services use `baseData()` with `disadvantages: []`, so Advantages & Disadvantages never appears in Quick Nav (ServicePageContent requires both arrays).",
    },
    summary: {
      totalSlugs: 0,
      navBackedSlugs: 0,
      bespokeSlugs: 0,
      asymmetricAdvDis: 0,
      /** Counts include nav-backed (expected hidden) + bespoke */
      hidden: {
        advantagesDisadvantages: 0,
        eligibility: 0,
        documents: 0,
        process: 0,
        fees: 0,
        faqs: 0,
        fullSourceText: 0,
      },
      /** Bespoke-only: gaps that are usually unintentional */
      bespokeGaps: {
        advantagesDisadvantages: 0,
        eligibility: 0,
        documents: 0,
        process: 0,
        fees: 0,
        faqs: 0,
        fullSourceText: 0,
      },
      bespokeMissingProcessSlugs: [],
    },
    slugs: [],
  };

  for (const slug of serviceKeys.sort()) {
    report.summary.totalSlugs++;
    const navBackedStub = navSet.has(slug);

    let vis;
    let tsModule = null;
    let error = null;

    if (navBackedStub) {
      vis = navStubVisibility();
      tsModule = "src/lib/data/services/nav-document-backed-pages.ts";
      report.summary.navBackedSlugs++;
    } else {
      let mod = null;
      let exportSymbol = null;
      if (extraMap.has(slug)) {
        exportSymbol = extraMap.get(slug);
        mod = modulePathForSymbol(exportSymbol, importMap, extraSymbols);
      } else {
        const sym = slugToSymbol.get(slug);
        if (sym) mod = modulePathForSymbol(sym, importMap, extraSymbols);
        exportSymbol = sym;
      }
      if (!mod || !exportSymbol) {
        error = "could not resolve TS module";
      } else {
        tsModule = path.join("src/lib/data/services", mod + ".ts");
        if (!exists(tsModule)) {
          error = "ts file missing";
        } else if (
          mod === "compliance/extended-compliance-services" &&
          extraMap.has(slug)
        ) {
          const inner = findBuildComplianceInner(extendedSrc, exportSymbol);
          if (!inner) error = "could not parse buildComplianceServiceData body";
          else vis = visibilityFromInner(inner, articleBodiesSrc);
        } else {
          const ts = read(tsModule);
          let inner = findPlainServiceInner(ts, exportSymbol);
          if (!inner && isBaseDataFactoryExport(ts, exportSymbol)) {
            vis = visibilityFromFreeLegalBaseData();
          } else if (!inner) {
            error = "could not parse ServiceData object";
          } else {
            vis = visibilityFromInner(inner, null);
          }
        }
      }
    }

    const segs = appendixMap.get(slug);
    let hasAppendix = false;
    if (segs?.length) {
      const mdRel = path.join("src/content/documents", ...segs);
      const mdPath = path.join(ROOT, mdRel);
      if (fs.existsSync(mdPath)) {
        const raw = fs.readFileSync(mdPath, "utf8").trim();
        hasAppendix = raw.length > 0;
      }
    }

    if (error) {
      report.slugs.push({ slug, navBackedStub, error, tsModule });
      continue;
    }

    if (vis.advantagesOnly || vis.disadvantagesOnly) {
      report.summary.asymmetricAdvDis++;
    }
    if (!vis.advantagesDisadvantages) report.summary.hidden.advantagesDisadvantages++;
    if (!vis.eligibility) report.summary.hidden.eligibility++;
    if (!vis.documents) report.summary.hidden.documents++;
    if (!vis.process) report.summary.hidden.process++;
    if (!vis.fees) report.summary.hidden.fees++;
    if (!vis.faqs) report.summary.hidden.faqs++;
    if (!hasAppendix) report.summary.hidden.fullSourceText++;

    if (!navBackedStub) {
      report.summary.bespokeSlugs++;
      if (!vis.advantagesDisadvantages)
        report.summary.bespokeGaps.advantagesDisadvantages++;
      if (!vis.eligibility) report.summary.bespokeGaps.eligibility++;
      if (!vis.documents) report.summary.bespokeGaps.documents++;
      if (!vis.process) {
        report.summary.bespokeGaps.process++;
        report.summary.bespokeMissingProcessSlugs.push(slug);
      }
      if (!vis.fees) report.summary.bespokeGaps.fees++;
      if (!vis.faqs) report.summary.bespokeGaps.faqs++;
      if (!hasAppendix) report.summary.bespokeGaps.fullSourceText++;
    }

    report.slugs.push({
      slug,
      navBackedStub,
      tsModule,
      quickNav: {
        overview: vis.overview,
        advantagesDisadvantages: vis.advantagesDisadvantages,
        eligibility: vis.eligibility,
        documents: vis.documents,
        process: vis.process,
        fees: vis.fees,
        faqs: vis.faqs,
        fullSourceText: hasAppendix,
      },
      flags: {
        asymmetricAdvDis: vis.advantagesOnly || vis.disadvantagesOnly,
      },
    });
  }

  fs.writeFileSync(REPORT_OUT, JSON.stringify(report, null, 2), "utf8");

  const s = report.summary;
  console.log(`service-quick-nav: wrote ${path.relative(ROOT, REPORT_OUT)}`);
  console.log(
    `total=${s.totalSlugs} bespoke=${s.bespokeSlugs} navBacked=${s.navBackedSlugs} asymmetricAdvDis=${s.asymmetricAdvDis}`
  );
  console.log("\nBespoke pages only — Quick Nav hidden when data is empty:");
  console.log(
    `  Adv&Dis: ${s.bespokeGaps.advantagesDisadvantages}  Eligibility: ${s.bespokeGaps.eligibility}  Documents: ${s.bespokeGaps.documents}  Process: ${s.bespokeGaps.process}  Fees: ${s.bespokeGaps.fees}  FAQs: ${s.bespokeGaps.faqs}  Full source: ${s.bespokeGaps.fullSourceText}`
  );
  if (s.bespokeMissingProcessSlugs.length) {
    console.log(
      `  Slugs missing Process section: ${s.bespokeMissingProcessSlugs.join(", ")}`
    );
  }
  console.log(
    "\nAll slugs (incl. nav stubs) — hidden counts (stubs expect almost everything hidden):"
  );
  console.log(
    `  Adv&Dis: ${s.hidden.advantagesDisadvantages}  Eligibility: ${s.hidden.eligibility}  Documents: ${s.hidden.documents}  Process: ${s.hidden.process}  Fees: ${s.hidden.fees}  FAQs: ${s.hidden.faqs}  Full source: ${s.hidden.fullSourceText}`
  );
  console.log(
    "\nNote: Nav-backed stubs only show Overview (+ Full source text); other Quick Nav items are omitted by design."
  );
}

main();
