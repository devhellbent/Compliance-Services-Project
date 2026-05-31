// lib/data/services/microfinance-company-registration.ts

import { ServiceData } from "@/lib/types";

export const microfinanceCompanyRegistrationData: ServiceData = {
  title: "Microfinance Company Registration",
  breadcrumb: ["Home", "Registrations", "Microfinance Company"],
  description:
    "Bridge the financial inclusion gap with purpose-driven lending. Microfinance Company registration enables provision of small-scale financial services to underserved communities, promoting entrepreneurship and economic empowerment at the grassroots level.",
  overview: `**What Is Microfinance Company?**

A **Microfinance Company (MFC)**, also known as a Microfinance Institution (MFI), is a financial entity dedicated to providing financial services to low-income individuals, households, and small businesses that are typically excluded from traditional banking services

**Key Definition and Role:**

-   **Financial Inclusion:** Their primary function is to promote financial inclusion by bridging the gap left by conventional banks, which often do not find it economically viable to offer small, collateral-free loans.

-   **Target Population:** They specifically target the \"unbanked\" or \"underserved\" populations, particularly in rural or marginalized communities, including women and micro-entrepreneurs.

-   **Services Offered:** While they are best known for **microcredit** (small loans, often under a specified limit like ₹1 lakh in India), their services also include:

-   **Savings and Checking Accounts**

-   **Micro-insurance** (e.g., health or life insurance)

-   **Financial and Business Education** (Financial literacy programs)

-   **Fund Transfers/Remittances**

Microfinance Company Registration in India can be done in two ways: **NBFC-MFI** (regulated by RBI) and **Section 8 Company** (regulated by MCA).

**NBFC-MFI** is suitable for larger lending operations. It requires a minimum capital of ₹5 crore (₹2 crore for North Eastern states), incorporation as a Private or Public Limited Company, and RBI approval. At least 85% of loans must be given to low-income groups, with specific income and loan limits prescribed by RBI. The process involves company incorporation, capital infusion, bank account opening, and applying to RBI for a Certificate of Registration. This process may take 3--6 months.

**Section 8 Microfinance Company** is a simpler option for NGOs or small lending activities. It does not require RBI approval or high capital. It is registered under the Companies Act as a non-profit entity and can provide microloans from grants or own funds but cannot accept public deposits.`,
  whyChooseUs: [
    {
      icon: "HeartHandshake",
      title: "Social Impact",
      text: "Contributes to poverty alleviation and financial inclusion.",
    },
    {
      icon: "Users",
      title: "Financial Inclusion",
      text: "Provides financial services to the 'unbanked' population.",
    },
    {
      icon: "Landmark",
      title: "Access to Grants",
      text: "Can attract grants and donations.",
    },
    {
      icon: "ShieldCheck",
      title: "No Initial RBI Approval",
      text: "Can start operations without an RBI license (as a Section 8 company).",
    },
  ],
  advantages: [
    {
      icon: "Heart",
      title: "Social Impact",
      text: "Directly contributes to poverty alleviation and the economic empowerment of marginalized communities.",
    },
    {
      icon: "TrendingUp",
      title: "High Market Demand",
      text: "Massive untapped market in rural and semi-urban India for small-scale credit.",
    },
    {
      icon: "Layers",
      title: "Scalable Business Model",
      text: "Can grow from a local NGO to a large-scale NBFC as operations expand.",
    },
    {
      icon: "Users",
      title: "Lower Risk (Group Model)",
      text: "Peer pressure within lending groups ensures high repayment rates.",
    },
    {
      icon: "Landmark",
      title: "Access to Refinance",
      text: "Eligible for refinancing from institutions like NABARD and SIDBI.",
    },
    {
      icon: "Award",
      title: "Corporate Credibility",
      text: "A registered company structure attracts professional management and institutional investors.",
    },
  ],
  disadvantages: [
    {
      icon: "Eye",
      title: "Stringent Regulatory Oversight",
      text: "Heavily monitored by the RBI and MCA to protect borrowers.",
    },
    {
      icon: "Wallet",
      title: "High Capital Requirement (for NBFC)",
      text: "Requires a minimum Net Owned Fund of ₹2 Crores to ₹5 Crores.",
    },
    {
      icon: "Briefcase",
      title: "High Operational Costs",
      text: "Managing many small loans in remote areas requires significant manpower and infrastructure.",
    },
    {
      icon: "BadgePercent",
      title: "Interest Rate Caps",
      text: "Limits on how much interest can be charged can impact profitability.",
    },
    {
      icon: "FileWarning",
      title: "High Compliance Burden",
      text: 'Regular reporting, audits, and adherence to "Fair Practices Codes" are mandatory.',
    },
  ],
  eligibility: [
    {
      title:
        "The eligibility requirements for starting a Microfinance Company (MFI)",
      items: [
        "are differentiated based on the chosen legal structure: the highly regulated NBFC-MFI, or the non-profit Section 8 Company.",
      ],
    },
    {
      title:
        "NBFC-MFI (Non-Banking Financial Company -- Micro Finance Institution) Eligibility:",
      items: [
        "**Company Incorporation:** The entity must be registered as either a Public or Private Limited Company under the Companies Act, 2013.",
        "**Minimum Net Owned Fund (NOF):** A substantial minimum NOF of **\u20b95 Crore** must be maintained for operations across most states. This requirement is reduced to **\u20b92 Crore** for entities operating exclusively in the North Eastern region.",
        "**Principal Business (Qualifying Assets Test):** The core business must comply with the rule that at least **60% of the company\\'s total assets** (netted off by intangible assets) must be in the form of \\'Qualifying Assets\\' on an ongoing basis.",
        "**Qualifying Loan Criteria:** A \\'Qualifying Asset\\' is a loan that meets specific parameters, including caps on the borrower\\'s annual household income, a maximum limit on the loan amount and the borrower\\'s total indebtedness, and the condition that the loan must be extended **without collateral**.",
        "**Management Integrity:** The directors and promoters must satisfy the RBI\\'s **\\'Fit and Proper\\' criteria**, demonstrating a strong financial history, professional integrity, and a relevant background.",
      ],
    },
    {
      title: "Section 8 Company (Non-Profit Microfinance) Eligibility:",
      items: [
        "**Legal Structure and Objective:** The company must be registered as a **Section 8 Company** with the primary objective of promoting social welfare and financial inclusion, with the clause that any profits generated are strictly used for furthering its objectives and are **not distributed as dividends** to members.",
        "**Minimum Capital:** There is **no mandatory minimum Net Owned Fund (NOF)** requirement, making it easier for smaller organizations and NGOs to enter the sector.",
        "**RBI Exemption & Restriction:** The company is **exempt from mandatory RBI registration** but is strictly **prohibited from accepting public deposits**.",
        "**Loan Compliance:** While not directly regulated by the RBI, the company must comply with lending limits set for microfinance, typically restricted to unsecured loans (e.g., up to \u20b950,000 for business enterprises or \u20b91,25,000 for housing purposes).",
      ],
    },
  ],
  documents: [
    {
      title: "For Section 8 Registration",
      items: [
        "PAN Card and Aadhaar Card of directors",
        "Address proof of the registered office",
        "Business plan",
      ],
    },
    {
      tabTitle: "For NBFC-MFI License",
      content: {
        title: "For NBFC-MFI License",
        items: [
          "Certificate of Incorporation",
          "MOA/AOA",
          "Audited financial statements",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Incorporate as a Section 8 Company",
      description: "Register a Section 8 Company with the MCA.",
    },
    {
      step: 2,
      title: "Start Microfinance Operations",
      description: "Begin providing micro-credit services.",
    },
    {
      step: 3,
      title: "Apply for NBFC-MFI License",
      description:
        "Apply to the RBI for an NBFC-MFI license to scale up operations.",
    },
  ],
  fees: [
    {
      component: "Section 8 Company Incorporation",
      fees: "₹15,000 - ₹25,000",
      remarks:
        "Covers the standard process for registering a non-profit company with the MCA.",
    },
    {
      component: "NBFC-MFI License Application",
      fees: "₹1,00,000+",
      remarks:
        "Professional fees for the RBI license are significantly higher due to the complexity and detailed documentation required.",
    },
  ],
  faqs: [
    {
      q: "Do I need an RBI license to start a microfinance business?",
      a: "No, you can start a small-scale microfinance business by registering a Section 8 Company, which does not require an RBI license. The RBI license is only required if you want to operate as a for-profit NBFC-MFI on a larger scale.",
    },
    {
      q: "What is the difference between a Section 8 MFI and an NBFC-MFI?",
      a: "A Section 8 MFI is a non-profit organization regulated by the MCA, focused on social objectives. An NBFC-MFI is a for-profit company regulated by the RBI, with high capital requirements, built for large-scale financial operations.",
    },
    {
      q: "What is the maximum loan amount a microfinance institution can give?",
      a: "As per RBI guidelines for NBFC-MFIs, the loan disbursed to a borrower should not exceed ₹75,000 in the first cycle and ₹1,25,000 in subsequent cycles. The total indebtedness of a borrower must not exceed ₹1,25,000.",
    },
  ],
};
