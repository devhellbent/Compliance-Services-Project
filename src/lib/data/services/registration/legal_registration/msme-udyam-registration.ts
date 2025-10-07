// lib/data/services/msme-udyam-registration.ts

import { ServiceData } from "@/lib/types";

export const msmeUdyamRegistrationData: ServiceData = {
  title: "MSME / Udyam Registration",
  breadcrumb: ["Home", "Registrations", "MSME / Udyam Registration"],
  overview:
    "**Udyam Registration** is the new, simplified process for registering a business as a **Micro, Small, or Medium Enterprise (MSME)**. 🏭 It's a completely online, paperless process based on self-declaration that requires only an Aadhaar number. This registration provides the business with a recognition certificate and a unique Udyam Registration Number, making it eligible for numerous benefits under government schemes.",
  advantages: [
    {
      icon: "Landmark",
      title: "Collateral-Free Bank Loans",
      text: "Registered Udyams are eligible for priority sector lending and can avail of collateral-free loans under the Credit Guarantee Scheme.",
    },
    {
      icon: "BadgePercent",
      title: "Government Subsidies & Schemes",
      text: "Provides access to various government schemes, including subsidies on patent registration, barcode registration, and industrial promotion.",
    },
    {
      icon: "ShieldCheck",
      title: "Protection Against Delayed Payments",
      text: "Offers protection to MSMEs against delayed payments from buyers, with provisions for interest on delayed payments.",
    },
    {
      icon: "Gavel",
      title: "Preference in Government Tenders",
      text: "Registered Udyams get preference in government procurement tenders and are often exempt from earnest money deposits (EMD).",
    },
  ],
  disadvantages: [
    {
      icon: "FileCheck",
      title: "Requires Tax Compliance",
      text: "The classification is based on turnover and investment figures, which are automatically fetched from ITR and GSTN portals, requiring tax compliance.",
    },
    {
      icon: "Link",
      title: "Aadhaar is Mandatory",
      text: "The entire registration process is linked to the Aadhaar number of the proprietor, partner, or director.",
    },
    {
      icon: "Info",
      title: "Self-Declaration Based",
      text: "Since it's based on self-declaration, providing incorrect information can lead to penalties and cancellation of the registration.",
    },
  ],
  eligibility: [
    {
      title: "MSME Classification (Composite Criteria)",
      items: [
        "**Micro Enterprise**: Investment in Plant & Machinery does not exceed ₹1 crore AND Turnover does not exceed ₹5 crore.",
        "**Small Enterprise**: Investment in Plant & Machinery does not exceed ₹10 crore AND Turnover does not exceed ₹50 crore.",
        "**Medium Enterprise**: Investment in Plant & Machinery does not exceed ₹50 crore AND Turnover does not exceed ₹250 crore.",
      ],
    },
    {
      title: "Eligible Entities",
      items: [
        "Proprietorships, Partnership Firms, LLPs, Private Limited Companies, and other legal entities can register.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Only Aadhaar Required",
      content: {
        title: "Paperless Registration",
        items: [
          "**Aadhaar Number**: The only mandatory document required for the registration of the proprietor, managing partner, or director.",
          "PAN and GSTIN details are automatically fetched from government databases.",
        ],
      },
    },
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
