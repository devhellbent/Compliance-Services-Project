import { ServiceData } from "@/lib/types";

export const esopStructuringImplementationData: ServiceData = {
  title: "ESOP Structuring and Implementation",
  breadcrumb: [
    "Home",
    "Compliance",
    "Corporate Service",
    "ESOP Structuring and Implementation",
  ],
  description:
    "Section 62(1)(b) and Rule 12 schemes—special resolution, SH-6 register, grant letters, vesting, FMV valuer, exercise, PAS-3, and listed SBEB overlays.",
  overview: `An **ESOP** grants employees a right to acquire **company shares** at a **pre-determined exercise price** after **vesting**. In India, **Section 62(1)(b)** and **Rule 12** of the Companies (Share Capital and Debentures) Rules, 2014 set the core company-law framework; **listed** issuers also follow **SEBI SBEB** regulations.

Companies use ESOPs for **retention** (multi-year vesting), **alignment** with shareholders, and **cash conservation** at early stages. Implementation spans **scheme document**, **board and special resolutions**, **explanatory statement**, **grant letters**, **SH-6** register, **registered valuer / merchant banker FMV** for perquisite and pricing compliance, **exercise** mechanics, **PAS-3** on allotment, and payroll/tax coordination.`,
  advantages: [
    {
      icon: "Users",
      title: "Retention (“golden handcuffs”)",
      text: "**Vesting** schedules reward tenure—unvested options lapse on early exit.",
    },
    {
      icon: "Handshake",
      title: "Alignment with shareholders",
      text: "Employees think like owners when wealth ties to **enterprise value**.",
    },
    {
      icon: "Wallet",
      title: "Cash conservation",
      text: "Startups compensate with **future equity** when current salary budgets are tight.",
    },
    {
      icon: "TrendingUp",
      title: "Productivity culture",
      text: "Visible link between performance and **stock price** supports innovation and cost focus.",
    },
    {
      icon: "Award",
      title: "Employer branding",
      text: "Competitive ESOP stories help hiring versus cash-only peers.",
    },
    {
      icon: "PieChart",
      title: "Employee wealth upside",
      text: "Exercise at **grant/exercise** pricing below FMV can create meaningful gains if the company scales (tax as per income-tax rules).",
    },
    {
      icon: "Gavel",
      title: "Governed ownership",
      text: "Once exercised, employees hold ordinary shares with **dividends** and **voting** like other members (subject to class).",
    },
  ],
  disadvantages: [
    {
      icon: "Clock",
      title: "Operational overhead",
      text: "**SH-6** tracking for grant, vest, exercise, lapse, and cancellation across leavers is intensive.",
    },
    {
      icon: "Calculator",
      title: "Valuation and tax complexity",
      text: "**FMV** exercises, perquisite payroll, and year-end disclosures require coordinated **valuer–HR–payroll–auditor** work.",
    },
    {
      icon: "FileWarning",
      title: "Dilution management",
      text: "Large pools affect **EPS**; secondary liquidity for private companies may be limited until a **liquidity event**.",
    },
    {
      icon: "Scale",
      title: "Listed compliance",
      text: "**SEBI** timelines, disclosures, and pricing safeguards add cost versus private-only programmes.",
    },
  ],
  eligibility: [
    {
      title: "Who may receive (Rule 12)",
      items: [
        "**Permanent employees** (India or abroad).",
        "**Whole-time directors** and **employee directors**.",
        "Employees of **holding / subsidiary** companies.",
      ],
    },
    {
      title: "Who is excluded (typical)",
      items: [
        "**Promoter group** persons.",
        "**Independent directors**.",
        "Directors (and specified relatives / bodies corporate) holding **>10%** equity—excluded from ESOPs.",
      ],
    },
    {
      title: "Statutory conditions",
      items: [
        "**Special resolution** approving scheme and pool.",
        "**Separate resolution** if identified-employee grants in a year reach/exceed **1%** of issued capital (per Rule).",
        "**Minimum one year** between **grant** and **start of vesting**.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Authorisation",
      content: {
        title: "Plan foundation",
        items: [
          "**ESOP scheme** document (pool, vesting, exercise, leaver rules).",
          "**Board resolution** approving draft scheme.",
          "**Notice + explanatory statement** for general meeting.",
          "**Special resolution** and **MGT-14** filing.",
        ],
      },
    },
    {
      tabTitle: "Grants",
      content: {
        title: "Employee level",
        items: [
          "**Grant letters** with number, exercise price, vesting calendar.",
          "**Employee acceptance**.",
          "**SH-6** register entries.",
        ],
      },
    },
    {
      tabTitle: "Exercise & allotment",
      content: {
        title: "Closing the loop",
        items: [
          "**Exercise application** and payment evidence.",
          "**PAS-3** after allotment to employees.",
          "**SH-1** / demat credit within **two months** of exercise (per Companies Act timelines for certificates where applicable).",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Design sprint",
      description:
        "Size pool, cliff, performance conditions, leaver matrix, and liquidity philosophy.",
    },
    {
      step: 2,
      title: "Legal pack",
      description:
        "Draft scheme, grants template, explanatory statement, and resolutions.",
    },
    {
      step: 3,
      title: "Shareholder approval",
      description:
        "EGM/postal ballot; file **MGT-14**; adopt **SH-6** process.",
    },
    {
      step: 4,
      title: "Rollout",
      description:
        "Issue grants, run valuer FMV cadence, operate exercise windows.",
    },
    {
      step: 5,
      title: "Allotment hygiene",
      description:
        "**PAS-3**, cap table update, payroll perquisites, and board disclosures.",
    },
  ],
  fees: [
    {
      component: "ROC — MGT-14 / PAS-3",
      fees: "₹300 – ₹600 typical per form",
      remarks: "Plus SH-7 stamp/ROC if authorised capital is raised for pool.",
    },
    {
      component: "Scheme drafting",
      fees: "₹50,000 – ₹2,00,000+",
      remarks: "Trust structures at top of range.",
    },
    {
      component: "FMV valuation",
      fees: "₹20,000 – ₹75,000+ per valuation",
      remarks: "Merchant banker involvement for listed programmes.",
    },
    {
      component: "Annual compliance",
      fees: "₹10,000 – ₹30,000 / year",
      remarks: "SH-6 maintenance and board report disclosures.",
    },
  ],
  faqs: [
    {
      q: "Can LLPs issue ESOPs?",
      a: "LLPs use different **partner** incentive tools; equity ESOP mechanics are company-centric—confirm structure before promising options.",
    },
    {
      q: "What extra applies to listed companies?",
      a: "**SEBI SBEB** regulations add grant/pricing/disclosure requirements beyond the Companies Act.",
    },
  ],
};
