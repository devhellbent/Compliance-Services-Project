// lib/data/services/llp.ts

import { ServiceData } from "@/lib/types";

export const llpData: ServiceData = {
  title: "Limited Liability Partnership (LLP) Registration",
  breadcrumb: ["Home", "Registrations", "Company Registration", "LLP"],
  description:
    "Experience the perfect blend of partnership flexibility and corporate protection. LLP registration offers limited liability safeguards for partners while maintaining operational simplicity, making it ideal for professional service firms and modern startups.",
  overview:
    "A **Limited Liability Partnership (LLP)** represents an innovative hybrid business structure that masterfully combines the operational flexibility of traditional partnerships with the liability protection characteristic of corporations, introduced in India through the Limited Liability Partnership Act, 2008. As a distinct legal entity separate from its partners, an LLP can own property, enter contracts, and conduct business operations in its own name, ensuring business continuity beyond individual partners. The cornerstone feature of limited liability protects partners' personal assets from business debts and obligations, with liability restricted to their agreed capital contribution—a crucial advantage over traditional partnerships. This structure requires a minimum of two partners with no maximum limit, offering scalability for growing professional practices and businesses. The LLP enjoys perpetual succession, meaning the entity continues to exist regardless of changes in partnership, ensuring stability for long-term business relationships and contracts. Compliance requirements are significantly simpler than private limited companies, with no minimum capital requirement and fewer regulatory filings, reducing operational overhead while maintaining corporate credibility. The structure allows for flexible profit-sharing arrangements through the LLP Agreement, which serves as the governing document outlining partner rights, duties, and operational procedures. Particularly suited for professional services such as legal firms, consulting agencies, chartered accountants, architects, and technology startups, the LLP structure delivers tax efficiency through pass-through taxation while building stakeholder confidence through its regulated framework under the Ministry of Corporate Affairs.",
  whyChooseUs: [
    {
      icon: "ShieldCheck",
      title: "Separate Legal Entity",
      text: "An LLP is a distinct legal entity, separate from its partners. It can own property, enter into contracts, and sue or be sued in its own name.",
    },
    {
      icon: "Users",
      title: "Limited Liability",
      text: "Each partner's liability is limited to their agreed-upon contribution. Personal assets of partners are not at risk for the firm's debts.",
    },
    {
      icon: "TrendingUp",
      title: "Perpetual Succession",
      text: "The LLP's existence is not affected by the entry or exit of partners. It continues to exist until it is legally dissolved.",
    },
    {
      icon: "Settings",
      title: "Flexible Management",
      text: "The partners have the freedom to manage the business directly, as defined in the LLP Agreement.",
    },
    {
      icon: "FileText",
      title: "Lower Compliance",
      text: "Compared to a private limited company, LLPs have fewer compliance requirements, such as no mandatory board meetings.",
    },
  ],
  advantages: [
    {
      icon: "ShieldCheck",
      title: "Limited Liability Protection",
      text: "The most crucial benefit of an LLP is that it offers limited liability to its partners. Each partner's liability is limited to their agreed-upon contribution to the business, protecting personal assets from business failures or misconduct of other partners.",
    },
    {
      icon: "Building2",
      title: "Separate Legal Entity and Perpetual Succession",
      text: "An LLP is considered a separate legal entity, distinct from its partners. It can own assets, enter into contracts, and sue or be sued in its own name. The LLP has perpetual succession, meaning its existence is not affected by changes in its partners.",
    },
    {
      icon: "TrendingUp",
      title: "Enhanced Credibility and Access to Capital",
      text: "A registered LLP is perceived as more credible and trustworthy by clients, suppliers, and financial institutions. This enhanced credibility makes it easier to secure loans and attract investment.",
    },
    {
      icon: "Workflow",
      title: "Operational Flexibility and Tax Benefits",
      text: "An LLP operates with a flexible management structure. The rights and duties of partners are governed by a mutually agreed-upon LLP Agreement. LLPs are treated as partnerships for tax purposes, avoiding Dividend Distribution Tax.",
    },
    {
      icon: "FileCheck",
      title: "Lower Compliance Requirements",
      text: "Compared to a private limited company, LLPs have fewer compliance requirements. No mandatory board meetings and LLPs with turnover below specified threshold are exempt from mandatory audits.",
    },
  ],
  disadvantages: [
    {
      icon: "Percent",
      title: "Flat Tax Rate",
      text: "LLP profits are taxed at a flat rate (currently 30% + cess), and partners do not get the benefit of lower progressive tax slabs available to individuals.",
    },
    {
      icon: "AlertCircle",
      title: "Higher Penalties for Non-Compliance",
      text: "Non-compliance with procedural matters, such as late filing of forms, often attracts higher penalties than traditional partnership firms.",
    },
    {
      icon: "UserX",
      title: "Complex Ownership Transfer",
      text: "Transferring ownership or partnership rights is more complex than in a company, as it involves amendments to the LLP Agreement and may require consent of other partners.",
    },
    {
      icon: "XCircle",
      title: "Limited Foreign Investment",
      text: "While foreign investment is allowed in LLPs, it is restricted to certain sectors and subject to various regulatory approvals under FEMA guidelines.",
    },
  ],
  eligibility: [
    "A minimum of two partners are required. There is no maximum limit.",
    "At least two designated partners, one of whom must be a resident of India.",
    "No minimum capital contribution is required.",
    "A registered office address in India is mandatory.",
  ],
  documents: [
    {
      title: "For Partners",
      items: [
        "PAN Card",
        "Identity Proof (Aadhaar Card, Voter ID, or Passport)",
        "Address Proof (Bank Statement or Utility Bill)",
        "Passport-sized photograph",
      ],
    },
    {
      title: "For Registered Office",
      items: [
        "Utility Bill of the office address",
        "No Objection Certificate (NOC) from the property owner",
      ],
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Digital Signature Certificate (DSC)",
      description: "Obtain DSC for all designated partners.",
    },
    {
      step: 2,
      title: "Name Approval (RUN-LLP)",
      description:
        "File an application for reservation of a unique name for the LLP.",
    },
    {
      step: 3,
      title: "Incorporation Form (FiLLiP)",
      description:
        "File the incorporation form with the Registrar of Companies (RoC).",
    },
    {
      step: 4,
      title: "LLP Agreement",
      description:
        "Draft and file the LLP Agreement within 30 days of incorporation.",
    },
  ],
  fees: [
    {
      component: "RUN-LLP (Name Reservation)",
      fees: "₹200",
      remarks: "Government fee for each name application",
    },
    {
      component: "Filing of Incorporation (FiLLiP Form)",
      fees: "₹500 – ₹5,000",
      remarks: "Depends on capital contribution",
    },
    {
      component: "Form 3 (LLP Agreement Filing)",
      fees: "₹50 – ₹200",
      remarks: "Based on capital contribution",
    },
    {
      component: "PAN & TAN Application",
      fees: "₹170",
      remarks: "₹65 for PAN + ₹65 for TAN + GST",
    },
    {
      component: "DIN (Director Identification Number)",
      fees: "₹500 per partner",
      remarks: "First two DINs are free if applied via FiLLiP",
    },
    {
      component: "DSC (Digital Signature Certificate)",
      fees: "₹800 – ₹1,500 per partner",
      remarks: "Required for all designated partners",
    },
    {
      component: "Professional/Consultant Fees",
      fees: "₹4,000 – ₹10,000",
      remarks: "For registration assistance and LLP Agreement drafting",
    },
    {
      component: "Stamp Duty for LLP Agreement",
      fees: "₹500 – ₹5,000",
      remarks: "State-specific, depends on capital contribution",
    },
    {
      component: "Total Estimated Cost",
      fees: "₹8,000 – ₹25,000",
      remarks: "Total varies based on capital and state",
    },
  ],
  faqs: [
    {
      q: "What is the difference between a Partner and a Designated Partner in an LLP?",
      a: "While all Designated Partners are Partners, the reverse is not true. Designated Partners are responsible for all legal and regulatory compliances of the LLP, similar to directors in a company. Every LLP must have at least two Designated Partners, and at least one must be a resident of India.",
    },
    {
      q: "Is an audit mandatory for an LLP?",
      a: "An audit is not mandatory for an LLP if its annual turnover does not exceed ₹40 lakh or if its capital contribution does not exceed ₹25 lakh. Once these limits are crossed, a statutory audit becomes mandatory.",
    },
    {
      q: "Can a company become a partner in an LLP?",
      a: "Yes, a body corporate (like a private or public limited company) can become a partner in an LLP. This allows for flexible joint venture structures. However, only individuals can be designated partners.",
    },
    {
      q: "What is an LLP Agreement and is it mandatory?",
      a: "An LLP Agreement is a document that outlines the mutual rights and duties of the partners, including profit-sharing ratios, capital contributions, and management structure. It must be filed with the MCA within 30 days of incorporation and is mandatory for the LLP's legal operation.",
    },
    {
      q: "Can an LLP be converted into a Private Limited Company?",
      a: "Yes, an LLP can be converted into a Private Limited Company or a Public Limited Company as per the provisions of the Companies Act, 2013 and LLP Act, 2008. This conversion is beneficial when the business wants to raise funds through equity or expand significantly.",
    },
  ],
};
