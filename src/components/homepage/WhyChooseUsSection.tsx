// components/homepage/WhyChooseUsSection.tsx
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Clock, ShieldCheck, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <Zap />,
      title: "Fast & Efficient Process",
      text: "Get your registrations and filings done in record time with our streamlined online platform.",
    },
    {
      icon: <Users />,
      title: "Expert Team",
      text: "Our team of CAs, CSs, and lawyers are here to provide you with expert guidance.",
    },
    {
      icon: <ShieldCheck />,
      title: "Data Security",
      text: "We use industry-standard encryption to keep your sensitive information secure.",
    },
    {
      icon: <Clock />,
      title: "24/7 Support",
      text: "Our support team is available around the clock to assist you with any queries.",
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#why-us-section",
        start: "top 70%",
      },
    });

    tl.from("#why-us-content > *", {
      opacity: 0,
      x: -50,
      stagger: 0.2,
      duration: 0.8,
    }).from(
      "#why-us-image",
      {
        opacity: 0,
        x: 50,
        duration: 0.8,
      },
      "-=0.5"
    ); // Start this animation slightly before the previous one finishes
  }, []);

  return (
    <section id="why-us-section" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        <div id="why-us-content">
          <h2 className="text-3xl font-extrabold text-white">
            Why Choose BharatFilings?
          </h2>
          <p className="mt-4 text-slate-300">
            We are committed to providing a service that is not just reliable,
            but also transparent, affordable, and incredibly easy to use.
          </p>
          <div className="mt-10 space-y-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 text-orange-500 rounded-lg flex items-center justify-center border border-orange-500/20">
                  {feature.icon}
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-white">
                    {feature.title}
                  </h4>
                  <p className="mt-1 text-slate-400 text-sm">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          id="why-us-image"
          className="flex justify-center items-center"
        ></div>
      </div>
    </section>
  );
};
