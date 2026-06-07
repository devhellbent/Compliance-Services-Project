import { ServiceData } from "@/lib/types";

export const pfReturnFillingData: ServiceData = {
  title: "PF Return Filing",
  breadcrumb: ["Home", "Taxation", "Regulatory Return Filing", "PF Return Filing"],
  description:
    "PF Return Filing is the digital process of submitting a detailed monthly report (ECR) to the EPFO, documenting contributions made by both employer and employee.",
  overview: `A Provident Fund (PF) is a government-managed social security system designed to provide financial stability after retirement. It functions as a compulsory, interest-bearing savings tool where a portion of your monthly income is set aside. Over your working years, these contributions—along with accrued interest—accumulate into a substantial lump sum.

For salaried employees, the Employee Provident Fund (EPF) involves mandatory contributions from both you and your employer. Conversely, the Public Provident Fund (PPF) is a voluntary scheme open to all citizens, including the self-employed. In 2026, both offer high safety and significant tax benefits.

### Types of Provident Funds

- **EPF (Employee Provident Fund):** Mandatory for salaried employees in the private sector (for firms with 20+ employees).
- **PPF (Public Provident Fund):** A voluntary scheme open to all Indian citizens with a 15-year tenure.
- **GPF (General Provident Fund):** Specifically for government employees.

### PF Contribution Breakdown

| Component | Contribution Rate | Contributed By | Destination Account |
| --- | --- | --- | --- |
| Employee Share | 12% | Employee | Your EPF Account |
| Employer Share | 3.67% | Employer | Your EPF Account |
| Pension Fund | 8.33% | Employer | EPS (Pension) Account |
| Insurance | 0.50% | Employer | EDLI (Life Insurance) |
| Admin Charges | 0.50% | Employer | EPFO Admin (Misc) |

The Pension contribution (8.33%) is capped at a salary of ₹15,000, meaning the maximum pension deposit is ₹1,250 per month. Any excess is diverted back to the EPF account.`,
  advantages: [
    { icon: "TrendingUp", title: "Continuous Interest Earning", text: "Interest is calculated on the monthly running balance. If the employer delays filing, employees lose out on the compounding effect for that period." },
    { icon: "Zap", title: "Instant Claim Settlement (EPFO 3.0)", text: "In 2026, 95% of advance claims (marriage, medical, etc.) are settled via Auto-Mode. Only possible if monthly returns are updated; otherwise the system rejects the claim." },
    { icon: "FileCheck", title: "Accurate Passbook", text: "Ensures your passbook is always up-to-date, allowing you to use it as a valid financial document for home loans or visa applications." },
    { icon: "ShieldCheck", title: "Insurance Protection (EDLI)", text: "Timely filing keeps the Employee Deposit Linked Insurance active. Nominees can claim life insurance (up to ₹7 Lakh) only if service records are compliant." },
    { icon: "Ban", title: "Avoidance of Damages & Interest", text: "Late payments attract 12% p.a. interest (u/s 7Q) and penal damages ranging from 5% to 25% (u/s 14B). Automated calculations in 2026 make these unavoidable." },
    { icon: "Receipt", title: "Budget 2026 Tax Deduction", text: "Employers can now claim employee's PF contribution as a business expense even with slight delay, provided it is deposited before the ITR filing deadline — major relief from the previous strict timeline." },
    { icon: "Users", title: "Improved Retention & Trust", text: "Transparency in social security contributions is a key metric for 'Great Place to Work' certifications and building a credible corporate image." },
    { icon: "ClipboardCheck", title: "Simplified Audits", text: "Regular filing ensures Statutory and Tax Audits proceed smoothly without discrepancies in the 'Provident Fund Payable' ledgers." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "Steep Penal Damages for Delays", text: "Delay up to 2 months: 5% p.a.; 2-4 months: 10% p.a.; 4-6 months: 15% p.a.; over 6 months: 25% p.a. (up to 100% of contribution)." },
    { icon: "Clock", title: "Strict Monthly Deadline", text: "Must be filed by the 15th of every month. The system automatically calculates penalties for any delay." },
    { icon: "FileWarning", title: "Aadhaar-Seeding Mandatory", text: "The portal rejects ECR entries for non-verified members — all UANs must be Aadhaar-seeded and KYC-verified in 2026." },
  ],
  eligibility: [
    {
      title: "Mandatory Criteria for Establishments",
      items: [
        "**Employee Count:** Employs 20 or more persons (includes permanent, temporary, part-time, and contract workers).",
        "**Continuity Rule:** Once registered under EPF Act, must continue filing even if count falls below 20.",
        "**Industry Specifics:** Certain notified industries (beedi, brick, jute) may register with smaller workforce.",
      ],
    },
    {
      title: "Voluntary Criteria (Small Businesses)",
      items: [
        "**Mutual Consent:** Employer and majority of employees agree to opt in voluntarily.",
        "**Startup Growth:** Many startups register voluntarily with fewer than 10 employees for institutional credibility.",
        "Once registered voluntarily, all compliance rules apply exactly as for mandatory establishments.",
      ],
    },
    {
      title: "Employee Eligibility Criteria",
      items: [
        "**Wage Ceiling:** Mandatory for employees earning Basic + DA of ₹15,000 or less per month.",
        "**2026 Update:** Government finalizing proposal to increase this limit to ₹25,000.",
        "**Excluded Employees:** Those earning above ceiling can still be included with written consent (Section 26(6)).",
        "**UAN & KYC:** Employee must have a Universal Account Number that is Aadhaar-seeded and KYC-verified.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "ECR Upload File",
      content: {
        title: "The Mandatory ECR Upload File",
        items: [
          "**Member UANs:** 12-digit Universal Account Numbers for all active employees.",
          "**Aadhaar-Seeded Status:** Portal only accepts UANs verified with Aadhaar.",
          "**EPF Wages:** Monthly Basic + DA on which contribution is calculated.",
          "**Contribution Breakup:** Employee Share (12%), Employer Share (EPF: 3.67%, Pension/EPS: 8.33%).",
          "**NCP Days:** Non-Contributory Period (days for which no wages were paid).",
          "**New Joiner/Exit Info:** Date of Joining or Date of Leaving with reason code.",
        ],
      },
    },
    {
      tabTitle: "Digital Authentication",
      content: {
        title: "Digital Authentication Documents",
        items: [
          "**Digital Signature Certificate (DSC):** Class 3 DSC registered in the name of the authorized signatory — mandatory for approval.",
          "**E-Sign:** Alternatively, Aadhaar-based e-Sign if authorized signatory's mobile is linked.",
        ],
      },
    },
    {
      tabTitle: "Internal Records",
      content: {
        title: "Internal Documents (For Reconciliation)",
        items: [
          "**Monthly Salary Register:** Detailed payroll sheet showing gross vs. PF wages.",
          "**Challan Payment Receipt:** Download after TRRN is generated and paid via Net Banking.",
          "**Contribution Statement:** PDF generated by portal after approval showing member-wise credits.",
          "**Attendance Records:** To justify 'NCP Days' reported in the return.",
        ],
      },
    },
    {
      tabTitle: "Joiner/Exit Forms",
      content: {
        title: "Forms for New Joiners & Exits",
        items: [
          "**Form 11 (New Declaration):** Collected from new employees to record previous PF history and UAN.",
          "**Form 5 (Additions):** Data for employees who joined during the month.",
          "**Form 10 (Exits):** Data for employees who left, including Reason for Leaving.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Login to EPFO Unified Portal", description: "Access the Unified Portal using your establishment credentials." },
    { step: 2, title: "Prepare ECR File", description: "Generate the ECR text file from your payroll software with all member details, wages, and contributions." },
    { step: 3, title: "Upload ECR", description: "Navigate to 'ECR Upload' section and upload the validated .txt file." },
    { step: 4, title: "Verify & Approve", description: "Review the system-validated data and approve using DSC or e-Sign." },
    { step: 5, title: "Generate TRRN & Pay", description: "Generate the Temporary Return Reference Number and complete payment via Net Banking." },
    { step: 6, title: "Download Receipt", description: "Download the Challan Payment Receipt and Contribution Statement for records." },
  ],
  fees: [
    { component: "PF Admin Charges", fees: "0.50% of EPF wages", remarks: "Minimum ₹500/month (active); ₹75/month (nil returns)." },
    { component: "EDLI Charges (Insurance)", fees: "0.50% of wages", remarks: "Capped at ₹15,000 wage ceiling. Max ₹75/employee/month." },
    { component: "EPFO Portal Usage", fees: "NIL", remarks: "Free for registered employers." },
    { component: "Small Business (1-10 employees)", fees: "₹1,000 – ₹2,500/month", remarks: "Professional service fees." },
    { component: "Medium Business (11-50 employees)", fees: "₹3,000 – ₹6,000/month", remarks: "Professional service fees." },
    { component: "Large Enterprise (50+ employees)", fees: "₹100 – ₹200/employee", remarks: "Per employee monthly fee." },
    { component: "Annual Reconciliation", fees: "₹5,000 – ₹10,000", remarks: "One-time yearly reconciliation." },
    { component: "DSC (2-year validity)", fees: "₹1,500 – ₹3,000", remarks: "Class 3 DSC mandatory for ECR approval." },
  ],
  faqs: [
    { q: "What is the deadline for PF return filing?", a: "The 15th of every month for the previous month's contributions. Missing this triggers automatic interest and penal damages." },
    { q: "What is the penalty for late PF filing?", a: "12% p.a. interest (Section 7Q) plus penal damages: 5% (up to 2 months delay), 10% (2-4 months), 15% (4-6 months), and 25% (over 6 months)." },
    { q: "Is PF mandatory for all businesses?", a: "Mandatory for establishments with 20+ employees. Smaller businesses can register voluntarily with mutual consent." },
    { q: "What is EPFO 3.0?", a: "The 2026 initiative focusing on automated claim settlements and real-time interest credits, enabling 95% of advance claims to be settled automatically." },
  ],
};
