// lib/data/services/llp-compliance.ts

import { ServiceData } from "@/lib/types";

export const llpComplianceData: ServiceData = {
  title: "LLP Annual Compliance",
  breadcrumb: ["Home", "MCA", "LLP Compliance"],
  overview:
    "**LLP Annual Compliance** involves the mandatory filings that a Limited Liability Partnership must complete each financial year with the Ministry of Corporate Affairs (MCA) and the Income Tax Department. 📋 The primary filings are the **Statement of Account & Solvency (Form 8)** and the **Annual Return (Form 11)**. Timely compliance is crucial to maintain the LLP's active status and avoid heavy penalties.",
  advantages: [
    {
      icon: "ShieldCheck",
      title: "Maintains Active Status",
      text: "Regular filing keeps the LLP compliant and active on the MCA register, preventing it from being marked as 'defunct'.",
    },
    {
      icon: "FileWarning",
      title: "Avoids Heavy Penalties",
      text: "Timely compliance helps avoid the steep penalty of ₹100 per day, per form, for delayed filings, which has no upper limit.",
    },
    {
      icon: "TrendingUp",
      title: "Enhances Credibility",
      text: "A compliant LLP has a better reputation, making it easier to get loans, enter into contracts, and attract investors.",
    },
    {
      icon: "Database",
      title: "Updated Public Record",
      text: "Ensures that the financial and operational data of the LLP is accurately reflected on the public MCA portal.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertTriangle",
      title: "Hefty Late Fees",
      text: "The penalty for late filing is ₹100 per day for each overdue form, which can accumulate to a very large amount quickly.",
    },
    {
      icon: "Gavel",
      title: "Prosecution of Partners",
      text: "The Designated Partners are personally responsible for compliance and can face prosecution for non-filing.",
    },
    {
      icon: "FileX",
      title: "Risk of Strike-Off",
      text: "Continuous non-compliance can lead the Registrar to believe the LLP is inactive and may strike its name from the register.",
    },
  ],
  eligibility: [
    {
      title: "Applicability",
      items: [
        "Annual compliance is **mandatory for all registered LLPs** in India.",
        "This applies even if the LLP has not conducted any business or transactions during the financial year (i.e., it's a 'dormant' LLP).",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Documents to be Prepared",
      content: {
        title: "Financials & Partner Details",
        items: [
          "The LLP's final financial statements (Balance Sheet, Profit & Loss Account).",
          "A detailed list of all partners and any changes in their contribution during the year.",
          "Digital Signature Certificates (DSCs) of the Designated Partners.",
          "Audit Report, if an audit is applicable.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Maintain Books of Accounts",
      description:
        "Throughout the financial year (April 1st to March 31st), the LLP must maintain proper books of accounts.",
    },
    {
      step: 2,
      title: "File Form 11 (Annual Return)",
      description:
        "This form contains details of the LLP's partners and their contributions. It must be filed by **30th May** every year.",
    },
    {
      step: 3,
      title: "Prepare & Audit Financial Statements",
      description:
        "After the year-end, finalize the financial statements. An audit is mandatory if turnover exceeds ₹40 lakh or contribution exceeds ₹25 lakh.",
    },
    {
      step: 4,
      title: "File Form 8 (Statement of Solvency)",
      description:
        "This form contains the LLP's financial details and a declaration of its solvency. It must be filed by **30th October** every year.",
    },
    {
      step: 5,
      title: "File Income Tax Return (ITR-5)",
      description:
        "The LLP must file its annual Income Tax Return in Form ITR-5. The due date is typically July 31st (if no audit) or October 31st (if an audit is required).",
    },
  ],
  fees: [
    {
      component: "Government Fees (Form 8 & 11)",
      fees: "₹50 - ₹200 per form",
      remarks:
        "Varies based on the LLP's capital contribution. This is the fee for on-time filing.",
    },
    {
      component: "Penalty for Late Filing",
      fees: "₹100 per day, per form",
      remarks:
        "This penalty has no maximum limit and is the main cost of non-compliance.",
    },
    {
      component: "Professional Fees",
      fees: "₹5,000 - ₹15,000 per year",
      remarks:
        "For accounting, preparation of forms, and filing of all annual returns (excluding audit fees).",
    },
  ],
  faqs: [
    {
      q: "What is the penalty for late filing of LLP forms?",
      a: "The penalty is a flat ₹100 per day for each overdue form (Form 8 and Form 11). There is no maximum cap, so the amount can become very large over time.",
    },
    {
      q: "Is an audit mandatory for all LLPs?",
      a: "No. An audit is only mandatory if the LLP's annual turnover exceeds ₹40 lakh or if its total capital contribution exceeds ₹25 lakh. For all other LLPs, an audit is optional.",
    },
    {
      q: "Do I have to file returns even if my LLP had no business during the year?",
      a: "Yes. Even if an LLP was dormant or had zero transactions, it must file a 'NIL' Statement of Account & Solvency (Form 8) and an Annual Return (Form 11) to maintain its active status.",
    },
  ],
};
