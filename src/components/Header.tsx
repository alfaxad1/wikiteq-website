import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'py-2' : 'py-4'
    }`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-2xl border border-gray-200/50' 
            : 'bg-white/10 backdrop-blur-md border border-white/20'
        } rounded-2xl px-6 py-3`}>
          
          {/* Logo */}
          {/* <div className="flex-shrink-0">
            <h1 className={`text-2xl font-bold transition-all duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              TECHORA
            </h1>
          </div> */}

          {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="./images/wikiteq.png"
            alt="Techora Logo"
            className={`h-16 w-auto transition-all duration-300 ${
              isScrolled ? 'brightness-0 scale-75' : 'brightness-100 scale-75'
            }`}
          />
        </div>

          
          {/* Center Navigation */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
            <div className={`flex items-center space-x-1 transition-all duration-300 ${
              isScrolled 
                ? 'bg-gray-100 border border-gray-200' 
                : 'bg-white/10 border border-white/30'
            } rounded-full px-2 py-1`}>
              {['solutions', 'industries', 'track-record', 'about', 'team', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 ${
                    isScrolled 
                      ? 'text-gray-700 hover:bg-[#009EDA] hover:text-white' 
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  {item.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                isScrolled
                  ? 'bg-[#009EDA] text-white hover:bg-[#007bb8] shadow-lg'
                  : 'bg-white text-[#009EDA] hover:bg-gray-100'
              }`}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full transition-all duration-300 ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden">
            <div className="p-4 space-y-2">
              {['solutions', 'industries', 'track-record', 'about', 'team', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#009EDA] hover:text-white rounded-xl transition-all duration-300 capitalize font-medium"
                >
                  {item.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;