import { ServiceData } from "@/lib/types";

export const kycDir3KycData: ServiceData = {
  title: "KYC/DIR-3 KYC",
  breadcrumb: ["Home", "MCA", "Annual & Half-Yearly Compliance", "KYC/DIR-3 KYC"],
  description: "Mandatory annual identity verification for every individual holding a Director Identification Number (DIN) in India.",
  overview: `**DIR-3 KYC** is a mandatory annual verification process introduced by the Ministry of Corporate Affairs (MCA) for all individuals holding a Director Identification Number (DIN).

Its primary purpose is to ensure the government's registry contains updated personal information for every director, including current address, mobile number, and email. This annual 'check-in' enhances transparency and helps the MCA identify 'shell' companies or inactive directors.

There are two ways to comply:
- **e-Form DIR-3 KYC:** For first-time filers or when personal details (like address) have changed.
- **DIR-3 KYC Web:** A simplified OTP-based version for those with no changes from the previous year.`,
  advantages: [
    { icon: "UserCheck", title: "Maintains Active Status", text: "Regular filing keeps your DIN active. A deactivated DIN is a major red flag to banks, investors, and business partners." },
    { icon: "ShieldCheck", title: "Identity Protection", text: "Annual OTP verification ensures no third party can misuse your identity to incorporate fraudulent companies." },
    { icon: "Zap", title: "Uninterrupted Authority", text: "An active DIN is required to sign legal documents, financial statements, and annual returns for your companies." },
    { icon: "Award", title: "Enhanced Credibility", text: "A 'Compliant' status on the MCA portal boosts director credibility during due diligence by stakeholders." },
    { icon: "TrendingUp", title: "Professional Mobility", text: "Ensures you can be appointed to new boards or resign from existing ones without compliance bottlenecks." },
    { icon: "DollarSign", title: "Cost Savings", text: "Filing before the deadline (Sept 30) is free of government fees. Late filing attracts an immediate ₹5,000 penalty." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "High Penalty for Delay", text: "Filing even one day after the due date triggers an immediate, non-negotiable ₹5,000 fee." },
    { icon: "Lock", title: "DIN Deactivation", text: "Non-compliance results in deactivation of the DIN, legally barring the individual from signing any company forms." },
    { icon: "XCircle", title: "Blocks Company Compliance", text: "A company cannot file its mandatory annual returns if any of its directors have a deactivated DIN." },
  ],
  eligibility: [
    {
      title: "Mandatory Applicability",
      items: [
        "Every individual who was allotted a DIN on or before March 31st of the financial year.",
        "Applies even if the individual is not currently serving as a director in any company.",
        "Includes both Indian and Foreign nationals holding an Indian DIN.",
      ],
    },
    {
      title: "Specific Categories",
      items: [
        "**Disqualified Directors:** Must still file KYC to maintain records in the database.",
        "**Deactivated DINs:** Individuals with already deactivated DINs must file to reactivate (requires ₹5,000 penalty).",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Identity Proof",
      content: {
        title: "Mandatory Proofs",
        items: [
          "**PAN Card:** Mandatory for Indian nationals (must match PAN database).",
          "**Aadhaar Card:** Mandatory for Indian nationals (linked to mobile for OTP).",
          "**Passport:** Mandatory for Foreign nationals; optional for Indians.",
        ],
      },
    },
    {
      tabTitle: "Address Proof",
      content: {
        title: "Proof of Residence (within 2 months)",
        items: [
          "Voter ID, Driving License, or Bank Statement.",
          "Utility Bills (Electricity, Telephone, or Gas bill).",
          "Note: Proof for both Permanent and Current address if they differ.",
        ],
      },
    },
    {
      tabTitle: "Digital/Contact",
      content: {
        title: "Verification Requirements",
        items: [
          "**DSC:** Valid Class 3 Digital Signature Certificate.",
          "**Recent Photo:** Passport-sized color photo (white background).",
          "**Unique Contact:** Personal Mobile Number and Email ID for OTP verification.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Identify Method", description: "Determine if you need the full e-Form (first-time/changes) or the Web version (no changes)." },
    { step: 2, title: "Data Verification", description: "Ensure the mobile and email in the record are active for OTP reception." },
    { step: 3, title: "Document Certification", description: "For the e-Form, get documents self-attested and certified by a practicing CA/CS/CMA." },
    { step: 4, title: "Fill & Validate", description: "Fill the KYC form on the MCA portal and validate against the DIN database." },
    { step: 5, title: "OTP Authentication", description: "Enter separate OTPs received on mobile and email to verify contact details." },
    { step: 6, title: "Submit", description: "Sign using DSC and submit. If filed before Sept 30, government fee is zero." },
  ],
  fees: [
    { component: "Government Fee (On-time)", fees: "₹0", remarks: "If filed by September 30th." },
    { component: "Late Filing Penalty", fees: "₹5,000", remarks: "Flat, non-negotiable fee for late submission/reactivation." },
    { component: "Web KYC (Professional Fee)", fees: "₹500 - ₹1,000", remarks: "If using a consultant for the simplified version." },
    { component: "e-Form KYC (Professional Fee)", fees: "₹1,000 - ₹2,500", remarks: "Requires document verification and attestation." },
    { component: "Foreign Director Fee", fees: "₹4,000 - ₹10,000", remarks: "Higher due to notarization/apostille requirements." },
  ],
  faqs: [
    { q: "What is the due date for DIR-3 KYC?", a: "September 30th of every financial year." },
    { q: "Do I need to file if I am not currently a director?", a: "Yes. If you hold a DIN, you must file KYC annually to keep it active, even with no active directorship." },
    { q: "What is the difference between Web KYC and e-Form KYC?", a: "Web KYC is for those with no change in details (only OTP needed). e-Form KYC is for first-time filers or those updating details (requires professional certification)." },
    { q: "What happens if my DIN is deactivated?", a: "You are legally barred from signing any company documents. You must file the full e-form and pay a ₹5,000 penalty to reactivate it." },
  ],
};
