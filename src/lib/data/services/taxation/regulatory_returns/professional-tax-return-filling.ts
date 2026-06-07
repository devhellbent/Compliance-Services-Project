import { ServiceData } from "@/lib/types";

export const professionalTaxReturnFillingData: ServiceData = {
  title: "Professional Tax Return Filing",
  breadcrumb: ["Home", "Taxation", "Regulatory Return Filing", "Professional Tax Return Filing"],
  description:
    "Professional Tax (PT) Return Filing is a mandatory state-level compliance for individuals and businesses earning income through employment or trade, capped at ₹2,500 annually.",
  overview: `Professional Tax (PT) Return Filing is a mandatory state-level compliance in India for individuals and businesses earning income through employment or trade. It involves reporting the tax deducted from employee salaries or paid by self-employed professionals to the respective state government. While governed by the state, the maximum annual tax per individual is constitutionally capped at ₹2,500.

The process primarily covers two certificates: PTRC, where employers deduct and file returns for their staff, and PTEC, where business owners and professionals pay for their own enrollment. Filing frequency (monthly, quarterly, or annual) and slab rates vary by state.

### Purpose of Professional Tax Return Filing

- **Revenue for State Development:** Unlike Income Tax (Central), PT is a primary source of revenue for State Governments, reserved for local infrastructure, welfare schemes, and municipal activities.
- **Legal Proof of Compliance:** Filing provides audit readiness and is a prerequisite for renewing trade licenses or certificates of incorporation.
- **Protection of Business Expenses:** PT paid is allowed as a deduction under Section 16(iii), and maintaining clean PT records improves your financial health score.
- **Employee Trust:** Ensures tax deducted from salary has actually reached the government.`,
  advantages: [
    { icon: "Receipt", title: "Direct Income Tax Savings (Section 16(iii))", text: "The amount of professional tax paid is fully deductible from 'Gross Salary' under Section 16(iii). Even though capped at ₹2,500/year, it reduces net taxable income — particularly beneficial on the borderline of a higher tax bracket." },
    { icon: "Landmark", title: "Business Credibility & Tender Eligibility", text: "Most government contracts and large private sector tenders in 2026 require a Compliance Certificate or proof of PT filing for the last three years. During labor law inspections, PT challans are the first documents requested." },
    { icon: "Ban", title: "Avoidance of Compounding Penalties", text: "PT penalties are 'small but daily' and grow rapidly. Late fees range from ₹1,000 to ₹5,000 depending on state. Interest of 1.25% to 2% per month on unpaid tax. Filing on time prevents paying double the actual tax in penalties." },
    { icon: "FileCheck", title: "Smooth License Renewals", text: "Municipalities check PT compliance before renewing Trade Licenses or Factory Licenses. For professionals (Doctors, CAs, Lawyers), up-to-date PT status is mandatory for annual Certificate of Practice (COP) renewal." },
  ],
  disadvantages: [
    { icon: "MapPin", title: "State-Specific Complexity", text: "Rules, slabs, forms, and deadlines vary significantly by state (Maharashtra, Karnataka, West Bengal, etc.), making multi-state compliance challenging." },
    { icon: "AlertTriangle", title: "Daily Penalties for Delays", text: "Late filing penalties range from ₹200 to ₹5,000 per return. Some states charge ₹5/day for registration delays. Non-payment penalties can reach 10-50% of tax due." },
    { icon: "Calculator", title: "Limited Deduction Under New Regime", text: "Section 16(iii) deduction is primarily available under the Old Tax Regime. The New Tax Regime (default in 2026) prioritizes the ₹75,000 standard deduction over specific exemptions like PT." },
  ],
  eligibility: [
    {
      title: "Who is Liable to Pay?",
      items: [
        "**Salaried Individuals:** Employer is responsible for deducting tax from salary and remitting to state government.",
        "**Self-Employed Professionals:** Doctors, Lawyers, CAs, Architects, Freelancers must register and pay directly.",
        "**Business Entities:** Sole proprietorships, partnership firms, and companies must register and pay both as entity and on behalf of employees.",
      ],
    },
    {
      title: "Registration Certificates",
      items: [
        "**PTEC (Professional Tax Enrolment Certificate):** Required by the business entity or self-employed professional to pay their own tax.",
        "**PTRC (Professional Tax Registration Certificate):** Required by an employer to deduct and remit tax from employee salaries.",
      ],
    },
    {
      title: "Thresholds & Slabs (2026)",
      items: [
        "**Constitutional Cap:** Maximum ₹2,500 per year per person.",
        "**Maharashtra:** Starts for males earning above ₹7,500/month; females earning up to ₹25,000/month often exempt.",
        "**Karnataka:** Applies to those earning above ₹25,000/month.",
        "**West Bengal:** Slabs start from monthly income of ₹10,001.",
      ],
    },
    {
      title: "Exemptions",
      items: [
        "Senior citizens (usually above 60 or 65 years).",
        "Parents or guardians of children with mental or physical disabilities.",
        "Persons with specific permanent physical disabilities (subject to medical certification).",
        "Members of the armed forces under certain state laws.",
      ],
    },
    {
      title: "Filing Frequency & Deadlines",
      items: [
        "**Monthly/Quarterly:** If tax liability exceeds ₹50,000/year in some states.",
        "**Annual:** Smaller businesses or self-employed individuals.",
        "**Due Dates:** Typically by last day of the month for the previous month's tax.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Core Documents",
      content: {
        title: "Core Documents for All Applicants",
        items: [
          "**PAN Card:** Permanent Account Number of individual or business.",
          "**Aadhaar Card:** Of proprietor, partners, or authorized directors.",
          "**Address Proof:** Electricity bill, rent agreement, or property tax receipt.",
          "**Cancelled Cheque:** For bank account verification and refund processing.",
          "**PTRC/PTEC Number:** Professional Tax Registration or Enrolment numbers.",
        ],
      },
    },
    {
      tabTitle: "Employer (PTRC) Documents",
      content: {
        title: "Documents for Employers (PTRC Filers)",
        items: [
          "**Salary Register/Payroll Sheets:** Employee names, gross salary, and PT amount deducted by state slabs.",
          "**Employee Attendance Record:** Required by some states to prove active employment.",
          "**Previous Tax Payment Challans:** Proof that tax was already paid.",
          "**Form 16/TDS Records:** Cross-referenced to ensure salary figures match other filings.",
        ],
      },
    },
    {
      tabTitle: "Self-Employed (PTEC) Documents",
      content: {
        title: "Documents for Self-Employed (PTEC Filers)",
        items: [
          "**Professional Degree/License:** Certificate of practice or registration with professional council.",
          "**Income Statement:** Declaration or balance sheet showing professional income.",
          "**Business Registration:** GST certificate or Shop & Establishment License (Gumastha).",
        ],
      },
    },
    {
      tabTitle: "State-Specific Forms",
      content: {
        title: "State-Specific Forms for Filing",
        items: [
          "**Form III-B:** Common in Maharashtra for monthly/annual returns.",
          "**Form 5 & 6:** Typically used in Karnataka for annual employee details.",
          "**Acknowledgment Receipts:** Previous period's acknowledgment for continuity.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Register for PTRC/PTEC", description: "Apply on your state's Commercial Tax portal (Mahagst, e-Pragati, etc.) for the appropriate registration certificate." },
    { step: 2, title: "Determine Applicable Slabs", description: "Check your state's specific income slabs and tax rates for employees and self-employed professionals." },
    { step: 3, title: "Deduct Monthly Tax", description: "For PTRC holders: deduct PT from each employee's salary as per state-specific slabs." },
    { step: 4, title: "Deposit Tax via Challan", description: "Pay the collected/payable amount through the state portal by the monthly due date." },
    { step: 5, title: "File Return", description: "Submit the periodic return (monthly, quarterly, or annual) on the state portal with payroll details." },
    { step: 6, title: "Download Acknowledgment", description: "Save the acknowledgment receipt for audit and compliance records." },
  ],
  fees: [
    { component: "Professional Tax (Constitutional Cap)", fees: "Max ₹2,500/year", remarks: "Per person, per year across all states." },
    { component: "Maharashtra (Male > ₹10,000)", fees: "₹200/month (₹300 in Feb)", remarks: "Annual total: ₹2,500." },
    { component: "Karnataka (> ₹25,000)", fees: "₹200/month (₹300 in Feb)", remarks: "Annual total: ₹2,500." },
    { component: "Late Filing Fee", fees: "₹200 – ₹5,000", remarks: "Fixed penalty per return depending on state." },
    { component: "Interest on Late Payment", fees: "1.25% – 2% per month", remarks: "On the unpaid tax amount." },
    { component: "Non-Payment Penalty", fees: "10% – 50% of tax due", remarks: "Discretionary. Tamil Nadu: up to 3x the tax for false info." },
    { component: "Registration Delay (Maharashtra)", fees: "₹5/day", remarks: "For every day of delay in obtaining PTRC/PTEC." },
    { component: "Professional Service (PTEC)", fees: "₹1,000 – ₹2,500/year", remarks: "For self-employed professionals." },
    { component: "Professional Service (PTRC)", fees: "₹500 – ₹1,500/month", remarks: "For employers (involves payroll data)." },
  ],
  faqs: [
    { q: "What is Professional Tax?", a: "A state-level tax on individuals earning income through employment or trade, constitutionally capped at ₹2,500 per year per person." },
    { q: "Which states levy Professional Tax?", a: "Maharashtra, Karnataka, West Bengal, Telangana, Andhra Pradesh, Tamil Nadu, Madhya Pradesh, Gujarat, Kerala, Assam, and others. Not all states levy PT." },
    { q: "What is the difference between PTRC and PTEC?", a: "PTRC is for employers (to deduct and remit employee tax). PTEC is for self-employed professionals and business entities to pay their own tax." },
    { q: "Do I still need to file if all employees are exempt?", a: "Yes. If your establishment is registered (has PTRC), you must file 'Nil Returns' even if zero employees are taxable." },
    { q: "Is PT deductible from Income Tax?", a: "Yes. Under Section 16(iii), PT paid is fully deductible from Gross Salary — primarily under the Old Tax Regime." },
  ],
};
