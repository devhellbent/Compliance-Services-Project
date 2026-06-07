import { ServiceData } from "@/lib/types";

export const msmeFillingData: ServiceData = {
  title: "MSME Filling",
  breadcrumb: ["Home", "MCA", "Annual & Half-Yearly Compliance", "MSME Filling"],
  description: "Official Udyam Registration for Micro, Small, and Medium Enterprises to access government benefits and formalize business operations.",
  overview: `The MSME (Micro, Small, and Medium Enterprises) filing, commonly known as Udyam Registration, is a crucial, entirely online, and free process for businesses in India. It officially certifies a business as an MSME, making it eligible for various government schemes and benefits.

The classification is based on a composite criterion of investment in plant and machinery/equipment and annual turnover. Once registered, the enterprise receives a permanent Udyam Registration Number and an e-certificate.

### Revised Classification Criteria (2025)

| Enterprise Type | Investment in Plant & Machinery | Annual Turnover |
| --- | --- | --- |
| **Micro** | ≤ ₹2.5 Crore | ≤ ₹10 Crore |
| **Small** | ≤ ₹25 Crore | ≤ ₹100 Crore |
| **Medium** | ≤ ₹125 Crore | ≤ ₹500 Crore |`,
  advantages: [
    { icon: "ShieldCheck", title: "Protection Against Delayed Payments", text: "Buyers must pay MSME vendors within 45 days. Delayed payments attract compound interest at three times the RBI bank rate." },
    { icon: "Landmark", title: "Priority Sector Lending", text: "Banks dedicate a portion of lending to MSMEs, ensuring easier and faster loan approvals with lower interest rates." },
    { icon: "Zap", title: "Collateral-Free Loans", text: "Access unsecured loans up to certain limits under schemes like CGTMSE." },
    { icon: "Award", title: "Government Tender Preference", text: "Exemption from Earnest Money Deposits (EMD) and relaxed criteria for prior experience/turnover in government bids." },
    { icon: "FileCheck", title: "IP Subsidies", text: "Up to 50% subsidy on fees for filing Patents and Trademarks." },
    { icon: "ClipboardCheck", title: "Certification Reimbursement", text: "Claim reimbursement for costs incurred on obtaining ISO Certifications (e.g., ISO 9001/14001)." },
  ],
  disadvantages: [
    { icon: "AlertCircle", title: "Limited Retail/Wholesale Benefits", text: "While retailers/wholesalers can register, their benefits are primarily limited to Priority Sector Lending." },
    { icon: "FileWarning", title: "Compliance Thresholds", text: "Growth beyond the medium enterprise thresholds results in the loss of MSME benefits." },
  ],
  eligibility: [
    {
      title: "Enterprise Classification",
      items: [
        "**Micro:** Investment ≤ ₹2.5 Cr AND Turnover ≤ ₹10 Cr.",
        "**Small:** Investment ≤ ₹25 Cr AND Turnover ≤ ₹100 Cr.",
        "**Medium:** Investment ≤ ₹125 Cr AND Turnover ≤ ₹500 Cr.",
      ],
    },
    {
      title: "Business Types",
      items: [
        "Manufacturing Enterprises",
        "Service-based Enterprises",
        "Wholesale and Retail Trade (limited benefits)",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Registration Data",
      content: {
        title: "Required Data Points",
        items: [
          "Aadhaar Number (of the proprietor/partner/director).",
          "PAN Number of the enterprise.",
          "GSTIN (Mandatory if applicable under GST law).",
          "Official Bank Account Details (Account No & IFSC).",
          "Social Category of Applicant (General/SC/ST/OBC).",
          "Enterprise Name and Type of Organization.",
        ],
      },
    },
    {
      tabTitle: "Self-Declaration",
      content: {
        title: "Zero Document Upload",
        items: [
          "The process is entirely paperless and based on self-declaration.",
          "Investment and Turnover data is auto-fetched from ITR and GST records via PAN.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Portal Access", description: "Visit the official Udyam Registration Portal." },
    { step: 2, title: "Aadhaar Validation", description: "Enter Aadhaar number and validate via OTP." },
    { step: 3, title: "PAN Verification", description: "Enter PAN details; the system validates with Income Tax database." },
    { step: 4, title: "Enterprise Details", description: "Fill in location, contact details, and main business activity." },
    { step: 5, title: "Financial Declaration", description: "Declare investment and turnover details (if not auto-fetched)." },
    { step: 6, title: "Final Submission", description: "Verify all details and submit to receive the permanent Udyam Registration Number." },
  ],
  fees: [
    { component: "Government Registration Fee", fees: "₹0", remarks: "Registration is completely free on the official portal." },
    { component: "Certificate Issuance", fees: "₹0", remarks: "E-certificate is issued for free." },
    { component: "Professional Service Fee", fees: "₹500 - ₹2,000", remarks: "If choosing to use a consultant for assistance." },
  ],
  faqs: [
    { q: "Is Udyam Registration mandatory?", a: "While not strictly mandatory for all, it is required to avail any MSME-specific government benefits, subsidies, or priority lending." },
    { q: "Can a retailer register for MSME?", a: "Yes, but benefits for retailers and wholesalers are primarily restricted to Priority Sector Lending (PSL)." },
    { q: "What is the validity of the MSME certificate?", a: "The Udyam Registration is permanent and does not require renewal." },
    { q: "Is there any fee for registration?", a: "No, the government charges zero fees for Udyam registration." },
  ],
};
