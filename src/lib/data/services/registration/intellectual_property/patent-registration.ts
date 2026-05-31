// lib/data/services/patent-registration.ts

import { ServiceData } from "@/lib/types";

export const patentRegistrationData: ServiceData = {
  title: "Patent Registration",
  breadcrumb: ["Home", "Intellectual Property", "Patent Registration"],
  overview: `Patent registration is the formal legal process of applying to a government patent office to secure exclusive **monopoly rights** over an invention. This invention can be a new process or product. To qualify, the creation must meet strict criteria: it must be **novel** (new), involve an **inventive step** (non-obvious), and have **industrial applicability** (be useful).The core purpose is to grant the inventor **exclusive rights** for a limited period, typically **20 years**. This prevents unauthorized parties from making, using, selling, or importing the invention without the patent holder\'s permission, effectively safeguarding the innovator\'s investment in research and development.

In return for this powerful protection, the inventor is required to fully disclose the technical details of the invention to the public. The lengthy registration procedure, involving thorough examination and review, balances the private reward for innovation with the public\'s benefit of accessing new technical knowledge.`,
  advantages: [
    {
      icon: "ShieldCheck",
      title: "Market Monopoly",
      text: "Grants exclusive legal rights to prevent others from making, using, or selling your invention for typically 20 years.",
    },
    {
      icon: "TrendingUp",
      title: "Competitive Edge",
      text: "Establishes your business as an innovative leader and creates a unique market position that competitors cannot easily copy.",
    },
    {
      icon: "Banknote",
      title: "Revenue Generation",
      text: "Provides opportunities to generate income through licensing deals, royalty payments, or the outright sale of the patent.",
    },
    {
      icon: "Landmark",
      title: "Attracts Investment",
      text: "Patents are tangible assets that increase company valuation and build trust with venture capitalists and investors.",
    },
    {
      icon: "Gavel",
      title: "Legal Protection",
      text: "Provides strong legal standing to sue for infringement, allowing the owner to seek injunctions and monetary damages.",
    },
  ],
  disadvantages: [
    {
      icon: "Banknote",
      title: "High Costs",
      text: "Involves significant expenses for application, drafting, examination, and recurring maintenance fees over the 20-year term.",
    },
    {
      icon: "Clock",
      title: "Lengthy Process",
      text: "The grant process is complex and time-consuming, often taking 2 to 5 years, which may exceed the technology's life cycle.",
    },
    {
      icon: "Eye",
      title: "Public Disclosure",
      text: "Requires full technical disclosure, allowing competitors to study your invention and potentially 'design around' it.",
    },
    {
      icon: "Globe",
      title: "Territorial Limits",
      text: "Protection is only valid in the country where the patent is granted; international protection requires separate filings.",
    },
    {
      icon: "Gavel",
      title: "Enforcement Burden",
      text: "The patent holder is solely responsible for monitoring infringement and funding expensive litigation to defend their rights.",
    },
  ],
  eligibility: [
    "The eligibility criteria for patent registration are generally consistent across major jurisdictions worldwide, and they form the foundation of patent law. An invention must satisfy three primary, objective tests, and it must also fall into a category of patentable subject matter."
],
  documents: [
    {
      tabTitle: "Identity Proofs",
      content: {
        title: "Applicant & Inventor Details",
        items: [
          "Address proof of applicant and inventor (Passport, DL, or Utility bill).",
          "Nationality proof (Passport or Voter ID).",
          "PAN Card of the applicant and inventor.",
          "Board Resolution (if applicant is a company) authorizing the filing.",
        ],
      },
    },
    {
      tabTitle: "Invention Rights",
      content: {
        title: "Proof of Right to File",
        items: [
          "Assignment Deed (if rights are transferred from inventor to applicant).",
          "Employment contract showing invention was created during course of duty.",
          "Power of Attorney (if filing through a patent agent).",
        ],
      },
    },
    {
      tabTitle: "International Documents",
      content: {
        title: "For Priority/PCT Filings",
        items: [
          "Certified copy of the earlier application from the home country's patent office.",
          "Verified English translation of the priority document if not in English.",
        ],
      },
    },
    {
      tabTitle: "Entity Status",
      content: {
        title: "For Fee Concessions",
        items: [
          "Startup Certificate (DPIIT recognition) to qualify for 80% fee rebate.",
          "MSME/Small Entity Certificate for reduced government fees.",
        ],
      },
    },
    {
      tabTitle: "Specialized Docs",
      content: {
        title: "Technical Requirements",
        items: [
          "Sequence Listing (for biological/DNA/RNA inventions) in electronic format.",
          "NBA Permission if invention involves biological material sourced from India.",
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
