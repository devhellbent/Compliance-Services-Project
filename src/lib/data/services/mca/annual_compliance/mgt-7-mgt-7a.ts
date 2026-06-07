import { ServiceData } from "@/lib/types";

export const mgt7Data: ServiceData = {
  title: "MGT-7/MGT-7A",
  breadcrumb: ["Home", "MCA", "Annual & Half-Yearly Compliance", "MGT-7/MGT-7A"],
  description: "Mandatory annual return summarizing a company's non-financial data, including shareholding patterns, management changes, and meeting details.",
  overview: `**Form MGT-7 and MGT-7A** are the annual returns filed by Indian companies to report their non-financial health and governance status to the Ministry of Corporate Affairs (MCA).

- **MGT-7:** The standard detailed form for public and large private companies. It requires extensive disclosures and often mandatory certification by a practicing Company Secretary.
- **MGT-7A:** An abridged, simplified version introduced for **One Person Companies (OPCs)** and **Small Companies**, reducing the compliance burden for smaller entities.

These filings provide a "DNA snapshot" of the company's ownership, management, and compliance history for the financial year.`,
  advantages: [
    { icon: "ShieldCheck", title: "Active Legal Status", text: "Regular filing keeps the company status 'Active' on the MCA portal, preventing strike-off or being marked as dormant." },
    { icon: "UserCheck", title: "Director Protection", text: "Prevents director disqualification, which occurs if annual returns are not filed for three consecutive financial years." },
    { icon: "Zap", title: "Easier Funding", text: "Banks, VCs, and financial institutions require a clean compliance history and 'Active' status for loans and funding rounds." },
    { icon: "Users", title: "Public Credibility", text: "As a public document, it builds trust with partners and vendors by verifying the company's ownership and management." },
    { icon: "Gavel", title: "Legal Evidence", text: "Under Section 95, the Annual Return is treated as prima facie evidence of the matters stated in it during legal disputes." },
    { icon: "DollarSign", title: "Cost Efficiency (MGT-7A)", text: "Small companies save on professional fees as MGT-7A does not require mandatory certification by a practicing CS." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "Strict Daily Penalties", text: "Late filing attracts a non-negotiable penalty of ₹100 per day with no upper limit." },
    { icon: "Clock", title: "60-Day Deadline", text: "Must be filed within 60 days of the AGM. Delay results in immediate penalty accumulation." },
    { icon: "FileText", title: "Complex Data Entry", text: "Standard MGT-7 requires detailed records of every meeting, share transfer, and director remuneration." },
  ],
  eligibility: [
    {
      title: "MGT-7A (Small Entities)",
      items: [
        "One Person Companies (OPCs).",
        "Small Companies: Paid-up Capital ≤ ₹10 Crore AND Turnover ≤ ₹100 Crore (effective 2025).",
      ],
    },
    {
      title: "MGT-7 (Standard Entities)",
      items: [
        "Public Companies (Listed and Unlisted).",
        "Large Private Companies (exceeding small company thresholds).",
        "Section 8 (Non-profit) Companies.",
        "Subsidiaries or Holding Companies.",
      ],
    },
    {
      title: "Disqualifications from Small Status",
      items: [
        "Public companies, Section 8 companies, and those governed by special acts (Banking/Insurance) cannot file MGT-7A regardless of size.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Ownership Data",
      content: {
        title: "Shareholding Records",
        items: [
          "List of Shareholders and Debenture Holders (as of March 31).",
          "Details of Share Transfers occurred during the year.",
          "PAN of all shareholders (mandatory for Excel validation).",
        ],
      },
    },
    {
      tabTitle: "Governance Data",
      content: {
        title: "Meeting & Management Details",
        items: [
          "Dates and attendance records of all Board and Committee Meetings.",
          "Details of the Annual General Meeting (AGM).",
          "Remuneration details of Directors and Key Managerial Personnel (KMP).",
          "Total outstanding indebtedness (loans/debentures).",
        ],
      },
    },
    {
      tabTitle: "Digital/Visual",
      content: {
        title: "V3 Portal Requirements",
        items: [
          "**Registered Office Photo:** External view with name board/CIN and internal view with a Director.",
          "**DSC:** Class 3 Digital Signature of the authorized Director.",
          "**Professional DSC:** For MGT-7, certification by a practicing CS is required.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Hold AGM", description: "Conduct the Annual General Meeting where financial statements are adopted." },
    { step: 2, title: "Collate Data", description: "Gather shareholding patterns, transfer lists, and meeting attendance records for the year." },
    { step: 3, title: "Select Form", description: "Determine if the company is eligible for the simplified MGT-7A or must file the detailed MGT-7." },
    { step: 4, title: "Excel Validation", description: "Prepare and validate mandatory Excel sheets for shareholder and debenture holder lists." },
    { step: 5, title: "Digital Signing", description: "Affix DSC of the Director and, for MGT-7, the practicing Company Secretary." },
    { step: 6, title: "Submission", description: "Upload to the MCA V3 portal and pay the filing fee within 60 days of the AGM." },
  ],
  fees: [
    { component: "Normal Fee (Capital < ₹1 Lakh)", fees: "₹200", remarks: "Standard government fee." },
    { component: "Normal Fee (Capital ₹1Cr+)", fees: "₹600", remarks: "Standard government fee." },
    { component: "Daily Late Filing Fee", fees: "₹100 / day", remarks: "No upper limit; applies per day of delay." },
    { component: "Professional Certification Fee", fees: "₹5,000 - ₹25,000", remarks: "For MGT-7 certification by a practicing CS." },
  ],
  faqs: [
    { q: "What is the due date for MGT-7/7A?", a: "Within 60 days from the date of the Annual General Meeting (AGM)." },
    { q: "What defines a 'Small Company' for MGT-7A?", a: "A private company with paid-up capital ≤ ₹10 crore and turnover ≤ ₹100 crore (as of Dec 2025)." },
    { q: "Does a Section 8 company file MGT-7A?", a: "No, Section 8 (non-profit) companies must file the detailed Form MGT-7 regardless of their size." },
    { q: "Can a director sign MGT-7A without a CS?", a: "Yes, MGT-7A for small companies/OPCs does not require mandatory certification by a practicing Company Secretary." },
  ],
};
