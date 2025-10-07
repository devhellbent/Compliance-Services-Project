// lib/data/services/12a-registration.ts

import { ServiceData } from "@/lib/types";

export const a12aRegistrationData: ServiceData = {
  title: "12A Registration",
  breadcrumb: ["Home", "Registrations", "12A Registration"],
  overview:
    "**12A Registration** is a one-time registration granted by the Income Tax Department to non-profit organizations like Trusts, Societies, and Section 8 Companies. 📜 Its primary purpose is to provide the NGO with **complete tax exemption** on its surplus income. Without 12A registration, an NGO's income would be subject to normal tax rates, just like any other commercial entity.",
  advantages: [
    {
      icon: "BadgePercent",
      title: "Full Tax Exemption",
      text: "The entire surplus income of the organization is exempt from income tax, allowing funds to be fully utilized for charitable activities.",
    },
    {
      icon: "FileCheck",
      title: "Prerequisite for 80G",
      text: "An NGO must have a 12A certificate before it can apply for an 80G certificate, which allows donors to claim tax deductions.",
    },
    {
      icon: "Landmark",
      title: "Eligibility for Grants",
      text: "Government and international funding agencies mandate 12A registration as a basic eligibility criterion for providing grants.",
    },
    {
      icon: "Infinity",
      title: "Lifetime Validity",
      text: "Once granted, the registration is valid for the lifetime of the organization, although provisional registration may be granted initially.",
    },
  ],
  disadvantages: [
    {
      icon: "Ban",
      title: "No Commercial Activities",
      text: "The NGO cannot engage in for-profit business activities that are unrelated to its charitable objectives.",
    },
    {
      icon: "Book",
      title: "Strict Bookkeeping",
      text: "The organization must maintain proper books of accounts and records of all its financial transactions, which are subject to scrutiny.",
    },
    {
      icon: "FileWarning",
      title: "Mandatory ITR Filing",
      text: "Even with tax exemption, the NGO is required to file an annual Income Tax Return (ITR-7) and an audit report.",
    },
  ],
  eligibility: [
    {
      title: "Eligible Entities",
      items: [
        "Registered Public Charitable or Religious Trusts.",
        "Registered Societies.",
        "Registered Section 8 Companies.",
        "The organization's objectives must be charitable in nature and not for profit.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "NGO Documents",
      content: {
        title: "Registration & PAN",
        items: [
          "Self-certified copy of the NGO's Registration Certificate (Trust Deed, Society Certificate, or COI).",
          "Self-certified copy of the NGO's PAN Card.",
          "Self-certified copy of the Trust Deed or the MOA & AOA of the entity.",
        ],
      },
    },
    {
      tabTitle: "Activity Documents",
      content: {
        title: "Financials & Activities",
        items: [
          "A detailed note on the activities of the NGO.",
          "Annual financial accounts for the last three years (if applicable).",
          "Digital Signature Certificate (DSC) of an authorized signatory.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Log in to E-Filing Portal",
      description:
        "Log in to the official Income Tax Department's e-filing portal using the NGO's PAN credentials.",
    },
    {
      step: 2,
      title: "Navigate to Form 10A",
      description:
        "Go to 'e-File' > 'Income Tax Forms' > 'File Income Tax Forms' and select 'Form 10A - Application for registration'.",
    },
    {
      step: 3,
      title: "Fill the Application Form",
      description:
        "Complete the online Form 10A with accurate details about the NGO, its members, and its activities.",
    },
    {
      step: 4,
      title: "Attach Documents and Submit",
      description:
        "Upload scanned copies of all the required documents and submit the application using the Digital Signature Certificate (DSC) of the authorized person.",
    },
    {
      step: 5,
      title: "Verification and Approval",
      description:
        "The Income Tax department (Commissioner of Exemptions) will review the application. If satisfied, they will grant the 12A registration.",
    },
  ],
  fees: [
    {
      component: "Government Fee",
      fees: "Free",
      remarks:
        "There is no government fee for filing Form 10A or for obtaining 12A registration.",
    },
    {
      component: "Professional Fees",
      fees: "₹7,000 - ₹15,000",
      remarks:
        "For professional assistance with the application process, documentation, and follow-up with the tax department.",
    },
  ],
  faqs: [
    {
      q: "What is the difference between 12A and 80G registration?",
      a: "12A registration exempts the NGO's income from tax. 80G registration allows donors who give money to the NGO to claim a tax deduction on their own income. 12A is for the NGO's benefit, while 80G is for the donor's benefit.",
    },
    {
      q: "Is 12A registration a one-time process?",
      a: "Yes, under the new rules, NGOs get a provisional registration for 3 years, after which they need to apply for a final registration which is then valid for 5 years and needs to be renewed. Previously granted lifetime registrations also need to be re-validated.",
    },
    {
      q: "What happens if an NGO does not have 12A registration?",
      a: "Without 12A registration, the NGO's entire surplus income is treated as regular taxable income and is taxed at the applicable slab rates. It also cannot apply for government funding or an 80G certificate.",
    },
  ],
};
