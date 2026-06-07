import { ServiceData } from "@/lib/types";

export const adt1FilingData: ServiceData = {
  title: "ADT-1 Filing",
  breadcrumb: ["Home", "MCA", "Special Compliance Services", "ADT-1 Filing"],
  description: "Mandatory notification to the Registrar of Companies regarding the appointment of a statutory auditor.",
  overview: `**Form ADT-1** is a mandatory electronic filing used by Indian companies to notify the Registrar of Companies (ROC) about the appointment of a statutory auditor.

Governed by Section 139(1) of the Companies Act, 2013, it ensures that the Ministry of Corporate Affairs (MCA) has a public record of who is auditing a company’s finances. Following the July 2025 amendment, filing for the **first auditor** is now also compulsory for all companies.`,
  advantages: [
    { icon: "Zap", title: "Validates Governance", text: "Serves as official evidence that a statutory auditor was legally appointed, protecting the company in case of financial investigations." },
    { icon: "ShieldCheck", title: "Unblocks Annual Filings", text: "The MCA portal requires an active auditor on record to allow the filing of critical annual forms like AOC-4 (Financials) and MGT-7 (Annual Return)." },
    { icon: "CheckCircle", title: "Active Compliance Status", text: "Prevents the company from being marked as 'Non-compliant' or 'Dormant' due to a missing auditor notification." },
    { icon: "Award", title: "Investor Confidence", text: "As a public document, ADT-1 allows potential investors and banks to verify who is auditing your company, signaling transparency." },
    { icon: "Search", title: "Facilitates Due Diligence", text: "Critical for bank loan applications or equity funding rounds; a missing ADT-1 is a major red flag for professional internal management." },
    { icon: "Lock", title: "Binds Auditor Responsibility", text: "Officially records the auditor's assignment, ensuring they cannot abandon the audit without following a formal resignation process (ADT-3)." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "Strict 15-Day Window", text: "Extremely short filing window; failure to file within 15 days of appointment triggers immediate and escalating additional fees." },
    { icon: "Clock", title: "Heavy Delay Multipliers", text: "For delays beyond 180 days, the filing fee can escalate to 12 times the normal amount, posing a burden for small businesses." },
  ],
  eligibility: [
    {
      title: "Mandatory Entities",
      items: [
        "Private Limited Companies (including Startups).",
        "Public Limited Companies.",
        "One Person Companies (OPC).",
        "Section 8 Companies (Non-profits).",
        "Dormant Companies (still required to have an auditor on record).",
      ],
    },
    {
      title: "Triggering Events",
      items: [
        "**First Appointment:** Within 30 days of incorporation (mandatory for post-July 2025 companies).",
        "**AGM Re-appointment:** Appointment for a standard 5-year term.",
        "**Casual Vacancy:** Filling a mid-term slot due to resignation or death of previous auditor.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Auditor Pack",
      content: {
        title: "Required from the Auditor",
        items: [
          "**Written Consent:** Formal letter from the CA or Firm accepting the role.",
          "**Eligibility Certificate:** Declaring they are not disqualified under Section 141.",
          "**Membership/FRN:** Membership number for individuals or Firm Registration Number for partnerships.",
        ],
      },
    },
    {
      tabTitle: "Company Pack",
      content: {
        title: "Internal Authorizations",
        items: [
          "**Certified Resolution:** Board Resolution (for first auditor) or Ordinary Resolution (from AGM).",
          "**Intimation Letter:** Formal letter issued by the company to the auditor informing them of their appointment.",
          "**Digital Signature:** Of an authorized director (DSC) to sign the web form.",
        ],
      },
    },
    {
      tabTitle: "Special Cases",
      content: {
        title: "Situational Documents",
        items: [
          "**Resignation Letter:** If the appointment is due to a casual vacancy.",
          "**NCLT Order:** If the appointment was directed by the Tribunal.",
          "**PAN of Auditor:** Mandatory for portal entry.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Auditor Consent", description: "Obtain a written consent letter and eligibility certificate from the CA or Audit Firm." },
    { step: 2, title: "Meeting Conduct", description: "Hold a Board Meeting or AGM to pass the resolution for auditor appointment." },
    { step: 3, title: "Intimation", description: "Issue a formal appointment letter to the auditor within 15 days." },
    { step: 4, title: "Form Preparation", description: "Fill Form ADT-1 on the MCA V3 portal with auditor details and term dates." },
    { step: 5, title: "Digital Signing", description: "Affix the DSC of the director and get the form certified by a practicing professional." },
    { step: 6, title: "Submission", description: "Upload to the MCA portal and pay fees within 15 days of the appointment date." },
  ],
  fees: [
    { component: "Standard Filing Fee (Capital < ₹1 Lakh)", fees: "₹200", remarks: "Standard MCA fee." },
    { component: "Standard Filing Fee (Capital > ₹1Cr)", fees: "₹600", remarks: "Standard MCA fee." },
    { component: "Additional Fee (up to 30 days delay)", fees: "2x Normal Fee", remarks: "Penalty for late filing." },
    { component: "Additional Fee (> 180 days delay)", fees: "12x Normal Fee", remarks: "Maximum delay penalty." },
    { component: "Professional Fee", fees: "₹1,000 - ₹3,000", remarks: "For drafting resolutions and certification." },
  ],
  faqs: [
    { q: "Is ADT-1 mandatory for the first auditor?", a: "Yes, following the July 2025 amendments, filing ADT-1 for the first auditor appointed within 30 days of incorporation is now compulsory." },
    { q: "What is the deadline for filing ADT-1?", a: "The form must be filed within 15 days from the date of the appointment (the date of the AGM or Board Meeting)." },
    { q: "Can an LLP file ADT-1?", a: "No, LLPs are not required to file ADT-1. They notify auditor details via their annual Form 8." },
    { q: "How long is a standard auditor term?", a: "Statutory auditors are usually appointed for a term of 5 consecutive years (from one AGM to the sixth AGM)." },
  ],
};
