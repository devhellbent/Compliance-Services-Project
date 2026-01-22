// lib/data/services/patent-registration.ts

import { ServiceData } from "@/lib/types";

export const patentRegistrationData: ServiceData = {
  title: "Patent Registration",
  breadcrumb: ["Home", "Intellectual Property", "Patent Registration"],
  overview: `Patent registration is the formal legal process of applying to a government patent office to secure exclusive **monopoly rights** over an invention. This invention can be a new process or product. To qualify, the creation must meet strict criteria: it must be **novel** (new), involve an **inventive step** (non-obvious), and have **industrial applicability** (be useful).The core purpose is to grant the inventor **exclusive rights** for a limited period, typically **20 years**. This prevents unauthorized parties from making, using, selling, or importing the invention without the patent holder\'s permission, effectively safeguarding the innovator\'s investment in research and development.

In return for this powerful protection, the inventor is required to fully disclose the technical details of the invention to the public. The lengthy registration procedure, involving thorough examination and review, balances the private reward for innovation with the public\'s benefit of accessing new technical knowledge.`,
  advantages: [
    {
        icon: "CheckCircle",
        title: "of Patent Registration",
        text: "A registered patent grants the owner a powerful set of legal rights and commercial benefits:",
        subPoints: [
            "**Exclusive Rights and Monopoly:** The most crucial advantage is the exclusive legal right to prevent others from making, using, offering to sell, selling, or importing the invention for a limited period (typically **20 years** for utility patents). This creates a temporary market monopoly.",
            "**Competitive Advantage and Market Position:** A patent differentiates your product or process from competitors, establishing a unique market presence and positioning your business as an innovative leader in the field.",
            "**Revenue Generation through Licensing and Sale:** A patent is a valuable intellectual property asset that can be sold outright for a lump sum or licensed to other companies in exchange for recurring **royalty payments**, providing an additional revenue stream without requiring the owner to manufacture or market the product themselves.",
            "**Attracting Investment and Funding:** Patents demonstrate the viability, novelty, and commercial potential of an invention, making the business more attractive to venture capitalists and investors who view the patent as a tangible, defensible asset. It can also serve as **collateral for loans**.",
            "**Legal Protection Against Infringement:** If a competitor copies the invention, the patent owner has the legal standing to sue for infringement, potentially leading to an injunction (stopping the infringement) and the award of **monetary damages**.",
            "**Public Disclosure and Deterrence:** Filing a patent application, even if provisional, secures a priority date. The public disclosure of the invention\\'s details encourages further innovation by others who can \\\"invent around\\\" the patent, while the patent itself acts as a **deterrent** against direct copying."
        ]
    }
  ],
  disadvantages: [
    {
        icon: "CheckCircle",
        title: "of Patent Registration",
        text: "Despite the benefits, the process and nature of patent protection also present several drawbacks:",
        subPoints: [
            "**High Cost and Financial Burden:** Obtaining a patent involves a significant financial investment, including application fees, legal fees for drafting the patent by an attorney, examination fees, and ongoing **periodic maintenance/renewal fees** to keep the patent in force.",
            "**Lengthy and Time-Consuming Process:** The patent application and examination process is often complex and can take several years (sometimes 2 to 5 years or more) before a patent is officially granted. This lag can be critical in fast-paced industries where the technology may become **obsolete** before the patent is issued.",
            "**Public Disclosure Requirement:** To be granted a patent, the inventor must publicly disclose the technical details of the invention. Once published, this information is available for competitors to study, potentially making it easier for them to **design around** the patent\\'s claims.",
            "**Limited Duration and Expiration:** Patent protection is only for a limited term (e.g., 20 years from filing). Once the patent expires, the invention enters the **public domain**, and anyone is free to use, copy, and commercialize it without permission.",
            "**Territorial Limitations:** A patent granted in one country only provides protection within that country\\'s borders. Securing international protection requires filing **separate applications** in each country or region of interest, significantly increasing cost and complexity.",
            "**Burden of Enforcement:** A patent is not self-enforcing. The owner is solely responsible for monitoring for infringement and initiating legal action to defend their rights. Patent litigation is typically **extremely expensive and time-consuming**, posing a significant challenge for smaller businesses or individual inventors."
        ]
    }
  ],
  eligibility: [
    "The eligibility criteria for patent registration are generally consistent across major jurisdictions worldwide, and they form the foundation of patent law. An invention must satisfy three primary, objective tests, and it must also fall into a category of patentable subject matter."
],
  documents: [
    {
        tabTitle: "Proof of Right to File",
        content: {
            title: "Proof of Right to File",
            items: [
                "**Assignment Deed:** A legal document that transfers the invention rights from the inventor(s) to the applicant (e.g., a company).",
                "**Employment Contract:** The relevant clause in an employment agreement showing the invention was created in the course of duty, and the company is the rightful owner (applicant)."
            ]
        }
    },
    {
        tabTitle: "Priority Documents (For International Filings)",
        content: {
            title: "Priority Documents (For International Filings)",
            items: [
                "**Certified Copy of the Earlier Application:** A copy of the patent application as originally filed in the first country, certified by that country\\'s patent office.",
                "**English Translation:** If the priority document is not in English, a verified English translation is required."
            ]
        }
    },
    {
        tabTitle: "Entity Status Proof (For Fee Concessions)",
        content: {
            title: "Entity Status Proof (For Fee Concessions)",
            items: [
                "**Startup Certificate:** Recognition certificate issued by the relevant government body (e.g., DIPP/DPIIT in India) to qualify for \\\"Startup\\\" fee rates.",
                "**MSME/Small Entity Certificate:** Proof of registration as a Micro, Small, or Medium Enterprise (MSME) or Small Entity."
            ]
        }
    },
    {
        tabTitle: "Inventor/Applicant Identity and Address Proofs",
        content: {
            title: "Inventor/Applicant Identity and Address Proofs",
            items: [
                "**Address Proof of Applicant/Inventor:** (e.g., A copy of Passport, Driving License, or Utility Bill).",
                "**Nationality Proof:** (e.g., Passport or Voter ID).",
                "**Board Resolution:** If the applicant is a legal entity (company or firm), a copy of the resolution passed by the Board of Directors/Partners authorizing the filing of the patent application."
            ]
        }
    },
    {
        tabTitle: "Specialized Technical Documents",
        content: {
            title: "Specialized Technical Documents",
            items: [
                "**Sequence Listing:** For inventions involving biological sequences (DNA, RNA, amino acids/proteins), a separate electronic copy of the sequence listing in a specific format (e.g., ST.25 or ST.26) is mandatory.",
                "**Permission from National Biodiversity Authority (NBA):** In countries like India, if the invention involves biological material sourced from India, a formal permission or declaration regarding the biological source must be filed before the patent is granted."
            ]
        }
    },
    {
      tabTitle: "Priority Documents (For International Filings)",
      content: {
        title: "Priority Documents (For International Filings)",
        items: [
          "**Certified Copy of the Earlier Application:** A copy of the patent application as originally filed in the first country, certified by that country's patent office.",
          "**English Translation:** If the priority document is not in English, a verified English translation is required.",
        ],
      },
    },
    {
      tabTitle: "Entity Status Proof (For Fee Concessions)",
      content: {
        title: "Entity Status Proof (For Fee Concessions)",
        items: [
          '**Startup Certificate:** Recognition certificate issued by the relevant government body (e.g., DIPP/DPIIT in India) to qualify for \\"Startup\\" fee rates.',
          "**MSME/Small Entity Certificate:** Proof of registration as a Micro, Small, or Medium Enterprise (MSME) or Small Entity.",
        ],
      },
    },
    {
      tabTitle: "Inventor/Applicant Identity and Address Proofs",
      content: {
        title: "Inventor/Applicant Identity and Address Proofs",
        items: [
          "**Address Proof of Applicant/Inventor:** (e.g., A copy of Passport, Driving License, or Utility Bill).",
          "**Nationality Proof:** (e.g., Passport or Voter ID).",
          "**Board Resolution:** If the applicant is a legal entity (company or firm), a copy of the resolution passed by the Board of Directors/Partners authorizing the filing of the patent application.",
        ],
      },
    },
    {
      tabTitle: "Specialized Technical Documents",
      content: {
        title: "Specialized Technical Documents",
        items: [
          "**Sequence Listing:** For inventions involving biological sequences (DNA, RNA, amino acids/proteins), a separate electronic copy of the sequence listing in a specific format (e.g., ST.25 or ST.26) is mandatory.",
          "**Permission from National Biodiversity Authority (NBA):** In countries like India, if the invention involves biological material sourced from India, a formal permission or declaration regarding the biological source must be filed before the patent is granted.",
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
