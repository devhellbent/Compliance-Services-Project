// lib/data/services/mca/company_compliance/private-limited-compliance.ts

import { ServiceData } from "@/lib/types";

export const privateLimitedComplianceData: ServiceData = {
  title: "Private Limited Compliance",
  breadcrumb: ["Home", "MCA", "Private Limited Compliance"],
  description:
    "Compliance for a Private Limited Company is mandatory under the Companies Act, 2013, to maintain its active status, limited liability, and credibility.",
  overview: `Compliance for a Private Limited Company is mandatory under the Companies Act, 2013, to maintain its active status, limited liability, and credibility. Regardless of size, all private companies must file the Annual Return (MGT-7/7A) and Financial Statements (AOC-4), conduct a Statutory Audit, and file a Corporate Income Tax Return (ITR-6).

### Annual Compliance (The Yearly Cycle)

These tasks must be performed every financial year (April 1st to March 31st):

*   **Board Meetings:** At least four Board Meetings in a calendar year, with a gap of no more than 120 days between consecutive meetings. Proper minutes must be maintained.
*   **Annual General Meeting (AGM):** Must be conducted once a year by September 30th to adopt audited financial statements, appoint auditors, and transact other ordinary business.
*   **Statutory Audit:** All Private Limited Companies must appoint a Statutory Auditor (practicing CA). The appointment must be intimated to the RoC using Form ADT-1 within 15 days of the AGM.
*   **Filing of Financial Statements (AOC-4):** Audited Balance Sheet, Profit & Loss Account, and Director's Report filed within 30 days of the AGM.
*   **Filing of Annual Return (MGT-7/MGT-7A):** Shareholding pattern, directors, and changes filed within 60 days of the AGM.
*   **Director KYC (DIR-3 KYC):** Annual KYC for every individual holding a DIN, due by September 30th.
*   **Income Tax Return (ITR-6):** Corporate Income Tax Return due by September 30th (if tax audit applicable).

### Event-Based Compliance

These filings are triggered only when a specific change or event occurs:

*   **Change in Leadership:** Appointment, resignation, or change in Director/KMP details requires filing Form DIR-12.
*   **Share Allotment:** Issuance of new shares requires Form PAS-3.
*   **Charge Creation/Modification:** Secured loans must be registered via Form CHG-1 or CHG-9.
*   **Special Resolutions:** Altering the MoA or AoA requires Form MGT-14 within 30 days.

### Other Regulatory Compliance

*   **GST:** Timely filing of monthly, quarterly, or annual GST returns if registered.
*   **TDS/TCS:** Timely deposits and filing of quarterly returns.
*   **Labour Laws:** Obligations under EPF, ESI, and Professional Tax laws based on employee count and location.`,
  advantages: [
    {
      icon: "Shield",
      title: "Protection of Separate Legal Entity",
      text: "Maintaining strict compliance ensures the 'Corporate Veil' remains intact. This shields the personal assets of the directors and shareholders from the company's financial liabilities and legal obligations.",
    },
    {
      icon: "Activity",
      title: "Structured Corporate Governance",
      text: "Adhering to mandatory requirements like holding four Board Meetings and an Annual General Meeting (AGM) formalizes the decision-making process, creating a professional and accountable management environment.",
    },
    {
      icon: "TrendingUp",
      title: "Investor and Lender Confidence",
      text: "Compliance is a prerequisite for any external funding. Venture Capitalists (VCs) and banks perform thorough due diligence on statutory records (AOC-4/MGT-7) before sanctioning investments or business loans.",
    },
    {
      icon: "CheckCircle",
      title: "Eligibility for Government Incentives",
      text: "Only compliant companies can apply for or maintain 'DPIIT Startup' recognition, which unlocks significant tax exemptions, patent subsidies, and relaxed labor law requirements.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertCircle",
      title: "Highest Recurring Compliance Costs",
      text: "Private limited companies face the most complex compliance burden, including mandatory statutory audits, maintaining multiple statutory registers, and filing various event-based forms.",
    },
    {
      icon: "Clock",
      title: "Infinite Penalty Accumulation",
      text: "Late filing of mandatory ROC forms attracts a penalty of ₹100 per day per form with no upper limit. A one-year delay for two forms can result in over ₹70,000 in penalties.",
    },
    {
      icon: "UserX",
      title: "Director KYC Penalties",
      text: "Any delay in filing the annual DIR-3 KYC beyond September 30th results in a flat penalty of ₹5,000 per director to re-activate their DIN status.",
    },
    {
      icon: "FileWarning",
      title: "Risk of Strike-Off",
      text: "Failure to file annual returns for two or more consecutive years can lead to the Registrar of Companies (ROC) striking off the company's name, ending its legal existence.",
    },
  ],
  eligibility: [
    {
      title: "Mandatory Post-Incorporation Criteria",
      items: [
        "**Form INC-20A:** Mandatory filing of the Declaration of Commencement of Business within 180 days of incorporation.",
        "**Statutory Auditor:** Compulsory appointment of the first Statutory Auditor within 30 days of registration.",
        "**Board Meetings:** Mandatory requirement to hold a minimum of four board meetings annually, with a gap of not more than 120 days.",
      ],
    },
    {
      title: "Annual Statutory Filing Criteria",
      items: [
        "**Statutory Audit:** Compulsory annual audit of the financial statements by a practicing Chartered Accountant (CA).",
        "**Form AOC-4:** Mandatory filing of the audited financial statements within 30 days of the Annual General Meeting (AGM).",
        "**Form MGT-7/7A:** Compulsory filing of the Annual Return detailing shareholding and management within 60 days of the AGM.",
        "**Director KYC:** Annual mandatory verification of DIN details for every director via Form DIR-3 KYC.",
      ],
    },
    {
      title: "Small Company and Startup Thresholds",
      items: [
        "**Small Company:** Paid-up capital ≤₹4 Crores AND Turnover ≤₹40 Crores (enjoys relaxed board meeting and filing rules).",
        "**DPIIT Recognized Startup:** Must be within 10 years of incorporation and turnover not exceeding ₹100 Crores (enjoys significant tax and labor law relaxations).",
        "**Company Secretary:** Mandatory to appoint a full-time CS if the paid-up share capital is ₹10 Crore or more.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Statutory Records",
      content: {
        title: "Internal records to maintain",
        items: [
          "Register of Members (MGT-1): Details of all shareholders.",
          "Register of Directors & KMP: List of all officers and their DINs.",
          "Minute Books: Signed records of Board and General Meetings (AGM/EGM).",
          "Register of Charges (CHG-7): Details of secured loans/mortgages.",
          "Photos of Registered Office (Inside/Outside view with display board).",
        ],
      },
    },
    {
      tabTitle: "Annual Statutory",
      content: {
        title: "Attachments for AOC-4 & MGT-7",
        items: [
          "Audited Balance Sheet and Statement of Profit & Loss.",
          "Statutory Auditor's Report and detailed Notes to Accounts.",
          "Board's Report: Including performance review and mandatory disclosures.",
          "List of Shareholders as of March 31st.",
          "Notice of the Annual General Meeting (AGM).",
        ],
      },
    },
    {
      tabTitle: "Director & KYC",
      content: {
        title: "Forms from each director",
        items: [
          "Form MBP-1: Annual disclosure of interest in other entities.",
          "Form DIR-8: Declaration of non-disqualification under Companies Act.",
          "Digital Signature Certificate (DSC) of all directors.",
          "Identity and address proofs for DIR-3 KYC filing.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Statutory Audit Process",
      description: "Appoint a Statutory Auditor and conduct the annual audit of the company's financial statements after the financial year ends.",
    },
    {
      step: 2,
      title: "Board and AGM",
      description: "Hold a Board Meeting to approve the financials and then conduct the AGM (within 6 months of FY end) for shareholder approval.",
    },
    {
      step: 3,
      title: "Form AOC-4 Submission",
      description: "Submit the audited financial statements, auditor's report, and board report to the MCA within 30 days of the AGM.",
    },
    {
      step: 4,
      title: "Form MGT-7 Submission",
      description: "Complete and file the comprehensive Annual Return detailing shareholding and governance data within 60 days of the AGM.",
    },
    {
      step: 5,
      title: "Tax and KYC Completion",
      description: "File the Corporate Income Tax Return (ITR-6) and complete the DIR-3 KYC for all directors before their respective deadlines.",
    },
  ],
  fees: [],
  feesMarkdown: `
Private Limited compliance involves government filing fees (based on capital) and professional fees for audits and records.

### Annual Professional Compliance Table

| Compliance Service | Applicability | Estimated Professional Fee (Annual) | Key Factors Affecting Cost |
| --- | --- | --- | --- |
| Statutory Audit (CA) | Mandatory for all PLCs | Rs.15,000 to Rs.40,000+ | Volume of transactions and complexity. |
| MCA Annual Filings | AOC-4 and MGT-7 | Rs.8,000 to Rs.25,000+ | Number of directors and meetings held. |
| Comprehensive Service | Bookkeeping / GST / TDS | Rs.25,000 to Rs.60,000+ | Frequency of reporting and transaction count. |
| Director KYC (DIR-3) | Per Director | Rs.1,500 to Rs.3,000 | Timely filing vs penalty cases. |

### Statutory Government (MCA) Filing Fees

| Authorized Share Capital | Normal ROC Fee (Per Form) | Late Filing Penalty |
| --- | --- | --- |
| Less than ₹1,00,000 | ₹200 | ₹100 per day per form |
| ₹1,00,000 to ₹4,99,999 | ₹300 | ₹100 per day per form |
| ₹5,00,000 to ₹24,99,999 | ₹400 | ₹100 per day per form |
| ₹25,00,000 or more | ₹600 | ₹100 per day per form |

*Note: DIR-3 KYC has NIL government fee if filed on time, otherwise a ₹5,000 penalty applies.*
`,
  faqs: [
    {
      q: "What is a 'Small Company' for compliance purposes?",
      a: "A company with **Paid-up Capital <₹4 Crores** AND **Turnover <₹40 Crores**. They enjoy relaxations like fewer board meetings.",
    },
    {
      q: "What happens if I miss the AGM deadline?",
      a: "Missing the AGM requires applying for an extension with the ROC. Failure to hold it can lead to heavy penalties for the company and directors.",
    },
    {
      q: "Is a Cash Flow Statement mandatory for all companies?",
      a: "**Small Companies** and **DPIIT Recognized Startups** (for the first 5 years) are generally exempted from preparing a Cash Flow Statement.",
    },
  ],
};
