import { ServiceData } from "@/lib/types";

export const dematOfSharesData: ServiceData = {
  title: "Demat of Shares",
  breadcrumb: ["Home", "MCA", "Share Management Solutions", "Demat of Shares"],
  description: "Process of converting physical paper share certificates into a secure electronic format for faster trading and enhanced security.",
  overview: `**Dematerialisation (Demat)** is the process of converting physical paper share certificates into a secure electronic format.

Much like moving cash from a physical wallet into an online bank account, this system replaces tangible documents with digital entries. Under the current **MCA Rule 9B**, dematerialisation is now mandatory for almost all private limited companies (except small companies) to ensure transparency and prevent fraud.`,
  advantages: [
    { icon: "ShieldCheck", title: "Eliminates Physical Risks", text: "Protects your investments from being lost, stolen, forged, or damaged by fire/pests, which are common issues with paper certificates." },
    { icon: "Zap", title: "Instant Trading", text: "Electronic shares can be sold or transferred instantly. Paper shares required weeks of mailing and verification before a sale could be completed." },
    { icon: "DollarSign", title: "Cost Savings", text: "No stamp duty is payable on the transfer of digital shares. It also eliminates costs like courier charges or indemnity bonds for lost certificates." },
    { icon: "TrendingUp", title: "Odd-Lot Trading", text: "Allows you to trade even a single share with ease. In the paper era, selling less than a standard 'lot' was difficult and often done at a discount." },
    { icon: "Award", title: "Automatic Corporate Actions", text: "Dividends, bonus shares, and stock splits are automatically credited to your account or linked bank account without manual tracking." },
    { icon: "Search", title: "Enhanced Transparency", text: "Digital records provided by NSDL/CDSL are virtually impossible to manipulate, reducing the risk of 'bad deliveries' or duplicate certificates." },
  ],
  disadvantages: [
    { icon: "CreditCard", title: "Annual Maintenance Charges", text: "Requires a Demat account with a broker, which usually carries an annual AMC fee ranging from ₹300 to ₹800." },
    { icon: "AlertTriangle", title: "Strict Name Matching", text: "The name on your physical certificate must exactly match your Demat account; even a minor initial difference can cause a rejection." },
  ],
  eligibility: [
    {
      title: "Mandatory For Companies",
      items: [
        "**Rule 9B Mandate:** Every private company (not classified as 'small') must dematerialize shares.",
        "**Public Companies:** All unlisted public companies must facilitate demat.",
        "**Corporate Actions:** No buyback or bonus shares can be issued unless directors' shares are 100% dematted.",
      ],
    },
    {
      title: "Prerequisites for Shareholders",
      items: [
        "**Active Demat Account:** With a registered Depository Participant (DP).",
        "**Physical Custody:** Must possess the original, valid physical share certificates.",
        "**Exact Name Match:** KYC details on the account must match the share certificate.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Submission Pack",
      content: {
        title: "Required for Conversion",
        items: [
          "**Demat Request Form (DRF):** Provided by your DP (broker).",
          "**Original Share Certificates:** Surrendered and defaced with 'Surrendered for Dematerialisation'.",
          "**Client Master List (CML):** Stamped copy showing your active account details.",
        ],
      },
    },
    {
      tabTitle: "Identity Proof",
      content: {
        title: "KYC Requirements",
        items: [
          "**PAN Card:** Self-attested (mandatory for all joint holders).",
          "**Aadhaar Card:** For identity and address verification.",
          "**Form ISR-1:** For furnishing KYC details (if not already updated with the RTA).",
        ],
      },
    },
    {
      tabTitle: "Complex Cases",
      content: {
        title: "Supporting Documents",
        items: [
          "**Transposition Form:** If names are in a different order on the certificate.",
          "**Death Certificate:** Notarized copy if one joint holder is deceased.",
          "**Name Change Proof:** Marriage certificate or Gazette notification (if applicable).",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Open Demat Account", description: "Open an account with a SEBI-registered broker (DP) if you don't have one." },
    { step: 2, title: "Form Filling", description: "Fill the Demat Request Form (DRF) for each company's shares separately." },
    { step: 3, title: "Defacing", description: "Write 'Surrendered for Dematerialisation' on your physical certificates." },
    { step: 4, title: "Courier to DP", description: "Submit the DRF and physical certificates to your DP's office." },
    { step: 5, title: "RTA Verification", description: "The DP informs the depository, and the company's RTA verifies the certificates and signature." },
    { step: 6, title: "Credit", description: "Once verified, the paper shares are 'extinguished' and digital units are credited to your account." },
  ],
  fees: [
    { component: "Demat Request Fee", fees: "₹15 - ₹50", remarks: "Per certificate (charged by your broker)." },
    { component: "Courier Charges", fees: "₹50 - ₹100", remarks: "Per request batch." },
    { component: "Account Maintenance (AMC)", fees: "₹300 - ₹800", remarks: "Annual fee (Free for small holders under BSDA)." },
    { component: "ISIN Issuance (Company)", fees: "₹15,000 - ₹30,000", remarks: "One-time cost borne by the company." },
    { component: "GST", fees: "18%", remarks: "Applicable on all the above service fees." },
  ],
  faqs: [
    { q: "What is Rule 9B?", a: "An MCA mandate requiring non-small private companies to dematerialize their shares to ensure transparency." },
    { q: "Can I sell my physical shares directly?", a: "No, most exchanges and regulations now require shares to be in demat form before they can be sold or transferred." },
    { q: "What if my name is slightly different on the certificate?", a: "You will need to submit a 'Name Change' affidavit or a Gazette notification along with your demat request." },
    { q: "What is a 'Small Company' exemption?", a: "Private companies with capital < ₹4Cr and turnover < ₹40Cr are currently exempt from the mandatory demat rule." },
  ],
};
