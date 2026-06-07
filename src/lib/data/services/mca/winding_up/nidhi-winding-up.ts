import { ServiceData } from "@/lib/types";

export const nidhiWindingUpData: ServiceData = {
  title: "Nidhi Winding Up",
  breadcrumb: ["Home", "MCA", "MCA Services", "Nidhi Winding Up"],
  description: "Specialized legal procedure to dissolve a Nidhi company, ensuring all member deposits are repaid and liabilities are settled before closure.",
  overview: `**Nidhi Winding Up** is the legal procedure to dissolve the entity and remove its name from the Registrar of Companies.

Because Nidhi companies handle member deposits, the process is strictly monitored. It is primarily executed through the "Strike Off" method (Form STK-2) when a company has been inactive or has no remaining assets/liabilities. All deposits must be repaid and loans recovered before the formal application can be filed.`,
  advantages: [
    { icon: "ShieldCheck", title: "Regulatory Resolution", text: "Proactively closing a Nidhi company prevents the MCA from initiating forced closure due to non-compliance with the strict NDH rules." },
    { icon: "Zap", title: "Stop Penalty Accumulation", text: "Ends the ₹100/day penalty for missing annual filings (AOC-4, MGT-7) and Nidhi-specific returns (NDH-1/2/3)." },
    { icon: "CheckCircle", title: "Clean Director Standing", text: "Ensures directors aren't disqualified or 'blacklisted', which is a high risk for Nidhi companies that fail to meet capital or member thresholds." },
    { icon: "UserCheck", title: "Member Protection", text: "The formal process ensures all member deposits are settled transparently, protecting the promoters from future fraud or mismanagement claims." },
    { icon: "Lock", title: "Release from NDH Rules", text: "Once dissolved, the promoters are no longer bound by the complex Nidhi governance requirements, allowing focus on other ventures." },
    { icon: "TrendingUp", title: "Fast Track Exit", text: "Utilizing the STK-2 route allows for a relatively quick dissolution compared to court-ordered compulsory winding up." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "Repayment Mandate", text: "Every single member deposit must be repaid with interest before closure; even one pending deposit can stall the entire process." },
    { icon: "CreditCard", title: "Higher Compliance Cost", text: "Requires auditing all Nidhi returns and providing a certified statement of accounts specifically reflecting 'Nil' liabilities." },
  ],
  eligibility: [
    {
      title: "Winding Up Methods",
      items: [
        "**Voluntary Strike-Off:** For inactive companies with zero liabilities (Form STK-2).",
        "**Voluntary Liquidation:** For solvent companies with assets to distribute.",
        "**Compulsory Winding Up:** Ordered by NCLT for NDH-4 rejection or fraud.",
      ],
    },
    {
      title: "Mandatory Prerequisites",
      items: [
        "**Nidhi Compliance:** Must have repaid all member deposits and recovered all outstanding loans.",
        "**Inactivity:** Usually required to be inactive for at least one year.",
        "**Special Resolution:** Approval of at least 75% of the members (shareholders).",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Financials",
      content: {
        title: "Proof of Settlement",
        items: [
          "**Form STK-8:** Nil statement of accounts certified by a CA (max 30 days old).",
          "**Audited Balance Sheet:** Up to the date the company ceased operations.",
          "**Bank Closure Certificate:** Mandatory proof that all Nidhi accounts are closed.",
        ],
      },
    },
    {
      tabTitle: "Statutory Undertakings",
      content: {
        title: "Director Declarations",
        items: [
          "**Form STK-3 (Indemnity Bond):** Notarized bond executed by every director.",
          "**Form STK-4 (Affidavit):** Sworn statement declaring no assets or liabilities.",
          "**Board Resolution:** Certified copy authorizing the strike-off application.",
        ],
      },
    },
    {
      tabTitle: "Nidhi Specifics",
      content: {
        title: "Compliance Records",
        items: [
          "**Special Resolution:** MGT-14 copy showing 75% member approval.",
          "**Member Declaration:** Stating all deposits have been repaid with interest.",
          "**KYC of Directors:** Self-attested PAN and Aadhaar of all board members.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Repayment Phase", description: "Repay all member deposits, recover loans, and clear all pending NDH-1/2/3 returns." },
    { step: 2, title: "Board Resolution", description: "Pass a board resolution authorizing the strike-off and nominating a signatory." },
    { step: 3, title: "EGM & MGT-14", description: "Hold an EGM to pass a Special Resolution (75% majority) and file it with the ROC." },
    { step: 4, title: "Form STK-2 Filing", description: "Upload the strike-off application on the MCA portal with audited 'Nil' accounts and affidavits." },
    { step: 5, title: "ROC Verification", description: "The Registrar checks for any public objections and verifies the solvency of the Nidhi." },
    { step: 6, title: "Final Strike-Off", description: "After the notice period, the company name is removed from the register and dissolved." },
  ],
  fees: [
    { component: "Form STK-2 Filing Fee", fees: "₹10,000", remarks: "Standard government fee for strike-off." },
    { component: "Professional Fee", fees: "₹10,000 - ₹20,000", remarks: "For drafting, resolutions, and filing." },
    { component: "Audit & Certification", fees: "₹5,000 - ₹10,000", remarks: "For CA certification of STK-8." },
    { component: "Stamp Duty & Notary", fees: "₹1,000 - ₹2,000", remarks: "For Indemnity Bond and Affidavits." },
    { component: "MGT-14 Filing Fee", fees: "₹300 - ₹600", remarks: "For filing the Special Resolution." },
    { component: "Late Filing (Annual)", fees: "₹100 / day", remarks: "Per missing annual form." },
  ],
  faqs: [
    { q: "What happens if NDH-4 is rejected?", a: "If the Nidhi status application is rejected, the company must stop accepting deposits and either convert to a regular company or wind up." },
    { q: "Can we strike off without repaying deposits?", a: "No. The ROC will reject the application if any member liabilities are still shown on the balance sheet." },
    { q: "Is a special resolution mandatory?", a: "Yes, closing a Nidhi company requires the consent of at least 75% of the members by way of a Special Resolution." },
    { q: "How long is the final notice period?", a: "The ROC typically waits for 3 to 6 months after publishing the public notice before granting the final strike-off." },
  ],
};
