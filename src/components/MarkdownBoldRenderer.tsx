import React, { useMemo } from "react";

// Define the component's props
interface MarkdownBoldRendererProps {
  text: string;
  /** Optional wrapping element. Defaults to "span" to avoid invalid nested <p> structures. */
  as?: React.ElementType;
  /** Optional className to merge with default sizing */
  className?: string;
  /** If true, will output block-level element (div) regardless of `as` when inside list items or paragraphs */
  forceBlock?: boolean;
}

export const MarkdownBoldRenderer: React.FC<MarkdownBoldRendererProps> = ({
  text,
  as: Component = "span",
  className = "text-lg",
  forceBlock = false,
}) => {
  /**
   * This function converts the Markdown-style bolding to HTML <strong> tags.
   * We use `useMemo` for performance optimization, so the conversion only
   * reruns when the input `text` prop changes.
   */
  const createMarkup = useMemo(() => {
    let html = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

    // Strip accidental outer <p> tags if present to avoid nesting when parent is also a <p>
    // This is defensive – only removes ONE pair of wrapping <p> .. </p>
    const trimmed = html.trim();
    if (trimmed.startsWith("<p>") && trimmed.endsWith("</p>")) {
      html = trimmed.slice(3, trimmed.length - 4).trim();
    }
    return { __html: html };
  }, [text]);

  // Render the component using dangerouslySetInnerHTML
  // If forceBlock requested, override to div
  const Element: React.ElementType = forceBlock ? "div" : Component;

  return (
    <Element dangerouslySetInnerHTML={createMarkup} className={className} />
  );
};
