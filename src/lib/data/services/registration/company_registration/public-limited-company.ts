// lib/data/services/public-limited-company.ts

import { ServiceData } from "@/lib/types";

export const publicLimitedCompanyData: ServiceData = {
  title: "Public Limited Company Registration",
  breadcrumb: ["Home", "Registrations", "Public Limited Company"],
  overview:
    "A **Public Limited Company** is a corporate entity that can offer its shares to the general public. It's the most regulated business structure, governed by the **Companies Act, 2013**, and by **SEBI** if its shares are listed on a stock exchange. This structure is suited for large-scale businesses that need significant capital from the public through an **Initial Public Offering (IPO)**.",
  advantages: [
    {
      icon: "Landmark",
      title: "Access to Large Capital",
      text: "Can raise substantial funds from the public by issuing shares, making it ideal for large-scale expansion.",
    },
    {
      icon: "ArrowRightLeft",
      title: "Free Transferability of Shares",
      text: "Shares can be easily bought and sold by the public, providing high liquidity for shareholders, especially if listed.",
    },
    {
      icon: "TrendingUp",
      title: "Enhanced Brand Value",
      text: "Being a public company brings immense credibility, trust, and prestige in the eyes of stakeholders and the public.",
    },
    {
      icon: "Users",
      title: "Unlimited Shareholders",
      text: "There is no maximum limit on the number of shareholders, allowing for a widespread ownership base.",
    },
  ],
  disadvantages: [
    {
      icon: "FileWarning",
      title: "Extremely High Compliance",
      text: "Subject to stringent regulations from MCA and SEBI, requiring extensive public disclosures and complex reporting.",
    },
    {
      icon: "Eye",
      title: "Lack of Privacy",
      text: "Financial statements and key board decisions must be disclosed to the public, leading to minimal business privacy.",
    },
    {
      icon: "Briefcase",
      title: "Risk of Hostile Takeovers",
      text: "Since shares are freely traded, there is a risk of other corporations acquiring a majority stake and taking over management control.",
    },
  ],
  eligibility: [
    {
      title: "Director and Shareholder Requirements",
      items: [
        "A minimum of **three directors** is required.",
        "A minimum of **seven shareholders** (members) is required.",
        "There is no maximum limit on the number of shareholders.",
        "At least one director must be a resident of India.",
      ],
    },
    {
      title: "Capital and Name",
      items: [
        "There is no minimum paid-up capital requirement to form a public company.",
        "The company name must end with the word **'Limited'**.",
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
          "Latest Bank Statement or Utility Bill as address proof for all.",
          "Digital Signature Certificate (DSC) and Director Identification Number (DIN) for all directors.",
        ],
      },
    },
    {
      tabTitle: "Registered Office",
      content: {
        title: "Proof of Business Address",
        items: [
          "Latest Utility Bill (not older than 2 months) for the registered office.",
          "Notarized Rent Agreement and NOC from the owner if the office is rented.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Obtain DSC and DIN",
      description:
        "All the proposed directors must first obtain their Digital Signature Certificates (DSC) and Director Identification Numbers (DIN).",
    },
    {
      step: 2,
      title: "Name Approval (SPICe+ Part A)",
      description:
        "File the SPICe+ Part A form to apply for and reserve a unique name for the company that is compliant with MCA naming guidelines.",
    },
    {
      step: 3,
      title: "File Incorporation Forms (SPICe+ Part B)",
      description:
        "File the SPICe+ Part B form along with the linked e-MOA and e-AOA. This comprehensive form covers all aspects of incorporation.",
    },
    {
      step: 4,
      title: "Receive Certificate of Incorporation",
      description:
        "After verification by the RoC, the Certificate of Incorporation is issued. The company is now legally formed.",
    },
    {
      step: 5,
      title: "Obtain Certificate of Commencement of Business",
      description:
        "A public company must file a declaration (Form INC-20A) and obtain this certificate before it can start its business activities or borrow funds.",
    },
  ],
  fees: [
    {
      component: "Government & Stamp Duty Fees",
      fees: "Varies",
      remarks:
        "Stamp duty is calculated based on the authorized capital and the state of registration.",
    },
    {
      component: "Professional Fees",
      fees: "₹15,000 - ₹30,000",
      remarks:
        "Covers DSC, DIN, name reservation, drafting of legal documents, and all incorporation filings.",
    },
  ],
  faqs: [
    {
      q: "Is every Public Limited Company listed on a stock exchange?",
      a: "No. A company is 'Public Limited' by its structure. To be 'listed', it must go through an Initial Public Offering (IPO) and get approved by a stock exchange like NSE or BSE. Many public companies remain unlisted.",
    },
    {
      q: "What is the main difference between a Public and a Private Limited Company?",
      a: "A public limited company can offer its shares to the general public, while a private limited company cannot. This leads to major differences in regulations, number of members, and compliance.",
    },
    {
      q: "What is a prospectus?",
      a: "A prospectus is a detailed legal document that a public company must issue when offering its shares to the public. It contains comprehensive information about the company's financials, business, and management to help investors make an informed decision.",
    },
  ],
};
