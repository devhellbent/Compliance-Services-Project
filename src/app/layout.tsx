// app/layout.tsx
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
