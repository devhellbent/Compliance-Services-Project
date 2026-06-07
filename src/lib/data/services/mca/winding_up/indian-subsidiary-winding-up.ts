import { ServiceData } from "@/lib/types";

export const indianSubsidiaryWindingUpData: ServiceData = {
  title: "Indian Subsidiary Winding Up",
  breadcrumb: ["Home", "MCA", "MCA Services", "Indian Subsidiary Winding Up"],
  description: "Legal process for closing the Indian operations of a foreign company, involving asset liquidation and repatriation of surplus capital.",
  overview: `**Indian Subsidiary Winding Up** is the legal process of closing operations and dissolving the entity while ensuring all statutory dues and creditor obligations are met.

For a foreign parent company, a formal closure is crucial to mitigate risks and protect its global reputation. For dormant or debt-free subsidiaries, a "Strike-Off" (Fast Track Exit) is often preferred, while solvent operational companies choose voluntary liquidation to systematically repatriate funds.`,
  advantages: [
    { icon: "ShieldCheck", title: "Elimination of Compliance", text: "Ends the need for annual audits, tax filings, and registered office maintenance, stopping recurring professional and statutory costs." },
    { icon: "Zap", title: "Risk Mitigation", text: "A formal dissolution provides a legal 'shield', freeing the foreign parent company and its directors from future personal liability for Indian debts." },
    { icon: "DollarSign", title: "Repatriation of Funds", text: "Enables the parent company to legally bring back remaining capital or surplus assets to the home country after settling local taxes." },
    { icon: "RefreshCw", title: "Avoidance of Blacklisting", text: "Prevents directors from being disqualified by the MCA for non-filing, which could otherwise impact the group's future Indian ventures." },
    { icon: "Award", title: "Reputation Management", text: "Choosing a transparent, legal exit rather than being 'forced closed' by the government maintains the parent group's global standing." },
    { icon: "CheckCircle", title: "Clean Break", text: "Ensures a complete and final exit from the Indian market, preventing any future litigation or legacy claims from emerging." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "Complex FEMA Rules", text: "Repatriating funds involves strict RBI compliance and obtaining tax clearance certificates (15CA/15CB)." },
    { icon: "Clock", title: "Administrative Burden", text: "Requires coordination between the Indian office, the foreign parent, and local regulators for board resolutions and notarized deeds." },
  ],
  eligibility: [
    {
      title: "Winding Up Methods",
      items: [
        "**Strike-Off (Form STK-2):** For inactive subsidiaries with Nil assets and liabilities.",
        "**Voluntary Liquidation:** For solvent subsidiaries with assets to distribute (IBC Route).",
        "**Compulsory Winding Up:** Ordered by NCLT for insolvency or statutory defaults.",
      ],
    },
    {
      title: "Mandatory Prerequisites",
      items: [
        "**Inactivity:** Usually requires no business activity for the last two financial years (for strike-off).",
        "**Board Approval:** Resolution from the foreign parent company authorizing the closure.",
        "**Tax Clearance:** Proof that all GST, TDS, and Corporate tax dues are settled.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Local Compliance",
      content: {
        title: "Proof of Status",
        items: [
          "**Form STK-8:** Nil statement of accounts certified by a CA (max 30 days old).",
          "**Indemnity Bond (STK-3):** Notarized bond signed by Indian directors.",
          "**Affidavit (STK-4):** Sworn statement declaring no debts or pending litigation.",
          "**Bank Closure Letter:** Formal proof that all Indian accounts are closed.",
        ],
      },
    },
    {
      tabTitle: "Parent Approval",
      content: {
        title: "Foreign Authorizations",
        items: [
          "**Special Resolution:** 75% shareholder approval (passed by the parent company).",
          "**Apostilled Documents:** If directors are located abroad, affidavits may need apostillation.",
          "**Board Resolution:** Certified copy from the parent company's board.",
        ],
      },
    },
    {
      tabTitle: "FEMA & Tax",
      content: {
        title: "Repatriation Documents",
        items: [
          "**Form 15CA & 15CB:** Tax certificates required for repatriating capital.",
          "**FC-TRS Form:** For transferring shares back to the parent before dissolution.",
          "**NOC from RBI:** Required if the subsidiary had specific FEMA exemptions.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Parent Authorization", description: "The foreign parent passes a resolution to wind up the Indian subsidiary and appoints a focal person." },
    { step: 2, title: "Debt Settlement", description: "Settle all employee dues, GST, and Income Tax liabilities and close all bank accounts." },
    { step: 3, title: "Asset Disposal", description: "Sell physical assets or transfer them back to the parent (subject to valuation and tax)." },
    { step: 4, title: "Form STK-2 Filing", description: "Submit the strike-off application on the MCA portal with audited 'Nil' accounts and parent consents." },
    { step: 5, title: "Tax Clearance", description: "Obtain 15CA/15CB certificates from a CA to repatriate the surplus capital to the home country." },
    { step: 6, title: "Final Dissolution", description: "The ROC verifies the application; after the notice period, the subsidiary name is officially removed." },
  ],
  fees: [
    { component: "Form STK-2 Filing Fee", fees: "₹10,000", remarks: "Standard government fee." },
    { component: "Professional Fee (Strike-Off)", fees: "₹15,000 - ₹30,000", remarks: "For drafting and filing." },
    { component: "Audit & 15CA/CB", fees: "₹10,000 - ₹20,000", remarks: "For tax clearance and Nil certification." },
    { component: "Stamp Duty & Notary", fees: "₹2,000 - ₹5,000", remarks: "Including potential apostillation costs." },
    { component: "Voluntary Liquidation (IP Fee)", fees: "₹1.5L - ₹5L+", remarks: "Only for the formal IBC liquidation route." },
    { component: "Late Filing (MCA)", fees: "₹100 / day", remarks: "Per missing annual form." },
  ],
  faqs: [
    { q: "Can we repatriate the initial capital?", a: "Yes, once all local taxes and creditors are paid, the surplus capital can be sent back to the parent company under FEMA rules." },
    { q: "Is a professional liquidator always needed?", a: "No. For the strike-off route (STK-2), you don't need a liquidator. Only the full 'Voluntary Liquidation' route requires an Insolvency Professional." },
    { q: "What if the directors are foreign nationals?", a: "Their signatures on the strike-off documents may need to be notarized and apostilled in their home country for validity in India." },
    { q: "How long does the Indian subsidiary closure take?", a: "The strike-off route takes 4 to 7 months, while full voluntary liquidation can take 9 to 15 months." },
  ],
};
