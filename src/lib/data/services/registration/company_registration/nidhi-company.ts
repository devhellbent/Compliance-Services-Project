// lib/data/services/nidhi-company.ts

import { ServiceData } from "@/lib/types";

export const nidhiCompanyData: ServiceData = {
  title: "Nidhi Company Registration",
  breadcrumb: ["Home", "Registrations", "Nidhi Company"],
  description:
    "Foster financial inclusion through mutual cooperation. Nidhi Company registration enables member-focused savings and lending operations, promoting thrift habits and providing accessible credit facilities within a regulated mutual benefit framework.",
  overview: `**Nidhi Company Registration**

A Nidhi Company is a type of Non-Banking Financial Company (NBFC) governed by Section 406 of the Companies Act, 2013 and Nidhi Rules, 2014.Its primary objective is to cultivate the habit of saving and thrift among its members and to accept deposits and lend money only to its members. Nidhi Companies operate on a mutual benefit principle and do not require RBI approval for registration, making them an attractive option for small savings and lending operations.

To register a Nidhi Company, a minimum of seven members is required, out of which three must be directors. The company must be incorporated as a Public Limited Company with "Nidhi Limited" as part of its name. The minimum paid-up share capital required is ₹10 lakhs. After incorporation, within one year, the company must have at least 200 members and a Net Owned Fund (NOF) of ₹20 lakhs.

The registration process involves obtaining Digital Signature Certificates (DSC), Director Identification Numbers (DIN), name approval through RUN (Reserve Unique Name), and filing incorporation forms with the Ministry of Corporate Affairs (MCA).

**What is Nidhi Company?**

The main objective of a **Nidhi Company** is to **promote a culture of savings and financial discipline** among a specific group of members. It works as a community-based financial institution, encouraging members to pool their resources for **mutual growth and benefit**. Governed by the **Companies Act, 2013**, and regulated by the **Ministry of Corporate Affairs (MCA)**, Nidhi Companies operate within a well-defined legal framework.

These regulations are designed to **ensure transparency, protect members' interests, and maintain financial stability**. By following the rules set by the MCA, a Nidhi Company provides a secure and reliable platform for its members to **save collectively and access affordable loans**, fostering both **trust and financial well-being** within the community. This structure makes it an effective model for small-scale savings and lending activities.`,
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
      icon: "Zap",
      title: "Ease of Formation",
      text: "Simpler and less expensive to set up than a standard NBFC as it doesn't require a high minimum capital or RBI license.",
    },
    {
      icon: "PiggyBank",
      title: "Encourages Savings",
      text: "Promotes the habit of thrift and financial discipline among members.",
    },
    {
      icon: "BadgePercent",
      title: "Low Cost of Credit",
      text: "Members can access loans at more reasonable rates compared to unorganized moneylenders.",
    },
    {
      icon: "Shield",
      title: "Limited Liability",
      text: "Members' personal assets are protected from the company's financial liabilities.",
    },
    {
      icon: "Handshake",
      title: "High Trust Level",
      text: "Since it operates within a closed group or community, the trust level between the company and its members is typically high.",
    },
    {
      icon: "RefreshCw",
      title: "Perpetual Succession",
      text: "The company continues to exist even if members or directors change.",
    },
  ],
  disadvantages: [
    {
      icon: "Ban",
      title: "Limited Business Scope",
      text: "Cannot conduct business with the public; operations are strictly limited to members only.",
    },
    {
      icon: "Lock",
      title: "Restricted Fundraising",
      text: "Cannot issue debentures or other debt instruments to anyone outside the membership.",
    },
    {
      icon: "Users",
      title: "Strict Member Requirements",
      text: "Must maintain at least 200 members and a specific Net Owned Fund to Deposits ratio (1:20) to remain compliant.",
    },
    {
      icon: "Eye",
      title: "High Regulatory Monitoring",
      text: "Subject to frequent inspections and strict reporting under the Nidhi Rules, 2014.",
    },
    {
      icon: "MegaphoneOff",
      title: "Cannot Advertise",
      text: "Prohibited from advertising for deposits or inviting the public to join.",
    },
  ],
  eligibility: [
    "Must be a public company with a minimum of seven members and three directors.",
    "Minimum paid-up equity share capital of ₹10 lakh.",
    "The name must end with 'Nidhi Limited'.",
  ],
  documents: [
    {
      tabTitle: "For Directors/Shareholders",
      content: {
        title: "For Directors/Shareholders",
        items: ["PAN Card", "Identity Proof", "Address Proof", "Photograph"],
      },
    },
    {
      tabTitle: "For Registered Office",
      content: {
        title: "For Registered Office",
        items: ["Utility Bill", "NOC from the owner"],
      },
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
