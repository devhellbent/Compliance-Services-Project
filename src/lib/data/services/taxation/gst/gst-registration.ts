// lib/data/services/taxation/gst/gst-registration.ts

import { ServiceData } from "@/lib/types";

export const gstRegistrationData: ServiceData = {
  title: "GST Registration",
  breadcrumb: ["Home", "Taxation", "GST Registration"],
  description:
    "GST registration in India is a mandatory digital process for businesses exceeding specific annual turnover thresholds, providing a unique GSTIN for legal operations.",
  overview: `GST registration in India is a mandatory digital process for businesses exceeding specific annual turnover thresholds. Currently, the limit is ₹40 lakh for goods suppliers and ₹20 lakh for service providers, though these are halved in "Special Category" states. Certain entities, such as e-commerce sellers and inter-state traders, must register regardless of turnover. Registration provides a unique GSTIN, enabling businesses to legally collect taxes, claim Input Tax Credits, and operate seamlessly across state borders.

The application is submitted via the official GST portal using a PAN card, Aadhaar, and business address proof. After generating a Temporary Reference Number (TRN) and completing e-KYC, the application undergoes official review. Once approved, typically within a few working days, a registration certificate is issued digitally. Failure to register when liable results in significant penalties, usually 10% of the tax due. Modern reforms have further streamlined this into a "Fast-Track" process to enhance ease of doing business.

### What is the GST?

GST (Goods and Services Tax) is a unified, destination-based indirect tax that replaced multiple levies like VAT and Service Tax in India. It is applied to the value added at each stage of the supply chain. Businesses utilize Input Tax Credits to avoid "tax on tax," ensuring transparency and efficiency.

The system is categorized into CGST, SGST, and IGST, depending on whether the transaction is within a state or across borders. By consolidating the tax structure into specific slabs (0% to 28%), GST creates a single national market, simplifying compliance for businesses nationwide.

### Types of GST Registration in India

Choosing the right type of GST registration is a critical decision for every business in India. The classification depends primarily on your annual turnover, business model, and the nature of your operations.

*   **Normal Taxpayer (Regular Registration):** The most common category. Best for businesses with turnover exceeding ₹40 Lakh (Goods) or ₹20 Lakh (Services). You can claim Input Tax Credit (ITC) and sell across state borders.
*   **Composition Scheme:** Designed for small-scale taxpayers with turnover up to ₹1.5 Crore. Pay a flat, lower tax rate (1% to 6%) and file fewer returns. Limitations: Cannot collect GST from customers, cannot claim ITC, and restricted to intra-state sales.
*   **Casual Taxable Person (CTP):** Temporary registration (90 days, extendable) for seasonal businesses or individuals at exhibitions/trade fairs in a different state. Requires advance tax deposit.
*   **Non-Resident Taxable Person (NRTP):** For foreign entities occasionally supplying goods/services to India. Mandatory registration regardless of turnover with advance tax deposit.
*   **Other Specialized Registrations:** Input Service Distributor (ISD), E-commerce Operator, and TDS/TCS Deductor categories for specific roles in the supply chain.

### Three-Component Structure of GST

In India, the GST follows a dual structure, allowing both the Central and State governments to levy and collect taxes simultaneously on a common base. This is managed through three primary components:

*   **CGST (Central Goods and Services Tax):** Levied by the Central Government on intra-state transactions. Revenue goes directly to the Central Treasury.
*   **SGST / UTGST (State/Union Territory GST):** Levied by the State Government (SGST) or Union Territory administration (UTGST) on intra-state transactions. Revenue goes to the respective State or UT.
*   **IGST (Integrated Goods and Services Tax):** Levied by the Central Government on inter-state transactions and imports into India. The Center collects the tax and shares it with the consuming state.

*Note: For intra-state sales, both CGST and SGST are charged. If the tax rate is 18%, it is split equally: 9% CGST and 9% SGST.*

### GST Registration Timeline and Validity

*   **Fast-Track Approval (~3 Days):** For low-risk small businesses with monthly tax liability under ₹2.5 Lakh and completed Aadhaar authentication.
*   **Standard Online Approval (7 Days):** With Aadhaar Authentication and no high-risk flags.
*   **Physical Verification (~30 Days):** If Aadhaar authentication is skipped or application is flagged for a site visit.
*   **Validity:** Regular taxpayers get lifetime (perpetual) validity. Casual/Non-Resident persons get 90 days (extendable).
*   **Post-Registration:** Bank account must be linked within 30 days; GSTIN must be displayed at the principal place of business.`,
  advantages: [
    {
      icon: "Wallet",
      title: "Availing Input Tax Credit (ITC)",
      text: "Claim back the GST paid on business purchases (inputs). This eliminates the 'cascading effect' (tax-on-tax), lowering operational costs and improving cash flow.",
    },
    {
      icon: "Shield",
      title: "Legal Recognition and Credibility",
      text: "A GSTIN is a mark of a legitimate, tax-compliant business. Large corporations and B2B clients prefer dealing with GST-registered vendors so they can claim ITC.",
    },
    {
      icon: "Globe",
      title: "Expansion via Interstate Trade",
      text: "GST registration is mandatory for selling goods across state borders. It allows you to tap into a nationwide customer base instantly.",
    },
    {
      icon: "TrendingUp",
      title: "E-commerce Ready",
      text: "To sell on platforms like Amazon, Flipkart, or Myntra, a GSTIN is a prerequisite. It allows your business to scale via digital marketplaces.",
    },
    {
      icon: "Zap",
      title: "Simplified Compliance",
      text: "GST replaced 17 different indirect taxes with one single system managed on a centralized digital portal, reducing paperwork and administrative hurdles.",
    },
  ],
  disadvantages: [
    {
      icon: "FileText",
      title: "Recurring Compliance Burden",
      text: "Requires regular monthly or quarterly filing (GSTR-1 and GSTR-3B) even with zero business activity (Nil Returns) to avoid automatic late fees.",
    },
    {
      icon: "Clock",
      title: "Record Keeping Mandates",
      text: "Requires disciplined maintenance of accounts, sales/purchase registers, and tax invoices for at least 6 years for audit purposes.",
    },
    {
      icon: "AlertCircle",
      title: "Strict Penalty Structure",
      text: "Failure to register when liable results in significant penalties, usually 10% of the tax due or ₹10,000, whichever is higher.",
    },
    {
      icon: "XCircle",
      title: "No ITC for Composition Scheme",
      text: "If opting for the Composition Scheme, you cannot collect GST from customers or claim any Input Tax Credits on your purchases.",
    },
  ],
  eligibility: [
    {
      title: "Turnover-Based Thresholds",
      items: [
        "**Exclusive Supply of Goods:** ₹40 Lakh (Normal States) / ₹20 Lakh (Special States).",
        "**Supply of Services:** ₹20 Lakh (Normal States) / ₹10 Lakh (Special States).",
        "**Mixed Supplies:** ₹20 Lakh (Normal States) / ₹10 Lakh (Special States).",
        "**Special Category States:** Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, Puducherry, Sikkim, Telangana, Tripura, and Uttarakhand.",
      ],
    },
    {
      title: "Mandatory Registration Criteria",
      items: [
        "**Inter-State Suppliers:** Businesses selling goods or services from one state to another.",
        "**E-commerce Sellers:** Individuals selling products through platforms like Amazon, Flipkart, or their own websites.",
        "**Casual Taxable Persons:** Occasional suppliers in a state where they have no fixed place of business.",
        "**Non-Resident Taxable Persons:** Entities or individuals residing outside India who supply goods or services to Indian customers.",
        "**Reverse Charge Liable:** Businesses required to pay tax under the Reverse Charge Mechanism (RCM).",
      ],
    },
    {
      title: "Exemptions from Registration",
      items: [
        "**Below Threshold:** Business turnover remains below the specified ₹40L/₹20L limits.",
        "**Exempt Goods:** Exclusive dealing in goods or services that are exempt from GST (e.g., fresh milk, unprocessed salt).",
        "**Agriculturists:** Supplying produce grown directly from the land.",
        "**Non-Taxable Items:** Supplying Petrol, Diesel, or Alcohol for human consumption (governed by State VAT/Excise).",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Universal Checklist",
      content: {
        title: "Required for all applicants",
        items: [
          "PAN Card: Permanent Account Number of the business or individual applicant.",
          "Aadhaar Card: Aadhaar of the authorized signatory and primary promoters.",
          "Passport-sized Photographs: In JPEG format (under 100KB).",
          "Active Mobile Number & Email: Linked to Aadhaar for OTP verification.",
          "Bank Account Proof: Cancelled cheque (pre-printed name), passbook page, or statement.",
        ],
      },
    },
    {
      tabTitle: "Address Proof",
      content: {
        title: "Business premises verification",
        items: [
          "Owned: Latest Electricity Bill & Property Tax Receipt / Municipal Khata copy.",
          "Rented: Valid Rent/Lease Agreement & Latest Electricity Bill of the owner.",
          "Consent: No Objection Certificate (NOC) from the property owner.",
        ],
      },
    },
    {
      tabTitle: "Entity-Specific",
      content: {
        title: "Constitution documents",
        items: [
          "Partnership: Partnership Deed (Stamped/Notarized) and signed Authorization Letter.",
          "Company: COI, MOA, AOA, and Board Resolution for Authorized Signatory.",
          "LLP: LLP Agreement, COI, and Board Resolution for Designated Partner.",
          "Digital Signature Certificate (DSC): Mandatory for Companies and LLPs.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Fast-Track Approval (~3 Days)",
      description: "Introduced for low-risk small businesses. If monthly tax liability is under ₹2.5 Lakh and Aadhaar authentication is complete, approval can take just 3 days.",
    },
    {
      step: 2,
      title: "Standard Online Approval (7 Days)",
      description: "Applies if you complete Aadhaar Authentication (OTP-based) and your application doesn't trigger any high-risk flags.",
    },
    {
      step: 3,
      title: "Physical Verification (~30 Days)",
      description: "Required if Aadhaar authentication is skipped or if system flags the application. A tax officer physically visits the premises before approval.",
    },
    {
      step: 4,
      title: "Bank Account Linking",
      description: "You must add your business bank account details to the GST portal within 30 days of getting your GSTIN to avoid automatic suspension.",
    },
    {
      step: 5,
      title: "Displaying GSTIN",
      description: "Legally required to display your GST registration certificate and GSTIN on a signboard at your 'Principal Place of Business'.",
    },
  ],
  fees: [],
  feesMarkdown: `
The official government fee for GST registration in India is **₹0**. The government does not charge any application or processing fee.

### Annual Professional Compliance Table

| Business Entity | Applicability | Estimated Professional Fee (Approx.) | Key Factors Affecting Cost |
| --- | --- | --- | --- |
| Sole Proprietorship | Individuals and small shops | ₹1,000 – ₹2,500 | Simple documentation and OTP verification. |
| Partnership Firm / LLP | Multiple owners | ₹2,000 – ₹5,000 | Complexity of deed and DSC requirement. |
| Private Limited Company | Corporate entities | ₹4,000 – ₹10,000 | Board resolution and mandatory DSC. |
| E-commerce Seller | Online sellers | ₹2,500 – ₹7,000 | Marketplace onboarding and specialized reporting. |

### Ancillary and Technical Costs

*   **Digital Signature Certificate (DSC):** Required for Companies and LLPs. A Class 3 DSC usually costs between ₹1,000 and ₹2,500 for a 2-year validity.
*   **Advance Tax Deposit:** Mandatory for "Casual Taxable Persons" or "Non-Resident Taxable Persons" based on estimated tax liability.
*   **Documentation:** Minor costs for notarizing rent agreements or getting legal NOCs for the office address.
`,
  faqs: [
    {
      q: "Can I register for GST voluntarily if my turnover is low?",
      a: "Yes. Many businesses register voluntarily to claim Input Tax Credit (ITC) and increase their credibility with larger GST-registered clients.",
    },
    {
      q: "What is the penalty for not registering when liable?",
      a: "Failure to register when liable results in a penalty of **10% of the tax due or ₹10,000**, whichever is higher.",
    },
    {
      q: "How long is the GST registration certificate valid?",
      a: "For regular taxpayers, the certificate has **lifetime validity** (perpetual). For Casual/Non-Resident persons, it is valid for 90 days (extendable).",
    },
  ],
};
