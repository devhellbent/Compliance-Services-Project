"use client";

import { useState } from "react";
import { DocumentTemplate } from "@/lib/document-templates";
import { FileText, Download, Loader2 } from "lucide-react";

interface DocumentGeneratorProps {
  template: DocumentTemplate;
}

/**
 * DocumentGenerator
 *
 * Renders a form based on a DocumentTemplate's field definitions and
 * produces a simple text preview that the user can copy or download.
 * Extend this component to integrate a real PDF/DOCX generation service.
 */
export function DocumentGenerator({ template }: DocumentGeneratorProps) {
  const initialValues = Object.fromEntries(
    template.fields.map((f) => [f.name, ""])
  );

  const [values, setValues] = useState<Record<string, string>>(initialValues);
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setGenerated(false);
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async generation (replace with real API call or PDF logic)
    setTimeout(() => {
      setLoading(false);
      setGenerated(true);
    }, 800);
  };

  const handleDownload = () => {
    const lines = template.fields.map(
      (f) => `${f.label}: ${values[f.name] || "—"}`
    );
    const content = `${template.title}\n${"=".repeat(template.title.length)}\n\n${lines.join("\n")}`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${template.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {template.description && (
        <p className="text-gray-600 text-sm">{template.description}</p>
      )}

      <form onSubmit={handleGenerate} className="space-y-4">
        {template.fields.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>

            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                value={values[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required={field.required}
                rows={3}
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition resize-none text-sm"
              />
            ) : field.type === "select" ? (
              <select
                id={field.name}
                name={field.name}
                value={values[field.name]}
                onChange={handleChange}
                required={field.required}
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition text-sm bg-white"
              >
                <option value="">Select…</option>
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={values[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required={field.required}
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition text-sm"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-2.5 px-6 rounded-xl hover:from-orange-600 hover:to-orange-700 transition duration-300 shadow-md disabled:opacity-60"
        >
          {loading ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <FileText size={18} />
          )}
          {loading ? "Generating…" : "Generate Document"}
        </button>
      </form>

      {generated && (
        <div className="rounded-xl border border-orange-200 bg-orange-50 p-5 space-y-3">
          <p className="text-sm font-semibold text-orange-700 flex items-center gap-2">
            <FileText size={16} />
            Document Preview
          </p>
          <ul className="text-sm text-gray-700 space-y-1">
            {template.fields.map((f) => (
              <li key={f.name}>
                <span className="font-medium">{f.label}:</span>{" "}
                {values[f.name] || "—"}
              </li>
            ))}
          </ul>
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition"
          >
            <Download size={16} />
            Download as .txt
          </button>
        </div>
      )}
    </div>
  );
}
