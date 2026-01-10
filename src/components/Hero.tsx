import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Play,
  Sparkles,
  Zap,
  Target,
  Award,
  CheckCircle,
  Gift,
} from "lucide-react";

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const texts = [
    { text: "Automating Businesses", icon: <Zap className="w-8 h-8" /> },
    { text: "Building Brands", icon: <Sparkles className="w-8 h-8" /> },
    { text: "Powering Growth", icon: <Target className="w-8 h-8" /> },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        {" "}
      </div>

      {/* Overlay if you want a darker tint */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,158,218,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-[#009EDA]/10 rounded-full animate-pulse"
              style={{
                width: Math.random() * 100 + 50 + "px",
                height: Math.random() * 100 + 50 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                animationDelay: Math.random() * 3 + "s",
                animationDuration: Math.random() * 4 + 3 + "s",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          {/* Main Headline */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-white mb-4 relative">
                WIKITEQ
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#009EDA] rounded-full animate-ping"></div>
              </span>
            </h1>
          </div>

          {/* Animated Tagline */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="transition-all duration-500 transform">
                {texts[currentText].icon}
              </div>
              <span className="text-3xl md:text-5xl font-bold text-[#009EDA] transition-all duration-500">
                {texts[currentText].text}
              </span>
            </div>
          </div>

          {/* Description */}
          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              End-to-end technology solutions that{" "}
              <span className="text-[#009EDA] font-semibold">automate</span>,
              <span className="text-[#009EDA] font-semibold"> scale</span>, and
              <span className="text-[#009EDA] font-semibold">
                {" "}
                optimize
              </span>{" "}
              businesses across industries. We build customized systems powered
              by AI, analytics, and digital tools.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`transform transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button
                onClick={scrollToContact}
                className="group relative bg-[#009EDA] hover:bg-[#007bb8] text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative flex items-center gap-3">
                  Transform My Business
                  <ArrowRight
                    className="group-hover:translate-x-2 transition-transform duration-300"
                    size={20}
                  />
                </span>
              </button>

              <button className="group border-2 border-white hover:bg-white hover:text-gray-900 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 hover:shadow-2xl">
                <Play
                  size={20}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                Watch Our Story
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div
          className={`transform transition-all duration-1000 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "100%",
                label: "Project Success Rate",
                icon: <Award className="w-8 h-8 text-[#009EDA]" />,
              },
              {
                number: "3 Months",
                label: "Free Maintenance",
                icon: <CheckCircle className="w-8 h-8 text-[#009EDA]" />,
              },
              {
                number: "4.8/5",
                label: "Client Satisfaction",
                icon: <Gift className="w-8 h-8 text-[#009EDA]" />,
              },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 group-hover:border-[#009EDA]/50 transition-all duration-300 transform group-hover:scale-105 text-center">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <h3 className="text-4xl font-bold text-[#009EDA] mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </h3>
                  <p className="text-gray-300 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
