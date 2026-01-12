import React, { useState } from "react";
import {
  TrendingUp,
  ChevronRight,
  ExternalLink,
  MapPin,
  Calendar,
  Star,
  Clock,
  CheckCircle,
} from "lucide-react";

const TrackRecord: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 1,
      name: "BEKE Real Estate",
      description: "Property Management System",
      industry: "Real Estate",
      location: "Nairobi, Kenya",
      year: "2025",
      impact:
        "Centralized property management platform handling listings, tenant management, and automated billing across 200+ properties",
      technologies: ["React.js", "Node.js", "MongoDB", "Cloud Hosting"],
      results: ["200+ Properties", "Automated Rent Collection", "95% Tenant Satisfaction"],
      image: "./images/realestate.jpeg",
      color: "bg-blue-600",
    },
    {
      id: 2,
      name: "SimuLoans Ltd",
      description: "Mobile Device Financing Platform",
      industry: "FinTech",
      location: "Nairobi, Kenya",
      year: "2025",
      impact:
        "End-to-end mobile device financing solution with loan processing, repayment tracking, and customer management",
      technologies: ["Flutter", "REST API", "Payment Gateway", "SMS Integration"],
      results: [
        "500+ Devices Financed",
        "Automated KYC Verification",
        "Reduced Processing Time by 70%",
      ],
      image: "./images/simuloans.jpeg",
      color: "bg-green-600",
    },
    {
      id: 3,
      name: "Eaglesway Schools",
      description: "School Management System",
      industry: "Education",
      location: "Nairobi, Kenya",
      year: "2025",
      impact:
        "Comprehensive school management platform serving 1,500+ students with academic, administrative, and parent portal features",
      technologies: [
        "PHP/Laravel",
        "MySQL",
        "Parent Portal",
        "Fee Management",
      ],
      results: ["1,500+ Students", "Automated Report Generation", "Parent-Teacher Communication"],
      image: "./images/schsys.jpeg",
      color: "bg-purple-600",
    },
    {
      id: 4,
      name: "Lehigh Business Solutions",
      description: "Payroll & HR Management System",
      industry: "Business Services",
      location: "Nairobi, Kenya",
      year: "2025",
      impact:
        "Automated payroll processing system for 50+ employees with tax compliance, payslip generation, and employee self-service portal",
      technologies: ["React.js", "Python/Django", "Payroll Engine", "Tax Compliance"],
      results: ["50+ Employees", "100% Tax Compliance", "90% Reduction in Processing Time"],
      image: "./images/payroll.jpeg",
      color: "bg-orange-600",
    },
    // {
    //   id: 5,
    //   name: "HUSS Group",
    //   description: "Strategic Brand Building & Consultancy",
    //   industry: "Business Services",
    //   location: "Germany",
    //   year: "2023",
    //   impact: "Strategic brand positioning in German market with comprehensive digital presence",
    //   technologies: ["Brand Strategy", "Digital Presence", "Market Analysis"],
    //   results: ["German Market Entry", "Brand Recognition", "Digital Growth"],
    //   image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    //   color: "bg-purple-500"
    // }
  ];

  const stats = [
    {
      icon: <CheckCircle className="w-8 h-8 text-[#009EDA]" />,
      number: "100%",
      label: "Project Success Rate",
      description: "Every project delivered on time and to spec",
    },
    {
      icon: <Clock className="w-8 h-8 text-[#009EDA]" />,
      number: "5+",
      label: "Years Experience",
      description: "Building Kenya's digital future since 2020",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#009EDA]" />,
      number: "95%",
      label: "Client Retention",
      description: "Businesses that return for additional services",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#009EDA]" />,
      number: "15+",
      label: "Industries",
      description: "From finance to real estate and beyond",
    },
  ];

  return (
    <section id="track-record" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#009EDA]">Track Record</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real projects, real results. See how we've transformed businesses
            across Kenya, Germany, and beyond.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 hover:bg-white p-6 rounded-3xl border border-gray-200 hover:border-[#009EDA]/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-[#009EDA] mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Showcase */}
        <div className="bg-gray-900 rounded-3xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Featured Success Stories
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project List */}
            <div className="space-y-4">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(index)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                    selectedProject === index
                      ? "bg-[#009EDA] text-white shadow-xl"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-lg">{project.name}</h4>
                    <ChevronRight
                      className={`w-5 h-5 transition-all duration-300 ${
                        selectedProject === index ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                  <p className="text-sm opacity-80">{project.description}</p>
                  <div className="flex items-center gap-4 mt-2 text-xs">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Project Details */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800 rounded-2xl overflow-hidden">
                <div className="relative">
                  <img
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm font-medium ${projects[selectedProject].color}`}
                    >
                      {projects[selectedProject].industry}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h4 className="text-2xl font-bold text-white mb-4">
                    {projects[selectedProject].name}
                  </h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {projects[selectedProject].impact}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h5 className="font-semibold text-[#009EDA] mb-3">
                        Technologies Used:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {projects[selectedProject].technologies.map(
                          (tech, idx) => (
                            <span
                              key={idx}
                              className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-[#009EDA] mb-3">
                        Key Results:
                      </h5>
                      <div className="space-y-2">
                        {projects[selectedProject].results.map(
                          (result, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <Star className="w-4 h-4 text-yellow-400" />
                              <span className="text-gray-300 text-sm">
                                {result}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  <button className="flex items-center gap-2 text-[#009EDA] hover:text-white transition-colors duration-300 font-semibold">
                    View Case Study
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
