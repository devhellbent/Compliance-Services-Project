import { ServiceData } from "@/lib/types";

export const privateLimitedCompanyData: ServiceData = {
  title: "Private Limited Company Registration",
  breadcrumb: ["Home", "Registrations", "Private Limited Company"],
  description:
    "Establish your business with India's most trusted corporate structure. Private Limited Company registration offers limited liability protection, enhanced credibility, and seamless access to funding opportunities—making it the preferred choice for startups and growing enterprises.",
  overview:
    "A **Private Limited Company** represents the gold standard of business incorporation in India, seamlessly blending the advantages of corporate governance with operational agility. As a distinct legal entity, it operates independently from its shareholders, offering them the security of limited liability while maintaining perpetual succession—ensuring business continuity regardless of ownership changes. This corporate framework is specifically designed to facilitate growth, providing an ideal platform for attracting venture capital, angel investors, and institutional funding. The structure mandates robust compliance protocols and transparent financial reporting, which significantly enhances stakeholder confidence and market credibility. With minimum capital requirements and flexible shareholding patterns, a Private Limited Company empowers entrepreneurs to build scalable enterprises while safeguarding personal assets. The registration process, governed by the Ministry of Corporate Affairs (MCA) and regulated under the Companies Act 2013, establishes a professional business foundation that opens doors to government tenders, bank financing, and strategic partnerships. Whether you're launching a tech startup, establishing a manufacturing unit, or expanding into professional services, this corporate structure delivers the perfect balance of regulatory compliance, operational flexibility, and growth potential.",
  whyChooseUs: [
    {
      icon: "Building2",
      title: "Separate Legal Entity",
      text: "The company is distinct from its owners.",
    },
    {
      icon: "Shield",
      title: "Limited Liability",
      text: "Shareholders' liability is limited to their share capital.",
    },
    {
      icon: "RefreshCw",
      title: "Perpetual Succession",
      text: "The company's existence is not affected by the change of its members.",
    },
    {
      icon: "TrendingUp",
      title: "Fundraising",
      text: "Easy to raise funds from investors.",
    },
  ],
  advantages: [
    {
      icon: "ShieldCheck",
      title: "Limited Liability Protection",
      text: "Shareholders' liability is limited to their share capital. Personal assets are not at risk even if the company faces financial difficulties or bankruptcy.",
    },
    {
      icon: "Building2",
      title: "Separate Legal Entity",
      text: "The company is a distinct legal entity, independent of its owners. It can own assets, enter into contracts, sue and be sued in its own name.",
    },
    {
      icon: "TrendingUp",
      title: "Easy to Raise Funds",
      text: "Attracts investors such as venture capital, angel investors, and private equity. Can issue equity shares and convertible instruments (CCPS, CCD) to raise capital.",
    },
    {
      icon: "RefreshCw",
      title: "Perpetual Succession",
      text: "The company's existence is unaffected by the death, insolvency, or exit of shareholders or directors. Ownership can be transferred seamlessly through share transfers.",
    },
    {
      icon: "Award",
      title: "Credibility & Trust",
      text: "Private Limited status builds credibility with customers, suppliers, banks, and investors. Easier to secure loans, win contracts, and build partnerships.",
    },
    {
      icon: "Users",
      title: "Employee Stock Options (ESOPs)",
      text: "Can issue ESOPs to attract and retain talented employees, aligning their interests with company growth.",
    },
    {
      icon: "Scale",
      title: "Governance & Professional Management",
      text: "Clear board structure and corporate governance practices ensure professional management and accountability.",
    },
  ],
  disadvantages: [
    {
      icon: "FileText",
      title: "High Compliance & Regulatory Burden",
      text: "Must comply with the Companies Act, 2013. Mandatory annual filings (Form AOC-4, MGT-7), board meetings, statutory audits, and maintenance of statutory registers.",
    },
    {
      icon: "Lock",
      title: "Restrictions on Share Transfer",
      text: "Shares cannot be freely transferred. Transfer requires board approval and must comply with Articles of Association. No public listing allowed.",
    },
    {
      icon: "DollarSign",
      title: "Higher Formation & Running Costs",
      text: "Incorporation costs are higher than sole proprietorships or partnerships. Annual audit, compliance filings, and secretarial services add to recurring expenses.",
    },
    {
      icon: "Eye",
      title: "Public Disclosure Requirements",
      text: "Financial statements and annual returns are filed with the ROC and become publicly accessible. Less privacy compared to unregistered businesses.",
    },
    {
      icon: "Users",
      title: "Minimum Shareholders & Directors Requirement",
      text: "Requires at least 2 directors and 2 shareholders. Falling below this number can lead to penalties and compliance issues.",
    },
  ],
  eligibility: [
    "A minimum of two directors and two shareholders are required.",
    "At least one director must be a resident of India.",
    "No minimum capital requirement.",
  ],
  documents: [
    {
      title: "For Directors/Shareholders",
      items: ["PAN Card", "Identity Proof", "Address Proof", "Photograph"],
    },
    {
      title: "For Registered Office",
      items: ["Utility Bill", "NOC from the owner"],
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "DSC & DIN",
      description: "Obtain DSC and DIN for directors.",
    },
    {
      step: 2,
      title: "Name Approval",
      description: "Reserve a unique name for the company.",
    },
    {
      step: 3,
      title: "Incorporation",
      description: "File the SPICe+ form with the RoC.",
    },
    {
      step: 4,
      title: "Certificate of Incorporation",
      description: "Issued by the RoC.",
    },
  ],
  fees: [
    {
      component: "Digital Signature Certificate (DSC)",
      fees: "₹1,000 - ₹2,000",
      remarks: "Per director (valid for 2-3 years)",
    },
    {
      component: "Director Identification Number (DIN)",
      fees: "₹500 - ₹1,000",
      remarks: "Per director (one-time)",
    },
    {
      component: "Name Approval (SPICe+ Part A)",
      fees: "₹1,000",
      remarks: "For name reservation",
    },
    {
      component: "Government/ROC Fees (SPICe+ Part B)",
      fees: "₹1,000 - ₹4,500",
      remarks:
        "Depends on authorized capital (up to ₹1 lakh: ₹1,000; ₹1-5 lakh: ₹2,500; ₹5-10 lakh: ₹3,500; above ₹10 lakh: ₹4,500)",
    },
    {
      component: "Stamp Duty",
      fees: "Varies by state",
      remarks: "0.2% to 0.7% of authorized capital (state-specific)",
    },
    {
      component: "Professional Fees (CA/CS/Lawyer)",
      fees: "₹8,000 - ₹20,000",
      remarks:
        "Includes documentation, filing, drafting MoA/AoA, and consultation",
    },
    {
      component: "Total Estimated Cost",
      fees: "₹12,000 - ₹30,000",
      remarks:
        "Varies based on state, authorized capital, and professional fees",
    },
  ],
  faqs: [
    {
      q: "What is the minimum capital requirement to start a Private Limited Company?",
      a: "There is no minimum capital requirement. Earlier, it was ₹1 lakh, but now you can register with any amount, even ₹1,000 or ₹10,000 as authorized capital. However, authorized capital should be realistic based on business operations.",
    },
    {
      q: "How long does it take to register a Private Limited Company?",
      a: "The entire process typically takes 10-15 working days from the date of filing SPICe+ Part B, provided all documents are correct and the name is approved. Delays may occur due to incomplete documentation or queries raised by the ROC.",
    },
    {
      q: "What are the annual compliance requirements for a Private Limited Company?",
      a: "Annual compliances include: (1) Holding at least 4 board meetings and 1 AGM, (2) Filing annual financial statements (Form AOC-4), (3) Filing annual returns (Form MGT-7), (4) Maintaining statutory registers, (5) Statutory audit, (6) Filing Income Tax returns.",
    },
    {
      q: "Can a Private Limited Company have foreign directors or shareholders?",
      a: "Yes, a Private Limited Company can have foreign nationals as directors and shareholders. However, at least one director must be a resident of India. Foreign investment is subject to FDI regulations and sectoral caps.",
    },
    {
      q: "What is the difference between Authorized Capital and Paid-up Capital?",
      a: "Authorized Capital is the maximum share capital a company is authorized to issue as per its MoA. Paid-up Capital is the actual amount of money received from shareholders against shares issued. Paid-up capital cannot exceed authorized capital.",
    },
  ],
};
