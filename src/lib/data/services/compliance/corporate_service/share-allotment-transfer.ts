import { ServiceData } from "@/lib/types";

export const shareAllotmentTransferData: ServiceData = {
  title: "Share Allotment & Transfer",
  breadcrumb: [
    "Home",
    "Compliance",
    "Corporate Service",
    "Share Allotment & Transfer",
  ],
  description:
    "ROC-compliant allotment and transfer of shares, filings, stamps, and register updates for private and public companies.",
  overview: `**Share Allotment** is the issuance of shares to subscribers or new investors after incorporation or as part of a funding round. It must follow the authorised capital limits, Articles of Association, and Sections 42 and related provisions where applicable.

**Share Transfer** is the voluntary transmission of ownership of existing shares among members or to new shareholders, subject to the right of refusal (private companies) or open market rules (listed companies).

BharatFilings assists with board resolutions, share certificates (where applicable), Form PAS-3 (return of allotment), SH-4/share transfer deeds, stamping, updating registers of members, and ROC filings.`,
  advantages: [
    {
      icon: "TrendingUp",
      title: "Growth capital (allotment)",
      text: "Fresh issuance funds expansion, new projects, or refinancing without fixed loan repayment schedules—dividends are discretionary when profits exist.",
    },
    {
      icon: "Shield",
      title: "Stronger balance sheet",
      text: "Equity capital improves debt-to-equity metrics and can lower future borrowing costs versus pure debt funding.",
    },
    {
      icon: "Handshake",
      title: "Strategic partners",
      text: "Preferential or private placements can bring capital plus networks, technology, and sector expertise.",
    },
    {
      icon: "Users",
      title: "Talent alignment (ESOPs)",
      text: "Employee allotments align incentives and support retention for key teams.",
    },
    {
      icon: "BadgePercent",
      title: "Investor-friendly primary pricing",
      text: "Rights issues and IPOs often offer primary pricing; bonus issues increase units held as the company scales.",
    },
    {
      icon: "Gavel",
      title: "Register membership rights",
      text: "Allottees enter the register of members with voting and dividend entitlements on allotted shares.",
    },
    {
      icon: "FileCheck",
      title: "Audit-ready records",
      text: "PAS-3, PAS-4/5 where applicable, SH-4 or demat instructions, and updated registers give a clear chain for ROC and diligence.",
    },
  ],
  disadvantages: [
    {
      icon: "Scale",
      title: "Authorised capital ceiling",
      text: "Allotment cannot exceed **MoA authorised capital** without shareholder-approved increase and filing.",
    },
    {
      icon: "AlertTriangle",
      title: "Time-bound PAS-3",
      text: "**Form PAS-3** must be filed within **30 days** of allotment; delays trigger additional MCA fees.",
    },
    {
      icon: "Database",
      title: "Demat mandate (Rule 9B)",
      text: "**Non-small** private companies must allot in **demat**; corporate action coordination with depositories adds steps.",
    },
    {
      icon: "Ban",
      title: "Private company transfer restrictions",
      text: "**AoA** may impose pre-emption or board refusal rights—transfers are not automatic.",
    },
    {
      icon: "FileWarning",
      title: "Stamp and instrument discipline",
      text: "Transfers generally require stamp (e.g. **0.015%** on delivery-based trades in stated slabs) and correct **SH-4** or DP instructions.",
    },
  ],
  eligibility: [
    {
      title: "Share allotment",
      items: [
        "**Authorised capital** headroom in MoA (increase if exhausted).",
        "**Board resolution** approving class, number, and price of securities.",
        "**Minimum subscription** rules for public issues (typically **90%** before allotment).",
        "**PAS-4 / PAS-5** for **private placements** with ROC filing.",
        "**Registered valuer** report when issue is for **consideration other than cash** or under private placement rules.",
      ],
    },
    {
      title: "Share transfer",
      items: [
        "Compliance with **AoA** pre-emption / tag-along / board approval clauses.",
        "**Valid instrument**: **SH-4** for permitted physical transfers; **DIS** or online DP flow for demat off-market.",
        "**Stamp duty** paid as applicable; **fully paid** preference for smoother registration.",
      ],
    },
    {
      title: "Transmission (special case)",
      items: [
        "**Death / insolvency** routes move shares by **operation of law**—distinct from voluntary transfer; typically **no stamp** on transmission as per law.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Allotment",
      content: {
        title: "Documents for Allotment",
        items: [
          "**Board resolution** (certified minutes) with number, class, and allottee names.",
          "**Form PAS-3** within **30 days** of allotment with **list of allottees**.",
          "**PAS-4 & PAS-5** for **private placements**.",
          "**Registered valuer** report for consideration other than cash / placement pricing.",
          "**Revised MoA** if authorised capital is increased.",
          "**Corporate action** forms to **NSDL/CDSL** for dematerialised issue (non-small private companies).",
        ],
      },
    },
    {
      tabTitle: "Transfer",
      content: {
        title: "Documents for Transfer",
        items: [
          "**Form SH-4** (physical permitted cases) signed by transferor and transferee and **witnessed**.",
          "**Original share certificate** surrendered where physical.",
          "**Proof of stamp duty** (including e-stamping).",
          "**KYC** of transferee (PAN, Aadhaar self-attested).",
          "**Share transfer agreement** (recommended for private negotiated sales).",
          "**DIS** or online DP instruction for **off-market demat** transfers.",
          "**Board resolution** registering transfer for private companies.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Board Approval",
      description: "Convene a board meeting or pass resolutions for allotment or noting transfer.",
    },
    {
      step: 2,
      title: "Execute Instruments",
      description: "Complete share certificates and transfer forms; pay applicable stamp duty.",
    },
    {
      step: 3,
      title: "File PAS-3 (Allotment)",
      description: "File return of allotment with the ROC within the statutory period.",
    },
    {
      step: 4,
      title: "Update Registers",
      description: "Update register of members and issue endorsements/certificates.",
    },
  ],
  fees: [
    {
      component: "ROC — Form PAS-3",
      fees: "₹200 – ₹600 (typical slabs)",
      remarks: "Based on nominal/authorised capital schedule.",
    },
    {
      component: "Stamp duty on transfer",
      fees: "~0.015% on delivery-based trades (illustrative)",
      remarks: "Confirm current state/e-stamping rules for your instrument.",
    },
    {
      component: "Depository corporate action",
      fees: "~₹10 per record (minimums apply)",
      remarks: "NSDL/CDSL corporate action charges for demat movements.",
    },
    {
      component: "Professional support",
      fees: "On quotation",
      remarks: "Documentation, board pack, PAS/SH filings, cap table updates.",
    },
  ],
  faqs: [
    {
      q: "When is PAS-3 required?",
      a: "PAS-3 is filed for allotment of securities; timelines apply from the resolution date.",
    },
    {
      q: "Are private companies allowed to refuse transfer?",
      a: "Yes, Articles may provide for board discretion; compliance with Company Law is still required.",
    },
  ],
};
