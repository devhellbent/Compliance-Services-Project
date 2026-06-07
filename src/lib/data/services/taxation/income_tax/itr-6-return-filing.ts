import { ServiceData } from "@/lib/types";

export const itr6ReturnFilingData: ServiceData = {
  title: "ITR-6 Return Filing",
  breadcrumb: ["Home", "Taxation", "Income Tax", "ITR-6 Return Filing"],
  description:
    "ITR-6 is the mandatory income tax return form for all companies registered under the Companies Act, 2013 or 1956, including private limited, public limited, and one-person companies.",
  overview: `ITR-6 is the mandatory income tax return form for companies registered under the Companies Act, 2013 or 1956. This includes private limited, public limited, and one-person companies. It is specifically meant for entities not claiming exemptions under Section 11 (charitable or religious purposes), who instead must file ITR-7.

The form is purely electronic and requires verification via a Digital Signature Certificate (DSC). It demands extensive disclosures, including audited balance sheets, profit and loss statements, and Minimum Alternate Tax (MAT) computations, ensuring full transparency of corporate financial operations.

### Critical Features of ITR-6

- **Mandatory Digital Filing:** Must be filed electronically and verified using a DSC of the authorized signatory (usually a Director).
- **Audit Integration:** Data from Audited Balance Sheet and P&L must be manually entered into the form's schedules.
- **MAT Disclosure:** Companies must compute and report Minimum Alternate Tax (MAT) under Section 115JB.`,
  advantages: [
    { icon: "Percent", title: "Access to Concessional Tax Rates", text: "Section 115BAA: 22% base rate (effective ~25.17%). Section 115BAB: 15% for new manufacturing companies (effective ~17.16%). Requires filing Form 10-IC/10-ID before the ITR deadline." },
    { icon: "TrendingUp", title: "Unlimited Carry Forward of Losses", text: "Business losses carried forward 8 years. Unabsorbed depreciation carried forward indefinitely. Capital losses can be carried forward to offset future gains." },
    { icon: "Calculator", title: "Claiming MAT Credit", text: "If a company pays Minimum Alternate Tax because normal tax is lower than 15% of book profits, MAT credit can be carried forward up to 15 years." },
    { icon: "Divide", title: "Inter-Corporate Dividend Deduction", text: "Under Section 80M, domestic companies can claim deduction for dividends received from other companies to prevent triple taxation." },
    { icon: "Landmark", title: "Enhanced Financial Credibility", text: "Mandatory audited balance sheet serves as ultimate proof of financial health for raising capital, large corporate loans, and government tenders." },
  ],
  disadvantages: [
    { icon: "FileWarning", title: "Most Complex Tax Form", text: "Requires extensive schedules, audited financials, MAT computation, and transfer pricing disclosures." },
    { icon: "Wallet", title: "Highest Filing Costs", text: "Professional fees range from ₹5,000 for dormant companies to ₹1,50,000+ for transfer pricing cases." },
    { icon: "Key", title: "Mandatory DSC Verification", text: "Unlike individuals who can use Aadhaar OTP, companies must verify exclusively through a Digital Signature Certificate." },
  ],
  eligibility: [
    {
      title: "Eligible Entities",
      items: [
        "**Domestic Companies:** All private limited and public limited companies under Companies Act, 2013/1956.",
        "**One Person Companies (OPC):** Corporate entities that must file ITR-6.",
        "**Foreign Companies:** Body corporate incorporated outside India earning income from Indian sources.",
        "**Dormant Companies:** Still legally required to file until officially struck off from ROC records.",
      ],
    },
    {
      title: "The Section 11 Exclusion",
      items: [
        "ITR-6 is only for companies NOT claiming exemption under Section 11 (charitable/religious purposes).",
        "Section 8 (Non-Profit) companies claiming these exemptions must use ITR-7.",
      ],
    },
    {
      title: "Who Cannot File ITR-6?",
      items: [
        "**Individuals & HUFs:** Must use ITR-1 to ITR-4.",
        "**Partnership Firms & LLPs:** Must use ITR-5.",
        "**Charitable/Religious Trusts:** Must use ITR-7.",
        "**Political Parties:** Must use ITR-7.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Legal & Audit Documents",
      content: {
        title: "Mandatory Legal & Audit Documents",
        items: [
          "**Digital Signature Certificate (DSC):** Class 3 DSC required — EVC/Aadhaar OTP not accepted.",
          "**Audited Financial Statements:** Balance Sheet, P&L Account, and Notes to Accounts approved by the Board.",
          "**Statutory Audit Report:** Auditor's report under Companies Act.",
          "**Tax Audit Report (Form 3CD):** If turnover exceeds ₹1 crore (or ₹10 crore with <5% cash).",
          "**Form 3CEB:** For international or specified domestic transactions (Transfer Pricing).",
        ],
      },
    },
    {
      tabTitle: "Corporate & ID Data",
      content: {
        title: "Corporate & Identification Data",
        items: [
          "**Company PAN & CIN:** Permanent Account Number and Corporate Identity Number.",
          "**Director Details:** Name, PAN, and DIN of all directors.",
          "**Shareholding Pattern:** Details of shareholders holding 10%+ voting power (Schedule SH).",
          "**MSME Registration:** Udyam certificate number for MSME status disclosure.",
        ],
      },
    },
    {
      tabTitle: "Tax Reconciliation",
      content: {
        title: "Tax Reconciliation Statements",
        items: [
          "**AIS:** To verify dividends, interest, and high-value transactions.",
          "**Form 26AS:** Confirm TDS/TCS credits and advance tax payments.",
          "**GST Reconciliation:** GSTR-1 and GSTR-3B data must match ITR-6 turnover.",
        ],
      },
    },
    {
      tabTitle: "Special Tax Forms",
      content: {
        title: "Special Tax Regime Forms & Schedules",
        items: [
          "**Form 10-IC:** For 22% tax regime (Section 115BAA).",
          "**Form 10-ID:** For 15% tax regime for new manufacturers (Section 115BAB).",
          "**Form 10-IEA:** If opting for Old Tax Regime.",
          "**Depreciation Schedule:** Based on Income Tax Act rates.",
          "**MAT Computation:** Book profits under Section 115JB.",
          "**Capital Gains:** Split into before/after July 23, 2024 for rate changes.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Login with Company PAN", description: "Use the company's PAN credentials to log in at incometax.gov.in." },
    { step: 2, title: "Select ITR-6", description: "Navigate to e-File > Income Tax Returns and select ITR-6." },
    { step: 3, title: "Enter Audited Financials", description: "Fill in the complete Balance Sheet, P&L Account, and Notes to Accounts." },
    { step: 4, title: "Compute MAT & Tax Liability", description: "Calculate MAT under Section 115JB and compare with normal tax provisions." },
    { step: 5, title: "File Audit Reports", description: "Ensure Tax Audit Report (Form 3CD) and Transfer Pricing Report (3CEB) are filed." },
    { step: 6, title: "Submit & Verify via DSC", description: "Submit the return and verify exclusively through a Digital Signature Certificate." },
  ],
  fees: [
    { component: "Government Filing Fee", fees: "NIL", remarks: "Free on portal. Deadline: October 31, 2026." },
    { component: "Late Fee (Income ≤ ₹5 Lakh)", fees: "₹1,000", remarks: "Under Section 234F." },
    { component: "Late Fee (Income > ₹5 Lakh)", fees: "₹5,000", remarks: "Under Section 234F." },
    { component: "Dormant/Inactive Company", fees: "₹5,000 – ₹10,000", remarks: "For companies with zero transactions." },
    { component: "Active Private Limited", fees: "₹15,000 – ₹35,000", remarks: "Includes ITR-6 filing & standard audit." },
    { component: "Company with Tax Audit", fees: "₹35,000 – ₹75,000+", remarks: "Varies based on turnover & complexity." },
    { component: "Transfer Pricing Case", fees: "₹75,000 – ₹1,50,000+", remarks: "Requires Form 3CEB for international deals." },
    { component: "DSC (2-year validity)", fees: "₹1,500 – ₹2,500", remarks: "Class 3 DSC required for verification." },
  ],
  faqs: [
    { q: "Who must file ITR-6?", a: "All companies registered under the Companies Act — private limited, public limited, OPC, and foreign companies earning income in India." },
    { q: "Can ITR-6 be verified via Aadhaar OTP?", a: "No. Companies must exclusively use a Digital Signature Certificate (DSC) for verification." },
    { q: "What is the filing deadline for ITR-6?", a: "October 31, 2026 for AY 2026-27 (since all companies require statutory audit)." },
    { q: "What is MAT in ITR-6?", a: "Minimum Alternate Tax — if a company's normal tax is below 15% of book profits, it must pay MAT on book profits. The excess MAT paid can be carried forward as credit for 15 years." },
  ],
};
