import { ServiceData } from "@/lib/types";

export const changeInLlpAgreementData: ServiceData = {
  title: "Change in LLP Agreement",
  breadcrumb: ["Home", "MCA", "Special Compliance Services", "Change in LLP Agreement"],
  description: "Formal amendment process for updating an LLP's governing charter to reflect changes in partners, capital, or business activities.",
  overview: `A **Change in LLP Agreement** refers to any formal amendment made to the legal charter that governs a Limited Liability Partnership (LLP) in India.

Because an LLP is a separate legal entity, most significant internal changes—such as adding partners, shifting profit ratios, or altering business goals—must be documented in a Supplementary LLP Agreement and filed with the Ministry of Corporate Affairs (MCA) under Section 23 of the LLP Act, 2008.`,
  advantages: [
    { icon: "Zap", title: "Reflects Business Evolution", text: "Allows the LLP to pivot its business strategy by updating the 'Object Clause' to include new industries or services." },
    { icon: "Users", title: "Seamless Partner Management", text: "Facilitates the legal onboarding of new talent/investors and the formal exit of retiring partners." },
    { icon: "TrendingUp", title: "Financial Flexibility", text: "Enables adjustments to capital contribution and profit-sharing ratios as the business scales and partners' roles evolve." },
    { icon: "ShieldCheck", title: "Legal Validity", text: "Ensures all internal changes are government-recognized, providing a clear audit trail and preventing future legal disputes among partners." },
    { icon: "MessageCircle", title: "Conflict Resolution", text: "Provides an opportunity to add modern dispute resolution or 'deadlock' clauses to an outdated boilerplate agreement." },
    { icon: "Lock", title: "Restrictive Covenants", text: "Allows partners to introduce non-compete or non-poaching clauses to protect the firm's interests when a partner leaves." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "Mandatory Stamp Duty", text: "Every supplementary deed requires payment of state-specific stamp duty, which can be significant if increasing capital." },
    { icon: "Clock", title: "Strict 30-Day Window", text: "Failure to file the change with the MCA within 30 days triggers immediate and uncapped daily penalties." },
    { icon: "CreditCard", title: "Incremental Filing Costs", text: "Requires professional fees for drafting and certification, in addition to government filing fees." },
  ],
  eligibility: [
    {
      title: "Triggering Events",
      items: [
        "Admission of a new partner or designated partner.",
        "Cessation or resignation of an existing partner.",
        "Change in name or designation of a partner.",
        "Change in Profit/Loss sharing ratio.",
        "Change in Capital Contribution amount.",
        "Change in business objects or registered office address.",
      ],
    },
    {
      title: "Statutory Requirements",
      items: [
        "Agreement from all existing partners (unless provided otherwise in the initial agreement).",
        "Execution of a Supplementary Deed on non-judicial stamp paper.",
        "Filing with the MCA within 30 days of execution.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "The Deed",
      content: {
        title: "Supplementary Agreement",
        items: [
          "**Supplementary LLP Agreement:** Drafted on Non-Judicial Stamp Paper (state-specific value).",
          "**Signatures:** Signed by all existing and newly admitted partners.",
          "**Certification:** Notarized by a Public Notary and attested by two witnesses.",
        ],
      },
    },
    {
      tabTitle: "Partner Proofs",
      content: {
        title: "Required for Partner Changes",
        items: [
          "**Consent Letters:** From newly admitted partners (Form 4 attachment).",
          "**Resignation Letters:** If a partner is leaving.",
          "**KYC:** Self-attested PAN and Address Proof for all new partners.",
        ],
      },
    },
    {
      tabTitle: "Administrative",
      content: {
        title: "Internal Authorizations",
        items: [
          "**Board Resolution:** Signed by Designated Partners consenting to the changes.",
          "**Original Agreement:** A copy of the initial LLP agreement for reference.",
          "**Address Proof:** If moving the registered office (Utility bill + NOC).",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Partner Meeting", description: "Hold a meeting of all partners to discuss and approve the proposed changes." },
    { step: 2, title: "Drafting", description: "Draft a Supplementary LLP Agreement detailing the specific amendments/substitutions." },
    { step: 3, title: "Execution", description: "Print the deed on stamp paper, get it signed by all partners, and have it notarized." },
    { step: 4, title: "Prepare E-Forms", description: "Fill Form 3 (Information with regard to LLP Agreement) and Form 4 (Notice of change of partners, if applicable)." },
    { step: 5, title: "Digital Signing", description: "Affix DSCs of designated partners and a practicing professional (CA/CS/CMA)." },
    { step: 6, title: "MCA Filing", description: "Upload forms to the MCA portal and pay fees within 30 days of execution." },
  ],
  fees: [
    { component: "MCA Filing Fee (Capital < ₹1 Lakh)", fees: "₹50", remarks: "Per form (Form 3/4)." },
    { component: "MCA Filing Fee (Capital ₹1L - ₹5L)", fees: "₹100", remarks: "Per form (Form 3/4)." },
    { component: "MCA Filing Fee (Capital > ₹1Cr)", fees: "₹600", remarks: "Per form (Form 3/4)." },
    { component: "Stamp Duty (State-Specific)", fees: "₹500 - ₹15,000+", remarks: "Varies significantly by state and capital increase." },
    { component: "Late Filing Penalty", fees: "₹100 / day", remarks: "Applies per day of delay past 30 days (no upper limit)." },
    { component: "Professional Fee", fees: "₹3,000 - ₹10,000", remarks: "For drafting and certification." },
  ],
  faqs: [
    { q: "What is the deadline for filing the change with MCA?", a: "The changes must be filed via Form 3 and Form 4 within 30 days of the execution of the Supplementary Deed." },
    { q: "Is stamp duty mandatory for every change?", a: "Yes, every time a supplementary agreement is executed, it must be stamped according to the respective State's Stamp Act." },
    { q: "Can I increase capital and change partners in the same filing?", a: "Yes, you can record multiple changes in a single Supplementary Deed and file them together via Form 3 and Form 4." },
    { q: "What happens if I miss the 30-day deadline?", a: "The penalty is ₹100 per day of delay, and there is no maximum cap on this penalty." },
  ],
};
