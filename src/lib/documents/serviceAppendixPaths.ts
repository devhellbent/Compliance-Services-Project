/**
 * Paths to verbatim markdown appendix from `DOCUMENTS/` (processed into `src/content/documents`).
 * Paths are POSIX segments under `src/content/documents/` (joined at runtime).
 */
const reg = (...p: string[]) => ["registration", ...p];
const corp = (...p: string[]) => ["compliance", "corporate", ...p];
const cat = (...p: string[]) => ["categories", ...p];

/** Full Word extract: DOCUMENTS/Documentations/Free Legal Documents.docx */
const freeLegalDocumentsSource = cat("free-legal-documents-source.md");

/** Service slug -> path segments under src/content/documents */
export const SERVICE_APPENDIX_SEGMENTS: Record<string, string[]> = {
  // Company registration (from Company Registration.docx)
  proprietorship: reg("proprietorship.md"),
  partnership: reg("partnership.md"),
  "limited-liability-partnership": reg("limited-liability-partnership.md"),
  "one-person-company": reg("one-person-company.md"),
  "private-limited-company": reg("private-limited-company.md"),
  "public-limited-company": reg("public-limited-company.md"),
  "producer-company": reg("producer-company.md"),
  "nidhi-company": reg("nidhi-company.md"),
  "nidhi-company-registration": reg("nidhi-company.md"),
  "section-8-company": reg("section-8-company.md"),
  "section-8-ngo-company": reg("section-8-company.md"),
  "trust-registration": reg("trust-registration.md"),
  "society-registration": reg("society-registration.md"),
  "indian-subsidiary": reg("indian-subsidiary.md"),
  "foreign-subsidiary-company-registration": reg(
    "foreign-subsidiary-company-registration.md"
  ),
  "microfinance-company-registration": reg("microfinance-company-registration.md"),
  "startup-india-registration": reg("startup-india-registration.md"),

  // Corporate service (from Corporate Service.docx slices + MCA excerpt for charge)
  "charge-creation-modification-and-satisfaction": corp(
    "charge-creation-modification-and-satisfaction.md"
  ),
  "charge-creation-modification-satisfaction": corp(
    "charge-creation-modification-and-satisfaction.md"
  ),
  "share-allotment-and-transfer": corp("share-allotment-and-transfer.md"),
  "right-issue-private-placement": corp("right-issue-private-placement.md"),
  "buy-back-of-shares": corp("buy-back-of-shares.md"),
  "buyback-of-shares": corp("buy-back-of-shares.md"),
  "issue-of-preference-shares-convertible-debentures": corp(
    "issue-of-preference-shares-convertible-debentures.md"
  ),
  "reduction-of-share-capital": corp("reduction-of-share-capital.md"),
  "esop-structuring-and-implementation": corp(
    "esop-structuring-and-implementation.md"
  ),
  "xbrl-filing": corp("xbrl-filing.md"),

  // SEBI / Audit / Restructuring (full thematic Word export)
  "compliance-with-lodr-regulations": cat("sebi-compliance.md"),
  "insider-trading-regulations-compliance": cat("sebi-compliance.md"),
  "listing-of-securities-on-stock-exchanges": cat("sebi-compliance.md"),
  "posh-policy-and-compliance": cat("sebi-compliance.md"),
  "secretarial-audit": cat("audit-due-diligence.md"),
  "legal-due-diligence": cat("audit-due-diligence.md"),
  "corporate-governance": cat("audit-due-diligence.md"),
  "internal-audit-and-process-review": cat("audit-due-diligence.md"),
  "amalgamation-merger-and-demerger-advisory": cat(
    "corporate-restructuring-compliance.md"
  ),
  "drafting-of-scheme-of-arrangement": cat(
    "corporate-restructuring-compliance.md"
  ),
  "nclt-filing-and-approvals": cat("corporate-restructuring-compliance.md"),
  "policy-making": cat("corporate-restructuring-compliance.md"),

  // Regulatory license
  "digital-signature-certificate": cat("regulatory-license.md"),
  "pan-registration": cat("regulatory-license.md"),
  "tan-registration": cat("regulatory-license.md"),
  "din-registration": cat("regulatory-license.md"),
  "professional-tax-registration": cat("regulatory-license.md"),
  "trade-license": cat("regulatory-license.md"),
  "fssai-license": cat("regulatory-license.md"),
  "iso-registration": cat("regulatory-license.md"),

  // Legal registration
  "msme-udyam-registration": cat("legal-registration.md"),
  "darpan-registration": cat("legal-registration.md"),
  "12a-registration": cat("legal-registration.md"),
  "80g-registration": cat("legal-registration.md"),
  "icegate-registration": cat("legal-registration.md"),
  "import-export-code": cat("legal-registration.md"),

  // Labour
  "pf-registration": cat("labour-law-services.md"),
  "esic-registration": cat("labour-law-services.md"),
  "gumasta-shop-act-registration": cat("labour-law-services.md"),

  // Intellectual property
  "trademark-registration": cat("intellectual-property-services.md"),
  "trademark-hearing": cat("intellectual-property-services.md"),
  "trademark-rectification": cat("intellectual-property-services.md"),
  "trademark-renewal": cat("intellectual-property-services.md"),
  "trademark-transfer": cat("intellectual-property-services.md"),
  "trademark-protection": cat("intellectual-property-services.md"),
  "logo-designing": cat("intellectual-property-services.md"),
  "copyright-registration": cat("intellectual-property-services.md"),
  "copyright-objection": cat("intellectual-property-services.md"),
  "patent-registration": cat("intellectual-property-services.md"),
  "patent-search": cat("intellectual-property-services.md"),
  "infringement-notice": cat("intellectual-property-services.md"),

  // MCA company compliance chapters
  "partnership-compliance": cat("company-compliance.md"),
  "private-company-compliance": cat("company-compliance.md"),
  "ngo-compliance": cat("company-compliance.md"),
  "llp-compliance": cat("company-compliance.md"),
  "opc-compliance": cat("company-compliance.md"),
  "private-limited-compliance": cat("company-compliance.md"),
  "nidhi-company-compliance": cat("company-compliance.md"),
  "section-8-company-compliance": cat("company-compliance.md"),

  "subsidiary-company-compliance": cat("company-compliance.md"),

  "statutory-audit": cat("company-compliance.md"),
  "tax-audit": cat("company-compliance.md"),
  bookkeeping: cat("company-compliance.md"),

  // MCA annual / event forms (same source file covers PAS-6, DPT-3, AGM, etc.)
  "gst-registration": cat("gst.md"),
  "gst-registration-for-e-commerce": cat("gst.md"),
  "additional-place-of-business-in-gst": cat("gst.md"),
  "gst-amendment": cat("gst.md"),
  "gst-return-filing": cat("gst.md"),
  "gst-return-filing-for-e-commerce": cat("gst.md"),
  "gst-annual-return-filing-gstr-9": cat("gst.md"),
  "gstr-10": cat("gst.md"),
  "gst-revocation": cat("gst.md"),
  "consent-letter-for-gst-registration": cat("gst.md"),

  // MCA — company compliance (single thematic export)
  "public-limited-company-compliance": cat("company-compliance.md"),
  "producer-company-compliance": cat("company-compliance.md"),
  "trust-compliance": cat("company-compliance.md"),
  "society-compliance": cat("company-compliance.md"),
  "microfinance-company-compliance": cat("company-compliance.md"),
  "fema-rbi-compliance": cat("company-compliance.md"),
  "statutory-registers-and-minutes-maintenance": cat("company-compliance.md"),

  // MCA — annual & half-yearly
  "msme-filling": cat("annual-half-yearly-compliance.md"),
  "pas-6": cat("annual-half-yearly-compliance.md"),
  "llp-form-11-filing": cat("annual-half-yearly-compliance.md"),
  "dpt-3-filing": cat("annual-half-yearly-compliance.md"),
  agm: cat("annual-half-yearly-compliance.md"),
  "e-voting": cat("annual-half-yearly-compliance.md"),
  "aoc-4-aoc-4-xbrl": cat("annual-half-yearly-compliance.md"),
  "mgt-7-mgt-7a": cat("annual-half-yearly-compliance.md"),
  "kyc-dir-3-kyc": cat("annual-half-yearly-compliance.md"),
  "fc-gpr-fc-trs-filings": cat("annual-half-yearly-compliance.md"),

  // MCA — winding up & related (mca-services export)
  "llp-winding-up": cat("mca-services.md"),
  "private-limited-winding-up": cat("mca-services.md"),
  "section-8-winding-up": cat("mca-services.md"),
  "nidhi-winding-up": cat("mca-services.md"),
  "indian-subsidiary-winding-up": cat("mca-services.md"),

  // MCA — special filings & changes
  "commencement-inc-20a": cat("special-compliance-services.md"),
  "change-in-llp-agreement": cat("special-compliance-services.md"),
  "authorized-capital-increase": cat("special-compliance-services.md"),
  "aoa-amendment": cat("special-compliance-services.md"),
  "moa-amendment": cat("special-compliance-services.md"),
  "name-change-company": cat("special-compliance-services.md"),
  "registered-office-change": cat("special-compliance-services.md"),
  "din-reactivation": cat("special-compliance-services.md"),
  "approval-of-director": cat("special-compliance-services.md"),
  "removal-of-director": cat("special-compliance-services.md"),
  "adt-1-filing": cat("special-compliance-services.md"),
  "dormant-status-filing": cat("special-compliance-services.md"),

  // MCA — conversions & transformations
  "proprietor-to-llp-company": cat("legal-business-transformations.md"),
  "llp-to-private-company": cat("legal-business-transformations.md"),
  "opc-to-private-limited": cat("legal-business-transformations.md"),
  "private-to-public-company": cat("legal-business-transformations.md"),

  // MCA — share capital & depository
  "isin-number": cat("share-management-solutions.md"),
  "share-transfer": cat("share-management-solutions.md"),
  "demat-of-shares": cat("share-management-solutions.md"),
  "rta-services": cat("share-management-solutions.md"),

  // Taxation — income tax (single export)
  "business-tax-filing": cat("income-tax.md"),
  "itr-1-return-filing": cat("income-tax.md"),
  "itr-2-return-filing": cat("income-tax.md"),
  "itr-3-return-filing": cat("income-tax.md"),
  "itr-4-return-filing": cat("income-tax.md"),
  "itr-5-return-filing": cat("income-tax.md"),
  "itr-6-return-filing": cat("income-tax.md"),
  "itr-7-return-filing": cat("income-tax.md"),
  "15ca-15cb-filing": cat("income-tax.md"),
  "income-tax-notice": cat("income-tax.md"),

  // Taxation — PF / ESIC / TDS / PT returns
  "pf-return-filling": cat("regulatory-return-filing.md"),
  "esic-return-filling": cat("regulatory-return-filing.md"),
  "tds-return-filing": cat("regulatory-return-filing.md"),
  "professional-tax-return-filling": cat("regulatory-return-filing.md"),

  // Removed mappings to freeLegalDocumentsSource to prevent massive text dumps on pages.
  // The pages will now only show the interactive Document Generator.

};

