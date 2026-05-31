import { ServiceData } from "@/lib/types";

const OVERVIEW_NOTE =
  "The **verbatim** text from our processed documentation library is shown below under **Full source text**.";

/** Detects stub service pages that rely on appendix markdown for full copy (see `mergeAppendixExcerptIntoStubOverview`). */
export const NAV_DOCUMENT_BACKED_OVERVIEW_SENTINEL = OVERVIEW_NOTE;

function navDocumentBackedPage(
  title: string,
  breadcrumbTrail: readonly [string, string]
): ServiceData {
  const [section, subSection] = breadcrumbTrail;
  return {
    title,
    breadcrumb: ["Home", section, subSection, title],
    description: `${title}. Verbatim source documentation is included on this page.`,
    overview: `**${title}**\n\n${OVERVIEW_NOTE}`,
    advantages: [],
    disadvantages: [],
    eligibility: [],
    documents: [],
    registrationProcess: [],
    fees: [],
    faqs: [],
  };
}

/** Slugs present in navigation but without bespoke `ServiceData` modules — backed by markdown appendices. */
const NAV_DOCUMENT_BACKED_DEFS: ReadonlyArray<
  readonly [slug: string, title: string, trail: readonly [string, string]]
> = [
  [
    "15ca-15cb-filing",
    "15CA - 15CB Filing",
    ["Taxation", "Income Tax"],
  ],
  [
    "additional-place-of-business-in-gst",
    "Additional Place of Business in GST",
    ["Taxation", "GST"],
  ],
  ["adt-1-filing", "ADT-1 Filing", ["MCA", "Special Compliance Services"]],
  ["agm", "AGM", ["MCA", "Annual & Half-Yearly Compliance"]],
  ["aoa-amendment", "AOA Amendment", ["MCA", "Special Compliance Services"]],
  [
    "aoc-4-aoc-4-xbrl",
    "AOC-4/AOC-4 XBRL",
    ["MCA", "Annual & Half-Yearly Compliance"],
  ],
  [
    "approval-of-director",
    "Approval of Director",
    ["MCA", "Special Compliance Services"],
  ],
  [
    "authorized-capital-increase",
    "Authorized Capital Increase",
    ["MCA", "Special Compliance Services"],
  ],
  ["business-tax-filing", "Business Tax Filing", ["Taxation", "Income Tax"]],
  [
    "change-in-llp-agreement",
    "Change in LLP Agreement",
    ["MCA", "Special Compliance Services"],
  ],
  [
    "commencement-inc-20a",
    "Commencement (INC-20A)",
    ["MCA", "Special Compliance Services"],
  ],
  [
    "consent-letter-for-gst-registration",
    "Consent Letter For Gst Registration",
    ["Taxation", "GST"],
  ],
  [
    "consultancy-agreement",
    "Consultancy Agreement",
    ["Documentations", "Commercial Contracts"],
  ],
  ["demat-of-shares", "Demat of Shares", ["MCA", "Share Management Solutions"]],
  ["din-reactivation", "DIN Reactivation", ["MCA", "Special Compliance Services"]],
  [
    "dormant-status-filing",
    "Dormant Status Filing",
    ["MCA", "Special Compliance Services"],
  ],
  ["dpt-3-filing", "DPT-3 Filing", ["MCA", "Annual & Half-Yearly Compliance"]],
  ["e-voting", "E-Voting", ["MCA", "Annual & Half-Yearly Compliance"]],
  [
    "esic-return-filling",
    "ESIC Return Filling",
    ["Taxation", "Regulatory Return Filing"],
  ],
  [
    "fc-gpr-fc-trs-filings",
    "FC-GPR/FC-TRS Filings",
    ["MCA", "Annual & Half-Yearly Compliance"],
  ],
  ["fema-rbi-compliance", "FEMA / RBI Compliance", ["MCA", "Company Compliance"]],
  [
    "finance-agreement",
    "Finance Agreement",
    ["Documentations", "Commercial Contracts"],
  ],
  [
    "franchise-agreement",
    "Franchise Agreement",
    ["Documentations", "Commercial Contracts"],
  ],
  ["gift-deed", "Gift Deed", ["Documentations", "Real Estate"]],
  ["gst-amendment", "GST Amendment", ["Taxation", "GST"]],
  [
    "gst-annual-return-filing-gstr-9",
    "GST Annual Return Filing (GSTR-9)",
    ["Taxation", "GST"],
  ],
  ["gst-registration", "GST Registration", ["Taxation", "GST"]],
  [
    "gst-registration-for-e-commerce",
    "GST Registration for E-commerce",
    ["Taxation", "GST"],
  ],
  ["gst-return-filing", "GST Return Filing", ["Taxation", "GST"]],
  [
    "gst-return-filing-for-e-commerce",
    "GST Return Filing for E-commerce",
    ["Taxation", "GST"],
  ],
  ["gst-revocation", "GST Revocation", ["Taxation", "GST"]],
  ["gstr-10", "GSTR-10", ["Taxation", "GST"]],
  [
    "income-certificate",
    "Income Certificate",
    ["Documentations", "Free Legal Documents"],
  ],
  ["income-tax-notice", "Income Tax Notice", ["Taxation", "Income Tax"]],
  [
    "indian-subsidiary-winding-up",
    "Indian Subsidiary Winding Up",
    ["MCA", "MCA Services"],
  ],
  ["isin-number", "ISIN Number", ["MCA", "Share Management Solutions"]],
  ["itr-1-return-filing", "ITR-1 Return Filing", ["Taxation", "Income Tax"]],
  ["itr-2-return-filing", "ITR-2 Return Filing", ["Taxation", "Income Tax"]],
  ["itr-3-return-filing", "ITR-3 Return Filing", ["Taxation", "Income Tax"]],
  ["itr-4-return-filing", "ITR-4 Return Filing", ["Taxation", "Income Tax"]],
  ["itr-5-return-filing", "ITR-5 Return Filing", ["Taxation", "Income Tax"]],
  ["itr-6-return-filing", "ITR-6 Return Filing", ["Taxation", "Income Tax"]],
  ["itr-7-return-filing", "ITR-7 Return Filing", ["Taxation", "Income Tax"]],
  [
    "joint-venture-agreement",
    "Joint Venture Agreement",
    ["Documentations", "Commercial Contracts"],
  ],
  ["kyc-dir-3-kyc", "KYC/DIR-3 KYC", ["MCA", "Annual & Half-Yearly Compliance"]],
  ["legal-notice", "Legal Notice", ["Documentations", "Notices"]],
  [
    "llp-form-11-filing",
    "LLP Form 11 Filing",
    ["MCA", "Annual & Half-Yearly Compliance"],
  ],
  [
    "llp-to-private-company",
    "LLP to Private Company",
    ["MCA", "Legal Business Transformations"],
  ],
  ["llp-winding-up", "LLP Winding Up", ["MCA", "MCA Services"]],
  [
    "master-service-agreement",
    "Master Service Agreement",
    ["Documentations", "Commercial Contracts"],
  ],
  ["mgt-7-mgt-7a", "MGT-7/MGT-7A", ["MCA", "Annual & Half-Yearly Compliance"]],
  [
    "microfinance-company-compliance",
    "Microfinance Company Compliance",
    ["MCA", "Company Compliance"],
  ],
  ["moa-amendment", "MOA Amendment", ["MCA", "Special Compliance Services"]],
  ["msme-filling", "MSME Filling", ["MCA", "Annual & Half-Yearly Compliance"]],
  [
    "name-change-company",
    "Name Change - Company",
    ["MCA", "Special Compliance Services"],
  ],
  ["nidhi-winding-up", "Nidhi Winding Up", ["MCA", "MCA Services"]],
  [
    "no-objection-certificate",
    "No Objection Certificate",
    ["Documentations", "Free Legal Documents"],
  ],
  [
    "noncompete-agreement",
    "Noncompete Agreement",
    ["Documentations", "Commercial Contracts"],
  ],
  [
    "opc-to-private-limited",
    "OPC to Private Limited",
    ["MCA", "Legal Business Transformations"],
  ],
  ["pas-6", "PAS-6", ["MCA", "Annual & Half-Yearly Compliance"]],
  [
    "payroll-maintenance",
    "Payroll Maintenance",
    ["Documentations", "HR Policies"],
  ],
  ["pf-return-filling", "PF Return Filling", ["Taxation", "Regulatory Return Filing"]],
  [
    "private-limited-winding-up",
    "Private Limited Winding Up",
    ["MCA", "MCA Services"],
  ],
  [
    "private-to-public-company",
    "Private to Public Company",
    ["MCA", "Legal Business Transformations"],
  ],
  [
    "probate-of-will",
    "Probate of Will",
    ["Documentations", "Individual Legal Services"],
  ],
  [
    "producer-company-compliance",
    "Producer Company Compliance",
    ["MCA", "Company Compliance"],
  ],
  [
    "professional-tax-return-filling",
    "Professional Tax Return Filling",
    ["Taxation", "Regulatory Return Filing"],
  ],
  [
    "proprietor-to-llp-company",
    "Proprietor to LLP Company",
    ["MCA", "Legal Business Transformations"],
  ],
  [
    "public-limited-company-compliance",
    "Public Limited Company Compliance",
    ["MCA", "Company Compliance"],
  ],
  [
    "registered-office-change",
    "Registered Office Change",
    ["MCA", "Special Compliance Services"],
  ],
  [
    "removal-of-director",
    "Removal of Director",
    ["MCA", "Special Compliance Services"],
  ],
  [
    "rental-tenant-notice",
    "Rental Tenant Notice",
    ["Documentations", "Real Estate"],
  ],
  ["rta-services", "RTA Services", ["MCA", "Share Management Solutions"]],
  ["sale-deed", "Sale Deed", ["Documentations", "Real Estate"]],
  [
    "scope-of-work-agreement",
    "Scope of Work Agreement",
    ["Documentations", "Commercial Contracts"],
  ],
  ["section-8-winding-up", "Section 8 Winding Up", ["MCA", "MCA Services"]],
  [
    "service-level-agreement",
    "Service Level Agreement",
    ["Documentations", "Commercial Contracts"],
  ],
  ["share-transfer", "Share Transfer", ["MCA", "Share Management Solutions"]],
  ["society-compliance", "Society Compliance", ["MCA", "Company Compliance"]],
  [
    "statutory-registers-and-minutes-maintenance",
    "Statutory Registers and Minutes Maintenance",
    ["MCA", "Company Compliance"],
  ],
  [
    "succession-certificate",
    "Succession Certificate",
    ["Documentations", "Commercial Contracts"],
  ],
  ["tds-return-filing", "TDS Return Filing", ["Taxation", "Regulatory Return Filing"]],
  ["trust-compliance", "Trust Compliance", ["MCA", "Company Compliance"]],
  [
    "vendor-agreement",
    "Vendor Agreement",
    ["Documentations", "Commercial Contracts"],
  ],
  [
    "will-registration",
    "Will Registration",
    ["Documentations", "Individual Legal Services"],
  ],
];

export const NAV_DOCUMENT_BACKED_SERVICE_DATA: Record<string, ServiceData> =
  Object.fromEntries(
    NAV_DOCUMENT_BACKED_DEFS.map(([slug, title, trail]) => [
      slug,
      navDocumentBackedPage(title, trail),
    ])
  );
