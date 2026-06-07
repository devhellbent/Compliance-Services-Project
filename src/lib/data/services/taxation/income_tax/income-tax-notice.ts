import { ServiceData } from "@/lib/types";

export const incomeTaxNoticeData: ServiceData = {
  title: "Income Tax Notice",
  breadcrumb: ["Home", "Taxation", "Income Tax", "Income Tax Notice"],
  description:
    "An Income Tax Notice is a formal communication from the Tax Department regarding your tax account — to request information, clarify discrepancies, or demand outstanding tax.",
  overview: `An Income Tax Notice is a formal communication from the Tax Department regarding your tax account. It is usually sent via email or your e-filing portal to request information, clarify discrepancies, or demand outstanding tax. Most notices are routine and generated automatically when your reported income doesn't match the department's data, such as records in your Annual Information Statement (AIS) or Form 26AS.

Common types for AY 2026-27 include Section 143(1) (summary processing), Section 139(9) (defective return), and Section 143(2) (scrutiny assessment). Budget 2026 has introduced a revised immunity framework, allowing taxpayers to correct errors through "updated returns" even after receiving certain notices, provided they pay the applicable additional tax. Always verify the Document Identification Number (DIN) on the portal to ensure the notice is authentic.

### Most Common Types of Income Tax Notice

- **Section 143(1) — Intimation Notice:** Computerized comparison of your filed data with department records. Outcomes: no demand, tax demand, or refund.
- **Section 139(9) — Defective Return:** Structural or clerical errors — wrong ITR form, missing schedules, or unpaid self-assessment tax. Must correct within 15 days.
- **Section 142(1) — Inquiry Before Assessment:** Formal request for information or documents before assessment completion.
- **Section 143(2) — Scrutiny Notice:** Detailed check for understated income or excessive deductions. Requires point-by-point response with evidence.
- **Section 156 — Notice of Demand:** Formal order to pay a specific tax, interest, or penalty amount within 30 days.

### Common Reasons for Receiving a Notice
- Mismatch with AIS or Form 26AS (unreported interest, dividends, TDS discrepancies)
- High-value transactions (cash deposits > ₹10L, credit card bills > ₹1L cash, property > ₹30L)
- Procedural errors (wrong ITR form, missing schedules, unpaid tax)
- Sudden fluctuations in income or massive loss claims
- Non-disclosure of foreign or domestic assets`,
  advantages: [
    { icon: "ShieldCheck", title: "Opportunity to Correct Errors", text: "Budget 2026's revised immunity framework allows taxpayers to correct errors through 'updated returns' even after receiving certain notices, provided they pay applicable additional tax." },
    { icon: "Eye", title: "Faceless & Digital Process", text: "The entire response process is now strictly digital and faceless — no need to visit a tax office. Every step is handled through the e-Filing portal." },
    { icon: "CheckCircle", title: "Automated Data Matching", text: "Most 143(1) notices are routine system-generated prompts ensuring data consistency. They often result in no additional demand if your records are accurate." },
    { icon: "FileCheck", title: "DIN Authentication", text: "You can verify any notice's authenticity using the Document Identification Number (DIN) on the portal, protecting against fraudulent communications." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "Tight Response Deadlines", text: "Most notices require response within 15 to 30 days. Missing the deadline can lead to ex-parte assessment (assessment without your input)." },
    { icon: "Wallet", title: "Potential Financial Liability", text: "Scrutiny notices (Section 143(2)) can result in additional tax demand, interest, and penalties if discrepancies are found." },
    { icon: "Clock", title: "Time-Consuming Documentation", text: "Serious notices like scrutiny require point-by-point responses with comprehensive supporting evidence — bank statements, invoices, deeds, etc." },
    { icon: "Gavel", title: "Assessee in Default Risk", text: "Failure to pay a Section 156 demand within 30 days makes you an 'assessee in default,' leading to interest charges and potential prosecution." },
  ],
  eligibility: [
    {
      title: "Who May Receive an Income Tax Notice?",
      items: [
        "Any taxpayer with a mismatch between filed ITR and AIS/Form 26AS data.",
        "Individuals with high-value transactions (cash deposits > ₹10 Lakh, property > ₹30 Lakh).",
        "Taxpayers who filed with wrong ITR form, missing schedules, or unpaid self-assessment tax.",
        "Those with sudden income fluctuations or massive loss carry-forward claims.",
        "Individuals with undisclosed foreign assets or family investments not properly 'clubbed'.",
        "Any taxpayer — notices are automated based on data analytics and do not require suspicion.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Master Documents (All Notices)",
      content: {
        title: "Basic Documents Required for All Notices",
        items: [
          "**Copy of the Notice:** To reference the DIN (Document Identification Number).",
          "**Filed ITR & Acknowledgment:** Original ITR-V and computation of income.",
          "**AIS & TIS:** Annual Information Statement and Taxpayer Information Summary.",
          "**Form 26AS:** To verify TDS and TCS entries.",
        ],
      },
    },
    {
      tabTitle: "Section-Specific Documents",
      content: {
        title: "Documents for Specific Notice Types",
        items: [
          "**143(1) Intimation:** Bank certificates for interest, dividend statements, revised TDS certificates.",
          "**139(9) Defective Return:** File a Corrected ITR fixing the specific error mentioned.",
          "**143(2) Scrutiny:** Bank statements (all accounts), ledger copies, audit reports, and point-by-point explanation.",
          "**142(1) Inquiry:** Specific proofs requested — Gift Deeds, loan agreements, property deeds.",
        ],
      },
    },
    {
      tabTitle: "Claim Proofs",
      content: {
        title: "Proof for Specific Claims",
        items: [
          "**Section 80C/80D:** Premium receipts (LIC, Health Insurance), PPF passbook, tuition fee receipts.",
          "**HRA Claims:** Rent agreements, rent receipts, landlord's PAN (if rent > ₹1 Lakh).",
          "**Capital Gains:** Sale/Purchase deeds, broker notes, and renovation bills.",
          "**Business Expenses:** Audited Balance Sheet, P&L, and invoices for major expenses.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Verify & Authenticate", description: "Log in to incometax.gov.in. Go to 'e-File' > 'Authenticate Notice/Order' and enter the DIN to confirm authenticity." },
    { step: 2, title: "Identify Section & Deadline", description: "Note the section number (143(1), 139(9), 143(2), etc.) and the response deadline (typically 15-30 days)." },
    { step: 3, title: "Access e-Proceedings", description: "Navigate to 'Pending Actions' > 'e-Proceedings' > 'Self' (or 'As Authorized Representative'). Click 'View Notice' to download." },
    { step: 4, title: "Formulate Response", description: "Choose 'Agree' (file revised return + pay tax), 'Disagree' (provide point-wise explanation with proof), or 'Partially Agree'." },
    { step: 5, title: "Upload Supporting Documents", description: "For Disagree/Partially Agree: upload Form 26AS, AIS, bank statements, expense vouchers, gift deeds, etc. as clear PDFs (max 5MB each)." },
    { step: 6, title: "Submit & e-Verify", description: "Review, submit, e-verify via Aadhaar OTP/Net Banking/DSC, and download the submission receipt." },
  ],
  fees: [
    { component: "Government Filing Fee", fees: "NIL", remarks: "Responding to notices on the portal is free." },
    { component: "CA Consultation (Simple Notice)", fees: "₹2,000 – ₹5,000", remarks: "For 143(1) intimation or 139(9) defective return." },
    { component: "CA Consultation (Scrutiny)", fees: "₹10,000 – ₹50,000+", remarks: "For 143(2) scrutiny with detailed response preparation." },
    { component: "Revised Return Filing", fees: "₹1,000 – ₹5,000", remarks: "If agreeing to notice requires filing a revised return." },
    { component: "Interest on Tax Due (234A)", fees: "1% per month", remarks: "On unpaid tax amount from the due date." },
  ],
  faqs: [
    { q: "How do I know if an Income Tax Notice is genuine?", a: "Verify the Document Identification Number (DIN) on the e-filing portal at 'e-File' > 'Authenticate Notice/Order'. All genuine notices have a DIN." },
    { q: "What is the most common type of notice?", a: "Section 143(1) Intimation — a computerized comparison of your filed data with department records. Most taxpayers receive this after their return is processed." },
    { q: "How long do I have to respond?", a: "Typically 15 to 30 days depending on the notice type. Section 139(9) defective returns must be corrected within 15 days." },
    { q: "What happens if I don't respond?", a: "The department may make an ex-parte assessment (without your input), potentially resulting in higher tax demand, penalties, and interest." },
    { q: "Do I need a CA to respond?", a: "Not always. Simple 143(1) mismatches can be resolved yourself. However, for scrutiny notices (143(2)), professional help is strongly recommended." },
  ],
};
