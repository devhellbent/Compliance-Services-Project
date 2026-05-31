// lib/data/services/import-export-code.ts

import { ServiceData } from "@/lib/types";

export const importExportCodeData: ServiceData = {
  title: "Import Export Code (IEC)",
  breadcrumb: ["Home", "Registrations", "Import Export Code"],
  overview:
    `IEC stands for **Importer-Exporter Code**, a mandatory 10-digit identification number issued by the **Directorate General of Foreign Trade (DGFT)**, Ministry of Commerce. This code is the fundamental requirement for any business or individual in India wishing to engage in **international trade**, which includes both importing goods into India and exporting goods/services abroad. Without a valid IEC, a business cannot legally complete customs clearance for shipments, nor can it process foreign currency payments for trade.

The registration process is entirely **online** through the official DGFT portal. Since the introduction of GST, the issued IEC number is the same as the applicant\'s **Permanent Account Number (PAN)**. The code holds **lifetime validity**, meaning no annual renewal is required, simplifying compliance. Obtaining the IEC is the crucial first step that enables traders to expand into the global market, access government export promotion benefits, and establish credibility in cross-border transactions.`,
  advantages: [
    {
      icon: "Globe",
      title: "Global Market Access",
      text: "The IEC is the mandatory license for anyone wanting to start an import-export business in India, opening doors to global markets.",
    },
    {
      icon: "BadgePercent",
      title: "Export Incentives",
      text: "Allows businesses to claim various government subsidies and tax refunds like Duty Drawback and RoDTEP/RoSCTL schemes.",
    },
    {
      icon: "RefreshCw",
      title: "Lifetime Validity",
      text: "Once issued, the IEC is valid for the lifetime of the business and does not require periodic renewal.",
    },
    {
      icon: "ShieldCheck",
      title: "Legal Compliance",
      text: "Ensures that all international trade transactions are conducted legally, preventing shipment delays and legal issues with customs.",
    },
    {
      icon: "Zap",
      title: "Fast Registration",
      text: "The process is entirely online and relatively fast, with the IEC issued almost immediately upon successful verification.",
    },
  ],
  disadvantages: [
    {
      icon: "Clock",
      title: "Mandatory Annual Update",
      text: "Even though it has lifetime validity, details must be validated online every year to keep the code active.",
    },
    {
      icon: "FileWarning",
      title: "Documentation Accuracy",
      text: "Incomplete or inconsistent documentation can lead to application rejection and delays in starting trade operations.",
    },
    {
      icon: "Ban",
      title: "Deactivation Risk",
      text: "Failure to perform the annual update can lead to deactivation, causing immediate disruption to import/export activities.",
    },
    {
      icon: "Scale",
      title: "Regulatory Complexity",
      text: "Traders must stay compliant with the frequently changing Foreign Trade Policy (FTP) and customs regulations.",
    },
    {
      icon: "AlertTriangle",
      title: "Transaction Limits",
      text: "Some banks and shipping lines may have their own internal checks beyond the IEC, requiring additional paperwork.",
    },
  ],
  eligibility: [
    {
        title: "The eligibility criteria for obtaining an IEC (Importer-Exporter",
        items: [
            "Code) are quite broad, as the code is designed to facilitate     participation in international trade for a wide range of entities in     India. Essentially, any person or business entity that intends to     import or export goods/services from India is eligible.        Here are the specific criteria:"
        ]
    },
    {
        title: "Type of Applicant",
        items: [
            "**Individual Proprietors:** Single individuals operating a business.",
            "**Partnership Firms:** Businesses run by two or more partners.",
            "**Limited Liability Partnerships (LLPs):** A hybrid business structure.",
            "**Private Limited Companies:** The most common form of corporate entity.",
            "**Public Limited Companies:** Large corporate entities.",
            "**One Person Companies (OPCs):** A company with only one member.",
            "**Trusts and Hindu Undivided Families (HUFs):** These entities can also apply if engaged in trade.",
            "**Societies:** Registered societies involved in activities that require import/export."
        ]
    },
    {
        title: "Mandatory Identification Documents",
        items: [
            "The IEC will be issued against the applicant\\'s PAN. For individuals, it\\'s their personal PAN; for companies, firms, etc., it\\'s the entity\\'s PAN.",
            "This means having a valid PAN is the primary eligibility criterion."
        ]
    },
    {
        title: "Business/Entity Registration (If Applicable)",
        items: [
            "For companies: Certificate of Incorporation.",
            "For partnerships: Partnership Deed.",
            "For LLPs: LLP Agreement."
        ]
    },
    {
        title: "Bank Account",
        items: [
            "Applicants must have an active **bank account** in the name of the individual or the business entity.",
            "Bank details (account number, IFSC code) are required during the application process."
        ]
    },
    {
        title: "Contact Information",
        items: [
            "A valid **mobile number** and **email ID** are required for OTP verification and communication. These details should ideally be linked to the applicant\\'s PAN and GSTIN (if applicable)."
        ]
    },
    {
        title: "Exemptions:",
        items: [
            "Government Ministries and Departments.",
            "Persons importing or exporting goods for personal use (not for commercial purposes).",
            "Persons importing/exporting goods from/to Nepal and Myanmar, of a value not exceeding \u20b925,000, under specific conditions."
        ]
    }
],
  documents: [
    {
        tabTitle: "Applicant\\'s Identification Details",
        content: {
            title: "Applicant\\'s Identification Details",
            items: [
                "**Permanent Account Number (PAN) Card:** ",
                "This is the most critical document. The IEC will be issued against this PAN.",
                "For individuals/proprietors, their personal PAN.",
                "For companies/firms, the entity\\'s PAN. ",
                "**Aadhaar Card (for Individuals/Proprietors):** ",
                "While not always a direct upload, Aadhaar linkage can streamline the PAN verification process for individual applicants."
            ]
        }
    },
    {
        tabTitle: "Proof of Address for the Business Entity",
        content: {
            title: "Proof of Address for the Business Entity",
            items: [
                "**Acceptable documents include:** ",
                "Sale Deed or Rental Agreement (along with a rent receipt).",
                "Electricity Bill or Landline Telephone Bill (not older than 2 months).",
                "Bank Certificate or Bank Statement (with address).",
                "GST registration certificate (if registered).",
                "For proprietary firms, a copy of the proprietor\\'s Aadhaar card can sometimes suffice as address proof."
            ]
        }
    },
    {
        tabTitle: "Bank Account Details",
        content: {
            title: "Bank Account Details",
            items: [
                "A scanned copy of a **Cancelled Cheque** bearing the applicant\\'s name (or firm\\'s name) and account number.",
                "Alternatively, a **Bank Certificate** or the first page of a **Bank Passbook/Statement** can be used, clearly showing the applicant\\'s name, account number, and IFSC code."
            ]
        }
    },
    {
        tabTitle: "Contact Information",
        content: {
            title: "Contact Information",
            items: [
                "A valid **Mobile Number** for OTP verification.",
                "A valid **Email ID** for communication and OTP verification."
            ]
        }
    }
],
  registrationProcess: [
    {
      step: 1,
      title: "Visit the DGFT Portal",
      description:
        "Go to the official website of the Directorate General of Foreign Trade (DGFT).",
    },
    {
      step: 2,
      title: "Fill the Online Application",
      description:
        "Log in using your PAN and fill out the online application form (ANF-2A) with all the required details of your business and its proprietors/directors.",
    },
    {
      step: 3,
      title: "Upload Documents",
      description:
        "Upload scanned copies of the required documents, such as the cancelled cheque and address proof.",
    },
    {
      step: 4,
      title: "Pay the Application Fee",
      description:
        "Make the payment for the application fee through the online portal.",
    },
    {
      step: 5,
      title: "Receive IEC Certificate",
      description:
        "Upon successful verification, the DGFT issues the IEC in a digital format almost instantly. It can be downloaded from the portal.",
    },
  ],
  fees: [
    {
      component: "Government Application Fee",
      fees: "₹500",
      remarks:
        "This is a one-time fee payable to the DGFT for the IEC application.",
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
      q: "Do I need to renew my IEC?",
      a: "No, the IEC does not require renewal; it has lifetime validity. However, you must update it electronically on the DGFT portal every year to ensure it remains active.",
    },
    {
      q: "Is GST registration mandatory to get an IEC?",
      a: "No, GST registration is not mandatory to apply for an IEC. However, if your business requires GST registration based on its turnover, you must obtain it separately. For the export of goods, GST registration is mandatory to claim refunds.",
    },
    {
      q: "Can an individual have more than one IEC?",
      a: "No, only one IEC is issued against a single PAN. If an entity has more than one IEC, the additional ones must be surrendered.",
    },
  ],
};
