// lib/data/services/taxation/gst/gst-registration-for-ecommerce.ts

import { ServiceData } from "@/lib/types";

export const gstRegistrationForEcommerceData: ServiceData = {
  title: "GST Registration for E-commerce",
  breadcrumb: ["Home", "Taxation", "GST for E-commerce"],
  description:
    "GST registration is mandatory for any business selling goods via e-commerce platforms, regardless of their annual turnover, enabling Pan-India trade.",
  overview: `GST registration is mandatory for any business selling goods via e-commerce platforms, regardless of their annual turnover. Unlike traditional shops, online sellers lose the ₹40 Lakh exemption threshold and must register from their very first sale. However, service providers (like consultants) still benefit from a ₹20 Lakh exemption. Additionally, platforms like Amazon or Flipkart are required to deduct 1% TCS (Tax Collection at Source) on every sale, which sellers can later claim as a tax credit in their electronic cash ledger.

Small intra-state sellers with turnover below the threshold can now use a simplified Enrolment Number to sell online without a full GSTIN. However, this restricts them from selling to customers in other states. For full-scale e-commerce operations, a regular GST registration is essential to ensure seamless inter-state trade and legal compliance. You must also link your business bank account within 30 days of registration to avoid suspension.`,
  advantages: [
    {
      icon: "Globe",
      title: "Pan-India Market Access",
      text: "Major marketplaces (Amazon, Flipkart) require a valid GSTIN to enable shipping outside your home state. Registration unlocks a nationwide customer base instantly.",
    },
    {
      icon: "Wallet",
      title: "ITC on Marketplace Fees",
      text: "E-commerce platforms charge significant fees for commissions, shipping, and advertising (taxed at 18% GST). Registered sellers can claim this 18% back as Input Tax Credit.",
    },
    {
      icon: "CheckCircle",
      title: "TCS as a Tax Credit",
      text: "The 1% TCS deducted by the platform is not a fee but a tax credit. It is deposited in your GST portal and can be used to pay your monthly taxes, improving cash flow.",
    },
    {
      icon: "TrendingUp",
      title: "Enhanced Brand Visibility",
      text: "Compliance is a prerequisite for premium badges like 'Amazon Prime' or 'Flipkart Assured,' which significantly increase product ranking and customer trust.",
    },
  ],
  disadvantages: [
    {
      icon: "Clock",
      title: "Mandatory Monthly Filing",
      text: "Online sellers must file GSTR-1 and GSTR-3B every month, regardless of their turnover. Failure to file a Nil return results in a late fee of ₹20 per day.",
    },
    {
      icon: "AlertCircle",
      title: "Zero Threshold for Goods",
      text: "Traditional 'small business' exemptions do not apply. You must register from your very first sale if selling products through a third-party marketplace.",
    },
    {
      icon: "FileText",
      title: "Complex Data Reconciliation",
      text: "Requires constant monitoring to ensure the sales reported by the marketplace (GSTR-8) match your own records to avoid Rule 88C automated notices.",
    },
  ],
  eligibility: [
    {
      title: "Mandatory Registration (No Threshold)",
      items: [
        "**Inter-state Sellers:** If you sell goods to customers outside your home state (e.g., shipping from Delhi to Mumbai).",
        "**Marketplace Operators:** Mandatory for platforms like Amazon, Flipkart, or niche marketplaces where others sell goods.",
        "**Non-Resident Taxable Persons:** Foreign entities or individuals supplying goods/services to Indian customers.",
        "**Casual Taxable Persons:** Individuals selling at temporary stalls or exhibitions in a state where they have no fixed place of business.",
      ],
    },
    {
      title: "Threshold-Based Registration",
      items: [
        "**Service Providers:** Mandatory if annual aggregate turnover exceeds ₹20 Lakhs (Normal States) / ₹10 Lakhs (Special Category States).",
        "**Intra-state Goods Sellers:** Mandatory if turnover exceeds ₹40 Lakhs (Normal) / ₹20 Lakhs (Special Category).",
      ],
    },
    {
      title: "Intra-state 'Small Seller' Exemption",
      items: [
        "**No Inter-state Sales:** Small sellers can sell through e-commerce operators without a GSTIN if they sell only within their home state.",
        "**Turnover Limit:** Total turnover must be below the registration threshold (₹40L for goods).",
        "**Enrollment ID:** Must obtain a 'GST Enrollment ID' from the portal to list products on marketplaces without tax filing.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Sole Proprietor",
      content: {
        title: "Individual seller checklist",
        items: [
          "PAN Card: Personal PAN of the applicant.",
          "Aadhaar Card: For identity verification and OTP signing.",
          "Passport Size Photo: In JPEG format (under 100KB).",
          "Bank Proof: Cancelled cheque or passbook first page showing name and IFSC.",
        ],
      },
    },
    {
      tabTitle: "Company / LLP",
      content: {
        title: "Corporate seller checklist",
        items: [
          "Company/LLP PAN Card and Certificate of Incorporation (COI).",
          "MOA & AOA (for Companies) or LLP Agreement (for LLPs).",
          "Board Resolution naming the Authorized Signatory.",
          "Identity proofs (PAN/Aadhaar) and photos of all Directors/Partners.",
          "Digital Signature Certificate (DSC): Mandatory for signing the application.",
        ],
      },
    },
    {
      tabTitle: "Address Proof",
      content: {
        title: "Business premises (E-commerce hub)",
        items: [
          "Owned: Latest Electricity Bill & Property Tax Receipt / Municipal Khata copy.",
          "Rented: Valid Rent/Lease Agreement and Owner's Electricity Bill.",
          "Home-Office: Consent Letter from parent/spouse and their utility bill.",
          "HSN Codes: List of the top 5 products you plan to sell with tax codes.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Enrollment ID Generation",
      description: "If selling intra-state under the threshold, obtain a GST Enrollment ID. Otherwise, apply for a regular GSTIN on the portal.",
    },
    {
      step: 2,
      title: "Document and TRN Processing",
      description: "Generate a TRN via PAN/Mobile/Email OTP, upload all address and identity proofs, and complete the 'Part B' application.",
    },
    {
      step: 3,
      title: "Marketplace Account Setup",
      description: "Upload your GSTIN or Enrollment ID to the Seller Central dashboard (e.g., Amazon/Flipkart) and configure your tax settings.",
    },
    {
      step: 4,
      title: "Bank Account Linking",
      description: "Mandatory requirement to link your business bank account to the GST portal within 30 days of registration to avoid suspension.",
    },
    {
      step: 5,
      title: "Monthly Compliance Cycle",
      description: "File GSTR-1 and GSTR-3B monthly to report sales and claim back the 1% TCS deducted by the platform.",
    },
  ],
  fees: [],
  feesMarkdown: `
The government of India does not charge a fee for GST registration. The primary costs for e-commerce sellers are professional and compliance-related.

### Professional Fee Structure

| Compliance Service | Charged By | Estimated Cost (2026) | Key Factors Affecting Cost |
| --- | --- | --- | --- |
| GST Registration (Proprietor) | CA / Tax Consultant | ₹1,000 – ₹3,000 | Number of states/APOBs. |
| GST Registration (Company) | CA / Tax Consultant | ₹3,000 – ₹8,000 | Documentation complexity. |
| Digital Signature (DSC) | Certified Authorities | ₹1,000 – ₹2,500 | Validity (1–3 years). |
| Monthly Retainer | CA / Tax Consultant | ₹500 – ₹2,000 | Volume of monthly invoices. |

### Financial Impact: The 1% TCS

*   **Tax Collection at Source:** E-commerce platforms (Amazon, Flipkart) deduct 1% TCS from your net sales.
*   **Credit Retrieval:** This 1% is NOT a fee; it is deposited in your GST portal as a tax credit to be used against your monthly liability.
`,
  faqs: [
    {
      q: "Can I sell on multiple marketplaces with one GST number?",
      a: "Yes, you can sell on Amazon, Flipkart, and your own website using the same GSTIN, provided they are all operating from the same state.",
    },
    {
      q: "Is it possible to sell online without a GST number?",
      a: "Only for **intra-state** sales (within your own state) if your turnover is below the threshold, by obtaining a **GST Enrollment ID**.",
    },
    {
      q: "How do I claim my 1% TCS back?",
      a: "The TCS is deposited in your **Electronic Cash Ledger** after you 'Accept' the records in the TDS/TCS Credit Received tab on the GST portal.",
    },
  ],
};
