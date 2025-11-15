// lib/data/services/tan-registration.ts

import { ServiceData } from "@/lib/types";

export const tanRegistrationData: ServiceData = {
  title: "TAN Registration",
  breadcrumb: ["Home", "Registrations", "TAN Registration"],
  description:
    "Obtain TAN for TDS/TCS deduction and filing—mandatory for challans, quarterly returns and TDS certificates.",
  overview:
    "A **Tax Deduction & Collection Account Number (TAN)** is a mandatory 10‑character alphanumeric identifier (e.g., MUMM12345A) issued by the Income Tax Department to every deductor/collector of tax at source (TDS/TCS). It must be quoted on all challans (ITNS‑281), quarterly returns (24Q, 26Q, 27Q, 27EQ), TDS/TCS certificates (Form 16/16A) and official correspondence. A single TAN covers both TDS and TCS obligations—duplication is prohibited (penalty ₹10,000). Unlike PAN (taxpayer identity), TAN specifically tracks tax deducted/collected flows enabling reconciliation of credits claimed by deductees.",
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
    {
      title: "Who Needs a TAN?",
      items: [
        "Every person / entity required to deduct TDS or collect TCS under the Income Tax Act.",
        "Employers deducting TDS on salaries (24Q).",
        "Companies / Firms / LLPs paying professional fees, contractor bills, rent, interest, commission etc. above thresholds.",
        "Individuals / HUFs subject to tax audit making specified payments (Section 194M/194C etc.).",
        "Entities collecting TCS (e.g., sale of scrap, timber, specific goods under Section 206C).",
      ],
    },
    {
      title: "Key Points",
      items: [
        "One TAN per deductor—do not apply for multiple; use same TAN across all sections.",
        "Separate branches of large organizations may seek distinct TANs if acting independently.",
        "PAN is still needed; TAN does not replace PAN for returns of income.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "No Documents Required",
      content: {
        title: "Application is Document-Free",
        items: [
          "Apply using **Form 49B** (online via Protean / NSDL).",
          "No physical supporting documents ordinarily required.",
          "Ensure AO Code accuracy (Area, AO Type, Range, Number) before submission.",
        ],
      },
    },
    {
      tabTitle: "Reference Data",
      content: {
        title: "Keep Ready",
        items: [
          "Deductor PAN (mandatory field).",
          "Full legal name & address; contact email & phone.",
          "Category of deductor (Company / Branch / Govt / Individual / Firm).",
        ],
      },
    },
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
