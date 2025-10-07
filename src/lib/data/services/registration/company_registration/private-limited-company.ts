import { ServiceData } from "@/lib/types";

export const privateLimitedCompanyData: ServiceData = {
  title: "Private Limited Company Registration",
  breadcrumb: ["Home", "Registrations", "Private Limited Company"],
  overview:
    "A **Private Limited Company** is the most popular corporate structure in India for startups and growing businesses. It's a privately held entity governed by the **Companies Act, 2013**. Key features include **limited liability** for its members (shareholders), a **separate legal identity**, and **perpetual succession**. This structure is ideal for businesses looking to raise funds, attract talent with stock options, and build a scalable enterprise.",
  advantages: [
    {
      icon: "ShieldCheck",
      title: "Limited Liability Protection",
      text: "Shareholders' personal assets are protected. Their liability is limited to the value of the shares they hold.",
    },
    {
      icon: "Library",
      title: "Separate Legal Entity",
      text: "The company is a distinct legal entity from its owners. It can own property and enter contracts in its own name.",
    },
    {
      icon: "Banknote",
      title: "Easy Fundraising",
      text: "This structure is preferred by venture capitalists, angel investors, and banks, making it easier to raise equity capital and debt.",
    },
    {
      icon: "RefreshCw",
      title: "Perpetual Succession",
      text: "The company's existence continues regardless of the death, retirement, or insolvency of its members.",
    },
  ],
  disadvantages: [
    {
      icon: "FileWarning",
      title: "Stringent Compliance",
      text: "Requires mandatory annual filings, board meetings, statutory audits, and adherence to numerous provisions of the Companies Act.",
    },
    {
      icon: "Lock",
      title: "Restrictions on Share Transfer",
      text: "The transfer of shares is restricted and requires the approval of the board of directors.",
    },
    {
      icon: "Users",
      title: "Limited Number of Shareholders",
      text: "The number of shareholders is limited to a maximum of 200, which restricts large-scale public investment.",
    },
  ],
  eligibility: [
    {
      title: "Director and Shareholder Requirements",
      items: [
        "A minimum of two directors and two shareholders are required (they can be the same individuals).",
        "At least one director must be a resident of India.",
        "Maximum number of shareholders is 200.",
      ],
    },
    {
      title: "Capital and Name",
      items: [
        "There is no minimum paid-up capital requirement.",
        "The company name must be unique and should end with 'Private Limited'.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Directors & Shareholders",
      content: {
        title: "Identity and Address Proof",
        items: [
          "PAN Card and Aadhaar Card for all Indian nationals.",
          "Passport for foreign nationals.",
          "Latest Bank Statement or Utility Bill as address proof.",
        ],
      },
    },
    {
      tabTitle: "Registered Office",
      content: {
        title: "Proof of Business Address",
        items: [
          "Latest Utility Bill for the registered office.",
          "Notarized Rent Agreement and a No-Objection Certificate (NOC) if the office is rented.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Obtain DSC and DIN",
      description:
        "All proposed directors must first obtain a Digital Signature Certificate (DSC) and a Director Identification Number (DIN).",
    },
    {
      step: 2,
      title: "Name Approval via SPICe+ Part A",
      description:
        "File the SPICe+ Part A form on the MCA portal to reserve the company name.",
    },
    {
      step: 3,
      title: "File Incorporation Forms (SPICe+ Part B)",
      description:
        "File the comprehensive SPICe+ Part B form, which integrates applications for company incorporation, DIN, PAN, TAN, and GSTIN.",
    },
    {
      step: 4,
      title: "Submit e-MOA and e-AOA",
      description:
        "The Memorandum of Association (MOA) and Articles of Association (AOA) are filed electronically as linked forms.",
    },
    {
      step: 5,
      title: "Get Certificate of Incorporation",
      description:
        "Upon successful verification, the RoC issues the Certificate of Incorporation (COI), and the company can legally start its business.",
    },
  ],
  fees: [
    {
      component: "Stamp Duty",
      fees: "Varies",
      remarks:
        "Calculated based on the authorized capital and the state of registration.",
    },
    {
      component: "Professional Fees",
      fees: "₹7,000 - ₹15,000",
      remarks:
        "Covers all procedures from DSC application to receiving the COI, including drafting legal documents.",
    },
  ],
  faqs: [
    {
      q: "What are the major annual compliances for a Private Limited Company?",
      a: "Major compliances include appointing a statutory auditor, conducting board meetings, holding an Annual General Meeting (AGM), and filing annual returns with the MCA (Forms AOC-4 and MGT-7), in addition to filing Income Tax Returns.",
    },
    {
      q: "What's the difference between Authorized Capital and Paid-up Capital?",
      a: "Authorized Capital is the maximum amount of share capital a company is authorized to issue. Paid-up Capital is the amount of money a company has actually received from shareholders in exchange for shares.",
    },
  ],
};
