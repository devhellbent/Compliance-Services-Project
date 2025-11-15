// components/homepage/ClientsSection.tsx
import Image from "next/image";

export const ClientsSection = () => {
  // Replace with your actual client logos
  const clients = [
    { name: "Client Logo 1", path: "/logo1.svg" },
    { name: "Client Logo 2", path: "/logo2.svg" },
    { name: "Client Logo 3", path: "/logo3.svg" },
    { name: "Client Logo 4", path: "/logo4.svg" },
    { name: "Client Logo 5", path: "/logo5.svg" },
  ];
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-semibold text-gray-500 mb-6">
          TRUSTED BY OVER 10,000+ BUSINESSES NATIONWIDE
        </p>
        <div className="flex justify-center items-center space-x-12">
          {clients.map((client) => (
            <div key={client.name}>
              <Image
                src={`https://placehold.co/120x40/transparent/6b7280?text=${client.name.replace(
                  /\s/g,
                  "+"
                )}&font=lato`}
                alt={client.name}
                width={120}
                height={40}
                className="h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
