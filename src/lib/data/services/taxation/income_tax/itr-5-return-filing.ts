import { ServiceData } from "@/lib/types";

export const itr5ReturnFilingData: ServiceData = {
  title: "ITR-5 Return Filing",
  breadcrumb: ["Home", "Taxation", "Income Tax", "ITR-5 Return Filing"],
  description:
    "ITR-5 is a comprehensive income tax return form designed for non-individual entities including Partnership Firms, LLPs, AOPs, BOIs, and cooperative societies.",
  overview: `ITR-5 is a comprehensive income tax return form designed for non-individual entities that do not file as companies. It is the primary form for Partnership Firms, Limited Liability Partnerships (LLPs), Association of Persons (AOPs), Body of Individuals (BOIs), and cooperative societies.

Unlike the simplified ITR-4, this form has no income ceiling and requires mandatory, detailed financial disclosures. Filers must provide a complete Balance Sheet and Profit & Loss statement, ensuring full transparency of the entity's financial health and business operations.

Under the latest 2026 rules, ITR-5 allows for the carry-forward of business losses to future years. Most entities using this form are taxed at a flat rate of 30%, plus applicable surcharges and cess.`,
  advantages: [
    { icon: "TrendingUp", title: "Carry Forward of Losses", text: "Carry forward business losses for up to 8 assessment years. Unabsorbed depreciation can be carried forward indefinitely, helping reduce tax liability in years of high profitability." },
    { icon: "Infinity", title: "No Income Limit", text: "No upper turnover or income ceiling. While ITR-4 caps at ₹50 lakh, ITR-5 handles businesses of any size, from small startups to multi-crore partnership firms." },
    { icon: "Users", title: "Deduct Partner Remuneration", text: "Firms can claim deductions for remuneration/salary paid to working partners and interest on capital paid to partners (up to 12%), reducing the firm's taxable profit." },
    { icon: "Landmark", title: "Financial Accuracy & Credibility", text: "Mandatory Balance Sheet and P&L provide higher loan eligibility, and structured reporting is a prerequisite for investor due diligence." },
    { icon: "Layers", title: "All Income Heads Included", text: "Report multiple house properties, full capital gains from any asset class without restrictions, unlike the simplified ITR-4 form." },
  ],
  disadvantages: [
    { icon: "FileWarning", title: "Complex Documentation", text: "Requires mandatory detailed Balance Sheet and Profit & Loss statement, unlike the summary approach of ITR-4." },
    { icon: "Wallet", title: "Higher Filing Costs", text: "Professional fees range from ₹5,000 to ₹50,000+ for audit cases, significantly more than ITR-4." },
    { icon: "Calculator", title: "Flat 30% Tax Rate", text: "Most entities are taxed at a flat rate of 30% plus surcharge and cess, without the benefit of concessional rates available to companies." },
  ],
  eligibility: [
    {
      title: "Eligible Entities",
      items: [
        "**Partnership Firms:** Both registered and unregistered firms.",
        "**LLPs:** Mandated to use ITR-5 (cannot use ITR-4).",
        "**AOPs & BOIs:** Including societies, clubs, and trusts not claiming Section 11 exemption.",
        "**Artificial Juridical Persons (AJPs):** Entities not falling under other categories.",
        "**Cooperative Societies:** Including cooperative banks and credit societies.",
        "**Local Authorities:** Municipalities, panchayats, etc.",
        "**Estates:** Estate of a deceased person or estate of an insolvent.",
        "**Investment Funds & Business Trusts:** Including REITs and InvITs.",
      ],
    },
    {
      title: "Nature of Income",
      items: [
        "No income limit — covers business/professional income, house property, capital gains, and other sources.",
        "Used when a tax audit is required.",
      ],
    },
    {
      title: "Who Cannot File ITR-5?",
      items: [
        "**Individuals & HUFs:** Must use ITR-1 to ITR-4.",
        "**Companies:** Must use ITR-6.",
        "**Charitable/Religious Trusts:** Entities claiming Section 11 exemptions must use ITR-7.",
        "**Political Parties:** Required to use ITR-7.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Entity Documents",
      content: {
        title: "Core Entity Documents",
        items: [
          "**PAN of the Entity:** Permanent Account Number of the Firm, LLP, or AOP.",
          "**Partnership Deed / LLP Agreement:** To verify profit-sharing ratios and partner remuneration clauses.",
          "**Registration Certificate:** For LLPs or registered societies.",
          "**Digital Signature Certificate (DSC):** Mandatory for firms subject to tax audit.",
        ],
      },
    },
    {
      tabTitle: "Financial Statements",
      content: {
        title: "Financial Statements (Mandatory Disclosures)",
        items: [
          "**Profit & Loss Account:** Detailed breakdown of all business income and expenses.",
          "**Balance Sheet:** All Assets and Liabilities as of March 31, 2026.",
          "**Audit Report:** Form 3CA/3CB and 3CD if turnover exceeds ₹1 crore (or ₹10 crore with limited cash).",
        ],
      },
    },
    {
      tabTitle: "Partner Details",
      content: {
        title: "Partner / Member Details",
        items: [
          "**Personal Details:** Names, addresses, PANs, and Aadhaar numbers of all partners/members.",
          "**Capital Accounts:** Summary of capital introduced, drawings made, and interest/remuneration paid during the year.",
        ],
      },
    },
    {
      tabTitle: "Tax Records",
      content: {
        title: "Tax Records, Reconciliations & Schedules",
        items: [
          "**AIS & TIS:** To verify high-value transactions and ensure reported income matches books.",
          "**Form 26AS:** Cross-check TDS and advance tax paid by the firm.",
          "**GST Returns (GSTR-1 & 3B):** Ensure turnover reconciles with GST-taxable turnover.",
          "**Depreciation Schedule:** Calculated as per Income Tax Act rates.",
          "**Brought Forward Losses:** Records of previous year losses for set-off.",
          "**Section 43B(h) Compliance:** Pending payments to Micro and Small Enterprises beyond 45-day credit.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Login to e-Filing Portal", description: "Use the entity's PAN credentials to log in at incometax.gov.in." },
    { step: 2, title: "Select ITR-5", description: "Navigate to e-File > Income Tax Returns and select ITR-5." },
    { step: 3, title: "Enter Financial Statements", description: "Fill in Balance Sheet, P&L Account, and partner remuneration details." },
    { step: 4, title: "Enter Income Details", description: "Report business income, house property, capital gains, and other sources." },
    { step: 5, title: "Upload Audit Report", description: "If applicable, ensure Form 3CA/3CB-3CD is filed by the CA before submitting ITR." },
    { step: 6, title: "Submit & Verify", description: "Submit the return and verify using DSC (mandatory for audit cases)." },
  ],
  fees: [
    { component: "Government Filing Fee", fees: "NIL", remarks: "Free on the portal before deadline." },
    { component: "Late Fee (Income ≤ ₹5 Lakh)", fees: "₹1,000", remarks: "Under Section 234F." },
    { component: "Late Fee (Income > ₹5 Lakh)", fees: "₹5,000", remarks: "Under Section 234F." },
    { component: "Standard Partnership/AOP", fees: "₹5,000 – ₹12,000", remarks: "Based on number of transactions." },
    { component: "LLP Filing", fees: "₹6,000 – ₹15,000", remarks: "Often includes ROC compliance (Form 8 & 11)." },
    { component: "Audit Cases", fees: "₹15,000 – ₹50,000+", remarks: "For turnover > ₹1 Crore." },
    { component: "Online Platforms (Assisted)", fees: "₹2,500 – ₹10,000", remarks: "Self-service to expert-assisted plans." },
  ],
  faqs: [
    { q: "Who should file ITR-5?", a: "Partnership Firms, LLPs, AOPs, BOIs, cooperative societies, and other non-individual, non-company entities." },
    { q: "Can LLPs use ITR-4 instead?", a: "No. LLPs are strictly mandated to use ITR-5 and cannot use the simplified ITR-4." },
    { q: "Is a Balance Sheet mandatory for ITR-5?", a: "Yes. ITR-5 requires a complete Balance Sheet and Profit & Loss statement to be filled in." },
    { q: "What is the tax rate for entities filing ITR-5?", a: "Most entities are taxed at a flat rate of 30% plus applicable surcharge and 4% health & education cess." },
  ],
};
