import { ServiceData } from "@/lib/types";

export const issuePreferenceConvertibleDebenturesData: ServiceData = {
  title: "Issue of Preference Shares / Convertible Debentures",
  breadcrumb: [
    "Home",
    "Compliance",
    "Corporate Service",
    "Issue of Preference Shares / Convertible Debentures",
  ],
  description:
    "Preference shares (Section 55) and convertible debentures (Section 71)—AoA powers, special resolutions, PAS-4/5, valuer, trustee, DRR, charge, and ROC filings.",
  overview: `**Preference shares** are **hybrid** instruments: typically **fixed dividend**, **preference** on liquidation over equity, and **limited voting** except on prescribed matters. Types include **cumulative / non-cumulative**, **participating**, and **redeemable** (irredeemable preference shares are **not** permitted in India; **maximum redemption** period rules apply, with **infrastructure** exceptions).

**Convertible debentures** pay **interest** initially and carry a **conversion** right into equity at a pre-set price or formula—**delayed dilution** and often **lower coupon** than plain debt because of equity upside.

Issuance requires **Articles** authority, **board** and usually **special resolution**, **registered valuer** pricing for placements, **PAS-3** on allotment, **debenture trustee** and **DRR** where the Act mandates, **charge** creation for secured debentures, and **SEBI** overlays for **listed** issuers (e.g. credit rating for certain public/rights debt).`,
  advantages: [
    {
      icon: "Landmark",
      title: "Preference — limited voting dilution",
      text: "Founders can raise capital while keeping **day-to-day control** if voting rights remain restricted as per issue terms and law.",
    },
    {
      icon: "Shield",
      title: "Preference — flexible cash service",
      text: "Dividends may be **skipped** in loss years for **non-cumulative** structures, unlike rigid loan principal amortisation.",
    },
    {
      icon: "TrendingUp",
      title: "Preference — balance sheet strength",
      text: "Treated as **equity** for many covenant tests—can support future **bank** lines.",
    },
    {
      icon: "Users",
      title: "Preference — conservative investor fit",
      text: "Attracts investors wanting **priority cash flows** with less volatility than common equity.",
    },
    {
      icon: "Percent",
      title: "Convertible — lower coupon",
      text: "Investors accept reduced interest for **conversion optionality**.",
    },
    {
      icon: "BadgePercent",
      title: "Convertible — tax-deductible interest",
      text: "**Interest** is generally a business expense until conversion—unlike **preference dividends**.",
    },
    {
      icon: "Clock",
      title: "Convertible — delayed dilution",
      text: "Cash today; equity issued only if and when **conversion** triggers.",
    },
    {
      icon: "RefreshCw",
      title: "Convertible — automatic deleveraging on conversion",
      text: "Principal and interest obligations **end** once equity is issued on conversion.",
    },
  ],
  disadvantages: [
    {
      icon: "AlertTriangle",
      title: "Preference — cumulative arrears",
      text: "**Cumulative** dividends stack in weak years and must be cleared before common dividends.",
    },
    {
      icon: "TrendingDown",
      title: "Preference — higher cost than debt",
      text: "No **interest tax shield**; investors demand **premium yield** versus secured loans.",
    },
    {
      icon: "Eye",
      title: "Preference — seniority over common",
      text: "Heavy preference stacks can **depress** common equity appeal for large institutions.",
    },
    {
      icon: "BarChart3",
      title: "Convertible — EPS dilution later",
      text: "Conversion injects new shares—**EPS** and voting dilution when triggered.",
    },
    {
      icon: "FileWarning",
      title: "Convertible — loss of interest shield",
      text: "After conversion, **interest deduction** ends and corporate tax on profits applies to equity returns as dividends/tax law dictates.",
    },
    {
      icon: "Gavel",
      title: "Convertible — default on interest",
      text: "Interest is a **contractual/legal** obligation—non-payment can trigger **enforcement** or insolvency processes.",
    },
    {
      icon: "HelpCircle",
      title: "Convertible — conversion uncertainty",
      text: "If share price lags, investors may **not convert**, leaving **principal repayment** pressure.",
    },
  ],
  eligibility: [
    {
      title: "Preference shares (Section 55)",
      items: [
        "**AoA** must authorise preference shares (amend if missing).",
        "**No subsisting defaults** on redemption or preference dividends.",
        "**Special resolution** for issuance.",
        "**Redeemable** only; observe **maximum tenure** (typically **20 years**, infrastructure **30** with staged redemption rules).",
      ],
    },
    {
      title: "Convertible debentures (Section 71)",
      items: [
        "**Special resolution** to issue **convertible** debentures.",
        "**No voting rights** on debentures.",
        "**Credit rating** for prescribed **listed** debt/rights issues.",
        "**Debenture trustee** when maturity **exceeds 18 months** (as per Act).",
        "**DRR** and **asset cover** rules for **secured redeemable** debentures where applicable.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Authorisation",
      content: {
        title: "Before the offer",
        items: [
          "**Updated MoA/AoA**.",
          "**Board resolution** and **special resolution** with **explanatory statement**.",
          "**MGT-14** within **30 days** of SR.",
        ],
      },
    },
    {
      tabTitle: "Private placement path",
      content: {
        title: "Offer stage",
        items: [
          "**PAS-4** offer letter.",
          "**PAS-5** private placement record.",
          "**Registered valuer** report for pricing / conversion terms.",
        ],
      },
    },
    {
      tabTitle: "Allotment & debt security",
      content: {
        title: "Closing",
        items: [
          "**PAS-3** with **list of allottees** within statutory window.",
          "**SH-1** / demat corporate action for preference shares (timelines per Act).",
          "**Debenture certificate** / demat credit within prescribed period.",
          "**SH-12** trust deed for **secured** debentures; **CHG** filings for charge creation.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Structuring",
      description:
        "Select instrument, coupon, conversion formula, maturity, covenants, and trustee/DRR need.",
    },
    {
      step: 2,
      title: "Corporate approvals",
      description:
        "Board and **EGM** SR; file **MGT-14**.",
    },
    {
      step: 3,
      title: "Offer & subscription",
      description:
        "Issue **PAS-4/5** for private offers; open bank collection; verify KYC.",
    },
    {
      step: 4,
      title: "Security & trustee",
      description:
        "Execute trust deed, create charge, fund DRR where required.",
    },
    {
      step: 5,
      title: "Allot & comply",
      description:
        "**PAS-3**, certificates/demat, SH-6 tracking for debentures, ongoing reporting.",
    },
  ],
  fees: [
    {
      component: "ROC — MGT-14 / PAS-3 / SH-7",
      fees: "₹200 – ₹600+ per form (capital-linked)",
      remarks: "Late PAS-3 can attract high multipliers up to stated caps.",
    },
    {
      component: "Stamp on issue",
      fees: "~0.005% of issue value (illustrative for securities issuance)",
      remarks: "Confirm state e-stamping schedule.",
    },
    {
      component: "Valuer / merchant banker / rating",
      fees: "₹20,000 – ₹1,00,000+ each leg",
      remarks: "Listed programmes need rating and banker as regulations require.",
    },
    {
      component: "Debenture trustee annual fee",
      fees: "Commercial",
      remarks: "Typically retainer plus out-of-pocket.",
    },
  ],
  faqs: [
    {
      q: "When is DRR required?",
      a: "For **secured redeemable** debentures the Act mandates a **Debenture Redemption Reserve** and **asset cover** subject to prescribed percentages—align with current MCA rules.",
    },
    {
      q: "Can preference shares be perpetual?",
      a: "**Irredeemable** preference shares are **prohibited**; maximum **redemption** horizons and infrastructure exceptions apply.",
    },
  ],
};
