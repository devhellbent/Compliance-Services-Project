// lib/data/services/mca/company_compliance/public-limited-company-compliance.ts

import { ServiceData } from "@/lib/types";

export const publicLimitedCompanyComplianceData: ServiceData = {
  title: "Public Limited Company Compliance",
  breadcrumb: ["Home", "MCA", "Public Limited Compliance"],
  description:
    "Public Limited Company (PLC) compliance ensures transparency, accountability, and governance for companies raising capital from the general public.",
  overview: `Public Limited Company (PLC) compliance refers to the mandatory legal and regulatory requirements that a PLC must adhere to, primarily under the Companies Act, 2013 in India. These compliances are crucial for maintaining transparency, accountability, and corporate governance, especially since PLCs have the unique ability to raise capital from the general public.

### Core Categories of PLC Compliance

PLC compliance is generally divided into three main areas based on when the obligation is triggered:

#### Annual Compliances (Yearly Filing and Activities)
*   **Annual General Meeting (AGM):** Must hold a meeting of shareholders once a year to approve accounts, appoint auditors, and discuss important matters.
*   **Filing of Financial Statements (AOC-4):** Audited financial statements filed with the ROC.
*   **Filing of Annual Return (MGT-7):** Comprehensive summary of directors, shareholders, board meetings, and shareholding structure.
*   **Income Tax Return:** Filing the corporate income tax return.
*   **Director KYC (DIR-3 KYC):** Annual KYC filing for every director with a DIN.

#### Event-Based Compliances
*   **Changes in Directorship (DIR-12):** Filing appointment, resignation, or removal of any director.
*   **Share Allotment (PAS-3):** Return of allotment whenever new shares are issued.
*   **Special Resolutions (MGT-14):** Critical shareholder decisions like altering the object clause or reducing share capital.
*   **Change in Registered Office (INC-22):** Notifying authorities of a shift in the company's official address.

#### Statutory Meetings and Governance
*   **Board Meetings:** Minimum four Board Meetings per year, with a gap of no more than 120 days between any two meetings.
*   **Maintenance of Records:** Statutory registers (Register of Members, Register of Directors), minute books, and other key documents at the registered office.
*   **Disclosure of Interest:** Directors must disclose their interest in other companies or firms at the beginning of every financial year.`,
  advantages: [
    {
      icon: "Award",
      title: "Enhanced Credibility and Trust",
      text: "Regular, audited financial reporting and adherence to strict corporate governance codes build strong public and investor confidence. The 'PLC' designation signals a stable, rigorously regulated entity, which improves dealings with banks and global vendors.",
    },
    {
      icon: "TrendingUp",
      title: "Greater Access to Capital",
      text: "Compliance is a prerequisite for being publicly listed and issuing shares through an Initial Public Offering (IPO). This provides a massive advantage in raising large amounts of capital for expansion that is typically unavailable to private entities.",
    },
    {
      icon: "Shield",
      title: "Improved Corporate Governance",
      text: "Mandates such as independent directors, audit committees, and mandatory board/shareholder meetings professionalize the management structure. This provides checks and balances that protect the interests of all minority stakeholders.",
    },
    {
      icon: "Activity",
      title: "Share Liquidity and Valuation",
      text: "Transparency and high governance standards make the company's shares attractive to institutional investors. Shares are more easily transferable (liquid), and their value is based on publicly available, regulated information, leading to higher valuations.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertCircle",
      title: "High Administrative and Financial Cost",
      text: "PLCs face the highest compliance costs in the corporate world. This includes mandatory statutory audits, secretarial audits, and the administrative effort required to meet continuous reporting deadlines.",
    },
    {
      icon: "Lock",
      title: "Loss of Operational Privacy",
      text: "PLCs must disclose sensitive financial data, executive compensation, and strategic business details to the public. This lack of privacy means competitors can easily access performance metrics and strategies.",
    },
    {
      icon: "UserMinus",
      title: "Reduced Control for Promoters",
      text: "By selling shares to the public, original founders concede control. Major decisions require shareholder approval, and compliance ensures shareholders have voting rights, which can dilute the founders' influence.",
    },
    {
      icon: "Clock",
      title: "Risk of Severe Penalties",
      text: "Failure to comply with mandatory filings leads to heavy per-day penalties. Persistent non-compliance can even lead to the Registrar of Companies (ROC) striking off the company's name or liquidating the entity.",
    },
  ],
  eligibility: [
    {
      title: "Mandatory Governance Criteria",
      items: [
        "**Minimum Directors:** Must maintain a minimum of three directors (Section 149(1)(a) of the Companies Act).",
        "**Resident Director:** At least one director must have stayed in India for ≥182 days in the previous calendar year.",
        "**Board Meetings:** Minimum of four board meetings annually with a gap of no more than 120 days between two meetings.",
        "**Company Secretary:** Mandatory to appoint a full-time CS if the paid-up share capital is ₹10 Crore or more.",
      ],
    },
    {
      title: "Threshold-Based Compliance Criteria",
      items: [
        "**Independent Directors:** Required if paid-up capital ≥₹10 Cr or turnover ≥₹100 Cr (for unlisted public companies).",
        "**Woman Director:** Mandatory if paid-up capital ≥₹100 Cr or turnover ≥₹300 Cr.",
        "**Internal Auditor:** Required if turnover ≥₹200 Cr or outstanding loans/deposits ≥₹100 Cr.",
        "**CSR Spending:** Mandatory if net worth ≥₹500 Cr, turnover ≥₹1000 Cr, or net profit ≥₹5 Cr.",
      ],
    },
    {
      title: "Filing and Audit Criteria",
      items: [
        "**Statutory Audit:** Compulsory annual audit of the financial statements by a practicing Chartered Accountant.",
        "**Secretarial Audit:** Mandatory (Form MR-3) if paid-up capital ≥₹50 Crore or turnover ≥₹250 Crore.",
        "**Form AOC-4:** Filing of audited financial statements with the ROC within 30 days of the AGM.",
        "**Form MGT-7:** Filing of the Annual Return with the ROC within 60 days of the AGM.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Statutory Records",
      content: {
        title: "Permanent records at office",
        items: [
          "Minutes Books of Board, Committee, and General Meetings (AGM/EGM).",
          "Register of Members (MGT-1) and Register of Directors/KMP.",
          "Register of Charges (CHG-7) and Register of Deposits (DPT-3).",
          "Register of Contracts with Related Parties (MBP-4).",
          "Annual Disclosures of Interest by Directors (MBP-1 & DIR-8).",
        ],
      },
    },
    {
      tabTitle: "Annual Reports",
      content: {
        title: "For shareholder approval",
        items: [
          "Audited Financial Statements (Balance Sheet, P&L, Cash Flow).",
          "Consolidated Financial Statements (if subsidiaries exist).",
          "Board/Directors' Report with CSR and performance reviews.",
          "Statutory Auditor's Report and Secretarial Audit Report (MR-3).",
          "Notice of the Annual General Meeting (AGM).",
        ],
      },
    },
    {
      tabTitle: "MCA E-Forms",
      content: {
        title: "Required for ROC filing",
        items: [
          "Form AOC-4 (Financials) and Form MGT-7 (Annual Return).",
          "Form MGT-14 (Filing of Special Resolutions).",
          "Form DIR-3 KYC (Annual Director KYC).",
          "Form ADT-1 (Notice of Auditor Appointment).",
          "Form DPT-3 (Return of Deposits).",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Audit and Finalization",
      description: "Finalize books of accounts and conduct the mandatory Statutory Audit and Secretarial Audit (if applicable) by practicing professionals.",
    },
    {
      step: 2,
      title: "Board Approval",
      description: "Hold a board meeting to approve the audited financials, the Directors' Report, and call for the Annual General Meeting (AGM).",
    },
    {
      step: 3,
      title: "Annual General Meeting",
      description: "Conduct the AGM within 6 months of the financial year-end to adopt the accounts and re-appoint directors or auditors as needed.",
    },
    {
      step: 4,
      title: "AOC-4 Filing",
      description: "Submit the audited financial statements to the Registrar of Companies (ROC) within 30 days of the AGM.",
    },
    {
      step: 5,
      title: "MGT-7 Filing",
      description: "Submit the Annual Return containing shareholding details and governance data to the ROC within 60 days of the AGM.",
    },
  ],
  fees: [],
  feesMarkdown: `
Public Limited Company compliance fees are tiered based on authorized capital and the complexity of statutory audits.

### Annual Professional Compliance Table

| Compliance Service | Applicability | Estimated Professional Fee | Key Factors Affecting Cost |
| --- | --- | --- | --- |
| Statutory Audit | Mandatory for all PLCs | Rs.25,000 to Rs.1,00,000+ | Turnover volume and business units. |
| MCA Annual Filings | AOC-4 and MGT-7 | Rs.15,000 to Rs.40,000 | Number of resolutions and directors. |
| Secretarial Audit | Large Public Companies | Rs.15,000 to Rs.35,000 | Complexity of secretarial records. |
| Income Tax Filing | Mandatory Annual Filing | Rs.7,500 to Rs.20,000 | Profit volume and Tax Audit needs. |

### Government (MCA) Statutory Fees

| Authorized Share Capital | ROC Fee (Per Form) | Late Filing Penalty |
| --- | --- | --- |
| Up to ₹1 Lakh | ₹200 | ₹100 per day per form |
| ₹1 Lakh to ₹5 Lakh | ₹300 | ₹100 per day per form |
| ₹5 Lakh to ₹25 Lakh | ₹400 | ₹100 per day per form |
| ₹25 Lakh to ₹1 Crore | ₹500 | ₹100 per day per form |
| ₹1 Crore or more | ₹600 | ₹100 per day per form |

*Note: The late fee of ₹100/day for AOC-4 and MGT-7 typically has no maximum cap.*
`,
  faqs: [
    {
      q: "Is it mandatory to have a Company Secretary (CS) in a Public Limited Company?",
      a: "Yes, if the **paid-up share capital** is ₹10 Crore or more, a full-time CS must be appointed to oversee compliance.",
    },
    {
      q: "What is a Secretarial Audit and is it mandatory for all PLCs?",
      a: "A Secretarial Audit is a check of compliance with **all corporate laws**. It is mandatory for every Public Company with paid-up capital ≥₹50 Crore or turnover ≥₹250 Crore.",
    },
    {
      q: "What happens if a PLC fails to hold its AGM on time?",
      a: "Failure to hold an AGM is a serious default. It can lead to **heavy penalties** on the company and directors, and the NCLT can be petitioned to call the meeting.",
    },
  ],
};
