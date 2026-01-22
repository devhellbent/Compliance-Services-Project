// lib/data/services/index.ts
// Company Registration Services
import { proprietorshipData } from "./registration/company_registration/proprietorship";
import { partnershipData } from "./registration/company_registration/partnership";
import { llpData } from "./registration/company_registration/limited-liability-partnership";
import { onePersonCompanyData } from "./registration/company_registration/one-person-company";
import { privateLimitedCompanyData } from "./registration/company_registration/private-limited-company";
import { publicLimitedCompanyData } from "./registration/company_registration/public-limited-company";
import { producerCompanyData } from "./registration/company_registration/producer-company";
import { nidhiCompanyData } from "./registration/company_registration/nidhi-company";
import { section8CompanyData } from "./registration/company_registration/section-8-company";
import { trustRegistrationData } from "./registration/company_registration/trust-registration";
import { societyRegistrationData } from "./registration/company_registration/society-registration";
import { indianSubsidiaryData } from "./registration/company_registration/indian-subsidiary";
import { foreignSubsidiaryCompanyRegistrationData } from "./registration/company_registration/foreign-subsidiary-company-registration";
import { microfinanceCompanyRegistrationData } from "./registration/company_registration/microfinance-company-registration";
import { startupIndiaRegistrationData } from "./registration/company_registration/startup-india-registration";
import { digitalSignatureCertificateData } from "./registration/regulatory_license/digital-signature-certificate";
import { panRegistrationData } from "./registration/regulatory_license/pan-registration";
import { tanRegistrationData } from "./registration/regulatory_license/tan-registration";
import { dinRegistrationData } from "./registration/regulatory_license/din-registration";
import { professionalTaxRegistrationData } from "./registration/regulatory_license/professional-tax-registration";
import { tradeLicenseData } from "./registration/regulatory_license/trade-license";
import { fssaiLicenseData } from "./registration/regulatory_license/fssai-license";
import { isoRegistrationData } from "./registration/regulatory_license/iso-registration";
import { msmeUdyamRegistrationData } from "./registration/legal_registration/msme-udyam-registration";
import { darpanRegistrationData } from "./registration/legal_registration/darpan-registration";
import { a12aRegistrationData } from "./registration/legal_registration/12a-registration";
import { a80gRegistrationData } from "./registration/legal_registration/80g-registration";
import { icegateRegistrationData } from "./registration/legal_registration/icegate-registration";
import { importExportCodeData } from "./registration/legal_registration/import-export-code";
import { pfRegistrationData } from "./registration/labor_law_service/pf-registration";
import { esicRegistrationData } from "./registration/labor_law_service/esic-registration";
import { gumastaShopActRegistrationData } from "./registration/labor_law_service/gumasta-shop-act-registration";
import { trademarkRegistrationData } from "./registration/intellectual_property/trademark-registration";
import { trademarkHearingData } from "./registration/intellectual_property/trademark-hearing";
import { trademarkRectificationData } from "./registration/intellectual_property/trademark-rectification";
import { trademarkRenewalData } from "./registration/intellectual_property/trademark-renewal";
import { trademarkTransferData } from "./registration/intellectual_property/trademark-transfer";
import { trademarkProtectionData } from "./registration/intellectual_property/trademark-protection";
import { logoDesigningData } from "./registration/intellectual_property/logo-designing";
import { copyrightRegistrationData } from "./registration/intellectual_property/copyright-registration";
import { copyrightObjectionData } from "./registration/intellectual_property/copyright-objection";
import { patentRegistrationData } from "./registration/intellectual_property/patent-registration";
import { patentSearchData } from "./registration/intellectual_property/patent-search";
import { infringementNoticeData } from "./registration/intellectual_property/infringement-notice";
// MCA Compliance Services
import { llpComplianceData } from "./mca/company_compliance/llp-compliance";
import { opcComplianceData } from "./mca/company_compliance/opc-compliance";
import { privateLimitedComplianceData } from "./mca/company_compliance/private-limited-compliance";
import { nidhiCompanyComplianceData } from "./mca/company_compliance/nidhi-company-compliance";
import { section8CompanyComplianceData } from "./mca/company_compliance/section-8-company-compliance";
import { statutoryAuditData } from "./mca/company_compliance/statutory-audit";
import { taxAuditData } from "./mca/company_compliance/tax-audit";
import { bookkeepingData } from "./mca/company_compliance/bookkeeping";
import { partnershipComplianceData } from "./mca/company_compliance/partnership-compliance";
import { chargeCreationData } from "./compliance/corporate_service/charge-creation";

