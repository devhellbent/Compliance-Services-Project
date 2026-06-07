import { ServiceData } from "@/lib/types";

export const dinReactivationData: ServiceData = {
  title: "DIN Reactivation",
  breadcrumb: ["Home", "MCA", "Special Compliance Services", "DIN Reactivation"],
  description: "Mandatory process to restore a deactivated Director Identification Number, typically caused by missing annual KYC filings.",
  overview: `**DIN Reactivation** is the legal process of restoring a deactivated Director Identification Number through the Ministry of Corporate Affairs (MCA).

A DIN is typically deactivated when a director fails to file their mandatory annual **DIR-3 KYC** returns. Without an active DIN, an individual is legally barred from signing company documents, participating in board meetings, or accepting new directorships. Reactivation involves filing the overdue KYC forms and paying a statutory penalty.`,
  advantages: [
    { icon: "Zap", title: "Restores Signing Power", text: "Allows you to legally sign financial statements, annual returns (AOC-4/MGT-7), and board resolutions for your company." },
    { icon: "ShieldCheck", title: "Unblocks Company Filings", text: "An inactive DIN of even one director can block the entire company from filing statutory documents, preventing massive company-level penalties." },
    { icon: "UserCheck", title: "Resumes Directorship", text: "Restores your right to manage the company and participate in critical board-level decision-making." },
    { icon: "Award", title: "Enables New Roles", text: "An active DIN is a prerequisite for being appointed as a director in any new company or LLP in India." },
    { icon: "Search", title: "Maintains Credibility", text: "A 'Compliant' status on the MCA portal is vital for due diligence performed by banks, auditors, and potential investors." },
    { icon: "BarChart", title: "Simplified Future Cycle", text: "Once reactivated, you can transition to the new 3-year KYC cycle (starting 2026), reducing future administrative burden." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "High Flat Penalty", text: "Reactivating a DIN 'deactivated due to non-filing' triggers a non-negotiable statutory late fee of ₹5,000." },
    { icon: "Lock", title: "Risk of Disqualification", text: "Continued non-compliance for 3 years can lead to formal disqualification for 5 years, which is a much harder status to reverse." },
  ],
  eligibility: [
    {
      title: "Reactivation Criteria",
      items: [
        "**Deactivated Status:** DIN must be marked as 'Deactivated due to non-filing of DIR-3 KYC'.",
        "**Valid DSC:** Possession of a valid Class 3 Digital Signature Certificate.",
        "**Unique Credentials:** Mobile and email not linked to another director's KYC.",
      ],
    },
    {
      title: "Disqualified Directors",
      items: [
        "Directors disqualified under Section 164(2) are only eligible for reactivation/de-flagging after the 5-year penalty period or via a Court/NCLT order.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Identity Proof",
      content: {
        title: "Mandatory for KYC",
        items: [
          "**PAN Card:** Mandatory for Indian nationals (must match PAN database).",
          "**Passport:** Mandatory for Foreign nationals (must be apostilled).",
          "**Photograph:** Recent passport-sized color photo in JPEG format.",
        ],
      },
    },
    {
      tabTitle: "Address Proof",
      content: {
        title: "Residence Verification",
        items: [
          "**Aadhaar Card:** Or Voter ID/Driving License.",
          "**Utility Bill:** Electricity, Gas, or Phone bill (max 2 months old).",
          "**Bank Statement:** Showing current residence address.",
        ],
      },
    },
    {
      tabTitle: "Digital/Cert",
      content: {
        title: "Validation requirements",
        items: [
          "**DSC:** Valid Class 3 Digital Signature registered on the MCA portal.",
          "**Professional Certification:** Form must be digitally certified by a practicing CA, CS, or CMA.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Check Status", description: "Verify the reason for deactivation on the MCA Master Data portal." },
    { step: 2, title: "DSC Registration", description: "Ensure the director's current Class 3 DSC is updated on the MCA V3 portal." },
    { step: 3, title: "Form Preparation", description: "Fill the e-Form DIR-3 KYC with updated personal and contact details." },
    { step: 4, title: "OTP Verification", description: "Verify the mobile number and email address via separate One-Time Passwords." },
    { step: 5, title: "Certification", description: "Have a practicing professional (CA/CS/CMA) certify the form and documents." },
    { step: 6, title: "Submission", description: "Upload the form and pay the ₹5,000 penalty to reactivate the DIN immediately." },
  ],
  fees: [
    { component: "Late Filing Penalty (MCA)", fees: "₹5,000", remarks: "Fixed, non-negotiable statutory fee." },
    { component: "Standard Filing Fee", fees: "₹0", remarks: "If filed before the deadline (Sept 30)." },
    { component: "Professional Certification Fee", fees: "₹1,000 - ₹3,000", remarks: "Per director for CA/CS services." },
    { component: "Class 3 DSC (New)", fees: "₹800 - ₹2,500", remarks: "If previous DSC has expired." },
    { component: "Foreign Director Surcharge", fees: "Variable", remarks: "Higher due to notarization/apostille costs." },
  ],
  faqs: [
    { q: "Why was my DIN deactivated?", a: "The most common reason is failing to file the mandatory annual DIR-3 KYC form by the September 30th deadline." },
    { q: "Can I be a director while my DIN is deactivated?", a: "No. While your name may still be in the records, you cannot legally exercise any powers or sign any forms until it is reactivated." },
    { q: "What is the penalty for reactivation?", a: "The statutory penalty for filing KYC after the deadline is ₹5,000 per DIN." },
    { q: "What is the new 3-year KYC cycle?", a: "Starting in 2026, the MCA has shifted some directors to a once-every-3-years KYC cycle to reduce the compliance burden." },
  ],
};
