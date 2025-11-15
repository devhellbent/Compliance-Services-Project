// lib/data/services/microfinance-company-registration.ts

import { ServiceData } from "@/lib/types";

export const microfinanceCompanyRegistrationData: ServiceData = {
  title: "Microfinance Company Registration",
  breadcrumb: ["Home", "Registrations", "Microfinance Company"],
  description:
    "Bridge the financial inclusion gap with purpose-driven lending. Microfinance Company registration enables provision of small-scale financial services to underserved communities, promoting entrepreneurship and economic empowerment at the grassroots level.",
  overview:
    "A **Microfinance Company** serves as a vital instrument for financial inclusion, providing small-scale financial services including micro-loans, savings facilities, insurance, and remittance services to low-income individuals, women entrepreneurs, and economically disadvantaged communities who traditionally lack access to formal banking channels. In India's regulatory landscape, microfinance operations can be structured either as a non-profit Section 8 Company focused on social impact or as a for-profit NBFC-MFI (Non-Banking Financial Company - Micro Finance Institution) licensed and regulated by the Reserve Bank of India under the NBFC-MFI Directions. The NBFC-MFI structure requires minimum Net Owned Funds of ₹5 crore (₹10 crore for North Eastern States) and mandates that at least 85% of net assets must be deployed as qualifying assets—loans to low-income borrowers meeting specific criteria including household income thresholds and loan amount limits. These institutions operate on the philosophy of providing collateral-free loans to individuals and self-help groups (SHGs), enabling income-generating activities, skill development, and sustainable livelihood creation. The microfinance model emphasizes group lending methodology where borrowers form joint liability groups, promoting peer monitoring, repayment discipline, and community support systems. Interest rate caps, loan amount restrictions, and mandatory client protection guidelines ensure borrower welfare and prevent predatory lending practices. The structure facilitates partnerships with banks, development finance institutions, and impact investors who provide bulk funding for onward micro-lending operations. Microfinance Companies play crucial roles in women empowerment, rural entrepreneurship, agricultural financing, and small business development, contributing significantly to poverty alleviation and economic mobility. The regulatory framework mandates transparent pricing, fair practices, grievance redressal mechanisms, and responsible lending standards, protecting vulnerable borrower segments. With growing emphasis on digital financial services, modern microfinance companies leverage technology for loan disbursement, repayment collection, and credit assessment, reducing operational costs and expanding reach. Whether structured for social mission or commercial viability, Microfinance Companies deliver transformative financial solutions to the bottom of the pyramid, fostering inclusive economic growth and sustainable development.",
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
    "For Section 8 Microfinance Company: Standard requirements for a Section 8 Company.",
    "For NBFC-MFI (RBI License): Minimum Net Owned Fund (NOF) of ₹5 crore.",
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
      title: "For NBFC-MFI License",
      items: [
        "Certificate of Incorporation",
        "MOA/AOA",
        "Audited financial statements",
      ],
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