export const serviceData = {
  proprietorship: proprietorshipData,
  partnership: partnershipData,
  "partnership-compliance": partnershipComplianceData,
  "private-company-compliance": privateLimitedComplianceData, // Alias
  "public-limited-company-compliance": privateLimitedComplianceData, // Placeholder - using private limited as template
  "producer-company-compliance": privateLimitedComplianceData, // Placeholder
  "ngo-compliance": section8CompanyComplianceData, // Alias for Section 8
  "trust-compliance": trustRegistrationData, // Placeholder - using trust registration
  "society-compliance": societyRegistrationData, // Placeholder - using society registration
  "subsidiary-company-compliance": privateLimitedComplianceData, // Placeholder
  "microfinance-company-compliance": privateLimitedComplianceData, // Placeholder
  "limited-liability-partnership": llpData,
  "one-person-company": onePersonCompanyData,
  "private-limited-company": privateLimitedCompanyData,
  "public-limited-company": publicLimitedCompanyData,
  "producer-company": producerCompanyData,
  "nidhi-company": nidhiCompanyData,
  "nidhi-company-registration": nidhiCompanyData, // Alias for navigation
  "section-8-company": section8CompanyData,
  "section-8-ngo-company": section8CompanyData, // Alias for navigation
  "trust-registration": trustRegistrationData,
  "society-registration": societyRegistrationData,
  "indian-subsidiary": indianSubsidiaryData,
  "foreign-subsidiary-company-registration":
    foreignSubsidiaryCompanyRegistrationData,
  "microfinance-company-registration": microfinanceCompanyRegistrationData,
  "startup-india-registration": startupIndiaRegistrationData,
  "digital-signature-certificate": digitalSignatureCertificateData,
  "pan-registration": panRegistrationData,
  "tan-registration": tanRegistrationData,
  "din-registration": dinRegistrationData,
  "professional-tax-registration": professionalTaxRegistrationData,
  "trade-license": tradeLicenseData,
  "fssai-license": fssaiLicenseData,
  "iso-registration": isoRegistrationData,
  "msme-udyam-registration": msmeUdyamRegistrationData,
  "darpan-registration": darpanRegistrationData,
  "12a-registration": a12aRegistrationData,
  "80g-registration": a80gRegistrationData,
  "icegate-registration": icegateRegistrationData,
  "import-export-code": importExportCodeData,
  "pf-registration": pfRegistrationData,
  "esic-registration": esicRegistrationData,
  "gumasta-shop-act-registration": gumastaShopActRegistrationData,
  "trademark-registration": trademarkRegistrationData,
  "trademark-hearing": trademarkHearingData,
  "trademark-rectification": trademarkRectificationData,
  "trademark-renewal": trademarkRenewalData,
  "trademark-transfer": trademarkTransferData,
  "trademark-protection": trademarkProtectionData,
  "logo-designing": logoDesigningData,
  "copyright-registration": copyrightRegistrationData,
  "copyright-objection": copyrightObjectionData,
  "patent-registration": patentRegistrationData,
  "patent-search": patentSearchData,
  "infringement-notice": infringementNoticeData,
  "llp-compliance": llpComplianceData,
  "opc-compliance": opcComplianceData,
  "private-limited-compliance": privateLimitedComplianceData,
  "nidhi-company-compliance": nidhiCompanyComplianceData,
  "section-8-company-compliance": section8CompanyComplianceData,
  "statutory-audit": statutoryAuditData,
  "tax-audit": taxAuditData,
  bookkeeping: bookkeepingData,
  "charge-creation-modification-satisfaction": chargeCreationData,
  // Placeholder entries for missing services - using existing data as templates
  "fema-rbi-compliance": privateLimitedComplianceData,
  "msme-filling": msmeUdyamRegistrationData,
  "pas-6": llpComplianceData,
  "llp-form-11-filing": llpComplianceData,
  "dpt-3-filing": llpComplianceData,
  agm: llpComplianceData,
  "e-voting": llpComplianceData,
  "aoc-4-aoc-4-xbrl": privateLimitedComplianceData,
  "mgt-7-mgt-7a": privateLimitedComplianceData,
  "kyc-dir-3-kyc": dinRegistrationData,
  "fc-gpr-fc-trs-filings": privateLimitedComplianceData,
  "llp-winding-up": llpComplianceData,
  "private-limited-winding-up": privateLimitedComplianceData,
  "section-8-winding-up": section8CompanyComplianceData,
  "nidhi-winding-up": nidhiCompanyComplianceData,
  "indian-subsidiary-winding-up": indianSubsidiaryData,
  "commencement-inc-20a": privateLimitedCompanyData,
  "change-in-llp-agreement": llpData,
  "authorized-capital-increase": privateLimitedComplianceData,
  "aoa-amendment": privateLimitedComplianceData,
  "moa-amendment": privateLimitedComplianceData,
  "name-change-company": privateLimitedComplianceData,
  "registered-office-change": privateLimitedComplianceData,
  "din-reactivation": dinRegistrationData,
  "approval-of-director": dinRegistrationData,
  "removal-of-director": privateLimitedComplianceData,
  "adt-1-filing": statutoryAuditData,
  "dormant-status-filing": privateLimitedComplianceData,
  "proprietor-to-llp-company": proprietorshipData,
  "llp-to-private-company": llpData,
  "opc-to-private-limited": onePersonCompanyData,
  "private-to-public-company": privateLimitedCompanyData,
  "isin-number": privateLimitedComplianceData,
  "share-transfer": privateLimitedComplianceData,
  "demat-of-shares": privateLimitedComplianceData,
  "rta-services": privateLimitedComplianceData,
  "share-allotment-and-transfer": chargeCreationData,
  "right-issue-private-placement": chargeCreationData,
  "buy-back-of-shares": chargeCreationData,
  // Additional placeholder entries for remaining services
  "issue-of-preference-shares-convertible-debentures": chargeCreationData,
  "reduction-of-share-capital": chargeCreationData,
  "esop-structuring-and-implementation": chargeCreationData,
  "xbrl-filing": privateLimitedComplianceData,
  "compliance-with-lodr-regulations": privateLimitedComplianceData,
  "insider-trading-regulations-compliance": privateLimitedComplianceData,
  "listing-of-securities-on-stock-exchanges": publicLimitedCompanyData,
  "posh-policy-and-compliance": privateLimitedComplianceData,
  "secretarial-audit": statutoryAuditData,
  "legal-due-diligence": privateLimitedComplianceData,
  "corporate-governance": privateLimitedComplianceData,
  "internal-audit-and-process-review": taxAuditData,
  "amalgamation-merger-and-demerger-advisory": privateLimitedComplianceData,
  "drafting-of-scheme-of-arrangement": privateLimitedComplianceData,
  "nclt-filing-and-approvals": privateLimitedComplianceData,
  "policy-making": privateLimitedComplianceData,
  "business-tax-filing": taxAuditData,
  "itr-1-return-filing": taxAuditData,
  "itr-2-return-filing": taxAuditData,
  "itr-3-return-filing": taxAuditData,
  "itr-4-return-filing": taxAuditData,
  "itr-5-return-filing": taxAuditData,
  "itr-6-return-filing": taxAuditData,
  "itr-7-return-filing": taxAuditData,
  "15ca-15cb-filing": taxAuditData,
  "income-tax-notice": taxAuditData,
  "pf-return-filling": pfRegistrationData,
  "esic-return-filling": esicRegistrationData,
  "tds-return-filing": taxAuditData,
  "professional-tax-return-filling": professionalTaxRegistrationData,
  "gst-registration": tradeLicenseData,
  "gst-registration-for-e-commerce": tradeLicenseData,
  "additional-place-of-business-in-gst": tradeLicenseData,
  "gst-amendment": tradeLicenseData,
  "gst-return-filing": tradeLicenseData,
  "gst-return-filing-for-e-commerce": tradeLicenseData,
  "gst-annual-return-filing-gstr-9": tradeLicenseData,
  "gstr-10": tradeLicenseData,
  "gst-revocation": tradeLicenseData,
  // Documentation services - using generic templates
  "all-legal-documents": partnershipData,
  "commercial-rental-agreement": partnershipData,
  "experience-letter": partnershipData,
  "appointment-letter": partnershipData,
  "affidavit-format": partnershipData,
  "income-certificate": partnershipData,
  "no-objection-certificate": partnershipData,
  "salary-slip": partnershipData,
  "resignation-letter": partnershipData,
  "legal-heir-certificate": partnershipData,
  "relieving-letter": partnershipData,
  "partnership-deed": partnershipData,
  "gst-invoice": tradeLicenseData,
  "authorised-signatory-in-gst": tradeLicenseData,
  "delivery-challan": tradeLicenseData,
  "offer-letter": partnershipData,
  "consent-letter-for-gst-registration": tradeLicenseData,
  "rent-receipt": partnershipData,
  "non-disclosure-agreement-nda": partnershipData,
  "service-level-agreement": partnershipData,
  "franchise-agreement": partnershipData,
  "master-service-agreement": partnershipData,
  "shareholders-agreement": chargeCreationData,
  "joint-venture-agreement": partnershipData,
  "vendor-agreement": partnershipData,
  "consultancy-agreement": partnershipData,
  "memorandum-of-understanding": partnershipData,
  "succession-certificate": partnershipData,
  "scope-of-work-agreement": partnershipData,
  "share-purchase-agreement": chargeCreationData,
  "noncompete-agreement": partnershipData,
  "finance-agreement": partnershipData,
  "will-registration": trustRegistrationData,
  "probate-of-will": trustRegistrationData,
  "power-of-attorney": partnershipData,
  "rental-agreement": partnershipData,
  "sale-deed": partnershipData,
  "gift-deed": partnershipData,
  "rental-tenant-notice": partnershipData,
  "legal-notice": partnershipData,
  "employment-agreement": partnershipData,
  esop: chargeCreationData,
  "payroll-maintenance": partnershipData,
};
