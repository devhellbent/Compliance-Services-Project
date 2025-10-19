// components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { navigationData } from "@/lib/navigation";
import { Button } from "./ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [hoveredNavIndex, setHoveredNavIndex] = useState<number | null>(null);
  const [activeSubCategoryIndex, setActiveSubCategoryIndex] = useState(0);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleMobileLinkClick = () => setIsMobileMenuOpen(false);

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.98, y: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      y: -10,
      transition: { duration: 0.15 },
    },
  };

  const activeNavData =
    hoveredNavIndex !== null ? navigationData[hoveredNavIndex] : null;

  return (
    // THEME UPDATE: Changed to dark theme to match footer
    <header className="bg-slate-900 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        {/* THEME UPDATE: Changed text colors for dark background */}
        <Link href="/" className="text-2xl font-bold text-white">
          Bharat<span className="text-orange-500">Filings</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center h-full relative"
          onMouseLeave={() => setHoveredNavIndex(null)}
        >
          {navigationData.map((mainItem, index) => (
            <div
              key={mainItem.mainHead}
              className="h-full flex items-center"
              onMouseEnter={() => {
                setHoveredNavIndex(index);
                setActiveSubCategoryIndex(0);
              }}
            >
              {/* THEME UPDATE: Changed text and hover colors */}
              <Link
                href={""}
                className="flex items-center px-4 h-full text-sm font-semibold text-slate-300 hover:text-orange-500 transition-colors"
              >
                <span>{mainItem.mainHead}</span>
                {mainItem.subCategories &&
                  mainItem.subCategories.length > 0 && (
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform ${
                        hoveredNavIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
              </Link>
            </div>
          ))}

          {/* Single Shared Mega Menu Dropdown (Remains Light Themed for Readability) */}
          <AnimatePresence>
            {activeNavData?.subCategories &&
              activeNavData.subCategories.length > 0 && (
                <motion.div
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[58rem] h-[26rem] max-w-none bg-white rounded-lg shadow-2xl flex"
                >
                  {/* Left Panel */}
                  <div className="w-64 bg-slate-50 rounded-l-lg p-3 border-r flex-shrink-0">
                    {activeNavData.subCategories.map((subCategory, index) => (
                      <button
                        key={subCategory.subHead}
                        onMouseEnter={() => setActiveSubCategoryIndex(index)}
                        className={`w-full text-left text-sm font-medium p-3 rounded-md transition-colors ${
                          activeSubCategoryIndex === index
                            ? "bg-orange-500 text-white shadow"
                            : "text-gray-700 hover:bg-slate-200"
                        }`}
                      >
                        {subCategory.subHead}
                      </button>
                    ))}
                  </div>

                  {/* Right Panel */}
                  <div className="flex-1 p-6 overflow-y-auto">
                    {activeNavData.subCategories[activeSubCategoryIndex] && (
                      <div className="grid grid-cols-3 gap-x-6 gap-y-2">
                        {activeNavData.subCategories[
                          activeSubCategoryIndex
                        ].items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.slug}
                            className="block text-sm text-gray-600 hover:text-orange-600 p-2 min-h-[2.5rem] rounded hover:bg-slate-50"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
          </AnimatePresence>
        </nav>

        <div className="hidden lg:block">
          {/* THEME UPDATE: Changed button to accent orange color */}
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          {/* THEME UPDATE: Changed icon color for dark background */}
          <button
            onClick={toggleMobileMenu}
            aria-label="Open menu"
            className="text-slate-300 hover:text-white"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel (Remains Light Themed) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 p-4 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <Link
              href="/"
              onClick={handleMobileLinkClick}
              className="text-2xl font-bold text-gray-800"
            >
              Bharat<span className="text-orange-500">Filings</span>
            </Link>
            <button onClick={toggleMobileMenu} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-2">
            {navigationData.map((mainItem) => (
              <div key={mainItem.mainHead} className="border-b">
                {mainItem.subCategories && mainItem.subCategories.length > 0 ? (
                  <details className="group">
                    <summary className="flex justify-between items-center font-semibold cursor-pointer py-3 list-none">
                      <span>{mainItem.mainHead}</span>
                      <ChevronDown
                        size={20}
                        className="group-open:rotate-180 transition-transform"
                      />
                    </summary>
                    <div className="pl-4 pb-2 flex flex-col space-y-2">
                      {mainItem.subCategories.map((subCategory) => (
                        <Link
                          href={subCategory.slug}
                          key={subCategory.subHead}
                          onClick={handleMobileLinkClick}
                          className="text-gray-700 hover:text-orange-600 py-1"
                        >
                          {subCategory.subHead}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={mainItem.slug}
                    onClick={handleMobileLinkClick}
                    className="font-semibold py-3 block"
                  >
                    {mainItem.mainHead}
                  </Link>
                )}
              </div>
            ))}
            <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white">
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
