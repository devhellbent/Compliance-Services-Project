import { ServiceData } from "@/lib/types";

export const businessTaxFilingData: ServiceData = {
  title: "Business Tax Filing",
  breadcrumb: ["Home", "Taxation", "Income Tax", "Business Tax Filing"],
  description:
    "Business tax filing is the formal process of reporting a company's annual financial activity to the government, documenting revenue, expenses, and calculating tax liability.",
  overview: `Business tax filing is the formal process of reporting a company's annual financial activity to the government. It involves documenting total revenue, subtracting deductible business expenses (like rent and payroll), and calculating the final tax liability based on the company's legal structure.

This process is vital for legal compliance and financial transparency. Beyond fulfilling a statutory requirement, a clean filing history builds business credibility, making it easier to secure bank loans, attract investors, and carry forward financial losses to offset future profits.

### Types of Business Tax Filing

The type of tax filing depends on the business's legal structure:

- **Sole Proprietorships:** Owner and business are one — profits reported on personal return.
- **Partnerships:** "Pass-through" entities filing Form 1065, issuing K-1 to each partner.
- **Corporations (C-Corps):** Separate entities filing Form 1120 and paying corporate income tax.
- **S-Corporations:** File Form 1120-S but tax liability passes through to shareholders.
- **LLCs:** The "chameleon" — files based on member count and election.`,
  advantages: [
    { icon: "TrendingUp", title: "Maximizing Deductions", text: "Subtract business-related costs — office rent, employee salaries, utility bills, and travel expenses — from total revenue, significantly lowering taxable income." },
    { icon: "RefreshCw", title: "Carry Forward Losses", text: "If your business incurs a loss, filing on time allows you to save that loss and offset it against future profits, drastically reducing future tax bills." },
    { icon: "BadgeDollarSign", title: "Claiming Refunds", text: "Businesses often overpay tax through TDS or estimated payments. Filing is the only way to trigger a refund of excess cash back into your bank account." },
    { icon: "Landmark", title: "Easy Loan Approvals", text: "Banks typically require 2 to 3 years of filed tax returns to verify income stability and repayment capacity for commercial loans." },
    { icon: "Users", title: "Attracting Investors", text: "Venture capitalists and angel investors use tax filings for due diligence, proving business transparency and financial health." },
    { icon: "ShieldCheck", title: "Risk Mitigation", text: "Consistent filing avoids penalties with high-interest charges (up to 12-18% annually), reduces audit risk, and establishes legal safeguard between personal and business finances." },
  ],
  disadvantages: [
    { icon: "FileWarning", title: "Complexity Varies by Structure", text: "Corporate and partnership filings require detailed financial statements, multiple schedules, and often mandatory audits." },
    { icon: "Wallet", title: "Professional Fees Required", text: "Most businesses need a CA or tax expert, with fees ranging from ₹1,500 to ₹75,000+ depending on the structure and complexity." },
    { icon: "Clock", title: "Strict Deadlines", text: "Missing filing deadlines triggers mandatory late fees and interest charges that can accumulate rapidly." },
  ],
  eligibility: [
    {
      title: "Who Must File Business Tax Returns?",
      items: [
        "Sole Proprietorships — report on personal return (ITR-3 or ITR-4).",
        "Partnership Firms — file ITR-5 with partner profit distribution.",
        "LLPs — mandated to file ITR-5 with full financial statements.",
        "Private Limited Companies — file ITR-6 with audited financials.",
        "Public Limited Companies — file ITR-6 with extensive disclosures.",
        "One Person Companies — corporate entities filing ITR-6.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Financial Statements",
      content: {
        title: "Essential Financial Statements",
        items: [
          "**Profit & Loss Statement:** Total revenue minus all business expenses.",
          "**Balance Sheet:** Business assets and liabilities as of fiscal year end.",
          "**Cash Flow Statement:** Actual movement of cash in and out.",
          "**Bank & Credit Card Statements:** Reconciliation of internal books with actual bank activity.",
        ],
      },
    },
    {
      tabTitle: "Income Documents",
      content: {
        title: "Income Reporting Documents",
        items: [
          "**Form 26AS & AIS (India):** Verifying TDS and government records.",
          "**Digital Asset Records:** Proof of income from cryptocurrency, stablecoins, or NFTs.",
        ],
      },
    },
    {
      tabTitle: "Expense Records",
      content: {
        title: "Expense & Deduction Records",
        items: [
          "**Payroll Records:** Wages, benefits, and employment taxes paid to staff.",
          "**Receipts & Invoices:** For rent, utilities, office supplies, and equipment.",
          "**Asset Records:** Purchase dates and costs for depreciation calculation.",
          "**Home Office Information:** Square footage and related utility bills.",
        ],
      },
    },
    {
      tabTitle: "Identifiers & Prior Returns",
      content: {
        title: "Important Identifiers",
        items: [
          "**Tax IDs:** EIN or PAN/Aadhaar linked and active.",
          "**Digital MFA:** Multi-Factor Authentication for tax portals.",
          "**Prior Year Returns:** 2024 and 2025 returns for Carry Forward Losses.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Determine Business Structure", description: "Identify your legal structure (sole proprietorship, partnership, LLP, company) to select the correct ITR form." },
    { step: 2, title: "Prepare Financial Statements", description: "Compile P&L, Balance Sheet, and Cash Flow Statement for the fiscal year." },
    { step: 3, title: "Reconcile Tax Statements", description: "Match AIS, Form 26AS, and bank records to ensure all income and TDS are accounted for." },
    { step: 4, title: "Calculate Tax Liability", description: "Compute total taxable income after deductions, and determine the appropriate tax rate." },
    { step: 5, title: "Pay Outstanding Tax", description: "Clear any remaining tax dues via challan before filing the return." },
    { step: 6, title: "File & Verify", description: "Submit the return on the e-filing portal and verify via DSC, Aadhaar OTP, or EVC." },
  ],
  fees: [
    { component: "Small Freelancers / Gig Workers", fees: "₹1,500 – ₹3,500", remarks: "ITR-4 (Presumptive)." },
    { component: "Professionals / Consultants", fees: "₹3,000 – ₹7,000", remarks: "ITR-3 / ITR-4." },
    { component: "Partnership Firms / LLPs", fees: "₹5,000 – ₹15,000", remarks: "ITR-5." },
    { component: "Private Limited Companies", fees: "₹15,000 – ₹40,000+", remarks: "ITR-6." },
    { component: "Tax Audit (Mandatory)", fees: "₹20,000 – ₹75,000+", remarks: "Form 3CA/3CD." },
    { component: "Late Fee (Income ≤ ₹5 Lakh)", fees: "₹1,000", remarks: "Under Section 234F." },
    { component: "Late Fee (Income > ₹5 Lakh)", fees: "₹5,000", remarks: "Under Section 234F." },
  ],
  faqs: [
    { q: "When is the deadline for business tax filing?", a: "July 31 for individuals (ITR-1/4), August 31 for non-audit business cases (ITR-3/4/5), and October 31 for companies and audit cases (ITR-6)." },
    { q: "What happens if I don't file?", a: "Late filing triggers penalties of ₹1,000-₹5,000 plus interest of 1% per month on unpaid tax under Section 234A." },
    { q: "Can I carry forward business losses?", a: "Yes, but only if the return is filed before the original deadline. Losses can be carried forward for up to 8 years." },
  ],
};
