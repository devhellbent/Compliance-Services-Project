// lib/data/services/mca/company_compliance/subsidiary-company-compliance.ts
// Source themes: DOCUMENTS_extracted/MCA/company-complance.md — Subsidiary Company Compliance

import { ServiceData } from "@/lib/types";

export const subsidiaryCompanyComplianceData: ServiceData = {
  title: "Subsidiary Company Compliance",
  breadcrumb: ["Home", "MCA", "Subsidiary Company Compliance"],
  description:
    "Annual ROC, tax, transfer pricing, and governance for Indian subsidiaries—aligned with jurisdiction, control thresholds, and materiality to the parent group.",
  overview: `**Subsidiary Company Compliance** is the fulfillment of all legal, financial, and regulatory obligations that a company, owned or controlled by a parent company, must adhere to in its operating jurisdiction. Because a subsidiary is a **separate legal entity**, it must meet local statutory requirements—annual corporate filings, board and shareholder meetings, and Registrar of Companies (RoC) submissions.

Compliance also covers **financial and tax** mandates: local audits, financial statements under applicable accounting standards, corporate income tax, indirect taxes (such as GST), and **transfer pricing** so related-party transactions with the parent are at **arm's length**.

Strong subsidiary compliance limits penalties, disputes, and reputational risk; it keeps the subsidiary in good standing and supports **transparent consolidated reporting** for the parent.`,
  advantages: [
    {
      icon: "Shield",
      title: "Liability and risk isolation",
      text: "The subsidiary's legal and financial liabilities are generally ring-fenced from the parent, subject to respecting the corporate veil.",
    },
    {
      icon: "Globe",
      title: "Local market adaptability",
      text: "The subsidiary can align with local tax, governance, labour, and sector rules, including resident-director and industry licensing where applicable.",
    },
    {
      icon: "ClipboardCheck",
      title: "Regulatory clarity and ownership",
      text: "Distinct governance makes it easier to assign compliance responsibility and run independent audits at subsidiary level.",
    },
    {
      icon: "TrendingUp",
      title: "Potential tax optimisation",
      text: "Group structures may access local incentives and consolidation benefits where law and facts support them.",
    },
  ],
  disadvantages: [
    {
      icon: "Layers",
      title: "Higher regulatory complexity",
      text: "Multiple jurisdictions mean diverging rules; consistent group policy is harder to maintain.",
    },
    {
      icon: "FileStack",
      title: "Administrative and reporting burden",
      text: "Each subsidiary maintains its own books, tax filings, and corporate governance cycles.",
    },
    {
      icon: "GitMerge",
      title: "Consolidation and transfer pricing",
      text: "Consolidated accounts and arm's-length documentation for related-party deals add cost and scrutiny.",
    },
    {
      icon: "AlertTriangle",
      title: "Veil piercing and reputational risk",
      text: "Excessive parent control or misuse of the entity can expose the group; a failure in one subsidiary can still harm group reputation.",
    },
  ],
  eligibility: [
    {
      title: "Geographic and legal basis",
      items: [
        "**Incorporation jurisdiction** defines core obligations (definition of subsidiary, board structure, RoC framework).",
        "**Operating presence** in additional states or countries can trigger extra tax, labour, and establishment filings.",
        "**Foreign investment** rules apply when the parent is overseas (FDI caps, RBI reporting, profit repatriation).",
      ],
    },
    {
      title: "Control and materiality",
      items: [
        "A **subsidiary** typically arises when the parent **controls the board** or holds **more than 50%** of voting power or share capital—driving consolidated reporting.",
        "For **listed parents**, **material subsidiary** tests (e.g. turnover or net worth vs consolidated figures) can raise board oversight and disclosure expectations.",
      ],
    },
    {
      title: "Scale and sector",
      items: [
        "**Turnover, capital, and borrowings** thresholds can mandate statutory audit and full-time KMP (e.g. CS/CFO) where applicable.",
        "**Regulated sectors** (finance, insurance, pharma, telecom) add licensing and supervisor-specific compliance.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Incorporation (one-time)",
      content: {
        title: "Parent and local entity records",
        items: [
          "Certified constitutional documents of the **parent** (certificate of incorporation, charter).",
          "**Board resolution** authorising the subsidiary, capital subscription, and authorised signatories.",
          "**KYC** for directors/subscribers, **registered office** proof, and **SPICe+** / incorporation bundle as per MCA practice.",
        ],
      },
    },
    {
      tabTitle: "Annual and event-based",
      content: {
        title: "Ongoing compliance pack",
        items: [
          "**Audited financial statements**, board and AGM minutes, **AOC-4**, **MGT-7/MGT-7A**, **ADT-1** where applicable.",
          "**DIR-3 KYC** for directors; **FC-GPR / FC-TRS** and other **RBI/FEMA** forms for foreign investment movements.",
          "Event filings for **authorised capital**, **charge**, **director change**, **registered office**, and related MCA forms.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Compliance calendar",
      description:
        "Map RoC, income-tax, GST/TDS, labour, and RBI/FEMA due dates for the subsidiary's facts.",
    },
    {
      step: 2,
      title: "Books, audit, and TP",
      description:
        "Maintain statutory books, complete statutory audit where triggered, and prepare transfer-pricing documentation for related-party transactions.",
    },
    {
      step: 3,
      title: "File and certify",
      description:
        "File MCA annual/event forms with DSC; coordinate FLA and other RBI returns where applicable.",
    },
    {
      step: 4,
      title: "Group reporting",
      description:
        "Support parent consolidation, material-subsidiary disclosures, and board packs for oversight.",
    },
  ],
  fees: [
    {
      component: "MCA annual forms (AOC-4, MGT-7/7A)",
      fees: "₹200–₹600+ each (illustrative; depends on authorised capital)",
      remarks: "Government fees via MCA portal; late fees ₹100/day per form if delayed.",
    },
    {
      component: "Professional — basic ROC compliance",
      fees: "₹10,000–₹25,000+ p.a. (typical range)",
      remarks: "Prepare and file mandatory annual forms.",
    },
    {
      component: "Professional — comprehensive",
      fees: "₹25,000–₹50,000+ p.a.",
      remarks: "May include books, financials, minutes, ITR coordination, and audit liaison.",
    },
    {
      component: "Transfer pricing / tax complexity",
      fees: "Highly variable",
      remarks: "Inter-company volume and documentation needs can add materially to annual cost.",
    },
  ],
  faqs: [
    {
      q: "Is an Indian subsidiary compliance the same as a normal private limited company?",
      a: "Core MCA annual compliance is similar for a private limited subsidiary, but foreign ownership adds FEMA/RBI reporting, and related-party dealings need transfer-pricing discipline. Listed parents may impose extra governance and disclosure tests.",
    },
    {
      q: "What drives material subsidiary status?",
      a: "For listed companies, thresholds based on turnover, net worth, or income relative to the consolidated group can classify a subsidiary as material, increasing board attention and SEBI/LODR style disclosures.",
    },
  ],
};
