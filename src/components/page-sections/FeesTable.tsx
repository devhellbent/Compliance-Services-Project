import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { normalizeCopyPastedEscapes } from "@/lib/normalizeCopyPastedEscapes";
import { createServiceMarkdownComponents } from "@/components/serviceMarkdownComponents";

const feeCellMarkdownComponents = createServiceMarkdownComponents({
  tone: "compact",
  promoteFlatParagraphs: false,
});

type Fee = {
  component: string;
  fees: string | number;
  remarks: string;
};

type FeesTableProps = {
  fees: Fee[];
};

function FeeTextCell({ text }: { text: string }) {
  return (
    <div className="service-markdown min-w-0 max-w-md break-words text-sm">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={feeCellMarkdownComponents}
      >
        {normalizeCopyPastedEscapes(text)}
      </ReactMarkdown>
    </div>
  );
}

export const FeesTable = ({ fees }: FeesTableProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Registration Fees
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-left font-semibold text-gray-700 p-4">
                  Component
                </th>
                <th className="text-left font-semibold text-gray-700 p-4">
                  Approximate Fees (INR)
                </th>
                <th className="text-left font-semibold text-gray-700 p-4">
                  Remarks
                </th>
              </tr>
            </thead>
            <tbody>
              {fees.map((fee: Fee, rowIndex: number) => (
                <tr key={`${fee.component}-${rowIndex}`} className="border-b">
                  <td className="p-4 text-gray-800 align-top">
                    <FeeTextCell text={fee.component} />
                  </td>
                  <td className="p-4 text-gray-800 align-top">
                    {typeof fee.fees === "number" ? (
                      fee.fees
                    ) : (
                      <FeeTextCell text={fee.fees} />
                    )}
                  </td>
                  <td className="p-4 text-gray-600 align-top">
                    <FeeTextCell text={fee.remarks} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
