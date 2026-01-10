import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4 text-[#009EDA]">WIKITEQ</h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Technological Solutions for Business. We automate, scale, and
              optimize businesses across industries with AI-powered systems and
              digital solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/wikiteq-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-[#009EDA] transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/wiki.teq/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-[#009EDA] transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-[#009EDA] transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-[#009EDA] transition-colors duration-300"
                >
                  Website Revamp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#009EDA] transition-colors duration-300"
                >
                  Custom Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#009EDA] transition-colors duration-300"
                >
                  Digital Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#009EDA] transition-colors duration-300"
                >
                  Mobile Apps
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#009EDA] transition-colors duration-300"
                >
                  AI Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span className="text-sm">info@wikiteq.co.ke</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span className="text-sm">+254 795 904 813</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="text-sm">Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} WikiTeq. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a
              href="#"
              className="hover:text-[#009EDA] transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-[#009EDA] transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-[#009EDA] transition-colors duration-300"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
