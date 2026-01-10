import React, { useState } from 'react';
import { 
  Code, 
  Smartphone, 
  Search,
  CheckCircle,
  Zap,
  Target,
  RefreshCw,
  Layout
} from 'lucide-react';

const Solutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Custom Website Development",
      shortTitle: "Web Development",
      description: "We craft beautiful, high-performance websites tailored to your brand and business goals. From concept to launch, we ensure your site not only looks stunning but drives tangible results and conversions.",
      features: [
        "Custom design aligned with your brand identity",
        "Fast-loading, secure, and SEO-optimized build",
        "Mobile-responsive across all devices & browsers",
        "Ongoing performance monitoring and updates"
      ],
      industries: "Startups, SMEs, E-commerce, Service Providers, Educational Institutions",
      benefits: "Increased online visibility, higher conversion rates, improved user engagement, and stronger brand authority",
      examples: [],
      image: "./images/webdev.jpeg",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "E-commerce Solutions & Online Stores",
      shortTitle: "E-commerce",
      description: "Launch a powerful online store designed to convert visitors into loyal customers. We build secure, scalable e-commerce platforms with integrated payment systems and inventory management.",
      features: [
        "Custom online store design & development",
        "Secure payment gateway integration (M-Pesa, Cards)",
        "Inventory, order, and customer management systems",
        "Mobile-optimized shopping experience for Kenyan customers"
      ],
      industries: "Retail, Fashion, Electronics, Food & Beverage, Handicrafts",
      benefits: "24/7 sales capability, expanded market reach, automated order processing, and detailed sales analytics",
      examples: [],
      image: "./images/ecommerce.jpg",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      shortTitle: "Mobile Apps",
      description: "Turn your ideas into intuitive, high-performing mobile applications for iOS and Android. We build apps that engage users and deliver real business value for the Kenyan market.",
      features: [
        "Native (iOS/Android) and cross-platform development",
        "User-centered design with Kenyan market preferences",
        "M-Pesa and local payment integrations",
        "App store submission and post-launch support"
      ],
      industries: "FinTech, Healthcare, Logistics, Agriculture, Entertainment",
      benefits: "Direct customer engagement, brand loyalty building, new revenue streams, and competitive advantage",
      examples: [],
      image: "./images/mobile-app.jpg",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO & Digital Marketing",
      shortTitle: "Digital Marketing",
      description: "Increase your online presence and attract more qualified leads through strategic SEO and digital marketing. We help Kenyan businesses rank higher and reach the right audience.",
      features: [
        "Technical SEO audit and optimization",
        "Keyword research with local Kenyan search trends",
        "Google Business Profile optimization for local visibility",
        "Monthly performance reports and strategy refinement"
      ],
      industries: "All industries looking to grow their online presence in Kenya",
      benefits: "Higher search rankings, increased qualified traffic, better conversion rates, and measurable ROI",
      examples: [],
      image: "./images/digitalmarketing .jpeg",
      color: "from-orange-500 to-amber-600"
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Website Revamp & Modernization",
      shortTitle: "Website Revamp",
      description: "Breathe new life into your outdated website. We modernize your digital presence with improved design, performance, and functionality to meet today's standards.",
      features: [
        "Complete UI/UX redesign and user flow optimization",
        "Performance and security upgrades for faster loading",
        "Mobile responsiveness and cross-browser compatibility",
        "Platform migration with zero downtime guaranteed"
      ],
      industries: "Businesses with existing websites needing updates, Companies rebranding, Organizations with poor site performance",
      benefits: "Improved user experience, higher conversion rates, better search rankings, and modern brand image",
      examples: [],
      image: "./images/websitedev.jpeg",
      color: "from-teal-500 to-green-600"
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#009EDA]">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to transform Kenyan businesses and accelerate growth in the digital era
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {solutions.map((solution, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === index
                  ? 'bg-[#009EDA] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span className={activeTab === index ? 'text-white' : 'text-[#009EDA]'}>
                {solution.icon}
              </span>
              {solution.shortTitle}
            </button>
          ))}
        </div>

        {/* Active Solution Display */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-r from-[#009EDA] to-blue-600 p-3 rounded-2xl text-white">
                  {solutions[activeTab].icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {solutions[activeTab].title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {solutions[activeTab].description}
              </p>
              
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#009EDA]" />
                  Perfect For:
                </h4>
                <p className="text-gray-600 bg-gray-50 p-4 rounded-xl">{solutions[activeTab].industries}</p>
              </div>
              
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#009EDA]" />
                  Key Benefits:
                </h4>
                <p className="text-gray-600 bg-gray-50 p-4 rounded-xl">{solutions[activeTab].benefits}</p>
              </div>
              
              {solutions[activeTab].features && (
                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#009EDA]" />
                    What We Deliver:
                  </h4>
                  <ul className="space-y-3">
                    {solutions[activeTab].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#009EDA] mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mt-10">
                <button className="bg-gradient-to-r from-[#009EDA] to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Get Started with {solutions[activeTab].shortTitle}
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${solutions[activeTab].color} opacity-20`}></div>
              <img
                src={solutions[activeTab].image}
                alt={solutions[activeTab].title}
                className="w-full h-full object-cover min-h-[500px]"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                  <h4 className="text-gray-900 font-bold text-lg mb-2">
                    Special Offer for Kenyan Businesses
                  </h4>
                  <p className="text-gray-700">
                    {activeTab === 5 
                      ? "Get 3 months FREE maintenance with any new website project!"
                      : "Get 20% OFF your first project when you mention this website!"}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Free consultation included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Services Overview */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
              onClick={() => setActiveTab(index)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${solution.color} text-white`}>
                  {solution.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{solution.shortTitle}</h3>
              </div>
              <p className="text-gray-600 mb-4">{solution.description.substring(0, 120)}...</p>
              <div className="flex items-center text-[#009EDA] font-semibold">
                <span>Learn more</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;