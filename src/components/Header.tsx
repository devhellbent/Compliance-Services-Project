// components/Header.tsx
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { navigationData } from "@/lib/navigation";
import { Button } from "./ui/button";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const [hoveredNavIndex, setHoveredNavIndex] = useState<number | null>(null);
  const [activeSubCategoryIndex, setActiveSubCategoryIndex] = useState(0);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleMobileLinkClick = () => setIsMobileMenuOpen(false);

  // Flatten all services from navigation data for searching
  const allServices = useMemo(() => {
    return navigationData.flatMap((mainItem) =>
      (mainItem.subCategories || []).flatMap((subCategory) =>
        (subCategory.items || []).map((item) => ({
          name: item.name,
          slug: item.slug,
          category: mainItem.mainHead,
          subCategory: subCategory.subHead,
        }))
      )
    );
  }, []);

  // Filter services based on search query
  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return allServices
      .filter(
        (service) =>
          service.name.toLowerCase().includes(query) ||
          service.category.toLowerCase().includes(query) ||
          service.subCategory.toLowerCase().includes(query)
      )
      .slice(0, 8); // Limit to 8 results
  }, [searchQuery, allServices]);

  const handleSearchSelect = (slug: string) => {
    setSearchQuery("");
    setIsSearchFocused(false);
    router.push(slug);
  };

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
      <div className="container mx-auto px-4 flex justify-between items-center h-20 relative">
        {/* Logo - Hidden when search is expanded */}
        <Link 
          href="/" 
          className={`text-2xl font-bold text-white transition-all duration-300 ${
            isSearchFocused ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
          }`}
        >
          Bharat<span className="text-orange-500">Filings</span>
        </Link>

        {/* Desktop Search Bar - Expands to full width when focused */}
        <div className={`hidden lg:flex items-center relative transition-all duration-300 ${
          isSearchFocused ? "flex-1 mx-0" : "flex-1 max-w-md mx-8"
        }`}>
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search all services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
            />
            {/* Close button when expanded */}
            {isSearchFocused && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setIsSearchFocused(false);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                aria-label="Close search"
              >
                <X size={18} />
              </button>
            )}
            {/* Search Results Dropdown */}
            {isSearchFocused && filteredServices.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 max-h-96 overflow-y-auto z-50">
                {filteredServices.map((service) => (
                  <button
                    key={service.slug}
                    onClick={() => handleSearchSelect(service.slug)}
                    className="w-full text-left px-4 py-3 hover:bg-orange-50 transition-colors border-b border-gray-100 last:border-b-0"
                  >
                    <div className="font-medium text-gray-900">{service.name}</div>
                    <div className="text-sm text-gray-500 mt-1">
                      {service.category} • {service.subCategory}
                    </div>
                  </button>
                ))}
              </div>
            )}
            {isSearchFocused && searchQuery.trim() && filteredServices.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-50">
                <div className="text-gray-500 text-center">No services found</div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Navigation - Hidden when search is expanded */}
        <nav
          className={`hidden lg:flex items-center h-full relative transition-all duration-300 ${
            isSearchFocused ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
          }`}
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

        {/* Contact Us Button - Hidden when search is expanded */}
        <div className={`hidden lg:block transition-all duration-300 ${
          isSearchFocused ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
        }`}>
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
          {/* Mobile Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search all services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            {/* Mobile Search Results */}
            {searchQuery.trim() && filteredServices.length > 0 && (
              <div className="mt-2 bg-white rounded-lg border border-gray-200 max-h-64 overflow-y-auto">
                {filteredServices.map((service) => (
                  <button
                    key={service.slug}
                    onClick={() => {
                      handleSearchSelect(service.slug);
                      handleMobileLinkClick();
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-orange-50 transition-colors border-b border-gray-100 last:border-b-0"
                  >
                    <div className="font-medium text-gray-900">{service.name}</div>
                    <div className="text-sm text-gray-500 mt-1">
                      {service.category} • {service.subCategory}
                    </div>
                  </button>
                ))}
              </div>
            )}
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
