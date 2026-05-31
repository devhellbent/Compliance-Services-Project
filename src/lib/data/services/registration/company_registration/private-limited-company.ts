import { ServiceData } from "@/lib/types";

export const privateLimitedCompanyData: ServiceData = {
  title: "Private Limited Company Registration",
  breadcrumb: ["Home", "Registrations", "Private Limited Company"],
  description:
    "Establish your business with India's most trusted corporate structure. Private Limited Company registration offers limited liability protection, enhanced credibility, and seamless access to funding opportunities—making it the preferred choice for startups and growing enterprises.",
  overview: `**Private Limited Company Registration**

**Private Limited Company Registration** is the legal process of forming a **private company** under the **Companies Act, 2013** in India. A **Private Limited Company (Pvt. Ltd.)** is a business structure that provides **limited liability protection** to its shareholders and a **separate legal identity** from its owners.

This type of company is ideal for startups, small-to-medium businesses, and growing enterprises because it allows easy **fundraising**, offers **better credibility**, and provides a strong foundation for scaling up operations.

**What is Private Limited Company?**

A private limited company (Pvt. Ltd.) is a type of business structure that is privately held and owned by a small group of stakeholders. In India, it is defined and regulated by the Companies Act, 2013. This business structure is a popular choice for startups and small to medium-sized enterprises (SMEs) because it combines the benefits of a corporate structure with a degree of privacy and operational flexibility.

A private limited company is a business structure that is a separate legal entity from its owners, offering the key benefit of limited liability. This means the personal assets of the shareholders are protected and are not at risk for the company's debts.

**Key features (Companies Act, 2013)**

- **Separate legal entity** — can contract, own property, sue, and be sued in its own name.
- **Limited liability** of members to unpaid amount on shares (for companies limited by shares).
- **Perpetual succession** — continuity independent of changes in members or directors.
- **Membership** — minimum **two** members and maximum **200** (with prescribed exclusions for employee shareholders).
- **Share transfer restrictions** — AoA typically restricts free transfer; no public offer of securities.
- **Directors** — minimum **two** directors (maximum **15**, extendable by special resolution); **at least one resident** director in India.
- **No public subscription** — cannot invite the public to subscribe for shares or debentures.

**Types of private limited companies**

- **Company limited by shares:** Most common; liability limited to the unpaid amount on shares.
- **Company limited by guarantee:** Members' liability is limited to a specific amount they guarantee to contribute if the company is wound up (common for non-profits).
- **Unlimited company:** Rare; no cap on members' liability.`,
  whyChooseUs: [
    {
      icon: "Building2",
      title: "Separate Legal Entity",
      text: "The company is distinct from its owners.",
    },
    {
      icon: "Shield",
      title: "Limited Liability",
      text: "Shareholders' liability is limited to their share capital.",
    },
    {
      icon: "RefreshCw",
      title: "Perpetual Succession",
      text: "The company's existence is not affected by the change of its members.",
    },
    {
      icon: "TrendingUp",
      title: "Fundraising",
      text: "Easy to raise funds from investors.",
    },
  ],
  advantages: [
    {
      icon: "Shield",
      title: "Limited Liability",
      text: "Protects personal assets of shareholders from company losses.",
    },
    {
      icon: "Building2",
      title: "Separate Legal Entity",
      text: "Provides a layer of security and high credibility to business operations.",
    },
    {
      icon: "RefreshCw",
      title: "Perpetual Existence",
      text: "Ensures business stability and long-term continuity.",
    },
    {
      icon: "Award",
      title: "Enhanced Credibility",
      text: "Signals professionalism to clients, suppliers, and financial institutions.",
    },
    {
      icon: "TrendingUp",
      title: "Easier Access to Funding",
      text: "Highly favored by angel investors, VCs, and banks for capital raising.",
    },
    {
      icon: "BadgePercent",
      title: "Tax Benefits",
      text: "May be eligible for lower corporate tax rates and various business expense deductions.",
    },
    {
      icon: "ArrowRightLeft",
      title: "Easy Transferability of Shares",
      text: "Ownership can be transferred by selling shares to other individuals within the restricted group.",
    },
  ],
  disadvantages: [
    {
      icon: "Clock",
      title: "Complex Registration Process",
      text: "Involves multiple steps (DSC, DIN, MCA filings) and often requires professional assistance.",
    },
    {
      icon: "FileWarning",
      title: "High Compliance Burden",
      text: "Subject to stringent regulations, mandatory annual filings, statutory audits, and regular meetings.",
    },
    {
      icon: "EyeOff",
      title: "Lack of Privacy",
      text: "Key information (financials, director details) is publicly accessible on the MCA website.",
    },
    {
      icon: "Wallet",
      title: "Higher Costs",
      text: "Involves significant setup costs, ongoing professional fees for auditors/CS, and higher corporate tax rates.",
    },
  ],
  eligibility: [
    "To register a Private Limited Company in India, the following requirements must be met:",
    {
      title: "Requirements",
      items: [
        "**Minimum two members:** At least two shareholders (maximum **200**). Shareholders can be individuals or corporate entities.",
        "**Minimum two directors:** At least two directors (individuals only). **One must be a resident of India.**",
        "**Digital Signature Certificate (DSC):** All directors must have a valid **Class 3 DSC**.",
        "**Unique company name:** The name must be unique and must end with **Private Limited** or **Pvt Ltd.**",
        "**Registered office:** A physical address in India is required for official correspondence.",
        "**Minimum capital:** There is **no mandatory minimum paid-up capital** requirement.",
      ],
    },
    {
      title: "Checklist for registration",
      items: [
        "Finalize at least **two directors** and **two shareholders**.",
        "Choose **1–2 unique names** for reservation.",
        "Define the **authorised share capital**.",
        "Prepare the main business objectives (**MoA**).",
        "Identify the **registered office** address.",
        "Obtain **DSC** for all directors.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Directors and shareholders",
      content: {
        title: "For the directors and shareholders",
        items: [
          "**PAN card:** Mandatory for all Indian nationals.",
          "**Identity proof:** Aadhaar Card, Voter ID, Passport, or Driving License.",
          "**Address proof:** Latest bank statement, electricity bill, or telephone bill (not older than **2 months**).",
          "**Photographs:** Recent passport-size photos.",
          "**Foreign nationals:** Valid passport mandatory; identity and address proofs from the home country must be **notarized** or **apostilled** as applicable.",
        ],
      },
    },
    {
      tabTitle: "Registered office",
      content: {
        title: "For the registered office",
        items: [
          "**Proof of address:** Latest utility bill (electricity, water, or gas) of the premises.",
          "**Ownership proof:** Property deed or sale deed (if owned).",
          "**Rented premises:** Registered rent/lease agreement and a **No Objection Certificate (NOC)** from the landlord.",
        ],
      },
    },
    {
      tabTitle: "Foundational legal documents",
      content: {
        title: "Foundational legal documents",
        items: [
          "**Memorandum of Association (MoA):** Outlining the company’s objects and scope.",
          "**Articles of Association (AoA):** Containing internal rules and regulations.",
          "**Consent and declarations:** Signed forms (**INC-9**, **DIR-2**) from directors and shareholders.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "DSC for promoters",
      description:
        "Obtain **Class 3 DSC** for all proposed directors and subscribers who will sign e-forms.",
    },
    {
      step: 2,
      title: "SPICe+ Part A — Name reservation",
      description:
        "Reserve a unique name via **RUN** or **Part A of SPICe+**; align the name with **Rule 8** and trademark checks.",
    },
    {
      step: 3,
      title: "SPICe+ Part B — Incorporation",
      description:
        "File **SPICe+ Part B** with proposed capital, subscriber details, **DIR** declarations, registered office proof, and linked **AGILE-PRO-S** where opted for **GSTIN / EPFO / ESIC / bank account**.",
    },
    {
      step: 4,
      title: "e-MoA and e-AoA",
      description:
        "Adopt **INC-33** (e-MoA) and **INC-34** (e-AoA) or custom AoA as permitted for your activity class.",
    },
    {
      step: 5,
      title: "RoC scrutiny",
      description:
        "Respond to **Registrar** queries if any; revise attachments or clarify objects if asked.",
    },
    {
      step: 6,
      title: "Certificate, PAN & TAN",
      description:
        "Receive **Certificate of Incorporation**, **Corporate PAN**, and **TAN**; complete post-incorporation registers and optional shop/GST registrations.",
    },
  ],
  fees: [
    {
      component: "Digital Signature (DSC)",
      fees: "₹2,000 – ₹4,000",
      remarks: "For two directors (Class 3)",
    },
    {
      component: "Name reservation (RUN)",
      fees: "₹0 – ₹1,000",
      remarks: "If reserved separately; often included in SPICe+",
    },
    {
      component: "Government fees & stamp duty",
      fees: "₹2,000 – ₹7,000",
      remarks: "Varies by state and authorised capital",
    },
    {
      component: "Professional fees (CA/CS/Legal)",
      fees: "₹3,000 – ₹10,000",
      remarks: "For drafting, filings, and end-to-end management",
    },
    {
      component: "PAN & TAN (via SPICe+)",
      fees: "Included",
      remarks: "Applied simultaneously during registration",
    },
    {
      component: "Total estimated (₹1 lakh authorised capital)",
      fees: "₹10,000 – ₹20,000",
      remarks: "Typical range depending on state of registration",
    },
  ],
  faqs: [
    {
      q: "What is the minimum capital requirement to start a Private Limited Company?",
      a: "There is no minimum capital requirement. Earlier, it was ₹1 lakh, but now you can register with any amount, even ₹1,000 or ₹10,000 as authorized capital. However, authorized capital should be realistic based on business operations.",
    },
    {
      q: "How long does it take to register a Private Limited Company?",
      a: "The entire process typically takes 10-15 working days from the date of filing SPICe+ Part B, provided all documents are correct and the name is approved. Delays may occur due to incomplete documentation or queries raised by the ROC.",
    },
    {
      q: "What are the annual compliance requirements for a Private Limited Company?",
      a: "Annual compliances include: (1) Holding at least 4 board meetings and 1 AGM, (2) Filing annual financial statements (Form AOC-4), (3) Filing annual returns (Form MGT-7), (4) Maintaining statutory registers, (5) Statutory audit, (6) Filing Income Tax returns.",
    },
    {
      q: "Can a Private Limited Company have foreign directors or shareholders?",
      a: "Yes, a Private Limited Company can have foreign nationals as directors and shareholders. However, at least one director must be a resident of India. Foreign investment is subject to FDI regulations and sectoral caps.",
    },
    {
      q: "What is the difference between Authorized Capital and Paid-up Capital?",
      a: "Authorized Capital is the maximum share capital a company is authorized to issue as per its MoA. Paid-up Capital is the actual amount of money received from shareholders against shares issued. Paid-up capital cannot exceed authorized capital.",
    },
  ],
};
