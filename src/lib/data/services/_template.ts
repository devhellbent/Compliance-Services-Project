// Template for creating new service data files
// Copy this template and customize for each service

import { ServiceData } from "@/lib/types";

export const createPlaceholderServiceData = (
  title: string,
  breadcrumb: string[],
  description: string
): ServiceData => {
  return {
    title,
    breadcrumb,
    description,
    overview: `**${title}**\n\nThis service is currently being updated. Please check back soon for complete information.`,
    advantages: [
      {
        icon: "CheckCircle",
        title: "Service Benefits",
        text: "This service provides essential benefits for your business needs.",
      },
    ],
    disadvantages: [
      {
        icon: "AlertTriangle",
        title: "Considerations",
        text: "Please consult with our experts for detailed information about this service.",
      },
    ],
    eligibility: [
      {
        title: "Eligibility Requirements",
        items: [
          "Specific eligibility criteria will be updated soon.",
          "Please contact us for detailed eligibility information.",
        ],
      },
    ],
    documents: [
      {
        tabTitle: "Required Documents",
        content: {
          title: "Documentation Requirements",
          items: [
            "Document requirements will be updated soon.",
            "Please contact us for a complete list of required documents.",
          ],
        },
      },
    ],
    registrationProcess: [
      {
        step: 1,
        title: "Initial Consultation",
        description:
          "Contact our team to understand the process and requirements.",
      },
      {
        step: 2,
        title: "Document Preparation",
        description: "Gather and prepare all necessary documents.",
      },
      {
        step: 3,
        title: "Application Submission",
        description: "Submit your application with all required documents.",
      },
      {
        step: 4,
        title: "Processing & Approval",
        description:
          "Wait for processing and approval from the relevant authority.",
      },
    ],
    fees: [
      {
        component: "Service Fee",
        fees: "Contact for pricing",
        remarks: "Please contact us for detailed fee structure.",
      },
    ],
    faqs: [
      {
        q: "What is this service?",
        a: "This service is currently being updated. Please contact us for more information.",
      },
      {
        q: "How long does it take?",
        a: "Processing time varies. Please contact us for current timelines.",
      },
    ],
  };
};
