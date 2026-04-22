// lib/data/services/llp.ts

import { ServiceData } from "@/lib/types";

export const llpData: ServiceData = {
  title: "Limited Liability Partnership (LLP) Registration",
  breadcrumb: ["Home", "Registrations", "Company Registration", "LLP"],
  description:
    "Experience the perfect blend of partnership flexibility and corporate protection. LLP registration offers limited liability safeguards for partners while maintaining operational simplicity, making it ideal for professional service firms and modern startups.",
  overview: `**Limited Liability Partnership (LLP) Registration in India**

Registration of a Limited Liability Partnership (LLP) in India is a fully digital process managed by the Ministry of Corporate Affairs (MCA). An LLP is a business structure that combines the best features of a traditional partnership and a company. It provides the limited liability of a company, which protects the partners\' personal assets from the business\'s debts, while offering the flexibility of a partnership.

**What is Limited Liability Partnership (LLP)**

A Limited Liability Partnership (LLP) is a modern business structure that combines the flexibility of a traditional partnership with the liability protection of a company. It is a separate legal entity from its partners, meaning the firm can own assets and be held liable for its own debts.

The key feature of an LLP is **limited liability**. This means that a partner\'s personal assets are protected from the firm\'s business debts and liabilities. In a general partnership, partners have unlimited liability and are personally responsible for all business debts, even if they were incurred by another partner. In contrast, an LLP partner\'s liability is limited to their agreed-upon capital contribution.

An LLP also offers **perpetual succession**, meaning the firm continues to exist even if there are changes in partners, such as a death or a retirement. This provides stability and continuity to the business. It is a popular choice for professionals like accountants and lawyers who want to collaborate while shielding themselves from the negligence or misconduct of other partners.

**Limited Liability Partnership Act, 2008**

The **Limited Liability Partnership** Act, 2008, is a specific law enacted by the Parliament of India to govern and regulate Limited Liability Partnerships (LLPs). It introduced a new business structure that combines the key features of a traditional partnership and a company, providing a flexible and legally sound framework for business operations.

The **Limited Liability Partnership Act, 2008**, is a specific law enacted by the Parliament of India to govern and regulate Limited Liability Partnerships (LLPs). It introduced a new business structure that combines the key features of a traditional partnership and a company, providing a flexible and legally sound framework for business operations.`,
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
      title: "Limited Liability Protection",
      text: "Each partner's liability is limited to their agreed contribution, protecting personal assets from business debts.",
    },
    {
      icon: "Building2",
      title: "Separate Legal Entity and Perpetual Succession",
      text: "An LLP can own assets, enter contracts, and continue despite partner changes like retirement or death.",
    },
    {
      icon: "BadgeCheck",
      title: "Enhanced Credibility",
      text: "Registered LLPs are viewed as more credible by clients, suppliers, and financial institutions.",
    },
    {
      icon: "Landmark",
      title: "Access to Capital",
      text: "A formal legal structure improves the ability to open bank accounts, secure loans, and attract investors.",
    },
    {
      icon: "Settings",
      title: "Operational Flexibility and Tax Efficiency",
      text: "Partner rights are governed by an LLP agreement, and profits are taxed at firm level without dividend distribution tax.",
    },
  ],
  disadvantages: [
    {
      icon: "FileWarning",
      title: "Mandatory Annual Filings",
      text: "LLPs must file annual return and statement of accounts; delays attract daily penalties.",
    },
    {
      icon: "Scale",
      title: "Penalty Risk for Non-Compliance",
      text: "Failure to meet MCA filing and compliance requirements can lead to significant financial penalties.",
    },
    {
      icon: "UserCog",
      title: "Designated Partner Responsibility",
      text: "Designated partners carry statutory compliance responsibilities and can be penalized personally for defaults.",
    },
  ],
  eligibility: [
    "**Minimum Number:** An LLP must have at least **two partners**. There is no upper limit on the maximum number of partners.",
    "**Unique Name:** The proposed name of the LLP must be unique and not identical or similar to any existing company, LLP, or registered trademark.",
    "**Designated Partners:** Of the total partners, a minimum of **two** must be designated partners who are individuals. At least one of these designated partners must be a **resident of India**, meaning they have stayed in the country for at least 120 days during the financial year.",
    "**Lawful Business Activity:** The purpose of the LLP must be to carry on a legal business. An LLP cannot be formed for illegal activities or those against public policy.",
    "**Competence to Contract:** All partners must be legally competent to enter into a contract. This means they must be of sound mind and at least 18 years of age. A person cannot be a designated partner if they are an undischarged insolvent or have been convicted of a serious offense.",
    "**Identification Numbers:** Every designated partner must obtain a **Designated Partner Identification Number (DPIN)** from the Ministry of Corporate Affairs (MCA). A **Digital Signature Certificate (DSC)** is also mandatory for all partners to file documents online.",
    "**Registered Office:** The LLP must have a registered office in India to receive all official communications and legal notices. Proof of this address, such as a rent agreement and a no-objection certificate from the landlord (if rented), must be submitted during the registration process."
  ],
  documents: [
    {
      tabTitle: "For Partners",
      content: {
        title: "For the Partners",
        items: [
          "PAN card (mandatory for Indian nationals)",
          "Address proof (utility bill or bank statement not older than two months)",
          "Passport-size photographs of all partners",
          "Passport copy for foreign nationals (notarized/apostilled)",
          "Class 3 DSC and DPIN for designated partners",
        ],
      },
    },
    {
      tabTitle: "For the LLP",
      content: {
        title: "For the LLP",
        items: [
          "Proof of Registered Office Address: You must provide proof of the LLP's registered office in India. This can be a recent utility bill (not older than two months) in the name of the property owner.",
          "No Objection Certificate (NOC): If the registered office is a rented property, a signed NOC from the landlord is required, giving consent for the address to be used as the LLP's official registered office. A valid rent agreement must also be provided.",
          "LLP Agreement: This is a crucial legal document drafted on a non-judicial stamp paper. It outlines the mutual rights and duties of the partners, their capital contributions, and the firm's operational clauses. This document must be filed with the MCA within 30 days of the LLP's incorporation.",
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
