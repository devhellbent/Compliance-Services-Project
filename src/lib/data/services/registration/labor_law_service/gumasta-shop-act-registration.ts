// lib/data/services/gumasta-shop-act-registration.ts

import { ServiceData } from "@/lib/types";

export const gumastaShopActRegistrationData: ServiceData = {
  title: "Gumasta / Shop Act Registration",
  breadcrumb: ["Home", "Registrations", "Gumasta / Shop Act Registration"],
  overview:
    "**Shop and Establishment Act Registration**, commonly known as a **'Gumasta' License** in states like Maharashtra, is a state-level license that regulates the working conditions of employees. 🏢 It governs aspects like **working hours, holidays, wages, and health and safety** in commercial establishments. This registration is mandatory for almost all businesses operating within the state, including shops, offices, hotels, and restaurants.",
  advantages: [
    {
      icon: "ShieldCheck",
      title: "Provides Legal Identity",
      text: "The certificate acts as a legal proof of the existence of your business, which is required for various other business-related applications.",
    },
    {
      icon: "Landmark",
      title: "Essential for Bank Account",
      text: "It is a primary document required by most banks to open a current business bank account.",
    },
    {
      icon: "FileCheck",
      title: "Ensures Legal Compliance",
      text: "Helps businesses comply with state labor laws, avoiding penalties and legal issues during inspections.",
    },
    {
      icon: "Eye",
      title: "Smooth Inspections",
      text: "A valid registration ensures that inspections conducted by the state labor department are smooth and hassle-free.",
    },
  ],
  disadvantages: [
    {
      icon: "Map",
      title: "State-Specific Rules",
      text: "The rules, regulations, and renewal processes vary significantly from one state to another.",
    },
    {
      icon: "CalendarClock",
      title: "Periodic Renewal",
      text: "The license is not a one-time registration and requires periodic renewal, typically ranging from one to five years.",
    },
    {
      icon: "Display",
      title: "Mandatory Display",
      text: "The registration certificate must be prominently displayed at the business premises at all times.",
    },
  ],
  eligibility: [
    {
      title: "Who Needs This Registration?",
      items: [
        "It is mandatory for almost all commercial establishments, including shops, offices, restaurants, hotels, warehouses, and places of public entertainment.",
        "This applies to every form of business, from sole proprietorships to private limited companies.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Common Documents",
      content: {
        title: "Proof of Identity and Business",
        items: [
          "PAN Card of the business and the proprietor/directors/partners.",
          "ID and address proof of the proprietor/directors/partners (e.g., Aadhaar Card).",
          "Address proof of the establishment (e.g., Rent Agreement, Utility Bill).",
          "A photograph of the establishment's exterior with a displayed name board.",
        ],
      },
    },
    {
      tabTitle: "Additional Details",
      content: {
        title: "Business & Employee Info",
        items: [
          "Details of the business activities.",
          "Number of employees (if any) and their details.",
          "Cancelled cheque or bank statement.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Visit State Labour Department Website",
      description:
        "The application is filed online on the official website of the Labour Department of the respective state.",
    },
    {
      step: 2,
      title: "Fill the Application Form",
      description:
        "Complete the online application form with all the details of the establishment, owner, and employees.",
    },
    {
      step: 3,
      title: "Upload Documents",
      description:
        "Upload scanned copies of all the required documents in the prescribed format.",
    },
    {
      step: 4,
      title: "Pay the Fee",
      description:
        "Make the payment for the registration fee online. The fee usually depends on the number of employees.",
    },
    {
      step: 5,
      title: "Receive Certificate",
      description:
        "After verification by the department, the Shop and Establishment Registration Certificate (Gumasta) is issued and can be downloaded from the portal.",
    },
  ],
  fees: [
    {
      component: "Government Fee",
      fees: "₹100 - ₹5,000",
      remarks:
        "The fee varies widely depending on the state and the number of employees in the establishment.",
    },
    {
      component: "Professional Fees",
      fees: "₹2,000 - ₹5,000",
      remarks:
        "For professional assistance with the application process and document preparation.",
    },
  ],
  faqs: [
    {
      q: "Is Gumasta / Shop Act registration mandatory for work-from-home businesses?",
      a: "Yes, in most states, even businesses operating from a residential premise are required to obtain this registration.",
    },
    {
      q: "How long is the license valid for?",
      a: "The validity varies by state. Some states offer a one-year validity, while others offer options for 3, 5, or even 10 years. It must be renewed before expiry.",
    },
    {
      q: "Is a Shop Act License the same as a Trade License?",
      a: "No. A Shop Act License governs the working conditions of employees (hours, leave, etc.). A Trade License, issued by the municipality, permits a specific trade at a specific location. Often, a business needs both.",
    },
  ],
};
