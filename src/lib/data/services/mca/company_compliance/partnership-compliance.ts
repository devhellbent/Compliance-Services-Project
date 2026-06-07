// lib/data/services/mca/company_compliance/partnership-compliance.ts

import { ServiceData } from "@/lib/types";

export const partnershipComplianceData: ServiceData = {
  title: "Partnership Compliance",
  breadcrumb: ["Home", "MCA", "Partnership Compliance"],
  description:
    "Partnership Compliance refers to the mandatory legal, regulatory, and financial obligations that a business operating as a partnership firm must adhere to.",
  overview: `Partnership Compliance refers to the mandatory legal, regulatory, and financial obligations that a business operating as a partnership firm must adhere to. This includes the fundamental requirement of creating a Partnership Deed or Agreement, which outlines the rights, responsibilities, and profit-sharing among partners.

Crucially, compliance involves consistent adherence to tax laws, such as obtaining a Permanent Account Number (PAN) for the firm, filing annual Income Tax Returns (ITR), and, if applicable, registering for and filing Goods and Services Tax (GST) returns.

### Types of Partnership Firms

A Partnership Firm is governed by the Indian Partnership Act, 1932. Registration with the Registrar of Firms is optional, leading to two main types:

*   **Registered Partnership Firm:** Officially recorded in the Register of Firms. Has formal legal recognition, can sue third parties for breach of contract, and partners can sue each other to enforce rights under the agreement. Registration enhances credibility for bank loans and contracts.
*   **Unregistered Partnership Firm:** Operates based on a partnership deed but has not been officially recorded. The partnership agreement is still valid, but the firm cannot sue a third party, cannot allow a partner to sue the firm, and cannot claim a "set-off" exceeding a nominal amount. However, a third party can still sue an unregistered firm.

### What is a Partnership Firm Tax Return Filing

A Partnership Firm Tax Return Filing is the mandatory annual process of submitting ITR-5 to the Income Tax Department. This filing is compulsory regardless of profit or loss. The firm must declare its total income, claim eligible deductions for interest/remuneration paid to partners (within limits), and compute the total tax liability (generally a flat rate of 30%). The firm must file electronically by the due date (usually July 31st or October 31st if an audit is required).`,
  advantages: [
    {
      icon: "Shield",
      title: "Legal Protection and Credibility",
      text: "Timely compliance ensures the firm avoids hefty fines, interest charges, and potential legal proceedings. A fully compliant firm is viewed as trustworthy by banks, suppliers, and government agencies, which is vital for securing large contracts or tenders.",
    },
    {
      icon: "TrendingUp",
      title: "Easier Access to Credit and Funding",
      text: "Banks and financial institutions prefer lending to firms with consistent compliance records and audited financial statements. A clean tax history makes it significantly easier to secure business loans and higher credit limits.",
    },
    {
      icon: "Wallet",
      title: "Tax Optimization and Deductions",
      text: "Compliance ensures the firm correctly files its taxes (ITR-5), allowing it to legally claim deductions for allowable expenses, including interest and remuneration paid to partners (within prescribed limits), thereby optimizing taxable income.",
    },
    {
      icon: "Activity",
      title: "Operational Transparency",
      text: "Preparing for tax and regulatory filings requires maintaining accurate financial records. This fosters trust and clear accountability among partners, reducing the risk of internal conflicts or disagreements over profits and losses.",
    },
  ],
  disadvantages: [
    {
      icon: "ShieldAlert",
      title: "Unlimited Personal Liability",
      text: "Unlike an LLP or a Company, partners in a standard partnership have unlimited personal liability for the firm's debts. Personal assets can be used to settle the business's legal obligations if the firm cannot.",
    },
    {
      icon: "XCircle",
      title: "Legal Enforceability Risks",
      text: "Unregistered firms cannot sue third parties for contractual breaches and partners cannot sue the firm or each other for their rights under the deed, leaving them legally vulnerable.",
    },
    {
      icon: "FileText",
      title: "Compliance-Linked Disabilities",
      text: "Failure to adhere to tax laws or maintain proper records can lead to the 'Best Judgment Assessment' by tax officers, where liabilities are estimated at a flat 30% without benefit of deductions.",
    },
    {
      icon: "AlertCircle",
      title: "Risk of Hefty Penalties",
      text: "Late filing of Income Tax Returns (ITR-5) or GST returns leads to immediate monetary penalties and interest, which can accumulate significantly for high-turnover firms.",
    },
  ],
  eligibility: [
    {
      title: "Mandatory Core Compliance Criteria",
      items: [
        "**Firm PAN Card:** Mandatory for the firm to operate a business bank account and file annual tax returns.",
        "**ITR-5 Filing:** Compulsory annual filing of the firm's income tax return, regardless of profit or loss status.",
        "**Partnership Deed:** Must maintain a valid and updated partnership deed outlining profit-sharing and partner duties.",
      ],
    },
    {
      title: "Threshold-Based Compliance Criteria",
      items: [
        "**Income Tax Audit:** Mandatory if business turnover exceeds ₹1 Crore (subject to 95% digital transaction rules) or professional receipts exceed ₹50 Lakhs.",
        "**GST Registration:** Mandatory if aggregate annual turnover exceeds ₹40 Lakhs (for Goods) or ₹20 Lakhs (for Services).",
        "**Maintenance of Books:** Compulsory if turnover exceeds ₹25 Lakhs or income exceeds ₹2.5 Lakhs in any of the preceding years.",
      ],
    },
    {
      title: "Statutory Employee Criteria",
      items: [
        "**TDS Compliance:** Mandatory (TAN registration) if the firm pays salaries, rent, or professional fees above specified thresholds.",
        "**EPF Registration:** Compulsory for firms employing 20 or more persons.",
        "**ESI Registration:** Mandatory for firms employing 10 or more persons (with wages below specified limits).",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Constitution",
      content: {
        title: "Constitution and ID records",
        items: [
          "Original Partnership Deed: Outlining rights and profit-sharing.",
          "PAN Card of the Firm: Primary corporate tax identity.",
          "Certificate of Registration: Issued by the Registrar of Firms (if registered).",
          "Address Proof of Firm: Sale Deed/Tax Receipt or Rent Agreement + NOC.",
          "Cancelled cheque or latest bank statement of the firm's account.",
        ],
      },
    },
    {
      tabTitle: "Partner KYC",
      content: {
        title: "Identity proofs of all partners",
        items: [
          "PAN Cards of all individual partners.",
          "Aadhaar Cards of all partners (mandatory for authorized signatory).",
          "Address Proof: Passport, Voter ID, or Utility Bills of each partner.",
          "Latest passport-sized Photographs of all partners.",
        ],
      },
    },
    {
      tabTitle: "Financial Records",
      content: {
        title: "Inputs for ITR and Audit",
        items: [
          "Audited Financial Statements (Balance Sheet and Profit & Loss Account).",
          "Sales, Purchase, and Expense Registers with supporting vouchers.",
          "Bank Statements for all business accounts for the financial year.",
          "Tax Audit Report (Form 3CB/3CD) certified by a CA (if applicable).",
          "Copies of previously filed GST and TDS returns for the year.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Data Compilation",
      description: "Aggregate all bank statements, purchase/sales invoices, and expense vouchers for the entire financial year (April to March).",
    },
    {
      step: 2,
      title: "Financial Finalization",
      description: "Prepare the final Trial Balance and Financial Statements (Balance Sheet and P&L Account) based on the consolidated records.",
    },
    {
      step: 3,
      title: "Statutory Audit",
      description: "Engage a Chartered Accountant to conduct a Tax Audit if the firm's turnover crosses the mandatory ₹1 Crore threshold.",
    },
    {
      step: 4,
      title: "Tax Computation",
      description: "Calculate the firm's tax liability (flat 30%) after adjusting for allowable partner remunerations and interests under Section 40(b).",
    },
    {
      step: 5,
      title: "E-Filing of ITR-5",
      description: "Submit the final Income Tax Return electronically before the prescribed July 31st or October 31st deadlines.",
    },
  ],
  fees: [],
  feesMarkdown: `
The compliance fees for a Partnership Firm depend on the transaction volume and the requirement for a mandatory tax audit.

### Annual Professional Compliance Table

| Compliance Service | Applicability | Estimated Professional Fee (Annual) | Key Factors Affecting Cost |
| --- | --- | --- | --- |
| ITR-5 Filing | Mandatory for all firms | Rs.3,500 to Rs.8,000+ | Complexity and partner volume. |
| Tax Audit (Sec 44AB) | Turnover > ₹1 Cr | Rs.15,000 to Rs.40,000+ | Complexity of finances and time. |
| Bookkeeping Services | All firms | Rs.10,000 to Rs.35,000+ | Monthly transaction count. |
| GST Compliances | Registered for GST | Rs.8,000 to Rs.25,000+ | Monthly vs Quarterly filing frequency. |
| TDS Compliances | If deducting TDS | Rs.5,000 to Rs.15,000+ | Number of quarterly challans. |

### Statutory Late Filing Penalties

*   **Late ITR Filing (Sec 234F):** Up to ₹5,000 (₹1,000 if total income is under ₹5 Lakh).
*   **Late GST Return Filing:** ₹50 per day (₹20 for Nil returns) with a maximum cap.
*   **Late Tax Audit Filing:** 0.5% of the turnover or ₹1,50,000 (whichever is lower).
`,
  faqs: [
    {
      q: "Is it mandatory to file ITR even if the firm had a loss?",
      a: "Yes. Every partnership firm is a separate taxable entity and must file its return using **ITR-5**, regardless of profit or loss.",
    },
    {
      q: "What is the tax rate for a partnership firm?",
      a: "Partnership firms are taxed at a **flat rate of 30%** on their total income, plus applicable surcharge and cess.",
    },
    {
      q: "Can an unregistered partnership firm file for a loan?",
      a: "While technically possible, most banks **require registration** with the Registrar of Firms and a clear compliance history for processing business loans.",
    },
  ],
};
