import { ServiceData } from "@/lib/types";
import { buildComplianceServiceData } from "./compliance-service-factory";
import {
  amalgamationMergerExtras,
  corporateGovernanceExtras,
  draftingSchemeExtras,
  insiderTradingPitExtras,
  internalAuditProcessExtras,
  legalDueDiligenceExtras,
  listingSecuritiesExtras,
  lodrRegulationsExtras,
  ncltFilingExtras,
  policyMakingCorporateExtras,
  poshPolicyExtras,
  secretarialAuditExtras,
} from "./compliance-extended-article-bodies";

export const complianceWithLodrData: ServiceData = buildComplianceServiceData({
  title: "Compliance with LODR Regulations",
  subCategory: "SEBI Compliance",
  description:
    "Calendarised LODR disclosures, committee governance, affirmation cycles, exchange coordination, and annual secretarial artefacts.",
  overview: `**SEBI (Listing Obligations and Disclosure Requirements)** require listed entities to honour periodic disclosures, prescribe board committee structures, maintain archival policies, govern related-party transactions, underpin insider-trading controls, streamline shareholder communication, affirm compliance, satisfy sustainability linkages wherever applicable, escalate material events responsibly.

BharatFilings helps design lodgement-ready policies, affirmation workflows, liaison with exchanges, board packs, escalation matrices—keeping artefacts aligned as circulars evolve.`,
  ...lodrRegulationsExtras,
});

export const insiderTradingRegulationsComplianceData: ServiceData =
  buildComplianceServiceData({
    title: "Insider Trading Regulations Compliance",
    subCategory: "SEBI Compliance",
    description:
      "Organisational insider-trading charters, UPSI workflows, disclosures, blackout windows and staff training anchored in PIT Regulations.",
    overview: `**SEBI’s Prohibition of Insider Trading Regulations** hinge on spotting UPSIs early, ring-fencing unpublished information, recording board-approved policies, supervising designated persons, planning trading windows when permitted, furnishing digital disclosures, escalating grievances, backing controls with audits.

Professionals BharatFilings deliver policy drafting, enablement workshops, coordination with HR and IT stakeholders, interplay with LODR affirmation cycles.`,
    ...insiderTradingPitExtras,
  });

export const listingOfSecuritiesData: ServiceData = buildComplianceServiceData({
  title: "Listing of Securities on Stock Exchanges",
  subCategory: "SEBI Compliance",
  description:
    "Exchange listing—from issue closure, allotment reconciliation, ROC filings—through ceremonial trading approvals.",
  overview: `Transitioning freshly issued securities to trading demands Companies Act choreography, underwriting discipline, allotment validation, ROC returns, ICDR disclaimers where applicable, stock exchange filings, allotment reconciliations, listing approvals, compliance officer interplay.

Experts coordinate exchange dialogue, allotment books, statutory filings, stabilization mechanisms wherever mandated.`,
  ...listingSecuritiesExtras,
});

export const poshPolicyComplianceData: ServiceData = buildComplianceServiceData({
  title: "Posh Policy & Compliance",
  subCategory: "SEBI Compliance",
  description:
    "ICC constitution, annual sensitisation, inquiry protocols, filings to district officers—anchored to the Sexual Harassment of Women at Workplace Act.",
  overview: `Workplace **PoSH programmes** require impartial Internal Committees, sensitisation, documented inquiries, district officer filings, escalation alignment with HR policies, and board disclosures. BharatFilings helps with policy drafting, training calendars, investigation support, and dossier maintenance.`,
  ...poshPolicyExtras,
});

export const secretarialAuditComplianceData: ServiceData =
  buildComplianceServiceData({
    title: "Secretarial Audit",
    subCategory: "Audit & Due Diligence",
    description:
      "Independent secretarial audit support—documentation readiness, PCS coordination, remediation plans, board disclosures.",
    overview: `**Secretarial audits** validate conformity with Companies law—board/general meeting discipline, ROC filings, statutory registers, charters, interplay with filings around ESOP allotments foreign investment reporting.

PCS issues statutory reports observations remediation BharatFilings aligns documentation remediation board briefing.`,
    ...secretarialAuditExtras,
  });

export const legalDueDiligenceData: ServiceData = buildComplianceServiceData({
  title: "Legal Due Diligence",
  subCategory: "Audit & Due Diligence",
  description:
      "Transaction diligence bundles contract reviews litigation scans IP diligence labour permits licences corporate housekeeping.",
    overview: `**Legal diligence** inventories agreements disputes assets licences employment corporate filings authorisations delivering red-flag summaries SPA conditions bridging opinions stakeholder workshops.

Experts coordinate advisers NCLT SEBI CCI interplay data rooms.`,
  ...legalDueDiligenceExtras,
});

export const corporateGovernanceData: ServiceData = buildComplianceServiceData({
  title: "Corporate Governance",
  subCategory: "Audit & Due Diligence",
  description:
      "Board charters, committee frameworks, investor grievances, whistle blower pathways, affirmation packs.",
  overview: `Corporate governance harmonises independence mandates committee charters whistle mechanisms diversity charters investor grievance AGM interplay webcasting affirmation artefacts ESG interplay.

Consultants blueprint policy suites benchmarking updates interplay secretarial artefacts.`,
  ...corporateGovernanceExtras,
});

