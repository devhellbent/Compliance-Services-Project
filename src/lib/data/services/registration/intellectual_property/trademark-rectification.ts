// lib/data/services/trademark-rectification.ts

import { ServiceData } from "@/lib/types";

export const trademarkRectificationData: ServiceData = {
  title: "Trademark Rectification",
  breadcrumb: ["Home", "Intellectual Property", "Trademark Rectification"],
  overview:
    `**Trademark Rectification** is a legal process designed to correct errors, omissions, or inaccuracies in the official **Register of Trademarks**. This procedure ensures that the public record accurately reflects the details of a registered mark, thereby maintaining the **integrity and validity** of intellectual property rights. It can be initiated by the registered proprietor to update their own details or by any \"aggrieved person\" who is negatively affected by an entry.

The **grounds for rectification** are varied, including clerical or typographical mistakes, incorrect owner or address details, or if the trademark was wrongly entered in the first place, such as being deceptively similar to an existing mark. Crucially, a common ground is the **non-use** of the registered trademark for a continuous period of five years and three months from its registration date, making the mark liable for removal.

The process typically involves filing a petition or an application, often with the Registrar of Trademarks or the High Court (depending on the jurisdiction and gravity of the change). The concerned parties are given an opportunity to be heard. Successful rectification results in the necessary **alteration, variation, or cancellation** of the entry on the register, restoring clarity and protecting the interests of all legitimate parties.`,
  advantages: [
    {
      icon: "FileCheck",
      title: "Correction of Public Record",
      text: "Rectification ensures the Trademark Register accurately reflects the true details of a mark, maintaining the integrity and reliability of the public record for all stakeholders.",
    },
    {
      icon: "Shield",
      title: "Protection Against Wrongful Marks",
      text: "It provides a legal mechanism for aggrieved persons to challenge and remove trademarks that were wrongfully registered, such as those that are deceptively similar to their own marks.",
    },
    {
      icon: "Scale",
      title: "Removes Non-Used Marks",
      text: "The non-use provision (Section 47) ensures that trademarks which have not been genuinely used for over five years can be removed, freeing up valuable brand space for active businesses.",
    },
  ],
  disadvantages: [
    {
      icon: "IndianRupee",
      title: "High Cost and Complexity",
      text: "The rectification process is a **quasi-judicial procedure** before the Registrar or the High Court. This requires specialized knowledge of trademark law, necessitating the hiring of intellectual property lawyers, leading to **significant legal fees**.",
    },
    {
      icon: "Clock",
      title: "Lengthy and Unpredictable Timeline",
      text: "Rectification proceedings are **not swift**. They involve filing detailed petitions, submission of evidence via affidavits, counter-statements, and potentially multiple hearings. The entire process can span **many months or even years**.",
    },
    {
      icon: "AlertTriangle",
      title: "Risk of Total Cancellation for the Owner",
      text: "For a registered proprietor, defending a rectification action carries a significant risk. If the Tribunal finds in favor of the applicant, the owner's mark may be **cancelled entirely**, leading to the loss of all exclusive rights.",
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
        tabTitle: "Core documents",
        content: {
            title: "Core Documents Required for All Rectification Filings",
            items: [
                "**Prescribed Form:** The completed and signed application form (usually **Form TM-P** or **Form TM-M** depending on the request, or **Form TM-O** if the matter is before the High Court or a tribunal).",
                "**Identity and Address Proof of the Applicant:** For individuals: PAN Card, Aadhaar Card, or Passport. For Company/LLP: Certificate of Incorporation/LLP Deed, and PAN Card of the entity.",
                "**Power of Attorney (PoA):** If the application is filed through a Trademark Agent or Attorney, a duly executed Power of Attorney is mandatory.",
                "**Trademark Registration Certificate Copy:** A copy of the existing Registration Certificate or a printout of the Register entry for the trademark that is being challenged or amended.",
            ]
        }
    },
    {
        tabTitle: "Rectification by proprietor",
        content: {
            title: "Documents Required for Rectification by the Proprietor (Owner)",
            items: [
                "**Correction of clerical error (Form TM-M):** Proof of Original Error — documents that clearly show the mistake (e.g., the original application form, a true copy of the owner's legal name, correct class details).",
                "**Change of name/address:** Legal Proof of Change — a notarized copy of the legal name change certificate, merger/acquisition documents, or updated business registration (e.g., GST certificate, Incorporation Certificate).",
                "**Restriction of goods/services:** Board Resolution/Affidavit — a formal resolution from the company or an affidavit from the proprietor stating the specific goods/services to be removed and the intent behind the restriction.",
            ]
        }
    },
    {
        tabTitle: "Cancellation by third party",
        content: {
            title: "Documents Required for Cancellation by an Aggrieved Person",
            items: [
                "**Detailed statement of case / Affidavit:** Explaining how the applicant is an **\\\"Aggrieved Person\\\"**, the **legal grounds** for the application (e.g., Section 47 for non-use, Section 57 for wrongful entry), and a factual narrative supporting the claim.",
                "**Evidence of Non-Use:** Search reports from public databases (like the Trademark Journal) showing no advertisement or presence of the mark, and affidavits from trade/industry members confirming they have never encountered the mark.",
                "**Evidence for Wrongful Entry (Section 57):** Evidence of applicant's prior use (invoices, advertisements, sales figures, annual reports) and prior trademark registration certificate, if the challenged mark is deceptively similar.",
            ]
        }
    },
    {
        tabTitle: "Detailed Statement of Case/Affidavit",
        content: {
            title: "Detailed Statement of Case/Affidavit Documents",
            items: [
                "How the applicant is an **\\\"Aggrieved Person.\\\"**",
                "The **legal grounds** for the application (e.g., Section 47 for non-use, Section 57 for wrongful entry).",
                "A factual narrative supporting the claim"
            ]
        }
    },
    {
        tabTitle: "Evidence of Non-Use",
        content: {
            title: "Evidence of Non-Use Documents",
            items: [
                "**Search Reports:** Results from public databases (like the Trademark Journal) or industry directories showing no advertisement or presence of the mark.",
                "**Affidavits from Trade/Industry Members:** Sworn statements from relevant trade bodies or competitors confirming they have never encountered the mark in the marketplace."
            ]
        }
    },
    {
        tabTitle: "Evidence for Wrongful Entry (Under Section 57)",
        content: {
            title: "Evidence for Wrongful Entry (Under Section 57)",
            items: [
                "**Evidence of Applicant\\'s Prior Use:** Invoices, advertisements, sales figures, annual reports, or press coverage showing the applicant\\'s use of their own mark *before* the challenged mark was registered.",
                "**Prior Trademark Registration Certificate:** A copy of the applicant\\'s own registered mark, if the challenged mark is deceptively similar."
            ]
        }
    }
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
