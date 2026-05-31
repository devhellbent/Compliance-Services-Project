// lib/data/services/mca/company_compliance/partnership-compliance.ts

import { ServiceData } from "@/lib/types";

export const partnershipComplianceData: ServiceData = {
  title: "Partnership Compliance",
  breadcrumb: ["Home", "MCA", "Partnership Compliance"],
  description:
    "Partnership deed, PAN, ITR-5, GST, TDS, books of account, and labour-law thresholds—mapped to how your firm actually operates so nothing statutory is missed.",
  overview: `**Partnership compliance** covers the legal, tax, and regulatory duties of a firm carrying on business as a **partnership** under the **Indian Partnership Act, 1932**. At the centre is a **Partnership Deed** (or agreement) recording profit share, capital, duties, and admission or retirement of partners.

For **tax**, a partnership firm is generally treated as a **separate taxable entity**. **ITR-5** is the usual annual return; firms under **presumptive taxation** may use **ITR-4** where turnover and scheme conditions are met. Filing is **mandatory even in a loss year or with nil business**, subject to applicable exemptions.

**Registration** with the **Registrar of Firms** is **optional**. A **registered** firm gains stronger **enforceability** of contract rights and clearer standing with banks. An **unregistered** firm remains valid but faces **Section 69** disabilities (for example, limited ability to sue on firm contracts).

Beyond income tax, compliance may include **GST** (turnover thresholds), **TAN and TDS** returns if the firm deducts tax, **tax audit** when **Section 44AB** triggers, **books of account** rules, and **EPF/ESI** when employee counts and wage limits are crossed.`,
  advantages: [
    {
      icon: "Shield",
      title: "Legal standing and enforceability",
      text: "Registered firms and clean records support contracts, disputes, and third-party claims; compliance reduces exposure to interest and penalties.",
    },
    {
      icon: "Award",
      title: "Credibility with banks and clients",
      text: "Consistent ITR and GST history improves access to credit, tenders, and large commercial relationships.",
    },
    {
      icon: "BadgePercent",
      title: "Optimised tax outcomes",
      text: "Proper ITR-5 filing supports allowable deductions, including partner interest and remuneration within prescribed limits.",
    },
    {
      icon: "TrendingUp",
      title: "Easier future restructuring",
      text: "Audited, compliant books speed up conversion to a **private limited company** or **LLP** when partners scale up.",
    },
    {
      icon: "Users",
      title: "Transparency among partners",
      text: "Structured accounts and filings reduce disputes on profits, drawings, and capital balances.",
    },
  ],
  disadvantages: [
    {
      icon: "Clock",
      title: "Calendar-heavy obligations",
      text: "GST-registered firms face monthly or quarterly cycles in addition to annual tax work.",
    },
    {
      icon: "Wallet",
      title: "Cost scales with activity",
      text: "High transaction volume, tax audit, or multi-state GST increases professional and software fees.",
    },
    {
      icon: "AlertTriangle",
      title: "Unregistered firm limits",
      text: "Without Registrar registration, **Section 69** can block certain suits and set-offs—partners should understand the trade-off.",
    },
  ],
  eligibility: [
    {
      title: "Mandatory for every partnership firm (tax lens)",
      items: [
        "**PAN** for the firm for banking and filings.",
        "**Income tax return** each year—typically **ITR-5**, or **ITR-4** if eligible under **Section 44AD** and within turnover limits.",
        "**TAN** and **quarterly TDS returns** if the firm deducts TDS on rent, salary, professional fees, or other prescribed payments.",
      ],
    },
    {
      title: "Turnover-based triggers",
      items: [
        "**GST registration** if aggregate turnover exceeds **₹40 lakh** (goods) or **₹20 lakh** (services)—lower limits apply in **special category** states; thereafter **GSTR-1**, **GSTR-3B**, and **GSTR-9** (as applicable).",
        "**Tax audit (Section 44AB)** if **business** sales/turnover exceed **₹1 crore** (with a higher **₹10 crore** threshold where **cash** receipts and payments are each under **5%** of totals), or **₹50 lakh** for **profession** gross receipts.",
        "**Books of account** rules if receipts exceed **₹25 lakh** in any of **three** preceding years or income from business exceeds **₹2.5 lakh** in any of those years (verify current law for your year).",
      ],
    },
    {
      title: "Employee-based triggers",
      items: [
        "**EPF** when **20 or more** employees are engaged (subject to the Employees' Provident Funds Act scheme applicability).",
        "**ESI** when **10 or more** employees (in most states) earn wages up to **₹21,000** per month—confirm state-specific thresholds.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Firm documents",
      content: {
        title: "Core firm records",
        items: [
          "**Partnership Deed** (amended copies if partners, capital, or profit share changed).",
          "**PAN** of the firm.",
          "**Address proof** of business: ownership papers and utility bill, or rent agreement, **NOC** from owner, and utility bill.",
          "**Certificate of Registration** with the Registrar of Firms, if registered.",
          "**Bank proof**: cancelled cheque or statement showing firm name, account number, **IFSC**, and **MICR**.",
        ],
      },
    },
    {
      tabTitle: "Partner documents",
      content: {
        title: "Identity and authorisation",
        items: [
          "**PAN** and **Aadhaar** of all partners (Aadhaar often used for e-verification).",
          "**Address proof** of partners: passport, voter ID, driving licence, or recent utility bill.",
          "**Photographs** of partners.",
          "**Letter of authority** designating the partner or professional who will sign GST and other portals.",
        ],
      },
    },
    {
      tabTitle: "Financial and tax records",
      content: {
        title: "For ITR, GST, and audit",
        items: [
          "**Books of account** and ledgers; bank statements for all firm accounts.",
          "**Sales and purchase** registers, invoices, and expense vouchers.",
          "**GST returns** (GSTR-1, GSTR-3B, GSTR-9) if registered.",
          "**TDS certificates** (Form 16A / 27D) and challans if TDS applies.",
          "**Partners' capital accounts**, remuneration and interest workings as per deed and Act limits.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Year-end books and reconciliation",
      description:
        "Close ledgers, reconcile bank and GST data, and capture partner drawings, interest, and salary as per deed.",
    },
    {
      step: 2,
      title: "Determine special filings",
      description:
        "Assess **44AB** audit need, GST annual return, and TDS return completeness.",
    },
    {
      step: 3,
      title: "Prepare and file ITR-5",
      description:
        "Compute firm income, claim deductions, pay advance tax if due, and e-file by **31 July** or **31 October** (if audit applies).",
    },
    {
      step: 4,
      title: "GST and labour filings",
      description:
        "Complete periodic GST returns; complete **EPF/ESI** challans and returns when applicable.",
    },
    {
      step: 5,
      title: "Deed and Registrar updates",
      description:
        "File amended deed or Form A/C with the Registrar of Firms when partners or terms change.",
    },
  ],
  fees: [
    {
      component: "ITR-5 filing (professional)",
      fees: "₹3,000 – ₹7,000+",
      remarks: "Depends on partners, transactions, and supporting data quality.",
    },
    {
      component: "Bookkeeping and accounting",
      fees: "₹10,000 – ₹35,000+",
      remarks: "Driven mainly by monthly transaction volume.",
    },
    {
      component: "Tax audit (Section 44AB)",
      fees: "₹15,000 – ₹50,000+",
      remarks: "When turnover or professional receipts cross audit thresholds.",
    },
    {
      component: "GST compliance (annual)",
      fees: "₹8,000 – ₹25,000+",
      remarks: "Monthly vs quarterly filing and invoice volume change cost.",
    },
    {
      component: "TDS return handling",
      fees: "₹5,000 – ₹15,000+",
      remarks: "Varies with number of deductee types and challans.",
    },
    {
      component: "Government penalties",
      fees: "Variable",
      remarks:
        "Late ITR (e.g. Section 234F up to ₹5,000 in prescribed cases) and GST late fees (e.g. per-day components on GSTR-3B/GSTR-1 subject to caps)—avoid by timely filing.",
    },
  ],
  faqs: [
    {
      q: "Must we file ITR if the firm made no profit?",
      a: "Generally **yes**—partnership firms file **ITR-5** (or eligible **ITR-4**) even in a **loss** or **nil** year unless a specific exemption applies for that year.",
    },
    {
      q: "Is Registrar registration compulsory?",
      a: "No. It is **optional**, but registration improves **enforceability** of firm and partner rights and practical credibility.",
    },
    {
      q: "When does GST apply to a partnership?",
      a: "When **aggregate turnover** crosses the **prescribed threshold** for goods or services (with special rules for interstate and e-commerce). Once registered, periodic returns are mandatory.",
    },
  ],
};
