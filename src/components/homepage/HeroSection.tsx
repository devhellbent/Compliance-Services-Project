// components/homepage/HeroSection.tsx
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export const HeroSection = () => {
  useGSAP(() => {
    // Animate the hero text and search bar
    gsap.from("#hero-content > *", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* ... background elements are the same ... */}
      <div className="absolute inset-0 bg-slate-900 opacity-80"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div
        id="hero-content"
        className="container mx-auto px-4 relative z-10 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Your All-in-One Platform for
          <br />
          <span className="bg-gradient-to-r from-orange-500 to-amber-400 text-transparent bg-clip-text">
            Business & Legal Compliance
          </span>
        </h1>
        <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
          From registration to taxation, we provide seamless, expert-driven
          solutions to keep your business compliant and growing.
        </p>
        <div className="mt-10 max-w-xl mx-auto flex items-center bg-white/10 border border-slate-700 rounded-full p-2 backdrop-blur-sm">
          <Search className="h-5 w-5 text-slate-400 mx-4" />
          <input
            type="text"
            placeholder="Search for services like 'GST Registration', 'Trademark', etc."
            className="w-full py-2 bg-transparent border-none focus:ring-0 text-white placeholder-slate-400"
          />
          <Button className="ml-2 flex-shrink-0 bg-orange-500 hover:bg-orange-600 rounded-full px-6">
            Search
          </Button>
        </div>
      </div>
    </section>
  );
};
