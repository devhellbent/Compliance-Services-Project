import { ServiceData } from "@/lib/types";

export const nameChangeCompanyData: ServiceData = {
  title: "Name Change - Company",
  breadcrumb: ["Home", "MCA", "Special Compliance Services", "Name Change - Company"],
  description: "Formal legal process for rebranding a company, requiring name reservation, shareholder approval, and issuance of a fresh Certificate of Incorporation.",
  overview: `Changing a company name involves amending the **Memorandum of Association (MOA)** via Section 13 of the Companies Act, 2013.

It is a multi-stage process that begins with reserving a unique name through the ROC's RUN service, followed by obtaining shareholder approval and finally receiving a fresh Certificate of Incorporation. A company name change does not affect the legal entity's existing rights, obligations, or legal proceedings.`,
  advantages: [
    { icon: "TrendingUp", title: "Strategic Rebranding", text: "Allows a company to modernize its image, shed a negative reputation, or appeal to a new demographic." },
    { icon: "Zap", title: "Activity Alignment", text: "Mandatory when a company shifts its core business (e.g., from 'Steel' to 'Software') to ensure the name reflects the new objects." },
    { icon: "Globe", title: "Geographic Neutrality", text: "Enables regional companies (e.g., 'Delhi Textiles') to adopt more neutral or global names for easier national expansion." },
    { icon: "Users", title: "Ownership Identity", text: "Allows new promoters or parent groups to align the company name with their global brand identity after an acquisition." },
    { icon: "Award", title: "Legal Continuity", text: "The law ensures that a name change does not invalidate any existing contracts, licenses, or ongoing court cases." },
    { icon: "CheckCircle", title: "Refreshed Credibility", text: "Issuance of a 'Fresh Certificate of Incorporation' (INC-25) provides official government validation of the new identity." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "Mandatory Compliance Record", text: "Legally barred if the company has any pending Annual Returns (MGT-7) or Financial Statements (AOC-4)." },
    { icon: "Clock", title: "Two-Year Display Rule", text: "Legally required to print the 'former name' alongside the new name on all letterheads and signage for two years post-change." },
    { icon: "CreditCard", title: "Administrative Cost", text: "Requires updating PAN, GST, bank records, and statutory registers, which involves significant time and incremental fees." },
  ],
  eligibility: [
    {
      title: "Mandatory Pre-conditions",
      items: [
        "**Up-to-date Filings:** No pending MGT-7 or AOC-4 from previous years.",
        "**No Defaults:** Must not be in default of repaying matured deposits, debentures, or interest.",
        "**Shareholder Approval:** Pass a Special Resolution (75% majority) in an EGM.",
      ],
    },
    {
      title: "Name Uniqueness",
      items: [
        "Proposed name must not be identical or phonetically similar to any existing company or LLP.",
        "Must not infringe upon any registered trademark.",
        "Must not contain 'prohibited' or 'undesirable' words as per MCA rules.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Phase 1: Reservation",
      content: {
        title: "Required for RUN Service",
        items: [
          "**Board Resolution:** Authorizing the director to apply for the name change.",
          "**Justification Letter:** Brief note explaining why the name is being changed (e.g., rebranding).",
          "**Trademark NOC:** If the name is similar to a registered trademark.",
        ],
      },
    },
    {
      tabTitle: "Phase 2: Approval",
      content: {
        title: "Shareholder & Govt filings",
        items: [
          "**Certified Special Resolution:** Passed with 75% majority.",
          "**Notice of EGM:** Including the Explanatory Statement (Section 102).",
          "**Altered MOA & AOA:** Specifically the revised 'Name Clause'.",
          "**Director Affidavits:** Declaring no defaults in annual filings or deposits.",
        ],
      },
    },
    {
      tabTitle: "Phase 3: Post-Change",
      content: {
        title: "External Updates",
        items: [
          "**Form INC-25:** The Fresh Certificate of Incorporation issued by ROC.",
          "**Updated PAN & TAN:** Corrected tax identifiers in the new name.",
          "**Common Seal:** Freshly engraved if the company uses a physical seal.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Name Search", description: "Verify availability of the new name against existing companies and trademarks." },
    { step: 2, title: "Board Resolution", description: "Pass a resolution to approve the name and call for a General Meeting." },
    { step: 3, title: "RUN Application", description: "File for name reservation (Form RUN) on the MCA portal (₹1,000 fee)." },
    { step: 4, title: "EGM Conduct", description: "Hold an Extraordinary General Meeting and pass a Special Resolution." },
    { step: 5, title: "MGT-14 Filing", description: "File the Special Resolution with the ROC within 30 days." },
    { step: 6, title: "INC-24 Filing", description: "Apply for Central Government approval; the ROC will then issue the new Certificate of Incorporation." },
  ],
  fees: [
    { component: "Form RUN (Name Reservation)", fees: "₹1,000", remarks: "Fixed fee per attempt." },
    { component: "Form MGT-14 Filing Fee", fees: "₹200 - ₹600", remarks: "Based on authorized capital." },
    { component: "Form INC-24 (Capital < ₹1L)", fees: "₹1,000", remarks: "Final approval fee." },
    { component: "Form INC-24 (Capital > ₹10Cr)", fees: "₹20,000", remarks: "Capped fee for large companies." },
    { component: "Late Filing Penalty", fees: "2x - 12x Normal Fee", remarks: "Applies per form for delay past 30 days." },
    { component: "Professional Fee", fees: "₹5,000 - ₹15,000", remarks: "For drafting, filings, and certification." },
  ],
  faqs: [
    { q: "Is a name change allowed if we missed last year's filing?", a: "No. Under Rule 29, a company is legally barred from changing its name until all pending Annual Returns and Financial Statements are filed." },
    { q: "Does a name change affect our current bank accounts?", a: "The accounts remain valid, but you must submit the Fresh Certificate of Incorporation and an updated PAN to the bank to update their records." },
    { q: "How long must we show our old name?", a: "You are legally required to display the former name along with the new name on all official stationery and signage for 2 years." },
    { q: "Can we use a name that is similar to our trademarked product?", a: "Yes, but you will need to provide an NOC from the trademark owner (even if it's the same owner) to the ROC." },
  ],
};
