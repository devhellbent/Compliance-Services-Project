// lib/data/services/proprietorship.ts

import { ServiceData } from "@/lib/types";

export const proprietorshipData: ServiceData = {
  title: "Proprietorship Registration",
  breadcrumb: [
    "Home",
    "Registrations",
    "Company Registration",
    "Proprietorship",
  ],
  description:
    "Launch your business journey with simplicity and control. Proprietorship registration offers the easiest and most cost-effective way to start your own business in India, giving you complete ownership and direct control over all business decisions.",
  overview: `**Proprietorship**

Proprietorship is one of the most basic and widely chosen forms of business in India. It is owned and managed by a single individual who has complete control over all business operations and decisions. This structure is simple to set up, involves minimal legal formalities, and is a cost-effective option, making it perfect for solo entrepreneurs and small businesses starting their journey.

In a sole proprietorship, the owner and the business are considered the **same legal entity**. The owner keeps all the profits but is also **personally responsible** for losses or debts—there is **no limit** to personal liability. The owner runs day-to-day operations and bears the full risk.

**Sole proprietorship registration**

Registering a sole proprietorship means formally setting up a business owned and managed by a single individual. It is one of the simplest structures in India—ideal for small businesses, independent professionals, and local vendors who want to start with **minimal compliance**.

**Objectives of registration**

- **Legal recognition:** Establish the business as a recognised entity.
- **Smooth operations:** Easier bank accounts, licences, and day-to-day activity.
- **Tax compliance:** Register for taxes and meet regulatory obligations.
- **Credibility:** Build trust with clients, suppliers, and institutions.
- **Access to finance:** Apply for loans or credit where required.

**Features of sole proprietorship**

- **Single ownership:** Owned, managed, and controlled by one individual.
- **No separate legal entity:** Owner and business are the same in law.
- **Unlimited liability:** The proprietor is personally liable for all debts and obligations.
- **Minimal compliance:** Fewer requirements than companies or LLPs.
- **Full control:** Complete authority over decisions and strategy.
- **Direct profits:** All profits belong solely to the owner.
- **Ease of formation:** Simple setup with minimal documentation.
- **No perpetual succession:** The business is tied to the owner and may cease on death or incapacity.`,
  whyChooseUs: [
    {
      icon: "FileCheck",
      title: "Legal Recognition",
      text: "To officially establish the business as a recognized entity in the eyes of the law.",
    },
    {
      icon: "Briefcase",
      title: "Smooth Business Operations",
      text: "To make it easier to open bank accounts, obtain licenses, and carry out day-to-day business activities.",
    },
    {
      icon: "Receipt",
      title: "Tax Compliance",
      text: "To ensure the business is registered for taxes and complies with government regulations.",
    },
    {
      icon: "Users",
      title: "Credibility with Customers and Suppliers",
      text: "To gain trust from clients, suppliers, and financial institutions by operating as a legally recognized business.",
    },
    {
      icon: "Landmark",
      title: "Access to Financial Services",
      text: "To enable the proprietor to apply for loans, credit, or other financial support from banks and institutions.",
    },
    {
      icon: "Award",
      title: "License Eligibility",
      text: "Create eligibility for obtaining various business licenses, permits, and government registrations required for operations.",
    },
    {
      icon: "Shield",
      title: "Protection of Business Name",
      text: "To secure the business name so that no one else can legally use it in the same area or industry.",
    },
  ],
  advantages: [
    {
      icon: "Zap",
      title: "Easy to Set Up",
      text: "Minimal documentation and formalities allow for a quick start.",
    },
    {
      icon: "CheckCircle",
      title: "Complete Control",
      text: "No need for consensus or approval from partners or shareholders.",
    },
    {
      icon: "Wallet",
      title: "Low Cost",
      text: "Minimal capital investment and significantly lower ongoing compliance costs.",
    },
    {
      icon: "TrendingUp",
      title: "Direct Profits",
      text: "No sharing of earnings with partners or investors.",
    },
    {
      icon: "RefreshCw",
      title: "Operational Flexibility",
      text: "Quick adaptation to market changes without needing approval.",
    },
    {
      icon: "Shield",
      title: "Enhanced Credibility",
      text: "Legal recognition helps build trust with stakeholders.",
    },
    {
      icon: "Landmark",
      title: "Financial Access",
      text: "Allows for opening current accounts and applying for business loans.",
    },
  ],
  eligibility: [
    "To register a sole proprietorship in India, the applicant must meet the following requirements:",
    {
      title: "Requirements",
      items: [
        "**Single owner:** The business must be owned and managed by one individual.",
        "**Indian resident:** The proprietor should be a citizen and resident of India.",
        "**Legal age:** The owner must be at least **18** years old.",
        "**Valid identity proof:** Government-issued ID such as **Aadhaar** or **PAN**.",
        "**Unique business name:** Distinct and must not infringe existing trademarks or registered businesses.",
        "**Business address:** A valid physical address for operations.",
        "**Lawful activity:** The business must be legal and must not involve prohibited goods or services.",
      ],
    },
    {
      title: "Checklist for registration",
      items: [
        "Choose a **unique business name**.",
        "Open a **business current account**.",
        "Prepare **identity and address** proofs.",
        "Register for **MSME/Udyam** (optional but beneficial).",
        "Obtain required **licences** (FSSAI, Shop & Establishment, etc.).",
        "Register for **GST** if turnover crosses the threshold.",
      ],
    },
  ],
  disadvantages: [
    {
      icon: "AlertTriangle",
      title: "Unlimited Liability",
      text: "Personal assets are at risk if the business fails or incurs debts.",
    },
    {
      icon: "TrendingDown",
      title: "Difficulty in Raising Capital",
      text: "Challenging to attract large investors as the business cannot sell shares.",
    },
    {
      icon: "Clock",
      title: "Limited Lifespan",
      text: "The business's continuity depends entirely on the owner's existence.",
    },
    {
      icon: "Briefcase",
      title: "Heavy Workload",
      text: "The owner is solely responsible for all aspects of the business.",
    },
    {
      icon: "UserX",
      title: "Limited Expertise",
      text: "Success depends entirely on the skills and knowledge of a single person.",
    },
  ],
  documents: [
    {
      tabTitle: "Mandatory proprietor documents",
      content: {
        title: "Mandatory documents of the proprietor",
        items: [
          "**Aadhaar card:** Primary identity and address proof.",
          "**PAN card:** Essential for financial transactions and filing income tax returns.",
          "**Photographs:** Recent passport-size photos for applications and KYC.",
        ],
      },
    },
    {
      tabTitle: "Business address proof",
      content: {
        title: "Business address proof",
        items: [
          "**For owned property:** Latest electricity or utility bill (not older than **2 months**) or **property tax receipt**.",
          "**For rented property:** **Registered** rent/lease agreement and a **No-Objection Certificate (NOC)** from the landlord.",
        ],
      },
    },
    {
      tabTitle: "Key registrations and licences",
      content: {
        title: "Key registrations and licences",
        items: [
          "**GST registration:** Mandatory if annual turnover exceeds **₹40 lakhs** (goods) or **₹20 lakhs** (services).",
          "**MSME/Udyam registration:** Strongly recommended for government schemes and subsidies.",
          "**Shop and Establishment Act licence:** For businesses operating from a **commercial** space (local municipal authority).",
          "**Industry-specific licences:** For example **FSSAI** for food businesses or **trade licence** where applicable.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Choose a Business Name",
      description:
        "Pick a unique and suitable name for your business. The name should not be similar to existing trademarks or registered businesses.",
    },
    {
      step: 2,
      title: "Open a Business Bank Account",
      description:
        "Open a current account in the business name to keep personal and business finances separate. This serves as primary proof of business existence.",
    },
    {
      step: 3,
      title: "Get Identity Proof Ready",
      description:
        "Prepare PAN Card and Aadhaar Card of the proprietor, and address proof of business location (electricity bill, rent agreement, etc.).",
    },
    {
      step: 4,
      title: "Register for MSME (Optional but Beneficial)",
      description:
        "Register under Udyam/MSME to get government benefits and subsidies. This registration is free and highly recommended.",
    },
    {
      step: 5,
      title: "Get Required Licenses",
      description:
        "Obtain necessary licenses based on your business type: FSSAI license for food businesses, Shop & Establishment Act license, Professional Tax registration (if applicable).",
    },
    {
      step: 6,
      title: "GST Registration (if applicable)",
      description:
        "Mandatory if turnover crosses ₹40 lakhs for goods or ₹20 lakhs for services, or if you sell across states.",
    },
    {
      step: 7,
      title: "Employee-Related Registrations",
      description:
        "If applicable: ESIC registration (if you employ 10 or more workers), EPFO registration (if you employ 20 or more workers).",
    },
    {
      step: 8,
      title: "Other Certifications",
      description:
        "Obtain other necessary certifications depending on your business, like import/export license (IEC Code) if required.",
    },
  ],
  fees: [
    {
      component: "GST Registration",
      fees: "Free",
      remarks: "Mandatory if turnover exceeds ₹40 lakh",
    },
    {
      component: "MSME (Udyam) Registration",
      fees: "Free",
      remarks: "Optional, but beneficial for small businesses",
    },
    {
      component: "Shop & Establishment License",
      fees: "₹1,000 – ₹5,000",
      remarks: "Fees vary by state and business size",
    },
    {
      component: "Professional Tax registration",
      fees: "₹0 – ₹1,000",
      remarks: "Applicable in certain states",
    },
    {
      component: "CA or consultant charges",
      fees: "₹1,000 – ₹3,000",
      remarks: "For handling paperwork and legal formalities",
    },
    {
      component: "PAN application",
      fees: "₹110",
      remarks: "One-time fee via NSDL or UTIITSL",
    },
    {
      component: "Note (business current account)",
      fees: "—",
      remarks:
        "Banks typically require at least two of the above registrations (e.g. GST and MSME) to open a business current account; minimum balance rules vary by bank.",
    },
  ],
  faqs: [
    {
      q: "What is unlimited liability in a proprietorship?",
      a: "Unlimited liability means the owner is personally responsible for all business debts. If the business assets are insufficient to pay its debts, creditors can claim the owner's personal property like a car, house, or savings.",
    },
    {
      q: "Is there a specific 'Proprietorship Registration Certificate'?",
      a: "No, there is no single, centralized registration for a sole proprietorship in India. Its existence is established through various other registrations and licenses like GST, Udyam, Shop Act license, or simply by opening a current bank account in the business's name.",
    },
    {
      q: "Can I convert my proprietorship into a private limited company later?",
      a: "Yes, as your business grows, you can convert your proprietorship into a Private Limited Company or a One Person Company to gain benefits like limited liability, easier access to funding, and a separate legal identity.",
    },
    {
      q: "Do I need GST registration for my proprietorship?",
      a: "GST registration is mandatory if your annual turnover exceeds ₹40 lakhs for goods or ₹20 lakhs for services. It is also mandatory for e-commerce sellers and those involved in inter-state business.",
    },
    {
      q: "What is MSME/Udyam Registration and is it necessary?",
      a: "MSME/Udyam Registration is not mandatory, but registering as a Micro, Small, or Medium Enterprise is highly beneficial. It helps in availing government schemes, subsidies, and easy loan approvals. The registration is completely free.",
    },
  ],
};
