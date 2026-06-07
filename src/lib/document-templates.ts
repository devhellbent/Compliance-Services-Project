// lib/document-templates.ts
// Registry of document templates used by the DocumentGenerator component.
// Add entries here to enable the document generator on a service page
// by passing the matching key as the `templateId` prop to ServicePageContent.

export interface DocumentField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "date" | "select" | "textarea";
  placeholder?: string;
  options?: string[]; // for select fields
  required?: boolean;
}

export interface DocumentTemplate {
  id: string;
  title: string;
  description?: string;
  fields: DocumentField[];
}

/**
 * Map of templateId → DocumentTemplate.
 * ServicePageContent looks up `documentTemplates[templateId]` and only
 * renders the DocumentGenerator section when a match is found.
 */
export const documentTemplates: Record<string, DocumentTemplate> = {
  // Example – uncomment and customise to activate a generator:
  // "sole-proprietorship-declaration": {
  //   id: "sole-proprietorship-declaration",
  //   title: "Sole Proprietorship Declaration",
  //   description: "Generate a ready-to-sign declaration of sole proprietorship.",
  //   fields: [
  //     { name: "ownerName",    label: "Owner Name",    type: "text",  required: true },
  //     { name: "businessName", label: "Business Name", type: "text",  required: true },
  //     { name: "date",         label: "Date",          type: "date",  required: true },
  //   ],
  // },
};
