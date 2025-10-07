// lib/data/services/startup-india-registration.ts

import { ServiceData } from "@/lib/types";

export const startupIndiaRegistrationData: ServiceData = {
  title: "Startup India Registration",
  breadcrumb: ["Home", "Registrations", "Startup India"],
  overview:
    "**Startup India Registration** is not a business structure registration but a **recognition/certification** provided by the Department for Promotion of Industry and Internal Trade (DPIIT), a part of the Government of India. 🚀 An eligible company, LLP, or partnership firm can be recognized as a 'Startup' to avail a host of benefits, including tax holidays, easier compliance, and access to funding schemes.",
  advantages: [
    {
      icon: "BadgePercent",
      title: "Tax Holiday for 3 Years",
      text: "Recognized startups can get an income tax exemption for any 3 consecutive years out of their first 10 years of incorporation.",
    },
    {
      icon: "FileCheck",
      title: "Easier Compliance",
      text: "Startups can self-certify their compliance with certain labor and environmental laws, reducing the regulatory burden in the initial years.",
    },
    {
      icon: "Gavel",
      title: "Easy Winding Up",
      text: "A startup can be wound up within 90 days of applying for insolvency, as compared to the standard 180 days.",
    },
    {
      icon: "Banknote",
      title: "Access to Government Funds",
      text: "Recognized startups are eligible to apply for funding from the government's ₹10,000 crore Fund of Funds scheme.",
    },
  ],
  disadvantages: [
    {
      icon: "Filter",
      title: "Strict Eligibility Criteria",
      text: "The entity must be genuinely innovative and meet specific age and turnover criteria to qualify.",
    },
    {
      icon: "Clock",
      title: "Time-Limited Benefits",
      text: "Most benefits, like the tax holiday, are available only for a limited period from the date of incorporation.",
    },
    {
      icon: "FileWarning",
      title: "Separate Tax Approval Needed",
      text: "Getting DPIIT recognition does not automatically grant the tax holiday; a separate application to the Inter-Ministerial Board is required.",
    },
  ],
  eligibility: [
    {
      title: "Entity Type & Age",
      items: [
        "The entity must be a **Private Limited Company**, a **Limited Liability Partnership (LLP)**, or a **Registered Partnership Firm**.",
        "It should not have been formed by splitting up or reconstructing an existing business.",
        "The date of incorporation/registration must be less than **10 years** ago.",
      ],
    },
    {
      title: "Turnover & Innovation",
      items: [
        "Annual turnover must not have exceeded **₹100 crore** in any of the previous financial years.",
        "The entity must be working towards **innovation, development, or improvement** of products, processes, or services, or have a scalable business model with high potential for employment generation or wealth creation.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Core Documents",
      content: {
        title: "Business & Registration Proof",
        items: [
          "Certificate of Incorporation / Registration of the entity.",
          "PAN card of the entity.",
        ],
      },
    },
    {
      tabTitle: "Supporting Documents",
      content: {
        title: "Proof of Concept & Innovation",
        items: [
          "A brief write-up about the innovative nature of the business.",
          "Website link, pitch deck, or a short video explaining the business.",
          "Details of any awards, recognitions, or patents related to the business.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Incorporate Your Business",
      description: "First, your business must be incorporated as a Private Limited Company, LLP, or Partnership Firm.",
    },
    {
      step: 2,
      title: "Register on Startup India Portal",
      description: "Create a profile on the official Startup India website and fill in the online application form with all business details.",
    },
    {
      step: 3,
      title: "Submit Documents",
      description: "Upload the required documents, including the incorporation certificate and a detailed write-up about your startup's innovation.",
    },
    {
      step: 4,
      title: "Get DPIIT Recognition Number",
      description: "Once the application is submitted and verified, the DPIIT will issue a unique recognition number. The certificate of recognition can be downloaded from the portal.",
    },
  ],
  fees: [
    {
      component: "Government Fee",
      fees: "Free",
      remarks: "The DPIIT does not charge any fee for Startup India recognition. The process is completely free of cost.",
    },
    {
      component: "Professional Fees",
      fees: "₹5,000 - ₹15,000",
      remarks: "Charged for professional assistance in preparing the application, drafting the innovation write-up, and ensuring all criteria are met.",
    },
  ],
  faqs: [
    {
      q: "Can a proprietorship or a public limited company apply for Startup India?",
      a: "No. Currently, only Private Limited Companies, LLPs, and Registered Partnership Firms are eligible for DPIIT recognition as a startup.",
    },
    {
      q: "What does the government consider as 'innovation'?",
      a: "Innovation is broadly defined. It can be a new product or service, or a significant improvement to an existing one. It can also be an innovative process or a scalable business model that creates jobs or wealth. A simple e-commerce store might not qualify unless it has a unique, innovative component.",
    },
    {
      q: "Is the 3-year tax exemption automatic after getting the recognition certificate?",
      a: "No. After getting the DPIIT recognition, the startup must file a separate application with the Inter-Ministerial Board (IMB) to be certified for the tax exemption under Section 80-IAC of the Income Tax Act.",
    },
  ],
};