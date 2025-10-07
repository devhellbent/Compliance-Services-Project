// lib/data/services/nidhi-company-compliance.ts

import { ServiceData } from "@/lib/types";

export const nidhiCompanyComplianceData: ServiceData = {
  title: "Nidhi Company Annual Compliance",
  breadcrumb: ["Home", "MCA", "Nidhi Company Compliance"],
  overview:
    "**Nidhi Company Compliance** is a stringent set of rules that these companies must follow. It includes both the standard annual filings required of a Public Limited Company and several unique, specialized compliances mandated by the **Nidhi Rules, 2014**. Key Nidhi-specific forms include **Form NDH-1** (Annual Return) and **Form NDH-3** (Half-Yearly Return). Strict adherence is critical to maintain the company's 'Nidhi' status.",
  advantages: [
    {
      icon: "ShieldCheck",
      title: "Maintains Nidhi Status",
      text: "Timely compliance is essential to retain the legal status of a Nidhi Company and avoid its revocation by the Central Government.",
    },
    {
      icon: "FileWarning",
      title: "Avoids Heavy Penalties",
      text: "Helps in avoiding hefty penalties, fines, and potential imprisonment for the company's officers in default.",
    },
    {
      icon: "Users",
      title: "Builds Trust Among Members",
      text: "A compliant Nidhi company is seen as more reliable and trustworthy, encouraging more members to save and transact with it.",
    },
    {
      icon: "Gavel",
      title: "Ensures Legal Continuity",
      text: "Proper compliance ensures the smooth and legal operation of the business, preventing disruptions from regulatory actions.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertTriangle",
      title: "Multiple and Frequent Filings",
      text: "Nidhi companies have more filings than a standard company, including post-incorporation, half-yearly, and annual returns.",
    },
    {
      icon: "FileX",
      title: "Risk of Status Revocation",
      text: "Failure to meet the conditions of the Nidhi Rules can lead to the Central Government revoking its status as a 'Nidhi Company'.",
    },
    {
      icon: "Gavel",
      title: "Strict Operational Constraints",
      text: "Compliance involves adhering to strict rules regarding loans, deposits, and membership, which are continuously monitored.",
    },
  ],
  eligibility: [
    {
      title: "Applicability",
      items: [
        "These compliances are **mandatory for all registered Nidhi Companies**.",
        "This includes post-incorporation targets, half-yearly returns, and annual filings with both the MCA and the Income Tax Department.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Documents to be Prepared",
      content: {
        title: "Financials, Statutory Records & Member Lists",
        items: [
          "Audited Financial Statements (Balance Sheet, P&L).",
          "Statutory Audit Report and Director's Report.",
          "Statutory Registers of the company.",
          "List of all members added during the half-year/year.",
          "Details of loans granted and deposits accepted.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Post-Incorporation Compliance (within 1 Year)",
      description:
        "Achieve a minimum of 200 members, have Net Owned Funds of ₹20 lakh or more, and maintain a Net Owned Funds to deposit ratio of 1:20.",
    },
    {
      step: 2,
      title: "File Form NDH-1 (Annual Return)",
      description:
        "File this return with the MCA within 90 days from the close of the first financial year, detailing the status of post-incorporation compliance. This is a one-time filing.",
    },
    {
      step: 3,
      title: "File Form NDH-3 (Half-Yearly Return)",
      description:
        "File this return within 30 days from the end of each half-year (i.e., by 30th October for the April-September period and 30th April for the October-March period).",
    },
    {
      step: 4,
      title: "Standard Annual Filings (AOC-4 & MGT-7)",
      description:
        "File the company's audited financial statements (AOC-4) and annual return (MGT-7) with the MCA after the AGM, just like any other public company.",
    },
    {
      step: 5,
      title: "File Income Tax Return (ITR-6)",
      description:
        "File the company's annual Income Tax Return with the IT department by the due date.",
    },
  ],
  fees: [
    {
      component: "Government Fees (NDH, AOC-4, MGT-7)",
      fees: "Varies",
      remarks:
        "Statutory fees for each form filing depend on the company's authorized capital.",
    },
    {
      component: "Professional & Audit Fees",
      fees: "₹25,000 - ₹50,000+ per year",
      remarks:
        "Higher than a standard PLC due to the specialized nature and frequency of Nidhi-specific filings (NDH-1, NDH-3).",
    },
  ],
  faqs: [
    {
      q: "What is Form NDH-1 and why is it important?",
      a: "Form NDH-1 is a one-time return filed after the first financial year to report to the MCA that the Nidhi company has successfully met its mandatory post-incorporation targets (like having 200 members). Failure to file this is a serious non-compliance.",
    },
    {
      q: "What happens if a Nidhi company fails to meet the 200-member target in a year?",
      a: "If a Nidhi company fails to meet this target, it must apply to the Regional Director (RD) for an extension of time. The RD may grant an extension, but repeated failure can lead to the revocation of its Nidhi status.",
    },
    {
      q: "Are there any restrictions on the loans a Nidhi company can give?",
      a: "Yes, there are many restrictions. For example, a Nidhi company cannot give unsecured loans, and the maximum loan amount to a single member is linked to the total deposits of the company (e.g., up to ₹2 lakh if deposits are less than ₹2 crore).",
    },
  ],
};
