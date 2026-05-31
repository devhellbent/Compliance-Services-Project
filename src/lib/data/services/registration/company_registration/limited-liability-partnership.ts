// lib/data/services/llp.ts

import { ServiceData } from "@/lib/types";

export const llpData: ServiceData = {
  title: "Limited Liability Partnership (LLP) Registration",
  breadcrumb: ["Home", "Registrations", "Company Registration", "LLP"],
  description:
    "Experience the perfect blend of partnership flexibility and corporate protection. LLP registration offers limited liability safeguards for partners while maintaining operational simplicity, making it ideal for professional service firms and modern startups.",
  overview: `**Limited Liability Partnership (LLP) registration in India**

Registration of a Limited Liability Partnership (LLP) in India is a fully digital process managed by the **Ministry of Corporate Affairs (MCA)**. An LLP combines the **limited liability** of a company with the **flexibility** of a partnership.

In an LLP, **one partner is not responsible or liable** for another partner’s **misconduct or negligence**. The structure is governed by the **Limited Liability Partnership Act, 2008**. It suits **small and medium-sized** businesses, service providers, and professionals who want corporate-style protection without the heaviest company compliance burden.

**What is a Limited Liability Partnership (LLP)?**

An LLP is a **body corporate** and a **separate legal entity** from its partners. It has **perpetual succession**—the LLP continues despite partner changes. Mutual rights and duties are governed by an **LLP Agreement** between the partners (or between the LLP and its partners).

The key feature is **limited liability**: a partner’s personal assets are protected from the firm’s ordinary business debts; liability is generally limited to the partner’s **agreed contribution** (subject to law).

**Limited Liability Partnership Act, 2008**

The Act provides a flexible, legally sound framework for LLPs—merging partnership operational simplicity with protections closer to a company.`,
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
      icon: "Shield",
      title: "Protection of Personal Assets",
      text: "Partners are only liable up to their agreed contribution, safeguarding personal wealth.",
    },
    {
      icon: "Building2",
      title: "Separate Legal Identity",
      text: "Enhances business credibility and allows for owning assets and entering into legal contracts.",
    },
    {
      icon: "BadgePercent",
      title: "Lower Compliance Cost",
      text: "Audit is only mandatory if turnover exceeds ₹40 lakhs or contribution exceeds ₹25 lakhs, making it cheaper to maintain than a company.",
    },
    {
      icon: "Settings",
      title: "Operational Flexibility",
      text: "No strict requirement for board meetings or complex resolutions; management is governed by the LLP Agreement.",
    },
    {
      icon: "Coins",
      title: "No Dividend Distribution Tax (DDT)",
      text: "Profits distributed to partners are not subject to DDT, making it tax-efficient for owners.",
    },
    {
      icon: "UserPlus",
      title: "Easy to Transfer Ownership",
      text: "Partners can be easily added or removed, facilitating business continuity and succession.",
    },
  ],
  disadvantages: [
    {
      icon: "TrendingDown",
      title: "Restricted Capital Raising",
      text: "Cannot issue shares to the public or attract venture capital as easily as a private limited company.",
    },
    {
      icon: "AlertCircle",
      title: "Compliance Penalties",
      text: "While lower in volume, the penalties for late filing of annual returns (Form 8 and Form 11) can be very high (₹100 per day per form).",
    },
    {
      icon: "EyeOff",
      title: "Public Disclosure",
      text: "The LLP Agreement and financial statements are public documents accessible on the MCA portal.",
    },
    {
      icon: "GitMerge",
      title: "Limitation in Mergers",
      text: "LLPs cannot easily merge with companies; the process is complex and restricted.",
    },
    {
      icon: "Landmark",
      title: "External Funding Challenges",
      text: "Many banks and investors still prefer the more regulated structure of a private limited company.",
    },
  ],
  eligibility: [
    "To register an LLP in India, the following requirements must be met:",
    "**Minimum two partners:** Must have at least two partners (individuals or bodies corporate).",
    "**Designated partners:** At least two individuals must act as designated partners, with at least one being an Indian resident.",
    "**Digital Signature Certificate (DSC):** All designated partners must have a valid Class 3 DSC.",
    "**Director Identification Number (DIN/DPIN):** Every designated partner must have a DPIN (equivalent to DIN).",
    "**Unique name:** The proposed name must be unique and comply with MCA naming guidelines.",
    "**Registered office:** A valid physical address in India for official correspondence.",
    "**Lawful object:** The business must be for-profit and engage in legal activities.",
  ],
  documents: [
    {
      tabTitle: "For the partners",
      content: {
        title: "For the partners (designated partners)",
        items: [
          "**PAN card:** Mandatory for all Indian partners.",
          "**Identity proof:** Aadhaar Card, Voter ID, Passport, or Driving License.",
          "**Address proof:** Latest bank statement, electricity bill, or telephone bill (not older than **2 months**).",
          "**Photographs:** Recent passport-size photos.",
          "Passport copy for **foreign nationals** (notarized/apostilled) where applicable.",
        ],
      },
    },
    {
      tabTitle: "For the registered office",
      content: {
        title: "For the registered office",
        items: [
          "**Proof of address:** Latest utility bill (electricity, water, or gas) of the premises.",
          "**Ownership proof:** Property deed or sale deed (if owned).",
          "**Rented premises:** Registered rent/lease agreement.",
          "**NOC from owner:** No Objection Certificate for using the address as the registered office.",
        ],
      },
    },
    {
      tabTitle: "Additional documents",
      content: {
        title: "Additional documents",
        items: [
          "**LLP agreement:** Drafted and signed on stamp paper after incorporation (file with MCA within **30 days**).",
          "**Subscriber sheet:** Signed by all partners during the filing process.",
        ],
      },
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
      component: "Total cost (overview)",
      fees: "—",
      remarks:
        "The total cost of LLP registration includes government fees, stamp duty, and professional charges.",
    },
    {
      component: "Government fee (by capital contribution)",
      fees: "₹500 – ₹5,000",
      remarks:
        "Up to ₹1 lakh: ₹500; ₹1–5 lakh: ₹2,000; ₹5–10 lakh: ₹4,000; above ₹10 lakh: varies up to ₹5,000",
    },
    {
      component: "Name reservation (RUN-LLP)",
      fees: "₹200",
      remarks: "Per application",
    },
    {
      component: "Digital Signature (DSC)",
      fees: "₹1,000 – ₹2,000",
      remarks: "Per partner (Class 3)",
    },
    {
      component: "Stamp duty",
      fees: "Varies by state",
      remarks: "On LLP Agreement and incorporation forms",
    },
    {
      component: "PAN & TAN",
      fees: "≈ ₹170",
      remarks: "Approximate combined filing cost",
    },
    {
      component: "Professional / CA fees",
      fees: "₹4,000 – ₹10,000",
      remarks:
        "Consultant/CA fees typically cover the entire digital process—drafting, filings, and coordination",
    },
    {
      component: "Penalties (non-compliance)",
      fees: "₹100/day",
      remarks:
        "Per late Form 8 / Form 11 (no upper cap); DPIN/KYC defaults may lead to deactivation and reactivation fees",
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
