// lib/data/services/mca/company_compliance/opc-compliance.ts

import { ServiceData } from "@/lib/types";

export const opcComplianceData: ServiceData = {
  title: "OPC Compliance",
  breadcrumb: ["Home", "MCA", "OPC Compliance"],
  description:
    "OPC Compliance refers to the mandatory legal and statutory obligations that a One Person Company must fulfill annually to maintain its legal status.",
  overview: `OPC Compliance refers to the mandatory legal and statutory obligations that a One Person Company (a private limited company structure in India with only one member) must fulfill annually. These requirements are set out primarily by the Companies Act, 2013 and are essential for the company to maintain its active legal status, limited liability, and credibility.

### Key Compliance Requirements

The core compliance requirements revolve around financial and administrative filings with the Registrar of Companies (ROC). Key obligations include the annual Statutory Audit of accounts, filing Financial Statements (Form AOC-4), and filing the Annual Return (Form MGT-7A). The sole director must also complete their annual Director KYC (Form DIR-3 KYC) to keep their Director Identification Number (DIN) active.

### Compliance Requirements Post-Incorporation

*   **Commencement of Business (INC-20A):** Cannot start business activities until this declaration is filed within 180 days of incorporation.
*   **Appointment of Auditor:** Must appoint the first Statutory Auditor within 30 days of incorporation.

### Annual Statutory (MCA/ROC) Compliances

*   **Filing of Financial Statements (Form AOC-4):** Includes the Audited Balance Sheet, Profit & Loss Statement, and Director's Report. OPCs are exempted from preparing a Cash Flow Statement. Due within 180 days from closure of the Financial Year.
*   **Filing of Annual Return (Form MGT-7A):** Overview of the company's structure, directorship, and shareholding. Due within 60 days from the date of filing AOC-4.
*   **Director KYC (Form DIR-3 KYC):** Annual update of DIN details, due by September 30th.
*   **Return of Deposits (Form DPT-3):** Report of all outstanding loans or advances, due by June 30th.
*   **Board Meetings:** Minimum one Board Meeting in each half of the calendar year with a gap of ≥90 days. If the OPC has only one director, the resolution entered in the minute book is sufficient.

### Mandatory Conversion Criteria

If the OPC crosses specific financial thresholds, it must convert into either a Private Limited Company or a Public Limited Company within six months:
*   **Paid-up Share Capital** exceeds ₹50 Lakhs, OR
*   **Average Annual Turnover** exceeds ₹2 Crore during the immediately preceding three consecutive financial years.`,
  advantages: [
    {
      icon: "Shield",
      title: "Limited Liability and Personal Protection",
      text: "Compliance maintains the status of the OPC as a Separate Legal Entity. This shields the owner's personal assets from the business's debts and liabilities, a protection not available to sole proprietors.",
    },
    {
      icon: "TrendingUp",
      title: "Enhanced Credibility and Funding",
      text: "A compliant OPC has a professional corporate image that builds trust with major vendors and clients. Banks prefer lending to registered companies with transparent, audited financial statements, making loans easier to secure.",
    },
    {
      icon: "Activity",
      title: "Simplified Governance Structure",
      text: "OPCs enjoy relaxed compliance compared to regular Private Limited Companies. They are typically exempt from holding Annual General Meetings (AGMs) and require only two board meetings a year, saving time and administrative costs.",
    },
    {
      icon: "Award",
      title: "Perpetual Succession and Continuity",
      text: "By maintaining compliance and appointing a nominee, an OPC ensures the business continues to exist even if the sole member becomes incapacitated or passes away, safeguarding the brand's future.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertCircle",
      title: "Mandatory Statutory Audit",
      text: "Every OPC, regardless of turnover or profit, must have its accounts audited by a practicing Chartered Accountant annually, which is a fixed recurring expense for the business.",
    },
    {
      icon: "ShieldAlert",
      title: "Mandatory Conversion Triggers",
      text: "If the OPC's average annual turnover exceeds ₹2 Crore or paid-up capital exceeds ₹50 Lakh, it is legally required to convert into a Private Limited Company, increasing future compliance costs.",
    },
    {
      icon: "Clock",
      title: "Heavy Late Filing Penalties",
      text: "Late filing of mandatory ROC forms (AOC-4 and MGT-7A) attracts a penalty of ₹100 per day per form. Delays in Director KYC (DIR-3 KYC) result in a flat ₹5,000 penalty.",
    },
    {
      icon: "FileWarning",
      title: "Risk of Strike-Off",
      text: "Persistent failure to file annual returns can lead the Registrar of Companies (ROC) to strike off the OPC's name from the register, leading to the termination of the business's legal existence.",
    },
  ],
  eligibility: [
    {
      title: "Post-Incorporation Compliance Criteria",
      items: [
        "**Commencement of Business:** Mandatory filing of Form INC-20A within 180 days of incorporation to start business operations.",
        "**Statutory Auditor:** Compulsory appointment of the first Statutory Auditor within 30 days of registration.",
        "**Registered Office:** Must maintain a registered office and display the company name and CIN prominently at the location.",
      ],
    },
    {
      title: "Annual Statutory Filing Criteria",
      items: [
        "**Form AOC-4:** Mandatory filing of the audited Balance Sheet and P&L account within 180 days from the close of the financial year.",
        "**Form MGT-7A:** Compulsory filing of the Annual Return detailing shareholding and management within 60 days of filing AOC-4.",
        "**Director KYC:** Annual mandatory filing of DIR-3 KYC (or web-based KYC) for the sole director by September 30th.",
      ],
    },
    {
      title: "Board Governance Criteria",
      items: [
        "**Board Meetings:** Minimum requirement to hold at least one Board Meeting in each half of a calendar year, with a gap of ≥90 days.",
        "**Exemption:** If the OPC has only one director, it is exempt from the requirement of holding board meetings.",
        "**Minute Books:** Mandatory requirement to maintain a minute book of all resolutions passed by the sole member or director.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Audit & Financials",
      content: {
        title: "Working documents for the Auditor",
        items: [
          "Complete Bank Statements for the financial year.",
          "Sales, Purchase, and Expense Invoices / Vouchers.",
          "GST Returns and reconciliation data (if applicable).",
          "Details of Fixed Assets and any loans taken by the company.",
          "Director's disclosure of interest in other entities.",
        ],
      },
    },
    {
      tabTitle: "MCA Attachments",
      content: {
        title: "Mandatory forms attachments",
        items: [
          "Audited Balance Sheet and Profit & Loss Statement.",
          "Statutory Auditor's Report (certified by a CA).",
          "Director's Report with mandatory financial disclosures.",
          "Nominee's consent and details (if there's a change).",
          "Digital Signature (DSC) of the director and the auditor.",
        ],
      },
    },
    {
      tabTitle: "Director & Nominee",
      content: {
        title: "For DIN and Legal maintenance",
        items: [
          "PAN Card and Aadhaar Card of the Director.",
          "Latest passport-sized photograph of the Director.",
          "Active Mobile Number and Email ID for OTP verification.",
          "Identity and address proofs of the Nominee member.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Statutory Audit",
      description: "Appoint a Chartered Accountant to audit the company's books and prepare the mandatory Balance Sheet and Profit & Loss statement.",
    },
    {
      step: 2,
      title: "Board Approval",
      description: "Hold a board meeting to review the audited financials and approve the Director's Report detailing the company's performance.",
    },
    {
      step: 3,
      title: "AOC-4 Submission",
      description: "File the audited financial statements and auditor's report on the MCA portal within 180 days of the financial year-end.",
    },
    {
      step: 4,
      title: "MGT-7A Submission",
      description: "Complete and file the Annual Return summarizing the company's management and shareholding status within 60 days of AOC-4 filing.",
    },
    {
      step: 5,
      title: "Director KYC",
      description: "Complete the mandatory annual DIR-3 KYC for the director before the September 30th deadline to keep the DIN active.",
    },
  ],
  fees: [],
  feesMarkdown: `
The compliance cost for an OPC involves professional audit fees and statutory filing charges based on capital.

### Annual Professional Compliance Table

| Compliance Service | Applicability | Estimated Professional Fee (Annual) | Key Factors Affecting Cost |
| --- | --- | --- | --- |
| Statutory Audit (CA) | Mandatory for all OPCs | Rs.10,000 to Rs.20,000 | Volume of transactions and complexity. |
| MCA Annual Filings | AOC-4 and MGT-7A | Rs.5,000 to Rs.10,000 | Preparation of Director's Report. |
| Director KYC (DIR-3) | Mandatory for Director | Rs.1,000 to Rs.2,500 | Timely filing vs penalty cases. |
| Income Tax Return | ITR-6 Mandatory filing | Rs.5,000 to Rs.12,000 | Complexity of business and turnover. |

### Statutory Government (MCA) Filing Fees

| Paid-Up Capital Threshold | AOC-4 / MGT-7A Fee (Each) | Late Filing Penalty |
| --- | --- | --- |
| Less than ₹1,00,000 | ₹200 | ₹100 per day per form |
| ₹1,00,000 to ₹4,99,999 | ₹300 | ₹100 per day per form |
| ₹5,00,000 to ₹24,99,999 | ₹400 | ₹100 per day per form |
| ₹25,00,000 or more | ₹600 | ₹100 per day per form |

*Note: Late filing of DIR-3 KYC attracts a flat penalty of ₹5,000.*
`,
  faqs: [
    {
      q: "Does an OPC need to hold an Annual General Meeting (AGM)?",
      a: "No. Under the Companies Act 2013, One Person Companies are specifically **exempted from holding AGMs**.",
    },
    {
      q: "What are the mandatory conversion limits for an OPC?",
      a: "Conversion to a Private Limited Company is mandatory if **Paid-up Capital exceeds ₹50 Lakh** OR **Average Annual Turnover exceeds ₹2 Crore**.",
    },
    {
      q: "Can I file AOC-4 and MGT-7A without a CA?",
      a: "No. These forms require the **Digital Signature (DSC) of a Statutory Auditor** (Chartered Accountant) to certify the financial statements.",
    },
  ],
};
