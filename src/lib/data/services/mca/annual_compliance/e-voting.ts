import { ServiceData } from "@/lib/types";

export const eVotingData: ServiceData = {
  title: "E-Voting",
  breadcrumb: ["Home", "MCA", "Annual & Half-Yearly Compliance", "E-Voting"],
  description: "Secure, digital mechanism for shareholders to cast votes on resolutions without physical attendance, mandated for large companies.",
  overview: `**E-Voting**, or Electronic Voting, is an efficient digital mechanism that allows shareholders to cast their votes on resolutions proposed at General Meetings (AGM/EGM) without physical attendance.

Mandated under Section 108 of the Companies Act, 2013 for listed companies and large unlisted companies, it aims to democratize corporate decision-making and ensure wider participation. The process is facilitated by authorized agencies like NSDL and CDSL.`,
  advantages: [
    { icon: "Globe", title: "Increased Accessibility", text: "Removes geographical barriers, allowing shareholders worldwide to cast votes remotely, significantly increasing voter turnout." },
    { icon: "Clock", title: "Convenience & Time", text: "Shareholders get a multi-day voting window (typically 3 days) to review resolutions and vote at their convenience." },
    { icon: "Zap", title: "Speed & Accuracy", text: "Eliminates manual counting and signature verification. Votes are tallied almost instantaneously with far greater accuracy." },
    { icon: "ShieldCheck", title: "Enhanced Governance", text: "Provides a transparent, secure, and auditable system for exercising shareholder franchise, raising accountability standards." },
    { icon: "DollarSign", title: "Cost Reduction", text: "Saves companies substantial costs related to printing, packaging, and mailing physical postal ballots." },
  ],
  disadvantages: [
    { icon: "ShieldAlert", title: "Security Vulnerabilities", text: "Vulnerable to cyber threats like hacking or software glitches, which could lead to mass manipulation of votes." },
    { icon: "WifiOff", title: "Digital Divide", text: "Relies on internet access and computer literacy, which may disenfranchise older shareholders or those in remote areas." },
    { icon: "Search", title: "Lack of Transparency", text: "Proprietary software can be opaque; shareholders must place near-complete trust in third-party agencies (NSDL/CDSL) to count accurately." },
    { icon: "Lock", title: "Risk of Coercion", text: "Uncontrolled remote voting environments increase the risk of third-party pressure on shareholders, compromising ballot secrecy." },
  ],
  eligibility: [
    {
      title: "Mandatory Applicability",
      items: [
        "Every Listed Company on a recognized stock exchange.",
        "Every Unlisted Company with 1,000 or more members (shareholders).",
      ],
    },
    {
      title: "Member Entitlement",
      items: [
        "Only members whose names appear in the Register of Members as of the **Cut-off Date** can vote.",
        "The cut-off date must not be earlier than 7 days before the General Meeting.",
      ],
    },
    {
      title: "Voluntary Adoption",
      items: [
        "Companies not meeting mandatory thresholds can voluntarily offer e-voting to enhance governance and reduce costs.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Company Records",
      content: {
        title: "Compliance Documentation",
        items: [
          "**Register of Members (ROM):** Uploaded to the e-voting agency's platform as of the cut-off date.",
          "**Notice of Meeting:** Communicating procedure, timeline, and login credentials (User ID/Password).",
          "**Board Resolution:** Appointing the independent scrutinizer and approving the timeline.",
        ],
      },
    },
    {
      tabTitle: "Audit Reports",
      content: {
        title: "Validation Documents",
        items: [
          "**Scrutinizer's Report:** Consolidates remote and meeting-venue votes, certifying the validity of the process.",
        ],
      },
    },
    {
      tabTitle: "Shareholder Identifiers",
      content: {
        title: "Login Requirements",
        items: [
          "**User ID:** 16-digit Beneficiary ID (CDSL) or DP ID + Client ID (NSDL).",
          "**Authentication Data:** PAN and either Dividend Bank Account Number or Date of Birth.",
          "**EVEN:** Unique Electronic Voting Event Number sent by the company.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Agency Engagement", description: "Engage an authorized agency (NSDL/CDSL) and set up the voting event (EVEN)." },
    { step: 2, title: "Appoint Scrutinizer", description: "Appoint an independent professional (CS/CA) to oversee and certify the voting process." },
    { step: 3, title: "Notify Shareholders", description: "Send meeting notice 21 days in advance, including e-voting instructions and login credentials." },
    { step: 4, title: "Remote Voting Window", description: "Open the remote voting portal for at least 3 days, closing at 5:00 PM on the day before the meeting." },
    { step: 5, title: "Venue Voting", description: "Provide electronic voting facilities at the meeting venue for those who haven't voted remotely." },
    { step: 6, title: "Results Declaration", description: "Scrutinizer submits report within 3 days; company announces results and files with stock exchanges/MCA." },
  ],
  fees: [
    { component: "Shareholder Fee", fees: "₹0", remarks: "No charge to individual voters; costs borne by the company." },
    { component: "Base Event Charge", fees: "₹10,000+", remarks: "Minimum fee based on shareholder base size slabs." },
    { component: "Per Voter Charge", fees: "₹10 - ₹25", remarks: "Variable rate per additional voter beyond base slab." },
    { component: "Virtual Meeting Integration", fees: "Variable", remarks: "Additional charges for hosting the meeting via the agency's platform." },
  ],
  faqs: [
    { q: "Is e-voting mandatory for all private companies?", a: "No, it is only mandatory for listed companies and unlisted companies with 1,000 or more shareholders." },
    { q: "Can I change my vote after casting it?", a: "No, once a vote is cast and confirmed electronically, it cannot be modified." },
    { q: "What is a 'Scrutinizer'?", a: "An independent professional (like a practicing CS or CA) appointed by the Board to monitor the voting process and ensure it is fair and transparent." },
    { q: "What is the 'Cut-off Date'?", a: "The specific date (no earlier than 7 days before the meeting) used to determine which shareholders are eligible to vote." },
  ],
};
