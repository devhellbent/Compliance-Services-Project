import { NAV_DOCUMENT_BACKED_OVERVIEW_SENTINEL } from "@/lib/data/services/nav-document-backed-pages";
import { extractAppendixOverviewExcerpt } from "@/lib/documents/extractAppendixOverviewExcerpt";
import {
  extractAppendixFullServiceSection,
} from "@/lib/documents/extractAppendixFullServiceSection";

const APPENDIX_SECTION_MAX = 200_000;
/** Nav-backed stubs: fallback when no `Title` + `Overview` slice matches. */
const EXCERPT_STUB_FALLBACK = 25_000;
/** Bespoke TS pages: pull as much appendix text as possible when slice match fails. */
const EXCERPT_NON_STUB_FALLBACK = 200_000;
/**
 * Share of appendix “content tokens” (len ≥ 4) that already appear in `overview`.
 * Above this → structured TS already embeds the same material → skip prepend.
 */
const OVERVIEW_COVERAGE_SKIP = 0.65;
/** Lower threshold for pages with rich structured data (advantages, eligibility, documents already filled). */
const RICH_DATA_COVERAGE_SKIP = 0.45;
/** When prepended text covers at least this fraction of the appendix file, omit the duplicate block below. */
const APPENDIX_INLINE_FRACTION_HIDE_BELOW = 0.9;

export type AppendixOverviewMerge = {
  overview: string;
  /**
   * When false, the "Full source text" section is omitted — the appendix is already
   * shown in Service Overview (avoids repeating the same document twice).
   */
  showAppendixMarkdownBelow: boolean;
};

function normForOverlap(s: string): string {
  return s
    .replace(/\*\*/g, "")
    .replace(/#{1,6}\s+/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

/** True when appendix text is largely the same wording already present in structured page data. */
function appendixAlreadyLargelyInOverview(excerpt: string, overview: string, fullStructuredText?: string, hasRichStructuredData?: boolean): boolean {
  const ex = excerpt.trim();
  // Use the full structured text (all sections combined) when available for better overlap detection
  const haystack = fullStructuredText?.trim() || overview.trim();
  if (ex.length < 80) return haystack.length > 0 && normForOverlap(haystack).includes(normForOverlap(ex));

  const h = normForOverlap(haystack);
  const n = normForOverlap(ex);
  const tokens = [
    ...new Set(n.split(/[^a-z0-9]+/).filter((t) => t.length >= 4)),
  ];
  if (tokens.length < 12) {
    return h.includes(n.slice(0, Math.min(400, n.length)));
  }
  let hits = 0;
  for (const t of tokens) {
    if (h.includes(t)) hits++;
  }
  const threshold = hasRichStructuredData ? RICH_DATA_COVERAGE_SKIP : OVERVIEW_COVERAGE_SKIP;
  return hits / tokens.length >= threshold;
}

/**
 * Prepends verbatim appendix copy ahead of the structured `overview` when that copy
 * is **not** already reflected there (avoids pointless duplication). Nav-backed stubs
 * always prepend when an excerpt exists, because structured `overview` is only a stub.
 *
 * Order: (1) full slice from `Title` + `Overview` through the next service header or EOF,
 * (2) otherwise a long fuzzy excerpt for non-stubs / stub-sized excerpt for stubs.
 * @returns Merged overview plus whether to render the bottom appendix block.
 */
export function mergeAppendixExcerptIntoStubOverview(
  overview: string,
  appendixMarkdown: string | null | undefined,
  title: string,
  fullStructuredText?: string,
  hasRichStructuredData?: boolean
): AppendixOverviewMerge {
  if (!appendixMarkdown?.trim()) {
    return {
      overview: overview.trim(),
      showAppendixMarkdownBelow: false,
    };
  }

  const md = appendixMarkdown.replace(/\r\n/g, "\n");
  const isStub = overview.includes(NAV_DOCUMENT_BACKED_OVERVIEW_SENTINEL);

  const full = extractAppendixFullServiceSection(
    md,
    title,
    APPENDIX_SECTION_MAX
  );

  const excerpt =
    full?.trim() ??
    extractAppendixOverviewExcerpt(
      appendixMarkdown,
      title,
      isStub ? EXCERPT_STUB_FALLBACK : EXCERPT_NON_STUB_FALLBACK
    );

  const appendixLen = appendixMarkdown.trim().length;

  if (!excerpt?.trim()) {
    return {
      overview: overview.trim(),
      showAppendixMarkdownBelow: appendixLen > 0,
    };
  }

  // Pages with complete structured data never get appendix prepended — it's shown at the bottom only
  if (!isStub && hasRichStructuredData) {
    return {
      overview: overview.trim(),
      showAppendixMarkdownBelow: appendixLen > 0,
    };
  }

  if (!isStub && appendixAlreadyLargelyInOverview(excerpt, overview, fullStructuredText, hasRichStructuredData)) {
    return {
      overview: overview.trim(),
      showAppendixMarkdownBelow: appendixLen > 0,
    };
  }

  const merged = `${excerpt.trim()}\n\n---\n\n${overview.trim()}`;
  const excerptLen = excerpt.trim().length;
  const mostlyEntireAppendixInOverview =
    appendixLen > 0 &&
    excerptLen >= appendixLen * APPENDIX_INLINE_FRACTION_HIDE_BELOW;

  const showAppendixMarkdownBelow =
    isStub || !mostlyEntireAppendixInOverview;

  return {
    overview: merged,
    showAppendixMarkdownBelow,
  };
}
