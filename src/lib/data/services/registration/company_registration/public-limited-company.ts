// lib/data/services/public-limited-company.ts

import { ServiceData } from "@/lib/types";

export const publicLimitedCompanyData: ServiceData = {
  title: "Public Limited Company Registration",
  breadcrumb: ["Home", "Registrations", "Public Limited Company"],
  description:
    "Scale your enterprise to new heights with public market access. Public Limited Company registration enables businesses to raise substantial capital through public offerings, providing the foundation for large-scale operations and stock market listing.",
  overview: `**Public Limited Company Registration**

A public limited company is a business structure that can offer shares to the general public through a stock exchange. Unlike a private limited company, it has no restriction on the number of members and a minimum of seven shareholders and three directors is required for registration. It is regulated by the Companies Act, 2013 and is a separate legal entity with perpetual succession and limited liability for its members.

To register, the company must file an electronic application with the Registrar of Companies, including the Memorandum and Articles of Association, and obtain a certificate of incorporation. A key requirement is the issuance of a prospectus to the public for inviting subscriptions to its shares. Due to its public nature, it is subject to more stringent regulations, reporting requirements, and transparency norms compared to a private limited company.

**What is Public Limited Company**

A public limited company is a business structure that can issue shares to the general public through a stock exchange. Unlike a private limited company, it has no restriction on the number of members and requires a minimum of seven shareholders and three directors. As a separate legal entity, it provides limited liability to its members, protecting their personal assets from company debts. The shares are freely transferable, and the company is subject to more stringent regulations and transparency requirements from a body like the Securities and Exchange Board of India (SEBI). This structure is ideal for large enterprises seeking to raise significant capital from the public.

**Features of a Public Limited Company**

A public limited company can issue shares to the general public and raise substantial capital from a wide investor base.

- **Limited Liability**: Shareholder liability is limited to the value of shares held.
- **Perpetual Succession**: The company continues despite member or director changes.
- **Minimum Members**: At least seven shareholders are required.
- **Free Transferability of Shares**: Shares are transferable in the open market.
- **Minimum Directors**: At least three directors are required.
- **Public Access to Capital**: Can invite public subscriptions through a prospectus.
- **High Regulatory Compliance**: Subject to strict MCA and SEBI requirements.
- **Name Suffix**: Name must end with "Limited" or "Ltd.".`,
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
      title: "Access to Capital",
      text: "Public limited companies can raise significant funds from the public by issuing shares.",
    },
    {
      icon: "Shield",
      title: "Limited Liability",
      text: "Shareholders' liability is limited to the amount invested in shares.",
    },
    {
      icon: "Award",
      title: "Enhanced Credibility and Prestige",
      text: "Public status improves confidence among investors, customers, and institutions.",
    },
    {
      icon: "ArrowRightLeft",
      title: "Free Transferability of Shares",
      text: "Shares are tradable, improving liquidity for shareholders.",
    },
    {
      icon: "RefreshCw",
      title: "Perpetual Existence",
      text: "Business continuity remains unaffected by member/director changes.",
    },
  ],
  disadvantages: [
    {
      icon: "FileWarning",
      title: "High Compliance Burden",
      text: "Public limited companies face extensive compliance, disclosures, and audit obligations.",
    },
    {
      icon: "Users",
      title: "Loss of Control",
      text: "Founders may lose strategic control due to broad shareholder ownership.",
    },
    {
      icon: "EyeOff",
      title: "Lack of Privacy",
      text: "Financial and operational details are publicly available due to disclosure norms.",
    },
    {
      icon: "Wallet",
      title: "Higher Costs",
      text: "Registration and ongoing legal, audit, and compliance expenses are comparatively high.",
    },
    {
      icon: "BarChart3",
      title: "Market Volatility Exposure",
      text: "Share price and valuation can be significantly affected by market and sentiment shifts.",
    },
  ],
  eligibility: [
    {
      title: "Director and Shareholder Requirements",
      items: [
        "A public limited company must have at least **three directors**.",
        "At least one director must be a resident of India.",
        "A minimum of **seven shareholders** is required, with no upper limit.",
      ],
    },
    {
      title: "Name and Office Requirements",
      items: [
        "The company name must be unique and end with **Limited** or **Ltd.**",
        "A registered office address in India is mandatory.",
      ],
    },
    {
      title: "Other Compliance Requirements",
      items: [
        "All directors must hold valid DIN.",
        "All proposed directors/subscribers need Class 3 DSC for e-filing.",
        "The company must be able to offer shares to the public through a prospectus.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "1. Directors and Shareholders",
      content: {
        title: "1. Documents for Directors and Shareholders",
        items: [
          "Identity proof (PAN mandatory for Indian nationals; passport mandatory for foreign nationals)",
          "Address proof (utility bill, bank statement, or phone bill within two months)",
          "Passport-size photographs of all proposed directors/shareholders",
          "Digital Signature Certificate (DSC) for digital filing",
          "Director Identification Number (DIN) for all proposed directors",
        ],
      },
    },
    {
      tabTitle: "2. Documents for the Registered Office",
      content: {
        title: "2. Documents for the Registered Office",
        items: [
          "**Proof of Address:** A recent utility bill (not older than two months) for the office premises.",
          "**Proof of Ownership/Tenancy:** ",
          "If owned: Sale deed or property ownership document.",
          "If rented: Copy of the rental agreement. ",
          "**No Objection Certificate (NOC):** A signed NOC from the property owner, consenting to the property being used as the company\\'s registered office",
        ],
      },
    },
    {
      tabTitle: "3. Company\\'s Legal and Foundational Documents",
      content: {
        title: "3. Company\\'s Legal and Foundational Documents",
        items: [
          "**Memorandum of Association (MoA):** This document outlines the company\\'s main business objectives, authorized share capital, and the state where its registered office is located.",
          "**Articles of Association (AoA):** This document contains the internal rules and regulations for the company\\'s governance and management.",
          "**Declarations and Consent Forms:** ",
          "**Director\\'s Consent (Form DIR-2):** A signed declaration from the proposed directors consenting to act as directors.",
          "**Director\\'s Declaration (Form INC-9):** A declaration confirming that the directors are not disqualified under the Companies Act.",
          "**Professional\\'s Declaration:** A declaration from a professional (e.g., Chartered Accountant, Company Secretary) certifying that all legal compliances for the registration have been met.",
        ],
      },
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
