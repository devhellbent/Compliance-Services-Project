// lib/data/services/din-registration.ts

import { ServiceData } from "@/lib/types";

export const dinRegistrationData: ServiceData = {
  title: "DIN Registration",
  breadcrumb: ["Home", "Registrations", "DIN Registration"],
  description:
    "Apply for a lifetime Director Identification Number (DIN) with MCA, including annual DIR‑3 KYC to keep it active.",
  overview:
    `**What is DIN Registration**

The Director Identification Number (DIN) is a unique, eight-digit identifier assigned by the Ministry of Corporate Affairs (MCA), Government of India, to any individual who is either an existing director of a company or intends to be appointed as one. Mandated under the Companies Act, 2013, the DIN is an essential prerequisite for holding a director position in any Indian company, including private limited, public limited, or LLP. Once allotted, the DIN is a permanent, non-transferable number valid for the individual\'s lifetime, irrespective of the number of companies they are associated with.

The primary significance of DIN registration lies in promoting transparency and accountability within India\'s corporate governance framework. It acts as a digital fingerprint for directors, allowing regulatory authorities to maintain a centralized database and track a director\'s involvement across various companies. This unique identification helps prevent the proliferation of fraudulent appointments, minimize identity misrepresentation, and ensure that directors comply with regulatory standards and legal obligations.`,
  advantages: [
    {
      icon: "UserCheck",
      title: "Mandatory for Directorship",
      text: "No individual can be appointed as a director of a company without a valid DIN.",
    },
    {
      icon: "Database",
      title: "Centralized Director Database",
      text: "Creates a unified registry of directors for regulators, investors and stakeholders.",
    },
    {
      icon: "Infinity",
      title: "Lifetime Validity",
      text: "Once allotted, it is permanent—no periodic renewal required.",
    },
    {
      icon: "ShieldCheck",
      title: "Prevents Fraud",
      text: "Single identity across companies curbs duplication and deters misrepresentation.",
    },
  ],
  disadvantages: [
    {
      icon: "FileWarning",
      title: "Mandatory Annual KYC",
      text: "Annual DIR‑3 KYC (or KYC‑Web) filing is compulsory to keep DIN active.",
    },
    {
      icon: "AlertTriangle",
      title: "Penalty for Non-Compliance",
      text: "Non‑filing deactivates DIN; late fee of ₹5,000 applies for reactivation.",
    },
    {
      icon: "UserX",
      title: "Cannot be Surrendered Easily",
      text: "Surrender allowed only if DIN has never been used in any filing—rare in practice.",
    },
  ],
  eligibility: [
    "**Individual Applicant:** The applicant must be an **individual**. Only natural persons can apply for and be allotted a DIN. Companies, LLPs, or other artificial legal entities cannot obtain a DIN.",
    "**Age of Majority:** The applicant must be an **adult**, i.e., of legal age (18 years or above) as per Indian law.",
    "**No Specific Educational Qualification:** There are **no specific educational qualifications or professional experiences** required to obtain a DIN. Any adult individual can apply.",
    "**Nationality:** The applicant can be an **Indian citizen or a foreign national**. The DIN system is not restricted by nationality, allowing foreign individuals to hold directorships in Indian companies.",
    "**Sound Mind:** The applicant should generally be of **sound mind**, though this is more implied in the legal capacity to enter into agreements rather than an explicit check during the DIN application process itself.",
    "**Possession of Valid Identity and Address Proofs:** This is perhaps the most crucial practical requirement. The applicant must possess valid and verifiable identity and address proofs. **For Indian Nationals:**",
    "PAN (Permanent Account Number) Card (Mandatory)",
    "Aadhaar Card / Voter ID / Passport / Driving License (as identity and address proof)",
    "Latest Bank Statement / Utility Bill (electricity, telephone, gas bill) for address proof (not older than 2 months). **For Foreign Nationals:**",
    "Passport (Mandatory)",
    "Residential proof such as a driving license, bank statement, or utility bill (not older than 1 year).",
    "All documents must be apostilled or notarized by a public notary in the country of origin."
  ],
  registrationProcess: [
    {
      step: 1,
      title: "For New Companies (Integrated Process)",
      description:
        "When incorporating a new company, the DIN for the proposed first directors is automatically allotted through the **SPICe+** (Form INC-32) application form. No separate form is needed.",
    },
    {
      step: 2,
      title: "For Existing Companies (Form DIR-3)",
      description:
        "Existing companies appointing a new director must pass a board resolution and file **DIR‑3** with MCA for the applicant.",
    },
    {
      step: 3,
      title: "Document Submission & Verification",
      description:
        "Attach KYC documents; e‑forms must be digitally signed by a director and certified by a practicing CA/CS/CMA.",
    },
    {
      step: 4,
      title: "DIN Allotment",
      description:
        "Post MCA validation, DIN is allotted almost instantly and usable across all companies.",
    },
    {
      step: 5,
      title: "Annual KYC",
      description:
        "File **DIR‑3 KYC** or **KYC‑Web** every year by the prescribed due date to keep DIN active.",
    },
  ],
  fees: [
    {
      component: "Government Fee (Form DIR-3)",
      fees: "₹500",
      remarks:
        "This is the statutory fee for filing the e-Form DIR-3 for DIN allotment.",
    },
    {
      component: "Professional Fees",
      fees: "₹1,500 - ₹3,000",
      remarks:
        "Includes assistance in form filling, document attestation, and filing with the MCA.",
    },
    {
      component: "DIR-3 KYC Late Fee",
      fees: "₹5,000",
      remarks:
        "Payable if annual KYC is not filed by the due date; DIN remains deactivated until cleared.",
    },
  ],
  documents: [
    {
      tabTitle: "Required Documents",
      content: {
        title: "Required Documents",
        items: [
          "PAN Card (Mandatory for Indian Nationals)",
          "Aadhaar Card / Voter ID / Passport / Driving License",
          "Latest Bank Statement / Utility Bill (not older than 2 months)",
          "For Foreign Nationals: Passport (Mandatory), Residential proof, all documents must be apostilled or notarized",
        ],
      },
    }
  ],
  faqs: [
    {
      q: "Can an individual have more than one DIN?",
      a: "No. It is illegal to have more than one DIN. The system is designed to prevent duplicate allotments, and holding multiple DINs can lead to heavy penalties.",
    },
    {
      q: "What is DIR-3 KYC and is it mandatory?",
      a: "DIR‑3 KYC (form or web) is mandatory annually—typically due by 30 September—to validate contact details and keep DIN active.",
    },
    {
      q: "My DIN is deactivated. What should I do?",
      a: "File overdue DIR‑3 KYC and pay ₹5,000 late fee. DIN reactivates after successful processing.",
    },
  ],
};
