// lib/data/services/mca/company_compliance/statutory-registers-and-minutes-maintenance.ts

import { ServiceData } from "@/lib/types";

export const statutoryRegistersAndMinutesMaintenanceData: ServiceData = {
  title: "Statutory Registers and Minutes Maintenance",
  breadcrumb: ["Home", "MCA", "Statutory Records"],
  description:
    "Statutory Registers and Minutes are the official, legal documentation of a company's internal affairs, ownership, and management decisions.",
  overview: `Maintaining Statutory Registers and Minutes is a fundamental and mandatory compliance requirement for every company under the Companies Act, 2013. These records serve as the official, legal, and historical documentation of the company's internal affairs, ownership structure, and management decisions. Statutory Registers are the definitive repository for vital, non-accounting information (like shareholding and charges), while Minutes provide a formal written record of all proceedings and resolutions passed at Board and General Meetings. Together, they ensure transparency, facilitate regulatory inspections, and provide a clear legal trail for all corporate actions.`,
  advantages: [
    {
      icon: "Shield",
      title: "Legal Protection and Compliance",
      text: "The primary advantage is avoiding legal penalties and fines. Proper maintenance provides definitive legal evidence that company actions were formally authorized and sound, serving as a critical defense in case of shareholder or regulatory disputes.",
    },
    {
      icon: "TrendingUp",
      title: "Operational Clarity and Governance",
      text: "Registers provide a definitive record of ownership and management. Minutes create a clear decision-making trail, recording the rationale behind major strategic moves, which enforces director accountability and provides a historical roadmap.",
    },
    {
      icon: "Award",
      title: "Investor and Transaction Confidence",
      text: "Clean, up-to-date records are non-negotiable for due diligence during mergers, acquisitions, or bank loan processing. They demonstrate a commitment to transparency, significantly enhancing the confidence of investors, auditors, and creditors.",
    },
    {
      icon: "Search",
      title: "Facilitates Statutory Inspections",
      text: "Having organized registers and minutes allows for smooth inspections by the Registrar of Companies (ROC) or other government authorities, preventing 'observations' or 'notices' during routine compliance audits.",
    },
  ],
  disadvantages: [
    {
      icon: "Clock",
      title: "High Administrative Burden",
      text: "Maintaining these records is time-consuming. It requires continuous effort to update registers for every share transfer, director change, or charge creation, and demands meticulous focus to draft accurate minutes for every meeting.",
    },
    {
      icon: "AlertCircle",
      title: "Risk of Errors and Consequences",
      text: "Manual updating of physical registers carries the risk of human error. Misstating share ownership or misinterpreting a board resolution in the minutes can have severe legal consequences and lead to protracted shareholder disputes.",
    },
    {
      icon: "Lock",
      title: "Storage and Preservation Needs",
      text: "Certain records, like Minute Books, must be preserved permanently. This requires secure physical or digital storage infrastructure, which can be costly and requires dedicated oversight to prevent loss or tampering.",
    },
  ],
  eligibility: [
    {
      title: "Mandatory Maintenance Rules",
      items: [
        "**Location:** Must be maintained at the Registered Office of the company (unless a special resolution is passed).",
        "**Authentication:** Entries must be authenticated by a Director or the Company Secretary.",
        "**Timeframe (Minutes):** Must be entered in the Minute Book within 30 days of the conclusion of the meeting.",
        "**Preservation:** Minute Books must be preserved permanently; most other registers must be kept for at least 8 years.",
      ],
    },
    {
      title: "Applicability",
      items: [
        "**Companies:** Mandatory for all Private, Public, Section 8, and One Person Companies (OPC).",
        "**LLPs:** Mandatory to maintain minutes of meetings and records of partners as per the LLP Agreement.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Key Registers",
      content: {
        title: "Mandatory Statutory Books",
        items: [
          "Register of Members (Form MGT-1).",
          "Register of Directors and Key Managerial Personnel (KMP).",
          "Register of Charges (Form CHG-7).",
          "Register of Loans, Guarantees, and Securities (Form MBP-2).",
          "Register of Contracts with Related Parties (Form MBP-4).",
          "Register of Shares/Securities Bought Back.",
        ],
      },
    },
    {
      tabTitle: "Meeting Minutes",
      content: {
        title: "Official records of proceedings",
        items: [
          "Minute Book of Board of Directors Meetings.",
          "Minute Book of General Meetings (AGM and EGM).",
          "Minute Book of Audit Committee and CSR Committee Meetings.",
          "Attendance Registers for all meetings held during the year.",
        ],
      },
    },
    {
      tabTitle: "Supporting Docs",
      content: {
        title: "Evidence for entries",
        items: [
          "Notices of meetings with detailed agendas.",
          "Director disclosure forms (MBP-1 and DIR-8).",
          "Share transfer deeds (SH-4) and share certificates.",
          "Signed attendance sheets of all participants.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Drafting of Minutes",
      description: "Within 30 days of any meeting, draft the formal proceedings detailing all discussions and resolutions passed.",
    },
    {
      step: 2,
      title: "Chairman's Approval",
      description: "Circulate the draft minutes to all directors for comments and obtain the Chairman's signature for final authentication.",
    },
    {
      step: 3,
      title: "Entry in Registers",
      description: "Simultaneously update the relevant statutory registers whenever a corporate event (like a share transfer or director change) occurs.",
    },
    {
      step: 4,
      title: "Authentication",
      description: "Ensure every entry in the register and every page of the minute book is initialed or signed by the authorized personnel.",
    },
    {
      step: 5,
      title: "Secure Preservation",
      description: "File the authenticated records in secure, fire-proof storage or encrypted digital vaults for permanent preservation as per the law.",
    },
  ],
  fees: [],
  feesMarkdown: `
The cost of maintaining statutory records is primarily a professional service fee for secretarial expertise.

### Professional Fee Structure for Secretarial Maintenance

| Service Type | Applicability | Estimated Annual Professional Fee | Scope of Service |
| --- | --- | --- | --- |
| Basic Maintenance | Small Companies / OPC | Rs.5,000 to Rs.12,000 | Maintenance of 4-5 core registers and 4 board minutes. |
| Comprehensive Service | Active Private Companies | Rs.15,000 to Rs.35,000 | Preparation of all board/committee minutes and all statutory registers. |
| Large / Public Co. | Public / Subsidiary | Rs.40,000 to Rs.1,00,000+ | Includes specialized committee minutes and high-volume register updates. |
| Physical to Digital | One-time Conversion | Rs.10,000 to Rs.25,000 | Digitizing historical minute books and registers into secure formats. |

### Statutory Penalties for Non-Maintenance

*   **Non-Maintenance of Minutes:** Company may be fined ₹25,000; every officer in default may be fined ₹5,000.
*   **Tampering with Minutes:** Imprisonment up to 2 years and fine up to ₹1,00,000.
*   **Late Updating of Registers:** General penalties under Section 450 (up to ₹10,000 plus daily fines).
`,
  faqs: [
    {
      q: "Can minutes be maintained in loose-leaf form?",
      a: "Yes, provided they are **regularly bound** and every page is signed by the Chairman to prevent any substitution or tampering.",
    },
    {
      q: "Who is responsible for the accuracy of statutory registers?",
      a: "The **Company Secretary** (if appointed) or the **Directors** are collectively responsible for ensuring the records are accurate and up-to-date.",
    },
    {
      q: "Are shareholders allowed to inspect the statutory registers?",
      a: "Yes. Shareholders have a **legal right** to inspect most statutory registers (like the Register of Members) at the registered office during business hours.",
    },
  ],
};
