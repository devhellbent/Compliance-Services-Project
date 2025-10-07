// lib/data/services/section-8-company-compliance.ts

import { ServiceData } from "@/lib/types";

export const section8CompanyComplianceData: ServiceData = {
  title: "Section 8 Company Annual Compliance",
  breadcrumb: ["Home", "MCA", "Section 8 Company Compliance"],
  overview:
    "**Section 8 Company Annual Compliance** involves the mandatory filings required to maintain its legal and tax-exempt status. This includes the standard company filings with the Ministry of Corporate Affairs (MCA), such as **Form AOC-4** and **Form MGT-7**, as well as specialized filings with the Income Tax Department (like **ITR-7**) to uphold its non-profit character. 🕊️ Regular compliance is crucial to avoid penalties and the risk of license revocation.",
  advantages: [
    {
      icon: "ShieldCheck",
      title: "Maintains Section 8 License",
      text: "Timely compliance is fundamental to retaining the license granted by the Central Government to operate as a non-profit.",
    },
    {
      icon: "BadgePercent",
      title: "Retains Tax-Exempt Status",
      text: "Filing the correct returns is necessary to continue enjoying the tax benefits under sections 12A and 80G of the Income Tax Act.",
    },
    {
      icon: "Eye",
      title: "Ensures Transparency",
      text: "Proper compliance provides transparency to donors, members, and government authorities about the company's financials and activities.",
    },
    {
      icon: "Landmark",
      title: "Crucial for Receiving Grants",
      text: "A clean compliance record is a prerequisite for applying for and receiving government grants and corporate CSR funds.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertTriangle",
      title: "Heavy Daily Penalties",
      text: "Like other companies, late filing of MCA forms (AOC-4, MGT-7) attracts a penalty of ₹100 per day for each form.",
    },
    {
      icon: "FileX",
      title: "Risk of License Revocation",
      text: "Serious non-compliance or deviation from its non-profit objectives can lead to the Central Government revoking the Section 8 license.",
    },
    {
      icon: "UserX",
      title: "Director Disqualification",
      text: "Failure to file annual returns for three consecutive years can lead to the disqualification of the company's directors.",
    },
  ],
  eligibility: [
    {
      title: "Applicability",
      items: [
        "Annual compliance is **mandatory for all registered Section 8 Companies**.",
        "This applies even if the company has not received any donations or conducted any activities during the financial year.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Documents to be Prepared",
      content: {
        title: "Financials, Audit & Meeting Records",
        items: [
          "Complete Financial Statements (Balance Sheet, Income & Expenditure Account).",
          "**Statutory Audit Report** prepared by a Chartered Accountant.",
          "Director's Report and Board Meeting Minutes.",
          "Annual General Meeting (AGM) Minutes.",
          "A detailed list of all donations received during the year.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Statutory Audit of Accounts",
      description:
        "A mandatory audit of the company's financial statements must be conducted by a practicing Chartered Accountant after the end of the financial year.",
    },
    {
      step: 2,
      title: "Hold Annual General Meeting (AGM)",
      description:
        "Conduct an AGM within six months from the end of the financial year (by 30th September) to approve the audited accounts and appoint auditors.",
    },
    {
      step: 3,
      title: "File Financial Statements (Form AOC-4)",
      description:
        "File the audited financial statements and other reports with the MCA within 30 days of the AGM.",
    },
    {
      step: 4,
      title: "File Annual Return (Form MGT-7)",
      description:
        "File the company's annual return with the MCA within 60 days of the AGM.",
    },
    {
      step: 5,
      title: "File Income Tax Return (Form ITR-7)",
      description:
        "File the annual Income Tax Return in Form ITR-7, which is specifically for entities claiming tax exemption under sections 11 and 12.",
    },
    {
      step: 6,
      title: "File Statement of Donations (Form 10BD)",
      description:
        "If the company has 80G registration, it must file this annual statement listing all donations received. The due date is typically 31st May.",
    },
  ],
  fees: [
    {
      component: "Government Fees (AOC-4 & MGT-7)",
      fees: "₹200 - ₹600 per form",
      remarks:
        "Varies based on the company's capital. This is for on-time filing.",
    },
    {
      component: "Professional & Audit Fees",
      fees: "₹18,000 - ₹35,000+ per year",
      remarks:
        "Includes mandatory audit, preparation of reports, and filing of all returns with MCA and the Income Tax department (ITR-7, 10BD).",
    },
  ],
  faqs: [
    {
      q: "Is an audit mandatory for a Section 8 Company?",
      a: "Yes, a statutory audit is mandatory for every Section 8 Company, regardless of its income, turnover, or activities.",
    },
    {
      q: "Can a Section 8 Company pay a salary to its directors?",
      a: "Yes, it can pay a reasonable salary or remuneration to its directors for the professional services they provide. However, it cannot distribute profits or dividends to any of its members.",
    },
    {
      q: "What happens if a Section 8 Company makes a profit?",
      a: "If a Section 8 Company generates a surplus (profit), the amount must be reinvested in the company to further its charitable objectives. It cannot be distributed among the members.",
    },
  ],
};
