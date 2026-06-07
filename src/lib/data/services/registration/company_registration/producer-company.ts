// lib/data/services/producer-company.ts

import { ServiceData } from "@/lib/types";

export const producerCompanyData: ServiceData = {
  title: "Producer Company Registration",
  breadcrumb: ["Home", "Registrations", "Producer Company"],
  description:
    "Empower agricultural communities through collective strength. Producer Company registration unites farmers and agricultural producers into a corporate entity, enhancing bargaining power, ensuring fair prices, and transforming rural livelihoods through cooperative entrepreneurship.",
  overview: `**Producer Company Registration**

A Producer Company is a unique corporate entity designed specifically for primary producers, such as farmers and artisans, to help them with the collective management of their produce and business activities. It\'s a hybrid of a private limited company and a cooperative society, combining the benefits of limited liability with the democratic principles of \'one member, one vote.

**Producer Company**

The Producer Company model provides a strong legal structure for rural and agricultural communities to organize, access credit, and collectively grow their businesses, thereby empowering them economically. A Producer Company is a unique corporate entity designed specifically for primary producers, such as farmers, artisans, and others involved in the production of goods and services. It combines the benefits of a private limited company with the cooperative principles of mutual assistance

The company is owned exclusively by its members, who are the producers themselves. Each member has equal voting rights, irrespective of the number of shares they hold, which ensures a democratic governance structure. Similar to other limited companies, the members\' liability is limited to their share contribution. The company\'s name must end with \"Producer Limited Company

A Producer Company is primarily governed by the Companies Act, 2013, specifically through sections that were carried over from the Companies Act, 1956. This legal framework was established to provide a formal corporate structure for farmer-owned businesses and other primary producers.`,
  whyChooseUs: [
    {
      icon: "Users",
      title: "Collective Bargaining",
      text: "Enables farmers to have better bargaining power.",
    },
    {
      icon: "TrendingUp",
      title: "Increased Income",
      text: "Helps in increasing the income of producers.",
    },
    {
      icon: "ShieldCheck",
      title: "Limited Liability",
      text: "Offers limited liability to its members.",
    },
    {
      icon: "Banknote",
      title: "Access to Credit",
      text: "Provides better access to credit and other financial services.",
    },
  ],
  advantages: [
    {
      icon: "Users",
      title: "Empowerment of Small Producers",
      text: "Helps small farmers and artisans gain collective bargaining power and better market prices.",
    },
    {
      icon: "Shield",
      title: "Limited Liability Protection",
      text: "Protects members' personal assets from company debts and losses.",
    },
    {
      icon: "Landmark",
      title: "Better Access to Credit",
      text: "Easier for a registered company to obtain bank loans and government subsidies compared to individual farmers.",
    },
    {
      icon: "Briefcase",
      title: "Professional Management",
      text: "Allows for hiring experts to manage marketing, processing, and distribution.",
    },
    {
      icon: "BadgePercent",
      title: "Income Tax Benefits",
      text: "Certain tax exemptions are available for producer companies engaged in agricultural activities.",
    },
    {
      icon: "Globe",
      title: "Global Market Access",
      text: "Enables members to export their produce collectively under a corporate brand.",
    },
  ],
  disadvantages: [
    {
      icon: "Users",
      title: "High Membership Requirement",
      text: "Finding at least ten dedicated primary producers to start the company can be challenging.",
    },
    {
      icon: "FileWarning",
      title: "Complex Registration and Compliance",
      text: "Subject to the Companies Act, requiring regular audits, filings, and meetings.",
    },
    {
      icon: "Ban",
      title: "Restricted to Primary Produce",
      text: "Cannot diversify into non-agricultural or non-primary production activities.",
    },
    {
      icon: "Scale",
      title: "Management Challenges",
      text: "Balancing the interests of many small members while maintaining professional management can be difficult.",
    },
    {
      icon: "Wallet",
      title: "Higher Setup Costs",
      text: "Registration fees and professional charges are higher than for a simple cooperative or partnership.",
    },
  ],
  eligibility: [
    {
      title: "Criteria under Companies Act, 2013",
      items: [
        "Eligibility is centered on the nature of the members and the company's structure.",
      ],
    },
    {
      title: "Key Criteria",
      items: [
        "**Membership:** The company must be formed by:",
        "A minimum of **10 individuals**, each of whom is a primary producer.",
        "A minimum of **two producer institutions** (e.g., registered cooperatives, NGOs, or SHGs).",
        "A combination of both, totaling at least 10 individuals. There is **no maximum limit** on the number of members.",
        "**Directors:** A Producer Company must have a minimum of **five directors** and a maximum of 15. The directors must be primary producers themselves.",
        '**Primary Producer Status:** Members must be engaged in an activity related to \\"primary produce,\\" which includes farming, horticulture, animal husbandry, pisciculture, handloom, handicrafts, and other primary produce as defined in the Act. Proof of this status (e.g., land records or a letter from the village head) is required.',
        "**Capital:** While the Companies Act, 2013, removed the minimum capital requirement, it is often recommended to have an authorized capital of at least \u20b95 lakh for better credibility with financial institutions and for covering initial expenses.",
        '**Name:** The company\\\'s name must be unique and end with the words \\"**Producer Limited Company**.\\"',
        "**Registered Office:** The company must have a registered office address in India.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Directors & members",
      content: {
        title: "Documents for directors and members",
        items: [
          "All proposed directors and members must provide:",
          "**Identity proof:** A self-attested copy of the **PAN Card** (mandatory for Indian nationals). Additionally, any one of the following: **Aadhaar Card**, **Passport**, **Voter ID**, or **Driving License**. For foreign nationals, a valid passport is mandatory.",
          "**Address proof:** A self-attested copy of a recent document (not older than **two months**) showing the current residential address, such as a **Bank Statement**, utility bill (electricity, water, or gas), or telephone bill.",
          "**Photographs:** A recent **passport-size** photograph.",
          "**Producer proof:** A self-declaration or a certificate from a local authority (like a **Tehsildar** or **Gram Panchayat**) confirming that the individual is a **primary producer**.",
          "**Director Identification Number (DIN):** All directors must have a DIN, which can be applied for within the main registration form.",
          "**Digital Signature Certificate (DSC):** A **Class 3 DSC** is mandatory for all directors and members to digitally sign the electronic forms.",
        ],
      },
    },
    {
      tabTitle: "Registered office",
      content: {
        title: "Documents for the registered office",
        items: [
          "The company must have a registered office address in India. The following documents are required to prove this address:",
          "**Proof of address:** A recent utility bill (not older than **two months**) for the office premises.",
          "**Proof of Ownership/Tenancy:**",
          "**If owned:** A sale deed or property ownership document.",
          "**If rented:** A copy of the rental agreement.",
          "**No Objection Certificate (NOC):** A signed NOC from the property owner, consenting to the property being used as the company's registered office.",
        ],
      },
    },
    {
      tabTitle: "Legal & foundational",
      content: {
        title: "Legal and foundational documents",
        items: [
          "**Memorandum of Association (MoA):** This document outlines the company's business objectives and the scope of its activities.",
          "**Articles of Association (AoA):** This document contains the internal rules and regulations for the company's governance and management.",
          "**Declarations and consent forms:** Signed declarations from the directors (**Form DIR-2**) and members stating their consent to act in their respective capacities. A declaration from a professional (like a Chartered Accountant) certifying that all legal compliances have been met is also required.",
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
      description: "File the incorporation form with the RoC.",
    },
  ],
  fees: [
    {
      component: "Digital Signature Certificate (DSC)",
      fees: "₹1,000 - ₹2,000",
      remarks: "Per director (minimum 5 directors required)",
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
      fees: "₹2,500 - ₹5,000",
      remarks: "For authorized capital of ₹5 lakh or more",
    },
    {
      component: "Stamp Duty",
      fees: "Varies by state",
      remarks:
        "Based on ₹5 lakh minimum authorized capital (state-specific rates apply)",
    },
    {
      component: "Professional Fees (CA/CS/Lawyer)",
      fees: "₹20,000 - ₹40,000",
      remarks:
        "Includes documentation, proof of primary producer status verification, drafting MoA/AoA, and filing",
    },
    {
      component: "Total Estimated Cost",
      fees: "₹30,000 - ₹60,000",
      remarks:
        "Varies based on number of directors, state, and professional fees",
    },
  ],
  faqs: [
    {
      q: "Who is considered a 'primary producer' eligible to form a Producer Company?",
      a: "A primary producer is any person engaged in an activity connected with primary produce, including production, harvesting, procurement, grading, pooling, handling, marketing, selling, and export. This includes farmers, agriculturalists, horticulturists, persons engaged in animal husbandry, floriculture, pisciculture, viticulture, forestry, forest products, re-vegetation, bee raising, and artisans.",
    },
    {
      q: "What is the minimum authorized capital required for a Producer Company?",
      a: "The minimum authorized capital required is ₹5 lakh, which is higher than a regular private limited company. This ensures the company has adequate capital to support collective agricultural or producer activities.",
    },
    {
      q: "Can a Producer Company distribute profits to its members?",
      a: "Yes, a Producer Company can distribute profits as a limited return on equity capital and as a patronage bonus to members based on their participation (quantity or value of business done with the company). After making provisions for reserves, surplus can be distributed.",
    },
    {
      q: "What are the tax benefits available to Producer Companies?",
      a: "Under Section 80P(2)(a)(iii) of the Income Tax Act, income earned by a Producer Company from marketing agricultural produce grown by its members is exempt from income tax, subject to certain conditions. This makes it tax-efficient for farmer collectives.",
    },
    {
      q: "What is the difference between a Producer Company and a Cooperative Society?",
      a: "A Producer Company is registered under the Companies Act and offers limited liability, separate legal entity status, and professional management like a company. A Cooperative Society is registered under state cooperative laws with more democratic control but limited access to capital and professional management. Producer Company combines benefits of both structures.",
    },
  ],
};
