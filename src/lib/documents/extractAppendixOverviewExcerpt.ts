export function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function titleMatchCandidates(serviceTitle: string): string[] {
  const t = serviceTitle.trim();
  const out = new Set<string>([t]);
  const stripped = t.replace(/\s*\([^)]*\)\s*$/, "").trim();
  if (stripped.length > 0 && stripped !== t) out.add(stripped);
  return [...out];
}

/**
 * Pulls a readable excerpt from a large category appendix so stub service pages
 * show real body copy in "Service Overview", not only the title + appendix note.
 */
export function extractAppendixOverviewExcerpt(
  markdown: string,
  title: string,
  maxChars: number
): string | null {
  const md = markdown.replace(/\r\n/g, "\n").trim();
  if (!md || !title.trim()) return null;

  let start = -1;
  for (const cand of titleMatchCandidates(title)) {
    const tEsc = escapeRegExp(cand);
    const titleLineRe = new RegExp(
      `(^|\\n)#*\\s*${tEsc}\\s*(?=\\n|$)`,
      "im"
    );
    const mLine = titleLineRe.exec(md);
    if (mLine) {
      start = mLine.index;
      break;
    }
  }

  if (start === -1) {
    const lower = md.toLowerCase();
    for (const cand of titleMatchCandidates(title)) {
      const idx = lower.indexOf(cand.toLowerCase());
      if (idx !== -1) {
        const paraStart = md.lastIndexOf("\n\n", idx);
        start = paraStart === -1 ? 0 : paraStart + 2;
        break;
      }
    }
  }

  if (start === -1) {
    const blocks = md.split(/\n{2,}/).map((b) => b.trim());
    const ov = blocks.findIndex(
      (b) => /^overview$/i.test(b) || b.toUpperCase() === "OVERVIEW"
    );
    if (ov !== -1) {
      const body = blocks.slice(ov + 1, ov + 8).join("\n\n").trim();
      if (body.length > 80) {
        return body.slice(0, maxChars);
      }
    }
    start = 0;
  }

  let slice = md.slice(start, start + maxChars);
  const cut = slice.lastIndexOf("\n\n", maxChars - 200);
  if (cut > 800) slice = slice.slice(0, cut);
  return slice.trim() || null;
}
