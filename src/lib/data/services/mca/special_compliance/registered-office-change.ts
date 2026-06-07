import { ServiceData } from "@/lib/types";

export const registeredOfficeChangeData: ServiceData = {
  title: "Registered Office Change",
  breadcrumb: ["Home", "MCA", "Special Compliance Services", "Registered Office Change"],
  description: "Mandatory legal process for shifting a company's official address, ranging from local city moves to complex inter-state relocations.",
  overview: `The **Registered Office** of a company is its official point of contact for the government and stakeholders. Changing this address is a structured legal process governed by Section 12 of the Companies Act, 2013.

The complexity of the process depends on the distance of the move:
- **Same City:** Simple Board Resolution.
- **Outside City (Same ROC):** Special Resolution.
- **Different State:** Special Resolution + Regional Director approval + MOA Amendment.`,
  advantages: [
    { icon: "Zap", title: "Business Expansion", text: "Enables companies to move to larger facilities or prime business hubs (e.g., BKC Mumbai) as they grow and upscale operations." },
    { icon: "TrendingUp", title: "Proximity to Markets", text: "Allows shifting closer to target customers, key suppliers, or industry-specific talent pools to reduce logistical friction." },
    { icon: "DollarSign", title: "Cost Optimization", text: "Enables relocation to areas with lower commercial rents, cheaper utilities, or better state-specific tax incentives." },
    { icon: "Award", title: "Brand Credibility", text: "A prestigious registered address builds trust with high-value investors, clients, and global vendors." },
    { icon: "ShieldCheck", title: "Regulatory Alignment", text: "Moving to a permanent commercial premise from a temporary/residential one (used during incorporation) ensures long-term compliance." },
    { icon: "CheckCircle", title: "Consolidation Benefits", text: "Following a merger, companies can consolidate multiple offices into a single central location for administrative efficiency." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "Strict 30-Day Deadline", text: "The ROC must be notified within 30 days of the change. Failure attracts a heavy penalty of ₹1,000 per day." },
    { icon: "Clock", title: "Inter-State Complexity", text: "Shifting to a different state requires public newspaper ads and RD hearings, taking 3-4 months to complete." },
    { icon: "FileWarning", title: "Massive Administrative Update", text: "Requires updating address on all official stationery, signage, bank records, GST, and other statutory licenses." },
  ],
  eligibility: [
    {
      title: "Consent Requirements",
      items: [
        "**Local Move:** Board Resolution is sufficient.",
        "**Outside Local Limits:** Special Resolution (75% majority) is mandatory.",
        "**State Move:** Regional Director (RD) approval is required after public notice.",
      ],
    },
    {
      title: "Property Eligibility",
      items: [
        "The new premises must have a valid utility bill (Electricity/Gas/Telephone) not older than 2 months.",
        "If not owned by the company, a No Objection Certificate (NOC) from the owner is mandatory.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Address Proof",
      content: {
        title: "Mandatory for all moves",
        items: [
          "**Utility Bill:** Electricity, Gas, or Telephone bill (max 2 months old).",
          "**Rent Agreement:** Notarized deed and latest rent receipt (if rented).",
          "**NOC:** From the owner permitting the company to use the premises.",
        ],
      },
    },
    {
      tabTitle: "Corporate Approvals",
      content: {
        title: "Internal Authorizations",
        items: [
          "**Board Resolution:** Certified true copy authorizing the shift.",
          "**Special Resolution:** Passed at an EGM (if moving outside local limits).",
          "**Attendance Sheet:** Of members present at the EGM/Board Meeting.",
        ],
      },
    },
    {
      tabTitle: "State-to-State",
      content: {
        title: "Additional for State shifts",
        items: [
          "**Altered MOA:** Specifically updating the 'Situation Clause'.",
          "**Newspaper Ads (INC-26):** Published in one English and one Vernacular newspaper.",
          "**Creditor List:** Verified list not older than 1 month, supported by affidavit.",
          "**Regional Director Order:** To be filed in Form INC-28.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Property Search", description: "Identify new premises and secure utility bills/NOC from the owner." },
    { step: 2, title: "Board Approval", description: "Pass a resolution for the move; if outside city limits, call for an EGM." },
    { step: 3, title: "Shareholder Consent", description: "Pass a Special Resolution at the EGM (for non-local moves)." },
    { step: 4, title: "Public Notice", description: "For state-to-state moves, publish ads in newspapers to invite objections from creditors." },
    { step: 5, title: "Filing INC-22", description: "Submit Form INC-22 on the MCA portal within 30 days with address proof." },
    { step: 6, title: "Acknowledgment", description: "Receive the SRN/Approval and update the address on all company stationery and signage." },
  ],
  fees: [
    { component: "Form INC-22 (Capital < ₹1 Lakh)", fees: "₹200", remarks: "Standard filing fee." },
    { component: "Form INC-22 (Capital > ₹1Cr)", fees: "₹600", remarks: "Standard filing fee." },
    { component: "Regional Director Fee (INC-23)", fees: "₹2,000 - ₹5,000", remarks: "For ROC/State jurisdiction changes." },
    { component: "Newspaper Ads (State Shift)", fees: "₹5,000 - ₹15,000", remarks: "Mandatory public notice costs." },
    { component: "Late Filing Penalty", fees: "₹1,000 / day", remarks: "Non-filing penalty for each day of default." },
    { component: "Professional Fee", fees: "₹3,000 - ₹20,000", remarks: "Varies by the complexity of the move." },
  ],
  faqs: [
    { q: "Can a residential address be a registered office?", a: "Yes, as long as it is within India and the owner provides a No Objection Certificate (NOC) and a utility bill." },
    { q: "What happens if we move without informing the ROC?", a: "The company faces a penalty of ₹1,000 per day, and the ROC can serve notices at the old address, leading to non-compliance status." },
    { q: "How many days do we have to notify the ROC?", a: "Exactly 30 days from the date of the change in the registered office." },
    { q: "Is a rent agreement mandatory if the director owns the house?", a: "No, a simple NOC from the director along with the electricity bill in their name is sufficient." },
  ],
};
