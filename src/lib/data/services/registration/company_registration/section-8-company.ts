// lib/data/services/section-8-company.ts

import { ServiceData } from "@/lib/types";

export const section8CompanyData: ServiceData = {
  title: "Section 8 Company (NGO) Registration",
  breadcrumb: ["Home", "Registrations", "Section 8 Company"],
  description:
    "Transform social impact into sustainable change. Section 8 Company registration provides NGOs with corporate structure advantages, tax benefits, and legal credibility to pursue charitable, educational, and social welfare objectives with professional governance.",
  overview:
    "A **Section 8 Company** represents a specialized non-profit corporate structure established under Section 8 of the Companies Act, 2013, designed specifically for organizations pursuing charitable causes, social welfare, education, arts, science, research, environmental protection, or sports promotion. Unlike traditional companies, Section 8 entities channel all profits and income exclusively toward advancing their stated objectives, with strict prohibition on dividend distribution to members, ensuring complete focus on social impact rather than commercial gains. This corporate structure combines the credibility and perpetual succession of a company with the philanthropic mission of an NGO, making it highly attractive to donors, grant-making institutions, and corporate social responsibility (CSR) programs. The registration process, overseen by the Ministry of Corporate Affairs, grants the company exemption from using 'Limited' or 'Private Limited' in its name, allowing clean, mission-focused branding. Section 8 Companies enjoy significant tax benefits under the Income Tax Act, including exemptions under Sections 12A and 80G, which enable donors to claim tax deductions for their contributions, thereby enhancing fundraising potential. The structure mandates minimum three directors and two members, with no minimum capital requirement, making it accessible for social entrepreneurs and philanthropists. Corporate governance requirements ensure transparency and accountability through mandatory annual filings, audit reports, and board meetings, building trust among stakeholders and beneficiaries. This structure facilitates foreign funding through FCRA registration, enables property ownership, and provides legal standing to enter contracts, receive grants, and protect intellectual property. The professional framework attracts qualified professionals and volunteers while ensuring long-term sustainability through structured succession planning. Ideal for charitable trusts transitioning to corporate governance, educational institutions, healthcare initiatives, environmental organizations, and social enterprises, Section 8 Companies deliver the perfect balance of social mission and corporate credibility.",
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
      title: "High Credibility & Trust",
      text: "Registered under the Companies Act and regulated by MCA, it has higher credibility among donors, government bodies, and the public compared to trusts or societies.",
    },
    {
      icon: "Building2",
      title: "Separate Legal Entity & Perpetual Succession",
      text: "It has its own legal identity, separate from its members. It can own property, incur debts, and enjoys perpetual existence.",
    },
    {
      icon: "BadgePercent",
      title: "Tax Benefits & Exemptions",
      text: "Qualifies for numerous tax exemptions under the Income Tax Act. Donors can claim tax deductions under Section 80G and 12A (after registration).",
    },
    {
      icon: "Globe",
      title: "No 'Limited' or 'Pvt Ltd' Suffix",
      text: "Exempt from using 'Private Limited' or 'Limited' in its name, enhancing its non-profit image. Can use names like Foundation, Federation, Association, etc.",
    },
    {
      icon: "ShieldCheck",
      title: "Limited Liability for Members",
      text: "Members' liability is limited to the amount they have contributed to the company, protecting their personal assets.",
    },
    {
      icon: "Landmark",
      title: "Eligibility for Government Grants & Foreign Donations (FCRA)",
      text: "Can easily obtain government grants and is eligible to register under the Foreign Contribution (Regulation) Act (FCRA) to receive foreign donations.",
    },
  ],
  disadvantages: [
    {
      icon: "Ban",
      title: "No Profit Distribution",
      text: "All profits and income must be reinvested into the company's objectives. Cannot be distributed to members as dividends.",
    },
    {
      icon: "FileText",
      title: "Strict Compliance & Regulatory Burden",
      text: "Subject to all compliance requirements of the Companies Act, including audits, board meetings, annual filings (AOC-4, MGT-7), and maintaining statutory registers.",
    },
    {
      icon: "Gavel",
      title: "Cannot Alter Objectives Easily",
      text: "The Memorandum of Association (MoA) and Articles of Association (AoA) cannot be altered without prior approval from the Central Government.",
    },
    {
      icon: "AlertTriangle",
      title: "Complex Winding-Up Process",
      text: "The winding-up process is complex. Upon dissolution, assets must be transferred to another Section 8 Company with similar objectives.",
    },
    {
      icon: "DollarSign",
      title: "Higher Formation & Maintenance Costs",
      text: "Incorporation and annual compliance costs are higher than for a trust or society due to MCA regulations and professional fees.",
    },
  ],
  eligibility: [
    "A minimum of two directors are required.",
    "The company's objectives must be for charitable purposes.",
  ],
  documents: [
    {
      title: "For Directors/Shareholders",
      items: ["PAN Card", "Identity Proof", "Address Proof", "Photograph"],
    },
    {
      title: "For Registered Office",
      items: ["Utility Bill", "NOC from the owner"],
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
