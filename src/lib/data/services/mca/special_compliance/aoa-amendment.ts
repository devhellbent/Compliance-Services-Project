import { ServiceData } from "@/lib/types";

export const aoaAmendmentData: ServiceData = {
  title: "AOA Amendment",
  breadcrumb: ["Home", "MCA", "Special Compliance Services", "AOA Amendment"],
  description: "Formal modification of a company’s internal regulations and bylaws to update governance policies, director powers, or share transfer rules.",
  overview: `The **Articles of Association (AOA)** is a fundamental legal document that acts as the internal rulebook for a company. It outlines how the company is managed and governed on a day-to-day basis.

An AOA Amendment (governed by Section 14 of the Companies Act, 2013) allows a company to update its management policies, director powers, or share transfer restrictions to align with its current business objectives and statutory requirements.`,
  advantages: [
    { icon: "Zap", title: "Operational Flexibility", text: "Allows the company to modernize outdated clauses (e.g., from the 1956 Act) and remove rigid procedures that slow down decision-making." },
    { icon: "ShieldCheck", title: "Investor Readiness", text: "Mandatory for baking in specific investor rights like 'Exit Options', 'Tag-along/Drag-along', or 'Right of First Refusal' (ROFR)." },
    { icon: "UserCheck", title: "Governance Modernization", text: "Enables the introduction of digital-friendly provisions like electronic voting and digital communication for board meetings." },
    { icon: "Lock", title: "Conflict Resolution", text: "Clearly defined rules for quorums and dividend distribution reduce the risk of internal disputes between shareholders." },
    { icon: "BarChart", title: "Facilitates Fundraising", text: "Prerequisite step to define the rights of new share classes (e.g., Preference Shares) or ESOPs for employees." },
    { icon: "CheckCircle", title: "Compliance Alignment", text: "Ensures the company stays compliant with the latest MCA notifications and mandatory provisions of the Companies Act, 2013." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "High Majority Required", text: "Requires a Special Resolution (75% majority), which can be difficult to achieve if there are dissenting minority shareholders." },
    { icon: "Clock", title: "Strict Filing Timeline", text: "Must be filed with the ROC within 30 days. Delays attract escalating 'Additional Fees' and potential penalties for the company." },
  ],
  eligibility: [
    {
      title: "Statutory Criteria",
      items: [
        "**Special Resolution:** Approval by 75% of shareholders at a General Meeting.",
        "**Subordination:** The amendment must not contradict the Memorandum of Association (MOA) or the Companies Act.",
        "**Bona Fide Interest:** Must be made in good faith for the benefit of the company as a whole.",
      ],
    },
    {
      title: "Common Triggers",
      items: [
        "Increasing Authorized Capital (if power not present).",
        "Converting from Private to Public (or vice versa).",
        "Adopting Table F of the 2013 Act.",
        "Issuing new classes of shares or ESOPs.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Shareholder Records",
      content: {
        title: "Required for Filing",
        items: [
          "**Certified Special Resolution:** Signed copy with a 75% majority vote.",
          "**Notice of General Meeting:** Along with the Explanatory Statement justifying the change.",
          "**Attendance Sheet:** Proving the quorum was met for the meeting.",
        ],
      },
    },
    {
      tabTitle: "Updated Charter",
      content: {
        title: "Legal Documents",
        items: [
          "**Altered Articles of Association:** A full, updated copy containing the modified clauses.",
          "**Board Resolution:** Internal approval to propose the amendment.",
          "**Shorter Notice Consent:** If the meeting was held with less than 21 days' notice.",
        ],
      },
    },
    {
      tabTitle: "Specialized Proofs",
      content: {
        title: "Situational Documents",
        items: [
          "**Form INC-28:** For filing government orders (if converting company status).",
          "**Entrenchment Declaration:** If adding rules that are harder to change.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Drafting", description: "Draft the proposed changes to the Articles and a Board Resolution." },
    { step: 2, title: "Board Meeting", description: "Hold a board meeting to approve the amendment and call for a General Meeting." },
    { step: 3, title: "EGM/AGM", description: "Pass a Special Resolution with at least 75% majority at the shareholders' meeting." },
    { step: 4, title: "Form MGT-14", description: "Prepare Form MGT-14 on the MCA portal within 30 days of the resolution." },
    { step: 5, title: "Filing", description: "Affix DSC of director and professional, and upload the form with the altered AOA." },
    { step: 6, title: "Registration", description: "Once the ROC approves, the altered AOA becomes the official internal constitution." },
  ],
  fees: [
    { component: "MGT-14 Filing Fee (Capital < ₹1 Lakh)", fees: "₹200", remarks: "Standard ROC fee." },
    { component: "MGT-14 Filing Fee (Capital ₹1Cr+)", fees: "₹600", remarks: "Standard ROC fee." },
    { component: "Stamp Duty (General Amendment)", fees: "₹200 - ₹1,000", remarks: "Nominal duty on the altered document in most states." },
    { component: "Late Filing Fee (up to 30 days)", fees: "2x Normal Fee", remarks: "Penalty for delay." },
    { component: "Late Filing Fee (> 180 days)", fees: "12x Normal Fee", remarks: "Significant penalty for long delays." },
    { component: "Professional Fee", fees: "₹5,000 - ₹15,000", remarks: "For drafting resolutions and certification." },
  ],
  faqs: [
    { q: "What is the difference between MOA and AOA?", a: "The MOA defines the company's external boundaries and objects, while the AOA defines internal rules and management procedures." },
    { q: "How much majority is needed to amend the AOA?", a: "A Special Resolution is required, which means at least 75% of the shareholders must vote in favor." },
    { q: "What is the deadline for filing the amendment with ROC?", a: "Form MGT-14 must be filed within 30 days of passing the Special Resolution." },
    { q: "What are 'Entrenchment' provisions?", a: "These are clauses that make it harder to change specific rules (e.g., requiring 90% or 100% majority instead of the standard 75%)." },
  ],
};
