// lib/data/services/mca/company_compliance/section-8-company-compliance.ts

import { ServiceData } from "@/lib/types";

export const section8CompanyComplianceData: ServiceData = {
  title: "Section 8 Company Compliance",
  breadcrumb: ["Home", "MCA", "Section 8 Compliance"],
  description:
    "Section 8 Company compliance ensures transparency, accountability, and the proper utilization of funds for charitable purposes as per the Companies Act, 2013.",
  overview: `Section 8 Company compliance refers to the mandatory legal and financial obligations that a non-profit company must fulfill to maintain its tax-exempt status and corporate standing in India. Unlike trusts or societies, Section 8 companies are governed by the Companies Act, 2013, requiring annual filings with the Ministry of Corporate Affairs (MCA).

### Objectives of Section 8 Company Compliance

#### Ensuring Legal Validity and Continuity
*   **Protecting Legal Status:** Regular compliance filings, such as submitting annual returns (AOC-4 and MGT-7) to the Registrar of Companies (ROC), prevent the government from classifying the NGO as defunct or revoking its registration.
*   **Maintaining Tax Exemptions:** Compliance through filing ITR-7 and Form 10B/10BB retains the crucial Section 12AB registration (tax-free income) and Section 80G status (donor tax benefit).
*   **Mitigating Risk:** Proactive compliance helps the organization avoid severe penalties, fines, and legal action from the FCRA or labour laws.

#### Promoting Transparency and Accountability
*   **Financial Accountability:** Mandatory annual audits by a Chartered Accountant, and the filing of financial statements, ensure the organization is a responsible steward of public and donor funds.
*   **Stakeholder Confidence:** Filing timely reports (FC-4 for foreign funds, Form 10BD for domestic donations) provides transparency to donors, regulators, and the public.
*   **Good Governance:** Compliance enforces regular board meetings, maintenance of records and minutes, and clear policies ensuring ethical decision-making aligned with the organizational mission.

#### Accessing Funding and Resources
*   **Securing Grants:** Registration on the NGO Darpan portal is mandatory for applying for government grants and CSR funding from companies.
*   **International Donations:** Strict adherence to FCRA rules and the submission of the FC-4 return are non-negotiable for receiving and utilizing foreign contributions.
*   **Sustainable Growth:** A clean compliance record makes the NGO attractive to international agencies, philanthropic foundations, and institutional donors for long-term partnerships.`,
  advantages: [
    {
      icon: "Shield",
      title: "Limited Liability Protection",
      text: "Maintaining legal compliance ensures the NGO operates lawfully and provides limited liability protection to its members. This safeguards the personal assets of the promoters from the organization's financial obligations.",
    },
    {
      icon: "Wallet",
      title: "Tax Exemptions (12AB and 80G)",
      text: "Compliance allows the company to maintain its registration under Section 12AB (for tax-free income) and Section 80G (allowing donors to claim tax deductions), which is essential for sustainable fundraising.",
    },
    {
      icon: "Award",
      title: "CSR Funding Eligibility",
      text: "Only compliant Section 8 companies with a valid CSR-1 registration are eligible to receive Corporate Social Responsibility (CSR) funds from large Indian and multinational corporations.",
    },
    {
      icon: "TrendingUp",
      title: "Enhanced Public Trust",
      text: "Regular filing of AOC-4 and MGT-7 creates a transparent public record of the company's financials and activities, significantly building trust with donors, government agencies, and the general public.",
    },
  ],
  disadvantages: [
    {
      icon: "XCircle",
      title: "No Profit Distribution",
      text: "The law strictly prohibits the payment of any dividend or profit to its members. All surplus income must be reinvested back into the organization's charitable objectives.",
    },
    {
      icon: "AlertCircle",
      title: "Severe Late Filing Penalties",
      text: "Late filing of mandatory ROC forms attracts a substantial penalty of ₹100 per day of default per form, which can quickly drain the charitable funds of the organization.",
    },
    {
      icon: "Search",
      title: "Strict Scrutiny of Objects",
      text: "Any deviation from the 'charitable objects' mentioned in the MOA can lead to the immediate revocation of the Section 8 license and the potential forceful winding up of the company.",
    },
    {
      icon: "FileWarning",
      title: "High Administrative Compliance",
      text: "Governed by corporate law, Section 8 companies face a higher administrative burden compared to trusts or societies, requiring professional expertise for MCA and tax filings.",
    },
  ],
  eligibility: [
    {
      title: "Annual Statutory Filing Criteria",
      items: [
        "**Form AOC-4:** Mandatory annual filing of audited financial statements, including the Balance Sheet and Income & Expenditure account.",
        "**Form MGT-7:** Compulsory filing of the Annual Return summarizing the company's management and directorship.",
        "**ITR-7:** Mandatory annual income tax return filing for non-profit entities to claim tax exemptions.",
        "**Form 10BD:** Annual mandatory statement of donations to enable tax benefits for individual and corporate donors.",
      ],
    },
    {
      title: "Governance and Audit Criteria",
      items: [
        "**Statutory Audit:** Compulsory annual audit by a practicing Chartered Accountant is mandatory for all Section 8 Companies regardless of turnover.",
        "**Board Meetings:** Minimum requirement to hold at least two board meetings in every calendar year (at least one in each half-year).",
        "**Zero Dividend Rule:** Absolute legal prohibition on distributing any form of profit or dividend to its members.",
      ],
    },
    {
      title: "Threshold and Status Maintenance",
      items: [
        "**12AB/80G Renewal:** Mandatory requirement to renew tax-exempt registrations periodically as prescribed by the Income Tax Act.",
        "**CSR-1 Registration:** Compulsory registration for entities intending to undertake CSR activities and receive corporate funding.",
        "**FCRA Compliance:** Mandatory annual filing of Form FC-4 if the organization receives any amount of foreign contribution.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "MCA Filings",
      content: {
        title: "Required for ROC compliance",
        items: [
          "Audited Financial Statements (Balance Sheet and Income & Expenditure Account).",
          "Detailed Director's Report and Statutory Auditor's Report.",
          "List of all members and shareholders as of the financial year-end.",
          "Notice of the AGM and certified copies of the board resolutions.",
          "Digital Signature (DSC) of at least two authorized Directors.",
        ],
      },
    },
    {
      tabTitle: "Tax & Donation",
      content: {
        title: "For 12AB and 80G maintenance",
        items: [
          "Form 10B / 10BB Audit Report (certified by a CA for tax exemption).",
          "Detailed list of all donors (Name, Address, PAN) for Form 10BD filing.",
          "FCRA Annual Return (Form FC-4) data if receiving foreign funds.",
          "CSR-1 registration details and project utilization certificates.",
        ],
      },
    },
    {
      tabTitle: "Internal Records",
      content: {
        title: "Statutory documentation",
        items: [
          "Minute Books of all Board Meetings and General Meetings.",
          "Updated Statutory Registers (Members, Directors, and Charges).",
          "Detailed records of all grants and donations received with utilization proofs.",
          "Copy of the Section 8 License issued by the Central Government.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Books and Audit",
      description: "Finalize all accounts, including donation receipts and project expenses, and conduct the mandatory Statutory Audit by a Chartered Accountant.",
    },
    {
      step: 2,
      title: "Board and Member Approval",
      description: "Convene a board meeting to approve the audited financials and then hold the Annual General Meeting (AGM) for formal member approval.",
    },
    {
      step: 3,
      title: "Form AOC-4 Submission",
      description: "Submit the audited financial statements and reports to the MCA portal within 30 days of the AGM to maintain corporate standing.",
    },
    {
      step: 4,
      title: "Tax Return (ITR-7)",
      description: "File the ITR-7 return along with the mandatory Form 10B audit report to claim and preserve the organization's tax exemptions.",
    },
    {
      step: 5,
      title: "Donation Reporting",
      description: "Submit Form 10BD by May 31st to ensure all donors receive their 80G certificates (Form 10BE) for their tax deductions.",
    },
  ],
  fees: [],
  feesMarkdown: `
Section 8 compliance fees are primarily driven by audit complexity and the requirement for specialized tax certifications (12AB/80G).

### Annual Professional Compliance Table

| Compliance Service | Applicability | Estimated Professional Fee | Key Factors Affecting Cost |
| --- | --- | --- | --- |
| Statutory Audit | Mandatory for all Section 8s | Rs.15,000 to Rs.40,000 | Volume of donations and projects. |
| Income Tax (ITR-7) | For tax exemption status | Rs.10,000 to Rs.20,000 | Complexity of Form 10B audit. |
| Donation Filing (10BD) | For NGOs with 80G | Rs.5,000 to Rs.10,000 | Number of individual donors. |
| MCA Annual Filings | AOC-4 and MGT-7 | Rs.7,500 to Rs.15,000 | Number of directors and registers. |

### Statutory and Penalty Costs

*   **MCA Filing Fees:** Nominal fees (approx ₹200-₹600) based on capital.
*   **Late Filing Penalty:** ₹100 per day per form (AOC-4/MGT-7) with no upper limit.
*   **FCRA Filing Fee:** ₹10,000 for fresh registration; ₹5,000 for renewals.
`,
  faqs: [
    {
      q: "Can a Section 8 Company pay salary to its directors?",
      a: "Yes, provided the salary is **reasonable** and for actual services rendered. However, it cannot pay dividends or bonuses to directors as members.",
    },
    {
      q: "Is it mandatory to file Form 10BD every year?",
      a: "Yes, if you have an **80G registration**. It must be filed by **May 31st** to ensure your donors can claim their tax deductions.",
    },
    {
      q: "What is the penalty for not filing the FCRA return?",
      a: "Failure to file the **FC-4 return** can lead to heavy penalties and the potential **cancellation of your FCRA license**, blocking all future foreign donations.",
    },
  ],
};
