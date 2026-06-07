import { ServiceData } from "@/lib/types";

export const commencementInc20aData: ServiceData = {
  title: "Commencement (INC-20A)",
  breadcrumb: ["Home", "MCA", "Special Compliance Services", "Commencement (INC-20A)"],
  description: "Mandatory post-incorporation declaration for all companies with share capital to confirm receipt of subscription money and authorize business operations.",
  overview: `Form INC-20A is a mandatory **Declaration of Commencement of Business** that every Indian company with share capital incorporated after November 2, 2018, must file.

This compliance ensures that the company is not a "shell" entity and has genuinely received its initial capital. Specifically, it confirms that every subscriber to the Memorandum of Association (MoA) has deposited the agreed-upon share money into the company’s bank account. It must be filed within 180 days of incorporation.`,
  advantages: [
    { icon: "Zap", title: "Legal Activation", text: "Grants the legal 'green light' to execute contracts, issue invoices, and formally start commercial trading." },
    { icon: "ShieldCheck", title: "Borrowing Authorization", text: "Unlocks the company's legal power to borrow money. Banks and VCs require this acknowledgment before processing loans or investments." },
    { icon: "Search", title: "Financial Transparency", text: "Proves that shareholders have actually deposited the capital, demonstrating to the ROC and the public that the company is a legitimate functioning entity." },
    { icon: "Award", title: "Verified Presence", text: "Mandatory geotagged office photographs confirm the business has a physical, traceable location, building trust with stakeholders." },
    { icon: "CheckCircle", title: "Penalty Avoidance", text: "Timely filing prevents a ₹50,000 penalty for the company and daily fines for directors." },
    { icon: "ShieldAlert", title: "Prevents Strike-Off", text: "Ensures the ROC does not initiate strike-off proceedings on the assumption that the company is inactive or fraudulent." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "Strict 180-Day Deadline", text: "Missing the deadline triggers significant penalties and can lead to the removal of the company's name from the register." },
    { icon: "Clock", title: "Heavy Daily Penalties", text: "Continuing default attracts a penalty of ₹1,000 per day for directors, up to ₹1,00,000." },
  ],
  eligibility: [
    {
      title: "Mandatory For",
      items: [
        "Private Limited Companies with share capital.",
        "Public Limited Companies with share capital.",
        "One Person Companies (OPC) with share capital.",
        "Section 8 Companies with share capital.",
        "Companies incorporated on or after Nov 2, 2018.",
      ],
    },
    {
      title: "Exemptions",
      items: [
        "Companies incorporated before Nov 2, 2018.",
        "Companies limited by guarantee WITHOUT share capital.",
        "Limited Liability Partnerships (LLP).",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Capital Proof",
      content: {
        title: "Proof of Funds Receipt",
        items: [
          "**Certified Bank Statement:** Showing credit entries of subscription money from each shareholder.",
          "**FIRC:** For foreign shareholders (if applicable).",
        ],
      },
    },
    {
      tabTitle: "Office Verification",
      content: {
        title: "Physical Presence Proof",
        items: [
          "**External Photograph:** Showing the company's name board at the office entrance.",
          "**Internal Photograph:** Showing the office interior with at least one Director present.",
          "**Geotagging:** Photos must include Latitude and Longitude metadata.",
        ],
      },
    },
    {
      tabTitle: "Corporate Approval",
      content: {
        title: "Board Authorization",
        items: [
          "**Board Resolution:** Formal resolution authorizing the commencement of business and the filing of INC-20A.",
          "**Professional Certification:** Digital signature and certification by a practicing CA, CS, or CMA.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Capital Deposit", description: "All subscribers must deposit their committed share money into the company's bank account." },
    { step: 2, title: "Bank Certification", description: "Obtain a certified bank statement showing the receipt of subscription money." },
    { step: 3, title: "Office Photography", description: "Take geotagged photos of the registered office (external and internal) with a director." },
    { step: 4, title: "Board Resolution", description: "Pass a board resolution authorizing the commencement and the filing of Form INC-20A." },
    { step: 5, title: "E-Form Filing", description: "Prepare Form INC-20A with attachments and get it certified by a practicing professional (CA/CS/CMA)." },
    { step: 6, title: "Submission", description: "Upload to the MCA portal and pay fees within 180 days of incorporation." },
  ],
  fees: [
    { component: "Normal Fee (Capital < ₹1 Lakh)", fees: "₹200", remarks: "Standard MCA fee." },
    { component: "Normal Fee (Capital ₹1L - ₹5L)", fees: "₹300", remarks: "Standard MCA fee." },
    { component: "Normal Fee (Capital ₹1Cr+)", fees: "₹600", remarks: "Standard MCA fee." },
    { component: "Additional Fee (Delay up to 30 days)", fees: "2x Normal Fee", remarks: "Penalty for late filing." },
    { component: "Additional Fee (Delay > 180 days)", fees: "12x Normal Fee", remarks: "Severe penalty for long delays." },
    { component: "One-time Penalty (Company)", fees: "₹50,000", remarks: "If not filed within 180 days." },
    { component: "Daily Penalty (Directors)", fees: "₹1,000 / day", remarks: "Max ₹1,00,000 per director." },
  ],
  faqs: [
    { q: "What is the deadline for filing INC-20A?", a: "Within 180 days from the date of incorporation of the company." },
    { q: "What happens if I don't file within 180 days?", a: "The company faces a ₹50,000 penalty, directors face daily fines, and the ROC can initiate strike-off proceedings." },
    { q: "Can I borrow money for my company before filing INC-20A?", a: "No, under Section 10A, a company cannot exercise any borrowing powers until this declaration is filed." },
    { q: "Is it mandatory for an OPC?", a: "Yes, if the OPC has a share capital and was formed after Nov 2, 2018." },
  ],
};
