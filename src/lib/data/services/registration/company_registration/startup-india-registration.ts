// lib/data/services/startup-india-registration.ts

import { ServiceData } from "@/lib/types";

export const startupIndiaRegistrationData: ServiceData = {
  title: "Startup India Registration",
  breadcrumb: ["Home", "Registrations", "Startup India"],
  description:
    "Unlock government support for your innovative venture. Startup India registration provides DPIIT recognition, tax exemptions, compliance relaxations, and access to funding schemes, empowering startups to scale rapidly with comprehensive government backing.",
  overview:
    "**Startup India Registration** represents a transformative government certification program launched by the Department for Promotion of Industry and Internal Trade (DPIIT) under the Ministry of Commerce and Industry, designed to recognize, support, and accelerate the growth of innovative entrepreneurial ventures across India. This flagship initiative aims to build a robust startup ecosystem by providing a comprehensive suite of benefits including three-year income tax exemption on profits (subject to Inter-Ministerial Board approval), exemption from angel tax under Section 56(2)(viib) for investments from registered investors, 80% reduction in patent filing fees, fast-tracked patent examination, and self-certification under various labor and environment laws reducing compliance burden significantly. Eligible startups must be incorporated as Private Limited Company, LLP, or Partnership Firm, be less than ten years old from incorporation, have annual turnover not exceeding ₹100 crore in any financial year, and work toward innovation, development, or improvement of products, processes, or services with scalable business models. The recognition process involves online application through the Startup India portal with supporting documents including incorporation certificate, business description highlighting innovative nature, and recommendations or pitch deck. DPIIT-recognized startups gain access to the Fund of Funds for Startups (FFS) with ₹10,000 crore corpus managed through SIDBI, eligibility for Credit Guarantee Scheme providing collateral-free debt funding, and participation in various government procurement programs with relaxed eligibility criteria. The recognition opens doors to incubation facilities, mentorship programs, networking opportunities with investors and industry leaders, and participation in national and international startup events organized by the government. Startups can leverage the Startup India Hub for connecting with relevant stakeholders, accessing legal support, and navigating regulatory frameworks. The program provides single-window clearance mechanisms simplifying approvals and registrations across various departments. Additional benefits include priority in government tenders, fast-track exits through simplified winding-up procedures within 90 days, and exemption from Section 56 angel tax scrutiny when raising funds from verified investors. The initiative covers startups across diverse sectors including technology, healthcare, agriculture, education, finance, and social enterprises, promoting innovation-driven entrepreneurship nationwide. Whether you're developing cutting-edge technology, creating sustainable solutions, or disrupting traditional industries, Startup India registration provides the governmental recognition and tangible benefits essential for transforming innovative ideas into scalable businesses with national and global impact.",
  whyChooseUs: [
    {
      icon: "BadgePercent",
      title: "Tax Holiday",
      text: "Income tax exemption for three consecutive years.",
    },
    {
      icon: "FileCheck",
      title: "Easier Compliance",
      text: "Self-certification of compliance with labor and environmental laws.",
    },
    {
      icon: "Gavel",
      title: "Easy Winding Up",
      text: "Faster process for winding up the company.",
    },
    {
      icon: "Banknote",
      title: "Access to Funds",
      text: "Eligibility for government funding schemes.",
    },
  ],
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
    "The entity must be a Private Limited Company, LLP, or a Registered Partnership Firm.",
    "The business must be innovative and have a scalable business model.",
    "Annual turnover should not exceed ₹100 crore.",
  ],
  documents: [
    {
      title: "Core Documents",
      items: ["Certificate of Incorporation/Registration", "PAN Card"],
    },
    {
      title: "Supporting Documents",
      items: [
        "A brief write-up about the innovation",
        "Website link or pitch deck",
      ],
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Incorporate Your Business",
      description:
        "Register your business as a Private Limited Company, LLP, or Partnership Firm.",
    },
    {
      step: 2,
      title: "Register on Startup India Portal",
      description: "Create a profile and fill the online application.",
    },
    {
      step: 3,
      title: "Submit Documents",
      description: "Upload the required documents and innovation write-up.",
    },
    {
      step: 4,
      title: "Get DPIIT Recognition",
      description: "Receive the recognition number and certificate from DPIIT.",
    },
  ],
  fees: [
    {
      component: "Government Fee",
      fees: "Free",
      remarks:
        "The DPIIT does not charge any fee for Startup India recognition. The process is completely free of cost.",
    },
    {
      component: "Professional Fees",
      fees: "₹5,000 - ₹15,000",
      remarks:
        "Charged for professional assistance in preparing the application, drafting the innovation write-up, and ensuring all criteria are met.",
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
