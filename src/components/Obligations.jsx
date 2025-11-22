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
        <div className="mt-14 grid md:grid-cols-2 gap-10">

          {/* Left */}
          <div className="bg-white border border-slate-100 rounded-2xl p-10 shadow-lg">
            <h4 className="text-2xl font-bold text-slate-900 mb-4">What This Means for You</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <p className="text-slate-700">Automated investor screening to eliminate manual errors.</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <p className="text-slate-700">Comply with all SEBI-mandated AML checks seamlessly.</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <p className="text-slate-700">Instant PEP, sanctions & criminal background alerts.</p>
              </li>
            </ul>
          </div>

          {/* Right / Contact Card */}
          <div className="bg-gradient-to-r from-blue-50 to-slate-100 border border-slate-200 rounded-2xl p-10 shadow-lg">
            <h4 className="text-2xl font-bold text-slate-900 mb-4">SEBI Compliance Helpdesk</h4>
            <p className="text-slate-600 mb-6">For regulatory queries, reach SEBI directly:</p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-blue-700" />
                <p className="font-medium text-slate-800">+91 22 2644 9000</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-blue-700" />
                <p className="font-medium text-slate-800">cno@sebi.gov.in</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Obligations;
