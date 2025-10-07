// lib/data/services/digital-signature-certificate.ts

import { ServiceData } from "@/lib/types";

export const digitalSignatureCertificateData: ServiceData = {
  title: "Digital Signature Certificate (DSC)",
  breadcrumb: ["Home", "Registrations", "Digital Signature Certificate"],
  overview:
    "A **Digital Signature Certificate (DSC)** is the electronic equivalent of a physical signature or a stamped seal. ✍️ It's a secure digital key issued by a Certifying Authority (CA) that validates the identity of the holder. A DSC is used to sign electronic documents, ensuring their authenticity and integrity. It is legally admissible under the **Information Technology Act, 2000**, and is mandatory for various e-filings with government portals like MCA, Income Tax, and GST.",
  advantages: [
    {
      icon: "ShieldCheck",
      title: "High Security",
      text: "Uses encryption technology to ensure that the signed document is authentic and has not been tampered with.",
    },
    {
      icon: "Clock",
      title: "Time and Cost Saving",
      text: "Eliminates the need for physical paperwork, printing, and couriering documents, making the process faster and more economical.",
    },
    {
      icon: "Gavel",
      title: "Legal Validity",
      text: "DSC-signed documents are legally valid and are admissible as evidence in a court of law.",
    },
    {
      icon: "Landmark",
      title: "Mandatory for E-Filings",
      text: "Essential for filing company annual returns, income tax returns, GST returns, and for participating in e-tenders.",
    },
  ],
  disadvantages: [
    {
      icon: "CalendarOff",
      title: "Limited Validity",
      text: "A DSC is typically valid for 1, 2, or 3 years and must be renewed upon expiry.",
    },
    {
      icon: "Usb",
      title: "Hardware Dependency",
      text: "The private key is stored on a secure USB crypto token which can be lost, stolen, or damaged.",
    },
    {
      icon: "FileWarning",
      title: "Compatibility Issues",
      text: "May sometimes face browser or Java-related compatibility issues on different government portals.",
    },
  ],
  eligibility: [
    {
      title: "Applicant Types",
      items: [
        "**Individuals**: Any Indian citizen or foreign national can obtain a DSC for personal use.",
        "**Organizations**: Companies, LLPs, Partnership Firms, and other entities can obtain a DSC in their name.",
        "**Government Bodies**: Various government departments and agencies can also obtain DSCs.",
      ],
    },
    {
      title: "Classes of DSC",
      items: [
        "**Class 3 DSC**: This is the highest and most secure class of certificate, now mandatory for almost all purposes including e-tendering, MCA, and GST filings.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "For Individuals",
      content: {
        title: "Indian Nationals",
        items: [
          "PAN Card copy.",
          "Aadhaar Card copy (or other address proof like Voter ID, Passport).",
          "Passport-size photograph.",
          "Application form duly signed.",
        ],
      },
    },
    {
      tabTitle: "For Organizations",
      content: {
        title: "Company/LLP/Firm",
        items: [
          "PAN Card of the entity.",
          "Certificate of Incorporation or Partnership Deed.",
          "List of Directors/Partners and their KYC documents.",
          "Board Resolution or Authorization Letter authorizing a specific individual to apply for the DSC.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Choose a Certifying Authority (CA)",
      description:
        "Select a licensed Certifying Authority in India (e.g., eMudhra, Sify, Capricorn).",
    },
    {
      step: 2,
      title: "Fill Application Form",
      description:
        "Complete the online or offline application form with accurate details of the applicant.",
    },
    {
      step: 3,
      title: "Submit Documents",
      description:
        "Upload or submit the required KYC documents for verification.",
    },
    {
      step: 4,
      title: "Complete Verification",
      description:
        "The applicant needs to complete a verification process, which is typically a short, recorded video and/or biometric verification.",
    },
    {
      step: 5,
      title: "Download DSC",
      description:
        "Once approved, the DSC can be downloaded onto a secure FIPS-compliant USB crypto token.",
    },
  ],
  fees: [
    {
      component: "Class 3 DSC (Signature only)",
      fees: "₹1,200 - ₹2,500",
      remarks:
        "Fee for a 2-year validity period. Includes the cost of the USB token.",
    },
    {
      component: "Class 3 DSC (Signature & Encryption)",
      fees: "₹2,000 - ₹4,000",
      remarks: "Required for e-tendering. Fee for a 2-year validity period.",
    },
  ],
  faqs: [
    {
      q: "What is the difference between Class 2 and Class 3 DSC?",
      a: "Class 2 was used for filings and had a lower identity verification standard. Class 3 has a higher standard (requiring video verification) and is more secure. As of 2021, issuing authorities have discontinued Class 2, and Class 3 is now the standard for all purposes.",
    },
    {
      q: "What is a USB Token?",
      a: "A USB Token is a password-protected hardware device that looks like a pen drive. It is mandatory for storing your DSC, as it protects your digital signature from being copied or misused.",
    },
    {
      q: "What happens if I lose my DSC token?",
      a: "If you lose your USB token, you must immediately contact the Certifying Authority to revoke the old certificate to prevent misuse. You will then need to apply for a new DSC.",
    },
  ],
};
