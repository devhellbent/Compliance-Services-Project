// lib/data/services/public-limited-company.ts

import { ServiceData } from "@/lib/types";

export const publicLimitedCompanyData: ServiceData = {
  title: "Public Limited Company Registration",
  breadcrumb: [
    "Home",
    "Registrations",
    "Company Registration",
    "Public Limited Company",
  ],
  description:
    "Scale your enterprise to new heights with public market access. Public Limited Company registration enables businesses to raise substantial capital through public offerings, providing the foundation for large-scale operations and stock market listing.",
  overview: `**Public Limited Company Registration**

A public limited company is a business structure that can offer shares to the general public through a stock exchange. Unlike a private limited company, it has no restriction on the number of members and a minimum of seven shareholders and three directors is required for registration. It is regulated by the Companies Act, 2013 and is a separate legal entity with perpetual succession and limited liability for its members.

To register, the company must file an electronic application with the Registrar of Companies, including the Memorandum and Articles of Association, and obtain a certificate of incorporation. A key requirement is the issuance of a prospectus to the public for inviting subscriptions to its shares. Due to its public nature, it is subject to more stringent regulations, reporting requirements, and transparency norms compared to a private limited company.

**What is Public Limited Company**

A public limited company is a business structure that can issue shares to the general public through a stock exchange. Unlike a private limited company, it has no restriction on the number of members and requires a minimum of seven shareholders and three directors. As a separate legal entity, it provides limited liability to its members, protecting their personal assets from company debts. The shares are freely transferable, and the company is subject to more stringent regulations and transparency requirements from a body like the Securities and Exchange Board of India (SEBI). This structure is ideal for large enterprises seeking to raise significant capital from the public.

**Features of a public limited company**

- **Separate legal entity:** The company is a distinct legal person, independent of its owners and directors.
- **Limited liability:** Shareholder liability is limited to the **unpaid amount** on the shares they hold.
- **Members:** A **minimum of seven** shareholders; **no upper limit** on the number of shareholders.
- **Directors:** A **minimum of three** directors (maximum **15**); **at least one** must be an **Indian resident**.
- **Public invitation for shares:** May invite the public to subscribe to shares, debentures, and other securities.
- **Free transferability of shares:** Shares can be traded on the stock market (if listed) or transferred between persons.
- **Perpetual succession:** The company’s existence is not affected by changes in membership or the death of a director.
- **Stringent compliance:** High regulatory standards—including mandatory **Company Secretary** where applicable—and public disclosure of financial results.`,
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
      title: "Huge Capital Raising Potential",
      text: "Ability to raise large amounts of funds from the public via shares and debentures.",
    },
    {
      icon: "Shield",
      title: "Limited Liability",
      text: "Protects the personal wealth of shareholders from business risks and debts.",
    },
    {
      icon: "Award",
      title: "Increased Credibility and Visibility",
      text: "Public status enhances brand image and trust with global investors and partners.",
    },
    {
      icon: "ArrowRightLeft",
      title: "Transferability of Shares",
      text: "Provides liquidity to shareholders, allowing them to exit or enter the business easily.",
    },
    {
      icon: "RefreshCw",
      title: "Perpetual Existence",
      text: "Ensures the company remains a stable entity for long-term growth and succession.",
    },
    {
      icon: "Globe",
      title: "Global Expansion",
      text: "Public status facilitates international trade, joint ventures, and global fundraising.",
    },
  ],
  disadvantages: [
    {
      icon: "FileWarning",
      title: "Strict Regulatory Compliance",
      text: "High volume of mandatory filings, audits, and public disclosures required by MCA and SEBI (if listed).",
    },
    {
      icon: "Wallet",
      title: "High Setup and Maintenance Costs",
      text: "Registration and ongoing administrative costs are significantly higher than for other entities.",
    },
    {
      icon: "EyeOff",
      title: "Lack of Privacy",
      text: "Financial statements, board reports, and major decisions must be made public or filed with regulators.",
    },
    {
      icon: "AlertTriangle",
      title: "Potential for Hostile Takeovers",
      text: "Since shares are freely transferable, the company is vulnerable to takeovers by external groups.",
    },
    {
      icon: "Users",
      title: "Loss of Control",
      text: "The original promoters may lose control as more shares are issued to the public and institutional investors.",
    },
    {
      icon: "Gavel",
      title: "Complex Decision-Making",
      text: "Requires formal board meetings, general meetings, and resolutions for most major actions.",
    },
  ],
  eligibility: [
    "To register a Public Limited Company in India, the following requirements must be met:",
    {
      title: "Requirements",
      items: [
        "**Minimum seven members:** At least seven shareholders are required at the time of incorporation.",
        "**Minimum three directors:** At least three directors must be appointed.",
        "**Digital Signature Certificate (DSC):** All directors must have a valid **Class 3 DSC**.",
        "**Director Identification Number (DIN):** Every director must have a **DIN**.",
        "**Minimum capital:** While there is **no mandatory minimum paid-up capital**, the **authorised capital** should be sufficient for the business scale.",
        "**Unique company name:** The name must be unique and must end with **Limited.**",
        "**Registered office:** A physical address in India is mandatory.",
      ],
    },
    {
      title: "Checklist for registration",
      items: [
        "Identify at least **seven shareholders** and **three directors**.",
        "Select a unique name ending with **Limited.**",
        "Define the business objectives (**MoA**).",
        "Decide on the **authorised share capital**.",
        "Prepare the **registered office** address proof.",
        "Ensure **at least one director** is an **Indian resident**.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Directors and shareholders",
      content: {
        title: "For directors and shareholders",
        items: [
          "**PAN card:** Mandatory for all Indian directors and shareholders.",
          "**Identity proof:** Aadhaar Card, Voter ID, Passport, or Driving License.",
          "**Address proof:** Latest bank statement, electricity bill, or telephone bill (not older than **2 months**).",
          "**Photographs:** Recent passport-size photos.",
        ],
      },
    },
    {
      tabTitle: "Registered office",
      content: {
        title: "For the registered office",
        items: [
          "**Proof of address:** Latest utility bill (electricity, water, or gas) of the premises.",
          "**Ownership proof:** Property deed or sale deed (if owned).",
          "**Rented premises:** Registered rent/lease agreement.",
          "**NOC from owner:** No Objection Certificate from the property owner for using the address as the registered office.",
        ],
      },
    },
    {
      tabTitle: "Foundational legal documents",
      content: {
        title: "Foundational legal documents",
        items: [
          "**Memorandum of Association (MoA):** Detailing the objects and capital structure.",
          "**Articles of Association (AoA):** Defining the internal management rules.",
          "**Consent and declarations:** **Form DIR-2** (director’s consent) and **Form INC-9** (declaration).",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "DSC for promoters",
      description:
        "Obtain **Class 3 DSC** for subscribers and directors signing incorporation forms.",
    },
    {
      step: 2,
      title: "Name reservation",
      description:
        "File **RUN** or **SPICe+ Part A** for a unique name ending with **Limited** or **Ltd.**",
    },
    {
      step: 3,
      title: "SPICe+ Part B and attachments",
      description:
        "File incorporation with **e-MoA/e-AoA**, subscriber sheets, **DIR** declarations, and registered office proof; link **AGILE-PRO** filings where opted.",
    },
    {
      step: 4,
      title: "RoC approval",
      description:
        "Respond to **Registrar** clarifications; align objects and capital clauses if queried.",
    },
    {
      step: 5,
      title: "Certificate, PAN, and TAN",
      description:
        "Receive **Certificate of Incorporation**, **PAN**, and **TAN**; open bank account and plan **SEBI/ICDR** steps if listing is intended.",
    },
    {
      step: 6,
      title: "Commencement of business (Form INC-20A)",
      description:
        "File **INC-20A** after subscribers pay for shares taken—required before commencing business under **Section 10A**.",
    },
  ],
  fees: [
    {
      component: "Name reservation (RUN)",
      fees: "₹200",
      remarks: "MCA statutory fee (verify current slab)",
    },
    {
      component: "Government fees (SPICe+ / incorporation)",
      fees: "Varies",
      remarks: "Based on authorised capital; significantly higher than for private companies",
    },
    {
      component: "Stamp duty",
      fees: "Varies by state",
      remarks: "On authorised capital and MoA/AoA documents",
    },
    {
      component: "Digital Signature (DSC)",
      fees: "Varies",
      remarks: "Costs for at least three directors (Class 3)",
    },
    {
      component: "Professional fees (CA/CS/Legal)",
      fees: "₹15,000 – ₹30,000+",
      remarks: "End-to-end management, drafting of complex MoA/AoA, and compliance assurance",
    },
    {
      component: "PAN and TAN",
      fees: "Included",
      remarks: "Integrated into the incorporation process",
    },
    {
      component: "Statutory audit (recurring)",
      fees: "Ongoing",
      remarks: "Mandatory annual audits; high recurring compliance cost at scale",
    },
    {
      component: "Penalties for non-compliance",
      fees: "As per law",
      remarks:
        "Failure to file annual returns can attract heavy daily fines; SEBI non-compliance (if listed) can lead to trading suspension and large penalties",
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
