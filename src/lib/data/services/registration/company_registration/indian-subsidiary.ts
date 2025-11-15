// lib/data/services/indian-subsidiary.ts

import { ServiceData } from "@/lib/types";

export const indianSubsidiaryData: ServiceData = {
  title: "Indian Subsidiary Company Registration",
  breadcrumb: ["Home", "Registrations", "Indian Subsidiary"],
  description:
    "Establish strategic presence in India's dynamic market. Indian Subsidiary registration enables foreign companies to incorporate domestic entities with complete compliance, ensuring FDI adherence while accessing India's vast consumer base and growth opportunities.",
  overview:
    "An **Indian Subsidiary** represents a strategic market entry vehicle where a foreign parent company establishes a wholly-owned or majority-controlled company registered and incorporated in India under the Companies Act, 2013, treated as a domestic company for all legal, tax, and operational purposes. This structure enables international corporations to establish substantial presence in India's rapidly growing economy while maintaining parent company control through equity ownership and board representation, complying with Foreign Direct Investment (FDI) regulations administered by the Department for Promotion of Industry and Internal Trade (DPIIT) and Reserve Bank of India (RBI). The Indian subsidiary operates as a separate legal entity distinct from its foreign parent, with limited liability protection ensuring parent company exposure is restricted to invested capital, while the subsidiary independently enters contracts, owns property, employs personnel, and conducts business operations across India. This incorporation provides significant advantages including treatment as an Indian company for taxation (taxed on worldwide income), access to domestic capital markets, eligibility for government incentives and schemes, participation in government tenders, and ability to establish branch offices and liaison offices. Foreign parents can invest through automatic route (in most sectors up to specified limits) or government approval route depending on sector and investment percentage, with sectoral caps and conditions specified in FDI Policy governing permissible ownership levels. The subsidiary structure facilitates complete business operations including manufacturing, trading, service provision, and distribution, unlike representative or branch offices which face operational restrictions. Minimum two directors (one must be Indian resident) and two shareholders (which can be foreign entities) are required, with paid-up capital requirements as per sectoral regulations. The structure enables profit repatriation to parent company through dividends subject to applicable withholding taxes, royalty and technical fee payments for technology transfer, and arm's length pricing compliance for inter-company transactions. Compliance obligations include annual financial statements, statutory audits, board meetings, ROC filings, RBI reporting through FC-GPR and FC-TRS returns, transfer pricing documentation, and adherence to Companies Act provisions. Indian subsidiaries build local market presence, develop distribution networks, customize products for Indian consumers, recruit domestic talent, and establish research and development facilities tailored to local needs. The structure offers flexibility to enter joint ventures with Indian partners, acquire existing Indian companies, or convert liaison/branch offices into subsidiaries as business scales. Sector-specific regulations apply for banking, insurance, defense, telecommunications, and retail requiring additional approvals and compliance. Ideal for multinational corporations seeking permanent establishment in India, manufacturing companies establishing production facilities, technology firms setting up development centers, and foreign investors targeting long-term growth in one of the world's fastest-growing major economies, Indian Subsidiary registration delivers comprehensive market access with complete operational autonomy and regulatory compliance.",
  whyChooseUs: [
    {
      icon: "FileSignature",
      title: "FDI Compliance Expertise",
      text: "We ensure full compliance with FDI regulations, including RBI reporting and FEMA guidelines.",
    },
    {
      icon: "UserCheck",
      title: "Resident Director Assistance",
      text: "We can assist in finding and appointing a resident director, a key legal requirement.",
    },
    {
      icon: "Briefcase",
      title: "Seamless Incorporation",
      text: "We handle the entire incorporation process, from name approval to obtaining the certificate of incorporation.",
    },
  ],
  advantages: [
    {
      icon: "Library",
      title: "Separate Legal Entity",
      text: "The subsidiary is a distinct legal entity from its foreign parent, with its own assets, liabilities, and legal standing in India.",
    },
    {
      icon: "ShieldCheck",
      title: "Limited Liability",
      text: "The liability of the foreign parent company is limited to the capital it has invested in the subsidiary's shares.",
    },
    {
      icon: "TrendingUp",
      title: "Market Credibility",
      text: "Operating as a registered Indian company builds trust and credibility with local customers, employees, and partners.",
    },
    {
      icon: "FileCheck",
      title: "Full FDI Compliance",
      text: "It is a clear and compliant route for Foreign Direct Investment (FDI) into India, eligible for benefits under tax treaties.",
    },
  ],
  disadvantages: [
    {
      icon: "FileWarning",
      title: "Higher Compliance Burden",
      text: "The subsidiary must comply with the Indian Companies Act, 2013, as well as FEMA and RBI regulations for foreign investment.",
    },
    {
      icon: "Landmark",
      title: "Repatriation of Profits",
      text: "Sending profits back to the foreign parent company (as dividends) is subject to Indian taxes like Dividend Distribution Tax.",
    },
    {
      icon: "UserCheck",
      title: "Resident Director Requirement",
      text: "The company must have at least one director who is a resident of India, adding an administrative requirement.",
    },
  ],
  eligibility: [
    "**Parent Company**: A foreign company to act as the holding company.",
    "**Shareholders**: A minimum of two shareholders.",
    "**Directors**: A minimum of two directors, with at least one being a resident of India.",
    "**Registered Office**: A registered office address in India.",
  ],
  documents: [
    {
      title: "Documents for Indian Subsidiary Registration",
      items: [
        "Certificate of incorporation of the foreign parent company (apostilled).",
        "MOA and AOA of the foreign parent company (apostilled).",
        "Board resolution from the parent company for the investment.",
        "Passport and address proof of the directors and shareholders.",
        "Proof of the registered office address in India.",
      ],
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Obtain DSC and DIN",
      description:
        "Obtain Digital Signature Certificates (DSC) and Director Identification Numbers (DIN) for the directors.",
    },
    {
      step: 2,
      title: "Name Approval",
      description:
        "Apply for the reservation of the company name through the SPICe+ Part A form.",
    },
    {
      step: 3,
      title: "File for Incorporation",
      description:
        "File the SPICe+ Part B form with the required documents to the MCA.",
    },
    {
      step: 4,
      title: "RBI Reporting",
      description:
        "After receiving the share capital, report the foreign direct investment to the RBI by filing Form FCGPR.",
    },
  ],
  fees: [
    {
      component: "Government & Stamp Duty Fees",
      fees: "Varies",
      remarks:
        "Depends on the authorized capital and the state of registration.",
    },
    {
      component: "Notary & Apostille",
      fees: "Varies",
      remarks:
        "This cost is incurred in the foreign country and depends on their local charges.",
    },
    {
      component: "Professional Fees",
      fees: "₹30,000 - ₹70,000",
      remarks:
        "Higher than a standard incorporation due to the complexity of handling foreign documents, FEMA compliance, and RBI reporting.",
    },
  ],
  faqs: [
    {
      q: "Who can be the resident director in an Indian subsidiary?",
      a: "A resident director is an individual who has stayed in India for a total period of not less than 182 days during the previous financial year. This person can be an Indian citizen or a foreign national with a valid visa who meets the residency criteria.",
    },
    {
      q: "What is FEMA and RBI reporting (FCGPR)?",
      a: "The Foreign Exchange Management Act (FEMA) governs all foreign investments. When a subsidiary receives funds (FDI) from its foreign parent, it must report this to the Reserve Bank of India (RBI) through Form FCGPR (Foreign Collaboration - General Permission Route) to ensure compliance.",
    },
    {
      q: "Can an Indian subsidiary own property in India?",
      a: "Yes. As an Indian domestic company, a subsidiary can acquire and own immovable property in India as necessary for carrying out its business activities, subject to FDI policy guidelines.",
    },
  ],
};
