// lib/data/services/din-registration.ts

import { ServiceData } from "@/lib/types";

export const dinRegistrationData: ServiceData = {
  title: "DIN Registration",
  breadcrumb: ["Home", "Registrations", "DIN Registration"],
  description:
    "Apply for a lifetime Director Identification Number (DIN) with MCA, including annual DIR‑3 KYC to keep it active.",
  overview:
    "The **Director Identification Number (DIN)** is an 8‑digit unique identifier allotted by the Ministry of Corporate Affairs (MCA) to any individual who is or intends to be appointed as a director in a company (or as a designated partner in an LLP—via DPIN). It is a statutory prerequisite under the Companies Act, 2013. Each person can hold only one DIN which remains valid for life, irrespective of the number of companies they serve. By providing a traceable, permanent identity across appointments, DIN strengthens transparency, accountability, and anti‑fraud controls in corporate governance.",
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
    {
      title: "Who Can Apply for a DIN?",
      items: [
        "Any individual (Indian or foreign national) proposed to be appointed as director.",
        "Adults (18+) with valid identity & address proofs; no educational prerequisites.",
        "Designated partners in LLPs require DPIN (interchangeable with DIN).",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "For Indian Nationals",
      content: {
        title: "KYC Documents",
        items: [
          "PAN (mandatory primary ID).",
          "Aadhaar / Passport / Voter ID / Driving Licence as address proof.",
          "Recent photograph, email & mobile (for OTP).",
        ],
      },
    },
    {
      tabTitle: "For Foreign Nationals",
      content: {
        title: "Apostilled/Notarized Documents",
        items: [
          "Passport (mandatory) apostilled / consular‑attested.",
          "Address proof (DL / bank statement / utility bill), apostilled / notarized.",
        ],
      },
    },
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
