// lib/data/services/producer-company.ts

import { ServiceData } from "@/lib/types";

export const producerCompanyData: ServiceData = {
  title: "Producer Company Registration",
  breadcrumb: ["Home", "Registrations", "Producer Company"],
  description:
    "Empower agricultural communities through collective strength. Producer Company registration unites farmers and agricultural producers into a corporate entity, enhancing bargaining power, ensuring fair prices, and transforming rural livelihoods through cooperative entrepreneurship.",
  overview:
    "A **Producer Company** represents an innovative hybrid business structure specifically designed for agricultural producers, farmers, and primary producers, combining the democratic governance of cooperative societies with the professional management and legal framework of private limited companies. Introduced through Part IXA of the Companies Act, 1956 (now governed by Companies Act, 2013), this specialized entity empowers primary producers to collectively engage in production, harvesting, procurement, grading, pooling, handling, marketing, selling, and exporting their produce while maintaining complete control over their enterprise. The structure requires a minimum of ten producer members (individuals or producer institutions) and maximum five non-producer members, ensuring producer-centric governance where decision-making authority remains with those directly involved in primary production. Each member holds equal voting rights regardless of shareholding, promoting democratic participation and preventing exploitation by middlemen or intermediaries. The Producer Company can undertake diverse activities including production of goods, processing, preservation, marketing of primary produce, bulk purchasing of inputs like seeds, fertilizers, and equipment, providing technical assistance, insurance, and financial services to members, and even operating as a mutually aided cooperative structure. This framework eliminates middlemen, ensuring fair prices for producers while offering consumers access to quality products at reasonable rates. The structure enables collective bargaining power, allowing small and marginal farmers to negotiate better terms with buyers, access institutional credit, adopt modern agricultural technologies, and participate in government schemes and subsidies. Members enjoy limited liability protection with liability restricted to their shareholding, safeguarding personal assets from business obligations. The corporate structure facilitates brand building, quality certification, value addition, and direct market linkages including exports, significantly enhancing income potential. With lower compliance burden compared to traditional companies and eligibility for various government incentives, Producer Companies deliver sustainable livelihood enhancement for farming communities, agricultural workers, handloom weavers, handicraft artisans, fishermen, and other primary producers across India.",
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
      icon: "ShieldCheck",
      title: "Limited Liability Protection",
      text: "Members' personal assets are protected. Liability is limited to the unpaid amount on their shares. Separate legal entity with perpetual succession.",
    },
    {
      icon: "Users",
      title: "Democratic Structure & Member Control",
      text: "Operates on democratic principles with one member-one vote system. Members collectively control management and decision-making.",
    },
    {
      icon: "TrendingUp",
      title: "Better Bargaining Power",
      text: "Pooling of produce and collective marketing enables members to negotiate better prices with buyers and reduce dependence on intermediaries.",
    },
    {
      icon: "Banknote",
      title: "Easy Access to Credit & Subsidies",
      text: "As a formal corporate entity, can secure institutional loans from banks, NABARD, and avail government subsidies, schemes, and grants for agriculture and rural development.",
    },
    {
      icon: "Award",
      title: "Professional Management",
      text: "Can appoint professional managers, experts, and consultants to handle operations, marketing, and finance—something individual producers cannot afford.",
    },
    {
      icon: "Scale",
      title: "Value Addition & Processing",
      text: "Enables collective investment in value addition, processing, branding, and packaging of primary produce, increasing income for members.",
    },
  ],
  disadvantages: [
    {
      icon: "Users",
      title: "Restricted Membership",
      text: "Only primary producers (farmers, agriculturalists, artisans, etc.) can become members. General public or non-producers cannot invest or join.",
    },
    {
      icon: "FileText",
      title: "Compliance & Regulatory Burden",
      text: "Must comply with the Companies Act, 2013 including annual filings, board meetings, audits, and statutory registers. Can be complex for rural producers.",
    },
    {
      icon: "AlertCircle",
      title: "Higher Formation Costs",
      text: "Incorporation requires minimum ₹5 lakh authorized capital. DSC, DIN, professional fees, and stamp duty add to the cost—higher than a society or cooperative.",
    },
    {
      icon: "Scale",
      title: "Potential for Internal Conflicts",
      text: "Decision-making among a large group of members from diverse backgrounds can lead to disputes, disagreements, and management challenges.",
    },
  ],
  eligibility: [
    "A minimum of 10 producers (individuals) or two producer institutions are required.",
    "A minimum of five directors are required.",
    "The company's objectives must be related to the primary produce of its members.",
  ],
  documents: [
    {
      title: "For Directors/Shareholders",
      items: [
        "PAN Card",
        "Identity Proof",
        "Address Proof",
        "Photograph",
        "Proof of being a producer",
      ],
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
