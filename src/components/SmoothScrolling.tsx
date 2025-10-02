// components/SmoothScrolling.tsx
"use client";
import { useEffect, ReactNode } from "react";
import gsap from "gsap";
// IMPORTANT: You need to get ScrollSmoother from your Club GreenSock account
// You can either download the file, place it in your project (e.g., in a 'libs' folder), and import it like this:
// import { ScrollSmoother } from '@/libs/ScrollSmoother';
// Or install it from the private GreenSock npm registry.
// This example assumes you have it available to import.
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

interface SmoothScrollingProps {
  children: ReactNode;
}

export default function SmoothScrolling({ children }: SmoothScrollingProps) {
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
