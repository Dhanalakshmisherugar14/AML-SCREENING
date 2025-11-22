import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "What if my investor is a PEP?",
      answer:
        "You must obtain senior management approval, apply enhanced due diligence and verify sources of funds & wealth. Taghash automates PEP identification, routing and screening instantly.",
    },
    {
      question: "How often must I re-check investors?",
      answer:
        "High-risk or PEP: annually. Medium-risk: every 2–3 years. Low-risk: every 3–5 years. Plus real-time sanctions checks for every transaction.",
    },
    {
      question: "What happens if there’s a sanctions match?",
      answer:
        "Freeze the account immediately, report to the Central Nodal Officer (CNO) within 24 hours and submit supporting documentation. Taghash prepares alerts and drafts reports automatically.",
    },
    {
      question: "What documentation is required?",
      answer:
        "KYC IDs, address proof, source of funds/wealth, beneficial ownership details and PEP declarations. All stored securely inside Taghash.",
    },
    {
      question: "How are foreign investors handled?",
      answer:
        "Taghash screens for OFAC/EU/UN sanctions, high-risk jurisdictions and validates local regulatory authorisations automatically.",
    },
    {
      question: "What are the costs of non-compliance?",
      answer:
        "Penalties range from ₹1 lakh - ₹1 crore per violation, account freezes, licence suspensions and long-term reputational damage. With Taghash, prevention costs a fraction of remediation.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Get clarity on jurisdictional compliance, PEP screening, required documents and monitoring obligations.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Question */}
              <button
                className="w-full px-6 py-5 flex justify-between items-center text-left
                           bg-white hover:bg-indigo-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-indigo-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                )}
              </button>

              {/* Answer */}
              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 py-4 opacity-100"
                    : "max-h-0 py-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="text-gray-700 leading-relaxed border-l-4 border-indigo-300 pl-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
