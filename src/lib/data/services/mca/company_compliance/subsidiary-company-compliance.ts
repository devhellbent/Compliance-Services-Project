// lib/data/services/mca/company_compliance/subsidiary-company-compliance.ts

import { ServiceData } from "@/lib/types";

export const subsidiaryCompanyComplianceData: ServiceData = {
  title: "Subsidiary Company Compliance",
  breadcrumb: ["Home", "MCA", "Subsidiary Compliance"],
  description:
    "Subsidiary Company Compliance involves the legal, financial, and regulatory obligations of a company owned or controlled by a parent entity.",
  overview: `Subsidiary Company Compliance is the fulfillment of all legal, financial, and regulatory obligations that a company, owned or controlled by a parent company, must adhere to in its operating jurisdiction. Since a subsidiary is a separate legal entity, it must comply with local statutory requirements.

Furthermore, compliance covers financial and tax mandates, including mandatory local audits, preparation of financial statements according to local accounting standards, and accurate reporting for corporate income tax and indirect taxes (like VAT/GST). A critical area is Transfer Pricing, ensuring that transactions with the parent are conducted at fair market value.

### Core Compliance Areas for a Foreign Subsidiary

#### Corporate Governance and Annual Filings
*   **Annual corporate filings** with the Registrar of Companies (AOC-4, MGT-7) are mandatory.
*   **Board and shareholder meetings** must be held regularly, with proper minutes maintained.
*   **Director KYC (DIR-3 KYC)** must be filed annually for all directors, including foreign nationals.

#### Financial and Tax Mandates
*   **Statutory Audit:** Mandatory local audit of the subsidiary's books as per the operating country's GAAP.
*   **Consolidated Reporting:** Accurate and timely local audits are essential for the parent company to prepare consolidated financial statements for its shareholders and global regulators.
*   **Income Tax Filing (ITR-6):** Mandatory annual corporate tax filing for the subsidiary entity.

#### Transfer Pricing and Cross-Border Compliance
*   **Arm's Length Pricing:** Transactions between the parent and subsidiary must be priced at fair market value to comply with transfer pricing regulations, a major area of scrutiny by tax authorities globally.
*   **FLA Return:** Mandatory annual filing of the Foreign Liabilities and Assets return with the Central Bank (e.g., RBI) if FDI has been received.
*   **FEMA Compliance:** Adherence to FEMA and RBI reporting is mandatory for repatriation of profits back to the parent company.`,
  advantages: [
    {
      icon: "Shield",
      title: "Liability and Risk Isolation",
      text: "The subsidiary's legal and financial liabilities are ring-fenced from the parent company. This protects the parent's assets (limited to its investment) even if the subsidiary faces lawsuits or financial losses, provided the corporate veil is respected.",
    },
    {
      icon: "Globe",
      title: "Local Market Adaptability",
      text: "Subsidiaries can more effectively comply with regional laws, including favorable local tax treatments, specific labor laws, and industry regulations, allowing the global group to adapt quickly to regional market changes.",
    },
    {
      icon: "TrendingUp",
      title: "Regulatory Clarity and Focus",
      text: "Operating as a distinct legal entity with its own board makes compliance ownership clear. The subsidiary's management is explicitly responsible for local adherence, making it easier to assign accountability and conduct independent audits.",
    },
    {
      icon: "Award",
      title: "Strategic Tax Optimization",
      text: "Subsidiaries can often leverage local tax incentives or credits not available to the parent. Additionally, depending on consolidation laws, losses in one subsidiary can sometimes offset profits in others to optimize the group's tax liability.",
    },
  ],
  disadvantages: [
    {
      icon: "ShieldAlert",
      title: "Transfer Pricing Scrutiny",
      text: "Transactions with the parent company must be priced 'at arm's length'. This requires complex documentation and is a high-risk area for audit by tax authorities who watch for profit shifting across borders.",
    },
    {
      icon: "Activity",
      title: "Global Regulatory Complexity",
      text: "Managing compliance across multiple subsidiaries in different countries is resource-intensive. What is compliant in one jurisdiction may be a violation in another, requiring a sophisticated and diverse global legal team.",
    },
    {
      icon: "FileText",
      title: "Financial Consolidation Burden",
      text: "The parent company must perform complex consolidated reporting, aggregating results from all subsidiaries while reconciling different local accounting standards (like IFRS vs Indian GAAP).",
    },
    {
      icon: "Lock",
      title: "Risk of Piercing the Corporate Veil",
      text: "If a parent company exercises excessive daily control, the legal separation may be disregarded by courts. This makes the parent directly liable for the subsidiary's debts, negating the benefit of limited liability.",
    },
  ],
  eligibility: [
    {
      title: "Relationship and Control Criteria",
      items: [
        "**Voting Power:** Parent company must hold more than 50% of the voting power or control the composition of the Board of Directors.",
        "**Legal Structure:** Must be registered as a separate legal entity (typically a Private Limited Company) in the operating country.",
        "**Material Subsidiary:** Faced with higher oversight if the subsidiary's income/net worth exceeds 10% of the consolidated group income/worth.",
      ],
    },
    {
      title: "Statutory Reporting Criteria",
      items: [
        "**Resident Director:** Mandatory requirement to have at least one director who is a resident of the country where the subsidiary is incorporated.",
        "**FLA Return:** Mandatory annual filing of the Foreign Liabilities and Assets return with the Central Bank (e.g., RBI) if FDI has been received.",
        "**Transfer Pricing:** Mandatory maintenance of documentation if inter-company transactions with the parent exceed specified local thresholds.",
      ],
    },
    {
      title: "Annual Governance Criteria",
      items: [
        "**Statutory Audit:** Compulsory annual audit of the subsidiary's books by a local auditor to ensure compliance with local GAAP.",
        "**Annual MCA/ROC Filings:** Mandatory filing of Form AOC-4 (Financials) and Form MGT-7 (Annual Return) with the Registrar of Companies.",
        "**Income Tax Filing:** Mandatory annual corporate tax filing (e.g., ITR-6 in India) for the subsidiary entity.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Parent Documents",
      content: {
        title: "From the Parent Company",
        items: [
          "Certified copies of the Parent Company's COI, MOA, and AOA.",
          "Board Resolution from the Parent authorizing the subsidiary and investment.",
          "Power of Attorney (POA) for the authorized signatory in the local country.",
          "Proof of investment/capital remittance into the subsidiary's bank account.",
        ],
      },
    },
    {
      tabTitle: "Annual Statutory",
      content: {
        title: "Mandatory Annual Records",
        items: [
          "Audited Financial Statements (Balance Sheet, P&L, Cash Flow).",
          "Statutory Auditor's Report and detailed Notes to Accounts.",
          "Transfer Pricing Study and Arm's Length transaction reports.",
          "Notice and Minutes of the AGM and Board Meetings approving accounts.",
          "Annual Return (MGT-7) detailing the current shareholding structure.",
        ],
      },
    },
    {
      tabTitle: "Director & KYC",
      content: {
        title: "For local governance",
        items: [
          "Valid Passports and Visas (for foreign directors).",
          "PAN Card and Aadhaar Card (for the local resident director).",
          "Digital Signature Certificate (DSC) of all authorized directors.",
          "Form DIR-2 (Consent to act as director) for all board members.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Group Consolidation Prep",
      description: "Compile local financial records and ensure they are ready for both local statutory audit and global group consolidation.",
    },
    {
      step: 2,
      title: "Local Statutory Audit",
      description: "Appoint a local auditor to conduct the annual audit of the subsidiary's books as per the operating country's laws.",
    },
    {
      step: 3,
      title: "Transfer Pricing Audit",
      description: "Conduct a transfer pricing analysis to ensure that all transactions with the parent company are at fair market value.",
    },
    {
      step: 4,
      title: "MCA / ROC Filings",
      description: "Convene the Annual General Meeting and file the audited financial statements (AOC-4) and Annual Return (MGT-7) on the ROC portal.",
    },
    {
      step: 5,
      title: "Central Bank (FLA) Filing",
      description: "Submit the mandatory annual FLA return to the Central Bank (e.g., RBI) to report foreign investment and liabilities by July 15th.",
    },
  ],
  fees: [],
  feesMarkdown: `
Subsidiary compliance costs are higher due to global reporting needs and transfer pricing documentation.

### Annual Professional Compliance Table

| Compliance Service | Applicability | Estimated Professional Fee (Annual) | Key Factors Affecting Cost |
| --- | --- | --- | --- |
| Statutory Audit | Mandatory for all subsidiaries | Rs.20,000 to Rs.60,000+ | Volume of transactions. |
| Transfer Pricing Study | Inter-company transactions | Rs.50,000 to Rs.2,50,000+ | Complexity and volume. |
| MCA / ROC Filings | AOC-4 and MGT-7 | Rs.10,000 to Rs.25,000 | Number of directors. |
| RBI / FLA Compliance | Foreign Owned Subsidiaries | Rs.5,000 to Rs.15,000 | FDI inflow frequency. |

### Statutory Government (MCA) Filing Fees

| Authorized Share Capital | Normal ROC Fee (Per Form) | Late Filing Penalty |
| --- | --- | --- |
| Up to ₹1 Crore | ₹200 to ₹600 | ₹100 per day per form |
| DIR-3 KYC (Director) | NIL (on time) | ₹5,000 (after deadline) |

*Note: Late filing penalties for AOC-4 and MGT-7 have no upper limit and accumulate daily.*
`,
  faqs: [
    {
      q: "What is Transfer Pricing in subsidiary compliance?",
      a: "It is the rule that requires transactions between a parent and its subsidiary to be priced at **'Arm's Length'** (fair market price), ensuring profits aren't shifted to low-tax jurisdictions.",
    },
    {
      q: "What is the FLA return and is it mandatory?",
      a: "Yes. The **Foreign Liabilities and Assets (FLA)** return is mandatory for all companies receiving FDI and must be filed with the RBI by **July 15th** every year.",
    },
    {
      q: "Can a subsidiary have its own independent directors?",
      a: "Yes. In fact, for **material subsidiaries** of listed parent companies, having independent directors is often a mandatory governance requirement.",
    },
  ],
};
