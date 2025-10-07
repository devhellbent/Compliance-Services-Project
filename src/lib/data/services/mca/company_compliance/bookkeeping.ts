// lib/data/services/bookkeeping.ts

import { ServiceData } from "@/lib/types";

export const bookkeepingData: ServiceData = {
  title: "Bookkeeping",
  breadcrumb: ["Home", "MCA", "Bookkeeping"],
  overview:
    "**Bookkeeping** is the systematic process of recording, organizing, and tracking a company's day-to-day financial transactions. 📊 It is the foundation of the entire accounting process and is crucial for maintaining accurate financial records, ensuring tax compliance, and making informed business decisions. Professional bookkeeping ensures that all your financial data is up-to-date and reliable.",
  advantages: [
    {
      icon: "FileCheck",
      title: "Accurate Financial Records",
      text: "Provides a clear and accurate picture of your business's financial health, which is essential for strategic decision-making.",
    },
    {
      icon: "Receipt",
      title: "Ensures Tax Compliance",
      text: "Properly maintained books are essential for accurate GST and Income Tax Return (ITR) filings, helping you avoid penalties.",
    },
    {
      icon: "CircleDollarSign",
      title: "Better Cash Flow Management",
      text: "Helps you track your income and expenses effectively, allowing for better budgeting and cash flow management.",
    },
    {
      icon: "Landmark",
      title: "Essential for Loans & Investment",
      text: "Organized financial records are a primary requirement for banks when applying for loans and for investors during due diligence.",
    },
  ],
  disadvantages: [
    {
      icon: "Clock",
      title: "Time-Consuming",
      text: "If done in-house without a dedicated professional, bookkeeping can be a time-consuming task that distracts from core business activities.",
    },
    {
      icon: "Calculator",
      title: "Requires Accuracy",
      text: "It requires meticulous attention to detail. Small errors can lead to inaccurate financial reports and significant problems later on.",
    },
    {
      icon: "FileWarning",
      title: "Can Be Complex",
      text: "As a business grows, managing complex transactions, GST input credits, and payroll can become very challenging without expertise.",
    },
  ],
  eligibility: [
    {
      title: "Who Needs Bookkeeping?",
      items: [
        "**Every Business**: All businesses, regardless of their size or legal structure (Proprietorship, LLP, Company), are legally required to maintain books of accounts.",
        "**Startups**: To track expenses and manage investor funds properly.",
        "**Growing Businesses**: To handle increasing transaction volumes and ensure financial control.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Documents to be Managed",
      content: {
        title: "Key Financial Documents",
        items: [
          "Bank Statements for all company accounts.",
          "Sales Invoices issued to customers.",
          "Purchase Bills from suppliers.",
          "Expense Receipts and Vouchers.",
          "Payroll records and employee salary details.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Recording Transactions",
      description:
        "Daily or weekly entry of all financial transactions (sales, purchases, payments, receipts) into accounting software like Tally, Zoho Books, or QuickBooks.",
    },
    {
      step: 2,
      title: "Bank Reconciliation",
      description:
        "Regularly matching the company's book entries with its bank statements to identify and rectify any discrepancies.",
    },
    {
      step: 3,
      title: "Managing Ledgers",
      description:
        "Maintaining ledgers for Accounts Receivable (money owed to you) and Accounts Payable (money you owe to others).",
    },
    {
      step: 4,
      title: "Preparing Financial Reports",
      description:
        "Generating key financial statements like the Profit & Loss statement, Balance Sheet, and Cash Flow Statement at the end of each month or quarter.",
    },
  ],
  fees: [
    {
      component: "Monthly Bookkeeping Services",
      fees: "₹3,000 - ₹25,000+ per month",
      remarks:
        "The cost is highly variable and depends on the volume of transactions, the complexity of the business, and the scope of services required.",
    },
  ],
  faqs: [
    {
      q: "What is the difference between bookkeeping and accounting?",
      a: "Bookkeeping is the process of recording financial transactions. Accounting is a broader process that involves interpreting, classifying, analyzing, and summarizing that financial data. Bookkeeping is the first step in the accounting process.",
    },
    {
      q: "What accounting software should I use?",
      a: "The choice depends on your business needs. Tally is very popular in India for its robust features. Cloud-based software like Zoho Books and QuickBooks are also excellent choices for their accessibility and user-friendly interfaces.",
    },
    {
      q: "Can I do my own bookkeeping?",
      a: "Yes, for a very small business with few transactions, you can manage your own bookkeeping. However, as the business grows, it is highly recommended to hire a professional to ensure accuracy and compliance.",
    },
  ],
};
