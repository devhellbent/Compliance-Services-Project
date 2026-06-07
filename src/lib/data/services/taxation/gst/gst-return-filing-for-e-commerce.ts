// lib/data/services/taxation/gst/gst-return-filing-for-e-commerce.ts

import { ServiceData } from "@/lib/types";

export const gstReturnFilingForEcommerceData: ServiceData = {
  title: "GST Return Filing for E-commerce",
  breadcrumb: ["Home", "Taxation", "GST for E-commerce"],
  description:
    "GST return filing for e-commerce involves a specialized dual-reporting system centered on Tax Collection at Source (TCS) and marketplace reconciliation.",
  overview: `GST Return Filing for E-commerce involves a dual-reporting system centered on Tax Collection at Source (TCS). E-commerce operators (like Amazon) must file GSTR-8 by the 10th of every month to report the 1% tax collected from sellers' net sales. This ensures a digital trail for every transaction, preventing tax evasion while automating data reconciliation between platforms and the government.

Sellers must file GSTR-1 and GSTR-3B, specifically reporting platform sales in Table 14. The 1% TCS collected by the operator is not a cost; sellers can claim it back into their Electronic Cash Ledger after filing. In 2026, even small vendors must register for GST to sell online, though composition dealers are restricted to intra-state sales.

### Why E-commerce GST Filing is Different

In 2026, selling online in India is a high-compliance zone. The GST department treats e-commerce differently to prevent tax leakage in the digital economy. Here are the key reasons why e-commerce GST filing stands apart:

#### The "Zero Threshold" Rule
*   **Mandatory Registration:** If you sell goods through a platform like Amazon or Flipkart, you must have a GSTIN from day one, even if your first month's sales are only ₹1,000.
*   **No Composition Scheme:** Generally, online sellers of goods cannot opt for the simple "Composition Scheme" (fixed 1% tax). You must register as a Regular Taxpayer, which means detailed monthly filings.

#### Tax Collection at Source (TCS)
*   **The 1% Deduction:** For every sale you make, the platform deducts 1% TCS (0.5% CGST + 0.5% SGST) from your payment.
*   **Reconciliation:** The platform files a GSTR-8 return showing how much they collected from you. You must "Accept" this on your portal to move that money into your Electronic Cash Ledger, where it can be used to pay your taxes.

#### Reporting in GSTR-1 (Table 14 & 15)
*   **Platform-Wise Reporting:** You must specifically report sales made through e-commerce operators in Table 14.
*   **Matching Data:** If the sales you report in GSTR-1 don't match the sales the platform reported in GSTR-8, the system will flag a Rule 88C notice for discrepancy.

#### Handling Returns and Cancellations
*   **Net Value Calculation:** TCS is only paid on the Net Taxable Value (Total Sales minus Sales Returns).
*   **Credit Notes:** You must meticulously track returns and issue Credit Notes in your GST returns to ensure you aren't paying tax on items that were sent back.`,
  advantages: [
    {
      icon: "Wallet",
      title: "Claiming ITC on High Marketplace Fees",
      text: "E-commerce platforms charge significant fees for commissions, shipping, and advertising (taxed at 18% GST). By filing regular returns, you can claim this 18% back as Input Tax Credit, directly reducing your costs.",
    },
    {
      icon: "Unlock",
      title: "Unlocking TCS Credits",
      text: "Marketplaces deduct 1% TCS on every sale. Filing returns is the only way to 'Accept' this credit on the portal and use it to pay your own monthly tax liability, improving your cash flow.",
    },
    {
      icon: "Shield",
      title: "Avoiding Rule 88C Notices",
      text: "The GST portal uses AI to compare your sales with the marketplace's GSTR-8 reports. Regular and accurate filing prevents automated notices and avoids the risk of business suspension.",
    },
    {
      icon: "Activity",
      title: "Maintaining Seller Account Health",
      text: "Major platforms like Amazon and Flipkart monitor your GST compliance. Staying up-to-date ensures your seller account remains 'Active' and prevents marketplaces from withholding your settlements.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertCircle",
      title: "Complexity of Table 14/15",
      text: "GSTR-1 for e-commerce requires specialized marketplace-wise reporting. This is significantly more complex than traditional retail filing and carries a higher risk of clerical errors.",
    },
    {
      icon: "Clock",
      title: "TCS Cash Flow Impact",
      text: "The 1% TCS is deducted at the time of sale and remains 'locked' with the government until you file your returns and manually accept the credit, which can affect working capital.",
    },
    {
      icon: "Search",
      title: "AI-Driven Scrutiny",
      text: "The e-commerce sector is under high automated scrutiny. Any mismatch between GSTR-1, GSTR-3B, and the marketplace's GSTR-8 can trigger an immediate system-generated audit notice.",
    },
  ],
  eligibility: [
    {
      title: "Mandatory Filing Categories",
      items: [
        "**Online Marketplace Sellers:** Every individual or entity selling goods via third-party platforms (Amazon, Myntra, etc.).",
        "**Service Professionals:** Individuals offering services via portals (e.g., consultants, designers) with turnover above ₹20L.",
        "**Marketplace Operators:** The platforms themselves (Flipkart, Amazon) who must file GSTR-8 for TCS reporting.",
      ],
    },
    {
      title: "Reporting Requirements",
      items: [
        "**GSTR-1 (Table 14/15):** Sellers must report turnover specifically categorized under the marketplace's GSTIN.",
        "**GSTR-3B:** Final monthly summary for tax payment and ITC utilization.",
        "**GSTR-8:** To be filed by the marketplace to report the TCS collected from individual sellers.",
      ],
    },
    {
      title: "Compliance Thresholds",
      items: [
        "**Zero Sale Month:** If no sales were made, a 'Nil Return' must still be filed to keep the GSTIN active.",
        "**Inter-state Rule:** Mandatory for all sellers shipping goods across state borders via e-commerce.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Marketplace Reports",
      content: {
        title: "Sales data for reconciliation",
        items: [
          "Merchant Tax Reports (MTR): Downloaded from Amazon/Flipkart Seller Central.",
          "Monthly Settlement Sheets: To verify the net amount received in your bank account.",
          "HSN-wise Summary: Of all products sold across each specific marketplace.",
          "Returns Data: Credit and Debit notes for any cancellations or RTO (Return to Origin) orders.",
        ],
      },
    },
    {
      tabTitle: "Expense Invoices",
      content: {
        title: "Reclaiming credits",
        items: [
          "Marketplace Fee Invoices: For commission, shipping, and advertising (18% GST).",
          "Warehouse (FBA) Invoices: If using marketplace storage and fulfillment services.",
          "Inventory Purchase Bills: For stock or raw materials used in the business.",
        ],
      },
    },
    {
      tabTitle: "Portal Statements",
      content: {
        title: "Verification records",
        items: [
          "TDS/TCS Credit Received Statement: Downloaded from the GST portal dashboard.",
          "GSTR-2B Statement: To verify that suppliers have uploaded your purchase data.",
          "Electronic Ledger Summaries: Cash and Credit ledger balances from the portal.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Data Acquisition",
      description: "Download the monthly MTR (Merchant Tax Reports) and HSN summary reports from each marketplace seller dashboard.",
    },
    {
      step: 2,
      title: "Outward Filing (GSTR-1)",
      description: "Report sales details in Table 14 of GSTR-1, ensuring the turnover matches the marketplace's GSTIN for accurate reconciliation.",
    },
    {
      step: 3,
      title: "TCS Credit Acceptance",
      description: "Log in to the GST portal and 'Accept' the TCS records filed by the marketplaces to transfer the 1% credit to your cash ledger.",
    },
    {
      step: 4,
      title: "ITC Reconciliation",
      description: "Match marketplace fee invoices with your GSTR-2B to ensure all eligible tax credits are available for offsetting liability.",
    },
    {
      step: 5,
      title: "Final Settlement (GSTR-3B)",
      description: "Submit the GSTR-3B return by the 20th, utilizing both ITC and TCS credits to pay the net tax due.",
    },
  ],
  fees: [],
  feesMarkdown: `
E-commerce compliance is highly automated, and late fees are auto-calculated by the system.

### Managed E-commerce Compliance Table

| Compliance Type | Applicability | Estimated Professional Fee (Annual) | Key Factors Affecting Cost |
| --- | --- | --- | --- |
| Managed E-com Filing | Sellers on multiple platforms | Rs.18,000 to Rs.48,000 | Number of marketplaces (Amazon, etc.) and return volume. |
| TCS Reconciliation | High volume sellers | Rs.9,000 to Rs.18,000 | Number of transactions and marketplace data complexity. |
| Table 14/15 Reporting | Specific online businesses | Rs.6,000 to Rs.12,000 | Requirement of granular platform-wise data entry. |
| Nil E-com Filing | Inactive online stores | Rs.3,000 to Rs.6,000 | Simple Nil GSTR-1/3B filing for registered sellers. |

### Statutory Penalties (E-commerce)

| Category | Return Type | Late Fee (Per Day) | Maximum Cap |
| --- | --- | --- | --- |
| Online Seller | GSTR-1 / 3B | ₹50 (₹20 for Nil) | ₹10,000 per return |
| Marketplace Operator | GSTR-8 | ₹200 | ₹5,000 |
| Delay in Tax Payment | Interest | 18% per annum | No Upper Limit |
`,
  faqs: [
    {
      q: "What is Table 14 in GSTR-1 for e-commerce?",
      a: "Table 14 is a mandatory section where sellers report the **GSTIN of the marketplace** (Amazon/Flipkart) through which they sold goods, ensuring data reconciliation.",
    },
    {
      q: "Do I file GSTR-1 if I have zero sales this month?",
      a: "Yes. Failure to file a **Nil GSTR-1** results in a ₹20/day fee and will block you from generating future shipping labels or E-way bills.",
    },
    {
      q: "Can I use TCS credit to pay my registration fees?",
      a: "There are no registration fees. TCS credit can be used to pay your **monthly tax liability** (Output Tax) on the GST portal.",
    },
  ],
};
