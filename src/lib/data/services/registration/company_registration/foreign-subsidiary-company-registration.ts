// lib/data/services/foreign-subsidiary-company-registration.ts

import { ServiceData } from "@/lib/types";

export const foreignSubsidiaryCompanyRegistrationData: ServiceData = {
  title: "Foreign Subsidiary Company Registration",
  breadcrumb: ["Home", "Registrations", "Foreign Subsidiary"],
  overview:
    "A **Foreign Subsidiary**, or a Wholly-Owned Subsidiary (WOS), is a company established in a foreign country but controlled by an Indian parent company. This is a key strategy for Indian businesses aiming for global expansion 🌏, allowing them to access international markets, talent, and technology. The process involves complying with India's **Overseas Direct Investment (ODI)** guidelines under FEMA, as well as the corporate laws of the host country.",
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
    {
      title: "Indian Entity Requirements",
      items: [
        "The Indian party must be a registered company, partnership firm, or LLP.",
        "Must route all transactions through an Authorized Dealer (AD) Category-I bank.",
        "The total financial commitment must not exceed 400% of the Indian party's net worth as per its last audited balance sheet.",
      ],
    },
    {
      title: "Host Country Requirements",
      items: [
        "Must meet all the legal and corporate requirements for company formation in the chosen foreign country.",
        "This includes appointing local directors or agents as mandated by that country's laws.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Indian Compliance (ODI)",
      content: {
        title: "Documents for RBI/AD Bank",
        items: [
          "**Form ODI**, duly filled and signed.",
          "Certified copy of the Board Resolution authorizing the overseas investment.",
          "Statutory Auditor's certificate for calculating the net worth.",
          "Valuation report for the foreign entity's shares (if applicable).",
        ],
      },
    },
    {
      tabTitle: "Foreign Incorporation",
      content: {
        title: "Typical Documents for Host Country",
        items: [
          "Documents required by the foreign jurisdiction, which often include apostilled copies of the Indian parent's corporate documents.",
          "Details and KYC of the proposed directors and shareholders.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Board Resolution and ODI Form",
      description: "The Indian company's board must pass a resolution approving the investment. Then, Form ODI is submitted to the Authorized Dealer (AD) Bank.",
    },
    {
      step: 2,
      title: "Fund Remittance",
      description: "Once the AD Bank approves the ODI application, the funds for investment can be remitted to the foreign country through banking channels.",
    },
    {
      step: 3,
      title: "Incorporate in Foreign Country",
      description: "Engage local legal counsel in the host country to complete the company incorporation process according to their laws.",
    },
    {
      step: 4,
      title: "Post-Investment Compliance",
      description: "After incorporation, submit evidence of the investment to the AD Bank to get a Unique Identification Number (UIN) from the RBI. Annual Performance Reports (APR) must be filed every year.",
    },
  ],
  fees: [
    {
      component: "Foreign Legal & Incorporation Fees",
      fees: "Varies Highly",
      remarks: "This is the major cost and depends entirely on the host country (e.g., USA, UK, Singapore).",
    },
    {
      component: "Indian Professional Fees",
      fees: "₹50,000+",
      remarks: "Covers FEMA advisory, ODI form filing, and coordination with the AD Bank. Excludes foreign legal costs.",
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