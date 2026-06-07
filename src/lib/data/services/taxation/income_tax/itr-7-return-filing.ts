import { ServiceData } from "@/lib/types";

export const itr7ReturnFilingData: ServiceData = {
  title: "ITR-7 Return Filing",
  breadcrumb: ["Home", "Taxation", "Income Tax", "ITR-7 Return Filing"],
  description:
    "ITR-7 is a specialized income tax return for charitable/religious trusts, political parties, scientific research associations, and educational institutions claiming tax exemptions.",
  overview: `ITR-7 is a specialized income tax return for entities claiming exemptions as charitable or religious trusts, political parties, scientific research associations, and educational institutions. Unlike other forms, its primary purpose is to demonstrate that the organization's income was "applied" toward its stated goals. For AY 2026-27, it remains essential for maintaining tax-exempt status; failing to file can result in the entire income being taxed at the maximum marginal rate of 30%.

The form requires detailed reporting of voluntary contributions, foreign funding (FCRA), and fund utilization. Under Budget 2026, the deadline for non-audit cases has been extended to August 31, 2026, while those requiring an audit must submit their audit report (Form 10B/10BB) by September 30 and the ITR by October 31.

### Key Features for 2026
- **Mandatory Electronic Filing:** ITR-7 must be filed online.
- **Audit Integration:** Form 10B/10BB must be filed at least one month before the ITR-7 deadline.
- **DSC for Political Parties:** Must verify using a Digital Signature Certificate.
- **Detailed Disclosures:** Foreign contributions (FCRA), voluntary donations, and fund application details.`,
  advantages: [
    { icon: "ShieldCheck", title: "Retention of Tax-Exempt Status", text: "100% tax exemption on income under Sections 11 & 12 for trusts (if applied for charitable purposes) and Section 13A for political parties (if filed on time)." },
    { icon: "PiggyBank", title: "Accumulation of Income", text: "Trusts can accumulate up to 15% of income indefinitely without tax. Under Section 11(2), even more can be set aside for up to 5 years for specific projects by filing Form 10." },
    { icon: "Landmark", title: "Eligibility for Government Grants & CSR Funds", text: "Filing ITR-7 provides verified financial history as a prerequisite for grant applications. Consistent filing encourages donors who can claim Section 80G deductions." },
    { icon: "Globe", title: "FCRA Compliance (Foreign Funding)", text: "Mandatory for organizations receiving foreign donations, helping reconcile local and foreign receipts and preventing legal issues with the Ministry of Home Affairs." },
    { icon: "Eye", title: "Transparency & Financial Discipline", text: "Detailed fund utilization reporting prevents misuse of funds and protects trustees from personal legal liabilities." },
  ],
  disadvantages: [
    { icon: "AlertTriangle", title: "85% Application Requirement", text: "Entity must 'apply' (spend) at least 85% of income on stated objectives within the financial year to maintain tax-free status." },
    { icon: "FileWarning", title: "Complex Compliance", text: "Requires detailed reporting of all donations, foreign contributions, and how every rupee was utilized." },
    { icon: "Clock", title: "Strict Audit Deadlines", text: "Audit report (Form 10B/10BB) must be filed one month before the ITR deadline, requiring early preparation." },
  ],
  eligibility: [
    {
      title: "Mandatory Filing Categories",
      items: [
        "**Charitable & Religious Trusts (Section 139(4A)):** Entities claiming exemptions under Sections 11 and 12.",
        "**Political Parties (Section 139(4B)):** Mandatory if total income (before Section 13A exemptions) exceeds basic exemption limit.",
        "**Scientific & Research Institutions (Section 139(4C)):** Scientific research associations and news agencies.",
        "**Educational & Medical Institutions (Section 139(4D)):** Universities, colleges, schools, and hospitals.",
        "**Business Trusts & Investment Funds (Section 139(4E) & (4F)):** REITs, InvITs, and AIFs.",
      ],
    },
    {
      title: "Income & Exemption Criteria",
      items: [
        "**No Minimum Income for Trusts:** Registered under Section 12A/12AB must file even if total income is zero.",
        "**The 85% Rule:** Must apply at least 85% of income on stated objectives within the financial year.",
      ],
    },
    {
      title: "Who Cannot File ITR-7?",
      items: [
        "**Standard Businesses:** Entities operating purely for profit (use ITR-5 or ITR-6).",
        "**Individuals/HUFs:** Standard taxpayers not running a registered trust (use ITR-1 to ITR-4).",
        "**Unregistered NGOs:** Without Section 12A/12AB or Section 10(23C) registration.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Registration Documents",
      content: {
        title: "Registration & Identification Documents",
        items: [
          "**Trust Deed / Bye-laws:** To verify objects and names of trustees.",
          "**12A/12AB Registration:** Unique registration number (URN) from the Income Tax Department.",
          "**80G Certificate:** If approved to provide tax deductions to donors.",
          "**FCRA Registration:** Mandatory if receiving foreign contributions.",
          "**PAN of the Entity:** Trust, Society, or Political Party PAN.",
        ],
      },
    },
    {
      tabTitle: "Audit Reports",
      content: {
        title: "Mandatory Audit Reports",
        items: [
          "**Form 10B / 10BB:** Specific audit report for charitable trusts/institutions. Must be filed 1 month before ITR deadline.",
          "**UDIN:** Unique Document Identification Number generated by the CA for the audit report.",
        ],
      },
    },
    {
      tabTitle: "Financial Statements",
      content: {
        title: "Financial Statements & Registers",
        items: [
          "**Audited Balance Sheet & P&L:** Specifically the Income and Expenditure Account.",
          "**Donation Register:** Detailed donor list including Names, Addresses, PANs, and Aadhaar numbers.",
          "**Section 11(5) Investment Records:** Proof of funds invested in government-approved modes.",
          "**Utilization Records:** Evidence of how 85% of income was applied to charitable activities.",
        ],
      },
    },
    {
      tabTitle: "Tax Reconciliation",
      content: {
        title: "Tax Reconciliations",
        items: [
          "**Form 26AS & AIS:** To match TDS deducted by banks or donors against books.",
          "**GST Returns:** If the entity has a GST registration (common for hospitals or schools).",
        ],
      },
    },
  ],
  registrationProcess: [
    { step: 1, title: "Login to e-Filing Portal", description: "Use the entity's PAN credentials at incometax.gov.in." },
    { step: 2, title: "File Audit Report First", description: "Submit Form 10B/10BB at least one month before the ITR deadline." },
    { step: 3, title: "Select ITR-7", description: "Navigate to e-File > Income Tax Returns and select ITR-7." },
    { step: 4, title: "Enter Income & Application", description: "Report voluntary contributions, FCRA details, and how funds were applied (85% rule)." },
    { step: 5, title: "Disclose Investments & Accumulation", description: "Report Section 11(5) investments and any income accumulated under Section 11(2)." },
    { step: 6, title: "Submit & Verify", description: "Submit and verify via DSC (mandatory for political parties) or Aadhaar OTP/EVC for others." },
  ],
  fees: [
    { component: "Government Filing Fee", fees: "NIL", remarks: "Free on the portal. Deadline: Oct 31 (audit), Aug 31 (non-audit)." },
    { component: "Late Fee (Income ≤ ₹5 Lakh)", fees: "₹1,000", remarks: "Under Section 234F." },
    { component: "Late Fee (Income > ₹5 Lakh)", fees: "₹5,000", remarks: "Under Section 234F." },
    { component: "Basic Trust (Non-Audit)", fees: "₹5,000 – ₹12,000", remarks: "Professional CA fees." },
    { component: "Trust/NGO with Audit", fees: "₹15,000 – ₹45,000", remarks: "Includes statutory audit and ITR filing." },
    { component: "Political Parties", fees: "₹25,000 – ₹75,000+", remarks: "Depends on volume of contributions and branches." },
    { component: "Class 3 DSC", fees: "₹1,500 – ₹2,500", remarks: "2-year validity. Mandatory for political parties." },
  ],
  faqs: [
    { q: "Who should file ITR-7?", a: "Charitable/religious trusts, political parties, scientific research associations, educational institutions, and entities claiming Section 11 exemptions." },
    { q: "What happens if a trust doesn't file ITR-7?", a: "The entire income can be taxed at the maximum marginal rate of 30%, and the trust may lose its tax-exempt registration." },
    { q: "What is the 85% application rule?", a: "Trusts must spend at least 85% of their annual income on their stated charitable objectives to maintain tax exemption." },
    { q: "Is DSC mandatory for ITR-7?", a: "DSC is mandatory for political parties. Other entities can use Aadhaar OTP or EVC for verification." },
  ],
};
