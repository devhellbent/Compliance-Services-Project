"use client";

import { useState } from "react";
import { SubNav } from "@/components/SubNav";
import { AdvantagesDisadvantages } from "@/components/page-sections/AdvantagesDisadvantages";
import { Eligibility } from "@/components/page-sections/Eligibility";
import { DocumentsRequired } from "@/components/page-sections/DocumentsRequired";
import { RegistrationProcess } from "@/components/page-sections/RegistrationProcess";
import { FeesTable } from "@/components/page-sections/FeesTable";
import { Faq } from "@/components/page-sections/Faq";
import { MarkdownBoldRenderer } from "./MarkdownBoldRenderer";

export function SubNavSections({ data }: { data: any }) {
  const sections = [
    "Overview",
    data.advantages && data.disadvantages ? "Advantages" : null,
    data.eligibility ? "Eligibility" : null,
    data.documents ? "Documents" : null,
    data.registrationProcess ? "Process" : null,
    data.fees ? "Fees" : null,
    data.faqs ? "FAQs" : null,
  ].filter(Boolean) as string[];

  const [activeSection, setActiveSection] = useState(sections[0]);

  return (
    <>
      <SubNav sections={sections} onSelect={setActiveSection} />
      <div className="p-6">
        {activeSection === "Overview" && (
          <MarkdownBoldRenderer text={data.overview} />
        )}
        {activeSection === "Advantages" && data.advantages && (
          <AdvantagesDisadvantages
            advantages={data.advantages}
            disadvantages={data.disadvantages}
          />
        )}
        {activeSection === "Eligibility" && data.eligibility && (
          <Eligibility criteria={data.eligibility} />
        )}
        {activeSection === "Documents" && data.documents && (
          <DocumentsRequired documents={data.documents} />
        )}
        {activeSection === "Process" && data.registrationProcess && (
          <RegistrationProcess steps={data.registrationProcess} />
        )}
        {activeSection === "Fees" && data.fees && (
          <FeesTable fees={data.fees} />
        )}
        {activeSection === "FAQs" && data.faqs && <Faq faqs={data.faqs} />}
      </div>
    </>
  );
}
