import { ServiceData } from "@/lib/types";

export const rightIssuePrivatePlacementData: ServiceData = {
  title: "Right Issue / Private Placement",
  breadcrumb: [
    "Home",
    "Compliance",
    "Corporate Service",
    "Right Issue / Private Placement",
  ],
  description:
    "Rights issues under Section 62 and private placements under Section 42—board and shareholder steps, PAS-4/5, valuations, demat (Rule 9B), PAS-3, and stamp.",
  overview: `A **rights issue** (**Section 62**) is an offer of **fresh shares only to existing equity shareholders** on the **record date**, usually **in proportion** to their holdings so they can **maintain voting share**—often at a **discount** to market. Shareholders may subscribe, renounce rights (trade **REs** on exchange when listed), or lapse.

A **private placement** (**Section 42**) is an invitation to a **pre-identified select group** (e.g. VC/PE)—**not** a public advertisement—capped at **200 persons per financial year** (with stated exclusions such as QIBs and ESOP allottees). It typically needs a **special resolution**, **registered valuer** pricing, **PAS-4** offer letters, **PAS-5** record, **separate bank account** for subscription money until allotment, and stricter **no-renunciation** rules than a rights issue.

**Rule 9B**: **Non-small** companies must issue securities in **demat** (ISIN, corporate action to NSDL/CDSL).

BharatFilings supports structuring, offer letters, resolutions, escrow banking, PAS filings, SH-7 if authorised capital increases, and depository coordination.`,
  advantages: [
    {
      icon: "TrendingUp",
      title: "Rights issue — loyalty and control",
      text: "Pro-rata offer helps **prevent dilution** by outsiders; shareholders may acquire at a **discount**; **renunciation** can monetise REs on-market when permitted.",
    },
    {
      icon: "Wallet",
      title: "Rights issue — lower distribution cost",
      text: "Cheaper than a broad **FPO**—minimal marketing and underwriting versus a public offer.",
    },
    {
      icon: "LineChart",
      title: "Rights issue — balance sheet repair",
      text: "Equity raised can repay debt and **improve debt-to-equity** for future borrowing.",
    },
    {
      icon: "Zap",
      title: "Private placement — speed",
      text: "Can close in **weeks** with a small sophisticated group versus long public timelines.",
    },
    {
      icon: "Handshake",
      title: "Private placement — strategic capital",
      text: "Brings **VC/PE** capital plus networks, governance, and sector expertise.",
    },
    {
      icon: "EyeOff",
      title: "Private placement — confidentiality",
      text: "Sensitive projections stay with **identified persons**, not a prospectus-wide audience.",
    },
    {
      icon: "FileText",
      title: "Private placement — simpler disclosure pack",
      text: "**PAS-4** offer letter regime instead of a full **IPO prospectus** for qualifying private offers.",
    },
    {
      icon: "BarChart3",
      title: "Private placement — price stability",
      text: "Small groups of long-term holders often create **less immediate trading pressure** than a mass retail float.",
    },
  ],
  disadvantages: [
    {
      icon: "Clock",
      title: "Strict filing windows",
      text: "**PAS-3** for allotment is **30 days** (rights) or **15 days** (private placement); late fees can scale to **multiples** of normal ROC fees and daily caps for defaults.",
    },
    {
      icon: "Scale",
      title: "Private placement — governance load",
      text: "**Special resolution**, **mandatory valuer** report, **escrow** banking, and **PAS-5** maintenance increase process intensity.",
    },
    {
      icon: "Users",
      title: "200-person ceiling",
      text: "Private placement **cannot** be widened casually; mis-steps can look like a **public offer**.",
    },
    {
      icon: "Ban",
      title: "No renunciation in private placement",
      text: "Unlike many rights issues, **renunciation** of private placement offers is **not** permitted—recipients are fixed up front.",
    },
    {
      icon: "Landmark",
      title: "Stamp on issuance",
      text: "Issuance stamp varies by state (e.g. **0.01%** standard issuance illustration; **higher** slabs cited for certain jurisdictions such as Delhi in recent circulars—confirm current state law).",
    },
    {
      icon: "Database",
      title: "Demat readiness",
      text: "**Rule 9B** means ISIN, corporate action, and promoter/KMP demat prerequisites for applicable private companies before issue.",
    },
  ],
  eligibility: [
    {
      title: "Rights issue (Section 62)",
      items: [
        "Offer only to **equity shareholders** on the **record date**.",
        "**Proportional** offer to existing paid-up holdings unless a different ratio is permitted under law and Articles.",
        "**AoA** must not prohibit further issue of shares.",
        "**Authorised capital** headroom—or **SH-7** increase first.",
        "**Demat** compliance for promoters/directors/KMP where applicable before issue.",
      ],
    },
    {
      title: "Private placement (Section 42)",
      items: [
        "**Identified persons** only—no open invitation or mass advertising.",
        "**Maximum 200** offerees per financial year (subject to law on exclusions).",
        "**Special resolution** (typically **75%**) and **MGT-14** filing.",
        "**Registered valuer** report to justify **issue price**.",
        "Subscription only through **banking channels** into a **separate scheduled bank account** until allotment.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Rights issue",
      content: {
        title: "Rights issue checklist",
        items: [
          "**Letter of offer** (price, ratio, timetable—often **15–30 days**).",
          "**Board resolution** with record date and issue parameters.",
          "**Application form** for acceptance.",
          "**Renunciation form** where renunciation is allowed.",
          "**Form PAS-3** within **30 days** of allotment with **list of allottees**.",
          "**Form MGT-14** for public companies to file board resolution on share issue where required.",
        ],
      },
    },
    {
      tabTitle: "Private placement",
      content: {
        title: "Private placement checklist",
        items: [
          "**Form PAS-4** serially numbered offer-cum-application to identified persons.",
          "**Form PAS-5** record of private placement (filed/attached as rules require).",
          "**Special resolution** and **MGT-14** within **30 days**.",
          "**Valuation report** from **registered valuer**.",
          "**Proof of separate bank account** and utilisation only post allotment.",
          "**PAS-3** after allotment.",
          "**Demat**: ISIN letter, **corporate action** to depositories for non-small companies.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Structuring",
      description:
        "Choose rights vs placement; confirm **200** limit, **demat**, capital room, and valuer need.",
    },
    {
      step: 2,
      title: "Board & shareholder",
      description:
        "Board resolution; **EGM/AGM** for **special resolution** where required; explanatory statement.",
    },
    {
      step: 3,
      title: "Offer & subscription",
      description:
        "Issue letter of offer or **PAS-4**; open **escrow** for placement; collect applications.",
    },
    {
      step: 4,
      title: "Allotment",
      description:
        "Board allotment; demat credit or certificates for small companies; update registers.",
    },
    {
      step: 5,
      title: "ROC & stamp",
      description:
        "**PAS-3** (and **MGT-14** if applicable); pay issuance stamp per state rules; **SH-7** if capital altered.",
    },
  ],
  fees: [
    {
      component: "ROC — PAS-3 / MGT-14",
      fees: "₹200 – ₹600 per form (typical)",
      remarks: "Additional fees multiply if late; placement late fees noted up to high multiples in MCA practice.",
    },
    {
      component: "Stamp on issuance / renunciation",
      fees: "State-specific (e.g. 0.01% issuance illustrations; renunciation of rights may attract separate stamp)",
      remarks: "Verify current state schedule—Delhi and others may use higher issuance slabs.",
    },
    {
      component: "Registered valuer",
      fees: "₹25,000 – ₹1,50,000+",
      remarks: "Mandatory for private placement; rights at **premium** may need valuer support.",
    },
    {
      component: "Professional (CA/CS)",
      fees: "₹15,000 – ₹50,000+",
      remarks: "PAS-4/5, filings, and board documentation.",
    },
    {
      component: "Depository corporate action",
      fees: "~₹10 per record (minimums apply); issuer admission ~₹20,000 one-time if new",
      remarks: "NSDL/CDSL fee schedules.",
    },
  ],
  faqs: [
    {
      q: "Is a shareholders’ vote always needed for a rights issue?",
      a: "**Board** authority often suffices for a classic **Section 62** rights issue, but check **Articles**, **stock exchange** rules if listed, and any **special** terms.",
    },
    {
      q: "Can unsecured debentures be privately placed?",
      a: "Yes, under the **debenture** provisions of the Act with **trustee**, **DRR**, **charge**, and **PAS** discipline as applicable to the instrument.",
    },
    {
      q: "Who cannot be casually added to a private placement?",
      a: "The offer must stay within **identified persons** and the **200**-person statutory frame; public-style marketing is prohibited.",
    },
  ],
};
