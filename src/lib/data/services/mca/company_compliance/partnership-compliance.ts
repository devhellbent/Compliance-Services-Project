// lib/data/services/partnership-compliance.ts

import { ServiceData } from "@/lib/types";

export const partnershipComplianceData: ServiceData = {
  title: "Partnership Compliance",
  breadcrumb: ["Home", "MCA", "Partnership Compliance"],
  description:
    "Ensure your partnership firm meets all annual compliance requirements and maintains its active status with timely filings.",
  overview: `**Partnership Compliance** involves the mandatory annual filings and compliance requirements that a registered partnership firm must complete to maintain its legal status and avoid penalties. This includes filing annual returns, maintaining proper books of accounts, and ensuring compliance with the Indian Partnership Act, 1932.`,
  advantages: [
    {
      icon: "ShieldCheck",
      title: "Maintains Legal Status",
      text: "Regular compliance ensures the partnership remains in good standing with regulatory authorities.",
    },
    {
      icon: "FileWarning",
      title: "Avoids Penalties",
      text: "Timely filing helps avoid late fees and penalties that can accumulate over time.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertTriangle",
      title: "Administrative Burden",
      text: "Requires maintaining detailed records and timely filing of returns.",
    },
  ],
  eligibility: [
    {
      title: "Applicability",
      items: [
        "All registered partnership firms must comply with annual filing requirements.",
        "Partnerships must maintain proper books of accounts throughout the financial year.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Required Documents",
      content: {
        title: "Annual Compliance Documents",
        items: [
          "Partnership Deed (if any changes were made during the year).",
          "Financial statements (Balance Sheet and Profit & Loss Account).",
          "Details of partners and their capital contributions.",
          "Income Tax Return (ITR-5) filing proof.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Maintain Books of Accounts",
      description:
        "Keep proper books of accounts throughout the financial year.",
    },
    {
      step: 2,
      title: "Prepare Financial Statements",
      description:
        "Prepare Balance Sheet and Profit & Loss Account at year-end.",
    },
    {
      step: 3,
      title: "File Income Tax Return",
      description: "File ITR-5 with the Income Tax Department by the due date.",
    },
    {
      step: 4,
      title: "Update Partnership Deed",
      description:
        "Update the partnership deed if there are any changes in partners or terms.",
    },
  ],
  fees: [
    {
      component: "Annual Compliance Fee",
      fees: "₹5,000 - ₹15,000",
      remarks:
        "Professional fees for maintaining compliance and filing returns.",
    },
  ],
  faqs: [
    {
      q: "Is annual compliance mandatory for partnership firms?",
      a: "Yes, registered partnership firms must maintain proper books of accounts and file annual returns to remain compliant.",
    },
    {
      q: "What happens if we don't file annual returns?",
      a: "Non-compliance can lead to penalties and may affect the firm's legal status and ability to operate.",
    },
  ],
};
