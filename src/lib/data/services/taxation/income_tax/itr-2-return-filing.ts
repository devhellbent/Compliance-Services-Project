import { ServiceData } from "@/lib/types";

export const itr2ReturnFilingData: ServiceData = {
  title: "ITR-2 Return Filing",
  breadcrumb: ["Home", "Taxation", "Income Tax", "ITR-2 Return Filing"],
  description:
    "ITR-2 is a detailed income tax return form for individuals and HUFs who earn more than ₹50 lakh or have complex financial profiles including capital gains, foreign assets, or multiple house properties.",
  overview: `ITR-2 is a detailed income tax return form for individuals and HUFs who earn more than ₹50 lakh or have complex financial profiles. It is primarily used by those with income from salaries, multiple house properties, and capital gains from stocks or real estate. It is also mandatory for NRIs, company directors, and individuals holding foreign assets or unlisted equity shares.

Crucially, ITR-2 is only for those without business or professional income. If you earn profits from a trade, freelancing, or a partnership firm, you must use ITR-3 or ITR-4 instead. Filing this form requires reporting detailed schedules for investments and taxes paid, typically by the July 31st annual deadline to avoid penalties.`,
  advantages: [
    { icon: "TrendingUp", title: "Carry Forward of Capital Losses", text: "If you sold stocks, mutual funds, or real estate at a loss, ITR-2 allows you to set off losses against gains in the same year and carry forward for 8 consecutive years to reduce future tax liability." },
    { icon: "Globe", title: "Global Compliance & Asset Safety", text: "ITR-2 is the mandatory form for reporting Foreign Assets (Schedule FA). Disclosing these avoids massive penalties (up to ₹10 lakh) under the Black Money Act and allows claiming DTAA benefits." },
    { icon: "Landmark", title: "Stronger Financial Credibility", text: "Banks view ITR-2 as a detailed 'financial health certificate' when applying for large home or commercial loans. Embassies prefer detailed tax filings for visa approvals." },
    { icon: "PieChart", title: "Accurate Wealth Tracking (Schedule AL)", text: "If income exceeds ₹50 lakh, ITR-2 requires listing Assets and Liabilities, creating a transparent government record that protects during future scrutiny." },
  ],
  disadvantages: [
    { icon: "FileWarning", title: "Complex Filing Process", text: "ITR-2 requires detailed schedules for capital gains, foreign assets, and multiple properties, making it significantly more complex than ITR-1." },
    { icon: "Wallet", title: "Higher Professional Fees", text: "Due to its complexity, CAs charge ₹3,000 to ₹15,000+ for ITR-2 filing compared to ₹500–₹1,500 for ITR-1." },
    { icon: "Ban", title: "No Business Income Allowed", text: "If you have any business or professional income, you cannot use ITR-2 and must file ITR-3 instead." },
  ],
  eligibility: [
    {
      title: "Who is Eligible? (Must meet any of these)",
      items: [
        "**High Earners:** Total income exceeds ₹50 lakh.",
        "**Investors (Capital Gains):** Earned income from selling stocks, mutual funds, gold, or real estate.",
        "**Property Owners:** Own and earn income from more than one house property.",
        "**Foreign Assets/Income:** Hold foreign bank accounts, foreign shares, or earn income from outside India.",
        "**Corporate Roles:** Director of a company or hold unlisted equity shares.",
        "**NRI/RNOR:** Non-Resident or Resident Not Ordinarily Resident.",
        "**Virtual Assets:** Have income from Crypto or other Virtual Digital Assets (VDA).",
        "**Agricultural Income:** Income from agriculture exceeds ₹5,000.",
      ],
    },
    {
      title: "Who is NOT Eligible?",
      items: [
        "Have any income from 'Profits and Gains from Business or Profession' (freelancers, consultants, traders).",
        "Are a partner in a partnership firm earning salary, bonus, or commission.",
        "Are eligible to file ITR-1 and your profile is simple enough (though you can choose ITR-2 voluntarily).",
      ],
    },
    {
      title: "Special Mandatory Conditions",
      items: [
        "Deposited more than ₹1 crore in one or more current bank accounts.",
        "Spent more than ₹2 lakh on foreign travel for yourself or anyone else.",
        "Paid an electricity bill of more than ₹1 lakh during the year.",
        "Have total TDS/TCS of ₹25,000 or more (₹50,000 for senior citizens).",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Tax & Income Summaries",
      content: {
        title: "Essential Tax & Income Summaries",
        items: [
          "**AIS & TIS:** Contains all financial transactions including dividends, stock sales, and interest.",
          "**Form 26AS:** Consolidated tax passbook showing TDS deducted by employers, banks, or buyers.",
          "**Form 16 (Part A & B):** Employer-issued salary breakup and tax deducted at source.",
        ],
      },
    },
    {
      tabTitle: "Investment & Capital Gains",
      content: {
        title: "Investment & Capital Gains Documents",
        items: [
          "**Capital Gains Statement:** Download from broker (Zerodha, Groww) or CAMS/KFintech for stocks and mutual funds.",
          "**Property Sale Deed:** Sale and purchase price, stamp duty details, and buyer's PAN/Aadhaar for real estate.",
          "**Contract Notes/VDA Statements:** For Crypto or other Virtual Digital Asset trades.",
        ],
      },
    },
    {
      tabTitle: "House Property",
      content: {
        title: "House Property Documents",
        items: [
          "**Rent Receipts/Agreement:** To calculate Gross Rent Received.",
          "**Home Loan Interest Certificate:** Issued by bank to claim deduction under Section 24.",
          "**Property Tax Receipts:** To claim deduction for municipal taxes paid.",
        ],
      },
    },
    {
      tabTitle: "Foreign Assets & Other",
      content: {
        title: "Foreign Assets & Other Documents",
        items: [
          "**Foreign Bank Statements:** To report peak balances (Schedule FA).",
          "**RSU/ESOP Documents:** Details of shares held in foreign companies.",
          "**Tax Residency Certificate (TRC):** If claiming DTAA benefits.",
          "**Bank Account Details:** Account numbers and IFSC codes for all Indian bank accounts.",
          "**Unlisted Equity Shares:** Details of shares held in unlisted companies.",
          "**Directorship Details:** Company's name, PAN, and your DIN if Director.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Login to e-Filing Portal", description: "Visit incometax.gov.in and log in using PAN and password." },
    { step: 2, title: "Select ITR-2 Form", description: "Go to e-File > Income Tax Returns and select ITR-2." },
    { step: 3, title: "Verify Pre-filled Data", description: "Review salary, TDS, capital gains, and other pre-filled details." },
    { step: 4, title: "Fill Capital Gains & Schedules", description: "Enter capital gains details, foreign asset declarations (Schedule FA), and multiple house property income." },
    { step: 5, title: "Compute & Pay Tax", description: "Compute total tax liability and pay any remaining dues via challan." },
    { step: 6, title: "Submit & e-Verify", description: "Submit the return and e-verify via Aadhaar OTP, net banking, or DSC." },
  ],
  fees: [
    { component: "Government Filing Fee", fees: "NIL", remarks: "Free on the e-filing portal if filed before the deadline." },
    { component: "Late Fee (Income > ₹5 Lakh)", fees: "₹5,000", remarks: "Mandatory penalty under Section 234F after July 31." },
    { component: "Late Fee (Income ≤ ₹5 Lakh)", fees: "₹1,000", remarks: "Reduced penalty under Section 234F." },
    { component: "Basic ITR-2 (Salary + 1 House)", fees: "₹1,500 – ₹3,000", remarks: "Professional fees for simple ITR-2 profiles." },
    { component: "ITR-2 with Capital Gains", fees: "₹3,000 – ₹7,500", remarks: "Increases with number of stock/MF transactions." },
    { component: "ITR-2 with Foreign Assets/NRIs", fees: "₹7,000 – ₹15,000+", remarks: "High compliance risk under the Black Money Act." },
  ],
  faqs: [
    { q: "Who should file ITR-2?", a: "Individuals and HUFs with income above ₹50 lakh, capital gains, multiple house properties, foreign assets, or NRI status, but without business/professional income." },
    { q: "Can I file ITR-2 if I have business income?", a: "No. Business or professional income requires ITR-3 or ITR-4." },
    { q: "What is Schedule FA in ITR-2?", a: "Schedule FA is for declaring Foreign Assets — foreign bank accounts, shares, property, or any financial interest held outside India." },
    { q: "What happens if I don't report foreign assets?", a: "Non-disclosure can attract penalties up to ₹10 lakh under the Black Money (Undisclosed Foreign Income and Assets) Act." },
  ],
};
