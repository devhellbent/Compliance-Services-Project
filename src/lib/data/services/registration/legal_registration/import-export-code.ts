// lib/data/services/import-export-code.ts

import { ServiceData } from "@/lib/types";

export const importExportCodeData: ServiceData = {
  title: "Import Export Code (IEC)",
  breadcrumb: ["Home", "Registrations", "Import Export Code"],
  overview:
    "An **Import Export Code (IEC)** is a mandatory 10-digit business identification number for any person or entity undertaking import or export activities in India. ✈️ Issued by the **Directorate General of Foreign Trade (DGFT)**, Ministry of Commerce, it's a primary requirement for engaging in international trade. The IEC is a one-time, lifetime registration and is linked to the entity's PAN.",
  advantages: [
    {
      icon: "Globe",
      title: "Gateway to Global Markets",
      text: "It is the primary license that enables your business to legally import goods into India or export products to other countries.",
    },
    {
      icon: "BadgePercent",
      title: "Avail Government Benefits",
      text: "An IEC is required to avail benefits under various schemes from the DGFT, Customs, and Export Promotion Councils.",
    },
    {
      icon: "FileCheck",
      title: "Simple & Lifetime Registration",
      text: "The application process is fully online and simple. Once issued, the IEC is valid for the lifetime of the entity and requires no renewal.",
    },
    {
      icon: "TrendingUp",
      title: "Business Growth",
      text: "Unlocks the potential for significant business growth by expanding your reach to international customers and suppliers.",
    },
  ],
  disadvantages: [
    {
      icon: "CalendarClock",
      title: "Mandatory Annual Updation",
      text: "It is mandatory to update your IEC details electronically every year between April and June, even if there are no changes, to keep it active.",
    },
    {
      icon: "Ban",
      title: "Deactivation on Non-Updation",
      text: "Failure to update the IEC annually will result in the deactivation of the code, halting all import/export activities.",
    },
    {
      icon: "Link",
      title: "Linked to PAN and Bank",
      text: "The application requires a valid PAN and a business bank account, which are prerequisites.",
    },
  ],
  eligibility: [
    {
      title: "Who Needs an IEC?",
      items: [
        "Any business entity (Proprietorship, Partnership, LLP, Company, Trust) or individual who wants to engage in the import or export of goods or services from India.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Required Documents",
      content: {
        title: "Basic KYC and Bank Details",
        items: [
          "**PAN Card**: A valid PAN of the individual or the business entity is mandatory.",
          "**ID & Address Proof**: Aadhaar Card, Voter ID, or Passport of the proprietor, partner, or director.",
          "**Bank Certificate / Cancelled Cheque**: Must contain the printed name of the account holder and the account number.",
          "**Address Proof of Business**: Utility Bill or Rent Agreement for the business premises.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Visit the DGFT Portal",
      description:
        "Go to the official website of the Directorate General of Foreign Trade (DGFT).",
    },
    {
      step: 2,
      title: "Fill the Online Application",
      description:
        "Log in using your PAN and fill out the online application form (ANF-2A) with all the required details of your business and its proprietors/directors.",
    },
    {
      step: 3,
      title: "Upload Documents",
      description:
        "Upload scanned copies of the required documents, such as the cancelled cheque and address proof.",
    },
    {
      step: 4,
      title: "Pay the Application Fee",
      description:
        "Make the payment for the application fee through the online portal.",
    },
    {
      step: 5,
      title: "Receive IEC Certificate",
      description:
        "Upon successful verification, the DGFT issues the IEC in a digital format almost instantly. It can be downloaded from the portal.",
    },
  ],
  fees: [
    {
      component: "Government Application Fee",
      fees: "₹500",
      remarks:
        "This is a one-time fee payable to the DGFT for the IEC application.",
    },
    {
      component: "Professional Fees",
      fees: "₹2,000 - ₹4,000",
      remarks:
        "For professional assistance with the application process and document preparation.",
    },
  ],
  faqs: [
    {
      q: "Do I need to renew my IEC?",
      a: "No, the IEC does not require renewal; it has lifetime validity. However, you must update it electronically on the DGFT portal every year to ensure it remains active.",
    },
    {
      q: "Is GST registration mandatory to get an IEC?",
      a: "No, GST registration is not mandatory to apply for an IEC. However, if your business requires GST registration based on its turnover, you must obtain it separately. For the export of goods, GST registration is mandatory to claim refunds.",
    },
    {
      q: "Can an individual have more than one IEC?",
      a: "No, only one IEC is issued against a single PAN. If an entity has more than one IEC, the additional ones must be surrendered.",
    },
  ],
};
