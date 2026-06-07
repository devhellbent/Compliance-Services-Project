import { ServiceData } from "@/lib/types";

export const opcToPrivateLimitedData: ServiceData = {
  title: "OPC to Private Limited",
  breadcrumb: ["Home", "MCA", "Legal Business Transformations", "OPC to Private Limited"],
  description: "Conversion of a single-member entity into a multi-shareholder Private Limited Company to allow for co-founders and institutional funding.",
  overview: `Converting a **One Person Company (OPC)** to a **Private Limited Company** (under Section 18 of the Companies Act, 2013) is a strategic transition for solo entrepreneurs ready to scale.

This change allows for multiple shareholders, making it easier to raise capital from investors and issue ESOPs. While mandatory conversion rules were relaxed in 2021, most OPCs still opt for voluntary conversion to shed the single-member restriction and build corporate credibility.`,
  advantages: [
    { icon: "TrendingUp", title: "Access to Venture Capital", text: "Allows the company to have up to 200 shareholders, enabling the dilution of equity to attract VCs and Angel Investors." },
    { icon: "Award", title: "Ability to Offer ESOPs", text: "Legally enables Employee Stock Option Plans, which is impossible in an OPC where ownership must remain with a single individual." },
    { icon: "Globe", title: "FDI Eligibility", text: "Private Limited Companies are eligible for Foreign Direct Investment (FDI) via the automatic route, unlike OPCs which are restricted to Indian citizens." },
    { icon: "Zap", title: "Separate Management", text: "Requires a minimum of two directors, introducing shared decision-making and diverse expertise to reduce operational risk." },
    { icon: "CheckCircle", title: "Unlimited Scalability", text: "No upper limit on turnover or capital; a Private Limited Company can grow indefinitely and form subsidiaries with ease." },
    { icon: "Search", title: "Enhanced Credibility", text: "Removing the '(OPC)' suffix often enhances brand trust with large corporate clients and helps in winning government tenders." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "Increased Compliance", text: "Requires 4 board meetings per year (instead of 2) and mandatory Annual General Meetings (AGM)." },
    { icon: "Clock", title: "Administrative Update", text: "Requires updating all official stationery, signage, and bank records to reflect the new company name (without the OPC suffix)." },
  ],
  eligibility: [
    {
      title: "Structural Criteria",
      items: [
        "**Minimum Members:** Must increase the number of shareholders from 1 to at least 2.",
        "**Minimum Directors:** Must increase the number of directors from 1 to at least 2.",
        "**Resident Director:** At least one director must be a resident of India (≥ 182 days stay).",
      ],
    },
    {
      title: "Consents & Status",
      items: [
        "**Unanimous Consent:** Written approval from the sole member and the Nominee.",
        "**Statutory Compliance:** All previous AOC-4 and MGT-7A filings must be up to date.",
        "**No Waiting Period:** Voluntary conversion is now allowed any time after incorporation.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Altered Charter",
      content: {
        title: "Revised Constitutional Docs",
        items: [
          "**Altered MOA:** Removing the OPC name suffix and the Nominee clause.",
          "**Altered AOA:** Adopting rules for share transfer restrictions and 2+ directors.",
          "**Special Resolution:** CTC of the resolution passed by the sole member.",
        ],
      },
    },
    {
      tabTitle: "Financial Proof",
      content: {
        title: "Verified Financial Status",
        items: [
          "**Audited Financials:** Latest Balance Sheet and P&L account.",
          "**CA Certificate:** Confirming current turnover and paid-up capital.",
          "**NOC from Creditors:** From all secured creditors agreeing to the conversion.",
        ],
      },
    },
    {
      tabTitle: "New Partners",
      content: {
        title: "KYC for 2nd Director/Member",
        items: [
          "**PAN & Aadhaar:** For the new directors and shareholders.",
          "**Form DIR-2:** Written consent from the new directors to act.",
          "**Address Proof:** Utility bill or Bank statement (max 2 months old).",
          "**Digital Signature (DSC):** Required for all directors.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Board Resolution", description: "Pass a resolution to initiate conversion, appoint new directors, and call for a meeting." },
    { step: 2, title: "Special Resolution", description: "The sole member passes a Special Resolution authorizing the conversion and charter changes." },
    { step: 3, title: "Form MGT-14", description: "File the Special Resolution with the ROC within 30 days." },
    { step: 4, title: "Form INC-6", description: "Submit the formal conversion application on the MCA portal along with altered MOA/AOA." },
    { step: 5, title: "ROC Verification", description: "The Registrar verifies the compliance and new member/director credentials." },
    { step: 6, title: "New COI", description: "Receive a fresh Certificate of Incorporation officially marking the company as Private Limited." },
  ],
  fees: [
    { component: "Form MGT-14", fees: "₹300 - ₹600", remarks: "Resolution filing fee." },
    { component: "Form INC-6 (Conversion)", fees: "₹300 - ₹600", remarks: "Conversion application fee." },
    { component: "Form DIR-12", fees: "₹300 - ₹600", remarks: "For adding the new director." },
    { component: "Stamp Duty (MOA/AOA)", fees: "₹1,000 - ₹5,000", remarks: "Varies by state (MH/KA are higher)." },
    { component: "Digital Signature (DSC)", fees: "₹1,500 - ₹2,500", remarks: "For each new director." },
    { component: "Professional Fee", fees: "₹10,000 - ₹20,000", remarks: "For drafting, auditing financials, and filing." },
  ],
  faqs: [
    { q: "Is conversion mandatory if I exceed ₹2 Crore turnover?", a: "No. Following the 2021 amendment, mandatory conversion thresholds for OPCs have been removed. It is now a voluntary choice." },
    { q: "Can I have co-founders in an OPC?", a: "No. An OPC must have exactly one shareholder. To add co-founders, you must convert to a Private Limited Company." },
    { q: "Does our company name change?", a: "Yes, the suffix '(OPC)' will be dropped. You must update your signage, stationery, and bank records accordingly." },
    { q: "What happens to the Nominee?", a: "In a Private Limited Company, the Nominee clause is removed because the company now has multiple shareholders to ensure succession." },
  ],
};
