// lib/data/services/trademark-rectification.ts

import { ServiceData } from "@/lib/types";

export const trademarkRectificationData: ServiceData = {
  title: "Trademark Rectification",
  breadcrumb: ["Home", "Intellectual Property", "Trademark Rectification"],
  overview:
    "**Trademark Rectification** is a legal process for correcting an error or removing a registered trademark from the Trademark Register. ⚖️ It can be initiated either by the trademark owner themselves to correct a mistake in their registration, or by an **'aggrieved person'** who believes that the trademark was wrongly registered or is no longer in use. The goal is to 'rectify' the register to ensure it remains accurate and valid.",
  advantages: [
    {
      icon: "Trash2",
      title: "Remove Wrongly Registered Marks",
      text: "It provides a legal remedy to remove trademarks from the register that are confusingly similar to your own or were registered in bad faith.",
    },
    {
      icon: "FileCheck",
      title: "Correct Errors in Registration",
      text: "The trademark owner can use this process to correct clerical errors or update their own details in the Trademark Register.",
    },
    {
      icon: "PauseCircle",
      title: "Cancel Marks Not in Use",
      text: "A trademark can be removed if it has not been used for a continuous period of five years, clearing the way for new brands.",
    },
    {
      icon: "ShieldCheck",
      title: "Uphold Brand Integrity",
      text: "Helps in maintaining the distinctiveness of your brand by challenging and removing conflicting marks from the register.",
    },
  ],
  disadvantages: [
    {
      icon: "Gavel",
      title: "Complex Legal Proceeding",
      text: "Rectification is a formal legal process that requires strong evidence and sound legal arguments, similar to a court case.",
    },
    {
      icon: "Clock",
      title: "Time-Consuming and Expensive",
      text: "The process can take a long time to conclude and involves significant professional fees for legal representation.",
    },
    {
      icon: "FileWarning",
      title: "Burden of Proof",
      text: "The responsibility to provide sufficient evidence to justify the removal or correction of a trademark lies heavily on the applicant.",
    },
  ],
  eligibility: [
    {
      title: "Who Can File for Rectification?",
      items: [
        "**The Registered Proprietor**: The owner of the trademark can file to correct an error or amend their own registration details.",
        "**An Aggrieved Person**: Any person or entity who is being harmed or commercially affected by the existence of the registered trademark on the register.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Filing for Rectification",
      content: {
        title: "Application & Evidence",
        items: [
          "**Application for Rectification (Form TM-O)**: The official form to initiate the proceeding.",
          "**Statement of Case**: A detailed document explaining the facts and the legal grounds on which the rectification is being sought.",
          "**Strong Evidence**: Substantial proof to support the claims (e.g., proof of non-use, proof of your prior use of a similar mark, evidence of public confusion).",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Filing the Rectification Application",
      description:
        "The aggrieved person files the application (Form TM-O) along with a detailed statement of case and supporting evidence with the Trademark Registry.",
    },
    {
      step: 2,
      title: "Notice to Trademark Owner",
      description:
        "The Registry sends a notice to the registered trademark owner, informing them about the rectification application.",
    },
    {
      step: 3,
      title: "Filing a Counter-Statement",
      description:
        "The trademark owner must file a counter-statement within the prescribed time to defend their registration.",
    },
    {
      step: 4,
      title: "Submission of Evidence",
      description:
        "Both parties are given opportunities to submit evidence to support their respective claims.",
    },
    {
      step: 5,
      title: "Hearing and Final Order",
      description:
        "A hearing is conducted where both parties present their arguments. Based on the evidence and arguments, the Hearing Officer will issue a final order to either rectify/remove the mark or dismiss the application.",
    },
  ],
  fees: [
    {
      component: "Government Fee",
      fees: "₹2,700",
      remarks:
        "The official fee for filing the rectification application with the Trademark Registry.",
    },
    {
      component: "Professional Fees",
      fees: "₹15,000+",
      remarks:
        "Legal fees are significantly higher due to the litigation-like nature of the process, including drafting, evidence filing, and hearings.",
    },
  ],
  faqs: [
    {
      q: "Who is considered an 'aggrieved person'?",
      a: "An aggrieved person is someone whose legal rights are affected or who has a substantial interest in having the trademark removed. For example, a person whose own trademark application was objected to because of the registered mark is an aggrieved person.",
    },
    {
      q: "What is the difference between trademark opposition and rectification?",
      a: "Trademark Opposition is filed when a trademark is published in the journal but has not yet been registered. Trademark Rectification is filed to remove a trademark that has already been registered and is on the Trademark Register.",
    },
    {
      q: "What are the common grounds for filing a rectification?",
      a: "Common grounds include: the mark was registered without sufficient cause, the mark is confusingly similar to an earlier mark, the mark has become generic, or the mark has not been used for a continuous period of five years.",
    },
  ],
};
