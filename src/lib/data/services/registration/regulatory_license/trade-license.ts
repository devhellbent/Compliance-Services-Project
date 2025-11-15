// lib/data/services/trade-license.ts

import { ServiceData } from "@/lib/types";

export const tradeLicenseData: ServiceData = {
  title: "Trade License",
  breadcrumb: ["Home", "Registrations", "Trade License"],
  description:
    "Municipal trade license to operate specified activities at a premises, with inspections and yearly renewals.",
  overview:
    "A **Trade License** is a mandatory municipal authorization to run a specified business activity at a particular premises within a city’s jurisdiction. It safeguards public health, safety and local order by enforcing hygiene, fire, environmental and zoning standards. It is activity and location specific, typically valid for one financial year (renewable), and does not confer any tenancy or ownership rights. Non‑compliance can invite fines and closure directions.",
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
    {
      title: "Who Needs a Trade License?",
      items: [
        "Any individual / entity carrying on trade within municipal limits (subject to zoning).",
        "Examples: restaurants, bakeries, salons, gyms, lodges, shops, warehouses, factories.",
        "Applicant must be 18+ with clean record; activity must be lawful.",
      ],
    },
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
