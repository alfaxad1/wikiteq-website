import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Lightbulb, Clock, Users, Shield } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      icon: <HelpCircle className="w-6 h-6 text-[#009EDA]" />,
      question: "What makes WIKITEQ different from other tech companies?",
      answer: "We don't just build software – we build complete business ecosystems. Our solutions combine automation, AI, branding, and marketing into one cohesive strategy. We've proven this approach works across 15+ industries in multiple countries.",
      category: "About Us"
    },
    {
      icon: <Clock className="w-6 h-6 text-[#009EDA]" />,
      question: "How long does it take to build a custom business automation system?",
      answer: "Typically 4-12 weeks depending on complexity. We start with a discovery phase (1 week), followed by design and development (2-8 weeks), testing (1 week), and deployment with training (1-2 weeks). You'll see progress every week.",
      category: "Process"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-[#009EDA]" />,
      question: "Can you integrate AI into my existing business processes?",
      answer: "Absolutely! We specialize in seamlessly integrating AI agents into existing workflows. Whether it's customer service automation, data analysis, or predictive insights, we can enhance your current systems without disrupting operations.",
      category: "AI Solutions"
    },
    {
      icon: <Shield className="w-6 h-6 text-[#009EDA]" />,
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive post-launch support including system maintenance, updates, team training, and strategic consultancy. Many of our clients have been with us for years as their trusted technology partner.",
      category: "Support"
    },
   
    {
      icon: <Users className="w-6 h-6 text-[#009EDA]" />,
      question: "What if I need both branding and technical development?",
      answer: "Perfect! That's our specialty. We provide end-to-end solutions from brand identity and strategy to complete technical implementation. This integrated approach ensures your brand and technology work together seamlessly.",
      category: "Full Service"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-[#009EDA]">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Everything you need to know about working with WIKITEQ
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              <div className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                openFAQ === index 
                  ? 'border-[#009EDA] shadow-xl' 
                  : 'border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
              }`}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl transition-all duration-300 ${
                      openFAQ === index ? 'bg-[#009EDA] text-white' : 'bg-gray-100 text-[#009EDA]'
                    }`}>
                      {faq.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#009EDA] mb-1">
                        {faq.category}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  <div className={`transition-all duration-300 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}>
                    {openFAQ === index ? (
                      <Minus className="w-6 h-6 text-[#009EDA]" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                <div className={`transition-all duration-500 ease-in-out ${
                  openFAQ === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-6 pb-6">
                    <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#009EDA]">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA at bottom of FAQ */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help you understand how WIKITEQ can transform your business
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#009EDA] hover:bg-[#007bb8] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Let's Talk About Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;