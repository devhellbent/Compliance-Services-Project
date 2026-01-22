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
      icon: "CheckCircle",
      title: "Advantages of a Digital Signature Certificate (DSC)",
      text: "---------------------- ------------------------------------------------ **Feature**            **Description** High Security &        A DSC ensures the identity of the signer is Authenticity           verified and authentic, significantly reducing the risk of forgery and fraud. Data Integrity         Documents signed with a DSC cannot be altered or tampered with after signing. Any change will invalidate the signature, providing assurance that the data is safe and secure. Non-Repudiation        The signer cannot later deny having signed the document, as the digital signature is uniquely linked to their identity and private key. Legal Validity         DSCs are legally recognized and admissible in a court of law in many jurisdictions, providing the same legal status as a physical handwritten signature. Time and Cost Savings  Eliminates the need for printing, signing, scanning, faxing, couriering, and storing physical paper documents, saving time, money, and administrative effort. Operational Efficiency Allows for instant, remote signing of documents from anywhere, speeding up workflow, contract turnaround times, and overall business processes. Regulatory Compliance  Helps businesses and individuals meet various government and regulatory filing requirements (e.g., e-filing of tax returns, company filings, e-tendering). Environmental          Reduces paper consumption and transportation Friendliness           needs, supporting an eco-friendly, paperless environment. Convenience and        Documents can be signed anytime and anywhere Accessibility          using a computer or mobile device. ---------------------- ------------------------------------------------",
    },
  ],
  disadvantages: [
    {
      icon: "CheckCircle",
      title: "",
      text: "--------------------- ------------------------------------------------ **Feature**            **Description** Dependency on          The entire system relies on technology and a Technology             secure internet connection, making it vulnerable to technical glitches, system malfunctions, and cyber-attacks (e.g., key theft or system hacking) if security measures are inadequate. Complex Setup and      Digital signatures rely on complex PKI Management             infrastructure. The process of obtaining, installing, and managing the digital certificate and its private key can be complex or challenging for users unfamiliar with the technology. Cost of Implementation There are upfront and recurring costs associated with obtaining and renewing the DSC, and potentially for compatible software or hardware (like a crypto-token). Certificate Lifecycle  Proper management of the certificate lifecycle Management             (issuance, renewal, and timely revocation if compromised) is crucial, and lapses can lead to security risks or service interruptions (e.g., expired certificates). User Adoption and      Some individuals or organizations may still be Trust Issues           skeptical or resistant to using digital signatures due to a lack of familiarity or concerns about security and privacy. Compatibility Issues   While improving, certain DSCs or software may not be fully compatible with all operating systems, document types, or older software systems. Legal Variation        While widely accepted, the legal status and specific requirements for digital signatures can vary significantly across different countries, industries, or for specific document types (e.g., wills). ---------------------- ------------------------------------------------",
    },
  ],
  eligibility: [
    {
      title:
        "The eligibility for a Digital Signature Certificate (DSC) in India is",
      items: [
        "generally open to both **individuals and organizations**, and is primarily determined by the **documents and verification processes** you complete.  The current standard certificate being issued is the **Class 3 DSC**, as Class 2 has been discontinued    Here is a breakdown of the eligible entities and the core requirements:",
      ],
    },
    {
      title: "Eligible Applicants (Who can get a DSC):",
      items: [
        "**Individuals (Indian Nationals):** Any Indian citizen can apply for a DSC for personal use, especially for e-filing.",
        "**Individuals in Businesses/Professions (Mandatory Users):** ",
        "Directors of Companies",
        "Partners of Limited Liability Partnerships (LLPs)",
        "Authorized Signatories for Income Tax e-filing (especially those whose accounts require an audit)",
        "Professionals like Chartered Accountants (CAs), Company Secretaries (CSs), and Cost and Management Accountants (CMAs).",
        "Individuals or entities participating in e-Tendering or e-Procurement.",
        "Holders of Import-Export Certificates (IEC) for DGFT-related transactions. ",
        "**Organizations:** Companies, LLPs, Proprietorships, Partnership Firms, NGOs, Trusts, and government organizations can obtain a DSC, which is issued in the name of an authorized representative.",
        "**Foreign Individuals and Organizations:** Non-Resident Indians (NRIs) and foreign-registered companies/entities can also apply for a DSC.",
      ],
    },
    {
      title: "Core Requirements and Documents:",
      items: [
        "To be considered eligible, an applicant must successfully complete the identity verification process by providing the necessary documents to a **Licensed Certifying Authority (CA)**.  #",
      ],
    },
    {
      title: "For an Individual DSC (Indian Citizen):",
      items: [
        "----------------- ---------------------------------------------------------   **Requirement**   **Primary Documents Accepted (Self-Attested)**    Proof of Identity PAN Card, Passport, Driving License, Aadhaar Card (eKYC).    Proof of Address  Aadhaar Card (eKYC), Voter ID, Passport, Driving                     License/RC, Latest Utility Bills (Telephone, Water,                     Electricity, Gas), Latest Bank Statements.    Verification      A recent passport-size photograph.    Digital Token     The DSC is typically issued on a secure USB cryptographic                     token.    Other             A completed application form, valid mobile number and                     email ID, and a fee payment.   ----------------- ---------------------------------------------------------  #",
      ],
    },
    {
      title: "For an Organizational DSC:",
      items: [
        "**Organizational Proof:** Copy of the Certificate of Incorporation/Registration, Partnership Deed, etc.",
        "**Organizational PAN Card** (if GST is not provided).",
        "**Authorization Letter/Board Resolution:** A resolution or letter authorizing the individual to sign on behalf of the company/entity.",
        "**Proof of Authorized Signatory:** A document proving the signatory\\'s position within the organization (e.g., list of directors).",
      ],
    },
    {
      title: "DSC Class Requirement (Mandatory Standard)",
      items: [
        "**Class 3 Certificate:** This is the **highest and currently mandated class** for most statutory filings and e-tendering in India. A Class 3 DSC requires the highest level of verification and is generally required for: ",
        "e-Filing with the Ministry of Corporate Affairs (MCA)",
        "e-Filing Income Tax Returns (for mandatory users)",
        "GST filings and applications",
        "e-Tendering and e-Procurement portals **Documents Required for Getting a Digital Signature Certificate** The documents required for obtaining a Digital Signature Certificate (DSC) vary slightly depending on whether the applicant is an individual or an organization, and the type of certificate being applied for (typically Class 3 in India)",
      ],
    },
    {
      title: "Documents for Indian Individual Applicants",
      items: [
        "For an individual DSC, you primarily need proof of identity and proof of address.  #",
      ],
    },
    {
      title: "Proof of Identity (Any one of the following)",
      items: [
        "**PAN Card** (Mandatory for most government-related e-filings, such as Income Tax and MCA)",
        "Passport",
        "Driving License",
        "Voter ID Card",
        "Post Office ID Card",
        "Any Government-issued photo ID card bearing the applicant\\'s signature. #",
      ],
    },
    {
      title: "Proof of Address (Any one of the following)",
      items: [
        "**Aadhaar Card**",
        "Voter ID Card",
        "Passport",
        "Driving License / Registration Certificate (RC)",
        "Latest Utility Bill (Electricity, Water, or Telephone Bill) - must not be older than two months.",
        "Latest Bank Statement or Bank Passbook (signed and attested by the bank) - must not be older than two months.",
        "Property Tax Receipt or Corporation/Municipal Corporation Receipt. #",
      ],
    },
    {
      title: "Other Requirements",
      items: [
        "A recent **Passport-sized photograph** of the applicant.",
        "Email ID and Mobile Number for verification (OTP and video verification link).",
      ],
    },
    {
      title: "Documents for Indian Organization Applicants",
      items: [
        "When applying for an organizational DSC (e.g., for a Company, LLP, or Partnership Firm), the certificate is issued to an **Authorized Signatory**. Therefore, two sets of documents are required: the organization\\'s proof and the individual signatory\\'s proof.  #",
      ],
    },
    {
      title: "Documents of the Authorized Signatory (The Individual)",
      items: [
        "The Authorized Signatory must provide the same set of **Identity Proof** and **Address Proof** documents listed in Section 1 (A, B, and C).  #",
      ],
    },
    {
      title: "Documents of the Organization (Vary by entity type)",
      items: [
        "Copy of the **Organizational PAN Card**.",
        "Copy of the **Certificate of Incorporation**.",
        "**Board Resolution** or an **Authorization Letter** on the company letterhead, clearly naming the individual as the authorized signatory for obtaining the DSC.",
        "Copy of the **Latest Bank Statement** (first two pages) or a Bank Certificate (should not be older than three months).",
        "Proof of Authorized Signatory (e.g., list of Directors/Designated Partners). **For Partnership Firms:**",
        "Copy of the Partnership Deed.",
        "Copy of the Organizational PAN Card.",
        "Authorization Letter on the firm\\'s letterhead, from the partners, naming the authorized signatory.",
        "Copy of the **Latest Bank Statement** (should not be older than three months). **For Proprietorship:**",
        "**Proprietor's PAN Card** (Individual PAN is also the organizational PAN).",
        "Any one **Business Registration Certificate** (e.g., GST Certificate, Shop & Establishment Certificate, MSME Certificate).",
        "Copy of the **Latest Bank Statement** in the name of the business (should not be older than three months).",
      ],
    },
    {
      title: "Mandatory Verification Step",
      items: [
        "For all DSC applications, especially Class 3, the Certifying Authority mandates a verification step:  A.  **Video Verification:** The applicant is required to record a short     video (or complete a live video call) where they display their     original ID documents and recite a specific script, confirming their     identity and application details.  B.  **Mobile and Email Verification:** OTP-based verification for the     registered mobile number and email ID is compulsory.",
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
