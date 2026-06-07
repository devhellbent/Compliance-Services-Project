// lib/data/services/mca/company_compliance/llp-compliance.ts

import { ServiceData } from "@/lib/types";

export const llpComplianceData: ServiceData = {
  title: "LLP Compliance",
  breadcrumb: ["Home", "MCA", "LLP Compliance"],
  description:
    "LLP Compliance refers to the mandatory legal and procedural requirements that a Limited Liability Partnership (LLP) must fulfill annually to maintain its legal status.",
  overview: `LLP Compliance refers to the mandatory legal and procedural requirements that a Limited Liability Partnership (LLP) must fulfill annually to maintain its legal status and operate legitimately in India. These obligations are governed primarily by the Limited Liability Partnership Act, 2008, and the Ministry of Corporate Affairs (MCA).

The core annual compliances include three key filings, regardless of the LLP's turnover or activity. These are the filing of Form 11 (Annual Return) by May 30th, the submission of Form 8 (Statement of Account & Solvency) by October 30th, and the filing of the Income Tax Return (ITR-5). Additionally, an LLP must have its accounts audited if its annual turnover exceeds ₹40 Lakhs or its capital contribution exceeds ₹25 Lakhs.

### Why LLP Compliance is Mandatory

LLP Compliance is mandatory because it is the fundamental legal requirement for a Limited Liability Partnership to sustain its existence, protect its partners, and ensure accountability to the government and the public.

#### Upholding the Legal Status (The Trade-off)
*   **Condition for Limited Liability:** The primary benefit of an LLP is that partners are shielded from the LLP's debts. However, this legal shield is granted on the condition that the LLP acts responsibly and maintains its legal integrity by filing the required documents.
*   **Maintaining Separate Legal Entity:** Filing annual returns (Form 11) and financial statements (Form 8) provides proof to the Registrar of Companies (RoC) that the entity is alive, active, and operating as required by law.

#### Ensuring Transparency and Accountability
*   **Public Record of Affairs:** Mandatory filings (especially the Statement of Accounts and Solvency - Form 8) ensure that the government and the public have access to the LLP's financial health, solvency, and operational details.
*   **Fulfilling Tax Obligations:** Mandatory filing of the Income Tax Return (ITR-5) ensures the LLP complies with the country's tax laws.

#### Avoiding Severe Penalties and Legal Complications
*   **Heavy Financial Penalties:** Late filing of Form 8 and Form 11 attracts a penalty of ₹100 per day per form, with no upper limit.
*   **Risk of Strike-Off:** Persistent non-compliance (usually failure to file for two or more consecutive years) can lead the RoC to strike its name off the register.
*   **Disqualification:** Partners in a defaulting LLP may face disqualification, restricting them from being designated partners in other LLPs or companies.`,
  advantages: [
    {
      icon: "Shield",
      title: "Preservation of Limited Liability",
      text: "Timely compliance confirms the LLP is a separate legal entity. This protects the partners' personal assets from the business's debts and prevents the 'piercing of the corporate veil' which can make partners personally liable.",
    },
    {
      icon: "ShieldAlert",
      title: "Avoidance of Draconian Penalties",
      text: "Filing mandatory forms on time saves the business from the ₹100 per day penalty for Forms 8 and 11, which has no upper limit and can accumulate into a massive financial burden if ignored.",
    },
    {
      icon: "Award",
      title: "Enhanced Credibility and Trust",
      text: "Banks and investors perform mandatory due diligence on an LLP's compliance status before sanctioning loans or capital. A clean history makes the LLP significantly more attractive for funding and strategic partnerships.",
    },
    {
      icon: "Activity",
      title: "Operational Transparency",
      text: "The compliance process requires preparing a Statement of Accounts (Form 8), which ensures partners maintain a clear and organized record of financial health, essential for informed strategic decision-making.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertCircle",
      title: "Infinite Late Filing Fees",
      text: "The MCA levies a penalty of ₹100 per day of delay for Form 8 and Form 11 with no maximum cap, meaning a delay of one year could cost over ₹70,000 in penalties alone.",
    },
    {
      icon: "XCircle",
      title: "Risk of Strike-Off and Dissolution",
      text: "Failure to file returns for two or more consecutive years allows the Registrar of Companies (RoC) to initiate the strike-off process, effectively terminating the business's legal existence.",
    },
    {
      icon: "UserX",
      title: "Partner Disqualification",
      text: "Designated Partners of a defaulting LLP face disqualification, which restricts them from being partners or directors in any other LLP or Company for a specified period.",
    },
    {
      icon: "FileWarning",
      title: "Severe Non-Compliance Risks",
      text: "Mistakes or delayed filings risk the immediate revocation of tax benefits and can lead to the LLP's entire income being taxed at the maximum marginal rate.",
    },
  ],
  eligibility: [
    {
      title: "Mandatory Annual Filing Criteria",
      items: [
        "**Form 11 (Annual Return):** Mandatory filing by May 30th every year, summarizing partner and contribution details.",
        "**Form 8 (Statement of Account & Solvency):** Compulsory filing by October 30th, declaring financial position and solvency status.",
        "**Income Tax Return (ITR-5):** Mandatory filing regardless of turnover or activity level.",
      ],
    },
    {
      title: "Audit Threshold Criteria",
      items: [
        "**Turnover Threshold:** Mandatory audit by a practicing Chartered Accountant if annual turnover exceeds ₹40 Lakhs.",
        "**Contribution Threshold:** Mandatory audit if total partner contribution exceeds ₹25 Lakhs.",
        "**Tax Audit:** Required if turnover exceeds ₹1 Crore (subject to 95% digital transaction rules under Section 44AB).",
      ],
    },
    {
      title: "Administrative Compliance Criteria",
      items: [
        "**Designated Partners:** Minimum of two Designated Partners must be maintained at all times.",
        "**Resident Partner:** At least one Designated Partner must be a resident of India (182+ days stay).",
        "**Books of Accounts:** Mandatory maintenance of books of accounts on a cash or accrual basis for at least 8 years.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "MCA E-Forms",
      content: {
        title: "Required for ROC filing",
        items: [
          "Financial Statements: Balance Sheet and Profit & Loss Account.",
          "Auditor's Report (Mandatory if turnover >₹40L or contribution >₹25L).",
          "MSME Disclosure Statement regarding payments to small enterprises.",
          "Partner Details: PAN, DPIN, and address of all partners.",
          "Digital Signature (DSC) of at least two Designated Partners.",
        ],
      },
    },
    {
      tabTitle: "Tax & Financials",
      content: {
        title: "Required for Income Tax filing",
        items: [
          "PAN Card of the LLP and all partners.",
          "Detailed Bank Statements for all LLP accounts.",
          "Sales, Purchase, and Expense Ledgers.",
          "Tax Audit Report (if applicable under Sec 44AB).",
          "TDS/TCS Certificates and Form 26AS data.",
        ],
      },
    },
    {
      tabTitle: "Statutory Records",
      content: {
        title: "Internal records to maintain",
        items: [
          "Original LLP Agreement and any supplementary deeds/amendments.",
          "Certificate of Incorporation (COI) issued by the MCA.",
          "Minutes of Meetings and statutory resolutions passed by partners.",
          "Proof of payment of stamp duty on the LLP agreement.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Data Compilation",
      description: "Finalize the financial year's books and gather all bank statements and contribution records by April each year.",
    },
    {
      step: 2,
      title: "Form 11 Filing",
      description: "Submit Form 11 to the MCA portal by May 30th, providing a snapshot of the partners and their contributions.",
    },
    {
      step: 3,
      title: "Audit Finalization",
      description: "Prepare financial statements. If thresholds (>₹40L/₹25L) are met, get them audited by a Chartered Accountant.",
    },
    {
      step: 4,
      title: "Income Tax Filing",
      description: "File the income tax return (ITR-5) by July 31st (non-audit) or September 30th (audit cases).",
    },
    {
      step: 5,
      title: "Form 8 Filing",
      description: "Submit Form 8 to the MCA by October 30th, attaching the audited accounts and solvency declaration.",
    },
  ],
  fees: [],
  feesMarkdown: `
LLP compliance costs are categorized into statutory government filing fees and professional service charges.

### Annual Professional Compliance Table

| Compliance Component | Applicability | Estimated Professional Fee (Annual) | Key Factors Affecting Cost |
| --- | --- | --- | --- |
| Basic Annual Package | Small, non-audit LLPs | Rs.3,500 to Rs.8,000 | Bookkeeping volume and number of partners. |
| Statutory Audit Fee | Turnover >₹40L / Contr. >₹25L | Rs.10,000 to Rs.25,000+ | Complexity of transactions and quality of records. |
| Tax Audit Fee | Turnover >₹1 Crore | Rs.15,000 to Rs.35,000+ | Compliance with Sec 44AB and internal tax controls. |
| DIR-3 KYC Filing | All Designated Partners | Rs.500 to Rs.1,500 | Number of partners and ease of documentation. |

### Statutory Government (MCA) Fees

| Total Obligation of Contribution | Fee for Form 8 / 11 (Each) | Late Filing Penalty |
| --- | --- | --- |
| Up to ₹1,00,000 | ₹50 | ₹100 per day |
| ₹1,00,001 to ₹5,00,000 | ₹100 | ₹100 per day |
| ₹5,00,001 to ₹10,00,000 | ₹150 | ₹100 per day |
| ₹10,00,001 to ₹25,00,000 | ₹200 | ₹100 per day |
| Above ₹25,00,000 | ₹400 – ₹600 | ₹100 per day |

*Note: The ₹100/day penalty for Form 8 and 11 has no upper limit and accumulates until filed.*
`,
  faqs: [
    {
      q: "What is the penalty for late filing of Form 8 or 11?",
      a: "The penalty is **₹100 per day** for each form, with **no maximum limit**, meaning delays can be extremely costly.",
    },
    {
      q: "Is an audit mandatory for all LLPs?",
      a: "No. An audit is only mandatory if the **annual turnover exceeds ₹40 Lakhs** or the **partner contribution exceeds ₹25 Lakhs**.",
    },
    {
      q: "Can I file Form 8 if I haven't filed Form 11?",
      a: "Yes, you can file them independently, but both must be filed by their respective due dates (**May 30** and **Oct 30**) to avoid penalties.",
    },
  ],
};
