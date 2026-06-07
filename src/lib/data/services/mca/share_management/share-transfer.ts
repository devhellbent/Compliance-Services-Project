import { ServiceData } from "@/lib/types";

export const shareTransferData: ServiceData = {
  title: "Share Transfer",
  breadcrumb: ["Home", "MCA", "Share Management Solutions", "Share Transfer"],
  description: "Voluntary process of passing ownership of company shares from a transferor to a transferee, requiring legal documentation and stamp duty payment.",
  overview: `The **Transfer of Shares** is the voluntary passing of ownership rights in a company from a "Transferor" (Seller) to a "Transferee" (Buyer).

Governed by Section 56 of the Companies Act, 2013, it is treated as the sale or gift of movable property. While public company shares are freely tradable, private companies often have restrictions in their Articles of Association (AOA) to keep control within a specific group. The process requires formal execution of Form SH-4 and payment of specific stamp duty.`,
  advantages: [
    { icon: "Zap", title: "Ownership Flexibility", text: "Allows founders and investors to exit, bring in new talent, or transfer wealth to family members via gifting." },
    { icon: "TrendingUp", title: "Market Liquidity", text: "Enables shareholders to convert their equity into cash by selling to interested buyers at mutually agreed prices." },
    { icon: "ShieldCheck", title: "Legal Validity", text: "The formal board approval and filing process ensure that the new owner is officially recognized in the company's Register of Members." },
    { icon: "Award", title: "Succession Planning", text: "Facilitates smooth business transitions within families by legally gifting shares to heirs with a nominal 0.015% stamp duty." },
    { icon: "Lock", title: "Controlled Transfer", text: "In private companies, the AOA allows existing partners to have the 'Right of First Refusal' (ROFR), preventing outsiders from gaining control." },
    { icon: "BarChart", title: "Investment Realization", text: "Essential for Venture Capital (VC) and Angel investors to 'exit' and realize gains on their early-stage investments." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "Strict Procedural Steps", text: "Requires physical exchange of certificates, execution of SH-4, and mandatory board approval; errors can lead to the transfer being rejected." },
    { icon: "Clock", title: "Regulatory Timeline", text: "Cross-border transfers (Resident to Non-Resident) require RBI filing (Form FC-TRS) within 60 days, adding complexity." },
  ],
  eligibility: [
    {
      title: "Contractual Eligibility",
      items: [
        "**Consent:** Both transferor and transferee must sign the transfer deed (SH-4).",
        "**Witnessing:** The deed must be signed in the presence of at least one witness.",
        "**Board Approval:** The company's board must formally approve the transfer.",
      ],
    },
    {
      title: "Statutory Criteria",
      items: [
        "**Fully Paid Shares:** Partly-paid shares require a 'No Objection' from the buyer (Form SH-5).",
        "**Stamp Duty:** Mandatory payment of 0.015% duty on the sale consideration.",
        "**AOA Compliance:** Must not violate any restrictions mentioned in the company's internal bylaws.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "The Deed",
      content: {
        title: "Instrument of Transfer",
        items: [
          "**Form SH-4:** Properly filled and signed by both parties.",
          "**Share Transfer Stamps:** Affixed on SH-4 (0.015% of consideration).",
          "**Original Share Certificate:** Must be surrendered for endorsement or cancellation.",
        ],
      },
    },
    {
      tabTitle: "KYC Documents",
      content: {
        title: "Identify Proofs",
        items: [
          "**PAN Card:** Self-attested copies of both the Transferor and Transferee.",
          "**Address Proof:** Aadhaar or Voter ID of the Transferee (buyer).",
          "**Passport:** For foreign nationals (must be apostilled).",
        ],
      },
    },
    {
      tabTitle: "Corporate Records",
      content: {
        title: "Internal Authorizations",
        items: [
          "**Board Resolution:** CTC of the resolution approving the transfer.",
          "**Gift Deed:** Recommended if the transfer is a gift to a relative.",
          "**Valuation Report:** Required for RBI filing if transferring to a non-resident.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Agreement", description: "The seller and buyer agree on a price (or gift) and sign a Letter of Intent." },
    { step: 2, title: "Execute SH-4", description: "Fill Form SH-4, affix share transfer stamps (0.015%), and get it signed and witnessed." },
    { step: 3, title: "Submission", description: "The Transferee submits SH-4 along with the Original Share Certificate to the company's office." },
    { step: 4, title: "Board Approval", description: "The company holds a board meeting (or committee) to review and approve the transfer request." },
    { step: 5, title: "Register Update", description: "The company updates its 'Register of Members' and endorses the back of the share certificate." },
    { step: 6, title: "FEMA Filing", description: "If a non-resident is involved, file Form FC-TRS with the RBI via the FIRMS portal within 60 days." },
  ],
  fees: [
    { component: "Stamp Duty (All States)", fees: "0.015%", remarks: "Calculated on the total consideration value." },
    { component: "Stamp Duty (Gift)", fees: "0.015%", remarks: "Calculated on the fair market value." },
    { component: "RBI Filing Fee (FC-TRS)", fees: "₹0", remarks: "No govt fee, but late filing attracts heavy penalties." },
    { component: "Professional Fee", fees: "₹3,000 - ₹10,000", remarks: "For drafting, valuation, and certification." },
    { component: "Late Filing (RBI)", fees: "LSF (Late Submission Fee)", remarks: "Minimum ₹5,000 for delayed FEMA filings." },
  ],
  faqs: [
    { q: "What is the current stamp duty on share transfer?", a: "As of July 1, 2020, it is a uniform rate of 0.015% across all Indian states." },
    { q: "Can a private company refuse to transfer shares?", a: "Yes, a private company can refuse if the transfer violates its Articles of Association (AOA), but it must provide a valid reason." },
    { q: "What is the difference between Transfer and Transmission?", a: "Transfer is voluntary (sale/gift), while Transmission is involuntary (triggered by death, insolvency, or lunacy)." },
    { q: "Is stamp duty applicable if I gift shares to my son?", a: "Yes, even for gifts, a nominal stamp duty of 0.015% is payable on the fair market value of the shares." },
  ],
};
