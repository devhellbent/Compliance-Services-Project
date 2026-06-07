// lib/data/services/digital-signature-certificate.ts

import { ServiceData } from "@/lib/types";

// Expanded data mapped from user-provided detailed content
export const digitalSignatureCertificateData: ServiceData = {
  title: "Digital Signature Certificate (DSC)",
  breadcrumb: ["Home", "Registrations", "Digital Signature Certificate"],
  description:
    "Get a Class 3 Digital Signature Certificate for secure e‑filing, e‑tendering and document signing with legally valid, hardware‑token protection.",
  overview: `**What is a Digital Signature Certificate (DSC)?**

A Digital Signature Certificate (DSC) is a secure electronic key that functions as a digital equivalent of a physical signature or identity proof, like a passport or driver\'s license. Issued by a trusted Certifying Authority (CA), the DSC binds the identity of an individual or organization to a cryptographic key pair (a public key and a private key). This certificate contains verifiable information about the holder, such as their name, email, and the issuing CA\'s details, making it a crucial component for online authentication.

The core function of a DSC is to ensure the **authenticity, integrity, and non-repudiation** of electronic documents and transactions. When a document is digitally signed using a DSC, a unique hash of the document is encrypted with the signer\'s private key. The recipient can then use the signer\'s public key to decrypt this hash, proving the document has not been tampered with and confirming the signer\'s identity. This cryptographic process makes the digital signature legally binding.

DSCs are mandatory for various statutory and high-security online transactions, eliminating the need for physical paperwork. Common uses include e-filing of income tax returns, Goods and Services Tax (GST) forms, company incorporation documents with the Ministry of Corporate Affairs (MCA), and participating in e-tendering and e-auctions. By providing a secure, time-saving, and cost-effective method of verification, DSCs are indispensable for businesses and individuals in the digital economy.

**Legal Framework of Digital Signatures**

The legal framework for **Digital Signatures** in India is primarily governed by the **Information Technology Act, 2000 (IT Act)**, along with subsequent rules and regulations.

This framework grants legal recognition to digital signatures, often equating them with traditional handwritten signatures for most transactions and legal purposes.

Here is a detailed breakdown of the legal framework:`,
  advantages: [
    {
      icon: "Shield",
      title: "High Security & Authenticity",
      text: "A DSC ensures the identity of the signer is verified and authentic, significantly reducing the risk of forgery and fraud.",
    },
    {
      icon: "Lock",
      title: "Data Integrity",
      text: "Documents signed with a DSC cannot be altered or tampered with after signing. Any change will invalidate the signature, providing assurance that the data is safe and secure.",
    },
    {
      icon: "FileCheck",
      title: "Non-Repudiation",
      text: "The signer cannot later deny having signed the document, as the digital signature is uniquely linked to their identity and private key.",
    },
    {
      icon: "Scale",
      title: "Legal Validity",
      text: "DSCs are legally recognized and admissible in a court of law in many jurisdictions, providing the same legal status as a physical handwritten signature.",
    },
    {
      icon: "Clock",
      title: "Time and Cost Savings",
      text: "Eliminates the need for printing, signing, scanning, faxing, couriering, and storing physical paper documents, saving time, money, and administrative effort.",
    },
    {
      icon: "Zap",
      title: "Operational Efficiency",
      text: "Allows for instant, remote signing of documents from anywhere, speeding up workflow, contract turnaround times, and overall business processes.",
    },
    {
      icon: "CheckCircle",
      title: "Regulatory Compliance",
      text: "Helps businesses and individuals meet various government and regulatory filing requirements (e.g., e-filing of tax returns, company filings, e-tendering).",
    },
    {
      icon: "Leaf",
      title: "Environmental Friendliness",
      text: "Reduces paper consumption and transportation needs, supporting an eco-friendly, paperless environment.",
    },
    {
      icon: "Globe",
      title: "Convenience and Accessibility",
      text: "Documents can be signed anytime and anywhere using a computer or mobile device.",
    },
  ],
  disadvantages: [
    {
      icon: "Wifi",
      title: "Dependency on Technology",
      text: "The entire system relies on technology and a secure internet connection, making it vulnerable to technical glitches, system malfunctions, and cyber-attacks if security measures are inadequate.",
    },
    {
      icon: "Settings",
      title: "Complex Setup and Management",
      text: "Digital signatures rely on complex PKI infrastructure. The process of obtaining, installing, and managing the digital certificate and its private key can be complex or challenging for users unfamiliar with the technology.",
    },
    {
      icon: "IndianRupee",
      title: "Cost of Implementation",
      text: "There are upfront and recurring costs associated with obtaining and renewing the DSC, and potentially for compatible software or hardware (like a crypto-token).",
    },
    {
      icon: "RefreshCw",
      title: "Certificate Lifecycle Management",
      text: "Proper management of the certificate lifecycle (issuance, renewal, and timely revocation if compromised) is crucial, and lapses can lead to security risks or service interruptions.",
    },
    {
      icon: "Users",
      title: "User Adoption and Trust Issues",
      text: "Some individuals or organizations may still be skeptical or resistant to using digital signatures due to a lack of familiarity or concerns about security and privacy.",
    },
    {
      icon: "AlertTriangle",
      title: "Compatibility Issues",
      text: "While improving, certain DSCs or software may not be fully compatible with all operating systems, document types, or older software systems.",
    },
    {
      icon: "Globe",
      title: "Legal Variation",
      text: "While widely accepted, the legal status and specific requirements for digital signatures can vary significantly across different countries, industries, or for specific document types.",
    },
  ],
  eligibility: [
    "The eligibility for a Digital Signature Certificate (DSC) in India is generally open to both **individuals and organizations**, and is primarily determined by the **documents and verification processes** you complete. The current standard certificate being issued is the **Class 3 DSC**, as Class 2 has been discontinued.",
    {
      title: "Eligible Applicants (Who can get a DSC)",
      items: [
        "**Individuals (Indian Nationals):** Any Indian citizen can apply for a DSC for personal use, especially for e-filing.",
        "**Individuals in Businesses/Professions (Mandatory Users):** Directors of Companies, Partners of LLPs, Authorized Signatories for Income Tax e-filing, Professionals like CAs, CSs, and CMAs, individuals or entities participating in e-Tendering or e-Procurement, and holders of Import-Export Certificates (IEC) for DGFT-related transactions.",
        "**Organizations:** Companies, LLPs, Proprietorships, Partnership Firms, NGOs, Trusts, and government organizations can obtain a DSC, which is issued in the name of an authorized representative.",
        "**Foreign Individuals and Organizations:** Non-Resident Indians (NRIs) and foreign-registered companies/entities can also apply for a DSC.",
      ],
    },
    {
      title: "For an Individual DSC (Indian Citizen)",
      items: [
        "**Proof of Identity:** PAN Card, Passport, Driving License, or Aadhaar Card (eKYC).",
        "**Proof of Address:** Aadhaar Card (eKYC), Voter ID, Passport, Driving License/RC, Latest Utility Bills, or Latest Bank Statements.",
        "**Verification:** A recent passport-size photograph.",
        "**Digital Token:** The DSC is typically issued on a secure USB cryptographic token.",
        "**Other:** A completed application form, valid mobile number and email ID, and a fee payment.",
      ],
    },
    {
      title: "For an Organizational DSC",
      items: [
        "**Organizational Proof:** Copy of the Certificate of Incorporation/Registration, Partnership Deed, etc.",
        "**Organizational PAN Card** (if GST is not provided).",
        "**Authorization Letter/Board Resolution:** A resolution or letter authorizing the individual to sign on behalf of the company/entity.",
        "**Proof of Authorized Signatory:** A document proving the signatory's position within the organization (e.g., list of directors).",
      ],
    },
    {
      title: "DSC Class Requirement (Mandatory Standard)",
      items: [
        "**Class 3 Certificate** is the **highest and currently mandated class** for most statutory filings and e-tendering in India, including e-Filing with the MCA, Income Tax Returns (for mandatory users), GST filings and applications, and e-Tendering and e-Procurement portals.",
      ],
    },
    {
      title: "Mandatory Verification Step",
      items: [
        "**Video Verification:** The applicant is required to record a short video (or complete a live video call) where they display their original ID documents and recite a specific script, confirming their identity and application details.",
        "**Mobile and Email Verification:** OTP-based verification for the registered mobile number and email ID is compulsory.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "For Individuals",
      content: {
        title: "Indian Nationals",
        items: [
          "Self-attested PAN (mandatory).",
          "Aadhaar for e-KYC or Passport / Voter ID / Driving Licence as ID + Address proof.",
          "Recent passport-size photograph (if not fully e-KYC).",
          "Signed application form + valid email & mobile (OTP).",
        ],
      },
    },
    {
      tabTitle: "For Organizations",
      content: {
        title: "Company/LLP/Firm",
        items: [
          "Entity PAN & Certificate of Incorporation / Partnership Deed.",
          "Authorization Letter / Board Resolution naming the applicant.",
          "List of Directors / Partners (for context).",
          "KYC of authorized signatory (PAN + Address proof).",
        ],
      },
    },
    {
      tabTitle: "Foreign Individuals",
      content: {
        title: "Non-Resident / Foreign Nationals",
        items: [
          "Valid Passport (mandatory).",
          "Residential address proof (Bank Statement / Utility Bill ≤ 1 year old).",
          "Documents apostilled / consular attested (if not Indian issued).",
          "Video / in-person verification as per CA protocol.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 5,
      title: "Receive DSC Token",
      description: "DSC issued on secure USB token and delivered to applicant.",
    },
  ],
  fees: [
    {
      component: "Class 3 DSC (Signature only)",
      fees: "₹1,200 - ₹2,500",
      remarks:
        "Indicative 2-year pricing (varies by CA & token brand). Includes secure token.",
    },
    {
      component: "Combo (Signature + Encryption)",
      fees: "₹2,000 - ₹3,500",
      remarks: "For e-tendering, e-auction, and high-security filings.",
    },
    {
      component: "Renewal Fee",
      fees: "₹1,000 - ₹2,000",
      remarks: "Renewal requires re-verification and new token issuance.",
    },
  ],
  faqs: [
    {
      q: "What is the difference between Class 2 and Class 3 DSC?",
      a: "Class 2 was used for filings and had a lower identity verification standard. Class 3 has a higher standard and is now mandatory for most statutory filings.",
    },
    {
      q: "How long is a DSC valid?",
      a: "DSCs are typically valid for 1, 2, or 3 years, depending on the CA and applicant's choice.",
    },
    {
      q: "Can a foreign national get a DSC in India?",
      a: "Yes, with proper apostilled/attested documents and video verification as per CA protocol.",
    },
    {
      q: "Is a DSC legally valid for all e-filings?",
      a: "Yes, as per the IT Act, 2000, a valid DSC is legally recognized for all government e-filings and digital contracts.",
    },
  ],
};
