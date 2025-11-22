import React from 'react';
import logo from '../assets/logo.png';
import { Mail, Phone, Linkedin, Twitter, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-6 lg:py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Branding - Left */}
          <div className="max-w-sm space-y-4">
            <img src={logo} alt="Taghash" className="h-10" />

            <p className="text-gray-400 text-base leading-relaxed">
              Accreditation and compliance, made simple and secure.
            </p>
            
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Resources - Center */}
          <div className="text-center md:justify-self-center">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Resources
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a href="#" className="text-[13px] text-gray-300 hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#why-aml" className="text-[13px] text-gray-300 hover:text-white transition">
                  Why AML?
                </a>
              </li>
              <li>
                <a href="#obligations" className="text-[13px] text-gray-300 hover:text-white transition">
                  SEBI Obligations
                </a>
              </li>
              <li>
                <a href="#documents" className="text-[13px] text-gray-300 hover:text-white transition">
                  Documents
                </a>
              </li>
              <li>
                <a href="#faq" className="text-[13px] text-gray-300 hover:text-white transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#why-taghash" className="text-[13px] text-gray-300 hover:text-white transition">
                  Why Taghash
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[13px] text-gray-300 hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact - Right */}
          <div className="space-y-4 text-center md:text-left md:justify-self-end">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Contact
            </h3>

            {/* Email */}
            <div className="flex items-center justify-center md:justify-start space-x-3 text-gray-300">
              <Mail className="h-5 w-5 text-gray-400" />
              <a href="mailto:compliance@taghash.com" className="hover:text-white transition">
                compliance@taghash.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-center md:justify-start space-x-3 text-gray-300">
              <Phone className="h-5 w-5 text-gray-400" />
              <a href="tel:+918001234567" className="hover:text-white transition">
                +91 800 123 4567
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-base text-gray-400">
            © 2025 Taghash Pvt Ltd. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
