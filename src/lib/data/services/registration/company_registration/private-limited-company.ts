import { ServiceData } from "@/lib/types";

export const privateLimitedCompanyData: ServiceData = {
  title: "Private Limited Company Registration",
  breadcrumb: ["Home", "Registrations", "Private Limited Company"],
  description:
    "Establish your business with India's most trusted corporate structure. Private Limited Company registration offers limited liability protection, enhanced credibility, and seamless access to funding opportunities—making it the preferred choice for startups and growing enterprises.",
  overview: `**Private Limited Company Registration**

**Private Limited Company Registration** is the legal process of forming a **private company** under the **Companies Act, 2013** in India. A **Private Limited Company (Pvt. Ltd.)** is a business structure that provides **limited liability protection** to its shareholders and a **separate legal identity** from its owners.

This type of company is ideal for startups, small-to-medium businesses, and growing enterprises because it allows easy **fundraising**, offers **better credibility**, and provides a strong foundation for scaling up operations.

**What is Private Limited Company?**

A private limited company (Pvt. Ltd.) is a type of business structure that is privately held and owned by a small group of stakeholders. In India, it is defined and regulated by the Companies Act, 2013. This business structure is a popular choice for startups and small to medium-sized enterprises (SMEs) because it combines the benefits of a corporate structure with a degree of privacy and operational flexibility.

A private limited company is a business structure that is a separate legal entity from its owners, offering the key benefit of limited liability. This means the personal assets of the shareholders are protected and are not at risk for the company's debts.`,
  whyChooseUs: [
    {
      icon: "Building2",
      title: "Separate Legal Entity",
      text: "The company is distinct from its owners.",
    },
    {
      icon: "Shield",
      title: "Limited Liability",
      text: "Shareholders' liability is limited to their share capital.",
    },
    {
      icon: "RefreshCw",
      title: "Perpetual Succession",
      text: "The company's existence is not affected by the change of its members.",
    },
    {
      icon: "TrendingUp",
      title: "Fundraising",
      text: "Easy to raise funds from investors.",
    },
  ],
  advantages: [
    {
      icon: "Shield",
      title: "Limited Liability",
      text: "Shareholders' personal assets are protected and liability remains limited to shareholding value.",
    },
    {
      icon: "Building2",
      title: "Separate Legal Entity",
      text: "The company has an independent legal identity and can own assets, contract, and litigate in its own name.",
    },
    {
      icon: "RefreshCw",
      title: "Perpetual Existence",
      text: "The company's existence continues regardless of changes in members or directors.",
    },
    {
      icon: "Award",
      title: "Enhanced Credibility",
      text: "A registered private limited company improves trust among clients, suppliers, and financial institutions.",
    },
    {
      icon: "TrendingUp",
      title: "Easier Access to Funding",
      text: "This structure is preferred by investors and lenders for growth-stage fundraising.",
    },
  ],
  disadvantages: [
    {
      icon: "CheckCircle",
      title: "Key Disadvantages of a Private Limited Company",
      text: "",
      subPoints: [
        "**Complex and Lengthy Registration Process:** The incorporation process for a private limited company is more intricate than for a sole proprietorship or partnership. It involves multiple steps, including obtaining a Digital Signature Certificate (DSC), a Director Identification Number (DIN), and filing various documents with the Ministry of Corporate Affairs (MCA). This process can be time-consuming and often requires professional assistance, which adds to the cost.",
        "**High Compliance Burden:** Private limited companies are subject to stringent regulations and compliance requirements. This includes mandatory annual filings with the Registrar of Companies (RoC), conducting statutory audits, maintaining detailed financial records, and holding regular board and general meetings. The ongoing administrative and regulatory burden can be a significant challenge and cost.",
        "**Lack of Privacy:** Since a private limited company is a registered entity, its key information, such as financial statements, director details, and annual returns, are publicly accessible on the MCA website. This lack of privacy can be a disadvantage, as competitors and the public can easily access sensitive business information.",
        "**Higher Costs:** The overall costs of a private limited company are higher than other business structures. This includes not only the initial registration costs but also ongoing expenses for compliance, professional fees for auditors and company secretaries, and higher corporate tax rates.",
        "**Restricted Share Transfer:** Unlike a public company, a private limited company cannot offer its shares to the public or trade them on a stock exchange. This limitation can make it difficult to raise large amounts of capital from the public and restricts the exit options for investors.",
        "**Division of Ownership and Decision-Making:** With the requirement of a minimum of two directors and two shareholders, a private limited company can lead to a division of ownership and control. This can sometimes result in conflicts and make decision-making slower and more complex compared to a sole proprietorship.",
        "**Complex Winding-Up Process:** The process of closing or winding up a private limited company is a legally intricate and time-consuming procedure, which can take several months to complete.",
      ],
    },
  ],
  eligibility: [
    {
      title: "Director Requirements",
      items: [
        "A minimum of two directors is required.",
        "At least one director must be a resident of India.",
        "All directors must have a valid DIN.",
      ],
    },
    {
      title: "Shareholder and Name Requirements",
      items: [
        "A minimum of two shareholders is required.",
        "Maximum shareholder limit is 200 (excluding certain employee shareholders).",
        "Company name must be unique and end with **Private Limited** or **Pvt. Ltd.**",
      ],
    },
    {
      title: "Other Legal Requirements",
      items: [
        "Registered office address in India is mandatory.",
        "All proposed directors/subscribers must obtain DSC for e-filing.",
        "Private limited companies cannot invite public subscription to shares.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Documents for Directors and Shareholders",
      content: {
        title: "Documents for Directors and Shareholders",
        items: [
          "**Identity Proof:** ",
          "**Indian Nationals:** A self-attested copy of their PAN Card (mandatory), Aadhaar Card, Passport, Voter ID, or Driving License.",
          "**Foreign Nationals:** A valid passport is mandatory. Address and identity proofs from their home country must be notarized or apostilled. ",
          "**Address Proof:** A self-attested copy of a recent document (not older than two months) showing the individual\\'s current residential address. This can be: ",
          "Latest utility bill (electricity, water, or gas)",
          "Bank statement or passbook",
          "Telephone or mobile bill ",
          "**Photographs:** Recent passport-size photographs of all directors and shareholders.",
          "**Digital Signature Certificate (DSC):** A Class 3 DSC is mandatory for all directors and subscribers to digitally sign the electronic forms.",
          "**Director Identification Number (DIN):** All directors must have a DIN, which is a unique identification number issued by the MCA. This can be applied for within the main registration form (SPICe+).",
        ],
      },
    },
    {
      tabTitle: "Documents for the Registered Office",
      content: {
        title: "Documents for the Registered Office",
        items: [
          "**Proof of Address:** A recent utility bill (not older than two months) for the office premises.",
          "**Proof of Ownership/Tenancy:** ",
          "If the property is owned, a sale deed or ownership document.",
          "If the property is rented, a copy of the rental agreement. ",
          "**No Objection Certificate (NOC):** A signed NOC from the property owner, stating that they have no objection to the property being used as the company\\'s registered office.",
        ],
      },
    },
    {
      tabTitle: "Company\\'s Legal and Foundational Documents",
      content: {
        title: "Company\\'s Legal and Foundational Documents",
        items: [
          "**Memorandum of Association (MoA):** This is the company\\'s charter document, outlining its business objectives and the scope of its activities.",
          "**Articles of Association (AoA):** This document contains the internal rules and regulations for the company\\'s governance and management.",
          "**Declarations and Consent Forms:** ",
          "**Director\\'s Consent (Form DIR-2):** A signed declaration from the proposed directors consenting to act as directors.",
          "**Director\\'s Declaration (Form INC-9):** A declaration confirming that the directors are not disqualified under the Companies Act.",
          "**Professional\\'s Declaration:** A declaration from a professional (like a Chartered Accountant or Company Secretary) certifying that all legal compliances for the registration have been met.",
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
      title: "Incorporation",
      description: "File the SPICe+ form with the RoC.",
    },
    {
      step: 4,
      title: "Certificate of Incorporation",
      description: "Issued by the RoC.",
    },
  ],
  fees: [
    {
      component: "Digital Signature Certificate (DSC)",
      fees: "₹1,000 - ₹2,000",
      remarks: "Per director (valid for 2-3 years)",
    },
    {
      component: "Director Identification Number (DIN)",
      fees: "₹500 - ₹1,000",
      remarks: "Per director (one-time)",
    },
    {
      component: "Name Approval (SPICe+ Part A)",
      fees: "₹1,000",
      remarks: "For name reservation",
    },
    {
      component: "Government Fees & Stamp Duty",
      fees: "₹2,000 - ₹7,000",
      remarks: "Varies by state and authorized capital",
    },
    {
      component: "Stamp Duty",
      fees: "Varies by state",
      remarks: "0.2% to 0.7% of authorized capital (state-specific)",
    },
    {
      component: "MoA & AoA Drafting and Filing",
      fees: "₹1,500 - ₹3,000",
      remarks: "Professional or legal drafting fees",
    },
    {
      component: "Professional / Consultant Fees (CA/CS/Legal)",
      fees: "₹3,000 - ₹10,000",
      remarks: "Optional and depends on service provider",
    },
    {
      component: "PAN & TAN (via SPICe+)",
      fees: "Included in filing",
      remarks: "Applied simultaneously during incorporation",
    },
    {
      component: "Total Estimated Cost",
      fees: "₹8,000 - ₹20,000+",
      remarks: "Depends on authorized capital, state, and professional support",
    },
  ],
  faqs: [
    {
      q: "What is the minimum capital requirement to start a Private Limited Company?",
      a: "There is no minimum capital requirement. Earlier, it was ₹1 lakh, but now you can register with any amount, even ₹1,000 or ₹10,000 as authorized capital. However, authorized capital should be realistic based on business operations.",
    },
    {
      q: "How long does it take to register a Private Limited Company?",
      a: "The entire process typically takes 10-15 working days from the date of filing SPICe+ Part B, provided all documents are correct and the name is approved. Delays may occur due to incomplete documentation or queries raised by the ROC.",
    },
    {
      q: "What are the annual compliance requirements for a Private Limited Company?",
      a: "Annual compliances include: (1) Holding at least 4 board meetings and 1 AGM, (2) Filing annual financial statements (Form AOC-4), (3) Filing annual returns (Form MGT-7), (4) Maintaining statutory registers, (5) Statutory audit, (6) Filing Income Tax returns.",
    },
    {
      q: "Can a Private Limited Company have foreign directors or shareholders?",
      a: "Yes, a Private Limited Company can have foreign nationals as directors and shareholders. However, at least one director must be a resident of India. Foreign investment is subject to FDI regulations and sectoral caps.",
    },
    {
      q: "What is the difference between Authorized Capital and Paid-up Capital?",
      a: "Authorized Capital is the maximum share capital a company is authorized to issue as per its MoA. Paid-up Capital is the actual amount of money received from shareholders against shares issued. Paid-up capital cannot exceed authorized capital.",
    },
  ],
};
