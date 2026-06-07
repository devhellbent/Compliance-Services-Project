import { ServiceData } from "@/lib/types";

export const llpWindingUpData: ServiceData = {
  title: "LLP Winding Up",
  breadcrumb: ["Home", "MCA", "MCA Services", "LLP Winding Up"],
  description: "Formal legal process for closing a Limited Liability Partnership by liquidating assets and settling all outstanding debts and liabilities.",
  overview: `**LLP Winding Up** is the formal legal process of closing down business operations, settling debts, and dissolving the legal entity.

In India, this is governed by the LLP Act, 2008 and the LLP (Winding Up and Dissolution) Rules, 2012. While active LLPs with significant assets require a structured liquidation process, inactive LLPs with no assets or liabilities can opt for a faster "Strike-Off" (via Form 24) to remove their name from the Registrar of Companies.`,
  advantages: [
    { icon: "ShieldCheck", title: "Protection from Liability", text: "Once dissolution is complete, partners are generally released from personal responsibility for the LLP's debts, provided no fraud was committed." },
    { icon: "Zap", title: "Stop Statutory Penalties", text: "Inactive LLPs often accumulate heavy fines for non-filing (₹100/day). Formal winding up stops these penalties from accruing indefinitely." },
    { icon: "CheckCircle", title: "Clean Corporate Exit", text: "Choosing voluntary closure shows responsibility to creditors and is viewed much more favorably by banks and future partners than a forced strike-off." },
    { icon: "RefreshCw", title: "C-PACE Efficiency", text: "The new accelerated corporate exit mechanism has reduced the time for voluntary closure from years to just 2–6 months for eligible LLPs." },
    { icon: "DollarSign", title: "Surplus Distribution", text: "Allows for a transparent, legally mandated sale of assets, where any surplus remaining after paying creditors is distributed to the partners." },
    { icon: "TrendingUp", title: "Freedom to Pivot", text: "Provides a 'clean slate', allowing entrepreneurs to focus on new ventures without the administrative and legal baggage of a stagnant entity." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "Strict Compliance First", text: "An LLP cannot be wound up until all pending annual filings (Form 8 and Form 11) are completed and penalties are paid." },
    { icon: "CreditCard", title: "Liquidation Costs", text: "Requires professional certification from a CA and often involves costs for indemnity bonds, affidavits, and bank account closure fees." },
  ],
  eligibility: [
    {
      title: "Winding Up Methods",
      items: [
        "**Strike-Off (Form 24):** For LLPs inactive for at least 1 year with NIL assets and liabilities.",
        "**Voluntary Winding Up:** For active/solvent LLPs with assets and debts to settle.",
        "**Compulsory Winding Up:** Ordered by the NCLT for fraud or consistent defaults.",
      ],
    },
    {
      title: "Mandatory Prerequisites",
      items: [
        "**Nil Liabilities:** All creditors must be paid off before filing for strike-off.",
        "**Partner Consent:** Unanimous written consent from all designated partners.",
        "**Closed Bank Accounts:** All accounts in the name of the LLP must be officially closed.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Financials",
      content: {
        title: "Proof of Inactivity",
        items: [
          "**Statement of Accounts:** Certified 'Nil' statement by a CA (not older than 30 days).",
          "**ITR Acknowledgment:** Copy of the most recently filed Income Tax Return.",
          "**Bank Closure Certificate:** Formal letter from the bank confirming account closure.",
        ],
      },
    },
    {
      tabTitle: "Legal Deeds",
      content: {
        title: "Statutory Undertakings",
        items: [
          "**Indemnity Bond:** Notarized document (all partners) to indemnify the ROC against future claims.",
          "**Affidavits:** Sworn by partners declaring no outstanding liabilities or pending legal cases.",
          "**Partners' Resolution:** Written consent signed by all partners agreeing to dissolve.",
        ],
      },
    },
    {
      tabTitle: "LLP Records",
      content: {
        title: "Supporting Files",
        items: [
          "**LLP Agreement:** Copy of the initial agreement and any supplements.",
          "**PAN Card:** Self-attested copy of the LLP's tax identity.",
          "**Director KYC:** PAN and Aadhaar of all designated partners.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Compliance Audit", description: "Ensure all pending annual filings (Form 8/11) are filed and penalties are paid." },
    { step: 2, title: "Asset Liquidation", description: "Settle all debts, recover loans, and close all bank accounts in the LLP's name." },
    { step: 3, title: "Partner Resolution", description: "Hold a meeting and pass a unanimous resolution to strike off the LLP." },
    { step: 4, title: "Form 24 Preparation", description: "Draft affidavits, indemnity bonds, and get the CA-certified Statement of Accounts." },
    { step: 5, title: "MCA Filing", description: "Upload Form 24 on the MCA portal along with all attachments and pay the fee." },
    { step: 6, title: "Gazette Notice", description: "The ROC publishes a public notice; if no objections are received, the LLP is officially struck off." },
  ],
  fees: [
    { component: "Government Filing Fee (Small LLP)", fees: "₹500", remarks: "Contribution < ₹25L, Turnover < ₹40L." },
    { component: "Government Filing Fee (Other LLPs)", fees: "₹1,000", remarks: "Standard MCA fee for Form 24." },
    { component: "Late Filing Penalty", fees: "₹100 / day / form", remarks: "Applies to all missed annual filings." },
    { component: "Digital Signature Renewal", fees: "₹1,000 - ₹1,500", remarks: "If previous DSC has expired." },
    { component: "Stamp Duty & Notary", fees: "₹500 - ₹1,000", remarks: "For Affidavits and Indemnity Bonds." },
    { component: "Professional Fee", fees: "₹8,000 - ₹15,000", remarks: "For drafting, CA certification, and filing." },
  ],
  faqs: [
    { q: "Can I close an LLP with pending debts?", a: "No. You must settle all liabilities and obtain creditor consent before applying for voluntary strike-off." },
    { q: "What is the penalty for not closing an inactive LLP?", a: "The LLP will continue to accumulate a penalty of ₹100 per day for each missing annual form (Form 8 and Form 11)." },
    { q: "How long does the strike-off process take?", a: "Once filed, it typically takes 3 to 6 months for the ROC to issue the final dissolution notice in the Gazette." },
    { q: "Is a bank account closure certificate mandatory?", a: "Yes, the MCA requires proof that all operational bank accounts of the LLP have been officially closed." },
  ],
};
