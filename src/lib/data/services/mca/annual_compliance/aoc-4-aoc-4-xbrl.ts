import { ServiceData } from "@/lib/types";

export const aoc4FilingData: ServiceData = {
  title: "AOC-4/AOC-4 XBRL",
  breadcrumb: ["Home", "MCA", "Annual & Half-Yearly Compliance", "AOC-4/AOC-4 XBRL"],
  description: "Mandatory annual filing of financial statements with the Registrar of Companies to ensure transparency and legal compliance.",
  overview: `**Form AOC-4** is the primary statutory e-form used by companies in India to file their annual financial statements with the Registrar of Companies (ROC).

**AOC-4 XBRL** is a specialized version of this form where financial data must be filed in the standardized digital XBRL (eXtensible Business Reporting Language) format. This digitizes financial reporting, making data easier to analyze and compare for regulators and stakeholders alike. Both forms must typically be filed within 30 days of the company's Annual General Meeting (AGM).`,
  advantages: [
    { icon: "ShieldCheck", title: "Statutory Compliance", text: "Fulfills the legal mandate under Section 137 of the Companies Act, avoiding heavy penalties and potential director disqualification." },
    { icon: "Search", title: "Public Transparency", text: "Audited financials become formal records, allowing shareholders, investors, and lenders to assess the company's health and performance." },
    { icon: "Landmark", title: "Business Credibility", text: "A 'Good Standing' status on the MCA portal is vital for building trust with banks, vendors, and potential investors." },
    { icon: "Zap", title: "Financial Facilitation", text: "Financial institutions rely on these filed statements to evaluate creditworthiness before approving loans or credit lines." },
    { icon: "BarChart", title: "Data Standardization (XBRL)", text: "Converts data into a machine-readable format, enabling easy extraction, benchmarking, and cross-industry performance analysis." },
    { icon: "FileCheck", title: "Improved Data Quality", text: "XBRL validation checks minimize manual errors, ensuring assets equal liabilities and mandatory disclosures are present." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "High Delay Penalties", text: "Late filing attracts a penalty of ₹100 per day, which can accumulate to lakhs of rupees if not addressed." },
    { icon: "Lock", title: "Director Risk", text: "Failure to file for three consecutive years results in the disqualification of directors from all Indian company boards for 5 years." },
    { icon: "FileWarning", title: "Technical Complexity", text: "AOC-4 XBRL requires specialized software and taxonomy mapping, often necessitating professional assistance." },
  ],
  eligibility: [
    {
      title: "Mandatory Filing (AOC-4)",
      items: [
        "Every company registered in India (Private, Public, OPC, Section 8, etc.) must file AOC-4 unless required to file XBRL.",
      ],
    },
    {
      title: "Mandatory XBRL Filing Criteria",
      items: [
        "All companies listed with any Stock Exchange in India and their Indian subsidiaries.",
        "Companies with Paid-up Capital of ₹5 Crore or more.",
        "Companies with Turnover of ₹100 Crore or more.",
        "Companies required to follow Indian Accounting Standards (Ind AS).",
      ],
    },
    {
      title: "Exemptions from XBRL",
      items: [
        "Banking, Insurance, and Power Sector companies.",
        "NBFCs and Housing Finance Companies (HFCs).",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Core Financials",
      content: {
        title: "Mandatory Records",
        items: [
          "Balance Sheet and Profit & Loss Account.",
          "Cash Flow Statement (except for Small Companies and OPCs).",
          "Notes to Accounts (explanatory notes).",
          "Auditor's Report (including CARO annexures if applicable).",
          "Board's Report (under Section 134(3)).",
        ],
      },
    },
    {
      tabTitle: "Web Forms (V3)",
      content: {
        title: "Mandatory Linked Forms",
        items: [
          "Extract of Board's Report (structured digital version).",
          "Extract of Auditor's Report (structured digital summary).",
          "Form CSR-2 (if CSR provisions apply to the company).",
        ],
      },
    },
    {
      tabTitle: "Conditional Proofs",
      content: {
        title: "Situational Documents",
        items: [
          "**AOC-1:** For companies with subsidiaries or joint ventures.",
          "**AOC-2:** For disclosure of related party transactions.",
          "**MR-3:** Secretarial Audit Report for listed and large public companies.",
          "AGM Extension Letter (if applicable).",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Finalize Audit", description: "Complete the annual audit and obtain signed financial statements and auditor's report." },
    { step: 2, title: "Board Approval", description: "Hold a board meeting to approve the financial statements and the Board's Report." },
    { step: 3, title: "AGM Adoption", description: "Adopt the audited financial statements at the Annual General Meeting (AGM)." },
    { step: 4, title: "XBRL Conversion", description: "For applicable companies, map financial data to the MCA taxonomy and generate the XBRL instance document." },
    { step: 5, title: "Fill E-Form", description: "Prepare Form AOC-4 or AOC-4 XBRL on the MCA portal, linking mandatory web forms." },
    { step: 6, title: "Submit", description: "Affix DSCs of Director and Professional, upload, and pay the filing fee within 30 days of the AGM." },
  ],
  fees: [
    { component: "Normal Fee (Capital < ₹1 Lakh)", fees: "₹200", remarks: "Standard fee per form." },
    { component: "Normal Fee (Capital ₹1Cr+)", fees: "₹600", remarks: "Standard fee per form." },
    { component: "Daily Late Filing Fee", fees: "₹100 / day", remarks: "Calculated from the day after the due date." },
    { component: "Maximum Penalty Cap", fees: "₹2,00,000", remarks: "Per form, for the company." },
  ],
  faqs: [
    { q: "What is the deadline for filing AOC-4?", a: "Within 30 days from the date of the Annual General Meeting (AGM)." },
    { q: "Do small companies need to file XBRL?", a: "No, unless they meet the specific capital (₹5Cr+) or turnover (₹100Cr+) thresholds." },
    { q: "What happens if the AGM is not held?", a: "Financial statements must still be filed within 30 days of the date the AGM *should* have been held, along with a statement of reasons for not holding it." },
    { q: "Can I file AOC-4 without an auditor?", a: "No, the form requires the attachment of the Auditor's Report and the digital signature of a practicing professional for certification." },
  ],
};
