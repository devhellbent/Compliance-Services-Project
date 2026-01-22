// lib/types.ts

// Define the structure for individual items like advantages, documents, etc.
export type AdvantageDisadvantageItem = {
  icon: string;
  title: string;
  text: string;
  subPoints?: string[];
};

export type EligibilityCriterion = {
  title: string;
  items: string[];
};

export type DocumentContent = {
  title: string;
  items: string[];
};

export type SimpleDocument = {
  title: string;
  items: string[];
};

export type DocumentTab = {
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
  description?: string;
  overview: string;
  whyChooseUs?: AdvantageDisadvantageItem[];
  advantages: AdvantageDisadvantageItem[];
  disadvantages: AdvantageDisadvantageItem[];
  eligibility: (EligibilityCriterion | string)[];
  documents: (DocumentTab | SimpleDocument)[];
  registrationProcess: RegistrationStep[];
  fees: Fee[];
  faqs: FaqItem[];
  typesOfPartnership?: {
    title: string;
    description: string;
    types: {
      title: string;
      description: string;
      keyFeatures: string[];
    }[];
  };
  comparison?: {
    title: string;
    headers: string[];
    rows: {
      feature: string;
      registered: string;
      unregistered: string;
    }[];
  };
}
