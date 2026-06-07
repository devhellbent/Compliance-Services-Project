// Always revalidate — ensures updated documentation markdown files are served
// immediately after a new build without stale ISR cache.
export const revalidate = 0;
export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { serviceData } from "@/lib/data/services";
import { ServicePageContent } from "@/components/ServicePageContent";
import { loadServiceAppendix } from "@/lib/documents/loadDocumentAppendix";
import { mergeAppendixExcerptIntoStubOverview } from "@/lib/documents/mergeStubServiceOverview";
import { AppendixMarkdownBlock } from "@/components/AppendixMarkdownBlock";
import { documentTemplates } from "@/lib/document-templates";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = serviceData[slug as keyof typeof serviceData];
  if (!data) notFound();

  const appendixMarkdown = await loadServiceAppendix(slug);
  const appendixBody = appendixMarkdown?.trim() ?? "";

  // Build combined text from all structured sections for overlap detection
  const fullStructuredText = [
    data.overview,
    ...(data.advantages ?? []).map((a) => `${a.title} ${a.text}`),
    ...(data.disadvantages ?? []).map((d) => `${d.title} ${d.text}`),
    ...(data.eligibility ?? []).flatMap((e) =>
      typeof e === "string" ? [e] : [e.title, ...e.items]
    ),
    ...(data.documents ?? []).flatMap((d) =>
      "tabTitle" in d
        ? [d.tabTitle, d.content.title, ...d.content.items]
        : [d.title, ...d.items]
    ),
    ...(data.faqs ?? []).flatMap((f) => [f.q, f.a]),
    data.feesMarkdown ?? "",
    ...(data.fees ?? []).map(
      (f) => `${f.component} ${f.fees} ${f.remarks ?? ""}`
    ),
  ].join("\n");

  // Detect pages with fully populated structured sections
  const hasRichStructuredData =
    (data.advantages?.length ?? 0) > 0 &&
    (data.eligibility?.length ?? 0) > 0 &&
    (data.documents?.length ?? 0) > 0;

  const merged = mergeAppendixExcerptIntoStubOverview(
    data.overview,
    appendixBody || null,
    data.title,
    fullStructuredText,
    hasRichStructuredData
  );

  const displayData = {
    ...data,
    overview: merged.overview,
  };

  return (
    <ServicePageContent
      data={displayData}
      hasAppendix={merged.showAppendixMarkdownBelow && appendixBody.length > 0}
      templateId={slug}
    >
      {merged.showAppendixMarkdownBelow && appendixBody ? (
        <AppendixMarkdownBlock markdown={appendixBody} />
      ) : null}
    </ServicePageContent>
  );
}
