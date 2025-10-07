// lib/data/services/pf-registration.ts

import { ServiceData } from "@/lib/types";

export const pfRegistrationData: ServiceData = {
  title: "PF Registration",
  breadcrumb: ["Home", "Registrations", "PF Registration"],
  overview:
    "**Provident Fund (PF) Registration** is a mandatory social security scheme for employers, governed by the **Employees' Provident Fund Organisation (EPFO)**. Its purpose is to provide employees with retirement savings. Under this scheme, both the employer and the employee contribute a certain percentage of the employee's salary each month. This corpus provides a financial cushion for employees upon retirement. 💰",
  advantages: [
    {
      icon: "ShieldCheck",
      title: "Retirement Savings",
      text: "Builds a substantial retirement corpus for employees through monthly contributions from both the employee and employer.",
    },
    {
      icon: "BadgePercent",
      title: "Tax Benefits",
      text: "Employee contributions are eligible for tax deductions under Section 80C. The interest earned and the final withdrawal are also tax-free (subject to conditions).",
    },
    {
      icon: "Umbrella",
      title: "Insurance & Pension Benefits",
      text: "The scheme includes benefits under the Employee's Pension Scheme (EPS) and the Employee's Deposit Linked Insurance Scheme (EDLI).",
    },
    {
      icon: "FileCheck",
      title: "Legal Compliance for Employers",
      text: "It is a mandatory legal requirement for eligible establishments, helping them avoid penalties and legal issues.",
    },
  ],
  disadvantages: [
    {
      icon: "FileWarning",
      title: "Mandatory Monthly Compliance",
      text: "Employers must deposit contributions and file an Electronic Challan cum Return (ECR) every month, which is a recurring compliance task.",
    },
    {
      icon: "CircleDollarSign",
      title: "Financial Cost to Employer",
      text: "The employer's contribution adds to the company's payroll costs.",
    },
    {
      icon: "AlertTriangle",
      title: "Penalties for Delay",
      text: "Delayed payment of PF contributions attracts interest and penalties, which can be substantial.",
    },
  ],
  eligibility: [
    {
      title: "Mandatory Registration",
      items: [
        "Any establishment (factory or other) employing **20 or more persons**.",
        "Cinemas employing 5 or more persons.",
      ],
    },
    {
      title: "Voluntary Registration",
      items: [
        "Establishments with fewer than 20 employees can also register voluntarily with the consent of their employees.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "For Companies/LLPs",
      content: {
        title: "Entity & Director/Partner Documents",
        items: [
          "PAN Card of the Company/LLP.",
          "Certificate of Incorporation / LLP Agreement.",
          "Address proof of the business premises (e.g., Rent Agreement, Utility Bill).",
          "Cancelled cheque of the company's bank account.",
          "Digital Signature Certificate (DSC) of the authorized signatory.",
        ],
      },
    },
    {
      tabTitle: "For Employees",
      content: {
        title: "Employee KYC Details",
        items: [
          "PAN and Aadhaar details of the employees.",
          "Bank account details of the employees.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Register on EPFO Portal",
      description:
        "Visit the EPFO Unified Portal for employers and click on 'Establishment Registration'.",
    },
    {
      step: 2,
      title: "Fill Application Form",
      description:
        "Complete the online registration form with the employer's basic details and attach the Digital Signature Certificate (DSC).",
    },
    {
      step: 3,
      title: "Submit Details",
      description:
        "Fill in the detailed registration form with information about the establishment, owners, and employees. Upload the required documents.",
    },
    {
      step: 4,
      title: "Receive PF Code",
      description:
        "Upon successful verification, the EPFO allots a unique PF Code Number to the establishment, which will be communicated via email.",
    },
  ],
  fees: [
    {
      component: "Government Registration Fee",
      fees: "Free",
      remarks:
        "There is no government fee for PF registration on the EPFO portal.",
    },
    {
      component: "Professional Fees",
      fees: "₹3,000 - ₹6,000",
      remarks:
        "For professional assistance with the online application and documentation.",
    },
  ],
  faqs: [
    {
      q: "What is the current PF contribution rate?",
      a: "Generally, both the employee and the employer contribute 12% of the employee's basic salary plus dearness allowance. The employer's 12% is split into 8.33% for the Pension Scheme (EPS) and 3.67% for the Provident Fund (EPF).",
    },
    {
      q: "What is a UAN?",
      a: "The Universal Account Number (UAN) is a 12-digit number allotted by the EPFO to each employee. It acts as a portable, permanent PF account number, allowing employees to manage their PF accounts easily when they change jobs.",
    },
    {
      q: "Is PF registration mandatory for all employees in a registered establishment?",
      a: "It is mandatory for all employees whose basic salary is up to ₹15,000 per month. For employees earning more than this, it is optional, but they can join the scheme with mutual consent.",
    },
  ],
};
