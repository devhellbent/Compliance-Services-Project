// components/page-sections/proprietorship/AdvantagesDisadvantages.tsx

import React from "react";
import { Check, X } from "lucide-react";
import * as Icons from "lucide-react";

type AdvantageDisadvantageItem = {
  icon: React.ElementType;
  title: string;
  text: string;
};

type AdvantagesDisadvantagesProps = {
  advantages: AdvantageDisadvantageItem[];
  disadvantages: AdvantageDisadvantageItem[];
};

export const AdvantagesDisadvantages: React.FC<
  AdvantagesDisadvantagesProps
> = ({ advantages, disadvantages }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Advantages & Disadvantages
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Advantages */}
          <div>
            <h3 className="text-2xl font-semibold text-green-600 mb-6 flex items-center">
              <Check className="mr-3 bg-green-100 text-green-600 rounded-full p-1" />{" "}
              Advantages
            </h3>
            <div className="space-y-6">
              {advantages.map((item: AdvantageDisadvantageItem) => {
                const IconName = item.icon as keyof typeof Icons
                const Icon = Icons[IconName];
                return (
                  <div key={item.title} className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mr-4">
                       <Icon />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Disadvantages */}
          <div>
            <h3 className="text-2xl font-semibold text-red-600 mb-6 flex items-center">
              <X className="mr-3 bg-red-100 text-red-600 rounded-full p-1" />{" "}
              Disadvantages
            </h3>
            <div className="space-y-6">
              {disadvantages.map((item: AdvantageDisadvantageItem) => {
                const IconName = item.icon as keyof typeof Icons
                const Icon = Icons[IconName];
                return (
                  <div key={item.title} className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mr-4">
                      <Icon />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
