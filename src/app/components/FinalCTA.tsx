import { useState } from 'react';

import { Star } from 'lucide-react';
import FeatureChoicePopup from './FeatureChoicePopup';

export default function FinalCTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks! We'll notify you at ${email} when we launch.`);
    setEmail('');
  };

  return (
    <div id="final-cta" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2
          className="text-4xl md:text-5xl text-black"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Start your wellness journey today.
        </h2>

        <p className="text-base text-[#6F6F6F] mt-4">
          Join thousands of students who use Geleya to manage stress, understand their mind, and feel better — for
          free.
        </p>

        {/* Email Input Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="rounded-full border border-gray-200 px-6 py-4 text-sm w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <button
            type="submit"
            className="rounded-full bg-black text-white px-8 py-4 text-sm transition-transform hover:scale-105 whitespace-nowrap"
          >
            Notify Me When We Launch
          </button>
        </form>

        <div className="text-xs text-[#6F6F6F] mt-3">No spam. Just updates.</div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-12 max-w-md mx-auto">
          <div className="flex-1 border-t border-gray-200" />
          <span className="text-sm text-[#6F6F6F]">OR</span>
          <div className="flex-1 border-t border-gray-200" />
        </div>

        {/* Large CTA Button - Replaced with animated SendMessage button and Popup */}
        <div className="flex justify-center mt-6">
          <FeatureChoicePopup />
        </div>

        <div className="text-xs text-[#6F6F6F] mt-3">No account needed. Just open and start.</div>
      </div>
    </div>
  );
}
