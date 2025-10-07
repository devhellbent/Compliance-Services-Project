// components/page-sections/proprietorship/HeroWithForm.tsx
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { MarkdownBoldRenderer } from "../MarkdownBoldRenderer";

interface HeroWithFormProps {
  title: string;
  overview: string;
  breadcrumb: string[];
}

export const HeroWithForm = ({
  title,
  overview,
  breadcrumb,
}: HeroWithFormProps) => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm text-gray-500 mb-2">
              {breadcrumb.join(" > ")}
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
              {title}
            </h1>
            <MarkdownBoldRenderer text={overview} />
            <div className="mt-6 flex items-center space-x-6">
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star
                    size={20}
                    fill="currentColor"
                    className="text-gray-300"
                  />
                </div>
                <span className="ml-2 text-sm text-gray-600">4.6 out of 5</span>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-orange-500 hover:bg-orange-600">
                Get Started
              </Button>
              <Button
                variant="ghost"
                className="text-blue-600 hover:bg-blue-50"
              >
                Talk to an Expert
              </Button>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Get a Free Consultation
            </h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Enter Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700"
                >
                  Enter Your PhoneNo.
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Enter Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
