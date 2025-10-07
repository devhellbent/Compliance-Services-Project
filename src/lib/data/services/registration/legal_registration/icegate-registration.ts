// lib/data/services/icegate-registration.ts

import { ServiceData } from "@/lib/types";

export const icegateRegistrationData: ServiceData = {
  title: "ICEGATE Registration",
  breadcrumb: ["Home", "Registrations", "ICEGATE Registration"],
  overview:
    "**ICEGATE (Indian Customs Electronic Gateway)** is the national portal of the Indian Customs of Central Board of Indirect Taxes and Customs (CBIC). 🚢 Registration on this portal is **mandatory** for all importers and exporters to file customs documents electronically (like Bills of Entry and Shipping Bills), make e-payments of customs duties, and track the status of their shipments.",
  advantages: [
    {
      icon: "Laptop",
      title: "Online Document Filing",
      text: "Allows importers and exporters to file all their customs clearance documents online, 24/7, from anywhere.",
    },
    {
      icon: "FileCheck",
      title: "Paperless & Faster Clearance",
      text: "Reduces paperwork and manual intervention, leading to faster and more transparent customs clearance processes.",
    },
    {
      icon: "Search",
      title: "Real-time Tracking",
      text: "Provides an online facility to track the status of your shipping bills, bills of entry, and other documents in real-time.",
    },
    {
      icon: "CircleDollarSign",
      title: "Secure E-Payment",
      text: "Offers a secure gateway to make online payments of customs duties, eliminating the need for physical bank visits.",
    },
  ],
  disadvantages: [
    {
      icon: "FileWarning",
      title: "Requires Pre-requisites",
      text: "You must have a valid Import Export Code (IEC) and a Class 3 Digital Signature Certificate (DSC) before you can register.",
    },
    {
      icon: "Network",
      title: "Technical Glitches",
      text: "Like any government portal, it can occasionally face downtime or technical issues that might delay filings.",
    },
    {
      icon: "Info",
      title: "Complex for New Users",
      text: "The interface and the sheer number of options can be complex and intimidating for first-time users.",
    },
  ],
  eligibility: [
    {
      title: "Who Needs to Register?",
      items: [
        "Any individual or entity holding a valid **Import Export Code (IEC)** and involved in the import or export of goods.",
        "This includes importers, exporters, shipping lines, airlines, and Custom House Agents (CHAs).",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Mandatory Requirements",
      content: {
        title: "Digital & Business IDs",
        items: [
          "**Import Export Code (IEC)** Certificate.",
          "**Class 3 Digital Signature Certificate (DSC)** of the authorized signatory.",
          "GSTIN (Goods and Services Tax Identification Number).",
          "Aadhaar card of the authorized signatory for OTP verification.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Visit the ICEGATE Portal",
      description:
        "Go to the official ICEGATE website and click on 'New User Registration' or 'Sign Up'.",
    },
    {
      step: 2,
      title: "Select User Role",
      description:
        "Choose your user role from the available options, such as 'Importer/Exporter' or 'Customs Broker'.",
    },
    {
      step: 3,
      title: "Fill Registration Form",
      description:
        "Enter your IEC, GSTIN, and other required details in the online form. The system will auto-populate some fields.",
    },
    {
      step: 4,
      title: "Validate with OTPs",
      description:
        "Verify your identity by entering the One-Time Passwords (OTPs) sent to the email address and mobile number linked with your IEC.",
    },
    {
      step: 5,
      title: "Login and Register DSC",
      description:
        "Once the ID is created, log in to the portal and register your Class 3 Digital Signature Certificate (DSC) to be able to file documents.",
    },
  ],
  fees: [
    {
      component: "Government Registration Fee",
      fees: "Free",
      remarks: "Registration on the ICEGATE portal is completely free of cost.",
    },
    {
      component: "Digital Signature Certificate (DSC)",
      fees: "₹1,200 - ₹2,500",
      remarks:
        "This is a prerequisite cost for obtaining a Class 3 DSC, which is needed for the portal.",
    },
  ],
  faqs: [
    {
      q: "Is ICEGATE registration mandatory for all importers/exporters?",
      a: "Yes, it is mandatory. All electronic filing of customs documents and e-payment of duties must be done through the ICEGATE portal.",
    },
    {
      q: "What is the difference between IEC and ICEGATE registration?",
      a: "An IEC (Import Export Code) is a license to import or export. ICEGATE is the online portal where you use your IEC to file customs documents. You must have an IEC before you can register on ICEGATE.",
    },
    {
      q: "Can I file documents on ICEGATE without a DSC?",
      a: "No, a Class 3 Digital Signature Certificate (DSC) is mandatory for digitally signing and submitting documents like the Bill of Entry and Shipping Bill on the ICEGATE portal.",
    },
  ],
};
