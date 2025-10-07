// lib/data/services/partnership.ts

import { ServiceData } from "@/lib/types";

export const partnershipData: ServiceData = {
  title: "Partnership Firm Registration",
  breadcrumb: ["Home", "Registrations", "Partnership"],
  overview:
    "A Partnership Firm is a popular business structure for entities with multiple owners. It's formed when two or more individuals (partners) agree to co-own a business and share its profits and losses. Governed by the Indian Partnership Act, 1932, it's defined by a legal agreement known as a Partnership Deed. While registration is optional, a registered firm gets significant legal advantages, such as the ability to sue third parties.",
  advantages: [
    {
      icon: "Users",
      title: "Shared Responsibility & Risk",
      text: "The workload, financial investment, and business risks are distributed among multiple partners.",
    },
    {
      icon: "Handshake",
      title: "Better Decision Making",
      text: "Multiple partners bring a diverse pool of knowledge, skills, and experience, leading to more balanced decisions.",
    },
    {
      icon: "TrendingUp",
      title: "Easier to Raise Funds",
      text: "Compared to a proprietorship, a partnership can pool resources from multiple partners, enhancing its capital base.",
    },
    {
      icon: "FileText",
      title: "Fewer Compliances",
      text: "Partnership firms have fewer regulatory compliance requirements compared to LLPs and companies.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertTriangle",
      title: "Unlimited Liability",
      text: "Each partner is personally and jointly liable for the firm's debts, putting their personal assets at risk.",
    },
    {
      icon: "UserMinus",
      title: "Potential for Disputes",
      text: "Disagreements between partners regarding business operations or profit sharing can lead to conflicts and dissolution.",
    },
    {
      icon: "Clock",
      title: "Lack of Perpetual Succession",
      text: "The firm's existence is unstable; it can be dissolved upon the death, retirement, or insolvency of any partner.",
    },
  ],
  eligibility: [
    {
      title: "Partner Requirements",
      items: [
        "A minimum of two partners is required to start a partnership firm.",
        "The maximum number of partners is 50 for most businesses.",
        "Partners must be competent to contract (i.e., not minors or legally disqualified).",
      ],
    },
    {
      title: "Agreement",
      items: [
        "A Partnership Deed, though not mandatory for formation, is crucial for registration and defining roles.",
        "The business objective must be to carry on a business and share profits.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Partner Documents",
      content: {
        title: "Identity & Address Proof of All Partners",
        items: [
          "PAN Card of each partner (Mandatory)",
          "Aadhaar Card or other address proof (Voter ID, Passport) of each partner",
          "Passport-size photographs of all partners",
        ],
      },
    },
    {
      tabTitle: "Business Documents",
      content: {
        title: "Core Business Documents",
        items: [
          "Partnership Deed, duly notarized on appropriate stamp paper.",
          "PAN Card of the Partnership Firm (to be applied for after formation).",
          "Address proof of the firm's principal place of business (Utility Bill, Rent Agreement, NOC).",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Draft the Partnership Deed",
      description:
        "A legal expert drafts the Partnership Deed. This agreement outlines the firm's name, business nature, capital contribution, profit/loss sharing ratio, partner duties, and dissolution terms.",
    },
    {
      step: 2,
      title: "Notarize the Deed",
      description:
        "The Partnership Deed must be printed on non-judicial stamp paper (value varies by state) and signed by all partners. It is then notarized.",
    },
    {
      step: 3,
      title: "Apply for Firm's PAN",
      description:
        "Apply for a Permanent Account Number (PAN) for the partnership firm using Form 49A. This is mandatory for tax purposes.",
    },
    {
      step: 4,
      title: "Register with Registrar of Firms (RoF)",
      description:
        "Submit the registration application (Form 1) along with the notarized deed and other documents to the state's Registrar of Firms to get the firm officially registered.",
    },
  ],
  fees: [
    {
      component: "Stamp Duty for Deed",
      fees: "₹500 - ₹10,000",
      remarks:
        "Varies significantly by state and the amount of capital contributed.",
    },
    {
      component: "Registrar of Firms (RoF) Fee",
      fees: "₹500 - ₹2,000",
      remarks:
        "The official government fee for registering the firm, which varies by state.",
    },
    {
      component: "Professional Fees",
      fees: "₹4,000 - ₹8,000",
      remarks:
        "Includes deed drafting, notarization, PAN application, and RoF filing assistance.",
    },
  ],
  faqs: [
    {
      q: "Is it mandatory to register a Partnership Firm?",
      a: "No, registration is optional under the Indian Partnership Act, 1932. However, an unregistered firm cannot sue third parties to enforce its rights and cannot claim set-off in a legal dispute, making registration highly advisable.",
    },
    {
      q: "What is a Partnership Deed?",
      a: "A Partnership Deed is a written legal agreement between the partners that outlines the terms and conditions of the partnership. It acts as the firm's constitution, defining rights, duties, profit sharing, and operational rules to prevent future conflicts.",
    },
    {
      q: "Can an NRI be a partner in an Indian partnership firm?",
      a: "Yes, a Non-Resident Indian (NRI) or a Person of Indian Origin (PIO) can become a partner in a partnership firm, subject to certain RBI regulations and FEMA compliance.",
    },
  ],
};
