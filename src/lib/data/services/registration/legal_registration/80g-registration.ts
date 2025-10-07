// lib/data/services/80g-registration.ts

import { ServiceData } from "@/lib/types";

export const a80gRegistrationData: ServiceData = {
  title: "80G Registration",
  breadcrumb: ["Home", "Registrations", "80G Registration"],
  overview:
    "An **80G Certificate** is a certification granted by the Income Tax Department to non-profit organizations (NGOs). Its primary purpose is to encourage donations by providing a significant tax benefit to the **donor**. 🎁 When an NGO has an 80G certificate, individuals and companies who donate to it can claim a **tax deduction** on the donated amount from their gross total income. This is a powerful tool for attracting funds.",
  advantages: [
    {
      icon: "TrendingUp",
      title: "Boosts Donations",
      text: "Providing a tax deduction acts as a major incentive for donors, significantly increasing the potential for fundraising.",
    },
    {
      icon: "ShieldCheck",
      title: "Enhances Credibility",
      text: "An 80G certificate signals that the NGO has been verified by the tax authorities, which builds trust and authenticity.",
    },
    {
      icon: "Building",
      title: "Attracts Corporate Funding",
      text: "Many companies look for 80G registered NGOs to make donations as part of their Corporate Social Responsibility (CSR) activities.",
    },
    {
      icon: "Landmark",
      title: "Wider Donor Base",
      text: "It allows you to approach a wider audience for funds, including high-net-worth individuals and large corporations.",
    },
  ],
  disadvantages: [
    {
      icon: "FileCheck",
      title: "12A Registration is a Prerequisite",
      text: "An NGO cannot apply for an 80G certificate unless it has already obtained a 12A registration for tax exemption.",
    },
    {
      icon: "FileWarning",
      title: "Annual Compliance",
      text: "The NGO must file an annual 'Statement of Donations' (Form 10BD) and issue donation certificates (Form 10BE) to its donors.",
    },
    {
      icon: "Ban",
      title: "Not for All NGOs",
      text: "NGOs with religious objectives or those benefiting a specific caste or community are generally not eligible for 80G.",
    },
  ],
  eligibility: [
    {
      title: "Eligible Entities",
      items: [
        "Registered Public Charitable Trusts, Societies, or Section 8 Companies.",
        "The NGO must have a valid **12A registration**.",
        "The organization's activities must be for charitable purposes and not for the benefit of any specific religious community or caste.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "NGO Documents",
      content: {
        title: "Registration & Compliance",
        items: [
          "Self-certified copy of the NGO's Registration Certificate (Trust Deed, Society Certificate, or COI).",
          "Self-certified copy of the **12A Registration Certificate**.",
          "Self-certified copy of the NGO's PAN Card.",
          "Copy of the Trust Deed or the MOA & AOA of the entity.",
        ],
      },
    },
    {
      tabTitle: "Activity Documents",
      content: {
        title: "Activities & Financials",
        items: [
          "A detailed note on the activities of the NGO.",
          "Annual financial accounts for the last three years (if applicable).",
          "Details of all trustees/members, including their PAN and Aadhaar.",
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
      title: "Select and Fill Form 10A",
      description:
        "Navigate to 'e-File' > 'Income Tax Forms' and select 'Form 10A'. This single form is used for both 12A and 80G applications.",
    },
    {
      step: 3,
      title: "Attach Required Documents",
      description:
        "Upload scanned copies of all the required documents, including the 12A certificate if already obtained.",
    },
    {
      step: 4,
      title: "Submit with DSC",
      description:
        "Submit the application using the Digital Signature Certificate (DSC) of the authorized signatory of the NGO.",
    },
    {
      step: 5,
      title: "Verification and Approval",
      description:
        "The Commissioner of Income Tax (Exemptions) will review the application. If satisfied, they will grant the 80G registration.",
    },
  ],
  fees: [
    {
      component: "Government Fee",
      fees: "Free",
      remarks:
        "There is no government fee for filing Form 10A or for obtaining 80G registration.",
    },
    {
      component: "Professional Fees",
      fees: "₹7,000 - ₹15,000",
      remarks:
        "For professional assistance with the application process and documentation, especially if applied for along with 12A.",
    },
  ],
  faqs: [
    {
      q: "What is the tax benefit for a donor giving to an 80G registered NGO?",
      a: "The donor can claim a deduction of 50% of the donated amount from their taxable income. For certain government-notified funds, this deduction can be 100%.",
    },
    {
      q: "Is 80G registration mandatory for an NGO to accept donations?",
      a: "No, an NGO can accept donations without an 80G certificate. However, without it, you cannot offer a tax benefit to your donors, which can significantly limit your fundraising potential.",
    },
    {
      q: "What are Form 10BD and 10BE?",
      a: "Form 10BD is an annual 'Statement of Donations' that the NGO must file with the Income Tax Department, listing all donations received. Based on this, the NGO must issue Form 10BE, a 'Certificate of Donation', to each donor so they can claim their tax deduction.",
    },
  ],
};
