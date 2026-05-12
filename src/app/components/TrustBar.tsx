import { FlagIcon } from './Icons';

export default function TrustBar() {
  return (
    <div className="border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-[#6F6F6F] flex items-center gap-2">
          Trusted by students across India
          <FlagIcon className="w-4 h-4 text-orange-500" />
        </div>

        <div className="flex items-center gap-8 divide-x divide-gray-200">
          <div className="flex flex-col items-center px-6">
            <div className="text-2xl text-black" style={{ fontFamily: "'Instrument Serif', serif" }}>
              10,000+
            </div>
            <div className="text-xs text-[#6F6F6F]">Students Supported</div>
          </div>

          <div className="flex flex-col items-center px-6">
            <div className="text-2xl text-black" style={{ fontFamily: "'Instrument Serif', serif" }}>
              4.9★
            </div>
            <div className="text-xs text-[#6F6F6F]">Average Rating</div>
          </div>

          <div className="flex flex-col items-center px-6">
            <div className="text-2xl text-black" style={{ fontFamily: "'Instrument Serif', serif" }}>
              98%
            </div>
            <div className="text-xs text-[#6F6F6F]">Feel Better After 1 Week</div>
          </div>
        </div>
      </div>
    </div>
  );
}
