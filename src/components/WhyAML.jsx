import React from "react";
import { ShieldCheck, Clock, Globe2 } from "lucide-react";

const WhyAML = () => {
  const features = [
    {
      title: "100% SEBI Compliant",
      icon: <ShieldCheck className="w-7 h-7 text-blue-700" />,
    },
    {
      title: "24/7 Continuous Monitoring",
      icon: <Clock className="w-7 h-7 text-blue-700" />,
    },
    {
      title: "Global Database Coverage",
      icon: <Globe2 className="w-7 h-7 text-blue-700" />,
    },
  ];

  return (
    <section id="why-aml" className="py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Heading */}
        <div className="text-center max-w-6xl mx-auto space-y-6 mb-8"> 
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Why AML Screening Matters
          </h2>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Compliance gaps can trigger severe penalties, frozen accounts and long-term reputational loss.
            <br />
            <br />
            A single oversight can disrupt operations and expose your fund to multi-layered regulatory risks.
            <br />
            <br />
            Taghash provides investor verification, risk analysis and ongoing monitoring, all aligned with{" "}
            <span className="text-black font-bold break-words"> <br/>
              SEBI Circular No. SEBI/HO/MIRSD/MIRSDSECFATF/P/CIR/2024/78
            </span>
            .
          </p>
        </div>

        {/* Features / Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-lg border border-slate-200 
              rounded-2xl p-10 shadow-md hover:shadow-xl hover:border-blue-200 
              transition-all duration-300 text-center group"
            >
              <div className="flex justify-center mb-6">
                <div className="p-5 rounded-2xl bg-blue-50 group-hover:bg-blue-100 
                transition-all duration-300 shadow-inner">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button
            className="px-12 py-4 rounded-xl text-xl font-semibold 
            bg-gradient-to-r from-blue-600 to-blue-700 text-white 
            shadow-lg hover:shadow-blue-700/40 hover:-translate-y-1 
            transition-all duration-300"
          >
           Talk to an Expert Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyAML;
