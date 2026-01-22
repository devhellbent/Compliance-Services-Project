// lib/data/services/80g-registration.ts

import { ServiceData } from "@/lib/types";

export const a80gRegistrationData: ServiceData = {
  title: "80G Registration",
  breadcrumb: ["Home", "Registrations", "80G Registration"],
  overview: `80G registration, governed by Section 80G of the Income Tax Act, 1961, is a certification obtained by charitable organizations in India, such as trusts, societies, and Section 8 companies. Its primary function is to provide a crucial incentive for donors: the ability to claim a deduction from their taxable income on the donations they make to the registered entity. This effectively lowers the donor\'s tax liability and encourages philanthropic contributions.

The registration is beneficial for both the donor and the organization. For the donor, the deduction can range from 50% to 100% of the donated amount, depending on the recipient fund or institution, subject to certain limits. For the non-profit organization, holding an 80G certificate significantly enhances its credibility and transparency, making it far more appealing to potential individual, corporate, and foreign donors, thereby boosting fundraising potential.

To be eligible for 80G certification, an organization must fulfill several conditions, including possessing a valid Section 12A registration (which grants tax exemption on the organization\'s income), maintaining transparent accounts, and ensuring its income is used solely for charitable purposes. The application is made to the Principal Commissioner or Commissioner of Income Tax, and the registration must be periodically renewed to remain valid.

**What is Section 80G**

Section 80G of the Indian Income Tax Act offers tax deductions to taxpayers (individuals, companies, etc.) who make donations to specified charitable institutions or relief funds. This provision encourages philanthropy by allowing donors to deduct a percentage (usually 50% or 100%) of the donated amount from their taxable income, thereby reducing their tax liability.`,
  advantages: [
    {
      icon: "Files",
      title: "and Compliance Challenges of 80G Registration",
      text: "The drawbacks mainly relate to the stringent compliance requirements and restrictions placed on the organization\\'s operations.",
      subPoints: [
        "**Strict Compliance Burden:** The organization must adhere to strict rules set by the Income Tax Department, including: ",
        "Maintaining separate and accurate **books of accounts**.",
        "Mandatory annual **reporting of donations** received (Form 10BD) and issuing certificates to donors (Form 10BE). ",
        "**Restriction on Use of Funds:** The organization\\'s income and assets must be used **only for charitable purposes**. Any diversion for non-charitable use or personal benefit of trustees/members can lead to cancellation of the certificate.",
        "**Restrictions on Activities:** The organization must not be working for the benefit of any specific religious community or caste.",
        "**Mandatory Re-Registration and Validity Period:** ",
        "The registration is **not permanent** anymore. After an initial provisional period, the final approval is typically valid for **5 years** and must be renewed by applying at least six months prior to expiry.",
        "Failure to renew the certificate on time leads to the loss of 80G benefits, which instantly deters donors. ",
        "**Rejection Risk in New Regime:** Organizations that receive **provisional registration** and later fail to secure final registration may face uncertainty, potentially impacting the tax-exempt status of past donations, which can cause donor backlash.",
      ],
    },
  ],
  disadvantages: [
    {
      icon: "Files",
      title: "and Compliance Challenges of 80G Registration",
      text: "The drawbacks mainly relate to the stringent compliance requirements and restrictions placed on the organization\\'s operations.",
      subPoints: [
        "**Strict Compliance Burden:** The organization must adhere to strict rules set by the Income Tax Department, including: ",
        "Maintaining separate and accurate **books of accounts**.",
        "Mandatory annual **reporting of donations** received (Form 10BD) and issuing certificates to donors (Form 10BE). ",
        "**Restriction on Use of Funds:** The organization\\'s income and assets must be used **only for charitable purposes**. Any diversion for non-charitable use or personal benefit of trustees/members can lead to cancellation of the certificate.",
        "**Restrictions on Activities:** The organization must not be working for the benefit of any specific religious community or caste.",
        "**Mandatory Re-Registration and Validity Period:** ",
        "The registration is **not permanent** anymore. After an initial provisional period, the final approval is typically valid for **5 years** and must be renewed by applying at least six months prior to expiry.",
        "Failure to renew the certificate on time leads to the loss of 80G benefits, which instantly deters donors. ",
        "**Rejection Risk in New Regime:** Organizations that receive **provisional registration** and later fail to secure final registration may face uncertainty, potentially impacting the tax-exempt status of past donations, which can cause donor backlash.",
      ],
    },
  ],
  eligibility: [
    {
      title:
        "The eligibility criteria for 80G registration are primarily focused",
      items: [
        "on the **donee organization** (the one receiving the donation) to ensure it is genuinely charitable, compliant with income tax laws, and serves the public good.  An organization must meet several conditions under the Income Tax Act, 1961 (India), to get and retain its 80G approval.    To be eligible for 80G registration, an institution or fund must satisfy the following key conditions:",
      ],
    },
    {
      title: "Legal and Operational Status",
      items: [
        "**Legal Structure:** The organization must be legally registered as a **Charitable Trust, Society, or a Section 8 Company** (Non-profit company) under the relevant Indian laws.",
        "**Mandatory Registration:** It must have a valid registration under **Section 12A/12AB** of the Income Tax Act, which grants the organization tax-exempt status on its income. **12A/12AB registration is a prerequisite for 80G.**",
        "**Charitable Objective:** The primary objective and activities of the institution must be **charitable** as defined under the Income Tax Act, not profit-oriented.",
      ],
    },
    {
      title: "Financial and Accounting Compliance",
      items: [
        "**Proper Accounts:** The organization must maintain **regular books of accounts** for its receipts and expenditures.",
        "**Audited Accounts:** It must file **audited financial statements** (Balance Sheet, Income & Expenditure Account) annually.",
        "**Use of Income:** The income and assets of the organization must be applied **solely for charitable or religious purposes** within India.",
      ],
    },
    {
      title: "Restrictions on Activities",
      items: [
        "**No Business Income (Generally):** The organization should generally **not have any business income**. If it does have business income, it must maintain separate books of accounts, and the donations received must not be diverted to that business.",
        "**No Private Benefit:** No part of the income or assets should be used for the benefit of the founder, governing body members, or their relatives.",
        "**No Religious/Caste Specificity:** The institution must **not be established for the exclusive benefit** of any particular religious community or caste.",
        "**No Political Activities:** The organization must not engage in any political activities.",
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
