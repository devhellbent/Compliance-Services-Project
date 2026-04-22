import { ServiceData } from "@/lib/types";

const commonProcess = [
  { step: 1, title: "Share Required Details", description: "Provide party and document details in the requested format." },
  { step: 2, title: "Prepare Draft", description: "Draft document is prepared using the selected template structure." },
  { step: 3, title: "Review and Finalize", description: "Review placeholders, terms, and clauses before final use." },
];

const commonFees = [
  { component: "Template Format", fees: "As per document", remarks: "Based on selected legal document type" },
];

const commonFaqs = [
  { q: "Can placeholders be edited?", a: "Yes. Template placeholders are meant to be replaced with actual details before finalization." },
];

const baseData = (title: string, overview: string, points: string[]): ServiceData => ({
  title,
  breadcrumb: ["Home", "Documentations", "Free Legal Documents", title],
  description: overview,
  overview,
  advantages: points.slice(0, 5).map((text) => ({ icon: "FileText", title: "Key Clause", text })),
  disadvantages: [],
  eligibility: ["Document details and party details must be filled before use."],
  documents: [{ title: "Template Sections", items: points }],
  registrationProcess: commonProcess,
  fees: commonFees,
  faqs: commonFaqs,
});

export const allLegalDocumentsData = baseData(
  "All Legal Documents",
  "Compilation of legal document templates available in the provided Free Legal Documents source.",
  [
    "Commercial Rental Agreement",
    "Experience Letter",
    "Appointment Letter",
    "Affidavit Format",
    "Salary Slip",
    "Resignation Letter",
    "Legal Heir Certificate",
    "Relieving Letter",
    "Partnership Deed",
    "GST Invoice",
    "Authorized Signatory in GST",
    "Delivery Challan",
    "Offer Letter",
    "Rent Receipt",
    "Non Disclosure Agreement (NDA)",
    "Shareholders Agreement",
    "Memorandum of Understanding",
    "Share Purchase Agreement",
    "Power of Attorney",
    "Rental Agreement",
    "Employment Agreement",
    "ESOP Grant Letter and Agreement",
  ]
);

export const commercialRentalAgreementData = baseData(
  "Commercial Rental Agreement",
  "Commercial rental template between lessor/owner and lessee/tenant with 11-month tenancy structure.",
  [
    "Parties: Lessor/Owner and Lessee/Tenant definitions.",
    "Term: Lease begins on start date and ends on end date unless terminated earlier.",
    "Rent clause with monthly payment terms.",
    "Form of payment clause.",
    "Waiver and full disclosure clauses.",
  ]
);

export const experienceLetterData = baseData(
  "Experience Letter",
  "Experience certificate template confirming employment period, role, salary, and conduct.",
  [
    "To whomsoever it may concern heading.",
    "Employment duration and designation statement.",
    "Monthly gross salary mention.",
    "Conduct and performance statement.",
    "Authorized signatory block.",
  ]
);

export const appointmentLetterData = baseData(
  "Appointment Letter",
  "Offer and appointment template with role, joining, probation, policy, and submission checklist.",
  [
    "Position and reporting clause.",
    "Date of joining, posting, and remuneration clauses.",
    "Probation, duties, work hours, confidentiality, and leave policy.",
    "Termination and notice/security deposit policy.",
    "Documents required list and acceptance clause.",
  ]
);

export const affidavitFormatData = baseData(
  "Affidavit Format",
  "Name-change affidavit template with declarations and verification statement.",
  [
    "Old name and new name declaration.",
    "Statement of lawful intent and non-fraudulent change.",
    "Declaration section for truthfulness.",
    "Verification section by deponent.",
    "Place/date/signature placeholders.",
  ]
);

export const salarySlipData = baseData(
  "Salary Slip",
  "Salary slip layout template with earnings, deductions, net salary, and employer contributions.",
  [
    "Employee and pay-period details section.",
    "Earnings and deductions table structure.",
    "Net salary and net payable fields.",
    "Employer contribution fields (EPF/ESIC).",
    "Working days and attendance fields.",
  ]
);

export const resignationLetterData = baseData(
  "Resignation Letter",
  "Resignation template with notice period, last working date, and transition commitment.",
  [
    "Subject and formal resignation declaration.",
    "Notice period start and last working day details.",
    "Acknowledgement request and handover intent.",
    "Gratitude and closing paragraph.",
    "Employee identity and contact placeholders.",
  ]
);

export const legalHeirCertificateData = baseData(
  "Legal Heir Certificate",
  "Legal heir certificate template with deceased details, heir table, declaration, and authority verification.",
  [
    "Deceased details section with date/place data.",
    "Legal heirs table fields (name, relation, age, address).",
    "Purpose statement for issuance.",
    "Declaration by applicant.",
    "Authority verification and seal/signature fields.",
  ]
);

export const relievingLetterData = baseData(
  "Relieving Letter",
  "Relieving letter template acknowledging resignation and last working day completion.",
  [
    "Resignation acknowledgement statement.",
    "Relieving effective date and designation.",
    "Exit formalities and handover confirmation.",
    "Final settlement statement.",
    "Authorized signatory and closing.",
  ]
);

export const partnershipDeedTemplateData = baseData(
  "Partnership Deed",
  "Partnership deed template with parties, business details, capital, profit sharing, and governance clauses.",
  [
    "Partners and deed commencement details.",
    "Name/place/objective of partnership business.",
    "Capital contribution and interest clauses.",
    "Profit/loss sharing ratio and management clauses.",
    "Admission, retirement, dissolution, and governing law clauses.",
  ]
);

