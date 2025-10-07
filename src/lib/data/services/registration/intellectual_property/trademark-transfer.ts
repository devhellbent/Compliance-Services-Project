// lib/data/services/trademark-transfer.ts

import { ServiceData } from "@/lib/types";

export const trademarkTransferData: ServiceData = {
  title: "Trademark Transfer",
  breadcrumb: ["Home", "Intellectual Property", "Trademark Transfer"],
  overview:
    "**Trademark Transfer**, legally known as **Trademark Assignment**, is the process of transferring the ownership of a registered trademark from one person or entity (the Assignor) to another (the Assignee). 🤝 This is a formal process where the rights, title, and interest in the trademark are transferred through a legal document called an **Assignment Deed**. The transfer must be recorded with the Trademark Registry to be legally effective.",
  advantages: [
    {
      icon: "CircleDollarSign",
      title: "Monetize Your Brand",
      text: "Allows the trademark owner to sell their brand as a valuable intangible asset and realize its financial worth.",
    },
    {
      icon: "Briefcase",
      title: "Facilitates Mergers & Acquisitions",
      text: "Trademark assignment is a critical step in transferring brand assets during business mergers, acquisitions, or takeovers.",
    },
    {
      icon: "Shuffle",
      title: "Brand Restructuring",
      text: "Enables businesses to restructure their brand ownership, such as transferring a mark from an individual to their newly formed company.",
    },
    {
      icon: "Users",
      title: "Succession Planning",
      text: "Provides a legal framework for transferring brand ownership as part of estate and succession planning.",
    },
  ],
  disadvantages: [
    {
      icon: "FileSignature",
      title: "Requires a Legal Deed",
      text: "A legally sound and properly executed Trademark Assignment Deed is mandatory, which requires professional drafting.",
    },
    {
      icon: "AlertTriangle",
      title: "Risk of Public Confusion",
      text: "An assignment can be deemed invalid if it creates confusion in the public mind (e.g., splitting a mark for similar goods between two owners).",
    },
    {
      icon: "FileWarning",
      title: "Mandatory Registration of Transfer",
      text: "The transfer must be recorded with the Trademark Registry. Failure to do so makes the transfer ineffective against third parties.",
    },
  ],
  eligibility: [
    {
      title: "Who Can Transfer a Trademark?",
      items: [
        "**The Assignor**: The current registered owner of the trademark.",
        "**The Assignee**: The person or entity to whom the trademark is being transferred. This can be any individual or legal entity.",
      ],
    },
    {
      title: "Types of Assignment",
      items: [
        "**Complete Assignment**: All rights in the trademark are transferred.",
        "**Partial Assignment**: Ownership is transferred for only some of the goods/services.",
        "**With Goodwill**: The value and reputation of the brand are transferred along with the mark.",
        "**Without Goodwill (Gross Assignment)**: Only the ownership of the mark is transferred, not the underlying goodwill.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Core Documents",
      content: {
        title: "Legal & Identity Proof",
        items: [
          "**Trademark Assignment Deed**: A properly drafted, signed, and notarized deed.",
          "Copy of the Trademark Registration Certificate.",
          "KYC documents (PAN, Aadhaar) of both the Assignor and the Assignee.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Draft the Assignment Deed",
      description:
        "A legal expert drafts the Trademark Assignment Deed, clearly stating the terms of the transfer, consideration, and details of the mark.",
    },
    {
      step: 2,
      title: "Execute the Deed",
      description:
        "Both the assignor and the assignee must sign the deed, which should then be notarized to add legal validity.",
    },
    {
      step: 3,
      title: "File Application for Transfer (Form TM-P)",
      description:
        "File a joint application in Form TM-P with the Trademark Registry to record the transfer of ownership.",
    },
    {
      step: 4,
      title: "Submit Documents & Fee",
      description:
        "Submit the executed Assignment Deed and pay the prescribed government fee along with the application.",
    },
    {
      step: 5,
      title: "Registry Approval",
      description:
        "The Registrar will examine the application. If satisfied, they will record the assignee's name as the new proprietor and advertise the assignment in the Trademark Journal.",
    },
  ],
  fees: [
    {
      component: "Government Fee (Form TM-P)",
      fees: "₹9,000",
      remarks:
        "The official government fee for filing the application to record a trademark transfer.",
    },
    {
      component: "Professional & Stamp Duty Fees",
      fees: "₹10,000 - ₹20,000+",
      remarks:
        "Includes fees for drafting the legal assignment deed, stamp duty (varies by state), and filing assistance.",
    },
  ],
  faqs: [
    {
      q: "What is the difference between a trademark assignment and a license?",
      a: "An assignment is a permanent transfer of ownership. A license is a temporary permission granted by the owner to another party to use the trademark for a specific period and under certain conditions, while the ownership remains with the licensor.",
    },
    {
      q: "What does transfer 'with goodwill' and 'without goodwill' mean?",
      a: "'With Goodwill' means you transfer the brand name along with the reputation and customer base associated with the goods/services. 'Without Goodwill' (or Gross Assignment) means you only transfer the brand name, but the assignor can continue a similar business under a different brand.",
    },
    {
      q: "Is it mandatory to record the transfer with the Trademark Registry?",
      a: "Yes. While the assignment deed is valid between the two parties upon execution, it has no legal standing against a third party until it is officially recorded in the Trademark Register.",
    },
  ],
};
