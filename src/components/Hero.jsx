import React from "react";
import { Shield } from "lucide-react";
import heroImg from "../assets/hero.png"; // <--- update image name

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">

      {/* Background Image */}
      <img
        src={heroImg}
        alt="AML Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center space-y-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-5 py-2.5 rounded-full border border-slate-200 shadow-sm">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-slate-800 tracking-wide">
              AML Screening for AIF Investors
            </span>
          </div>

          {/* Heading */}
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight max-w-5xl mx-auto">
            Protect your fund with<br />complete AML compliance
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ensure every investor is screened, every risk is quantified to operate with regulatory confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 
              hover:from-blue-700 hover:to-blue-800
              text-white px-10 py-4 rounded-xl font-semibold text-base 
              shadow-lg shadow-blue-500/30 hover:shadow-blue-600/40
              transition-all duration-300 hover:-translate-y-0.5">
              Explore AML Screening Solution
            </button>

            <button className="bg-white hover:bg-slate-50 border-2 border-slate-300 
              text-slate-900 px-10 py-4 rounded-xl font-semibold text-base
              transition-all duration-300 hover:-translate-y-0.5 shadow-sm">
              Request a Demo
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
