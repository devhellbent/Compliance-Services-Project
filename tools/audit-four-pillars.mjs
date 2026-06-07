/**
 * Audit services under main nav: Registrations, MCA, Compliance, Taxation.
 *
 * 1) Advantages / disadvantages: when the appendix slice contains the standard
 *    "Advantages and Disadvantages" + bullet lists, compare counts and bodies to TS.
 * 2) Spawns appendix-vs-structured audit scoped to the same slugs (strict chunks).
 *
 * Run: node tools/audit-four-pillars.mjs
 *
 * Output: tools/four-pillars-audit-report.json
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const REPORT = path.join(ROOT, "tools/four-pillars-audit-report.json");

const PILLOWS = ["Registrations", "MCA", "Compliance", "Taxation"];

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), "utf8");
}

function baseSlugFromName(name) {
  return name
    .toLowerCase()
    .replace(/ & /g, "-and-")
    .replace(/ \/ /g, "-")
    .replace(/ \(.*\)/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** slug -> pillar label */
function slugToPillar(navSrc) {
  const map = new Map();
  for (const pillar of PILLOWS) {
    const start = navSrc.indexOf(`mainHead: "${pillar}"`);
    if (start < 0) continue;
    const end = navSrc.indexOf(`\n  },\n  {\n    mainHead: "`, start + 30);
    const block = end < 0 ? navSrc.slice(start) : navSrc.slice(start, end);
    const re1 = /createServiceSlug\(\s*"((?:\\.|[^"\\])*)"\s*\)/g;
    let m;
    while ((m = re1.exec(block)) !== null) {
      let name = m[1];
      try {
        name = JSON.parse(`"${m[1]}"`);
      } catch {
        /* keep raw */
      }
      map.set(baseSlugFromName(name), pillar);
    }
    const re2 = /\/services\/([a-z0-9-]+)/g;
    while ((m = re2.exec(block)) !== null) map.set(m[1], pillar);
  }
  return map;
}

function norm(s) {
  return s
    .replace(/\*\*/g, "")
    .replace(/\s+/g, " ")
    .replace(/[‘’]/g, "'")
    .replace(/[""]/g, '"')
    .trim()
    .toLowerCase();
}

function unescapeTsString(raw) {
  if (!raw) return "";
  return raw
    .replace(/\\n/g, "\n")
    .replace(/\\r/g, "\r")
    .replace(/\\t/g, "\t")
    .replace(/\\"/g, '"')
    .replace(/\\'/g, "'")
    .replace(/\\\\/g, "\\");
}

function skipString(s, i) {
  const q = s[i];
  let j = i + 1;
  while (j < s.length) {
    const c = s[j];
    if (c === "\\" && j + 1 < s.length) {
      j += 2;
      continue;
    }
    if (c === q) return j + 1;
    j++;
  }
  return s.length;
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
      while (i < src.length - 1 && !(src[i] === "*" && src[i + 1] === "/")) i++;
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

function extractBracketArray(src, key) {
  const re = new RegExp(`\\b${key}\\s*:\\s*\\[`, "m");
  const m = re.exec(src);
  if (!m) return null;
  let i = m.index + m[0].length;
  let depth = 1;
  const start = i;
  while (i < src.length && depth > 0) {
    const c = src[i];
    if (c === '"' || c === "'" || c === "`") {
      i = skipString(src, i);
      continue;
    }
    if (c === "[") depth++;
    else if (c === "]") depth--;
    i++;
  }
  return src.slice(start, i - 1);
}

function parseAdvDisObjects(inner) {
  const items = [];
  let pos = 0;
  while (pos < inner.length) {
    const o = inner.indexOf("{", pos);
    if (o < 0) break;
    let depth = 0;
    let j = o;
    for (; j < inner.length; j++) {
      const c = inner[j];
      if (c === '"' || c === "'" || c === "`") {
        j = skipString(inner, j) - 1;
        continue;
      }
      if (c === "{") depth++;
      if (c === "}") {
        depth--;
        if (depth === 0) {
          j++;
          break;
        }
      }
    }
    const block = inner.slice(o, j);
    pos = j;
    const tm = block.match(
      /title:\s*("((?:\\.|[^"\\])*)"|'((?:\\.|[^'\\])*)'|`([^`]*)`)/
    );
    const textm = block.match(
      /text:\s*("((?:\\.|[^"\\])*)"|'((?:\\.|[^'\\])*)'|`((?:\\.|[^`\\])*)`)/
    );
    if (!tm || !textm) continue;
    const title = unescapeTsString(tm[2] ?? tm[3] ?? tm[4] ?? "");
    const raw =
      textm[2] !== undefined
        ? textm[2]
        : textm[3] !== undefined
          ? textm[3]
          : textm[4];
    const text = unescapeTsString(raw);
    items.push({ title: title.trim(), text: text.trim() });
  }
  return items;
}

