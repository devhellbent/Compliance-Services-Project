// components/page-sections/proprietorship/DocumentsRequired.tsx
"use client";
import { useState } from "react";
import { MarkdownBoldRenderer } from "../MarkdownBoldRenderer";
import { DocumentTab, SimpleDocument } from "@/lib/types";

interface DocumentsRequiredProps {
  documents: (DocumentTab | SimpleDocument)[];
}

export const DocumentsRequired: React.FC<DocumentsRequiredProps> = ({
  documents,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const isSimpleDocument = (
    doc: DocumentTab | SimpleDocument
  ): doc is SimpleDocument => {
    return "items" in doc && !("tabTitle" in doc);
  };

  if (documents.every(isSimpleDocument)) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
            Documents Required
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {(documents as SimpleDocument[]).map((doc, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-blue-600 mb-4">
                  {doc.title}
                </h3>
                <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside">
                  {doc.items.map((item: string) => (
                    <li key={item}>
                      <MarkdownBoldRenderer text={item} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const docTabs = documents.filter(
    (doc): doc is DocumentTab => !isSimpleDocument(doc)
  );

  type TabButtonProps = {
    title: string;
    isActive: boolean;
    onClick: () => void;
  };

  const TabButton: React.FC<TabButtonProps> = ({
    title,
    isActive,
    onClick,
  }) => (
    <button
      onClick={onClick}
      className={`w-full text-left font-semibold p-4 rounded-lg transition-all duration-300
        ${
          isActive
            ? "bg-blue-600 text-white shadow-lg transform scale-105"
            : "bg-white text-gray-700 hover:bg-gray-100"
        }`}
    >
      {title}
    </button>
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Documents Required
        </h2>
        <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
          <div className="md:w-1/3 flex flex-col space-y-4">
            {docTabs.map((doc: DocumentTab, index: number) => (
              <TabButton
                key={index}
                title={doc.tabTitle}
                isActive={activeTab === index}
                onClick={() => setActiveTab(index)}
              />
            ))}
          </div>
          <div className="md:w-2/3 bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {docTabs[activeTab].content.title}
            </h3>
            <ul className="space-y-4 text-lg text-gray-700 list-disc list-inside">
              {docTabs[activeTab].content.items.map((item: string) => (
                <li key={item}>
                  <MarkdownBoldRenderer text={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
