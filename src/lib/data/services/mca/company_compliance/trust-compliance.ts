// lib/data/services/mca/company_compliance/trust-compliance.ts

import { ServiceData } from "@/lib/types";

export const trustComplianceData: ServiceData = {
  title: "Trust Compliance Services",
  breadcrumb: ["Home", "MCA", "Trust Compliance"],
  description:
    "Trust compliance ensures your charitable organization maintains its tax-exempt status and legal standing under the Indian Trusts Act and Income Tax laws.",
  overview: `Trust compliance in India refers to the mandatory legal, financial, and regulatory obligations that a Charitable or Public Religious Trust must fulfill to maintain its legal existence, tax-exempt status, and public credibility. Unlike Section 8 companies, Trusts are primarily governed by the Indian Trusts Act, 1882 or state-specific Public Trusts Acts.

### Objectives of Trust Compliance

The objectives of Trust compliance are the goals that a charitable organization aims to achieve by adhering to all legal, financial, and administrative requirements.

#### Ensuring Legal Validity and Status
*   **Maintaining Legal Existence:** Timely filing of accounts and annual statements with the Charity Commissioner (as per state-specific acts) prevents the trust from being declared defunct or having its registration canceled.
*   **Protecting Tax Exemption (12AB):** Adherence to the Income Tax Act, 1961, by filing ITR-7 and the Audit Report (Form 10B/10BB), ensures that the trust retains its crucial Section 12AB status.
*   **Mitigating Legal Risk:** Strict compliance helps the trust avoid heavy financial fines, legal action, and the potential personal liability of trustees that result from late or inaccurate submissions.

#### Establishing Accountability and Transparency
*   **Financial Integrity:** The mandatory annual audit by a Chartered Accountant verifies that the trust's funds are utilized solely for its stated charitable objectives and not diverted for private gain.
*   **Public Trust:** Regular submission of audited accounts to the Charity Commissioner and the Income Tax Department promotes transparency and strengthens the trust's reputation among donors and beneficiaries.
*   **Ethical Governance:** Compliance mandates, such as maintaining minute books and updated registers of trustees, enforce a structured and accountable decision-making process.

#### Securing Funding and Resources
*   **Attracting Individual Donors (80G):** Complying with Section 80G rules, particularly filing Form 10BD, allows the trust to offer tax deductions to its donors.
*   **Accessing Institutional Grants:** Maintaining a clean compliance record is often mandatory for the trust to successfully apply for and receive grants from government bodies, CSR arms, and private foundations.
*   **Utilizing Foreign Contributions:** Full compliance with the Foreign Contribution (Regulation) Act (FCRA) allows the trust to legally receive and utilize foreign grants by filing Form FC-4.`,
  advantages: [
    {
      icon: "Shield",
      title: "Retention of Tax Exemptions",
      text: "The primary advantage is maintaining Section 12AB registration, which ensures that the trust's income is entirely exempt from income tax. This allows maximum funds to be dedicated to the charitable mission.",
    },
    {
      icon: "Award",
      title: "Donor Tax Incentives (80G)",
      text: "Adhering to 80G rules and filing Form 10BD enables donors to claim tax deductions on their contributions. This acts as a powerful incentive, significantly boosting the trust's fundraising capacity.",
    },
    {
      icon: "TrendingUp",
      title: "Legal Validity and Credibility",
      text: "Timely filings with the Charity Commissioner and the Income Tax Department ensure the trust's legal status is maintained. This transparency builds vital public trust and a positive reputation for long-term sustainability.",
    },
    {
      icon: "Globe",
      title: "Access to Institutional Funding",
      text: "Consistent compliance is a mandatory prerequisite for a trust to receive grants from government bodies, Corporate Social Responsibility (CSR) funds, and international agencies.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertCircle",
      title: "High Professional Audit Costs",
      text: "Trusts must pay significant annual fees to Chartered Accountants for mandatory audits and complex tax certifications (Form 10B/10BB). This can strain the limited resources of smaller charitable entities.",
    },
    {
      icon: "Activity",
      title: "Complex Multi-Authority Rules",
      text: "Trusts must navigate overlapping regulations from the Income Tax Department, the Ministry of Home Affairs (for FCRA), and state-level Charity Commissioners, making it difficult to maintain perfect compliance.",
    },
    {
      icon: "Lock",
      title: "Strict Fund Utilization Rules",
      text: "Statutory constraints, such as the tax rule requiring the application of at least 85% of income toward charitable objectives annually, can limit the trust's flexibility in building reserves for large-scale future projects.",
    },
    {
      icon: "FileWarning",
      title: "Severe Non-Compliance Risks",
      text: "Mistakes or delayed filings risk the immediate revocation of 12AB and 80G registrations. This leads to the trust's entire income being taxed at the maximum marginal rate, which can be mission-ending.",
    },
  ],
  eligibility: [
    {
      title: "Foundational Legal Status Criteria",
      items: [
        "**Legal Registration:** Mandatory compliance triggered immediately upon registration of the Trust Deed with the local Sub-Registrar or Charity Commissioner.",
        "**Charitable Purpose:** The trust must be established solely for charitable or religious purposes as defined under Section 2(15) of the Income Tax Act.",
        "**Trustee Management:** The trust must be managed by a minimum of two trustees (or as specified in the deed) who are responsible for ensuring all statutory filings.",
      ],
    },
    {
      title: "Income Tax Compliance Criteria",
      items: [
        "**Section 12AB Status:** Mandatory for trusts that have obtained 12AB registration to file annual returns and spend ≥85% of income on charitable activities.",
        "**Income Exemption Limit:** Statutory audit and Form 10B/10BB filing are mandatory if total income (before exemptions) exceeds the basic tax exemption limit (₹2.5 Lakhs).",
        "**Section 80G Status:** Mandatory annual filing of the Statement of Donations (Form 10BD) for trusts holding 80G registration.",
      ],
    },
    {
      title: "Specialized Activity & Funding Criteria",
      items: [
        "**Foreign Contributions:** Mandatory compliance with the Foreign Contribution (Regulation) Act (FCRA) upon receipt of any foreign grant.",
        "**CSR Funding:** Mandatory registration on the MCA portal via Form CSR-1 to successfully apply for corporate social responsibility funds.",
        "**Commercial Activity:** Must adhere to GST registration and filing rules if commercial turnover (e.g., from sales/services) exceeds the prescribed threshold.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Foundational",
      content: {
        title: "Permanent legal records",
        items: [
          "Registered Trust Deed (executed on non-judicial Stamp Paper).",
          "Certificate of Registration from the local Charity Commissioner (if applicable).",
          "PAN Card and TAN Certificate of the Trust.",
          "Section 12AB and Section 80G registration certificates.",
          "Identity and Address proofs of all current Trustees.",
        ],
      },
    },
    {
      tabTitle: "Annual Statutory",
      content: {
        title: "For mandatory audit",
        items: [
          "Audited Financial Statements (Balance Sheet and Income & Expenditure account).",
          "Statutory Auditor's Report and Form 10B/10BB (certified by a CA).",
          "Books of Accounts (Cash Book, Ledger, and Donation Registers).",
          "Minutes of the meeting where the annual accounts were approved.",
          "Utility bills or Lease Agreement for the trust's registered office.",
        ],
      },
    },
    {
      tabTitle: "Activity-Specific",
      content: {
        title: "Based on funding and taxes",
        items: [
          "Annual FCRA Return in Form FC-4 (if foreign funding was received).",
          "Digital Statement of Donations in Form 10BD (for 80G compliance).",
          "Quarterly TDS Returns (Forms 24Q/26Q) if tax is deducted on payments.",
          "Schedule IX-C or other state-specific charity commissioner filings.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Audit Finalization",
      description: "Appoint a Chartered Accountant to audit the trust's books and prepare the mandatory Balance Sheet and Income & Expenditure account.",
    },
    {
      step: 2,
      title: "Trustee Approval",
      description: "Hold a meeting of the Board of Trustees to review the audit report and formally adopt the financial statements for the year.",
    },
    {
      step: 3,
      title: "ITR-7 Submission",
      description: "File the annual Income Tax Return along with the Form 10B/10BB audit report electronically on the Income Tax portal.",
    },
    {
      step: 4,
      title: "Donation Reporting",
      description: "Submit the Statement of Donations in Form 10BD by May 31st to ensure your donors can claim their tax benefits.",
    },
    {
      step: 5,
      title: "State-Level Filings",
      description: "Submit the audited accounts and annual statements to the Charity Commissioner's office as per state-specific mandates.",
    },
  ],
  fees: [],
  feesMarkdown: `
Trust compliance fees are primarily driven by the complexity of the audit and the requirement for specialized tax certifications.

### Annual Professional Compliance Table

| Compliance Type | Applicability | Estimated Professional Fee | Key Factors Affecting Cost |
| --- | --- | --- | --- |
| Statutory Audit (10B) | Mandatory for all trusts | Rs.10,000 to Rs.35,000 | Volume of donations and number of projects. |
| Income Tax (ITR-7) | Mandatory Annual Filing | Rs.7,500 to Rs.15,000 | Complexity of Form 10B audit report. |
| Donation Filing (10BD) | For trusts with 80G | Rs.3,000 to Rs.8,000 | Number of individual donors to be reported. |
| State Charity Filings | State-specific mandates | Rs.5,000 to Rs.12,000 | Complexity of Schedule IX-C or equivalent. |

### Statutory Government Fees

| Registration Type | Relevant Authority | Government Fee | Frequency |
| --- | --- | --- | --- |
| 12AB / 80G Filing | Income Tax Department | NIL | One-time / Renewals |
| FCRA Registration | Ministry of Home Affairs | Rs.10,000 | Every 5 Years |
| FCRA Renewal | Ministry of Home Affairs | Rs.5,000 | Every 5 Years |
| CSR-1 Registration | MCA | NIL | One-time |

*Note: Initial trust registration involves mandatory Stamp Duty (1% to 8% depending on state) which is the largest one-time cost.*
`,
  faqs: [
    {
      q: "What is the 85% rule in trust compliance?",
      a: "Trusts must spend at least **85% of their income** on charitable activities within the same year to maintain tax exemption. The remaining 15% can be accumulated.",
    },
    {
      q: "When is the deadline for filing Form 10BD?",
      a: "Form 10BD must be filed by **May 31st** each year. Failure to do so prevents your donors from claiming their 80G tax deductions.",
    },
    {
      q: "Can a trust pay remuneration to its trustees?",
      a: "Yes, but it must be **reasonable** for actual services rendered and must not be a way to distribute profits, which is strictly prohibited.",
    },
  ],
};
