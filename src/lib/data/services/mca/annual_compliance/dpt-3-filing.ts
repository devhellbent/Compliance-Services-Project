import { ServiceData } from "@/lib/types";

export const dpt3FilingData: ServiceData = {
  title: "DPT-3 Filing",
  breadcrumb: ["Home", "MCA", "Annual & Half-Yearly Compliance", "DPT-3 Filing"],
  description: "Mandatory annual return for disclosing all outstanding non-equity borrowings, including deposits and exempted loans.",
  overview: `The DPT-3 Filing is a mandatory annual electronic return filed by most companies in India with the Ministry of Corporate Affairs (MCA). It is formally known as the **Return of Deposits and Particulars of Transactions Not Considered as Deposits**.

Its primary objective is to bring transparency to all outstanding non-equity borrowings of a company as of March 31st, distinguishing between formal "deposits" and "exempted loans" (such as loans from directors or inter-corporate loans).`,
  advantages: [
    { icon: "Search", title: "Transparency of Borrowings", text: "Discloses all outstanding loans and monetary receipts, ensuring the MCA can track the company's non-equity debt structure." },
    { icon: "ShieldCheck", title: "Regulatory Compliance", text: "Timely filing keeps the company in good standing and prevents severe legal actions under the Companies Act." },
    { icon: "Landmark", title: "Stakeholder Trust", text: "Public disclosure of liabilities builds credibility with investors, creditors, and business partners." },
    { icon: "SearchCheck", title: "Due Diligence Clarity", text: "A clean DPT-3 record is essential for M&A activity, private equity funding, or bank loan applications." },
    { icon: "UserCheck", title: "Director Protection", text: "Provides a formal regulatory record for loans received from directors, protecting them from future disputes regarding the source of funds." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "Heavy Fines for Non-Compliance", text: "Initial fine plus a daily penalty of ₹500 per day for both the company and every officer in default." },
    { icon: "Gavel", title: "Potential Imprisonment", text: "Persistent non-compliance or fraudulent acceptance of deposits can lead to imprisonment for up to 7 years for officers." },
    { icon: "FileText", title: "Audit Certification Cost", text: "Filing for deposits or mixed transactions requires a mandatory certificate from a statutory auditor." },
  ],
  eligibility: [
    {
      title: "Applicable Entities",
      items: [
        "Private Limited Companies.",
        "Public Limited Companies (Unlisted).",
        "One Person Companies (OPC).",
        "Section 8 (Non-Profit) Companies.",
        "Small Companies.",
      ],
    },
    {
      title: "Triggering Transactions",
      items: [
        "Loans from Directors or Promoters (with declaration).",
        "Inter-Corporate Loans (from other companies).",
        "Loans from Banks or Financial Institutions.",
        "Unadjusted customer advances pending beyond 365 days.",
        "Amounts received against secured bonds or debentures.",
      ],
    },
    {
      title: "Exempted Entities",
      items: [
        "Government Companies.",
        "Banking Companies.",
        "NBFCs registered with RBI.",
        "Housing Finance Companies (HFCs).",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Core Data",
      content: {
        title: "Required Data Points",
        items: [
          "**CIN:** 21-digit Corporate Identification Number.",
          "**Net Worth Details:** Paid-up capital and free reserves as per the latest audited balance sheet.",
          "**Outstanding Amount:** Total non-equity borrowings as of March 31st.",
          "**Credit Rating:** Details of rating obtained (if applicable).",
        ],
      },
    },
    {
      tabTitle: "Professional Certification",
      content: {
        title: "Mandatory Certifications",
        items: [
          "**Auditor's Certificate:** Mandatory for companies reporting Deposits or a mix of Deposits/Non-Deposits.",
          "**Digital Signature:** Of the authorized director/signatory.",
        ],
      },
    },
    {
      tabTitle: "Supporting Proof",
      content: {
        title: "Verification Documents",
        items: [
          "**Secured Borrowings:** Copy of the instrument creating the charge.",
          "**Director Loans:** Statutory declaration stating the amount is not a deposit.",
          "**Advances:** Agreements substantiating receipts for goods/services.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Identify Borrowings", description: "Review balance sheet as of March 31st to identify all outstanding loans and advances." },
    { step: 2, title: "Classify Transactions", description: "Determine if amounts are formal deposits or exempted loans (non-deposits)." },
    { step: 3, title: "Obtain Audit Certificate", description: "If reporting deposits, obtain the mandatory certificate from the statutory auditor." },
    { step: 4, title: "Fill E-Form", description: "Fill Form DPT-3 on the MCA portal with net worth and loan particulars." },
    { step: 5, title: "Submit", description: "Affix DSCs and upload the form before the June 30th deadline." },
    { step: 6, title: "Download SRN", description: "Pay fees and save the Service Request Number for future reference." },
  ],
  fees: [
    { component: "Normal Fee (Capital < ₹1 Lakh)", fees: "₹200", remarks: "Standard MCA fee." },
    { component: "Normal Fee (₹1L - ₹5L)", fees: "₹300", remarks: "Standard MCA fee." },
    { component: "Normal Fee (₹5L - ₹25L)", fees: "₹400", remarks: "Standard MCA fee." },
    { component: "Normal Fee (₹25L - ₹1Cr)", fees: "₹500", remarks: "Standard MCA fee." },
    { component: "Normal Fee (₹1Cr+)", fees: "₹600", remarks: "Standard MCA fee." },
    { component: "Late Fee (up to 30 days)", fees: "2x Normal Fee", remarks: "Penalty for delay." },
    { component: "Late Fee (> 180 days)", fees: "12x Normal Fee", remarks: "Significant penalty for long delays." },
    { component: "General Fine (Continuing Default)", fees: "₹500 / day", remarks: "Applies to both company and officers." },
  ],
  faqs: [
    { q: "What is the due date for DPT-3?", a: "June 30th every year, reporting transactions as of March 31st." },
    { q: "Is DPT-3 mandatory for zero debt companies?", a: "No, the requirement is triggered by the existence of outstanding loans or deposits." },
    { q: "Do I need an auditor's certificate for director loans?", a: "If you are reporting *only* particulars of transactions not considered as deposits (exempted loans), an auditor's certificate is not mandatory under the latest rules, though a director's declaration is required." },
    { q: "What happens if I miss the deadline?", a: "You will face escalating late filing fees (up to 12x normal fee) and potential daily fines for officers." },
  ],
};
