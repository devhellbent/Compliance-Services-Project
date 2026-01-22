// lib/data/services/esic-registration.ts

import { ServiceData } from "@/lib/types";

export const esicRegistrationData: ServiceData = {
  title: "ESIC Registration",
  breadcrumb: ["Home", "Registrations", "ESIC Registration"],
  overview: `ESIC Registration, under the Employees\' State Insurance Act, 1948, is the **mandatory process** for businesses in India to enroll with the Employees\' State Insurance Corporation (ESIC). This enrollment is a legal obligation for non-seasonal factories and certain establishments (like shops, hotels, and educational/medical institutions) employing **10 or more** persons, whose monthly wages fall below a specified ceiling (currently ₹21,000). The registration identifies the establishment and its eligible employees, assigning a unique 17-digit code for compliance.

The primary purpose of the ESIC scheme is to provide a comprehensive **social security net** to employees and their dependents against contingencies like sickness, maternity, disability, and death due to employment injury. This self-financing scheme is built on contributions, with the employer currently contributing 3.25% and the employee contributing 0.75% of the wages (employees earning below a daily minimum are exempt). These contributions fund an array of benefits designed to support the insured person and their family.

Registered employees are entitled to significant benefits, including **full medical care** for themselves and their dependents from day one of employment, without a ceiling on expenditure. Furthermore, they receive cash benefits such as Sickness Benefit (70% of wages), Maternity Benefit (full wages for 26 weeks), and Disablement/Dependents Benefit in case of employment-related injury or death. The online registration process on the ESIC portal makes compliance easier, ensuring the workforce is safeguarded.`,
  advantages: [
    {
      icon: "CheckCircle",
      title: "Mandatory Financial Cost",
      text: "The employer is legally required to bear a fixed, non-optional contribution (currently \\$\\\\mathbf{3.25\\\\%}\\$ of wages), which increases the overall cost of employment.",
    },
    {
      icon: "CheckCircle",
      title: "Administrative Burden",
      text: "Employers must maintain strict records (wage registers, attendance, accident reports) and ensure timely, accurate filing of monthly contributions and half-yearly returns.",
    },
    {
      icon: "CheckCircle",
      title: "Penalties for Non",
      text: "Compliance:** Failure to remit contributions by the due date results in stiff penalties, including a simple interest of \\$\\\\mathbf{12\\\\%}\\$ per annum and potential legal prosecution.",
    },
    {
      icon: "CheckCircle",
      title: "Substandard Medical Infrastructure",
      text: "A frequent complaint is that some ESIC hospitals and dispensaries suffer from overcrowding, administrative delays, or lack of advanced facilities compared to private healthcare.",
    },
    {
      icon: "CheckCircle",
      title: "Compulsory Wage Deduction",
      text: "Employees must compulsorily contribute \\$\\\\mathbf{0.75\\\\%}\\$ of their wages, slightly reducing their net take-home salary. (Note: Employees earning up to \u20b9176/day are exempt from this deduction).",
    },
    {
      icon: "CheckCircle",
      title: "Wage Ceiling Restriction",
      text: "The benefits are strictly limited to employees whose monthly wages do not exceed the specified ceiling (currently **\u20b921,000**, or \u20b925,000 for disabled persons), excluding the employer\\'s higher-paid staff from the scheme\\'s protection.",
    },
  ],
  disadvantages: [
    {
      icon: "CheckCircle",
      title: "of ESIC Registration",
      text: "",
      subPoints: [
        "**Mandatory Financial Cost:** The employer is legally required to bear a fixed, non-optional contribution (currently \\$\\\\mathbf{3.25\\\\%}\\$ of wages), which increases the overall cost of employment.",
        "**Administrative Burden:** Employers must maintain strict records (wage registers, attendance, accident reports) and ensure timely, accurate filing of monthly contributions and half-yearly returns.",
        "**Penalties for Non-Compliance:** Failure to remit contributions by the due date results in stiff penalties, including a simple interest of \\$\\\\mathbf{12\\\\%}\\$ per annum and potential legal prosecution.",
        "**Substandard Medical Infrastructure:** A frequent complaint is that some ESIC hospitals and dispensaries suffer from overcrowding, administrative delays, or lack of advanced facilities compared to private healthcare.",
        "**Compulsory Wage Deduction:** Employees must compulsorily contribute \\$\\\\mathbf{0.75\\\\%}\\$ of their wages, slightly reducing their net take-home salary. (Note: Employees earning up to \u20b9176/day are exempt from this deduction).",
        "**Wage Ceiling Restriction:** The benefits are strictly limited to employees whose monthly wages do not exceed the specified ceiling (currently **\u20b921,000**, or \u20b925,000 for disabled persons), excluding the employer\\'s higher-paid staff from the scheme\\'s protection.",
      ],
    },
  ],
  eligibility: [
    {
      title: "The eligibility criteria for mandatory ESIC Registration are",
      items: [
        "primarily based on two factors: the type and size of the     establishment and the wage limit of the employees working there.",
      ],
    },
    {
      title: "Criteria for Employer Registration (Establishment)",
      items: [
        "**Employee Count Threshold:** The establishment employs **10 or more** persons. *Note:* In some states/union territories, the threshold for certain establishments (like shops, hotels, etc.) is **20 or more** employees.",
        "**Establishment Type:** The ESI Act covers non-seasonal factories and has been extended to various sectors, including: ",
        "Shops, Hotels, and Restaurants.",
        "Cinemas and Preview Theatres.",
        "Road Motor Transport Establishments.",
        "Newspaper Establishments.",
        "Private Educational and Medical Institutions. ",
        "**Geographical Location:** The establishment is located in a district or area where the ESI Scheme has been implemented and notified.",
        "**Continuation:** Once an establishment is registered, it **continues to be covered** even if the number of employees later falls below the statutory limit.",
      ],
    },
    {
      title: "Criteria for Employee Coverage (Insured Person)",
      items: [
        "**Wage Ceiling:** The employee\\'s monthly gross wages (excluding overtime and certain other payments) **do not exceed \u20b921,000**.",
        "**Disabled Persons:** For employees with a disability, the monthly wage ceiling is **\u20b925,000**.",
        "**Immediate Coverage:** The employee is covered under the scheme from the **first day** of their insurable employment in a covered establishment.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Documents Required from the Employer/Establishment",
      content: {
        title: "Documents Required from the Employer/Establishment",
        items: [
          "**Proof of Registration for the Establishment:** ",
          "Certificate of Registration under Factories Act or Shops & Establishments Act.",
          "Registration Certificate for Partnership Firms, LLP, or Companies (Partnership Deed, Certificate of Incorporation, MOA & AOA).",
          "Trust Deed (for Trusts). ",
          "**PAN Card:** ",
          "PAN Card of the Company/Firm/Establishment.",
          "PAN Cards of all Directors/Partners/Proprietor. ",
          "**Address Proof of the Establishment:** ",
          "Utility bills (electricity, water, telephone) no older than 2 months.",
          "Rent Agreement (if applicable). ",
          "**Bank Account Details:** ",
          "Cancelled cheque of the establishment\\'s bank account.",
          "Bank Statement. ",
          "**List of Directors/Partners/Proprietor:** ",
          "Full names, addresses, and contact details. ",
          "**Employee Details:** ",
          "A complete list of all employees working in the establishment along with their monthly salaries.",
          "Date of joining for each employee. ",
          "**Digital Signature Certificate (DSC):** ",
          "A Class 2 or Class 3 DSC of the authorized signatory is generally required for online submission and authentication.",
        ],
      },
    },
    {
      tabTitle:
        "Documents Required from Employees (for individual registration under ESIC)",
      content: {
        title:
          "Documents Required from Employees (for individual registration under ESIC)",
        items: [
          "**Identity Proof:** ",
          "Aadhaar Card.",
          "PAN Card.",
          "Voter ID.",
          "Passport. ",
          "**Address Proof:** ",
          "Aadhaar Card.",
          "Driving License.",
          "Utility Bills (no older than 2 months). ",
          "**Photograph:** ",
          "Passport-sized photograph of the employee. ",
          "**Family Details:** ",
          "Names and relationship of dependents (spouse, children, dependent parents) for medical benefits. ",
          "**Bank Account Details:** ",
          "Bank account number and IFSC code for direct deposit of cash benefits.",
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
