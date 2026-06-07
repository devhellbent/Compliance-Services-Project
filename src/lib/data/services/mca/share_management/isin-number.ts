import { ServiceData } from "@/lib/types";

export const isinNumberData: ServiceData = {
  title: "ISIN Number",
  breadcrumb: ["Home", "MCA", "Share Management Solutions", "ISIN Number"],
  description: "International standard 12-character identification code for financial instruments, mandatory for dematerialization and digital share trading.",
  overview: `The **ISIN (International Securities Identification Number)** is a unique 12-character alphanumeric code used to identify financial instruments like stocks, bonds, and mutual funds.

Managed by the National Securities Depository Limited (NSDL) under SEBI's oversight, it ensures that every security has a distinct global identity. While ticker symbols may vary by exchange, the ISIN remains constant, facilitating seamless clearing and settlement of trades across borders.`,
  advantages: [
    { icon: "Zap", title: "Global Identification", text: "Provides a universal 'fingerprint' for your company's shares, making them recognizable and tradable by investors worldwide." },
    { icon: "ShieldCheck", title: "Eliminates Ambiguity", text: "Removes confusion caused by similar company names or different ticker symbols on various exchanges (e.g., NSE vs. NYSE)." },
    { icon: "CheckCircle", title: "Error Detection", text: "The 12th character is a 'check digit' that allows trading systems to instantly flag typos, preventing accidental trades of the wrong security." },
    { icon: "BarChart", title: "Mandatory for Demat", text: "An ISIN is the fundamental prerequisite for converting physical share certificates into electronic form (Demat)." },
    { icon: "RefreshCw", title: "Automated Corporate Actions", text: "Ensures that dividends, bonus shares, and stock splits are accurately tracked and credited to the correct shareholders' accounts." },
    { icon: "Search", title: "Regulatory Transparency", text: "Enables SEBI and RBI to monitor market health and track ownership with high precision, building trust with institutional investors." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "Ongoing Compliance", text: "Requires the appointment of a Registrar and Transfer Agent (RTA) and the payment of annual custody fees to the depository." },
    { icon: "Clock", title: "Application Lead Time", text: "The process involves executing a tripartite agreement and obtaining depository approval, which can take 10-15 working days." },
  ],
  eligibility: [
    {
      title: "Mandatory Entities",
      items: [
        "**Public Limited Companies:** All unlisted public companies must facilitate demat.",
        "**Private Limited Companies (Non-Small):** Companies exceeding ₹4Cr capital or ₹40Cr turnover.",
        "**Listed Companies:** Mandatory for every class of security traded on NSE/BSE.",
        "**Section 8 Companies:** If they have a share capital.",
      ],
    },
    {
      title: "Eligible Instruments",
      items: [
        "Equity Shares (Common stock).",
        "Debt Instruments (Bonds/Debentures).",
        "Government Securities (T-bills/G-Secs).",
        "Mutual Fund Schemes.",
        "Units of Alternative Investment Funds (AIFs).",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Legal Identity",
      content: {
        title: "Corporate Identity Proofs",
        items: [
          "**Certificate of Incorporation (COI):** Certified true copy of the company charter.",
          "**MOA & AOA:** Full, updated copies of the company's constitution.",
          "**Company PAN Card:** Self-attested copy of the tax identifier.",
        ],
      },
    },
    {
      tabTitle: "Financials & Certs",
      content: {
        title: "Financial & Professional Proof",
        items: [
          "**Audited Financial Statements:** Latest annual report (Balance Sheet and P&L).",
          "**Net Worth Certificate:** Certified by a practicing CA or CS.",
          "**Board Resolution:** Authorizing the ISIN application and signatories.",
        ],
      },
    },
    {
      tabTitle: "Operational",
      content: {
        title: "Required for Onboarding",
        items: [
          "**Tripartite Agreement:** Executed on ₹600 stamp paper between Company, RTA, and Depository.",
          "**RTA Appointment Letter:** Confirming the hiring of a SEBI-registered agent.",
          "**Master Creation Form (MCF):** Detailing share face value and issuance counts.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "RTA Appointment", description: "Hire a SEBI-registered Registrar and Transfer Agent (RTA)." },
    { step: 2, title: "Board Approval", description: "Pass a resolution authorizing the ISIN application and the Tripartite Agreement." },
    { step: 3, title: "Agreement Execution", description: "Execute the Tripartite Agreement on non-judicial stamp paper." },
    { step: 4, title: "Data Submission", description: "Prepare the Master Creation Form (MCF) with details of all issued share classes." },
    { step: 5, title: "NSDL/CDSL Filing", description: "Submit the complete physical and digital document set to the chosen depository." },
    { step: 6, title: "ISIN Activation", description: "The depository verifies the data and issues the unique 12-character ISIN code." },
  ],
  fees: [
    { component: "Joining Fee (NSDL/CDSL)", fees: "₹15,000 - ₹20,000", remarks: "One-time admission fee." },
    { component: "Annual Custody Fee (Capital < ₹2.5Cr)", fees: "₹5,000", remarks: "Ongoing annual AMC." },
    { component: "Annual Custody Fee (Capital > ₹20Cr)", fees: "₹75,000", remarks: "Based on total nominal value." },
    { component: "Security Deposit", fees: "2x Annual Fee", remarks: "Required for non-small private companies." },
    { component: "RTA Service Fee", fees: "₹5,000 - ₹15,000", remarks: "Annual fee paid to the RTA." },
    { component: "Stamp Duty (Agreement)", fees: "₹600", remarks: "On non-judicial stamp paper." },
  ],
  faqs: [
    { q: "Is an ISIN mandatory for private companies?", a: "Yes, for all private companies that are not 'small companies'. The deadline for compliance is June 30, 2025." },
    { q: "Do I need separate ISINs for Equity and Preference shares?", a: "Yes. Each class of security (Equity, Preference, Debentures) requires its own unique ISIN." },
    { q: "Who manages the ISIN system in India?", a: "The National Securities Depository Limited (NSDL) is the primary managing body for ISINs in India under SEBI's oversight." },
    { q: "What is the 'Check Digit' in an ISIN?", a: "The 12th character, calculated mathematically to ensure the previous 11 characters were entered correctly in trading systems." },
  ],
};
