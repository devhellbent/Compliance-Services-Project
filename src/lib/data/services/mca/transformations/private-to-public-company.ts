import { ServiceData } from "@/lib/types";

export const privateToPublicCompanyData: ServiceData = {
  title: "Private to Public Company",
  breadcrumb: ["Home", "MCA", "Legal Business Transformations", "Private to Public Company"],
  description: "Transformation of a private entity into a public limited company to access public capital markets, IPOs, and large-scale funding.",
  overview: `Converting a **Private Limited Company** to a **Public Limited Company** is a major milestone for businesses ready to access global capital markets.

The primary motivation is the ability to raise significant funds from the general public through an **Initial Public Offering (IPO)**. This transition involves removing share transfer restrictions, increasing the board size, and adhering to much stricter transparency and audit standards to protect public investors.`,
  advantages: [
    { icon: "Zap", title: "Access to Public Capital", text: "Allows the company to raise large-scale funds from millions of retail and institutional investors via an IPO." },
    { icon: "TrendingUp", title: "Lower Cost of Capital", text: "Public companies often enjoy better interest rates from banks because their financial transparency reduces perceived lending risk." },
    { icon: "BarChart", title: "Enhanced Liquidity", text: "Creates an active market where founders and early investors can convert their shares into cash instantly via stock exchanges." },
    { icon: "ShieldCheck", title: "Currency for Acquisitions", text: "Publicly traded stock can be used as 'currency' to acquire other companies instead of paying pure cash." },
    { icon: "Award", title: "Brand Prestige", text: "Being a 'Limited' company carries higher status, helping in winning large government contracts and global partnerships." },
    { icon: "Users", title: "Attracting Top Talent", text: "Publicly traded ESOPs are more attractive to employees because they have a clear, daily market value and are easily sellable." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "Intense Transparency", text: "Must publish quarterly and annual financial reports, making sensitive business data public for competitors to see." },
    { icon: "Clock", title: "High Compliance Cost", text: "Requires independent directors, woman directors, audit committees, and expensive secretarial audits." },
  ],
  eligibility: [
    {
      title: "Statutory Requirements",
      items: [
        "**Minimum Members:** Must increase the number of shareholders to at least 7.",
        "**Minimum Directors:** The board must have at least 3 directors.",
        "**Charter Update:** Must remove share transfer restrictions from the Articles of Association.",
      ],
    },
    {
      title: "Governance Criteria",
      items: [
        "**Independent Directors:** 1/3rd of the board must be independent.",
        "**Woman Director:** Mandatory on the board for public companies.",
        "**Audit Committee:** Must be established to oversee financial reporting.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Filing Forms",
      content: {
        title: "Mandatory ROC Submissions",
        items: [
          "**Form MGT-14:** To register the Special Resolution (within 30 days).",
          "**Form INC-27:** Formal application for conversion of status (within 15 days).",
          "**Altered MOA & AOA:** Removing 'Private' from name and updating clauses.",
        ],
      },
    },
    {
      tabTitle: "Meeting Records",
      content: {
        title: "Internal Authorizations",
        items: [
          "**Notice of EGM:** Including the Explanatory Statement (Section 102).",
          "**Minutes of Meeting:** Formal record of the conversion vote.",
          "**Special Resolution:** Certified copy signed by the chairman.",
        ],
      },
    },
    {
      tabTitle: "KYC & Declarations",
      content: {
        title: "Proof for Registrar",
        items: [
          "**Auditor's Certificate:** Copy of the latest statutory audit.",
          "**Director Affidavits:** Confirming no pending legal cases blocking conversion.",
          "**NOC from Creditors:** From all secured lenders and debenture holders.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Board Approval", description: "Hold a board meeting to approve the conversion and call for an EGM." },
    { step: 2, title: "EGM Conduct", description: "Pass a Special Resolution (75% majority) to alter the MOA and AOA." },
    { step: 3, title: "Filing MGT-14", description: "Register the Special Resolution with the ROC within 30 days." },
    { step: 4, title: "Filing INC-27", description: "Submit the formal conversion application with all attachments to the ROC." },
    { step: 5, title: "ROC Verification", description: "The Registrar verifies compliance and checks for any defaults in annual filings." },
    { step: 6, title: "Fresh COI", description: "Receive a fresh Certificate of Incorporation officially dropping 'Private' from the company name." },
  ],
  fees: [
    { component: "Form MGT-14 Filing", fees: "₹200 - ₹600", remarks: "Based on authorized capital." },
    { component: "Form INC-27 Filing", fees: "₹200 - ₹600", remarks: "Conversion application fee." },
    { component: "Stamp Duty (MOA/AOA)", fees: "₹1,000 - ₹7,500", remarks: "Varies by state." },
    { component: "Digital Signature (New Directors)", fees: "₹1,500 - ₹2,500", remarks: "For each new director." },
    { component: "Professional Fee (Basic)", fees: "₹15,000 - ₹30,000", remarks: "For drafting and filing." },
    { component: "Professional Fee (Full Advisory)", fees: "₹40,000+", remarks: "Includes compliance cleanup and committee setup." },
  ],
  faqs: [
    { q: "How many members are needed for a public company?", a: "A minimum of 7 shareholders is mandatory, with no upper limit on the maximum number." },
    { q: "Is a woman director mandatory?", a: "Yes, for public companies, at least one woman director must be appointed on the board." },
    { q: "Can we raise funds from the public immediately after conversion?", a: "No. Conversion only makes you eligible. To raise funds, you must follow the SEBI ICDR regulations for an IPO." },
    { q: "Does the company's PAN change?", a: "No. Unlike a proprietorship-to-LLP transition, a private-to-public conversion is a change in status of the same legal entity, so the PAN remains the same." },
  ],
};