export const internalAuditProcessReviewData: ServiceData =
  buildComplianceServiceData({
    title: "Internal Audit & Process Review",
    subCategory: "Audit & Due Diligence",
    description:
      "Risk-based audits, IFC testing, ERP control mapping, remediation tracking for audit committees.",
    overview: `**Internal audits** translate risk charters into walk-throughs observations sampling remediation trackers audit committee reporting IFC interplay SOX style controls analytics dashboards closure dossiers.`,
    ...internalAuditProcessExtras,
  });

export const amalgamationMergerDemergerAdvisoryData: ServiceData =
  buildComplianceServiceData({
    title: "Amalgamation, Merger & Demerger Advisory",
    subCategory: "Corporate Restructuring Compliance",
    description:
      "Structuring tribunal-driven schemes valuations creditor timelines exchange interplay implementation choreography.",
    overview: `Corporate combinations hinge valuation fairness explanatory statements tribunal hearings creditor classes stamping cross-border interplay implementation milestones BharatFilings partners structuring bankers valuers counsels.`,
    ...amalgamationMergerExtras,
  });

export const draftingSchemeOfArrangementData: ServiceData =
  buildComplianceServiceData({
    title: "Drafting of Scheme of Arrangement",
    subCategory: "Corporate Restructuring Compliance",
    description:
      "Binding scheme drafts swap ratios creditor protections tax interplay ROC interplay explanatory statements.",
    overview: `Scheme drafts align swap ratios employee safeguards tax stamp disclosures tribunal expectations ROC filings BharatFilings coordinates valuers tax counsel drafting reviews.`,
    ...draftingSchemeExtras,
  });

export const ncltFilingApprovalsData: ServiceData = buildComplianceServiceData({
  title: "NCLT Filing & Approvals",
  subCategory: "Corporate Restructuring Compliance",
  description:
      "E-filing pleadings affidavits hearing strategy orders implementation interplay ROC interplay.",
    overview: `National Company Law Tribunal matters cover pleadings affidavits condonation scheme hearings implementation certificates ROC updates BharatFilings manages filings representation milestones.`,
  ...ncltFilingExtras,
});

export const policyMakingComplianceData: ServiceData =
  buildComplianceServiceData({
    title: "Policy Making",
    subCategory: "Corporate Restructuring Compliance",
    description:
      "Governance manuals—delegation IFC charters codes conduct whistle interplay trainings audit evidence.",
    overview: `Governance policy suites combine whistle related-party delegation IFC codes conduct PoSH training collateral audit evidence versioning calendars board workshops BharatFilings delivers adoption ready manuals.`,
    ...policyMakingCorporateExtras,
  });

export const EXTRA_COMPLIANCE_PAGES: Record<string, ServiceData> = {
  "compliance-with-lodr-regulations": complianceWithLodrData,
  "insider-trading-regulations-compliance": insiderTradingRegulationsComplianceData,
  "listing-of-securities-on-stock-exchanges": listingOfSecuritiesData,
  "posh-policy-and-compliance": poshPolicyComplianceData,
  "secretarial-audit": secretarialAuditComplianceData,
  "legal-due-diligence": legalDueDiligenceData,
  "corporate-governance": corporateGovernanceData,
  "internal-audit-and-process-review": internalAuditProcessReviewData,
  "amalgamation-merger-and-demerger-advisory":
    amalgamationMergerDemergerAdvisoryData,
  "drafting-of-scheme-of-arrangement": draftingSchemeOfArrangementData,
  "nclt-filing-and-approvals": ncltFilingApprovalsData,
  "policy-making": policyMakingComplianceData,
};

export const SEBI_COMPLIANCE_NAV_ITEMS = [
  {
    name: "Compliance with LODR Regulations",
    path: "/services/compliance-with-lodr-regulations",
  },
  {
    name: "Insider Trading Regulations Compliance",
    path: "/services/insider-trading-regulations-compliance",
  },
  {
    name: "Listing of Securities on Stock Exchanges",
    path: "/services/listing-of-securities-on-stock-exchanges",
  },
  {
    name: "Posh Policy & Compliance",
    path: "/services/posh-policy-and-compliance",
  },
] as const;

export const AUDIT_DUE_DILIGENCE_NAV_ITEMS = [
  { name: "Secretarial Audit", path: "/services/secretarial-audit" },
  { name: "Legal Due Diligence", path: "/services/legal-due-diligence" },
  { name: "Corporate Governance", path: "/services/corporate-governance" },
  {
    name: "Internal Audit & Process Review",
    path: "/services/internal-audit-and-process-review",
  },
] as const;

export const CORPORATE_RESTRUCTURING_NAV_ITEMS = [
  {
    name: "Amalgamation, Merger & Demerger Advisory",
    path: "/services/amalgamation-merger-and-demerger-advisory",
  },
  {
    name: "Drafting of Scheme of Arrangement",
    path: "/services/drafting-of-scheme-of-arrangement",
  },
  {
    name: "NCLT Filing & Approvals",
    path: "/services/nclt-filing-and-approvals",
  },
  { name: "Policy Making", path: "/services/policy-making" },
] as const;
