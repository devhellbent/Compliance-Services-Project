// lib/data/services/tax-audit.ts

import { ServiceData } from "@/lib/types";

export const taxAuditData: ServiceData = {
  title: "Tax Audit",
  breadcrumb: ["Home", "MCA", "Tax Audit"],
  overview:
    "A **Tax Audit** is an audit of a taxpayer's books of accounts, conducted by a practicing Chartered Accountant, as required by the **Income Tax Act, 1961**. 🧾 Its purpose is to ensure that the taxpayer has properly maintained their books and that their income and deductions are correctly computed and reported as per tax laws. The audit report is filed in **Form 3CA/3CB and 3CD**.",
  advantages: [
    {
      icon: "Gavel",
      title: "Mandatory Legal Requirement",
      text: "Fulfills the legal obligation under Section 44AB of the Income Tax Act for eligible taxpayers, avoiding penalties.",
    },
    {
      icon: "Calculator",
      title: "Ensures Accurate Tax Calculation",
      text: "An independent review of accounts helps in the correct computation of taxable income, deductions, and tax liability.",
    },
    {
      icon: "SearchCheck",
      title: "Early Detection of Discrepancies",
      text: "Helps in identifying any accounting errors or non-compliance with tax laws before the tax return is filed.",
    },
    {
      icon: "ShieldCheck",
      title: "Increases Reliability",
      text: "Audited financial statements are considered more reliable by the Income Tax Department, which can reduce the chances of a scrutiny assessment.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertTriangle",
      title: "Penalty for Non-Compliance",
      text: "Failure to get the accounts audited and file the report can lead to a penalty of 0.5% of the total turnover, up to a maximum of ₹1.5 lakh.",
    },
    {
      icon: "CircleDollarSign",
      title: "Additional Business Cost",
      text: "The fee for the tax audit is an additional annual expense for the business.",
    },
    {
      icon: "FileWarning",
      title: "Requires Meticulous Bookkeeping",
      text: "The business must maintain detailed and accurate books of accounts and supporting documents throughout the year for the audit.",
    },
  ],
  eligibility: [
    {
      title: "Applicability (Under Section 44AB)",
      items: [
        "**Business**: Total sales or turnover exceeds **₹1 crore** in a financial year. (This limit is extended to ₹10 crore if cash receipts and payments are 5% or less of the total).",
        "**Profession**: Gross receipts exceed **₹50 lakh** in a financial year.",
        "**Presumptive Taxation**: If you are under the presumptive scheme (44AD, 44AE) but claim your income is lower than the presumed profit.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Documents Required for Audit",
      content: {
        title: "Financial Records & Supporting Documents",
        items: [
          "Complete Books of Accounts (Ledgers, Journals, Cash Book).",
          "All bank statements for the financial year.",
          "Copies of all sales and purchase invoices.",
          "Details of assets, liabilities, income, and expenses.",
          "Copies of GST returns filed during the year.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Appointment of Chartered Accountant",
      description:
        "The taxpayer must appoint a practicing Chartered Accountant to conduct the tax audit.",
    },
    {
      step: 2,
      title: "Examination of Books",
      description:
        "The CA examines the books of accounts to ensure they comply with the provisions of the Income Tax Act and are accurately maintained.",
    },
    {
      step: 3,
      title: "Preparation of Audit Report",
      description:
        "The CA prepares the audit report in the prescribed forms (Form 3CA/3CB and a detailed statement in Form 3CD).",
    },
    {
      step: 4,
      title: "Filing the Audit Report",
      description:
        "The taxpayer must upload the signed audit report on the Income Tax e-filing portal on or before the due date (typically 30th September).",
    },
    {
      step: 5,
      title: "Filing the Income Tax Return",
      description:
        "After the audit report is filed, the taxpayer must file their Income Tax Return. The due date for taxpayers subject to audit is typically 31st October.",
    },
  ],
  fees: [
    {
      component: "Tax Audit Fee",
      fees: "Varies",
      remarks:
        "The fee is not fixed and depends on the complexity of the business, the volume of transactions, and the time involved. Starts from ₹15,000 - ₹20,000.",
    },
  ],
  faqs: [
    {
      q: "Who can perform a tax audit?",
      a: "Only a practicing Chartered Accountant (CA) is authorized to conduct a tax audit under the Income Tax Act, 1961.",
    },
    {
      q: "What is the due date for a tax audit?",
      a: "The due date for filing the tax audit report is typically 30th September of the assessment year. The due date for filing the Income Tax Return for taxpayers under audit is 31st October.",
    },
    {
      q: "What is the difference between a statutory audit and a tax audit?",
      a: "A statutory audit is mandated by the Companies Act and focuses on providing a 'true and fair' view of the financial statements for shareholders. A tax audit is mandated by the Income Tax Act and focuses on ensuring correct computation of taxable income for the tax authorities.",
    },
  ],
};
