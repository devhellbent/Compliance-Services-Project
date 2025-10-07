// lib/data/services/society-registration.ts

import { ServiceData } from "@/lib/types";

export const societyRegistrationData: ServiceData = {
  title: "Society Registration (NGO)",
  breadcrumb: ["Home", "Registrations", "Society Registration"],
  overview:
    "A **Society** is a membership-based organization formed by a group of individuals (typically a minimum of seven) who unite for a common non-profit purpose, such as promoting literature, science, arts, or charitable activities. Governed by the **Societies Registration Act, 1860**, a society functions democratically through a managing committee elected by its members. It's a popular structure for NGOs, particularly for state-level operations, clubs, and associations.",
  advantages: [
    {
      icon: "Users",
      title: "Democratic Structure",
      text: "Management is handled by a governing body elected by the members in an annual general meeting, ensuring democratic governance.",
    },
    {
      icon: "Library",
      title: "Separate Legal Identity",
      text: "A registered society is a legal entity distinct from its members. It can own property, enter into contracts, and sue or be sued.",
    },
    {
      icon: "FileSignature",
      title: "Easy Formation",
      text: "The registration process is generally less complex and more cost-effective than that of a Section 8 Company.",
    },
    {
      icon: "BadgePercent",
      title: "Tax Exemption",
      text: "Like other NGOs, a registered society can apply for 12A and 80G registrations to avail of income tax exemptions.",
    },
  ],
  disadvantages: [
    {
      icon: "Vote",
      title: "Potential for Management Conflicts",
      text: "The democratic election process can sometimes lead to internal politics and disputes among members for control.",
    },
    {
      icon: "Gavel",
      title: "State-Level Governance",
      text: "Regulations can vary from state to state, as each has its own version of the Societies Registration Act.",
    },
    {
      icon: "FileWarning",
      title: "Perceived Lower Credibility",
      text: "For large corporate or government grants, Section 8 companies are often seen as more credible due to stricter compliance under the MCA.",
    },
  ],
  eligibility: [
    {
      title: "Member Requirements",
      items: [
        "A minimum of **seven members** are required to form a society in most states.",
        "The members can be Indian citizens, foreigners, or even other registered entities.",
      ],
    },
    {
      title: "Foundational Documents",
      items: [
        "**Memorandum of Association (MOA)**: This document contains the name, objectives, and details of the founding members.",
        "**Rules & Regulations**: This document outlines the rules for managing the society, including membership, meetings, and elections.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Core Documents",
      content: {
        title: "Memorandum and Rules",
        items: [
          "Memorandum of Association (MOA), signed by all founding members.",
          "Rules & Regulations of the Society, also signed by all founding members.",
          "A covering letter requesting registration, signed by all founding members.",
        ],
      },
    },
    {
      tabTitle: "Member & Office Proof",
      content: {
        title: "Identity and Address Proof",
        items: [
          "PAN Card and Aadhaar Card (or other ID proof) of all members of the governing body.",
          "Address proof of the society's registered office (Utility bill, Rent Agreement, NOC).",
          "An affidavit from the president or secretary of the society.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Choose a Unique Name",
      description:
        "Select a name for the society that is not identical to any existing society and does not violate the Emblems and Names Act, 1950.",
    },
    {
      step: 2,
      title: "Draft MOA and Rules & Regulations",
      description:
        "Prepare the Memorandum of Association and the Rules & Regulations according to the format prescribed in the Societies Registration Act for your state.",
    },
    {
      step: 3,
      title: "Get Signatures and Attestation",
      description:
        "The MOA and Rules must be signed by all founding members and witnessed by a gazetted officer, notary public, or another authorized person.",
    },
    {
      step: 4,
      title: "File Application with Registrar",
      description:
        "Submit the application, along with two copies of the signed documents and the prescribed registration fee, to the Registrar of Societies in the relevant state.",
    },
  ],
  fees: [
    {
      component: "Registration Fee",
      fees: "₹50 - ₹1,000",
      remarks:
        "This is a nominal government fee that varies significantly from state to state.",
    },
    {
      component: "Documentation & Notary",
      fees: "₹1,000 - ₹3,000",
      remarks: "Includes costs for stamp paper, affidavits, and notarization.",
    },
    {
      component: "Professional Fees",
      fees: "₹8,000 - ₹15,000",
      remarks:
        "Covers drafting of the MOA and Rules, and complete filing assistance.",
    },
  ],
  faqs: [
    {
      q: "How is a Society different from a Trust?",
      a: "A Society is a membership-based body with democratic governance through an elected committee. A Trust is managed by a board of trustees and does not have a democratic membership structure. Societies are generally easier to manage for membership-driven organizations.",
    },
    {
      q: "Who manages the day-to-day affairs of a Society?",
      a: "The day-to-day management is handled by a Governing Body or Managing Committee, which is elected by the society's members during the Annual General Meeting (AGM).",
    },
    {
      q: "Can the objectives of a Society be changed after registration?",
      a: "Yes, the objectives and rules can be changed. However, it requires a special resolution to be passed by the members according to the procedure laid down in the society's bylaws and the relevant Societies Registration Act.",
    },
  ],
};
