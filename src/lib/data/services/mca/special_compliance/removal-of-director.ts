import { ServiceData } from "@/lib/types";

export const removalOfDirectorData: ServiceData = {
  title: "Removal of Director",
  breadcrumb: ["Home", "MCA", "Special Compliance Services", "Removal of Director"],
  description: "Statutory procedure for terminating a director’s tenure by shareholders, ensuring adherence to the principles of natural justice.",
  overview: `In India, the **Removal of a Director** is a statutory power granted to shareholders under Section 169 of the Companies Act, 2013. It allows owners to terminate a director’s tenure before it expires, provided they follow a strict legal procedure.

The process requires a "Special Notice" from shareholders, followed by an Ordinary Resolution passed at a General Meeting. Crucially, the director must be given a "Reasonable Opportunity of Being Heard" to defend their position before any final vote is taken.`,
  advantages: [
    { icon: "UserCheck", title: "Shareholder Supremacy", text: "Empowers the true owners (shareholders) to remove management personnel who are no longer acting in the company's best interest." },
    { icon: "ShieldCheck", title: "Governance Integrity", text: "Allows for the removal of directors involved in fraud, gross negligence, or those who have breached their fiduciary duties." },
    { icon: "Zap", title: "Performance Management", text: "Facilitates the replacement of non-performing or absentee directors who are stalling board decisions and corporate growth." },
    { icon: "Award", title: "Conflict Resolution", text: "Provides a legal mechanism to break deadlocks in management by removing dissenting directors through a democratic majority vote." },
    { icon: "Search", title: "Natural Justice", text: "The mandatory 'Right to be Heard' ensures that directors are not removed arbitrarily without a chance to defend their record." },
    { icon: "CheckCircle", title: "Compliance Rectification", text: "Enables the removal of directors who have become legally disqualified (e.g., bankruptcy or criminal conviction)." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "Legally Intensive", text: "Requires strict adherence to notice periods and meeting protocols; even minor procedural errors can lead to the removal being set aside by a court." },
    { icon: "Clock", title: "Public Disclosure", text: "Listed companies must disclose the removal process to stock exchanges within 24 hours, potentially impacting share prices." },
    { icon: "CreditCard", title: "Potential Litigation", text: "Disputed removals often lead to cases in the NCLT, resulting in significant legal costs and management distraction." },
  ],
  eligibility: [
    {
      title: "Triggers for Removal",
      items: [
        "**Statutory Disqualification:** Bankruptcy, criminal conviction, or unsound mind (Section 164).",
        "**Absence:** Missing all board meetings for 12 continuous months (Section 167).",
        "**Shareholder Request:** Loss of confidence or mismanagement.",
      ],
    },
    {
      title: "Special Conditions",
      items: [
        "**Independent Directors:** Removal in their second term requires a Special Resolution (75% majority).",
        "**Exclusions:** Directors appointed by the NCLT or via proportional representation cannot be removed by shareholders.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Notices",
      content: {
        title: "Statutory Communications",
        items: [
          "**Special Notice:** From shareholders holding 1% voting power or ₹5 Lakh paid-up capital.",
          "**Intimation to Director:** Proof that the company forwarded the removal proposal to the concerned director.",
          "**Notice of EGM/AGM:** Formal call for the meeting (21 clear days' notice).",
        ],
      },
    },
    {
      tabTitle: "Resolutions",
      content: {
        title: "Internal Approvals",
        items: [
          "**Board Resolution:** To consider the special notice and call for a General Meeting.",
          "**Ordinary Resolution:** Passed at the General Meeting authorizing the removal.",
          "**Director's Representation:** Written defense (if any) submitted by the director.",
        ],
      },
    },
    {
      tabTitle: "Filing Requirements",
      content: {
        title: "Proof for ROC",
        items: [
          "**Form DIR-12:** The primary filing for change in management.",
          "**Attendance Register:** Proving the quorum for the removal vote.",
          "**Self-attested PAN:** Of the outgoing director for record verification.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Special Notice", description: "Shareholders submit a written notice to the company proposing the director's removal." },
    { step: 2, title: "Board Intimation", description: "The company immediately sends a copy of the notice to the concerned director." },
    { step: 3, title: "Representation", description: "The director submits a written defense, which the company must circulate to all shareholders." },
    { step: 4, title: "General Meeting", description: "Hold the meeting and give the director a final opportunity to be heard before voting." },
    { step: 5, title: "Ordinary Resolution", description: "Pass the resolution (simple majority) to finalize the removal." },
    { step: 6, title: "ROC Filing", description: "File Form DIR-12 on the MCA portal within 30 days of the resolution." },
  ],
  fees: [
    { component: "Form DIR-12 Filing Fee (Capital < ₹1 Lakh)", fees: "₹200", remarks: "Standard government fee." },
    { component: "Form DIR-12 Filing Fee (Capital > ₹1Cr)", fees: "₹600", remarks: "Standard government fee." },
    { component: "Late Filing Penalty", fees: "2x - 12x Normal Fee", remarks: "Penalty for delay past 30 days." },
    { component: "Professional Fee (Simple)", fees: "₹3,000 - ₹6,000", remarks: "For drafting and certification." },
    { component: "Professional Fee (Disputed)", fees: "₹10,000 - ₹25,000+", remarks: "Involves handling legal defenses and representation." },
  ],
  faqs: [
    { q: "Can a director resign while the removal process is ongoing?", a: "Yes, a director can submit their resignation under Section 168 at any time, but it does not absolve them of liabilities incurred during their tenure." },
    { q: "What is the 'Right to be Heard'?", a: "It is a mandatory rule where the director must be given a chance to speak at the General Meeting and defend their position before shareholders vote." },
    { q: "Can a director be removed without any reason?", a: "Technically yes, shareholders have the inherent right to remove a director they appointed by simple majority, provided they follow the legal notice procedure." },
    { q: "Is a Special Resolution needed to remove a director?", a: "Usually, an Ordinary Resolution is enough. However, a Special Resolution (75%) is mandatory for removing an Independent Director in their second term." },
  ],
};
