// lib/data/services/logo-designing.ts

import { ServiceData } from "@/lib/types";

export const logoDesigningData: ServiceData = {
  title: "Logo Designing",
  breadcrumb: ["Home", "Intellectual Property", "Logo Designing"],
  overview:
    "**Logo Designing** is the creative process of developing a unique visual symbol or mark that represents a business, brand, or product. 🎨 A well-designed logo is a crucial element of brand identity and is often the first point of visual contact with customers. It should be memorable, versatile, and effectively communicate the essence of the brand.",
  advantages: [
    {
      icon: "Sparkles",
      title: "Creates a Strong First Impression",
      text: "A professional logo grabs attention and communicates ownership and quality from the very first glance.",
    },
    {
      icon: "Award",
      title: "Provides Brand Identity",
      text: "It is the cornerstone of your brand's visual identity, making your business instantly recognizable.",
    },
    {
      icon: "Briefcase",
      title: "Projects a Professional Image",
      text: "A well-designed logo shows that you are serious about your business and builds trust with customers.",
    },
    {
      icon: "Users",
      title: "Fosters Brand Loyalty",
      text: "As your brand grows, your logo becomes a familiar symbol that customers associate with positive experiences, fostering loyalty.",
    },
  ],
  disadvantages: [
    {
      icon: "ThumbsDown",
      title: "Risk of a Poor Design",
      text: "A poorly designed, generic, or unprofessional logo can negatively impact your brand's perception.",
    },
    {
      icon: "PenTool",
      title: "Subjective and Iterative",
      text: "The design process can be subjective and may require multiple revisions to get it right.",
    },
    {
      icon: "FileWarning",
      title: "Risk of Infringement",
      text: "Without proper research, you might inadvertently create a logo that is too similar to an existing trademark, leading to legal issues.",
    },
  ],
  eligibility: [
    {
      title: "Who Needs a Professional Logo?",
      items: [
        "Any new business or startup looking to establish a brand identity.",
        "Existing businesses looking to rebrand or refresh their image.",
        "Any organization, product, or service that needs a unique visual mark to stand out in the market.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Final Deliverables",
      content: {
        title: "What You Typically Receive",
        items: [
          "**Vector Files (AI, EPS, SVG)**: Scalable files that can be resized to any dimension without losing quality, used for printing.",
          "**Raster Files (JPG, PNG)**: Pixel-based files used for web and digital applications (PNGs have transparent backgrounds).",
          "**Color Variations**: Full color, black and white, and inverted versions of the logo.",
          "**Brand Style Guide**: A document outlining the logo's fonts, color codes, and usage rules.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Discovery & Design Brief",
      description:
        "Understanding the client's business, target audience, values, and preferences through a detailed questionnaire or meeting.",
    },
    {
      step: 2,
      title: "Research & Brainstorming",
      description:
        "Researching the industry, competitors, and design trends. Brainstorming initial concepts and ideas.",
    },
    {
      step: 3,
      title: "Sketching & Concept Development",
      description:
        "Creating initial sketches and developing the most promising ideas into digital drafts.",
    },
    {
      step: 4,
      title: "Presentation of Concepts",
      description:
        "Presenting a set of unique logo concepts to the client for their review and feedback.",
    },
    {
      step: 5,
      title: "Revisions & Refinement",
      description:
        "Incorporating client feedback and making revisions to the chosen concept until it is perfected.",
    },
    {
      step: 6,
      title: "Finalization & Delivery",
      description:
        "Once the final design is approved, preparing and delivering all the necessary logo files and brand guidelines.",
    },
  ],
  fees: [
    {
      component: "Freelance Designer",
      fees: "₹5,000 - ₹25,000",
      remarks: "Varies based on the designer's experience and portfolio.",
    },
    {
      component: "Design Agency",
      fees: "₹30,000 - ₹1,00,000+",
      remarks:
        "Typically involves a more comprehensive process with a team of designers.",
    },
  ],
  faqs: [
    {
      q: "What makes a good logo?",
      a: "A good logo is simple, memorable, timeless, versatile (works in different sizes and colors), and appropriate for its intended audience.",
    },
    {
      q: "What is the difference between a vector and a raster logo file?",
      a: "A vector file (like AI or SVG) is made of mathematical paths and can be scaled infinitely without losing quality, making it ideal for printing. A raster file (like JPG or PNG) is made of pixels and will become blurry if enlarged too much, making it suitable for web use.",
    },
    {
      q: "Does designing a logo automatically give me ownership and trademark rights?",
      a: "When you hire a designer, the contract should specify that the final copyright ownership is transferred to you. However, to get exclusive legal rights and protection against copying, you must register your logo as a trademark with the government.",
    },
  ],
};
