// components/Footer.tsx
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  // Manually selected popular services for a cleaner footer
  const popularRegistrations = [
    {
      name: "Private Limited Company",
      slug: "/services/private-limited-company",
    },
    { name: "LLP Registration", slug: "/services/llp" },
    {
      name: "Trademark Registration",
      slug: "/services/trademark-registration",
    },
    { name: "GST Registration", slug: "/services/gst-registration" },
  ];

  const taxAndCompliance = [
    { name: "Income Tax Filing", slug: "/services/income-tax-e-filing" },
    { name: "GST Return Filing", slug: "/services/gst-return-filing" },
    {
      name: "Company Compliance",
      slug: "/services/private-limited-compliance",
    },
    { name: "TDS Return Filing", slug: "/services/tds-return-filing" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          {/* Column 1: Branding & Socials */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold text-gray-900">BharatFilings</h3>
            <p className="mt-3 text-gray-500 leading-relaxed">
              Your partner in business and legal compliance.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Popular Registrations */}
          <div>
            <h5 className="font-semibold text-gray-800 mb-4">
              Popular Registrations
            </h5>
            <ul className="space-y-3">
              {popularRegistrations.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.slug}
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Tax & Compliance */}
          <div>
            <h5 className="font-semibold text-gray-800 mb-4">
              Tax & Compliance
            </h5>
            <ul className="space-y-3">
              {taxAndCompliance.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.slug}
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h5 className="font-semibold text-gray-800 mb-4">Quick Links</h5>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} BharatFilings. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
