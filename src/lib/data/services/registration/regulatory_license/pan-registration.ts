// lib/data/services/pan-registration.ts (expanded)

import { ServiceData } from "@/lib/types";

export const panRegistrationData: ServiceData = {
  title: "PAN Registration",
  breadcrumb: ["Home", "Registrations", "PAN Registration"],
  description:
    "Apply for new PAN or corrections for individuals and entities with e‑KYC and instant e‑PAN options for tax and KYC compliance.",
  overview:
    "A **Permanent Account Number (PAN)** is a unique 10‑character alphanumeric identifier used by the Indian Income Tax Department to link virtually all significant taxable and reportable financial activities of a person or entity. It is compulsory for Income Tax Return filing, TDS/TCS credit mapping, capital market transactions, property dealings, and numerous KYC regimes. The structured code (AAAAA9999A) embeds entity type, surname/initial mapping, sequence and checksum. As a universal financial identity it underpins transparency and anti‑evasion measures by providing a single cross‑system key.",
  advantages: [
    {
      icon: "FileText",
      title: "Mandatory for ITR",
      text: "Essential for filing returns and tracking TDS/TCS credits.",
    },
    {
      icon: "Landmark",
      title: "High‑Value Transactions",
      text: "Required for property, securities, large deposits & investments.",
    },
    {
      icon: "UserCheck",
      title: "Accepted ID",
      text: "Widely accepted government photo & financial identity proof.",
    },
    {
      icon: "Building",
      title: "Business Foundation",
      text: "Prerequisite for opening current accounts & GST registration.",
    },
    {
      icon: "Search",
      title: "Traceability",
      text: "Links scattered data sources—reduces tax evasion risk.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertTriangle",
      title: "Multiple PAN Penalty",
      text: "Possessing >1 active PAN triggers penalties—surrender duplicates.",
    },
    {
      icon: "Link",
      title: "Aadhaar Linking",
      text: "Non‑linked PAN may become inoperative for compliance.",
    },
    {
      icon: "FileWarning",
      title: "Data Mismatch",
      text: "Inconsistent demographic data can delay processing / e‑filing.",
    },
    {
      icon: "ShieldAlert",
      title: "Privacy Exposure",
      text: "Over‑sharing PAN can invite identity misuse—share prudently.",
    },
  ],
  eligibility: [
    {
      title: "Who Needs PAN",
      items: [
        "Any individual with taxable Indian income or entering specified reportable transactions.",
        "All entities: Company, LLP, Partnership, HUF, AOP, BOI, Trust, Society, Local Authority.",
        "Foreign citizens / entities with Indian source income or investment registrations.",
        "Mandatory where business turnover may exceed ₹5,00,000 or ITR filing obligation exists.",
      ],
    },
    {
      title: "Special Notes",
      items: [
        "Minor applications signed by guardian; sole proprietorship uses proprietor’s PAN.",
        "Foreign investors require PAN for Demat & capital market KYC.",
        "PAN–Aadhaar linking deadline compliance essential to avoid inoperative status.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Individuals (Resident)",
      content: {
        title: "Primary Proofs",
        items: [
          "Aadhaar (preferred single proof: ID + Address + DOB).",
          "Alternative: Passport / Voter ID / Driving Licence + separate DOB proof (if needed).",
          "Recent colour passport photograph.",
        ],
      },
    },
    {
      tabTitle: "Non-Individuals",
      content: {
        title: "Entities",
        items: [
          "Certificate of Incorporation / Registration / Partnership / Trust Deed.",
          "List of directors / partners / trustees (internal reference).",
          "Form 49A details of authorized signatory with KYC proofs.",
        ],
      },
    },
    {
      tabTitle: "Foreign Applicants",
      content: {
        title: "49AA Requirements",
        items: [
          "Passport (apostilled / consular attested if issued abroad).",
          "Foreign address proof (Bank / Utility ≤ 3 months).",
          "Recent photograph + signed Form 49AA.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Form Selection",
      description:
        "Choose Form 49A (Indian) or 49AA (Foreign) on Protean / UTIITSL portal.",
    },
    {
      step: 2,
      title: "Data Entry",
      description:
        "Enter demographic & contact details; ensure spelling matches Aadhaar / Passport.",
    },
    {
      step: 3,
      title: "KYC Mode",
      description:
        "Use Aadhaar e‑KYC (paperless) or upload self‑attested scans.",
    },
    {
      step: 4,
      title: "Fee Payment",
      description: "Pay online; foreign dispatch incurs higher fee.",
    },
    {
      step: 5,
      title: "Acknowledgement",
      description:
        "Receive 15‑digit reference; print/sign & post if physical docs required.",
    },
    {
      step: 6,
      title: "Issuance",
      description:
        "e‑PAN often in hours (Aadhaar flow); physical card ~10–15 working days.",
    },
    {
      step: 7,
      title: "Link & Use",
      description: "Link with Aadhaar; update banks & platforms as needed.",
    },
  ],
  fees: [
    {
      component: "Application (Domestic)",
      fees: "₹106–₹110",
      remarks: "Form 49A processing + local dispatch (incl. GST).",
    },
    {
      component: "Application (Foreign Address)",
      fees: "≈ ₹1,020",
      remarks: "Higher overseas dispatch charges.",
    },
    {
      component: "e‑PAN Only / Reprint",
      fees: "₹50–₹70",
      remarks: "Digital PDF issuance when physical not needed.",
    },
  ],
  faqs: [
    {
      q: "Can I have more than one PAN?",
      a: "No. Multiple active PANs attract penalty; surrender duplicates immediately.",
    },
    {
      q: "Time for allotment?",
      a: "Aadhaar e‑KYC route: e‑PAN often within hours; physical card 10–15 working days.",
    },
    {
      q: "Is Aadhaar linking compulsory?",
      a: "Yes—non‑linked PAN turns inoperative for filing & TDS credit usage post deadlines.",
    },
    {
      q: "Lost my PAN—what now?",
      a: "Request reprint or e‑PAN online using PAN + Aadhaar; FIR only if misuse suspected.",
    },
    {
      q: "Change details later?",
      a: "File correction request citing updated KYC proofs; new e‑PAN issued upon approval.",
    },
  ],
};
