// lib/data/services/trade-license.ts

import { ServiceData } from "@/lib/types";

export const tradeLicenseData: ServiceData = {
  title: "Trade License",
  breadcrumb: ["Home", "Registrations", "Trade License"],
  description:
    "Municipal trade license to operate specified activities at a premises, with inspections and yearly renewals.",
  overview:
    `A Trade License is a **mandatory legal certificate** issued by the local municipal authority (like the Municipal Corporation or City Council) that grants an individual or entity formal permission to conduct a specific business or trade within a defined geographical area. It acts as a primary form of official authorization, ensuring the business is legally recognized and operating within the bounds of local regulations.

The main purpose of this license is to **safeguard public health and safety** and maintain local civic order. By mandating a Trade License, the government can monitor and regulate commercial activities, ensuring that establishments---such as restaurants, factories, or shops---comply with prescribed health, safety, environmental, and zoning standards. This prevents the public from being affected by nuisance, pollution, or health hazards caused by unethical or unregulated trade practices.

The license is typically **valid for a period of one year** and must be renewed annually. It is crucial for legal compliance, as operating a business without a valid Trade License can result in fines, penalties, or the closure of the establishment. Importantly, the license grants permission to trade but does **not** convey any ownership rights to the business property.`,
  advantages: [
    {
      icon: "CheckSquare",
      title: "Legal Permission to Operate",
      text: "Grants formal permission to operate, avoiding penalties and shutdown risk.",
    },
    {
      icon: "ShieldCheck",
      title: "Enhances Credibility",
      text: "Signals compliance to customers, lenders and authorities; aids loan approvals.",
    },
    {
      icon: "Landmark",
      title: "Attracts Investment",
      text: "Often prerequisite for bank facilities, other state/sector approvals.",
    },
    {
      icon: "Gavel",
      title: "Ensures Ethical Practices",
      text: "Enforces health, safety and zoning norms to protect the public and environment.",
    },
  ],
  disadvantages: [
    {
      icon: "FileWarning",
      title: "Local and Specific",
      text: "Activity & premises specific—changes require modification or fresh license.",
    },
    {
      icon: "CalendarClock",
      title: "Annual Renewal",
      text: "Annual renewals and inspections add recurring compliance tasks.",
    },
    {
      icon: "AlertTriangle",
      title: "Penalty for Non-Compliance",
      text: "Operating without/after expiry risks fines, sealing or closure orders.",
    },
  ],
  eligibility: [
    "The Eligibility Criteria for obtaining a Trade License in India are generally straightforward, but the specific documentation and additional requirements are determined by the local Municipal Corporation or Urban Local Body (ULB) where the business is located.  Here are the main universal criteria that must be met:"
],
  documents: [
    {
      tabTitle: "Common Documents",
      content: {
        title: "For All Applicants",
        items: [
          "PAN of applicant / business; Aadhaar of applicant.",
          "Premises proof: Property tax receipt / Sale Deed / Rent Agreement + Owner NOC.",
          "Latest utility bill; site layout/plan showing dimensions & usage.",
        ],
      },
    },
    {
      tabTitle: "For Companies/LLPs",
      content: {
        title: "Additional Entity Documents",
        items: [
          "Certificate of Incorporation, MOA/AOA (Companies).",
          "LLP Agreement / Partnership Deed (LLP / Firm).",
          "Board Resolution / Authorization for signatory.",
        ],
      },
    },
    {
      tabTitle: "Conditional Clearances",
      content: {
        title: "Based on Activity",
        items: [
          "Fire NOC for restaurants, warehouses, manufacturing / flammable storage.",
          "Pollution Control Board consent for industrial / polluting activities.",
          "Health Department license for food & hygiene sensitive trades.",
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
        "Fill the municipal application online/offline with activity, premises & ownership details.",
    },
    {
      step: 3,
      title: "Upload/Attach Documents",
      description:
        "Attach KYC, premises proof, layout & conditional NOCs as per activity category.",
    },
    {
      step: 4,
      title: "Premise Inspection",
      description:
        "Inspector/Health/Fire officials may verify compliance with local bye‑laws & standards.",
    },
    {
      step: 5,
      title: "Receive License",
      description:
        "On approval, license is issued for the financial year; diarize renewal timelines.",
    },
  ],
  fees: [
    {
      component: "Government Fee",
      fees: "Varies Widely",
      remarks:
        "Depends on activity category, floor area, risk class and city. Commonly ₹500–₹10,000+.",
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
      a: "Typically valid for the financial year (Apr–Mar) and renewed annually; some ULBs offer multi‑year options.",
    },
    {
      q: "What happens if I don't get a Trade License?",
      a: "Operating without/after expiry can attract fines, sealing orders or closures by the municipality.",
    },
  ],
};
