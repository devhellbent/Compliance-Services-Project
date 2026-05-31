// lib/data/services/section-8-company.ts

import { ServiceData } from "@/lib/types";

export const section8CompanyData: ServiceData = {
  title: "Section 8 Company (NGO) Registration",
  breadcrumb: ["Home", "Registrations", "Section 8 Company"],
  description:
    "Transform social impact into sustainable change. Section 8 Company registration provides NGOs with corporate structure advantages, tax benefits, and legal credibility to pursue charitable, educational, and social welfare objectives with professional governance.",
  overview: `**What is a Section 8 Company**

A Section 8 Company is a special type of Non-Profit Organization (NPO) formed under the Companies Act, 2013. It is established with the aim of promoting activities that benefit society such as education, art, science, sports, research, social welfare, charity, religion, and environmental protection.

Unlike regular companies that work for profit, a Section 8 Company uses its income solely for its charitable objectives. No portion of its profits can be distributed as dividends to its members every rupee earned is reinvested to support the organization's mission.

With just two or more people sharing a non-profit vision, a Section 8 Company can be registered. This structure provides a recognized and transparent legal identity, allowing the organization to receive funds, own property, sign agreements, and carry out all activities in its own name.

By combining the credibility of a corporate entity with the purpose of a charitable organization, Section 8 Companies play a vital role in driving social and economic development in India.`,
  whyChooseUs: [
    {
      icon: "Heart",
      title: "Charitable Objects",
      text: "Established for non-profit purposes.",
    },
    {
      icon: "BadgePercent",
      title: "Tax Exemptions",
      text: "Eligible for tax benefits under Sections 12A and 80G of the Income Tax Act.",
    },
    {
      icon: "Award",
      title: "Credibility",
      text: "Registered under the Companies Act, which provides higher credibility.",
    },
    {
      icon: "Globe",
      title: "No Suffix",
      text: "Exempt from using 'Limited' or 'Private Limited' in its name.",
    },
  ],
  advantages: [
    {
      icon: "Award",
      title: "High Credibility",
      text: "Being registered under the Companies Act provides more trust and transparency than a trust or society.",
    },
    {
      icon: "BadgePercent",
      title: "Tax Exemptions",
      text: "Eligible for various tax benefits under the Income Tax Act (Sections 12AB and 80G).",
    },
    {
      icon: "Banknote",
      title: "No Minimum Capital",
      text: "Can be incorporated with zero minimum capital.",
    },
    {
      icon: "Shield",
      title: "Limited Liability Protection",
      text: "Protects members' personal assets from the company's liabilities.",
    },
    {
      icon: "Landmark",
      title: "Access to Grants and CSR Funds",
      text: "Highly favored by corporate donors for Corporate Social Responsibility (CSR) funding.",
    },
    {
      icon: "Globe",
      title: "Global Recognition",
      text: "Easier to receive foreign contributions (subject to FCRA registration) due to its formal corporate structure.",
    },
  ],
  disadvantages: [
    {
      icon: "FileWarning",
      title: "Strict Compliance Burden",
      text: "Subject to the same rigorous audit and filing requirements as other companies.",
    },
    {
      icon: "Ban",
      title: "No Profit Sharing",
      text: "Members cannot receive any financial returns or dividends.",
    },
    {
      icon: "Lock",
      title: "Restricted Object Changes",
      text: "Any change in the charitable objects requires prior approval from the Central Government.",
    },
    {
      icon: "Clock",
      title: "Difficult to Close",
      text: "Winding up a Section 8 Company is a complex and highly regulated process.",
    },
    {
      icon: "Scale",
      title: "Strict Use of Funds",
      text: "Funds can only be used for the specified objects; any diversion can lead to revocation of the license.",
    },
  ],
  eligibility: [
    {
      title: "Mandatory Conditions",
      items: [
        "**Charitable Objects:** Established solely for the promotion of commerce, art, science, sports, education, research, social welfare, religion, charity, protection of the environment, etc.",
        "**Application of Profits:** Must intend to apply its profits or income solely for promoting its charitable objects.",
        "**No Dividends:** Must prohibit the payment of any dividend to its members.",
        "**Minimum Directors:** At least 2 for Private Limited, 3 for Public Limited.",
        "**Resident Director:** At least one director must be a resident of India.",
        "**Government License:** Must obtain a license from the Central Government.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Documents for Directors and Subscribers",
      content: {
        title: "Documents for Directors and Subscribers",
        items: [
          "**Proof of Identity:** ",
          "**Permanent Account Number (PAN) Card** (Mandatory for Indian Nationals).",
          "Any government-issued identity proof such as a **Voter ID, Driving License, or Passport.** (For foreign nationals, a notarised and apostilled copy of the **Passport** is mandatory).",
          "A recent **Passport-sized Photograph**. ",
          "**Proof of Address (Residential Proof):** ",
          "A copy of a recent utility bill in the director\\'s name, such as a **Bank Statement, Electricity Bill, Telephone Bill, or Mobile Bill**. This document should generally **not be older than two months**. (For foreign nationals, this document must be notarised and apostilled). ",
          "**Statutory Declarations and Consent:** ",
          "**Form DIR-2:** Consent to act as a Director.",
          "**Form INC-9:** Declaration from all subscribers and first directors regarding non-conviction and non-guilt of fraud/misfeasance.",
          "**Form INC-15:** Declaration by each person making the application. ",
          "**Other Essentials:** ",
          "A **Digital Signature Certificate (DSC)** of the Class 3 category for all proposed directors to sign the electronic forms.",
          "A **Director Identification Number (DIN)** for all proposed directors (this can be applied for within the main incorporation form).",
        ],
      },
    },
    {
      tabTitle: "Documents for the Registered Office",
      content: {
        title: "Documents for the Registered Office",
        items: [
          "**If the property is Owned:** ",
          "Copy of the Sale Deed, Property Tax Receipt, or Title Deed.",
          "A copy of a recent Utility Bill (Electricity, Gas, or Water bill) showing the address, which should **not be older than two months**. \u2022 **If the property is Rented/Leased:**\u2022",
          "A notarised copy of the **Lease Agreement or Rent Agreement**.",
          "A copy of a recent Utility Bill (not older than two months).",
          "A **No Objection Certificate (NOC)** from the property owner, explicitly permitting the use of the premises as the company\\'s registered office.",
        ],
      },
    },
    {
      tabTitle: "Constitutional and Core Documents",
      content: {
        title: "Constitutional and Core Documents",
        items: [
          "**Memorandum of Association (MOA):** This is filed in **Form INC-13** and outlines the charitable objects and the main purpose for which the company is being formed.",
          "**Articles of Association (AOA):** This document contains the internal regulations for the management of the company.",
          "**Declaration from a Professional (Form INC-14):** A declaration is required from a practicing Chartered Accountant (CA), Company Secretary (CS), or Cost Accountant (CWA) certifying that the draft MOA and AOA comply with the provisions of Section 8.",
          "**Estimate of Income and Expenditure:** A projection of the company\\'s estimated annual income and expenses for the next **three years**, detailing the sources of income and the objects of the expenditure.",
          "**Name Approval Letter:** Evidence of the approval of the proposed company name by the Registrar of Companies (RoC).",
        ],
      },
    },
    {
      tabTitle: "Forms Required",
      content: {
        title: "Statutory Forms for Registration",
        items: [
          "**SPICe+ Part A:** For Name Reservation.",
          "**SPICe+ Part B:** Integrated form for Incorporation, DIN, PAN, and TAN.",
          "**e-MOA (INC-33/13):** Electronic Memorandum of Association.",
          "**e-AOA (INC-34):** Electronic Articles of Association.",
          "**AGILE-PRO-S:** For GSTIN, EPFO, ESIC, and Bank Account opening.",
          "**INC-12:** Application for Grant of License.",
          "**INC-14/15:** Declarations by Professionals and Applicants.",
          "**DIR-2:** Consent to act as Director.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "DSC & DIN",
      description: "Obtain DSC and DIN for directors.",
    },
    {
      step: 2,
      title: "Name Approval",
      description: "Reserve a unique name for the company.",
    },
    {
      step: 3,
      title: "License Application",
      description: "Apply for a license from the Central Government.",
    },
    {
      step: 4,
      title: "Incorporation",
      description: "File the incorporation form with the RoC.",
    },
  ],
  fees: [
    {
      component: "Digital Signature Certificate (DSC)",
      fees: "₹1,000 - ₹2,000",
      remarks: "Per director",
    },
    {
      component: "Name Approval (SPICe+ Part A)",
      fees: "₹1,000",
      remarks: "For name reservation",
    },
    {
      component: "Section 8 License (Form INC-12)",
      fees: "₹2,000",
      remarks: "Government fee for license application",
    },
    {
      component: "Government/ROC Fees (SPICe+ Part B)",
      fees: "Minimal (often waived)",
      remarks:
        "Filing fees for incorporation forms are generally waived by MCA.",
    },
    {
      component: "Stamp Duty",
      fees: "Varies by state",
      remarks: "Applicable as per state regulations on MoA and AoA.",
    },
    {
      component: "Professional Fees (CA/CS/Lawyer)",
      fees: "₹15,000 - ₹30,000",
      remarks:
        "Includes documentation, drafting MoA/AoA, filing for license and incorporation, and consultation.",
    },
    {
      component: "Total Estimated Cost",
      fees: "₹20,000 - ₹40,000",
      remarks: "Varies based on state and professional fees.",
    },
  ],
  faqs: [
    {
      q: "What is the main purpose of a Section 8 Company?",
      a: "The main purpose is to promote non-profit objectives such as charity, art, science, education, social welfare, and environmental protection. Any income generated must be used to support these objectives, not distributed to members.",
    },
    {
      q: "Can a Section 8 Company earn profits?",
      a: "Yes, it can earn profits, but these profits must be reinvested back into the company to further its non-profit goals. They cannot be distributed as dividends to its members.",
    },
    {
      q: "What is the difference between a Trust, Society, and Section 8 Company?",
      a: "A Section 8 Company is registered under the Companies Act, offering high credibility and governance. A Trust is governed by the Indian Trusts Act, is easier to form, and managed by trustees. A Society, under the Societies Registration Act, is suitable for state-level operations with a more democratic structure. Section 8 Companies are often preferred for nationwide operations and receiving government/foreign grants.",
    },
    {
      q: "What are Section 12A and 80G registrations?",
      a: "Section 12A registration is a one-time registration that exempts the income of an NGO from income tax. Section 80G registration allows donors to claim tax deductions on their donations to the NGO. Both are crucial for the financial operations of a Section 8 Company and must be applied for separately after incorporation.",
    },
    {
      q: "Can a Section 8 Company receive foreign donations?",
      a: "Yes, but it must first obtain registration under the Foreign Contribution (Regulation) Act, 2010 (FCRA). Without FCRA registration, a Section 8 Company cannot accept donations from foreign sources.",
    },
    {
      q: "Is there a minimum capital requirement for a Section 8 Company?",
      a: "No, there is no minimum paid-up capital requirement for incorporating a Section 8 Company. It can be started with any amount of capital that the promoters deem sufficient for its operations.",
    },
    {
      q: "What happens to the assets of a Section 8 Company upon its dissolution?",
      a: "Upon winding up or dissolution, the company's remaining assets must be transferred to another Section 8 Company having similar objectives. They cannot be distributed among the members.",
    },
    {
      q: "Is it mandatory to have an office for a Section 8 Company?",
      a: "Yes, a registered office address within India is mandatory for communication and legal purposes. This address must be verified during the incorporation process.",
    },
    {
      q: "How long does the registration process take?",
      a: "The process involves obtaining the Section 8 license and then incorporating the company. It typically takes around 20-30 working days, depending on government processing times and document verification.",
    },
    {
      q: "Can the objectives of a Section 8 Company be changed later?",
      a: "Yes, but altering the Memorandum of Association (MoA) to change the objectives requires prior approval from the Central Government, making it a more complex process than for other company types.",
    },
  ],
};
