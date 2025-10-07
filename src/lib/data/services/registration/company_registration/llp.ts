// lib/data/services/llp.ts

import { ServiceData } from "@/lib/types";

export const llpData: ServiceData = {
  title: "Limited Liability Partnership (LLP) Registration",
  breadcrumb: ["Home", "Registrations", "LLP"],
  overview:
    "A Limited Liability Partnership (LLP) is a modern corporate structure that combines the flexibility of a traditional partnership with the significant advantage of limited liability, similar to a private limited company. It is a separate legal entity, meaning it can own assets and incur debts in its own name, distinct from its partners. Governed by the LLP Act, 2008, it is a preferred choice for small to medium-sized businesses and professional service firms like chartered accountants, lawyers, and architects.",
  advantages: [
    {
      icon: "ShieldCheck",
      title: "Limited Liability",
      text: "Partners' personal assets are protected from business debts. Liability is limited to their capital contribution in the LLP.",
    },
    {
      icon: "Library",
      title: "Separate Legal Entity",
      text: "An LLP has its own legal identity, allowing it to sue, be sued, and own property in its name.",
    },
    {
      icon: "RefreshCw",
      title: "Perpetual Succession",
      text: "The LLP's existence is not affected by the entry or exit of partners, ensuring business continuity.",
    },
    {
      icon: "FileText",
      title: "Lower Compliance Burden",
      text: "Compared to a private limited company, LLPs have fewer compliance requirements, such as no mandatory board meetings or statutory audits below a certain turnover.",
    },
  ],
  disadvantages: [
    {
      icon: "Landmark",
      title: "Profit Taxation",
      text: "LLP profits are taxed at a flat rate (currently 30% + cess), and partners do not get the benefit of lower tax slabs.",
    },
    {
      icon: "FileWarning",
      title: "Higher Penalties",
      text: "Non-compliance with procedural matters, like late filing of forms, often attracts higher penalties than partnership firms.",
    },
    {
      icon: "ArrowRightLeft",
      title: "Transfer of Ownership",
      text: "Transferring ownership or partnership rights is a more complex process involving amendments to the LLP agreement.",
    },
  ],
  eligibility: [
    {
      title: "Partner Requirements",
      items: [
        "A minimum of two partners is required. There is no upper limit on the number of partners.",
        "At least two partners must be 'Designated Partners', one of whom must be a resident of India.",
      ],
    },
    {
      title: "Capital & Name",
      items: [
        "There is no minimum capital contribution requirement to form an LLP.",
        "The proposed name of the LLP must be unique and not similar to any existing company, LLP, or trademark.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Partner Documents",
      content: {
        title: "Identity & Address Proof of All Partners",
        items: [
          "PAN Card (for Indian nationals) or Passport (for foreign nationals).",
          "Aadhaar Card / Voter ID / Passport / Driving License of all partners.",
          "Latest Bank Statement or Utility Bill as address proof.",
          "Passport-size photographs.",
        ],
      },
    },
    {
      tabTitle: "Office Address Proof",
      content: {
        title: "Proof of Registered Office",
        items: [
          "Latest Utility Bill (Electricity/Telephone/Water Bill) of the registered office address.",
          "Notarized Rent Agreement (if rented).",
          "No-Objection Certificate (NOC) from the property owner.",
        ],
      },
    },
    {
      tabTitle: "Digital Requirements",
      content: {
        title: "Essential Digital Certificates",
        items: [
          "Digital Signature Certificate (DSC) for all Designated Partners.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Obtain DSC and DPIN",
      description:
        "Acquire a Digital Signature Certificate (DSC) for all designated partners. Then, apply for the Designated Partner Identification Number (DPIN) which is now integrated with the incorporation form.",
    },
    {
      step: 2,
      title: "Reserve a Unique Name (RUN-LLP)",
      description:
        "File the Reserve Unique Name (RUN-LLP) form on the MCA portal to apply for and reserve a name for the LLP. You can propose two names in order of preference.",
    },
    {
      step: 3,
      title: "File Incorporation Form (FiLLiP)",
      description:
        "After name approval, file the e-form FiLLiP (Form for incorporation of Limited Liability Partnership) with the Registrar. This form contains details of the LLP, partners, and their consent.",
    },
    {
      step: 4,
      title: "Draft and File LLP Agreement",
      description:
        "The LLP Agreement is a crucial document that outlines the mutual rights and duties of the partners. It must be drafted and filed in Form 3 with the MCA within 30 days of incorporation.",
    },
  ],
  fees: [
    {
      component: "Name Reservation (RUN-LLP)",
      fees: "₹200",
      remarks: "Government fee for each name application.",
    },
    {
      component: "Incorporation Form (FiLLiP)",
      fees: "₹500 - ₹2,000",
      remarks: "Fee depends on the total capital contribution of the LLP.",
    },
    {
      component: "Stamp Duty for Agreement",
      fees: "Varies",
      remarks:
        "Stamp duty is a state subject and varies based on the state of registration and capital.",
    },
    {
      component: "Professional Fees",
      fees: "₹5,000 - ₹10,000",
      remarks:
        "Includes DSC, name reservation, form filing, and drafting of the LLP Agreement.",
    },
  ],
  faqs: [
    {
      q: "What is the difference between a Partner and a Designated Partner in an LLP?",
      a: "While all Designated Partners are Partners, the reverse is not true. Designated Partners are responsible for all legal and regulatory compliances of the LLP, similar to directors in a company. Every LLP must have at least two Designated Partners.",
    },
    {
      q: "Is an audit mandatory for an LLP?",
      a: "An audit is not mandatory for an LLP if its annual turnover does not exceed ₹40 lakh or if its capital contribution does not exceed ₹25 lakh. Once these limits are crossed, a statutory audit becomes mandatory.",
    },
    {
      q: "Can a company become a partner in an LLP?",
      a: "Yes, a body corporate (like a private or public limited company) can become a partner in an LLP. This allows for flexible joint venture structures.",
    },
  ],
};
