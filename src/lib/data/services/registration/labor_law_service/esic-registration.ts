// lib/data/services/esic-registration.ts

import { ServiceData } from "@/lib/types";

export const esicRegistrationData: ServiceData = {
  title: "ESIC Registration",
  breadcrumb: ["Home", "Registrations", "ESIC Registration"],
  overview:
    "**ESIC (Employees' State Insurance Corporation) Registration** provides a comprehensive social security and health insurance scheme for Indian workers. 🏥 Governed by the **ESI Act, 1948**, it is a mandatory scheme for eligible establishments. It provides employees with medical care, sickness benefits, maternity benefits for women, and disablement benefits in case of work-related injuries.",
  advantages: [
    {
      icon: "HeartPulse",
      title: "Comprehensive Medical Care",
      text: "Provides full medical care to the insured person and their family members from day one of employment.",
    },
    {
      icon: "Pill",
      title: "Sickness & Disablement Benefit",
      text: "Offers cash compensation to employees during periods of certified sickness (Sickness Benefit) or for loss of earning capacity due to employment injury (Disablement Benefit).",
    },
    {
      icon: "Baby",
      title: "Maternity Benefit",
      text: "Provides paid leave and medical expenses for female employees during pregnancy and childbirth.",
    },
    {
      icon: "Users",
      title: "Dependents' Benefit",
      text: "In the unfortunate event of an employee's death due to an employment injury, their dependents receive a monthly pension.",
    },
  ],
  disadvantages: [
    {
      icon: "FileWarning",
      title: "Monthly Compliance",
      text: "Employers are required to pay contributions and file monthly returns, which is a recurring compliance activity.",
    },
    {
      icon: "CircleDollarSign",
      title: "Cost for Employer & Employee",
      text: "Both the employer and the employee must contribute a percentage of the employee's wages to the scheme.",
    },
    {
      icon: "Hospital",
      title: "Limited to ESI Hospitals",
      text: "Medical treatment is generally available only at ESI dispensaries and hospitals, which may have quality and accessibility constraints in some areas.",
    },
  ],
  eligibility: [
    {
      title: "Establishment Eligibility",
      items: [
        "Any non-seasonal factory or establishment employing **10 or more persons** (the limit is 20 in some states).",
        "Applicable to entities like restaurants, hotels, shops, cinemas, and educational or medical institutions.",
      ],
    },
    {
      title: "Employee Eligibility",
      items: [
        "Employees with a monthly wage of up to **₹21,000** are covered under the ESI scheme.",
        "Employees with disabilities have a higher wage ceiling of ₹25,000.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "For Establishments",
      content: {
        title: "Business & Bank Details",
        items: [
          "PAN Card of the company/firm and all its directors/partners.",
          "Certificate of Incorporation / Partnership Deed.",
          "Address proof of the business premises.",
          "Cancelled cheque of the company's bank account.",
          "A list of all employees and their salary details.",
        ],
      },
    },
    {
      tabTitle: "For Employees",
      content: {
        title: "Employee Details",
        items: [
          "A complete list of all employees.",
          "PAN and Aadhaar details of the employees.",
          "Family member details of the employees for availing medical benefits.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Sign Up on ESIC Portal",
      description:
        "Visit the official ESIC portal and sign up as a new employer by providing your company name, email, and other basic details.",
    },
    {
      step: 2,
      title: "Fill the Application Form",
      description:
        "Log in with the received credentials and complete the detailed 'Employer Registration Form' with information about the establishment and its employees.",
    },
    {
      step: 3,
      title: "Pay Initial Contribution",
      description:
        "After submitting the form, you will be required to pay the initial contribution for 6 months in advance.",
    },
    {
      step: 4,
      title: "Receive Registration Number",
      description:
        "Upon successful submission and payment, a 17-digit ESIC Registration Number (Code Number) is generated, and a registration letter (Form C-11) is sent to you.",
    },
  ],
  fees: [
    {
      component: "Government Registration Fee",
      fees: "Free",
      remarks:
        "There is no government fee for the registration itself, but the initial contribution must be paid.",
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
      q: "What are the current ESIC contribution rates?",
      a: "The employer contributes 3.25% of the wages, and the employee contributes 0.75% of the wages. The total contribution is 4% of the employee's monthly gross salary.",
    },
    {
      q: "Are the ESIC benefits available only to the employee?",
      a: "No, the medical benefits under the ESI scheme are available to the insured employee as well as their dependent family members.",
    },
    {
      q: "Is ESIC registration mandatory for employees earning more than ₹21,000?",
      a: "No. If an employee's monthly wage exceeds the threshold of ₹21,000 at the time of joining, they are not covered. However, if their wage crosses this limit after they are already registered, they will continue to be covered until the end of that contribution period.",
    },
  ],
};
