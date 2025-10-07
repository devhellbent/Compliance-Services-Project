// lib/data/services/section-8-company.ts

import { ServiceData } from "@/lib/types";

export const section8CompanyData: ServiceData = {
  title: "Section 8 Company (NGO) Registration",
  breadcrumb: ["Home", "Registrations", "Section 8 Company"],
  overview:
    "A **Section 8 Company** is a specific type of company registered for **charitable or not-for-profit purposes**. Its main objective is the promotion of commerce, art, science, sports, education, research, social welfare, religion, charity, or environmental protection. Any income or profit earned by the company must be used to promote these objects and **cannot be distributed as dividends** to its members. It's a highly credible form of an NGO, regulated by the Central Government under the **Companies Act, 2013**.",
  advantages: [
    {
      icon: "ShieldCheck",
      title: "High Credibility & Trust",
      text: "Being registered under the Companies Act gives it more credibility among donors and government bodies compared to trusts or societies.",
    },
    {
      icon: "Library",
      title: "Separate Legal Entity",
      text: "It has its own legal identity, separate from its members. It can own property, incur debts, and enter into contracts in its own name.",
    },
    {
      icon: "BadgePercent",
      title: "Tax Benefits",
      text: "Qualifies for numerous tax exemptions under the Income Tax Act, and donors can claim tax deductions under Section 80G (after registration).",
    },
    {
      icon: "Globe",
      title: "No 'Limited' Suffix",
      text: "It is not required to use 'Private Limited' or 'Limited' in its name, which enhances its non-profit image.",
    },
  ],
  disadvantages: [
    {
      icon: "Ban",
      title: "No Profit Distribution",
      text: "All profits must be reinvested into the company's objectives and cannot be distributed to the members as dividends.",
    },
    {
      icon: "FileWarning",
      title: "Strict Compliance",
      text: "Subject to all the compliance requirements of the Companies Act, including audits, board meetings, and annual filings.",
    },
    {
      icon: "Gavel",
      title: "Cannot Alter Objectives Easily",
      text: "The Memorandum of Association (MOA) and Articles of Association (AOA) cannot be altered without prior approval from the Central Government.",
    },
  ],
  eligibility: [
    {
      title: "Promoter and Director Requirements",
      items: [
        "A minimum of **two promoters/directors** for a private limited Section 8 company.",
        "A minimum of **seven promoters and three directors** for a public limited Section 8 company.",
        "The promoters/directors can be individuals or corporate bodies.",
      ],
    },
    {
      title: "Objective and Name",
      items: [
        "The main objective must be the promotion of non-profit activities.",
        "The name is often suffixed with words like Foundation, Federation, Association, Council, etc.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Directors & Members",
      content: {
        title: "Identity and Address Proof",
        items: [
          "PAN Card and Aadhaar Card of all proposed directors and members.",
          "Latest Bank Statement or Utility Bill as address proof.",
          "Digital Signature Certificate (DSC) for all directors.",
        ],
      },
    },
    {
      tabTitle: "Registered Office",
      content: {
        title: "Proof of Business Address",
        items: [
          "Latest Utility Bill of the registered office.",
          "Rent Agreement and NOC from the owner if rented.",
        ],
      },
    },
    {
      tabTitle: "License Documents",
      content: {
        title: "Documents for Section 8 License",
        items: [
          "Detailed draft of Memorandum of Association (MOA) and Articles of Association (AOA).",
          "A declaration by a professional (CA, CS, etc.) in Form INC-14.",
          "An estimate of the company's income and expenditure for the next three years.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Obtain DSC and Reserve Name",
      description:
        "Obtain DSC for all directors and apply for name reservation using the SPICe+ Part A form.",
    },
    {
      step: 2,
      title: "Apply for Section 8 License",
      description:
        "File **Form RD-1** with the Regional Director (Central Government) for the issuance of the Section 8 license. This includes submitting the draft MOA, AOA, and other declarations.",
    },
    {
      step: 3,
      title: "File for Incorporation",
      description:
        "Once the license is approved, file the **SPICe+ Part B** form for incorporation along with all other required documents.",
    },
    {
      step: 4,
      title: "Receive Certificate of Incorporation",
      description:
        "The Registrar of Companies will issue the Certificate of Incorporation along with a unique Corporate Identification Number (CIN).",
    },
  ],
  fees: [
    {
      component: "Government Fees (MCA)",
      fees: "Minimal",
      remarks:
        "The government has waived most form filing fees for Section 8 company incorporation to promote non-profits.",
    },
    {
      component: "Stamp Duty",
      fees: "Varies",
      remarks: "Applicable as per the state and authorized capital.",
    },
    {
      component: "Professional Fees",
      fees: "₹15,000 - ₹25,000",
      remarks:
        "Covers the entire two-stage process: license application (RD-1) and company incorporation (SPICe+).",
    },
  ],
  faqs: [
    {
      q: "What is the difference between a Trust, Society, and Section 8 Company?",
      a: "A Section 8 Company is registered under the Companies Act and offers the highest credibility and governance. A Trust is governed by the Indian Trusts Act and is easier to form. A Society is governed by the Societies Registration Act and is suitable for state-level operations. A Section 8 Company is generally preferred for nationwide operations and for receiving government grants.",
    },
    {
      q: "Can a Section 8 Company pay a salary to its directors?",
      a: "Yes, a Section 8 Company can pay a reasonable salary or remuneration to its directors or employees for the services they provide to the company. However, they cannot receive any share of the profits in the form of dividends.",
    },
    {
      q: "Do I need to get 12A and 80G registrations separately?",
      a: "Yes. Incorporating as a Section 8 Company only establishes it as a non-profit entity. To claim tax exemption for its own income, it must obtain a **12A registration**. To enable donors to claim tax deductions on their donations, it must obtain an **80G registration**. These are separate applications filed with the Income Tax Department.",
    },
  ],
};
