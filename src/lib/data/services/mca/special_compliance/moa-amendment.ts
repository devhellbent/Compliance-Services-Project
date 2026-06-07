import { ServiceData } from "@/lib/types";

export const moaAmendmentData: ServiceData = {
  title: "MOA Amendment",
  breadcrumb: ["Home", "MCA", "Special Compliance Services", "MOA Amendment"],
  description: "Modification of a company's fundamental charter to change its name, registered office state, business objects, or liability status.",
  overview: `The **Memorandum of Association (MOA)** is the supreme legal document of a company, acting as its Charter or Constitution. It defines the company’s external boundaries and its relationship with the outside world.

An MOA Amendment (under Section 13 of the Companies Act, 2013) is a major legal process used to alter critical identity details like the company name, business objects, or the state of the registered office.`,
  advantages: [
    { icon: "Zap", title: "Business Diversification", text: "Allows the company to legally venture into new business sectors by updating the 'Object Clause', preventing 'Ultra Vires' (unauthorized) actions." },
    { icon: "Globe", title: "Geographic Scaling", text: "Enables the company to shift its registered office to a different state to access better markets, talent, or infrastructure." },
    { icon: "BarChart", title: "Fundraising Enablement", text: "Mandatory for increasing the 'Authorized Share Capital', allowing the issuance of new shares to VCs, PE firms, or through an IPO." },
    { icon: "TrendingUp", title: "Identity Evolution", text: "Supports rebranding by allowing a change in the 'Name Clause' to align with a new market brand or group identity." },
    { icon: "Award", title: "Investor Confidence", text: "An updated MOA serves as a credible public record, giving banks and partners a transparent view of the company's legal standing." },
    { icon: "ShieldCheck", title: "Risk Mitigation", text: "Helps companies incorporated under older Acts align with modern 2013 Act standards, reducing regulatory friction." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "Strict Government Oversight", text: "Critical changes like Name or State shifts require prior approval from the Central Government or Regional Director." },
    { icon: "UserCheck", title: "Shareholder Exit Options", text: "If a company has unspent public funds, it must provide a fair exit opportunity to 'dissenting shareholders' before changing its objects." },
    { icon: "Clock", title: "Long Lead Times", text: "Complex amendments (like state-to-state shifts) can take 2-4 months to complete due to newspaper ads and government hearings." },
  ],
  eligibility: [
    {
      title: "Key Prerequisites",
      items: [
        "**Special Resolution:** Approval by 75% majority of shareholders.",
        "**Stakeholder Protection:** Proof that the change does not unfairly disadvantage creditors or minority shareholders.",
        "**No Defaults:** Companies with pending annual filings are barred from Name Change amendments.",
      ],
    },
    {
      title: "Clause Triggers",
      items: [
        "**Name Clause:** Rebranding or merger/conversion.",
        "**Situation Clause:** Moving headquarters to another state.",
        "**Object Clause:** Pivoting to a new line of business.",
        "**Capital Clause:** Increasing share issuance capacity.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Core Filings",
      content: {
        title: "Standard Requirements",
        items: [
          "**Certified Special Resolution:** Signed copy with 75% majority.",
          "**Altered MOA:** The full updated version reflecting the clause change.",
          "**Explanatory Statement:** Detailing why the amendment is necessary (Section 102).",
        ],
      },
    },
    {
      tabTitle: "Name/State Proofs",
      content: {
        title: "For Specific Amendments",
        items: [
          "**Name Approval Letter:** From the RUN service (for name changes).",
          "**Regional Director Order:** For state-to-state office shifts.",
          "**Newspaper Ads:** Proof of public notice (English and Vernacular) for state shifts.",
        ],
      },
    },
    {
      tabTitle: "Internal Support",
      content: {
        title: "Governance Documents",
        items: [
          "**Board Resolution:** Proposing the change to shareholders.",
          "**Creditor List:** Verified list for registered office shifts.",
          "**Director Affidavits:** Confirming no employee retrenchment or pending investigations.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Board Approval", description: "Hold a board meeting to approve the proposed amendment and call for an EGM." },
    { step: 2, title: "EGM/AGM", description: "Pass a Special Resolution with at least 75% majority of members present and voting." },
    { step: 3, title: "Govt Approval", description: "Obtain prior approval from ROC (for Name) or Regional Director (for State shift) if required." },
    { step: 4, title: "Form MGT-14", description: "File the Special Resolution with the ROC within 30 days." },
    { step: 5, title: "Final Registration", description: "File specific forms (like INC-24 for name or INC-23 for state shift) to finalize the process." },
    { step: 6, title: "New Certificate", description: "For name or state changes, the ROC issues a Fresh Certificate of Incorporation." },
  ],
  fees: [
    { component: "MGT-14 Filing Fee (Capital < ₹1 Lakh)", fees: "₹200", remarks: "Standard ROC fee." },
    { component: "Form RUN (Name Approval)", fees: "₹1,000", remarks: "One-time fee for name reservation." },
    { component: "Regional Director Application (State Shift)", fees: "₹2,000 - ₹5,000", remarks: "Government fee for INC-23." },
    { component: "Newspaper Advertisements", fees: "₹5,000 - ₹15,000", remarks: "Varies by publication (mandatory for state shifts)." },
    { component: "Late Filing Penalty", fees: "2x - 12x Normal Fee", remarks: "Escalates based on duration of delay." },
    { component: "Professional Fee", fees: "₹5,000 - ₹20,000+", remarks: "Based on the complexity of the amendment." },
  ],
  faqs: [
    { q: "Can I change my business object at any time?", a: "Yes, by passing a Special Resolution and filing Form MGT-14, provided it's in the company's bona fide interest." },
    { q: "What is 'Ultra Vires'?", a: "Actions taken by a company beyond the powers listed in its MOA are considered 'Ultra Vires' and are legally void." },
    { q: "Is Central Government approval needed for all MOA changes?", a: "No, only for Name Changes and shifting the registered office to a different state." },
    { q: "How long does a state-to-state shift take?", a: "Due to mandatory public notices and Regional Director hearings, it typically takes 3-4 months." },
  ],
};
