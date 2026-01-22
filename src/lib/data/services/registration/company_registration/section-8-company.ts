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
      icon: "CheckCircle",
      title: "Separate Legal Entity",
      text: "** It can own assets, enter into contracts, and manage its affairs independently, providing stability and longevity (perpetual succession).",
    },
    {
      icon: "CheckCircle",
      title: "Limited Liability",
      text: "** It protects the personal assets of its directors and members from the company\\'s liabilities, encouraging more people to participate in social causes without personal financial risk.",
    },
    {
      icon: "CheckCircle",
      title: "Tax Exemptions",
      text: "** It becomes eligible to apply for significant tax benefits under the Income Tax Act (Sections 12A and 80G), which not only helps the organization save tax on its income but also provides **tax deductions to its donors**, thereby boosting fundraising capabilities.",
    },
    {
      icon: "CheckCircle",
      title: "Access to Corporate Social Responsibility (CSR) Funding",
      text: "** Due to its credibility and structured compliance, a Section 8 Company is often the preferred and most eligible entity for receiving CSR funds from for-profit corporations.",
    },
  ],
  disadvantages: [
    {
      icon: "CheckCircle",
      title: "Charitable Objects",
      text: "",
      subPoints: [
        "The company must be established **solely for the promotion** of commerce, art, science, sports, education, research, social welfare, religion, charity, protection of the environment, or any such other object.",
      ],
    },
    {
      icon: "HandCoins",
      title: "Application of Profits/Income",
      text: "",
      subPoints: [
        "The company must **intend to apply its profits, if any, or other income** solely for promoting its charitable objects.",
        "It must **prohibit the payment of any dividend** to its members. Profits cannot be distributed to its members in any form.",
      ],
    },
    {
      icon: "Scale",
      title: "Legal Structure and Members/Directors",
      text: "",
      subPoints: [
        "**Applicants:** An individual or an association of persons (including firms, Hindu Undivided Families, and other companies) can apply.",
        "**Minimum Directors/Members:** ",
        "For a **Private Limited** Section 8 Company: **Minimum 2 Directors** and **2 Members/Subscribers**.",
        "For a **Public Limited** Section 8 Company: **Minimum 3 Directors** and **7 Members/Subscribers**. ",
        "**Resident Director:** At least **one director** must be a resident of India (i.e., stayed in India for a minimum of 182 days in the previous financial year).",
        "**No Minimum Capital:** There is **no requirement** for a minimum paid-up capital.",
      ],
    },
    {
      icon: "CheckCircle",
      title: "Government License",
      text: "",
      subPoints: [
        "The Central Government (or the delegated authority, like the Registrar of Companies/Regional Director) must be satisfied with the application and issue a **license** to the person or association of persons to be registered as a Section 8 company.",
      ],
    },
    {
      icon: "CheckCircle",
      title: "Name Requirement",
      text: "",
      subPoints: [
        'The company\\\'s name must not include the words \\"**Limited**\\" or \\"**Private Limited**\\" but should typically include words like *Foundation, Forum, Association, Chamber, Council*, etc. **Forms Required for Section 8 Company Registration in India** The registration process for a Section 8 Company in India is now primarily conducted through the integrated electronic form on the Ministry of Corporate Affairs (MCA) portal. The main forms required for the *incorporation* and *grant of license* for a new Section 8 Company are:',
      ],
    },
    {
      icon: "CheckCircle",
      title: "I. The Integrated e",
      text: "Forms (SPICe+ and AGILE-PRO-S)** The current system streamlines the process by combining name reservation, incorporation, and several initial registrations into a single application. ------------------ --------------------------- ------------------------ **Form No.**       **Purpose**                 **Notes** **SPICe+ Part A**  For Name Reservation (or    Allows reservation of can be filed along with     one name. Part B). **SPICe+ Part B**  For Incorporation and       Automatically applies mandatory registrations     for DIN for directors (DIN, PAN, TAN).            without one (up to 3), PAN, and TAN. **e-MOA (INC-33)** Electronic Memorandum of    Mandatory Association.                attachment/part of the SPICe+ filing. **Must be in Form INC-13** for a Section 8 Company. **e-AOA (INC-34)** Electronic Articles of      Mandatory Association.                attachment/part of the SPICe+ filing. **AGILE-PRO-S**    Application for Goods and   Must be filed as a Services Tax Identification linked form with SPICe+. Number (GSTIN), Employees\\' Bank account opening is Provident Fund Organisation mandatory. (EPFO), Employees\\' State Insurance Corporation (ESIC), and opening a **Bank Account**. ------------------ --------------------------- ------------------------",
    },
    {
      icon: "CheckCircle",
      title: "II. Declarations and Consents (Required Attachments)",
      text: "These forms are critical declarations that are submitted as attachments within the SPICe+ Part B form: ------------ ----------------------- --------------------------------------- **Form No.** **Purpose**             **Who Files/Signs It** **INC-12**   Application for Grant   Crucially, for *new* company of License under        incorporation, the application for the Section 8.              Section 8 license is now typically filed *through* SPICe+ Part B, in line with simplified rules. However, the requirement for the core supporting documents (see below) remains. INC-12 is still used for an *existing* company converting to Section 8. **INC-14**   Declaration by          A practicing Chartered Accountant (CA), Professional.           Company Secretary (CS), Cost Accountant (CMA), or an Advocate must declare that the draft MOA and AOA comply with Section 8 rules. **INC-15**   Declaration by          A declaration by each person applying Applicants.             for the license stating that the information provided is true and correct. **INC-9**    Declaration of          A declaration from all subscribers and Subscribers and First   first directors that they are not Directors.              disqualified to act as directors. This is generated electronically in most cases. **DIR-2**    Consent to Act as       Consent from each person named as a Director.               first director in the Articles of Association. ------------ ----------------------- ---------------------------------------",
    },
  ],
  eligibility: [
    "A minimum of two directors are required.",
    "The company's objectives must be for charitable purposes.",
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
