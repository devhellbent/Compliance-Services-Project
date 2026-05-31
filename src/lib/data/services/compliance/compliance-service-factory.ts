import { ServiceData } from "@/lib/types";
import { createPlaceholderServiceData } from "../_template";

type ComplianceSubCategory =
  | "SEBI Compliance"
  | "Audit & Due Diligence"
  | "Corporate Restructuring Compliance";

type BuildComplianceServiceDataInput = {
  title: string;
  subCategory: ComplianceSubCategory;
  overview: string;
  description?: string;
} & Partial<
  Pick<
    ServiceData,
    | "advantages"
    | "disadvantages"
    | "eligibility"
    | "documents"
    | "registrationProcess"
    | "fees"
    | "faqs"
    | "whyChooseUs"
  >
>;

/** Builds a compliance child page; pass advantages/disadvantages/etc. to replace placeholder sections. */
export function buildComplianceServiceData(
  opts: BuildComplianceServiceDataInput
): ServiceData {
  const {
    title,
    subCategory,
    overview,
    description: optsDescription,
    advantages,
    disadvantages,
    eligibility,
    documents,
    registrationProcess,
    fees,
    faqs,
    whyChooseUs,
  } = opts;

  const base = createPlaceholderServiceData(
    title,
    ["Home", "Compliance", subCategory, title],
    optsDescription ?? title
  );

  const description =
    optsDescription ??
    overview.replace(/\*\*/g, "").split(/\n\n/)[0]?.slice(0, 280) ??
    title;

  return {
    ...base,
    description,
    overview,
    ...(advantages !== undefined && { advantages }),
    ...(disadvantages !== undefined && { disadvantages }),
    ...(eligibility !== undefined && { eligibility }),
    ...(documents !== undefined && { documents }),
    ...(registrationProcess !== undefined && { registrationProcess }),
    ...(fees !== undefined && { fees }),
    ...(faqs !== undefined && { faqs }),
    ...(whyChooseUs !== undefined && { whyChooseUs }),
  };
}