/** Category slug -> path segments under src/content/documents */
export const CATEGORY_APPENDIX_SEGMENTS: Record<string, string[]> = {
  "company-registration": cat("company-registration.md"),
  "intellectual-property-services": cat("intellectual-property-services.md"),
  "labour-law-services": cat("labour-law-services.md"),
  "legal-registration": cat("legal-registration.md"),
  "regulatory-license": cat("regulatory-license.md"),
  "corporate-service": cat("corporate-service.md"),
  "sebi-compliance": cat("sebi-compliance.md"),
  "audit-due-diligence": cat("audit-due-diligence.md"),
  "corporate-restructuring-compliance": cat("corporate-restructuring-compliance.md"),
  "company-compliance": cat("company-compliance.md"),
  "annual-half-yearly-compliance": cat("annual-half-yearly-compliance.md"),
  "mca-services": cat("mca-services.md"),
  "special-compliance-services": cat("special-compliance-services.md"),
  "legal-business-transformations": cat("legal-business-transformations.md"),
  "share-management-solutions": cat("share-management-solutions.md"),
  gst: cat("gst.md"),
  "income-tax": cat("income-tax.md"),
  "regulatory-return-filing": cat("regulatory-return-filing.md"),
  "free-legal-documents": cat("free-legal-documents-source.md"),
  "commercial-contracts": cat("free-legal-documents-source.md"),
  "individual-legal-services": cat("free-legal-documents-source.md"),
  "real-estate": cat("free-legal-documents-source.md"),
  notices: cat("free-legal-documents-source.md"),
  "hr-policies": cat("free-legal-documents-source.md"),
};
