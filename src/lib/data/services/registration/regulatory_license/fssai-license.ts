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
        icon: "CheckCircle",
        title: "of FSSAI Registration/License",
        text: "FSSAI registration or license provides a legal stamp of approval that is essential for operating a food business and offers multiple strategic benefits:",
        subPoints: [
            "**Legal Compliance:** It grants the food business **legal authorization** to operate in India, preventing heavy penalties, fines, or even closure for non-compliance with the Food Safety and Standards Act, 2006.",
            "**Enhanced Consumer Trust and Credibility:** Displaying the FSSAI logo and 14-digit registration/license number assures customers about the **safety, hygiene, and quality** of the food, which is crucial for building goodwill and fostering repeat business.",
            "**Business Expansion and Market Reach:** It is mandatory for listing on popular **online food platforms** (like Swiggy, Zomato) and e-commerce portals. It also facilitates easier expansion into new markets, partnerships, and enables supplying to large institutions (like government bodies, schools).",
            "**Brand Building and Reputation:** The FSSAI mark acts as a **mark of quality** and validity, distinguishing the business from unlicensed competitors and significantly enhancing the overall brand reputation.",
            "**Access to Government Schemes and Funding:** Possessing a valid FSSAI license makes the business eligible to avail **government schemes**, subsidies, and secure easier access to bank loans and funding for expansion.",
            "**Standardized Procedures:** It encourages the adoption of the mandated Food Safety Management System (FSMS), ensuring the maintenance of **minimum hygiene and safety standards** in preparation, storage, and handling."
        ]
    }
],
  disadvantages: [
    {
        icon: "CheckCircle",
        title: "and Challenges of FSSAI Registration/License",
        text: "While FSSAI compliance is beneficial, it also introduces certain requirements and administrative burdens, particularly for smaller businesses:",
        subPoints: [
            "**Compliance Costs:** There are **fees** associated with the application and mandatory periodic renewal of the registration or license, which can be an added expense, especially for small-scale and startup FBOs.",
            "**Documentation and Application Complexity:** The process, especially for State and Central licenses, involves **detailed documentation** (like layout plans, water test reports, list of equipment, etc.) and rigorous scrutiny, which can be complex and time-consuming for first-time applicants.",
            "**Strict Regulatory Standards:** FBOs must adhere to **strict and comprehensive safety and quality standards** across all operations (manufacturing, storage, packaging, and labeling). Maintaining these standards requires consistent effort, resources, and employee training.",
            "**Renewal Requirement:** The license is **not a one-time approval** and must be renewed regularly (typically 1 to 5 years). Failure to renew the license on time can lead to late fees and penalties, and a lapse will make the business illegal.",
            "**Risk of Penalties and Suspension:** Non-compliance with any FSSAI regulation---such as sub-standard food, misbranding, or unhygienic practices---can lead to **heavy fines, product recalls, or license suspension/cancellation**, posing a significant financial and reputational risk."
        ]
    }
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
