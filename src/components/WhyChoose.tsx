import React from "react";
import {
  Target,
  Zap,
  Trophy,
  HeadphonesIcon,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const WhyChoose: React.FC = () => {
  const reasons = [
    {
      icon: <Target className="w-12 h-12 text-[#009EDA] mb-6" />,
      title: "Tailored Solutions",
      description: "Built for your exact business needs",
      details:
        "Every solution is custom-designed for your specific requirements, ensuring maximum efficiency and ROI. No cookie-cutter approaches.",
      highlight: "100% Custom Built",
    },
    {
      icon: <Zap className="w-12 h-12 text-[#009EDA] mb-6" />,
      title: "Seamless Integration",
      description: "AI, analytics, and automation unified",
      details:
        "Our platforms seamlessly integrate cutting-edge AI technologies with robust analytics and smart automation workflows.",
      highlight: "AI-Powered Systems",
    },
    {
      icon: <Trophy className="w-12 h-12 text-[#009EDA] mb-6" />,
      title: "Measurable Impact",
      description: "Delivering tangible business outcomes",
      details:
        "Our solutions consistently deliver measurable results: increased revenue, improved efficiency, and enhanced customer engagement for our Kenyan clients.",
      highlight: "95% Client Satisfaction Rate",
    },
    {
      icon: <HeadphonesIcon className="w-12 h-12 text-[#009EDA] mb-6" />,
      title: "Complete Support",
      description: "From brand identity to automation",
      details:
        "Comprehensive support covering everything from initial brand development to complete business automation and ongoing consultancy.",
      highlight: "End-to-End Service",
    },
  ];

  const benefits = [
    "Custom systems built for your exact business needs",
    "Seamless AI, analytics, and automation integration",
    "Proven experience across industries and regions",
    "Complete support from branding to technical implementation",
    "Ongoing consultancy and team training",
    "International experience with local expertise",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-[#009EDA]">WIKITEQ</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine technical expertise with business acumen to deliver
            solutions that drive real results
          </p>
        </div>

        {/* Main Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="group">
              <div className="relative bg-gray-50 hover:bg-white p-8 rounded-3xl transition-all duration-500 border border-gray-200 hover:border-[#009EDA]/30 h-full transform hover:scale-105 hover:shadow-2xl overflow-hidden">
                {/* Animated background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#009EDA]/5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div>{reason.icon}</div>
                    <span className="bg-[#009EDA] text-white px-3 py-1 rounded-full text-xs font-bold">
                      {reason.highlight}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-[#009EDA] font-semibold mb-4">
                    {reason.description}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Checklist */}
        <div className="bg-gray-900 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,158,218,0.1),transparent_50%)]"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-white mb-6">
                What You Get With{" "}
                <span className="text-[#009EDA]">WIKITEQ</span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join the businesses that have already automated their
                operations, scaled their growth, and dominated their markets
                with our solutions.
              </p>

              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group bg-[#009EDA] hover:bg-[#007bb8] text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3"
              >
                Start Your Transformation
                <ArrowRight
                  className="group-hover:translate-x-2 transition-transform duration-300"
                  size={20}
                />
              </button>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-[#009EDA] mt-1 flex-shrink-0" />
                  <span className="text-white font-medium leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
