// lib/data/services/fssai-license.ts

import { ServiceData } from "@/lib/types";

export const fssaiLicenseData: ServiceData = {
  title: "FSSAI License",
  breadcrumb: ["Home", "Registrations", "FSSAI License"],
  overview:
    "An **FSSAI License** is a mandatory 14-digit registration number for all **Food Business Operators (FBOs)** in India. 🍲 It is issued by the Food Safety and Standards Authority of India (FSSAI), the governing body responsible for ensuring the quality and safety of food products sold in the country. The type of license required depends on the scale and nature of the business.",
  advantages: [
    {
      icon: "ShieldCheck",
      title: "Ensures Food Safety",
      text: "The license ensures that your food products meet the safety and quality standards set by the government.",
    },
    {
      icon: "Users",
      title: "Builds Consumer Trust",
      text: "Displaying the FSSAI number on your products builds goodwill and assures customers of the food's quality.",
    },
    {
      icon: "Gavel",
      title: "Legal Compliance",
      text: "It is a legal requirement to operate a food business, helping you avoid heavy penalties and legal action.",
    },
    {
      icon: "Globe",
      title: "Aids Business Expansion",
      text: "A valid FSSAI license makes it easier to expand your business, get bank loans, and partner with other businesses.",
    },
  ],
  disadvantages: [
    {
      icon: "FileWarning",
      title: "Complex Documentation",
      text: "The application process, especially for State and Central licenses, requires detailed documentation and a Food Safety Management System (FSMS) plan.",
    },
    {
      icon: "CalendarClock",
      title: "Regular Renewals",
      text: "The license is valid for a period of 1 to 5 years and must be renewed before expiry to continue operations.",
    },
    {
      icon: "AlertTriangle",
      title: "Heavy Penalties for Non-Compliance",
      text: "Operating without a valid FSSAI license can lead to severe penalties, including fines up to ₹10 lakh and imprisonment.",
    },
  ],
  eligibility: [
    {
      title: "Types of FSSAI Licenses",
      items: [
        "**Basic Registration**: For small FBOs like hawkers, petty retailers, and businesses with an annual turnover of up to **₹12 lakh**.",
        "**State License**: For mid-sized businesses like restaurants, hotels, and manufacturers with an annual turnover between **₹12 lakh and ₹20 crore**.",
        "**Central License**: For large businesses, importers, exporters, e-commerce operators, and businesses with an annual turnover **above ₹20 crore**.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Common Documents",
      content: {
        title: "For All FBOs",
        items: [
          "Passport-size photograph of the applicant.",
          "ID proof of the applicant (Aadhaar Card, Voter ID, etc.).",
          "PAN Card of the business entity.",
          "Proof of possession of the business premises (Rent Agreement, Utility Bill).",
        ],
      },
    },
    {
      tabTitle: "For State/Central License",
      content: {
        title: "Additional Documents",
        items: [
          "Blueprint or layout plan of the processing unit.",
          "List of equipment and machinery.",
          "List of food categories to be manufactured or processed.",
          "A detailed Food Safety Management System (FSMS) plan.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Determine License Type",
      description:
        "Based on your business's annual turnover and nature of activity, identify whether you need a Basic, State, or Central License.",
    },
    {
      step: 2,
      title: "Fill Application Form",
      description:
        "Complete the application (Form A for Basic Registration, Form B for State/Central License) on the FSSAI's FoSCoS portal.",
    },
    {
      step: 3,
      title: "Upload Documents",
      description:
        "Upload all the required documents in the prescribed format on the portal.",
    },
    {
      step: 4,
      title: "Pay the Fee",
      description:
        "Make the payment for the license fee through the online portal.",
    },
    {
      step: 5,
      title: "Verification and Inspection",
      description:
        "The FSSAI department will verify your application. For State and Central licenses, a physical inspection of the premises may be conducted.",
    },
    {
      step: 6,
      title: "Receive License",
      description:
        "Upon successful verification, the FSSAI license will be issued and can be downloaded from the FoSCoS portal.",
    },
  ],
  fees: [
    {
      component: "Basic Registration",
      fees: "₹100 per year",
      remarks: "For small-scale food businesses.",
    },
    {
      component: "State License",
      fees: "₹2,000 - ₹5,000 per year",
      remarks:
        "Varies depending on the type of business (e.g., manufacturer, hotel).",
    },
    {
      component: "Central License",
      fees: "₹7,500 per year",
      remarks:
        "Standard fee for most large-scale businesses, importers, and exporters.",
    },
  ],
  faqs: [
    {
      q: "Who needs an FSSAI license?",
      a: "Every Food Business Operator (FBO), from street vendors and home bakers to large manufacturers and importers, is required to have an FSSAI license or registration.",
    },
    {
      q: "What is the validity of an FSSAI license?",
      a: "An FSSAI license can be obtained for a period ranging from 1 year to a maximum of 5 years. It must be renewed before its expiry.",
    },
    {
      q: "Is it mandatory to print the FSSAI number on food product labels?",
      a: "Yes, for all packaged food products, the 14-digit FSSAI license number and the FSSAI logo must be prominently displayed on the label.",
    },
  ],
};
