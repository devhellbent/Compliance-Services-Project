// lib/data/services/copyright-registration.ts

import { ServiceData } from "@/lib/types";

export const copyrightRegistrationData: ServiceData = {
  title: "Copyright Registration",
  breadcrumb: ["Home", "Intellectual Property", "Copyright Registration"],
  overview:
    "**Copyright** is a legal right that protects **original works of authorship**. 📚 This includes literary works (books, articles, code), artistic works (paintings, photos), music, sound recordings, and films. While copyright protection is automatic as soon as a work is created, **registering your copyright** with the government provides a public record of your ownership and grants you strong legal advantages in case of infringement.",
  advantages: [
    {
      icon: "FileText",
      title: "Public Record of Ownership",
      text: "The registration serves as a public notice of your ownership, deterring potential infringers.",
    },
    {
      icon: "Gavel",
      title: "Ability to Sue for Infringement",
      text: "You must have a registered copyright before you can file a lawsuit in a court of law for copyright infringement.",
    },
    {
      icon: "ShieldCheck",
      title: "Prima Facie Evidence",
      text: "The copyright certificate is considered prima facie evidence of your ownership and the validity of the copyright in a court dispute.",
    },
    {
      icon: "Gem",
      title: "Creates a Transferable Asset",
      text: "A registered copyright is an intangible asset that can be sold, transferred, or licensed to others, allowing you to monetize your creative work.",
    },
  ],
  disadvantages: [
    {
      icon: "LightbulbOff",
      title: "Does Not Protect Ideas",
      text: "Copyright protects the 'expression' of an idea (e.g., the text of a book), not the idea or concept itself.",
    },
    {
      icon: "Clock",
      title: "Lengthy Process",
      text: "The registration process can be slow, often taking several months to a year to get the final certificate.",
    },
    {
      icon: "Eye",
      title: "Owner's Responsibility to Enforce",
      text: "The Copyright Office does not enforce your rights; it is the owner's responsibility to monitor for and take action against infringement.",
    },
  ],
  eligibility: [
    {
      title: "Who Can Apply?",
      items: [
        "The **author or creator** of the original work.",
        "The **heir** of the original author.",
        "An **assignee** who has been granted ownership by the author.",
        "An authorized agent acting on behalf of the copyright owner.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Core Requirements",
      content: {
        title: "Work and Applicant Details",
        items: [
          "Two copies of the work to be registered (e.g., manuscript, images, source code on a CD).",
          "ID proof of the applicant (Aadhaar, Passport, etc.).",
          "PAN Card of the applicant.",
          "Power of Attorney (if filing through an agent).",
        ],
      },
    },
    {
      tabTitle: "Specific Cases",
      content: {
        title: "Additional Documents",
        items: [
          "**No-Objection Certificate (NOC)**: Required if the work was created for an employer or if it includes content from another person (e.g., a photograph in a book).",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "File the Application (Form XIV)",
      description:
        "Prepare and file the application in Form XIV with the Copyright Office, either online or offline, along with the required documents and fee.",
    },
    {
      step: 2,
      title: "Diary Number Issued",
      description:
        "Once the application is submitted, a unique Diary Number is issued for tracking purposes.",
    },
    {
      step: 3,
      title: "30-Day Waiting Period",
      description:
        "A mandatory 30-day waiting period begins, during which anyone can file an objection to your copyright claim.",
    },
    {
      step: 4,
      title: "Examination by Registry",
      description:
        "If no objections are received, a Copyright Examiner will review the application for any discrepancies.",
    },
    {
      step: 5,
      title: "Receive Registration Certificate",
      description:
        "If the examiner finds no issues, the application is approved, and a Registration Certificate is issued. If discrepancies are found, they must be resolved.",
    },
  ],
  fees: [
    {
      component: "Government Fee",
      fees: "₹500 - ₹5,000",
      remarks:
        "The fee varies based on the type of work (e.g., ₹500 for literary/artistic work, ₹2,000 for cinematograph film, ₹5,000 for sound recording).",
    },
    {
      component: "Professional Fees",
      fees: "₹4,000 - ₹8,000",
      remarks:
        "For professional assistance with preparing the application and managing the process.",
    },
  ],
  faqs: [
    {
      q: "Do I have to register my work to have a copyright?",
      a: "No. Copyright protection is automatic in India from the moment a work is created and fixed in a tangible form. However, registration provides strong legal proof of ownership, which is crucial in a court of law.",
    },
    {
      q: "How long does a copyright last?",
      a: "For literary, dramatic, musical, and artistic works, the copyright lasts for the lifetime of the author plus 60 years. For sound recordings and films, it lasts for 60 years from the year of publication.",
    },
    {
      q: "What is the difference between a copyright and a trademark?",
      a: "Copyright protects original creative works (like books, music, art). A Trademark protects brand identifiers (like logos, brand names, and slogans) that distinguish goods or services in the marketplace.",
    },
  ],
};
