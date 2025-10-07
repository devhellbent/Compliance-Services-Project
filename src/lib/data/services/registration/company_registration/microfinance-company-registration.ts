// lib/data/services/microfinance-company-registration.ts

import { ServiceData } from "@/lib/types";

export const microfinanceCompanyRegistrationData: ServiceData = {
  title: "Microfinance Company Registration",
  breadcrumb: ["Home", "Registrations", "Microfinance Company"],
  overview:
    "A **Microfinance Company** provides small-scale financial services, such as micro-loans, to low-income individuals and underserved communities that lack access to traditional banking 🏦. In India, they can be structured in two main ways: as a non-profit **Section 8 Company** or as a for-profit **NBFC-MFI** licensed by the RBI. The Section 8 route is a common starting point, focusing on social objectives without needing RBI approval to begin.",
  advantages: [
    {
      icon: "HeartHandshake",
      title: "Social Impact",
      text: "Directly contributes to poverty alleviation and financial inclusion by empowering small entrepreneurs.",
    },
    {
      icon: "Users",
      title: "Financial Inclusion",
      text: "Provides essential financial services to the 'unbanked' population, fostering economic growth at the grassroots level.",
    },
    {
      icon: "Landmark",
      title: "Access to Grants",
      text: "If registered as a Section 8 company, it can attract grants and donations from various national and international organizations.",
    },
    {
      icon: "ShieldCheck",
      title: "No Initial RBI Approval",
      text: "A Section 8 microfinance company can start its operations without obtaining a license from the Reserve Bank of India.",
    },
  ],
  disadvantages: [
    {
      icon: "Briefcase",
      title: "High Operational Costs",
      text: "Managing a large number of small-ticket loans involves significant administrative and operational overhead.",
    },
    {
      icon: "TrendingDown",
      title: "Credit Risk",
      text: "Lending to a high-risk demographic can lead to a higher rate of defaults on loans.",
    },
    {
      icon: "FileWarning",
      title: "Strict RBI Oversight (for NBFC-MFI)",
      text: "To scale up as a for-profit NBFC-MFI, you must meet stringent capital requirements and are subject to strict RBI regulations.",
    },
  ],
  eligibility: [
    {
      title: "For Section 8 Microfinance Company",
      items: [
        "Standard requirements for a Section 8 Company (minimum 2 directors).",
        "The MOA must clearly state the objective of providing microfinance services.",
      ],
    },
    {
      title: "For NBFC-MFI (RBI License)",
      items: [
        "Must be a company registered under the Companies Act, 2013.",
        "Requires a minimum **Net Owned Fund (NOF)** of **₹5 crore** (₹2 crore for North Eastern Region).",
        "At least 85% of its assets must be in the nature of 'qualifying assets' (micro-loans).",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "For Section 8 Registration",
      content: {
        title: "Standard Documents",
        items: [
          "PAN Card and Aadhaar Card of all proposed directors.",
          "Address proof of the registered office (Utility Bill, Rent Agreement, NOC).",
          "A detailed business plan focusing on the microfinance operations and objectives.",
        ],
      },
    },
    {
      tabTitle: "For NBFC-MFI License",
      content: {
        title: "Additional RBI Documents",
        items: [
          "Certified copies of the Certificate of Incorporation and MOA/AOA.",
          "Board Resolution related to the NBFC-MFI application.",
          "Audited balance sheets and profit & loss accounts for the last three years.",
          "Detailed information about the management and directors.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Incorporate as a Section 8 Company",
      description:
        "Register a Section 8 Company with the MCA. Ensure the main object in the Memorandum of Association (MOA) is to provide microfinance.",
    },
    {
      step: 2,
      title: "Start Microfinance Operations",
      description:
        "Begin providing micro-credit services as per the guidelines laid down in the Companies Act and RBI regulations applicable to such entities.",
    },
    {
      step: 3,
      title: "Arrange Net Owned Funds (for NBFC-MFI)",
      description:
        "To scale up, arrange the minimum required Net Owned Funds (e.g., ₹5 crore) to be eligible for an RBI license.",
    },
    {
      step: 4,
      title: "Apply to RBI for NBFC-MFI License",
      description:
        "Submit a detailed online application to the RBI along with all required financial and corporate documents to be registered as an NBFC-MFI.",
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
