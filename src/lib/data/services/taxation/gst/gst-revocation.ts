// lib/data/services/taxation/gst/gst-revocation.ts

import { ServiceData } from "@/lib/types";

export const gstRevocationData: ServiceData = {
  title: "GST Revocation",
  breadcrumb: ["Home", "Taxation", "GST Revocation"],
  description:
    "GST Revocation is the legal process to restore a GST registration that was cancelled by tax authorities (Suo Moto), typically due to non-filing of returns.",
  overview: `GST Revocation is the legal process to restore a GST registration that was cancelled by tax authorities (Suo Moto), typically due to non-filing of returns. It allows businesses to reactivate their original GSTIN rather than applying for a new one. This process is only available if the cancellation was initiated by an officer; it cannot be used if the taxpayer voluntarily surrendered their registration. It ensures business continuity and allows the taxpayer to reclaim any "frozen" Input Tax Credit.

To apply, taxpayers must file Form GST REG-21 within 90 days of the cancellation order, though extensions up to 270 days are possible with approval. Before applying, all pending returns must be filed and outstanding taxes, interest, and late fees must be cleared.

### Purpose and Reason of GST Revocation

The Purpose of GST Revocation is to provide a "second chance" to businesses whose GST registration has been forcefully cancelled by the government, allowing them to restore their original tax identity and resume operations without losing their business history or tax credits.

*   **Business Continuity:** Restores the existing GSTIN so you don't have to change your tax ID on existing contracts, bank accounts, or branding.
*   **Recovering Frozen Credits:** It is the only way to unlock and utilize the Input Tax Credit (ITC) that was sitting in your electronic ledger at the time of cancellation.
*   **Legal Compliance:** It allows a business to "regularize" its status. Operating under a cancelled GSTIN is illegal and attracts heavy penalties (often 100% of the tax due).

#### Common Reasons for Revocation

Revocation is only possible if the cancellation was initiated "Suo Moto" by a Tax Officer. Common triggers include:

| Reason for Cancellation | Description |
| --- | --- |
| Non-Filing of Returns | Most common reason. For regular taxpayers, failing to file returns for a continuous period of 6 months. |
| Composition Default | If a Composition Dealer fails to file returns for 3 consecutive tax periods. |
| No Business Activity | Taking a voluntary registration but failing to commence business within 6 months. |
| Compliance Breach | Violating specific GST rules, such as not displaying the GSTIN at the place of business or failing to update bank details. |
| Fraudulent Intent | Obtaining registration through fraud, willful misstatement, or suppression of facts. |

### Time Limit for Revocation of GST Registration

*   **Standard Window (90 Days):** File Form GST REG-21 within 90 days from the date the cancellation order was served.
*   **Extension Window (Additional 180 Days):** If you miss the 90-day deadline, you can apply for an extension up to 270 days total (9 months). This requires approval from the Commissioner and a demonstration of "sufficient cause."
*   **After 270 Days:** The portal locks the revocation functionality. Legal remedies include filing an Appeal (Form GST APL-01) within 3 months or a Writ Petition in the High Court.`,
  advantages: [
    {
      icon: "Unlock",
      title: "Reclaiming Frozen ITC",
      text: "Revocation is the only legal way to unlock and utilize the ITC that was sitting in your electronic credit ledger at the time of cancellation. Applying for a new GSTIN does not transfer this credit.",
    },
    {
      icon: "Shield",
      title: "Maintaining Business Identity",
      text: "Restores your original GSTIN, meaning you don't have to change your tax ID on existing contracts, bank accounts, or marketing materials, ensuring seamless business continuity.",
    },
    {
      icon: "CheckCircle",
      title: "Clean Compliance History",
      text: "Restoring an old registration is strategically better than applying for a new one, as a new GSTIN application may be rejected if the department sees an outstanding cancelled GSTIN on your PAN.",
    },
    {
      icon: "Wallet",
      title: "Cost Effective Restoration",
      text: "While you must pay pending dues, revocation allows you to use your restored ITC to pay off some of those liabilities, which is not possible with a fresh registration.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertCircle",
      title: "Mandatory Debt Clearance",
      text: "The portal effectively locks the 'Submit' button for revocation until you file all pending returns and pay 100% of the taxes, 18% interest, and accumulated late fees.",
    },
    {
      icon: "Clock",
      title: "Strict Time-Bound Windows",
      text: "Applications must be filed within 90 days. While extensions up to 270 days are possible, they require high-level approvals and valid justifications for the delay.",
    },
    {
      icon: "Search",
      title: "Detailed Officer Scrutiny",
      text: "The revocation process invites a detailed review of your past non-compliance. The officer may require a formal letter on business letterhead explaining the defaults before approval.",
    },
  ],
  eligibility: [
    {
      title: "Mandatory Eligibility Criteria",
      items: [
        "**Suo Moto Cancellation:** Only eligible if the registration was cancelled by a tax officer (e.g., for non-filing). Voluntary cancellations cannot be revoked.",
        "**Compliance Backlog:** You must file all pending returns and pay all outstanding taxes, interest, and late fees *before* applying for revocation.",
        "**Form GST REG-21:** The application for revocation must be filed in this specific format on the GST portal.",
      ],
    },
    {
      title: "Time-Bound Windows",
      items: [
        "**Standard Period:** Within 90 days from the date of service of the cancellation order.",
        "**First Extension:** Up to 180 days (with approval from the Assistant/Deputy Commissioner).",
        "**Final Extension:** Up to 270 days (with approval from the Commissioner/Joint Commissioner).",
      ],
    },
    {
      title: "Ineligible Scenarios",
      items: [
        "**Voluntary Cancellation:** If you requested the cancellation yourself, revocation is not an option.",
        "**Window Closed:** If the 270-day limit has passed, the only remedy is filing an appeal in the High Court.",
        "**Fraud Cases:** If cancellation was due to proven intentional fraud or suppression of facts.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Filings & Proofs",
      content: {
        title: "Compliance restoration data",
        items: [
          "ARN (Application Reference Numbers) of all pending GST returns filed.",
          "Payment Challans for all outstanding tax, interest, and late fees.",
          "Copy of the GST Cancellation Order (Form REG-19) issued by the department.",
        ],
      },
    },
    {
      tabTitle: "Justification",
      content: {
        title: "Formal request documents",
        items: [
          "Reason for Revocation: A formal letter on business letterhead explaining the cause of the default (e.g., medical emergency, technical error).",
          "Condonation of Delay: A specific application if filing after the initial 90-day window.",
          "Identity Proof: PAN and Aadhaar of the authorized signatory.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Compliance Backlog Clearance",
      description: "File all pending GST returns for the period leading up to the cancellation. The system will not allow the revocation form to be opened until this is complete.",
    },
    {
      step: 2,
      title: "Payment of Statutory Dues",
      description: "Pay all calculated tax liabilities, 18% annual interest, and daily late fees via the GST portal to clear your electronic ledger.",
    },
    {
      step: 3,
      title: "Filing Form GST REG-21",
      description: "Submit the revocation application on the portal within the mandatory 90-day (extendable up to 270-day) window.",
    },
    {
      step: 4,
      title: "Officer Review (REG-23)",
      description: "The tax officer reviews the application. If they need more info, they issue a notice (REG-23) which you must reply to within 7 days.",
    },
    {
      step: 5,
      title: "Issuance of REG-22",
      description: "If satisfied, the officer issues Form REG-22, officially restoring your GSTIN status to 'Active' on the portal.",
    },
  ],
  fees: [],
  feesMarkdown: `
There is no direct government fee for filing the revocation form (REG-21). The primary cost is the clearing of past defaults.

### Professional Fee Structure (Restoration)

| Compliance Service | Applicability | Estimated Professional Fee | Key Factors Affecting Cost |
| --- | --- | --- | --- |
| Revocation Filing | Suo Moto cancellations | ₹2,500 – ₹7,000 | Number of pending returns. |
| Condonation of Delay | Applications after 90 days | ₹3,000 – ₹6,000 | Commissioner-level approvals. |
| SCN Response (REG-24) | If clarification requested | ₹2,000 – ₹5,000 | Legal complexity of the case. |
| Backlog Filing | Clearing pending returns | ₹500 – ₹1,500 (Per return) | Volume of invoices. |

### Statutory Default Costs

| Cost Component | Rate | Description |
| --- | --- | --- |
| Late Fee (Regular) | ₹50 per day | Per return per day of delay. |
| Late Fee (Nil) | ₹20 per day | Mandatory even for zero-activity periods. |
| Interest on Tax | 18% per annum | Calculated from the original due date. |
`,
  faqs: [
    {
      q: "Can I use my ITC to pay late fees during revocation?",
      a: "No. ITC can only be used to pay the **Tax** component. Interest and Late Fees must always be paid in **Cash**.",
    },
    {
      q: "What happens if I miss the 270-day window?",
      a: "After 270 days, the portal locks the revocation feature. You must file an **Appeal (APL-01)** or a Writ Petition in the High Court to restore the GSTIN.",
    },
    {
      q: "Will my GSTIN status change immediately?",
      a: "Once the officer approves the application (REG-22), the status on the GST portal changes to **'Active'** almost instantly.",
    },
  ],
};
