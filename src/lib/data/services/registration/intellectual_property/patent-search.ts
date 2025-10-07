// lib/data/services/patent-search.ts

import { ServiceData } from "@/lib/types";

export const patentSearchData: ServiceData = {
  title: "Patent Search",
  breadcrumb: ["Home", "Intellectual Property", "Patent Search"],
  overview:
    "A **Patent Search**, also known as a **Prior Art Search**, is a systematic search of existing patents and other publicly available documents (like scientific papers) to determine if an invention is new (**novel**) and non-obvious. 🔍 It is a **critical first step** before investing significant time and money in drafting and filing a patent application. The search helps in assessing the patentability of an invention and in drafting a strong application.",
  advantages: [
    {
      icon: "SearchCheck",
      title: "Assess Patentability",
      text: "Helps you determine if your invention meets the novelty and non-obviousness criteria required for a patent grant.",
    },
    {
      icon: "ShieldAlert",
      title: "Avoid Infringement",
      text: "Identifies existing patents that your invention might infringe upon, helping you avoid potential legal issues in the future.",
    },
    {
      icon: "FileText",
      title: "Strengthen Your Application",
      text: "Understanding the existing 'prior art' allows you to draft your patent claims more effectively, clearly highlighting the novelty of your invention.",
    },
    {
      icon: "Lightbulb",
      title: "Understand the Competition",
      text: "Provides valuable insights into the state of technology in your field and what your competitors are working on.",
    },
  ],
  disadvantages: [
    {
      icon: "HelpCircle",
      title: "Never 100% Conclusive",
      text: "A search cannot guarantee that no prior art exists, as some patent applications may not have been published yet.",
    },
    {
      icon: "Gavel",
      title: "Requires Technical Expertise",
      text: "Conducting a thorough search and correctly interpreting the results requires a high degree of technical and legal expertise.",
    },
    {
      icon: "Clock",
      title: "Can Be Time-Consuming",
      text: "A comprehensive global search across multiple databases can be a time-intensive process.",
    },
  ],
  eligibility: [
    {
      title: "Who Should Conduct a Patent Search?",
      items: [
        "**Inventors**: Before they invest heavily in developing an idea.",
        "**Startups & Companies**: Before filing a patent application to save on legal costs if the idea is not novel.",
        "**R&D Teams**: To understand the existing technology landscape and avoid reinventing the wheel.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Information Required for Search",
      content: {
        title: "Invention Disclosure",
        items: [
          "**Detailed Description**: A comprehensive explanation of the invention, its components, how it works, and the problem it solves.",
          "**Drawings/Diagrams**: Sketches or diagrams that illustrate the invention.",
          "**Keywords & Field of Invention**: Important keywords and the technical field related to the invention.",
          "**Known Prior Art**: Any known similar products or patents that the inventor is aware of.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Understanding the Invention",
      description:
        "The process begins with the inventor providing a detailed disclosure of the invention to a patent professional.",
    },
    {
      step: 2,
      title: "Developing a Search Strategy",
      description:
        "The professional identifies key features of the invention and develops a strategy using relevant keywords and patent classifications (like IPC/CPC).",
    },
    {
      step: 3,
      title: "Searching Patent Databases",
      description:
        "A thorough search is conducted across various patent databases, such as the Indian Patent Office, USPTO (USA), WIPO (Global), and EPO (Europe).",
    },
    {
      step: 4,
      title: "Searching Non-Patent Literature",
      description:
        "The search is often expanded to include scientific journals, academic papers, and other public documents.",
    },
    {
      step: 5,
      title: "Analysis and Reporting",
      description:
        "The search results are analyzed, and a detailed **Patent Search Report** is prepared, highlighting the closest prior art and providing an opinion on the invention's patentability.",
    },
  ],
  fees: [
    {
      component: "Professional Fees for Search",
      fees: "₹10,000 - ₹30,000+",
      remarks:
        "The cost varies based on the complexity of the invention and the scope of the search (e.g., India-only vs. global search).",
    },
  ],
  faqs: [
    {
      q: "Can I do a patent search myself?",
      a: "Yes, you can perform a basic search on free databases like Google Patents. However, a professional search is highly recommended as experts use advanced search strategies and have access to specialized databases, which is crucial for making an informed decision.",
    },
    {
      q: "What is 'prior art'?",
      a: "'Prior art' is any evidence that your invention is already known. It includes any patent, publication, or public disclosure that exists before the filing date of your patent application. It is what your invention's novelty is judged against.",
    },
    {
      q: "Does a positive patent search report guarantee that I will get a patent?",
      a: "No. A patent search report provides a strong indication of your chances but is not a guarantee. The final decision rests with the Patent Examiner, who will conduct their own search and examination.",
    },
  ],
};
