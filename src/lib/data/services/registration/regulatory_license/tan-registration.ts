// lib/data/services/tan-registration.ts

import { ServiceData } from "@/lib/types";

export const tanRegistrationData: ServiceData = {
  title: "TAN Registration",
  breadcrumb: ["Home", "Registrations", "TAN Registration"],
  overview:
    "A **Tax Deduction and Collection Account Number (TAN)** is a unique 10-digit alphanumeric number required for all persons responsible for deducting or collecting tax at source (TDS/TCS) on behalf of the Income Tax Department. 🧾 It is mandatory to quote TAN in all TDS/TCS-related documents, including returns, payments, and certificates. It is different from PAN and is used exclusively for TDS/TCS compliance.",
  advantages: [
    {
      icon: "FileCheck",
      title: "Enables TDS/TCS Compliance",
      text: "It is legally mandatory for any person or entity deducting or collecting tax at source.",
    },
    {
      icon: "Receipt",
      title: "Required for Filing Returns",
      text: "You cannot file TDS/TCS returns (like Form 24Q, 26Q) without a valid TAN. These returns are required to be filed quarterly.",
    },
    {
      icon: "Newspaper",
      title: "Issuance of TDS Certificates",
      text: "A valid TAN is required to issue TDS certificates (like Form 16 for salary and Form 16A for other payments) to deductees.",
    },
    {
      icon: "Bank",
      title: "Depositing Tax",
      text: "Authorized banks will not accept TDS/TCS payments unless the deductor quotes their TAN.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertTriangle",
      title: "Penalty for Non-Quoting",
      text: "Failure to quote TAN in TDS/TCS challans, certificates, or returns can attract a penalty of ₹10,000.",
    },
    {
      icon: "FileWarning",
      title: "Penalty for Non-Application",
      text: "If a person who is required to obtain a TAN fails to do so, they can also be liable for a penalty of ₹10,000.",
    },
    {
      icon: "Info",
      title: "Specific Use Only",
      text: "TAN is not a general-purpose identification number; its use is strictly limited to TDS/TCS compliance.",
    },
  ],
  eligibility: [
    {
      title: "Who Needs a TAN?",
      items: [
        "Any person or entity responsible for deducting tax at source under the Income Tax Act, 1961.",
        "**Employers**: Who deduct tax on employee salaries.",
        "**Companies/Firms**: Paying for professional services, rent, or contractor payments above specified limits.",
        "**Individuals**: Who are subject to a tax audit and make payments requiring TDS.",
        "Any entity responsible for collecting tax at source (TCS).",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "No Documents Required",
      content: {
        title: "Application is Document-Free",
        items: [
          "The application for TAN allotment is made using Form 49B.",
          "No supporting documents are required to be submitted with this application.",
          "The details provided in the form are considered sufficient for the allotment of TAN.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Fill Application Form 49B",
      description:
        "Complete the online application using Form 49B available on the NSDL-TIN portal. Ensure all details, especially the deductor's category and PAN, are correct.",
    },
    {
      step: 2,
      title: "Make Payment",
      description:
        "Pay the required processing fee online through net banking, debit/credit card, or other available methods.",
    },
    {
      step: 3,
      title: "Receive Acknowledgement",
      description:
        "After successful payment, a 14-digit acknowledgement number is generated. This can be used to track the status of the application.",
    },
    {
      step: 4,
      title: "TAN Allotment",
      description:
        "The Income Tax Department processes the application. Once approved, the TAN is allotted and can be checked online. There is no physical TAN card issued; only an allotment letter is sent.",
    },
  ],
  fees: [
    {
      component: "TAN Application Processing Fee",
      fees: "₹65 (approx.)",
      remarks:
        "This is a standard government-mandated fee for processing a new TAN application. Includes GST.",
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
      a: "No, TAN is a one-time allotment and does not have an expiry date. It remains valid for life.",
    },
  ],
};
