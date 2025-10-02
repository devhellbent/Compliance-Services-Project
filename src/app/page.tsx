// app/page.tsx
import { HeroSection } from '@/components/homepage/HeroSection';
import { ClientsSection } from '@/components/homepage/ClientsSection';
import { ServicesHighlightSection } from '@/components/homepage/ServicesHighlightSection';
import { WhyChooseUsSection } from '@/components/homepage/WhyChooseUsSection';
import { StatsSection } from '@/components/homepage/StatsSection';
import { CtaSection } from '@/components/homepage/CtaSection';

export default function Home() {
  return (
    <div className="bg-slate-900 text-white">
      <HeroSection />
      <ClientsSection />
      <ServicesHighlightSection />
      <WhyChooseUsSection />
      <StatsSection />
      <CtaSection />
    </div>
  );
}