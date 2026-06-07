import { ServiceData } from "@/lib/types";

export const tdsReturnFilingData: ServiceData = {
  title: "TDS Return Filing",
  breadcrumb: ["Home", "Taxation", "Regulatory Return Filing", "TDS Return Filing"],
  description:
    "TDS Return Filing is a mandatory quarterly statement submitted to the Income Tax Department by any person or business that has deducted tax while making payments.",
  overview: `TDS Return Filing is a mandatory quarterly statement submitted to the Income Tax Department by any person or business that has deducted tax while making payments. It serves as a detailed record linking the tax deposited with the specific PAN of the recipient, ensuring they receive credit for the tax paid on their behalf.

For AY 2026-27, these returns (Forms 24Q, 26Q, etc.) must be filed by the end of the month following each quarter. Timely filing is essential; it updates the recipient's Form 26AS/AIS, allowing them to claim tax credits or refunds while shielding the deductor from late fees of ₹200 per day.

### What is TDS?

TDS (Tax Deducted at Source) is a "pay-as-you-earn" mechanism used by the Indian government to collect income tax at the origin of a transaction. The payer (deductor) subtracts a specific percentage before making payments like salary, rent, or interest, remitting it directly to the government on the recipient's (deductee) behalf.

### Purpose of TDS Return Filing

- **For the Recipient:** Updates Form 26AS and AIS with tax credits, enables refund claims, and generates Form 16/16A for loans and visas.
- **For the Business:** Proves statutory compliance, protects expense deductions (Section 40(a)(ia)), and identifies errors early.
- **For the Government:** Tracks income at source, ensures steady revenue, and widens the tax base by bringing non-filers into the system.`,
  advantages: [
    { icon: "Clock", title: "Avoidance of Late Fees (Deductor)", text: "Filing on time saves you from the mandatory late fee of ₹200 per day under Section 234E. This fee can quickly accumulate to equal the total tax amount deducted." },
    { icon: "ShieldCheck", title: "Prevention of Interest & Penalties (Deductor)", text: "Timely filing avoids additional interest (1.5% per month) on delayed deposits and heavy penalties (up to ₹1 Lakh) under Section 271H." },
    { icon: "Receipt", title: "Business Expense Deduction (Deductor)", text: "If you fail to deduct or file TDS, the Income Tax Department can disallow 30% of your business expenses under Section 40(a)(ia). Filing correctly protects your deductions." },
    { icon: "Landmark", title: "Enhanced Financial Credibility (Deductor)", text: "Clean TDS records are required by banks for loan approvals and by government bodies for awarding tenders. Reflects high financial discipline and transparency." },
    { icon: "FileCheck", title: "Seamless Tax Credit (Deductee)", text: "Your filing pushes tax credit into the recipient's Form 26AS and AIS. Without the return, they cannot prove they have already paid tax on that income." },
    { icon: "Zap", title: "Faster Income Tax Refunds (Deductee)", text: "If an employee or vendor is due a refund, they can only receive it once your TDS return is processed. Timely filing speeds up their refund cycle." },
    { icon: "ClipboardCheck", title: "Ease of ITR Filing (Deductee)", text: "When TDS data is pre-filled in their Income Tax Return, it reduces administrative burden and prevents 'mismatch' notices from the tax department." },
    { icon: "Award", title: "Proof of Income (Deductee)", text: "TDS certificate (Form 16/16A) generated after return filing serves as vital legal proof of income for visa applications and personal loans." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "₹200/Day Late Fee", text: "Under Section 234E, ₹200 per day is charged for every day of delay. The total cannot exceed the TDS amount but can accumulate rapidly." },
    { icon: "Wallet", title: "30% Expense Disallowance", text: "Under Section 40(a)(ia), failing to deduct or file TDS results in 30% of business expenses being disallowed, increasing taxable income." },
    { icon: "Gavel", title: "Penalty up to ₹1 Lakh", text: "Under Section 271H, failure to file TDS returns within one year of the due date can attract a penalty between ₹10,000 and ₹1,00,000." },
    { icon: "Percent", title: "Monthly Interest on Delays", text: "Late deduction: 1% per month. Late deposit: 1.5% per month from date of deduction to date of actual deposit." },
  ],
  eligibility: [
    {
      title: "Who is Eligible (and Required) to File?",
      items: [
        "**Corporate Entities:** All private and public limited companies.",
        "**Government Offices:** All central and state government departments/offices.",
        "**Individuals & HUFs:** Mandatory if accounts were subject to Tax Audit (u/s 44AB) in preceding year.",
        "**Other Entities:** Partnership firms, AOPs, BOIs, and local authorities.",
      ],
    },
    {
      title: "Transaction Thresholds for 2026",
      items: [
        "**Salary (Section 192):** If employee's taxable income exceeds ₹3,00,000 (New Tax Regime).",
        "**Professional Fees (Section 194J):** Payments to a professional exceeding ₹30,000 annually.",
        "**Rent (Section 194I):** Total rent paid exceeding ₹2,40,000 per year.",
        "**Contractual Payments (Section 194C):** Single payment > ₹30,000 or aggregate > ₹1,00,000.",
        "**Purchase of Goods (Section 194Q):** Purchases from a single vendor exceeding ₹50 Lakhs.",
      ],
    },
    {
      title: "Essential Pre-requisites",
      items: [
        "**Valid TAN:** 10-digit Tax Deduction and Collection Account Number (mandatory — cannot file using PAN).",
        "**Deductee's PAN:** Without PAN, must deduct at higher rate (usually 20%).",
        "**Challan Details:** BSR Code, Date of Deposit, and Challan Serial Number.",
        "**Digital Signature (DSC):** Required for corporate and audited assessees.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Deductor Information",
      content: {
        title: "Essential Deductor Information",
        items: [
          "**TAN:** 10-digit alphanumeric number mandatory for all forms.",
          "**PAN:** Permanent Account Number of the deductor/business.",
          "**Digital Signature Certificate (DSC):** Required for corporate deductors and tax audit cases.",
          "**Authorized Signatory Details:** Name, father's name, and designation.",
        ],
      },
    },
    {
      tabTitle: "Payment & Challan",
      content: {
        title: "Payment & Challan Details",
        items: [
          "**BSR Code:** 7-digit code of the bank branch where tax was deposited.",
          "**Challan Serial Number:** 5-digit number from the deposit receipt.",
          "**Date of Deposit:** Exact date the money left your account.",
          "**Challan Identification Number (CIN):** Combination used to 'consume' the challan on portal.",
        ],
      },
    },
    {
      tabTitle: "Deductee Information",
      content: {
        title: "Deductee (Recipient) Information",
        items: [
          "**PAN of the Deductee:** Most critical data point. Ensure PAN is linked with Aadhaar in 2026.",
          "**Nature of Payment:** Section under which tax was deducted (194J, 194C, etc.).",
          "**Gross Amount:** Total amount paid/credited before deduction.",
          "**TDS Amount:** Actual tax deducted.",
          "**Date of Payment/Credit:** Date the transaction occurred.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Obtain TAN", description: "Apply for Tax Deduction and Collection Account Number if you don't have one." },
    { step: 2, title: "Deduct Tax at Source", description: "Deduct the applicable TDS percentage from payments to employees, vendors, landlords, etc." },
    { step: 3, title: "Deposit via Challan 281", description: "Deposit the deducted TDS to the government by the 7th of the following month using Challan ITNS 281." },
    { step: 4, title: "Prepare TDS Return", description: "Use RPU (Return Preparation Utility) to create the return file with all deductee records and challan details." },
    { step: 5, title: "Validate with FVU", description: "Validate the prepared file using File Validation Utility (FVU) to check for errors." },
    { step: 6, title: "Submit & Verify", description: "Upload the validated FVU file on the TRACES/TIN portal and verify using DSC." },
  ],
  fees: [
    { component: "Government Filing Fee", fees: "NIL", remarks: "No direct filing fee on the Income Tax portal." },
    { component: "TIN-FC Processing Fee", fees: "Varies by records", remarks: "Processing fees based on number of deductee records if filing through TIN Facilitation Centre." },
    { component: "Small Business (≤10 employees)", fees: "₹1,000 – ₹2,500/quarter", remarks: "Professional CA fees." },
    { component: "Medium Business (10-50 employees)", fees: "₹3,000 – ₹5,000/quarter", remarks: "Professional CA fees." },
    { component: "Property Purchase (26QB)", fees: "₹800 – ₹2,000", remarks: "One-time per return." },
    { component: "Correction Returns", fees: "₹500 – ₹1,500", remarks: "Per revision." },
    { component: "Late Fee (Section 234E)", fees: "₹200/day", remarks: "Cannot exceed total TDS amount. Must be paid before filing late return." },
    { component: "Interest - Late Deduction", fees: "1% per month", remarks: "From date tax was deductible to date actually deducted." },
    { component: "Interest - Late Deposit", fees: "1.5% per month", remarks: "From date of deduction to date of actual deposit." },
  ],
  faqs: [
    { q: "What forms are used for TDS return filing?", a: "Form 24Q for salary TDS, Form 26Q for non-salary TDS, Form 27Q for NRI payments, Form 26QB for property purchase, and Form 26QC for rent." },
    { q: "What is the TDS return filing deadline?", a: "Quarterly — by the end of the month following each quarter (July 31, Oct 31, Jan 31, May 31)." },
    { q: "What happens if I don't file TDS returns?", a: "Late fee of ₹200/day (Section 234E), penalty of ₹10,000 to ₹1,00,000 (Section 271H), and 30% expense disallowance (Section 40(a)(ia))." },
    { q: "Can I file without a TAN?", a: "No. A valid TAN is mandatory for filing TDS returns. You cannot use your PAN." },
  ],
};
