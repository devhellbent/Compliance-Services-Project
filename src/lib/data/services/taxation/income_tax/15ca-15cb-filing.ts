import { ServiceData } from "@/lib/types";

export const filing15ca15cbData: ServiceData = {
  title: "15CA - 15CB Filing",
  breadcrumb: ["Home", "Taxation", "Income Tax", "15CA - 15CB Filing"],
  description:
    "Form 15CA and 15CB are mandatory tax compliance documents for tracking foreign remittances from India, ensuring proper TDS deduction on payments to non-residents.",
  overview: `Form 15CA and 15CB are mandatory tax compliance documents used in India for tracking foreign remittances. Form 15CA is a self-declaration filed online by the remitter (the sender) to confirm that tax has been appropriately deducted on payments made to non-residents. It serves as a verification tool for the Income Tax Department to monitor taxable fund transfers leaving the country.

In contrast, Form 15CB is a certificate issued and verified by a Chartered Accountant (CA). It is mandatory only when the remittance is taxable and exceeds ₹5 Lakh in a financial year. The CA validates the nature of the payment, the applicable tax rate under the Income Tax Act or Double Taxation Avoidance Agreement (DTAA), and ensures compliance before the bank processes the transfer.`,
  advantages: [
    { icon: "ArrowUpRight", title: "Seamless Fund Transfer", text: "Providing correct 15CA/CB ensures money isn't stuck in 'compliance limbo' at the bank. Once uploaded, the bank can instantly verify using the acknowledgment number." },
    { icon: "Percent", title: "Tax Efficiency & DTAA Benefits", text: "A CA can apply DTAA provisions to reduce TDS from standard 30% to as low as 5% or 10%. Proper filing prevents double taxation for the recipient." },
    { icon: "ShieldCheck", title: "Protection Against Massive Penalties", text: "Under Section 271-I, non-filing attracts ₹1,00,000 penalty per transaction. Correct filing also prevents 1% to 1.5% monthly interest on short-deductions." },
    { icon: "Receipt", title: "Expense Deductibility (For Businesses)", text: "Without these forms or TDS, the Income Tax Department can disallow the entire expense under Section 40(a)(i), making you pay tax on the amount as if it were pure profit." },
  ],
  disadvantages: [
    { icon: "Wallet", title: "Mandatory CA Certification Cost", text: "Form 15CB requires professional CA certification, with fees ranging from ₹3,000 to ₹25,000+ depending on complexity." },
    { icon: "FileWarning", title: "Complex DTAA Research", text: "For cross-border payments, determining the correct tax treaty provisions and applicable rates requires specialized knowledge." },
    { icon: "AlertTriangle", title: "Heavy Non-Compliance Penalties", text: "₹1,00,000 flat penalty per transaction for non-filing or inaccurate information, making errors extremely costly." },
  ],
  eligibility: [
    {
      title: "Eligibility for Form 15CA",
      items: [
        "**Part A (Small Taxable Payments):** Payment is taxable in India and total ≤ ₹5 Lakh in the financial year.",
        "**Part B (Specific Orders):** Amount > ₹5 Lakh and you have a certificate/order from AO under Section 195 or 197.",
        "**Part C (Standard Large Payments):** Amount > ₹5 Lakh, taxable, and you have a CA certificate (15CB).",
        "**Part D (Non-Taxable Payments):** Payments not chargeable to tax in India (unless on the exempt list).",
      ],
    },
    {
      title: "Eligibility for Form 15CB",
      items: [
        "Payment is being made to a non-resident.",
        "Payment is taxable in India (e.g., royalty, technical fees, property sale proceeds).",
        "Total remittance exceeds ₹5 Lakh in a single financial year.",
        "You do not have a nil/lower tax certificate from the Assessing Officer.",
      ],
    },
    {
      title: "Who Cannot/Should Not File?",
      items: [
        "**Import of Goods:** Most B2B payments for physical goods are exempt under Rule 37BB.",
        "**Personal LRS Transfers:** Remittances for travel, education (up to limits), or maintenance often exempt.",
        "**Inward Remittances:** These forms are only for money leaving India (outward).",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Remitter (Sender) Details",
      content: {
        title: "Remitter (Sender) Details",
        items: [
          "**PAN & Aadhaar:** For logging into the e-filing portal.",
          "**Digital Signature Certificate (DSC):** Required for CA verification (Form 15CB).",
          "**Bank Account Information:** Bank name, branch, and BSR Code (7-digit code).",
          "**Email & Phone Number:** Must match Income Tax portal records.",
        ],
      },
    },
    {
      tabTitle: "Remittee (Receiver) Details",
      content: {
        title: "Remittee (Receiver) Details",
        items: [
          "**Basic Info:** Complete name, status (Individual/Company), and full foreign address.",
          "**PAN (if available):** Indian PAN to avoid higher TDS rates.",
          "**Tax Residency Certificate (TRC):** Mandatory if claiming lower DTAA rates.",
          "**Form 10F:** Self-declaration from receiver if TRC is incomplete.",
        ],
      },
    },
    {
      tabTitle: "Transaction Documents",
      content: {
        title: "Transaction & Taxability Documents",
        items: [
          "**Invoice/Agreement:** Bill or contract showing the Nature of Payment.",
          "**TDS Challan:** Proof of tax already paid.",
          "**Purpose Code:** Specific RBI Purpose Code (e.g., S0305 for education).",
          "**NRO Bank Statement:** For NRIs repatriating funds, showing source of money.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Obtain Form 15CB from CA", description: "If remittance is taxable and exceeds ₹5 Lakh, get your CA to certify Form 15CB on the e-filing portal." },
    { step: 2, title: "Login to e-Filing Portal", description: "Visit incometax.gov.in and log in with PAN credentials." },
    { step: 3, title: "Fill Form 15CA", description: "Navigate to e-File > Income Tax Forms > Form 15CA. Select the appropriate Part (A/B/C/D)." },
    { step: 4, title: "Enter Remittance Details", description: "Fill in sender, receiver, bank, amount, purpose code, and TDS details." },
    { step: 5, title: "Link Form 15CB", description: "If Part C, link the acknowledgment number of the 15CB filed by your CA." },
    { step: 6, title: "Submit & Share with Bank", description: "Submit the form and share the acknowledgment number with your bank to process the transfer." },
  ],
  fees: [
    { component: "Government Filing Fee", fees: "NIL", remarks: "Free on the Income Tax portal." },
    { component: "Form 15CA (Part A/D)", fees: "₹1,500 – ₹3,000", remarks: "For simple, non-taxable or small payments." },
    { component: "Standard 15CA + 15CB", fees: "₹3,000 – ₹8,000", remarks: "Average business/individual remittance > ₹5 Lakh." },
    { component: "Complex DTAA Case", fees: "₹10,000 – ₹25,000+", remarks: "If CA must research specific tax treaties to lower TDS." },
    { component: "Bulk/Monthly Filing", fees: "₹2,000 – ₹5,000", remarks: "Discounted rates for companies with frequent transfers." },
    { component: "Non-Filing Penalty", fees: "₹1,00,000", remarks: "Per transaction under Section 271-I for non-filing or inaccurate info." },
  ],
  faqs: [
    { q: "What is the difference between Form 15CA and 15CB?", a: "Form 15CA is a self-declaration by the sender. Form 15CB is a professional certificate by a CA, required only when the remittance is taxable and exceeds ₹5 Lakh." },
    { q: "When is Form 15CB not required?", a: "When the remittance is not taxable in India, is under ₹5 Lakh, or you have a nil/lower TDS certificate from the Assessing Officer." },
    { q: "What is the penalty for not filing 15CA/15CB?", a: "A flat penalty of ₹1,00,000 per transaction under Section 271-I, plus interest on any TDS short-deduction." },
    { q: "Can these forms be used for inward remittances?", a: "No. Forms 15CA and 15CB are only for outward remittances (money leaving India)." },
  ],
};
