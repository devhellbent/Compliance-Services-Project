// lib/data/services/private-limited-compliance.ts

import { ServiceData } from "@/lib/types";

export const privateLimitedComplianceData: ServiceData = {
  title: "Private Limited Company Annual Compliance",
  breadcrumb: ["Home", "MCA", "Private Limited Compliance"],
  overview:
    "**Private Limited Company Annual Compliance** is a set of mandatory legal and financial obligations that every registered private limited company in India must fulfill each year. ⚖️ This primarily involves conducting board meetings, holding an Annual General Meeting (AGM), getting accounts audited, and filing key documents like the **Annual Financial Statements (Form AOC-4)** and the **Annual Return (Form MGT-7)** with the Ministry of Corporate Affairs (MCA).",
  advantages: [
    {
      icon: "ShieldCheck",
      title: "Maintains Legal Standing",
      text: "Ensures the company remains compliant and active on the MCA register, safeguarding its legal status.",
    },
    {
      icon: "TrendingUp",
      title: "Enhances Credibility",
      text: "A strong compliance history builds trust with banks, investors, and other stakeholders, making it easier to secure funding.",
    },
    {
      icon: "FileWarning",
      title: "Avoids Heavy Penalties",
      text: "Timely filing prevents the imposition of heavy daily penalties and saves the directors from potential disqualification.",
    },
    {
      icon: "Gavel",
      title: "Good Corporate Governance",
      text: "Regular compliance promotes transparency and accountability in the company's management and operations.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertTriangle",
      title: "Hefty Daily Penalties",
      text: "The penalty for late filing of MCA forms is ₹100 per day for each overdue form, with no maximum limit.",
    },
    {
      icon: "UserX",
      title: "Director Disqualification",
      text: "Failure to file annual returns for three consecutive years can lead to the disqualification of all company directors.",
    },
    {
      icon: "FileX",
      title: "Risk of Strike-Off",
      text: "The Registrar of Companies (RoC) can strike the company's name from the register for continuous non-compliance.",
    },
  ],
  eligibility: [
    {
      title: "Applicability",
      items: [
        "Annual compliance is **mandatory for all registered Private Limited Companies**.",
        "This applies regardless of the company's turnover or whether it has conducted any business during the financial year.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Documents to be Prepared",
      content: {
        title: "Financials, Audit & Meeting Records",
        items: [
          "Complete Financial Statements (Balance Sheet, Profit & Loss Account).",
          "**Statutory Audit Report** prepared by a Chartered Accountant.",
          "**Director's Report** and Board Meeting Minutes.",
          "Annual General Meeting (AGM) Minutes.",
          "Digital Signature Certificates (DSCs) of the directors.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Conduct Board Meetings",
      description:
        "Hold a minimum of four board meetings in a calendar year, with a gap of not more than 120 days between two consecutive meetings.",
    },
    {
      step: 2,
      title: "Statutory Audit of Accounts",
      description:
        "Appoint a statutory auditor and get the company's financial statements audited for the financial year.",
    },
    {
      step: 3,
      title: "Hold Annual General Meeting (AGM)",
      description:
        "Conduct an AGM within six months from the end of the financial year (i.e., by 30th September).",
    },
    {
      step: 4,
      title: "File Financial Statements (Form AOC-4)",
      description:
        "File the audited financial statements and Director's Report with the MCA within 30 days of the AGM.",
    },
    {
      step: 5,
      title: "File Annual Return (Form MGT-7)",
      description:
        "File the company's annual return, containing details of directors, shareholders, etc., with the MCA within 60 days of the AGM.",
    },
    {
      step: 6,
      title: "File Income Tax Return (Form ITR-6)",
      description:
        "File the company's annual Income Tax Return. The due date is typically 31st October, as an audit is mandatory.",
    },
  ],
  fees: [
    {
      component: "Government Fees (AOC-4 & MGT-7)",
      fees: "₹300 - ₹600 per form",
      remarks:
        "Varies based on the company's authorized capital. This is for on-time filing.",
    },
    {
      component: "Penalty for Late Filing",
      fees: "₹100 per day, per form",
      remarks: "This penalty has no maximum limit.",
    },
    {
      component: "Professional & Audit Fees",
      fees: "₹15,000 - ₹30,000+ per year",
      remarks:
        "Includes accounting, mandatory audit, and filing of all annual returns with MCA and the Income Tax department.",
    },
  ],
  faqs: [
    {
      q: "Is a statutory audit mandatory for a private limited company?",
      a: "Yes, a statutory audit conducted by a practicing Chartered Accountant is mandatory for every private limited company, irrespective of its turnover or profitability.",
    },
    {
      q: "What is an Annual General Meeting (AGM)?",
      a: "An AGM is a mandatory annual meeting of the company's shareholders. In this meeting, the audited financial statements are approved, directors are appointed, and dividends are declared.",
    },
    {
      q: "What happens if we don't file the annual returns on time?",
      a: "Late filing attracts a steep penalty of ₹100 per day for each overdue form. Continuous failure for three years can lead to the disqualification of directors and the company's name being struck off from the register.",
    },
  ],
};
