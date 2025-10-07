// lib/data/services/opc-compliance.ts

import { ServiceData } from "@/lib/types";

export const opcComplianceData: ServiceData = {
  title: "OPC Annual Compliance",
  breadcrumb: ["Home", "MCA", "OPC Compliance"],
  overview:
    "**OPC Annual Compliance** refers to the mandatory filings that a One Person Company (OPC) must complete each financial year with the Ministry of Corporate Affairs (MCA) and the Income Tax Department. 📁 Key filings include the **Annual Financial Statements (Form AOC-4)** and the **Annual Return (Form MGT-7A)**. Adhering to these compliances is essential to maintain the company's active status and avoid significant penalties.",
  advantages: [
    {
      icon: "ShieldCheck",
      title: "Maintains Active Status",
      text: "Ensures the OPC remains compliant and active on the MCA register, preventing it from being marked as 'in default'.",
    },
    {
      icon: "FileWarning",
      title: "Avoids Penalties & Disqualification",
      text: "Timely filing helps avoid heavy daily penalties and prevents the director from being disqualified.",
    },
    {
      icon: "TrendingUp",
      title: "Enhances Credibility",
      text: "A compliant OPC has a better reputation, which is crucial for obtaining bank loans, attracting investment, and securing contracts.",
    },
    {
      icon: "Database",
      title: "Updated Public Record",
      text: "Keeps the company's financial and structural information updated on the public MCA portal, ensuring transparency.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertTriangle",
      title: "Heavy Daily Penalties",
      text: "The penalty for late filing of MCA forms is ₹100 per day for each overdue form, with no upper limit.",
    },
    {
      icon: "UserX",
      title: "Director Disqualification",
      text: "If annual returns are not filed for three consecutive years, the director can be disqualified for a period of five years.",
    },
    {
      icon: "FileX",
      title: "Risk of Strike-Off",
      text: "The Registrar of Companies (RoC) can strike the company's name off the register for continuous non-compliance.",
    },
  ],
  eligibility: [
    {
      title: "Applicability",
      items: [
        "Annual compliance is **mandatory for all registered One Person Companies**.",
        "This applies even if the OPC has not conducted any business during the financial year.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Documents to be Prepared",
      content: {
        title: "Financials & Company Records",
        items: [
          "The company's complete financial statements (Balance Sheet, Profit & Loss Account).",
          "Statutory Audit Report prepared by a Chartered Accountant.",
          "Bank statements for the entire financial year.",
          "Digital Signature Certificate (DSC) of the director.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Conduct Board Meetings",
      description:
        "An OPC must conduct at least two board meetings in a calendar year, with a gap of at least 90 days between them.",
    },
    {
      step: 2,
      title: "Appoint an Auditor & Get Accounts Audited",
      description:
        "Appoint a statutory auditor within 30 days of incorporation. After the financial year ends, get the books of accounts audited.",
    },
    {
      step: 3,
      title: "File Financial Statements (Form AOC-4)",
      description:
        "File the audited financial statements with the MCA within 180 days from the end of the financial year (i.e., by 27th September).",
    },
    {
      step: 4,
      title: "File Annual Return (Form MGT-7A)",
      description:
        "File the company's annual return. The due date is 60 days from the hypothetical date of the Annual General Meeting.",
    },
    {
      step: 5,
      title: "File Income Tax Return (Form ITR-6)",
      description:
        "File the company's annual Income Tax Return with the IT department. The due date is typically 31st October, as an audit is mandatory.",
    },
  ],
  fees: [
    {
      component: "Government Fees (AOC-4 & MGT-7A)",
      fees: "₹200 - ₹600 per form",
      remarks:
        "Varies based on the company's authorized capital. This is for on-time filing.",
    },
    {
      component: "Penalty for Late Filing",
      fees: "₹100 per day, per form",
      remarks:
        "This penalty has no maximum limit and is the main cost of non-compliance.",
    },
    {
      component: "Professional & Audit Fees",
      fees: "₹10,000 - ₹20,000 per year",
      remarks:
        "Includes accounting, audit, and filing of all annual returns with MCA and Income Tax department.",
    },
  ],
  faqs: [
    {
      q: "Does an OPC need to conduct an Annual General Meeting (AGM)?",
      a: "No, a One Person Company is explicitly exempt from holding an AGM. However, the due dates for its annual filings are still calculated based on the timeline of an AGM.",
    },
    {
      q: "Is a statutory audit mandatory for an OPC?",
      a: "Yes, unlike LLPs, a statutory audit conducted by a practicing Chartered Accountant is mandatory for all One Person Companies, regardless of their turnover or capital.",
    },
    {
      q: "What is Form MGT-7A?",
      a: "Form MGT-7A is a simplified Annual Return form specifically for One Person Companies and Small Companies. It contains details about the company, its director, and its shareholding structure.",
    },
  ],
};
