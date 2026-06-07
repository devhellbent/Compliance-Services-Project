// lib/data/services/mca/company_compliance/producer-company-compliance.ts

import { ServiceData } from "@/lib/types";

export const producerCompanyComplianceData: ServiceData = {
  title: "Producer Company Compliance",
  breadcrumb: ["Home", "MCA", "Producer Company Compliance"],
  description:
    "Producer Company compliance refers to the mandated legal and regulatory duties that a Producer Company in India must fulfill under the Companies Act, 2013.",
  overview: `Producer Company compliance in India refers to the mandatory set of legal, financial, and procedural obligations that a company registered as a "Producer Company" under the Companies Act, 2013 (specifically under Chapter XXIA) must fulfill annually. A Producer Company is a unique legal structure designed primarily for primary producers, such as farmers, fishers, and artisans. It combines the benefits of a cooperative society with the regulatory framework of a private limited company.`,
  advantages: [
    {
      icon: "Shield",
      title: "Legal Status and Perpetual Succession",
      text: "Maintaining compliance ensures that the Producer Company retains its status as a separate legal entity. This guarantees perpetual succession, meaning the company continues to exist regardless of changes in its members or directors, protecting the collective interests of the producers.",
    },
    {
      icon: "TrendingUp",
      title: "Access to Government Schemes and Grants",
      text: "A compliant Producer Company (often recognized as a Farmer Producer Organization or FPO) is eligible for various central and state government schemes, subsidies, and grants (such as those from NABARD or SFAC) specifically designed to support rural livelihoods.",
    },
    {
      icon: "Award",
      title: "Enhanced Creditworthiness",
      text: "Regular filing of audited financial statements and annual returns builds a transparent track record. This significantly enhances the company's credibility with banks and financial institutions, making it easier to secure loans for infrastructure and working capital.",
    },
    {
      icon: "Activity",
      title: "Democratic Governance and Transparency",
      text: "Compliance mandates, such as holding regular Board Meetings and an Annual General Meeting (AGM), ensure that the member-producers are actively involved in the decision-making process, promoting transparency and trust within the collective.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertCircle",
      title: "High Administrative and Audit Costs",
      text: "Every Producer Company must undergo a mandatory annual audit by a Chartered Accountant, regardless of its turnover. This, along with the requirement for professional help for MCA filings, represents a fixed cost that can be burdensome for small farmer groups.",
    },
    {
      icon: "Activity",
      title: "Regulatory Complexity",
      text: "Navigating the dual requirements of cooperative principles and corporate law can be complex. Maintaining detailed statutory registers (like the register of produce) and meeting strict MCA deadlines requires specialized administrative expertise.",
    },
    {
      icon: "Lock",
      title: "Strict Object Clause Restrictions",
      text: "Producer Companies are legally restricted to activities related to 'primary produce' (production, harvesting, procurement, etc.). Engaging in any commercial activity outside these specified objects can lead to regulatory notices and penalties.",
    },
    {
      icon: "FileWarning",
      title: "Risk of Severe Penalties",
      text: "Failure to comply with mandatory filings (AOC-4 and MGT-7) leads to heavy per-day penalties. Persistent non-compliance can even lead to the Registrar of Companies (ROC) striking off the company's name from the register.",
    },
  ],
  eligibility: [
    {
      title: "Mandatory Governance Criteria",
      items: [
        "**Board Meetings:** Mandatory requirement to hold a minimum of four board meetings every year, with a gap of not more than 120 days between two meetings.",
        "**Annual General Meeting (AGM):** Must be held within six months from the date of the closing of the financial year to adopt audited accounts.",
        "**Quorum Requirements:** For an AGM, the quorum is typically one-fourth of the total number of members, ensuring democratic participation.",
      ],
    },
    {
      title: "Financial and Audit Criteria",
      items: [
        "**Statutory Audit:** Compulsory annual audit of the company's books of accounts by a practicing Chartered Accountant is mandatory for all Producer Companies.",
        "**Internal Audit:** Mandatory requirement for a Producer Company to conduct an internal audit at specific intervals as prescribed by the board.",
        "**Qualifying Produce:** The company must ensure that its primary activities remain centered around the produce of its members.",
      ],
    },
    {
      title: "Filing and Disclosure Criteria",
      items: [
        "**Form AOC-4:** Mandatory filing of the audited financial statements, including the Balance Sheet and P&L account, within 30 days of the AGM.",
        "**Form MGT-7:** Compulsory filing of the Annual Return detailing the company's membership and shareholding within 60 days of the AGM.",
        "**Director KYC:** Annual mandatory KYC filing (DIR-3 KYC) for all directors to keep their Director Identification Numbers (DIN) active.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Governance Records",
      content: {
        title: "Internal statutory documents",
        items: [
          "Minutes of all Board Meetings and the Annual General Meeting (AGM).",
          "Updated Statutory Registers (Register of Members, Directors, and Shareholding).",
          "Register of Primary Produce (detailing produce handled and member contributions).",
          "Updated Memorandum and Articles of Association (MOA & AOA).",
          "Share Certificates issued to member-producers.",
        ],
      },
    },
    {
      tabTitle: "Financial Records",
      content: {
        title: "For statutory audit and filing",
        items: [
          "Audited Financial Statements (Balance Sheet and Profit & Loss Account).",
          "Statutory Auditor's Report and Internal Audit Report.",
          "Directors' Report (detailing performance, state of affairs, and dividend info).",
          "Notice of the AGM and the attendance register of members.",
          "Bank Statements and vouchers for all financial transactions.",
        ],
      },
    },
    {
      tabTitle: "Director & KYC",
      content: {
        title: "For annual individual updates",
        items: [
          "PAN Card and Aadhaar Card of all Directors and the CEO.",
          "Latest passport-size photographs and active contact details.",
          "Form DIR-3 KYC (Annual filing confirmation for all directors).",
          "Digital Signature Certificates (DSC) of the authorized directors.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Bookkeeping and Finalization",
      description: "Maintain and finalize the books of accounts, including detailed records of transactions with member-producers for the financial year.",
    },
    {
      step: 2,
      title: "Statutory and Internal Audit",
      description: "Appoint a Chartered Accountant to conduct the statutory audit and ensure an internal audit is completed as per board mandates.",
    },
    {
      step: 3,
      title: "Board Approval",
      description: "Hold a Board Meeting to review and approve the audited financial statements, the Directors' Report, and the AGM notice.",
    },
    {
      step: 4,
      title: "Annual General Meeting",
      description: "Conduct the AGM where the member-producers formally adopt the audited accounts and approve any dividend/bonus payments.",
    },
    {
      step: 5,
      title: "MCA Annual Filings",
      description: "Submit Form AOC-4 (Financials) and Form MGT-7 (Annual Return) to the Registrar of Companies (ROC) within the prescribed timelines.",
    },
  ],
  fees: [],
  feesMarkdown: `
Producer Company compliance fees are structured to be accessible for farmer collectives but vary based on the scale of operations.

### Annual Professional Compliance Table

| Compliance Service | Applicability | Estimated Professional Fee | Key Factors Affecting Cost |
| --- | --- | --- | --- |
| Statutory Audit | Mandatory for all Producer Cos | Rs.10,000 to Rs.30,000+ | Volume of member transactions and produce. |
| MCA Annual Filings | AOC-4 and MGT-7 | Rs.7,500 to Rs.15,000 | Number of directors and complexity of records. |
| Income Tax Filing (ITR) | Mandatory Annual Filing | Rs.5,000 to Rs.12,000 | Profit volume and tax audit requirements. |
| Director KYC (DIR-3) | Per Director | Rs.1,500 to Rs.3,000 | Number of directors needing updates. |

### Statutory Government (MCA) Fees & Penalties

*   **MCA Filing Fee:** Generally nominal (₹200 - ₹600) based on the company's authorized capital.
*   **Late Filing Penalty:** ₹100 per day per form (AOC-4 and MGT-7) with no upper limit.
*   **Non-Compliance Fine:** The company and defaulting officers can face fines of ₹50,000 or more for persistent non-filing.
`,
  faqs: [
    {
      q: "Can a Producer Company engage in activities other than farming?",
      a: "Yes, provided they are related to **primary produce**, such as processing, marketing, storage, and providing financial services to its members.",
    },
    {
      q: "How many directors are required in a Producer Company?",
      a: "A Producer Company must have a minimum of **five directors** and a maximum of fifteen.",
    },
    {
      q: "What happens if we miss the 30-day deadline for AOC-4?",
      a: "An immediate penalty of **₹100 per day** starts accruing from the 31st day, which must be paid at the time of filing the form.",
    },
  ],
};
