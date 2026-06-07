import { ServiceData } from "@/lib/types";

export const agmData: ServiceData = {
  title: "AGM",
  breadcrumb: ["Home", "MCA", "Annual & Half-Yearly Compliance", "AGM"],
  description: "Mandatory yearly formal meeting of shareholders and directors to review performance, approve financials, and elect leadership.",
  overview: `The AGM stands for **Annual General Meeting**. It is a mandatory, yearly formal meeting of a company's shareholders (members) and its board of directors.

The AGM is a crucial pillar of corporate governance, serving as the primary forum for transparent communication and decision-making between management and the owners (shareholders). It is used to review the company’s performance, strategy, and conduct essential statutory business.`,
  advantages: [
    { icon: "UserCheck", title: "Management Accountability", text: "Requires the Board to explain performance and strategic decisions directly to shareholders, bridging the gap between management and ownership." },
    { icon: "FileCheck", title: "Financial Transparency", text: "Formal adoption of audited Financial Statements ensures books are reviewed by independent auditors and approved by owners." },
    { icon: "Users", title: "Shareholder Democracy", text: "Provides a platform for shareholders to exercise voting rights on critical matters like appointing directors and auditors." },
    { icon: "Zap", title: "Dividend Declaration", text: "The formal venue where shareholders vote to approve the final dividend recommended by the Board." },
    { icon: "MessageCircle", title: "Direct Feedback", text: "Shareholders can question the board directly, propose resolutions, and voice concerns about the company's direction." },
    { icon: "TrendingUp", title: "Market Credibility", text: "Regular, transparent AGMs signal a well-governed company, boosting investor confidence and access to capital." },
  ],
  disadvantages: [
    { icon: "Clock", title: "Strict Statutory Timelines", text: "Must be held within 6 months of financial year end. Gap between two AGMs cannot exceed 15 months." },
    { icon: "AlertTriangle", title: "Heavy Penalties for Delay", text: "Failure to hold AGM within time limits attracts significant fines for both company and officers in default." },
    { icon: "FileText", title: "Administrative Burden", text: "Requires extensive preparation: dispatching notices 21 days in advance, drafting minutes, and filing post-AGM forms (AOC-4, MGT-7)." },
  ],
  eligibility: [
    {
      title: "Mandatory Applicability",
      items: [
        "Private Limited Companies.",
        "Public Limited Companies (Listed and Unlisted).",
        "Section 8 (Non-Profit) Companies.",
      ],
    },
    {
      title: "Exceptions",
      items: [
        "**One Person Company (OPC):** Exempt from mandatory AGM compliance; decisions are recorded in minutes book by the sole member.",
      ],
    },
    {
      title: "Timeline Criteria",
      items: [
        "**First AGM:** Within 9 months from the close of the first financial year.",
        "**Subsequent AGMs:** Within 6 months from the closing of the financial year.",
        "**Max Gap:** Not more than 15 months between two consecutive AGMs.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Pre-AGM Dispatch",
      content: {
        title: "Documents for Shareholders",
        items: [
          "**Notice of AGM:** Sent 21 clear days in advance with detailed agenda.",
          "**Explanatory Statement:** For all items of 'Special Business'.",
          "**Audited Financial Statements:** Balance Sheet, P&L, and Notes.",
          "**Directors' Report:** Summarizing performance and dividend recommendations.",
          "**Auditors' Report:** Independent opinion on financial fairness.",
          "**Proxy Form:** For shareholders who cannot attend in person.",
        ],
      },
    },
    {
      tabTitle: "At the Meeting",
      content: {
        title: "Meeting Records",
        items: [
          "**Attendance Register:** Must be signed by attendees to establish quorum.",
          "**Statutory Registers:** Available for inspection (Register of Members, etc.).",
          "**Scrutinizer's Report:** Detailing results if voting is via poll or e-voting.",
        ],
      },
    },
    {
      tabTitle: "Post-AGM Filing",
      content: {
        title: "Forms for ROC",
        items: [
          "**Minutes of AGM:** Formal record of proceedings, recorded within 30 days.",
          "**Form AOC-4:** Financial statements filing (due within 30 days).",
          "**Form MGT-7/7A:** Annual Return filing (due within 60 days).",
          "**Form MGT-14:** For Special Resolutions passed at the meeting.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Board Approval", description: "Hold a board meeting to approve audited financials and set the AGM date, time, and venue." },
    { step: 2, title: "Notice Dispatch", description: "Send formal notice to all members, directors, and auditors at least 21 clear days before the meeting." },
    { step: 3, title: "Meeting Conduct", description: "Hold the meeting during business hours on a non-holiday; ensure quorum is met and business is transacted." },
    { step: 4, title: "Resolution Voting", description: "Shareholders vote on ordinary and special resolutions (adoption of accounts, dividends, etc.)." },
    { step: 5, title: "Minutes Recording", description: "Draft and enter the minutes of the meeting into the Minutes Book within 30 days." },
    { step: 6, title: "Statutory Filing", description: "File Forms AOC-4 (Financials) and MGT-7 (Annual Return) with the ROC within prescribed deadlines." },
  ],
  fees: [
    { component: "Form AOC-4 Filing Fee", fees: "₹200 - ₹600", remarks: "Based on authorized capital." },
    { component: "Form MGT-7/7A Filing Fee", fees: "₹200 - ₹600", remarks: "Based on authorized capital." },
    { component: "Daily Late Filing Fee", fees: "₹100 / day", remarks: "Per form, for each day of delay past the due date." },
    { component: "Persistent Default Penalty", fees: "₹10,000 + Daily Fine", remarks: "Initial penalty plus daily fine up to ₹2 Lakhs per form." },
  ],
  faqs: [
    { q: "When must the AGM be held?", a: "Within 6 months of the close of the financial year (e.g., by Sept 30th for FY ending March 31st)." },
    { q: "Can a company get an extension for the AGM?", a: "Yes, the ROC can grant an extension of up to 3 months for subsequent AGMs (not the first) via Form GNL-1." },
    { q: "Is the AGM mandatory for OPCs?", a: "No, One Person Companies are exempted from holding an AGM." },
    { q: "What is the quorum for a private company AGM?", a: "Typically 2 members personally present." },
  ],
};
