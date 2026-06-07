// lib/data/services/indian-subsidiary.ts

import { ServiceData } from "@/lib/types";

export const indianSubsidiaryData: ServiceData = {
  title: "Indian Subsidiary Company Registration",
  breadcrumb: ["Home", "Registrations", "Indian Subsidiary"],
  description:
    "Establish strategic presence in India's dynamic market. Indian Subsidiary registration enables foreign companies to incorporate domestic entities with complete compliance, ensuring FDI adherence while accessing India's vast consumer base and growth opportunities.",
  overview: `Indian Subsidiary Registration is the process of setting up a private limited company in India where a foreign corporation holds more than 50% of the share capital, granting it control. This legal entity provides limited liability protection to the parent company.

An Indian Subsidiary Company is a business entity incorporated in India as a Private Limited Company that is controlled by a foreign entity, known as the Holding or Parent Company. As per the Companies Act, 2013, a company is classified as a subsidiary if the parent company controls the composition of its Board of Directors or exercises control over more than one-half of the total share capital.

It is treated as an Indian company and operates as a separate legal entity with limited liability, meaning the parent company's liability is typically limited to its investment. This structure allows a foreign business to establish a local presence, access the Indian market, and manage its operations while complying with local laws and tax regulations.`,
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
      icon: "Briefcase",
      title: "Full Control",
      text: "The foreign parent company can maintain 100% control over its Indian operations (as a WOS).",
    },
    {
      icon: "Shield",
      title: "Limited Liability",
      text: "Protects the assets of the parent company from the liabilities and risks of the Indian subsidiary.",
    },
    {
      icon: "Landmark",
      title: "Permanent Presence",
      text: "Allows the foreign brand to establish a long-term, credible presence in the Indian market.",
    },
    {
      icon: "TrendingUp",
      title: "Access to Local Market",
      text: "Can engage in all types of commercial activities, including trading, manufacturing, and services.",
    },
    {
      icon: "BadgePercent",
      title: "FDI Benefits",
      text: "Can leverage India's liberal FDI policies and government incentives for foreign investors.",
    },
    {
      icon: "Banknote",
      title: "Independent Funding",
      text: "Can raise capital in India through equity, debt, or bank loans.",
    },
  ],
  disadvantages: [
    {
      icon: "FileWarning",
      title: "High Compliance Burden",
      text: "Subject to all the regulations of the Companies Act, FEMA, and RBI reporting.",
    },
    {
      icon: "UserCheck",
      title: "Mandatory Resident Director",
      text: "Finding and appointing a trustworthy local resident director is a prerequisite.",
    },
    {
      icon: "Receipt",
      title: "Corporate Tax",
      text: "Subject to Indian corporate tax rates, which can be higher than in some other jurisdictions.",
    },
    {
      icon: "Clock",
      title: "Complexity in Exit",
      text: "Winding up or closing an Indian subsidiary is a time-consuming and regulated process.",
    },
    {
      icon: "Scale",
      title: "Transfer Pricing",
      text: 'Transactions with the parent company must adhere to strict "Arm\'s Length" pricing regulations.',
    },
  ],
  eligibility: [
    "The eligibility criteria for registering an Indian Subsidiary Company primarily revolve around compliance with the Companies Act, 2013, and the Foreign Direct Investment (FDI) policy of India. The subsidiary is typically set up as a Private Limited Company.",
    {
      title: "1. Parent Company Requirements",
      items: [
        "**Foreign entity:** A foreign company (body corporate incorporated outside India) must act as the holding company and hold more than **50%** of the share capital.",
        "**Board resolution:** A formal resolution passed by the Parent Company's Board of Directors approving the setting up of the Indian subsidiary.",
        "**FDI compliance:** The proposed business activity must be eligible for **Foreign Direct Investment (FDI)** under the automatic route or with government approval.",
      ],
    },
    {
      title: "2. Directors and Shareholders",
      items: [
        "**Minimum shareholders:** A minimum of **two (2) shareholders** is required.",
        "**Minimum directors:** A minimum of **two (2) directors** must be appointed.",
        "**Resident director:** At least **one director must be a resident of India** (a person who has stayed in India for a total period of not less than **182 days** during the previous financial year).",
        "**Competence:** All directors must be of sound mind, at least 18 years old, and not disqualified under any law.",
      ],
    },
    {
      title: "3. Other Requirements",
      items: [
        "**Registered office:** The subsidiary must have a **registered office address** in India to receive all official communications.",
        "**Unique name:** The proposed company name must be unique and end with **\"Private Limited\"**.",
        "**DIN and DSC:** All proposed directors must obtain a **Director Identification Number (DIN)** and a **Digital Signature Certificate (DSC)**.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Foreign parent company",
      content: {
        title: "Documents from the Foreign Parent Company",
        items: [
          "**Important Verification Note:** All documents issued in a foreign country must be legally verified. Depending on the country, they must be either **Notarized and Apostilled** (Hague Convention) or **Notarized and Consularized** (by the Indian Embassy).",
          "**Board resolution:** A formal resolution approving the setting up of an Indian subsidiary and authorizing a representative.",
          "**Certificate of Incorporation:** A copy of the Parent Company's legal registration document from its home country.",
          "**Charter documents:** Copy of the Parent Company's MOA and AOA or equivalent constitutional documents.",
          "**List of directors and shareholders:** A certified list prepared on the Parent Company's letterhead.",
          "**Address proof:** A recent utility bill or bank statement for the Parent Company's registered address.",
          "**Authorization letter:** A document authorizing the named representative to act on behalf of the Parent Company.",
        ],
      },
    },
    {
      tabTitle: "Foreign directors",
      content: {
        title: "Documents from Foreign Directors and Shareholders",
        items: [
          "**Important Verification Note:** All identity and address proofs of foreign nationals must also be **Notarized and Apostilled/Consularized**.",
          "**Identity proof:** Copy of the **Passport** (mandatory).",
          "**Address proof:** Copy of a recent **Bank Statement** or utility bill (Electricity, Water, or Telephone Bill).",
          "**Photograph:** Recent **passport-sized** photograph.",
          "**DIR-2 & INC-9:** Consent to act as a Director and Declaration of non-disqualification.",
          "**Business Visa:** A copy of the Business Visa if present in India for signing.",
        ],
      },
    },
    {
      tabTitle: "Indian directors",
      content: {
        title: "Documents from Indian Directors and Shareholders",
        items: [
          "**PAN Card:** Copy of **PAN Card** (mandatory).",
          "**Aadhaar Card:** Copy of **Aadhaar Card** (highly recommended / often required).",
          "**Other identity proof:** Copy of **Voter ID**, **Passport**, or **Driving License**.",
          "**Address proof:** Copy of **Bank Statement** or utility bill (Electricity Bill, Water Bill, or Gas Bill), not older than **two months**.",
          "**Photograph:** Recent **passport-sized** photograph.",
          "**DIR-2 and INC-9:** Same consent and declaration forms as for foreign nationals.",
        ],
      },
    },
    {
      tabTitle: "Registered office",
      content: {
        title: "Documents for the Indian Registered Office Address",
        items: [
          "**If rented:** Copy of **Rent Agreement / Lease Deed**.",
          "**If owned:** Copy of **Sale Deed / Property Deed**.",
          "**No Objection Certificate (NOC):** A letter from the property owner consenting to the use of the premises as the company's Registered Office.",
          "**Utility bill:** A recent electricity, water, or gas bill (not older than **two months**) for the office premises.",
        ],
      },
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
