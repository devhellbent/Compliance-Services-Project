"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AdvantagesDisadvantages } from "@/components/page-sections/AdvantagesDisadvantages";
import { Eligibility } from "@/components/page-sections/Eligibility";
import { DocumentsRequired } from "@/components/page-sections/DocumentsRequired";
import { RegistrationProcess } from "@/components/page-sections/RegistrationProcess";
import { FeesTable } from "@/components/page-sections/FeesTable";
import { Faq } from "@/components/page-sections/Faq";
import { MarkdownBoldRenderer } from "./MarkdownBoldRenderer";
import { ServiceData } from "@/lib/types";
import {
  ChevronRight,
  Mail,
  Phone,
  User,
  MessageSquare,
  ArrowUp,
} from "lucide-react";

interface ServicePageContentProps {
  data: ServiceData;
}

export function ServicePageContent({ data }: ServicePageContentProps) {
  const sections = useMemo(
    () => [
      { id: "overview", title: "Overview", show: true },
      {
        id: "advantages",
        title: "Advantages & Disadvantages",
        show: data.advantages && data.disadvantages,
      },
      { id: "eligibility", title: "Eligibility", show: data.eligibility },
      { id: "documents", title: "Documents", show: data.documents },
      { id: "process", title: "Process", show: data.registrationProcess },
      { id: "fees", title: "Fees", show: data.fees },
      { id: "faqs", title: "FAQs", show: data.faqs },
    ],
    [data]
  );

  const visibleSections = sections.filter((s) => s.show);
  const [activeSection, setActiveSection] = useState(visibleSections[0]?.id);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -66% 0px", threshold: 0 }
    );

    visibleSections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [visibleSections]);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modern Hero Section */}
      <header className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-2 text-sm mb-6"
          >
            {data.breadcrumb.map((item, index) => (
              <div key={item} className="flex items-center">
                {index > 0 && <ChevronRight size={16} className="mx-2" />}
                <span className="text-orange-100">{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center mb-6"
          >
            {data.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center md:text-justify text-lg md:text-xl text-white leading-relaxed font-medium"
          >
            <MarkdownBoldRenderer
              as="p"
              className="text-lg"
              text={data.description || data.overview}
            />
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-6 xl:gap-8">
          {/* Sticky Left Sidebar - Quick Navigation */}
          <aside className="hidden lg:block lg:w-56 xl:w-64 flex-shrink-0">
            <div className="sticky top-24 w-56 xl:w-64">
              <nav className="bg-white rounded-2xl shadow-lg p-4 xl:p-6 border border-gray-200 max-h-[calc(100vh-7rem)] overflow-y-auto">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4 border-b border-orange-200 pb-2">
                  Quick Navigation
                </h3>
                <ul className="space-y-2">
                  {visibleSections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => handleNavClick(section.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300
                          ${
                            activeSection === section.id
                              ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30"
                              : "text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-transparent hover:border-orange-200"
                          }`}
                      >
                        <span className="flex items-center">
                          <span
                            className={`w-2 h-2 rounded-full mr-3 ${
                              activeSection === section.id
                                ? "bg-white"
                                : "bg-orange-400"
                            }`}
                          ></span>
                          {section.title}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 min-w-0">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Overview Section */}
              <motion.section
                id="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-28"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center border-b border-orange-200 pb-4">
                    <span className="w-1 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full mr-4"></span>
                    Service Overview
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-800 text-justify leading-relaxed">
                    <MarkdownBoldRenderer
                      as="p"
                      className="text-lg"
                      text={data.overview}
                    />
                  </div>
                </div>
              </motion.section>

              {/* Advantages Section */}
              {data.advantages && data.disadvantages && (
                <motion.section
                  id="advantages"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="scroll-mt-28"
                >
                  <AdvantagesDisadvantages
                    advantages={data.advantages}
                    disadvantages={data.disadvantages}
                  />
                </motion.section>
              )}

              {/* Eligibility Section */}
              {data.eligibility && (
                <motion.section
                  id="eligibility"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="scroll-mt-28"
                >
                  <Eligibility criteria={data.eligibility} />
                </motion.section>
              )}

              {/* Documents Section */}
              {data.documents && (
                <motion.section
                  id="documents"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="scroll-mt-28"
                >
                  <DocumentsRequired documents={data.documents} />
                </motion.section>
              )}

              {/* Process Section */}
              {data.registrationProcess && (
                <motion.section
                  id="process"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="scroll-mt-28"
                >
                  <RegistrationProcess steps={data.registrationProcess} />
                </motion.section>
              )}

              {/* Fees Section */}
              {data.fees && (
                <motion.section
                  id="fees"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="scroll-mt-28"
                >
                  <FeesTable fees={data.fees} />
                </motion.section>
              )}

              {/* FAQs Section */}
              {data.faqs && (
                <motion.section
                  id="faqs"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="scroll-mt-28"
                >
                  <Faq faqs={data.faqs} />
                </motion.section>
              )}
            </div>
          </main>

          {/* Sticky Right Sidebar - Consultation Form */}
          <aside className="hidden lg:block lg:w-56 xl:w-64 flex-shrink-0">
            <div className="sticky top-24 w-56 xl:w-64">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl p-4 xl:p-6 text-white max-h-[calc(100vh-7rem)] overflow-y-auto border border-orange-500">
                <h3 className="text-xl xl:text-2xl font-bold mb-2 text-orange-400">
                  Book Free Consultation
                </h3>
                <p className="text-gray-300 text-sm mb-6">
                  Get expert guidance for your business needs
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <div className="relative">
                      <User
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400"
                        size={18}
                      />
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <Mail
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400"
                        size={18}
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <Phone
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400"
                        size={18}
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <MessageSquare
                        className="absolute left-3 top-3 text-orange-400"
                        size={18}
                      />
                      <textarea
                        placeholder="Brief message (optional)"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        rows={3}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-orange-600 hover:to-orange-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Get Free Consultation
                  </button>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-full shadow-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-110 border-2 border-white"
            aria-label="Back to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ServicePageContent;
