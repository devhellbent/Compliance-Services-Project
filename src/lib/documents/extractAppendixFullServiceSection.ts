import {
  escapeRegExp,
  titleMatchCandidates,
} from "@/lib/documents/extractAppendixOverviewExcerpt";

const serviceBoundaryRe =
  /\n\n(#\s*)?([^\n#|][^\n]{1,200}?)\s*\n\n(?:overview)\s*\n/gi;

const fileStartBoundaryRe =
  /^(#\s*)?([^\n#|][^\n]{1,200}?)\s*\n\n(?:overview)\s*\n/im;

/**
 * Counts `Title` + blank line + `Overview` blocks — used to tell multi-chapter
 * category appendices apart from single-service markdown files.
 */
export function countAppendixServiceBoundaries(markdown: string): number {
  const md = markdown.replace(/\r\n/g, "\n").trim();
  if (!md) return 0;
  let n = 0;
  if (fileStartBoundaryRe.test(md)) n++;
  const re = new RegExp(serviceBoundaryRe.source, "g");
  while (re.exec(md) !== null) n++;
  return n;
}

/**
 * Returns the verbatim slice from `Title`/`Overview` through the next service
 * header (or EOF). Only meaningful when the appendix uses the Word export pattern.
 */
export function extractAppendixFullServiceSection(
  markdown: string,
  title: string,
  maxChars: number
): string | null {
  const md = markdown.replace(/\r\n/g, "\n");
  const candidates = titleMatchCandidates(title);
  let start = -1;
  for (const c of candidates) {
    const esc = escapeRegExp(c);
    const mid = new RegExp(
      `\\n\\n#*\\s*${esc}\\s*\\n\\n(?:overview)\\s*\\n`,
      "i"
    );
    const mMid = mid.exec(md);
    if (mMid) {
      start = mMid.index + 2;
      break;
    }
    const top = new RegExp(`^#*\\s*${esc}\\s*\\n\\n(?:overview)\\s*\\n`, "im");
    const mTop = top.exec(md);
    if (mTop) {
      start = mTop.index;
      break;
    }
  }
  if (start < 0) return null;

  const selfLower = new Set(candidates.map((t) => t.toLowerCase()));
  const searchFrom = Math.min(start + 40, md.length);
  const re = new RegExp(serviceBoundaryRe.source, "g");
  re.lastIndex = searchFrom;
  let end = -1;
  let m: RegExpExecArray | null;
  while ((m = re.exec(md)) !== null) {
    const cap = (m[2] ?? "").replace(/^#\s*/, "").trim();
    if (!cap || /^overview$/i.test(cap)) continue;
    if (selfLower.has(cap.toLowerCase())) continue;
    end = m.index;
    break;
  }

  let chunk =
    end === -1 ? md.slice(start).trim() : md.slice(start, end).trim();
  if (chunk.length > maxChars) {
    chunk = chunk.slice(0, maxChars).trimEnd();
    const cut = chunk.lastIndexOf("\n\n", maxChars - 200);
    if (cut > 800) chunk = chunk.slice(0, cut).trimEnd();
  }
  return chunk || null;
}
