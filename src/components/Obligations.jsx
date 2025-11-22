import React from "react";
import { CheckCircle, Phone, Mail } from "lucide-react";

const Obligations = () => {
  return (
    <section id="obligations" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Heading */}
        <div className="text-center mb-16">
          <h2 className="text-blue-700 font-semibold tracking-wide uppercase">
            SEBI AML & CFT Compliance
          </h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
            Understand Your SEBI Obligations, Clause by Clause
          </h3>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Stay aligned with the SEBI Master Circular for AML & CFT compliance.
          </p>
        </div>

        {/* Clause Table */}
        <div className="bg-white rounded-2xl shadow-xl p-10 border border-slate-100">
          <h4 className="text-2xl font-bold text-slate-900 mb-6">Clause Breakdown</h4>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 text-sm">
                  <th className="py-3 px-4 font-semibold">Clause</th>
                  <th className="py-3 px-4 font-semibold">Focus Area</th>
                  <th className="py-3 px-4 font-semibold">Priority</th>
                  <th className="py-3 px-4 font-semibold">Requirement</th>
                </tr>
              </thead>
              
              <tbody className="text-slate-700">
                <tr className="border-b border-slate-200">
                  <td className="py-4 px-4 font-medium">18 (vi)</td>
                  <td className="py-4 px-4">Criminal Background Verification</td>
                  <td className="py-4 px-4 text-red-600 font-semibold">Critical</td>
                  <td className="py-4 px-4">Mandatory checks before onboarding any investor.</td>
                </tr>

                <tr className="border-b border-slate-200">
                  <td className="py-4 px-4 font-medium">20 (i–iv)</td>
                  <td className="py-4 px-4">PEP Screening</td>
                  <td className="py-4 px-4 text-orange-600 font-semibold">High</td>
                  <td className="py-4 px-4">
                    Enhanced due diligence, senior management approval, continuous monitoring.
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-4 font-medium">32, 54, 62, 64, 65</td>
                  <td className="py-4 px-4">Sanctions & Terrorist List Screening</td>
                  <td className="py-4 px-4 text-red-600 font-semibold">Critical</td>
                  <td className="py-4 px-4">
                    Mandatory screening against UN, UAPA & designated lists.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Light Info Card */}
        {/* Light Info Card */}
        <div className="mt-14">
          <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-8 shadow-lg">
            
            {/* Soft Highlight Layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative flex flex-col items-center justify-center gap-8 sm:flex-row">

              {/* Phone Section */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 shadow-sm">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-medium text-slate-500 tracking-wide uppercase">
                    CNO Contact
                  </p>
                  <p className="text-lg font-semibold text-slate-900">
                    +91 22 2644 9000
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block h-12 w-px bg-slate-200" />

              {/* Email Section */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 shadow-sm">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-medium text-slate-500 tracking-wide uppercase">
                    Email Address
                  </p>
                  <a
                    href="mailto:cno@sebi.gov.in"
                    className="text-lg font-semibold text-slate-900 transition-colors hover:text-blue-600"
                  >
                    cno@sebi.gov.in
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

    

      </div>
    </section>
  );
};

export default Obligations;
