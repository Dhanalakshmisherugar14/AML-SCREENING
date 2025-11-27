import React from "react";
import { CheckCircle, Phone, Mail } from "lucide-react";

const Obligations = () => {
  return (
    <section
      id="obligations"
      className="py-20 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Heading */}
        <div className="text-center mb-16">
          

          <h3 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
            Understand Your SEBI Obligations, Clause by Clause
          </h3>

          <h4 className="mt-4 text-lg text-slate-600 max-w-5xl mx-auto font-medium">
            Stay aligned with the SEBI Master Circular for AML & CFT compliance
          </h4>
        </div>

        

        {/* Table */}
        <div className="overflow-hidden rounded-3xl shadow-xl shadow-slate-200 bg-white">
          <table className="w-full text-left border-collapse">
            <thead className="text-slate-700 bg-slate-100 text-sm">
              <tr>
                <th scope="col" className="py-4 px-6 text-base md:text-lg font-bold">Clause</th>
                <th scope="col" className="py-4 px-6 text-base md:text-lg font-bold">Focus Area</th>
                <th scope="col" className="py-4 px-6 text-base md:text-lg font-bold">Priority</th>
                <th scope="col" className="py-4 px-6 text-base md:text-lg font-bold">Requirement</th>
              </tr>
            </thead>

            <tbody>
              {/* Row 1 */}
              <tr className="border-b border-gray-100">
                <td className="py-4 px-6 font-medium text-slate-500">18 (vi)</td>
                <td className="py-6 px-6 text-slate-500">Criminal Background Verification</td>
                <td className="py-6 px-6 text-slate-600">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800 border border-red-200 shadow-sm">
                    Critical
                  </span>
                </td>
                <td className="py-6 px-6 text-slate-500">
                  Mandatory checks before onboarding any investor.
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="border-b border-gray-100">
                <td className="py-4 px-6 font-medium text-slate-500">20 (i–iv)</td>
                <td className="py-6 px-6 text-slate-500">Politically Exposed Persons (PEP) Screening</td>
                <td className="py-6 px-6 text-slate-600">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 border border-orange-200 shadow-sm">
                    High
                  </span>
                </td>
                <td className="py-6 px-6 text-slate-500">
                  Enhanced due diligence + senior management approval + continuous monitoring.
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="border-b border-gray-100">
                <td className="py-4 px-6 font-medium text-slate-500">32, 54, 62, 64, 65</td>
                <td className="py-6 px-6 text-slate-500">
                  Sanctions & Terrorist List Screening
                </td>
                <td className="py-6 px-6 text-slate-600">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800 border border-red-200 shadow-sm">
                    Critical
                  </span>
                </td>
                <td className="py-6 px-6 text-slate-500">
                  Mandatory screening against UN, UAPA and designated lists.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        
      </div>
    </section>
  );
};

export default Obligations;
