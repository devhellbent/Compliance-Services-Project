// lib/data/services/partnership.ts

import { ServiceData } from "@/lib/types";

export const partnershipData: ServiceData = {
  title: "Partnership Firm Registration",
  breadcrumb: ["Home", "Registrations", "Company Registration", "Partnership"],
  description:
    "Unite strengths, share success. Partnership firm registration enables two or more professionals to combine their expertise and resources, creating a legally recognized business structure that distributes profits, responsibilities, and growth opportunities among partners.",
  overview: `**Partnership firm registration**

Partnership firm registration in India is the process of legally establishing a business **owned and operated by two or more individuals** under the **Indian Partnership Act, 1932**. Partners agree to share **profits and losses**. Registration is **not mandatory**, but a **registered** firm gains important legal rights that an **unregistered** firm does not.

Partnerships suit **small and medium** businesses where people pool **resources, skills, and capital**—a balance between proprietorship simplicity and more formal structures.

**What is a partnership?**

A partnership is a relationship where two or more persons agree to carry on a business and share profits/losses. It is usually recorded in a **Partnership Deed** (written agreement).

**Features of a partnership firm**

- **Number of partners:** Minimum **two**; maximum **50** (Companies Act, 2013); **10** for banking.
- **Partnership deed:** Written or oral agreement setting roles, profit share, and terms (written deed strongly recommended).
- **Unlimited liability:** Partners are **personally** liable if the firm cannot pay debts.
- **Mutual agency:** Each partner can bind the firm and other partners in the ordinary course of business.
- **Profit and loss sharing:** As agreed in the deed.
- **No separate legal entity:** Firm and partners are one in law; a **registered** firm can still sue and be sued in the firm name.
- **Restriction on transfer:** A partner cannot transfer their share to an outsider without **consent** of the other partners.
- **Registration:** Optional but important for legal standing and enforcement rights.`,
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
      icon: "Gavel",
      title: "Ability to Sue",
      text: "A registered firm can file a lawsuit against third parties or other partners for matters related to the firm.",
    },
    {
      icon: "Scale",
      title: "Claiming Set-off",
      text: "The firm can claim set-offs in any legal proceedings brought against it by a third party.",
    },
    {
      icon: "FileCheck",
      title: "Legal Evidence",
      text: "The registration certificate serves as conclusive evidence of the firm's existence and its partners.",
    },
    {
      icon: "Zap",
      title: "Ease of Formation",
      text: "Relatively simple to set up compared to a company or LLP.",
    },
    {
      icon: "Users",
      title: "Combined Resources",
      text: "Pool capital, skills, and expertise from multiple partners.",
    },
    {
      icon: "Receipt",
      title: "Tax Benefits",
      text: "Partnership firms are taxed as separate entities, often providing tax planning opportunities.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertTriangle",
      title: "Unlimited Personal Liability",
      text: "Partners' personal wealth is at risk for business debts.",
    },
    {
      icon: "Users",
      title: "Mutual Responsibility",
      text: "All partners are legally responsible for the actions of any one partner acting on behalf of the firm.",
    },
    {
      icon: "Clock",
      title: "Risk of Dissolution",
      text: "The firm may automatically dissolve upon the death, insolvency, or retirement of a partner unless the deed states otherwise.",
    },
    {
      icon: "AlertCircle",
      title: "Potential for Conflict",
      text: "Differences in opinion among partners can lead to disputes and slow down decision-making.",
    },
    {
      icon: "TrendingDown",
      title: "Limited Capital Access",
      text: "Harder to raise large amounts of capital compared to a company as they cannot issue shares to the public.",
    },
  ],
  eligibility: [
    "To form and register a partnership firm in India, the following requirements must be met:",
    {
      title: "Requirements",
      items: [
        "**Number of partners:** Minimum of **two** and a maximum of **50**.",
        "**Competence to contract:** Partners must be of sound mind, **18+**, and not disqualified by law.",
        "**Lawful business:** The activity must be legal and not against public policy.",
        "**Partnership deed:** A formal agreement must be drafted and signed by all partners.",
        "**Registered office:** A valid physical address for the firm’s principal place of business.",
        "**Unique firm name:** Must not be identical to an existing firm or trademark; avoid prohibited words.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Partnership Deed",
      content: {
        title: "Partnership Deed",
        items: [
          "The **Partnership Deed** is the most important document: printed on **stamp paper** of appropriate value and **notarized**. It must include:",
          "Name and address of the firm and all partners.",
          "Nature of the business.",
          "Date of commencement.",
          "Capital contribution by each partner.",
          "Profit and loss sharing ratio.",
          "Rules for admission, retirement, or death of a partner.",
        ],
      },
    },
    {
      tabTitle: "Partners (PAN & KYC)",
      content: {
        title: "Documents of the partners",
        items: [
          "**PAN Card:** Mandatory for all partners.",
          "**Identity and address proof:** Aadhaar Card, Voter ID, Passport, or Driving License.",
          "**Photographs:** Passport-sized photos of all partners.",
        ],
      },
    },
    {
      tabTitle: "Proof of Business Address",
      content: {
        title: "Proof of Business Address",
        items: [
          "**For rented premises:** Rent/Lease Agreement, latest utility bill, and a No Objection Certificate (NOC) from the landlord.",
          "**For owned premises:** Property deed/ownership documents and the latest utility bill.",
        ],
      },
    },
    {
      tabTitle: "Form 1 & Affidavit",
      content: {
        title: "Form 1 and Affidavit",
        items: [
          "**Form 1:** The official application for registration under the Indian Partnership Act, 1932.",
          "**Affidavit:** A certified declaration that all details provided are correct and partners are legally competent.",
        ],
      },
    },
    {
      tabTitle: "Firm PAN & banking",
      content: {
        title: "Associated registrations",
        items: [
          "**Firm's PAN Card:** Approximately ₹110.",
          "**Bank account setup:** Minimal initial deposit for a current account.",
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
      component: "Registration fee (Registrar of Firms)",
      fees: "₹500 – ₹2,000",
      remarks: "Varies by state",
    },
    {
      component: "Stamp duty (Partnership Deed)",
      fees: "Varies by state",
      remarks: "Depends on capital and state rules",
    },
    {
      component: "Affidavit and notary",
      fees: "Varies",
      remarks: "Notarizing the deed and filing the affidavit",
    },
    {
      component: "Professional fees (optional)",
      fees: "₹2,000 – ₹5,000",
      remarks: "CA/consultant for deed drafting and registration",
    },
    {
      component: "Firm PAN",
      fees: "≈ ₹110",
      remarks: "One-time application",
    },
    {
      component: "Total estimated cost",
      fees: "₹4,000 – ₹10,000",
      remarks: "Typically, including stamp duty and professional help",
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
