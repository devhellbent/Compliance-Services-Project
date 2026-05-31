import { normalizeCopyPastedEscapes } from "@/lib/normalizeCopyPastedEscapes";

/** Nav-backed stub pages use this boilerplate in `description`; hero should use `overview` instead. */
function isNavStubDescription(description: string): boolean {
  return /verbatim source documentation is included on this page/i.test(
    description
  );
}

/**
 * Short hero blurb: prefer `description`; otherwise first segment of `overview`
 * (before the first markdown `##` heading and first blank line), capped for layout.
 */
export function getServiceHeroMarkdown(data: {
  description?: string;
  overview: string;
}): string {
  const desc = data.description?.trim();
  if (desc && !isNavStubDescription(desc)) {
    return normalizeCopyPastedEscapes(desc);
  }
  const ov = normalizeCopyPastedEscapes(data.overview);
  const beforeMajorHeading = ov.split(/\n##\s/)[0]?.trim() ?? ov;
  const firstBlock =
    beforeMajorHeading.split(/\n\s*\n+/)[0]?.trim() ?? beforeMajorHeading;
  const singleLine = firstBlock.replace(/\n+/g, " ").trim();
  const max = 380;
  return singleLine.length > max
    ? `${singleLine.slice(0, max - 1).trimEnd()}…`
    : singleLine;
}
