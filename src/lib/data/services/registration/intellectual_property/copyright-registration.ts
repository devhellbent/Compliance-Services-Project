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
        icon: "CheckCircle",
        title: "of Copyright Registration",
        text: "Copyright registration provides several significant legal and commercial benefits:",
        subPoints: [
            "**Prerequisite for Infringement Lawsuits:** In many jurisdictions (like the U.S.), registration (or a refusal of registration) is a mandatory step before you can file a copyright infringement lawsuit in court.",
            "**Evidence of Validity (Prima Facie Evidence):** If you register your work within a specific timeframe (often within five years of publication), the registration certificate serves as *prima facie* evidence in court. This means the court presumes the copyright is valid and you are the rightful owner, shifting the burden of proof to the defendant to argue otherwise.",
            "**Eligibility for Statutory Damages and Attorney\\'s Fees:** This is one of the most powerful incentives. If registration is completed before infringement begins (or within a short period after publication), you become eligible to seek **statutory damages** (a fixed monetary award set by law, which avoids the difficult process of proving actual financial loss) and to recover your **attorney\\'s fees** and court costs. Without timely registration, you may be limited to recovering only actual damages and the infringer\\'s profits, which can be nominal or hard to quantify.",
            "**Public Record of Ownership:** Registration creates a public record of your ownership claim, giving official notice to the world that the work is protected. This can act as a deterrent to potential infringers.",
            "**Basis for International Protection:** While copyright exists internationally under treaties like the Berne Convention, registration in your home country can be a necessary formality for enforcing your rights or registering in other specific countries.",
            "**Increased Commercial Value:** A registered copyright can simplify the process of licensing, selling, or using the work as collateral for a loan, as it provides a clear, official record of ownership."
        ]
    }
  ],
  disadvantages: [
    {
        icon: "CheckCircle",
        title: "of Copyright Registration",
        text: "While the advantages often outweigh the drawbacks for commercially valuable works, there are certain disadvantages to consider:",
        subPoints: [
            "**Cost and Time:** The registration process requires paying a government filing fee, and the administrative process can be time-consuming, sometimes taking several months to complete (though expedited processing is often available for an extra fee).",
            "**Public Disclosure:** Registering your work means the information you submit (including details about the author and a copy of the work itself) becomes part of the public record, which is accessible to anyone who searches the copyright database. Creators who wish to keep their work completely private may view this disclosure as a drawback.",
            "**Administrative Burden for Modifications:** If you make substantial changes or create new versions of a registered work, you may need to file additional registrations or amendments to ensure those new elements are also protected, adding to the administrative and financial burden over time.",
            "**Errors and Omissions:** The registration form requires accurate information. If errors or omissions occur, correcting them can be a complicated administrative process, and serious mistakes could potentially impact the enforceability of the copyright."
        ]
    }
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
