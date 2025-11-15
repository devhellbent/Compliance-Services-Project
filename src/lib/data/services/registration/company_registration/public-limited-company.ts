// lib/data/services/public-limited-company.ts

import { ServiceData } from "@/lib/types";

export const publicLimitedCompanyData: ServiceData = {
  title: "Public Limited Company Registration",
  breadcrumb: ["Home", "Registrations", "Public Limited Company"],
  description:
    "Scale your enterprise to new heights with public market access. Public Limited Company registration enables businesses to raise substantial capital through public offerings, providing the foundation for large-scale operations and stock market listing.",
  overview:
    "A **Public Limited Company** represents the pinnacle of corporate structures in India, designed for large-scale enterprises seeking to raise substantial capital through public subscription and stock exchange listings. This prestigious business entity can offer its shares to the general public through Initial Public Offerings (IPOs), providing access to vast pools of capital from retail and institutional investors across the nation. As a separate legal entity with perpetual succession, a Public Limited Company operates independently from its shareholders, offering them limited liability protection while maintaining operational continuity regardless of ownership changes. The structure requires a minimum of seven shareholders and three directors, with no maximum limit, enabling massive scaling potential suitable for corporations with extensive operations. Public companies benefit from enhanced credibility and market visibility, as stock exchange listings mandate rigorous financial disclosures and corporate governance standards that build significant stakeholder confidence. The ability to freely transfer shares through stock market transactions provides liquidity to investors and facilitates easy entry and exit mechanisms. Regulatory compliance is stringent, governed by SEBI regulations, the Companies Act 2013, and stock exchange listing agreements, ensuring transparency and protecting investor interests. This structure offers multiple fundraising avenues including equity shares, preference shares, debentures, and bonds, providing financial flexibility for expansion and growth. Public Limited Companies can attract top talent through Employee Stock Option Plans (ESOPs) and enjoy preferential treatment in government contracts and international business dealings. While operational costs and compliance requirements are substantial, the benefits of massive capital access, enhanced valuation, and market credibility make this structure ideal for established businesses planning significant expansion, infrastructure projects, manufacturing units, and enterprises targeting national or international market leadership.",
  whyChooseUs: [
    {
      icon: "Users",
      title: "Large Number of Shareholders",
      text: "Can have an unlimited number of shareholders.",
    },
    {
      icon: "TrendingUp",
      title: "Public Capital",
      text: "Can raise capital from the public through an Initial Public Offering (IPO).",
    },
    {
      icon: "ArrowRightLeft",
      title: "Transferability of Shares",
      text: "Shares are freely transferable.",
    },
    {
      icon: "Award",
      title: "High Credibility",
      text: "Enjoys greater credibility and public confidence.",
    },
  ],
  advantages: [
    {
      icon: "TrendingUp",
      title: "Access to Large Capital",
      text: "Can raise substantial funds from the public through IPOs, FPOs, rights issues, and bonds. Ideal for large-scale expansion, mergers, and acquisitions.",
    },
    {
      icon: "ArrowRightLeft",
      title: "Free Transferability of Shares",
      text: "Shares are freely transferable and can be listed on stock exchanges, providing high liquidity to shareholders and easy exit options.",
    },
    {
      icon: "Award",
      title: "Enhanced Credibility & Brand Value",
      text: "Being publicly listed significantly boosts the company's reputation, trust, and brand value among customers, suppliers, investors, and financial institutions.",
    },
    {
      icon: "Users",
      title: "Unlimited Shareholders",
      text: "No restriction on the maximum number of shareholders. Can have millions of investors, spreading ownership widely.",
    },
    {
      icon: "ShieldCheck",
      title: "Limited Liability",
      text: "Shareholders' liability is limited to the unpaid amount on their shares. Personal assets are protected in case of company failure.",
    },
    {
      icon: "Building2",
      title: "Perpetual Succession",
      text: "The company continues to exist irrespective of the death, insolvency, or exit of shareholders or directors. Ownership is easily transferable.",
    },
  ],
  disadvantages: [
    {
      icon: "FileText",
      title: "Extremely High Compliance & Regulatory Burden",
      text: "Subject to stringent regulations from MCA and SEBI. Must file quarterly results, audited financials, hold AGMs, comply with SEBI LODR regulations, and undergo continuous scrutiny.",
    },
    {
      icon: "Eye",
      title: "Lack of Privacy",
      text: "All financial statements, board decisions, major transactions, and shareholding patterns must be publicly disclosed. Business strategies and operations are exposed to competitors.",
    },
    {
      icon: "AlertTriangle",
      title: "Risk of Hostile Takeovers",
      text: "Freely tradable shares make the company vulnerable to hostile takeovers. Any entity can acquire a controlling stake and change management.",
    },
    {
      icon: "DollarSign",
      title: "High Formation & Maintenance Costs",
      text: "Incorporation, IPO costs, listing fees, compliance costs, audit fees, and professional fees are very high. Maintaining a public company is expensive.",
    },
    {
      icon: "TrendingDown",
      title: "Pressure from Shareholders & Market",
      text: "Management faces constant pressure to deliver short-term profits and meet quarterly targets. Stock price fluctuations can impact morale and decisions.",
    },
  ],
  eligibility: [
    "A minimum of three directors and seven shareholders are required.",
    "At least one director must be a resident of India.",
    "No minimum capital requirement.",
  ],
  documents: [
    {
      title: "For Directors/Shareholders",
      items: ["PAN Card", "Identity Proof", "Address Proof", "Photograph"],
    },
    {
      title: "For Registered Office",
      items: ["Utility Bill", "NOC from the owner"],
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "DSC & DIN",
      description: "Obtain DSC and DIN for directors.",
    },
    {
      step: 2,
      title: "Name Approval",
      description: "Reserve a unique name for the company.",
    },
    {
      step: 3,
      title: "Incorporation",
      description: "File the SPICe+ form with the RoC.",
    },
    {
      step: 4,
      title: "Certificate of Incorporation",
      description: "Issued by the RoC.",
    },
    {
      step: 5,
      title: "Commencement of Business",
      description:
        "File a declaration for commencement of business after incorporation.",
    },
  ],
  fees: [
    {
      component: "Digital Signature Certificate (DSC)",
      fees: "₹1,000 - ₹2,000",
      remarks: "Per director (valid for 2-3 years)",
    },
    {
      component: "Director Identification Number (DIN)",
      fees: "₹500 - ₹1,000",
      remarks: "Per director (one-time)",
    },
    {
      component: "Name Approval (SPICe+ Part A)",
      fees: "₹1,000",
      remarks: "For name reservation",
    },
    {
      component: "Government/ROC Fees (SPICe+ Part B)",
      fees: "₹4,000 - ₹10,000",
      remarks: "Depends on authorized capital (higher than private limited)",
    },
    {
      component: "Stamp Duty",
      fees: "Varies by state",
      remarks: "0.3% to 0.7% of authorized capital (state-specific)",
    },
    {
      component: "Professional Fees (CA/CS/Lawyer)",
      fees: "₹20,000 - ₹50,000",
      remarks:
        "Includes documentation, filing, drafting MoA/AoA, legal compliance, and consultation",
    },
    {
      component: "Total Estimated Cost",
      fees: "₹30,000 - ₹75,000",
      remarks:
        "Varies based on state, authorized capital, and professional fees",
    },
  ],
  faqs: [
    {
      q: "What is the difference between a Public Limited Company and a Private Limited Company?",
      a: "A Public Limited Company can offer shares to the general public and list on stock exchanges, requires minimum 3 directors and 7 shareholders, and name ends with 'Limited'. A Private Limited Company cannot offer shares publicly, requires 2 directors and 2 shareholders, and name ends with 'Private Limited'. Public companies face stricter compliance and disclosure norms.",
    },
    {
      q: "Is every Public Limited Company listed on a stock exchange?",
      a: "No. A company can be Public Limited by structure without being listed on a stock exchange. To be 'listed', it must go through an Initial Public Offering (IPO) and get approval from SEBI and stock exchanges like NSE or BSE. Many public companies remain unlisted.",
    },
    {
      q: "What is the Certificate of Commencement of Business?",
      a: "A Public Limited Company must obtain this certificate under Section 10A of the Companies Act, 2013, before starting business operations. To obtain it, the company must file Form INC-20A declaring that every subscriber has paid the value of shares agreed to be taken and subscribed capital deposited in a bank.",
    },
    {
      q: "What are the annual compliance requirements for a Public Limited Company?",
      a: "Public companies must hold at least 4 board meetings and 1 AGM annually, file Form AOC-4 (financial statements) and MGT-7 (annual returns), conduct statutory audit, maintain statutory registers, and comply with SEBI LODR regulations if listed. Listed companies must also publish quarterly and annual results.",
    },
    {
      q: "Can a Public Limited Company be converted to a Private Limited Company?",
      a: "Yes, a Public Limited Company can be converted to a Private Limited Company by passing a special resolution, amending the MoA and AoA, and filing Form MGT-14 and Form INC-27 with the ROC. However, listed companies cannot convert to private companies without delisting first.",
    },
  ],
};
