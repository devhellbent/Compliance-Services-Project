// lib/data/services/mca/company_compliance/fema-rbi-compliance.ts

import { ServiceData } from "@/lib/types";

export const femaRbiComplianceData: ServiceData = {
  title: "FEMA / RBI Compliance Services",
  breadcrumb: ["Home", "MCA", "FEMA Compliance"],
  description:
    "FEMA / RBI compliance governs all cross-border financial transactions in India, including FDI, ODI, and external borrowings.",
  overview: `The FEMA / RBI Compliance framework is the primary legal mechanism governing all cross-border financial transactions in India. It is a mandatory compliance regime for any Indian entity or individual dealing with foreign currency, foreign investment, or overseas financial operations.

FEMA (Foreign Exchange Management Act), 1999, is the actual law that governs foreign exchange. Its objective is to facilitate external trade and payments and to promote the orderly development and maintenance of the foreign exchange market in India. The RBI (Reserve Bank of India) is the regulator empowered by FEMA to implement, monitor, and enforce these regulations. In essence, FEMA is the rulebook, and the RBI is the referee.

### Key Areas Covered by FEMA/RBI Compliance

FEMA divides foreign exchange transactions into two main categories, each with its own set of rules:

#### Capital Account Transactions
These are transactions that alter the assets or liabilities of a person resident in India (or resident outside India). This area is highly regulated and requires mandatory reporting.

| Transaction Type | Description | Key Compliance Requirement |
| --- | --- | --- |
| Foreign Direct Investment (FDI) - Inflow | Foreign investor brings capital into an Indian company (e.g., setting up a subsidiary). | FC-GPR (Foreign Currency-Gross Provisional Return) filed on the Single Master Form (SMF) portal within 30 days of issuing shares. |
| Overseas Direct Investment (ODI) - Outflow | Indian company invests in a subsidiary or joint venture abroad. | Form ODI filed with the Authorized Dealer (AD) Category-I bank before making the investment. |
| External Commercial Borrowings (ECB) | Indian company raises a loan from a foreign lender. | Form ECB (Monthly Reporting) filed through the AD Category-I bank, detailing drawdown and repayment. |
| Transfer of Shares | Transfer of shares of an Indian company between a resident and a non-resident. | FC-TRS (Foreign Currency Transfer of Shares) filed on the SMF portal within 60 days of consideration payment. |

#### Current Account Transactions
These are transactions arising out of the normal course of business, such as trade payments, interest, dividends, and remittances. These are generally permitted but may have limits and reporting requirements.

| Transaction Type | Description | Key Compliance Requirement |
| --- | --- | --- |
| Trade Transactions | Import/Export payments and receipts. | Timely realization and repatriation of export proceeds back to India within stipulated periods. |
| Liberalised Remittance Scheme (LRS) | Allows resident individuals to remit up to a certain limit (currently $250,000 per financial year) for travel, education, medical treatment, or investment abroad. | Form 15CA/15CB (Tax clearance certificates) must be filed for certain remittances. |`,
  advantages: [
    {
      icon: "TrendingUp",
      title: "Enhanced Investor Confidence and Credibility",
      text: "A clear, published, and enforced regulatory framework provides predictability for foreign investors. By complying, an Indian entity demonstrates reliability and a commitment to legal standards, making it highly attractive for Foreign Direct Investment (FDI) and other foreign capital inflows.",
    },
    {
      icon: "Shield",
      title: "Legal Protection and Risk Mitigation",
      text: "Compliance ensures a business operates within the legal boundaries, significantly mitigating the risk of severe financial penalties, asset seizure, or legal disputes. This certainty allows companies to plan their global transactions and expansion (Overseas Direct Investment - ODI) without fear of unexpected regulatory hurdles.",
    },
    {
      icon: "Globe",
      title: "Facilitation of International Trade",
      text: "FEMA replaced the highly restrictive FERA (Foreign Exchange Regulation Act), liberalizing the economy. Compliance now facilitates smooth and simplified current account transactions (like exports/imports and remittances) without requiring prior government permission for most activities, thus boosting international trade.",
    },
    {
      icon: "Activity",
      title: "Economic Stability and Transparency",
      text: "By mandating meticulous reporting on all capital flows (e.g., filing FC-GPR, FC-TRS, and FLA forms), the RBI gains the data necessary to monitor, manage, and stabilize the foreign exchange market. This helps prevent illegal money transfers and sudden capital movements that could destabilize the Indian Rupee.",
    },
  ],
  disadvantages: [
    {
      icon: "Clock",
      title: "High Complexity and Documentation Burden",
      text: "FEMA regulations are frequently updated through RBI Master Directions and Circulars. Businesses must continuously track these changes and comply with highly specific documentation requirements for every transaction, leading to a substantial administrative workload. Simple errors in reporting (e.g., delayed FC-GPR filing) can trigger penalties.",
    },
    {
      icon: "Activity",
      title: "Significant Cost of Compliance",
      text: "Compliance requires engaging specialized Chartered Accountants (CAs) or legal experts for valuation, transaction structuring, and filing complex forms like the Annual Performance Report (APR) or Transfer Pricing documentation. This professional fee cost is substantial, especially for startups and small-scale companies.",
    },
    {
      icon: "AlertCircle",
      title: "Severe Penalties for Non-Compliance",
      text: "The consequences of a FEMA contravention are severe. Penalties can be up to three times the amount involved in the contravention or a fixed fine of ₹2,00,000, plus an additional penalty of ₹5,000 per day for continuing violations. These penalties pose an existential risk to small businesses.",
    },
    {
      icon: "Lock",
      title: "Restriction on Transaction Flexibility",
      text: "While current account transactions are liberalized, capital account transactions (like investments and borrowings) are subject to caps, restrictions, and pre-conditions (e.g., end-use restrictions for External Commercial Borrowings - ECB). These limitations can restrict a company's financial flexibility and strategic decision-making in the global market.",
    },
  ],
  eligibility: [
    {
      title: "Compliance Triggers: Nature of Transaction",
      items: [
        "**Capital Account Transactions:** Transactions that alter the assets or liabilities of a person resident in India (or assets/liabilities in India of a non-resident). Includes FDI, ODI, and ECB.",
        "**Current Account Transactions:** Transactions arising out of the normal course of business, such as trade payments, remittances for services, dividends, or interest payments. Must be routed through an AD Category-I bank.",
      ],
    },
    {
      title: "Eligible Persons and Entities",
      items: [
        "**Persons Resident in India:** Indian citizens, companies (Private, Public, LLP), proprietorship concerns, and partnership firms in India for ≥182 days in the preceding financial year.",
        "**Indian Entities with Foreign Footprints:** Any Indian company that has received FDI, holds foreign assets, or has made an investment abroad (ODI).",
        "**Non-Residents and Foreign Entities:** NRIs, PIOs, and foreign companies/investors subject to FEMA for investments, acquisitions, or financial dealings within India.",
      ],
    },
    {
      title: "Specific Reporting Criteria",
      items: [
        "**FC-GPR Filing:** Triggered when an Indian company allots shares or eligible securities to a foreign investor against an FDI inflow. Must file within 30 days of allotment.",
        "**FC-TRS Filing:** Required whenever there is a transfer of existing shares of an Indian company between a resident and a non-resident (or vice-versa). Must file within 60 days of consideration payment.",
        "**Annual Performance Report (APR):** Required to submit an APR to the AD bank by December 31st every year for each ODI made in a foreign JV or WOS.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "FDI Reporting (FC-GPR)",
      content: {
        title: "Required within 30 days of allotment",
        items: [
          "Certificate of Incorporation (COI), MOA, and AOA of the Indian Company.",
          "Certified copy of the Board Resolution approving the allotment and the filing of Form FC-GPR.",
          "Foreign Inward Remittance Certificate (FIRC) issued by the AD Category-I bank.",
          "KYC Report on the foreign investor obtained from the AD Bank.",
          "Valuation Certificate from a CA or Merchant Banker detailing the FMV method.",
          "Company Secretary (CS) Certificate confirming procedural formalities compliance.",
          "Pre and Post Shareholding Pattern demonstrating the change in foreign equity.",
        ],
      },
    },
    {
      tabTitle: "Annual Compliance",
      content: {
        title: "Ongoing regulatory oversight",
        items: [
          "Foreign Liabilities and Assets (FLA) Return (filed annually by July 15th).",
          "Audited Financial Statements (Balance Sheet and P&L Account for the reporting year).",
          "Authority Letter authorizing the representative (CA/CS) to file on the RBI's FLAIR portal.",
          "Annual Performance Report (APR) for ODI (filed by December 31st).",
          "Audited Financial Statements of the Foreign Subsidiary/JV (translated into English).",
          "Statutory Auditor's Certificate of the Indian party.",
        ],
      },
    },
    {
      tabTitle: "ECB Reporting",
      content: {
        title: "For loans from non-resident lenders",
        items: [
          "Loan Registration Number (LRN) evidence (reported within 7 working days of agreement).",
          "Copy of the formal ECB Agreement between the Indian borrower and foreign lender.",
          "Form ECB-2 Return (Monthly statement detailing all transactions, drawdowns, and repayments).",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Transaction Structuring",
      description: "Ensure the proposed foreign investment or overseas acquisition complies with the 'Sectoral Caps' and 'Pricing Guidelines' set by the RBI.",
    },
    {
      step: 2,
      title: "Remittance & FIRC",
      description: "Receive or send funds through an Authorized Dealer (AD) Category-I bank and obtain the mandatory FIRC/KYC report.",
    },
    {
      step: 3,
      title: "Valuation & Allotment",
      description: "Obtain a Valuation Certificate from a CA to determine the fair price and allot shares within 60 days of receiving the funds.",
    },
    {
      step: 4,
      title: "Reporting to RBI (SMF)",
      description: "File the relevant form (FC-GPR, FC-TRS, or ODI) on the Single Master Form portal within the prescribed statutory windows (30/60 days).",
    },
    {
      step: 5,
      title: "Annual Reporting",
      description: "Submit the FLA Return by July 15th and the APR by December 31st on the respective RBI portals (FLAIR/SMF).",
    },
  ],
  fees: [],
  feesMarkdown: `
FEMA / RBI compliance fees are primarily driven by professional costs for valuation and the high stakes of regulatory reporting.

### Professional Fees (CA/CS/Consultant)

| Compliance Service | Typical Professional Fee Range (Approx. INR) | Key Determinants |
| --- | --- | --- |
| FC-GPR / FC-TRS Filing | Rs.10,000 to Rs.30,000 per filing | Complexity of the transaction and shareholding structure. |
| FLA Return (Annual) | Rs.5,000 to Rs.15,000 | Required even for 'nil' returns. |
| Valuation Certificate | Rs.15,000 to Rs.50,000+ | Mandatory for FDI/share transfers; issued by a CA or Merchant Banker. |
| Ongoing Retainer & Advisory | Rs.15,000 to Rs.40,000 per month | For companies with frequent cross-border transactions (ECBs, remittances). |

### Statutory Government Fees & Penalties

| Type | Fee / Penalty Structure |
| --- | --- |
| Routine Filing (SMF/FLAIR) | NIL (Processed through AD Bank service charges) |
| Compounding Application Fee | ₹5,000 (Mandatory for regularization) |
| Compounding Penalty | Up to 3 times the amount involved in the contravention |
| Fixed Fine (Contravening rules) | ₹2,00,000 |
| Continuing Violation | Additional ₹5,000 per day |

*Note: Late Submission Fees (LSF) may be levied by the RBI to regularize delayed filings without full compounding.*
`,
  faqs: [
    {
      q: "What is the difference between FEMA and RBI in this context?",
      a: "FEMA (Foreign Exchange Management Act) is the **legal rulebook**, while the RBI is the **referee/regulator** that implements and enforces those rules.",
    },
    {
      q: "When must the FLA Return be filed?",
      a: "It must be filed by **July 15th** every year. If the audit isn't complete, you can file using provisional accounts and revise it later.",
    },
    {
      q: "What are 'Capital Account Transactions'?",
      a: "These are transactions that **alter the assets or liabilities** of a person resident in India (or resident outside India), such as FDI, ODI, or ECB.",
    },
  ],
};
