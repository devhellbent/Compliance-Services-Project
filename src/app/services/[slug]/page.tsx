import { notFound } from "next/navigation";
import { serviceData } from "@/lib/data/services";
import { ServicePageContent } from "@/components/ServicePageContent";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = serviceData[slug as keyof typeof serviceData];
  if (!data) notFound();

  return <ServicePageContent data={data} />;
}
