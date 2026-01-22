// lib/data/services/professional-tax-registration.ts

import { ServiceData } from "@/lib/types";

export const professionalTaxRegistrationData: ServiceData = {
  title: "Professional Tax Registration",
  breadcrumb: ["Home", "Registrations", "Professional Tax Registration"],
  description:
    "State professional tax registration for employers (PTRC) and professionals (PTEC), including returns and payment schedules.",
  overview:
    `**Professional Tax Registration (PTR)** is a mandatory state-level compliance process in India for individuals and business entities earning income through a profession, trade, or employment. This tax is levied by the respective state governments (not the central government) and serves as a revenue source for state-specific public welfare and development programs.

The registration yields one of two certificates based on the applicant\'s role. An employer must obtain a **Professional Tax Registration Certificate (PTRC)** to legally deduct the tax from employees\' salaries and deposit it with the state authority. Conversely, a self-employed professional, such as a doctor or lawyer, must obtain a **Professional Tax Enrolment Certificate (PTEC)** to pay the tax directly on their own income.

Compliance with PTR is crucial for businesses and professionals to avoid penalties and interest charges for non-compliance. Timely registration, usually within 30 days of employing staff or commencing practice, ensures legal standing, enhances business credibility, and allows the tax paid to be claimed as a deduction under the Income Tax Act.`,
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
        title: "Professional Tax Registration is mandatory for individuals and",
        items: [
            "**Individuals** earning income from self-employment or professional services.",
            "**Employers** paying salaries to employees.",
            "**Companies, Firms, LLPs, and Proprietorships** engaged in any business or trade.",
            "**Organizations** having a registered office or branch within the state."
        ]
    },
    {
        title: "Eligibility for Employers (PTRC Registration)",
        items: [
            "Mandatory if at least **one employee** is drawing a salary above the taxable limit.",
            "Registration to be obtained **within 30 days** of hiring the first employee.",
            "Employers must **deduct the tax monthly** from salaries and **deposit it by the due date**.",
            "Applicable to **private companies, LLPs, firms, partnership firms, and proprietors** who employ staff."
        ]
    },
    {
        title: "Eligibility for Self-Employed Individuals (PTEC Registration)",
        items: [
            "Doctors, Lawyers, Engineers, Architects, Chartered Accountants, and Consultants",
            "Freelancers and Independent Contractors",
            "Traders, Shop Owners, and Retail Business Operators",
            "Directors, Partners, or Proprietors of registered firms or companies Note: Even if you have no employees, you must still register under PTEC if you are carrying out a business or profession."
        ]
    },
    {
        title: "Eligibility for Companies, LLPs, and Firms",
        items: [
            "Obtain **PTEC** for the entity itself (for company income), and",
            "Obtain **PTRC** to deduct and pay tax on behalf of its employees."
        ]
    },
    {
        title: "Eligibility for Employees",
        items: [
            "All salaried individuals earning above the **minimum salary threshold** are liable to pay professional tax.",
            "The **employer deducts** the tax from salary and remits it to the government.",
            "The **tax slab varies** by state (maximum \u20b92,500 per year).",
            "Employees working in **multiple states** are subject to tax as per the state where they work."
        ]
    },
    {
        title: "State-Wise Applicability",
        items: [
            "Professional Tax is applicable in most Indian states including:\\ **Maharashtra, Madhya Pradesh, Karnataka, Gujarat, Tamil Nadu, West Bengal, Telangana, Andhra Pradesh, Odisha, Bihar, and Assam.**  It is **not applicable** in states like **Delhi, Haryana, Uttar Pradesh, and Rajasthan**."
        ]
    }
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
