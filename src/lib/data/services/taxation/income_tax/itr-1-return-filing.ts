import { ServiceData } from "@/lib/types";

export const itr1ReturnFilingData: ServiceData = {
  title: "ITR-1 Return Filing",
  breadcrumb: ["Home", "Taxation", "Income Tax", "ITR-1 Return Filing"],
  description:
    "ITR-1 (Sahaj) is a simplified income tax return form for resident individuals in India with total annual income up to ₹50 lakh from salary, pension, one house property, or interest.",
  overview: `ITR-1, or Sahaj, is a simplified income tax return form for resident individuals in India. It applies to those with a total annual income up to ₹50 lakh, primarily earned from salary, pension, one house property, or interest. For AY 2026-27, it also allows long-term capital gains from equity up to ₹1.25 lakh.

The filing is done online through the e-filing portal, where most data is pre-filled from your AIS and Form 16. While the New Tax Regime is the default, you can still opt for the Old Regime to claim deductions. The standard deadline for filing is July 31.

## Who Can File ITR-1?

You are eligible to file ITR-1 if you meet all the following conditions:

**Residential Status:** You must be a Resident (Ordinary Resident). Non-residents (NRIs) or RNORs cannot use this form.

**Income Limit:** Your total income for the financial year does not exceed ₹50 Lakh.

**Income Sources:**
- Salary or Pension.
- One House Property (income or loss from a single house).
- Other Sources: Interest from savings accounts, FDs, or family pension.
- Long-term capital gains (LTCG) from listed equity shares or mutual funds (u/s 112A) up to ₹1.25 Lakh.
- Agricultural income up to ₹5,000.`,
  advantages: [
    {
      icon: "Zap",
      title: "Pre-filled Data & Speed",
      text: "For AY 2026-27, most of your salary, interest income, and TDS details are automatically pre-filled from your Annual Information Statement (AIS), reducing manual entry and errors.",
    },
    {
      icon: "Receipt",
      title: "Instant Confirmation & Faster Refunds",
      text: "You receive an immediate acknowledgment (ITR-V) via email. Online returns are processed significantly faster, with refunds often credited within a few weeks of e-verification.",
    },
    {
      icon: "Landmark",
      title: "Easy Loan & Visa Approvals",
      text: "Banks typically mandate the last 3 years of ITRs to verify repayment capacity. Embassies (especially US, UK, and Schengen) scrutinize ITRs for financial stability.",
    },
    {
      icon: "TrendingUp",
      title: "Carry Forward of Losses",
      text: "Filing by the July 31, 2026 deadline allows you to carry forward losses (like a house property loss) to offset against future income, lowering your future tax bills.",
    },
    {
      icon: "BadgeDollarSign",
      title: "Claiming TDS Refunds",
      text: "If your bank or employer deducted more tax than you actually owe, the only way to get that money back is by filing your return.",
    },
    {
      icon: "ShieldCheck",
      title: "Legal Peace of Mind",
      text: "Regular filing builds a transparent financial track record, reducing chances of receiving 'unexplained income' notices from the tax department.",
    },
  ],
  disadvantages: [
    {
      icon: "Ban",
      title: "Restricted to Simple Profiles",
      text: "Cannot be used by NRIs, company directors, holders of unlisted shares, or anyone with foreign assets or business income.",
    },
    {
      icon: "Home",
      title: "Single House Property Only",
      text: "If you own more than one house property, you must use ITR-2 instead, even if your total income is below ₹50 lakh.",
    },
    {
      icon: "TrendingDown",
      title: "Limited Capital Gains Reporting",
      text: "Only allows LTCG from listed equity/mutual funds up to ₹1.25 lakh. Any other capital gains require ITR-2.",
    },
    {
      icon: "AlertTriangle",
      title: "No Loss Carry Forward from Prior Years",
      text: "If you have brought forward or carry-forward losses from previous years, you cannot use ITR-1.",
    },
  ],
  eligibility: [
    {
      title: "Core Eligibility Criteria",
      items: [
        "**Residential Status:** Must be a Resident and Ordinarily Resident (ROR). NRIs and RNOR individuals are not eligible.",
        "**Income Limit:** Total income for the financial year must not exceed ₹50 Lakh.",
        "**Salary or Pension:** Income from employment or retirement.",
        "**One House Property:** Income or loss from a single house.",
        "**Other Sources:** Interest from savings/FDs, family pension, or dividends.",
        "**Agricultural Income:** Up to ₹5,000.",
        "**Specific Capital Gains:** Long-term capital gains from listed equity/mutual funds (u/s 112A) up to ₹1.25 Lakh.",
      ],
    },
    {
      title: "Who is Ineligible for ITR-1?",
      items: [
        "Have Business or Professional income (use ITR-3 or ITR-4).",
        "Own more than one house property.",
        "Are a Director in any company or hold unlisted equity shares.",
        "Have Foreign Assets or income from any source outside India.",
        "Have brought forward or carry-forward losses.",
        "Have taxable Capital Gains (except the specific ₹1.25 Lakh equity gain).",
        "Have had tax deducted under Section 194N (cash withdrawal exceeding limits).",
      ],
    },
    {
      title: "Key 2026 Deadlines & Updates",
      items: [
        "**Original Filing Deadline:** July 31, 2026.",
        "**Revised Return Deadline:** Until March 31, 2027 (extended from Dec 31st) by paying a nominal fee.",
        "**Default Regime:** New Tax Regime remains the default. Income up to ₹12.75 Lakh (including ₹75,000 standard deduction) is effectively tax-free for salaried residents.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Identity & Verification",
      content: {
        title: "Mandatory Identity & Verification Documents",
        items: [
          "**PAN Card:** Your Permanent Account Number is your primary identifier.",
          "**Aadhaar Card:** Mandatory for filing; ensure it is linked to your PAN.",
          "**Bank Account Details:** IFSC code and Account Number for all active bank accounts. One account must be validated for receiving your tax refund.",
        ],
      },
    },
    {
      tabTitle: "Income Documents",
      content: {
        title: "Income-Related Documents",
        items: [
          "**Form 16:** Issued by your employer. Provides a breakup of your salary and the tax (TDS) deducted.",
          "**Form 16A:** If you have earned interest income from bank FDs or other sources where TDS was deducted.",
          "**Interest Certificates:** From banks or post offices for savings accounts and recurring deposits.",
          "**Pension Certificate/Form 16:** If you are a retiree, issued by your bank or former employer.",
        ],
      },
    },
    {
      tabTitle: "Tax Statements",
      content: {
        title: "Tax Information Statements",
        items: [
          "**AIS (Annual Information Statement):** Contains all financial transactions like dividends, high-value purchases, and interest.",
          "**TIS (Taxpayer Information Summary):** Simplified version of the AIS providing the 'taxable' value of various incomes.",
          "**Form 26AS:** Consolidated tax credit statement showing all TDS/TCS deposited against your PAN.",
        ],
      },
    },
    {
      tabTitle: "Deduction Proofs (Old Regime)",
      content: {
        title: "Deduction Proofs (If using the Old Tax Regime)",
        items: [
          "**Section 80C Proofs:** Receipts for LIC, PPF, ELSS mutual funds, children's tuition fees, and home loan principal.",
          "**Section 80D Proofs:** Health insurance premium receipts for self and parents.",
          "**Home Loan Interest Certificate:** Provided by the bank to claim a deduction for the interest paid on a home loan.",
          "**House Rent Receipts:** If you are claiming HRA exemption.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Login to e-Filing Portal", description: "Visit incometax.gov.in and log in using your PAN and password." },
    { step: 2, title: "Select ITR-1 Form", description: "Go to e-File > Income Tax Returns > File Income Tax Return and select ITR-1 (Sahaj)." },
    { step: 3, title: "Verify Pre-filled Data", description: "Review the pre-filled salary, TDS, and interest details from your AIS and Form 16." },
    { step: 4, title: "Enter Income Details", description: "Fill in house property income, other sources, and deductions if using Old Regime." },
    { step: 5, title: "Pay Tax Due (if any)", description: "If there is any remaining tax liability, pay via the portal before submitting." },
    { step: 6, title: "Submit & e-Verify", description: "Submit the return and e-verify using Aadhaar OTP, net banking, or DSC within 30 days." },
  ],
  fees: [
    { component: "Government Filing Fee", fees: "NIL", remarks: "Filing on the e-filing portal is completely free if done before the deadline." },
    { component: "Late Fee (Income ≤ ₹5 Lakh)", fees: "₹1,000", remarks: "Under Section 234F for returns filed after July 31." },
    { component: "Late Fee (Income > ₹5 Lakh)", fees: "₹5,000", remarks: "Under Section 234F for returns filed after July 31." },
    { component: "Professional Fee (Salary only)", fees: "₹500 – ₹1,500", remarks: "Basic ITR-1 filing by a CA or tax expert." },
    { component: "Professional Fee (Complex)", fees: "₹1,500 – ₹3,000", remarks: "ITR-1 with Salary + House Property + Dividends." },
    { component: "Online Platform (Assisted)", fees: "₹999 – ₹2,499", remarks: "Expert-assisted filing through fintech platforms." },
  ],
  faqs: [
    { q: "What is ITR-1 (Sahaj)?", a: "ITR-1 is a simplified income tax return form for resident individuals in India with a total annual income up to ₹50 lakh from salary, pension, one house property, or interest income." },
    { q: "Can NRIs file ITR-1?", a: "No. ITR-1 is strictly for Resident and Ordinarily Resident (ROR) individuals. NRIs and RNORs must use ITR-2." },
    { q: "What is the deadline for ITR-1 filing?", a: "The standard deadline is July 31, 2026 for AY 2026-27. Late filing attracts a penalty under Section 234F." },
    { q: "Is there any fee to file ITR-1 on the portal?", a: "No. The government's e-filing portal is completely free. Fees only apply if you hire a professional or miss the deadline." },
    { q: "What happens if I file after the deadline?", a: "You will pay a late fee of ₹1,000 (income ≤ ₹5L) or ₹5,000 (income > ₹5L) and lose the ability to carry forward certain losses." },
  ],
};
