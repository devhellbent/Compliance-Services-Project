// lib/data/services/taxation/gst/gst-return-filing.ts

import { ServiceData } from "@/lib/types";

export const gstReturnFilingData: ServiceData = {
  title: "GST Return Filing",
  breadcrumb: ["Home", "Taxation", "GST Return Filing"],
  description:
    "GST return filing is the mandatory digital process of reporting your business's financial activities—sales, purchases, and tax collected/paid—to the government.",
  overview: `GST Return Filing is the mandatory digital process of reporting your business's financial activities to the government. Every registered taxpayer must declare their total sales (outward supplies), purchases (inward supplies), and the tax collected and paid for a specific period. This self-declaration acts as the basis for calculating your net tax liability.

The process involves filing forms like GSTR-1 for sales and GSTR-3B for summary payments. In 2026, compliance is strictly sequential; you cannot file a new return if previous ones are pending. Even with zero business activity, filing a "Nil Return" is required to avoid automatic late fees.

### Types of GST Return Filing

In 2026, GST returns in India are categorized based on the type of taxpayer and the frequency of filing.

**For Regular Taxpayers:**

| Form | Purpose | Frequency | Due Date |
| --- | --- | --- | --- |
| GSTR-1 | Details of all sales (outward supplies). | Monthly / Quarterly | 11th (Monthly) or 13th (Quarterly) |
| GSTR-3B | Summary of sales, purchases, ITC, and tax payment. | Monthly / Quarterly | 20th (Monthly) or 22nd/24th (Quarterly) |
| GSTR-9 | Annual Return consolidating the entire year's data. | Annually | 31st December (Post-FY) |
| GSTR-9C | Reconciliation statement (for turnover >Rs.5 Cr). | Annually | 31st December (Post-FY) |

**For Small Businesses (Composition Scheme):**
*   **CMP-08:** Quarterly statement for self-assessing and paying tax. Due: 18th of the month following the quarter.
*   **GSTR-4:** Annual return summarizing the year's business. Due: 30th April following the financial year.

**Specialized GST Returns:**
*   **GSTR-5:** For Non-Resident Taxable Persons (foreigners doing business in India).
*   **GSTR-6:** For Input Service Distributors (ISD) to distribute credit to branches.
*   **GSTR-7:** For authorities deducting TDS (Tax Deducted at Source).
*   **GSTR-8:** For E-commerce operators (like Amazon or Flipkart) to report TCS.
*   **GSTR-10:** A Final Return filed only when a GST registration is cancelled.
*   **GSTR-11:** For holders of a Unique Identity Number (UIN) (e.g., Embassies) to claim refunds.

### GST Return Filing Due Dates

| GST Return Name | Filing Frequency | Due Date |
| --- | --- | --- |
| GSTR-1 | Monthly | 11th of the next month |
| GSTR-1 | Quarterly (QRMP Scheme) | 13th of the month succeeding the quarter |
| GSTR-3B | Monthly | 20th of the next month |
| GSTR-3B | Quarterly (QRMP Scheme) | 22nd or 24th of the month succeeding the quarter |
| GSTR-4 | Annually | 30th April |
| GSTR-9 / GSTR-9C | Annually | 31st December of the next financial year |
| GSTR-10 | Once (Final Return) | Within 3 months of the cancellation date |
| CMP-08 | Quarterly (Composition Levy) | 18th of the month succeeding the quarter |

*Note: Due dates are subject to changes by CBIC notifications/orders.*`,
  advantages: [
    {
      icon: "Wallet",
      title: "Availing Input Tax Credit (ITC)",
      text: "Correct and timely filing is the only way to claim back the tax you paid on your business purchases. This directly reduces your tax liability and improves your bottom line.",
    },
    {
      icon: "Shield",
      title: "Maintaining Compliance Rating",
      text: "Regular filing keeps your GST compliance rating high, which is visible to potential B2B clients and is a mandatory requirement for winning government tenders.",
    },
    {
      icon: "Award",
      title: "Proof of Income for Loans",
      text: "Banks and financial institutions use your GST return history as primary income proof for processing business loans and working capital limits.",
    },
    {
      icon: "TrendingUp",
      title: "Avoiding Financial Loss",
      text: "Late filing attracts an automatic daily fee (approx. ₹50/day) and 18% annual interest on unpaid tax. Regular filing ensures these 'pure losses' don't eat into your margins.",
    },
  ],
  disadvantages: [
    {
      icon: "XCircle",
      title: "Irreversible Submission",
      text: "Unlike Income Tax, GST returns cannot be 'revised' after filing. Any errors must be painstakingly corrected in the subsequent month's return, leading to complex reconciliations.",
    },
    {
      icon: "Clock",
      title: "Recurring Compliance Cost",
      text: "Maintaining accurate returns requires ongoing professional fees for accountants or CAs to manage data entry and portal reconciliations every single month/quarter.",
    },
    {
      icon: "AlertCircle",
      title: "Blocking of E-Way Bills",
      text: "Failure to file returns for two consecutive periods can lead to the blocking of E-Way bill generation, effectively halting your business's ability to ship goods.",
    },
  ],
  eligibility: [
    {
      title: "Mandatory Filing Categories",
      items: [
        "**Regular Taxpayers:** Every registered person with turnover above ₹40L (Goods) or ₹20L (Services) must file periodic returns.",
        "**Composition Taxpayers:** Entities opted for the Composition Scheme must file GSTR-4 (Annual) and CMP-08 (Quarterly).",
        "**Voluntary Registrants:** Even if turnover is below the threshold, once registered, filing is mandatory.",
        "**Other Entities:** Input Service Distributors (ISD), Non-Resident Taxable Persons, and E-commerce Operators.",
      ],
    },
    {
      title: "The 'Nil Return' Rule",
      items: [
        "**Zero Activity:** If there were zero sales and zero purchases in a month, you are still legally required to file a 'Nil Return'.",
        "**Late Fee Risk:** Failure to file Nil returns leads to the same automatic late fees as a regular business (though at a lower rate of ₹20/day).",
      ],
    },
    {
      title: "Reconciliation Criteria",
      items: [
        "**GSTR-2B Matching:** Your eligible ITC is determined by the data uploaded by your suppliers; hence, regular matching is mandatory.",
        "**Bank Linkage:** Mandatory requirement to have a linked business bank account for tax payments through the portal.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Sales Records",
      content: {
        title: "Reporting outward supplies",
        items: [
          "Sales Invoices (B2B and B2C) for the return period.",
          "Credit and Debit Notes for any sales returns or price adjustments.",
          "HSN-wise summary of all products and services sold.",
          "Details of Export and Zero-rated supplies made.",
        ],
      },
    },
    {
      tabTitle: "Purchase Records",
      content: {
        title: "Claiming tax credits (ITC)",
        items: [
          "Purchase Bills and Invoices for all business-related expenses.",
          "Import of Goods/Services documents and Bill of Entry.",
          "Reverse Charge Mechanism (RCM) transaction details.",
          "Auto-populated GSTR-2B statement from the GST portal.",
        ],
      },
    },
    {
      tabTitle: "Financial Data",
      content: {
        title: "Internal reconciliation",
        items: [
          "Bank Statements for the specific return period.",
          "Electronic Cash and Credit Ledger balances from the portal.",
          "Previous month's tax payment challans and E-way bill data.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "GSTR-1 Filing (Sales)",
      description: "Report all outward supplies by the 11th of the following month (for monthly filers) or 13th (for quarterly filers under QRMP).",
    },
    {
      step: 2,
      title: "ITC Reconciliation",
      description: "Match your purchase invoices with the GSTR-2B statement to determine the actual eligible Input Tax Credit for the period.",
    },
    {
      step: 3,
      title: "Net Tax Calculation",
      description: "Calculate the net tax liability by deducting eligible ITC from the total tax collected on sales.",
    },
    {
      step: 4,
      title: "Tax Payment",
      description: "Generate a GST challan and pay the net liability via net banking to credit your electronic cash ledger on the portal.",
    },
    {
      step: 5,
      title: "GSTR-3B Filing (Summary)",
      description: "Submit the final summary return by the 20th (or 22nd/24th for QRMP) to formally declare tax payments and claim ITC.",
    },
  ],
  fees: [],
  feesMarkdown: `
The government does not charge a fee for filing GST returns. Professional fees depend on the volume of transactions and complexity.

### Annual Professional Compliance Table

| Compliance Service | Applicability | Estimated Professional Fee (Annual) | Key Factors Affecting Cost |
| --- | --- | --- | --- |
| Nil Return Filing | Zero business activity | Rs.4,000 to Rs.8,000 | Simple monthly/quarterly declaration. |
| Small Business Filing | Low transaction volume | Rs.12,000 to Rs.24,000 | Number of B2B invoices and HSN codes. |
| Medium Enterprise | Moderate volume | Rs.30,000 to Rs.72,000 | ITC reconciliation and branch count. |
| Large/Complex Filing | High volume/Multi-state | Rs.80,000 to Rs.2,00,000+ | RCM complexity and extensive audit. |

### Statutory Late Fees

| Filing Type | Late Fee (Per Day) | Max Penalty (Per Return) |
| --- | --- | --- |
| Nil Return | ₹20 (₹10 CGST + ₹10 SGST) | ₹500 |
| With Tax Liability | ₹50 (₹25 CGST + ₹25 SGST) | ₹5,000 to ₹10,000 |

*Note: In addition to late fees, 18% annual interest is charged on any unpaid tax amount.*
`,
  faqs: [
    {
      q: "What is the penalty for late filing of GST returns?",
      a: "The penalty is **₹50 per day** (₹20 for Nil returns) and **18% annual interest** on any unpaid tax amounts.",
    },
    {
      q: "Can I revise a filed GST return?",
      a: "No. You cannot 'revise' a return once it is filed. Any mistakes must be **corrected in the subsequent period's return**.",
    },
    {
      q: "What is the difference between GSTR-1 and GSTR-3B?",
      a: "**GSTR-1** is for reporting your sales (outward supplies), while **GSTR-3B** is a summary return used to pay taxes and claim ITC.",
    },
  ],
};