function parseMdAdvDis(md) {
  const low = md.replace(/\r\n/g, "\n");
  const idx = low.search(/advantages and disadvantages/i);
  if (idx < 0) return { adv: [], dis: [], note: "no_adv_dis_section" };
  const tail = low.slice(idx);
  const advM = tail.match(
    /(?:^|\n)\s*Advantages\s*\n([\s\S]*?)(?:^|\n)\s*Disadvantages\s*\n/i
  );
  if (!advM) return { adv: [], dis: [], note: "no_adv_dis_subheads" };
  const advBlock = advM[1];
  const afterDis = tail.slice(tail.indexOf(advM[0]) + advM[0].length);
  const stop = afterDis.search(
    /\n\n\s*(?:Eligibility|Documents|Fees|Checklist|Process|Registration|Mandatory|OVERVIEW|Benefits|Features)\b/i
  );
  const disBlock = stop < 0 ? afterDis : afterDis.slice(0, stop);

  function bullets(block) {
    const out = [];
    for (const line of block.split("\n")) {
      const m = line.match(/^\s*-\s*(.+)\s*$/);
      if (m) out.push(m[1].trim());
    }
    return out;
  }

  const parseBullet = (b) => {
    const colon = b.indexOf(":");
    if (colon > 0 && colon < 80) {
      return {
        title: b.slice(0, colon).trim(),
        body: b.slice(colon + 1).trim(),
      };
    }
    return { title: b, body: "" };
  };

  return {
    adv: bullets(advBlock).map(parseBullet),
    dis: bullets(disBlock).map(parseBullet),
    note: null,
  };
}

function compareBullets(mdList, tsList, kind) {
  const issues = [];
  if (mdList.length !== tsList.length) {
    issues.push({
      type: "count_mismatch",
      kind,
      mdCount: mdList.length,
      tsCount: tsList.length,
    });
  }
  const n = Math.max(mdList.length, tsList.length);
  for (let i = 0; i < n; i++) {
    const md = mdList[i];
    const ts = tsList[i];
    if (!md || !ts) {
      issues.push({ type: "missing_item", kind, index: i });
      continue;
    }
    if (norm(md.title) !== norm(ts.title)) {
      issues.push({
        type: "title_mismatch",
        kind,
        index: i,
        mdTitle: md.title,
        tsTitle: ts.title,
      });
    }
    if (norm(md.body) !== norm(ts.text)) {
      issues.push({
        type: "text_mismatch",
        kind,
        index: i,
        title: md.title,
      });
    }
  }
  return issues;
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
    if (m && !/^\s*\.\.\./.test(line)) keys.push(m[1] || m[2]);
  }
  return keys;
}

function parseNavBackedSlugs(navSrc) {
  const marker = "const NAV_DOCUMENT_BACKED_DEFS";
  const start = navSrc.indexOf(marker);
  if (start < 0) return [];
  const slice = navSrc.slice(start);
  const out = [];
  const re = /^  \[\s*\n?\s*"([^"]+)"/gm;
  let m;
  while ((m = re.exec(slice)) !== null) out.push(m[1]);
  return out;
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
  while ((m = re.exec(body)) !== null) map.set(m[1], m[2]);
  return map;
}

