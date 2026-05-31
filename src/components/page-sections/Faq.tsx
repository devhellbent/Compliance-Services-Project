// components/page-sections/proprietorship/Faq.tsx
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { normalizeCopyPastedEscapes } from "@/lib/normalizeCopyPastedEscapes";
import { createServiceMarkdownComponents } from "@/components/serviceMarkdownComponents";

const faqQuestionMarkdownComponents = createServiceMarkdownComponents({
  tone: "compact",
  summarySlot: true,
});

const faqAnswerMarkdownComponents = createServiceMarkdownComponents({
  tone: "compact",
  promoteFlatParagraphs: true,
});

type FaqItem = {
  q: string;
  a: string;
};

interface FaqProps {
  faqs: FaqItem[];
}

export const Faq = ({ faqs }: FaqProps) => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq: FaqItem) => (
            <details
              key={faq.q}
              className="p-4 border rounded-lg bg-white group cursor-pointer"
            >
              <summary className="font-semibold text-gray-800 list-none flex justify-between items-center gap-2 min-w-0">
                <span className="min-w-0 flex-1 text-left">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={faqQuestionMarkdownComponents}
                  >
                    {normalizeCopyPastedEscapes(faq.q)}
                  </ReactMarkdown>
                </span>
                <span className="transform group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <div className="mt-2 text-gray-600 pt-2 border-t service-markdown min-w-0 break-words">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={faqAnswerMarkdownComponents}
                >
                  {normalizeCopyPastedEscapes(faq.a)}
                </ReactMarkdown>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
