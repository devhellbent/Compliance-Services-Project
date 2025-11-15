// lib/data/services/foreign-subsidiary-company-registration.ts

import { ServiceData } from "@/lib/types";

export const foreignSubsidiaryCompanyRegistrationData: ServiceData = {
  title: "Foreign Subsidiary Company Registration",
  breadcrumb: ["Home", "Registrations", "Foreign Subsidiary"],
  description:
    "Expand your business footprint across borders. Foreign Subsidiary Company registration establishes Indian parent company control in international markets, enabling global expansion with complete ownership, operational autonomy, and strategic market positioning worldwide.",
  overview:
    "A **Foreign Subsidiary Company**, commonly known as a Wholly-Owned Subsidiary (WOS), represents a strategic corporate structure where an Indian parent company establishes and controls a business entity in a foreign country, holding complete or majority ownership stakes that ensure operational control and strategic alignment. This international expansion vehicle enables Indian businesses to directly access global markets, leverage international talent pools, adopt cutting-edge technologies, and establish local presence in target countries while maintaining Indian headquarters oversight. The subsidiary operates as a separate legal entity under the host country's corporate laws, providing limited liability protection to the Indian parent company while facilitating compliance with local regulations and business practices. This structure offers numerous strategic advantages including direct market access without intermediaries, enhanced brand credibility through local incorporation, ability to customize products and services for regional preferences, and circumvention of import duties and trade barriers through local manufacturing or operations. The parent company exercises control through board representation, shareholding patterns, and strategic directives while the subsidiary maintains operational independence to respond quickly to local market dynamics. Foreign subsidiaries enable Indian companies to establish research and development centers in innovation hubs, set up manufacturing facilities to serve regional markets, create distribution networks for exports, and acquire foreign intellectual property and technologies. The structure facilitates easier repatriation of profits subject to host country regulations, provides tax optimization opportunities through international structuring, and builds local stakeholder relationships with governments, suppliers, and customers. Establishment typically involves compliance with Foreign Exchange Management Act (FEMA) regulations, RBI guidelines for overseas direct investment, and host country corporate laws regarding incorporation, taxation, and operations. The Indian parent must ensure adequate capitalization, reporting obligations to RBI through Annual Performance Reports, and adherence to transfer pricing regulations for inter-company transactions. Foreign subsidiaries represent significant commitment compared to joint ventures or representative offices, requiring substantial capital investment and long-term strategic planning. Ideal for established Indian corporations pursuing international growth, manufacturers seeking global supply chain integration, technology companies establishing global delivery centers, and businesses aiming for multinational presence, Foreign Subsidiary registration delivers complete control, brand consistency, and strategic flexibility in global expansion initiatives.",
  whyChooseUs: [
    {
      icon: "Globe",
      title: "Global Market Access",
      text: "Establish a direct presence in foreign markets.",
    },
    {
      icon: "ShieldCheck",
      title: "Limited Liability",
      text: "Protects the Indian parent company's assets.",
    },
    {
      icon: "TrendingUp",
      title: "Risk Diversification",
      text: "Diversify economic and market risks.",
    },
    {
      icon: "Landmark",
      title: "Legal Recognition",
      text: "Enhances credibility in the foreign country.",
    },
  ],
  advantages: [
    {
      icon: "Globe",
      title: "Global Market Access",
      text: "Establish a direct presence in foreign markets, enabling better market penetration and brand building.",
    },
    {
      icon: "ShieldCheck",
      title: "Limited Liability",
      text: "The Indian parent company's liability is limited to its investment in the foreign subsidiary, protecting domestic assets.",
    },
    {
      icon: "TrendingUp",
      title: "Risk Diversification",
      text: "Operating in multiple countries helps diversify economic and market risks associated with a single country.",
    },
    {
      icon: "Landmark",
      title: "Legal Recognition Abroad",
      text: "A local corporate identity in the foreign country enhances credibility with local customers, suppliers, and regulators.",
    },
  ],
  disadvantages: [
    {
      icon: "FileWarning",
      title: "Dual Compliance",
      text: "The business must comply with the complex laws of both India (FEMA, RBI) and the host country.",
    },
    {
      icon: "Briefcase",
      title: "High Costs",
      text: "Involves significant expenses related to foreign legal counsel, incorporation fees, and international taxation.",
    },
    {
      icon: "Network",
      title: "Operational Challenges",
      text: "Managing operations across different time zones, cultures, and regulatory environments can be difficult.",
    },
  ],
  eligibility: [
    "The Indian parent company must be a registered entity.",
    "The investment must comply with the ODI guidelines under FEMA.",
    "The host country's legal requirements for company formation must be met.",
  ],
  documents: [
    {
      title: "For Indian Compliance (ODI)",
      items: [
        "Form ODI",
        "Board Resolution",
        "Statutory Auditor's certificate",
        "Valuation report (if applicable)",
      ],
    },
    {
      title: "For Foreign Incorporation",
      items: [
        "Apostilled copies of the Indian parent's corporate documents",
        "KYC of directors and shareholders",
      ],
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Board Resolution & ODI Form",
      description:
        "Pass a board resolution and submit the ODI form to the AD Bank.",
    },
    {
      step: 2,
      title: "Fund Remittance",
      description: "Remit funds for investment to the foreign country.",
    },
    {
      step: 3,
      title: "Incorporate in Foreign Country",
      description: "Complete the incorporation process in the host country.",
    },
    {
      step: 4,
      title: "Post-Investment Compliance",
      description:
        "Submit evidence of investment to the AD Bank and obtain a UIN.",
    },
  ],
  fees: [
    {
      component: "Foreign Legal & Incorporation Fees",
      fees: "Varies Highly",
      remarks:
        "This is the major cost and depends entirely on the host country (e.g., USA, UK, Singapore).",
    },
    {
      component: "Indian Professional Fees",
      fees: "₹50,000+",
      remarks:
        "Covers FEMA advisory, ODI form filing, and coordination with the AD Bank. Excludes foreign legal costs.",
    },
  ],
  faqs: [
    {
      q: "What is an AD Bank?",
      a: "An Authorized Dealer (AD) Category-I Bank is a bank authorized by the RBI to deal in foreign exchange. All overseas investments from India must be reported to the RBI through an AD Bank.",
    },
    {
      q: "What is Form ODI?",
      a: "The ODI (Overseas Direct Investment) Form is a comprehensive application used to report an Indian entity's investment in a foreign joint venture or wholly-owned subsidiary to the RBI.",
    },
    {
      q: "What is an Annual Performance Report (APR)?",
      a: "Every Indian party that has made an overseas investment must submit an Annual Performance Report (APR) in Form ODI Part II to the RBI every year, detailing the performance of the foreign subsidiary.",
    },
  ],
};
