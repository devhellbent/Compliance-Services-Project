import { ServiceData } from "@/lib/types";

export const onePersonCompanyData: ServiceData = {
  title: "One Person Company (OPC) Registration",
  breadcrumb: [
    "Home",
    "Registrations",
    "Company Registration",
    "One Person Company",
  ],
  description:
    "Empower your solo entrepreneurial vision with corporate advantages. One Person Company registration provides single-member businesses with limited liability protection and corporate structure benefits, perfect for individual entrepreneurs seeking formal business recognition.",
  overview:
    "A **One Person Company (OPC)** represents a revolutionary business structure introduced under the Companies Act, 2013, specifically designed to empower solo entrepreneurs with the benefits of corporate governance while maintaining single-person ownership and control. This innovative entity combines the simplicity of sole proprietorship with the credibility and limited liability protection of a private limited company, creating an ideal platform for individual entrepreneurs to formalize their business ventures. As a separate legal entity, an OPC can own property, enter contracts, and conduct business operations independently, ensuring clear separation between personal and business assets. The structure requires only one director and one member (who can be the same person), with a mandatory nominee who assumes control in case of the member's incapacity or death, ensuring business continuity. Limited liability protection shields the owner's personal assets from business debts and legal obligations, with liability restricted to the share capital contributed. This corporate structure enhances business credibility significantly, making it easier to secure bank loans, attract clients, and participate in government tenders and procurement processes. The OPC enjoys perpetual succession, meaning the entity continues to exist regardless of changes in membership, providing long-term stability for business operations. While compliance requirements are more structured than sole proprietorship, they remain simpler than those of private limited companies, striking an optimal balance between formality and operational efficiency. The structure is particularly advantageous for freelancers, consultants, small manufacturers, and service providers transitioning from informal to formal business operations, offering them a professional corporate identity while maintaining complete operational control.",
  whyChooseUs: [
    {
      icon: "User",
      title: "Single Owner",
      text: "Owned and managed by a single individual.",
    },
    {
      icon: "Shield",
      title: "Limited Liability",
      text: "Protects the owner's personal assets from business debts.",
    },
    {
      icon: "Building2",
      title: "Separate Legal Entity",
      text: "The company has its own legal identity.",
    },
    {
      icon: "UserCheck",
      title: "Nominee Director",
      text: "A nominee must be appointed to ensure perpetual succession.",
    },
  ],
  advantages: [
    {
      icon: "Shield",
      title: "Limited Liability Protection",
      text: "The most significant advantage. The owner's personal assets are not at risk for the company's debts. Liability is limited to the capital contributed, protecting from financial ruin in case of business failure.",
    },
    {
      icon: "Building2",
      title: "Separate Legal Entity",
      text: "The company has its own legal identity, distinct from its owner. The OPC can enter into contracts, own property, and sue or be sued in its own name, providing a professional and trustworthy image.",
    },
    {
      icon: "Zap",
      title: "Easy to Manage",
      text: "With only one owner, there is no need for board meetings, complex decision-making processes, or resolving conflicts among multiple shareholders. This allows for quick and efficient management with full control.",
    },
    {
      icon: "TrendingUp",
      title: "Access to Funding",
      text: "An OPC, as a formal corporate entity, has better access to credit and loans from banks and financial institutions compared to an unregistered proprietorship.",
    },
    {
      icon: "RefreshCw",
      title: "Perpetual Succession",
      text: "The OPC's existence is not dependent on the life of its owner. The mandatory appointment of a nominee ensures the company can continue to operate in the event of the owner's death or incapacitation.",
    },
  ],
  disadvantages: [
    {
      icon: "TrendingDown",
      title: "Limited Growth Potential",
      text: "An OPC can have only one shareholder. This restricts the ability to raise capital through issuing equity shares, making it difficult to attract venture capitalists or angel investors.",
    },
    {
      icon: "ArrowRightLeft",
      title: "Conversion Thresholds",
      text: "If an OPC's paid-up share capital exceeds ₹50 lakhs or its average annual turnover exceeds ₹2 crores for three consecutive years, it must compulsorily convert into a private or public limited company.",
    },
    {
      icon: "FileCheck",
      title: "Higher Compliance than Proprietorship",
      text: "While an OPC has relaxed compliance compared to other companies, it still has more legal requirements than a sole proprietorship, including maintaining proper books, statutory audits, and annual returns.",
    },
    {
      icon: "Ban",
      title: "Restrictions on Business Activities",
      text: "An OPC cannot engage in non-banking financial investment activities or be converted into a Section 8 company (with charitable objects).",
    },
    {
      icon: "User",
      title: "Dependency on a Single Person",
      text: "The success and continuity heavily rely on the sole owner's skills and health. The nominee's role is to ensure continuity but they may not have the same expertise or vision.",
    },
  ],
  eligibility: [
    "Only a natural person who is an Indian citizen and resident in India can form an OPC.",
    "The individual cannot be a member or nominee of more than one OPC.",
  ],
  documents: [
    {
      title: "For Director/Nominee",
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
      description:
        "Obtain Digital Signature Certificate (DSC) and Director Identification Number (DIN).",
    },
    {
      step: 2,
      title: "Name Approval",
      description: "File for name reservation using the SPICe+ Part A form.",
    },
    {
      step: 3,
      title: "Incorporation",
      description: "File the SPICe+ Part B form with the required documents.",
    },
    {
      step: 4,
      title: "Certificate of Incorporation",
      description: "Issued by the RoC upon approval.",
    },
  ],
  fees: [
    {
      component: "Digital Signature Certificate (DSC)",
      fees: "₹1,000 - ₹2,000",
      remarks: "Required for director to sign forms electronically",
    },
    {
      component: "Director Identification Number (DIN)",
      fees: "₹500 - ₹1,000",
      remarks: "Mandatory for director",
    },
    {
      component: "Name Approval (SPICe+ Part A)",
      fees: "₹1,000",
      remarks: "For reserving unique company name",
    },
    {
      component: "Government/ROC Fees (Incorporation)",
      fees: "₹1,000 - ₹4,000",
      remarks: "Depends on authorized capital",
    },
    {
      component: "Stamp Duty",
      fees: "Varies by state",
      remarks: "Based on authorized capital and state regulations",
    },
    {
      component: "Professional Fees (CA/CS)",
      fees: "₹6,000 - ₹15,000",
      remarks: "For documentation, filing, and consultation",
    },
    {
      component: "Total Estimated Cost",
      fees: "₹10,000 - ₹25,000",
      remarks: "Total varies based on state and professional fees",
    },
  ],
  faqs: [
    {
      q: "What is the minimum capital requirement for an OPC?",
      a: "There is no minimum capital requirement to register an OPC. You can start with ₹1,000 or even ₹10,000 as authorized capital. However, capital should be sufficient for proposed business operations.",
    },
    {
      q: "Is it mandatory to appoint a nominee for OPC? What happens if the nominee refuses later?",
      a: "Yes, appointing a nominee is mandatory at the time of incorporation. The nominee will become the OPC director if the sole director becomes incapacitated or passes away. If a nominee refuses or resigns, the OPC must appoint a new nominee within 15 days to comply with the Companies Act requirements.",
    },
    {
      q: "When does an OPC need to convert into a Private Limited Company?",
      a: "An OPC must convert into a Private Limited Company within 6 months if: (a) Paid-up share capital exceeds ₹50 lakh, OR (b) Average annual turnover exceeds ₹2 crore during any financial year. Voluntary conversion is also allowed anytime.",
    },
    {
      q: "What are the annual compliance requirements for an OPC?",
      a: "OPCs must file annual financial statements (Form AOC-4) and annual returns (Form MGT-7) with the ROC. Income tax returns must be filed annually. OPCs with turnover below ₹2 crore are exempt from audit, but maintaining proper books of accounts is mandatory. Board meetings and AGM are not required for OPCs.",
    },
    {
      q: "Can a foreign national be a director in an OPC?",
      a: "No, only a natural person who is an Indian citizen and resident in India can incorporate an OPC or become its director/nominee. Foreign nationals and NRIs are not eligible to form or manage an OPC in India.",
    },
  ],
};
