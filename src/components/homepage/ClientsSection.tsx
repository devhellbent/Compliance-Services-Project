// components/homepage/ClientsSection.tsx
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
    <section className="py-12 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-semibold text-slate-400 mb-6">
          TRUSTED BY OVER 10,000+ BUSINESSES NATIONWIDE
        </p>
        <div className="flex justify-center items-center space-x-12">
          {clients.map((client) => (
            <div key={client.name}>
              <img
                src={`https://placehold.co/120x40/334155/a3a3a3?text=${client.name.replace(
                  /\s/g,
                  "+"
                )}&font=lato`}
                alt={client.name}
                className="h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
