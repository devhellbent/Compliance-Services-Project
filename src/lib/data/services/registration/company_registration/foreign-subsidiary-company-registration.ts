// lib/data/services/foreign-subsidiary-company-registration.ts

import { ServiceData } from "@/lib/types";

export const foreignSubsidiaryCompanyRegistrationData: ServiceData = {
  title: "Foreign Subsidiary Company Registration",
  breadcrumb: ["Home", "Registrations", "Foreign Subsidiary"],
  description:
    "Expand your business footprint across borders. Foreign Subsidiary Company registration establishes Indian parent company control in international markets, enabling global expansion with complete ownership, operational autonomy, and strategic market positioning worldwide.",
  overview: `Foreign subsidiary company registration

Establishing a foreign subsidiary is a comprehensive process that allows a foreign company (the parent or holding company) to establish a legal entity in another country (the host country), with the parent company retaining more than 50% ownership and control.

Since the registration process is heavily governed by the local laws of the host country, the following explanation outlines the general steps and requirements, using India as a common example jurisdiction.

## What is a Foreign Subsidiary Company?

A foreign subsidiary is a local company incorporated in the host country, but whose majority of the share capital (more than 50%) is held by a foreign corporation. This arrangement makes the foreign corporation the Parent or Holding Company, and the local company its Subsidiary.

The key feature is that the subsidiary is treated as a separate legal entity under the host country's laws (e.g., an Indian Private Limited Company under the Companies Act, 2013, in India), even though its control lies with the foreign parent.

## Set Up Your Subsidiary in India

Setting up a foreign subsidiary in India is a strategic move for global expansion, offering a host of significant advantages. The top reasons for establishing a subsidiary in India revolve around its massive market potential, strong talent pool, legal benefits, and cost efficiencies.

Here are the top reasons to set up your subsidiary in India:

### Access to a Massive and Growing Market

**Vast Consumer Base:** With a population exceeding 1.4 billion and a rapidly expanding middle class, India offers a huge, diverse consumer market. A local subsidiary provides direct access to this booming market, leading to increased revenue potential.

**Customization and Local Presence:** A subsidiary is a local entity, which allows you to tailor your products, services, and marketing strategies to match local preferences and cultural nuances, fostering stronger brand loyalty and market penetration.

### Access to a Deep and Skilled Talent Pool

**Abundant and Cost-Effective Workforce:** India is home to a massive pool of educated, skilled professionals, particularly in the fields of IT, engineering, science, and finance.

**English Proficiency:** The widespread use of English in the corporate sector significantly reduces language barriers, making it easier to integrate your local team with the parent company's global operations.

### Legal and Risk Mitigation Benefits

**Separate Legal Entity and Limited Liability:** A foreign subsidiary is registered as an Indian company, distinct from its parent company. This crucial feature provides limited liability protection, shielding the assets of the parent company from the debts, losses, or legal obligations of the Indian subsidiary.

**Operational Control:** For a Wholly Owned Subsidiary (WOS), the parent company retains 100% ownership and complete control over strategic decisions, operations, and intellectual property.

### Financial and Tax Advantages

**Tax Benefits and DTAA:** As an Indian company, the subsidiary can take advantage of the country's tax structure, including a concessional corporate tax rate for new manufacturing companies. Furthermore, India has signed Double Taxation Avoidance Agreements (DTAAs) with over 90 countries, which helps foreign companies avoid being taxed twice on the same income.

**Cost Efficiency:** India generally offers lower operational, manufacturing, and labor costs compared to many developed economies, which can substantially reduce production and service delivery expenses.

**Local Financial Access:** Being a domestic entity, the subsidiary can access local capital markets, bank financing, and government incentives, which can lower financing costs and reduce exposure to foreign exchange fluctuations.

### Enhanced Credibility and Business Operations

**Increased Local Credibility:** Incorporating locally demonstrates a long-term commitment to the Indian market. This significantly boosts credibility and trust with local clients, vendors, government authorities, and regulators.

**Full Spectrum of Business Activities:** Unlike a Branch Office or Liaison Office, which have restricted activities, a subsidiary can engage in the full range of commercial activities, including trading, manufacturing, and providing services.

**Favorable Regulatory Environment:** The Indian government has continuously introduced reforms to improve the "Ease of Doing Business," making the incorporation and compliance process more streamlined for foreign investors.
`,
  eligibility: [
    {
      title: "Eligibility Criteria",
      items: [
        "Must be registered as a Private Limited Company under the Companies Act, 2013.",
        "Minimum two (2) Directors, with at least one Resident Director (stayed in India ≥182 days in previous financial year).",
        "Minimum two (2) Shareholders (can be foreign parent, nominee, or other individuals/entities).",
        "Foreign parent must hold >50% of share capital or control Board composition (100% for Wholly-Owned Subsidiary).",
        "No minimum paid-up capital required, but sufficient funds should be infused for initial expenses.",
        "Registered office address in India is mandatory from incorporation date (proof required).",
        "All directors must have DIN (Director Identification Number) and DSC (Digital Signature Certificate).",
        "Indian and foreign directors/shareholders must provide valid identity and address proofs (apostilled/notarized for foreign nationals).",
        "Foreign parent company must be legally incorporated and provide proof (Certificate of Incorporation, Charter Documents).",
        "Board Resolution from parent company authorizing Indian subsidiary setup and nominating directors/subscribers.",
        "Proposed business activity must comply with India’s FDI policy (most sectors allow 100% FDI under Automatic Route; some require approval).",
      ],
    },
    {
      title: "I. Corporate structure and capital",
      items: [
        "Minimum two (2) Directors are mandatory for a Private Limited Company.",
        "At least one (1) Director must be a Resident in India (stayed in India at least 182 days in the immediately preceding financial year).",
        "Minimum two (2) Shareholders: the foreign parent, a nominee, or other corporate bodies or individuals.",
        "Foreign parent must hold more than 50% of share capital or control the Board; 100% for a Wholly-Owned Subsidiary (WOS).",
        "No minimum paid-up capital under the Companies Act, 2013, but infuse sufficient funds for initial expenses.",
        "Verifiable Registered Office address in India from incorporation date with proof (rent agreement, utility bill, NOC from owner).",
      ],
    },
    {
      title: "II. Directors and shareholders (individuals)",
      items: [
        "Every director must have a DIN; new directors usually apply during incorporation (SPICe+).",
        "Directors and MoA subscribers need a valid DSC for MCA e-filing.",
        "Indian nationals: PAN (mandatory), Aadhaar, Passport, Voter ID, or Driving Licence; address proof not older than two months.",
        "Foreign nationals: valid Passport (mandatory); address proof not older than two months, apostilled or notarized in home country.",
      ],
    },
    {
      title: "III. Foreign parent company",
      items: [
        "Foreign parent must be legally incorporated in its home country (Certificate of Incorporation, charter documents).",
        "Board Resolution authorizing the Indian subsidiary and nominating directors/subscribers.",
        "Proposed activities must comply with India’s FDI policy (Automatic Route vs Approval Route as applicable).",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "A. For Foreign Nationals (Directors & Shareholders)",
      content: {
        title: "A. For Foreign Nationals (Directors & Shareholders) Documents",
        items: [
          "**Identity Proof:** A copy of a valid **Passport** (mandatory).",
          "**Address Proof:** A copy of a recent bank statement or a utility bill (electricity, water, gas, or telephone bill) that is not older than two months. It must clearly show the individual's name and address.",
          "**Photograph:** A recent passport-sized photograph.",
          "**Director Identification Number (DIN):** If already obtained. If not, it will be applied for during incorporation.",
          "**Digital Signature Certificate (DSC):** Required for all proposed directors for e-filing.",
          "**Consent & Declaration Forms:** Required forms for directors and shareholders.",
        ],
      },
    },
    {
      tabTitle: "B. For Indian Nationals (Directors & Shareholders)",
      content: {
        title: "B. For Indian Nationals (Directors & Shareholders) Documents",
        items: [
          "**Identity Proof:** PAN Card (mandatory), Aadhaar Card, Passport, Voter ID, or Driving License.",
          "**Address Proof:** Recent utility bill, bank statement, or any government-issued address proof.",
          "**Photograph:** Recent passport-sized photograph.",
          "**Director Identification Number (DIN):** If already obtained. If not, it will be applied for during incorporation.",
          "**Digital Signature Certificate (DSC):** Required for all proposed directors for e-filing.",
        ],
      },
    },
  ],
  advantages: [
    {
      icon: "Globe",
      title: "Direct Market Access",
      text: "Allows the parent company to engage directly with Indian customers and vendors.",
    },
    {
      icon: "Shield",
      title: "Limited Risk",
      text: "Parent company's global assets are protected from the liabilities of the Indian entity.",
    },
    {
      icon: "Briefcase",
      title: "Full Operational Control",
      text: "The foreign parent can define the strategy, management, and operations of the subsidiary.",
    },
    {
      icon: "Award",
      title: "Brand Expansion",
      text: "Facilitates the building of a strong, localized brand presence in the Indian market.",
    },
    {
      icon: "Users",
      title: "Access to Local Talent",
      text: "Can directly hire and manage a workforce in India.",
    },
    {
      icon: "TrendingUp",
      title: "Fundraising Capability",
      text: "Can raise capital in India through local debt or equity markets.",
    },
  ],
  disadvantages: [
    {
      icon: "FileWarning",
      title: "Stringent Compliance",
      text: "Must follow all Indian statutory laws, including regular audits and FEMA reporting.",
    },
    {
      icon: "Wallet",
      title: "High Setup Costs",
      text: "Registration, legalizing documents (apostille), and initial capitalization involve significant costs.",
    },
    {
      icon: "GitBranch",
      title: "Complex Entry Process",
      text: "Requires coordination between multiple regulators (MCA, RBI, and home country authorities).",
    },
    {
      icon: "UserCheck",
      title: "Mandatory Local Director",
      text: "Finding and appointing a reliable local resident director can be a challenge.",
    },
    {
      icon: "Lock",
      title: "Exit Restrictions",
      text: "Closing or selling an Indian subsidiary is a highly regulated and time-consuming process.",
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Board Resolution & ODI Form",
      description:
        "Pass a board resolution and submit the ODI form to the AD Bank.",
    },
    {
      step: 2,
      title: "Fund Remittance",
      description: "Remit funds for investment to the foreign country.",
    },
    {
      step: 3,
      title: "Incorporate in Foreign Country",
      description: "Complete the incorporation process in the host country.",
    },
    {
      step: 4,
      title: "Post-Investment Compliance",
      description:
        "Submit evidence of investment to the AD Bank and obtain a UIN.",
    },
  ],
  fees: [
    {
      component: "Foreign Incorporation Fees",
      fees: "Varies Highly",
      remarks:
        "This is the major cost and depends entirely on the host country (e.g., USA, UK, Singapore).",
    },
    {
      component: "Indian Professional Fees",
      fees: "₹50,000+",
      remarks:
        "Covers FEMA advisory, ODI form filing, and coordination with the AD Bank. Excludes foreign legal costs.",
    },
  ],
  faqs: [
    {
      q: "What is an AD Bank?",
      a: "An Authorized Dealer (AD) Category-I Bank is a bank authorized by the RBI to deal in foreign exchange. All overseas investments from India must be reported to the RBI through an AD Bank.",
    },
    {
      q: "What is the ODI Form?",
      a: "The ODI (Overseas Direct Investment) Form is a comprehensive application used to report an Indian entity's investment in a foreign joint venture or wholly-owned subsidiary to the RBI.",
    },
    {
      q: "What is an Annual Performance Report (APR)?",
      a: "Every Indian party that has made an overseas investment must submit an Annual Performance Report (APR) in Form ODI Part II to the RBI every year, detailing the performance of the foreign subsidiary.",
    },
  ],
};
