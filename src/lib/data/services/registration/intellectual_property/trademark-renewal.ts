// lib/data/services/trademark-renewal.ts

import { ServiceData } from "@/lib/types";

export const trademarkRenewalData: ServiceData = {
  title: "Trademark Renewal",
  breadcrumb: ["Home", "Intellectual Property", "Trademark Renewal"],
  overview:
    "**Trademark Renewal** is the process of extending the validity of a registered trademark for another **10 years**. 🗓️ A trademark registration is not perpetual and must be renewed before its expiry to maintain legal protection and the exclusive rights associated with the brand. Failing to renew on time can lead to the removal of the trademark from the register, leaving your brand vulnerable.",
  advantages: [
    {
      icon: "ShieldCheck",
      title: "Maintains Legal Protection",
      text: "Renewal continues the legal protection against infringement, allowing you to take action against anyone who misuses your brand.",
    },
    {
      icon: "Infinity",
      title: "Preserves Exclusive Rights",
      text: "It ensures you retain the exclusive right to use the trademark for your goods and services nationwide.",
    },
    {
      icon: "Gem",
      title: "Protects Brand Goodwill",
      text: "Your brand's goodwill and value are built over time. Renewal protects this valuable intangible asset from being diluted or lost.",
    },
    {
      icon: "Gavel",
      title: "Prevents Others from Registering",
      text: "Keeping your trademark active prevents competitors from registering a similar mark after yours has expired.",
    },
  ],
  disadvantages: [
    {
      icon: "CircleDollarSign",
      title: "Recurring Cost",
      text: "Renewal is a recurring expense every 10 years for as long as you wish to maintain the trademark.",
    },
    {
      icon: "AlertTriangle",
      title: "Risk of Losing the Mark",
      text: "Forgetting to renew within the prescribed timeline can lead to the trademark being removed from the register.",
    },
    {
      icon: "FileWarning",
      title: "Late Fees and Restoration",
      text: "Renewing after the expiry date but within the grace period incurs a late fee. After that, a more complex and expensive 'Restoration' process is required.",
    },
  ],
  eligibility: [
    {
      title: "Who Can Renew?",
      items: [
        "Any registered trademark owner whose trademark is approaching its 10-year expiry date.",
        "The renewal application can be filed up to one year before the expiry date.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Required for Renewal",
      content: {
        title: "Basic Documents",
        items: [
          "Copy of the Trademark Registration Certificate.",
          "Power of Attorney (Form TM-O) authorizing an attorney/agent to file the renewal.",
          "ID and Address proof of the applicant (PAN/Aadhaar).",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "File Renewal Application (Form TM-R)",
      description:
        "The renewal application is filed in Form TM-R with the Trademark Registry. This can be done online through the official portal.",
    },
    {
      step: 2,
      title: "Pay the Renewal Fee",
      description:
        "The prescribed government fee for renewal must be paid along with the application.",
    },
    {
      step: 3,
      title: "Verification by Registry",
      description:
        "The Trademark Registry will verify the application and the payment. If everything is in order, they will process the renewal.",
    },
    {
      step: 4,
      title: "Renewal Confirmation",
      description:
        "Once renewed, the trademark's status is updated in the registry, and it is published in the Trademark Journal. The renewal is valid for another 10 years.",
    },
    {
      step: "!",
      title: "Grace Period & Restoration",
      description:
        "If you miss the deadline, you can still renew within 6 months after expiry by paying a late fee. After this grace period, you must file for 'Restoration' within one year of expiry.",
    },
  ],
  fees: [
    {
      component: "Government Fee",
      fees: "₹9,000",
      remarks:
        "The official government fee for filing the renewal application (TM-R).",
    },
    {
      component: "Professional Fees",
      fees: "₹3,000 - ₹6,000",
      remarks:
        "For professional assistance with filing the renewal application and managing the process.",
    },
  ],
  faqs: [
    {
      q: "When can I renew my trademark?",
      a: "You can file for renewal at any time within one year before the date of expiry of your trademark's 10-year registration period.",
    },
    {
      q: "What happens if I forget to renew my trademark?",
      a: "If you don't renew by the expiry date, your trademark status will change to 'Expired'. You can still renew it within a 6-month grace period by paying a late fee. After that, the mark is 'Removed' from the register.",
    },
    {
      q: "What is the difference between Renewal and Restoration?",
      a: "Renewal is done before or within 6 months after expiry. Restoration is a more complex legal process to restore a trademark that has been 'Removed' from the register. It can be filed between 6 months and 1 year after the expiry date.",
    },
  ],
};
