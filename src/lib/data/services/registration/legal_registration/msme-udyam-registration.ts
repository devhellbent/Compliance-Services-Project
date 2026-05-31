// lib/data/services/msme-udyam-registration.ts

import { ServiceData } from "@/lib/types";

export const msmeUdyamRegistrationData: ServiceData = {
  title: "MSME / Udyam Registration",
  breadcrumb: ["Home", "Registrations", "MSME / Udyam Registration"],
  overview:
    `**Udyam Registration** is the official, permanent, and free online registration system for Micro, Small, and Medium Enterprises (MSMEs) in India, governed by the Ministry of MSME. Launched in July 2020, it replaced the former Udyog Aadhaar system to streamline the formalization of businesses. The process is completely paperless and based on self-declaration, requiring only the entrepreneur\'s **Aadhaar Number** and the business\'s **PAN**; all other key details like investment and turnover are automatically fetched from government databases (Income Tax and GST).

The primary purpose of Udyam is to formally recognize and classify an enterprise based on a composite criteria of investment and annual turnover. For instance, a **Micro** enterprise must have an investment under ₹1 crore and a turnover under ₹5 crore. Upon successful registration, the enterprise receives a unique **Udyam Registration Number (URN)** and an e-certificate, which is essential for accessing all government support schemes.

Holding a Udyam Certificate is the gateway to significant benefits, including **priority sector lending** from banks, access to **collateral-free loans** under CGTMSE, subsidies on patent/trademark registration and electricity bills, and preferential treatment in **government tenders**. It also grants protection against delayed payments through the MSME Samadhaan portal, making it a crucial tool for an MSME\'s growth, credibility, and financial stability.`,
  advantages: [
    {
      icon: "Landmark",
      title: "Priority Sector Lending",
      text: "Registered MSMEs get priority access to credit from banks at concessional interest rates, typically 1% to 2% lower than standard rates.",
    },
    {
      icon: "ShieldCheck",
      title: "Collateral-Free Loans",
      text: "Enables businesses to avail of loans without pledging collateral through the Credit Guarantee Fund Trust (CGTMSE) scheme.",
    },
    {
      icon: "Handshake",
      title: "Payment Protection",
      text: "Statutory protection against delayed payments; buyers must pay interest if payments are delayed beyond 45 days.",
    },
    {
      icon: "Gavel",
      title: "Government Tenders",
      text: "Exclusive benefits in securing government tenders, including exemption from Earnest Money Deposit (EMD) and security deposits.",
    },
    {
      icon: "BadgePercent",
      title: "IPR Rebates",
      text: "Significant rebates (up to 50%) on government fees for filing patents and trademarks, helping protect intellectual property.",
    },
  ],
  disadvantages: [
    {
      icon: "FileWarning",
      title: "Regulatory Compliance",
      text: "Formal recognition requires adherence to increased reporting standards, which can be challenging for micro-enterprises.",
    },
    {
      icon: "TrendingUp",
      title: "Automatic Upgradation",
      text: "Integrated with GST/IT systems; crossing turnover limits triggers an automatic upgrade, potentially losing micro-category benefits.",
    },
    {
      icon: "Clock",
      title: "Loan Sanction Time",
      text: "Despite priority status, the actual sanctioning of government-backed loans can be time-consuming and documentation-heavy.",
    },
    {
      icon: "AlertTriangle",
      title: "Misrepresentation Risks",
      text: "Any deliberate misrepresentation of turnover or investment to remain in a lower category can attract heavy fines and penalties.",
    },
    {
      icon: "ZapOff",
      title: "Administrative Overhead",
      text: "Managing the necessary documentation to avail of specific subsidies can divert focus from core business operations.",
    },
  ],
  eligibility: [
    "The eligibility for Udyam Registration (MSME Registration) in India is determined by a Composite Criterion based on the enterprise's Investment in Plant & Machinery or Equipment and its Annual Turnover. An enterprise must satisfy the limits for both criteria to be classified under a particular category. Effective from April 1, 2025, the MSME classification limits have been revised to the following:"
  ],
  documents: [
    {
        tabTitle: "Primary Identity Proofs",
        content: {
            title: "Primary Identity Proofs",
            items: [
                "**Aadhaar Number:** The 12-digit Aadhaar number of the key person is mandatory for OTP-based authentication. The mobile number linked to the Aadhaar card will receive the One-Time Password (OTP) for verification. ",
                "For a **Proprietorship**, the Proprietor\\'s Aadhaar is required.",
                "For a **Partnership Firm**, the Managing Partner\\'s Aadhaar is required.",
                "For a **Company or LLP**, the Aadhaar of the Authorized Signatory is required. ",
                "**PAN Card:** The Permanent Account Number (PAN) of the enterprise is mandatory. The Udyam portal uses this to fetch details automatically from the Income Tax Department.",
                "**GSTIN (GST Identification Number):** This is mandatory for enterprises that are **legally required to be registered under the GST law**. The system uses the GSTIN to auto-fetch turnover and unit details."
            ]
        }
    },
    {
        tabTitle: "Business and Financial Information",
        content: {
            title: "Business and Financial Information",
            items: [
                "**Bank Account Details:** You must provide the **Bank Name, Account Number, and IFSC Code** of the business.",
                "**Enterprise Address:** The complete official address and location of all operational plants/units.",
                "**Business Activity:** You must specify the **Major Activity** of your business, choosing between **Manufacturing** or **Service**.",
                "**NIC Code:** You will need to select the appropriate **National Industrial Classification (NIC) 2-Digit Codes** that describe your business activity.",
                "**Investment Details:** The **Net Investment** in Plant & Machinery or Equipment, which the portal primarily fetches from your last filed Income Tax Returns (ITR).",
                "**Turnover Details:** The **Annual Net Turnover** of the enterprise, which the portal fetches from your ITR or GST returns.",
                "**Date of Commencement:** The date when the business officially started its operations."
            ]
        }
    }
],
  registrationProcess: [
    {
      step: 1,
      title: "Visit the Udyam Portal",
      description: "Go to the official government Udyam Registration portal.",
    },
    {
      step: 2,
      title: "Enter Aadhaar Details",
      description:
        "Enter the Aadhaar number of the entrepreneur and validate it with the OTP received on the linked mobile number.",
    },
    {
      step: 3,
      title: "Fill the Online Form",
      description:
        "Complete the self-declaration form with all the required details of the business, such as PAN, bank account, and number of employees.",
    },
    {
      step: 4,
      title: "Submit and Get Certificate",
      description:
        "Submit the form. Upon successful submission, a permanent Udyam Registration Number is generated, and the e-certificate is sent to your registered email ID.",
    },
  ],
  fees: [
    {
      component: "Government Fee",
      fees: "Free",
      remarks:
        "Udyam Registration is completely free of cost and can be done directly on the government portal.",
    },
    {
      component: "Professional Fees",
      fees: "₹1,500 - ₹3,000",
      remarks:
        "For professional assistance to ensure the application is filled correctly and smoothly.",
    },
  ],
  faqs: [
    {
      q: "Can trading businesses (wholesalers, retailers) register for Udyam?",
      a: "Yes. As per the revised guidelines, wholesale and retail traders are also eligible for Udyam Registration, but their benefits are restricted to Priority Sector Lending by banks.",
    },
    {
      q: "Do I need to renew my Udyam Registration?",
      a: "No, Udyam Registration is permanent and does not have an expiry date. It does not require renewal.",
    },
    {
      q: "What is the difference between Udyog Aadhaar and Udyam Registration?",
      a: "Udyam Registration is the new system that replaced the older Udyog Aadhaar Memorandum (UAM) in 2020. All existing Udyog Aadhaar holders were required to re-register on the new Udyam portal.",
    },
  ],
};
