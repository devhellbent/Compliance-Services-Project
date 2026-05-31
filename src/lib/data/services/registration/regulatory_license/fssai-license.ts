// lib/data/services/fssai-license.ts

import { ServiceData } from "@/lib/types";

export const fssaiLicenseData: ServiceData = {
  title: "FSSAI License",
  breadcrumb: ["Home", "Registrations", "FSSAI License"],
  description:
    "FoSCoS‑based FSSAI registration and licensing for food businesses—basic, state or central—covering manufacture, storage and sale.",
  overview:
    `FSSAI Registration is a mandatory legal compliance for all Food Business Operators (FBOs) in India, overseen by the Food Safety and Standards Authority of India (FSSAI). The FSSAI, established under the Food Safety and Standards Act, 2006, is the apex body responsible for protecting and promoting public health through the regulation and supervision of food safety. This registration or license ensures that all food products---from manufacturing to distribution---undergo quality checks and adhere to strict hygiene standards.

The primary benefit of FSSAI registration is to provide a mark of assurance to consumers, signifying safety, hygiene, and quality. The application process is primarily online through the Food Safety Compliance System (FoSCoS) portal, where businesses submit required documents like identity proof and product details. Obtaining this registration is vital for legal compliance, helps build consumer trust, and avoids penalties for non-compliance.`,
  advantages: [
    {
      icon: "ShieldCheck",
      title: "Legal Authorization",
      text: "Grants the legal right to operate a food business in India, ensuring compliance with the Food Safety and Standards Act, 2006.",
    },
    {
      icon: "Award",
      title: "Consumer Trust",
      text: "The FSSAI logo is a mark of quality and safety, building immense credibility and trust among customers.",
    },
    {
      icon: "TrendingUp",
      title: "Business Expansion",
      text: "Mandatory for listing on food delivery platforms like Swiggy/Zomato and for selling products in established retail chains.",
    },
    {
      icon: "Globe",
      title: "Market Reach",
      text: "Facilitates easier entry into new markets and enables participation in government tenders and international trade.",
    },
    {
      icon: "FileCheck",
      title: "Standardized Operations",
      text: "Encourages the adoption of food safety management systems, ensuring consistent hygiene and quality standards.",
    },
  ],
  disadvantages: [
    {
      icon: "Banknote",
      title: "Compliance Costs",
      text: "Involves application fees and recurring renewal costs, which can be a burden for micro-businesses.",
    },
    {
      icon: "FileWarning",
      title: "Rigorous Documentation",
      text: "Requires detailed paperwork, including layout plans and water test reports for state and central licenses.",
    },
    {
      icon: "Clock",
      title: "Periodic Renewal",
      text: "Licenses are not permanent and must be renewed every 1-5 years, requiring ongoing administrative tracking.",
    },
    {
      icon: "AlertTriangle",
      title: "Strict Inspection",
      text: "Food businesses are subject to regular inspections; non-compliance can lead to heavy fines or license suspension.",
    },
    {
      icon: "ShieldAlert",
      title: "Product Recalls",
      text: "Safety violations can lead to mandatory product recalls, causing significant financial and reputational damage.",
    },
  ],
  eligibility: [
    {
        title: "Based on Annual Turnover",
        items: [
            "**Basic Registration:** For small businesses with turnover **up to \u20b912 lakh per year.**",
            "**State License:** For medium-sized businesses with turnover **between \u20b912 lakh and \u20b920 crore per year.**",
            "**Central License:** For large businesses with turnover **above \u20b920 crore per year** or operating in multiple states."
        ]
    },
    {
        title: "Type of Food Business Activity",
        items: [
            "The eligibility also depends on the **nature of food-related activities** carried out by the applicant.\\ Businesses involved in **manufacturing, processing, packaging, storage, transport, distribution, or sale of food** must obtain an appropriate FSSAI license as per their scale of operations."
        ]
    },
    {
        title: "Number of Locations and Area of Operation",
        items: [
            "If a business operates **within one state**, it can apply for a **State License**.",
            "If it operates in **two or more states**, or has branches across India, it must obtain a **Central License** from FSSAI.",
            "Each location or branch needs a **separate FSSAI license**."
        ]
    },
    {
        title: "Type of Food Products",
        items: [
            "Businesses dealing in **perishable, non-perishable, or packaged food items**, including **dairy, meat, bakery, confectionery, beverages, and edible oils**, are required to register under FSSAI.\\ Additionally, **importers, exporters, and e-commerce platforms** selling food online must also have an FSSAI license"
        ]
    },
    {
        title: "Infrastructure and Premises Requirements",
        items: [
            "The food business premises must meet **basic hygiene, safety, and structural requirements**, as per FSSAI standards.\\ Proper equipment, drainage, pest control, waste disposal, and employee hygiene facilities are mandatory for eligibility."
        ]
    },
    {
        title: "Food Business Operators (FBOs) Under Government Schemes",
        items: [
            "Even small food vendors and businesses under government programs like **Mid-Day Meal Scheme, Railways, or Defence Canteens** must obtain **Basic or Central FSSAI License** depending on their controlling authority and scale."
        ]
    }
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
