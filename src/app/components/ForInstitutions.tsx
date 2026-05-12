import { SchoolIcon } from './Icons';

export default function ForInstitutions() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left - Text Content */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 text-xs px-4 py-1.5">
            For Institutions
            <SchoolIcon className="w-4 h-4" />
          </div>

          <h2
            className="text-3xl md:text-4xl text-black mt-6"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Bring Geleya to your campus.
          </h2>

          <p className="text-base text-[#6F6F6F] leading-relaxed mt-6">
            Partner with Geleya to give every student on your campus access to AI-powered mental health support — at
            zero cost to students.
            <br />
            <br />
            Get campus-wide stress trend data, early warning alerts, and counselor triage support — all in one
            dashboard.
          </p>

          {/* Benefits List */}
          <div className="space-y-3 mt-8">
            <div className="flex items-center gap-3 text-sm text-black">
              <span className="text-green-500">✅</span>
              Campus-wide stress trend analytics
            </div>
            <div className="flex items-center gap-3 text-sm text-black">
              <span className="text-green-500">✅</span>
              Early warning system for at-risk students
            </div>
            <div className="flex items-center gap-3 text-sm text-black">
              <span className="text-green-500">✅</span>
              Reduces counselor workload by 60%
            </div>
            <div className="flex items-center gap-3 text-sm text-black">
              <span className="text-green-500">✅</span>
              Free for all students, always
            </div>
            <div className="flex items-center gap-3 text-sm text-black">
              <span className="text-green-500">✅</span>
              GDPR & Data Privacy compliant
            </div>
          </div>

          <button
            onClick={() => scrollTo('footer')}
            className="mt-8 rounded-full px-8 py-4 bg-black text-white transition-transform hover:scale-105"
          >
            Partner With Us
          </button>
        </div>

        {/* Right - Dashboard Mockup */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="font-semibold text-sm text-black">Campus Wellness Dashboard</div>
              <div className="text-xs text-[#6F6F6F] mt-1">CIT Campus</div>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
              <div className="text-2xl text-black font-semibold" style={{ fontFamily: "'Instrument Serif', serif" }}>
                247
              </div>
              <div className="text-xs text-[#6F6F6F] mt-1">Active Students Today</div>
            </div>

            <div className="bg-red-50 rounded-xl p-4 text-center border border-red-100">
              <div className="text-2xl text-red-600 font-semibold" style={{ fontFamily: "'Instrument Serif', serif" }}>
                12
              </div>
              <div className="text-xs text-red-600 mt-1">At Risk</div>
            </div>

            <div className="bg-green-50 rounded-xl p-4 text-center border border-green-100">
              <div
                className="text-2xl text-green-600 font-semibold"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                89%
              </div>
              <div className="text-xs text-green-600 mt-1">Feeling Better</div>
            </div>
          </div>

          {/* Mini Chart */}
          <div className="mb-6">
            <div className="text-sm text-black font-semibold mb-3">Campus Stress Trend — This Week</div>
            <div className="flex items-end gap-2 h-24">
              {[40, 55, 65, 70, 45, 30, 35].map((height, index) => (
                <div key={index} className="flex-1 flex flex-col justify-end">
                  <div
                    className="w-full rounded-t bg-gradient-to-t from-purple-600 to-purple-400"
                    style={{ height: `${height}%` }}
                  />
                  <div className="text-xs text-center text-[#6F6F6F] mt-1">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alert */}
          <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex items-center justify-between">
            <div className="text-sm text-red-600 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-600" />
              3 students flagged for counselor review
            </div>
            <button className="text-xs text-purple-600 underline underline-offset-2">View Details →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
