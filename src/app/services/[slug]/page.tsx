// app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import { serviceData } from "@/lib/service-data";

// Import all your section components
import { HeroWithForm } from "@/components/page-sections/HeroWithForm";
import { AdvantagesDisadvantages } from "@/components/page-sections/AdvantagesDisadvantages";
import { Eligibility } from "@/components/page-sections/Eligibility";
import { DocumentsRequired } from "@/components/page-sections/DocumentsRequired";
import { RegistrationProcess } from "@/components/page-sections/RegistrationProcess";
import { FeesTable } from "@/components/page-sections/FeesTable";
import { Faq } from "@/components/page-sections/Faq";

// This function generates the page
export default function ServicePage({ params }: { params: { slug: string } }) {
  // 1. Get the current page's slug from the URL
  const slug = params.slug;

  // 2. Find the matching data in your service-data.ts file
  const data = serviceData[slug];

  // 3. If no data exists for this slug, show a 404 page
  if (!data) {
    notFound();
  }

  // 4. If data is found, render the components with that data
  return (
    <>
      {/* We pass the fetched data down to each component as props */}
      <HeroWithForm
        title={data.title}
        overview={data.overview}
        breadcrumb={data.breadcrumb}
      />

      {data.advantages && data.disadvantages && (
        <AdvantagesDisadvantages
          advantages={data.advantages}
          disadvantages={data.disadvantages}
        />
      )}

      {data.eligibility && <Eligibility criteria={data.eligibility} />}

      {data.documents && <DocumentsRequired documents={data.documents} />}

      {data.registrationProcess && (
        <RegistrationProcess steps={data.registrationProcess} />
      )}

      {data.fees && <FeesTable fees={data.fees} />}

      {data.faqs && <Faq faqs={data.faqs} />}
    </>
  );
}
