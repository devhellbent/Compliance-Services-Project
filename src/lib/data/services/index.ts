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
import {
  allLegalDocumentsData,
  commercialRentalAgreementData,
  experienceLetterData,
  appointmentLetterData,
  affidavitFormatData,
  salarySlipData,
  resignationLetterData,
  legalHeirCertificateData,
  relievingLetterData,
  partnershipDeedTemplateData,
  gstInvoiceTemplateData,
  authorisedSignatoryInGstData,
  deliveryChallanData,
  offerLetterData,
  rentReceiptData,
  nonDisclosureAgreementData,
  shareholdersAgreementTemplateData,
  memorandumOfUnderstandingData,
  sharePurchaseAgreementData,
  powerOfAttorneyData,
  rentalAgreementData,
  employmentAgreementData,
  esopData,
} from "./documentations/free-legal-documents";
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
import { subsidiaryCompanyComplianceData } from "./mca/company_compliance/subsidiary-company-compliance";
import { producerCompanyComplianceData } from "./mca/company_compliance/producer-company-compliance";
import { publicLimitedCompanyComplianceData } from "./mca/company_compliance/public-limited-company-compliance";
import { trustComplianceData } from "./mca/company_compliance/trust-compliance";
import { societyComplianceData } from "./mca/company_compliance/society-compliance";
import { microfinanceCompanyComplianceData } from "./mca/company_compliance/microfinance-company-compliance";
import { statutoryRegistersAndMinutesMaintenanceData } from "./mca/company_compliance/statutory-registers-and-minutes-maintenance";
import { femaRbiComplianceData } from "./mca/company_compliance/fema-rbi-compliance";
import { chargeCreationData } from "./compliance/corporate_service/charge-creation";
import { shareAllotmentTransferData } from "./compliance/corporate_service/share-allotment-transfer";
import { rightIssuePrivatePlacementData } from "./compliance/corporate_service/right-issue-private-placement";
import { buyBackOfSharesData } from "./compliance/corporate_service/buy-back-of-shares";
import { issuePreferenceConvertibleDebenturesData } from "./compliance/corporate_service/issue-preference-convertible-debentures";
import { reductionOfShareCapitalData } from "./compliance/corporate_service/reduction-of-share-capital";
import { esopStructuringImplementationData } from "./compliance/corporate_service/esop-structuring-implementation";
import { xbrlFilingData } from "./compliance/corporate_service/xbrl-filing";
import { EXTRA_COMPLIANCE_PAGES } from "./compliance/extended-compliance-services";
// GST Services
import { gstRegistrationData } from "./taxation/gst/gst-registration";
import { gstRegistrationForEcommerceData } from "./taxation/gst/gst-registration-for-ecommerce";
import { additionalPlaceOfBusinessData } from "./taxation/gst/additional-place-of-business";
import { gstAmendmentData } from "./taxation/gst/gst-amendment";
import { gstReturnFilingData } from "./taxation/gst/gst-return-filing";
import { gstReturnFilingForEcommerceData } from "./taxation/gst/gst-return-filing-for-e-commerce";
import { gstAnnualReturnGstr9Data } from "./taxation/gst/gst-annual-return-gstr-9";
import { gstr10Data } from "./taxation/gst/gstr-10";
import { gstRevocationData } from "./taxation/gst/gst-revocation";
import { consentLetterForGstData } from "./taxation/gst/consent-letter-for-gst-registration";
import { NAV_DOCUMENT_BACKED_SERVICE_DATA } from "./nav-document-backed-pages";
// Income Tax Services
import { itr1ReturnFilingData } from "./taxation/income_tax/itr-1-return-filing";
import { itr2ReturnFilingData } from "./taxation/income_tax/itr-2-return-filing";
import { itr3ReturnFilingData } from "./taxation/income_tax/itr-3-return-filing";
import { itr4ReturnFilingData } from "./taxation/income_tax/itr-4-return-filing";
import { itr5ReturnFilingData } from "./taxation/income_tax/itr-5-return-filing";
import { itr6ReturnFilingData } from "./taxation/income_tax/itr-6-return-filing";
import { itr7ReturnFilingData } from "./taxation/income_tax/itr-7-return-filing";
import { businessTaxFilingData } from "./taxation/income_tax/business-tax-filing";
import { filing15ca15cbData } from "./taxation/income_tax/15ca-15cb-filing";
import { incomeTaxNoticeData } from "./taxation/income_tax/income-tax-notice";
// Regulatory Return Filing Services
import { pfReturnFillingData } from "./taxation/regulatory_returns/pf-return-filling";
import { esicReturnFillingData } from "./taxation/regulatory_returns/esic-return-filling";
import { tdsReturnFilingData } from "./taxation/regulatory_returns/tds-return-filing";
import { professionalTaxReturnFillingData } from "./taxation/regulatory_returns/professional-tax-return-filling";
// MCA Annual & Half-Yearly Compliance
import { msmeFillingData } from "./mca/annual_compliance/msme-filling";
import { pas6Data } from "./mca/annual_compliance/pas-6";
import { llpForm11FilingData } from "./mca/annual_compliance/llp-form-11-filing";
import { dpt3FilingData } from "./mca/annual_compliance/dpt-3-filing";
import { agmData } from "./mca/annual_compliance/agm";
import { eVotingData } from "./mca/annual_compliance/e-voting";
import { aoc4FilingData } from "./mca/annual_compliance/aoc-4-aoc-4-xbrl";
import { mgt7Data } from "./mca/annual_compliance/mgt-7-mgt-7a";
import { kycDir3KycData } from "./mca/annual_compliance/kyc-dir-3-kyc";
import { fcGprFcTrsFilingsData } from "./mca/annual_compliance/fc-gpr-fc-trs-filings";
// MCA Special Compliance Services
import { commencementInc20aData } from "./mca/special_compliance/commencement-inc-20a";
import { changeInLlpAgreementData } from "./mca/special_compliance/change-in-llp-agreement";
import { authorizedCapitalIncreaseData } from "./mca/special_compliance/authorized-capital-increase";
import { aoaAmendmentData } from "./mca/special_compliance/aoa-amendment";
import { moaAmendmentData } from "./mca/special_compliance/moa-amendment";
import { nameChangeCompanyData } from "./mca/special_compliance/name-change-company";
import { registeredOfficeChangeData } from "./mca/special_compliance/registered-office-change";
import { dinReactivationData } from "./mca/special_compliance/din-reactivation";
import { approvalOfDirectorData } from "./mca/special_compliance/approval-of-director";
import { removalOfDirectorData } from "./mca/special_compliance/removal-of-director";
import { adt1FilingData } from "./mca/special_compliance/adt-1-filing";
import { dormantStatusFilingData } from "./mca/special_compliance/dormant-status-filing";
// MCA Share Management Solutions
import { isinNumberData } from "./mca/share_management/isin-number";
import { shareTransferData } from "./mca/share_management/share-transfer";
import { dematOfSharesData } from "./mca/share_management/demat-of-shares";
import { rtaServicesData } from "./mca/share_management/rta-services";
// MCA Legal Business Transformations
import { proprietorToLlpCompanyData } from "./mca/transformations/proprietor-to-llp-company";
import { llpToPrivateCompanyData } from "./mca/transformations/llp-to-private-company";
import { opcToPrivateLimitedData } from "./mca/transformations/opc-to-private-limited";
import { privateToPublicCompanyData } from "./mca/transformations/private-to-public-company";
// MCA Winding Up Services
import { llpWindingUpData } from "./mca/winding_up/llp-winding-up";
import { privateLimitedWindingUpData } from "./mca/winding_up/private-limited-winding-up";
import { nidhiWindingUpData } from "./mca/winding_up/nidhi-winding-up";
import { section8WindingUpData } from "./mca/winding_up/section-8-winding-up";
import { indianSubsidiaryWindingUpData } from "./mca/winding_up/indian-subsidiary-winding-up";

