// lib/data/services/mca/company_compliance/society-compliance.ts

import { ServiceData } from "@/lib/types";

export const societyComplianceData: ServiceData = {
  title: "Society Compliance Services",
  breadcrumb: ["Home", "MCA", "Society Compliance"],
  description:
    "Society compliance ensures accountability, maintains legal status, and secures tax exemptions for organizations registered under the Societies Registration Act.",
  overview: `Society compliance refers to the mandatory set of legal, financial, and administrative requirements that an organization registered under the Societies Registration Act, 1860, must fulfill. Essentially, compliance serves to ensure accountability to members and the public, maintain the society's legal identity, and protect its tax-exempt status under Section 12AB.

### Objectives of Society Compliance

The objectives of Society compliance are the goals that an organization registered under the Societies Registration Act, 1860, aims to achieve by adhering to all legal, financial, and administrative requirements.

#### Ensuring Legal Validity and Continuity
*   **Maintaining Legal Existence:** Timely filing of documents, especially the Annual List of the Governing Body and audited accounts with the Registrar of Societies, prevents the organization from being declared defunct or having its registration canceled.
*   **Protecting Tax Exemption (12AB):** Adherence to the Income Tax Act, 1961, by filing ITR-7 and the Audit Report (Form 10B), guarantees that the society retains its crucial Section 12AB status.
*   **Mitigating Penalties:** Strict compliance helps the society avoid heavy financial fines, legal action, and the withdrawal of essential statutory licenses (like FCRA) that result from late or inaccurate submissions.

#### Establishing Accountability and Transparency
*   **Financial Accountability:** The requirement for a mandatory annual audit by a Chartered Accountant verifies that the society's funds are utilized solely for its stated charitable objectives.
*   **Public Credibility:** Regular submission of audited accounts to the Registrar and the Income Tax Department promotes transparency and strengthens the society's reputation among donors.
*   **Good Governance:** Compliance mandates, such as holding the Annual General Meeting (AGM) and maintaining detailed minutes, enforce a structured and ethical decision-making process.

#### Securing Funding and Resources
*   **Attracting Donors (80G):** Complying with Section 80G rules, particularly filing Form 10BD, allows the society to offer tax deductions to its donors.
*   **Accessing Grants:** Maintaining a clean compliance record is often mandatory for the society to successfully apply for and receive grants from government bodies and private foundations.
*   **Utilizing Foreign Contributions:** Full compliance with the Foreign Contribution (Regulation) Act (FCRA) allows the society to legally receive and utilize foreign grants by filing Form FC-4.`,
  advantages: [
    {
      icon: "Shield",
      title: "Legal Protection and Status",
      text: "Compliance ensures the society maintains its legal existence and perpetual succession. This means the organization continues regardless of changes in its members or governing body. Additionally, a registered society can legally hold, acquire, and transfer assets in its own name.",
    },
    {
      icon: "Award",
      title: "Financial Benefits and Fundraising",
      text: "The most significant advantage is retaining Section 12AB registration, exempting surplus income from taxation. Adhering to 80G rules also allows the society to offer tax benefits to donors, significantly enhancing its domestic fundraising capacity.",
    },
    {
      icon: "TrendingUp",
      title: "Access to Institutional Funding",
      text: "A history of timely compliance and clean audit reports are mandatory prerequisites for the society to successfully apply for grants from government bodies, Corporate Social Responsibility (CSR) arms, and international agencies.",
    },
    {
      icon: "Activity",
      title: "Governance and Transparency",
      text: "Mandatory annual audits ensure financial transparency and proper utilization of funds, building trust with stakeholders. Compliance mandates like holding AGMs and maintaining statutory registers enforce a structured management framework.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertCircle",
      title: "High Administrative and Financial Cost",
      text: "Ensuring compliance—record-keeping, audit preparation, and filing—is extremely time-consuming and resource-intensive. It diverts human resources away from core charitable activities and involves substantial professional fees for Chartered Accountants.",
    },
    {
      icon: "Activity",
      title: "Regulatory Complexity",
      text: "Societies must navigate compliance across multiple acts (Societies Act, Income Tax Act, FCRA). This requires specialized knowledge, and maintaining such expertise in-house can be difficult for smaller grassroots organizations.",
    },
    {
      icon: "Lock",
      title: "Operational Rigidity",
      text: "Statutory constraints, such as the tax rule requiring the application of at least 85% of income toward charitable objectives annually, can limit the society's flexibility in building reserves for large-scale future projects.",
    },
    {
      icon: "FileWarning",
      title: "Risk of Severe Penalties",
      text: "Failure to file the annual list can lead to the society being declared defunct. Non-filing of ITR-7 can lead to the revocation of Section 12AB/80G status, while FCRA non-compliance can result in the immediate freezing of bank accounts.",
    },
  ],
  eligibility: [
    {
      title: "Foundational Legal Status Criteria",
      items: [
        "**Societies Registration Act, 1860:** Mandatory compliance triggered immediately upon registration of the MoA and Rules & Regulations with the local Registrar of Societies.",
        "**Annual General Meeting (AGM):** Mandatory requirement to be actively governed and obtain member approval on accounts and activities.",
        "**Registered Office:** Must continuously maintain a registered office in the state of registration; address changes must be formally communicated to the Registrar.",
      ],
    },
    {
      title: "Income Tax Compliance Criteria",
      items: [
        "**Section 12AB Registration:** Mandatory for any society that has obtained 12AB tax exemption status to file annual returns and undergo audits.",
        "**Income Exemption Limit:** Statutory audit and Form 10B/10BB filing are mandatory if total income (before exemptions) exceeds ₹2.5 Lakhs.",
        "**Section 80G Registration:** Mandatory annual filing of the Statement of Donations (Form 10BD) for societies holding 80G status.",
      ],
    },
    {
      title: "Specialized Activity & Funding Criteria",
      items: [
        "**Foreign Contributions:** Mandatory compliance with the Foreign Contribution (Regulation) Act, 2010 (FCRA) upon receipt of any foreign contribution.",
        "**Commercial Activity:** Must adhere to GST registration and filing rules if taxable turnover exceeds the prescribed threshold (generally ₹20 Lakhs).",
        "**Government/CSR Grants:** Requires registration on the NGO Darpan portal (NITI Aayog) and filing Form CSR-1 with the MCA.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Foundational & Legal",
      content: {
        title: "Permanent legal records",
        items: [
          "Original Registration Certificate issued by the Registrar of Societies (RoS).",
          "Memorandum of Association (MoA) and Rules & Regulations / Bye-laws.",
          "PAN Card and Section 12AB / Section 80G certificates.",
          "Aadhaar and PAN details of all current Governing Body members.",
          "Minutes of the meeting where the latest management body was elected.",
        ],
      },
    },
    {
      tabTitle: "Annual Statutory",
      content: {
        title: "For RoS and Income Tax",
        items: [
          "Audited Financial Statements (Balance Sheet, Income & Expenditure, Receipt & Payment accounts).",
          "Statutory Auditor's Report and Form 10B/10BB (certified by a CA).",
          "Updated List of Governing Body Members (names, addresses, and occupations).",
          "Minutes of the AGM where the annual accounts were approved.",
          "Books of Accounts (Cash Book, Bank Statements, Vouchers, and Donation Registers).",
        ],
      },
    },
    {
      tabTitle: "Activity-Specific",
      content: {
        title: "Based on funding and taxes",
        items: [
          "Annual FCRA Return in Form FC-4 (if foreign contribution was received).",
          "Designated FCRA Bank Account Statements (mandatory SBI New Delhi branch).",
          "Statement of Donations in Form 10BD (detailing donor PAN and address).",
          "Quarterly TDS Returns (Forms 24Q/26Q) if tax is deducted on salaries or fees.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Audit and Finalization",
      description: "Appoint a Chartered Accountant to audit the society's books and prepare the mandatory Balance Sheet and Income & Expenditure accounts.",
    },
    {
      step: 2,
      title: "Governing Body Review",
      description: "Hold a Governing Body meeting to review the audited financials and recommend them for adoption by the General Body.",
    },
    {
      step: 3,
      title: "Annual General Meeting (AGM)",
      description: "Conduct the AGM within the prescribed timeframe to formally adopt the audited accounts and approve the annual report of activities.",
    },
    {
      step: 4,
      title: "Registrar Filing",
      description: "Submit the updated list of governing body members and a copy of the audited accounts to the local Registrar of Societies.",
    },
    {
      step: 5,
      title: "Income Tax Submission",
      description: "File the Form 10B audit report and the ITR-7 return electronically on the Income Tax portal before the statutory deadline.",
    },
  ],
  fees: [],
  feesMarkdown: `
Society compliance fees are a combination of nominal state-level filing fees and more substantial professional audit fees.

### Annual Professional Compliance Table

| Compliance Service | Applicability | Estimated Professional Fee | Key Factors Affecting Cost |
| --- | --- | --- | --- |
| Mandatory Audit & ITR-7 | All Societies | Rs.15,000 to Rs.60,000+ | Volume of transactions and annual turnover. |
| FCRA Annual Filing (FC-4) | For foreign-funded societies | Rs.15,000 to Rs.35,000+ | Requires specific CA certification. |
| Donor Reporting (80G) | Filing Form 10BD | Rs.5,000 to Rs.15,000 | Number of individual donors to be reported. |
| Quarterly TDS Returns | If society deducts tax | Rs.3,000 to Rs.7,500 per Qtr | Volume of payments to staff/professionals. |

### Statutory Government Fees

*   **RoS Filing Fee:** Nominal amount (₹50 to ₹500) for submitting the annual list and accounts.
*   **FCRA Registration:** ₹10,000 for fresh registration; ₹5,000 for renewal (paid to MHA).
*   **Late Filing Penalty:** ROC and Income Tax penalties for late submission vary by state and duration of delay.
`,
  faqs: [
    {
      q: "What is the consequence of failing to file the annual list with the RoS?",
      a: "Failure to file the annual list of governing body members can lead to the society being declared **defunct** or having its registration canceled.",
    },
    {
      q: "Is an audit mandatory for all societies?",
      a: "Yes, a statutory audit by a **Chartered Accountant** is mandatory to ensure financial accountability and retain tax-exempt status.",
    },
    {
      q: "Can a society receive international grants without FCRA?",
      a: "No. Any society receiving foreign contributions must strictly comply with the **FCRA Act** and file Form FC-4 annually.",
    },
  ],
};
