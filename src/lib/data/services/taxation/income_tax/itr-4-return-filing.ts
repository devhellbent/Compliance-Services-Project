import { ServiceData } from "@/lib/types";

export const itr4ReturnFilingData: ServiceData = {
  title: "ITR-4 Return Filing",
  breadcrumb: ["Home", "Taxation", "Income Tax", "ITR-4 Return Filing"],
  description:
    "ITR-4 (Sugam) is a simplified return form for resident individuals, HUFs, and partnership firms (excluding LLPs) with total income up to ₹50 lakh who opt for the presumptive taxation scheme.",
  overview: `ITR-4, also known as Sugam, is a simplified return form for resident individuals, HUFs, and partnership firms (excluding LLPs) with a total income up to ₹50 lakh. It is specifically designed for small taxpayers who opt for the presumptive taxation scheme under Sections 44AD, 44ADA, or 44AE. This allows you to declare profits at a fixed percentage of your turnover, eliminating the legal requirement to maintain exhaustive books of accounts or undergo a tax audit.

The form also covers income from salary, one house property, and other sources like interest. For AY 2026-27, taxpayers can now report long-term capital gains (LTCG) up to ₹1.25 lakh within this form. However, it cannot be used by company directors, those holding unlisted shares, or individuals with foreign assets. For non-audit cases, the filing deadline has been extended to August 31, 2026.`,
  advantages: [
    { icon: "BookOpen", title: "No Need to Maintain Detailed Books", text: "Biggest advantage — exemption from maintaining voluminous books of account. Businesses (Sec 44AD) declare 8% of turnover as profit (6% digital), Professionals (Sec 44ADA) declare 50% of gross receipts." },
    { icon: "ShieldCheck", title: "Exemption from Tax Audits", text: "As long as you declare income at or above the prescribed presumptive rates, you are not required to get accounts audited by a CA, saving significant time, effort, and fees." },
    { icon: "Zap", title: "Simplified and Faster Filing", text: "Much shorter and less complex form compared to ITR-3. Requires minimal data entry regarding business operations, making filing significantly faster." },
    { icon: "Calendar", title: "Advance Tax Relief", text: "Those opting for presumptive scheme (44AD/44ADA) only need to pay the entire advance tax in one installment by March 15th, instead of four quarterly installments." },
    { icon: "Landmark", title: "Financial Credibility", text: "Filing ITR-4 serves as formal proof of income, beneficial for business/personal loans, visa applications, and establishing creditworthiness." },
  ],
  disadvantages: [
    { icon: "Calculator", title: "Fixed Profit Percentage", text: "Cannot declare profits below the prescribed percentage (8%/6%/50%) without switching to ITR-3 and maintaining full books of accounts." },
    { icon: "Ban", title: "Income Cap of ₹50 Lakh", text: "Total income must not exceed ₹50 lakh. Businesses exceeding this threshold must file ITR-3 or ITR-5." },
    { icon: "Home", title: "Single House Property Only", text: "Cannot report income from more than one house property. Multiple property owners must use ITR-2 or ITR-3." },
    { icon: "Globe", title: "No Foreign Assets Allowed", text: "Cannot be used by anyone with foreign income or foreign assets, NRIs, or company directors." },
  ],
  eligibility: [
    {
      title: "Eligible Taxpayer Categories",
      items: [
        "Resident Individuals.",
        "Hindu Undivided Families (HUFs).",
        "Partnership Firms (Note: LLPs are strictly excluded and must file ITR-5).",
      ],
    },
    {
      title: "Income Sources & Limits (Total income ≤ ₹50 Lakh)",
      items: [
        "**Business Income:** Computed under Presumptive Taxation (Section 44AD or 44AE).",
        "**Professional Income:** Computed under Presumptive Taxation (Section 44ADA).",
        "**Salary/Pension:** Income from regular job or retirement.",
        "**One House Property:** Income from a single house (cannot carry forward losses).",
        "**Other Sources:** Interest from savings, FDs, or family pension.",
        "**Agricultural Income:** Up to ₹5,000 only.",
        "**Capital Gains:** Only LTCG under Section 112A up to ₹1.25 lakh.",
      ],
    },
    {
      title: "Who is NOT Eligible?",
      items: [
        "Non-Resident (NRI) or Resident but Not Ordinarily Resident (RNOR).",
        "Director in any company.",
        "Hold unlisted equity shares at any time during the year.",
        "Have deferred income tax on ESOPs from a startup.",
        "Have income from more than one house property.",
        "Have any foreign income or own foreign assets.",
        "Tax deducted under Section 194N (cash withdrawal).",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Identity Documents",
      content: {
        title: "Essential Identity Documents",
        items: [
          "**PAN Card:** Must be linked with your Aadhaar.",
          "**Aadhaar Card:** Only the 12-digit Aadhaar number is accepted (28-digit Enrolment ID discontinued).",
        ],
      },
    },
    {
      tabTitle: "Income & Business Records",
      content: {
        title: "Income & Business Records",
        items: [
          "**Bank Statements:** For all active savings and current accounts held during the year.",
          "**Sales/Gross Receipts Summary:** Total turnover, bifurcated into Digital Receipts (UPI, NEFT, Cheque) and Cash Receipts.",
          "**GST Returns (if applicable):** Turnover in ITR-4 must match GSTR-3B/GSTR-1.",
          "**Form 16:** If you have salary/pension income.",
          "**Form 16A:** Certificates for TDS deducted by clients or banks.",
        ],
      },
    },
    {
      tabTitle: "Tax Statements",
      content: {
        title: "Tax Reference Statements",
        items: [
          "**AIS & TIS:** Contains all financial transactions like high-value purchases, dividends, and interest income.",
          "**Form 26AS:** To verify total TDS/TCS deposited against your PAN and advance tax paid.",
        ],
      },
    },
    {
      tabTitle: "Deduction Proofs (Old Regime)",
      content: {
        title: "Deduction & Investment Proofs",
        items: [
          "**Section 80C Proofs:** LIC premium receipts, PPF passbook, ELSS statements, school tuition fees.",
          "**Section 80D:** Health insurance premium receipts and preventive health check-up bills.",
          "**Home Loan Interest Certificate:** Bank-issued principal and interest breakup.",
          "**Rent Receipts:** If claiming HRA (landlord's PAN required if rent exceeds ₹1 lakh).",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Login to e-Filing Portal", description: "Visit incometax.gov.in and log in using PAN and password." },
    { step: 2, title: "Select ITR-4 (Sugam)", description: "Navigate to e-File > Income Tax Returns and select ITR-4." },
    { step: 3, title: "Choose Presumptive Scheme", description: "Select Section 44AD (business), 44ADA (professionals), or 44AE (transporters)." },
    { step: 4, title: "Enter Turnover & Profit", description: "Enter total turnover/receipts. Declare profit at prescribed rates (8%/6%/50%)." },
    { step: 5, title: "Add Other Income & Deductions", description: "Enter salary, house property, interest income, and claim deductions if applicable." },
    { step: 6, title: "Pay Tax & Submit", description: "Compute tax, pay any dues, submit the return, and e-verify via Aadhaar OTP or net banking." },
  ],
  fees: [
    { component: "Government Filing Fee", fees: "NIL", remarks: "Free on the e-filing portal." },
    { component: "Late Fee (Income ≤ ₹5 Lakh)", fees: "₹1,000", remarks: "Under Section 234F after August 31, 2026." },
    { component: "Late Fee (Income > ₹5 Lakh)", fees: "₹5,000", remarks: "Under Section 234F after August 31, 2026." },
    { component: "Small Businesses/Freelancers", fees: "₹2,500 – ₹6,000", remarks: "Professional CA fees." },
    { component: "Partnership Firms", fees: "₹5,000 – ₹10,000", remarks: "More detailed disclosures required." },
    { component: "Online Platforms (Basic)", fees: "₹1,000 – ₹2,500", remarks: "Expert-assisted filing on fintech platforms." },
  ],
  faqs: [
    { q: "What is the Presumptive Taxation Scheme?", a: "It allows small businesses (44AD) to declare 8% (6% digital) of turnover as profit, professionals (44ADA) to declare 50% of receipts, without maintaining detailed books of accounts." },
    { q: "Can LLPs file ITR-4?", a: "No. LLPs are strictly excluded from ITR-4 and must file ITR-5." },
    { q: "What if my actual profit is lower than the presumptive rate?", a: "You can declare lower profits, but then you must maintain full books of accounts, get them audited, and file ITR-3 instead." },
    { q: "What is the deadline for ITR-4?", a: "August 31, 2026 for AY 2026-27 (extended from July 31 for non-audit cases)." },
  ],
};
