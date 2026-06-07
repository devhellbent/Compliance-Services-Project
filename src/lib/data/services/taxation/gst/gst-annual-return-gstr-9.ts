// lib/data/services/taxation/gst/gst-annual-return-gstr-9.ts

import { ServiceData } from "@/lib/types";

export const gstAnnualReturnGstr9Data: ServiceData = {
  title: "GST Annual Return (GSTR-9)",
  breadcrumb: ["Home", "Taxation", "GSTR-9 Annual Return"],
  description:
    "GSTR-9 is a comprehensive annual return that consolidates all monthly or quarterly data reported by regular taxpayers throughout a financial year.",
  overview: `GSTR-9 is a comprehensive annual return that consolidates all monthly or quarterly data reported by regular taxpayers throughout a financial year. It acts as a final reconciliation statement for sales, purchases, and Input Tax Credit (ITC) claimed. In 2026, filing is mandatory for businesses with an aggregate annual turnover exceeding ₹2 crore, while those below this threshold are exempt.

The return for FY 2025-26 is due by December 31, 2026. It requires meticulous data sanitization, especially matching records with GSTR-2B, as the form cannot be revised after submission. For turnovers above ₹5 crore, taxpayers must also submit a self-certified reconciliation statement, GSTR-9C, alongside this return.

### Purpose of GST Annual Return Filing (GSTR-9)

The purpose of GSTR-9 extends beyond simple "annual filing." In 2026, it serves as the final statutory reconciliation between your internal books and the government's records.

#### Final Data Reconciliation
GSTR-9 consolidates all monthly or quarterly data from GSTR-1 (sales) and GSTR-3B (tax summaries). It allows you to:
*   **Match Sales:** Ensure total sales in your accounting software match what was reported to the government.
*   **Validate ITC:** Compare the Input Tax Credit (ITC) you claimed in GSTR-3B against what is reflected in the auto-generated GSTR-2B.

#### Declaration of Omitted Details
If you missed reporting certain invoices or tax liabilities in your periodic returns during the year, GSTR-9 provides a dedicated space to declare them.
*Note: While you can pay additional tax liability through DRC-03 alongside GSTR-9, you cannot claim any missed ITC for that financial year via this form.*

#### HSN and Category Summarization
In 2026, the government uses GSTR-9 to collect granular data for economic analysis:
*   **HSN Summary:** Requires a summary of outward supplies based on HSN codes (mandatory for businesses above specific turnover limits).
*   **Inward Supply Details:** Helps categorize your purchases into "Inputs," "Capital Goods," and "Input Services."

#### Risk Mitigation and Audit Prevention
A well-filed GSTR-9 acts as a shield against departmental scrutiny. By correcting minor mismatches now, you prevent the system from flagging your account for a GST Audit or a Suo-Moto notice later.

### Different Forms Under GSTR-9 Annual Return

In 2026, the GST annual return framework consists of four distinct forms, each tailored to a specific taxpayer category:

*   **GSTR-9 (Main Annual Return):** The standard form for every regular taxpayer. Mandatory if annual turnover exceeds ₹2 Crore; optional below this limit. Consolidates sales, purchases, and taxes paid into a single annual summary.
*   **GSTR-9A (Composition Annual Return):** Officially discontinued. Composition dealers now file via GSTR-4 (due April 30th). Only relevant for clearing backlogs for old financial years (pre-2019).
*   **GSTR-9B (E-commerce Operators):** Filed by every e-commerce operator (Amazon, Flipkart) that collects TCS. Acts as a final annual summary of GSTR-8 returns.
*   **GSTR-9C (Reconciliation Statement):** For taxpayers with turnover exceeding ₹5 Crore. A self-certified reconciliation statement matching GSTR-9 data with Audited Financial Statements.`,
  advantages: [
    {
      icon: "Shield",
      title: "Final Rectification of Discrepancies",
      text: "GSTR-9 allows you to correct minor errors—missed sales, wrong tax heads, or minor ITC mismatches—before the financial year data is permanently 'frozen' in the government database.",
    },
    {
      icon: "Activity",
      title: "Safeguarding Against Automated Scrutiny",
      text: "Filing GSTR-9 ensures that your total annual turnover and tax paid align perfectly across all platforms, significantly reducing the 'Risk Score' of your GSTIN for Rule 88C and 88D monitors.",
    },
    {
      icon: "TrendingUp",
      title: "Audit Prevention",
      text: "A reconciled GSTR-9 makes your business much less likely to be selected for a deep-dive investigation or a physical departmental audit, as it demonstrates disciplined compliance.",
    },
    {
      icon: "Award",
      title: "Business Credibility & Financing",
      text: "Most banks and NBFCs now require a filed GSTR-9 as primary income proof for MSME loans. It also contributes to your visible GST Compliance Rating, vital for winning corporate contracts.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertCircle",
      title: "Automatic Late Fees",
      text: "The portal automatically calculates late fees (₹200/day) which must be paid before the system even allows you to submit the return, creating an immediate financial block.",
    },
    {
      icon: "XCircle",
      title: "No New ITC Claims",
      text: "While you can pay additional tax liabilities identified during the year-end reconciliation via GSTR-9, the law strictly prohibits claiming any missed Input Tax Credit through this return.",
    },
    {
      icon: "ShieldAlert",
      title: "Registration Suspension Risk",
      text: "From January 2026, if GSTR-9 is not filed for three consecutive years, the portal will permanently block the filing of all future returns, effectively shutting down your business operations.",
    },
  ],
  eligibility: [
    {
      title: "Mandatory Filing (Turnover-Based)",
      items: [
        "**Above ₹2 Crore:** Mandatory to file the GSTR-9 Annual Return.",
        "**Above ₹5 Crore:** Mandatory to file GSTR-9 AND GSTR-9C (Self-certified reconciliation statement).",
        "**Exempt (Up to ₹2 Crore):** Filing is optional/voluntary for data correction purposes.",
      ],
    },
    {
      title: "Who Must File?",
      items: [
        "**Regular Taxpayers:** Any business registered for even a single day during the financial year.",
        "**SEZ Entities:** Both SEZ Units and SEZ Developers must file.",
        "**Cancelled Registrations:** If your registration was cancelled during the year, you must file for the active period.",
      ],
    },
    {
      title: "Who is Specifically Excluded?",
      items: [
        "**Casual/Non-Resident Taxpayers:** Occasional or foreign suppliers.",
        "**ISD:** Input Service Distributors.",
        "**TDS/TCS Deductors:** Authorities or platforms collecting tax at source.",
        "**Composition Taxpayers:** They file GSTR-4 instead of GSTR-9.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Portal Summaries",
      content: {
        title: "Consolidated portal data",
        items: [
          "GSTR-1 Yearly Summary: Consolidation of all sales reported during the financial year.",
          "GSTR-3B Yearly Summary: Consolidation of all tax payments and ITC claimed.",
          "Table 8A / GSTR-2B: Auto-drafted statement showing ITC uploaded by your suppliers.",
          "Electronic Ledgers: Closing balances of your Cash, Credit, and Liability ledgers.",
        ],
      },
    },
    {
      tabTitle: "Internal Books",
      content: {
        title: "Accounting records",
        items: [
          "Sales Register: List of all B2B, B2C, Exports, and Nil-rated invoices.",
          "Purchase Register: To reconcile internal ITC claims with portal data.",
          "Expense Ledgers: Specifically for identifying RCM (Reverse Charge) liabilities.",
          "Audited Financial Statements: Mandatory for those requiring GSTR-9C.",
        ],
      },
    },
    {
      tabTitle: "Reconciliation",
      content: {
        title: "Working papers",
        items: [
          "Sales Reconciliation: Matching Books of accounts vs GSTR-1 vs GSTR-3B.",
          "ITC Reconciliation: Matching Books of accounts vs GSTR-3B vs GSTR-2B.",
          "E-Way Bill Reconciliation: Cross-checking generated bills with sales invoices.",
          "HSN-wise Summary: Of all outward and inward supplies for the year.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Data Consolidation",
      description: "Download the consolidated yearly summaries (GSTR-1, 2B, 3B) from the GST portal and aggregate your internal sales/purchase registers.",
    },
    {
      step: 2,
      title: "Multi-Way Reconciliation",
      description: "Perform a detailed cross-check between your accounting books, your outward supplies (GSTR-1), and the tax summary (GSTR-3B).",
    },
    {
      step: 3,
      title: "Gap Identification & DRC-03",
      description: "Identify any unpaid tax or excess ITC claimed. Pay additional tax liabilities via Form DRC-03 to ensure the return is audit-ready.",
    },
    {
      step: 4,
      title: "Drafting GSTR-9 / 9C",
      description: "Fill the GSTR-9 form. For businesses above ₹5 Cr, prepare the GSTR-9C self-certified reconciliation statement as per audited balance sheets.",
    },
    {
      step: 5,
      title: "Submission & Signature",
      description: "File the return by the December 31st deadline using a Digital Signature (DSC) for corporate entities or EVC for others.",
    },
  ],
  fees: [],
  feesMarkdown: `
GSTR-9 late fees are tiered based on turnover to protect small businesses while ensuring large entities stay disciplined.

### Annual Professional Compliance Table

| Compliance Service | Applicability | Estimated Professional Fee (Annual) | Key Factors Affecting Cost |
| --- | --- | --- | --- |
| GSTR-9 (Basic) | Turnover ₹2 Cr – ₹5 Cr | Rs.7,500 to Rs.15,000 | Volume of monthly returns. |
| GSTR-9 + 9C | Turnover Above ₹5 Cr | Rs.15,000 to Rs.35,000 | Audited accounts complexity. |
| Books Finalization | All Businesses | Rs.15,000 to Rs.45,000 | Audit-readiness support. |
| Mismatch Resolution | Cases with Rule 88C notices | Rs.5,000 to Rs.15,000 | Legal explanation complexity. |

### Statutory Government Fees (Late Fees)

| Aggregate Annual Turnover | Daily Late Fee (CGST+SGST) | Maximum Penalty Cap |
| --- | --- | --- |
| Up to ₹5 Crore | ₹50 per day | 0.04% of state turnover |
| ₹5 Crore to ₹20 Crore | ₹100 per day | 0.04% of state turnover |
| Above ₹20 Crore | ₹200 per day | 0.50% of state turnover |

*Note: Late fees must be paid before the portal allows the return to be submitted.*
`,
  faqs: [
    {
      q: "Can I revise GSTR-9 after it is filed?",
      a: "No. Unlike periodic returns, GSTR-9 **cannot be revised**. All reconciliations must be finalized before the final submission.",
    },
    {
      q: "Is it mandatory to file GSTR-9C?",
      a: "Only if your aggregate turnover exceeds **₹5 Crore**. For those below this limit, GSTR-9C is not required.",
    },
    {
      q: "What happens if I miss the Dec 31st deadline?",
      a: "You will face **daily late fees** (up to ₹200/day) and your **compliance score** will drop, potentially leading to system-generated notices.",
    },
  ],
};
