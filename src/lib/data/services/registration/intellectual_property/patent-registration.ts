// lib/data/services/patent-registration.ts

import { ServiceData } from "@/lib/types";

export const patentRegistrationData: ServiceData = {
  title: "Patent Registration",
  breadcrumb: ["Home", "Intellectual Property", "Patent Registration"],
  overview:
    "A **Patent** is an exclusive right granted for an **invention**, which can be a product or a process that provides a new way of doing something or offers a new technical solution to a problem. 💡 **Patent Registration** gives the owner the legal right to prevent others from making, using, selling, or importing the invention without permission for a limited period, typically **20 years**. It's a powerful tool for protecting innovative technology and securing a competitive advantage.",
  advantages: [
    {
      icon: "Lock",
      title: "Exclusive Monopoly Rights",
      text: "Provides a complete monopoly over the invention, giving you the sole right to use, make, and sell it.",
    },
    {
      icon: "Gem",
      title: "Valuable Intangible Asset",
      text: "A granted patent is a valuable asset that can be sold, licensed, or mortgaged to generate revenue.",
    },
    {
      icon: "TrendingUp",
      title: "Strong Market Position",
      text: "Prevents competitors from copying your invention, thereby securing a strong competitive advantage in the market.",
    },
    {
      icon: "CircleDollarSign",
      title: "Higher Return on Investment",
      text: "Allows you to exclusively commercialize your invention, leading to a higher return on the research and development investment.",
    },
  ],
  disadvantages: [
    {
      icon: "Gavel",
      title: "Complex and Expensive Process",
      text: "The patent registration process is highly technical, lengthy, and involves significant costs for drafting and prosecution.",
    },
    {
      icon: "Eye",
      title: "Full Public Disclosure",
      text: "The invention must be fully disclosed to the public in the patent application, meaning others can study and improve upon it.",
    },
    {
      icon: "CalendarOff",
      title: "Limited Term of Protection",
      text: "Protection is limited to 20 years, after which the invention enters the public domain and can be used by anyone.",
    },
    {
      icon: "ShieldCheck",
      title: "Enforcement is the Owner's Duty",
      text: "The patent office does not enforce your rights; it is the patent holder's responsibility to monitor for and sue infringers.",
    },
  ],
  eligibility: [
    {
      title: "Criteria for Patentability",
      items: [
        "**Novelty**: The invention must be new and must not have been published or used anywhere in the world before the date of filing.",
        "**Inventive Step (Non-Obviousness)**: The invention must not be obvious to a person skilled in the relevant field of technology.",
        "**Industrial Applicability**: The invention must be capable of being made or used in an industry.",
        "**Not Fall Under Non-Patentable Inventions**: The invention must not be excluded under Sections 3 and 4 of the Patents Act, 1970.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Core Application Documents",
      content: {
        title: "Technical and Legal Forms",
        items: [
          "**Patent Application (Form 1)**.",
          "**Complete or Provisional Specification (Form 2)**: A detailed technical document describing the invention and the best method of performing it.",
          "**Drawings/Diagrams**: To illustrate the invention, if applicable.",
          "**Declaration of Inventorship (Form 5)**.",
          "**Power of Attorney (Form 26)**: If filing through a patent agent.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Invention Disclosure & Patentability Search",
      description:
        "The inventor discloses the invention to a patent professional, who then conducts a search to assess its novelty.",
    },
    {
      step: 2,
      title: "Drafting the Patent Application",
      description:
        "A highly technical patent specification is drafted, describing the invention in detail and defining the 'claims' which determine the scope of protection.",
    },
    {
      step: 3,
      title: "Filing the Application",
      description:
        "The application is filed with the Indian Patent Office. A provisional application can be filed first to secure an early filing date.",
    },
    {
      step: 4,
      title: "Publication",
      description:
        "The application is published in the official patent journal after 18 months from the filing date.",
    },
    {
      step: 5,
      title: "Examination",
      description:
        "After a Request for Examination (RFE) is filed, a Patent Examiner reviews the application and issues an Examination Report, often with objections.",
    },
    {
      step: 6,
      title: "Grant of Patent",
      description:
        "After all objections are successfully overcome through written responses and hearings, the patent is granted and published in the journal.",
    },
  ],
  fees: [
    {
      component: "Government Fees",
      fees: "Varies Highly",
      remarks:
        "Fees are complex and vary by applicant type (individual/startup vs. others) and the stage (filing, examination, renewal). Starts from ₹1,600 for individuals.",
    },
    {
      component: "Professional Fees",
      fees: "₹30,000 - ₹1,00,000+",
      remarks:
        "Includes fees for search, drafting the technical specification, and filing, which are significant due to the high level of expertise required.",
    },
  ],
  faqs: [
    {
      q: "What can be patented in India?",
      a: "You can patent a new and useful invention, which can be a process, a machine, an article of manufacture, or a composition of matter. Ideas, scientific principles, and computer programs 'per se' cannot be patented.",
    },
    {
      q: "How long does a patent last in India?",
      a: "A patent is granted for a term of 20 years from the date of filing the patent application, provided the renewal fees are paid annually.",
    },
    {
      q: "What is the difference between a provisional and a complete patent application?",
      a: "A provisional application is filed to secure an early filing date and is less detailed. It gives you 12 months to file a complete specification. A complete application fully describes the invention and must be filed to get the patent granted.",
    },
  ],
};
