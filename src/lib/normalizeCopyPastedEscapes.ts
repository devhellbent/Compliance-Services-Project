/**
 * Removes JSON / copy-paste escape artifacts that were stored literally in strings
 * (e.g. `country\'s`, `\"Ease of Doing Business\"`) so they render as normal punctuation.
 *
 * Also fixes Word-style “continuation” backslashes after markdown bold (`**Label**\ Next` → paragraph break),
 * and stray `\` + spaces so we do not show a lone backslash after headings in the UI.
 */
export function normalizeCopyPastedEscapes(input: string): string {
  if (!input || typeof input !== "string") return input;
  return (
    input
      .replace(/\\'/g, "'")
      .replace(/\\"/g, '"')
      // "**Section**\" + continuation" (common Word paste): break into a new paragraph
      .replace(/(?<=\*\*)\s*\\\s+/g, "\n\n")
      // Backslash then horizontal space → single space (remaining continuations)
      .replace(/\\([\t ]+)/g, " ")
      // Line continuation: backslash immediately before a newline
      .replace(/\\\r?\n/g, "\n")
      // Trailing `\` at end of a line (artifact when closing `**` had `\` with no space)
      .replace(/\\\s*$/gm, "")
  );
}