function modulePathForSymbol(symbol, importMap, extraSymbols) {
  if (importMap.has(symbol)) return importMap.get(symbol);
  if (extraSymbols.has(symbol)) return "compliance/extended-compliance-services";
  return null;
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

function sectionMatchScore(heading, tsTitle) {
  const a = tokenSet(heading);
  const b = tokenSet(tsTitle);
  if (a.size === 0 || b.size === 0) return 0;
  let inter = 0;
  for (const x of a) {
    if (b.has(x)) inter++;
  }
  const overlap = inter / Math.min(a.size, b.size);
  const tt = [...tokenSet(tsTitle)];
  if (tt.length === 0) return overlap;
  const ht = tokenSet(heading);
  let hits = 0;
  for (const x of tt) {
    if (ht.has(x)) hits++;
  }
  return Math.max(overlap, hits / tt.length);
}

function sliceCategoryAppendix(md, tsTitle) {
  const sections = extractOverviewSections(md);
  if (sections.length <= 1) {
    return {
      text: md,
      appendixSlice: sections.length === 1 ? "single_overview" : "full",
    };
  }
  if (!tsTitle?.trim()) return { text: md, appendixSlice: "fullNoTitle" };
  let best = sections[0];
  let score = sectionMatchScore(best.heading, tsTitle);
  for (let i = 1; i < sections.length; i++) {
    const sc = sectionMatchScore(sections[i].heading, tsTitle);
    if (sc > score) {
      score = sc;
      best = sections[i];
    }
  }
  if (score < 0.2) return { text: md, appendixSlice: "fullLowScore" };
  return { text: best.text, appendixSlice: "categorySection" };
}

function parseSpreadFromExtendedExport(extendedSrc, exportSymbol) {
  const esc = exportSymbol.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(
    `export const ${esc}\\s*:\\s*ServiceData\\s*=\\s*buildComplianceServiceData\\(\\{`,
    "m"
  );
  const m = re.exec(extendedSrc);
  if (!m) return null;
  const open = m.index + m[0].length - 1;
  const range = braceRange(extendedSrc, open);
  if (!range) return null;
  const inner = extendedSrc.slice(range.start + 1, range.end);
  const sm = inner.match(/\.\.\.(\w+)/);
  return sm ? sm[1] : null;
}

function extractAdvDisFromArticleBodies(articleBodiesSrc, spreadName) {
  const esc = spreadName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(
    `export const ${esc}\\s*:\\s*Partial<ServiceData>\\s*=\\s*\\{`,
    "m"
  );
  const m = re.exec(articleBodiesSrc);
  if (!m) return { adv: [], dis: [] };
  const open = m.index + m[0].length - 1;
  const range = braceRange(articleBodiesSrc, open);
  if (!range) return { adv: [], dis: [] };
  const inner = articleBodiesSrc.slice(range.start + 1, range.end);
  const advInner = extractBracketArray(inner, "advantages");
  const disInner = extractBracketArray(inner, "disadvantages");
  return {
    adv: advInner ? parseAdvDisObjects(advInner) : [],
    dis: disInner ? parseAdvDisObjects(disInner) : [],
  };
}

function loadTsAdvDis({
  slug,
  extraMap,
  extendedSrc,
  articleBodiesSrc,
  importMap,
  slugToSymbol,
  extraSymbols,
}) {
  if (extraMap.has(slug)) {
    const sym = extraMap.get(slug);
    const spread = parseSpreadFromExtendedExport(extendedSrc, sym);
    if (spread)
      return extractAdvDisFromArticleBodies(articleBodiesSrc, spread);
    return { adv: [], dis: [] };
  }
  const sym = slugToSymbol.get(slug);
  if (!sym) return { adv: [], dis: [] };
  const mod = modulePathForSymbol(sym, importMap, extraSymbols);
  if (!mod) return { adv: [], dis: [] };
  const tsPath = path.join(ROOT, "src/lib/data/services", mod + ".ts");
  if (!fs.existsSync(tsPath)) return { adv: [], dis: [] };
  const ts = fs.readFileSync(tsPath, "utf8");
  const advInner = extractBracketArray(ts, "advantages");
  const disInner = extractBracketArray(ts, "disadvantages");
  return {
    adv: advInner ? parseAdvDisObjects(advInner) : [],
    dis: disInner ? parseAdvDisObjects(disInner) : [],
  };
}

function main() {
  const navSrc = read("src/lib/navigation.ts");
  const indexSrc = read("src/lib/data/services/index.ts");
  const pathsSrc = read("src/lib/documents/serviceAppendixPaths.ts");
  const navBackedSrc = read("src/lib/data/services/nav-document-backed-pages.ts");
  const extendedSrc = read(
    "src/lib/data/services/compliance/extended-compliance-services.ts"
  );
  const articleBodiesSrc = read(
    "src/lib/data/services/compliance/compliance-extended-article-bodies.ts"
  );

  const pillarMap = slugToPillar(navSrc);
  const appendixMap = parseAppendixMap(pathsSrc);
  const importMap = parseImports(indexSrc);
  const slugToSymbol = parseServiceDataSlugSymbol(indexSrc);
  const extraMap = parseExtraComplianceSlugs(extendedSrc);
  const extraSymbols = new Set(extraMap.values());
  const navBacked = new Set(parseNavBackedSlugs(navBackedSrc));

  const serviceKeysAll = [
    ...new Set([
      ...parseExportedRecordKeys(indexSrc, "serviceData"),
      ...parseExportedRecordKeys(extendedSrc, "EXTRA_COMPLIANCE_PAGES"),
      ...parseNavBackedSlugs(navBackedSrc),
    ]),
  ];
  const serviceKeySet = new Set(serviceKeysAll);

  const pillarSlugs = [...pillarMap.keys()].filter((s) => serviceKeySet.has(s));
  pillarSlugs.sort();

  const advDisRows = [];
  for (const slug of pillarSlugs) {
    const pillar = pillarMap.get(slug);
    const segs = appendixMap.get(slug);
    const navStub = navBacked.has(slug);
    const tsLists = loadTsAdvDis({
      slug,
      extraMap,
      extendedSrc,
      articleBodiesSrc,
      importMap,
      slugToSymbol,
      extraSymbols,
    });

    if (navStub) {
      advDisRows.push({
        slug,
        pillar,
        navStub: true,
        skipAdvDisCompare: true,
        note: "Nav-backed stub: advantages/disadvantages live in appendix merge + Full source text.",
      });
      continue;
    }

    if (!segs?.length) {
      advDisRows.push({
        slug,
        pillar,
        error: "no_appendix_mapping",
        tsAdvCount: tsLists.adv.length,
        tsDisCount: tsLists.dis.length,
      });
      continue;
    }

    const mdRel = path.join("src/content/documents", ...segs);
    const mdPath = path.join(ROOT, mdRel);
    if (!fs.existsSync(mdPath)) {
      advDisRows.push({
        slug,
        pillar,
        error: "appendix_file_missing",
        mdRel: path.relative(ROOT, mdPath),
      });
      continue;
    }

    const mdRaw = fs.readFileSync(mdPath, "utf8");
    const isCat = segs[0] === "categories";
    let tsTitle = "";
    if (extraMap.has(slug)) {
      const sym = extraMap.get(slug);
      const m = extendedSrc.match(
        new RegExp(
          `export const ${sym.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[\\s\\S]*?title:\\s*"((?:[^"\\\\]|\\\\.)*)"`
        )
      );
      tsTitle = m
        ? (() => {
            try {
              return JSON.parse(`"${m[1]}"`);
            } catch {
              return m[1];
            }
          })()
        : "";
    } else {
      const sym = slugToSymbol.get(slug);
      const mod = sym ? modulePathForSymbol(sym, importMap, extraSymbols) : null;
      if (mod) {
        const p = path.join(ROOT, "src/lib/data/services", mod + ".ts");
        if (fs.existsSync(p)) tsTitle = parseTitleFromServiceTs(fs.readFileSync(p, "utf8"));
      }
    }

    const slice = isCat ? sliceCategoryAppendix(mdRaw, tsTitle).text : mdRaw;
    const parsed = parseMdAdvDis(slice);
    const issues = [];

    if (parsed.note) {
      advDisRows.push({
        slug,
        pillar,
        appendixFile: path.relative(ROOT, mdPath),
        appendixKind: isCat ? "category" : "dedicated",
        appendixSliceNote: isCat ? sliceCategoryAppendix(mdRaw, tsTitle).appendixSlice : "full_file",
        tsAdvCount: tsLists.adv.length,
        tsDisCount: tsLists.dis.length,
        mdStandardAdvDisSection: false,
        mdParseNote: parsed.note,
        message:
          "No 'Advantages and Disadvantages' + hyphen bullets in appendix slice (may use Benefits/sections prose—manual or prior XBRL-style sync).",
      });
      continue;
    }

    issues.push(...compareBullets(parsed.adv, tsLists.adv, "advantages"));
    issues.push(...compareBullets(parsed.dis, tsLists.dis, "disadvantages"));

    advDisRows.push({
      slug,
      pillar,
      appendixFile: path.relative(ROOT, mdPath),
      appendixKind: isCat ? "category" : "dedicated",
      tsAdvCount: tsLists.adv.length,
      tsDisCount: tsLists.dis.length,
      mdAdvCount: parsed.adv.length,
      mdDisCount: parsed.dis.length,
      mdStandardAdvDisSection: true,
      issueCount: issues.length,
      issues,
    });
  }

  const slugCsv = pillarSlugs.join(",");
  try {
    execSync(
      `node tools/audit-appendix-vs-structured-service-data.mjs`,
      {
        cwd: ROOT,
        stdio: "inherit",
        env: { ...process.env, AUDIT_APPENDIX_ONLY_SLUGS: slugCsv },
      }
    );
  } catch (e) {
    console.error("appendix-vs-structured child run failed", e?.message || e);
  }

  let appendixGapSubset = null;
  const gapPath = path.join(ROOT, "tools/appendix-structured-gap-report.json");
  if (fs.existsSync(gapPath)) {
    const gap = JSON.parse(fs.readFileSync(gapPath, "utf8"));
    const want = new Set(pillarSlugs);
    appendixGapSubset = {
      slugsInReport: gap.slugs?.length ?? 0,
      nonStubStrictGaps: (gap.slugs || []).filter(
        (e) =>
          want.has(e.slug) &&
          !e.navBackedStub &&
          !e.skipped &&
          !e.error &&
          e.missingCount > 0
      ).length,
      nonStubFuzzyResidual: (gap.slugs || []).filter(
        (e) =>
          want.has(e.slug) &&
          !e.navBackedStub &&
          !e.skipped &&
          !e.error &&
          e.fuzzyMissingCount > 0
      ).length,
    };
  }

  const advDisIssues = advDisRows.filter(
    (r) => r.issueCount > 0 || (r.issues && r.issues.length > 0)
  );

  const report = {
    generatedAt: new Date().toISOString(),
    pillars: PILLOWS,
    summary: {
      pillarServiceSlugs: pillarSlugs.length,
      advDisStandardSectionCompared: advDisRows.filter((r) => r.mdStandardAdvDisSection)
        .length,
      advDisRowsWithBulletIssues: advDisIssues.length,
      navBackedSkipped: advDisRows.filter((r) => r.navStub).length,
      noStandardAdvDisInMd: advDisRows.filter((r) => r.mdParseNote).length,
      appendixGapSubset,
    },
    advDisRows,
  };

  fs.writeFileSync(REPORT, JSON.stringify(report, null, 2), "utf8");
  console.log(`wrote ${path.relative(ROOT, REPORT)}`);
  console.log(JSON.stringify(report.summary, null, 2));
  if (advDisIssues.length) {
    console.log("\nSlugs with adv/dis bullet mismatches vs MD:");
    for (const r of advDisIssues.slice(0, 25)) {
      console.log(`  ${r.slug}: ${r.issueCount} issues`);
    }
    if (advDisIssues.length > 25)
      console.log(`  ... +${advDisIssues.length - 25} more`);
  }
}

main();
