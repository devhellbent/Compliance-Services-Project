// lib/data/services/fssai-license.ts

import { ServiceData } from "@/lib/types";

export const fssaiLicenseData: ServiceData = {
  title: "FSSAI License",
  breadcrumb: ["Home", "Registrations", "FSSAI License"],
  description:
    "FoSCoS‑based FSSAI registration and licensing for food businesses—basic, state or central—covering manufacture, storage and sale.",
  overview:
    "An **FSSAI License/Registration** is a mandatory 14‑digit authorization for all **Food Business Operators (FBOs)** involved in manufacturing, processing, storage, distribution, sale or import of food in India. Issued under the Food Safety and Standards Act via the FoSCoS portal, it ensures food safety, hygiene and traceability. The number must be displayed at the premises and on packaged food labels, and the license is premise‑specific and renewable.",
  advantages: [
    {
      icon: "ShieldCheck",
      title: "Ensures Food Safety",
      text: "Demonstrates compliance with statutory safety and hygiene standards across the food chain.",
    },
    {
      icon: "Users",
      title: "Builds Consumer Trust",
      text: "FSSAI logo and 14‑digit number on labels boost credibility and buyer confidence.",
    },
    {
      icon: "Gavel",
      title: "Legal Compliance",
      text: "Mandatory to operate legally; prevents penalties, seizure and business closure.",
    },
    {
      icon: "Globe",
      title: "Aids Business Expansion",
      text: "Required by marketplaces, aggregators and large buyers; helps secure finance and partnerships.",
    },
    {
      icon: "ListChecks",
      title: "Traceability & Recalls",
      text: "Facilitates product traceability, complaint handling and effective recall management.",
    },
  ],
  disadvantages: [
    {
      icon: "FileWarning",
      title: "Complex Documentation",
      text: "State/Central licenses need detailed FSMS plans, equipment lists, water test reports, etc.",
    },
    {
      icon: "CalendarClock",
      title: "Regular Renewals",
      text: "Valid 1–5 years; renewal before expiry is mandatory to avoid late fees and lapses.",
    },
    {
      icon: "AlertTriangle",
      title: "Heavy Penalties for Non-Compliance",
      text: "Operating without/after expiry can invite penalties, prosecution, and closure directions.",
    },
    {
      icon: "Map",
      title: "State‑wise Variations",
      text: "Documentation and inspections vary across states and local bodies; timelines can differ.",
    },
  ],
  eligibility: [
    {
      title: "Types of FSSAI Licenses",
      items: [
        "**Basic Registration**: Petty FBOs up to annual turnover of **₹12 lakh** (hawkers, home kitchens, small retailers).",
        "**State License**: Restaurants, hotels, manufacturers, transporters etc. with turnover **₹12 lakh–₹20 crore**.",
        "**Central License**: For turnover **above ₹20 crore**, importers/exporters, e‑commerce FBOs, large manufacturers and units in central premises (e.g., seaports, airports).",
      ],
    },
    {
      title: "Who Needs It?",
      items: [
        "Manufacturers, processors, repackers, marketers, wholesalers, distributors, storage/warehousing, transporters, retailers, restaurants, cloud kitchens, caterers, online sellers.",
        "License is premise‑specific; each location requires its own license/registration.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Common Documents",
      content: {
        title: "For All FBOs",
        items: [
          "Passport‑size photo; Aadhaar/ID of applicant and authorized signatory.",
          "PAN of proprietor/firm/company and entity proof (COI/MOA‑AOA/LLP Agreement/Partnership Deed).",
          "Premises proof: Rent Agreement/Lease/Sale Deed + latest utility bill; NOC from owner if rented.",
          "List of food products/categories handled.",
        ],
      },
    },
    {
      tabTitle: "For State/Central License",
      content: {
        title: "Additional Documents",
        items: [
          "Layout/blueprint of processing/storage area with dimensions.",
          "List of equipment and machinery with numbers and capacities.",
          "FSMS/Plan or certificate; water analysis report (if applicable).",
          "List of directors/partners; Board resolution/authorization.",
          "NOCs: Municipality/Health/PCB as applicable; IEC for importers.",
        ],
      },
    },
    {
      tabTitle: "Restaurant/Cloud Kitchen",
      content: {
        title: "Activity‑Specific",
        items: [
          "Kitchen layout, chimney/exhaust details, food handler medical fitness and training records.",
          "Waste disposal arrangements; pest control contract; freezer/chiller details.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Determine Category & Turnover",
      description:
        "Identify activity (manufacture/trade/service) and turnover to select Basic, State, or Central license on FoSCoS.",
    },
    {
      step: 2,
      title: "FoSCoS Application (Form A/B)",
      description:
        "Create account, fill Form A (Basic) or Form B (State/Central), add product categories, business details and premises info.",
    },
    {
      step: 3,
      title: "Upload Documents",
      description:
        "Upload KYC, premises proof, FSMS, layout, equipment list and activity‑specific NOCs in prescribed formats.",
    },
    {
      step: 4,
      title: "Pay Government Fees",
      description:
        "Pay statutory fees online and submit application; respond to clarification/inspection notices if raised.",
    },
    {
      step: 5,
      title: "Scrutiny & Inspection",
      description:
        "Authority scrutinizes the application; State/Central cases may involve site inspection before grant.",
    },
    {
      step: 6,
      title: "Grant & Compliance",
      description:
        "License/Registration issued on approval. Display the certificate and number; maintain hygiene records and file due returns (e.g., Form D‑1/D‑2 for manufacturers).",
    },
  ],
  fees: [
    {
      component: "Basic Registration",
      fees: "₹100 per year",
      remarks: "For petty FBOs up to ₹12 lakh turnover.",
    },
    {
      component: "State License",
      fees: "₹2,000 - ₹5,000 per year",
      remarks:
        "Varies by activity and state (restaurant, hotel, manufacturer, transporter etc.).",
    },
    {
      component: "Central License",
      fees: "₹7,500 per year",
      remarks:
        "For large units, importers/exporters, e‑commerce etc.; additional category fees may apply.",
    },
    {
      component: "Late Renewal Penalty",
      fees: "₹100 per day",
      remarks:
        "If renewal application is filed after expiry; post‑expiry operations are prohibited.",
    },
  ],
  faqs: [
    {
      q: "Who needs an FSSAI license?",
      a: "All FBOs handling food—manufacturers, traders, storage, transporters, retailers, restaurants, cloud kitchens, caterers, importers/exporters and online sellers—need FSSAI registration/license based on scale.",
    },
    {
      q: "What is the validity of an FSSAI license?",
      a: "It can be issued for 1–5 years. Apply for renewal before expiry to avoid late fees and business interruption.",
    },
    {
      q: "Is it mandatory to print the FSSAI number on food product labels?",
      a: "Yes. Packaged foods must display the 14‑digit FSSAI number and logo; premises must display the certificate/number.",
    },
    {
      q: "Do home bakers and cloud kitchens need FSSAI?",
      a: "Yes. Home kitchens and cloud kitchens require at least Basic Registration; higher categories may apply as volume grows.",
    },
    {
      q: "Do I need separate licenses for multiple locations?",
      a: "Yes. Licenses are premise‑specific; each unit, warehouse or retail outlet typically needs its own registration/license.",
    },
  ],
};
