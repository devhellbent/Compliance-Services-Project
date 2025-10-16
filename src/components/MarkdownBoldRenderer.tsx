import React, { useMemo } from "react";

// Define the component's props
interface MarkdownBoldRendererProps {
  text: string;
  // Optional: specify the wrapping element (e.g., p, span, div)
  as?: React.ElementType;
}

export const MarkdownBoldRenderer: React.FC<MarkdownBoldRendererProps> = ({
  text,
  as: Component = "p",
}) => {
  /**
   * This function converts the Markdown-style bolding to HTML <strong> tags.
   * We use `useMemo` for performance optimization, so the conversion only
   * reruns when the input `text` prop changes.
   */
  const createMarkup = useMemo(() => {
    // The same replace logic as before
    const html = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    return { __html: html };
  }, [text]);

  // Render the component using dangerouslySetInnerHTML
  return (
    <Component
      dangerouslySetInnerHTML={createMarkup}
      className="text-lg text-gray-600"
    />
  );
};
