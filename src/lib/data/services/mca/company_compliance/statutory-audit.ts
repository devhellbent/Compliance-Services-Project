// lib/data/services/mca/company_compliance/statutory-audit.ts

import { ServiceData } from "@/lib/types";

export const statutoryAuditData: ServiceData = {
  title: "Statutory Audit Services",
  breadcrumb: ["Home", "MCA", "Statutory Audit"],
  description:
    "Statutory Audit is a legally mandated review of the accuracy of a company's financial statements and records by an independent Chartered Accountant.",
  overview: `A Statutory Audit is a mandatory annual review of the financial records of a business to ensure that the financial statements—Balance Sheet, Profit & Loss Account, and Cash Flow Statement—present a 'true and fair' view of its financial position. Governed by Section 139 of the Companies Act, 2013, and the LLP Act, 2008, this audit must be conducted by a practicing Chartered Accountant (CA) who is independent of the company's management. The primary objective is to provide assurance to shareholders, creditors, and government regulators that the financial information provided by the company is reliable, accurate, and compliant with Indian Accounting Standards (Ind AS) or GAAP.`,
  advantages: [
    {
      icon: "Award",
      title: "Highest Level of Financial Credibility",
      text: "An audited financial statement is the 'Gold Standard' for reliability. It provides external stakeholders, including banks, investors, and vendors, with the confidence that the business's financial data is verified by an independent expert.",
    },
    {
      icon: "Shield",
      title: "Ensures Legal Compliance",
      text: "Statutory audits ensure the company adheres to all mandates of the Companies Act, including proper disclosure of director interests, related party transactions, and adherence to accounting standards, preventing legal notices or penalties.",
    },
    {
      icon: "TrendingUp",
      title: "Improved Internal Controls",
      text: "During the audit process, auditors identify weaknesses in the company's internal accounting and operational systems. This feedback allows management to strengthen controls, improve efficiency, and prevent future financial leakages.",
    },
    {
      icon: "Search",
      title: "Detection of Errors & Frauds",
      text: "A thorough examination of records helps in uncovering accounting errors, reconciliation gaps, or potential fraudulent activities within the organization that might have otherwise gone unnoticed by the management.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertCircle",
      title: "Mandatory Recurring Expense",
      text: "Every registered company must conduct a statutory audit annually, regardless of whether it has made a profit or even started operations. This represents a significant fixed cost for small businesses.",
    },
    {
      icon: "Clock",
      title: "Time and Resource Intensive",
      text: "The audit process requires significant time from the company's accounts team and management to provide documents, explanations, and evidence for every major transaction, often during the busy year-end period.",
    },
    {
      icon: "FileWarning",
      title: "Risk of Adverse Opinion",
      text: "If the auditor finds significant discrepancies or lack of evidence, they may issue a 'Qualified' or 'Adverse' report. This can severely damage the company's reputation and make it nearly impossible to secure future loans or investments.",
    },
  ],
  eligibility: [
    {
      title: "Mandatory Thresholds",
      items: [
        "**Private Limited/Public Limited/OPC:** Mandatory for all companies incorporated under the Companies Act, 2013, regardless of turnover.",
        "**LLPs:** Mandatory only if annual turnover exceeds ₹40 Lakhs OR capital contribution exceeds ₹25 Lakhs.",
        "**Foreign Subsidiaries:** Mandatory for all Indian subsidiaries of foreign parent companies.",
      ],
    },
    {
      title: "Auditor Appointment Rules",
      items: [
        "First Auditor must be appointed within 30 days of incorporation by the Board.",
        "Subsequent Auditors are appointed for a term of 5 years at the AGM.",
        "Form ADT-1 must be filed with the ROC within 15 days of the appointment.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Financial Records",
      content: {
        title: "Primary audit evidence",
        items: [
          "Final Trial Balance, Balance Sheet, and P&L Account.",
          "Complete General Ledger and Cash/Bank books.",
          "Bank Reconciliation Statements (BRS) for all accounts.",
          "Fixed Asset Register with depreciation calculations.",
          "Inventory/Stock valuation sheets as of March 31st.",
        ],
      },
    },
    {
      tabTitle: "Vouching Docs",
      content: {
        title: "Supporting transaction proofs",
        items: [
          "Sales and Purchase invoices with supporting delivery notes.",
          "Expense vouchers and salary registers.",
          "Loan agreements and bank sanction letters.",
          "TDS/GST return copies and reconciliation with books.",
        ],
      },
    },
    {
      tabTitle: "Statutory Docs",
      content: {
        title: "Internal governance proofs",
        items: [
          "MOA and AOA of the company.",
          "Minutes of Board Meetings and AGM held during the year.",
          "Statutory Registers (Members, Directors, Charges).",
          "Director disclosure forms (MBP-1 and DIR-8).",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Auditor Appointment",
      description: "Appoint a practicing CA firm and file Form ADT-1 with the ROC within 15 days of the board meeting or AGM.",
    },
    {
      step: 2,
      title: "Planning & Scoping",
      description: "The auditor reviews the company's accounting systems and internal controls to plan the depth and timeline of the audit.",
    },
    {
      step: 3,
      title: "Execution & Field Work",
      description: "The audit team verifies bank balances, inspects physical assets, and performs 'vouching' of major sale/purchase transactions.",
    },
    {
      step: 4,
      title: "Audit Report Generation",
      description: "The auditor issues the final Audit Report, providing an opinion (Unqualified/Qualified) on the 'true and fair' status of the financials.",
    },
    {
      step: 5,
      title: "MCA Filing (AOC-4)",
      description: "Submit the final audited financial statements and auditor's report to the MCA within 30 days of the AGM.",
    },
  ],
  fees: [],
  feesMarkdown: `
Statutory Audit fees are highly variable and depend on the transaction volume, industry complexity, and the number of branches.

### Professional Fee Structure for Statutory Audit

| Company Category | Turnover Range | Estimated Audit Fee (Annual) | Key Factors Affecting Cost |
| --- | --- | --- | --- |
| Small Company / OPC | Nil to ₹1 Crore | Rs.10,000 to Rs.20,000 | Quality of bookkeeping and number of bank accounts. |
| Medium-Sized Company | ₹1 Cr to ₹10 Crore | Rs.25,000 to Rs.60,000+ | Complexity of inventory, debt, and related party trades. |
| Large / Subsidiary | ₹10 Crore+ | Rs.75,000 to Rs.2,50,000+ | Number of locations and consolidation requirements. |
| LLP (Above Thresholds) | >₹40L Turnover | Rs.10,000 to Rs.25,000 | Accuracy of contribution records and partner transactions. |

### Statutory Penalty Costs for Audit Delay

*   **Late Filing of ADT-1:** ₹100 per day (after the 15-day window).
*   **Late Filing of AOC-4 (Audited Accounts):** ₹100 per day per form with no upper limit.
*   **Professional Misconduct:** High penalties for directors if accounts are filed without an audit or with a falsified audit report.
`,
  faqs: [
    {
      q: "Can my company's internal accountant do the statutory audit?",
      a: "No. The auditor must be an **independent, practicing Chartered Accountant** (CA) who is not an employee or director of the company.",
    },
    {
      q: "What is the difference between a 'Qualified' and 'Unqualified' report?",
      a: "An **Unqualified report** means the auditor is satisfied with the accounts. A **Qualified report** means the auditor has reservations about certain entries or lack of evidence.",
    },
    {
      q: "Is a statutory audit mandatory even if there was no business?",
      a: "Yes. For companies, the audit is mandatory even in a **'Nil' activity year** to maintain the entity's active status with the MCA.",
    },
  ],
};
