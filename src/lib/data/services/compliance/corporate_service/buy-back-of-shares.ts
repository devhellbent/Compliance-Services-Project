import { ServiceData } from "@/lib/types";

export const buyBackOfSharesData: ServiceData = {
  title: "Buy-Back of Shares",
  breadcrumb: [
    "Home",
    "Compliance",
    "Corporate Service",
    "Buy-Back of Shares",
  ],
  description:
    "End-to-end buy-back programmes under the Companies Act—board and shareholder approvals, disclosures, escrow, extinguishment routes, and MCA filings.",
  overview: `A **buy-back of shares** is when a company repurchases its own stock from shareholders using cash reserves. Bought-back shares are typically **cancelled** or held as treasury stock, which **reduces outstanding shares** and can improve metrics such as **earnings per share (EPS)**. It is often used as an alternative or complement to dividends for returning capital to investors.

Common **purposes** include enhancing shareholder value by shrinking the share base, **efficient use of excess cash** where internal projects do not absorb surplus liquidity, **signalling** management confidence in valuation, **takeover defence** by tightening free float, and **managing dilution** from employee stock options by offsetting new issuance.

In India, buy-backs are governed by **Sections 67–70 of the Companies Act, 2013** (quantum limits, sources of funds, debt-equity tests, solvency declarations, cooling-off periods, and extinguishment). **Listed** companies must also follow **SEBI** buy-back regulations (draft letter of offer, timelines, disclosures, and exchange processes).

**Methods** commonly include **tender offer**, **open market** purchases through the stock exchange, and **odd-lot** routes as permitted. BharatFilings supports feasibility, board and shareholder resolutions, offer documentation, escrow where applicable, completion, register updates, and **ROC/SEBI** filings.`,
  advantages: [
    {
      icon: "PieChart",
      title: "Return Surplus Cash",
      text: "Uses accumulated cash for shareholder returns when reinvestment options are limited, without locking in a recurring dividend commitment.",
    },
    {
      icon: "TrendingUp",
      title: "EPS and Ratio Improvement",
      text: "Fewer outstanding shares can lift EPS and return on equity, which many analysts and investors track.",
    },
    {
      icon: "RefreshCw",
      title: "Cap Table and Ownership",
      text: "Non-sellers see their proportional stake rise; selective cancellations can help consolidate strategic ownership.",
    },
    {
      icon: "BadgePercent",
      title: "Tax and Return Flexibility",
      text: "Depending on structure and law, selling shareholders may realise gains differently than ordinary dividends; programmes can be paused or adjusted relative to cash flow.",
    },
    {
      icon: "Shield",
      title: "Signalling and Price Support",
      text: "A disciplined programme can signal confidence in fundamentals and, during volatility, provide buying support in permitted routes.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertTriangle",
      title: "Regulatory Complexity",
      text: "MCA rules plus SEBI requirements for listed companies mean strict authorisations, disclosures, and timelines—ad-hoc repurchases are not viable.",
    },
    {
      icon: "Scale",
      title: "Quantum and Solvency Limits",
      text: "Annual caps (e.g. up to 25% of paid-up capital and free reserves in a financial year), post buy-back debt-equity tests, and solvency declarations constrain size and timing.",
    },
    {
      icon: "Clock",
      title: "Tight Execution Windows",
      text: "Offer periods, payments, extinguishment within prescribed days, and cooling-off before another programme require disciplined project management.",
    },
    {
      icon: "Wallet",
      title: "Costs and Levies",
      text: "ROC and SEBI-related fees, merchant banker and depository charges, STT/stamp duty on certain routes, and professional fees add to the total cost.",
    },
  ],
  eligibility: [
    {
      title: "Authorisation",
      items: [
        "**Articles of Association** must permit a buy-back; otherwise the AoA must be amended first.",
        "**Board resolution** suffices for buy-backs up to **10%** of total paid-up capital and free reserves.",
        "A **special resolution** is required when the programme is above that threshold up to the statutory maximum (typically up to **25%** in a financial year, subject to the Act).",
        "**Explanatory statement** with the notice covering necessity, quantum, price band or methodology, and timelines.",
      ],
    },
    {
      title: "Financial and structural conditions",
      items: [
        "**25% cap**: A company cannot buy back more than **25%** of aggregate paid-up capital and free reserves in a single financial year (subject to Companies Act limits).",
        "**Debt-equity**: After completion, **ratio of aggregate secured and unsecured debt** to **paid-up share capital and free reserves** must not exceed **2:1** (or as prescribed).",
        "**Sources**: Generally from **free reserves**, **securities premium**, and **proceeds of a fresh issue** of specified instruments—not from the same issue’s proceeds if restricted.",
        "**Fully paid-up shares only**; partly paid shares cannot be bought back.",
        "**Solvency declaration** (affidavit) from directors that the company can meet liabilities and will not become insolvent within **one year** after the buy-back.",
        "**Cooling-off**: Typically **one year** after completion of a buy-back before announcing another (as per applicable rules).",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Pre–buy-back",
      content: {
        title: "Documents to authorise and launch",
        items: [
          "**AoA** extract showing power to buy back shares.",
          "**Board resolution** and, where required, **special resolution** (certified copies).",
          "**Explanatory statement** to the notice of the meeting.",
          "**Form SH-8** (Letter of Offer), filed with the ROC.",
          "**Form SH-9** (Declaration of Solvency), signed by at least **two directors**.",
          "**Auditor’s report** on permissible capital payment and financial soundness, where applicable.",
        ],
      },
    },
    {
      tabTitle: "Post–buy-back",
      content: {
        title: "Closure and compliance records",
        items: [
          "**Form SH-10** (Register of buy-back) with details of shares bought, price, and destruction/extinguishment.",
          "**Form SH-11** (Return of buy-back) with ROC within **30 days** of completion (and SEBI for listed companies).",
          "**Form SH-15** (compliance certificate) signed by **two directors** and a **Company Secretary**, where applicable.",
          "**Extinguishment certificate** or proof that securities were extinguished within **7 days** of completion, as required.",
          "**Form MGT-14** (or other filings) for filing special resolutions where applicable.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Feasibility and limits",
      description:
        "Check AoA, model quantum against 25% cap, debt-equity post buy-back, sources of funds, and listed-company SEBI requirements.",
    },
    {
      step: 2,
      title: "Board and shareholder approvals",
      description:
        "Pass board resolution; obtain special resolution and explanatory statement where required; arrange auditor comfort on permissible payment.",
    },
    {
      step: 3,
      title: "Offer documentation and filing",
      description:
        "Prepare and file SH-8, SH-9, circulate letter of offer, and complete SEBI draft filing and advertisements for listed programmes.",
    },
    {
      step: 4,
      title: "Open acceptance and settlement",
      description:
        "Run tender or exchange window, reconcile acceptances, escrow and payment to shareholders, and depository corporate actions.",
    },
    {
      step: 5,
      title: "Extinguish and close",
      description:
        "Extinguish shares, update registers, file SH-11 and related forms, issue SH-15, and align statutory books with auditors.",
    },
  ],
  fees: [
    {
      component: "Form MGT-14 (special resolution filing)",
      fees: "₹200 – ₹600 (approx.)",
      remarks: "Varies with nominal share capital slabs.",
    },
    {
      component: "Form SH-8 (Letter of Offer)",
      fees: "₹200 – ₹600 (approx.)",
      remarks: "ROC filing charges.",
    },
    {
      component: "Form SH-9 (Declaration of Solvency)",
      fees: "₹200 – ₹600 (approx.)",
      remarks: "ROC filing charges.",
    },
    {
      component: "Form SH-11 (Return of Buy-Back)",
      fees: "₹200 – ₹600 (approx.)",
      remarks: "Due within 30 days of completion; listed companies also report to SEBI.",
    },
    {
      component: "SEBI filing (listed companies)",
      fees: "Fraction of offer value (e.g. ~0.1% or as per Schedule)",
      remarks: "Draft letter of offer and regulatory fees as per SEBI Buy-Back Regulations.",
    },
    {
      component: "Merchant banker, brokerage, DP, STT, stamp duty",
      fees: "Case-based",
      remarks: "Listed programmes need merchant banker; STT ~0.1% and stamp duty ~0.015% may apply on tender route; DP charges per ISIN.",
    },
    {
      component: "Professional fees",
      fees: "On request",
      remarks: "Documentation, secretarial filings, coordination with bankers and exchanges.",
    },
  ],
  faqs: [
    {
      q: "What is the difference between a buy-back and a reduction of share capital?",
      a: "A buy-back is a **voluntary offer** to existing shareholders to sell shares back to the company within statutory limits. **Reduction of share capital** is a distinct court or RoC-led process to write down or cancel capital and follows different Sections and procedures.",
    },
    {
      q: "Can an OPC buy back shares?",
      a: "One Person Companies face **structural and legal limits** on buy-backs. We review entity type, Articles, and MCA position before advising.",
    },
    {
      q: "What extra steps apply to listed companies?",
      a: "SEBI **draft letter of offer**, disclosures, **stock exchange** coordination, merchant banker appointment, and timelines apply **in addition to** Companies Act filings.",
    },
    {
      q: "How are buy-back proceeds taxed for shareholders?",
      a: "Tax treatment has been **aligned more closely with dividend** style rules in recent changes; shareholders should confirm current **Income Tax** provisions with their tax advisor for the year of receipt.",
    },
  ],
};
