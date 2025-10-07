// lib/data/services/nidhi-company.ts

import { ServiceData } from "@/lib/types";

export const nidhiCompanyData: ServiceData = {
  title: "Nidhi Company Registration",
  breadcrumb: ["Home", "Registrations", "Nidhi Company"],
  overview:
    "A **Nidhi Company** is a unique type of Non-Banking Financial Company (NBFC) whose core business is **borrowing from its members and lending to its members exclusively**. 🤝 Also known as a Mutual Benefit Company, it's formed to cultivate the habit of thrift and savings. Governed by the **Companies Act, 2013**, and **Nidhi Rules, 2014**, it's regulated by the Ministry of Corporate Affairs (MCA) and doesn't require a license from the RBI to start.",
  advantages: [
    {
      icon: "piggy-bank",
      title: "Promotes Savings",
      text: "Encourages a culture of thrift among its member community, providing a secure avenue for their funds.",
    },
    {
      icon: "Landmark",
      title: "Easy Access to Credit",
      text: "Members can get loans at better interest rates with less documentation compared to traditional banks.",
    },
    {
      icon: "ShieldCheck",
      title: "Limited RBI Regulation",
      text: "It is exempt from most of the stringent RBI regulations that apply to other NBFCs.",
    },
    {
      icon: "Building",
      title: "Simple Formation",
      text: "The process of forming a Nidhi Company is relatively simpler than other NBFCs since it's incorporated as a public limited company.",
    },
  ],
  disadvantages: [
    {
      icon: "Users",
      title: "Members Only Operations",
      text: "A Nidhi Company is strictly prohibited from dealing with any person other than its own members.",
    },
    {
      icon: "FileWarning",
      title: "Strict Post-Incorporation Rules",
      text: "Must achieve a minimum of 200 members and a Net Owned Fund of ₹20 lakh within one year, which can be challenging.",
    },
    {
      icon: "Ban",
      title: "Restrictions on Business Activities",
      text: "Cannot engage in businesses like chit funds, hire-purchase, issue preference shares, or open current accounts.",
    },
  ],
  eligibility: [
    {
      title: "Incorporation Requirements",
      items: [
        "Must be incorporated as a **Public Limited Company**.",
        "Requires a minimum of **7 members** (shareholders) and **3 directors**.",
        "Must have a minimum paid-up equity share capital of **₹10 lakh**.",
        "The name must end with the words **'Nidhi Limited'**.",
      ],
    },
    {
      title: "Post-Incorporation Conditions (within 1 year)",
      items: [
        "Must enroll a minimum of **200 members**.",
        "**Net Owned Funds (NOF)** must be ₹20 lakh or more.",
        "The ratio of NOF to deposits must not be more than 1:20.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Directors & Members",
      content: {
        title: "Identity and Address Proof",
        items: [
          "PAN Card and Aadhaar Card of all 7+ members and 3+ directors.",
          "Latest Bank Statement or Utility Bill as address proof.",
          "Passport-size photographs.",
        ],
      },
    },
    {
      tabTitle: "Registered Office",
      content: {
        title: "Proof of Business Address",
        items: [
          "Latest Utility Bill of the registered office.",
          "Rent Agreement and NOC from the owner if rented.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Obtain DSC and DIN",
      description:
        "The first step is to obtain Digital Signature Certificates (DSC) and Director Identification Numbers (DIN) for the three proposed directors.",
    },
    {
      step: 2,
      title: "Name Approval",
      description:
        "Apply for a unique name using the SPICe+ Part A form. The name must contain the words 'Nidhi Limited' as its suffix.",
    },
    {
      step: 3,
      title: "File Incorporation Documents",
      description:
        "File the SPICe+ Part B, e-MOA, and e-AOA with the MCA. The main object in the MOA must be to cultivate the habit of thrift and savings among its members.",
    },
    {
      step: 4,
      title: "Meet Post-Incorporation Conditions",
      description:
        "After incorporation, the company must proactively work to meet the mandatory requirements (200 members, ₹20 lakh NOF, etc.) within one year.",
    },
    {
      step: 5,
      title: "File for Nidhi Status (Form NDH-4)",
      description:
        "After fulfilling the conditions, the company must apply to the Central Government in Form NDH-4 for a declaration of its status as a Nidhi Company.",
    },
  ],
  fees: [
    {
      component: "Government Fees & Stamp Duty",
      fees: "Varies",
      remarks:
        "Higher than a normal PLC due to the minimum capital requirement of ₹10 lakh.",
    },
    {
      component: "Professional Fees",
      fees: "₹25,000 - ₹50,000",
      remarks:
        "Includes comprehensive services for incorporation and guidance on post-incorporation compliance.",
    },
  ],
  faqs: [
    {
      q: "Can a Nidhi Company accept deposits from the public?",
      a: "No, absolutely not. A Nidhi Company can only accept deposits from and lend money to its registered members. Dealing with non-members is strictly prohibited and can lead to severe penalties.",
    },
    {
      q: "What happens if a Nidhi Company fails to meet the 200-member rule in one year?",
      a: "If the company fails to meet the post-incorporation conditions, it cannot file Form NDH-4 for Nidhi status and may have to apply to the Regional Director for an extension of time. Failure to comply can lead to penalties.",
    },
    {
      q: "Can a Nidhi Company open branches?",
      a: "Yes, a Nidhi company can open up to three branches within its district after three years of continuous profitable operation. Further branches require prior approval from the Regional Director.",
    },
  ],
};
