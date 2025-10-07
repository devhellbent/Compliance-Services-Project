// lib/data/services/trademark-registration.ts

import { ServiceData } from "@/lib/types";

export const trademarkRegistrationData: ServiceData = {
  title: "Trademark Registration",
  breadcrumb: ["Home", "Registrations", "Trademark Registration"],
  overview:
    "A **Trademark (™️ or ®️)** is a unique symbol, sign, logo, phrase, or name used to identify and distinguish the goods or services of one company from those of others. **Trademark Registration** provides you with the exclusive legal right to use your brand name or logo, protecting it from being used by competitors. It is a valuable intangible asset that builds brand identity and goodwill.",
  advantages: [
    {
      icon: "ShieldCheck",
      title: "Exclusive Right to Use",
      text: "Gives you the exclusive right to use the mark for the goods and services you've registered, preventing others from using a similar mark.",
    },
    {
      icon: "Award",
      title: "Builds Brand Identity & Goodwill",
      text: "A registered trademark is a symbol of your brand's quality and reputation, helping you build customer trust and goodwill.",
    },
    {
      icon: "Gavel",
      title: "Legal Protection",
      text: "Provides a legal remedy against infringement. You can sue anyone who uses your trademark without your permission.",
    },
    {
      icon: "Gem",
      title: "Creates an Intangible Asset",
      text: "A registered trademark is an intellectual property asset that can be sold, licensed, or franchised, adding value to your business.",
    },
  ],
  disadvantages: [
    {
      icon: "Clock",
      title: "Long and Complex Process",
      text: "The registration process can be lengthy, often taking anywhere from 6 to 18 months to complete.",
    },
    {
      icon: "ListTree",
      title: "Class-Specific Protection",
      text: "Protection is limited to the specific classes of goods or services under which you have registered the trademark.",
    },
    {
      icon: "CalendarClock",
      title: "Requires Periodic Renewal",
      text: "A trademark is valid for 10 years and must be renewed periodically to keep it active.",
    },
  ],
  eligibility: [
    {
      title: "Who Can Apply?",
      items: [
        "**Individuals**: Any person can apply for a trademark for a brand they have created.",
        "**Business Entities**: Proprietorships, Partnerships, LLPs, and Companies can apply for a trademark.",
        "**Joint Applicants**: Two or more persons can apply for a trademark together.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Core Requirements",
      content: {
        title: "Trademark & Applicant Details",
        items: [
          "A copy of the trademark or logo in JPEG format.",
          "ID and Address proof of the applicant (e.g., Aadhaar Card, Passport).",
          "PAN Card of the individual or the business entity.",
          "Power of Attorney (Form TM-48) authorizing an attorney/agent to file on your behalf.",
        ],
      },
    },
    {
      tabTitle: "For Entities",
      content: {
        title: "Additional Documents",
        items: [
          "Certificate of Incorporation (for companies/LLPs).",
          "MSME/Udyam Registration Certificate (to avail 50% rebate on government fees).",
          "Proof of the first use of the mark (e.g., invoices, advertisements), if applicable.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Trademark Search",
      description:
        "Conduct a thorough search in the trademark database to ensure your proposed brand name or logo is unique and not already registered.",
    },
    {
      step: 2,
      title: "Filing the Application (TM-A)",
      description:
        "File the application in Form TM-A with the Trademark Registry. Once filed, you can start using the ™ symbol.",
    },
    {
      step: 3,
      title: "Examination by Registry",
      description:
        "The Trademark Examiner will review your application for correctness and uniqueness. They may raise an objection if issues are found.",
    },
    {
      step: 4,
      title: "Publication in Trademark Journal",
      description:
        "If there are no objections, the mark is published in the Trademark Journal for a period of 4 months, inviting public opposition.",
    },
    {
      step: 5,
      title: "Registration",
      description:
        "If no opposition is filed within the 4-month period, the trademark is registered, and a Registration Certificate is issued. You can then use the ® symbol.",
    },
  ],
  fees: [
    {
      component: "Government Fee (Individual/Startup)",
      fees: "₹4,500",
      remarks:
        "For individuals, sole proprietors, or MSME/DPIIT recognized startups.",
    },
    {
      component: "Government Fee (Other Entities)",
      fees: "₹9,000",
      remarks:
        "For all other entities like companies, LLPs, etc., that are not MSMEs.",
    },
    {
      component: "Professional Fees",
      fees: "₹3,000 - ₹7,000",
      remarks: "Includes search, application filing, and managing the process.",
    },
  ],
  faqs: [
    {
      q: "What is the difference between the ™ and ® symbols?",
      a: "The ™ (Trademark) symbol can be used with any brand name or logo to claim it as a trademark, even if the application is not filed. The ® (Registered) symbol can only be used after the trademark has been officially registered by the Trademark Registry.",
    },
    {
      q: "What is a trademark class?",
      a: "The trademark system is divided into 45 classes (1-34 for goods, 35-45 for services). You must file your trademark application under the specific class(es) that correspond to your business activities.",
    },
    {
      q: "How long does a trademark registration last?",
      a: "A trademark registration is valid for 10 years from the date of application. It can be renewed indefinitely for subsequent periods of 10 years.",
    },
  ],
};
