// lib/data/services/producer-company.ts

import { ServiceData } from "@/lib/types";

export const producerCompanyData: ServiceData = {
  title: "Producer Company Registration",
  breadcrumb: ["Home", "Registrations", "Producer Company"],
  overview:
    "A **Producer Company** is a special corporate body legally formed by producers, specifically farmers, agriculturalists, or artisans. It's a hybrid between a cooperative society and a private limited company, governed by the **Companies Act, 2013**. Its main objective is to improve the standard of living of its members through collective activities like production, procurement, marketing, and selling of their primary produce.",
  advantages: [
    {
      icon: "ShieldCheck",
      title: "Limited Liability & Separate Entity",
      text: "Members' personal assets are protected, and the company has its own legal identity, separate from its owners.",
    },
    {
      icon: "Handshake",
      title: "Greater Bargaining Power",
      text: "By pooling their produce, members can negotiate better prices with buyers and purchase inputs in bulk at lower costs.",
    },
    {
      icon: "Landmark",
      title: "Access to Credit",
      text: "As a formal corporate entity, it can more easily secure loans and financial assistance from banks and institutions like NABARD.",
    },
    {
      icon: "BookUser",
      title: "Professional Management",
      text: "It allows for the appointment of experts to manage the business efficiently, which individual producers often cannot afford.",
    },
  ],
  disadvantages: [
    {
      icon: "Users",
      title: "Restricted Membership",
      text: "Membership is strictly limited to 'primary producers', preventing investment from the general public.",
    },
    {
      icon: "FileWarning",
      title: "Complex Compliance",
      text: "Being a company, it must adhere to the compliance requirements of the Companies Act, which can be burdensome for farmers.",
    },
    {
      icon: "Scale",
      title: "Potential for Disputes",
      text: "Decision-making among a large group of members can sometimes lead to internal conflicts.",
    },
  ],
  eligibility: [
    {
      title: "Member Requirements",
      items: [
        "A minimum of **10 individual producers**.",
        "Alternatively, two or more producer institutions.",
        "A combination of 10 or more individuals and producer institutions.",
      ],
    },
    {
      title: "Director and Capital",
      items: [
        "A minimum of **5 directors** is required (maximum of 15).",
        "A minimum paid-up authorized capital of **₹5 lakh** is required.",
        "The company name must end with **'Producer Company Limited'**.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Directors & Members",
      content: {
        title: "Identity and Address Proof",
        items: [
          "PAN Card and Aadhaar Card of all proposed directors and subscribers.",
          "Proof of being a 'primary producer' for all members (e.g., land ownership records, Sarpanch letter).",
          "Passport-size photographs.",
        ],
      },
    },
    {
      tabTitle: "Registered Office",
      content: {
        title: "Proof of Business Address",
        items: [
          "Latest Utility Bill of the registered office.",
          "Rent Agreement and NOC if the office is rented.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Obtain DSC and DIN",
      description:
        "All the proposed 5 or more directors must obtain their Digital Signature Certificates (DSC) and Director Identification Numbers (DIN).",
    },
    {
      step: 2,
      title: "Name Approval",
      description:
        "Apply for a unique name for the company using the SPICe+ Part A form. The name must end with 'Producer Company Limited'.",
    },
    {
      step: 3,
      title: "File Incorporation Forms",
      description:
        "File the SPICe+ Part B form along with the e-MOA and e-AOA. The MOA must clearly state the objectives which align with the activities permitted for a producer company.",
    },
    {
      step: 4,
      title: "Receive Certificate of Incorporation",
      description:
        "After verification of all documents, the Registrar of Companies (RoC) will issue the Certificate of Incorporation.",
    },
  ],
  fees: [
    {
      component: "Government Fees & Stamp Duty",
      fees: "Varies",
      remarks:
        "Depends on the authorized capital (minimum ₹5 lakh) and the state of registration.",
    },
    {
      component: "Professional Fees",
      fees: "₹20,000 - ₹40,000",
      remarks:
        "Covers the entire registration process for multiple directors and members, including all documentation and filings.",
    },
  ],
  faqs: [
    {
      q: "Who is considered a 'primary producer'?",
      a: "A primary producer is a person engaged in producing agricultural products (including horticulture, animal husbandry, floriculture, etc.), or any other primary produce.",
    },
    {
      q: "Can a Producer Company make a profit?",
      a: "Yes. After making provisions for reserves, the company can distribute profits to its members as a limited return and as a patronage bonus, which is based on the member's participation in the business.",
    },
    {
      q: "Are there any tax benefits for a Producer Company?",
      a: "Yes, under the Income Tax Act, the profits of a Producer Company from marketing the agricultural produce grown by its members are exempt from tax, subject to certain conditions.",
    },
  ],
};
