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

// Helper function to create slugs
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
          { name: "Proprietorship", slug: createServiceSlug("Proprietorship") },
          { name: "Partnership", slug: createServiceSlug("Partnership") },
          {
            name: "Limited Liability Partnership",
            slug: createServiceSlug("Limited Liability Partnership"),
          },
          {
            name: "One Person Company",
            slug: createServiceSlug("One Person Company"),
          },
          {
            name: "Private Limited Company",
            slug: createServiceSlug("Private Limited Company"),
          },
          {
            name: "Public Limited Company",
            slug: createServiceSlug("Public Limited Company"),
          },
          {
            name: "Producer Company",
            slug: createServiceSlug("Producer Company"),
          },
          {
            name: "Nidhi Company Registration",
            slug: createServiceSlug("Nidhi Company Registration"),
          },
          {
            name: "Section 8 / NGO Company",
            slug: createServiceSlug("Section 8 NGO Company"),
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
        subHead: "Intellectual Property Services", // Corrected per video
        slug: "/category/intellectual-property-services",
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
          {
            name: "Infringement Notice", // Corrected per video
            slug: createServiceSlug("Infringement Notice"),
          },
        ],
      },
    ],
  },
  {
    mainHead: "MCA",
    slug: "/mca-compliance",
    subCategories: [
      {
        subHead: "Company Compliance", // Corrected spelling
        slug: "/category/company-compliance",
        icon: Landmark,
        description:
          "Fulfill all ROC & MCA requirements for various business types.",
        items: [
          {
            name: "Partnership Compliance",
            slug: createServiceSlug("Partnership Compliance"),
          },
          { name: "LLP Compliance", slug: createServiceSlug("LLP Compliance") },
          { name: "OPC Compliance", slug: createServiceSlug("OPC Compliance") },
          {
            name: "Private Company Compliance",
            slug: createServiceSlug("Private Company Compliance"),
          },
          {
            name: "Public Limited Company Compliance",
            slug: createServiceSlug("Public Limited Company Compliance"),
          },
          {
            name: "Producer Company Compliance",
            slug: createServiceSlug("Producer Company Compliance"),
          },
          {
            name: "Nidhi Company Compliance",
            slug: createServiceSlug("Nidhi Company Compliance"),
          },
          { name: "NGO Compliance", slug: createServiceSlug("NGO Compliance") },
          {
            name: "Trust Compliance",
            slug: createServiceSlug("Trust Compliance"),
          },
          {
            name: "Society Compliance",
            slug: createServiceSlug("Society Compliance"),
          },
          {
            name: "Subsidiary Company Compliance",
            slug: createServiceSlug("Subsidiary Company Compliance"),
          },
          {
            name: "Microfinance Company Compliance",
            slug: createServiceSlug("Microfinance Company Compliance"),
          },
          {
            name: "FEMA / RBI Compliance",
            slug: createServiceSlug("FEMA RBI Compliance"),
          },
          {
            name: "Statutory Registers and Minutes Maintenance",
            slug: createServiceSlug(
              "Statutory Registers and Minutes Maintenance"
            ),
          },
        ],
      },
      {
        subHead: "Annual & Half-Yearly Compliance", // Corrected spelling
        slug: "/category/annual-half-yearly-compliance",
        icon: GanttChartSquare,
        description: "Timely filing of mandatory annual and event-based forms.",
        items: [
          { name: "MSME Filling", slug: createServiceSlug("MSME Filling") },
          { name: "PAS-6", slug: createServiceSlug("PAS-6") },
          {
            name: "LLP Form 11 Filing",
            slug: createServiceSlug("LLP Form 11 Filing"),
          },
          { name: "DPT-3 Filing", slug: createServiceSlug("DPT-3 Filing") },
          { name: "AGM", slug: createServiceSlug("AGM") },
          { name: "E-Voting", slug: createServiceSlug("E-Voting") },
          {
            name: "AOC-4/AOC-4 XBRL",
            slug: createServiceSlug("AOC-4-AOC-4-XBRL"),
          },
          {
            name: "MGT-7/MGT-7A",
            slug: createServiceSlug("MGT-7-MGT-7A"),
          },
          {
            name: "KYC/DIR-3 KYC",
            slug: createServiceSlug("KYC-DIR-3-KYC"),
          },
          {
            name: "FC-GPR/FC-TRS Filings",
            slug: createServiceSlug("FC-GPR-FC-TRS-Filings"),
          },
        ],
      },
      {
        subHead: "MCA Services", // Corrected per video
        slug: "/category/mca-services",
        icon: UserCheck, // Placeholder icon
        description: "Winding up services for various company types.",
        items: [
          { name: "LLP Winding Up", slug: createServiceSlug("LLP Winding Up") },
          {
            name: "Private Limited Winding Up",
            slug: createServiceSlug("Private Limited Winding Up"),
          },
          {
            name: "Section 8 Winding Up",
            slug: createServiceSlug("Section 8 Winding Up"),
          },
          {
            name: "Nidhi Winding Up",
            slug: createServiceSlug("Nidhi Winding Up"),
          },
          {
            name: "Indian Subsidiary Winding Up",
            slug: createServiceSlug("Indian Subsidiary Winding Up"),
          },
        ],
      },
      {
        subHead: "Special Compliance Services", // Corrected per video
        slug: "/category/special-compliance-services",
        icon: CheckSquare, // Placeholder icon
        description: "Manage special company compliance and changes.",
        items: [
          {
            name: "Commencement (INC-20A)",
            slug: createServiceSlug("Commencement INC-20A"),
          },
          {
            name: "Change in LLP Agreement",
            slug: createServiceSlug("Change in LLP Agreement"),
          },
          {
            name: "Authorized Capital Increase",
            slug: createServiceSlug("Authorized Capital Increase"),
          },
          { name: "AOA Amendment", slug: createServiceSlug("AOA Amendment") },
          { name: "MOA Amendment", slug: createServiceSlug("MOA Amendment") },
          {
            name: "Name Change - Company",
            slug: createServiceSlug("Name Change Company"),
          },
          {
            name: "Registered Office Change",
            slug: createServiceSlug("Registered Office Change"),
          },
          {
            name: "DIN Reactivation",
            slug: createServiceSlug("DIN Reactivation"),
          },
          {
            name: "Approval of Director",
            slug: createServiceSlug("Approval of Director"),
          },
          {
            name: "Removal of Director",
            slug: createServiceSlug("Removal of Director"),
          },
          { name: "ADT-1 Filing", slug: createServiceSlug("ADT-1 Filing") },
          {
            name: "Dormant Status Filing",
            slug: createServiceSlug("Dormant Status Filing"),
          },
        ],
      },
      {
        subHead: "Legal Business Transformations", // Corrected per video
        slug: "/category/legal-business-transformations",
        icon: TrendingUp,
        description: "Navigate legal changes in your business structure.",
        items: [
          {
            name: "Proprietor to LLP Company",
            slug: createServiceSlug("Proprietor to LLP Company"),
          },
          {
            name: "LLP to Private Company",
            slug: createServiceSlug("LLP to Private Company"),
          },
          {
            name: "OPC to Private Limited",
            slug: createServiceSlug("OPC to Private Limited"),
          },
          {
            name: "Private to Public Company",
            slug: createServiceSlug("Private to Public Company"),
          },
        ],
      },
      {
        subHead: "Share Management Solutions", // Corrected per video
        slug: "/category/share-management-solutions",
        icon: BarChart,
        description: "Expert handling of share capital and ownership changes.",
        items: [
          { name: "ISIN Number", slug: createServiceSlug("ISIN Number") },
          { name: "Share Transfer", slug: createServiceSlug("Share Transfer") },
          {
            name: "Demat of Shares",
            slug: createServiceSlug("Demat of Shares"),
          },
          { name: "RTA Services", slug: createServiceSlug("RTA Services") },
        ],
      },
    ],
  },
  {
    mainHead: "Compliance",
    slug: "/compliance",
    subCategories: [
      {
        subHead: "Corporate Service",
        slug: "/category/corporate-service",
        icon: CheckSquare,
        description: "Ongoing compliance management for smooth operations.",
        items: [
          {
            name: "Charge Creation/Modification/Satisfaction",
            slug: createServiceSlug(
              "Charge Creation-Modification-Satisfaction"
            ),
          },
          {
            name: "Share Allotment & Transfer",
            slug: createServiceSlug("Share Allotment & Transfer"),
          },
          {
            name: "Right Issue / Private Placement",
            slug: createServiceSlug("Right Issue Private Placement"),
          },
          {
            name: "Buy-Back of Shares",
            slug: createServiceSlug("Buy-Back of Shares"),
          },
          {
            name: "Issue of Preference Shares / Convertible Debentures",
            slug: createServiceSlug(
              "Issue of Preference Shares Convertible Debentures"
            ),
          },
          {
            name: "Reduction of Share Capital",
            slug: createServiceSlug("Reduction of Share Capital"),
          },
          {
            name: "ESOP Structuring and Implementation",
            slug: createServiceSlug("ESOP Structuring and Implementation"),
          },
          { name: "XBRL Filing", slug: createServiceSlug("XBRL Filing") },
        ],
      },
      {
        subHead: "SEBI Compliance",
        slug: "/category/sebi-compliance",
        icon: ShieldCheck,
        description: "Expert guidance on SEBI regulations and filings.",
        items: [
          {
            name: "Compliance with LODR Regulations",
            slug: createServiceSlug("Compliance with LODR Regulations"),
          },
          {
            name: "Insider Trading Regulations Compliance",
            slug: createServiceSlug("Insider Trading Regulations Compliance"),
          },
          {
            name: "Listing of Securities on Stock Exchanges",
            slug: createServiceSlug("Listing of Securities on Stock Exchanges"),
          },
          {
            name: "Posh Policy & Compliance",
            slug: createServiceSlug("Posh Policy & Compliance"),
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
            name: "Corporate Governance",
            slug: createServiceSlug("Corporate Governance"),
          },
          {
            name: "Internal Audit & Process Review",
            slug: createServiceSlug("Internal Audit & Process Review"),
          },
        ],
      },
      {
        subHead: "Corporate Restructuring Compliance",
        slug: "/category/corporate-restructuring-compliance",
        icon: Handshake,
        description:
          "Navigating mergers, demergers, and insolvency with expertise.",
        items: [
          {
            name: "Amalgamation, Merger & Demerger Advisory",
            slug: createServiceSlug("Amalgamation Merger & Demerger Advisory"),
          },
          {
            name: "Drafting of Scheme of Arrangement",
            slug: createServiceSlug("Drafting of Scheme of Arrangement"),
          },
          {
            name: "NCLT Filing & Approvals",
            slug: createServiceSlug("NCLT Filing & Approvals"),
          },
          { name: "Policy Making", slug: createServiceSlug("Policy Making") },
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
          {
            name: "Income Tax Notice",
            slug: createServiceSlug("Income Tax Notice"),
          },
        ],
      },
      {
        subHead: "Regulatory Return Filing",
        slug: "/category/regulatory-return-filing",
        icon: ClipboardCheck,
        description: "Timely filing of TDS, PF, and other regulatory returns.",
        items: [
          {
            name: "PF Return Filling",
            slug: createServiceSlug("PF Return Filling"),
          },
          {
            name: "ESIC Return Filling",
            slug: createServiceSlug("ESIC Return Filling"),
          },
          {
            name: "TDS Return Filing",
            slug: createServiceSlug("TDS Return Filing"),
          },
          {
            name: "Professional Tax Return Filling",
            slug: createServiceSlug("Professional Tax Return Filling"),
          },
        ],
      },
      {
        subHead: "GST",
        slug: "/category/gst",
        icon: CircleDollarSign,
        description: "End-to-end solutions for all your GST needs.",
        items: [
          {
            name: "GST Registration",
            slug: createServiceSlug("GST Registration"),
          },
          {
            name: "GST Registration for E-commerce",
            slug: createServiceSlug("GST Registration for E-commerce"),
          },
          {
            name: "Additional Place of Business in GST",
            slug: createServiceSlug("Additional Place of Business in GST"),
          },
          { name: "GST Amendment", slug: createServiceSlug("GST Amendment") },
          {
            name: "GST Return Filing",
            slug: createServiceSlug("GST Return Filing"),
          },
          {
            name: "GST Return Filing for E-commerce",
            slug: createServiceSlug("GST Return Filing for E-commerce"),
          },
          {
            name: "GST Annual Return Filing (GSTR-9)",
            slug: createServiceSlug("GST Annual Return Filing GSTR-9"),
          },
          { name: "GSTR-10", slug: createServiceSlug("GSTR-10") },
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
        subHead: "Free Legal Documents",
        slug: "/category/free-legal-documents",
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
            name: "Affidavit Format",
            slug: createServiceSlug("Affidavit Format"),
          },
          {
            name: "Income Certificate",
            slug: createServiceSlug("Income Certificate"),
          },
          {
            name: "No Objection Certificate",
            slug: createServiceSlug("No Objection Certificate"),
          },
          { name: "Salary Slip", slug: createServiceSlug("Salary Slip") },
          {
            name: "Resignation Letter",
            slug: createServiceSlug("Resignation Letter"),
          },
          {
            name: "Legal Heir Certificate",
            slug: createServiceSlug("Legal Heir Certificate"),
          },
          {
            name: "Relieving Letter",
            slug: createServiceSlug("Relieving Letter"),
          },
          {
            name: "Partnership Deed",
            slug: createServiceSlug("Partnership Deed"),
          },
          { name: "Gst Invoice", slug: createServiceSlug("Gst Invoice") },
          {
            name: "Authorised Signatory In Gst",
            slug: createServiceSlug("Authorised Signatory In Gst"),
          },
          {
            name: "Delivery Challan",
            slug: createServiceSlug("Delivery Challan"),
          },
          { name: "Offer Letter", slug: createServiceSlug("Offer Letter") },
          {
            name: "Consent Letter For Gst Registration",
            slug: createServiceSlug("Consent Letter For Gst Registration"),
          },
          { name: "Rent Receipt", slug: createServiceSlug("Rent Receipt") },
        ],
      },
      {
        subHead: "Commercial Contracts",
        slug: "/category/commercial-contracts",
        icon: FileSignature,
        description: "Drafting and review of critical business agreements.",
        items: [
          {
            name: "Non Disclosure Agreement NDA",
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
            name: "Master Service Agreement",
            slug: createServiceSlug("Master Service Agreement"),
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
          {
            name: "Consultancy Agreement",
            slug: createServiceSlug("Consultancy Agreement"),
          },
          {
            name: "Memorandum of Understanding",
            slug: createServiceSlug("Memorandum of Understanding"),
          },
          {
            name: "Succession Certificate",
            slug: createServiceSlug("Succession Certificate"),
          },
          {
            name: "Scope of Work Agreement",
            slug: createServiceSlug("Scope of Work Agreement"),
          },
          {
            name: "Share Purchase Agreement",
            slug: createServiceSlug("Share Purchase Agreement"),
          },
          {
            name: "Noncompete Agreement",
            slug: createServiceSlug("Noncompete Agreement"),
          },
          {
            name: "Finance Agreement",
            slug: createServiceSlug("Finance Agreement"),
          },
        ],
      },
      {
        subHead: "Individual Legal Services",
        slug: "/category/individual-legal-services",
        icon: Files, // Placeholder icon
        description: "Legal documents for personal needs.",
        items: [
          {
            name: "Will Registration",
            slug: createServiceSlug("Will Registration"),
          },
          {
            name: "Probate of Will",
            slug: createServiceSlug("Probate of Will"),
          },
          {
            name: "Power of Attorney",
            slug: createServiceSlug("Power of Attorney"),
          },
        ],
      },
      {
        subHead: "Real Estate",
        slug: "/category/real-estate",
        icon: Files, // Placeholder icon
        description: "Drafting and registration of property documents.",
        items: [
          {
            name: "Rental Agreement",
            slug: createServiceSlug("Rental Agreement"),
          },
          { name: "Sale Deed", slug: createServiceSlug("Sale Deed") },
          { name: "Gift Deed", slug: createServiceSlug("Gift Deed") },
          {
            name: "Rental Tenant Notice",
            slug: createServiceSlug("Rental Tenant Notice"),
          },
        ],
      },
      {
        subHead: "Notices",
        slug: "/category/notices",
        icon: Files, // Placeholder icon
        description: "Drafting and sending legal notices.",
        items: [
          { name: "Legal Notice", slug: createServiceSlug("Legal Notice") },
        ],
      },
      {
        subHead: "HR Policies",
        slug: "/category/hr-policies",
        icon: Files, // Placeholder icon
        description: "Drafting employment contracts and HR policies.",
        items: [
          {
            name: "Employment Agreement",
            slug: createServiceSlug("Employment Agreement"),
          },
          { name: "ESOP", slug: createServiceSlug("ESOP") },
          {
            name: "Payroll Maintenance",
            slug: createServiceSlug("Payroll Maintenance"),
          },
        ],
      },
    ],
  },
];
