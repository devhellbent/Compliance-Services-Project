// lib/data/services/darpan-registration.ts

import { ServiceData } from "@/lib/types";

export const darpanRegistrationData: ServiceData = {
  title: "Darpan Registration",
  breadcrumb: ["Home", "Registrations", "Darpan Registration"],
  overview:
    "**Darpan Registration** is a portal created by **NITI Aayog** (the policy think tank of the Government of India) to maintain a comprehensive database of Non-Governmental Organizations (NGOs) and Voluntary Organizations (VOs). 🖥️ This registration is **mandatory** for any NGO that wants to apply for and receive grants or funding from any ministry or department of the Indian Government.",
  advantages: [
    {
      icon: "Landmark",
      title: "Eligibility for Government Grants",
      text: "It is the primary prerequisite for NGOs to apply for grants under various government schemes.",
    },
    {
      icon: "ShieldCheck",
      title: "Increases Credibility",
      text: "Registration on a government portal enhances the transparency and credibility of the NGO in the eyes of donors and the public.",
    },
    {
      icon: "Fingerprint",
      title: "Provides a Unique ID",
      text: "Each registered NGO is assigned a unique ID, which is used by government departments to track the organization's activities and funding.",
    },
    {
      icon: "Database",
      title: "Centralized Repository",
      text: "Acts as a central database for government bodies to access information about NGOs, their activities, and their key members.",
    },
  ],
  disadvantages: [
    {
      icon: "FileWarning",
      title: "Requires Detailed Disclosures",
      text: "The portal requires detailed information about the NGO's activities, members, and financials, which must be kept updated.",
    },
    {
      icon: "Info",
      title: "Prerequisite for Grants Only",
      text: "The primary purpose is to enable grant applications; it does not offer direct financial benefits on its own.",
    },
    {
      icon: "Link",
      title: "Linked with Other Portals",
      text: "The data is linked with other government portals, so maintaining accurate and updated information is crucial.",
    },
  ],
  eligibility: [
    {
      title: "Eligible Entities",
      items: [
        "Any registered **Trust**, **Society**, or **Section 8 Company** that is involved in charitable or social welfare activities.",
        "The NGO must have a valid PAN card in its own name.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "NGO Documents",
      content: {
        title: "Registration and PAN",
        items: [
          "Copy of the NGO's Registration Certificate (e.g., Trust Deed, Society Registration Certificate, or Certificate of Incorporation).",
          "Copy of the NGO's PAN Card.",
        ],
      },
    },
    {
      tabTitle: "Member Documents",
      content: {
        title: "KYC of Office Bearers",
        items: [
          "PAN Card and Aadhaar Card of at least three members of the executive committee, trustees, or directors.",
          "Mobile numbers and email IDs of the key office bearers.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Visit the NGO Darpan Portal",
      description: "Go to the official website of NITI Aayog's NGO Darpan.",
    },
    {
      step: 2,
      title: "Create a User Account",
      description:
        "Sign up on the portal by providing the name of the NGO, contact person details, mobile number, and email ID.",
    },
    {
      step: 3,
      title: "Fill the Online Application",
      description:
        "Log in and fill out the detailed online form with information about the NGO, its registration, address, key members, and areas of operation.",
    },
    {
      step: 4,
      title: "Upload Documents",
      description:
        "Upload scanned copies of the NGO's registration certificate and PAN card.",
    },
    {
      step: 5,
      title: "Submit and Get Unique ID",
      description:
        "After submitting the form, a unique ID is generated for the NGO, which should be used in all future correspondence and grant applications.",
    },
  ],
  fees: [
    {
      component: "Government Fee",
      fees: "Free",
      remarks:
        "Registration on the NGO Darpan portal is completely free of cost.",
    },
    {
      component: "Professional Fees",
      fees: "₹2,000 - ₹4,000",
      remarks:
        "For professional assistance with the application process and document preparation.",
    },
  ],
  faqs: [
    {
      q: "Is Darpan registration mandatory for all NGOs?",
      a: "It is not mandatory for an NGO to simply exist. However, it is absolutely mandatory if the NGO intends to apply for grants or funding from any Indian government body.",
    },
    {
      q: "What is NITI Aayog?",
      a: "NITI Aayog (National Institution for Transforming India) is the premier policy think tank of the Government of India, providing both directional and policy inputs. It manages the NGO Darpan portal.",
    },
    {
      q: "How long is the Darpan ID valid?",
      a: "The Darpan ID is perpetually valid. However, the NGO is required to keep its profile, especially details of its office bearers and financials, updated on the portal regularly.",
    },
  ],
};
