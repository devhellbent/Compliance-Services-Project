// components/page-sections/proprietorship/DocumentsRequired.tsx
"use client";
import { useState } from "react";

interface DocumentContent {
  title: string;
  items: string[];
}

interface DocumentTab {
  tabTitle: string;
  content: DocumentContent;
}

interface DocumentsRequiredProps {
  documents: DocumentTab[];
}

export const DocumentsRequired: React.FC<DocumentsRequiredProps> = ({
  documents,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

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
      className={`w-full text-left font-semibold p-4 rounded-lg transition-colors ${
        isActive
          ? "bg-blue-600 text-white shadow-lg"
          : "bg-slate-100 text-gray-700 hover:bg-slate-200"
      }`}
    >
      {title}
    </button>
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Documents Required
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Tabs */}
          <div className="md:w-1/3 flex flex-col space-y-2">
            {documents.map((doc: DocumentTab, index: number) => (
              <TabButton
                key={index}
                title={doc.tabTitle}
                isActive={activeTab === index}
                onClick={() => setActiveTab(index)}
              />
            ))}
          </div>
          {/* Tab Content */}
          <div className="md:w-2/3 bg-slate-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg text-gray-800 mb-4">
              {documents[activeTab].content.title}
            </h3>
            <ul className="space-y-3 text-gray-600 list-disc list-inside">
              {documents[activeTab].content.items.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
