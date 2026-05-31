import { ServiceData } from "@/lib/types";

export const onePersonCompanyData: ServiceData = {
  title: "One Person Company (OPC) Registration",
  breadcrumb: [
    "Home",
    "Registrations",
    "Company Registration",
    "One Person Company",
  ],
  description:
    "Empower your solo entrepreneurial vision with corporate advantages. One Person Company registration provides single-member businesses with limited liability protection and corporate structure benefits, perfect for individual entrepreneurs seeking formal business recognition.",
  overview: `**One Person Company (OPC) registration**

**One Person Company (OPC) registration** in India is a structure under the **Companies Act, 2013** for **solo entrepreneurs**. It gives **limited liability** and a **separate legal identity** while a **single individual** acts as shareholder and director. Before OPCs, a sole person typically used a **sole proprietorship**, with **unlimited** personal exposure.

An OPC blends **sole control** with a **credible corporate** image—useful when banks, suppliers, or large clients expect a registered company.

**What is a One Person Company?**

An OPC is a type of **private** company with **only one member**. It is a **separate legal entity** and can own assets and contract in its own name. The member must appoint a **nominee** so that membership can continue if the member dies or is unable to contract.

**Features of an OPC**

- **Single shareholder and director:** Only one natural person as member; can be the sole director (up to **15** directors allowed).
- **Separate legal entity:** Distinct from the owner; can own property and sue or be sued.
- **Limited liability:** Liability is limited to the **unpaid** amount on shares; personal assets are not exposed for ordinary company debts.
- **Perpetual succession:** The company continues after the owner’s death—the **nominee** becomes the member as per law.
- **Minimum capital:** **No** mandatory minimum **paid-up** capital.
- **Nominee:** **Mandatory** nomination of a person who becomes member if the original member dies or cannot contract.
- **Lower compliance:** Certain relaxations vs other companies (for example **no Annual General Meeting** requirement).`,
  whyChooseUs: [
    {
      icon: "User",
      title: "Single Owner",
      text: "Owned and managed by a single individual.",
    },
    {
      icon: "Shield",
      title: "Limited Liability",
      text: "Protects the owner's personal assets from business debts.",
    },
    {
      icon: "Building2",
      title: "Separate Legal Entity",
      text: "The company has its own legal identity.",
    },
    {
      icon: "UserCheck",
      title: "Nominee Director",
      text: "A nominee must be appointed to ensure perpetual succession.",
    },
  ],
  advantages: [
    {
      icon: "Shield",
      title: "Protection of Personal Assets",
      text: "Limited liability ensures that the owner's home, car, and savings are safe from business liabilities.",
    },
    {
      icon: "User",
      title: "Full Control",
      text: "The sole owner makes all decisions without the need for board resolutions or consensus from partners.",
    },
    {
      icon: "Award",
      title: "Enhanced Credibility",
      text: 'Being a registered "Private Limited" entity builds trust with banks, suppliers, and large corporate clients.',
    },
    {
      icon: "TrendingUp",
      title: "Easier Access to Loans",
      text: "Banks and financial institutions prefer lending to companies rather than sole proprietorships due to their formal structure.",
    },
    {
      icon: "RefreshCw",
      title: "Continuous Existence",
      text: "The nominee system ensures that the business does not shut down abruptly upon the owner's death.",
    },
    {
      icon: "BadgePercent",
      title: "Tax Planning",
      text: "OPCs may benefit from certain corporate tax deductions and lower tax rates compared to individuals in higher income brackets.",
    },
  ],
  disadvantages: [
    {
      icon: "UserX",
      title: "Restricted Ownership",
      text: "Only one person can be a member. It cannot easily bring in equity investors like a standard private limited company.",
    },
    {
      icon: "ArrowRightLeft",
      title: "Compulsory Conversion",
      text: "If the annual turnover exceeds ₹2 Crores or the paid-up capital exceeds ₹50 Lakhs, it must be converted into a Private Limited Company.",
    },
    {
      icon: "FileWarning",
      title: "Compliance Burden",
      text: "While lower than other companies, it still requires annual filings, statutory audits, and maintenance of minutes.",
    },
    {
      icon: "Wallet",
      title: "High Setup Costs",
      text: "Registration fees, professional charges, and mandatory digital signatures make it more expensive to start than a proprietorship.",
    },
    {
      icon: "Globe",
      title: "Limitation for NRI/Foreigners",
      text: "Only an Indian citizen and resident can form an OPC in India.",
    },
  ],
  eligibility: [
    "To register an OPC in India, the following requirements must be met:",
    {
      title: "Requirements",
      items: [
        "**Single individual member:** Only a **natural person** who is an **Indian citizen** and **resident** of India may incorporate an OPC.",
        "**Nominee:** The member must nominate **one person** (also an Indian citizen and resident).",
        "**Minimum one director:** The member may be the **sole director**, or the company may have up to **15** directors.",
        "**No multiple OPCs:** A person can be a member (and nominee) in **only one OPC** at a time.",
        "**Not for minors:** A minor cannot be a member or nominee or hold shares with beneficial interest.",
        "**No non-profit activities:** An OPC cannot be incorporated or converted into a **Section 8** (non-profit) company.",
        "**No financial-investment business:** An OPC cannot carry on **non-banking financial investment** activities, including investment in securities of any body corporate.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Member and nominee",
      content: {
        title: "For the member and nominee",
        items: [
          "**Nominee consent (Form INC-3):** Filed with incorporation; includes nominee PAN and address proof as prescribed.",
          "**PAN card:** Mandatory for identity proof.",
          "**Identity proof:** Aadhaar Card, Voter ID, Passport, or Driving License.",
          "**Address proof:** Latest bank statement, electricity bill, or telephone bill (not older than **2 months**).",
          "**Photographs:** Recent passport-size photos.",
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
          "**Rented premises:** Registered rent/lease agreement.",
          "**NOC from owner:** No Objection Certificate for using the address as the registered office.",
        ],
      },
    },
    {
      tabTitle: "Foundational company documents",
      content: {
        title: "Foundational company documents",
        items: [
          "**Digital Signature Certificate (DSC):** For the sole director to sign electronic forms.",
          "**Director Identification Number (DIN):** Allotted during incorporation.",
          "**Memorandum of Association (MoA) and Articles of Association (AoA):** Defining the company’s objects and internal rules.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "DSC & DIN",
      description:
        "Obtain Digital Signature Certificate (DSC) and Director Identification Number (DIN).",
    },
    {
      step: 2,
      title: "Name Approval",
      description: "File for name reservation using the SPICe+ Part A form.",
    },
    {
      step: 3,
      title: "Incorporation",
      description: "File the SPICe+ Part B form with the required documents.",
    },
    {
      step: 4,
      title: "Certificate of Incorporation",
      description: "Issued by the RoC upon approval.",
    },
  ],
  fees: [
    {
      component: "Name reservation (RUN)",
      fees: "₹200",
      remarks: "Reserving a unique name",
    },
    {
      component: "Incorporation fee (SPICe+)",
      fees: "Varies",
      remarks:
        "Depends on authorised capital; for lower slabs government fee may be nil but stamp duty applies",
    },
    {
      component: "Stamp duty",
      fees: "Varies by state",
      remarks: "On authorised capital and MoA/AoA",
    },
    {
      component: "Digital Signature Certificate (DSC)",
      fees: "₹1,000 – ₹2,000",
      remarks: "For the sole director (Class 3)",
    },
    {
      component: "PAN and TAN",
      fees: "Included",
      remarks: "Usually integrated in SPICe+ incorporation",
    },
    {
      component: "Nominee consent",
      fees: "Minor",
      remarks: "Drafting and notarizing nominee consent",
    },
    {
      component: "Professional / CA fees",
      fees: "₹5,000 – ₹10,000",
      remarks: "Typical range for legal and digital process",
    },
    {
      component: "Total estimated (₹1 lakh authorised capital)",
      fees: "₹7,000 – ₹12,000",
      remarks: "Including government and professional fees",
    },
  ],
  faqs: [
    {
      q: "What is the minimum capital requirement for an OPC?",
      a: "There is no minimum capital requirement to register an OPC. You can start with ₹1,000 or even ₹10,000 as authorized capital. However, capital should be sufficient for proposed business operations.",
    },
    {
      q: "Is it mandatory to appoint a nominee for OPC? What happens if the nominee refuses later?",
      a: "Yes, appointing a nominee is mandatory at the time of incorporation. The nominee will become the OPC director if the sole director becomes incapacitated or passes away. If a nominee refuses or resigns, the OPC must appoint a new nominee within 15 days to comply with the Companies Act requirements.",
    },
    {
      q: "When does an OPC need to convert into a Private Limited Company?",
      a: "An OPC must convert into a Private Limited Company within 6 months if: (a) Paid-up share capital exceeds ₹50 lakh, OR (b) Average annual turnover exceeds ₹2 crore during any financial year. Voluntary conversion is also allowed anytime.",
    },
    {
      q: "What are the annual compliance requirements for an OPC?",
      a: "OPCs must file annual financial statements (Form AOC-4) and annual returns (Form MGT-7) with the ROC. Income tax returns must be filed annually. OPCs with turnover below ₹2 crore are exempt from audit, but maintaining proper books of accounts is mandatory. Board meetings and AGM are not required for OPCs.",
    },
    {
      q: "Can a foreign national be a director in an OPC?",
      a: "No, only a natural person who is an Indian citizen and resident in India can incorporate an OPC or become its director/nominee. Foreign nationals and NRIs are not eligible to form or manage an OPC in India.",
    },
  ],
};