export const serviceData = {
  proprietorship: proprietorshipData,
  partnership: partnershipData,
  "partnership-compliance": partnershipComplianceData,
  "subsidiary-company-compliance": subsidiaryCompanyComplianceData,
  "private-company-compliance": privateLimitedComplianceData, // Alias
  "ngo-compliance": section8CompanyComplianceData, // Alias for Section 8
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
  "producer-company-compliance": producerCompanyComplianceData,
  "public-limited-company-compliance": publicLimitedCompanyComplianceData,
  "trust-compliance": trustComplianceData,
  "society-compliance": societyComplianceData,
  "microfinance-company-compliance": microfinanceCompanyComplianceData,
  "statutory-registers-and-minutes-maintenance": statutoryRegistersAndMinutesMaintenanceData,
  "fema-rbi-compliance": femaRbiComplianceData,
  "charge-creation-modification-and-satisfaction": chargeCreationData,
  "charge-creation-modification-satisfaction": chargeCreationData,
  "buyback-of-shares": buyBackOfSharesData,
  "share-allotment-and-transfer": shareAllotmentTransferData,
  "right-issue-private-placement": rightIssuePrivatePlacementData,
  "buy-back-of-shares": buyBackOfSharesData,
  "issue-of-preference-shares-convertible-debentures":
    issuePreferenceConvertibleDebenturesData,
  "reduction-of-share-capital": reductionOfShareCapitalData,
  "esop-structuring-and-implementation": esopStructuringImplementationData,
  "xbrl-filing": xbrlFilingData,
  ...EXTRA_COMPLIANCE_PAGES,
  // Documentation services - mapped only when source exists in DOCUMENTS
  "all-legal-documents": allLegalDocumentsData,
  "commercial-rental-agreement": commercialRentalAgreementData,
  "experience-letter": experienceLetterData,
  "appointment-letter": appointmentLetterData,
  "affidavit-format": affidavitFormatData,
  "salary-slip": salarySlipData,
  "resignation-letter": resignationLetterData,
  "legal-heir-certificate": legalHeirCertificateData,
  "relieving-letter": relievingLetterData,
  "partnership-deed": partnershipDeedTemplateData,
  "gst-invoice": gstInvoiceTemplateData,
  "authorised-signatory-in-gst": authorisedSignatoryInGstData,
  "delivery-challan": deliveryChallanData,
  "offer-letter": offerLetterData,
  "rent-receipt": rentReceiptData,
  "non-disclosure-agreement-nda": nonDisclosureAgreementData,
  "shareholders-agreement": shareholdersAgreementTemplateData,
  "memorandum-of-understanding": memorandumOfUnderstandingData,
  "share-purchase-agreement": sharePurchaseAgreementData,
  "power-of-attorney": powerOfAttorneyData,
  "rental-agreement": rentalAgreementData,
  "employment-agreement": employmentAgreementData,
  esop: esopData,
  // GST Services
  "gst-registration": gstRegistrationData,
  "gst-registration-for-e-commerce": gstRegistrationForEcommerceData,
  "additional-place-of-business-in-gst": additionalPlaceOfBusinessData,
  "gst-amendment": gstAmendmentData,
  "gst-return-filing": gstReturnFilingData,
  "gst-return-filing-for-e-commerce": gstReturnFilingForEcommerceData,
  "gst-annual-return-filing-gstr-9": gstAnnualReturnGstr9Data,
  "gstr-10": gstr10Data,
  "gst-revocation": gstRevocationData,
  "consent-letter-for-gst-registration": consentLetterForGstData,
  // Income Tax Services
  "itr-1-return-filing": itr1ReturnFilingData,
  "itr-2-return-filing": itr2ReturnFilingData,
  "itr-3-return-filing": itr3ReturnFilingData,
  "itr-4-return-filing": itr4ReturnFilingData,
  "itr-5-return-filing": itr5ReturnFilingData,
  "itr-6-return-filing": itr6ReturnFilingData,
  "itr-7-return-filing": itr7ReturnFilingData,
  "business-tax-filing": businessTaxFilingData,
  "15ca-15cb-filing": filing15ca15cbData,
  "income-tax-notice": incomeTaxNoticeData,
  // Regulatory Return Filing
  "pf-return-filling": pfReturnFillingData,
  "esic-return-filling": esicReturnFillingData,
  "tds-return-filing": tdsReturnFilingData,
  "professional-tax-return-filling": professionalTaxReturnFillingData,
  // MCA Annual & Half-Yearly Compliance
  "msme-filling": msmeFillingData,
  "pas-6": pas6Data,
  "llp-form-11-filing": llpForm11FilingData,
  "dpt-3-filing": dpt3FilingData,
  "agm": agmData,
  "e-voting": eVotingData,
  "aoc-4-aoc-4-xbrl": aoc4FilingData,
  "mgt-7-mgt-7a": mgt7Data,
  "kyc-dir-3-kyc": kycDir3KycData,
  "fc-gpr-fc-trs-filings": fcGprFcTrsFilingsData,
  // MCA Special Compliance
  "commencement-inc-20a": commencementInc20aData,
  "change-in-llp-agreement": changeInLlpAgreementData,
  "authorized-capital-increase": authorizedCapitalIncreaseData,
  "aoa-amendment": aoaAmendmentData,
  "moa-amendment": moaAmendmentData,
  "name-change-company": nameChangeCompanyData,
  "registered-office-change": registeredOfficeChangeData,
  "din-reactivation": dinReactivationData,
  "approval-of-director": approvalOfDirectorData,
  "removal-of-director": removalOfDirectorData,
  "adt-1-filing": adt1FilingData,
  "dormant-status-filing": dormantStatusFilingData,
  // MCA Share Management Solutions
  "isin-number": isinNumberData,
  "share-transfer": shareTransferData,
  "demat-of-shares": dematOfSharesData,
  "rta-services": rtaServicesData,
  // MCA Legal Business Transformations
  "proprietor-to-llp-company": proprietorToLlpCompanyData,
  "llp-to-private-company": llpToPrivateCompanyData,
  "opc-to-private-limited": opcToPrivateLimitedData,
  "private-to-public-company": privateToPublicCompanyData,
  // MCA Winding Up Services
  "llp-winding-up": llpWindingUpData,
  "private-limited-winding-up": privateLimitedWindingUpData,
  "nidhi-winding-up": nidhiWindingUpData,
  "section-8-winding-up": section8WindingUpData,
  "indian-subsidiary-winding-up": indianSubsidiaryWindingUpData,
  ...NAV_DOCUMENT_BACKED_SERVICE_DATA,
};
