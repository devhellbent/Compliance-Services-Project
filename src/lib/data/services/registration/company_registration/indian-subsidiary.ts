// lib/data/services/indian-subsidiary.ts

import { ServiceData } from "@/lib/types";

export const indianSubsidiaryData: ServiceData = {
  title: "Indian Subsidiary Company Registration",
  breadcrumb: ["Home", "Registrations", "Indian Subsidiary"],
  overview:
    "An **Indian Subsidiary** is a company in India whose controlling interest is held by a foreign parent company 🌏. It's the most preferred structure for foreign corporations looking to establish a long-term, full-fledged business presence in the Indian market. The subsidiary is treated as a **domestic Indian company** for all legal, taxation, and compliance purposes. It offers the foreign parent both control and limited liability.",
  advantages: [
    {
      icon: "Library",
      title: "Separate Legal Entity",
      text: "The subsidiary is a distinct legal entity from its foreign parent, with its own assets, liabilities, and legal standing in India.",
    },
    {
      icon: "ShieldCheck",
      title: "Limited Liability",
      text: "The liability of the foreign parent company is limited to the capital it has invested in the subsidiary's shares.",
    },
    {
      icon: "TrendingUp",
      title: "Market Credibility",
      text: "Operating as a registered Indian company builds trust and credibility with local customers, employees, and partners.",
    },
    {
      icon: "FileCheck",
      title: "Full FDI Compliance",
      text: "It is a clear and compliant route for Foreign Direct Investment (FDI) into India, eligible for benefits under tax treaties.",
    },
  ],
  disadvantages: [
    {
      icon: "FileWarning",
      title: "Higher Compliance Burden",
      text: "The subsidiary must comply with the Indian Companies Act, 2013, as well as FEMA and RBI regulations for foreign investment.",
    },
    {
      icon: "Landmark",
      title: "Repatriation of Profits",
      text: "Sending profits back to the foreign parent company (as dividends) is subject to Indian taxes like Dividend Distribution Tax.",
    },
    {
      icon: "UserCheck",
      title: "Resident Director Requirement",
      text: "The company must have at least one director who is a resident of India, adding an administrative requirement.",
    },
  ],
  eligibility: [
    {
      title: "Entity and Director Requirements",
      items: [
        "A foreign 'parent' company to act as the majority shareholder.",
        "Minimum two shareholders (the parent company and another entity/person can be the shareholders).",
        "Minimum two directors, with **at least one being a resident of India**.",
      ],
    },
    {
      title: "Capital and Name",
      items: [
        "There is no minimum capital requirement, but it must be sufficient for the business plan and FDI policy.",
        "The name must be unique and approved by the MCA, ending with 'Private Limited'.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Foreign Parent Company",
      content: {
        title: "Apostilled Corporate Documents",
        items: [
          "Copy of the Certificate of Incorporation of the parent company.",
          "Copy of the MOA and AOA (or equivalent) of the parent company.",
          "A Board Resolution from the parent company authorizing the incorporation of the Indian subsidiary.",
          "All documents must be **apostilled** or notarized & consularized in the parent company's home country.",
        ],
      },
    },
    {
      tabTitle: "Directors & Shareholders",
      content: {
        title: "Identity and Address Proof",
        items: [
          "Passport copy for all foreign directors and shareholders (apostilled).",
          "PAN Card and Aadhaar for the Indian resident director.",
          "DSC and DIN for all proposed directors.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Obtain DSC and DIN for Directors",
      description: "Obtain a Digital Signature Certificate (DSC) and Director Identification Number (DIN) for all proposed directors, including the resident Indian director.",
    },
    {
      step: 2,
      title: "Name Reservation (SPICe+ Part A)",
      description: "Apply for and reserve a unique name for the subsidiary company through the MCA portal.",
    },
    {
      step: 3,
      title: "File for Incorporation (SPICe+ Part B)",
      description: "File the incorporation form SPICe+ Part B along with the apostilled documents of the parent company and personal documents of the directors.",
    },
    {
      step: 4,
      title: "Receive Share Capital & RBI Reporting",
      description: "After incorporation, the subsidiary must receive the share subscription money from the foreign parent. This FDI must be reported to the RBI by filing **Form FCGPR** within 30 days.",
    },
  ],
  fees: [
    {
      component: "Government & Stamp Duty Fees",
      fees: "Varies",
      remarks: "Depends on the authorized capital and the state of registration.",
    },
    {
      component: "Notary & Apostille",
      fees: "Varies",
      remarks: "This cost is incurred in the foreign country and depends on their local charges.",
    },
    {
      component: "Professional Fees",
      fees: "₹30,000 - ₹70,000",
      remarks: "Higher than a standard incorporation due to the complexity of handling foreign documents, FEMA compliance, and RBI reporting.",
    },
  ],
  faqs: [
    {
      q: "Who can be the resident director in an Indian subsidiary?",
      a: "A resident director is an individual who has stayed in India for a total period of not less than 182 days during the previous financial year. This person can be an Indian citizen or a foreign national with a valid visa who meets the residency criteria.",
    },
    {
      q: "What is FEMA and RBI reporting (FCGPR)?",
      a: "The Foreign Exchange Management Act (FEMA) governs all foreign investments. When a subsidiary receives funds (FDI) from its foreign parent, it must report this to the Reserve Bank of India (RBI) through Form FCGPR (Foreign Collaboration - General Permission Route) to ensure compliance.",
    },
    {
      q: "Can an Indian subsidiary own property in India?",
      a: "Yes. As an Indian domestic company, a subsidiary can acquire and own immovable property in India as necessary for carrying out its business activities, subject to FDI policy guidelines.",
    },
  ],
};