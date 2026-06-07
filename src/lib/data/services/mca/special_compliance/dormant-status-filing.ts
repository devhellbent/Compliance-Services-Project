import { ServiceData } from "@/lib/types";

export const dormantStatusFilingData: ServiceData = {
  title: "Dormant Status Filing",
  breadcrumb: ["Home", "MCA", "Special Compliance Services", "Dormant Status Filing"],
  description: "Legal process for transitioning an inactive company into a state of 'hibernation' to reduce compliance costs while protecting its legal existence.",
  overview: `**Dormant Status Filing** (under Section 455 of the Companies Act, 2013) allows an inactive company to maintain its corporate shell while significantly reducing compliance overheads.

It is ideal for companies holding intellectual property, land, or assets for future projects that currently have no "significant accounting transactions." Once obtained, the company is exempt from several annual requirements until it is ready to reactivate.`,
  advantages: [
    { icon: "Zap", title: "Drastic Compliance Reduction", text: "Exempt from complex annual returns; instead, you file a single simplified form (MSC-3) once a year." },
    { icon: "DollarSign", title: "Cost Efficiency", text: "Significantly lowers professional fees for audits and filings since the company is in a 'Nil' operation state." },
    { icon: "ShieldCheck", title: "Asset & IP Protection", text: "Allows holding trademarks, patents, or land under a legal corporate shield without the stress of active trading." },
    { icon: "Award", title: "Brand Preservation", text: "Ensures no one else can register your business name, preserving your 'vintage' and identity until you are ready to launch." },
    { icon: "UserCheck", title: "Fewer Board Meetings", text: "Only two board meetings per year are required (one in each half) instead of the standard four." },
    { icon: "RefreshCw", title: "Easy Reactivation", text: "Closing a company is permanent. Dormant status can be reversed quickly via a single form (MSC-4) whenever you choose." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "Strict Transaction Limits", text: "Any 'significant' transaction (except govt fees or share allotments) can automatically trigger the loss of dormant status." },
    { icon: "Clock", title: "5-Year Limit", text: "A company can remain dormant for a maximum of 5 consecutive years. After this, the ROC may initiate strike-off if it hasn't reactivated." },
  ],
  eligibility: [
    {
      title: "Qualification Criteria",
      items: [
        "**No Active Business:** Not engaged in any commercial operations.",
        "**No Significant Transactions:** No buying/selling, salary payments, or income for the last 2 financial years.",
        "**Clean Record:** No pending investigations, prosecutions, or public deposits.",
      ],
    },
    {
      title: "Permitted Transactions",
      items: [
        "Payment of ROC/Govt fees.",
        "Payments to fulfill legal or statutory requirements.",
        "Allotment of shares to fulfill law requirements.",
        "Maintenance of office and records.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Authorizations",
      content: {
        title: "Corporate Approvals",
        items: [
          "**Certified Special Resolution:** Proving 75% shareholder consent for dormancy.",
          "**Board Resolution:** Internal approval to apply for dormant status.",
          "**MGT-14:** Proof of filing the special resolution with the ROC.",
        ],
      },
    },
    {
      tabTitle: "Financial Proof",
      content: {
        title: "Proof of Inactivity",
        items: [
          "**Auditor Certificate:** Confirming no significant transactions for 2 years.",
          "**Statement of Affairs:** Certified balance sheet (max 30 days old).",
          "**Bank Statement:** Showing no active business-related trading.",
        ],
      },
    },
    {
      tabTitle: "Clearances",
      content: {
        title: "No-Objection Certificates",
        items: [
          "**Lender NOC:** Mandatory if the company has outstanding unsecured loans.",
          "**Management Declaration:** Stating no ongoing ownership disputes.",
          "**Regulatory NOC:** From RBI/SEBI if the company is regulated by them.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Special Resolution", description: "Hold an EGM and pass a resolution with 75% majority for dormant status." },
    { step: 2, title: "Filing MGT-14", description: "Register the special resolution with the ROC within 30 days." },
    { step: 3, title: "Form MSC-1", description: "Prepare the application for dormant status on the MCA portal." },
    { step: 4, title: "Certification", description: "Attach the CA certificate and financial statement of affairs." },
    { step: 5, title: "Payment", description: "Pay the MCA filing fees and upload the form for approval." },
    { step: 6, title: "Status Update", description: "Once approved, the ROC issues a certificate of status, and the company is marked 'Dormant'." },
  ],
  fees: [
    { component: "MSC-1 Filing Fee (Capital < ₹1 Lakh)", fees: "₹2,000", remarks: "Base fee for dormancy application." },
    { component: "MSC-1 Filing Fee (Capital > ₹1Cr)", fees: "₹5,000", remarks: "Capped fee for large companies." },
    { component: "Annual MSC-3 Filing", fees: "₹200 - ₹600", remarks: "Simplified annual compliance fee." },
    { component: "Late Filing Penalty", fees: "2x - 12x Normal Fee", remarks: "If MSC-3 is delayed." },
    { component: "Professional Fee", fees: "₹5,000 - ₹10,000", remarks: "For auditing and dormancy filing." },
  ],
  faqs: [
    { q: "How long can a company stay dormant?", a: "A company can maintain dormant status for a maximum period of 5 consecutive years." },
    { q: "Can a dormant company own property?", a: "Yes, a dormant company can legally hold land, intellectual property, or other assets for future use." },
    { q: "Is a statutory audit required for a dormant company?", a: "While a full audit is simplified, you still need an Auditor's Certificate to file the annual MSC-3 form." },
    { q: "How do I make the company active again?", a: "By filing Form MSC-4 along with the requisite fee and the annual return for the current year." },
  ],
};
