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
  // Build a flat list of core service items from navigation, ensuring valid service slugs
  const coreServiceItems = navigationData
    .flatMap((group) =>
      (group.subCategories || []).flatMap((sub) =>
        (sub.items || []).map((item) => ({
          title: item.name,
          slug: item.slug, // expected to be /services/<service-slug>
          parent: {
            subHead: sub.subHead,
            icon: sub.icon,
          },
        }))
      )
    )
    // Filter only actual /services/ routes to avoid dead links like /registrations
    .filter(
      (it) => typeof it.slug === "string" && it.slug.startsWith("/services/")
    );

  // Select first 8 to display as core services (can be curated later)
  const highlightedServices = coreServiceItems.slice(0, 8);

  useGSAP(() => {
    // Animate the service cards on scroll
    gsap.from(".service-card", {
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.15,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: ".service-card-container",
        start: "top 80%", // Start when container reaches 80% viewport height
        toggleActions: "play none play none", // play on enter and enter-back, never reverse
        once: false, // allow re-entry to play again instead of reversing
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
            const Icon = service.parent.icon;
            return (
              <Link
                href={service.slug}
                key={`${service.slug}`}
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
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {service.parent.subHead}
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
