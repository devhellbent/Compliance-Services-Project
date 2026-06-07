import { ServiceData } from "@/lib/types";

export const itr3ReturnFilingData: ServiceData = {
  title: "ITR-3 Return Filing",
  breadcrumb: ["Home", "Taxation", "Income Tax", "ITR-3 Return Filing"],
  description:
    "ITR-3 is a comprehensive tax return form for individuals and HUFs earning income from a business or profession, including F&O traders, freelancers, and professionals.",
  overview: `ITR-3 is a comprehensive tax return form for individuals and HUFs earning income from a business or profession. It is mandatory for those who maintain detailed books of accounts, such as sole proprietors, professionals like doctors or CAs, and freelancers. It also applies to individuals who are partners in a firm or those engaged in Futures & Options (F&O) and intraday trading, which the tax department classifies as business income.

This "master form" allows you to report all income sources, including salary, multiple house properties, and capital gains. Unlike the simplified ITR-4, it requires a full balance sheet and profit-loss statement. For the AY 2026-27, the filing deadline for non-audit cases has been extended to August 31, 2026, while those requiring a tax audit must file by October 31, 2026.

### Key Features of ITR-3

- **Detailed Financials:** Requires you to fill in a Balance Sheet and Profit & Loss (P&L) Account if your turnover exceeds certain limits.
- **Audit Requirement:** If business turnover exceeds ₹1 crore (or up to ₹10 crore if 95% of transactions are digital), accounts must be audited by a CA.
- **Expense Claims:** You can deduct all business-related expenses (rent, electricity, staff salary, internet, marketing) from gross income.
- **Depreciation:** Claim depreciation on assets used for business, like laptops, cars, or office furniture.`,
  advantages: [
    { icon: "Receipt", title: "Claiming Actual Business Expenses", text: "Unlike ITR-4 (fixed percentage), ITR-3 allows deducting actual expenses — office rent, electricity, internet, software subscriptions, travel, marketing, staff salaries, and depreciation on assets." },
    { icon: "TrendingUp", title: "Setting Off and Carrying Forward Losses", text: "F&O and Intraday losses can be set off against other income. Net business or trading losses can be carried forward for 8 consecutive years to reduce future taxable profits." },
    { icon: "Layers", title: "The 'Master Form' Flexibility", text: "The only form allowing an individual to report every possible income source in a single return: Salary + Business, Capital Gains, Multiple Properties, Foreign Assets, Crypto, and Partnership firm income." },
    { icon: "Landmark", title: "Higher Financial Credibility", text: "Because ITR-3 requires a Balance Sheet and P&L statement, it carries significant weight for large business loans and visa processing for self-employed individuals." },
    { icon: "ShieldCheck", title: "Avoiding Penalties for Traders", text: "Filing ITR-3 ensures compliance for F&O or Intraday trades, preventing 'Defective Return' notices and potential penalties under the Black Money Act." },
  ],
  disadvantages: [
    { icon: "FileWarning", title: "Most Complex Individual Form", text: "Requires detailed Balance Sheet, P&L Account, and multiple schedules making it the most time-consuming individual return to prepare." },
    { icon: "Wallet", title: "Highest Professional Fees", text: "CAs charge ₹3,000 to ₹50,000+ depending on complexity, especially for audit cases." },
    { icon: "Clock", title: "Mandatory Audit for High Turnover", text: "Business turnover exceeding ₹1 crore (or ₹10 crore with digital transactions) requires a mandatory tax audit, adding cost and compliance burden." },
  ],
  eligibility: [
    {
      title: "Business & Professional Income (Primary Trigger)",
      items: [
        "**Proprietors:** Run a business (manufacturing, retail, etc.) in your own name.",
        "**Professionals:** Doctors, lawyers, CAs, architects, or consultants.",
        "**Freelancers:** Earn income through contract work, digital marketing, or technical gigs.",
        "**Partners:** Partner in a firm receiving salary, bonus, commission, or interest from the firm.",
      ],
    },
    {
      title: "Specific Trading Activities",
      items: [
        "**F&O Trading:** Futures and Options trading (classified as non-speculative business).",
        "**Intraday Trading:** Buying and selling stocks within the same day (classified as speculative business).",
      ],
    },
    {
      title: "Complex Financial Profiles",
      items: [
        "Total income exceeds ₹50 lakh with business income.",
        "Director in any company.",
        "Held unlisted equity shares at any time during the year.",
        "Own assets outside India or earn income from foreign sources.",
        "Income from more than one house property with business income.",
      ],
    },
    {
      title: "Who is NOT Eligible?",
      items: [
        "**Non-Individuals:** Companies, LLPs, Firms, and Trusts (use ITR-5, ITR-6, or ITR-7).",
        "**Simple Income Only:** Salary, one house property, and interest income only (use ITR-1).",
        "**No Business Income:** Capital gains without business/professional income (use ITR-2).",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Core Financial Statements",
      content: {
        title: "Core Financial & Tax Statements",
        items: [
          "**AIS & TIS:** Primary document to reconcile all digital financial footprints (dividends, share sales, interest).",
          "**Form 26AS:** To verify TDS credits from clients, banks, or employers.",
          "**Form 16/16A:** Form 16 for salary income; Form 16A for TDS on professional fees or interest.",
        ],
      },
    },
    {
      tabTitle: "Business Records",
      content: {
        title: "Business & Professional Records",
        items: [
          "**Profit & Loss Account:** Summary of total revenue/sales and all business-related expenses.",
          "**Balance Sheet:** Statement of business assets and liabilities as of March 31, 2026.",
          "**Books of Account:** Ledgers, cash books, and registers.",
          "**Audit Report:** Form 3CA/3CB-3CD signed by a CA if turnover exceeds limits.",
        ],
      },
    },
    {
      tabTitle: "Trading Documents",
      content: {
        title: "Trading & Investment Documents",
        items: [
          "**Tax P&L Statement:** Downloaded from broker (Zerodha, Groww) including F&O and Intraday turnover.",
          "**Contract Notes:** For cross-verifying STT and brokerage charges.",
          "**Capital Gains Statement:** For delivery-based stock sales or mutual fund redemptions.",
        ],
      },
    },
    {
      tabTitle: "Special Income & Deductions",
      content: {
        title: "Special Income, Assets & Deduction Proofs",
        items: [
          "**Partnership Firm Details:** Firm's PAN and details of salary, bonus, or interest received.",
          "**Foreign Assets (Schedule FA):** Foreign bank accounts, stocks (RSUs/ESOPs), or property abroad.",
          "**Directorship Details:** Company's name, PAN, and your DIN.",
          "**Business Expense Bills:** Receipts for rent, electricity, traveling, marketing, and staff salaries.",
          "**Investment Proofs:** LIC, PPF, ELSS, and health insurance receipts (Section 80C/80D).",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Login to e-Filing Portal", description: "Visit incometax.gov.in and log in using PAN and password." },
    { step: 2, title: "Select ITR-3 Form", description: "Go to e-File > Income Tax Returns and select ITR-3." },
    { step: 3, title: "Enter Business Income", description: "Fill in P&L Account, Balance Sheet, and business income details." },
    { step: 4, title: "Report Capital Gains & Other Income", description: "Enter capital gains from stocks/F&O, salary, house property, and other sources." },
    { step: 5, title: "Claim Deductions", description: "Enter deductions under Chapter VI-A (80C, 80D, etc.) if using Old Regime." },
    { step: 6, title: "Pay Tax & Submit", description: "Compute total tax, pay any dues via challan, submit, and e-verify within 30 days." },
  ],
  fees: [
    { component: "Government Filing Fee", fees: "NIL", remarks: "Free on the e-filing portal." },
    { component: "Late Fee (Income > ₹5 Lakh)", fees: "₹5,000", remarks: "After August 31, 2026 for non-audit cases." },
    { component: "Late Fee (Income ≤ ₹5 Lakh)", fees: "₹1,000", remarks: "Reduced penalty under Section 234F." },
    { component: "Small Freelancers/Proprietors", fees: "₹3,000 – ₹6,000", remarks: "Professional CA fees for simple ITR-3." },
    { component: "F&O / Intraday Traders", fees: "₹5,000 – ₹12,000", remarks: "Complex turnover calculations increase fees." },
    { component: "Audit Cases", fees: "₹15,000 – ₹50,000+", remarks: "Mandatory tax audit for high turnover businesses." },
    { component: "Online Platforms (Assisted)", fees: "₹3,999 – ₹8,000", remarks: "Expert-assisted plans on ClearTax, Tax2Win etc." },
  ],
  faqs: [
    { q: "Who should file ITR-3?", a: "Individuals and HUFs with business or professional income, including sole proprietors, freelancers, F&O traders, intraday traders, and partners in firms." },
    { q: "Is ITR-3 mandatory for F&O trading?", a: "Yes. The Income Tax Department classifies F&O trading as non-speculative business income, which requires ITR-3." },
    { q: "What is the filing deadline for ITR-3?", a: "August 31, 2026 for non-audit cases. October 31, 2026 for cases requiring a tax audit." },
    { q: "Do I need a tax audit for ITR-3?", a: "Yes, if your business turnover exceeds ₹1 crore (or ₹10 crore if 95% of transactions are digital)." },
  ],
};
