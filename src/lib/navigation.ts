// lib/navigation.ts
import {
  Building,
  Briefcase,
  Atom,
  ShieldCheck,
  Landmark,
  BarChart,
  Handshake,
  TrendingUp,
  UserCheck,
  Scale,
  CircleDollarSign,
  Files,
  Search,
  Users,
  CheckSquare,
  GanttChartSquare,
  ClipboardCheck,
  Receipt,
  FileSignature,
} from "lucide-react";

// CORRECTED: This helper function now correctly creates a service page slug from a name.
const createServiceSlug = (name: string) => {
  const baseSlug = name
    .toLowerCase()
    .replace(/ & /g, "-and-")
    .replace(/ \/ /g, "-")
    .replace(/ \(.*\)/g, "") // remove text in parentheses
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `/services/${baseSlug}`;
};

export const navigationData = [
  {
    mainHead: "Registrations",
    slug: "/registrations",
    subCategories: [
      {
        subHead: "Company Registration",
        slug: "/category/company-registration",
        icon: Building,
        description: "Establish your business with the right legal structure.",
        items: [
          { name: "Proprietorship", slug: createServiceSlug("proprietorship") },
          { name: "Partnership", slug: createServiceSlug("partnership") },
          {
            name: "Limited Liability Partnership",
            slug: createServiceSlug("llp"),
          },
          {
            name: "One Person Company",
            slug: createServiceSlug("one-person-company"),
          },
          {
            name: "Private Limited Company",
            slug: createServiceSlug("private-limited-company"),
          },
          {
            name: "Public Limited Company",
            slug: createServiceSlug("Public Limited Company"),
          },
          {
            name: "Producer Company",
            slug: createServiceSlug("Producer Company"),
          },
          { name: "Nidhi Company", slug: createServiceSlug("nidhi-company") },
          {
            name: "Section 8 / NGO Company",
            slug: createServiceSlug("section-8-company"),
          },
          {
            name: "Trust Registration",
            slug: createServiceSlug("Trust Registration"),
          },
          {
            name: "Society Registration",
            slug: createServiceSlug("Society Registration"),
          },
          {
            name: "Indian Subsidiary",
            slug: createServiceSlug("Indian Subsidiary"),
          },
          {
            name: "Foreign Subsidiary Company Registration",
            slug: createServiceSlug("Foreign Subsidiary Company Registration"),
          },
          {
            name: "Microfinance Company Registration",
            slug: createServiceSlug("Microfinance Company Registration"),
          },
          {
            name: "Startup India Registration",
            slug: createServiceSlug("Startup India Registration"),
          },
        ],
      },
      {
        subHead: "Regulatory License",
        slug: "/category/regulatory-license",
        icon: Briefcase,
        description:
          "Obtain necessary licenses to operate legally and smoothly.",
        items: [
          {
            name: "Digital Signature Certificate",
            slug: createServiceSlug("Digital Signature Certificate"),
          },
          {
            name: "PAN Registration",
            slug: createServiceSlug("PAN Registration"),
          },
          {
            name: "TAN Registration",
            slug: createServiceSlug("TAN Registration"),
          },
          {
            name: "DIN Registration",
            slug: createServiceSlug("DIN Registration"),
          },
          {
            name: "Professional Tax Registration",
            slug: createServiceSlug("Professional Tax Registration"),
          },
          { name: "Trade License", slug: createServiceSlug("Trade License") },
          { name: "FSSAI License", slug: createServiceSlug("FSSAI License") },
          {
            name: "ISO Registration",
            slug: createServiceSlug("ISO Registration"),
          },
        ],
      },
      {
        subHead: "Legal Registration",
        slug: "/category/legal-registration",
        icon: Scale,
        description:
          "Secure essential legal registrations for your organization.",
        items: [
          {
            name: "MSME / Udyam Registration",
            slug: createServiceSlug("MSME Udyam Registration"),
          },
          {
            name: "Darpan Registration",
            slug: createServiceSlug("Darpan Registration"),
          },
          {
            name: "12A Registration",
            slug: createServiceSlug("12A Registration"),
          },
          {
            name: "80G Registration",
            slug: createServiceSlug("80G Registration"),
          },
          {
            name: "ICEGATE Registration",
            slug: createServiceSlug("ICEGATE Registration"),
          },
          {
            name: "Import Export Code",
            slug: createServiceSlug("Import Export Code"),
          },
        ],
      },
      {
        subHead: "Labour Law Services",
        slug: "/category/labour-law-services",
        icon: Users,
        description:
          "Comply with labor laws for employee welfare and protection.",
        items: [
          {
            name: "PF Registration",
            slug: createServiceSlug("PF Registration"),
          },
          {
            name: "ESIC Registration",
            slug: createServiceSlug("ESIC Registration"),
          },
          {
            name: "Gumasta / Shop Act Registration",
            slug: createServiceSlug("Gumasta Shop Act Registration"),
          },
        ],
      },
      {
        subHead: "Intellectual Property",
        slug: "/category/intellectual-property",
        icon: Atom,
        description: "Protect your brand, inventions, and creative works.",
        items: [
          {
            name: "Trademark Registration",
            slug: createServiceSlug("Trademark Registration"),
          },
          {
            name: "Trademark Hearing",
            slug: createServiceSlug("Trademark Hearing"),
          },
          {
            name: "Trademark Rectification",
            slug: createServiceSlug("Trademark Rectification"),
          },
          {
            name: "Trademark Renewal",
            slug: createServiceSlug("Trademark Renewal"),
          },
          {
            name: "Trademark Transfer",
            slug: createServiceSlug("Trademark Transfer"),
          },
          {
            name: "Trademark Protection",
            slug: createServiceSlug("Trademark Protection"),
          },
          { name: "Logo Designing", slug: createServiceSlug("Logo Designing") },
          {
            name: "Copyright Registration",
            slug: createServiceSlug("Copyright Registration"),
          },
          {
            name: "Copyright Objection",
            slug: createServiceSlug("Copyright Objection"),
          },
          {
            name: "Patent Registration",
            slug: createServiceSlug("Patent Registration"),
          },
          { name: "Patent Search", slug: createServiceSlug("Patent Search") },
        ],
      },
    ],
  },
  {
    mainHead: "MCA",
    slug: "/mca-compliance",
    subCategories: [
      {
        subHead: "Company Compliance",
        slug: "/category/company-compliance",
        icon: Landmark,
        description:
          "Fulfill all ROC & MCA requirements for various business types.",
        items: [
          { name: "LLP Compliance", slug: createServiceSlug("LLP Compliance") },
          { name: "OPC Compliance", slug: createServiceSlug("OPC Compliance") },
          {
            name: "Private Limited Compliance",
            slug: createServiceSlug("Private Limited Compliance"),
          },
          {
            name: "Nidhi Company Compliance",
            slug: createServiceSlug("Nidhi Company Compliance"),
          },
          {
            name: "Section 8 Company Compliance",
            slug: createServiceSlug("Section 8 Company Compliance"),
          },
          {
            name: "Statutory Audit",
            slug: createServiceSlug("Statutory Audit"),
          },
          { name: "Tax Audit", slug: createServiceSlug("Tax Audit") },
          { name: "Bookkeeping", slug: createServiceSlug("Bookkeeping") },
        ],
      },
      {
        subHead: "Annual & Half-Yearly Compliance",
        slug: "/category/annual-half-yearly-compliance",
        icon: GanttChartSquare,
        description: "Timely filing of mandatory annual and event-based forms.",
        items: [
          {
            name: "LLP Form 11 Filing",
            slug: createServiceSlug("LLP Form 11 Filing"),
          },
          {
            name: "LLP Form 8 Filing",
            slug: createServiceSlug("LLP Form 8 Filing"),
          },
          { name: "DPT-3 Filing", slug: createServiceSlug("DPT-3 Filing") },
          { name: "MSME Form 1", slug: createServiceSlug("MSME Form 1") },
          {
            name: "FLA Return Filing",
            slug: createServiceSlug("FLA Return Filing"),
          },
          { name: "AOC 4 Filing", slug: createServiceSlug("AOC 4 Filing") },
          { name: "MGT 7 Filing", slug: createServiceSlug("MGT 7 Filing") },
          { name: "ADT-1 Filing", slug: createServiceSlug("ADT-1 Filing") },
          {
            name: "DIN eKYC Filing",
            slug: createServiceSlug("DIN eKYC Filing"),
          },
          {
            name: "Commencement (INC-20A)",
            slug: createServiceSlug("Commencement INC-20A"),
          },
        ],
      },
      {
        subHead: "Director & Management Services",
        slug: "/category/director-management-services",
        icon: UserCheck,
        description: "Manage director-related compliance and changes.",
        items: [
          {
            name: "DIN Reactivation",
            slug: createServiceSlug("DIN Reactivation"),
          },
          {
            name: "Director Change",
            slug: createServiceSlug("Director Change"),
          },
          { name: "Add Director", slug: createServiceSlug("Add Director") },
          {
            name: "Remove Director",
            slug: createServiceSlug("Remove Director"),
          },
          { name: "DIR 3 KYC", slug: createServiceSlug("DIR 3 KYC") },
        ],
      },
      {
        subHead: "Business Transformations",
        slug: "/category/business-transformations",
        icon: TrendingUp,
        description: "Navigate legal changes in your business structure.",
        items: [
          {
            name: "Company Name Change",
            slug: createServiceSlug("Company Name Change"),
          },
          {
            name: "Registered Office Change",
            slug: createServiceSlug("Registered Office Change"),
          },
          { name: "MOA Amendment", slug: createServiceSlug("MOA Amendment") },
          { name: "AOA Amendment", slug: createServiceSlug("AOA Amendment") },
        ],
      },
      {
        subHead: "Share Management Solutions",
        slug: "/category/share-management-solutions",
        icon: BarChart,
        description: "Expert handling of share capital and ownership changes.",
        items: [
          {
            name: "Authorized Capital Increase",
            slug: createServiceSlug("Authorized Capital Increase"),
          },
          { name: "Share Transfer", slug: createServiceSlug("Share Transfer") },
          {
            name: "Demat of Shares",
            slug: createServiceSlug("Demat of Shares"),
          },
          {
            name: "Winding Up - Company",
            slug: createServiceSlug("Winding Up Company"),
          },
        ],
      },
    ],
  },
  {
    mainHead: "Compliance",
    slug: "/compliance",
    subCategories: [
      {
        subHead: "Corporate Services",
        slug: "/category/corporate-services",
        icon: CheckSquare,
        description: "Ongoing compliance management for smooth operations.",
        items: [
          {
            name: "FDI Filing with RBI",
            slug: createServiceSlug("FDI Filing with RBI"),
          },
          { name: "FSSAI Renewal", slug: createServiceSlug("FSSAI Renewal") },
          {
            name: "FSSAI Return Filing",
            slug: createServiceSlug("FSSAI Return Filing"),
          },
          { name: "Business Plan", slug: createServiceSlug("Business Plan") },
          {
            name: "PF Return Filing",
            slug: createServiceSlug("PF Return Filing"),
          },
          {
            name: "ESI Return Filing",
            slug: createServiceSlug("ESI Return Filing"),
          },
          {
            name: "Professional Tax Return Filing",
            slug: createServiceSlug("Professional Tax Return Filing"),
          },
          {
            name: "Winding Up - LLP",
            slug: createServiceSlug("Winding Up LLP"),
          },
        ],
      },
      {
        subHead: "SEBI Compliance",
        slug: "/category/sebi-compliance",
        icon: ShieldCheck,
        description: "Expert guidance on SEBI regulations and filings.",
        items: [
          {
            name: "SEBI Registration for AIF",
            slug: createServiceSlug("SEBI Registration for AIF"),
          },
          {
            name: "SEBI Registration for PMS",
            slug: createServiceSlug("SEBI Registration for PMS"),
          },
          {
            name: "SEBI Registration for RIA",
            slug: createServiceSlug("SEBI Registration for RIA"),
          },
          {
            name: "SEBI Registration for VCF",
            slug: createServiceSlug("SEBI Registration for VCF"),
          },
        ],
      },
      {
        subHead: "Audit & Due Diligence",
        slug: "/category/audit-due-diligence",
        icon: Search,
        description:
          "Thorough audits and diligence for informed decision-making.",
        items: [
          {
            name: "Secretarial Audit",
            slug: createServiceSlug("Secretarial Audit"),
          },
          {
            name: "Legal Due Diligence",
            slug: createServiceSlug("Legal Due Diligence"),
          },
          {
            name: "Financial Due Diligence",
            slug: createServiceSlug("Financial Due Diligence"),
          },
          { name: "Internal Audit", slug: createServiceSlug("Internal Audit") },
        ],
      },
      {
        subHead: "Corporate Restructuring",
        slug: "/category/corporate-restructuring",
        icon: Handshake,
        description:
          "Navigating mergers, demergers, and insolvency with expertise.",
        items: [
          {
            name: "Mergers & Acquisitions",
            slug: createServiceSlug("Mergers Acquisitions"),
          },
          { name: "Demergers", slug: createServiceSlug("Demergers") },
          {
            name: "Corporate Insolvency Resolution",
            slug: createServiceSlug("Corporate Insolvency Resolution"),
          },
          { name: "Liquidation", slug: createServiceSlug("Liquidation") },
        ],
      },
    ],
  },
  {
    mainHead: "Taxation",
    slug: "/taxation",
    subCategories: [
      {
        subHead: "Income Tax",
        slug: "/category/income-tax",
        icon: Receipt,
        description: "Comprehensive ITR filing for individuals and businesses.",
        items: [
          {
            name: "Income Tax E-Filing",
            slug: createServiceSlug("Income Tax E-Filing"),
          },
          {
            name: "Business Tax Filing",
            slug: createServiceSlug("Business Tax Filing"),
          },
          {
            name: "ITR-1 Return Filing",
            slug: createServiceSlug("ITR-1 Return Filing"),
          },
          {
            name: "ITR-2 Return Filing",
            slug: createServiceSlug("ITR-2 Return Filing"),
          },
          {
            name: "ITR-3 Return Filing",
            slug: createServiceSlug("ITR-3 Return Filing"),
          },
          {
            name: "ITR-4 Return Filing",
            slug: createServiceSlug("ITR-4 Return Filing"),
          },
          {
            name: "ITR-5 Return Filing",
            slug: createServiceSlug("ITR-5 Return Filing"),
          },
          {
            name: "ITR-6 Return Filing",
            slug: createServiceSlug("ITR-6 Return Filing"),
          },
          {
            name: "ITR-7 Return Filing",
            slug: createServiceSlug("ITR-7 Return Filing"),
          },
          {
            name: "15CA - 15CB Filing",
            slug: createServiceSlug("15CA - 15CB Filing"),
          },
        ],
      },
      {
        subHead: "Regulatory Return Filing",
        slug: "/category/regulatory-return-filing",
        icon: ClipboardCheck,
        description: "Timely filing of TDS, TCS, and other regulatory returns.",
        items: [
          {
            name: "TDS Return Filing",
            slug: createServiceSlug("TDS Return Filing"),
          },
          {
            name: "TCS Return Filing",
            slug: createServiceSlug("TCS Return Filing"),
          },
          {
            name: "Advance Tax Calculation",
            slug: createServiceSlug("Advance Tax Calculation"),
          },
          {
            name: "Income Tax Notice",
            slug: createServiceSlug("Income Tax Notice"),
          },
        ],
      },
      {
        subHead: "GST Solutions",
        slug: "/category/gst-solutions",
        icon: CircleDollarSign,
        description: "End-to-end solutions for all your GST needs.",
        items: [
          {
            name: "GST Registration",
            slug: createServiceSlug("GST Registration"),
          },
          {
            name: "GST for E-commerce",
            slug: createServiceSlug("GST Registration for E-commerce"),
          },
          { name: "GST Amendment", slug: createServiceSlug("GST Amendment") },
          {
            name: "GST Return Filing",
            slug: createServiceSlug("GST Return Filing"),
          },
          {
            name: "GST Annual Return (GSTR-9)",
            slug: createServiceSlug("GST Annual Return GSTR-9"),
          },
          { name: "GST Revocation", slug: createServiceSlug("GST Revocation") },
        ],
      },
    ],
  },
  {
    mainHead: "Documentations",
    slug: "/documentations",
    subCategories: [
      {
        subHead: "Legal Document Templates",
        slug: "/category/legal-document-templates",
        icon: Files,
        description: "Access a library of free, ready-to-use legal documents.",
        items: [
          {
            name: "All Legal Documents",
            slug: createServiceSlug("All Legal Documents"),
          },
          {
            name: "Commercial Rental Agreement",
            slug: createServiceSlug("Commercial Rental Agreement"),
          },
          {
            name: "Experience Letter",
            slug: createServiceSlug("Experience Letter"),
          },
          {
            name: "Appointment Letter",
            slug: createServiceSlug("Appointment Letter"),
          },
          {
            name: "Partnership Deed",
            slug: createServiceSlug("Partnership Deed"),
          },
          {
            name: "Resignation Letter",
            slug: createServiceSlug("Resignation Letter"),
          },
        ],
      },
      {
        subHead: "Commercial Contracts",
        slug: "/category/commercial-contracts",
        icon: FileSignature,
        description: "Drafting and review of critical business agreements.",
        items: [
          {
            name: "Non Disclosure Agreement (NDA)",
            slug: createServiceSlug("Non Disclosure Agreement NDA"),
          },
          {
            name: "Service Level Agreement",
            slug: createServiceSlug("Service Level Agreement"),
          },
          {
            name: "Franchise Agreement",
            slug: createServiceSlug("Franchise Agreement"),
          },
          {
            name: "Shareholders Agreement",
            slug: createServiceSlug("Shareholders Agreement"),
          },
          {
            name: "Joint Venture Agreement",
            slug: createServiceSlug("Joint Venture Agreement"),
          },
          {
            name: "Vendor Agreement",
            slug: createServiceSlug("Vendor Agreement"),
          },
        ],
      },
    ],
  },
];
