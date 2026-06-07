import { ServiceData } from "@/lib/types";

export const privateLimitedWindingUpData: ServiceData = {
  title: "Private Limited Winding Up",
  breadcrumb: ["Home", "MCA", "MCA Services", "Private Limited Winding Up"],
  description: "Formal legal process for dissolving a private company by liquidating its assets to settle outstanding debts and liabilities.",
  overview: `**Private Limited Winding Up** is the formal legal process of closing a company by liquidating its assets to settle outstanding debts.

Governed by the Companies Act, 2013 and the Insolvency and Bankruptcy Code, 2016, it ensures an orderly exit for shareholders and fair treatment for creditors. Once complete, the company’s name is removed from the Register of Companies, and its legal existence officially ends, protecting directors from future non-compliance penalties.`,
  advantages: [
    { icon: "ShieldCheck", title: "Release from Liabilities", text: "Once liquidation is complete, directors and shareholders are generally relieved of the company’s future debts and legal claims." },
    { icon: "Zap", title: "Stop Penalty Accumulation", text: "Stops the massive ₹200/day penalty for non-filing of AOC-4 and MGT-7, which can otherwise run into lakhs for inactive companies." },
    { icon: "CheckCircle", title: "Orderly Distribution", text: "Provides a transparent framework (Waterfall Mechanism) to sell assets and pay off stakeholders fairly, from workmen to shareholders." },
    { icon: "Lock", title: "Legal Immunity", text: "Proactively choosing voluntary liquidation prevents creditors from filing hostile lawsuits or the government initiating criminal proceedings." },
    { icon: "DollarSign", title: "Cost Savings", text: "Puts a permanent end to recurring costs like annual audits, registered office maintenance, and professional compliance charges." },
    { icon: "TrendingUp", title: "Clean Corporate Record", text: "Ensures directors aren't disqualified or 'blacklisted', allowing them to remain eligible for directorships in new ventures." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "Director Scrutiny", text: "The liquidator may investigate past transactions; evidence of fraud or 'wrongful trading' can lead to personal liability." },
    { icon: "Clock", title: "Complex Procedure", text: "The formal liquidation process can be time-consuming, often requiring NCLT approval and multiple public notices." },
  ],
  eligibility: [
    {
      title: "Winding Up Modes",
      items: [
        "**Voluntary Liquidation:** For solvent companies with no debt (Under Section 59 of IBC).",
        "**Fast Track Strike-Off:** For inactive companies with Nil assets (Form STK-2).",
        "**Compulsory Winding Up:** Ordered by the NCLT for insolvency or legal defaults.",
      ],
    },
    {
      title: "Prerequisites for Strike-Off",
      items: [
        "**Inactivity:** No business activity for the last two consecutive financial years.",
        "**Special Resolution:** Consent of at least 75% of shareholders by paid-up capital.",
        "**Statutory Cleanup:** All annual filings must be completed up to the date of inactivity.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Financials",
      content: {
        title: "Proof of Solvency",
        items: [
          "**Form STK-8:** Statement of Accounts (Nil assets) certified by a CA (max 30 days old).",
          "**Audit Records:** Financial statements for the last two years or since incorporation.",
          "**Bank Closure Certificate:** Formal proof that all company accounts are closed.",
        ],
      },
    },
    {
      tabTitle: "Statutory Undertakings",
      content: {
        title: "Director Declarations",
        items: [
          "**Form STK-4 (Affidavit):** Notarized statement declaring no debts or pending litigation.",
          "**Form STK-3 (Indemnity Bond):** Sworn promise to pay future claims after closure.",
          "**Board Resolution:** Authorizing the closure and nominating a director to file.",
        ],
      },
    },
    {
      tabTitle: "Shareholder Consent",
      content: {
        title: "Internal Approvals",
        items: [
          "**Special Resolution:** Certified copy showing 75% member approval.",
          "**NOC from Creditors:** Written consent from any secured lenders.",
          "**ITR Acknowledgment:** Copy of the most recently filed tax return.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Board Meeting", description: "Pass a resolution to initiate closure and call for an Extraordinary General Meeting (EGM)." },
    { step: 2, title: "Special Resolution", description: "Shareholders meet and pass a Special Resolution (75% majority) to strike off the company." },
    { step: 3, title: "Asset Settlement", description: "Close bank accounts, pay off any remaining liabilities, and obtain the Nil Statement of Accounts." },
    { step: 4, title: "Form STK-2 Filing", description: "Upload the strike-off application on the MCA portal (via C-PACE) with all notarized attachments." },
    { step: 5, title: "Public Notice", description: "The ROC publishes a notice in the Official Gazette inviting objections from the public." },
    { step: 6, title: "Dissolution", description: "After the notice period (3-6 months), the ROC issues the final order and the company name is struck off." },
  ],
  fees: [
    { component: "Form STK-2 (Strike-Off)", fees: "₹10,000", remarks: "Standard government filing fee." },
    { component: "Form MGT-14", fees: "₹300 - ₹600", remarks: "For filing the Special Resolution." },
    { component: "Stamp Duty & Notary", fees: "₹1,000 - ₹2,500", remarks: "For Indemnity Bonds and Affidavits (state-specific)." },
    { component: "Late Filing Penalty", fees: "₹200 / day", remarks: "Combined penalty for AOC-4 and MGT-7." },
    { component: "Liquidator Fee (IBC)", fees: "₹1.5L - ₹3L+", remarks: "Only for formal voluntary liquidation route." },
    { component: "Professional Fee", fees: "₹15,000 - ₹30,000", remarks: "For drafting, CA certification, and filing via C-PACE." },
  ],
  faqs: [
    { q: "What is C-PACE?", a: "The Centre for Processing Accelerated Corporate Exit is an MCA initiative to speed up the closure of companies to a few months." },
    { q: "Can I close a company if I have pending court cases?", a: "No. The directors must declare that there is no pending litigation against the company in the strike-off affidavit." },
    { q: "What happens if I don't wind up a dormant company?", a: "The company will face massive penalties, and the directors may be disqualified and 'blacklisted' from starting new businesses." },
    { q: "Does the company's PAN get cancelled automatically?", a: "No. After the ROC strikes off the name, you must separately apply to the Income Tax Department for PAN/TAN cancellation." },
  ],
};
