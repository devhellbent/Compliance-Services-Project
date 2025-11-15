"use client";

interface SubNavProps {
  sections: string[];
  activeSection: string;
  onSelect: (section: string) => void;
}

export function SubNav({ sections, activeSection, onSelect }: SubNavProps) {
  return (
    <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-sm border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-8 overflow-x-auto py-3">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => onSelect(section)}
              className={`relative whitespace-nowrap px-1 py-2 text-sm font-medium transition-colors duration-200
                ${
                  activeSection === section
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-gray-900"
                }`}
            >
              {section}
              {activeSection === section && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
