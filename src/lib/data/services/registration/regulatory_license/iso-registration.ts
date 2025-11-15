// lib/data/services/iso-registration.ts

import { ServiceData } from "@/lib/types";

export const isoRegistrationData: ServiceData = {
  title: "ISO Registration",
  breadcrumb: ["Home", "Registrations", "ISO Registration"],
  description:
    "Accredited ISO certification audits for QMS/EMS/OH&S/ISMS/FSMS with a 3‑year cycle and annual surveillance.",
  overview:
    "**ISO Certification** is an independent assessment by an accredited Certification Body (CB) that your management system meets a specific ISO standard. ISO itself does not certify—CBs accredited by bodies like **NABCB** or **IAF‑MLA** members conduct audits. Certificates usually cover a defined scope and site(s), are valid for 3 years, and require annual surveillance audits. Common standards include **ISO 9001:2015 (QMS)**, **ISO 14001:2015 (EMS)**, **ISO 45001:2018 (OH&S)**, **ISO/IEC 27001:2022 (ISMS)** and **ISO 22000:2018 (FSMS)**.",
  advantages: [
    {
      icon: "TrendingUp",
      title: "Enhanced Credibility & Brand Image",
      text: "Globally recognized assurance that processes meet international standards, boosting trust and brand value.",
    },
    {
      icon: "Smile",
      title: "Improved Customer Satisfaction",
      text: "Process discipline drives consistent outputs, fewer defects, and better customer experience.",
    },
    {
      icon: "Settings",
      title: "Increased Operational Efficiency",
      text: "Clarifies roles, KPIs and controls—reducing rework, waste and compliance risks.",
    },
    {
      icon: "Globe",
      title: "Access to New Markets",
      text: "Often a pre‑qualification for tenders and enterprise supply chains; eases international expansion.",
    },
    {
      icon: "ShieldCheck",
      title: "Risk‑based Thinking",
      text: "Standards like ISO 9001 and 27001 embed risk assessment and continual improvement culture.",
    },
  ],
  disadvantages: [
    {
      icon: "CircleDollarSign",
      title: "High Cost of Implementation",
      text: "Process redesign, documentation, training and audits can be costly, especially initially.",
    },
    {
      icon: "Clock",
      title: "Time and Resource Intensive",
      text: "Implementation and audit prep take sustained effort; requires management commitment.",
    },
    {
      icon: "FileSearch",
      title: "Regular Surveillance Audits",
      text: "Annual surveillance and 3‑year recertification add recurring audit/consulting costs.",
    },
  ],
  eligibility: [
    {
      title: "Who Can Apply?",
      items: [
        "Any organization—manufacturing, services, software, healthcare, education—of any size can certify a management system.",
        "Single or multi‑site organizations can be covered; the scope must clearly state products/services and locations.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Business Documents",
      content: {
        title: "Legal & Business Identity",
        items: [
          "PAN, GST (if applicable), and legal constitution documents (COI, MOA/AOA, LLP Agreement/Partnership Deed).",
          "Registered address proof and site list; organization profile and scope statement.",
          "Process map and list of applicable legal/contractual requirements.",
        ],
      },
    },
    {
      tabTitle: "System Documents",
      content: {
        title: "Quality Management System (QMS) Documents",
        items: [
          "Policies and objectives (e.g., Quality, Environment, ISMS, OH&S).",
          "Documented procedures/SOPs, work instructions and forms/templates.",
          "Risk & opportunity assessments; compliance obligations register (as applicable).",
          "Records: training, calibration/maintenance, incident/NC logs, CAPA, internal audits and management reviews.",
        ],
      },
    },
    {
      tabTitle: "ISMS/EMS/FSMS Add‑ons",
      content: {
        title: "Standard‑Specific",
        items: [
          "ISMS: Statement of Applicability, asset inventory, risk treatment plan, access/control policies.",
          "EMS: Aspect‑impact register, compliance evaluation, environmental monitoring records.",
          "FSMS: HACCP plan, PRPs/OPRPs, hazard analysis records and traceability/recall procedures.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Select Standard & Scope",
      description:
        "Choose the relevant standard(s) and define scope, sites and processes to be covered.",
    },
    {
      step: 2,
      title: "Gap Analysis & Implementation",
      description:
        "Perform a gap assessment, then implement policies, procedures, controls, KPIs and records to meet requirements.",
    },
    {
      step: 3,
      title: "Internal Audits & Management Review",
      description:
        "Conduct internal audits, close nonconformities and hold a management review meeting.",
    },
    {
      step: 4,
      title: "Select Accredited CB",
      description:
        "Engage an accredited Certification Body (NABCB/IAF) and agree audit plan and dates.",
    },
    {
      step: 5,
      title: "Stage 1 & Stage 2",
      description:
        "Stage 1: readiness/document review. Stage 2: on‑site implementation audit, NCRs if any to be closed.",
    },
    {
      step: 6,
      title: "Certification & Surveillance",
      description:
        "Certificate issued for 3 years with yearly surveillance; recertification audit at cycle end.",
    },
  ],
  fees: [
    {
      component: "Certification Cost",
      fees: "₹25,000 - ₹2,50,000+",
      remarks:
        "Depends on headcount, sites, scope complexity, chosen standard(s) and the Certification Body.",
    },
    {
      component: "Consultancy & Implementation",
      fees: "Varies",
      remarks:
        "Optional. Many organizations hire consultants for gap analysis, documentation, training and pre‑audit checks.",
    },
    {
      component: "Surveillance Audits",
      fees: "Annual (10%–30% of cert fee)",
      remarks:
        "Yearly surveillance fees charged by CBs during the 3‑year cycle; recertification at cycle end.",
    },
  ],
  faqs: [
    {
      q: "Is ISO certification mandatory?",
      a: "Generally voluntary, but often required for tenders and enterprise vendor onboarding—making it commercially essential in many sectors.",
    },
    {
      q: "How long is a certificate valid?",
      a: "Typically 3 years with annual surveillance audits. At cycle end, a recertification audit is required.",
    },
    {
      q: "Accreditation vs Certification—what's the difference?",
      a: "Accreditation is recognition of a Certification Body by an authority (e.g., NABCB/IAF). Certification is when that CB audits and certifies your organization.",
    },
    {
      q: "Can we fail an ISO audit?",
      a: "If major nonconformities are found, certification may be deferred until corrective actions are implemented and verified.",
    },
    {
      q: "How long does it take to get certified?",
      a: "From a few weeks to a few months depending on readiness, organization size, and the number of standards/sites in scope.",
    },
  ],
};
