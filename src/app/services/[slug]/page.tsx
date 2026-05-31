import { notFound } from "next/navigation";
import { serviceData } from "@/lib/data/services";
import { ServicePageContent } from "@/components/ServicePageContent";
import { loadServiceAppendix } from "@/lib/documents/loadDocumentAppendix";
import { mergeAppendixExcerptIntoStubOverview } from "@/lib/documents/mergeStubServiceOverview";
import { AppendixMarkdownBlock } from "@/components/AppendixMarkdownBlock";

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

  const merged = mergeAppendixExcerptIntoStubOverview(
    data.overview,
    appendixBody || null,
    data.title
  );

  const displayData = {
    ...data,
    overview: merged.overview,
  };

  return (
    <ServicePageContent
      data={displayData}
      hasAppendix={merged.showAppendixMarkdownBelow && appendixBody.length > 0}
    >
      {merged.showAppendixMarkdownBelow && appendixBody ? (
        <AppendixMarkdownBlock markdown={appendixBody} />
      ) : null}
    </ServicePageContent>
  );
}
