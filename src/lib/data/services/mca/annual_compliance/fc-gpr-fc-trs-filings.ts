import { ServiceData } from "@/lib/types";

export const fcGprFcTrsFilingsData: ServiceData = {
  title: "FC-GPR/FC-TRS Filings",
  breadcrumb: ["Home", "MCA", "Annual & Half-Yearly Compliance", "FC-GPR/FC-TRS Filings"],
  description: "Mandatory reporting to the RBI for tracking foreign direct investment (FDI) inflows and ownership transfers under FEMA regulations.",
  overview: `In the context of Indian foreign exchange regulations (FEMA), **FC-GPR** and **FC-TRS** are mandatory reporting forms filed with the Reserve Bank of India (RBI) via the FIRMS portal to track foreign investment.

- **FC-GPR (Foreign Currency-Gross Provisional Return):** Filed when an Indian company issues fresh capital instruments (shares) to a foreign investor. Must be filed within 30 days of share allotment.
- **FC-TRS (Foreign Currency-Transfer of Shares):** Used for the transfer of existing shares between a resident and a non-resident (or vice versa). Must be filed within 60 days of the transfer.

These filings ensure that foreign investment adheres to sectoral caps, pricing guidelines, and anti-money laundering (AML) norms.`,
  advantages: [
    { icon: "ShieldCheck", title: "Legal Recognition of FDI", text: "Turns a 'private deal' into a legally recognized foreign investment, providing official proof to the RBI." },
    { icon: "Globe", title: "Repatriation of Funds", text: "Essential for foreign investors to take money back to their home country (repatriation). Banks will block outward remittances without these filings." },
    { icon: "Search", title: "Audit & Compliance Protection", text: "Creates a clear audit trail, protecting the company and directors from future FEMA contravention penalties." },
    { icon: "Zap", title: "Investor Trust", text: "Compliant status with RBI is seen as a low-risk, professionally managed entity by global Venture Capitalists." },
    { icon: "TrendingUp", title: "Enables Secondary Transfers", text: "Once approved, the company can legally update its Register of Members and issue certificates to the new foreign owner." },
    { icon: "DollarSign", title: "Prevents Massive Penalties", text: "On-time filing saves companies from Late Submission Fees (LSF) and penalties that can go up to 300% of the investment amount." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "Complex Compounding Process", text: "Late filings require 'compounding' with the RBI—a time-consuming and expensive legal process to regularize defaults." },
    { icon: "FileWarning", title: "Strict Pricing Guidelines", text: "Shares cannot be issued below 'Fair Value' (inflows) or sold above 'Fair Value' (outflows), requiring complex DCF valuation." },
    { icon: "Clock", title: "Aggressive Deadlines", text: "30 days for FC-GPR and 60 days for FC-TRS. Missing these windows triggers immediate FEMA non-compliance." },
  ],
  eligibility: [
    {
      title: "FC-GPR (Primary Issue)",
      items: [
        "Indian Company, LLP, or Startup receiving Foreign Direct Investment (FDI).",
        "Issuance of Equity Shares, CCPS, CCDs, or Share Warrants.",
        "Shares must be issued within 60 days of receiving funds.",
      ],
    },
    {
      title: "FC-TRS (Secondary Transfer)",
      items: [
        "Transfer between Resident (Indian) and Non-Resident (Foreign).",
        "Transfer between Non-Resident (Repatriable) and Non-Resident (Non-Repatriable).",
        "Applies to sales, gifts, or inheritance of shares.",
      ],
    },
    {
      title: "Key Compliance Conditions",
      items: [
        "**Pricing:** Must meet Fair Value norms certified by a CA or Merchant Banker.",
        "**Sectoral Caps:** Investment must be within allowed percentage for the industry.",
        "**KYC:** Mandatory report from the foreign investor's bank via the AD bank.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Financial Proofs",
      content: {
        title: "Mandatory Remittance Data",
        items: [
          "**FIRC:** Foreign Inward Remittance Certificate from the bank.",
          "**KYC Report:** 6-pointer report of the foreign investor from their overseas bank.",
          "**Valuation Certificate:** From a CA or Merchant Banker (using DCF method).",
        ],
      },
    },
    {
      tabTitle: "Company Approvals",
      content: {
        title: "Statutory Documents",
        items: [
          "**Board Resolution:** Approving the allotment or transfer of shares.",
          "**CS Certificate:** Confirming compliance with Companies Act and FEMA.",
          "**Pre & Post Shareholding Pattern:** Ownership structure before and after transaction.",
        ],
      },
    },
    {
      tabTitle: "Transfer Records",
      content: {
        title: "Specific for FC-TRS",
        items: [
          "**Transfer Agreement:** Copy of Share Purchase Agreement or Form SH-4.",
          "**Consent Letters:** Signed by both buyer and seller.",
          "**Declaration:** Signed non-resident declaration as per RBI format.",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Entity Registration", description: "Register the company on the RBI FIRMS portal and create the Entity Master." },
    { step: 2, title: "Funds Receipt & KYC", description: "Receive foreign funds; AD bank issues FIRC and coordinates KYC with overseas bank." },
    { step: 3, title: "Allotment/Transfer", description: "Company allots shares (FC-GPR) or parties execute transfer deed (FC-TRS)." },
    { step: 4, title: "Valuation", description: "Obtain Fair Value certificate from a practicing Chartered Accountant." },
    { step: 5, title: "Portal Submission", description: "Upload the form and all mandatory attachments (PDF) to the FIRMS portal." },
    { step: 6, title: "AD Bank Approval", description: "The Authorised Dealer (AD) bank reviews the filing and forwards it to RBI for acknowledgment." },
  ],
  fees: [
    { component: "Government Filing Fee", fees: "₹0", remarks: "RBI does not charge a filing fee for on-time reporting." },
    { component: "Late Submission Fee (LSF)", fees: "₹5,000 - ₹50,000+", remarks: "Calculated based on the period of delay and investment amount." },
    { component: "Valuation Certificate Fee", fees: "₹5,000 - ₹15,000", remarks: "Professional fee for CA/Merchant Banker valuation." },
    { component: "Compounding Fee", fees: "Variable", remarks: "Significant penalties if default is regularized via compounding." },
  ],
  faqs: [
    { q: "What is the deadline for FC-GPR?", a: "Within 30 days from the date of allotment of capital instruments to the foreign investor." },
    { q: "Who is responsible for filing FC-TRS?", a: "The onus lies on the resident party (buyer or seller). In case of two non-residents, the investee company often assists." },
    { q: "What happens if I don't file with RBI?", a: "The foreign investment remains 'unreported', making it difficult for the investor to take money out of India. You also face heavy penalties for FEMA contravention." },
    { q: "Is a valuation certificate mandatory?", a: "Yes, to ensure the price complies with RBI's pricing guidelines (Fair Value norms)." },
  ],
};
