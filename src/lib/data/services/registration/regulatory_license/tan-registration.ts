// lib/data/services/tan-registration.ts

import { ServiceData } from "@/lib/types";

export const tanRegistrationData: ServiceData = {
  title: "TAN Registration",
  breadcrumb: ["Home", "Registrations", "TAN Registration"],
  description:
    "Obtain TAN for TDS/TCS deduction and filing—mandatory for challans, quarterly returns and TDS certificates.",
  overview:
    `TAN stands for **Tax Deduction and Collection Account Number**, a unique 10-digit alphanumeric code issued by the Income Tax Department of India. TAN registration is the mandatory process of obtaining this number for all individuals and entities responsible for deducting tax at source (TDS) or collecting tax at source (TCS) as per the Income Tax Act, 1961.

The primary role of the TAN is to ensure that taxes deducted or collected on various payments (like salaries, rent, or professional fees) are properly tracked and deposited with the government. Without a valid TAN, a deductor/collector cannot file mandatory quarterly TDS/TCS returns, issue tax certificates (like Form 16/16A), or deposit the deducted amount with the government via challans.

TAN is thus a crucial component of tax compliance in India. Entities eligible to deduct or collect tax must apply for TAN using **Form 49B**. Failure to obtain or correctly quote the TAN in specified documents attracts a penalty of ₹10,000 under the law.

**What is TAN Registration Number?**

The TAN Registration Number is the Tax Deduction and Collection Account Number, a mandatory 10-digit alphanumeric identifier issued by the Income Tax Department of India. It is required for all individuals and entities who are responsible for deducting tax at source (TDS) or collecting tax at source (TCS) on payments they make, such as salaries, interest, rent, or professional fees. The primary purpose of the TAN is to enable the Income Tax Department to track all TDS and TCS transactions effectively. It is compulsory to quote the TAN on all TDS/TCS returns, payment challans, certificates (like Form 16 and 16A), and in any official correspondence related to tax deduction or collection. Failure to comply with the mandate to obtain and quote a valid TAN can lead to financial penalties under the Income Tax Act.`,
  advantages: [
    {
      icon: "FileCheck",
      title: "Enables TDS/TCS Compliance",
      text: "Legally required to deduct / collect tax and file statutory quarterly statements.",
    },
    {
      icon: "Receipt",
      title: "Required for Filing Returns",
      text: "Essential for uploading returns (24Q, 26Q, 27Q, 27EQ) & generating Form 16/16A.",
    },
    {
      icon: "Newspaper",
      title: "Issuance of TDS Certificates",
      text: "Mandatory reference for generation and validation of salary & non‑salary TDS certificates.",
    },
    {
      icon: "Bank",
      title: "Depositing Tax",
      text: "Banks & OLTAS challans reject payments without a valid TAN quoted.",
    },
    {
      icon: "ShieldCheck",
      title: "Credit Reconciliation",
      text: "Enables matching of amounts deducted vs. credits appearing in deductee Form 26AS.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertTriangle",
      title: "Penalty for Non-Quoting",
      text: "Non‑quotation on challans / returns invites penalty under Section 272BB (₹10,000).",
    },
    {
      icon: "FileWarning",
      title: "Penalty for Non-Application",
      text: "Failure to obtain TAN when required yields same penalty and halts compliant deduction.",
    },
    {
      icon: "Info",
      title: "Specific Use Only",
      text: "Limited scope—cannot replace PAN, GSTIN, CIN or other statutory identifiers.",
    },
    {
      icon: "Clock",
      title: "Quarterly Workload",
      text: "Adds recurring compliance burden (returns, corrections, certificate downloads).",
    },
  ],
  eligibility: [
    "**Deducting Tax at Source (TDS)** on certain payments (like salaries, interest, rent, professional fees, payments to contractors, etc.) as per the Income Tax Act, 1961. **OR**",
    "**Collecting Tax at Source (TCS)** on certain receipts (like sale of scrap, forest produce, etc.) as per the Income Tax Act, 1961.",
    {
      title: "Key Points",
      items: [
        "One TAN per deductor—do not apply for multiple; use same TAN across all sections.",
        "Separate branches of large organizations may seek distinct TANs if acting independently.",
        "PAN is still needed; TAN does not replace PAN for returns of income.",
      ],
    }
  ],
  documents: [
    {
        tabTitle: "The application for a new Tax Deduction and Collection Account Number",
        content: {
            title: "The application for a new Tax Deduction and Collection Account Number",
            items: [
                "**Duly filled and signed Form 49B:** This is the primary document, which requires accurate details such as:",
                "Name and address of the deductor/collector.",
                "Category of the deductor/collector (e.g., Company, Individual/Sole Proprietor, Firm, Government).",
                "Permanent Account Number (PAN) of the applicant.",
                "Details of the Assessing Officer (AO Code, Area Code, etc.).",
                "**Payment of the Application Fee:** The fee must be paid as part of the application process."
            ]
        }
    }
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Fill Application Form 49B",
      description:
        "Enter deductor details, category & PAN. Validate AO Code from ITD resources or TIN-FC.",
    },
    {
      step: 2,
      title: "Make Payment",
      description:
        "Pay nominal processing fee online (card / net banking / UPI).",
    },
    {
      step: 3,
      title: "Receive Acknowledgement",
      description:
        "14‑digit acknowledgement generated—retain for tracking status.",
    },
    {
      step: 4,
      title: "TAN Allotment",
      description:
        "ITD processes & allots TAN; download / note number (no physical card—letter / email only).",
    },
    {
      step: 5,
      title: "Activate Usage",
      description:
        "Quote TAN immediately in challans & future quarterly TDS/TCS statements.",
    },
  ],
  fees: [
    {
      component: "TAN Application Processing Fee",
      fees: "₹65–₹70",
      remarks:
        "Government processing fee (inclusive of GST) – portal updates may vary slightly.",
    },
    {
      component: "Penalty (Incorrect / Duplicate TAN)",
      fees: "₹10,000",
      remarks:
        "Section 272BB – for failure to apply, quote, or using multiple TANs improperly.",
    },
  ],
  faqs: [
    {
      q: "Is TAN the same as PAN?",
      a: "No. PAN (Permanent Account Number) is for every taxpayer to file their income tax. TAN (Tax Deduction and Collection Account Number) is only for those who deduct or collect tax on behalf of the government.",
    },
    {
      q: "Is there a physical card for TAN like a PAN card?",
      a: "No, the Income Tax Department does not issue a physical card for TAN. Only an allotment letter is issued, and the 10-digit number itself is what you need to quote.",
    },
    {
      q: "Do I need to renew my TAN?",
      a: "No. TAN is permanent unless surrendered due to closure / change in deductor structure.",
    },
    {
      q: "Can one business hold multiple TANs?",
      a: "Generally no—only if separate branches deduct independently; avoid unnecessary duplication.",
    },
    {
      q: "What if wrong AO Code was entered?",
      a: "File a correction request in subsequent quarterly return or approach TIN facilitation center for rectification.",
    },
  ],
};
