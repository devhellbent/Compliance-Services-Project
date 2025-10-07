import { ServiceData } from "@/lib/types";

export const onePersonCompanyData: ServiceData = {
  title: "One Person Company (OPC) Registration",
  breadcrumb: ["Home", "Registrations", "One Person Company"],
  overview:
    "A **One Person Company (OPC)** allows a single entrepreneur to form a company with **limited liability** and a **separate legal entity**. Introduced by the **Companies Act, 2013**, it provides the benefits of a corporate structure without the need for a co-founder. An OPC requires a nominee who takes over in case of the sole member's death or incapacity.",
  advantages: [
    {
      icon: "Shield",
      title: "Limited Liability",
      text: "Protects the personal assets of the sole owner from business liabilities.",
    },
    {
      icon: "User",
      title: "Single Owner Structure",
      text: "Allows a single individual to run a corporate entity with 100% ownership and control.",
    },
    {
      icon: "TrendingUp",
      title: "Higher Credibility",
      text: "An OPC is registered with the Ministry of Corporate Affairs (MCA), giving it more credibility with banks and clients.",
    },
    {
      icon: "RefreshCw",
      title: "Perpetual Succession",
      text: "The appointment of a nominee ensures the company continues to exist even after the death of the sole member.",
    },
  ],
  disadvantages: [
    {
      icon: "Users",
      title: "Suitable for One Person Only",
      text: "An individual can form only one OPC. Adding more shareholders requires converting it into a private limited company.",
    },
    {
      icon: "FileWarning",
      title: "Higher Compliance",
      text: "An OPC has more compliance obligations (like appointing an auditor) compared to a sole proprietorship.",
    },
    {
      icon: "Ban",
      title: "Business Restrictions",
      text: "An OPC cannot engage in Non-Banking Financial Investment activities.",
    },
  ],
  eligibility: [
    {
      title: "Member and Nominee",
      items: [
        "Only a natural person who is an Indian citizen and resident in India can form an OPC.",
        "The same person must appoint another individual (also an Indian citizen and resident) as a nominee.",
      ],
    },
    {
      title: "Capital Requirement",
      items: [
        "There is no minimum paid-up capital requirement for starting an OPC.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Director & Nominee",
      content: {
        title: "Identity and Address Proof",
        items: [
          "PAN Card of the sole Director and the Nominee.",
          "Aadhaar Card / Voter ID / Passport of the Director and Nominee.",
          "Latest Bank Statement or Utility Bill as address proof.",
        ],
      },
    },
    {
      tabTitle: "Registered Office",
      content: {
        title: "Proof of Business Address",
        items: [
          "Latest Utility Bill of the office address.",
          "Notarized Rent Agreement and NOC from the owner if the property is rented.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Obtain DSC and DIN",
      description:
        "The first step is to obtain a Digital Signature Certificate (DSC) and a Director Identification Number (DIN) for the sole director.",
    },
    {
      step: 2,
      title: "Apply for Name Approval",
      description:
        "File the SPICe+ Part A form on the MCA portal to reserve a unique name. The name must end with '(One Person Company)'.",
    },
    {
      step: 3,
      title: "File Incorporation Documents",
      description:
        "After name approval, file SPICe+ Part B, which integrates applications for DIN, PAN, TAN, and GSTIN. The e-MOA and e-AOA must also be submitted.",
    },
    {
      step: 4,
      title: "Receive Certificate of Incorporation",
      description:
        "Once the Registrar of Companies (RoC) verifies all the documents, the Certificate of Incorporation is issued.",
    },
  ],
  fees: [
    {
      component: "Government Fees (SPICe+)",
      fees: "₹1,000",
      remarks:
        "Standard fee for companies with authorized capital up to ₹10 lakh.",
    },
    {
      component: "Stamp Duty",
      fees: "Varies",
      remarks:
        "Depends on the state of registration and the authorized share capital.",
    },
    {
      component: "Professional Fees",
      fees: "₹6,000 - ₹12,000",
      remarks: "Includes DSC, DIN, form filing, and end-to-end consultation.",
    },
  ],
  faqs: [
    {
      q: "What is the role of a nominee in an OPC?",
      a: "A nominee is a person designated by the sole member who will take over in the event of their death or incapacity. This ensures the company's continuity.",
    },
    {
      q: "Can an OPC raise equity funding?",
      a: "An OPC cannot issue new shares to others. To raise equity funding from investors, it must first convert into a Private Limited Company.",
    },
  ],
};
