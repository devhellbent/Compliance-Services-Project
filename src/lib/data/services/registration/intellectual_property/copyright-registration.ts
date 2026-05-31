// lib/data/services/copyright-registration.ts

import { ServiceData } from "@/lib/types";

export const copyrightRegistrationData: ServiceData = {
  title: "Copyright Registration",
  breadcrumb: ["Home", "Intellectual Property", "Copyright Registration"],
  overview: `Copyright registration is the formal process of recording a claim of copyright ownership with a national government office, such as the U.S. Copyright Office. While **copyright protection is automatic** the moment an original work of authorship is fixed in a tangible form (like writing a book or recording a song), registration is an **optional yet highly recommended legal formality**. This process creates a public record of the work\'s existence and the creator\'s asserted ownership.

The primary purpose of registering a copyright is to **strengthen the creator\'s legal position** in the event of infringement. The registration certificate serves as **prima facie evidence** of the validity of the copyright in a court of law. This can significantly simplify and expedite the process of taking legal action against unauthorized use or piracy of the work.

Moreover, registration provides access to significant legal advantages that are unavailable for unregistered works. For instance, in many jurisdictions, registration is a prerequisite for **filing an infringement lawsuit** and allows the copyright holder to seek **statutory damages** (fixed monetary awards) and **attorney\'s fees** in a successful court case. These remedies make enforcing one\'s exclusive rights, such as reproduction and distribution, financially viable and provide a stronger deterrent against potential infringers.`,
  advantages: [
    {
      icon: "ShieldCheck",
      title: "Legal Proof of Ownership",
      text: "The registration certificate serves as prima facie evidence in court, establishing you as the rightful owner of the creative work.",
    },
    {
      icon: "Gavel",
      title: "Infringement Lawsuits",
      text: "Registration is a mandatory prerequisite in many jurisdictions for filing a lawsuit against unauthorized use of your work.",
    },
    {
      icon: "Banknote",
      title: "Statutory Damages",
      text: "Allows creators to seek statutory damages and attorney's fees, which are often much higher than actual financial loss from infringement.",
    },
    {
      icon: "Eye",
      title: "Public Record",
      text: "Creates a permanent public record of the work's existence and your ownership claim, acting as a strong deterrent to piracy.",
    },
    {
      icon: "Globe",
      title: "International Protection",
      text: "Facilitates enforcement of rights in other countries through international treaties like the Berne Convention.",
    },
  ],
  disadvantages: [
    {
      icon: "Clock",
      title: "Registration Time",
      text: "The process can be slow, often taking several months for the copyright office to issue the final certificate.",
    },
    {
      icon: "FileSearch",
      title: "Public Disclosure",
      text: "Details of the author and a copy of the work become part of the public record, which may not be desirable for private works.",
    },
    {
      icon: "Banknote",
      title: "Filing Fees",
      text: "Requires payment of non-refundable government fees for each application, which can add up for multiple works.",
    },
    {
      icon: "RefreshCw",
      title: "Maintenance Burden",
      text: "Significant modifications to a registered work may require new applications to ensure continued protection.",
    },
    {
      icon: "AlertTriangle",
      title: "Application Errors",
      text: "Errors in the application form can lead to delays or potentially weaken the enforceability of the copyright.",
    },
  ],
  eligibility: [
    "The eligible criteria for copyright protection and registration fundamentally center on two key elements of the work itself, plus the category of the work."
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
