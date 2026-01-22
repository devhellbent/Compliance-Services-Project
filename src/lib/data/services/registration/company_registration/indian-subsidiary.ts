// lib/data/services/indian-subsidiary.ts

import { ServiceData } from "@/lib/types";

export const indianSubsidiaryData: ServiceData = {
  title: "Indian Subsidiary Company Registration",
  breadcrumb: ["Home", "Registrations", "Indian Subsidiary"],
  description:
    "Establish strategic presence in India's dynamic market. Indian Subsidiary registration enables foreign companies to incorporate domestic entities with complete compliance, ensuring FDI adherence while accessing India's vast consumer base and growth opportunities.",
  overview:
    `Indian Subsidiary Registration is the process of setting up a private limited company in India where a foreign corporation holds more than 50% of the share capital, granting it control. This legal entity provides limited liability protection to the parent company. The registration process is governed by the Companies Act, 2013, and typically begins with obtaining a Digital Signature Certificate (DSC) and a Director Identification Number (DIN) for the proposed directors, one of whom must be an Indian Resident. Key steps include reserving a unique company name with the Ministry of Corporate Affairs (MCA), drafting the Memorandum and Articles of Association (MoA and AoA), and submitting the integrated incorporation application (SPICe+ form). Upon approval, the MCA issues the Certificate of Incorporation, along with the company's Permanent Account Number (PAN) and Tax Deduction and Collection Account Number (TAN), after which the subsidiary must open a local bank account and comply with foreign investment reporting requirements.

**What is an Indian Subsidiary Company?**

An Indian Subsidiary Company is a business entity incorporated in India as a Private Limited Company that is controlled by a foreign entity, known as the Holding or Parent Company.

As per the **Companies Act, 2013**, a company is classified as a subsidiary if the parent company:

-   **Controls the composition of its Board of Directors** (can appoint or remove a majority of the directors); **OR**

-   **Exercises or controls more than one-half (over 50%) of the total share capital** (equity and convertible preference capital), either on its own or together with its other subsidiaries.

It is treated as an **Indian company** and operates as a **separate legal entity** with limited liability, meaning the parent company\'s liability is typically limited to its investment. It allows a foreign business to establish a local presence, access the Indian market, and manage its operations while complying with local laws and tax regulations. A common form is a **Wholly Owned Subsidiary (WOS)**, where the foreign parent holds 100% of the shares

**How a Subsidiary is a Separate Indian Company**

An Indian subsidiary is considered a separate Indian company primarily due to the fundamental principle of **Separate Legal Entity** in Indian company law.

Here\'s a breakdown of how this works under the **Companies Act, 2013**

1.  **Incorporation as a distinct entity:** A subsidiary, whether wholly-owned or partially-owned by a parent company (foreign or domestic), must be incorporated and registered in India under the Companies Act, 2013, just like any other Indian company. Once incorporated, it receives a **Certificate of Incorporation** and becomes a **body corporate**---a legal person separate from its shareholders (including the parent company).

2.  **Independent Legal Identity:** This separate legal status means the subsidiary can:

-   **Own assets and property** in its own name. The assets of the subsidiary are not the assets of the parent company.

-   **Enter into contracts** in its own name.

-   **Sue and be sued** in its own name.Incur its **own debts and liabilities**.

3.  **Limited Liability:** The key benefit of this separation is **limited liability**. The financial liability of the parent company is generally limited to its investment (the value of its shares) in the subsidiary. The parent company\'s other assets are protected from the debts and obligations of the subsidiary.

4.  **Compliance with Indian Laws:** Since it is an Indian company, the subsidiary must comply with all Indian laws and regulations, including the Companies Act, Income Tax Act, and other statutory requirements, irrespective of the parent company\'s country of origin.

5.  **Separate Management and Governance:** Although the parent company controls the subsidiary (usually by holding more than 50% of the voting power or controlling the composition of its Board of Directors), the subsidiary has its own **Board of Directors** responsible for its day-to-day operations and management.

6.`,
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
