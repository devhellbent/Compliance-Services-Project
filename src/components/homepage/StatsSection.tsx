// src/components/homepage/StatsSection.tsx
"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StatItem = ({ to, label }: { to: number; label: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);

  // FIX: Added 'label' to the dependency array.
  // The animation's onUpdate callback uses the 'label' prop, so it must be listed as a dependency.
  useGSAP(() => {
    const counter = { value: 0 };
    gsap.to(counter, {
      value: to,
      duration: 2,
      ease: "power1.out",
      onUpdate: () => {
        if (ref.current) {
          // Added a check for ref.current to be safe
          ref.current.textContent = `${Math.round(
            counter.value
          ).toLocaleString()}${label.includes("Satisfaction") ? "%" : "+"}`;
        }
      },
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, [to, label]); // The dependency array must include all props/state used inside the effect.

  return (
    <div className="text-center">
      <p
        ref={ref}
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-amber-400 text-transparent bg-clip-text"
      >
        0+
      </p>
      <p className="mt-2 text-sm text-slate-300 uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
};

export const StatsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem to={10000} label="Happy Clients" />
          <StatItem to={15000} label="Registrations Done" />
          <StatItem to={98} label="Customer Satisfaction" />
          <StatItem to={25} label="Cities Served" />
        </div>
      </div>
    </section>
  );
};
