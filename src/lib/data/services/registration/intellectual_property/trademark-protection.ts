// lib/data/services/trademark-protection.ts

import { ServiceData } from "@/lib/types";

export const trademarkProtectionData: ServiceData = {
  title: "Trademark Protection",
  breadcrumb: ["Home", "Intellectual Property", "Trademark Protection"],
  overview:
    "**Trademark Protection** is not a one-time registration but a continuous process of safeguarding your registered trademark from unauthorized use and infringement. 🛡️ It involves actively **monitoring** the market and the Trademark Journal for similar marks, and taking timely **legal action** when necessary. Effective protection ensures that your brand's integrity, reputation, and value are not diluted by competitors.",
  advantages: [
    {
      icon: "ShieldCheck",
      title: "Safeguards Brand Reputation",
      text: "Prevents others from using your brand name on substandard products or services, which could damage your reputation.",
    },
    {
      icon: "Gavel",
      title: "Enforces Legal Rights",
      text: "Allows you to take legal action, such as filing an infringement suit, to stop unauthorized use and claim damages.",
    },
    {
      icon: "Search",
      title: "Prevents Dilution",
      text: "Active monitoring and opposition stop similar marks from being registered, thereby preventing the dilution of your brand's distinctiveness.",
    },
    {
      icon: "Gem",
      title: "Protects Business Value",
      text: "Your brand is a valuable asset. Protecting it ensures its value is maintained for potential sales, licensing, or franchising.",
    },
  ],
  disadvantages: [
    {
      icon: "CircleDollarSign",
      title: "Ongoing Cost",
      text: "Effective protection, especially through professional watch services and legal actions, is an ongoing business expense.",
    },
    {
      icon: "Eye",
      title: "Requires Constant Vigilance",
      text: "The responsibility to monitor for and act against infringement lies with the trademark owner.",
    },
    {
      icon: "FileWarning",
      title: "Burden of Proof",
      text: "In any legal action, the trademark owner has the burden of proving that the infringing use is causing public confusion.",
    },
  ],
  eligibility: [
    {
      title: "Who Can Protect a Trademark?",
      items: [
        "The **owner of a registered trademark** has the statutory right to sue for infringement.",
        "The **owner of a well-known but unregistered trademark** can also take action under the common law of 'passing off'.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "For Legal Action",
      content: {
        title: "Evidence Required",
        items: [
          "Copy of your Trademark Registration Certificate.",
          "Evidence of your mark's use and reputation (e.g., invoices, advertisements, sales figures).",
          "Evidence of the infringing party's use of a similar mark.",
          "Proof of public confusion, if available.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Trademark Watch & Monitoring",
      description:
        "Subscribe to a professional service that monitors the Trademark Journal and the market for deceptively similar marks being filed or used.",
    },
    {
      step: 2,
      title: "Send a Cease and Desist Notice",
      description:
        "If an infringement is detected, the first step is usually to send a legal notice to the infringer, demanding that they stop using the mark.",
    },
    {
      step: 3,
      title: "File a Trademark Opposition",
      description:
        "If a similar mark is published in the Trademark Journal, you can file an opposition to prevent it from being registered.",
    },
    {
      step: 4,
      title: "Initiate Legal Action",
      description:
        "If the infringer does not comply, you can file a civil suit for infringement in a court of law to obtain an injunction and claim damages, or file a criminal complaint.",
    },
  ],
  fees: [
    {
      component: "Trademark Watch Service",
      fees: "₹10,000 - ₹25,000 per year",
      remarks: "Professional fees for monitoring services.",
    },
    {
      component: "Cease and Desist Notice",
      fees: "₹5,000 - ₹15,000",
      remarks: "Legal fees for drafting and sending the notice.",
    },
    {
      component: "Opposition/Infringement Suit",
      fees: "₹25,000+",
      remarks:
        "Legal fees for litigation are significantly higher and depend on the complexity of the case.",
    },
  ],
  faqs: [
    {
      q: "What is the difference between infringement and passing off?",
      a: "Infringement is the unauthorized use of a **registered** trademark. Passing off is a common law remedy for the unauthorized use of an **unregistered** trademark, where you have to prove that your mark has acquired significant goodwill and that the infringer's use is causing public deception.",
    },
    {
      q: "What is a Trademark Watch service?",
      a: "It's a professional service where experts continuously monitor the Trademark Registry's database and journal for any new applications that are confusingly similar to your trademark, allowing you to take timely action.",
    },
    {
      q: "Can I take action if my trademark is not yet registered?",
      a: "Yes. If your brand has established a strong reputation and goodwill in the market, you can take legal action against an infringer under the common law of 'passing off', even if your trademark is not registered.",
    },
  ],
};