export const gstInvoiceTemplateData = baseData(
  "GST Invoice",
  "Tax invoice template with supplier, receiver/consignee, line-item tax table, and totals.",
  [
    "Company and invoice metadata fields.",
    "Billed-to and shipped-to sections.",
    "Line-item table with HSN/SAC, tax rates, and tax amounts.",
    "Net amount in words and figures.",
    "Bank details and authorized signatory section.",
  ]
);

export const authorisedSignatoryInGstData = baseData(
  "Authorised Signatory In GST",
  "Authorization letter template empowering a representative for GST registration and compliance work.",
  [
    "Company and authorized representative details.",
    "Authority to apply/amend GST registration.",
    "Authority to file GST returns and submit responses.",
    "Authority to represent before GST authorities.",
    "Declaration and signature block.",
  ]
);

export const deliveryChallanData = baseData(
  "Delivery Challan",
  "Delivery challan template with receiver details, challan metadata, and itemized tax table.",
  [
    "Company and challan metadata fields.",
    "Receiver details section.",
    "Itemized table with tax columns.",
    "Total/net amount fields.",
    "Bank details and authorized signatory section.",
  ]
);

export const offerLetterData = baseData(
  "Offer Letter",
  "Employment offer letter template with role, compensation, probation, terms, and joining documents.",
  [
    "Offer of employment and joining date.",
    "Appointment, work timing, and location clauses.",
    "Remuneration and statutory deduction clause.",
    "Probation and termination/notice terms.",
    "Joining document checklist and acceptance.",
  ]
);

export const rentReceiptData = baseData(
  "Rent Receipt",
  "Rent receipt template with amount, property details, payment mode, and landlord acknowledgment.",
  [
    "Receipt number and date of issue.",
    "Rent amount and month reference.",
    "Property address section.",
    "Payment mode/transaction reference/date fields.",
    "Landlord signature and PAN details.",
  ]
);

export const nonDisclosureAgreementData = baseData(
  "Non Disclosure Agreement NDA",
  "NDA template defining confidentiality obligations, exclusions, term, remedies, and jurisdiction.",
  [
    "Purpose and confidential information definition.",
    "Receiving party confidentiality obligations.",
    "Exclusions from confidential information.",
    "Term, return of information, and no-license clauses.",
    "Breach remedies and governing law/jurisdiction.",
  ]
);

export const shareholdersAgreementTemplateData = baseData(
  "Shareholders Agreement",
  "Shareholders agreement template covering capital structure, board rights, transfer rules, and disputes.",
  [
    "Definitions and capital/shareholding structure.",
    "Board composition, quorum, and reserved matters.",
    "ROFR, tag-along, and drag-along transfer clauses.",
    "Dividend/funding, non-compete, and confidentiality clauses.",
    "Arbitration and governing law clauses.",
  ]
);

export const memorandumOfUnderstandingData = baseData(
  "Memorandum of Understanding",
  "MoU template for collaboration purpose, responsibilities, financial terms, and dispute handling.",
  [
    "Purpose and collaboration objectives.",
    "Roles and responsibilities of both parties.",
    "Financial arrangement and payment terms.",
    "Confidentiality and term/termination clauses.",
    "Governing law, jurisdiction, and miscellaneous clauses.",
  ]
);

export const sharePurchaseAgreementData = baseData(
  "Share Purchase Agreement",
  "Share purchase agreement template for transfer of company shares with payment, deliverables, and warranties.",
  [
    "Parties and transaction definitions.",
    "Subject matter of share sale and transfer.",
    "Purchase price and payment details.",
    "Conditions precedent and closing deliverables.",
    "Representations, indemnity, and arbitration clauses.",
  ]
);

export const powerOfAttorneyData = baseData(
  "Power of Attorney",
  "Power of attorney template appointing an attorney for representation, document execution, and transactions.",
  [
    "Principal and attorney identification details.",
    "Authority scope for representation and submissions.",
    "Financial/property/court representation authority.",
    "Validity and revocation clauses.",
    "Acceptance by attorney and witness section.",
  ]
);

export const rentalAgreementData = baseData(
  "Rental Agreement",
  "Residential rental agreement template with tenancy period, rent, deposit, usage, and termination clauses.",
  [
    "Property description and tenancy term.",
    "Monthly rent and payment terms.",
    "Security deposit and refund conditions.",
    "Usage restrictions, maintenance, and repair duties.",
    "Termination notice, indemnity, and signatures.",
  ]
);

export const employmentAgreementData = baseData(
  "Employment Agreement",
  "Employment agreement template with role, compensation, confidentiality, non-compete, and termination terms.",
  [
    "Position and duty clauses.",
    "Term of employment and notice terms.",
    "Compensation and statutory benefits clauses.",
    "Work hours, leave, and confidentiality clauses.",
    "Non-compete, termination, dispute resolution, and policy compliance clauses.",
  ]
);

export const esopData = baseData(
  "ESOP",
  "ESOP grant letter and agreement template defining grant size, vesting, exercise, and termination outcomes.",
  [
    "Grant of options and scheme reference.",
    "Vesting schedule with cliff and periodic vesting.",
    "Exercise price and exercise period clauses.",
    "Termination impact on vested/unvested options.",
    "Tax implications, corporate action adjustments, and acceptance.",
  ]
);
