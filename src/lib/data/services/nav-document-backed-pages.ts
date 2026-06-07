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
    "consultancy-agreement",
    "Consultancy Agreement",
    ["Documentations", "Commercial Contracts"],
  ],


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
  [
    "income-certificate",
    "Income Certificate",
    ["Documentations", "Free Legal Documents"],
  ],


  [
    "joint-venture-agreement",
    "Joint Venture Agreement",
    ["Documentations", "Commercial Contracts"],
  ],
  ["legal-notice", "Legal Notice", ["Documentations", "Notices"]],
  [
    "master-service-agreement",
    "Master Service Agreement",
    ["Documentations", "Commercial Contracts"],
  ],

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
    "payroll-maintenance",
    "Payroll Maintenance",
    ["Documentations", "HR Policies"],
  ],

  [
    "probate-of-will",
    "Probate of Will",
    ["Documentations", "Individual Legal Services"],
  ],



  [
    "rental-tenant-notice",
    "Rental Tenant Notice",
    ["Documentations", "Real Estate"],
  ],
  ["sale-deed", "Sale Deed", ["Documentations", "Real Estate"]],
  [
    "scope-of-work-agreement",
    "Scope of Work Agreement",
    ["Documentations", "Commercial Contracts"],
  ],
  [
    "service-level-agreement",
    "Service Level Agreement",
    ["Documentations", "Commercial Contracts"],
  ],


  [
    "succession-certificate",
    "Succession Certificate",
    ["Documentations", "Commercial Contracts"],
  ],


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
