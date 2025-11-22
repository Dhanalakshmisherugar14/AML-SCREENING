import React from "react";
import { ShieldCheck, Globe, Bell, FileText, Lock } from "lucide-react";

const WhyTaghash = () => {
  const features = [
    {
      title: "Built specifically for SEBI-regulated AIFs and intermediaries",
      icon: <ShieldCheck className="h-7 w-7 text-indigo-600" />,
    },
    {
      title: "Real-time global sanctions and PEP coverage",
      icon: <Globe className="h-7 w-7 text-indigo-600" />,
    },
    {
      title: "Fully automated monitoring and workflow alerts",
      icon: <Bell className="h-7 w-7 text-indigo-600" />,
    },
    {
      title: "Audit-ready logs, dashboards and reports",
      icon: <FileText className="h-7 w-7 text-indigo-600" />,
    },
    {
      title: "SOC-grade security for all investor data",
      icon: <Lock className="h-7 w-7 text-indigo-600" />,
    },
  ];

  return (
    <section id="why-taghash" className="min-h-screen bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Why AIFs Prefer Taghash for AML Compliance
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col p-6 h-full bg-white rounded-2xl shadow-xl border border-gray-200 hover:border-indigo-500 hover:shadow-indigo-300 transition transform hover:scale-[1.02] duration-300"
            >
              <div className="p-3 bg-indigo-50 rounded-xl w-fit mb-4 border border-indigo-200/50 group-hover:bg-indigo-100 transition">
                {item.icon}
              </div>
              <h2 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h2>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button className="bg-indigo-600 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-indigo-500/40 hover:bg-indigo-700 hover:shadow-indigo-400/70 transition duration-300">
            Talk to an Expert
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyTaghash;
