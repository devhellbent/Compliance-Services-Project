// lib/data/services/trademark-registration.ts

import { ServiceData } from "@/lib/types";

export const trademarkRegistrationData: ServiceData = {
  title: "Trademark Registration",
  breadcrumb: ["Home", "Registrations", "Trademark Registration"],
  overview:
    `Trademark registration is the legal process of securing **exclusive rights** to a unique mark---such as a word, logo, symbol, or phrase---that **identifies and distinguishes** a company\'s goods or services from those of its competitors. This formal registration, typically done with a national intellectual property office, officially recognizes the mark as the proprietor\'s property. The goal is to provide **legal clarity** over brand ownership, serving as a powerful tool in the competitive marketplace.

The primary purpose of registering a trademark is to grant the owner **nationwide protection** against unauthorized use, or \"infringement,\" by others. Once registered, the owner can use the ® symbol and has the legal standing to take action against any party that uses a confusingly similar mark on related goods or services. This legal shield is vital for protecting the **brand\'s goodwill** and ensuring consumers are not misled about the source of the products they purchase.

The registration process usually begins with a thorough **search** to ensure the mark is distinctive and not already in use. Following the application, the relevant authority examines the mark for compliance with legal requirements. Upon acceptance and publication, a period is allowed for third-party opposition. If successful, the trademark is registered, becoming an **intangible asset** that enhances business value and facilitates brand recognition and trust with customers for years to come.

**What is Trademark ?**

A **Trademark** is a form of **intellectual property** used to identify and distinguish the goods or services of one party from those of others.

It can be a **word, logo, phrase, or design** that represents a brand. The primary function of a trademark is to **prevent consumer confusion** by guaranteeing the source of a product or service. Formal registration grants the owner **exclusive legal rights** to use the mark and protection against unauthorized use by competitors, safeguarding the brand\'s reputation and goodwill.`,
  advantages: [
    {
        icon: "CheckCircle",
        title: "of Trademark Registration",
        text: "",
        subPoints: [
            "**Exclusive National Rights:** Grants the owner the sole, exclusive legal right to use the mark across the entire country for the goods and services registered.",
            "**Prima Facie Legal Evidence:** The registration certificate acts as strong, presumptive legal proof of ownership in court, making infringement lawsuits more straightforward.",
            "**Use of the \u00ae Symbol:** Allows the owner to use the **\u00ae** (Registered Trademark) symbol, which provides public notice of ownership and acts as a major deterrent against potential infringers.",
            "**Creates an Intangible Asset:** The trademark becomes a valuable piece of **Intellectual Property (IP)** that can be sold, licensed, franchised, or used as collateral for loans, increasing business value.",
            "**Deters Infringement:** The mark appears in public registers, allowing competitors to easily conduct searches and avoid using a similar mark, preventing future costly disputes.",
            "**Foundation for Global Protection:** A domestic registration is often required as the \\\"base mark\\\" for seeking international protection through systems like the Madrid Protocol."
        ]
    }
],
  disadvantages: [
    {
        icon: "CheckCircle",
        title: "of Trademark Registration",
        text: "",
        subPoints: [
            "**Cost and Time:** The process involves mandatory **filing fees, attorney costs (optional but recommended)**, and can take a **long time (several months to over a year)** to complete.",
            "**Geographical Limitation:** The protection is **territorial**; registration in one country does not protect the mark in any other country.",
            "**Owner\\'s Enforcement Duty:** The government does not monitor the market. The trademark owner is **solely responsible** for actively searching for and pursuing legal action against infringers, which is a continuous expense.",
            "**Rigidity of Classes and Mark:** Protection is **strictly limited** to the specific mark and the **classes of goods/services** listed in the application. Broadening product lines may require new applications.",
            "**Risk of Third-Party Opposition:** The application is published, allowing competitors or others to file an **Opposition** (a challenge) to the registration, which can lead to lengthy and costly legal proceedings."
        ]
    }
],
  eligibility: [
    {
        title: "The eligibility criteria for Trademark Registration are primarily",
        items: [
            "divided into two main categories: Criteria related to the inherent nature of the mark itself (Absolute Grounds for Refusal) and Criteria related to its conflict with existing marks (Relative Grounds for Refusal).    Here are the key requirements a mark must meet to be eligible for registration, based on the Indian Trade Marks Act, 1999:"
        ]
    },
    {
        title: "Inherent Eligibility (Absolute Grounds for Refusal - Section 9)",
        items: [
            "**Lacks Distinctive Character:** It must be capable of distinguishing the goods or services of one business from those of others. *Ineligible Example:* Generic terms like \\\"The Computer Store\\\" for a computer shop.",
            "**Is Descriptive:** It consists exclusively of marks that designate the **kind, quality, quantity, intended purpose, value, or geographical origin** of the goods or services. *Ineligible Example:* The word \\\"Fast\\\" for a delivery service, or \\\"Sweet\\\" for sugar.",
            "**Is Deceptive:** It is likely to deceive the public or cause confusion regarding the nature, quality, or origin of the goods or services.",
            "**Is Offensive or Immoral:** It contains or comprises scandalous or obscene matter, or is likely to hurt the religious sentiments of any class of citizens.",
            "**Is Prohibited by Law:** Its use is prohibited under other acts, such as the Emblems and Names (Prevention of Improper Use) Act, 1950.",
            "**Consists of a Shape:** It consists exclusively of the shape of the goods that results from the nature of the goods themselves, is necessary to obtain a technical result, or gives substantial value to the goods (e.g., the standard shape of a screw)."
        ]
    },
    {
        title: "Conflict with Existing Rights (Relative Grounds for Refusal - Section 11)",
        items: [
            "**Similarity to Existing Marks:** The mark is **identical or confusingly similar** to an earlier registered trademark, and the goods or services covered are also identical or similar, making it likely to cause public confusion. *Example:* Registering \\\"Pepsee\\\" for carbonated beverages when \\\"Pepsi\\\" already exists.",
            "**Conflict with Well-Known Marks:** The mark is identical or similar to an earlier well-known trademark in India, and its use would take **unfair advantage of or be detrimental** to the distinctive character or reputation of the well-known mark, even if the goods/services are different (e.g., using \\\"TATA\\\" for a type of biscuit).",
            "**Conflict with Prior Rights:** Its use is liable to be prevented by the common law of **passing off** (protecting unregistered but used trademarks) or by the law of **copyright**."
        ]
    }
],
  documents: [
    {
        tabTitle: "Universal/Common Requirements",
        content: {
            title: "Universal/Common Requirements",
            items: [
                "**Representation of the Trademark:** ",
                "A high-resolution image of the **logo** (if you are registering a logo or a device mark). It is often preferred in black and white.",
                "If applying for a **wordmark** only (the name itself), no logo image is needed. ",
                "**Goods/Services Description:** A clear, itemized list of the goods or services the trademark will be used for, categorized according to the appropriate **Nice Classification** (Classes 1-45).",
                "**Power of Attorney (Form TM-48):** ",
                "A duly signed legal authorization document.",
                "This is mandatory if the application is being filed through a Trademark Agent or Attorney on the applicant's behalf. ",
                "**User Affidavit and Proof of Use (If Applicable):** ",
                "If you claim to have been using the trademark **prior to the filing date** (e.g., since January 2024), you must submit an affidavit confirming the date of first use.",
                "Supporting evidence like **invoices, bills, advertising materials, or promotional brochures** from that date must be attached."
            ]
        }
    },
    {
        tabTitle: "Applicant-Specific Legal Documents",
        content: {
            title: "Applicant-Specific Legal Documents",
            items: [
                "**Individual / Sole Proprietor:** ",
                "PAN Card and Aadhaar Card of the individual.",
                "Business Proof (e.g., GST Certificate, Shop Act License, or Business Address Proof). ",
                "**Partnership Firm:** ",
                "Copy of the **Partnership Deed**.",
                "PAN Card of the Firm.",
                "ID Proof of the Authorized Partner (Signatory). ",
                "**Company (Pvt. Ltd., Public Ltd.) / LLP:** ",
                "**Certificate of Incorporation (COI)**.",
                "PAN Card of the Company/LLP.",
                "Board Resolution or Declaration authorizing the signatory.",
                "ID Proof of the Authorized Signatory (Director/Designated Partner). ",
                "**Trust / Society:** ",
                "Copy of the **Trust Deed / Registration Certificate / Memorandum of Association (MOA)**.",
                "ID Proof of the Managing Trustee or Chairman (Signatory)."
            ]
        }
    },
    {
        tabTitle: "Documents for Fee Concession (If Claiming)",
        content: {
            title: "Documents for Fee Concession (If Claiming)",
            items: [
                "**For MSMEs/Small Enterprises:** **Udyam Registration Certificate.**",
                "**For Startups:** **DPIIT Recognition Certificate.** -"
            ]
        }
    }
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Trademark Search",
      description:
        "Conduct a thorough search in the trademark database to ensure your proposed brand name or logo is unique and not already registered.",
    },
    {
      step: 2,
      title: "Filing the Application (TM-A)",
      description:
        "File the application in Form TM-A with the Trademark Registry. Once filed, you can start using the ™ symbol.",
    },
    {
      step: 3,
      title: "Examination by Registry",
      description:
        "The Trademark Examiner will review your application for correctness and uniqueness. They may raise an objection if issues are found.",
    },
    {
      step: 4,
      title: "Publication in Trademark Journal",
      description:
        "If there are no objections, the mark is published in the Trademark Journal for a period of 4 months, inviting public opposition.",
    },
    {
      step: 5,
      title: "Registration",
      description:
        "If no opposition is filed within the 4-month period, the trademark is registered, and a Registration Certificate is issued. You can then use the ® symbol.",
    },
  ],
  fees: [
    {
      component: "Government Fee (Individual/Startup)",
      fees: "₹4,500",
      remarks:
        "For individuals, sole proprietors, or MSME/DPIIT recognized startups.",
    },
    {
      component: "Government Fee (Other Entities)",
      fees: "₹9,000",
      remarks:
        "For all other entities like companies, LLPs, etc., that are not MSMEs.",
    },
    {
      component: "Professional Fees",
      fees: "₹3,000 - ₹7,000",
      remarks: "Includes search, application filing, and managing the process.",
    },
  ],
  faqs: [
    {
      q: "What is the difference between the ™ and ® symbols?",
      a: "The ™ (Trademark) symbol can be used with any brand name or logo to claim it as a trademark, even if the application is not filed. The ® (Registered) symbol can only be used after the trademark has been officially registered by the Trademark Registry.",
    },
    {
      q: "What is a trademark class?",
      a: "The trademark system is divided into 45 classes (1-34 for goods, 35-45 for services). You must file your trademark application under the specific class(es) that correspond to your business activities.",
    },
    {
      q: "How long does a trademark registration last?",
      a: "A trademark registration is valid for 10 years from the date of application. It can be renewed indefinitely for subsequent periods of 10 years.",
    },
  ],
};
