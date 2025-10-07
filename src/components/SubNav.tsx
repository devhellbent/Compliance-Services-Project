"use client";

import { useState } from "react";

interface SubNavProps {
  sections: string[];
  onSelect: (section: string) => void;
}

export function SubNav({ sections, onSelect }: SubNavProps) {
  const [active, setActive] = useState(sections[0]);

  const handleClick = (section: string) => {
    setActive(section);
    onSelect(section);
  };

  return (
    <div className="sticky top-0 z-40 bg-white border-b shadow-sm">
      <div className="flex gap-6 px-6 py-3 overflow-x-auto whitespace-nowrap">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => handleClick(section)}
            className={`pb-2 border-b-2 transition-all ${
              active === section
                ? "border-blue-600 text-blue-600 font-semibold"
                : "border-transparent text-gray-600 hover:text-blue-600"
            }`}
          >
            {section}
          </button>
        ))}
      </div>
    </div>
  );
}
