// lib/data/services/din-registration.ts

import { ServiceData } from "@/lib/types";

export const dinRegistrationData: ServiceData = {
  title: "DIN Registration",
  breadcrumb: ["Home", "Registrations", "DIN Registration"],
  overview:
    "A **Director Identification Number (DIN)** is a unique 8-digit identification number allotted by the Central Government to any individual intending to be a director of a company. 🧑‍💼 It's a mandatory prerequisite for directorship under the **Companies Act, 2013**. An individual can hold only one DIN, which remains valid for their lifetime. The DIN helps the Ministry of Corporate Affairs (MCA) maintain a database of all directors and prevent fraudulent activities.",
  advantages: [
    {
      icon: "UserCheck",
      title: "Mandatory for Directorship",
      text: "No individual can be appointed as a director of a company without a valid DIN.",
    },
    {
      icon: "Database",
      title: "Centralized Director Database",
      text: "Helps the government maintain a comprehensive and transparent record of all directors, enhancing corporate governance.",
    },
    {
      icon: "Infinity",
      title: "Lifetime Validity",
      text: "Once allotted, a DIN is valid for the lifetime of the director and does not need to be renewed.",
    },
    {
      icon: "ShieldCheck",
      title: "Prevents Fraud",
      text: "By linking directorships to a single number, DIN helps in tracking the activities of directors and preventing the appointment of disqualified individuals.",
    },
  ],
  disadvantages: [
    {
      icon: "FileWarning",
      title: "Mandatory Annual KYC",
      text: "Every director must complete an annual e-KYC verification (Form DIR-3 KYC) with the MCA to keep their DIN active.",
    },
    {
      icon: "AlertTriangle",
      title: "Penalty for Non-Compliance",
      text: "Failure to file the annual KYC by the due date results in the deactivation of the DIN and a penalty of ₹5,000.",
    },
    {
      icon: "UserX",
      title: "Cannot be Surrendered Easily",
      text: "A DIN can only be surrendered if it has never been used to be a director in any company, making the process difficult for most.",
    },
  ],
  eligibility: [
    {
      title: "Who Can Apply for a DIN?",
      items: [
        "Any individual who intends to be appointed as a director in a new or an existing Indian company.",
        "Both Indian citizens and foreign nationals are eligible to apply.",
        "There are no specific educational or age-related qualifications to obtain a DIN.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "For Indian Nationals",
      content: {
        title: "KYC Documents",
        items: [
          "**PAN Card**: Mandatory and acts as the primary proof of identity.",
          "**Aadhaar Card**: Acts as proof of address.",
          "Passport-size photograph, email ID, and mobile number.",
        ],
      },
    },
    {
      tabTitle: "For Foreign Nationals",
      content: {
        title: "Apostilled/Notarized Documents",
        items: [
          "**Passport**: Mandatory and must be apostilled or notarized in the home country.",
          "**Address Proof**: Such as a driving license, bank statement, or utility bill (must also be apostilled/notarized).",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "For New Companies (Integrated Process)",
      description:
        "When incorporating a new company, the DIN for the proposed first directors is automatically allotted through the **SPICe+** (Form INC-32) application form. No separate form is needed.",
    },
    {
      step: 2,
      title: "For Existing Companies (Form DIR-3)",
      description:
        "To appoint a new director to an existing company, the company must pass a board resolution and then file **e-Form DIR-3** with the MCA on behalf of the applicant.",
    },
    {
      step: 3,
      title: "Document Submission & Verification",
      description:
        "The required documents are attached to the form, which must be digitally signed by a director of the company and a practicing professional (CA, CS, or CMA).",
    },
    {
      step: 4,
      title: "DIN Allotment",
      description:
        "Upon successful verification by the MCA, the DIN is approved and allotted to the applicant almost instantly.",
    },
  ],
  fees: [
    {
      component: "Government Fee (Form DIR-3)",
      fees: "₹500",
      remarks:
        "This is the statutory fee for filing the e-Form DIR-3 for DIN allotment.",
    },
    {
      component: "Professional Fees",
      fees: "₹1,500 - ₹3,000",
      remarks:
        "Includes assistance in form filling, document attestation, and filing with the MCA.",
    },
  ],
  faqs: [
    {
      q: "Can an individual have more than one DIN?",
      a: "No. It is illegal to have more than one DIN. The system is designed to prevent duplicate allotments, and holding multiple DINs can lead to heavy penalties.",
    },
    {
      q: "What is DIR-3 KYC and is it mandatory?",
      a: "DIR-3 KYC is an annual verification process for every DIN holder. It is mandatory to file this e-form every year by the due date (usually 30th September) to confirm your personal details with the MCA and keep your DIN active.",
    },
    {
      q: "My DIN is deactivated. What should I do?",
      a: "A DIN is deactivated for not filing the annual KYC. To reactivate it, you must first file the overdue DIR-3 KYC form and pay the penalty of ₹5,000. The DIN will be reactivated upon successful processing.",
    },
  ],
};
