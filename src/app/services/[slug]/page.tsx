import { notFound } from "next/navigation";
import { serviceData } from "@/lib/data/services";
import { HeroWithForm } from "@/components/page-sections/HeroWithForm";
import { SubNavSections } from "@/components/SubNavSections"; // <-- new client component

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ unwrap the promise here

  const data = serviceData[slug];
  if (!data) notFound();

  return (
    <div>
      <HeroWithForm
        title={data.title}
        overview={data.overview}
        breadcrumb={data.breadcrumb}
      />
      <SubNavSections data={data} />
    </div>
  );
}
