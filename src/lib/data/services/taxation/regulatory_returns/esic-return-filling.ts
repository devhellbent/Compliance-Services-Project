import { ServiceData } from "@/lib/types";

export const esicReturnFillingData: ServiceData = {
  title: "ESIC Return Filing",
  breadcrumb: ["Home", "Taxation", "Regulatory Return Filing", "ESIC Return Filing"],
  description:
    "ESIC Return Filing is the mandatory online process where employers submit a comprehensive report of contributions to the Employees' State Insurance Corporation.",
  overview: `ESIC Return Filing is the mandatory online process where employers submit a comprehensive report of contributions to the Employees' State Insurance Corporation. This filing documents the monthly 4% contribution (3.25% from the employer and 0.75% from the employee) deducted from the gross wages of eligible workers.

In 2026, returns are filed bi-annually: the April–September period is due by November 11th, and the October–March period by May 12th. Timely filing ensures that employees maintain uninterrupted access to medical, maternity, and disability benefits while shielding employers from steep interest penalties and legal scrutiny.

### ESIC Contribution Breakdown

| Contributor | Share | Source |
| --- | --- | --- |
| Employee Share | 0.75% | Deducted from employee's monthly gross wages |
| Employer Share | 3.25% | Paid by the company as additional cost |
| Total | 4.00% | Deposited into ESIC portal by the 15th of the next month |

### New "Wage Definition" (2026 Rules)

Under the Code on Social Security, the **50% Rule** applies: Basic Pay + DA must comprise at least 50% of total CTC. If allowances exceed 50%, the excess is added back to "Wages" for ESI calculation, ensuring more employees fall under the safety net.`,
  advantages: [
    { icon: "ShieldCheck", title: "Legal Immunity (Employer)", text: "Once an employee is registered and returns are filed, you are protected from the Workmen's Compensation Act. You are no longer personally liable for medical costs or compensation if an employee is injured on the job." },
    { icon: "Ban", title: "Avoidance of Penalties (Employer)", text: "Timely filing saves you from a 12% p.a. interest charge and penal damages that can go up to 25% of the contribution amount." },
    { icon: "Receipt", title: "Tax Deductions (Employer)", text: "Under Budget 2026, ESI contributions are only tax-deductible if deposited by the 15th of the month. Late payments can be 'disallowed,' increasing your taxable income." },
    { icon: "Eye", title: "Operational Smoothness (Employer)", text: "Regular filing keeps your establishment in the 'Green Zone,' reducing the likelihood of surprise inspections or audits by ESIC authorities." },
    { icon: "Heart", title: "Full Medical Care (Employee)", text: "Filing ensures the employee and their family have access to over 150+ ESIC hospitals for everything from OPD visits to major surgeries." },
    { icon: "Wallet", title: "Cash Benefits (Employee)", text: "Validates eligibility for Sickness Benefit (70% of wages during illness) and Maternity Benefit (100% of wages for 26 weeks)." },
    { icon: "Umbrella", title: "Unemployment Cover (Employee)", text: "If an employee is laid off, they can claim up to 50% of average salary for 90 days — only if past return records are clean." },
    { icon: "Users", title: "Dependents' Security (Employee)", text: "In case of employment-related death, the family receives a lifetime monthly pension, provided returns were filed correctly." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "Steep Late Payment Penalties", text: "12% p.a. interest and penal damages up to 25% of contribution for delays. Automated calculations in 2026 make penalties unavoidable." },
    { icon: "Clock", title: "Strict Monthly Payment Deadline", text: "Contributions must be deposited by the 15th of every month, with bi-annual return filing deadlines in May and November." },
    { icon: "FileWarning", title: "Mandatory Nil Returns", text: "Even if all employees earn above ₹21,000, registered establishments must still file 'NIL Returns' every period." },
    { icon: "Fingerprint", title: "Aadhaar Seeding Mandatory", text: "In 2026, Aadhaar of the Insured Person and their dependents must be seeded for seamless filing and hospital access." },
  ],
  eligibility: [
    {
      title: "Establishment Eligibility (Employer)",
      items: [
        "**Employee Count:** Any establishment with 10 or more employees must register (some states: 20 employees).",
        "**Sector Type:** Factories, shops, hotels, restaurants, cinemas, newspaper establishments, educational and medical institutions.",
        "**Auto-Registration:** Businesses incorporated after Feb 23, 2020 via MCA portal (SPICe+) are often auto-registered.",
      ],
    },
    {
      title: "Employee Eligibility (Who to Include)",
      items: [
        "**Wage Ceiling:** Gross monthly salary ₹21,000 or less.",
        "**Persons with Disabilities (PWD):** Wage ceiling of ₹25,000 per month.",
        "**Budget 2026 Alert:** Government reviewing proposal to hike limit to ₹30,000.",
        "**Aadhaar Seeding:** Mandatory for Insured Person and dependents in 2026.",
        "**Daily Wage Exemption:** Employees earning ≤ ₹176/day are exempt from their 0.75% share, but employer must still pay 3.25%.",
      ],
    },
    {
      title: "Nil Returns",
      items: [
        "Registered establishments with zero eligible employees must still file mandatory 'NIL Returns' for each period.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Monthly ECR Data",
      content: {
        title: "Mandatory Data for Monthly Filing (ECR)",
        items: [
          "**Insured Person (IP) Numbers:** Unique 10-digit ID for every eligible employee.",
          "**Attendance Records:** Total number of 'Paid Days' for the month.",
          "**Gross Wages:** Total salary including Basic, DA, HRA, and other monthly allowances.",
          "**Employee & Employer Share:** Calculated amounts (0.75% and 3.25% respectively).",
          "**New Joiner Details:** Name, Date of Birth, Date of Joining, and Aadhaar Number.",
        ],
      },
    },
    {
      tabTitle: "Statutory Registers",
      content: {
        title: "Statutory Registers (Audit-Ready)",
        items: [
          "**Form 6 (Register of Employees):** All employees, insurance numbers, and month-wise contribution details.",
          "**Form 11 (Accident Book):** Record of workplace injuries (even 'Nil' if zero accidents).",
          "**Wage/Salary Register:** To reconcile gross wages with actual payroll.",
          "**Inspection Book:** Used by ESI authorities during premises visits.",
        ],
      },
    },
    {
      tabTitle: "Digital Authentication",
      content: {
        title: "Digital Authentication & Compliance",
        items: [
          "**CA Certificate:** Required if establishment employs 40+ employees during half-yearly return.",
          "**Digital Signature Certificate (DSC):** For authorized signatory to approve and submit returns.",
          "**Monthly Challans & Receipts:** Save every TRRN and payment confirmation receipt as proof of deposit.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Login to ESIC Unified Portal", description: "Access the portal using establishment credentials." },
    { step: 2, title: "Register New Employees", description: "Register new joiners with Aadhaar, photo, and bank details to generate IP numbers." },
    { step: 3, title: "Upload Monthly Contribution", description: "Upload ECR file with wages, attendance, and contribution data by the 15th of each month." },
    { step: 4, title: "Generate Challan & Pay", description: "Generate the TRRN and complete payment via Net Banking." },
    { step: 5, title: "File Half-Yearly Return", description: "Submit the bi-annual return (Apr-Sep by Nov 11; Oct-Mar by May 12) with all statutory registers." },
    { step: 6, title: "Download Receipts", description: "Save payment receipts and contribution statements for audit records." },
  ],
  fees: [
    { component: "Government Filing Fee", fees: "NIL", remarks: "No filing fee on the ESIC portal." },
    { component: "Employee Contribution", fees: "0.75% of gross wages", remarks: "Deducted from employee's salary." },
    { component: "Employer Contribution", fees: "3.25% of gross wages", remarks: "Paid by the company as additional cost." },
    { component: "Late Payment Interest", fees: "12% p.a.", remarks: "For every day of delay past the 15th." },
    { component: "Penal Damages", fees: "5% – 25%", remarks: "Based on duration of delay (5% for <2 months, up to 25% for >6 months)." },
    { component: "Professional Service (Small)", fees: "₹1,000 – ₹3,000/month", remarks: "For businesses with 10-25 employees." },
    { component: "Professional Service (Large)", fees: "₹3,000 – ₹8,000/month", remarks: "For businesses with 50+ employees." },
  ],
  faqs: [
    { q: "When are ESIC returns due?", a: "Returns are filed bi-annually: April–September period by November 11th, and October–March period by May 12th. Monthly contributions are due by the 15th." },
    { q: "What is the ESIC wage ceiling?", a: "₹21,000 per month for regular employees and ₹25,000 for persons with disabilities. Government is reviewing a hike to ₹30,000." },
    { q: "Do I need to file if all employees earn above ₹21,000?", a: "Yes. Registered establishments must file 'NIL Returns' even if no employees are currently eligible." },
    { q: "What benefits do employees get from ESIC?", a: "Full medical care at 150+ hospitals, sickness benefit (70% wages), maternity benefit (100% wages for 26 weeks), unemployment cover, and dependents' pension." },
  ],
};
