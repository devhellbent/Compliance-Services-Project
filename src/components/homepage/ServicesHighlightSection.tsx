// components/homepage/ServicesHighlightSection.tsx
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navigationData } from "@/lib/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const ServicesHighlightSection = () => {
  const highlightedServices = navigationData.slice(0, 4);

  useGSAP(() => {
    // Animate the service cards on scroll
    gsap.from(".service-card", {
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".service-card-container",
        start: "top 80%", // Start animation when the container is 80% from the top
      },
    });
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our Core Services
          </h2>
          <p className="mt-4 text-gray-600">
            End-to-end solutions for every stage of your business.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 service-card-container">
          {highlightedServices.map((service) => {
            const Icon = service.subCategories?.[0]?.icon;
            return (
              <Link
                href={service.slug}
                key={service.mainHead}
                className="group block bg-white p-8 rounded-xl border border-gray-200 hover:border-orange-500 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 service-card"
              >
                <div className="flex flex-col h-full">
                  {Icon && (
                    <div className="w-14 h-14 bg-orange-500/10 text-orange-500 rounded-lg flex items-center justify-center mb-6 border border-orange-500/20">
                      <Icon className="h-7 w-7" />
                    </div>
                  )}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.mainHead}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {service.subCategories
                        ?.map((sc) => sc.subHead)
                        .slice(0, 2)
                        .join(", ") + " & more."}
                    </p>
                  </div>
                  <div className="mt-6">
                    <span className="font-semibold text-orange-500 flex items-center text-sm">
                      Explore Services
                      <ArrowRight
                        size={16}
                        className="ml-2 transform group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
