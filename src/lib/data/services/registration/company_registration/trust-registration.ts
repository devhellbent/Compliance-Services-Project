// lib/data/services/trust-registration.ts

import { ServiceData } from "@/lib/types";

export const trustRegistrationData: ServiceData = {
  title: "Trust Registration (NGO)",
  breadcrumb: ["Home", "Registrations", "Trust Registration"],
  description:
    "Safeguard assets for charitable purposes with legal certainty. Trust registration creates a robust legal framework where settlors transfer assets to trustees for beneficiary welfare, ideal for charitable activities, asset protection, and strategic estate planning.",
  overview: `**What is Trust Registration**

Trust Registration is the official process of legally establishing a **Trust**, which is a legal arrangement where an owner (the **Settlor** or **Author**) transfers assets to a person or group (the **Trustee**) to be managed for the benefit of specified individuals or the public (the **Beneficiaries**).

In India, this involves drafting a **Trust Deed**, a foundational document outlining the Trust\'s name, objectives, rules, and the powers and duties of the Trustees. This deed must be printed on non-judicial stamp paper and submitted to the local **Sub-Registrar\'s Office** with required documents like identity and address proofs of all parties.

Registration grants the Trust a **separate legal identity**, making the deed legally admissible, and is mandatory for public charitable trusts seeking crucial **income tax exemptions** (like under Sections 12A and 80G of the Income Tax Act). The process provides credibility, accountability, and the legal framework necessary for effective operation and asset management.

**What is Trust Deed**

A **Trust Deed** is a crucial legal document that serves as the \"constitution\" or \"rulebook\" for a trust.

It formally establishes the trust and defines the terms and conditions under which it will operate.`,
  whyChooseUs: [
    {
      icon: "FileSignature",
      title: "Expert Deed Drafting",
      text: "We draft a comprehensive and legally sound trust deed tailored to your specific charitable objectives.",
    },
    {
      icon: "Map",
      title: "State-Specific Guidance",
      text: "We provide clear guidance on stamp duty and registration requirements applicable in your state.",
    },
    {
      icon: "Briefcase",
      title: "End-to-End Support",
      text: "From drafting the deed to appearing before the registrar, we manage the entire process.",
    },
  ],
  advantages: [
    {
      icon: "ShieldCheck",
      title: "Legal Recognition",
      text: "Provides a formal legal identity under the Indian Trusts Act, ensuring the deed is admissible in court and recognized by government bodies.",
    },
    {
      icon: "BadgePercent",
      title: "Tax Exemptions",
      text: "Public charitable trusts can apply for 12A and 80G registrations to exempt income from tax and provide deductions to donors.",
    },
    {
      icon: "Shield",
      title: "Asset Protection",
      text: "Irrevocable private trusts can shield family assets from personal liabilities, lawsuits, and creditors of the settlor or beneficiaries.",
    },
    {
      icon: "TrendingUp",
      title: "Smooth Succession",
      text: "Facilitates seamless transfer of wealth across generations without the need for a probate, which can be time-consuming and public.",
    },
    {
      icon: "Users",
      title: "Perpetual Continuity",
      text: "Ensures the mission of the trust continues indefinitely, independent of the life or health of individual trustees or founders.",
    },
  ],
  disadvantages: [
    {
      icon: "FileWarning",
      title: "Stringent Compliance",
      text: "Charitable trusts must maintain rigorous records, undergo annual audits, and file regular tax returns to retain their status.",
    },
    {
      icon: "Lock",
      title: "Irrevocable Nature",
      text: "Once assets are settled into a public charitable trust, they generally cannot be reclaimed by the settlor.",
    },
    {
      icon: "Ban",
      title: "No Profit Distribution",
      text: "All income must be reinvested into the trust's charitable objectives; profits cannot be distributed to trustees.",
    },
    {
      icon: "Clock",
      title: "Complex Setup",
      text: "Drafting a robust Trust Deed and navigating state-specific registration laws can be time-consuming and costly.",
    },
    {
      icon: "AlertTriangle",
      title: "Loss of Control",
      text: "In irrevocable private trusts, the settlor gives up direct ownership and control over the assets forever.",
    },
  ],
  eligibility: [
    {
      title:
        "The eligibility criteria for Trust registration in India primarily",
      items: [
        "revolve around the key parties involved and the foundational document (the Trust Deed). These requirements are largely consistent for both Public Charitable Trusts and Private (Family) Trusts, based on the Indian Trusts Act, 1882, and state-specific laws.",
      ],
    },
    {
      title: "1. Competency of the Parties Involved",
      items: [
        "A Trust must involve three main parties, each of whom must meet specific legal prerequisites:  #",
      ],
    },
    {
      title: "A. The Settlor (or Author)",
      items: [
        "**A Major:** At least 18 years of age.",
        "**Of Sound Mind:** Legally and mentally capable of making rational decisions.",
        "**Owner of the Property:** The settlor must be the rightful owner of the movable or immovable property that is being transferred to the Trust. #",
      ],
    },
    {
      title: "B. The Trustee(s)",
      items: [
        "**Competency:** Trustees must also be competent to contract (a major and of sound mind).",
        "**Minimum Number:** Generally, there must be a minimum of **two Trustees** (though state laws can sometimes vary this, especially for private trusts, the common practice is two or more).",
        "**Acceptance:** The appointed person must accept the role of the Trustee. #",
      ],
    },
    {
      title: "C. The Beneficiary",
      items: [
        "**Private Trust:** Beneficiaries are specific, identifiable individuals or family members.",
        "**Public Trust:** Beneficiaries are the general public or a section of the public (e.g., people living in a specific district, or a community focused on a specific cause).",
      ],
    },
    {
      title: "2. Foundational Legal Conditions",
      items: [
        "It must be drafted on **Non-Judicial Stamp Paper** of the value prescribed by the specific state where the Trust\\'s registered office is located.",
        "It must be signed by the Settlor and the Trustees, and witnessed by at least two individuals.",
        "It must be registered with the **Sub-Registrar of Assurances** of the area where the Trust\\'s office is situated.",
      ],
    },
    {
      title: "3. Eligibility for Tax Benefits (Public Trusts Only)",
      items: [
        'For a **Public Charitable Trust** to be fully eligible to receive tax exemptions on its income, it must meet additional criteria under the Income Tax Act, 1961:  **A. Charitable Objectives:** The Trust\'s activities must exclusively serve a \\"charitable or religious purpose\\" as defined under the Income Tax Act.  **B. 12AB Registration:** The Trust must apply for and obtain registration under **Section 12AB** of the Income Tax Act. This step makes its income exempt from tax (subject to specific conditions).  **C. 80G Registration:** To make the Trust eligible to issue receipts that allow donors to claim a tax deduction, it must separately apply for and receive **Section 80G** registration.',
      ],
    },
  ],
  documents: [
    {
      tabTitle:
        "Here\\'s a comprehensive list of documents typically required:",
      content: {
        title: "Here\\'s a comprehensive list of documents typically required:",
        items: [
          "**Trust Deed Draft:**",
          "This is the most critical document, which outlines the trust\\'s name, objectives, details of the settlor, trustees, beneficiaries, trust property, rules for management, etc.",
          "It will be drafted on Non-Judicial Stamp Paper of appropriate value, as prescribed by the specific state where the trust is being registered. The stamp duty varies significantly from state to state.",
          "**Identity Proof of Settlor and all Trustees:**",
          "Indian Nationals: PAN Card (mandatory), Aadhaar Card, Voter ID, Passport, or Driving License.",
          "Foreign Nationals/NRIs: Passport (mandatory, notarized and apostilled/consularized), OCI/PIO Card (if applicable).",
          "**Address Proof of Settlor and all Trustees:**",
          "Indian Nationals: Latest Bank Statement, Electricity Bill, Telephone Bill, Mobile Bill (should not be older than two months).",
          "Foreign Nationals/NRIs: Latest Bank Statement or Utility Bill (not older than two months, notarized and apostilled/consularized).",
          "**Registered Office Address Proof:**",
          "If Owned: Copy of the Sale Deed/Property Tax Receipt.",
          "If Rented/Leased: Notarized copy of the Rent/Lease Agreement.",
          "Common Requirement: A copy of a recent Utility Bill (Electricity, Gas, or Water bill) for the registered office address, not older than two months.",
          "NOC: A No Objection Certificate (NOC) from the property owner, if the premises are rented or used with permission, explicitly allowing the trust to use the address as its registered office.",
          "**Passport-sized Photographs:**",
          "Recent passport-sized photographs of the Settlor and all Trustees.",
          "**Witnesses:**",
          "Identity and address proof of two witnesses who will attest the Trust Deed during registration.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Draft the Trust Deed",
      description:
        "Prepare a trust deed that includes the name of the trust, details of the settlor and trustees, objectives, and rules.",
    },
    {
      step: 2,
      title: "Pay Stamp Duty",
      description:
        "Pay the required stamp duty, which varies by state, on the trust deed.",
    },
    {
      step: 3,
      title: "Register the Trust Deed",
      description:
        "The trust deed must be registered with the local registrar of the region where the registered office is located.",
    },
    {
      step: 4,
      title: "Obtain Registration Certificate",
      description:
        "The registrar will issue a registration certificate after verifying the documents.",
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
