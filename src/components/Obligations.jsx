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
          <h2 className="text-blue-700 font-semibold tracking-wide uppercase">
            SEBI AML & CFT Compliance
          </h2>

          <h3 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
            Understand Your SEBI Obligations, Clause by Clause
          </h3>

          <p className="mt-4 text-sm text-slate-600 max-w-2xl mx-auto">
            Get clarity on jurisdictional compliance, PEP screening, required documents and monitoring obligations.
          </p>
        </div>

        {/* Clause Table Header */}
        <div className="mb-6">
          <h4 className="text-2xl font-bold text-slate-900">Clause Breakdown</h4>
          <p className="text-slate-500 mt-2">
            Detailed view of specific compliance requirements.
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_4px_30px_rgba(0,0,0,0.04)] overflow-hidden">
          <div>
            <table className="min-w-full text-left">
              <thead className="bg-slate-100 text-slate-900">
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
                  <td className="py-4 px-6 text-sm font-medium text-slate-700">18 (vi)</td>
                  <td className="py-6 px-6 text-sm text-slate-500">Criminal Background Verification</td>
                  <td className="py-6 px-6 text-sm text-slate-600">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800 border border-red-200 shadow-sm">
                      Critical
                    </span>
                  </td>
                  <td className="py-6 px-6 text-sm text-slate-500">
                    Mandatory checks before onboarding any investor.
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-sm font-medium text-slate-700">20 (i–iv)</td>
                  <td className="py-6 px-6 text-sm text-slate-500">PEP Screening</td>
                  <td className="py-6 px-6 text-sm text-slate-600">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 border border-orange-200 shadow-sm">
                      High
                    </span>
                  </td>
                  <td className="py-6 px-6 text-sm text-slate-500">
                    Enhanced due diligence, senior management approval, continuous
                    monitoring.
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-sm font-medium text-slate-700">32, 54, 62, 64, 65</td>
                  <td className="py-6 px-6 text-sm text-slate-500">
                    Sanctions & Terrorist List Screening
                  </td>
                  <td className="py-6 px-6 text-sm text-slate-600">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800 border border-red-200 shadow-sm">
                      Critical
                    </span>
                  </td>
                  <td className="py-6 px-6 text-sm text-slate-500">
                    Mandatory screening against UN, UAPA & designated lists.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Contact Card */}
        <div className="mt-14">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
            {/* Highlight Layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative flex flex-col items-center justify-center gap-10 sm:flex-row">
              {/* Phone Section */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 shadow-sm border border-blue-100">
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
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 shadow-sm border border-blue-100">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-medium text-slate-500 tracking-wide uppercase">
                    Email Address
                  </p>
                  <a
                    href="mailto:cno@sebi.gov.in"
                    className="text-lg font-semibold text-slate-900 hover:text-blue-600 transition-colors"
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
