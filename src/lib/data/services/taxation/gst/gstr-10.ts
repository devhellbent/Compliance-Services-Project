// lib/data/services/taxation/gst/gstr-10.ts

import { ServiceData } from "@/lib/types";

export const gstr10Data: ServiceData = {
  title: "GSTR-10 Final Return",
  breadcrumb: ["Home", "Taxation", "GSTR-10 Final Return"],
  description:
    "GSTR-10, known as the Final Return, is a mandatory one-time filing for taxpayers whose GST registration has been surrendered or cancelled.",
  overview: `GSTR-10, known as the Final Return, is a mandatory one-time filing for taxpayers whose GST registration has been surrendered or cancelled. Unlike the annual GSTR-9, this return ensures that all remaining tax liabilities on held stock and capital goods are settled before the business formally exits the GST regime.

The return must be filed within three months of the cancellation date or the issuance of the cancellation order, whichever is later. Failure to file GSTR-10 results in a late fee of ₹200 per day, capped at a maximum of ₹10,000.

### Purpose of the GSTR-10 Return Filing

The primary purpose of GSTR-10 is to act as a "final settlement" between the taxpayer and the government. It ensures that no tax-paid benefits (Input Tax Credit) remain with a business once it exits the GST network.

#### Closing the Tax Credit Loop
When you buy goods for business, you claim Input Tax Credit (ITC). If you close your business while still holding that stock, the government requires you to "pay back" that credit. GSTR-10 captures the details of:
*   Inputs held in stock (Raw materials).
*   Inputs contained in semi-finished or finished goods.
*   Capital goods or plant and machinery.

#### Declaring Final Liabilities
It serves as a formal declaration of any tax due on the assets remaining with the business on the date of cancellation. You must pay an amount equal to the ITC involved in those stocks or the output tax on the market value of those goods, whichever is higher.

#### Preventing Revenue Loss
Without GSTR-10, a taxpayer could theoretically buy large amounts of stock, claim the ITC to offset other taxes, and then vanish by cancelling their registration. This return ensures the government recovers the tax benefit on any unsold items.

#### Legal Discharge of GSTIN
Filing GSTR-10 is the final step in the "de-registration" process. Successfully submitting this return formally closes your record in the GST database, prevents future automatic notices for non-filing, and protects the taxpayer from heavy penalties and legal recovery actions later.`,
  advantages: [
    {
      icon: "Shield",
      title: "Legal Closure of GSTIN Profile",
      text: "Filing GSTR-10 successfully terminates your relationship with the GST department, ensuring no future scrutiny or 'non-compliance' notices are sent to your PAN.",
    },
    {
      icon: "ShieldAlert",
      title: "Protection from 'Best Judgment' Assessment",
      text: "Prevents tax authorities from estimating your tax liability under Section 62 and issuing a high demand order based on their assumptions about your closing stock.",
    },
    {
      icon: "Wallet",
      title: "Avoidance of Draconian Late Fees",
      text: "Prevents the automatic accumulation of the ₹200 per day late fee, which starts immediately after the three-month deadline and is capped at ₹10,000.",
    },
    {
      icon: "Award",
      title: "Clean PAN-India Compliance Record",
      text: "Ensures your corporate history remains untarnished, allowing you to apply for new business licenses or GST registrations in the future without existing blocks.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertCircle",
      title: "Mandatory ITC Reversal Cost",
      text: "Taxpayers must pay back the Input Tax Credit (ITC) on all closing stock and capital goods held on the cancellation date, which can lead to a significant final cash outflow.",
    },
    {
      icon: "XCircle",
      title: "No Option for Revision",
      text: "Once the 'Final Return' is submitted, it cannot be revised. Any clerical errors in the valuation of assets or tax payments are permanent and cannot be corrected.",
    },
    {
      icon: "Clock",
      title: "Strict 3-Month Deadline",
      text: "The tight three-month filing window from the date of the cancellation order requires rapid inventory audits and financial finalization, which can be stressful for closing businesses.",
    },
  ],
  eligibility: [
    {
      title: "Mandatory Filing Triggers",
      items: [
        "**Voluntary Surrender:** Business closed or turnover fell below the threshold, and you requested cancellation.",
        "**Suo Moto Cancellation:** The GST department cancelled the registration due to non-filing of returns or other defaults.",
        "**Business Transfer:** If the business is sold, merged, or the owner has deceased, the old GSTIN must be closed via GSTR-10.",
      ],
    },
    {
      title: "Pre-conditions for Filing",
      items: [
        "**Status:** The GSTIN must already be in 'Cancelled' or 'Suspended' status on the portal.",
        "**Form REG-19:** You must have received the official Cancellation Order from the tax department.",
        "**Periodic Filing:** All regular GSTR-1 and GSTR-3B returns must be filed up to the date of cancellation.",
      ],
    },
    {
      title: "Who is Specifically Exempt?",
      items: [
        "**Composition Taxpayers:** They are not required to file GSTR-10.",
        "**Non-Resident Taxpayers:** NRTPs are exempt from this specific final return.",
        "**Input Service Distributors (ISD):** This return does not apply to ISD registrations.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Cancellation Data",
      content: {
        title: "Official basis for filing",
        items: [
          "GST Cancellation Order (Form REG-19): Showing the effective date of closure.",
          "Application Reference Number (ARN) of the cancellation request (if voluntary).",
          "Login credentials for the 'Cancelled' GSTIN portal.",
        ],
      },
    },
    {
      tabTitle: "Asset Valuation",
      content: {
        title: "Stock and capital goods proof",
        items: [
          "Closing Stock Register: Details of raw materials, semi-finished, and finished goods on hand.",
          "Capital Goods Invoices: Original bills for machinery or computers to calculate depreciated value.",
          "Chartered Accountant Certificate: Mandatory if the value of stock is above ₹2 Lakhs and original invoices are missing.",
        ],
      },
    },
    {
      tabTitle: "Ledger Proofs",
      content: {
        title: "Tax payment records",
        items: [
          "Electronic Credit Ledger: To verify available ITC for offsetting final liabilities.",
          "Electronic Cash Ledger: Balance used for paying interest or late fees.",
          "Final Bank Statement: Closing statement of the business bank account.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Verification of Cancellation Order",
      description: "Confirm that you have received the REG-19 order and check the 'Effective Date of Cancellation' specified by the officer.",
    },
    {
      step: 2,
      title: "Physical Stock Audit",
      description: "Conduct a final physical audit of all remaining inventory and fixed assets held on the date of cancellation.",
    },
    {
      step: 3,
      title: "ITC Reversal Calculation",
      description: "Calculate the exact amount of tax to be paid back on the closing assets as per the 'ITC Reversal' rules of the GST Act.",
    },
    {
      step: 4,
      title: "Form GSTR-10 Preparation",
      description: "Enter the inventory details and tax liabilities into the GSTR-10 form on the GST portal before the 3-month deadline.",
    },
    {
      step: 5,
      title: "Final Payment and Submission",
      description: "Pay the net tax liability using available ITC or cash and submit the return using DSC or Aadhaar-based OTP.",
    },
  ],
  fees: [],
  feesMarkdown: `
Filing GSTR-10 late attracts a fixed daily penalty, making timely submission critical for businesses shutting down.

### Professional Fee Structure (De-registration)

| Compliance Service | Applicability | Estimated Professional Fee | Key Factors Affecting Cost |
| --- | --- | --- | --- |
| GSTR-10 Final Return | Mandatory for all cancelled GSTINs | ₹3,000 – ₹7,500 | Volume of closing stock. |
| CA Certificate (Stock) | Mandatory for stock >₹2 Lakhs | ₹2,500 – ₹5,000 | Valuation complexity. |
| Cancellation Response | Response to REG-17 notices | ₹1,500 – ₹3,500 | Legal justification complexity. |
| Books Closing Review | End-of-life accounting | ₹5,000 – ₹15,000 | Record quality. |

### Statutory Government Penalties

| Penalty Component | Rate | Maximum Penalty Cap |
| --- | --- | --- |
| Daily Late Fee | ₹200 (₹100 CGST + ₹100 SGST) | ₹10,000 |
| Interest on Unpaid Tax | 18% per annum | No Upper Limit |
`,
  faqs: [
    {
      q: "What is the time limit for filing GSTR-10?",
      a: "It must be filed within **3 months** from the date of cancellation OR the date of the cancellation order, whichever is later.",
    },
    {
      q: "What happens if I don't file GSTR-10?",
      a: "The portal will levy a **₹200/day late fee** (up to ₹10,000) and the department may issue a notice for recovery of tax on estimated closing stock.",
    },
    {
      q: "Is it required if I move from Regular to Composition?",
      a: "No. GSTR-10 is only for **total cancellation** of registration. Moving to Composition requires filing **Form ITC-03** instead.",
    },
  ],
};
