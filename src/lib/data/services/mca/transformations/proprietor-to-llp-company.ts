import { ServiceData } from "@/lib/types";

export const proprietorToLlpCompanyData: ServiceData = {
  title: "Proprietor to LLP Company",
  breadcrumb: ["Home", "MCA", "Legal Business Transformations", "Proprietor to LLP Company"],
  description: "Strategic transition from a sole proprietorship to a Limited Liability Partnership to secure asset protection and corporate credibility.",
  overview: `Converting a sole proprietorship to a **Limited Liability Partnership (LLP)** involves incorporating a new legal entity to take over your existing business.

This transition provides limited liability protection, shielding your personal assets from business debts, and ensures perpetual succession. Since a proprietorship is a single-person entity and an LLP requires at least two, you must introduce a partner (e.g., a family member) to form the new corporate body that will 'take over' your existing operations.`,
  advantages: [
    { icon: "ShieldCheck", title: "Limited Liability Protection", text: "Protects your personal assets (home, savings) from being seized to pay business debts; liability is restricted to your contribution." },
    { icon: "Zap", title: "Separate Legal Entity", text: "The LLP is a distinct 'person' in the eyes of law. It can own property, sign contracts, and sue in its own name, creating a professional barrier." },
    { icon: "TrendingUp", title: "Perpetual Succession", text: "An LLP continues to exist regardless of changes in partners, death, or retirement, making it more stable for long-term clients and vendors." },
    { icon: "BarChart", title: "Fundraising & Credibility", text: "Banks and VCs prefer lending to LLPs because they are registered with the MCA, offering more transparency than a proprietorship." },
    { icon: "DollarSign", title: "Tax Efficiencies", text: "No Double Taxation on profits distributed to partners. Salaries and interest paid to partners are deductible as business expenses." },
    { icon: "CheckCircle", title: "Audit Exemptions", text: "LLPs are exempt from mandatory audits until their turnover exceeds ₹40 Lakhs or capital contribution exceeds ₹25 Lakhs." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "Ownership Restriction", text: "To avoid capital gains tax on the transfer, the original proprietor must maintain at least 50% ownership for 5 years." },
    { icon: "Clock", title: "New Tax Entity", text: "Requires obtaining a completely new PAN, TAN, and migrating GST registrations, which involves significant administrative work." },
  ],
  eligibility: [
    {
      title: "Operational Criteria",
      items: [
        "**Minimum Partners:** Must introduce at least one additional person (LLP requires 2+ partners).",
        "**Resident Partner:** At least one designated partner must be a resident of India (≥ 120 days stay).",
        "**Digital Identity:** All partners must have a valid DSC and DPIN/DIN.",
      ],
    },
    {
      title: "Tax Neutrality (Section 47)",
      items: [
        "**Total Transfer:** All assets and liabilities of the proprietorship must move to the LLP.",
        "**No Cash Consideration:** The proprietor must receive only partnership interest in exchange for the business.",
        "**Going Concern:** The business must continue operations without a break during the transition.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Partner KYC",
      content: {
        title: "Personal Identification",
        items: [
          "**PAN Card:** Mandatory for all Indian partners (self-attested).",
          "**Identity Proof:** Aadhaar Card, Voter ID, or Driving License.",
          "**Address Proof:** Bank Statement or Utility Bill (max 2 months old).",
          "**Digital Signature (DSC):** Required for all partners to sign portal forms.",
        ],
      },
    },
    {
      tabTitle: "Registered Office",
      content: {
        title: "Proof of Business Premise",
        items: [
          "**Utility Bill:** Electricity, Gas, or Water bill (max 2 months old).",
          "**Rent Agreement:** Between the property owner and the new LLP.",
          "**NOC:** Declaration from the owner permitting the LLP to use the space.",
        ],
      },
    },
    {
      tabTitle: "Transfer Proof",
      content: {
        title: "Conversion Specifics",
        items: [
          "**Business Transfer Agreement (BTA):** Legal contract for the 'takeover' of assets/liabilities.",
          "**Statement of Assets:** Certified list of everything being transferred.",
          "**LLP Agreement:** Defining profit-sharing and the 'Takeover Clause'.",
          "**NOC from Creditors:** Written consent from banks or vendors of the proprietorship.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "DSC & Name", description: "Obtain Digital Signatures and reserve a unique name for the LLP via the RUN-LLP service." },
    { step: 2, title: "LLP Incorporation", description: "File Form FiLLiP with the MCA to register the new legal entity and obtain the COI." },
    { step: 3, title: "BTA Execution", description: "Draft and execute the Business Transfer Agreement on stamp paper to migrate assets." },
    { step: 4, title: "LLP Agreement", description: "File Form 3 with the ROC within 30 days of incorporation, detailing the takeover." },
    { step: 5, title: "Tax Migration", description: "Apply for a new PAN/TAN and file GST ITC-02 to transfer unused tax credits." },
    { step: 6, title: "Bank Account", description: "Close the proprietorship account and open a new Current Account in the LLP's name." },
  ],
  fees: [
    { component: "Name Reservation (RUN-LLP)", fees: "₹200", remarks: "MCA reservation fee." },
    { component: "Incorporation Fee (Capital < ₹1L)", fees: "₹500", remarks: "Standard FiLLiP fee." },
    { component: "LLP Agreement Filing (Form 3)", fees: "₹50 - ₹200", remarks: "Slab-based filing fee." },
    { component: "Digital Signature (DSC)", fees: "₹1,500 - ₹2,500", remarks: "Per partner (Class 3)." },
    { component: "Stamp Duty (Agreement)", fees: "₹300 - ₹5,000", remarks: "Varies by state and capital amount." },
    { component: "Professional Fee", fees: "₹8,000 - ₹15,000", remarks: "For drafting BTA, Agreement, and certification." },
  ],
  faqs: [
    { q: "Can I convert to an LLP alone?", a: "No. An LLP requires a minimum of two partners. You must introduce at least one more person (like a family member) to the business." },
    { q: "Is the transfer of assets taxable?", a: "If you follow Section 47(xiv) of the Income Tax Act (including the 5-year 50% ownership rule), the transfer is exempt from capital gains tax." },
    { q: "Do I need a new GST number?", a: "Yes. Since the LLP is a new legal entity with a new PAN, you must obtain a new GST registration and migrate your tax credits." },
    { q: "How long does the conversion take?", a: "The entire process, from name reservation to tax migration, usually takes 15 to 25 working days." },
  ],
};
