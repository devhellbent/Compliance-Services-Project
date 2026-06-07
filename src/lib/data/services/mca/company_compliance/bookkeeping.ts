// lib/data/services/mca/company_compliance/bookkeeping.ts

import { ServiceData } from "@/lib/types";

export const bookkeepingData: ServiceData = {
  title: "Bookkeeping & Accounting Services",
  breadcrumb: ["Home", "MCA", "Bookkeeping"],
  description:
    "Professional bookkeeping and accounting services to maintain accurate financial records and ensure statutory compliance for your business.",
  overview: `Bookkeeping and Accounting refer to the systematic recording, organizing, and analysis of a business's financial transactions. For any registered entity—be it a Partnership, LLP, or Company—maintaining proper Books of Accounts is not just a best practice but a legal mandate under the Companies Act and Income Tax Act. It involves keeping accurate records of all sales, purchases, receipts, and payments, which form the foundation for tax filings, statutory audits, and strategic financial decision-making. Professional bookkeeping ensures that your financial statements (Balance Sheet and Profit & Loss) reflect a 'true and fair' view of your business's health.`,
  advantages: [
    {
      icon: "TrendingUp",
      title: "Real-Time Financial Clarity",
      text: "Accurate bookkeeping provides a clear picture of your cash flow, profit margins, and operational expenses. This allows business owners to make data-driven decisions and identify growth opportunities or cost-cutting areas early.",
    },
    {
      icon: "Shield",
      title: "Statutory Compliance Readiness",
      text: "Properly maintained books are essential for filing GST returns, TDS returns, and Annual Income Tax returns. It ensures you are always ready for a Statutory or Tax Audit, significantly reducing the risk of penalties during assessment.",
    },
    {
      icon: "PieChart",
      title: "Optimized Tax Planning",
      text: "Detailed accounting allows you to track all deductible business expenses, depreciation, and partner remunerations accurately. This ensures you pay the correct amount of tax and don't miss out on legitimate tax-saving opportunities.",
    },
    {
      icon: "Search",
      title: "Fraud Prevention & Accuracy",
      text: "Regular reconciliation of bank statements and ledgers helps in the early detection of financial discrepancies, unauthorized transactions, or accounting errors, safeguarding the company's financial integrity.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertCircle",
      title: "Recurring Operational Expense",
      text: "Maintaining professional-grade accounting requires a consistent investment in skilled staff or external consultants, which can be a significant fixed cost for small businesses or startups.",
    },
    {
      icon: "Clock",
      title: "High Administrative Effort",
      text: "Collecting and organizing invoices, bank statements, and expense vouchers every month requires disciplined administrative effort from the business owner and management.",
    },
    {
      icon: "Lock",
      title: "Data Security Risks",
      text: "Storing sensitive financial data, whether physically or on cloud-based accounting software, introduces risks of data breaches or loss if robust security measures and backups are not maintained.",
    },
  ],
  eligibility: [
    {
      title: "Mandatory Maintenance Thresholds",
      items: [
        "**Companies (Pvt Ltd/OPC):** Mandatory to maintain books of accounts on a double-entry system regardless of turnover.",
        "**LLPs:** Mandatory to maintain books of accounts on a cash or accrual basis as per the LLP Act.",
        "**Partnerships:** Mandatory if turnover exceeds ₹25 Lakhs or business income exceeds ₹2.5 Lakhs in any of the 3 preceding years.",
        "**Professions:** Mandatory for specified professions (Medical, Legal, Engineering, etc.) if gross receipts exceed ₹1.5 Lakhs.",
      ],
    },
    {
      title: "Operational Requirements",
      items: [
        "Books must be kept at the registered office of the company.",
        "Records must be preserved for a minimum of 8 financial years.",
        "Must be maintained on an accrual basis for all companies.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Input Records",
      content: {
        title: "Required for daily accounting",
        items: [
          "Sales Invoices and Credit/Debit Notes.",
          "Purchase Bills and expense vouchers.",
          "Bank Statements for all business and current accounts.",
          "Cash memos and petty cash expense records.",
          "Fixed asset purchase invoices and depreciation schedules.",
        ],
      },
    },
    {
      tabTitle: "Output Reports",
      content: {
        title: "Generated for compliance",
        items: [
          "Trial Balance (Consolidated summary of all ledgers).",
          "Balance Sheet (Statement of Assets and Liabilities).",
          "Profit & Loss Account (Statement of Income and Expenses).",
          "General Ledgers and Journals.",
          "Bank Reconciliation Statements (BRS).",
        ],
      },
    },
    {
      tabTitle: "Statutory Data",
      content: {
        title: "For tax reconciliation",
        items: [
          "GST GSTR-2B/2A reports for Input Tax Credit (ITC) matching.",
          "TDS/TCS certificates (Form 16A/27D).",
          "Payroll data and PF/ESI contribution records.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Data Collection & Sorting",
      description: "Gather all physical and digital invoices, bank statements, and expense proofs on a monthly or quarterly basis.",
    },
    {
      step: 2,
      title: "Transaction Entry",
      description: "Record all financial transactions into accounting software (like Tally, Zoho, or QuickBooks) using the appropriate ledgers.",
    },
    {
      step: 3,
      title: "Bank Reconciliation",
      description: "Match the book entries with bank statements to ensure every transaction is accounted for and identify any missing entries.",
    },
    {
      step: 4,
      title: "Finalization of Trial Balance",
      description: "Review and close all ledger accounts to generate a final Trial Balance, ensuring mathematical accuracy of the books.",
    },
    {
      step: 5,
      title: "Financial Statement Preparation",
      description: "Generate the Balance Sheet and Profit & Loss account for the year-end audit and statutory tax filings.",
    },
  ],
  fees: [],
  feesMarkdown: `
Bookkeeping fees are primarily determined by the volume of transactions (bank entries and invoices) and the frequency of reporting required.

### Professional Fee Structure for Accounting

| Service Category | Transaction Volume (Monthly) | Estimated Professional Fee (Annual) | Scope of Service |
| --- | --- | --- | --- |
| Basic Bookkeeping | Up to 50 Transactions | Rs.10,000 to Rs.20,000 | Annual accounts preparation and ITR support. |
| Standard Accounting | 50 to 200 Transactions | Rs.25,000 to Rs.45,000 | Monthly reconciliation and quarterly reviews. |
| Comprehensive Service | 200+ Transactions | Rs.50,000 to Rs.1,20,000+ | Full-service accounting, GST/TDS filings, and audit support. |
| Payroll Management | Per Employee basis | Rs.5,000 to Rs.15,000 | Calculation of salary, PF, ESI, and PT. |

### Factors Influencing the Cost

*   **Software Licensing:** Costs for premium accounting software like Zoho Books or QuickBooks are usually extra.
*   **GST/TDS Integration:** Filing of monthly GST returns and quarterly TDS returns adds to the service complexity.
*   **Inventory Tracking:** Businesses with high inventory turnover require specialized stock accounting, which increases fees.
*   **Audit Coordination:** Fees may increase during the year-end audit as accountants work with statutory auditors for data verification.
`,
  faqs: [
    {
      q: "Is it mandatory to use accounting software?",
      a: "While the law doesn't specify the software, it requires books to be maintained on an **accrual basis** and preserved for 8 years. Using software is the only practical way to ensure accuracy and compliance.",
    },
    {
      q: "What is the 'accrual basis' of accounting?",
      a: "It means recording income and expenses when they are **earned or incurred**, regardless of when the cash actually changes hands. All companies are required to follow this basis.",
    },
    {
      q: "What happens if we don't maintain proper books?",
      a: "Failure to maintain books can lead to **heavy penalties** under the Companies Act (up to ₹5 Lakh) and the Income Tax Act (₹25,000). It also allows tax officers to estimate your tax (Best Judgment Assessment).",
    },
  ],
};
