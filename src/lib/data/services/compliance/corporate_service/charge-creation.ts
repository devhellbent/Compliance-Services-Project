import { ServiceData } from "@/lib/types";

export const chargeCreationData: ServiceData = {
  title: "Charge Creation, Modification & Satisfaction",
  breadcrumb: [
    "Home",
    "Compliance",
    "Corporate Service",
    "Charge Creation, Modification & Satisfaction",
  ],
  overview: `Charge creation, modification, and satisfaction are critical processes under the Companies Act, 2013, ensuring transparency in the financial dealings of a company. 

**Charge Creation:** When a company raises funds by offering its assets as security, it creates a "charge" on those assets. This must be registered with the Registrar of Companies (ROC) to be valid against the liquidator and other creditors.

**Modification of Charge:** Any change in the terms or conditions of an existing charge, such as an increase in the loan amount or change in the security provided, constitutes a modification and must also be filed with the ROC.

**Satisfaction of Charge:** When the loan or debt is fully repaid, the charge is considered registered "satisfied." The company must intimate the ROC about the repayment to remove the charge from the public records.

These filings are mandatory and time-bound. Non-compliance can lead to penalties and legal complications.`,
  advantages: [
    {
      icon: "ShieldCheck",
      title: "Legal Protection for Creditors",
      text: "Registration of charge provides a public notice, securing the lender's interest against other creditors.",
      subPoints: [
        "Priority in repayment during liquidation.",
        "Legal recognition of the security interest.",
      ],
    },
    {
      icon: "FileCheck",
      title: "Transparency & Credibility",
      text: "Maintain a clear financial record, enhancing the company's credibility with banks and investors.",
      subPoints: [
        "Publicly available records build trust.",
        "Facilitates easier access to future credit.",
      ],
    },
    {
      icon: "TrendingUp",
      title: "Facilitates Fundraising",
      text: "Properly registered charges make it easier for companies to secure loans from financial institutions.",
      subPoints: [
        "Banks require charge registration for secured loans.",
        "Improves creditworthiness.",
      ],
    },
  ],
  disadvantages: [
    {
      icon: "AlertTriangle",
      title: "Strict Timelines",
      text: "Filings must be done within normally 30 days. Delays attract heavy additional fees and condonation requirements.",
      subPoints: [
        "30-day strict deadline.",
        "Adjudication process for long delays.",
      ],
    },
    {
      icon: "FileWarning",
      title: "Penal Provisions",
      text: "Non-compliance results in heavy penalties for the company and its officers.",
      subPoints: [
        "Fine for company: varies by default duration.",
        "Penalty for officers in default.",
      ],
    },
  ],
  eligibility: [
    {
      title: "Eligible Entities",
      items: [
        "Private Limited Companies",
        "Public Limited Companies",
        "One Person Companies (OPC)",
        "Limited Liability Partnerships (LLP) (where applicable)",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Creation/Modification",
      content: {
        title: "Documents for Creation/Modification",
        items: [
          "Loan Sanction Letter",
          "Board Resolution authorizing the charge",
          "Instrument creating the charge (Hypothecation Deed, Mortgage Deed, etc.)",
          "List of terms and conditions",
        ],
      },
    },
    {
      tabTitle: "Satisfaction",
      content: {
        title: "Documents for Satisfaction",
        items: [
          "No Objection Certificate (NOC) from the Bank/Lender",
          "Board Resolution approving the satisfaction",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Board Resolution",
      description:
        "Hold a Board Meeting to pass a resolution authorizing the Creation/Modification/Satisfaction of charge.",
    },
    {
      step: 2,
      title: "Execution of Documents",
      description:
        "Execute the necessary loan agreements or deeds with the lender.",
    },
    {
      step: 3,
      title: "Filing Forms",
      description:
        "File Form CHG-1 (for other than debentures) or CHG-9 (for debentures) or CHG-4 (for satisfaction) with the ROC.",
    },
    {
      step: 4,
      title: "Certificate Issuance",
      description:
        "ROC issues the Certificate of Registration/Modification/Satisfaction of Charge.",
    },
  ],
  fees: [
    {
      component: "Government Fees",
      fees: "Based on Authorized Capital",
      remarks: "Varies from ₹200 to ₹600 for normal filing.",
    },
    {
      component: "Professional Fees",
      fees: "Market Standard",
      remarks: "Includes consultation and filing assistance.",
    },
  ],
  faqs: [
    {
      q: "What is the time limit for filing charge forms?",
      a: "The forms must be filed within 30 days of the creation, modification, or satisfaction of the charge.",
    },
    {
      q: "Can I file after 30 days?",
      a: "Yes, with additional fees up to 300 days (for creation/modification). Beyond that, condonation of delay from the Regional Director is required.",
    },
  ],
};
