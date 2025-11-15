// lib/data/services/digital-signature-certificate.ts

import { ServiceData } from "@/lib/types";

// Expanded data mapped from user-provided detailed content
export const digitalSignatureCertificateData: ServiceData = {
  title: "Digital Signature Certificate (DSC)",
  breadcrumb: ["Home", "Registrations", "Digital Signature Certificate"],
  description:
    "Get a Class 3 Digital Signature Certificate for secure e‑filing, e‑tendering and document signing with legally valid, hardware‑token protection.",
  overview:
    "A **Digital Signature Certificate (DSC)** is a secure electronic key that functions as the digital equivalent of a handwritten signature or physical identity proof (like a passport). Issued by a licensed Certifying Authority (CA), it cryptographically binds the identity of an individual or organization to a unique key pair (private + public key). When you digitally sign a document, its hash is encrypted with your private key; anyone can then verify the signature using the public key contained in the DSC to confirm both integrity (no tampering) and authenticity (you are the signer). Under the **Information Technology Act, 2000**, properly issued digital signatures carry full legal validity and deliver non‑repudiation – the signer cannot later deny having signed.\n\n**Where it’s used:** Mandatory for a wide range of secure electronic and statutory interactions: MCA filings (company incorporation & annual returns), Income Tax & GST e‑filing, DGFT transactions, e‑tendering / e‑procurement / e‑auctions, and secure contract execution. By removing paper, DSCs accelerate workflows, lower costs, and strengthen trust in the digital economy.",
  advantages: [
    {
      icon: "ShieldCheck",
      title: "High Security",
      text: "Asymmetric cryptography + hashing ensures authenticity and tamper detection of signed data.",
    },
    {
      icon: "Clock",
      title: "Time and Cost Saving",
      text: "Eliminates printing, scanning, courier delays and manual handling for faster turnaround.",
    },
    {
      icon: "Gavel",
      title: "Legal Validity",
      text: "Recognized under the IT Act, 2000 – digitally signed documents are admissible evidence.",
    },
    {
      icon: "Landmark",
      title: "Mandatory for E-Filings",
      text: "Required for MCA, GST, Income Tax filings, DGFT transactions and e‑tender portals.",
    },
    {
      icon: "Recycle",
      title: "Non‑Repudiation",
      text: "Cryptographic binding prevents the signer from denying a valid signed action later.",
    },
  ],
  disadvantages: [
    {
      icon: "CalendarOff",
      title: "Limited Validity",
      text: "Validity spans 1–3 years; missed renewal interrupts critical e‑filing ability.",
    },
    {
      icon: "Usb",
      title: "Hardware Dependency",
      text: "Private key storage on USB / hardware token can be lost, damaged or misplaced.",
    },
    {
      icon: "FileWarning",
      title: "Compatibility Issues",
      text: "Occasional middleware / driver or browser (Java, token driver) friction on legacy portals.",
    },
    {
      icon: "ShieldAlert",
      title: "Lifecycle Management",
      text: "Revocation on compromise and timely renewal add administrative overhead.",
    },
  ],
  eligibility: [
    {
      title: "Applicant Types",
      items: [
        "**Individuals (Indian / Foreign)** – for personal statutory filings and secure signing.",
        "**Directors / Authorized Signatories** – mandatory for MCA, Income Tax (audit cases), GST.",
        "**Professionals (CA, CS, CMA)** – for professional filings on behalf of clients.",
        "**Organizations (Company / LLP / Firm / NGO / Trust)** – certificate mapped to authorized representative.",
        "**Entities involved in e‑Tendering / DGFT / Import‑Export** – Class 3 required.",
      ],
    },
    {
      title: "Classes of DSC",
      items: [
        "**Class 3 (Current Standard)** – Highest assurance: rigorous identity + video verification; mandatory for all high‑value statutory and e‑tender transactions.",
        "(Class 1 basic & Class 2 medium assurance have been discontinued for statutory use since 2021)",
      ],
    },
    {
      title: "Key Validity & Renewal Facts",
      items: [
        "Validity options: 1, 2 or 3 years set by CCA policies.",
        "Renewal requires re‑verification (Aadhaar e‑KYC / video) before expiry date.",
        "Expired certificates cannot be used – plan a renewal window ~15 days prior.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "For Individuals",
      content: {
        title: "Indian Nationals",
        items: [
          "Self‑attested PAN (mandatory).",
          "Aadhaar for e‑KYC or Passport / Voter ID / Driving Licence as ID + Address proof.",
          "Recent passport‑size photograph (if not fully e‑KYC).",
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
        title: "Non‑Resident / Foreign Nationals",
        items: [
          "Valid Passport (mandatory).",
          "Residential address proof (Bank Statement / Utility Bill ≤ 1 year old).",
          "Documents apostilled / consular attested (if not Indian issued).",
          "Video / in‑person verification as per CA protocol.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Choose a Certifying Authority (CA)",
      description:
        "Select a licensed CA (e.g., eMudhra, Sify, Capricorn, NSDL). Confirm token driver compatibility.",
    },
    {
      step: 2,
      title: "Fill Application Form",
      description:
        "Provide personal / organizational details. Prefer Aadhaar e‑KYC for faster processing.",
    },
    {
      step: 3,
      title: "Submit Documents",
      description:
        "Upload self‑attested KYC documents or complete paperless e‑KYC.",
    },
    {
      step: 4,
      title: "Complete Verification",
      description:
        "Finish mandatory video verification (read script + show ID) / biometric if required.",
    },
    {
      step: 5,
      title: "Download DSC",
      description:
        "On approval, certificate is installed into secure FIPS‑compliant USB token (Signature / Signature+Encryption).",
    },
    {
      step: 6,
      title: "Test & Use",
      description:
        "Install token drivers, test signature on MCA/GST portal, store token safely with password policy.",
    },
  ],
  fees: [
    {
      component: "Class 3 DSC (Signature only)",
      fees: "₹1,200 - ₹2,500",
      remarks:
        "Indicative 2‑year pricing (varies by CA & token brand). Includes secure token.",
    },
    {
      component: "Class 3 DSC (Signature & Encryption)",
      fees: "₹2,000 - ₹4,000",
      remarks:
        "Needed for e‑tendering & data encryption. 2‑year validity typical.",
    },
    {
      component: "Renewal Window Advisory",
      fees: "—",
      remarks:
        "Initiate renewal ~15 days before expiry to avoid filing disruptions.",
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
      a: "Immediately notify the CA to revoke the certificate, reset any portal mappings, and apply for a fresh DSC. This prevents unauthorized signing.",
    },
    {
      q: "Do I need separate DSCs for multiple companies?",
      a: "No. One personal Class 3 DSC can be used across multiple company filings where you are an authorized signatory/director.",
    },
    {
      q: "Why do portals sometimes ask to reinstall drivers?",
      a: "Legacy Java applets / middleware expect specific token driver versions; after OS/browser updates you may need to reinstall to re‑establish secure signing modules.",
    },
  ],
};
