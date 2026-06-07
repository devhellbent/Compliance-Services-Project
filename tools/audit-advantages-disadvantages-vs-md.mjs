/**
 * Compare `advantages` / `disadvantages` in each company_registration `*.ts`
 * to bullets under **Advantages** / **Disadvantages** in the matching
 * `src/content/documents/registration/<same-stem>.md` when present.
 *
 * Run: node tools/audit-advantages-disadvantages-vs-md.mjs
 *
 * Output: tools/adv-dis-vs-registration-md-report.json + stdout summary.
 *
 * Matching: each markdown bullet "Title: body" must have a TS item whose
 * title equals Title (trim) and whose text normalizes to the same body
 * (after lowercasing, collapsing spaces, stripping **).
 *
 * Note: `trust-registration.md` uses long prose under "Advantages and Disadvantages"
 * instead of `- Title: body` bullets — that file is skipped (no automated compare).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const MD_DIR = path.join(ROOT, "src/content/documents/registration");
const TS_DIR = path.join(
  ROOT,
  "src/lib/data/services/registration/company_registration"
);
const REPORT = path.join(ROOT, "tools/adv-dis-vs-registration-md-report.json");

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

/** Extract content between `key: [` and matching `],` at bracket depth 1. */
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

/**
 * Parse AdvantageDisadvantage-like objects: title + text (double, single, or backtick).
 */
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
    const tm = block.match(/title:\s*("((?:\\.|[^"\\])*)"|'((?:\\.|[^'\\])*)'|`([^`]*)`)/);
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
    /\n\n\s*(?:Eligibility|Documents|Fees|Checklist|Process|Registration)\b/i
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
      issues.push({
        type: "missing_item",
        kind,
        index: i,
        md: md || null,
        ts: ts || null,
      });
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
    const nb = norm(md.body);
    const nt = norm(ts.text);
    if (nb !== nt) {
      issues.push({
        type: "text_mismatch",
        kind,
        index: i,
        title: md.title,
        mdText: md.body,
        tsText: ts.text,
      });
    }
  }
  return issues;
}

function main() {
  const mdFiles = fs
    .readdirSync(MD_DIR)
    .filter((f) => f.endsWith(".md"))
    .sort();
  const rows = [];
  for (const mf of mdFiles) {
    const stem = mf.replace(/\.md$/i, "");
    const tsPath = path.join(TS_DIR, `${stem}.ts`);

    if (mf === "trust-registration.md") {
      rows.push({
        mdFile: mf,
        tsFile: fs.existsSync(tsPath) ? path.relative(ROOT, tsPath) : null,
        mdAdvCount: null,
        mdDisCount: null,
        tsAdvCount: null,
        tsDisCount: null,
        issueCount: 0,
        issues: [],
        skip: "trust_md_prose_not_bullet_list",
      });
      continue;
    }

    if (!fs.existsSync(tsPath)) {
      rows.push({
        mdFile: mf,
        tsFile: null,
        skip: "no_matching_ts",
      });
      continue;
    }

    const md = fs.readFileSync(path.join(MD_DIR, mf), "utf8");
    const tsSrc = fs.readFileSync(tsPath, "utf8");
    const advInner = extractBracketArray(tsSrc, "advantages");
    const disInner = extractBracketArray(tsSrc, "disadvantages");
    const tsAdv = advInner ? parseAdvDisObjects(advInner) : [];
    const tsDis = disInner ? parseAdvDisObjects(disInner) : [];
    const parsed = parseMdAdvDis(md);
    const issues = [
      ...compareBullets(parsed.adv, tsAdv, "advantages"),
      ...compareBullets(parsed.dis, tsDis, "disadvantages"),
    ];
    if (parsed.note) {
      issues.push({ type: "md_parse", detail: parsed.note });
    }
    rows.push({
      mdFile: mf,
      tsFile: path.relative(ROOT, tsPath),
      mdAdvCount: parsed.adv.length,
      mdDisCount: parsed.dis.length,
      tsAdvCount: tsAdv.length,
      tsDisCount: tsDis.length,
      issueCount: issues.length,
      issues,
    });
  }

  const bad = rows.filter((r) => r.issueCount > 0 && !r.skip);
  fs.writeFileSync(REPORT, JSON.stringify({ rows, summary: { files: rows.length, withIssues: bad.length } }, null, 2));
  console.log(`wrote ${path.relative(ROOT, REPORT)}`);
  console.log(`files=${rows.length} withIssues=${bad.length}`);
  for (const r of bad) {
    console.log(`\n## ${r.mdFile} (${r.issueCount} issues)`);
    for (const it of r.issues.slice(0, 12)) {
      console.log(JSON.stringify(it));
    }
    if (r.issues.length > 12) console.log(`... +${r.issues.length - 12} more`);
  }
}

main();
