/**
 * Ensures every public service slug in `serviceData` has a mapped appendix
 * and the markdown file exists.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const INDEX = path.join(ROOT, "src/lib/data/services/index.ts");
const NAV_BACKED = path.join(ROOT, "src/lib/data/services/nav-document-backed-pages.ts");
const PATHS = path.join(ROOT, "src/lib/documents/serviceAppendixPaths.ts");
const DOC_ROOT = path.join(ROOT, "src/content/documents");

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

function parseAppendixEntries(src) {
  const aliasSegments = new Map();
  const aliasDef = /^const\s+(\w+)\s*=\s*cat\("([^"]+)"\)\s*;/gm;
  let am;
  while ((am = aliasDef.exec(src)) !== null) {
    aliasSegments.set(am[1], segmentsForAppendix("cat", `"${am[2]}"`));
  }

  const lines = src.split("\n");
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
    const fn = m[3];
    const inner = m[4];
    map.set(key, segmentsForAppendix(fn, inner));
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
  return [...map.entries()].map(([key, segs]) => ({ key, segs }));
}

function main() {
  const indexSrc = fs.readFileSync(INDEX, "utf8");
  const navBackedSrc = fs.readFileSync(NAV_BACKED, "utf8");
  const pathsSrc = fs.readFileSync(PATHS, "utf8");
  const extendedPath = path.join(
    ROOT,
    "src/lib/data/services/compliance/extended-compliance-services.ts"
  );
  const extendedSrc = fs.readFileSync(extendedPath, "utf8");
  const serviceKeys = [
    ...new Set([
      ...parseExportedRecordKeys(indexSrc, "serviceData"),
      ...parseExportedRecordKeys(extendedSrc, "EXTRA_COMPLIANCE_PAGES"),
      ...parseNavBackedSlugs(navBackedSrc),
    ]),
  ];
  const appendixList = parseAppendixEntries(pathsSrc);
  const appendixMap = new Map(appendixList.map((e) => [e.key, e.segs]));

  const errors = [];
  const warnings = [];

  for (const slug of serviceKeys) {
    const segs = appendixMap.get(slug);
    if (!segs || segs.length === 0) {
      errors.push(
        `serviceData slug "${slug}" has no SERVICE_APPENDIX_SEGMENTS entry`
      );
      continue;
    }
    const filePath = path.join(DOC_ROOT, ...segs);
    if (!fs.existsSync(filePath)) {
      errors.push(
        `Appendix for "${slug}" missing file: ${path.relative(ROOT, filePath)}`
      );
    }
  }

  const serviceSet = new Set(serviceKeys);
  for (const { key } of appendixList) {
    if (!serviceSet.has(key)) {
      warnings.push(
        `Orphan appendix key "${key}" (not in serviceData)`
      );
    }
  }

  for (const w of warnings) console.warn("WARN:", w);
  if (errors.length) {
    console.error("validate-service-appendix failed:\n");
    for (const e of errors) console.error("  -", e);
    process.exit(1);
  }
  console.log(
    `validate-service-appendix: OK (${serviceKeys.length} service slugs, ${appendixMap.size} appendix mappings)`
  );
}

main();
