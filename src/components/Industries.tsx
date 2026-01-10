import React, { useState } from "react";
import {
  Megaphone,
  Building,
  ArrowUpRight,
  Coins,
  GraduationCap,
  Briefcase,
  Activity,
} from "lucide-react";

const Industries: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const industries = [
    {
      icon: <Coins className="w-10 h-10" />,
      title: "Digital Lending",
      subtitle: "Microfinance & Loan Platforms",
      description:
        "Complete digital lending solutions for MFIs and loan companies",
      projects: "SimuLoans Ltd, Evi Ventures Ltd",
      image:
        "https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg",
      gradient: "from-green-600 to-emerald-700",
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Business Solutions",
      subtitle: "HR & Payroll Systems",
      description: "Automated payroll and human resource management platforms",
      projects: "Lehigh Business Solutions, Elite",
      image:
        "https://images.pexels.com/photos/6694566/pexels-photo-6694566.jpeg",
      gradient: "from-orange-600 to-red-600",
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Education Technology",
      subtitle: "Schools & Learning Institutions",
      description:
        "Comprehensive school management systems with student portals and academic tracking",
      projects: "Eaglesway Schools, SmartLearn Academy",
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
      gradient: "from-purple-600 to-violet-700",
    },
    {
      icon: <Activity className="w-10 h-10" />,
      title: "Healthcare",
      subtitle: "Medical & Clinic Management",
      description:
        "Patient management systems with appointment scheduling and medical records",
      projects: "AfyaPlus Clinic, MediCare Solutions",
      image:
        "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
      gradient: "from-red-600 to-pink-600",
    },
    {
      icon: <Megaphone className="w-10 h-10" />,
      title: "Advertising & Media",
      subtitle: "Marketing Agencies",
      description:
        "Digital advertising platforms and campaign management systems",
      projects: "EABL, WPP, HAVAS",
      image: "./images/mobile-app.jpg",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Building className="w-10 h-10" />,
      title: "Real Estate & Property",
      subtitle: "Property Management",
      description:
        "Property management systems and tenant engagement platforms",
      projects: "BEKE",
      image:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="industries" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Industries We <span className="text-[#009EDA]">Transform</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From fitness centers to energy solutions, we deliver tailored
            technology across diverse sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 transform group-hover:scale-105 h-96">
                {/* Background Image */}
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300"></div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                  <div className="flex items-start justify-between">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl border border-white/30">
                      <div className="text-[#009EDA]">{industry.icon}</div>
                    </div>
                    <ArrowUpRight
                      className={`w-6 h-6 transition-all duration-300 ${
                        hoveredCard === index
                          ? "translate-x-1 -translate-y-1 scale-110"
                          : ""
                      }`}
                    />
                  </div>

                  <div
                    className={`transform transition-all duration-500 ${
                      hoveredCard === index ? "translate-y-0" : "translate-y-4"
                    }`}
                  >
                    <h3 className="text-2xl font-bold mb-2">
                      {industry.title}
                    </h3>
                    <p className="text-gray-200 text-sm mb-4">
                      {industry.subtitle}
                    </p>

                    <div
                      className={`transition-all duration-500 ${
                        hoveredCard === index
                          ? "opacity-100 max-h-32"
                          : "opacity-0 max-h-0"
                      } overflow-hidden`}
                    >
                      <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                        {industry.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#009EDA] rounded-full"></div>
                        <span className="text-[#009EDA] text-sm font-semibold">
                          {industry.projects}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-[#009EDA] rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Don't See Your Industry?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                We adapt our solutions to any business model. Let's discuss how
                we can transform your specific industry.
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white text-[#009EDA] hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Discuss Your Industry
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
