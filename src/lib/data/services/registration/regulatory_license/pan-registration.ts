// lib/data/services/pan-registration.ts

import { ServiceData } from "@/lib/types";

export const panRegistrationData: ServiceData = {
  title: "PAN Registration",
  breadcrumb: ["Home", "Registrations", "PAN Registration"],
  overview:
    "A **Permanent Account Number (PAN)** is a unique 10-character alphanumeric identifier issued by the Indian Income Tax Department. 💳 It's a mandatory document for any person or entity that earns taxable income in India. PAN is used to track financial transactions, prevent tax evasion, and serves as a primary identity proof for all financial and business activities.",
  advantages: [
    {
      icon: "FileText",
      title: "Mandatory for Tax Filing",
      text: "It is compulsory for filing Income Tax Returns (ITR) for all individuals and entities.",
    },
    {
      icon: "Landmark",
      title: "Essential for Financial Transactions",
      text: "Required for opening bank accounts, investing in mutual funds, and for high-value transactions like buying property or vehicles.",
    },
    {
      icon: "UserCheck",
      title: "Universal Identity Proof",
      text: "PAN serves as a valid and widely accepted photo identity proof across India.",
    },
    {
      icon: "Building",
      title: "Required for Business Registration",
      text: "A PAN is the first document required to register any form of business, be it a company, LLP, or partnership firm.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertTriangle",
      title: "Penalty for Multiple PANs",
      text: "Holding more than one PAN is illegal and can attract a penalty of up to ₹10,000.",
    },
    {
      icon: "Link",
      title: "Aadhaar Linking is Mandatory",
      text: "PAN must be linked with your Aadhaar card to remain operative for filing ITR and other financial transactions.",
    },
    {
      icon: "FileWarning",
      title: "Deactivation if Not Used",
      text: "If no transactions are made for an extended period, the PAN might become inactive, requiring re-validation.",
    },
  ],
  eligibility: [
    {
      title: "Who Needs a PAN?",
      items: [
        "**Individuals**: Any individual earning taxable income or required to file an ITR.",
        "**Businesses**: All legal entities like companies, LLPs, and partnership firms.",
        "**Foreign Nationals**: Foreign citizens who earn income or conduct business in India.",
        "**Others**: Trusts, HUFs (Hindu Undivided Family), and other associations of persons.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "For Individuals (Indian)",
      content: {
        title: "Proof of Identity, Address & Date of Birth",
        items: [
          "**One Document Often Suffices**: Aadhaar Card is typically sufficient as it serves as proof for all three.",
          "**Alternatively**: Passport, Voter ID, or Driving License can also be used.",
          "Passport-size photographs.",
        ],
      },
    },
    {
      tabTitle: "For Companies/Entities",
      content: {
        title: "Business Registration Documents",
        items: [
          "Copy of the Certificate of Incorporation issued by the Registrar of Companies (RoC).",
          "For LLPs/Partnerships: Copy of the Certificate of Registration or Partnership Deed.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Fill Application Form",
      description:
        "Complete the online application using **Form 49A** for Indian citizens or **Form 49AA** for foreign nationals on the NSDL or UTIITSL portal.",
    },
    {
      step: 2,
      title: "Submit Documents",
      description:
        "Upload the scanned copies of your proof of identity, address, and date of birth. Aadhaar e-KYC can make this process paperless.",
    },
    {
      step: 3,
      title: "Pay the Fees",
      description:
        "Make the payment for the application through online methods like net banking, credit/debit card, or demand draft.",
    },
    {
      step: 4,
      title: "Receive Acknowledgement",
      description:
        "After successful submission, you will receive a 15-digit acknowledgement number which can be used to track the status of your application.",
    },
    {
      step: 5,
      title: "Verification and Dispatch",
      description:
        "The Income Tax Department verifies the application. Upon approval, the e-PAN is sent via email, and the physical PAN card is dispatched to your registered address.",
    },
  ],
  fees: [
    {
      component: "PAN Card Application Fee",
      fees: "₹107 (approx.)",
      remarks: "For dispatch within India. Includes processing fee and GST.",
    },
    {
      component: "e-PAN Card Only",
      fees: "₹72 (approx.)",
      remarks:
        "If you do not require a physical card, an e-PAN is sent to your email.",
    },
  ],
  faqs: [
    {
      q: "How long does it take to get a PAN card?",
      a: "If you apply using Aadhaar-based e-KYC, the e-PAN is often allotted within a few hours. The physical card typically takes about 10-15 working days to be delivered.",
    },
    {
      q: "Is it legal to have more than one PAN card?",
      a: "No, it is illegal for an individual to have more than one PAN. If you have been allotted multiple PANs, you should immediately surrender the additional one(s) to the Income Tax Department to avoid penalties.",
    },
    {
      q: "What should I do if I lose my PAN card?",
      a: "If you lose your PAN card, you can apply for a reprint online through the NSDL or UTIITSL portals by providing your PAN and Aadhaar details. You do not need to file an FIR unless you suspect misuse.",
    },
  ],
};
