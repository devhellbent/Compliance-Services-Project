import { ServiceData } from "@/lib/types";

export const xbrlFilingData: ServiceData = {
  title: "XBRL Filing",
  breadcrumb: [
    "Home",
    "Compliance",
    "Corporate Service",
    "XBRL Filing",
  ],
  description:
    "Machine-readable MCA financial filings in XBRL—including taxonomy mapping, MCA V3 portal submission, signed PDF attachments, CSR where applicable, and validation before Form AOC-4 XBRL.",
  overview: `**XBRL (eXtensible Business Reporting Language)** is a standard digital format in which each figure in your financial statements is assigned a **tag** from an MCA **taxonomy**. The output is an XML **instance document** that passes MCA **business-rule validation** and is filed with **Form AOC-4 XBRL**.

In India, the MCA mandates XBRL for specific **classes** of companies. Commonly cited triggers include **listed** companies (and their Indian subsidiaries), companies with **paid-up capital of ₹5 crore or more**, **turnover of ₹100 crore or more**, and companies required to follow **Ind AS**. **Once eligible**, companies generally **continue** XBRL filing in subsequent years **even if** capital or turnover later falls below the threshold, to keep reporting comparable.

The process maps the balance sheet, profit and loss, cash flow (where applicable), notes, schedules, and statement of changes in equity into tags, generates the instance file, and files through the **MCA V3** portal. Recent MCA practice emphasises attaching **signed, authenticated PDFs** of the audited financials alongside the XBRL pack so tagged data matches audited books.

BharatFilings helps with **applicability** checks, **tagging**, validation runs, **CSR and subsidiary** disclosures where required, director and professional **DSC** alignment with DIN, and filing coordination.`,
  advantages: [
    {
      icon: "FileCheck",
      title: "Reduced Human Error",
      text: "XBRL software includes built-in validation rules (e.g., ensuring Total Assets = Total Liabilities). This prevents simple calculation errors before the filing even reaches the MCA.",
    },
    {
      icon: "Briefcase",
      title: "Operational Efficiency",
      text: "Once data is mapped to the taxonomy, it can be reused for different purposes—internal MIS reports, bank loan applications, and regulatory filings—without manual re-entry.",
    },
    {
      icon: "Award",
      title: "Enhanced Credibility",
      text: "Filing in a global standard format signals to international investors and partners that the company follows high-quality, transparent reporting practices.",
    },
    {
      icon: "GitCompareArrows",
      title: "Instant Comparison",
      text: "Analysts can use software to pull tags such as Net Profit for many companies instantly, without manually typing data from many different PDFs into spreadsheets.",
    },
    {
      icon: "Radar",
      title: "Early Warning Systems",
      text: "Regulators such as the MCA can run automated red-flag algorithms across thousands of filings to detect financial inconsistencies, fraud, or non-compliance in near real time.",
    },
    {
      icon: "Languages",
      title: "Multilingual Support",
      text: "XBRL tags are concept-based, not language-based. A tag for Revenue in an Indian filing can be translated and understood by an overseas investor using their local XBRL software.",
    },
    {
      icon: "LineChart",
      title: "Better Decision Making",
      text: "Investors get deeper, machine-readable data so they can run complex ratio analyses and trend tracking with minimal friction.",
    },
    {
      icon: "ScanEye",
      title: "Transparency",
      text: "It reduces fine-print ambiguity common in PDFs: every tagged item must follow the definitions in the standardized taxonomy.",
    },
  ],
  disadvantages: [
    {
      icon: "FileStack",
      title: "Dual documentation and matching burden",
      text: "Eligible companies must attach signed, authenticated PDFs of audited financials alongside the XBRL instance so tagged data matches the audited record—extra preparation and reconciliation work.",
    },
    {
      icon: "AlertTriangle",
      title: "Costly delays if deadlines are missed",
      text: "Late filing is expensive under MCA rules (commonly cited at about ₹100 per day of delay, with further exposure for persistent default); verify the latest fee table and circulars for your year.",
    },
    {
      icon: "Wallet",
      title: "Software and professional fees",
      text: "In-house XBRL software often costs about ₹15,000–₹40,000 per year; outsourcing typically runs about ₹10,000–₹25,000 per filing for small or medium firms and ₹40,000–₹1,00,000+ for large or listed companies with complex footnotes and schedules.",
    },
  ],
  eligibility: [
    {
      title: "Generally mandatory (indicative—confirm current MCA rules)",
      items: [
        "**Listed companies** on any recognised stock exchange in India, and their **Indian subsidiaries**.",
        "Companies with **paid-up capital of ₹5 crore or more**.",
        "Companies with **turnover of ₹100 crore or more**.",
        "Companies **required to use Ind AS** for financial statements.",
        "**Continuing obligation**: once in scope, XBRL filing typically continues in later years even if thresholds are later not met.",
      ],
    },
    {
      title: "Common exemptions (sector-specific reporting)",
      items: [
        "**Banking companies** (RBI-regulated).",
        "**Insurance companies** (IRDAI-regulated).",
        "**Power sector** companies in specified categories.",
        "**NBFCs** and **housing finance companies** in exempt classes as notified.",
        "Confirm each year against the latest MCA **Companies (XBRL) Rules** and general circulars.",
      ],
    },
    {
      title: "Recent documentation expectations",
      items: [
        "**Signed PDF bundle** of balance sheet, profit and loss, cash flow, schedules, and **auditor’s report** (including **CARO** where applicable) alongside the instance document.",
        "**Board’s report** and annexures such as **MGT-9** extract of annual return where part of the pack.",
        "**Notice of AGM**.",
        "**Form MR-3** (Secretarial Audit Report) when applicable.",
        "**CSR-2** and structured **CSR** disclosures in XBRL when the company is covered under **Section 135**.",
        "**Form AOC-1** for salient features of subsidiary/associate/JV financials when applicable.",
        "**DSC** mapped to **DIN** for directors and valid professional signer on the form.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Core instance document",
      content: {
        title: "What goes into the XBRL file",
        items: [
          "**Balance sheet** (standalone and **consolidated** if applicable).",
          "**Profit and loss** account.",
          "**Cash flow statement** (mandatory except for small companies; most XBRL filers are not “small”).",
          "**Notes and schedules** supporting every material line item.",
          "**Statement of changes in equity** where applicable.",
        ],
      },
    },
    {
      tabTitle: "Mandatory PDF attachments",
      content: {
        title: "Authenticated human-readable copies",
        items: [
          "**Audited financial statements** signed by directors and the auditor.",
          "**Auditor’s report** including CARO where applicable.",
          "**Board’s report** with statutory annexures.",
          "**Notice of AGM**.",
          "**Form MR-3** when the company is subject to secretarial audit.",
        ],
      },
    },
    {
      tabTitle: "Ancillary compliance inputs",
      content: {
        title: "Supporting disclosures",
        items: [
          "**Form AOC-1** for subsidiary/associate/JV highlights.",
          "**CSR-2** and CSR narrative for structured tagging where applicable.",
          "**Related party transaction** details for mapped disclosures.",
          "Prior-year **XBRL** or mapping workbook for **comparatives** and consistency.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Applicability and calendar",
      description:
        "Confirm class exemption, Ind AS status, consolidation scope, AGM date, and AOC-4 XBRL due date (including grace rules).",
    },
    {
      step: 2,
      title: "Data assembly",
      description:
        "Collate audited accounts, notes, CARO, board report, MR-3, AOC-1, CSR-2, RPT tables, and signed PDFs.",
    },
    {
      step: 3,
      title: "Tagging and review",
      description:
        "Map every disclosure to the current MCA taxonomy; resolve extensions; align comparatives; management and auditor review.",
    },
    {
      step: 4,
      title: "MCA validation",
      description:
        "Run MCA business rules and preparer checks; fix hierarchy and calculation errors until clean.",
    },
    {
      step: 5,
      title: "Certify and upload on V3",
      description:
        "Director and CA/CS/CWA signatures with DSC; upload instance and PDFs; retain acknowledgement and workpapers.",
    },
  ],
  fees: [
    {
      component: "ROC filing (AOC-4 XBRL) — illustrative slabs",
      fees: "₹200 – ₹600 per form",
      remarks:
        "Government table links fee to authorised share capital (e.g. up to ₹1 lakh ₹200; ₹1–5 lakh ₹300; higher slabs up to ₹600).",
    },
    {
      component: "Delay additional fee",
      fees: "₹100 per day (illustrative)",
      remarks:
        "Late filing after AGM due date attracts escalating MCA additional fees; persistent default can attract higher penalties—verify current rules.",
    },
    {
      component: "XBRL software (in-house)",
      fees: "₹15,000 – ₹40,000 per year (typical range)",
      remarks: "Vendor examples include DataTracks, Iris, Webtel—pricing varies by seats and modules.",
    },
    {
      component: "Outsourced tagging / professional fees",
      fees: "₹10,000 – ₹1,00,000+",
      remarks: "Smaller/medium companies often ₹10k–25k per filing; large or listed groups higher due to consolidation and footnotes.",
    },
  ],
  faqs: [
    {
      q: "If our turnover drops below ₹100 crore, can we stop XBRL?",
      a: "MCA policy has emphasised **continuing** XBRL obligation once a company becomes eligible. Always confirm against the **latest** MCA circular and your ROC class for the year.",
    },
    {
      q: "Is XBRL the same as uploading a PDF of accounts?",
      a: "No. You file a **machine-readable instance document** plus, for eligible companies, **signed PDFs** that must match the tagged data.",
    },
    {
      q: "When is the filing usually due?",
      a: "Form AOC-4 (including XBRL) is tied to **adoption of financials** and **AGM** timelines under the Companies Act; missing the statutory window triggers **additional fees**.",
    },
  ],
};
