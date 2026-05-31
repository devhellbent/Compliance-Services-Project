/**
 * Full article bodies for extended compliance pages, aligned to
 * DOCUMENTS_extracted/Compliance/sebi-compliance.md,
 * audit-due-diligence.md, and corporate-restructuring-compliance.md
 * (advantages, disadvantages, eligibility, documents, process, fees, FAQs).
 */
import type { ServiceData } from "@/lib/types";

export const lodrRegulationsExtras: Partial<ServiceData> = {
  advantages: [
    {
      icon: "Award",
      title: "Enhanced market credibility",
      text: "Meeting LODR deadlines (including 12–24 hour material-event disclosure) builds a reliability premium that supports valuation versus less transparent peers.",
    },
    {
      icon: "TrendingUp",
      title: "Access to capital",
      text: "Institutional investors (FIIs, mutual funds) favour strong governance scores, improving access to FPOs, rights issues, and debt markets.",
    },
    {
      icon: "Shield",
      title: "Avoidance of steep penalties",
      text: "Reduces exposure to exchange fines (often ₹5,000–₹10,000 per day for common defaults), promoter share freeze, or trading suspension.",
    },
    {
      icon: "Building2",
      title: "Operational integrity",
      text: "Mandatory committees (audit, risk, etc.) surface financial and operational risks earlier than informal management-only oversight.",
    },
    {
      icon: "Users",
      title: "Level playing field for investors",
      text: "Retail investors receive price-sensitive information at the same time as large funds; RPT rules protect minority interests.",
    },
    {
      icon: "LineChart",
      title: "Reduced rumour-driven volatility",
      text: "Rumour-verification requirements for top-ranked entities dampen crashes from unverified social or media speculation.",
    },
    {
      icon: "Table",
      title: "Comparable disclosure",
      text: "Standardised formats (including XBRL where applicable) support apples-to-apples peer analysis.",
    },
  ],
  disadvantages: [
    {
      icon: "Wallet",
      title: "Recurring listing and certification cost",
      text: "Annual listing fees scale with paid-up capital; commonly listed BSE/NSE fees run from lakhs to above ₹11 lakh for very large capital, plus incremental slabs.",
    },
    {
      icon: "Clock",
      title: "Continuous disclosure workload",
      text: "Quarterly packs (Reg. 33, 31, 27, 13, 32), annual report suite, secretarial compliance report, and event-driven filings compress legal and finance calendars.",
    },
    {
      icon: "AlertTriangle",
      title: "Automatic exchange penalties",
      text: "Missed results, shareholding pattern, board composition, or board-meeting gap rules trigger per-day fines without negotiation.",
    },
    {
      icon: "Eye",
      title: "Public scrutiny of governance gaps",
      text: "Woman independent director, chairperson, BRSR, and top-cap quorum rules expose structural weaknesses to markets and regulators.",
    },
  ],
  eligibility: [
    {
      title: "Who must comply (Regulation 3 triggers)",
      items: [
        "Entities with **listed designated securities** on a recognised exchange (main board, SME, or innovators growth platform).",
        "**Non-convertible** debt or redeemable preference securities that are listed.",
        "**Securitised debt instruments** including security receipts.",
        "**Listed mutual fund** units and **Indian Depository Receipts** where applicable.",
      ],
    },
    {
      title: "Corporate governance chapters (Regs 17–27) exemptions",
      items: [
        "Smaller listed entities may be **exempt from full governance chapters** if **paid-up equity capital** does not exceed **₹10 crore** **and** **net worth** does not exceed **₹25 crore** (both conditions).",
        "**High-value debt listed entities** (NCDs outstanding **₹500 crore** or more from 1 Apr 2025) must comply with **full corporate governance** regardless of equity size.",
      ],
    },
    {
      title: "Market-cap-based add-ons (review each year)",
      items: [
        "**Top 500**: at least one **independent woman director** and non-executive chairperson requirements as prescribed.",
        "**Top 1,000**: **BRSR** and minimum **six directors** where applicable.",
        "**Top 2,000**: stricter **board meeting quorum** (e.g. three directors or one-third including an independent director) as per current circulars.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Quarterly",
      content: {
        title: "Quarterly compliance documents",
        items: [
          "**Financial results** (standalone and consolidated) with limited review or audit report (**Reg. 33**).",
          "**Shareholding pattern** in specified format including XBRL (**Reg. 31**).",
          "**Corporate governance report** signed by CEO or compliance officer (**Reg. 27**).",
          "**Investor complaints** statement (**Reg. 13**).",
          "**Statement of deviation/variation** in use of funds (**Reg. 32**).",
        ],
      },
    },
    {
      tabTitle: "Annual",
      content: {
        title: "Annual compliance documents",
        items: [
          "**Audited annual financials**.",
          "**Annual report** with board report, MD&A, and **BRSR** for applicable top companies (**Reg. 34**).",
          "**Secretarial audit report** Form **MR-3** (**Reg. 24A**).",
          "**Annual secretarial compliance report** (PCS certification on SEBI regulations).",
          "**CEO/CFO certification** on financial statement integrity (**Reg. 17(8)**).",
        ],
      },
    },
    {
      tabTitle: "Event-based",
      content: {
        title: "Immediate and meeting-linked disclosures",
        items: [
          "**Prior intimation** of board meetings for dividend, buy-back, or results items (**Reg. 29**).",
          "**Material event** disclosure within **12–24 hours** (**Reg. 30**).",
          "**Outcome of board meeting** within **30 minutes** of conclusion.",
          "**Voting results** after AGM/EGM (**Reg. 44**).",
          "**Reg. 40(9)** and **Reg. 7(3)** certificates on transfers and RTA facilities.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Applicability & calendar",
      description:
        "Map entity class, governance exemptions, top-cap add-ons, and exchange due dates for the financial year.",
    },
    {
      step: 2,
      title: "Quarterly disclosure factory",
      description:
        "Prepare results, XBRL where required, shareholding pattern, governance report, complaints, and deviation statements.",
    },
    {
      step: 3,
      title: "Annual report & certifications",
      description:
        "Collate MR-3, ASC report, CEO/CFO certification, BRSR, and annual financial statements for board and shareholder approval.",
    },
    {
      step: 4,
      title: "Event playbook",
      description:
        "Run materiality assessment, rumour verification where applicable, and rapid disclosure templates for M&A, credit, and leadership changes.",
    },
    {
      step: 5,
      title: "Exchange lodgement & evidence",
      description:
        "File on BSE/NSE portals, retain acknowledgements, and reconcile penalty dashboards to zero.",
    },
  ],
  fees: [
    {
      component: "Annual listing fee (illustrative — paid-up equity)",
      fees: "₹2.85L – ₹12.5L+ commonly listed",
      remarks:
        "Slabs increase by capital; dual-listed companies use commonly listed rates; incremental fees above ₹1,000 crore paid-up capital.",
    },
    {
      component: "Delay penalties (exchange SOP)",
      fees: "₹2,000 – ₹10,000+ per day / instance",
      remarks:
        "Examples: results ₹5k/day; shareholding ₹2k/day; board composition ₹5k/day; late board meeting gap ₹10k/instance—verify current circular.",
    },
    {
      component: "MR-3 secretarial audit",
      fees: "₹50,000 – ₹5,00,000+",
      remarks: "PCS fees scale with size and subsidiaries.",
    },
    {
      component: "Quarterly XBRL preparation",
      fees: "₹15,000 – ₹40,000 per quarter",
      remarks: "Validation and tagging effort for listed financials.",
    },
  ],
  faqs: [
    {
      q: "Do SME-listed companies follow the same LODR?",
      a: "Yes, **designated securities** on a recognised exchange trigger LODR; **governance chapter** exemptions depend on **paid-up capital and net worth** tests and debt-listed classes.",
    },
    {
      q: "What if we miss a disclosure deadline?",
      a: "Stock exchanges levy **automatic fines**; repeated defaults can escalate to trading restrictions or other SEBI action.",
    },
  ],
};

export const insiderTradingPitExtras: Partial<ServiceData> = {
  advantages: [
    {
      icon: "Award",
      title: "Reputation and trust premium",
      text: "Strict PIT compliance supports valuation—investors pay more where insider abuse is unlikely.",
    },
    {
      icon: "Database",
      title: "Operational clarity via SDD",
      text: "Structured Digital Database logging of UPSI reduces accidental leaks and enforces need-to-know access.",
    },
    {
      icon: "Calendar",
      title: "Safe harbour trading plans",
      text: "Pre-filed trading plans let designated persons transact without ad-hoc conflict if conditions and timelines are met.",
    },
    {
      icon: "Shield",
      title: "Avoid catastrophic penalties",
      text: "Fines up to **₹25 crore** or **three times profit**, debarment, and promoter freezes make prevention cheaper than cure.",
    },
    {
      icon: "Scale",
      title: "Market integrity",
      text: "Curtails UPSI-driven spikes or crashes so retail participants are not systematically disadvantaged.",
    },
    {
      icon: "MessageSquare",
      title: "Whistleblower deterrence",
      text: "SEBI whistleblower rewards (up to **₹10 crore** in stated policy) increase internal vigilance on unethical trades.",
    },
  ],
  disadvantages: [
    {
      icon: "Wallet",
      title: "SDD and software cost",
      text: "Tamper-proof SDD subscriptions often **₹15,000–₹60,000** per year plus setup and secure hosting charges.",
    },
    {
      icon: "Clock",
      title: "Pre-clearance and form friction",
      text: "Designated persons face **Form B/C** timelines, blackout windows, and two-day reporting for material trades.",
    },
    {
      icon: "Users",
      title: "Expanded connected-person net",
      text: "Relatives, cohabitants, and professional advisers may be swept in—HR and compliance must train broadly.",
    },
    {
      icon: "AlertTriangle",
      title: "Non-maintenance of SDD",
      text: "Standalone penalties of **₹1 lakh to ₹1 crore** plus compliance officer risk if logs are incomplete.",
    },
  ],
  eligibility: [
    {
      title: "Insider / connected person",
      items: [
        "**Connected persons** and anyone in possession of or with access to **UPSI**.",
        "Anyone receiving UPSI for a **legitimate purpose** remains subject to dealing restrictions and disclosure.",
      ],
    },
    {
      title: "Designated persons (internal list)",
      items: [
        "**KMPs and directors**; finance, accounts, IT, legal teams; typically up to **two levels below CEO**; support staff to KMPs as company policy requires.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Disclosure forms",
      content: {
        title: "SEBI insider-trading forms",
        items: [
          "**Form B** — initial disclosure within **7 days** of becoming promoter/director/KMP.",
          "**Form C** — continual disclosure for trades above **₹10 lakh** in a quarter (within **2 trading days**).",
          "**Form D** — indicative format for other connected persons as company requires.",
        ],
      },
    },
    {
      tabTitle: "SDD & policies",
      content: {
        title: "Digital and governance pack",
        items: [
          "**SDD compliance certificate** quarterly (CO / PCS).",
          "**Audit trail** and UPSI sharing logs (typically **8-year** retention).",
          "**Code of conduct** for securities dealing; **code of fair disclosure**; **legitimate purpose** policy.",
          "**Pre-clearance** applications; **trading plan** filed **~120 days** before trading window.",
          "**NDAs** with fiduciaries before sharing UPSI.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "UPSI identification",
      description:
        "Maintain UPSI inventory, committee minutes linkage, and legitimate-purpose register.",
    },
    {
      step: 2,
      title: "SDD implementation",
      description:
        "Configure tamper-proof database, role-based access, and quarterly certification workflow.",
    },
    {
      step: 3,
      title: "Designated person programme",
      description:
        "Board-approved DP list, annual acknowledgements, blackout calendars, and trading-window notices.",
    },
    {
      step: 4,
      title: "Trade surveillance",
      description:
        "Pre-clearance workflow, Form B/C/D filings to company and exchanges, and breach escalation.",
    },
    {
      step: 5,
      title: "Annual attestation",
      description:
        "PCS review of codes, SDD extracts, and board reporting for ASC / governance disclosures.",
    },
  ],
  fees: [
    {
      component: "SDD software (annual)",
      fees: "₹15,000 – ₹60,000+",
      remarks: "Per enterprise licence; add hosting ₹5k–15k if cloud.",
    },
    {
      component: "PIT compliance audit",
      fees: "₹50,000 – ₹2,00,000",
      remarks: "Depends on designated-person population.",
    },
    {
      component: "PCS retainer",
      fees: "₹15,000 – ₹50,000 / month",
      remarks: "Optional for pre-clearance and form management.",
    },
  ],
  faqs: [
    {
      q: "What is the penalty for insider trading?",
      a: "SEBI may impose **₹10 lakh to ₹25 crore** or **three times** the profit, whichever is higher, plus other remedies.",
    },
    {
      q: "Are relatives always insiders?",
      a: "The **connected person** definition is broad—policies typically treat specified relatives and cohabitants as restricted unless cleared.",
    },
  ],
};

export const listingSecuritiesExtras: Partial<ServiceData> = {
  advantages: [
    {
      icon: "TrendingUp",
      title: "Access to low-cost capital",
      text: "Raise large pools from retail and institutional investors without servicing high-cost debt amortisation.",
    },
    {
      icon: "LineChart",
      title: "Liquidity premium",
      text: "Listed equity often attracts higher multiples than private comparables because of transparent price discovery.",
    },
    {
      icon: "Landmark",
      title: "Collateral value",
      text: "Listed scrip is accepted as liquid security for credit facilities.",
    },
    {
      icon: "ExternalLink",
      title: "Exit for early backers",
      text: "VC/PE and founders can monetise or rebalance holdings in an orderly market.",
    },
    {
      icon: "MessageSquare",
      title: "Brand visibility",
      text: "IPO and continuous disclosure act as marketing and legitimacy signals for customers and suppliers.",
    },
    {
      icon: "ArrowRightLeft",
      title: "Stock as acquisition currency",
      text: "M&A can be funded with shares instead of draining cash.",
    },
    {
      icon: "Users",
      title: "ESOP liquidity",
      text: "Employees see real-time value and can monetise awards subject to plan and exchange rules.",
    },
    {
      icon: "Shield",
      title: "Governance uplift",
      text: "Continuous reporting and independent oversight often improve management discipline.",
    },
  ],
  disadvantages: [
    {
      icon: "FileWarning",
      title: "ICDR and exchange scrutiny",
      text: "DRHP/RHP reviews, merchant banker costs, and liability on misstatements are material.",
    },
    {
      icon: "Percent",
      title: "Underpricing and stabilisation risk",
      text: "Book-building may leave money on the table; greenshoe/stabilisation adds complexity.",
    },
    {
      icon: "Eye",
      title: "Continuous obligations",
      text: "Minimum public shareholding, LODR disclosures, and insider-trading controls run in perpetuity.",
    },
    {
      icon: "BarChart3",
      title: "Market price volatility",
      text: "Share price becomes a daily scorecard sensitive to macro and sentiment.",
    },
  ],
  eligibility: [
    {
      title: "Main board — profitability route (illustrative)",
      items: [
        "Average **pre-tax operating profit** ≥ **₹15 crore** in **3 of last 5** years.",
        "**Net worth** ≥ **₹1 crore** in each of the preceding **3** years.",
        "**Net tangible assets** ≥ **₹3 crore** each year (with cash cap rules).",
        "**Issue size** not exceeding **5×** pre-issue net worth.",
      ],
    },
    {
      title: "Main board — QIB route",
      items: [
        "**Book building** process with at least **75%** of net offer to **QIBs** when profit track is absent.",
      ],
    },
    {
      title: "SME / general",
      items: [
        "**SME**: post-issue paid-up **below ₹25 crore** (otherwise migrate to main board), **3-year** track, profitability in **2 of 3** years, positive net worth (exchange-specific thresholds apply).",
        "**Minimum public shareholding 25%**, **20% promoter lock-in** (typical), **demat** mandatory, clean disciplinary record.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Pre-filing",
      content: {
        title: "Due diligence phase",
        items: [
          "**MoA & AoA** updated for public company.",
          "**Material contracts**, SHA, JV agreements.",
          "**Board and shareholder resolutions** approving the issue.",
          "**Certificates of incorporation** and name change proofs.",
        ],
      },
    },
    {
      tabTitle: "Offer documents",
      content: {
        title: "The big three",
        items: [
          "**DRHP** for SEBI review and public comments (≥21 days).",
          "**RHP** for book building.",
          "**Prospectus** filed with RoC after price discovery.",
        ],
      },
    },
    {
      tabTitle: "Financial & legal certifications",
      content: {
        title: "Validated data pack",
        items: [
          "**Restated financials** (typically **3 years**) under **Ind AS**.",
          "**Due diligence certificate** from BRLMs.",
          "**Auditor certificates** on net worth, NTA, and prior fund use.",
          "**Legal opinion** on undisclosed litigation.",
          "**In-principle** listing application and **listing agreement**.",
          "**Tripartite** agreements with RTA and depositories.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Pre-IPO readiness", description: "Legal, tax, and accounting clean-up; cap table and ESOP alignment." },
    { step: 2, title: "DRHP filing", description: "SEBI comments, updates, and stabilisation structure if any." },
    { step: 3, title: "Marketing & book build", description: "Anchor, QIB, NII, and retail tranches; price band discovery." },
    { step: 4, title: "Issue close & allotment", description: "Basis of allotment, refunds, demat credit, and RoC prospectus." },
    { step: 5, title: "Listing & trading", description: "Exchange listing approval, symbol activation, and LODR onboarding." },
  ],
  fees: [
    { component: "SEBI filing fee (main board)", fees: "0.1% of issue (min ₹25k – max ₹3 Cr)", remarks: "ICDR schedule." },
    { component: "Processing fee", fees: "~₹50,000 – ₹25,00,000", remarks: "Often 0.05% of issue subject to cap on main board." },
    { component: "Initial listing fee", fees: "₹50,000 (main) / ₹25k–50k SME", remarks: "Exchange schedule." },
    { component: "Annual listing fee", fees: "Slab-based", remarks: "Same capital ladders as LODR section once listed." },
  ],
  faqs: [
    { q: "Is direct listing available?", a: "Yes for eligible structures—**no fresh capital**, existing shares admitted per exchange/SEBI rules." },
    { q: "What is continuous listing?", a: "**MPS 25%** and **LODR** compliance to remain traded after IPO." },
  ],
};

export const poshPolicyExtras: Partial<ServiceData> = {
  advantages: [
    { icon: "Users", title: "Talent attraction & retention", text: "Professionals favour employers with active IC, training, and clean POSH records." },
    { icon: "TrendingUp", title: "Investor & ESG signalling", text: "Social governance metrics increasingly influence capital and partnerships." },
    { icon: "Shield", title: "Avoid licence and reputational loss", text: "Repeat violations risk business disruption and regulatory escalation." },
    { icon: "Heart", title: "Productivity & cohesion", text: "Harassment-free workplaces reduce toxic stress and interpersonal conflict." },
    { icon: "Scale", title: "Legal shield", text: "Written policy, IC, and inquiries demonstrate reasonable care if incidents arise." },
  ],
  disadvantages: [
    { icon: "Clock", title: "Inquiry workload", text: "**90-day** (extendable) inquiry discipline and documentation burden on IC and HR." },
    { icon: "Eye", title: "Confidentiality vs transparency tension", text: "Strict confidentiality rules must coexist with board reporting and regulatory filings." },
    { icon: "AlertTriangle", title: "Retaliation risk management", text: "Anti-retaliation duties require careful change-management when complaints involve senior leaders." },
  ],
  eligibility: [
    { title: "Workplace coverage", items: ["All **workplaces** with **10+ workers** (incl. contract) must constitute **Internal Committee**.", "**Offices and virtual workplaces**—digital harassment included.", "**District officer** annual report filing obligations."] },
  ],
  documents: [
    { tabTitle: "Core policy", content: { title: "POSH pack", items: ["**POSH policy** (zero tolerance, definitions, redressal).", "**Internal Committee** constitution notice.", "**Annual reports** to district officer.", "**Training attendance** registers and materials."] } },
    { tabTitle: "Inquiry", content: { title: "Complaint handling", items: ["**Complaint forms** and acknowledgements.", "**Inquiry minutes**, evidence bundles, and outcome orders.", "**Confidentiality** undertakings for panel members."] } },
  ],
  registrationProcess: [
    { step: 1, title: "IC constitution", description: "Presiding officer (woman senior employee), two members (preferably women), one external member." },
    { step: 2, title: "Policy & display", description: "Board-approved policy, employee communication, and workplace notices." },
    { step: 3, title: "Annual training", description: "Sensitisation for employees and separate ICC skills training." },
    { step: 4, title: "Complaint pathway", description: "Triage, interim relief if needed, and time-bound inquiry." },
    { step: 5, title: "Reporting", description: "District officer annual filing and board disclosures as applicable." },
  ],
  fees: [
    { component: "End-to-end POSH programme", fees: "₹25,000 – ₹2,00,000+", remarks: "Depends on headcount, locations, and investigations." },
  ],
  faqs: [
    { q: "Does POSH apply to men?", a: "The Act protects **any aggrieved person** in the workplace; policies should be gender-neutral in process while addressing the statute’s focus." },
  ],
};

export const secretarialAuditExtras: Partial<ServiceData> = {
  advantages: [
    { icon: "Shield", title: "Director liability shield", text: "MR-3 demonstrates board due diligence on technical compliance, limiting exposure on procedural lapses." },
    { icon: "Search", title: "Early warning", text: "Surfaces minute defects, filing delays, and register gaps before they become defaults." },
    { icon: "TrendingUp", title: "Investor confidence", text: "Clean MR-3 supports funding and M&A timelines." },
    { icon: "Briefcase", title: "Smoother M&A", text: "Reduces legal diligence surprises on corporate housekeeping." },
    { icon: "Landmark", title: "Borrowing power", text: "Banks view robust compliance systems more favourably." },
    { icon: "BookOpen", title: "Institutional discipline", text: "Forces real-time register maintenance instead of year-end panic." },
  ],
  disadvantages: [
    { icon: "Wallet", title: "Professional cost", text: "PCS fees scale steeply for listed and multi-subsidiary groups." },
    { icon: "Clock", title: "Management time", text: "Document retrieval and interviews distract teams during audit windows." },
    { icon: "AlertTriangle", title: "Qualified opinions", text: "Adverse or qualified MR-3 may trigger lender covenants or board remediation plans." },
  ],
  eligibility: [
    { title: "Mandatory companies (Section 204)", items: ["**Listed** companies.", "**Unlisted public** with paid-up ≥ **₹50 crore** **or** turnover ≥ **₹250 crore**.", "**Any company** (incl. private) with **borrowings** from banks/PFIs ≥ **₹100 crore** on last audited balance sheet.", "**Material unlisted subsidiaries** of listed parents as per SEBI tests."] },
  ],
  documents: [
    { tabTitle: "Charter & registers", content: { title: "Core records", items: ["**Certificate of incorporation** and amendments.", "**MoA & AoA**.", "**MGT-1, MGT-10**, CHG-7, MBP-2, MBP-4, SBO registers."] } },
    { tabTitle: "Meetings & filings", content: { title: "Governance trail", items: ["**Notices, agendas, attendance, minutes** for board/committees/AGM.", "**Postal ballot** packs.", "**MGT-7, AOC-4**, PAS-3, DIR-12, MGT-14 filings.", "**MBP-1, DIR-8** from each director.", "**Audited financials** and directors’ report."] } },
    { tabTitle: "Sector add-ons", content: { title: "Listed / cross-border", items: ["**SEBI** quarterly compliance extracts.", "**FEMA** FC-GPR/FC-TRS and FLA.", "**POSH** annual report.", "**Labour & environmental** permits where material."] } },
  ],
  registrationProcess: [
    { step: 1, title: "Engagement scoping", description: "PCS engagement letter, materiality questionnaire, subsidiary map." },
    { step: 2, title: "Document room", description: "Populate VDR with registers, minutes, and filings." },
    { step: 3, title: "Testing & walkthroughs", description: "SS-1/SS-2 checks, filing due dates, charge register vs CHG forms." },
    { step: 4, title: "Draft MR-3", description: "Observation log, management responses, and board presentation." },
    { step: 5, title: "Sign-off", description: "Final MR-3 annexed to board report and filed with annual report." },
  ],
  fees: [
    { component: "PCS secretarial audit", fees: "₹50,000 – ₹15,00,000+", remarks: "Small high-borrow private cos to large caps per ICSI market practice." },
  ],
  faqs: [
    { q: "Is MR-3 mandatory for all private companies?", a: "No—only when **borrowings** cross **₹100 crore** or other Section **204** triggers apply." },
  ],
};

export const legalDueDiligenceExtras: Partial<ServiceData> = {
  advantages: [
    { icon: "Search", title: "Skeleton discovery", text: "Surfaces hidden litigation, contract change-of-control risks, and compliance gaps before they become buyer liabilities." },
    { icon: "Scale", title: "Pricing power", text: "Supports price cuts, escrows, and indemnities backed by documented findings." },
    { icon: "Copyright", title: "IP chain of title", text: "Confirms code, trademarks, and patents sit in the target—not founders or contractors." },
    { icon: "Home", title: "Clean asset title", text: "Flags encumbrances on land and plant critical for manufacturing deals." },
    { icon: "Link2", title: "Integration planning", text: "Maps golden parachutes, non-competes, and customer consents needed post-close." },
    { icon: "Award", title: "Board and lender comfort", text: "Enables fiduciary sign-off and acquisition financing." },
  ],
  disadvantages: [
    { icon: "Clock", title: "Time and cost", text: "Large data rooms and multi-jurisdiction reviews extend exclusivity periods." },
    { icon: "EyeOff", title: "Scope limitations", text: "Reports rely on documents provided—missing records create residual uncertainty." },
    { icon: "AlertTriangle", title: "Deal fatigue", text: "Extensive red-flag lists can strain seller patience without pragmatic triage." },
  ],
  eligibility: [
    { title: "When LDD is essential", items: ["**VC/PE** funding rounds.", "**M&A** buy- and sell-side.", "**IPO** readiness and DRHP support.", "**Bank financing** on acquisition debt.", "**Joint ventures** and strategic alliances."] },
  ],
  documents: [
    { tabTitle: "Corporate", content: { title: "Company profile", items: ["**CIN** records, MoA/AoA, capital history, subsidiaries.", "**Board and shareholder minutes**; ESOP plans."] } },
    { tabTitle: "Commercial", content: { title: "Contracts & IP", items: ["**Top customer/vendor** agreements with change-of-control clauses.", "**IP register**, licences, open-source audits.", "**Litigation** schedules and regulatory notices."] } },
    { tabTitle: "People & data", content: { title: "HR & privacy", items: ["**Employment templates**, PF/ESI, POSH history.", "**DPDP** processing inventory and cross-border transfers."] } },
  ],
  registrationProcess: [
    { step: 1, title: "Kick-off & checklist", description: "Issue diligence request list aligned to transaction type." },
    { step: 2, title: "Data room review", description: "Parallel workstreams on corporate, commercial, IP, HR, disputes." },
    { step: 3, title: "Management Q&A", description: "Clarify gaps, obtain confirmations, and stress-test warranties." },
    { step: 4, title: "Risk matrix", description: "Red/amber/green classification with closing conditions." },
    { step: 5, title: "Signing support", description: "Disclosure schedules, indemnities, and escrow mechanics." },
  ],
  fees: [
    { component: "Legal diligence fees", fees: "₹2,00,000 – ₹2,00,00,000+", remarks: "Driven by jurisdiction count, data volume, and dispute density." },
  ],
  faqs: [
    { q: "Is LDD legally mandatory?", a: "Not by statute for private deals, but **commercially mandatory** for institutional capital and bank finance." },
  ],
};

export const corporateGovernanceExtras: Partial<ServiceData> = {
  advantages: [
    { icon: "Percent", title: "Lower cost of capital", text: "Well-governed firms attract tighter credit spreads and better equity terms." },
    { icon: "LineChart", title: "Higher valuation", text: "Studies cited in market practice link governance scores to premium multiples." },
    { icon: "Star", title: "Investment magnet", text: "PE and institutions prioritise governance-ready portfolios." },
    { icon: "SearchCheck", title: "Predictive oversight", text: "Analytics on communications and financial anomalies catch fraud early." },
    { icon: "Lock", title: "Cyber and data resilience", text: "Board-level tech and DPDPA oversight reduces catastrophic breach risk." },
    { icon: "Users", title: "Talent retention", text: "Speak-up cultures and ethical leadership reduce Gen-Z attrition." },
    { icon: "Navigation2", title: "Strategic clarity", text: "Board acts as north star versus short-termism." },
  ],
  disadvantages: [
    { icon: "Clock", title: "Meeting load", text: "Independent directors and committee calendars increase governance overhead." },
    { icon: "Scale", title: "Independence costs", text: "Fees, insurance, and onboarding for quality independents are material." },
    { icon: "AlertTriangle", title: "Compliance exposure", text: "Weak implementation (tick-box boards) still attracts regulator and shareholder action." },
  ],
  eligibility: [
    { title: "Companies Act / LODR triggers", items: ["**Listed** entities follow SEBI governance chapters subject to exemptions.", "**Public companies** follow enhanced director and committee rules.", "**Debt-listed HVDLE** classes follow full governance regardless of equity size."] },
  ],
  documents: [
    { tabTitle: "Charters", content: { title: "Board suite", items: ["**Board charter**, delegation of authority, committee charters (audit, nomination, risk, stakeholder).", "**Code of conduct** for board and senior management.", "**Related-party** policy and omnibus approvals."] } },
    { tabTitle: "Oversight artefacts", content: { title: "Evidence pack", items: ["**Diversity matrix**, independence declarations, skill matrix.", "**Whistle-blower** summary dashboards to audit committee.", "**ESG / BRSR** governance disclosures for applicable companies."] } },
  ],
  registrationProcess: [
    { step: 1, title: "Governance diagnostic", description: "Benchmark policies vs Companies Act, SEBI, and industry peers." },
    { step: 2, title: "Policy drafting", description: "Board-approved charters, codes, and matrices." },
    { step: 3, title: "Implementation", description: "Trainings, portals, and monitoring KPIs." },
    { step: 4, title: "Assurance loop", description: "Internal audit hooks and annual board evaluation." },
  ],
  fees: [
    { component: "Governance advisory", fees: "₹1,00,000 – ₹25,00,000+", remarks: "Depends on committee count and subsidiaries." },
  ],
  faqs: [
    { q: "Is governance only for listed companies?", a: "No—**unlisted public** companies and large private groups adopt governance suites for lenders, investors, and family-office transitions." },
  ],
};

export const internalAuditProcessExtras: Partial<ServiceData> = {
  advantages: [
    { icon: "Shield", title: "Fraud prevention", text: "Segregation-of-duty testing closes ghost-vendor and duplicate-invoice paths." },
    { icon: "Lock", title: "DPDPA alignment", text: "Audits of personal-data flows reduce mega-fine exposure." },
    { icon: "Activity", title: "Early warning", text: "Supply-chain, FX, and regulatory shifts surfaced before financial impact." },
    { icon: "Minimize2", title: "Process cost takeout", text: "Reviews remove 15–20% redundant legacy steps in mature workflows." },
    { icon: "TrendingUp", title: "Investor confidence", text: "VC/PE pay readiness premiums for audit-ready back offices." },
    { icon: "Landmark", title: "Cheaper debt", text: "Clean internal audit history supports covenant compliance." },
    { icon: "Target", title: "Strategic alignment", text: "Maps operating reality to board strategy and fixes data integrity to the CEO desk." },
  ],
  disadvantages: [
    { icon: "Users", title: "Stakeholder resistance", text: "Business units may view audits as obstruction without sponsorship." },
    { icon: "Wallet", title: "Co-sourcing cost", text: "Specialist IT / ESG testing requires extra budget." },
    { icon: "Clock", title: "Remediation backlog", text: "High findings volume can swamp management if not triaged." },
  ],
  eligibility: [
    { title: "Statutory internal audit triggers", items: ["**Listed** companies.", "**Certain unlisted public/private** crosses under Companies Act rules (e.g. turnover, loans, deposits—verify current Rule 13).", "**Voluntary** programmes for growth-stage firms pre-fundraise."] },
  ],
  documents: [
    { tabTitle: "Risk & controls", content: { title: "Audit inputs", items: ["**Risk register** and prior-year workpapers.", "**P2P / O2C** flowcharts and IT general controls.", "**Bank and GL** reconciliations.", "**TDS/GST** returns for compliance testing."] } },
  ],
  registrationProcess: [
    { step: 1, title: "Universe & risk assessment", description: "Rate inherent and residual risks by process." },
    { step: 2, title: "Annual audit plan", description: "Board-approved plan aligned to audit committee charter." },
    { step: 3, title: "Fieldwork", description: "Controls testing, analytics, and walkthroughs." },
    { step: 4, title: "Reporting", description: "Audit observations, severity, and management responses." },
    { step: 5, title: "Tracking", description: "Open-issue heatmap to audit committee until closure." },
  ],
  fees: [
    { component: "Co-sourced internal audit", fees: "₹3,00,000 – ₹2,00,00,000+", remarks: "Scales with locations, ERP complexity, and regulated industry." },
  ],
  faqs: [
    { q: "Internal audit vs statutory audit?", a: "**Statutory** audit opines on financial statements; **internal** audit is management/board-directed on controls, risk, and operations." },
  ],
};

export const amalgamationMergerExtras: Partial<ServiceData> = {
  advantages: [
    { icon: "Minimize2", title: "Cost synergies", text: "Consolidated finance, HR, and IT remove duplicate spend." },
    { icon: "TrendingUp", title: "Market footprint", text: "Better supplier pricing and cross-sell to merged customer bases." },
    { icon: "Cpu", title: "Technology leap", text: "Traditional acquirers can embed startup innovation with valuation support." },
    { icon: "Columns2", title: "Demerger value unlock", text: "Separate listings improve benchmark clarity for each business." },
    { icon: "BadgePercent", title: "Tax-neutral structuring", text: "Section 2(19AA) demerger and merger conditions preserve book-value moves and loss carry-forward where law permits." },
    { icon: "Shield", title: "Compliance assurance", text: "CCI, SEBI, RBI, IRDAI clearances orchestrated to avoid blocking orders." },
    { icon: "Search", title: "Due diligence shield", text: "Forensic legal and financial diligence prevents post-close skeletons." },
  ],
  disadvantages: [
    { icon: "Clock", title: "Long NCLT timelines", text: "Traditional schemes often **6–9 months** including meetings and RD/IT comments." },
    { icon: "Wallet", title: "Stamp duty & professional fees", text: "State stamp on share or property transfers can dominate economics." },
    { icon: "Users", title: "Cultural integration risk", text: "Human capital clashes remain a top failure mode post-merger." },
  ],
  eligibility: [
    { title: "Traditional route (Section 232)", items: ["**Board approval** from all merging companies.", "**Solvency** or approved creditor restructuring.", "**75%** shareholder approval in value.", "**Disclosure** of investigations to NCLT."] },
    { title: "Fast-track (Section 233)", items: ["**Small companies / startups**; **holding–subsidiary** combinations with transferor **unlisted**; **aggregate loans ≤ ₹200 crore** without default; **90%** shareholder and **9/10** creditor consent."] },
    { title: "Objectors", items: ["Only shareholders with **≥10%** or creditors with **≥5%** of debt may raise formal objections."] },
  ],
  documents: [
    { tabTitle: "Core", content: { title: "Deal spine", items: ["**MoA/AoA** with amalgamation powers.", "**Board resolutions**.", "**Scheme of arrangement** with appointed/effective dates.", "**Registered valuer** report and fairness opinion (if listed).", "**Solvency** declarations and creditor evidence."] } },
  ],
  registrationProcess: [
    { step: 1, title: "Term sheet & diligence", description: "Valuation mandate, data room, and regulatory mapping." },
    { step: 2, title: "Scheme drafting", description: "Swap ratio, accounting, employee continuity, and tax clauses." },
    { step: 3, title: "First motion", description: "NCLT directions for meetings and advertisements." },
    { step: 4, title: "Voting & second motion", description: "Chairperson report and sanction petition." },
    { step: 5, title: "Implementation", description: "INC-28 filing, stamp, and operational cut-over." },
  ],
  fees: [
    { component: "NCLT fees (illustrative)", fees: "₹5,000 per main motion", remarks: "Plus IAs, certified copies, ROC INC-28." },
    { component: "Newspaper notices", fees: "₹1,00,000 – ₹5,00,000", remarks: "English + vernacular publications." },
    { component: "Valuation", fees: "₹50,000 – ₹5,00,000+", remarks: "Asset complexity driven." },
  ],
  faqs: [
    { q: "Is CCI always required?", a: "When combination thresholds under **Competition Act** are met, **CCI approval** or deemed approval is required." },
  ],
};

export const draftingSchemeExtras: Partial<ServiceData> = {
  advantages: [
    { icon: "Gavel", title: "Binding cram-down", text: "Once NCLT sanctions, **75%**-approved schemes bind dissenting minorities if thresholds met." },
    { icon: "BadgePercent", title: "Tax-neutral language", text: "Book-value transfers and undertaking definitions preserve exemptions and loss carry-forward." },
    { icon: "Truck", title: "Operational continuity", text: "Automatic vesting of licences, contracts, and employees avoids re-application downtime." },
    { icon: "FileWarning", title: "Modification risk control", text: "Anticipates IT/SEBI objections inside the draft to reduce NCLT modification cycles." },
    { icon: "Scale", title: "Valuation defence", text: "Narrative linking business story to swap ratio resists court challenges." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "High drafting precision", text: "Omitted assets (telecom, mining) can stall operations post-effective date." },
    { icon: "Clock", title: "Rigid post-filing changes", text: "Material edits may restart tribunal timelines." },
    { icon: "Wallet", title: "Multi-stakeholder negotiation", text: "Creditor classes and regulators insert iterative language changes." },
  ],
  eligibility: [
    { title: "Who may propose", items: ["**Company board** (most common).", "**Any creditor** (debt restructuring).", "**Members** with sufficient support.", "**Liquidator** in winding-up.", "**75% shareholder** takeover offer routes as applicable."] },
    { title: "Thresholds", items: ["**Board resolution** for filing.", "**Auditor certificate** on Ind-AS treatment.", "**Affidavit** on investigations and financial health.", "**75% secured creditor** support for debt schemes."] },
  ],
  documents: [
    { tabTitle: "Governance", content: { title: "Authority", items: ["**Certified board resolutions**.", "**MoA/AoA**.", "**Shareholder and creditor lists** with affidavits."] } },
    { tabTitle: "Financial", content: { title: "Disclosure", items: ["**Three-year audited** financials; provisional if stale.", "**Form NCLT-6** affidavit.", "**Net worth** working pre/post scheme."] } },
    { tabTitle: "Listed", content: { title: "Market protections", items: ["**Fairness opinion**.", "**Audit committee** report.", "**CS/CFO compliance** certificate."] } },
  ],
  registrationProcess: [
    { step: 1, title: "Structure sign-off", description: "Appointed date, swap ratio, and accounting method frozen." },
    { step: 2, title: "Draft vetted", description: "Tax, labour, and sector counsel review." },
    { step: 3, title: "Board approval", description: "Approve filing and authorise signatories." },
    { step: 4, title: "NCLT first motion", description: "Seek directions for meetings and advertisements." },
    { step: 5, title: "Sanction & ROC", description: "Second motion, order, and INC-28 implementation." },
  ],
  fees: [
    { component: "Drafting & counsel", fees: "₹5,00,000 – ₹2,00,00,000+", remarks: "Deal size and cross-border complexity." },
  ],
  faqs: [
    { q: "Fast-track without NCLT?", a: "**Section 233** route with RD when eligibility tests and **90%/9-10** consents are met." },
  ],
};

export const ncltFilingExtras: Partial<ServiceData> = {
  advantages: [
    { icon: "Gavel", title: "Legal finality", text: "Court sanction binds dissenting minorities where law permits cram-down." },
    { icon: "BadgePercent", title: "Tax-neutral restructuring", text: "Sanctioned schemes anchor exemptions and loss carry-forward positions." },
    { icon: "Truck", title: "Automatic vesting", text: "Single-window transfer of undertakings on effective date." },
    { icon: "Landmark", title: "Stakeholder trust", text: "RD/IT/ROC representations provide regulatory comfort to lenders and investors." },
  ],
  disadvantages: [
    { icon: "Clock", title: "Two-motion duration", text: "Meetings, advertisements, and regulator comments extend timelines." },
    { icon: "Wallet", title: "Publication and stamp", text: "Newspaper costs and state stamp on conveyance of assets can dominate." },
    { icon: "AlertTriangle", title: "Objection risk", text: "IT department or minority blocks may force additional hearings." },
  ],
  eligibility: [
    { title: "Traditional (Sections 230–232)", items: ["**Company, creditor, member, or liquidator** may petition.", "**Board resolutions** and **valuation + auditor** certificates.", "**Solvency affidavit** (Form NCLT-6)."] },
    { title: "Fast-track (Section 233)", items: ["Same amalgamation eligibility as advisory section—small/start-up/holding-subsidiary/**≤₹200 Cr** debt without default with elevated consent thresholds."] },
  ],
  documents: [
    { tabTitle: "First motion", content: { title: "Application pack", items: ["**NCLT-1** petition.", "**NCLT-2** admission notice.", "**NCLT-6** affidavit.", "**Scheme** and **valuation** report.", "**Auditor certificate** on Ind-AS.", "**Board resolutions, MoA/AoA, shareholder/creditor lists**."] } },
    { tabTitle: "Second motion", content: { title: "Sanction", items: ["**CAA-5** petition within **7 days** of chairperson report.", "**CAA-4** chairperson report.", "**Affidavit of service** and newspaper proofs.", "**Regulatory replies**.", "**Updated financials** if >6 months old."] } },
    { tabTitle: "Post-order", content: { title: "ROC", items: ["**INC-28** with certified NCLT order for effectiveness."] } },
  ],
  registrationProcess: [
    { step: 1, title: "First motion filing", description: "Synopsis, scheme, valuation, and meeting prayer." },
    { step: 2, title: "Directions & meetings", description: "Chairperson, notices, voting, and advertisements." },
    { step: 3, title: "Regulator comments", description: "RD, ROC, IT responses consolidated." },
    { step: 4, title: "Second motion", description: "CAA-5 with voting evidence." },
    { step: 5, title: "Order & INC-28", description: "Stamp, implement, and file certified order." },
  ],
  fees: [
    { component: "NCLT statutory", fees: "₹5,000 + ₹5,000", remarks: "First and second motion illustrative; IAs ₹1,000." },
    { component: "Public notices", fees: "₹1,00,000 – ₹5,00,000", remarks: "National + vernacular ads." },
    { component: "Stamp duty", fees: "State-specific", remarks: "Often largest cash cost—Maharashtra/Gujarat/Karnataka slabs differ materially." },
  ],
  faqs: [
    { q: "Who can object?", a: "Shareholders with **≥10%** or creditors with **≥5%** of debt under current practice tests." },
  ],
};

export const policyMakingCorporateExtras: Partial<ServiceData> = {
  advantages: [
    { icon: "Bookmark", title: "Board-approved playbooks", text: "Delegation of authority, IFC, and codes of conduct give consistent decision rules." },
    { icon: "FileCheck", title: "Audit-ready evidence", text: "Version-controlled policies satisfy ISO, SOC, and statutory inspections." },
    { icon: "Users", title: "Training linkage", text: "Policies anchor annual certifications for PoSH, insider trading, and data privacy." },
    { icon: "Scale", title: "Risk appetite clarity", text: "Board risk committees embed thresholds for treasury, credit, and cyber events." },
    { icon: "Layers", title: "Change control", text: "RACI matrices show who updates policies when laws shift." },
  ],
  disadvantages: [
    { icon: "Clock", title: "Maintenance debt", text: "Annual review cycles across subsidiaries consume legal and compliance bandwidth." },
    { icon: "AlertTriangle", title: "Shelf-ware risk", text: "Policies ignored on the ground increase liability despite paper existence." },
    { icon: "Globe", title: "Multi-jurisdiction drift", text: "Global templates need India-specific overlays (Companies Act, SEBI, DPDP, labour)." },
  ],
  eligibility: [
    { title: "When corporate policy suites are needed", items: ["**Listed** companies for LODR/ PIT/ related-party manuals.", "**PE/VC portfolio** companies preparing diligence.", "**Family offices** transitioning to professional boards.", "**ISO / SOC** certified operations."] },
  ],
  documents: [
    { tabTitle: "Core manuals", content: { title: "Governance library", items: ["**Delegation of authority** matrix.", "**Related-party** and **related investment** policies.", "**Whistle-blower** and **anti-bribery** codes.", "**IT / cyber** and **data retention** standards."] } },
    { tabTitle: "Lifecycle", content: { title: "Operationalisation", items: ["**SOPs** and work instructions.", "**Training decks** and attestation logs.", "**RACI** for policy owners.", "**Annual review** calendar with board minutes."] } },
  ],
  registrationProcess: [
    { step: 1, title: "Gap assessment", description: "Map statutory and investor covenants to live documents." },
    { step: 2, title: "Drafting", description: "Integrate Companies Act, SEBI, DPDP, and industry norms." },
    { step: 3, title: "Stakeholder review", description: "HR, IT, finance, and business sign-offs." },
    { step: 4, title: "Board adoption", description: "Resolutions, publication on website, and intranet release." },
    { step: 5, title: "Enablement", description: "Trainings, helpdesk, and breach reporting channels." },
  ],
  fees: [
    { component: "Policy suite build", fees: "₹1,50,000 – ₹30,00,000+", remarks: "Entity count and regulated sector complexity." },
  ],
  faqs: [
    { q: "Policies vs SOPs?", a: "**Policies** state principles and approvals; **SOPs** are step-by-step execution manuals referenced by auditors." },
  ],
};
