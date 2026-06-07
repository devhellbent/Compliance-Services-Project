import { ServiceData } from "@/lib/types";

export const section8WindingUpData: ServiceData = {
  title: "Section 8 Winding Up",
  breadcrumb: ["Home", "MCA", "MCA Services", "Section 8 Winding Up"],
  description: "Specialized procedure for closing a non-profit company, requiring the surrender of the charitable license and transfer of surplus assets to similar NGOs.",
  overview: `**Section 8 Winding Up** is the legal process of closing a non-profit company (NGO).

Unlike regular companies, a Section 8 company cannot distribute its surplus assets to its members. Instead, any remaining assets must be transferred to another Section 8 company with similar charitable objectives or credited to the Insolvency and Bankruptcy Fund. The process involves surrendering the charitable license before the actual dissolution can occur.`,
  advantages: [
    { icon: "ShieldCheck", title: "Immunity from Disqualification", text: "Formal winding up ensures directors' DINs remain active and their reputations intact, preventing 'blacklisting' for future ventures." },
    { icon: "Zap", title: "Stop Progressive Penalties", text: "Inactive NGOs still incur a ₹100/day penalty for missing filings. Winding up stops this 'penalty clock' permanently." },
    { icon: "CheckCircle", title: "Legal Discharge", text: "Once the ROC issues the final dissolution order, directors are legally discharged from future claims or hidden liabilities of the NGO." },
    { icon: "Lock", title: "Asset Protection", text: "Allows promoters to close on their own terms, ensuring assets go to a similar NGO of their choice rather than being seized by the government." },
    { icon: "RefreshCw", title: "Avoiding Inquiry", text: "Proactively winding up prevents the ROC from initiating a 'Suo-Moto' strike-off, which often triggers intrusive financial inquiries." },
    { icon: "TrendingUp", title: "Orderly Exit", text: "Provides a structured pathway for promoters who no longer find it viable to run the NGO or have completed their charitable mission." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "Restrictive Asset Rule", text: "Members cannot take back their initial contribution or any surplus; all assets must stay within the charitable ecosystem." },
    { icon: "Clock", title: "Two-Stage Process", text: "Requires first converting the NGO into a regular company by surrendering the license, which adds time and complexity." },
  ],
  eligibility: [
    {
      title: "Prerequisites",
      items: [
        "**License Surrender:** Must apply to the Regional Director to revoke the Section 8 license.",
        "**Special Resolution:** Consent of at least 75% of the members is mandatory.",
        "**Statutory Cleanup:** Annual filings must be updated until the year of inactivity.",
      ],
    },
    {
      title: "Winding Up Modes",
      items: [
        "**Voluntary Closure:** Initiated by members after the NGO's mission is complete.",
        "**Compulsory Winding Up:** Ordered for breach of license conditions or fraud.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Conversion Stage",
      content: {
        title: "License Surrender (INC-18)",
        items: [
          "**Certified Special Resolution:** Showing 75% member approval for conversion.",
          "**Audited Financials:** Full sets for the last two years.",
          "**Valuation Report:** Determination of market value of all assets by a Registered Valuer.",
          "**NOCs:** From Income Tax, Creditors, and any Grant-giving authorities.",
        ],
      },
    },
    {
      tabTitle: "Final Closure",
      content: {
        title: "Strike-Off (STK-2)",
        items: [
          "**Form STK-8:** Nil asset and liability statement certified by a CA.",
          "**Indemnity Bond (STK-3):** Notarized bond signed by all directors.",
          "**Affidavit (STK-4):** Declaration that the company has no debts.",
          "**Bank Closure Certificate:** Proof from the bank that accounts are closed.",
        ],
      },
    },
    {
      tabTitle: "Public Notice",
      content: {
        title: "Statutory Ads",
        items: [
          "**Form INC-19 Proof:** Copy of the newspaper ads inviting public objections.",
          "**PAN & TAN Proof:** Documents for surrendering the NGO's tax identity.",
          "**KYC of Directors:** Self-attested PAN and Aadhaar copies.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "License Revocation", description: "Apply to the Regional Director (RD) via Form INC-18 to surrender the Section 8 license." },
    { step: 2, title: "Public Advertisement", description: "Publish notice in one English and one Vernacular newspaper inviting public objections." },
    { step: 3, title: "RD Approval", description: "The RD approves the conversion; the company removes 'Section 8' restrictions from its charter." },
    { step: 4, title: "Asset Transfer", description: "Transfer surplus assets to another NGO with similar objectives (subject to approval)." },
    { step: 5, title: "Form STK-2 Filing", description: "Once converted to 'Private Limited', file for strike-off on the C-PACE portal." },
    { step: 6, title: "Final Dissolution", description: "After the notice period, the ROC strikes off the name and the NGO ceases to exist." },
  ],
  fees: [
    { component: "Form STK-2 Filing Fee", fees: "₹10,000", remarks: "Standard government fee for closure." },
    { component: "Conversion / RD Fee", fees: "₹2,000 - ₹5,000", remarks: "For license surrender approval." },
    { component: "Professional Fee", fees: "₹15,000 - ₹25,000", remarks: "For drafting, RD coordination, and filing." },
    { component: "Newspaper Advertisement", fees: "₹2,000 - ₹5,000", remarks: "Mandatory public notice cost." },
    { component: "Registered Valuer Fee", fees: "₹10,000 - ₹20,000", remarks: "Required for asset valuation report." },
    { component: "Late Filing Penalties", fees: "₹100 / day", remarks: "For any missing Form AOC-4 or MGT-7." },
  ],
  faqs: [
    { q: "Can members take the remaining funds?", a: "No. Section 8 company profits and assets must be used for charitable purposes. Surplus must go to another similar NGO." },
    { q: "Do we need a new name?", a: "Yes. During conversion, the words 'Foundation', 'Association', or 'Council' might need to be replaced with 'Private Limited'." },
    { q: "How long does the conversion take?", a: "Obtaining Regional Director approval for license surrender usually takes 60 to 90 days." },
    { q: "What happens to government grants?", a: "Any unspent government grants must be either returned or transferred as directed by the granting authority." },
  ],
};
