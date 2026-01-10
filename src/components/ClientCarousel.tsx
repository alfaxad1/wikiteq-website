import React, { useEffect, useState } from "react";

const ClientCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const clients = [
    { name: "BEKE Real Estate", logo: "", industry: "Real Estate" },
    { name: "SimuLoans Ltd", logo: "", industry: "FinTech / Digital Lending" },
    { name: "Eaglesway Schools", logo: "", industry: "Education Technology" },
    {
      name: "Lehigh Business Solutions",
      logo: "",
      industry: "Business Services / HR",
    },
    { name: "Evi Ventures Ltd", logo: "", industry: "Microfinance / Lending" },
  //   { name: "AfyaPlus Clinic", logo: "", industry: "Healthcare Technology" },
  //   { name: "QuickCharge Solutions", logo: "", industry: "Payment Solutions" },
  //   { name: "Glow & Go Beauty", logo: "", industry: "E-commerce / Retail" },
  //   { name: "HAVAS", logo: "", industry: "Digital Marketing" },
  //   { name: "WPP", logo: "", industry: "Advertising" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(clients.length / 3));
    }, 4000);
    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h3>
          <p className="text-gray-600">
            Trusted by leading companies across Kenya, WikiTeq is the partner of
            choice for digital transformation.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(clients.length / 3) }).map(
              (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {clients
                      .slice(slideIndex * 3, slideIndex * 3 + 3)
                      .map((client, index) => (
                        <div key={index} className="group">
                          <div className="bg-gray-50 hover:bg-white p-8 rounded-3xl border border-gray-200 hover:border-[#009EDA]/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center">
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                              {client.logo}
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">
                              {client.name}
                            </h4>
                            <p className="text-sm text-[#009EDA] font-medium">
                              {client.industry}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )
            )}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(clients.length / 3) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-[#009EDA] scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;
