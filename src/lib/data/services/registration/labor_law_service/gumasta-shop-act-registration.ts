// lib/data/services/gumasta-shop-act-registration.ts

import { ServiceData } from "@/lib/types";

export const gumastaShopActRegistrationData: ServiceData = {
  title: "Gumasta / Shop Act Registration",
  breadcrumb: ["Home", "Registrations", "Gumasta / Shop Act Registration"],
  overview: `A **Gumasta License** is simply the regional or local name for the **Shop and Establishment Act Registration** required for most businesses in certain states of India, most prominently **Maharashtra** and **Madhya Pradesh**. It is a mandatory legal permit issued by the respective State Government\'s Labour Department or local Municipal Corporation. This registration certifies the legal existence of a commercial establishment, shop, hotel, restaurant, or place of public amusement.

The primary objective of the registration is to **regulate the conditions of work and employment** in the unorganized sector. The license ensures that the business adheres to state-specific labour laws concerning critical aspects like **working hours**, daily and weekly rest intervals, grant of paid leave, holidays, cleanliness, and the opening and closing times of the establishment. This is designed to safeguard the welfare and rights of employees working in shops and other commercial places.

Obtaining the Gumasta or Shop Act Registration is a foundational compliance step that grants the business **legal recognition**. It serves as a necessary **proof of business entity** often demanded by financial institutions to open a business Current Account or by the government for obtaining other registrations like GST or local trade licenses. The process is now largely done online, and compliance must be maintained throughout the operation of the business.`,
  advantages: [
    {
      icon: "ShieldCheck",
      title: "Legal Identity",
      text: "Provides official government recognition to your business, serving as a vital proof of entity for various legal purposes.",
    },
    {
      icon: "Landmark",
      title: "Business Bank Account",
      text: "Essential document required by banks to open a Current Account in the name of the establishment.",
    },
    {
      icon: "TrendingUp",
      title: "Access to Finance",
      text: "Facilitates easier access to business loans and credit facilities by proving the legal existence of the venture.",
    },
    {
      icon: "BadgePercent",
      title: "Government Benefits",
      text: "Enables businesses to apply for state government schemes, subsidies, and incentives for small enterprises.",
    },
    {
      icon: "Handshake",
      title: "Operational Trust",
      text: "Increases credibility with suppliers, vendors, and customers by demonstrating compliance with local laws.",
    },
  ],
  disadvantages: [
    {
      icon: "FileWarning",
      title: "Administrative Compliance",
      text: "Requires maintaining detailed registers for employee attendance, wages, and leaves, adding to administrative work.",
    },
    {
      icon: "Clock",
      title: "Periodic Renewal",
      text: "In many states, the license must be renewed periodically, requiring ongoing tracking and fee payments.",
    },
    {
      icon: "Ban",
      title: "Operational Restrictions",
      text: "Enforces strict rules on working hours and mandatory holidays, which may limit flexibility for some businesses.",
    },
    {
      icon: "Search",
      title: "Regulatory Inspections",
      text: "Registered establishments are subject to periodic inspections by labor department officials to verify compliance.",
    },
    {
      icon: "RefreshCw",
      title: "Mandatory Amendments",
      text: "Any change in business address, ownership, or activity requires formal amendments and additional paperwork.",
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
      tabTitle: "Documents related to the Establishment/Business:",
      content: {
        title: "Documents related to the Establishment/Business:",
        items: [
          "**Name of the Establishment:** The proposed or existing name of your shop or commercial establishment.",
          "**Nature of Business:** A brief description of the type of business activities you will be conducting (e.g., retail clothing, software services, restaurant).",
          "**Date of Commencement of Business:** The date from which your business operations started or will start.",
          "**Number of Employees:** Details of the total number of employees (including owner/family members, if applicable). This helps in calculating the applicable fees.",
          "**PAN Card of the Business Entity (if applicable):**",
          "**Proprietorship:** Not strictly required as the owner\\'s PAN is used.",
          "**Partnership Firm:** Firm\\'s PAN Card.",
          "**Company/LLP:** Company\\'s/LLP\\'s PAN Card.",
        ],
      },
    },
    {
      tabTitle: "Documents related to the Premises/Address:",
      content: {
        title: "Documents related to the Premises/Address:",
        items: [
          "**Proof of Ownership of the Business Premises:**",
          "**Owned Property:** Sale deed, property tax receipt, electricity bill, or any other utility bill in the name of the owner.",
          "**Rented/Leased Property:** Rent agreement or Lease agreement.",
          "**NOC from Landlord:** If rented, a No Objection Certificate (NOC) from the landlord stating that they have no objection to you running the business from the premises.",
          "**Address Proof of the Business Premises:**",
          "Electricity Bill, Telephone Bill, or any other utility bill showing the business address.",
          "A recent photograph of the shop/establishment (often required for online applications).",
        ],
      },
    },
    {
      tabTitle: "Documents related to the Applicant/Owner/Partners/Directors:",
      content: {
        title: "Documents related to the Applicant/Owner/Partners/Directors:",
        items: [
          "**Identity Proof of Applicant/Proprietor/Partners/Directors:**",
          "Aadhar Card",
          "PAN Card",
          "Voter ID Card",
          "Driving License",
          "Passport",
          "**Address Proof of Applicant/Proprietor/Partners/Directors:**",
          "Aadhar Card",
          "Utility Bill (Electricity/Telephone/Gas bill) - not older than 2 months",
          "Bank Statement/Passbook",
          "**Passport-sized Photographs:** Of the proprietor/partners/directors.",
        ],
      },
    },
    {
      tabTitle: "Other Specific Documents (if applicable):",
      content: {
        title: "Other Specific Documents (if applicable):",
        items: [
          "**Partnership Deed:** In case of a Partnership Firm.",
          "**Memorandum of Association (MOA) and Articles of Association (AOA):** In case of a Company (Private Limited or Public Limited).",
          "**LLP Agreement:** In case of a Limited Liability Partnership (LLP).",
          "**Board Resolution:** For Companies, authorizing the director to apply for the registration.",
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
