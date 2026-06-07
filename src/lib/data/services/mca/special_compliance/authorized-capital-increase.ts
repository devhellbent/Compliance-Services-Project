import { ServiceData } from "@/lib/types";

export const authorizedCapitalIncreaseData: ServiceData = {
  title: "Authorized Capital Increase",
  breadcrumb: ["Home", "MCA", "Special Compliance Services", "Authorized Capital Increase"],
  description: "Strategic expansion of a company's legal share issuance limit to facilitate new investment, bonus issues, or acquisitions.",
  overview: `**Authorized Capital** (or Nominal Capital) is the maximum amount of share capital that a company is legally authorized to issue, as stated in its Memorandum of Association (MoA).

Increasing this limit is a vital step for any company planning to raise funds, issue ESOPs, or convert debt into equity. Since a company cannot issue shares beyond this ceiling, raising the authorized capital acts as the "green light" for future growth and investment.`,
  advantages: [
    { icon: "Zap", title: "Facilitates Fundraising", text: "Mandatory prerequisite for bringing in Venture Capital, Private Equity, or Angel investors by creating room for new share issuance." },
    { icon: "Award", title: "Enables Bonus & ESOPs", text: "Allows the company to reward employees (ESOPs) or existing shareholders (Bonus Shares) without hitting legal issuance limits." },
    { icon: "TrendingUp", title: "Boosts Borrowing Power", text: "A higher authorized capital signals financial stability and 'large-scale' vision to banks, often leading to better loan terms." },
    { icon: "BarChart", title: "Supports M&A Activity", text: "Provides the 'share currency' needed to acquire other companies via share-swap deals instead of cash payments." },
    { icon: "ShieldCheck", title: "Financial Credibility", text: "Increases the company's 'Net Worth' potential, improving its professional standing with vendors and global partners." },
    { icon: "RefreshCw", title: "Debt-to-Equity Swaps", text: "Enables the company to negotiate with lenders by offering equity stakes in exchange for debt relief." },
  ],
  disadvantages: [
    { icon: "CreditCard", title: "Significant ROC Fees", text: "The government charges fees based on the amount of increase; large capital hikes can cost lakhs in filing fees." },
    { icon: "FileWarning", title: "State Stamp Duty", text: "Additional stamp duty is payable to the state government, varying significantly based on the registered office location." },
    { icon: "Search", title: "Threshold-Based Audits", text: "In LLPs, crossing a ₹25 Lakhs capital threshold triggers a mandatory annual audit requirement." },
  ],
  eligibility: [
    {
      title: "Prerequisite Conditions",
      items: [
        "**AOA Authority:** The Articles of Association (AOA) must contain a clause authorizing the company to increase its capital.",
        "**Shareholder Approval:** Must be approved by members via an Ordinary Resolution (75% for special cases).",
      ],
    },
    {
      title: "Applicable Entities",
      items: [
        "Private Limited Companies.",
        "Public Limited Companies.",
        "Limited Liability Partnerships (LLP - referred to as 'Total Contribution').",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Resolutions",
      content: {
        title: "Required Authorizations",
        items: [
          "**Ordinary Resolution:** Signed copy of the resolution passed at the EGM.",
          "**Notice of EGM:** Including the Explanatory Statement justifying the increase.",
          "**Board Resolution:** Internal approval to propose the increase to shareholders.",
        ],
      },
    },
    {
      tabTitle: "Altered Charter",
      content: {
        title: "Updated Constitutional Documents",
        items: [
          "**Altered MOA:** Specifically updating the 'Capital Clause' (Clause V).",
          "**Altered AOA:** Only if the power to increase was not previously present.",
          "**Supplementary Deed:** For LLPs (detailing increased contribution).",
        ],
      },
    },
    {
      tabTitle: "Identifiers",
      content: {
        title: "Digital & Identity Proof",
        items: [
          "**DSC:** Class 3 Digital Signature of an authorized Director.",
          "**DIN:** Valid and approved Director Identification Number.",
          "**PAN:** Of the company for portal verification.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "AOA Review", description: "Check if AOA allows the increase; if not, amend AOA first." },
    { step: 2, title: "Board Approval", description: "Hold a board meeting to approve the increase and call an EGM." },
    { step: 3, title: "EGM Conduct", description: "Pass an Ordinary Resolution at the General Meeting to approve the capital hike." },
    { step: 4, title: "Alter Documents", description: "Update the Capital Clause in the Memorandum of Association (MOA)." },
    { step: 5, title: "Filing SH-7", description: "File Form SH-7 on the MCA portal within 30 days of the resolution." },
    { step: 6, title: "Fee Payment", description: "Pay the calculated ROC filing fees and state-specific stamp duty to finalize the record." },
  ],
  fees: [
    { component: "ROC Fee (Increase up to ₹1L)", fees: "₹5,000", remarks: "Base fee for small companies." },
    { component: "ROC Fee (Increase > ₹1Cr)", fees: "₹2,06,000 + variable", remarks: "Significantly higher for large increases." },
    { component: "Stamp Duty (Delhi/UP)", fees: "0.15% of increase", remarks: "Capped at ₹25 Lakhs." },
    { component: "Stamp Duty (Maharashtra)", fees: "~0.2% of increase", remarks: "Capped at ₹50 Lakhs." },
    { component: "Late Filing Penalty", fees: "2x - 12x Normal Fee", remarks: "Escalates based on duration of delay." },
  ],
  faqs: [
    { q: "Is 'Authorized Capital' the same as 'Paid-up Capital'?", a: "No. Authorized capital is the maximum limit you *can* issue. Paid-up capital is the money you have *actually received* from shareholders." },
    { q: "Can I increase authorized capital without an EGM?", a: "No, increasing the capital limit requires the approval of shareholders via an Ordinary Resolution in a General Meeting." },
    { q: "What is the time limit for filing SH-7?", a: "It must be filed within 30 days from the date the resolution was passed at the EGM." },
    { q: "Do I need a professional to certify the increase?", a: "Yes, for most companies, Form SH-7 requires certification by a practicing Chartered Accountant (CA) or Company Secretary (CS)." },
  ],
};
