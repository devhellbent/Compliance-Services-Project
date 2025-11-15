// lib/data/services/society-registration.ts

import { ServiceData } from "@/lib/types";

export const societyRegistrationData: ServiceData = {
  title: "Society Registration (NGO)",
  breadcrumb: ["Home", "Registrations", "Society Registration"],
  description:
    "Build lasting social impact through collective action. Society registration establishes membership-based non-profit organizations for charitable, literary, scientific, and artistic pursuits, creating democratic platforms for community-driven change and social welfare initiatives.",
  overview:
    "A **Society** represents a democratic, membership-based non-profit organization established under the Societies Registration Act, 1860, bringing together individuals united by common objectives in charitable work, promotion of literature, science, fine arts, or provision of social services and community welfare. This time-tested legal structure requires minimum seven founding members who voluntarily associate to pursue non-commercial goals through collective action and democratic governance. The governing body, typically comprising a president, secretary, treasurer, and executive committee members, is elected by the general membership through democratic voting processes, ensuring participatory decision-making and accountability to members. Societies operate on principles of transparency, with mandatory maintenance of member registers, minute books, and annual general meetings where members exercise voting rights on key organizational matters including amendments to rules, approval of accounts, and election of office bearers. The registration process involves submission of memorandum of association outlining objectives, rules and regulations governing operations, and list of governing body members to the Registrar of Societies under state-specific legislation. Once registered, the society obtains a separate legal identity distinct from its members, enabling it to own property, enter contracts, receive grants and donations, open bank accounts, and sue or be sued in its own name. The structure offers significant flexibility in adding or removing members, conducting various charitable activities, and adapting to evolving social needs through amendments in rules and regulations. Registered societies enjoy tax benefits under Section 12A and 80G of the Income Tax Act upon obtaining approval, enabling donors to claim tax deductions and enhancing fundraising capabilities. The membership-driven model fosters community participation, volunteer engagement, and grassroots mobilization for social causes. Societies can receive foreign contributions after obtaining FCRA registration, access government grants and CSR funding, and establish multiple branches across geographies. Lower compliance requirements compared to Section 8 Companies make societies accessible for community groups, educational institutions, cultural organizations, sports clubs, and local welfare associations. The democratic governance structure ensures collective ownership of the mission while preventing concentration of power. Ideal for community-based organizations, educational trusts, cultural associations, social welfare groups, sports clubs, and grassroots NGOs, Society registration delivers a robust framework for organized social action, community development, and sustainable impact creation through collective effort.",
  whyChooseUs: [
    {
      icon: "Users",
      title: "Democratic Structure",
      text: "Managed by a governing body elected by its members.",
    },
    {
      icon: "Library",
      title: "Separate Legal Identity",
      text: "A registered society is a legal entity distinct from its members.",
    },
    {
      icon: "FileSignature",
      title: "Easy Formation",
      text: "The registration process is less complex and more cost-effective.",
    },
    {
      icon: "BadgePercent",
      title: "Tax Exemption",
      text: "Eligible for tax benefits under Sections 12A and 80G.",
    },
  ],
  advantages: [
    {
      icon: "Users",
      title: "Democratic Structure",
      text: "Management is handled by a governing body elected by the members in an annual general meeting, ensuring democratic governance.",
    },
    {
      icon: "Library",
      title: "Separate Legal Identity",
      text: "A registered society is a legal entity distinct from its members. It can own property, enter into contracts, and sue or be sued.",
    },
    {
      icon: "FileSignature",
      title: "Easy Formation",
      text: "The registration process is generally less complex and more cost-effective than that of a Section 8 Company.",
    },
    {
      icon: "BadgePercent",
      title: "Tax Exemption",
      text: "Like other NGOs, a registered society can apply for 12A and 80G registrations to avail of income tax exemptions.",
    },
  ],
  disadvantages: [
    {
      icon: "Vote",
      title: "Potential for Management Conflicts",
      text: "The democratic election process can sometimes lead to internal politics and disputes among members for control.",
    },
    {
      icon: "Gavel",
      title: "State-Level Governance",
      text: "Regulations can vary from state to state, as each has its own version of the Societies Registration Act.",
    },
    {
      icon: "FileWarning",
      title: "Perceived Lower Credibility",
      text: "For large corporate or government grants, Section 8 companies are often seen as more credible due to stricter compliance under the MCA.",
    },
  ],
  eligibility: [
    "A minimum of seven members are required.",
    "The society's objectives must be for charitable or promotional purposes.",
  ],
  documents: [
    {
      title: "Core Documents",
      items: ["Memorandum of Association (MOA)", "Rules & Regulations"],
    },
    {
      title: "Member & Office Proof",
      items: [
        "PAN Card and ID proof of members",
        "Address proof of the registered office",
      ],
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Choose a Unique Name",
      description: "Select a unique name for the society.",
    },
    {
      step: 2,
      title: "Draft MOA and Rules",
      description:
        "Prepare the Memorandum of Association and Rules & Regulations.",
    },
    {
      step: 3,
      title: "File Application",
      description: "Submit the application to the Registrar of Societies.",
    },
  ],
  fees: [
    {
      component: "Registration Fee",
      fees: "₹50 - ₹1,000",
      remarks:
        "This is a nominal government fee that varies significantly from state to state.",
    },
    {
      component: "Documentation & Notary",
      fees: "₹1,000 - ₹3,000",
      remarks: "Includes costs for stamp paper, affidavits, and notarization.",
    },
    {
      component: "Professional Fees",
      fees: "₹8,000 - ₹15,000",
      remarks:
        "Covers drafting of the MOA and Rules, and complete filing assistance.",
    },
  ],
  faqs: [
    {
      q: "How is a Society different from a Trust?",
      a: "A Society is a membership-based body with democratic governance through an elected committee. A Trust is managed by a board of trustees and does not have a democratic membership structure. Societies are generally easier to manage for membership-driven organizations.",
    },
    {
      q: "Who manages the day-to-day affairs of a Society?",
      a: "The day-to-day management is handled by a Governing Body or Managing Committee, which is elected by the society's members during the Annual General Meeting (AGM).",
    },
    {
      q: "Can the objectives of a Society be changed after registration?",
      a: "Yes, the objectives and rules can be changed. However, it requires a special resolution to be passed by the members according to the procedure laid down in the society's bylaws and the relevant Societies Registration Act.",
    },
  ],
};
