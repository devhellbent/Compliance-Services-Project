// lib/data/services/nidhi-company.ts

import { ServiceData } from "@/lib/types";

export const nidhiCompanyData: ServiceData = {
  title: "Nidhi Company Registration",
  breadcrumb: ["Home", "Registrations", "Nidhi Company"],
  description:
    "Foster financial inclusion through mutual cooperation. Nidhi Company registration enables member-focused savings and lending operations, promoting thrift habits and providing accessible credit facilities within a regulated mutual benefit framework.",
  overview:
    "A **Nidhi Company** represents a unique category of Non-Banking Financial Company (NBFC) operating under Section 406 of the Companies Act, 2013, specifically designed to cultivate savings habits and provide mutual credit facilities exclusively among its members. This specialized financial institution functions on the fundamental principle of member cooperation, borrowing deposits from members and lending these funds back to members at reasonable interest rates, creating a self-sustaining cycle of financial support within the community. Unlike traditional NBFCs, Nidhi Companies are exempt from core provisions of the Reserve Bank of India Act, operating under simplified regulatory framework while maintaining Ministry of Corporate Affairs oversight. The structure mandates minimum 200 members and ₹10 lakh paid-up capital (increasing to ₹20 lakh within two years), ensuring adequate member base and financial stability for sustainable operations. The Net Owned Funds to Deposit ratio of 1:20 and restrictions on lending limits ensure prudent financial management and member protection. Nidhi Companies cannot issue preference shares, debentures, or any other debt instruments, maintaining focus on simple deposit-taking and lending activities that benefit members directly. The structure operates on democratic principles where each member has equal voting rights regardless of shareholding, ensuring collective decision-making and preventing concentration of control. All transactions must occur exclusively with members, with strict prohibition on accepting deposits from or lending to non-members, maintaining the mutual benefit character. The company must maintain specific nomenclature including 'Nidhi Limited' in its name, clearly identifying its specialized nature to stakeholders. This structure provides members with convenient access to credit at lower interest rates compared to traditional financial institutions, while offering attractive returns on savings deposits. The regulatory framework ensures transparency through mandatory financial audits, member meetings, and compliance reporting. Ideal for community-based financial cooperation, housing societies, professional groups, and regional associations, Nidhi Companies deliver accessible financial services while promoting financial discipline and mutual economic growth among members.",
  whyChooseUs: [
    {
      icon: "Users",
      title: "Mutual Benefit",
      text: "Operates for the mutual benefit of its members.",
    },
    {
      icon: "Banknote",
      title: "Easy Loans",
      text: "Provides loans to its members at lower interest rates.",
    },
    {
      icon: "ShieldCheck",
      title: "No RBI License",
      text: "Does not require a license from the Reserve Bank of India (RBI).",
    },
    {
      icon: "Building2",
      title: "Simple Formation",
      text: "Easy to form with a minimum of seven members and three directors.",
    },
  ],
  advantages: [
    {
      icon: "Users",
      title: "Mutual Benefit & Community Focused",
      text: "Promotes savings and provides affordable credit to members. Ideal for close-knit communities with shared financial goals.",
    },
    {
      icon: "Banknote",
      title: "Easy Access to Loans for Members",
      text: "Members can obtain loans at competitive interest rates with minimal documentation compared to banks. Loan approval is faster.",
    },
    {
      icon: "ShieldCheck",
      title: "No RBI License Required",
      text: "Exempt from RBI licensing requirements and most NBFC regulations. Only requires Nidhi Declaration from MCA after meeting conditions.",
    },
    {
      icon: "TrendingUp",
      title: "Limited Liability & Perpetual Succession",
      text: "Shareholders have limited liability. The company enjoys perpetual succession and operates as a separate legal entity.",
    },
    {
      icon: "Building2",
      title: "Simple Formation Process",
      text: "Can be incorporated as a Public Limited Company using the standard SPICe+ process. No complex NBFC licensing required initially.",
    },
  ],
  disadvantages: [
    {
      icon: "Users",
      title: "Members-Only Transactions",
      text: "Can only accept deposits from and lend to its members. Cannot deal with non-members or the general public. Restricts growth potential.",
    },
    {
      icon: "AlertTriangle",
      title: "Stringent Post-Incorporation Requirements",
      text: "Must achieve 200 members and Net Owned Fund of ₹10 lakh within one year. Failure to comply may lead to penalties or loss of Nidhi status.",
    },
    {
      icon: "Ban",
      title: "Restricted Business Activities",
      text: "Cannot issue preference shares, conduct chit fund business, engage in hire-purchase finance, insurance, or open current accounts for members.",
    },
    {
      icon: "FileText",
      title: "High Compliance Burden",
      text: "Must file regular returns with MCA (NDH-1, NDH-2, NDH-3, NDH-4), conduct statutory audits, maintain statutory registers, and comply with Nidhi Rules, 2014.",
    },
    {
      icon: "Scale",
      title: "Deposit and Lending Restrictions",
      text: "Ratio of Net Owned Fund to deposits cannot exceed 1:20. Unencumbered term deposits must be at least 10% of outstanding deposits.",
    },
  ],
  eligibility: [
    "Must be a public company with a minimum of seven members and three directors.",
    "Minimum paid-up equity share capital of ₹10 lakh.",
    "The name must end with 'Nidhi Limited'.",
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
      title: "Post-Incorporation Compliances",
      description:
        "Achieve a minimum of 200 members and a net owned fund of ₹20 lakh within one year.",
    },
  ],
  fees: [
    {
      component: "Digital Signature Certificate (DSC)",
      fees: "₹1,000 - ₹2,000",
      remarks: "Per director (minimum 3 directors required)",
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
      fees: "₹2,500 - ₹5,000",
      remarks: "For authorized capital of ₹5 lakh or more",
    },
    {
      component: "Stamp Duty",
      fees: "Varies by state",
      remarks:
        "Based on ₹5 lakh minimum authorized capital (state-specific rates apply)",
    },
    {
      component: "Professional Fees (CA/CS/Lawyer)",
      fees: "₹25,000 - ₹50,000",
      remarks:
        "Includes documentation, drafting MoA/AoA, filing, and guidance on post-incorporation compliance",
    },
    {
      component: "Total Estimated Cost",
      fees: "₹35,000 - ₹70,000",
      remarks:
        "Varies based on number of directors, state, and professional fees",
    },
  ],
  faqs: [
    {
      q: "What is the difference between a Nidhi Company and an NBFC?",
      a: "A Nidhi Company is a type of NBFC but is exempt from RBI licensing and most stringent NBFC regulations. It can only transact with its members, while other NBFCs can deal with the general public. Nidhi companies are regulated by the MCA, whereas most NBFCs are regulated by the RBI.",
    },
    {
      q: "What happens if a Nidhi Company fails to meet the post-incorporation conditions within one year?",
      a: "If a Nidhi Company fails to enroll 200 members and achieve a Net Owned Fund of ₹10 lakh within one year, it must apply for an extension by filing Form NDH-2 with the Regional Director. Failure to comply can result in penalties and the company being barred from accepting further deposits.",
    },
    {
      q: "Can a Nidhi Company open branches?",
      a: "Yes, but only after it has earned profits for three consecutive financial years. A Nidhi Company can open up to 3 branches within its district of registration. Opening more branches or branches outside the district requires prior approval from the Regional Director.",
    },
    {
      q: "What is the maximum interest rate a Nidhi Company can offer on deposits?",
      a: "The maximum interest rate a Nidhi Company can offer on fixed and recurring deposits cannot exceed the maximum rate of interest prescribed by the RBI for NBFCs. For savings accounts, the rate cannot exceed 2% above the rate offered by nationalized banks.",
    },
    {
      q: "What types of loans can a Nidhi Company provide?",
      a: "A Nidhi Company can provide secured loans to its members against gold, silver, jewelry, immovable property, and certain financial instruments like fixed deposits, NSCs, and insurance policies. Unsecured loans are strictly prohibited.",
    },
  ],
};
