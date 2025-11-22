import React from "react";
import { ShieldCheck, Globe, Bell, FileText, Lock, ArrowRight } from "lucide-react";

const WhyTaghash = () => {
  const features = [
    {
      title: "Regulatory Precision",
      description: "Built specifically for SEBI-regulated AIFs and intermediaries, ensuring 100% adherence to local compliance guidelines from day one.",
      icon: <ShieldCheck className="h-7 w-7 text-indigo-600" />,
    },
    {
      title: "Global Sanctions Intelligence",
      description: "Real-time coverage across global sanctions lists and Politically Exposed Person (PEP) databases, minimizing international risk exposure.",
      icon: <Globe className="h-7 w-7 text-indigo-600" />,
    },
    {
      title: "Automated Monitoring & Alerts",
      description: "Fully automated screening and continuous monitoring, providing instant workflow alerts for status changes or potential matches.",
      icon: <Bell className="h-7 w-7 text-indigo-600" />,
    },
    {
      title: "Audit-Ready Reporting",
      description: "Generate comprehensive, immutable logs, granular dashboards, and standardized reports necessary for any regulatory audit with a single click.",
      icon: <FileText className="h-7 w-7 text-indigo-600" />,
    },
    {
      title: "Enterprise-Grade Security",
      description: "Leverage SOC-grade security protocols, encryption, and data governance standards to protect all sensitive investor information.",
      icon: <Lock className="h-7 w-7 text-indigo-600" />,
    },
  ];

  return (
    <section id="why-taghash" className="min-h-screen bg-white py-20 sm:py-32 overflow-hidden font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading Section */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-2">
            The Taghash Advantage
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Why Leading AIFs Choose Taghash for Seamless AML
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Moving beyond manual checks. We deliver unparalleled compliance automation, built for the rigor of SEBI regulations and the speed of modern finance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col p-6 h-full bg-white rounded-2xl shadow-xl transition duration-300 transform hover:scale-[1.02] hover:shadow-indigo-300 border border-gray-200 hover:border-indigo-500"
            >
              <div className="p-3 bg-indigo-50 rounded-xl w-fit mb-4 border border-indigo-200/50 group-hover:bg-indigo-100 transition duration-300">
                {item.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h2>
              <p className="text-base text-gray-600 flex-grow">
                {item.description}
              </p>
              <a href="#" className="mt-4 text-indigo-600 flex items-center text-sm font-semibold group-hover:text-indigo-700 transition duration-300">
                Explore Details
                <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition duration-300" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center p-8 bg-gray-50 rounded-2xl shadow-inner border border-indigo-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to Simplify Your AML Compliance?
            </h3>
            <p className="text-gray-600 mb-6 max-w-lg">
              Book a personalized demo to see how Taghash integrates with your existing operations and cuts down manual workload by 80%.
            </p>
            <button className="bg-indigo-600 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-indigo-500/50 hover:bg-indigo-700 transition duration-300 transform hover:shadow-indigo-400/70 hover:-translate-y-0.5">
              Talk to an Expert Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTaghash;