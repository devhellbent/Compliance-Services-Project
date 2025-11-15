// lib/data/services/trust-registration.ts

import { ServiceData } from "@/lib/types";

export const trustRegistrationData: ServiceData = {
  title: "Trust Registration (NGO)",
  breadcrumb: ["Home", "Registrations", "Trust Registration"],
  description:
    "Safeguard assets for charitable purposes with legal certainty. Trust registration creates a robust legal framework where settlors transfer assets to trustees for beneficiary welfare, ideal for charitable activities, asset protection, and strategic estate planning.",
  overview:
    "A **Trust** represents one of the oldest and most respected legal structures for charitable and philanthropic activities, established when a settlor (founder) transfers property or assets to trustees who manage and administer these resources for the benefit of specified beneficiaries or charitable purposes, governed by the Indian Trusts Act, 1882, and various state-specific public trust laws. This fiduciary relationship creates a distinct separation between legal ownership (held by trustees) and beneficial interest (enjoyed by beneficiaries), providing robust asset protection and ensuring resources are deployed strictly according to the settlor's vision as documented in the trust deed. The trust deed serves as the constitutional document defining objectives, trustee powers and duties, beneficiary rights, asset management protocols, and operational guidelines, providing comprehensive legal framework for trust administration. Trusts require minimum two trustees who bear the fiduciary responsibility of managing trust property with utmost good faith, diligence, and prudence, always acting in the best interests of beneficiaries or charitable objectives. Unlike societies and companies, trusts operate on the principle of beneficiary or public welfare rather than membership, making them ideal for endowment-based charitable work, ancestral property management, and intergenerational wealth transfer for philanthropic purposes. Public charitable trusts registered under state public trust acts enjoy perpetual succession, separate legal identity, and significant tax benefits including exemption from income tax under Section 11 and eligibility for 80G certification enabling donor tax deductions. The registration process involves execution of trust deed on stamp paper, notarization, and registration with the Sub-Registrar of Assurances followed by application to state Charity Commissioner or equivalent authority for public trust registration. Trusts offer maximum flexibility in defining objectives, from specific charitable causes like education, healthcare, religious activities, poverty alleviation, to broad public welfare goals. The structure enables corpus building through donations, grants, endowments, and testamentary transfers, with investment income supporting ongoing charitable activities. Trustees can include individuals, corporate entities, or both, ensuring professional management and institutional continuity. Lower compliance requirements compared to corporate structures make trusts administratively simpler, though good governance practices mandate regular accounting, beneficiary reporting, and audit compliance. Trusts can receive foreign contributions through FCRA registration, access government grants, and establish lasting legacies through endowment funds. Particularly suitable for family philanthropies, religious and spiritual organizations, educational institutions, healthcare facilities, cultural preservation initiatives, and community welfare programs, Trust registration delivers time-tested legal certainty for transforming personal wealth and charitable intentions into enduring social impact across generations.",
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
      icon: "FileSignature",
      title: "Simple Formation & Low Cost",
      text: "The formation process, centered around drafting and registering a Trust Deed, is simpler and less expensive than a Section 8 Company.",
    },
    {
      icon: "ShieldCheck",
      title: "Strong Asset Protection",
      text: "Assets placed in a trust are legally protected and must be used only for the purposes stated in the Trust Deed. Creditors cannot claim trust assets.",
    },
    {
      icon: "BadgePercent",
      title: "Eligible for Tax Benefits",
      text: "Public charitable trusts can apply for 12A and 80G registrations to get tax exemptions on their income and offer tax deductions to donors.",
    },
    {
      icon: "Gavel",
      title: "Clear Governance & Settlor's Intent",
      text: "The Trust Deed provides a clear legal framework for management and ensures the settlor's charitable objectives are carried out.",
    },
    {
      icon: "Lock",
      title: "Privacy and Confidentiality",
      text: "A Trust Deed is a private document and does not require public filing with MCA, offering more confidentiality than a company.",
    },
  ],
  disadvantages: [
    {
      icon: "Users",
      title: "Less Democratic Governance",
      text: "Trusts are managed by a board of trustees, often appointed for life, without a democratic election process like in societies.",
    },
    {
      icon: "Recycle",
      title: "Difficult to Alter or Dissolve",
      text: "Amending the Trust Deed or dissolving the trust is legally complex and often requires a court order.",
    },
    {
      icon: "TrendingDown",
      title: "Perceived as Less Credible for Grants",
      text: "For large government grants and foreign funding, Section 8 companies are often preferred over trusts due to stricter governance under MCA.",
    },
    {
      icon: "FileText",
      title: "Limited Scalability",
      text: "The structure is less suited for large-scale, nationwide operations compared to a Section 8 Company.",
    },
  ],
  eligibility: [
    "**Settlor**: One or more persons who create the trust.",
    "**Trustee(s)**: At least two persons to manage the trust.",
    "**Beneficiary**: The general public for a public charitable trust.",
    "**Trust Deed**: A document outlining the trust's objectives and rules.",
  ],
  documents: [
    {
      title: "Documents for Trust Registration",
      items: [
        "PAN card of the settlor and trustees.",
        "Aadhaar card or voter ID of the settlor and trustees.",
        "Passport-size photographs of the settlor and trustees.",
        "Proof of the registered office address (e.g., electricity bill, rent agreement).",
        "A non-judicial stamp paper for the trust deed.",
      ],
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
