// lib/data/services/mca/company_compliance/microfinance-company-compliance.ts

import { ServiceData } from "@/lib/types";

export const microfinanceCompanyComplianceData: ServiceData = {
  title: "Microfinance Company Compliance",
  breadcrumb: ["Home", "MCA", "Microfinance Compliance"],
  description:
    "Microfinance Company compliance is governed by the RBI and focusing on prudential norms, fair lending practices, and consumer protection.",
  overview: `Microfinance Company compliance in India is predominantly governed by the Reserve Bank of India (RBI), especially for those registered as NBFC-Microfinance Institutions (NBFC-MFIs). The regulatory framework is designed to balance the financial stability of the institutions with the protection of low-income borrowers.

### Objectives of Microfinance Company Compliance

The objectives of Microfinance Company compliance are the strategic goals that the Reserve Bank of India (RBI) and other regulators aim to achieve by imposing strict legal and financial requirements on the sector.

#### Ensuring Consumer Protection and Fair Treatment
*   **Preventing Over-indebtedness:** By mandating credit bureau reporting and indebtedness limits (e.g., monthly repayments capped at 50% of household income), compliance ensures borrowers do not take more debt than they can realistically repay.
*   **Curbing Usurious Practices:** Regulatory caps on interest rates and processing fees prevent MFIs from charging exploitative rates to vulnerable low-income clients.
*   **Enforcing Ethical Conduct:** Strict adherence to the Fair Practices Code (FPC) ensures that MFIs treat borrowers with dignity, use non-coercive recovery methods, and provide transparent loan documentation.

#### Maintaining Financial Stability and Resilience
*   **Prudential Management:** Compliance with mandatory Net Owned Fund (NOF) requirements (₹10 Crore) and Capital Adequacy Ratios (CRAR) ensures that MFIs have a solid capital base to absorb potential financial losses.
*   **Asset Quality Control:** Mandatory asset classification and provisioning rules force MFIs to recognize and plan for bad loans, preventing a systemic collapse of the microfinance ecosystem.
*   **Mitigating Systemic Risk:** Meticulous reporting through periodic RBI returns (like NBS-7) allows the regulator to monitor liquidity and capital flows across the entire sector.

#### Promoting Industry Growth and Credibility
*   **Standardizing Operations:** Uniform definitions of "Qualifying Assets" and standardized reporting formats make it easier for investors and banks to assess the risk and performance of different MFIs.
*   **Enhancing Investor Confidence:** A highly regulated environment makes MFIs more attractive to domestic banks, foreign investors (FDI), and multilateral agencies, ensuring a steady flow of capital to the sector.
*   **Facilitating Financial Inclusion:** By maintaining a clean compliance record, MFIs fulfill their primary objective of providing formal financial services to the unbanked and underbanked populations.`,
  advantages: [
    {
      icon: "Shield",
      title: "Client Protection and Fair Practices",
      text: "Mandatory compliance ensures transparency through loan cards and published interest rate policies. It enforces limits on household indebtedness and bans collateral-based lending, protecting low-income borrowers from aggressive debt cycles.",
    },
    {
      icon: "Award",
      title: "Enhanced Credibility and Funding",
      text: "Adhering to RBI norms (like NOF and Capital Adequacy Ratio) grants the MFI high institutional credibility. This allows them to secure cheaper, large-scale funding from banks, foreign investors (FDI), and multilateral global agencies.",
    },
    {
      icon: "TrendingUp",
      title: "Market Stability and Risk Reduction",
      text: "Prudential norms, such as mandatory Asset Classification and Provisioning rules, ensure that MFIs have adequate capital buffers to absorb losses. This creates a resilient sector capable of withstanding financial shocks.",
    },
    {
      icon: "Activity",
      title: "Industry Standardization",
      text: "Regulatory requirements standardize lending practices, reporting formats, and asset definitions. This transparency makes the sector easier to supervise and allows for better risk assessment by lenders and self-regulatory organizations (SROs).",
    },
  ],
  disadvantages: [
    {
      icon: "AlertCircle",
      title: "High Operational and Compliance Cost",
      text: "MFIs must invest heavily in specialized IT systems, compliance officers, and staff training for accurate reporting of prudential ratios and KYC/AML guidelines. This high fixed cost is disproportionately burdensome for smaller MFIs.",
    },
    {
      icon: "Activity",
      title: "Constraints on Profitability",
      text: "RBI regulations impose strict limits on interest rates and mandate caps on processing fees (typically 1%). These limits, combined with the high cost of managing numerous small unsecured loans, significantly squeeze profit margins.",
    },
    {
      icon: "Lock",
      title: "Barrier to Entry (High Capital Needs)",
      text: "The mandatory minimum Net Owned Fund (NOF) requirement of ₹10 Crore acts as a significant barrier for grassroots NGOs and social entrepreneurs, limiting the diversity of players in the microfinance market.",
    },
    {
      icon: "FileWarning",
      title: "Regulatory Rigidity",
      text: "Strict rules regarding borrower income limits and loan usage can hinder an MFI's ability to adapt quickly to changing economic realities or offer flexible products like housing or consumption loans that clients may need.",
    },
  ],
  eligibility: [
    {
      title: "Prudential Institutional Criteria",
      items: [
        "**Net Owned Fund (NOF):** Must maintain a minimum NOF of ₹10 Crore (₹5 Crore for North-Eastern region).",
        "**50-50 Test:** Financial assets and income must both exceed 50% of total assets and gross income respectively.",
        "**Qualifying Asset (QA):** At least 75% of net assets must be in the form of microfinance loans.",
        "**Capital Adequacy (CAR):** Must maintain a minimum Capital to Risk-Weighted Assets Ratio (CRAR) of 15%.",
      ],
    },
    {
      title: "Microfinance Loan Eligibility Criteria",
      items: [
        "**Household Income:** Borrower's annual household income must not exceed ₹3,00,000.",
        "**Collateral-Free:** Loans must be extended without any security, hypothecation, or margin money.",
        "**Indebtedness Limit:** Total monthly loan repayments across all lenders must not exceed 50% of the household income.",
        "**No Pre-payment Penalty:** Borrowers must be allowed to repay loans early without any additional charges or interest.",
      ],
    },
    {
      title: "Reporting and Governance Criteria",
      items: [
        "**CIC Reporting:** Mandatory registration and real-time reporting to all four Credit Information Companies (CICs).",
        "**SRO Membership:** Mandatory membership in an RBI-recognized Self-Regulatory Organization (like MFIN or Sa-Dhan).",
        "**Statutory Audit:** Compulsory annual audit by a CA, focusing specifically on compliance with NBFC-MFI directions.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Institutional",
      content: {
        title: "For RBI Certificate of Registration",
        items: [
          "Certificate of Incorporation, MOA, and AOA (with financial object clause).",
          "Statutory Auditor's Certificate (SAC) confirming NOF and '50-50' test compliance.",
          "Banker's 'No Lien' Certificate on the fixed deposit of the requisite capital.",
          "KYC and last 3 years ITRs of all Directors and Promoters.",
          "CIBIL/Credit reports for the company and all governing directors.",
          "Detailed Business Plan and 3-year financial projections.",
        ],
      },
    },
    {
      tabTitle: "Periodic Returns",
      content: {
        title: "Mandatory RBI & MCA Filings",
        items: [
          "NBS-7 Return (Annual Return on Capital Funds and Risk Assets).",
          "Audited Financial Statements and Auditor's Report (AOC-4).",
          "Annual Return (MGT-7/7A) filed with the Registrar of Companies.",
          "Quarterly/Monthly NBS returns on the RBI COSMOS portal.",
          "Annual Compliance Certificate for the Fair Practices Code.",
        ],
      },
    },
    {
      tabTitle: "Customer Conduct",
      content: {
        title: "Board-approved policies",
        items: [
          "Board-approved Fair Practices Code (FPC) in the vernacular language.",
          "KYC/AML Policy for customer identification and risk categorization.",
          "Detailed Grievance Redressal Mechanism and name of the Nodal Officer.",
          "Sample Loan Cards and Interest Rate Policy documents.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Company Formation",
      description: "Register a Public or Private Limited Company with the MCA with a minimum authorized capital reflecting the NOF requirement.",
    },
    {
      step: 2,
      title: "Capital Deposit",
      description: "Deposit the mandatory ₹10 Crore in a fixed deposit and obtain a 'No Lien' certificate from the bank as proof for the RBI.",
    },
    {
      step: 3,
      title: "RBI CoR Application",
      description: "Submit the online application on the COSMOS portal along with all statutory documents to obtain the NBFC-MFI Certificate of Registration.",
    },
    {
      step: 4,
      title: "Prudential Reporting Setup",
      description: "Establish systems for monthly and quarterly reporting of NBS returns and qualifying asset ratios to the RBI's supervisory department.",
    },
    {
      step: 5,
      title: "Bureau & SRO Integration",
      description: "Complete mandatory registration with Credit Information Companies and become a member of an RBI-recognized Self-Regulatory Organization.",
    },
  ],
  fees: [],
  feesMarkdown: `
Microfinance compliance costs are high due to the complexity of RBI reporting and the requirement for specialized audits.

### Annual Professional Compliance Table

| Compliance Component | Applicability | Estimated Annual Cost | Details |
| --- | --- | --- | --- |
| Statutory Audit Fee | Mandatory for all MFIs | Rs.20,000 to Rs.1,00,000+ | Varies based on turnover and branch network. |
| RBI / ROC Filings | Prudential Returns | Rs.25,000 to Rs.60,000 | Complexity of NBS-7 and SAC returns. |
| Bookkeeping & Tax | Monthly / Annual | Rs.30,000 to Rs.70,000 | Managing high-volume loan entries and GST/ITR. |
| Credit Bureau Reporting | Monthly Reporting | Rs.5,000 to Rs.15,000 | Fees for reporting to CICs like CIBIL/Equifax. |

### Statutory Capital & Penalty Costs

*   **Minimum NOF:** ₹10 Crore (Mandatory capital deposit, not a fee).
*   **MCA Filing Fee:** ₹200 to ₹600 per form based on authorized capital.
*   **Late Filing Penalty:** ₹100 per day per form (MCA).
*   **RBI Non-Compliance:** Can lead to supervisory action, monetary penalties, or cancellation of the MFI license.
`,
  faqs: [
    {
      q: "What is the 50-50 test for NBFC-MFIs?",
      a: "It means that more than **50% of the total assets** must be financial assets AND more than **50% of the gross income** must be from those financial assets.",
    },
    {
      q: "Can a Section 8 Company still do microfinance?",
      a: "While existing ones can continue, the MCA has recently **restricted new Section 8 companies** from engaging in microfinance activities.",
    },
    {
      q: "What is the maximum interest rate an MFI can charge?",
      a: "The RBI sets a **pricing cap** based on the cost of funds plus a margin, ensuring borrowers are not charged usurious rates.",
    },
  ],
};
