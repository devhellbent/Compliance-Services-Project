import { ServiceData } from "@/lib/types";

export const approvalOfDirectorData: ServiceData = {
  title: "Approval of Director",
  breadcrumb: ["Home", "MCA", "Special Compliance Services", "Approval of Director"],
  description: "Statutory process for authorizing new management personnel, involving board consent, shareholder regularization, and ROC notification.",
  overview: `**Director approval** is the formal process of authorizing an individual to manage a company. It involves two main levels of consent: first, a Board Resolution to appoint the person (often as an "Additional Director"), followed by a Shareholder Resolution at a General Meeting for permanent regularization.

Legally, the appointee must provide written consent and a non-disqualification declaration. The company must then file Form DIR-12 with the Registrar of Companies (ROC) within 30 days to officially record the appointment.`,
  advantages: [
    { icon: "ShieldCheck", title: "Legal Empowerment", text: "Grants the individual the legal foundation to act on behalf of the company, sign contracts, and approve financial statements." },
    { icon: "Zap", title: "Validates Board Decisions", text: "Ensures that all board actions are legally binding and cannot be challenged as 'ultra vires' (beyond legal power) due to unapproved directors." },
    { icon: "UserCheck", title: "Statutory Authority", text: "Provides the necessary proof (Form DIR-12) for banks and government departments (GST, Income Tax) to grant signing authority." },
    { icon: "Award", title: "Investor Confidence", text: "Formal approval involves disclosure of the director's background and expertise, building trust with shareholders and lenders." },
    { icon: "Lock", title: "Liability Protection", text: "Shareholder approval at an AGM acts as a formal 'discharge', protecting directors from legal claims for decisions approved by owners." },
    { icon: "BarChart", title: "Operational Continuity", text: "Ensures the company meets mandatory minimum director requirements (2 for Private, 3 for Public) to avoid strike-off." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "Strict 30-Day Filing", text: "Missing the 30-day window to file Form DIR-12 triggers escalating 'Additional Fees' up to 12 times the normal fee." },
    { icon: "Search", title: "Complex Security Clearance", text: "Individuals from countries sharing a land border with India require mandatory MHA clearance before appointment." },
    { icon: "Clock", title: "Regularization Deadline", text: "An 'Additional Director' must be regularized at the very next AGM; otherwise, they must vacate their office automatically." },
  ],
  eligibility: [
    {
      title: "Personal Criteria",
      items: [
        "**Age:** Minimum 18 years (21 for MD/WTD).",
        "**Sound Mind:** Not declared of unsound mind by a court.",
        "**Legal Capacity:** Competent to enter into binding contracts.",
        "**Residency:** At least one director on the board must be a resident of India (≥ 182 days).",
      ],
    },
    {
      title: "Prerequisites",
      items: [
        "**DIN:** A valid, approved, and active 8-digit Director Identification Number.",
        "**DSC:** Class 3 Digital Signature Certificate.",
        "**Non-Disqualification:** Not a bankrupt or convicted of a crime (Section 164).",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Legal Consents",
      content: {
        title: "Mandatory Statutory Forms",
        items: [
          "**Form DIR-2:** Written consent letter to act as a director.",
          "**Form DIR-8:** Declaration of non-disqualification (under Section 164).",
          "**MBP-1:** Disclosure of interest in other companies or firms.",
        ],
      },
    },
    {
      tabTitle: "Personal KYC",
      content: {
        title: "Director Identity Proofs",
        items: [
          "**PAN Card:** Mandatory for Indian nationals.",
          "**Passport:** Mandatory for Foreign nationals (apostilled).",
          "**Utility Bill:** For address proof (max 2 months old).",
          "**Photograph:** Digital passport-sized color photo.",
        ],
      },
    },
    {
      tabTitle: "Company Records",
      content: {
        title: "Internal Approvals",
        items: [
          "**Board Resolution:** CTC of the meeting minutes approving the appointment.",
          "**Letter of Appointment:** Outlining roles, responsibilities, and remuneration.",
          "**Shareholder Resolution:** For regularizing an Additional Director at an AGM/EGM.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "DIN & DSC", description: "The candidate must obtain a DIN and a valid Digital Signature Certificate." },
    { step: 2, title: "Board Consent", description: "Proposed director provides Form DIR-2 and DIR-8; Board passes a resolution for appointment." },
    { step: 3, title: "MBP-1 Disclosure", description: "Director discloses interests in other entities at their first board meeting." },
    { step: 4, title: "Form DIR-12", description: "Company files Form DIR-12 with the ROC within 30 days of the appointment." },
    { step: 5, title: "Regularization", description: "Shareholders approve the appointment via Ordinary Resolution at the next General Meeting." },
    { step: 6, title: "Record Update", description: "The director's name is officially updated in the MCA master data and statutory registers." },
  ],
  fees: [
    { component: "Form DIR-12 Filing Fee (Capital < ₹1 Lakh)", fees: "₹200", remarks: "Standard government fee." },
    { component: "Form DIR-12 Filing Fee (Capital > ₹1Cr)", fees: "₹600", remarks: "Standard government fee." },
    { component: "DIN Application Fee", fees: "₹500", remarks: "One-time fee for new directors." },
    { component: "Class 3 DSC", fees: "₹1,000 - ₹2,500", remarks: "Based on validity and provider." },
    { component: "Late Filing Penalty", fees: "2x - 12x Normal Fee", remarks: "Penalty for delay past 30 days." },
    { component: "Professional Fee", fees: "₹2,000 - ₹5,000", remarks: "For drafting and certification." },
  ],
  faqs: [
    { q: "What is an 'Additional Director'?", a: "A director appointed by the Board between two AGMs. They must be approved by shareholders at the next AGM to continue." },
    { q: "Can a foreign national be a director in an Indian company?", a: "Yes, provided they have a valid Indian DIN and follow notarization/apostille rules for their documents." },
    { q: "Is a DIN mandatory before appointment?", a: "Yes. No person can be appointed as a director without first being allotted a DIN." },
    { q: "What is the maximum number of directorships one person can hold?", a: "An individual can be a director in up to 20 companies, out of which at most 10 can be public companies." },
  ],
};
