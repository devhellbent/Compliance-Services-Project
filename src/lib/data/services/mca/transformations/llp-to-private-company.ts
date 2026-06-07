import { ServiceData } from "@/lib/types";

export const llpToPrivateCompanyData: ServiceData = {
  title: "LLP to Private Company",
  breadcrumb: ["Home", "MCA", "Legal Business Transformations", "LLP to Private Company"],
  description: "Formal legal conversion of a Limited Liability Partnership into a Private Limited Company to access equity funding and issue ESOPs.",
  overview: `Converting an LLP to a **Private Limited Company** (under Section 366 of the Companies Act, 2013) is a strategic transition for businesses seeking scalability and institutional investment.

This formal conversion ensures the automatic transfer of all assets, liabilities, and existing contracts to the new corporate entity. It is the preferred route for startups looking to issue **ESOPs** or attract Venture Capitalists (VCs) who require a share-based ownership structure that an LLP cannot provide.`,
  advantages: [
    { icon: "TrendingUp", title: "Access to Venture Capital", text: "Enables the issuance of equity shares, which is a mandatory requirement for VCs and Angel Investors to provide funding." },
    { icon: "Award", title: "Ability to Offer ESOPs", text: "Allows the company to grant ownership stakes to employees, a critical tool for attracting and retaining top-tier talent in competitive markets." },
    { icon: "ShieldCheck", title: "Lower Tax Regimes", text: "Companies often qualify for concessional tax rates (15% - 25%), which can be significantly lower than the flat 30% rate applied to LLPs." },
    { icon: "Zap", title: "Separate Management", text: "Creates a clear distinction between Shareholders (owners) and Directors (management), allowing for professional governance." },
    { icon: "Globe", title: "Global Credibility", text: "The 'Private Limited' status is internationally recognized and preferred by global vendors, clients, and institutional lenders." },
    { icon: "CheckCircle", title: "Regulatory Stability", text: "Operates under a robust legal framework that provides better protection for minority investors and clear exit strategies via share transfers." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "Stricter Compliance", text: "Requires mandatory annual audits, quarterly board meetings, and more complex statutory filings compared to the flexible LLP structure." },
    { icon: "Clock", title: "Public Objection Period", text: "Requires a mandatory 21-day public notice period in newspapers to invite objections before the conversion can be finalized." },
  ],
  eligibility: [
    {
      title: "Statutory Criteria",
      items: [
        "**Minimum Partners:** The LLP must have at least two partners (who will become the first directors/shareholders).",
        "**Up-to-date Filings:** Must have filed all previous Form 8 and Form 11 returns.",
        "**Unanimous Consent:** All partners must provide written consent via a formal resolution.",
      ],
    },
    {
      title: "Prerequisites",
      items: [
        "**Resident Director:** At least one proposed director must be a resident of India (≥ 182 days stay).",
        "**Clean Record:** No pending litigations, unsatisfied charges, or investigations against the LLP.",
        "**Creditor Consent:** Must obtain a No Objection Certificate (NOC) from all secured creditors.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "LLP Records",
      content: {
        title: "Proof of Existing Status",
        items: [
          "**LLP Agreement:** Original copy and all subsequent amendments.",
          "**Certificate of Incorporation:** Of the existing LLP.",
          "**Latest ITR:** Copy of the most recently filed income tax return.",
        ],
      },
    },
    {
      tabTitle: "Conversion Pack",
      content: {
        title: "Statutory Approvals",
        items: [
          "**Unanimous Resolution:** Signed by all partners agreeing to the conversion.",
          "**Form URC-2 Proof:** Copy of the public notice published in two newspapers.",
          "**NOC from Creditors:** Written consent from all secured lenders.",
          "**Certified Financials:** Statement of assets/liabilities prepared within 15 days of filing.",
        ],
      },
    },
    {
      tabTitle: "Company Setup",
      content: {
        title: "New Entity Documents",
        items: [
          "**Draft MOA & AOA:** Rewritten for a Private Limited structure.",
          "**Director KYC:** PAN, Aadhaar, and recent Address Proof for all directors.",
          "**Office Proof:** Utility bill and NOC from the property owner.",
          "**INC-9 Affidavits:** Declarations that directors are not disqualified.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Name Reservation", description: "Apply for a name via the RUN service (often the same name as the LLP)." },
    { step: 2, title: "Newspaper Notice", description: "Publish a public notice in Form URC-2 in one English and one Vernacular newspaper." },
    { step: 3, title: "Objection Period", description: "Wait for 21 days for any public objections; meanwhile, prepare the financial statements." },
    { step: 4, title: "Form URC-1 Filing", description: "Submit the conversion application along with partner consents and certified financials." },
    { step: 5, title: "SPICe+ Filing", description: "File the incorporation forms (Part B, AGILE, etc.) on the MCA portal." },
    { step: 6, title: "COI Issuance", description: "The ROC verifies the forms and issues a Fresh Certificate of Incorporation; the LLP is deemed dissolved." },
  ],
  fees: [
    { component: "Name Reservation (RUN)", fees: "₹1,000", remarks: "MCA reservation fee." },
    { component: "Form URC-1 (Conversion)", fees: "₹2,000 - ₹5,000", remarks: "Based on authorized capital." },
    { component: "Stamp Duty (MOA/AOA)", fees: "₹1,000 - ₹15,000", remarks: "Varies by state (e.g., MP/Punjab are higher)." },
    { component: "Newspaper Advertisements", fees: "₹5,000 - ₹15,000", remarks: "Mandatory public notice costs." },
    { component: "Professional Fee", fees: "₹15,000 - ₹35,000", remarks: "For drafting, certification, and filing coordination." },
  ],
  faqs: [
    { q: "Is the LLP dissolved after conversion?", a: "Yes. Upon issuance of the company's COI, the LLP is automatically deemed to be dissolved." },
    { q: "What happens to the LLP's assets and liabilities?", a: "They are automatically transferred to the new Private Limited Company by operation of law under Section 366." },
    { q: "Can we keep the same PAN and GST?", a: "No. A company is a different tax entity. You must apply for a new PAN/TAN and migrate your GST registration." },
    { q: "How long does the entire conversion take?", a: "Due to the mandatory 21-day notice period, the entire process usually takes 35 to 50 days." },
  ],
};
