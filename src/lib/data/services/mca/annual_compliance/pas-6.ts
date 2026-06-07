import { ServiceData } from "@/lib/types";

export const pas6Data: ServiceData = {
  title: "PAS-6",
  breadcrumb: ["Home", "MCA", "Annual & Half-Yearly Compliance", "PAS-6"],
  description: "Mandatory Reconciliation of Share Capital Audit Report (Half-yearly) for unlisted public and specified private companies.",
  overview: `Form PAS-6 is a mandatory compliance requirement under the Companies Act, 2013. Formally known as the **Reconciliation of Share Capital Audit Report (Half-yearly)**, its primary purpose is to ensure transparency and accuracy in a company's share capital records.

The central goal is to reconcile issued share capital with shares held in:
- **Dematerialized (Demat) Form:** Held electronically with depositories (NSDL/CDSL).
- **Physical Form:** Held as paper certificates.

This filing is a regulatory tool used by the MCA to monitor the mandatory dematerialization of securities for applicable companies.`,
  advantages: [
    { icon: "Zap", title: "Enforces Dematerialization", text: "Ensures companies comply with the mandate to hold and issue securities in electronic form, eliminating risks of paper share certificates." },
    { icon: "ShieldCheck", title: "Eliminates Securities Risk", text: "Electronic shares remove risks like theft, forgery, duplication, and loss associated with physical certificates." },
    { icon: "Search", title: "Identifies Discrepancies", text: "Mandates a half-yearly audit to identify any mismatches between internal registers and depository records." },
    { icon: "TrendingUp", title: "Facilitates Transactions", text: "Demat shares are easier and faster to transfer, improving liquidity for unlisted company investors." },
    { icon: "UserCheck", title: "Professional Oversight", text: "Requires mandatory certification from a practicing CS or CA, providing independent assurance of capital records." },
    { icon: "LineChart", title: "Investor Confidence", text: "Transparent disclosure of capital structure builds trust with potential investors and lenders." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "Heavy Penalties for Delay", text: "Initial penalty of ₹10,000 plus ₹1,000 per day for continuing default for both company and officers." },
    { icon: "Clock", title: "Strict Half-Yearly Frequency", text: "Must be filed within 60 days of the end of each half-year (March 31 and September 30)." },
    { icon: "CreditCard", title: "Depository Costs", text: "Companies must pay annual maintenance and connectivity charges to depositories (NSDL/CDSL) to maintain demat status." },
  ],
  eligibility: [
    {
      title: "Applicable Companies",
      items: [
        "Unlisted Public Companies (Mandatory).",
        "Private Companies that are NOT 'Small Companies'.",
        "Section 8 Companies with share capital (unless small).",
      ],
    },
    {
      title: "Exempted Entities",
      items: [
        "Listed Companies (governed by SEBI).",
        "Small Private Companies (as defined u/s 2(85)).",
        "Government Companies.",
        "Nidhi Companies.",
        "Wholly-Owned Subsidiaries of unlisted public companies.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Company Identifiers",
      content: {
        title: "Mandatory Identifiers",
        items: [
          "**CIN:** 21-digit Corporate Identification Number.",
          "**ISIN:** 12-digit International Securities Identification Number for each class of security.",
        ],
      },
    },
    {
      tabTitle: "Audit Records",
      content: {
        title: "Share Capital Data",
        items: [
          "Issued Capital Data (from Register of Members).",
          "Depository Statements (from NSDL and CDSL).",
          "Physical Share Records (total shares in paper form).",
          "Explanation for any discrepancies in reconciliation.",
        ],
      },
    },
    {
      tabTitle: "Capital Changes",
      content: {
        title: "Corporate Action Records",
        items: [
          "Board/EGM Resolutions for Rights/Bonus Issues, Buybacks, or ESOPs.",
          "Registrar and Transfer Agent (RTA) reports.",
          "Demat Request Log (tracking requests confirmed within 21 days).",
          "Shareholding details of Promoters, Directors, and KMPs.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Data Collection", description: "Collect shareholding data from internal registers and depository statements (NSDL/CDSL)." },
    { step: 2, title: "Reconciliation", description: "Match issued capital with the sum of demat and physical shares; identify any differences." },
    { step: 3, title: "Professional Audit", description: "Engage a practicing CA or CS to audit the reconciliation and certify the findings." },
    { step: 4, title: "Prepare E-Form", description: "Fill Form PAS-6 on the MCA portal with audited capital data and ISIN details." },
    { step: 5, title: "Digital Signing", description: "Affix DSC of authorized director and the certifying professional." },
    { step: 6, title: "Submission", description: "Upload to MCA portal and pay fees within 60 days of the half-year end." },
  ],
  fees: [
    { component: "Normal Fee (Capital < ₹1 Lakh)", fees: "₹200", remarks: "Based on authorized capital." },
    { component: "Normal Fee (Capital ₹1L - ₹5L)", fees: "₹300", remarks: "Based on authorized capital." },
    { component: "Normal Fee (Capital ₹5L - ₹25L)", fees: "₹400", remarks: "Based on authorized capital." },
    { component: "Normal Fee (Capital ₹25L - ₹1Cr)", fees: "₹500", remarks: "Based on authorized capital." },
    { component: "Normal Fee (Capital > ₹1Cr)", fees: "₹600", remarks: "Based on authorized capital." },
    { component: "Initial Penalty (Late Filing)", fees: "₹10,000", remarks: "One-time penalty for delay." },
    { component: "Continuing Default Fee", fees: "₹1,000 / day", remarks: "Applicable after initial penalty (Max ₹2 Lakh)." },
  ],
  faqs: [
    { q: "What is the due date for PAS-6?", a: "It must be filed within 60 days from the conclusion of each half-year (i.e., by May 30th for the period ending March 31st, and by November 29th for September 30th)." },
    { q: "Is PAS-6 mandatory for private companies?", a: "Yes, for private companies that are not classified as 'Small Companies'." },
    { q: "Can I file PAS-6 without an ISIN?", a: "No. You must first apply for an ISIN with depositories (NSDL/CDSL) to file PAS-6." },
    { q: "Who can certify Form PAS-6?", a: "A practicing Company Secretary (CS) or a practicing Chartered Accountant (CA)." },
  ],
};
