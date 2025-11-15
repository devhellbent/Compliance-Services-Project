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
// MCA Compliance Services
import { llpComplianceData } from "./mca/company_compliance/llp-compliance";
import { opcComplianceData } from "./mca/company_compliance/opc-compliance";
import { privateLimitedComplianceData } from "./mca/company_compliance/private-limited-compliance";
import { nidhiCompanyComplianceData } from "./mca/company_compliance/nidhi-company-compliance";
import { section8CompanyComplianceData } from './mca/company_compliance/section-8-company-compliance';
import { statutoryAuditData } from './mca/company_compliance/statutory-audit';
import { taxAuditData } from './mca/company_compliance/tax-audit';
import { bookkeepingData } from './mca/company_compliance/bookkeeping';

export const serviceData = {
  proprietorship: proprietorshipData,
  partnership: partnershipData,
  "limited-liability-partnership": llpData,
  "one-person-company": onePersonCompanyData,
  "private-limited-company": privateLimitedCompanyData,
  "public-limited-company": publicLimitedCompanyData,
  "producer-company": producerCompanyData,
  "nidhi-company": nidhiCompanyData,
  "section-8-company": section8CompanyData,
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
  "llp-compliance": llpComplianceData,
  "opc-compliance": opcComplianceData,
  "private-limited-compliance": privateLimitedComplianceData,
  "nidhi-company-compliance": nidhiCompanyComplianceData,
  "section-8-company-compliance": section8CompanyComplianceData,
  "statutory-audit": statutoryAuditData,
  "tax-audit": taxAuditData,
  "bookkeeping": bookkeepingData,
};
