// lib/data/services/iso-registration.ts

import { ServiceData } from "@/lib/types";

export const isoRegistrationData: ServiceData = {
  title: "ISO Registration",
  breadcrumb: ["Home", "Registrations", "ISO Registration"],
  overview:
    "**ISO Registration**, more accurately termed **ISO Certification**, is a third-party verification that a company's management system, manufacturing process, or documentation procedure meets the requirements for standardization and quality assurance. 🏅 Issued by accredited certification bodies (not by ISO itself), it signifies a company's commitment to quality. The most common standard is **ISO 9001:2015**, which focuses on a Quality Management System (QMS).",
  advantages: [
    {
      icon: "TrendingUp",
      title: "Enhanced Credibility & Brand Image",
      text: "ISO certification is a globally recognized mark of quality and trust, significantly boosting your brand's reputation.",
    },
    {
      icon: "Smile",
      title: "Improved Customer Satisfaction",
      text: "By implementing a quality management system, you ensure consistent product/service quality, leading to happier customers.",
    },
    {
      icon: "Settings",
      title: "Increased Operational Efficiency",
      text: "Standardizing processes helps identify and eliminate inefficiencies, reducing costs and improving productivity.",
    },
    {
      icon: "Globe",
      title: "Access to New Markets",
      text: "Many domestic and international tenders, as well as large corporate clients, require ISO certification as a prerequisite to do business.",
    },
  ],
  disadvantages: [
    {
      icon: "CircleDollarSign",
      title: "High Cost of Implementation",
      text: "The process of developing systems, training staff, and undergoing audits can be expensive, especially for small businesses.",
    },
    {
      icon: "Clock",
      title: "Time and Resource Intensive",
      text: "Achieving and maintaining ISO certification requires a significant commitment of time and manpower for documentation and process management.",
    },
    {
      icon: "FileSearch",
      title: "Regular Surveillance Audits",
      text: "To maintain the certification, the company must undergo periodic surveillance audits, which involve recurring costs and effort.",
    },
  ],
  eligibility: [
    {
      title: "Who Can Apply?",
      items: [
        "Any organization, regardless of its size, industry, or whether it's public or private, can apply for ISO certification.",
        "This includes manufacturing companies, service providers, software firms, hospitals, and educational institutions.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Business Documents",
      content: {
        title: "Legal & Business Identity",
        items: [
          "Copy of the company's PAN Card.",
          "Certificate of Incorporation and MOA/AOA.",
          "Address proof of the business (e.g., Utility Bill, Rent Agreement).",
          "A brief profile of the company and its activities.",
        ],
      },
    },
    {
      tabTitle: "System Documents",
      content: {
        title: "Quality Management System (QMS) Documents",
        items: [
          "The company's **Quality Manual**.",
          "**Standard Operating Procedures (SOPs)** for key processes.",
          "Records of internal audits and management reviews.",
          "Organizational chart and details of roles and responsibilities.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Choose an ISO Standard",
      description:
        "Select the appropriate ISO standard for your business (e.g., ISO 9001 for quality, ISO 14001 for environmental management).",
    },
    {
      step: 2,
      title: "Implement the System",
      description:
        "Develop and implement the required policies, procedures, and documentation (like a Quality Manual) to meet the standard's requirements.",
    },
    {
      step: 3,
      title: "Conduct Internal Audit",
      description:
        "Perform an internal audit to identify and rectify any gaps in your system before the external audit.",
    },
    {
      step: 4,
      title: "Choose a Certification Body",
      description:
        "Select an accredited third-party certification body to conduct the external audit.",
    },
    {
      step: 5,
      title: "Stage 1 & Stage 2 Audits",
      description:
        "The certification body conducts a documentation review (Stage 1) followed by an on-site inspection (Stage 2) to verify the implementation of your system.",
    },
    {
      step: 6,
      title: "Receive Certification",
      description:
        "Upon successful completion of the audits, the certification body issues the ISO certificate, which is typically valid for three years.",
    },
  ],
  fees: [
    {
      component: "Certification Cost",
      fees: "₹20,000 - ₹1,00,000+",
      remarks:
        "The cost varies significantly based on the size and complexity of the organization, the chosen standard, and the certification body.",
    },
    {
      component: "Consultancy & Implementation",
      fees: "Varies",
      remarks:
        "Many companies hire a consultant to help with documentation and implementation, which is an additional cost.",
    },
  ],
  faqs: [
    {
      q: "Is ISO certification mandatory in India?",
      a: "No, ISO certification is generally voluntary. However, it is often a mandatory requirement for participating in government tenders or for becoming a supplier to large corporations, making it a market necessity in many industries.",
    },
    {
      q: "How long is an ISO certificate valid for?",
      a: "An ISO certificate is typically valid for three years. To maintain its validity, the company must undergo annual surveillance audits during this period.",
    },
    {
      q: "What is the difference between ISO 9001 and ISO 14001?",
      a: "ISO 9001 is the standard for a Quality Management System (QMS), focusing on customer satisfaction and quality of products/services. ISO 14001 is the standard for an Environmental Management System (EMS), focusing on an organization's environmental performance.",
    },
  ],
};
