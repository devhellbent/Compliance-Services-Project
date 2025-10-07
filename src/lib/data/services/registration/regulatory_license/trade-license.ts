// lib/data/services/trade-license.ts

import { ServiceData } from "@/lib/types";

export const tradeLicenseData: ServiceData = {
  title: "Trade License",
  breadcrumb: ["Home", "Registrations", "Trade License"],
  overview:
    "A **Trade License** is a certificate issued by a local municipal corporation that grants permission to carry out a specific business or trade in a particular area. 📜 Its primary purpose is to ensure that the business complies with the local authority's rules and safety guidelines. It doesn't grant property ownership but is a mandatory permit to operate a business from a specific premise. The rules and regulations for obtaining a trade license vary from state to state.",
  advantages: [
    {
      icon: "CheckSquare",
      title: "Legal Permission to Operate",
      text: "Provides the legal right to conduct your business in a specific locality, preventing penalties or business closure.",
    },
    {
      icon: "ShieldCheck",
      title: "Enhances Credibility",
      text: "A valid trade license increases the reputation of your business and builds trust among customers and potential partners.",
    },
    {
      icon: "Landmark",
      title: "Attracts Investment",
      text: "Banks and financial institutions often require a valid trade license as a prerequisite for providing business loans.",
    },
    {
      icon: "Gavel",
      title: "Ensures Ethical Practices",
      text: "The license ensures that the business adheres to safety, health, and ethical standards set by the local government.",
    },
  ],
  disadvantages: [
    {
      icon: "FileWarning",
      title: "Local and Specific",
      text: "The license is tied to a specific trade and premise. Any change in business activity or location requires a new license or modification.",
    },
    {
      icon: "CalendarClock",
      title: "Annual Renewal",
      text: "A trade license is typically valid for one financial year and must be renewed annually, adding a recurring compliance task.",
    },
    {
      icon: "AlertTriangle",
      title: "Penalty for Non-Compliance",
      text: "Operating a business without obtaining or renewing a trade license can lead to heavy fines and even business shutdown.",
    },
  ],
  eligibility: [
    {
      title: "Who Needs a Trade License?",
      items: [
        "Any individual or entity intending to start a business or trade within the territorial limits of a municipal corporation.",
        "Common examples include restaurants, hotels, manufacturing units, shops, canteens, and cyber cafes.",
        "The applicant must be over 18 years of age and have no criminal record.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Common Documents",
      content: {
        title: "For All Applicants",
        items: [
          "PAN Card of the applicant/business entity.",
          "Aadhaar Card of the applicant.",
          "Address proof of the business premises (e.g., latest Rent Agreement, Utility Bill, Property Tax receipt).",
          "Layout plan or blueprint of the office/premises.",
        ],
      },
    },
    {
      tabTitle: "For Companies/LLPs",
      content: {
        title: "Additional Entity Documents",
        items: [
          "Certificate of Incorporation and MOA/AOA.",
          "Partnership Deed for LLPs and firms.",
          "A No-Objection Certificate (NOC) from the property owner.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Identify Municipal Jurisdiction",
      description:
        "Determine the correct local municipal corporation under which your business premises are located.",
    },
    {
      step: 2,
      title: "Prepare and Submit Application",
      description:
        "Fill out the trade license application form, which is usually available online on the municipality's website or at their office.",
    },
    {
      step: 3,
      title: "Upload/Attach Documents",
      description:
        "Submit the application along with all the required documents as per the checklist provided by the municipality.",
    },
    {
      step: 4,
      title: "Premise Inspection",
      description:
        "A municipal inspector or health officer may visit the business premises to verify that all safety and health standards are being met.",
    },
    {
      step: 5,
      title: "Receive License",
      description:
        "Once the application and inspection are satisfactory, the municipal authority will issue the trade license.",
    },
  ],
  fees: [
    {
      component: "Government Fee",
      fees: "Varies Widely",
      remarks:
        "The fee depends on the state, the type of business, the size of the premises, and the scale of operations. It can range from ₹500 to ₹10,000+.",
    },
    {
      component: "Professional Fees",
      fees: "₹3,000 - ₹7,000",
      remarks:
        "For professional assistance with the application process, documentation, and follow-up with the municipal corporation.",
    },
  ],
  faqs: [
    {
      q: "Is a Trade License the same as a Shop & Establishment Registration?",
      a: "No. A Trade License permits a specific trade at a specific location. A Shop & Establishment Registration, on the other hand, governs the working conditions of employees, like hours, leave, etc. Both are often required for a business.",
    },
    {
      q: "How long is a Trade License valid for?",
      a: "A trade license is typically issued for one year and is valid from April 1st to March 31st of the financial year. It must be renewed annually.",
    },
    {
      q: "What happens if I don't get a Trade License?",
      a: "Operating a business without a valid trade license is an offense. The municipal authority can impose fines and penalties, and in some cases, may even order the closure of the business.",
    },
  ],
};
