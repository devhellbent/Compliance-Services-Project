// lib/data/services/professional-tax-registration.ts

import { ServiceData } from "@/lib/types";

export const professionalTaxRegistrationData: ServiceData = {
  title: "Professional Tax Registration",
  breadcrumb: ["Home", "Registrations", "Professional Tax Registration"],
  overview:
    "**Professional Tax (PT)** is a state-level tax levied on professionals, trades, and employment. It is imposed by specific state governments in India (not all states have it). For businesses, it is the employer's responsibility to deduct PT from employees' salaries and pay it to the state government. 🏛️ Registration is mandatory for any business entity with employees in a state where this tax is applicable.",
  advantages: [
    {
      icon: "FileCheck",
      title: "Legal Compliance",
      text: "It is a mandatory legal requirement for businesses with employees in applicable states, avoiding penalties for non-compliance.",
    },
    {
      icon: "Landmark",
      title: "State Government Compliance",
      text: "Ensures compliance with the state's commercial tax laws, which is crucial for smooth business operations.",
    },
    {
      icon: "Receipt",
      title: "Prerequisite for Other Licenses",
      text: "In many states, a valid PT registration is a prerequisite for obtaining other state-level licenses and registrations.",
    },
    {
      icon: "Users",
      title: "Employee Welfare",
      text: "The revenue collected is used by the state government to fund schemes for employment generation and social welfare.",
    },
  ],
  disadvantages: [
    {
      icon: "FileWarning",
      title: "Monthly/Quarterly Compliance",
      text: "Requires regular compliance in the form of monthly or quarterly payments and annual return filings, adding to administrative tasks.",
    },
    {
      icon: "Map",
      title: "State-Specific Rules",
      text: "The rules, tax slabs, and due dates vary from state to state, which can be complex for businesses operating in multiple locations.",
    },
    {
      icon: "AlertTriangle",
      title: "Penalties for Non-Compliance",
      text: "Penalties are levied for late registration, late payment of tax, and late filing of returns.",
    },
  ],
  eligibility: [
    {
      title: "Who Needs PT Registration?",
      items: [
        "**Employers**: Every business entity (Company, Firm, Proprietorship, LLP, etc.) that employs staff in a state where PT is applicable.",
        "**Professionals**: Practicing professionals like Doctors, Lawyers, Chartered Accountants, Architects, etc.",
        "**Self-Employed**: Individuals engaged in any business or trade on their own account.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "For Companies/LLPs",
      content: {
        title: "Entity Documents",
        items: [
          "PAN Card of the Company/LLP.",
          "Certificate of Incorporation and MOA/AOA.",
          "Address proof of the business premises (e.g., Rent Agreement, Utility Bill).",
          "PAN and Address proof of all Directors/Partners.",
          "List of employees and their salary details.",
        ],
      },
    },
    {
      tabTitle: "For Proprietorships",
      content: {
        title: "Proprietor's Documents",
        items: [
          "PAN Card of the Proprietor.",
          "Aadhaar Card of the Proprietor.",
          "Address proof of the business premises.",
          "Details of employees, if any.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Visit State Tax Website",
      description:
        "The application is filed online on the website of the respective state's Commercial Tax Department or Profession Tax Department.",
    },
    {
      step: 2,
      title: "Fill the Application Form",
      description:
        "Complete the online application form for Professional Tax registration (PTEC and/or PTRC) with all the required business and employee details.",
    },
    {
      step: 3,
      title: "Upload Documents",
      description:
        "Upload scanned copies of all the required documents as per the state's checklist.",
    },
    {
      step: 4,
      title: "Receive Certificate",
      description:
        "Once the application and documents are verified by the department, the PT Registration Certificate is issued and can be downloaded from the portal.",
    },
  ],
  fees: [
    {
      component: "Government Registration Fee",
      fees: "Nil - ₹500",
      remarks:
        "The registration fee is minimal or often nil, but this varies by state.",
    },
    {
      component: "Professional Fees",
      fees: "₹2,000 - ₹4,000",
      remarks:
        "For professional assistance with the application process and document preparation.",
    },
  ],
  faqs: [
    {
      q: "Which states in India have Professional Tax?",
      a: "Professional Tax is a state-level tax and is not applicable in all states. Some of the states that levy PT include Maharashtra, Karnataka, West Bengal, Tamil Nadu, Andhra Pradesh, Telangana, Gujarat, and Madhya Pradesh.",
    },
    {
      q: "What is the maximum amount of Professional Tax that can be levied?",
      a: "As per Article 276 of the Indian Constitution, the maximum amount of Professional Tax that can be levied on any person per year is capped at ₹2,500.",
    },
    {
      q: "What is the difference between PTEC and PTRC?",
      a: "PTEC (Professional Tax Enrollment Certificate) is for the business entity itself to be legally able to conduct its profession or trade. PTRC (Professional Tax Registration Certificate) is for the employer to be able to deduct and deposit PT from its employees' salaries.",
    },
  ],
};
