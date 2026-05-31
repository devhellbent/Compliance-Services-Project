import type { Components } from "react-markdown";
import type { ElementType, ReactNode } from "react";

function flattenText(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number")
    return String(node);
  if (Array.isArray(node)) return node.map(flattenText).join("");
  if (typeof node === "object" && "props" in node) {
    const el = node as { props?: { children?: ReactNode } };
    return flattenText(el.props?.children);
  }
  return "";
}

function isAllCapsHeading(s: string): boolean {
  const t = s.trim();
  if (t.length < 3 || t.length > 85) return false;
  const letters = t.replace(/[^A-Za-z]/g, "");
  if (letters.length < 3) return false;
  if (/[a-z]/.test(letters)) return false;
  return /^[A-Z0-9][A-Z0-9\s,.'&\-/]+$/.test(t);
}

/** Turn flat Word-style paragraphs into heading-like blocks when they read as titles or questions. */
function paragraphRole(text: string): "h2" | "h3" | "h4" | "p" {
  const t = text.trim();
  if (!t) return "p";
  if (/^\d+\.\s/.test(t) && t.length > 40) return "p";
  if (isAllCapsHeading(t)) return "h2";
  if (t.endsWith("?")) return "h3";
  if (t.endsWith(":") && t.length <= 100 && !/\.\s/.test(t)) return "h4";
  const words = t.split(/\s+/).length;
  if (
    words <= 12 &&
    t.length <= 100 &&
    !/[.!?]$/.test(t) &&
    /^[A-Z]/.test(t) &&
    !/\|\s/.test(t)
  ) {
    return "h3";
  }
  return "p";
}

export type ServiceMarkdownTone = "default" | "hero" | "compact";

export type ServiceMarkdownOptions = {
  /** When true, flat paragraphs may render as h2/h3/h4 heuristics (overview / long FAQ). */
  promoteFlatParagraphs?: boolean;
  tone?: ServiceMarkdownTone;
  /** Use `span` with `display:block` inside `<li>` to avoid invalid `<p>` in lists. */
  paragraphElement?: "p" | "span";
  /**
   * Valid content for HTML `<summary>`: phrasing-only (no `p`/`ul`/block flow).
   * Markdown headings render as styled spans; lists render as stacked spans with bullets.
   */
  summarySlot?: boolean;
};

const defaultPromotedRoleClass: Record<"h2" | "h3" | "h4" | "p", string> = {
  h2: "text-2xl font-bold uppercase tracking-wide text-orange-700 mt-10 mb-4 border-b-2 border-orange-200 pb-2 scroll-mt-28",
  h3: "text-xl font-semibold text-gray-900 mt-8 mb-3 pl-3 border-l-4 border-orange-500 scroll-mt-28",
  h4: "text-lg font-semibold text-orange-700 mt-6 mb-2 scroll-mt-28",
  p: "text-lg text-gray-700 leading-relaxed mb-4",
};

const heroPromotedRoleClass: Record<"h2" | "h3" | "h4" | "p", string> = {
  h2: "text-sm font-bold uppercase tracking-wide text-orange-100 mt-3 mb-2 border-b border-orange-200/40 pb-1",
  h3: "text-sm font-semibold text-white mt-2 mb-1 pl-2 border-l-2 border-white/70",
  h4: "text-sm font-semibold text-orange-50 mt-2 mb-1",
  p: "text-sm text-orange-50 leading-relaxed mb-2",
};

const compactPromotedRoleClass: Record<"h2" | "h3" | "h4" | "p", string> = {
  h2: "text-base font-bold uppercase tracking-wide text-orange-700 mt-4 mb-2 border-b border-orange-200 pb-1 scroll-mt-28",
  h3: "text-base font-semibold text-gray-900 mt-3 mb-2 pl-2 border-l-4 border-orange-500 scroll-mt-28",
  h4: "text-sm font-semibold text-orange-700 mt-2 mb-1 scroll-mt-28",
  p: "text-sm text-gray-700 leading-relaxed mb-2",
};

function promotedRoleClass(
  tone: ServiceMarkdownTone
): Record<"h2" | "h3" | "h4" | "p", string> {
  if (tone === "hero") return heroPromotedRoleClass;
  if (tone === "compact") return compactPromotedRoleClass;
  return defaultPromotedRoleClass;
}

function strongClass(tone: ServiceMarkdownTone): string {
  if (tone === "hero") return "font-semibold text-white";
  if (tone === "compact") return "font-semibold text-gray-900";
  return "font-semibold text-gray-900";
}

function headingToneClasses(tone: ServiceMarkdownTone) {
  if (tone === "hero") {
    return {
      h1: "text-lg font-bold text-white mt-2 mb-2 border-b border-orange-200/40 pb-1",
      h2: "text-base font-bold text-orange-50 mt-3 mb-2 border-b border-orange-200/40 pb-1 scroll-mt-28",
      h3: "text-sm font-semibold text-white mt-2 mb-1 scroll-mt-28",
      h4: "text-sm font-semibold text-orange-50 mt-2 mb-1 scroll-mt-28",
    };
  }
  if (tone === "compact") {
    return {
      h1: "text-xl font-bold text-gray-900 mt-2 mb-3 border-b border-orange-200 pb-2",
      h2: "text-lg font-bold text-gray-900 mt-4 mb-2 border-b border-orange-200 pb-1 scroll-mt-28",
      h3: "text-base font-semibold text-gray-900 mt-3 mb-2 scroll-mt-28",
      h4: "text-sm font-semibold text-gray-800 mt-2 mb-1 scroll-mt-28",
    };
  }
  return {
    h1: "text-3xl font-bold text-gray-900 mt-4 mb-6 border-b border-orange-200 pb-3",
    h2: "text-2xl font-bold text-gray-900 mt-10 mb-4 border-b border-orange-200 pb-2 scroll-mt-28",
    h3: "text-xl font-semibold text-gray-900 mt-8 mb-3 scroll-mt-28",
    h4: "text-lg font-semibold text-gray-800 mt-6 mb-2 scroll-mt-28",
  };
}

function listItemClass(tone: ServiceMarkdownTone): string {
  if (tone === "compact")
    return "my-1 text-sm text-gray-700 leading-relaxed";
  if (tone === "hero") return "my-1 text-sm text-orange-50 leading-relaxed";
  return "my-2 text-lg text-gray-700 leading-relaxed";
}

function ulClass(tone: ServiceMarkdownTone): string {
  if (tone === "compact")
    return "my-2 list-none space-y-1 border-l-2 border-orange-100 pl-3";
  if (tone === "hero")
    return "my-2 list-none space-y-1 border-l border-white/30 pl-3";
  return "my-4 list-none space-y-2 border-l-2 border-orange-100 pl-4";
}

function olClass(tone: ServiceMarkdownTone): string {
  if (tone === "compact")
    return "my-2 list-decimal space-y-1 pl-5 text-sm text-gray-700";
  if (tone === "hero")
    return "my-2 list-decimal space-y-1 pl-5 text-sm text-orange-50";
  return "my-4 list-decimal space-y-2 pl-6 text-lg text-gray-700";
}

function blockquoteClass(tone: ServiceMarkdownTone): string {
  if (tone === "hero")
    return "my-2 border-l-4 border-orange-200/60 bg-white/5 py-2 pl-3 pr-2 text-orange-50 text-sm italic";
  if (tone === "compact")
    return "my-2 border-l-4 border-orange-300 bg-orange-50/60 py-2 pl-3 pr-2 text-gray-800 text-sm italic";
  return "my-4 border-l-4 border-orange-300 bg-orange-50/60 py-3 pl-4 pr-2 text-gray-800 italic";
}

const summaryHeadingSpanClass: Record<ServiceMarkdownTone, string> = {
  default: "font-semibold text-gray-900 block text-base mb-0.5",
  hero: "font-semibold text-white block text-sm mb-0.5",
  compact: "font-semibold text-gray-800 block text-sm mb-0.5",
};

const summaryPhrasingPClass: Record<ServiceMarkdownTone, string> = {
  default: "text-gray-800 block text-sm leading-snug mb-1 last:mb-0",
  hero: "text-orange-50 block text-sm leading-snug mb-1 last:mb-0",
  compact: "text-gray-800 block text-sm leading-snug mb-1 last:mb-0",
};

export function createServiceMarkdownComponents(
  options: ServiceMarkdownOptions = {}
): Components {
  const {
    promoteFlatParagraphs: promoteOpt = true,
    tone = "default",
    paragraphElement: paragraphElementOpt = "p",
    summarySlot = false,
  } = options;

  const promoteFlatParagraphs = summarySlot ? false : promoteOpt;
  const paragraphElement = summarySlot ? "span" : paragraphElementOpt;

  const roleCls = promotedRoleClass(tone);
  const headings = headingToneClasses(tone);
  const strongCls = strongClass(tone);
  const liCls = listItemClass(tone);
  const ulCls = ulClass(tone);
  const olCls = olClass(tone);
  const bqCls = blockquoteClass(tone);
  const summaryHSpan = summaryHeadingSpanClass[tone];
  const summaryPSpan = summaryPhrasingPClass[tone];

  const Body: ElementType = paragraphElement === "span" ? "span" : "p";
  const bodyExtra = paragraphElement === "span" ? " block" : "";

  return {
    p({ children }) {
      const text = flattenText(children);
      const role = promoteFlatParagraphs ? paragraphRole(text) : "p";
      const cls = roleCls[role] + bodyExtra;
      if (summarySlot) {
        return <span className={summaryPSpan}>{children}</span>;
      }
      if (role === "h2") return <h2 className={cls}>{children}</h2>;
      if (role === "h3") return <h3 className={cls}>{children}</h3>;
      if (role === "h4") return <h4 className={cls}>{children}</h4>;
      return <Body className={cls}>{children}</Body>;
    },
    strong({ children }) {
      return <strong className={strongCls}>{children}</strong>;
    },
    h1({ children }) {
      if (summarySlot)
        return <span className={`${summaryHSpan} text-lg`}>{children}</span>;
      return <h1 className={headings.h1}>{children}</h1>;
    },
    h2({ children }) {
      if (summarySlot)
        return <span className={summaryHSpan}>{children}</span>;
      return <h2 className={headings.h2}>{children}</h2>;
    },
    h3({ children }) {
      if (summarySlot)
        return <span className={summaryHSpan}>{children}</span>;
      return <h3 className={headings.h3}>{children}</h3>;
    },
    h4({ children }) {
      if (summarySlot)
        return <span className={summaryHSpan}>{children}</span>;
      return <h4 className={headings.h4}>{children}</h4>;
    },
    h5({ children }) {
      if (summarySlot)
        return <span className={summaryHSpan}>{children}</span>;
      return <h5 className={headings.h4}>{children}</h5>;
    },
    h6({ children }) {
      if (summarySlot)
        return <span className={summaryHSpan}>{children}</span>;
      return <h6 className={headings.h4}>{children}</h6>;
    },
    li({ children }) {
      if (summarySlot) {
        return (
          <span className="block pl-4 -indent-4 text-sm text-gray-800 leading-snug my-0.5">
            <span className="inline-block w-3 shrink-0 text-center" aria-hidden>
              •
            </span>
            <span className="inline align-top">{children}</span>
          </span>
        );
      }
      return <li className={liCls}>{children}</li>;
    },
    ul({ children }) {
      if (summarySlot) {
        return <span className="block my-1">{children}</span>;
      }
      return <ul className={ulCls}>{children}</ul>;
    },
    ol({ children }) {
      if (summarySlot) {
        return <span className="block my-1">{children}</span>;
      }
      return <ol className={olCls}>{children}</ol>;
    },
    blockquote({ children }) {
      if (summarySlot) {
        return (
          <span className="block border-l-2 border-orange-300 pl-2 my-1 text-sm italic text-gray-700">
            {children}
          </span>
        );
      }
      return <blockquote className={bqCls}>{children}</blockquote>;
    },
    a({ href, children }) {
      const cls =
        tone === "hero"
          ? "text-orange-100 underline underline-offset-2 hover:text-white"
          : tone === "compact"
            ? "text-orange-600 underline underline-offset-2 hover:text-orange-800"
            : "text-orange-600 underline underline-offset-2 hover:text-orange-800";
      return (
        <a href={href} className={cls} rel="noopener noreferrer">
          {children}
        </a>
      );
    },
    code({ className, children, ...props }) {
      if (className?.includes("language-")) {
        return (
          <code className={className} {...props}>
            {children}
          </code>
        );
      }
      const inline =
        tone === "hero"
          ? "rounded bg-white/15 px-1 py-0.5 text-orange-50"
          : "rounded bg-gray-100 px-1 py-0.5 text-gray-800 text-[0.9em]";
      return (
        <code className={inline} {...props}>
          {children}
        </code>
      );
    },
  };
}
