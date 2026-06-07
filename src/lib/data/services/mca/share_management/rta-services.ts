import { ServiceData } from "@/lib/types";

export const rtaServicesData: ServiceData = {
  title: "RTA Services",
  breadcrumb: ["Home", "MCA", "Share Management Solutions", "RTA Services"],
  description: "Specialized registrar and share transfer agent services for managing company shareholder records, dividends, and demat verifications.",
  overview: `A **Registrar and Share Transfer Agent (RTA)** is a SEBI-registered intermediary that manages a company's shareholder records.

They act as the primary link between the company (the issuer), the shareholders, and the depositories (NSDL/CDSL). For investors, the RTA is the official "custodian of information," ensuring that the register of members is always accurate and up-to-date. They are essential for any company wanting to go digital.`,
  advantages: [
    { icon: "Zap", title: "Regulatory Compliance", text: "Ensures companies adhere to SEBI and MCA regulations, including mandatory half-yearly filing of Form PAS-6." },
    { icon: "ShieldCheck", title: "Operational Efficiency", text: "Companies don't need to build expensive in-house systems to manage thousands of shareholders; outsourcing to an RTA is more cost-effective." },
    { icon: "TrendingUp", title: "Accurate Dividend Payouts", text: "RTAs maintain updated bank details and ensure dividends are credited directly via ECS/NEFT, reducing the risk of lost warrants." },
    { icon: "UserCheck", title: "Fraud Prevention", text: "Performs rigorous signature and certificate verification during dematerialisation, ensuring shares aren't fraudulently transferred." },
    { icon: "Award", title: "Single-Window Service", text: "Investors can update their address, bank details, or nomination in one go via the RTA's portal for multiple companies." },
    { icon: "Lock", title: "Data Security", text: "Professional RTAs use high-end, encrypted systems to store the 'Register of Members', protecting records from data breaches or loss." },
  ],
  disadvantages: [
    { icon: "CreditCard", title: "Ongoing Service Fees", text: "Requires annual maintenance fees and security deposits, which can be a recurring overhead for unlisted companies." },
    { icon: "AlertTriangle", title: "Service Dependency", text: "Any delay in the RTA's verification process can stall shareholder requests like dematerialisation or transmission." },
  ],
  eligibility: [
    {
      title: "Mandatory For Companies",
      items: [
        "**Unlisted Public Companies:** Must have an RTA to facilitate demat.",
        "**Non-Small Private Companies:** Required under MCA Rule 9B for electronic share management.",
        "**Listed Entities:** Mandatory to hire a SEBI-registered RTA for market operations.",
      ],
    },
    {
      title: "Prerequisites for Onboarding",
      items: [
        "**Tripartite Agreement:** Signing a formal contract between the Company, the RTA, and the Depository.",
        "**Board Resolution:** Appointing a specific RTA as the company's official agent.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Company Setup",
      content: {
        title: "Required for Onboarding",
        items: [
          "**Certificate of Incorporation:** CTC of the company's charter.",
          "**PAN Card:** Of the company for tax and portal registration.",
          "**Tripartite Agreement:** Executed on non-judicial stamp paper.",
        ],
      },
    },
    {
      tabTitle: "Investor Requests",
      content: {
        title: "Handled by RTA",
        items: [
          "**Demat Request Form (DRF):** For converting physical shares to electronic.",
          "**Form ISR-1:** For updating KYC, PAN, and nomination details.",
          "**Transmission Request:** Legal heir documents in case of shareholder death.",
        ],
      },
    },
    {
      tabTitle: "Compliance",
      content: {
        title: "Reporting Documents",
        items: [
          "**Form PAS-6:** Half-yearly reconciliation of share capital report.",
          "**Register of Members:** Maintained digitally by the RTA.",
          "**Dividend List:** Master list for bank payouts.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "RTA Selection", description: "Select a SEBI-registered RTA (e.g., CAMS, KFintech, Purva Sharegistry)." },
    { step: 2, title: "Board Resolution", description: "Pass a board resolution to appoint the RTA and authorize the agreement." },
    { step: 3, title: "Tripartite Agreement", description: "Sign the three-way agreement between the Company, RTA, and NSDL/CDSL." },
    { step: 4, title: "Data Transfer", description: "The company hands over the physical 'Register of Members' to the RTA to digitize." },
    { step: 5, title: "ISIN Activation", description: "The RTA coordinates with the depository to activate the company's ISIN." },
    { step: 6, title: "Live Operations", description: "The RTA starts processing shareholder requests (demat, transfers, dividends) on behalf of the company." },
  ],
  fees: [
    { component: "Setup / Onboarding Fee", fees: "₹15,000 - ₹50,000", remarks: "One-time initial cost." },
    { component: "Annual Maintenance (RTA)", fees: "₹20,000 - ₹1,00,000", remarks: "Varies by number of shareholders (folios)." },
    { component: "Custody Fee (per folio)", fees: "₹8 - ₹11", remarks: "Paid annually to the depository via the RTA." },
    { component: "PAS-6 Certification", fees: "₹5,000 - ₹15,000", remarks: "Per half-year filing." },
    { component: "Transmission Processing", fees: "₹500 - ₹2,500", remarks: "Per request for legal heirs." },
    { component: "GST", fees: "18%", remarks: "Standard rate on all service fees." },
  ],
  faqs: [
    { q: "What is the difference between a Broker and an RTA?", a: "A broker (DP) handles your trades, while the RTA manages the actual company records and verifies your ownership rights." },
    { q: "Is an RTA mandatory for all private companies?", a: "Only for those that are not 'small companies' (Capital < ₹4Cr and Turnover < ₹40Cr) or those that choose to go digital voluntarily." },
    { q: "Can I contact the RTA directly?", a: "Yes, for matters like dividend non-receipt, address changes, or demat status, you can contact the RTA listed on the company's website." },
    { q: "Who are the major RTAs in India?", a: "Major players include CAMS, KFintech, Link Intime, and Bigshare Services." },
  ],
};
