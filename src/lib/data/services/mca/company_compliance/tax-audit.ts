// lib/data/services/mca/company_compliance/tax-audit.ts

import { ServiceData } from "@/lib/types";

export const taxAuditData: ServiceData = {
  title: "Tax Audit Services (Section 44AB)",
  breadcrumb: ["Home", "MCA", "Tax Audit"],
  description:
    "Tax Audit is a mandatory audit of accounts of taxpayers under Section 44AB of the Income Tax Act to ensure compliance with tax laws and accurate income calculation.",
  overview: `A Tax Audit is a mandatory audit of a taxpayer's accounts under Section 44AB of the Income Tax Act, 1961. Conducted by a practicing Chartered Accountant, it ensures that the business or professional taxpayer has correctly calculated their taxable income and complied with all tax laws, such as TDS, GST, and allowable business expenses. The audit report, consisting of Form 3CA/3CB and the detailed Form 3CD, must be filed electronically on the Income Tax portal. Unlike a Statutory Audit which focuses on 'true and fair' financials, a Tax Audit is specifically designed to prevent tax evasion and ensure accurate tax payments to the government.`,
  advantages: [
    {
      icon: "Shield",
      title: "Avoidance of Massive Penalties",
      text: "Completing a mandatory tax audit on time protects the taxpayer from the heavy penalty under Section 271B, which can be 0.5% of the total turnover or ₹1,50,000, whichever is lower.",
    },
    {
      icon: "CheckCircle",
      title: "Accurate Tax Liability Calculation",
      text: "The audit process involves a line-by-line verification of business expenses, ensuring that you only pay tax on your actual net income after claiming all legitimate deductions and exemptions allowed under the law.",
    },
    {
      icon: "Activity",
      title: "Minimizes Risk of Income Tax Scrutiny",
      text: "An audited return is verified by a professional CA, which significantly reduces the chances of receiving a scrutiny notice or inquiry from the Income Tax Department regarding discrepancies in income or expenses.",
    },
    {
      icon: "TrendingUp",
      title: "Systematic Financial Record-Keeping",
      text: "Preparing for a tax audit forces businesses to maintain disciplined financial records and ledgers throughout the year, which improves the overall financial health and operational efficiency of the organization.",
    },
  ],
  disadvantages: [
    {
      icon: "Clock",
      title: "Extremely Tight Deadlines",
      text: "The deadline for filing the tax audit report is September 30th every year. Missing this deadline by even one day can trigger the full penalty and lead to higher interest charges on tax due.",
    },
    {
      icon: "FileWarning",
      title: "High Professional Fee Burden",
      text: "A tax audit is a complex, time-consuming process that requires a high degree of CA expertise, making it one of the more expensive annual compliance requirements for high-turnover businesses.",
    },
    {
      icon: "Search",
      title: "Increased Compliance Scrutiny",
      text: "The detailed Form 3CD requires disclosure of almost every minor tax non-compliance (like late TDS payments). Once disclosed in the audit report, these automatically trigger interest and late fees from the department.",
    },
  ],
  eligibility: [
    {
      title: "Mandatory Thresholds (Business)",
      items: [
        "**Standard Case:** Mandatory if total sales, turnover, or gross receipts exceed ₹1 Crore in a financial year.",
        "**Low-Cash Case:** Limit extended to ₹10 Crores if cash receipts and payments are less than 5% of the total.",
        "**Presumptive Case:** Mandatory if a taxpayer opts out of Sec 44AD despite their income being below the prescribed limit.",
      ],
    },
    {
      title: "Mandatory Thresholds (Profession)",
      items: [
        "**Professional Services:** Mandatory if gross receipts from a profession exceed ₹50 Lakhs in a financial year.",
        "**Presumptive Case:** Mandatory if a professional opts for presumptive tax under Sec 44ADA but claims income lower than the prescribed rate.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Form 3CD Inputs",
      content: {
        title: "Required for the audit report",
        items: [
          "Audited Financial Statements (Balance Sheet & P&L).",
          "GST reconciliation statement matching books with GST returns.",
          "TDS/TCS records and proof of timely deposit of taxes.",
          "Details of any payments made to related parties (Sec 40A(2)(b)).",
          "Details of any loans or deposits accepted/repaid >₹20,000 (Sec 269SS/T).",
        ],
      },
    },
    {
      tabTitle: "Vouching Docs",
      content: {
        title: "Verification evidence",
        items: [
          "Sales and Purchase registers with tax-compliant invoices.",
          "Stock Register and closing stock valuation proofs.",
          "Expense vouchers exceeding ₹10,000 paid in cash (to be disallowed).",
          "Bank Statements for the entire financial year.",
        ],
      },
    },
    {
      tabTitle: "Identity / IT",
      content: {
        title: "For e-filing",
        items: [
          "PAN and Aadhaar of the Taxpayer (Proprietor/Partner/Director).",
          "Login credentials for the Income Tax E-filing portal.",
          "Digital Signature Certificate (DSC) of the Taxpayer and the Auditor.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Auditor Appointment",
      description: "Select a practicing Chartered Accountant and provide the 'Audit Assignment' on the Income Tax portal.",
    },
    {
      step: 2,
      title: "Data Verification & Vouching",
      description: "The CA team verifies ledgers, TDS compliance, GST reconciliation, and checks for any prohibited cash transactions.",
    },
    {
      step: 3,
      title: "Preparation of Form 3CD",
      description: "Draft the detailed 44-point annexure (Form 3CD) detailing every tax-relevant aspect of the business operations.",
    },
    {
      step: 4,
      title: "E-filing of Audit Report",
      description: "The Auditor uploads the report (3CA/3CB and 3CD) to the portal using their DSC before the September 30th deadline.",
    },
    {
      step: 5,
      title: "Taxpayer Approval",
      description: "The taxpayer logs into their portal to 'Accept' the uploaded audit report, completing the legal filing requirement.",
    },
  ],
  fees: [],
  feesMarkdown: `
Tax Audit fees depend on the volume of transactions, the number of GST/TDS returns to be reconciled, and the complexity of the business.

### Professional Fee Structure for Tax Audit

| Entity Category | Turnover Range | Estimated Tax Audit Fee | Key Factors Affecting Cost |
| --- | --- | --- | --- |
| Professional | ₹50 Lakh to ₹2 Crore | Rs.10,000 to Rs.20,000 | Number of professional expense vouchers. |
| Small Business | ₹1 Crore to ₹5 Crore | Rs.15,000 to Rs.35,000 | Volume of purchase/sale invoices and GST reconciliations. |
| Large Business | ₹5 Crore to ₹10 Crore+ | Rs.40,000 to Rs.1,00,000+ | Complexity of inventory and numerous TDS entries. |
| Presumptive Cases | Below Threshold | Rs.7,500 to Rs.15,000 | Reason for opting out of presumptive taxation schemes. |

### Statutory Penalty for Non-Compliance

*   **Section 271B:** Failure to get accounts audited can attract a penalty of **0.5% of the turnover** or **₹1,50,000**, whichever is lower.
*   **Late Filing of ITR:** If the audit is late, the ITR will also be delayed, leading to additional penalties under Sec 234F (up to ₹5,000) and interest on tax due (Sec 234A).
`,
  faqs: [
    {
      q: "What is the deadline for filing the Tax Audit report?",
      a: "The deadline is **September 30th** of the assessment year. The Income Tax Return (ITR) for these cases must be filed by **October 31st**.",
    },
    {
      q: "When is the ₹10 Crore limit applicable instead of ₹1 Crore?",
      a: "The ₹10 Cr limit applies if **cash receipts** are ≤ 5% of total receipts AND **cash payments** are ≤ 5% of total payments.",
    },
    {
      q: "Can the same CA do both Statutory and Tax Audit?",
      a: "Yes. In fact, most companies prefer the **same auditor** for both as they are already familiar with the books, saving time and effort.",
    },
  ],
};
