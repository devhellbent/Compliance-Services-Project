// lib/data/services/taxation/gst/gst-amendment.ts

import { ServiceData } from "@/lib/types";

export const gstAmendmentData: ServiceData = {
  title: "GST Amendment",
  breadcrumb: ["Home", "Taxation", "GST Amendment"],
  description:
    "A GST Registration Amendment is the formal process of updating your business details on the GST portal to ensure legal compliance.",
  overview: `A GST Registration Amendment is the formal process of updating your business details on the GST portal to ensure legal compliance. Under Section 28 of the CGST Act, any change in business operations—such as a new address, name change, or addition of partners—must be reported. This ensures your GST certificate remains an accurate reflection of your current business status.

Amendments are categorized into Core Fields, which require officer approval (like address or ownership changes), and Non-Core Fields, which are updated instantly (like contact details). You must file these changes via Form GST REG-14 within 15 days of the change to avoid penalties.

### Types of GST Registration Amendments

There are two primary types of GST Registration Amendments based on the nature of the information being updated and the level of approval required from the tax authorities.

**Core Field Amendments** involve fundamental details of your business. Because these changes are significant, they require approval from a Jurisdictional Tax Officer, usually within 15 working days:
*   **Legal/Trade Name:** Changing the business name (without changing the PAN).
*   **Principal Place of Business:** Updating the main office address or contact details of the primary location.
*   **Additional Place of Business:** Adding or removing branches, warehouses, or godowns.
*   **Stakeholders:** Adding or deleting Directors, Partners, Promoters, or the Karta of a HUF.

**Non-Core Field Amendments** are minor or routine updates that do not require officer approval. They are processed automatically by the GST portal once verified via OTP (EVC) or Digital Signature (DSC):
*   **Business Details:** Changing the nature of possession of premises (e.g., from "Leased" to "Owned").
*   **Authorized Signatory:** Changing the person authorized to sign on behalf of the company.
*   **Contact Information:** Updating the mobile number or email address of the authorized signatory.
*   **Nature of Business Activity:** Changing the type of work done at a location (e.g., from "Retail" to "Wholesale").

### GST Amendment Time Limit

You must submit the application for amendment (Form GST REG-14) within **15 days** from the date of the event that warranted the change.

| Field Type | Approval Requirement | Approval Timeline |
| --- | --- | --- |
| Core Fields | Requires Tax Officer approval | Usually 15 working days |
| Non-Core Fields | Auto-approved by the system | Instant (within minutes) |

*Note: If an officer requires more information for a Core Field amendment, they will issue a notice (Form REG-03) within 15 days. You then have 7 working days to reply. You cannot file a new Core Field amendment if a previous one is still pending approval.*`,
  advantages: [
    {
      icon: "Shield",
      title: "Legal Compliance",
      text: "Filing an amendment within the 15-day window prevents heavy penalties for non-compliance (ranging from ₹10,000 to ₹50,000) and keeps your business records legally valid.",
    },
    {
      icon: "Wallet",
      title: "Maintaining ITC Flow",
      text: "Many expenses like office rent, internet, and utilities require the correct registered address on invoices. An amendment ensures you don't lose Input Tax Credits due to address mismatches.",
    },
    {
      icon: "Truck",
      title: "Smooth E-Way Bill Generation",
      text: "Logistics and shipping require the correct 'dispatch from' or 'bill to' addresses. Outdated portal data can cause system errors or vehicle detention during transit.",
    },
    {
      icon: "Activity",
      title: "Accurate Digital Communication",
      text: "Updating your mobile and email ensures you receive critical system-generated notices, show-cause orders, and OTPs instantly, preventing missed deadlines.",
    },
  ],
  disadvantages: [
    {
      icon: "Search",
      title: "Tax Officer Scrutiny",
      text: "Core field amendments (like changing a primary address) require officer approval. This often triggers a physical verification of the premises or a detailed audit of submitted documents.",
    },
    {
      icon: "Clock",
      title: "Procedural Approval Delays",
      text: "Unlike non-core changes, core field amendments (Name, Address, Partners) take approximately 15 working days for official review and approval.",
    },
  ],
  eligibility: [
    {
      title: "Core Field Amendments (Officer Approval Required)",
      items: [
        "**Legal/Trade Name:** Changing the business name without changing the PAN.",
        "**Principal Place of Business:** Updating the main office address or contact details of the primary location.",
        "**Additional Place of Business:** Adding or removing branches, warehouses, or godowns.",
        "**Stakeholders:** Adding or deleting Directors, Partners, Promoters, or the Karta of a HUF.",
      ],
    },
    {
      title: "Non-Core Field Amendments (Instant Update)",
      items: [
        "**Business Details:** Changing the nature of possession of premises (e.g., from 'Leased' to 'Owned').",
        "**Authorized Signatory:** Changing the person authorized to sign on behalf of the company.",
        "**Contact Information:** Updating the mobile number or email address of the authorized signatory.",
        "**Nature of Activity:** Changing the type of work done (e.g., from 'Retail' to 'Wholesale').",
      ],
    },
    {
      title: "Non-Amendable Field Criteria",
      items: [
        "**PAN Change:** Any change in legal status (e.g., Proprietorship to Company) requiring a new PAN necessitates a new GSTIN application.",
        "**Inter-State Move:** GST is state-specific; you cannot 'move' a GSTIN to another state via the amendment process.",
        "**Time Limit:** Amendments must be initiated within **15 days** of the change occurring to stay compliant.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Address Change",
      content: {
        title: "Proof of new premises",
        items: [
          "Owned: Latest Electricity Bill or Property Tax Receipt and Ownership/Sale Deed.",
          "Rented: Valid Rent/Lease Agreement and Owner's latest Electricity Bill.",
          "Consent: No Objection Certificate (NOC) from the property owner for business use.",
          "Geocoded Address: Photographs of the office with a signboard (if requested).",
        ],
      },
    },
    {
      tabTitle: "Ownership Updates",
      content: {
        title: "Constitution and stakeholder proofs",
        items: [
          "Amended Partnership Deed (duly notarized) for partnership changes.",
          "Board Resolution authorizing new directors or a change in signatory.",
          "Certificate of Incorporation (COI) if the MCA name has changed.",
          "PAN, Aadhaar, and Photo of the newly added Director or Partner.",
        ],
      },
    },
    {
      tabTitle: "Technical Proofs",
      content: {
        title: "Supporting evidence",
        items: [
          "Copy of the previous GST Registration Certificate (REG-06).",
          "Letter of Authorization for the new Primary Authorized Signatory.",
          "Proof of addition of bank account (Cancelled Cheque/Statement).",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Field Identification",
      description: "Determine if your change falls under 'Core Fields' (requiring officer approval) or 'Non-Core Fields' (instant update).",
    },
    {
      step: 2,
      title: "Portal Access and Form Filing",
      description: "Log in to the GST portal, select the 'Amendment' service, and fill out Form GST REG-14 with the updated details.",
    },
    {
      step: 3,
      title: "Evidence Upload",
      description: "Attach clear, digital copies of supporting evidence (e.g., new rent agreement or board resolution) as per the fields being changed.",
    },
    {
      step: 4,
      title: "Submission via DSC / EVC",
      description: "Submit the amendment application using a Digital Signature (DSC) for companies/LLPs or Aadhaar-based OTP for others.",
    },
    {
      step: 5,
      title: "Approval and Certificate Update",
      description: "Non-core changes are instant. Core changes are reviewed by an officer within 15 days, after which an updated REG-06 is issued.",
    },
  ],
  fees: [],
  feesMarkdown: `
The government does not charge a fee for filing an amendment on the GST portal.

### Professional Fee Structure

| Amendment Type | Applicability | Estimated Professional Fee | Key Factors Affecting Cost |
| --- | --- | --- | --- |
| Non-Core Amendment | Routine updates (Email/HSN) | ₹1,000 – ₹2,000 | Number of fields updated. |
| Core Field Amendment | Critical updates (Address/Partners) | ₹2,500 – ₹5,000 | Documentation complexity. |
| Legal Name Change | Trade name or business name | ₹3,000 – ₹6,000 | Consistency with MCA/Deed. |

### Processing Timelines

*   **Non-Core Fields:** Changes are updated instantly on the portal without officer intervention.
*   **Core Fields:** Requires approval from the jurisdictional officer, typically taking **15 working days**.
`,
  faqs: [
    {
      q: "What is the penalty for not amending GST details?",
      a: "Delayed amendment beyond 15 days can attract a **general penalty of up to ₹25,000** under Section 125, plus potential site verification notices.",
    },
    {
      q: "Do I need a new GST number if I change my business name?",
      a: "No. You can update your business name via a **Core Field Amendment** as long as the PAN remains the same.",
    },
    {
      q: "Can I use my house address as my new business place?",
      a: "Yes, you can amend your address to a residential location provided you have an **Electricity Bill** and an **NOC** from the owner.",
    },
  ],
};
