// lib/data/services/partnership.ts

import { ServiceData } from "@/lib/types";

export const partnershipData: ServiceData = {
  title: "Partnership Firm Registration",
  breadcrumb: ["Home", "Registrations", "Company Registration", "Partnership"],
  description:
    "Unite strengths, share success. Partnership firm registration enables two or more professionals to combine their expertise and resources, creating a legally recognized business structure that distributes profits, responsibilities, and growth opportunities among partners.",
  overview: `**Partnership Firm Registration**

Partnership firm registration is the legal process of formally registering a business partnership with the Registrar of Firms, as per the Indian Partnership Act, 1932. While registration is not mandatory, it is highly recommended due to the significant benefits it offers

Once a partnership firm is registered, it becomes a legally recognized entity, giving your business formal standing in the eyes of the law.In short, registration strengthens your business foundation and helps it grow with confidence and security.`,
  whyChooseUs: [
    {
      icon: "Users",
      title: "Agreement",
      text: "A partnership is formed by an agreement, which can be either verbal or written, between two or more people. A written agreement, known as a partnership deed, is highly recommended to avoid future disputes.",
    },
    {
      icon: "Users",
      title: "Two or More Persons",
      text: "A partnership requires a minimum of two individuals. The maximum number of partners is 50 for any business as per the Companies (Miscellaneous) Rules, 2014, and 10 for a banking business.",
    },
    {
      icon: "Briefcase",
      title: "Business",
      text: "The primary purpose of a partnership is to carry on a lawful business with the intention of earning and sharing profits.",
    },
    {
      icon: "PieChart",
      title: "Profit Sharing",
      text: "The partners agree to share the profits and losses of the business in a predetermined ratio.",
    },
    {
      icon: "AlertTriangle",
      title: "Unlimited Liability",
      text: "Partners have unlimited personal liability for the debts and obligations of the firm. This means that if the firm's assets are insufficient to cover its liabilities, the personal assets of the partners can be used to pay off the debts.",
    },
    {
      icon: "Handshake",
      title: "Mutual Agency",
      text: "The business can be run by all partners or by any one of them acting on behalf of all. This implies that every partner is both an agent and a principal for the firm and their co-partners. The act of one partner in the course of business binds all the other partners.",
    },
    {
      icon: "Building",
      title: "No Separate Legal Entity",
      text: "A partnership firm does not have a separate legal identity from its partners. The firm and its partners are considered one and the same in the eyes of the law.",
    },
  ],
  advantages: [
    {
      icon: "Scale",
      title: "Legal Protection and Credibility",
      text: "A registered firm and its partners have the legal right to file a lawsuit against third parties or other partners to enforce a right arising from a contract. Registration gives the firm a legal identity, enhancing its credibility with clients, suppliers, and government bodies.",
    },
    {
      icon: "TrendingUp",
      title: "Access to Financial Opportunities",
      text: "Registered firms are more likely to secure loans and credit facilities from banks and financial institutions. A registered entity can enter into contracts, acquire assets, and engage in legal transactions in its own name.",
    },
    {
      icon: "Users",
      title: "Dispute Resolution",
      text: "The registration process involves a partnership deed, a legally binding document that outlines the rights, duties, and responsibilities of each partner. This serves as a clear reference for resolving internal conflicts and misunderstandings.",
    },
    {
      icon: "Receipt",
      title: "Tax Benefits and Compliance",
      text: "Registered firms are eligible for various tax benefits, deductions, and exemptions, which can help reduce the overall tax liability. A registered partnership can be more easily converted into a different business structure.",
    },
    {
      icon: "Shield",
      title: "Partner Protection and Continuity",
      text: "The partnership deed registered with the Registrar of Firms provides clear documentation of the capital contributions, profit-sharing ratio, and liability of each partner. A registered firm can include provisions for seamless admission of new partners or withdrawal of existing ones.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertTriangle",
      title: "Unlimited Liability",
      text: "The biggest drawback is that partners in a general partnership have unlimited liability. Their personal assets can be used to pay off the firm's debts and obligations if the business fails.",
    },
    {
      icon: "Building",
      title: "Lack of Perpetual Succession",
      text: "A partnership firm does not have a perpetual existence. It can be dissolved due to the death, retirement, or insolvency of a partner, which can disrupt the business.",
    },
    {
      icon: "FileCheck",
      title: "Compliance Requirements",
      text: "While partnerships have fewer compliance requirements compared to companies, a registered firm must still inform the Registrar of Firms about any changes in the firm's name, address, or partners.",
    },
    {
      icon: "Percent",
      title: "High Tax Rate",
      text: "Partnership firms are subject to a flat tax rate of 30% on their total income, regardless of the income slab. There is no progressive tax slab system like for individuals.",
    },
    {
      icon: "Users",
      title: "Limited Number of Partners",
      text: "A partnership firm is limited to a maximum of 50 partners, which can restrict business expansion in some cases.",
    },
  ],
  eligibility: [
    "**Minimum Number of Partners:** There must be at least two partners.",
    "**Maximum Number of Partners:** The maximum number of partners is 50, as per the Companies Act, though it was formerly 20.",
    "**Competent Partners:** All partners must be legally capable of entering into a contract. This means they must be ",
    "Of sound mind.",
    "At least 18 years old.",
    "Not disqualified by any law from entering into a contract. ",
    "**Lawful Business Activity:** The purpose of the partnership must be to carry on a legal business.",
    "**Partnership Deed:** A written agreement (Partnership Deed) detailing the terms and conditions of the partnership is required. This document is crucial and should outline the partners\\' rights, duties, profit-sharing ratio, capital contribution, and other operational details. -",
  ],
  documents: [
    {
      tabTitle: "Proof of Business Address",
      content: {
        title: "Proof of Business Address",
        items: [
          "For Rented Premises: Copy of rent or lease agreement along with the latest utility bill of the property. A No Objection Certificate (NOC) from the landlord is also essential.",
          "For Owned Premises: Copy of the property deed or ownership documents, along with the latest utility bill in the name of the owner (a partner).",
        ],
      },
    },
    {
      tabTitle: "Additional Documents",
      content: {
        title: "Additional Documents",
        items: [
          "Form 1: Application for registration under the Indian Partnership Act, 1932. It must be filled out with the firm's details, signed, and verified by all partners or their authorized agents.",
          "Affidavit: An affidavit must be submitted, certifying that all the details provided in the application and the partnership deed are correct and that all partners are legally competent to enter into a contract.",
          "Firm's PAN Card: It is important to apply for a PAN card in the firm's name. The PAN card is required for tax purposes and to open a bank account for the business.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Draft the Partnership Deed",
      description:
        "Create a comprehensive partnership deed outlining the firm's name, business nature, partner details, capital contribution, profit/loss sharing ratio, and operational rules.",
    },
    {
      step: 2,
      title: "Execute on Stamp Paper",
      description:
        "Print the partnership deed on non-judicial stamp paper of appropriate value (varies by state) and get it signed by all partners in presence of witnesses.",
    },
    {
      step: 3,
      title: "Notarize the Deed",
      description:
        "Get the partnership deed notarized by a notary public to give it legal validity and authenticity.",
    },
    {
      step: 4,
      title: "Apply for PAN Card",
      description:
        "Apply for a Permanent Account Number (PAN) for the partnership firm, which is mandatory for tax purposes and opening a bank account.",
    },
    {
      step: 5,
      title: "File Form 1 with Registrar",
      description:
        "Submit Form 1 (application for registration) along with the notarized partnership deed and other required documents to the Registrar of Firms in your state.",
    },
    {
      step: 6,
      title: "Pay Registration Fees",
      description:
        "Pay the applicable registration fees to the Registrar of Firms. The fee varies by state and is usually nominal.",
    },
    {
      step: 7,
      title: "Obtain Certificate of Registration",
      description:
        "Once approved, the Registrar will issue a Certificate of Registration, confirming the firm's legal status.",
    },
  ],
  fees: [
    {
      component: "Stamp Duty (Partnership Deed)",
      fees: "₹500 - ₹10,000+",
      remarks:
        "Varies by state and capital contribution. Higher capital means higher stamp duty.",
    },
    {
      component: "Registrar of Firms Fee",
      fees: "₹500 - ₹2,000",
      remarks: "Official government fee for registration, varies by state.",
    },
    {
      component: "Notarization Charges",
      fees: "₹500 - ₹1,000",
      remarks: "For notarizing the partnership deed and other documents.",
    },
    {
      component: "PAN Application Fee",
      fees: "₹110",
      remarks: "One-time fee for applying for the firm's PAN card.",
    },
    {
      component: "Professional Fees (CA/Consultant)",
      fees: "₹4,000 - ₹10,000",
      remarks:
        "For deed drafting, documentation, and filing assistance. Varies based on complexity.",
    },
    {
      component: "Total Estimated Cost",
      fees: "₹6,000 - ₹25,000",
      remarks:
        "Total cost depends on state stamp duty and professional fees chosen.",
    },
  ],
  faqs: [
    {
      q: "Is partnership registration mandatory in India?",
      a: "No, registration is optional under the Indian Partnership Act, 1932. However, an unregistered firm cannot sue third parties to enforce its rights arising from a contract and cannot claim set-off or other proceedings against third parties. Registration is highly recommended for legal protection.",
    },
    {
      q: "What is a Partnership Deed and why is it important?",
      a: "A Partnership Deed is a written legal agreement between partners that defines the terms and conditions of the partnership. It outlines rights, duties, profit-sharing, capital contribution, and operational rules. It acts as the firm's constitution and helps prevent future disputes.",
    },
    {
      q: "What is the difference between a registered and unregistered partnership firm?",
      a: "A registered firm can sue third parties and enforce contracts in its own name, has proof of existence, and enjoys higher credibility with banks and vendors. An unregistered firm cannot sue third parties, has limited legal enforceability, and faces difficulties in obtaining formal banking facilities or loans.",
    },
    {
      q: "Can a partnership firm be converted into an LLP or Private Limited Company?",
      a: "Yes, a partnership firm can be converted into a Limited Liability Partnership (LLP) or a Private Limited Company. This conversion provides benefits like limited liability, perpetual succession, and better fundraising opportunities.",
    },
    {
      q: "What is the tax rate for partnership firms in India?",
      a: "Partnership firms are taxed at a flat rate of 30% on their total income, plus applicable surcharge and cess. This is regardless of the income slab, unlike individuals who have progressive tax slabs.",
    },
  ],
  typesOfPartnership: {
    title: "Types of Partnership Firms Eligible for Registration",
    description:
      "A partnership firm is a business setup where two or more people work together, combining their resources and efforts to run a business and share both its gains and losses. Here’s a clearer look at its main features:",
    types: [
      {
        title: "General Partnership",
        description:
          "A General Partnership is the most common form of partnership firm.Here, all partners share equal responsibility and unlimited liability for the firm's debts and obligations.",
        keyFeatures: [
          "All partners can participate in management and decision-making.",
          "Each partner can act on behalf of the firm and bind other partners legally (mutual agency).",
          "Partners' personal assets may be used to pay off firm's debts if business assets are insufficient.",
        ],
      },
      {
        title: "Partnership at Will",
        description:
          "A Partnership at Will is formed without a fixed duration or specific purpose.It continues until partners mutually decide to dissolve it.",
        keyFeatures: [
          "No specific end date is mentioned in the partnership deed.",
          "Any partner can exit the partnership by giving written notice to others.",
          "Offers flexibility to partners.",
        ],
      },
      {
        title: "Particular Partnership Firm",
        description:
          "A Particular Partnership is formed for a specific project or purpose.Once the project is completed or the goal is achieved, the firm automatically dissolves unless stated otherwise in the agreement.",
        keyFeatures: [
          "Created for a single task or limited duration.",
          "Automatically ends after completing the agreed work.",
          "Ideal for temporary business ventures.",
        ],
      },
      {
        title: "Registered Partnership Firm",
        description:
          "A Registered Partnership Firm is one that has been officially registered with the Registrar of Firms under the Indian Partnership Act, 1932.",
        keyFeatures: [
          "Provides legal recognition to the firm.",
          "The firm can sue and be sued in its own name.",
          "Partners can enforce their rights in a court of law.",
          "Essential for raising bank loans, government tenders, and business credibility.",
        ],
      },
      {
        title: "Unregistered Partnership Firm (Optional Registration)",
        description:
          "Although registration is not compulsory, an Unregistered Partnership Firm can later apply for registration.",
        keyFeatures: [
          "Cannot file lawsuits against third parties to enforce contracts.",
          "Cannot claim certain legal benefits.",
          "May face difficulties in securing bank loans.",
        ],
      },
    ],
  },
  comparison: {
    title: "Registered vs. Unregistered Partnership Firms",
    headers: [
      "Feature",
      "Registered Partnership Firm",
      "Unregistered Partnership Firm",
    ],
    rows: [
      {
        feature: "Legal Status",
        registered: "Recognized under the Indian Partnership Act, 1932",
        unregistered:
          "No formal legal recognition; exists only by mutual agreement",
      },
      {
        feature: "Ability to Sue",
        registered:
          "Can sue third parties and enforce contracts in its own name",
        unregistered:
          "Cannot sue third parties to enforce contracts; partners may have limited legal rights",
      },
      {
        feature: "Proof of Existence",
        registered: "Partnership deed is legally valid evidence",
        unregistered: "Partnership deed has limited legal enforce ability",
      },
      {
        feature: "Dispute Resolution",
        registered:
          "Court can refer to the registered deed to settle internal conflicts",
        unregistered:
          "Difficult to enforce terms; partners rely on verbal agreements or general law",
      },
      {
        feature: "Business Credibility",
        registered: "High; registration shows compliance with law",
        unregistered:
          "Low; may be viewed as informal or risky by clients and vendors",
      },
      {
        feature: "Access to Finance",
        registered:
          "Banks and financial institutions more likely to provide loans, credit, and current accounts",
        unregistered:
          "Harder to obtain formal banking facilities or business loans",
      },
      {
        feature: "Tax & Government Benefits",
        registered: "Eligible for MSME schemes, subsidies, and tax deductions",
        unregistered: "Ineligible for most government incentives",
      },
      {
        feature: "Duration & Succession",
        registered: "Easier to handle entry, exit, or succession of partners",
        unregistered:
          "Complicated; lacks formal legal clarity on partner changes",
      },
    ],
  },
};
