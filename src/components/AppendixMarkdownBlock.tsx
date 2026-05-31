import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { normalizeCopyPastedEscapes } from "@/lib/normalizeCopyPastedEscapes";
import { createServiceMarkdownComponents } from "@/components/serviceMarkdownComponents";

type AppendixMarkdownBlockProps = {
  markdown: string;
};

/** Server-rendered markdown (keeps large source text off the client bundle / RSC props). */
export function AppendixMarkdownBlock({ markdown }: AppendixMarkdownBlockProps) {
  return (
    <div className="service-markdown max-w-none min-w-0 text-gray-800 break-words overflow-x-auto [&_table]:text-sm [&_th]:bg-gray-100 [&_td]:border [&_th]:border [&_table]:block [&_table]:max-w-full [&_table]:overflow-x-auto [&_a]:break-all">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={createServiceMarkdownComponents()}
      >
        {normalizeCopyPastedEscapes(markdown)}
      </ReactMarkdown>
    </div>
  );
}
