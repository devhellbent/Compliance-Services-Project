// lib/services.ts
import { ShieldCheck, Landmark, Briefcase, FileText, Bot } from 'lucide-react';

// You can find more icons at https://lucide.dev/icons/
export const serviceCategories = [
  {
    title: "Registrations",
    description: "Company, Trademark, GST & more. Get your business legally compliant.",
    icon: Briefcase,
    slug: "registrations"
  },
  {
    title: "MCA Compliance",
    description: "Annual filings, director changes, and all MCA-related services.",
    icon: Landmark,
    slug: "mca-compliance"
  },
  {
    title: "Taxation",
    description: "ITR Filing, GST returns, and expert tax consultation.",
    icon: FileText,
    slug: "taxation"
  },
  {
    title: "Compliance",
    description: "SEBI, Corporate Governance, and Due Diligence services.",
    icon: ShieldCheck,
    slug: "compliance"
  },
  {
    title: "Documentations",
    description: "Drafting legal documents, agreements, and contracts.",
    icon: Bot, // Just an example icon
    slug: "documentations"
  }
];