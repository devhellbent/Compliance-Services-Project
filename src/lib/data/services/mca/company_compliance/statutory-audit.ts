// lib/data/services/statutory-audit.ts

import { ServiceData } from "@/lib/types";

export const statutoryAuditData: ServiceData = {
  title: "Statutory Audit",
  breadcrumb: ["Home", "MCA", "Statutory Audit"],
  overview:
    "A **Statutory Audit** is a legally required, independent examination of a company's financial statements and records. 🧐 Its primary purpose is to express an opinion on whether the financial statements provide a **'true and fair' view** of the company's financial position and are free from material misstatement. The audit is conducted by a qualified, independent **Chartered Accountant (CA)** and is mandated by laws like the Companies Act, 2013.",
  advantages: [
    {
      icon: "Gavel",
      title: "Mandatory Legal Requirement",
      text: "Fulfills the legal obligation for all registered companies, preventing penalties and legal action for non-compliance.",
    },
    {
      icon: "ShieldCheck",
      title: "Enhances Credibility",
      text: "Audited financial statements have higher credibility and are trusted by investors, lenders, and government authorities.",
    },
    {
      icon: "Search",
      title: "Detection of Fraud & Errors",
      text: "A thorough audit can help in identifying and preventing financial discrepancies, errors, and potential fraud.",
    },
    {
      icon: "Lightbulb",
      title: "Improves Internal Controls",
      text: "The auditor often provides valuable insights and recommendations for improving the company's internal financial controls and processes.",
    },
  ],
  disadvantages: [
    {
      icon: "CircleDollarSign",
      title: "Additional Business Cost",
      text: "The audit fee is a significant annual expense for the company, especially for small businesses.",
    },
    {
      icon: "Clock",
      title: "Time-Consuming & Disruptive",
      text: "The audit process can be disruptive to daily operations as it requires time and resources from the company's finance team.",
    },
    {
      icon: "Info",
      title: "Provides Reasonable Assurance Only",
      text: "An audit is based on sampling and provides 'reasonable assurance,' not an absolute guarantee that the financials are 100% error-free.",
    },
  ],
  eligibility: [
    {
      title: "Applicability",
      items: [
        "A statutory audit is **mandatory for all companies** registered under the Companies Act, 2013, including Private Limited, OPC, Public Limited, and Section 8 companies.",
        "It is also mandatory for **Limited Liability Partnerships (LLPs)** if their annual turnover exceeds ₹40 lakh or their capital contribution exceeds ₹25 lakh.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Documents Required for Audit",
      content: {
        title: "Financial Records & Statutory Registers",
        items: [
          "Complete Books of Accounts (Ledgers, Journals, etc.).",
          "All bank statements for the financial year.",
          "Invoices for all sales and purchases.",
          "Statutory registers (e.g., Register of Members, Register of Directors).",
          "Minutes of Board Meetings and Annual General Meetings.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Appointment of Auditor",
      description:
        "A practicing Chartered Accountant or a CA firm is appointed by the company's shareholders in the Annual General Meeting (AGM).",
    },
    {
      step: 2,
      title: "Audit Planning & Scoping",
      description:
        "The auditor understands the company's business environment, assesses risks, and plans the scope and methodology of the audit.",
    },
    {
      step: 3,
      title: "Examination of Records",
      description:
        "The audit team examines the company's books of accounts, internal controls, supporting documents, and compliance with accounting standards.",
    },
    {
      step: 4,
      title: "Verification & Vouching",
      description:
        "The auditor independently verifies assets, liabilities, income, and expenses by checking against supporting evidence.",
    },
    {
      step: 5,
      title: "Issuance of Audit Report",
      description:
        "After the examination, the auditor forms an opinion and issues a formal Audit Report, which is attached to the financial statements and presented to the shareholders.",
    },
  ],
  fees: [
    {
      component: "Audit Fee",
      fees: "Varies Highly",
      remarks:
        "The fee is not fixed and depends on the size and complexity of the company, the volume of transactions, and the reputation of the audit firm. Starts from ₹10,000 - ₹15,000 for small companies.",
    },
  ],
  faqs: [
    {
      q: "Who can be a statutory auditor?",
      a: "Only a practicing Chartered Accountant (CA) or a firm of Chartered Accountants can be appointed as the statutory auditor of a company.",
    },
    {
      q: "What is the difference between a statutory audit and an internal audit?",
      a: "A statutory audit is an independent audit mandated by law, focused on giving an opinion on the truth and fairness of financial statements. An internal audit is a voluntary or board-mandated review of a company's internal controls and operational efficiency.",
    },
    {
      q: "What does a 'qualified' audit report mean?",
      a: "A 'qualified' opinion in an audit report means that the auditor has found some material misstatement or was unable to obtain sufficient evidence for certain items, but the rest of the financial statements are presented fairly. It is a red flag for investors and lenders.",
    },
  ],
};
