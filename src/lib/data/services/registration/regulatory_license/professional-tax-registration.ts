// lib/data/services/professional-tax-registration.ts

import { ServiceData } from "@/lib/types";

export const professionalTaxRegistrationData: ServiceData = {
  title: "Professional Tax Registration",
  breadcrumb: ["Home", "Registrations", "Professional Tax Registration"],
  description:
    "State professional tax registration for employers (PTRC) and professionals (PTEC), including returns and payment schedules.",
  overview:
    "**Professional Tax (PT)** is a state‑levied tax on professions, trades, callings, and employment. Applicability, slab rates, exemptions and compliance calendars vary by state (not all states levy PT). Employers must obtain **PTRC** to deduct PT from employee salaries and deposit it to the state; businesses and professionals obtain **PTEC** to pay PT on their own professional income. Registration is generally due within 30 days of hiring staff or commencing professional activity.",
  advantages: [
    {
      icon: "FileCheck",
      title: "Legal Compliance",
      text: "Mandatory in applicable states—prevents penalties and prosecution risk.",
    },
    {
      icon: "Landmark",
      title: "State Government Compliance",
      text: "Meets state commercial tax requirements; enables other state permissions.",
    },
    {
      icon: "Receipt",
      title: "Prerequisite for Other Licenses",
      text: "Often needed for trade licenses, tenders, and other state registrations.",
    },
    {
      icon: "Users",
      title: "Employee Welfare",
      text: "State revenue supports public services; deduction appears transparent to employees.",
    },
  ],
  disadvantages: [
    {
      icon: "FileWarning",
      title: "Monthly/Quarterly Compliance",
      text: "Recurring returns & payments add to payroll and compliance workload.",
    },
    {
      icon: "Map",
      title: "State-Specific Rules",
      text: "Different slabs, exemptions and due dates across states complicate multi‑state ops.",
    },
    {
      icon: "AlertTriangle",
      title: "Penalties for Non-Compliance",
      text: "Late registration, payment or return filing attracts interest & penalties.",
    },
  ],
  eligibility: [
    {
      title: "Who Needs PT Registration?",
      items: [
        "**Employers (PTRC)** – any entity employing staff above state exemption thresholds.",
        "**Self‑employed / Professionals (PTEC)** – doctors, lawyers, CAs, architects, traders etc.",
        "**Companies/LLPs/Firms** – PTEC for entity’s own liability; PTRC for employee deductions.",
      ],
    },
    {
      title: "State‑wise Notes",
      items: [
        "Applicable in states incl. Maharashtra, Karnataka, West Bengal, Tamil Nadu, Telangana, Andhra Pradesh, Gujarat, Madhya Pradesh, Odisha, Bihar, Assam, etc.",
        "Not applicable in states like Delhi, Haryana, Uttar Pradesh, Rajasthan (as of current norms).",
        "Annual cap per person is ₹2,500 (Article 276, Constitution).",
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
    {
      tabTitle: "Optional / Conditional",
      content: {
        title: "Depending on State",
        items: [
          "Cancelled cheque / bank statement of entity.",
          "NOC from owner + Rent Agreement if premises rented.",
          "Board Resolution / Partner authorization for signatory.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Visit State Tax Website",
      description:
        "Apply on the relevant state portal (Commercial Tax / Profession Tax / Mahagst, etc.).",
    },
    {
      step: 2,
      title: "Fill the Application Form",
      description:
        "Choose PTEC and/or PTRC; enter entity, signatory & employee details as required.",
    },
    {
      step: 3,
      title: "Upload Documents",
      description:
        "Upload scans per checklist; verify slab mapping for employees as per salary bands.",
    },
    {
      step: 4,
      title: "Receive Certificate",
      description:
        "Post verification, download PTEC/PTRC certificate; note return schedules & payment timelines.",
    },
  ],
  fees: [
    {
      component: "Government Registration Fee",
      fees: "Nil – ₹1,000",
      remarks:
        "Varies by state and certificate type (PTEC/PTRC) — often nominal.",
    },
    {
      component: "Professional Fees",
      fees: "₹2,000 - ₹4,000",
      remarks:
        "For professional assistance with the application process and document preparation.",
    },
    {
      component: "Illustrative Monthly Slabs",
      fees: "₹0 / ₹150 / ₹200",
      remarks:
        "Common slabs: up to ₹15k – Nil; ₹15,001–₹20k – ₹150; above ₹20k – ₹200 (varies by state).",
    },
  ],
  faqs: [
    {
      q: "Which states in India have Professional Tax?",
      a: "It’s state‑specific. Examples: Maharashtra, Karnataka, West Bengal, Tamil Nadu, Telangana, Andhra Pradesh, Gujarat, Madhya Pradesh, Odisha, Bihar, Assam. Not applicable in Delhi, Haryana, Uttar Pradesh, Rajasthan.",
    },
    {
      q: "What is the maximum amount of Professional Tax that can be levied?",
      a: "The Constitution caps PT at **₹2,500 per person per year** (Article 276). States set slabs within this limit.",
    },
    {
      q: "What is the difference between PTEC and PTRC?",
      a: "**PTEC**: tax payable by the entity / professional on own income. **PTRC**: enables employer to deduct & remit PT for employees.",
    },
  ],
};
