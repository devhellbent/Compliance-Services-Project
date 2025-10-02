// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScrolling from "@/components/SmoothScrolling";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// SEO Metadata
export const metadata: Metadata = {
  title: "BharatFilings | India's #1 Platform for Legal & Compliance Services",
  description:
    "Simplify your business journey with our expert services for company registration, GST filing, trademark registration, and annual compliance. Fast, affordable, and reliable.",
  keywords: [
    "company registration",
    "gst registration",
    "trademark filing",
    "itr filing",
    "mca compliance",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <SmoothScrolling>
          <main>{children}</main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
