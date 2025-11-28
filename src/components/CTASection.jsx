import React from 'react';

const CTASection = () => {
  return (
    <div className="bg-blue-700">
      <div className="max-w-3xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          <span className="block">Ready to Secure Your Fund?</span>
        </h2>

        {/* Sub-head */}
        <p className="mt-4 text-lg leading-7 text-blue-100">
          Get investors screened faster with less manual effort and fewer errors.
          <br />
          Ensure complete SEBI AML and CFT compliance in one go
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <a
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-blue-700 px-5 py-2.5 md:px-8 md:py-3.5 rounded-xl font-medium transition-all duration-300 shadow-2xl hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1"
          >
            Get Started with AML Screening
          </a>
        </div>

      </div>
    </div>
  );
};

export default CTASection;
