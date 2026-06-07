// lib/data/services/mca/company_compliance/nidhi-company-compliance.ts

import { ServiceData } from "@/lib/types";

export const nidhiCompanyComplianceData: ServiceData = {
  title: "Nidhi Company Annual Compliance",
  breadcrumb: ["Home", "MCA", "Nidhi Company Compliance"],
  description:
    "Nidhi Company compliance is the set of mandatory legal duties and regulations that a Nidhi Company must follow under the Companies Act, 2013, and the Nidhi Rules, 2014.",
  overview: `Nidhi Company compliance is the set of mandatory legal duties and regulations that a Nidhi Company must follow under the Companies Act, 2013, and the Nidhi Rules, 2014. Since a Nidhi operates on a mutual benefit principle, accepting deposits and lending only to its members, strict adherence is crucial for safeguarding members' funds and maintaining financial stability.

The initial and most critical phase is the Post-Incorporation Compliance, which must be achieved within one year. The company must secure a minimum of 200 members and maintain a Net Owned Funds (NOF) of at least ₹10 Lakhs. The ratio of NOF to deposits must not exceed 1:20. The company must also apply for final declaration as a Nidhi with the Central Government by filing Form NDH-4.

### Key Objectives of Nidhi Company Compliance

#### Protecting Members' Deposits
*   **Minimum Capital and NOF:** Mandatory compliance with the minimum Net Owned Funds (₹10 Lakhs) ensures the company has a strong equity base, acting as a cushion against unexpected losses.
*   **NOF to Deposit Ratio (1:20):** This ratio ensures that the company does not over-leverage itself by accepting deposits disproportionately high compared to its owned funds.
*   **Unencumbered Deposits:** The requirement to keep at least 10% of outstanding deposits in unencumbered term deposits with a scheduled bank ensures liquidity and an immediate reserve for unexpected withdrawals.

#### Ensuring Mutual Benefit and Community Focus
*   **Restricted Operations:** Compliance prohibits Nidhi Companies from engaging in risky activities like chit funds, hire-purchase, or leasing finance. They are strictly limited to borrowing and lending money exclusively among their members.
*   **Membership Growth:** The mandatory requirement to achieve 200 members within one year (Form NDH-1/NDH-4) ensures the company truly operates as a collective.

#### Promoting Transparency and Accountability
*   **Financial Reporting:** Annual filing of audited financial statements (Form AOC-4) and the statutory return of compliances (Form NDH-1 and NDH-3) provides the MCA with a clear, audited view of the company's performance and financial ratios.
*   **Good Governance:** Requirements for holding four mandatory Board Meetings and maintaining statutory registers ensure the management is accountable to the Board, and the Board to the members.`,
  advantages: [
    {
      icon: "Shield",
      title: "Exemption from Core RBI Regulation",
      text: "Nidhi Companies are exempted from the core provisions of the RBI Act, 1934. By remaining compliant with the MCA and Nidhi Rules, the company avoids the complex licensing and high capital requirements imposed on other NBFCs.",
    },
    {
      icon: "CheckCircle",
      title: "Maintains 'Nidhi' Status and License",
      text: "Timely compliance via Form NDH-4 ensures the Central Government officially recognizes and declares the entity as a Nidhi Company, allowing it to legally accept deposits and provide credit to members.",
    },
    {
      icon: "TrendingUp",
      title: "Promotion of Thrift and Savings",
      text: "A compliant Nidhi company fosters a secure financial platform, cultivating the habit of savings among its members and providing them with affordable credit without the hurdles of traditional banking.",
    },
    {
      icon: "Award",
      title: "Investor and Member Trust",
      text: "Transparency through annual filings (NDH-1 and NDH-3) ensures that the company's solvency and Net Owned Funds (NOF) ratios are visible to stakeholders, significantly boosting public confidence.",
    },
  ],
  disadvantages: [
    {
      icon: "Clock",
      title: "Highly Frequent Filing Burden",
      text: "Nidhi companies must file multiple specialized returns including half-yearly returns (NDH-3) and annual compliance summaries (NDH-1), which is more frequent than regular private companies.",
    },
    {
      icon: "ShieldAlert",
      title: "Risk of Status Revocation",
      text: "Failure to meet mandatory targets, such as having 200 members or maintaining a 1:20 NOF-to-deposit ratio, can lead to the immediate revocation of Nidhi status by the Central Government.",
    },
    {
      icon: "AlertCircle",
      title: "Severe Operational Restrictions",
      text: "Compliance involves adhering to strict lending limits, prohibited activities (like chit funds or insurance), and mandatory deposit caps, which can limit the scope of rapid business expansion.",
    },
    {
      icon: "FileWarning",
      title: "Strict NOF Requirements",
      text: "Maintaining the minimum Net Owned Funds (NOF) of ₹20 Lakhs is a continuous requirement. Any shortfall can trigger regulatory notices and penalties from the Ministry of Corporate Affairs.",
    },
  ],
  eligibility: [
    {
      title: "Mandatory Membership and NOF Criteria",
      items: [
        "**Member Count:** Must have a minimum of 200 members within one year of its incorporation.",
        "**Net Owned Funds (NOF):** Mandatory requirement to maintain a minimum NOF of ₹20 Lakhs (as per 2022 amendments).",
        "**NOF-to-Deposit Ratio:** The company must maintain a ratio of Net Owned Funds to deposits not exceeding 1:20.",
        "**Unencumbered Deposits:** Must maintain at least 10% of its outstanding deposits in unencumbered term deposits with a scheduled commercial bank.",
      ],
    },
    {
      title: "Nidhi-Specific Filing Criteria",
      items: [
        "**Form NDH-1:** Mandatory annual return of statutory compliances, filed within 90 days from the close of the financial year.",
        "**Form NDH-3:** Compulsory half-yearly return to be filed within 30 days from the conclusion of each half-year.",
        "**Form NDH-4:** Compulsory application for declaration as a Nidhi Company, mandatory for new entities to start operations.",
      ],
    },
    {
      title: "General Corporate Compliance Criteria",
      items: [
        "**Statutory Audit:** Compulsory annual audit of accounts by a practicing Chartered Accountant is mandatory for all Nidhi Companies.",
        "**Form AOC-4:** Mandatory filing of audited financial statements with the ROC within 30 days of the AGM.",
        "**Form MGT-7:** Compulsory filing of the Annual Return with the ROC within 60 days of the AGM.",
        "**Director KYC:** Annual mandatory filing of DIR-3 KYC for all directors to keep their DINs active.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Nidhi-Specific",
      content: {
        title: "Required for NDH filings",
        items: [
          "List of all members added during the half-year/year with PAN details.",
          "Detailed schedule of deposits accepted and loans granted to members.",
          "Net Owned Funds (NOF) calculation certificate certified by a CA.",
          "Proof of 10% unencumbered term deposits (FD receipts) with a bank.",
          "Official NDH-4 Declaration/Approval letter from the Central Government.",
        ],
      },
    },
    {
      tabTitle: "Annual Statutory",
      content: {
        title: "Standard annual attachments",
        items: [
          "Audited Financial Statements (Balance Sheet and Profit & Loss Account).",
          "Statutory Auditor's Report and detailed Notes to Accounts.",
          "Director's Report with mandatory disclosures under Nidhi Rules.",
          "Notice of the AGM and certified copies of board resolutions.",
          "Digital Signature (DSC) of the authorized directors and auditor.",
        ],
      },
    },
    {
      tabTitle: "Internal Registry",
      content: {
        title: "Records to maintain at office",
        items: [
          "Updated Register of Members with identity and address proofs.",
          "Loan application forms and security/collateral documents from members.",
          "Deposit application forms, receipts, and passbooks issued to members.",
          "Statutory Registers (Directors, Charges, Shareholding) as per Companies Act.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Member and NOF Targets",
      description: "Ensure the company achieves the target of 200 members and ₹20 Lakh NOF within the first year and files Form NDH-4.",
    },
    {
      step: 2,
      title: "Half-Yearly Filings (NDH-3)",
      description: "Submit Form NDH-3 twice a year (by October 30th and April 30th) to report the ongoing member and deposit status.",
    },
    {
      step: 3,
      title: "Statutory Audit",
      description: "Appoint a CA to audit the books, specifically ensuring the certification of the 1:20 NOF ratio and the 10% deposit rule.",
    },
    {
      step: 4,
      title: "Annual ROC Filings",
      description: "Convene the AGM and file the audited financial statements (AOC-4) and the Annual Return (MGT-7) with the ROC.",
    },
    {
      step: 5,
      title: "Annual Compliance Return (NDH-1)",
      description: "Submit the final annual return of statutory compliances (NDH-1) summarizing the year's adherence to Nidhi Rules.",
    },
  ],
  fees: [],
  feesMarkdown: `
Nidhi Company compliance fees include specialized professional charges for multiple periodic certifications and statutory filing fees.

### Annual Professional Compliance Table

| Compliance Service | Applicability | Estimated Professional Fee (Annual) | Key Factors Affecting Cost |
| --- | --- | --- | --- |
| Statutory Audit (Nidhi) | Mandatory for all Nidhis | Rs.20,000 to Rs.40,000+ | Volume of member transactions. |
| NDH-1 / NDH-3 Filings | Half-Yearly and Annual | Rs.10,000 to Rs.20,000 | Number of member entries and NOF. |
| ROC Annual Filings | AOC-4 and MGT-7 | Rs.8,000 to Rs.15,000 | Complexity of board reports. |
| Income Tax Return | Mandatory Corporate return | Rs.5,000 to Rs.12,000 | Turnover and tax audit requirements. |

### Statutory Government (MCA) Filing Fees

| Authorized Share Capital | Normal Fee per Form (AOC-4/NDH-1) | Late Filing Penalty |
| --- | --- | --- |
| Less than ₹1,00,000 | ₹200 | ₹100 per day per form |
| ₹1,00,000 to ₹4,99,999 | ₹300 | ₹100 per day per form |
| ₹5,00,000 to ₹24,99,999 | ₹400 | ₹100 per day per form |
| ₹25,00,000 or more | ₹600 | ₹100 per day per form |

*Note: The late fee of ₹100/day applies to NDH-1, NDH-3, AOC-4, and MGT-7 forms without an upper limit.*
`,
  faqs: [
    {
      q: "What is Form NDH-4 and why is it critical?",
      a: "Form NDH-4 is the application for **Declaration as a Nidhi Company**. Without this approval, a company cannot legally perform Nidhi activities or accept deposits.",
    },
    {
      q: "Can a Nidhi Company open branches?",
      a: "Yes, but only if it has earned **net profits after tax** for the preceding three financial years and has filed its NDH-3 returns on time.",
    },
    {
      q: "What is the NOF to Deposit ratio for Nidhi Companies?",
      a: "A Nidhi Company must maintain a **ratio of 1:20**, meaning for every ₹1 of its own money (Net Owned Funds), it can accept a maximum of ₹20 in deposits.",
    },
  ],
};
