// components/Footer.tsx
import Link from "next/link";
import { navigationData } from "@/lib/navigation";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Branding and Address */}
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-bold">BharatFilings</h3>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              #101, Oxford Towers, 139, HAL Old Airport Rd, Kodihalli,
              Bengaluru, Karnataka 560008
            </p>
            <a
              href="#"
              className="mt-4 text-sm font-semibold text-orange-500 hover:text-orange-400 flex items-center"
            >
              Open on Google Maps <ArrowRight size={16} className="ml-1" />
            </a>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-slate-400 hover:text-white"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-slate-400 hover:text-white"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-slate-400 hover:text-white"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Service Links */}
          <div className="lg:col-span-8">
            <div className="space-y-10">
              {navigationData.map((mainItem) => {
                // Flatten all service items from all sub-categories under the main item
                const allItems =
                  mainItem.subCategories?.flatMap((sc) => sc.items || []) || [];
                if (allItems.length === 0) return null;

                return (
                  <div key={mainItem.mainHead}>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-700">
                      {mainItem.mainHead}
                    </h4>
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3">
                      {allItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.slug}
                          className="text-slate-300 hover:text-white text-sm"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar with simple links */}
        <div className="mt-16 pt-8 border-t border-slate-700 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h5 className="font-semibold mb-3">Company</h5>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-white">
                  Guides
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Support</h5>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-white">
                  Have questions?
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
