// lib/data/services/icegate-registration.ts

import { ServiceData } from "@/lib/types";

export const icegateRegistrationData: ServiceData = {
  title: "ICEGATE Registration",
  breadcrumb: ["Home", "Registrations", "ICEGATE Registration"],
  overview:
    `ICEGATE, or the **Indian Customs Electronic Data Interchange Gateway**, is the official national portal of the Central Board of Indirect Taxes and Customs (CBIC). Registration on this platform is **essential** for all importers, exporters, Customs Brokers, and other trade partners involved in India\'s international trade. It serves as the single digital interface for the electronic filing and processing of all customs declarations, such as Bills of Entry and Shipping Bills, eliminating the need for extensive physical paperwork.

The core purpose of ICEGATE registration is to facilitate **secure and efficient** electronic communication between the trade community and the Customs Department. A successful registration provides a unique ICEGATE ID, which is the key to accessing the platform\'s features, including **e-filing**, making secure **e-payments** of customs duties, and performing real-time **tracking** of customs documents and consignment status.

The mandatory online registration process requires verification of essential business credentials, like the **IEC, GSTIN, and PAN**, and critically, the use of a **Class 3 Digital Signature Certificate (DSC)** for authentication. This structured approach ensures data security and compliance, drastically streamlining the customs clearance procedure.`,
  advantages: [
    {
        icon: "CheckCircle",
        title: "of ICEGATE Registration",
        text: "",
        subPoints: [
            "**Digital and Paperless Filing:** The core benefit is the ability to **e-file** all critical customs documents, such as Bills of Entry (imports) and Shipping Bills (exports). This minimizes manual paperwork, printing, and administrative costs.",
            "**Faster Customs Clearance:** Automation, quick electronic acknowledgment, and reduced human intervention significantly **expedite the clearance process**. This leads to faster inventory turnover, lower demurrage charges at ports, and improved supply chain efficiency.",
            "**Real-Time Tracking and Transparency:** Registered users can access the **Document Tracking System** to monitor the live status of their submissions, the assessment process, and the progress of **IGST/Drawback refund claims** 24/7, providing greater control and predictability.",
            "**Secure E-Payments:** The portal facilitates the secure, online **e-payment** of customs duties and other charges, streamlining the financial aspect of international trade and ensuring proper revenue collection for the government."
        ]
    }
],
  disadvantages: [
    {
        icon: "CheckCircle",
        title: "and Challenges of ICEGATE Registration",
        text: "",
        subPoints: [
            "**Technical Glitches and Downtime:** As a central digital platform, ICEGATE can occasionally suffer from **server slowdowns or technical issues**. When this occurs, it can critically halt the customs clearance process, leading to immediate and costly delays in cargo movement.",
            "**Complexity and Strict Validation:** The **Full Registration** process is often considered tedious. It requires the mandatory use of a **Class 3 Digital Signature Certificate (DSC)** and involves strict verification of credentials (IEC, GSTIN, PAN). Minor discrepancies between the applicant\\'s data and other government records (like DGFT or GSTN) are a common cause of **application rejection**.",
            "**Dependency on Expertise:** Using the system for filing documents often requires technical knowledge of EDI protocols or the use of specific software. This creates a **steep learning curve**, which can be challenging for MSMEs or first-time importers/exporters, often forcing reliance on Customs Brokers (CHAs)."
        ]
    }
],
  eligibility: [
    "The eligibility criteria for ICEGATE (Indian Customs Electronic Data     Interchange Gateway) registration primarily depend on the user\\'s     role in the international trade and logistics chain. It is open to     any entity that needs to file documents electronically with the     Indian Customs Department."
],
  documents: [
    {
        tabTitle: "Core Business Identity Documents",
        content: {
            title: "Core Business Identity Documents",
            items: [
                "**Import Export Code (IEC) Certificate:** A valid copy of the IEC issued by the Directorate General of Foreign Trade (DGFT) is essential.",
                "**Permanent Account Number (PAN):** The PAN card of the business entity (or the individual/proprietor, as applicable).",
                "**Goods and Services Tax Identification Number (GSTIN):** The GST registration certificate (if the business is registered under GST).",
                "**Proof of Legal Entity:** Depending on the business structure, this could be the **Certificate of Incorporation** (for companies), **Partnership Deed** (for firms), or other relevant registration certificates."
            ]
        }
    },
    {
        tabTitle: "Digital Security and Authorization",
        content: {
            title: "Digital Security and Authorization",
            items: [
                "**Class 3 Digital Signature Certificate (DSC):** A valid **Class 3 DSC** (typically with both signing and encryption capabilities) is mandatory for the authorized user (Parent User) to digitally sign the registration application and all subsequent customs filings (Shipping Bills, Bills of Entry).",
                "**Authorization Letter / Board Resolution:** A letter on the company\\'s official letterhead, signed by other partners/directors, formally authorizing the chosen individual (the DSC holder) to act as the \\\"Parent User\\\" for ICEGATE and conduct business on the portal."
            ]
        }
    },
    {
        tabTitle: "Authorized User and Contact Details",
        content: {
            title: "Authorized User and Contact Details",
            items: [
                "**Photo ID Proof of DSC Holder:** Self-attested copy of the authorized signatory\\'s government-issued ID (e.g., **Aadhaar Card**, Passport, or Voter ID).",
                "**PAN Card of DSC Holder:** Self-attested copy of the authorized signatory's personal PAN card.",
                "**Contact Details:** A unique and active **email ID** and **mobile number** are required for OTP verification. **Crucially, these details must typically match the records linked to the IEC and GSTIN on the DGFT and GSTN portals.**"
            ]
        }
    }
],
  registrationProcess: [
    {
      step: 1,
      title: "Visit the ICEGATE Portal",
      description:
        "Go to the official ICEGATE website and click on 'New User Registration' or 'Sign Up'.",
    },
    {
      step: 2,
      title: "Select User Role",
      description:
        "Choose your user role from the available options, such as 'Importer/Exporter' or 'Customs Broker'.",
    },
    {
      step: 3,
      title: "Fill Registration Form",
      description:
        "Enter your IEC, GSTIN, and other required details in the online form. The system will auto-populate some fields.",
    },
    {
      step: 4,
      title: "Validate with OTPs",
      description:
        "Verify your identity by entering the One-Time Passwords (OTPs) sent to the email address and mobile number linked with your IEC.",
    },
    {
      step: 5,
      title: "Login and Register DSC",
      description:
        "Once the ID is created, log in to the portal and register your Class 3 Digital Signature Certificate (DSC) to be able to file documents.",
    },
  ],
  fees: [
    {
      component: "Government Registration Fee",
      fees: "Free",
      remarks: "Registration on the ICEGATE portal is completely free of cost.",
    },
    {
      component: "Digital Signature Certificate (DSC)",
      fees: "₹1,200 - ₹2,500",
      remarks:
        "This is a prerequisite cost for obtaining a Class 3 DSC, which is needed for the portal.",
    },
  ],
  faqs: [
    {
      q: "Is ICEGATE registration mandatory for all importers/exporters?",
      a: "Yes, it is mandatory. All electronic filing of customs documents and e-payment of duties must be done through the ICEGATE portal.",
    },
    {
      q: "What is the difference between IEC and ICEGATE registration?",
      a: "An IEC (Import Export Code) is a license to import or export. ICEGATE is the online portal where you use your IEC to file customs documents. You must have an IEC before you can register on ICEGATE.",
    },
    {
      q: "Can I file documents on ICEGATE without a DSC?",
      a: "No, a Class 3 Digital Signature Certificate (DSC) is mandatory for digitally signing and submitting documents like the Bill of Entry and Shipping Bill on the ICEGATE portal.",
    },
  ],
};
