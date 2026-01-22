// lib/data/services/darpan-registration.ts

import { ServiceData } from "@/lib/types";

export const darpanRegistrationData: ServiceData = {
  title: "Darpan Registration",
  breadcrumb: ["Home", "Registrations", "Darpan Registration"],
  overview: `Darpan registration, also known as NGO Darpan, is the official online registration process for Non-Governmental Organisations (NGOs) and Voluntary Organisations (VOs) in India. This digital platform is managed by **NITI Aayog**, the premier policy think tank of the Government of India, in collaboration with the National Informatics Centre (NIC). Its primary purpose is to create a centralized national database of all registered non-profit entities in the country.

The registration process requires the NGO to submit detailed information and documents about its legal status, governing body, financial sources, and activities. Upon successful registration and verification, the organization is issued a **Unique Darpan ID (UIN)**. This ID is essential and often mandatory for NGOs seeking to engage with the government, apply for various central or state government grants, schemes, and funding opportunities, as well as for certain foreign contribution regulations (FCRA) and Corporate Social Responsibility (CSR) applications.

Ultimately, NGO Darpan aims to foster greater **transparency, accountability, and credibility** within the non-profit sector. By standardizing the registration and information disclosure process, it acts as a crucial interface, strengthening the partnership between the government and the voluntary sector, simplifying communication, and enabling better monitoring, evaluation, and collaboration on social development projects across India.

**Key Features of Darpan Registration**

The Darpan Registration, managed by NITI Aayog, is a digital initiative with several core features designed to centralize and formalize the voluntary sector in India. These features transform how Non-Governmental Organisations (NGOs) and Voluntary Organisations (VOs) interact with government departments and the public.

-   **Unique Darpan ID (UIN) Issuance:** The most important feature is the assignment of a **Unique Identification Number (UIN)** to every registered NGO. This UIN acts as the organization\'s official digital identity, essential for all interactions with government agencies, and is mandatory for applying for central and state government grants.

-   **Centralized National Database:** The portal maintains a comprehensive, **searchable database** of all registered NGOs, their activities, and key personnel. This national repository promotes public transparency and enables government ministries to efficiently verify the legitimacy, track the performance, and find suitable partners for developmental projects.

-   **Online Grant and Scheme Access:** Darpan serves as an interface connecting NGOs with various Ministries and Departments. It is a key feature for accessing **online application links** for government grants, welfare schemes, and funding opportunities, thereby streamlining the process and reducing paperwork.

-   **Transparency and Accountability:** The registration requires NGOs to publicly submit and regularly update detailed information, including their registration status, operational areas, board members, and, often, funding details. This mandatory disclosure enhances **credibility and accountability** to government bodies, corporate partners for CSR funds, and individual donors.

-   **Streamlined Government Engagement:** The registration acts as a single point of data submission for multiple government purposes. It facilitates **smoother communication and collaboration** with the government, making it easier for Ministries to share timely updates, policy changes, and project-related information directly with registered organizations across the country.`,
  advantages: [
    {
      icon: "CheckCircle",
      title: "of Darpan Registration",
      text: "1.  **Bureaucratic Hurdles and Complexity:** While designed to streamline, the registration process can sometimes involve significant bureaucratic hurdles. NGOs, especially smaller ones with limited resources, may find the online application, documentation requirements, and subsequent verification process time-consuming and complex. 2.  **Mandatory Information Disclosure:** For some organizations, the requirement to publicly disclose detailed information about their finances, board members, and activities might be seen as a disadvantage. While it promotes transparency, some NGOs might prefer a higher degree of privacy, especially concerning sensitive operational details. 3.  **Dependence on Digital Access and Literacy:** The entire process is online, which can be a barrier for NGOs operating in remote areas with limited internet access or for those whose staff lack sufficient digital literacy. This digital divide can exclude smaller, grassroots organizations from the benefits of registration. 4.  **Continuous Compliance and Updates:** Registration is not a one-time event; NGOs are expected to keep their information updated regularly. Failing to maintain current details can lead to issues with government interactions or even suspension of their UIN, adding an ongoing administrative burden. 5.  **No Automatic Guarantee of Funding:** While Darpan registration is a prerequisite for many government grants, it does not guarantee funding. NGOs still need to compete based on their project proposals, impact, and alignment with government priorities. The registration merely qualifies them to apply.",
    },
  ],
  disadvantages: [
    {
      icon: "CheckCircle",
      title: "of Darpan Registration",
      text: "1.  **Bureaucratic Hurdles and Complexity:** While designed to streamline, the registration process can sometimes involve significant bureaucratic hurdles. NGOs, especially smaller ones with limited resources, may find the online application, documentation requirements, and subsequent verification process time-consuming and complex. 2.  **Mandatory Information Disclosure:** For some organizations, the requirement to publicly disclose detailed information about their finances, board members, and activities might be seen as a disadvantage. While it promotes transparency, some NGOs might prefer a higher degree of privacy, especially concerning sensitive operational details. 3.  **Dependence on Digital Access and Literacy:** The entire process is online, which can be a barrier for NGOs operating in remote areas with limited internet access or for those whose staff lack sufficient digital literacy. This digital divide can exclude smaller, grassroots organizations from the benefits of registration. 4.  **Continuous Compliance and Updates:** Registration is not a one-time event; NGOs are expected to keep their information updated regularly. Failing to maintain current details can lead to issues with government interactions or even suspension of their UIN, adding an ongoing administrative burden. 5.  **No Automatic Guarantee of Funding:** While Darpan registration is a prerequisite for many government grants, it does not guarantee funding. NGOs still need to compete based on their project proposals, impact, and alignment with government priorities. The registration merely qualifies them to apply.",
    },
  ],
  eligibility: [
    {
      title:
        "Any Non-Governmental Organisation (NGO) or Voluntary Organisation (VO)",
      items: [
        "that is legally registered in India is eligible to apply for registration on the NITI Aayog\\'s Darpan portal.",
      ],
    },
    {
      title: "Mandatory Legal Status",
      items: [
        "**Trusts:** Registered under the **Indian Trusts Act, 1882** (for Public Charitable Trusts) or relevant state acts.",
        "**Societies:** Registered under the **Societies Registration Act, 1860** or similar state-specific laws.",
        "**Non-Profit Companies:** Incorporated as a **Section 8 Company** under the **Companies Act, 2013** (formerly Section 25 Company).",
        "Other legally registered voluntary organizations (VOs). Note: Registration is mandatory if the NGO intends to apply for grants or financial assistance from any Central or State Government Ministry/Department. Individual registration is not permitted.",
      ],
    },
    {
      title: "Essential Organizational Requirements",
      items: [
        "**Valid PAN Card:** The organization must have a Permanent Account Number (PAN) issued in its official name.",
        "**Active Engagement:** The NGO must be actively engaged in social welfare, charitable, or development-related activities in India.",
        "**Working Bank Account:** The organization must have an operational bank account registered in its official name.",
      ],
    },
    {
      title: "Key Personnel Requirements",
      items: [
        "**Minimum Three Key Members:** Details for at least **three key office bearers** (e.g., President/Chairman, Secretary/CEO, and Treasurer/Financial Head) must be provided.",
        "**Mandatory ID Proofs:** For these three key members, it is compulsory to provide their personal **Aadhaar Number** and **PAN Number** for verification.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Mandatory Documents for the NGO/VO",
      content: {
        title: "Mandatory Documents for the NGO/VO",
        items: [
          "**PAN Card of the NGO/VO:** The Permanent Account Number (PAN) must be in the name of the organization.",
          "**Registration Certificate:** Legal proof of the organization\\'s establishment (e.g., Trust Deed, Society Registration Certificate, or Certificate of Incorporation for a Section 8 Company).",
          "**Governing Documents (MOA/Trust Deed/Bylaws):** Documents like the Memorandum of Association (MOA) for a Society/Section 8 Company or the Trust Deed for a Trust, which outlines the organization\\'s aims and structure.",
          "**Address Proof of the NGO/VO:** A valid document to verify the registered office address (e.g., utility bill like an Electricity or Telephone Bill, or Rent/Lease Agreement).",
        ],
      },
    },
    {
      tabTitle: "Details of Key Functionaries (Office Bearers)",
      content: {
        title: "Details of Key Functionaries (Office Bearers)",
        items: [
          "**Aadhaar Card** of at least three key members (mandatory).",
          "**PAN Card** of at least three key members.",
          "**Full Name, Designation, Date of Birth, Email ID, and Mobile Number** of the key members.",
        ],
      },
    },
    {
      tabTitle: "Financial & Operational Details",
      content: {
        title: "Financial & Operational Details",
        items: [
          "**Bank Account Details:** Name of the Bank, Branch Name, Account Number, and IFSC Code.",
          "**Annual Reports and Audited Financial Statements:** (Conditional/Mandatory for older NGOs) The latest Audited Financial Statements and Annual Reports to demonstrate credibility.",
          "**Source of Funds:** Information about grants or funds received, especially from the government.",
          "**Working Areas:** Details of the state(s) and district(s) where the organization is active.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Visit the NGO Darpan Portal",
      description: "Go to the official website of NITI Aayog's NGO Darpan.",
    },
    {
      step: 2,
      title: "Create a User Account",
      description:
        "Sign up on the portal by providing the name of the NGO, contact person details, mobile number, and email ID.",
    },
    {
      step: 3,
      title: "Fill the Online Application",
      description:
        "Log in and fill out the detailed online form with information about the NGO, its registration, address, key members, and areas of operation.",
    },
    {
      step: 4,
      title: "Upload Documents",
      description:
        "Upload scanned copies of the NGO's registration certificate and PAN card.",
    },
    {
      step: 5,
      title: "Submit and Get Unique ID",
      description:
        "After submitting the form, a unique ID is generated for the NGO, which should be used in all future correspondence and grant applications.",
    },
  ],
  fees: [
    {
      component: "Government Fee",
      fees: "Free",
      remarks:
        "Registration on the NGO Darpan portal is completely free of cost.",
    },
    {
      component: "Professional Fees",
      fees: "₹2,000 - ₹4,000",
      remarks:
        "For professional assistance with the application process and document preparation.",
    },
  ],
  faqs: [
    {
      q: "Is Darpan registration mandatory for all NGOs?",
      a: "It is not mandatory for an NGO to simply exist. However, it is absolutely mandatory if the NGO intends to apply for grants or funding from any Indian government body.",
    },
    {
      q: "What is NITI Aayog?",
      a: "NITI Aayog (National Institution for Transforming India) is the premier policy think tank of the Government of India, providing both directional and policy inputs. It manages the NGO Darpan portal.",
    },
    {
      q: "How long is the Darpan ID valid?",
      a: "The Darpan ID is perpetually valid. However, the NGO is required to keep its profile, especially details of its office bearers and financials, updated on the portal regularly.",
    },
  ],
};
