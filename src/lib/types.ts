// lib/types.ts

// Define the structure for individual items like advantages, documents, etc.
type AdvantageDisadvantageItem = {
  icon: string;
  title: string;
  text: string;
};

type EligibilityCriterion = {
  title: string;
  items: string[];
};

type DocumentContent = {
  title: string;
  items: string[];
};

type DocumentTab = {
  tabTitle: string;
  content: DocumentContent;
};

type RegistrationStep = {
  step: number | string;
  title: string;
  description: string;
};

type Fee = {
  component: string;
  fees: string | number;
  remarks: string;
};

type FaqItem = {
  q: string;
  a: string;
};

// Define the main structure for a single service's data
export interface ServiceData {
  title: string;
  breadcrumb: string[];
  overview: string;
  advantages: AdvantageDisadvantageItem[];
  disadvantages: AdvantageDisadvantageItem[];
  eligibility: EligibilityCriterion[];
  documents: DocumentTab[];
  registrationProcess: RegistrationStep[];
  fees: Fee[];
  faqs: FaqItem[];
}
