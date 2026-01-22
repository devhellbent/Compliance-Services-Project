// lib/data/services/pf-registration.ts

import { ServiceData } from "@/lib/types";

export const pfRegistrationData: ServiceData = {
  title: "PF Registration",
  breadcrumb: ["Home", "Registrations", "PF Registration"],
  overview: `PF registration refers to the mandatory enrollment of an establishment under the **Employees\' Provident Fund and Miscellaneous Provisions Act, 1952**. This registration is administered by the **Employees\' Provident Fund Organisation (EPFO)** and becomes compulsory once an organization, including factories and other establishments, crosses a threshold of **20 or more employees**. The primary goal is to ensure the social security and future welfare of the employees by mandating contributions to schemes like the Provident Fund (PF), Pension Scheme (EPS), and Deposit Linked Insurance Scheme (EDLI).

Upon successful registration, the establishment is allotted a unique **PF Code Number**, and its employees are assigned a Universal Account Number (UAN). The employer and employee each contribute a specified percentage (currently **12% of basic wages plus Dearness Allowance**) towards the PF and pension funds. This process ensures compliance with Indian labour laws, provides retirement benefits to workers, and allows the organization to file monthly returns and manage employee accounts digitally through the EPFO portal.

## **Contribution Structure**

For establishments with 20 or more employees (where the scheme is mandatory):

-   **Employee Contribution:** **12%** of the employee\'s Basic Wages plus Dearness Allowance (DA) goes entirely into the **EPF** account.

-   **Employer Contribution:** Also **12%** of Basic Wages plus DA, which is split as follows:

-   **3.67%** goes to the **EPF** account.

-   **8.33%** goes to the **EPS** (Pension) account (subject to a maximum salary ceiling).

This combined contribution accumulates with an annual interest rate, declared by the government, creating a substantial retirement fund for the employee.`,
  advantages: [
    {
      icon: "CheckCircle",
      title: "of PF Registration",
      text: "1.  **Employee Financial Security:** The most significant advantage is the creation of a substantial **retirement corpus** for employees through mandatory, regular savings. This ensures financial stability post-retirement and provides a safety net during emergencies. 2.  **Pension and Insurance Benefits:** Registration automatically includes employees in the **Employees\\' Pension Scheme (EPS)**, providing a monthly pension, and the **Employees\\' Deposit Linked Insurance Scheme (EDLI)**, offering life insurance coverage to nominees in case of death while in service. 3.  **Mandatory Legal Compliance:** For employers with **20 or more employees**, PF registration is a **legal requirement** under the EPF Act, 1952. Compliance helps avoid legal penalties, interest charges, and potential prosecution by the EPFO. 4.  **Tax Benefits:** Both employer and employee contributions to PF are eligible for **tax benefits**. Employer contributions are deductible as a business expense, while employee contributions qualify for deductions under Section 80C of the Income Tax Act. 5.  **Enhanced Reputation & Retention:** Adhering to PF regulations demonstrates a commitment to employee welfare, which can significantly **boost company reputation**, aid in **talent attraction**, and improve employee morale and retention.",
    },
  ],
  disadvantages: [
    {
      icon: "CheckCircle",
      title: "and Challenges of PF Registration",
      text: "1.  **Financial Burden on Employer:** Employers bear a significant financial responsibility as they must contribute **12% of basic wages plus DA** for each eligible employee to the PF account, in addition to administrative charges. This adds to the overall operational cost. 2.  **Administrative Compliance:** Employers are responsible for a range of administrative tasks, including timely registration, accurate monthly calculations and remittances, filing of **Electronic Challan-cum-Return (ECR)**, and managing employee UANs and KYC. This requires dedicated resources and attention. 3.  **Strict Penalties for Non-Compliance:** Failure to register, make timely contributions, or file accurate returns can lead to **heavy financial penalties**, interest on delayed payments, and even **legal action** against the employer, posing a significant risk. 4.  **Limited Employee Liquidity:** While a long-term benefit, the mandatory nature of PF contributions reduces the immediate take-home salary for employees, which some might view as a disadvantage, especially for those with immediate financial needs. 5.  **Complexity for Small Businesses:** While mandatory for 20+ employees, the administrative and financial complexities can be challenging for growing small and medium-sized enterprises (SMEs) that may not have dedicated HR/compliance teams.",
    },
  ],
  eligibility: [
    {
      title:
        "The eligibility criteria for PF (Provident Fund) registration are",
      items: [
        "divided into two main categories: criteria for the     Employer/Establishment to become covered under the Act, and criteria     for the Employee to become a member of the scheme.    Here are the eligible criteria for both:",
      ],
    },
    {
      title: "Employer (Establishment) Eligibility Criteria",
      items: [
        "**Mandatory Coverage:** An establishment (factory, shop, or any notified entity) must register with the EPFO if it employs **20 or more persons**. This count includes all types of employees (permanent, contractual, casual, etc.).",
        "**Continuing Liability:** Once an establishment registers under the Act, it remains compulsorily covered, even if the number of employees subsequently drops below 20.",
        "**Voluntary Coverage:** Establishments with **fewer than 20 employees** can opt for **voluntary registration** if both the employer and the majority of the employees agree to be covered by the PF scheme.",
      ],
    },
    {
      title: "Employee (Membership) Eligibility Criteria",
      items: [
        "**Mandatory Membership:** Employees whose **Basic Wages plus Dearness Allowance (DA)** is **up to \u20b915,000 per month** at the time of joining the establishment are *compulsorily* enrolled as members.",
        "**Continuation of Membership:** If an employee was previously a member of the EPF scheme and has a **Universal Account Number (UAN)**, they **must continue to be enrolled** in the new establishment, irrespective of their current salary.",
        "**Voluntary Contribution (Above Ceiling):** Employees whose Basic Wages plus DA **exceeds \u20b915,000 per month** at the time of joining are not mandatorily covered. However, they can join the scheme if both the employer and the employee agree and notify the EPFO.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Establishment Identification & Legal Status",
      content: {
        title: "Establishment Identification & Legal Status",
        items: [
          "**Permanent Account Number (PAN) Card:** Mandatory for the business entity. This is a core identifier for all government compliances.",
          "**Proof of Establishment Registration:** Any one of the following official documents proving the legal existence and address of the business: ",
          "**GST Registration Certificate**",
          "**Shop and Establishment Act Registration Certificate**",
          "**Factory License**",
          "**MSME (Udyam) Registration Certificate**",
          "**Certificate of Incorporation** (for Companies) / **Partnership Deed** (for Partnership Firms)",
          "Any other government-issued license or certificate confirming the business\\'s operation. ",
          "**Date of Commencement of Business:** The exact date when the establishment began its operations.",
          "**Address Proof of the Establishment:** A utility bill (Electricity, Water, or Telephone Bill) not older than two months, or a Rent/Lease Agreement for the business premises.",
        ],
      },
    },
    {
      tabTitle: "Details of Proprietor/Partners/Directors/Authorized Signatory",
      content: {
        title: "Details of Proprietor/Partners/Directors/Authorized Signatory",
        items: [
          "**Aadhaar Card and PAN Card:** Copies of the Aadhaar and PAN for the Proprietor (for proprietorships), all Partners (for partnership firms), or all Directors (for companies), as applicable.",
          "**Digital Signature Certificate (DSC):** A valid **Class 2 or Class 3 DSC** of the Authorized Signatory is required to digitally sign and submit the online application on the Shram Suvidha Portal.",
        ],
      },
    },
    {
      tabTitle: "Bank Account Details",
      content: {
        title: "Bank Account Details",
        items: [
          "**Bank Account Proof:** A scanned copy of a **Cancelled Cheque** of the establishment\\'s active bank account. This cheque must clearly show the bank\\'s name, branch, IFSC code, and the entity\\'s name. Alternatively, the first page of the Bank Passbook or a recent Bank Statement showing these details can be submitted.",
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
