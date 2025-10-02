// components/homepage/CtaSection.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const CtaSection = () => {
  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-white">
          Ready to Start or Grow Your Business?
        </h2>
        <p className="mt-4 text-slate-300 max-w-xl mx-auto">
          Let our experts handle the complexities of legal and financial
          compliance, so you can focus on what you do best.
        </p>
        <div className="mt-8">
          <Link href="/contact">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
