// lib/data/services/trust-registration.ts

import { ServiceData } from "@/lib/types";

export const trustRegistrationData: ServiceData = {
  title: "Trust Registration (NGO)",
  breadcrumb: ["Home", "Registrations", "Trust Registration"],
  overview:
    "A **Trust** is a legal arrangement where an owner (the **'Settlor'**) transfers property to a person or group (the **'Trustees'**) to manage for the benefit of a third party (the **'Beneficiary'**). It's a common structure for establishing a non-governmental organization (NGO) for charitable purposes (**Public Trust**) or for managing family assets (**Private Trust**). The foundational document is the **'Trust Deed'**, which outlines the objectives and rules of the trust.",
  advantages: [
    {
      icon: "FileSignature",
      title: "Simple to Form",
      text: "The formation process, centered around drafting and registering a Trust Deed, is relatively straightforward compared to a Section 8 Company.",
    },
    {
      icon: "ShieldCheck",
      title: "Strong Asset Protection",
      text: "Assets placed in a trust are legally protected and must be used only for the purposes stated in the Trust Deed.",
    },
    {
      icon: "BadgePercent",
      title: "Eligible for Tax Benefits",
      text: "Public charitable trusts can apply for 12A and 80G registrations to get tax exemptions and offer tax deductions to donors.",
    },
    {
      icon: "Gavel",
      title: "Clear Governance",
      text: "The Trust Deed provides a clear legal framework for the management and operation of the trust by the trustees.",
    },
  ],
  disadvantages: [
    {
      icon: "Users",
      title: "Less Democratic Governance",
      text: "Trusts are typically managed by a board of trustees without a democratic election process like in societies.",
    },
    {
      icon: "Recycle",
      title: "Difficult to Dissolve",
      text: "The process of dissolving a trust is legally complex and often requires a court order.",
    },
    {
      icon: "FileWarning",
      title: "Perceived as Less Credible",
      text: "For large government grants, Section 8 companies are often preferred over trusts due to their stricter governance under the MCA.",
    },
  ],
  eligibility: [
    {
      title: "Key Roles and Elements",
      items: [
        "**Settlor**: At least one person who creates the trust.",
        "**Trustee**: At least two persons to manage the trust. The settlor can also be a trustee.",
        "**Beneficiary**: The person or group for whose benefit the trust is created. For a public trust, the beneficiary is the general public.",
        "**Trust Property**: A clearly defined property (movable or immovable) that forms the subject matter of the trust.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Personnel Documents",
      content: {
        title: "Identity and Address Proof",
        items: [
          "PAN Card and Aadhaar Card (or other ID proof) of the Settlor and all Trustees.",
          "Passport-size photographs of the Settlor and Trustees.",
        ],
      },
    },
    {
      tabTitle: "Core Legal Document",
      content: {
        title: "Trust Deed",
        items: [
          "A comprehensive Trust Deed drafted on non-judicial stamp paper of appropriate value (varies by state).",
        ],
      },
    },
    {
      tabTitle: "Address Proof",
      content: {
        title: "Proof of Registered Address",
        items: [
          "Latest Utility Bill of the trust's registered office address.",
          "NOC from the property owner if the office is rented.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Draft the Trust Deed",
      description:
        "Prepare a Trust Deed, which must contain key details like the name and address of the settlor and trustees, trust objectives, rules, and regulations.",
    },
    {
      step: 2,
      title: "Pay Stamp Duty",
      description:
        "The Trust Deed must be printed on stamp paper of a value prescribed by the respective state government.",
    },
    {
      step: 3,
      title: "Execute the Trust Deed",
      description:
        "The settlor and trustees, along with two witnesses, must physically appear before the local **Sub-Registrar** to sign the deed.",
    },
    {
      step: 4,
      title: "Submit for Registration",
      description:
        "Submit the executed Trust Deed and all required documents to the Sub-Registrar's office. After verification, the deed is registered, and the trust is legally formed.",
    },
  ],
  fees: [
    {
      component: "Stamp Duty",
      fees: "Varies",
      remarks:
        "This is the major cost and depends entirely on the state and the value of the property included in the trust.",
    },
    {
      component: "Registration Fee",
      fees: "₹500 - ₹2,000",
      remarks: "A nominal fee charged by the Sub-Registrar's office.",
    },
    {
      component: "Professional Fees",
      fees: "₹10,000 - ₹20,000",
      remarks:
        "Includes drafting the Trust Deed and assistance with the registration process.",
    },
  ],
  faqs: [
    {
      q: "What is the difference between a Public Trust and a Private Trust?",
      a: "A Public Trust is created for a charitable purpose for the benefit of the general public. A Private Trust is created for the benefit of specific individuals or a family, typically for estate planning.",
    },
    {
      q: "Can a trustee also be the settlor or a beneficiary?",
      a: "The settlor (creator) can also be a trustee. However, in a public charitable trust, a trustee generally cannot be a beneficiary, as it would create a conflict of interest.",
    },
    {
      q: "Does a trust need a separate PAN card?",
      a: "Yes, once the trust is registered, it is a separate legal entity for tax purposes. You must apply for a PAN card in the name of the trust to open a bank account and file income tax returns.",
    },
  ],
};
