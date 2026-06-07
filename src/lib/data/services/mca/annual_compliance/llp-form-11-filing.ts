import { ServiceData } from "@/lib/types";

export const llpForm11FilingData: ServiceData = {
  title: "LLP Form 11 Filing",
  breadcrumb: ["Home", "MCA", "Annual & Half-Yearly Compliance", "LLP Form 11 Filing"],
  description: "Mandatory Annual Return for LLPs providing a summary of management and financial standing to the Ministry of Corporate Affairs.",
  overview: `The LLP Form 11 is the mandatory **Annual Return** that every Limited Liability Partnership (LLP) in India must file yearly with the Ministry of Corporate Affairs (MCA).

This filing is a core compliance requirement and must be submitted irrespective of the LLP's turnover or business activity (even LLPs with zero activity must file a 'Nil' return). It provides a snapshot of the LLP's partners and contribution as of March 31st each year.`,
  advantages: [
    { icon: "ShieldCheck", title: "Maintenance of Active Status", text: "Timely filing confirms the LLP's existence and prevents the Registrar (ROC) from marking the entity as inactive or initiating strike-off proceedings." },
    { icon: "Landmark", title: "Financial Credibility", text: "Banks and financial institutions check compliance records before sanctioning loans or credit facilities. Clean history is a prerequisite for funding." },
    { icon: "UserCheck", title: "Investor Confidence", text: "Signals good corporate governance and transparency to potential investors, partners, or clients." },
    { icon: "Zap", title: "Enables Corporate Actions", text: "LLPs cannot convert to a Private Limited company or apply for voluntary closure until all past due returns are cleared." },
    { icon: "FileCheck", title: "Legal Protection", text: "Fulfilling statutory duties protects partners from legal disputes and regulatory scrutiny." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "Severe Daily Penalties", text: "Late filing attracts a penalty of ₹100 per day with no upper ceiling for non-small LLPs, which can accumulate rapidly." },
    { icon: "Clock", title: "Strict Annual Deadline", text: "Must be filed by May 30th every year (60 days from financial year end). Delay of even one day triggers the penalty." },
  ],
  eligibility: [
    {
      title: "Universal Applicability",
      items: [
        "Every registered Limited Liability Partnership (LLP) in India.",
        "Applies regardless of size, turnover, or profit/loss status.",
        "LLPs with zero commercial activity must still file a 'Nil' return.",
      ],
    },
    {
      title: "Certification Tiers",
      items: [
        "**Self-Certification:** If contribution ≤ ₹50 Lakh AND turnover ≤ ₹5 Crore, a Designated Partner can self-certify.",
        "**Professional Certification:** If contribution > ₹50 Lakh OR turnover > ₹5 Crore, mandatory certification by a practicing Company Secretary (CS) is required.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "LLP Identifiers",
      content: {
        title: "Required Identifiers",
        items: [
          "**LLPIN:** Limited Liability Partnership Identification Number.",
          "**DSC:** Valid Digital Signature Certificate of the designated partner.",
        ],
      },
    },
    {
      tabTitle: "Partner Data",
      content: {
        title: "Partner & Contribution Details",
        items: [
          "DPIN or PAN for all partners and designated partners.",
          "Details of appointment or cessation of partners during the year.",
          "Total Obligation of Contribution and actual Contribution Received as of March 31st.",
        ],
      },
    },
    {
      tabTitle: "Mandatory Attachments",
      content: {
        title: "Key Disclosures",
        items: [
          "**Other Directorships/Partnerships:** A statement listing other companies/LLPs where partners hold roles.",
          "Details of any penalties imposed on the LLP during the financial year.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Prepare Data", description: "Collate partner details, contribution figures, and other directorship disclosures." },
    { step: 2, title: "Draft Form", description: "Download and fill the e-Form 11 from the MCA portal." },
    { step: 3, title: "Pre-fill & Validate", description: "Use the 'Pre-fill' feature with your LLPIN and validate the data against MCA records." },
    { step: 4, title: "Certification", description: "Obtain digital signatures from designated partners and a practicing CS (if required)." },
    { step: 5, title: "Upload", description: "Upload the signed form to the MCA V3 portal." },
    { step: 6, title: "Payment", description: "Pay the prescribed filing fee and download the acknowledgment (SRN)." },
  ],
  fees: [
    { component: "Filing Fee (Contribution < ₹1 Lakh)", fees: "₹50", remarks: "Standard MCA fee." },
    { component: "Filing Fee (₹1L - ₹5L)", fees: "₹100", remarks: "Standard MCA fee." },
    { component: "Filing Fee (₹5L - ₹10L)", fees: "₹150", remarks: "Standard MCA fee." },
    { component: "Filing Fee (₹10L - ₹25L)", fees: "₹200", remarks: "Standard MCA fee." },
    { component: "Filing Fee (₹25L - ₹1Cr)", fees: "₹400", remarks: "Standard MCA fee." },
    { component: "Filing Fee (> ₹1Cr)", fees: "₹600", remarks: "Standard MCA fee." },
    { component: "Late Filing Penalty", fees: "₹100 / day", remarks: "Per day of delay (no upper limit for most)." },
  ],
  faqs: [
    { q: "What is the due date for LLP Form 11?", a: "May 30th of every year (60 days from the end of the financial year)." },
    { q: "Do I need to file if my LLP had no business?", a: "Yes, every registered LLP must file an annual return, even if it has zero turnover or activity." },
    { q: "Is a CS certificate mandatory for all LLPs?", a: "Only if the LLP's contribution exceeds ₹50 Lakh or its annual turnover exceeds ₹5 Crore." },
    { q: "What is the difference between Form 11 and Form 8?", a: "Form 11 is the Annual Return (management details), while Form 8 is the Statement of Account and Solvency (financial details)." },
  ],
};
