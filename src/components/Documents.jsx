import React from "react";
import { FileText, Download } from "lucide-react";

const documents = [
  {
    type: "Checklist",
    description: "Complete SEBI AML Compliance Checklist",
    icon: FileText,
  },
  {
    type: "Report Template",
    description: "Sample AML Screening Report Format",
    icon: FileText,
  },
  {
    type: "Regulatory Guide",
    description: "SEBI Master Circular Clause Reference",
    icon: FileText,
  },
];

const Documents = () => {
  return (
    <section id="documents" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Access All SEBI-Mandated AML Compliance Documents
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Download SEBI-mandated templates and guides.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-100 bg-white p-8 shadow-xl 
                         hover:shadow-2xl hover:border-indigo-200 
                         transform hover:-translate-y-2 transition-all duration-300 ease-in-out 
                         flex flex-col justify-between items-center text-center"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 shadow-inner">
                <doc.icon className="h-8 w-8 text-indigo-600" />
              </div>

              <div className="text-base font-semibold text-indigo-600 mb-2">
                {doc.type}
              </div>

              <h3 className="mt-2 mb-6 text-xl font-bold text-gray-900 flex-grow">
                {doc.description}
              </h3>

              {/* Button */}
              <button className="w-full flex items-center justify-center gap-2 
                                 border border-indigo-300 text-indigo-700 rounded-lg py-3.5 px-6 
                                 font-semibold bg-white hover:bg-indigo-600 hover:text-white 
                                 hover:border-indigo-600 transition-all duration-300 shadow-md">
                <Download className="h-5 w-5" />
                Download PDF
              </button>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="mt-12 text-center text-sm italic text-gray-500">
          (All documents updated to reflect SEBI regulations as of June 2025.)
        </p>
      </div>
    </section>
  );
};

export default Documents;