import { Heart } from 'lucide-react';
import { PhoneLandlineIcon } from './Icons';
import logoImg from '../../imports/Geleya-logo.svg';

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-8">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Left - Logo & Social */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-2">
              <img src={logoImg} alt="Geleya" className="w-8 h-8" />
              <div
                className="text-2xl text-black"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Geleya
              </div>
            </div>
            <p className="text-sm text-[#6F6F6F] mt-2">AI-powered mental wellness for every student.</p>
          </div>

          {/* Product Column */}
          <div>
            <div className="font-semibold text-sm text-black mb-3">Product</div>
            <div className="space-y-2">
              <button onClick={() => scrollTo('live-features')} className="block text-sm text-[#6F6F6F] hover:text-black">
                Features
              </button>
              <button onClick={() => scrollTo('how-it-works')} className="block text-sm text-[#6F6F6F] hover:text-black">
                How It Works
              </button>
              <button onClick={() => scrollTo('for-institutions')} className="block text-sm text-[#6F6F6F] hover:text-black">
                For Institutions
              </button>
              <button onClick={() => scrollTo('coming-soon')} className="block text-sm text-[#6F6F6F] hover:text-black">
                Roadmap
              </button>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <div className="font-semibold text-sm text-black mb-3">Company</div>
            <div className="space-y-2">
              <button onClick={() => scrollTo('meet-naya')} className="block text-sm text-[#6F6F6F] hover:text-black">
                About
              </button>
              <button onClick={() => scrollTo('hero')} className="block text-sm text-[#6F6F6F] hover:text-black">
                Mission
              </button>
              <button onClick={() => scrollTo('privacy-section')} className="block text-sm text-[#6F6F6F] hover:text-black">
                Privacy Policy
              </button>
              <button onClick={() => scrollTo('footer')} className="block text-sm text-[#6F6F6F] hover:text-black">
                Contact
              </button>
            </div>
          </div>

          {/* Support Column */}
          <div>
            <div className="font-semibold text-sm text-black mb-3">Support</div>
            <div className="space-y-2">
              <button onClick={() => scrollTo('faq')} className="block text-sm text-[#6F6F6F] hover:text-black">
                FAQ
              </button>
              <div className="text-sm text-[#6F6F6F]">India Helplines</div>
              <div className="text-sm text-[#6F6F6F]">Student Resources</div>
              <div className="text-sm text-[#6F6F6F]">Blog</div>
            </div>

            {/* India Helplines */}
            <div className="mt-4 space-y-1">
              <div className="text-xs text-[#6F6F6F] flex items-center gap-2">
                <PhoneLandlineIcon className="w-3 h-3" />
                Phone: +91 9986998851
              </div>
            </div>

            {/* Contact Email */}
            <div className="mt-4">
              <a href="mailto:kishanmpatil1@gmail.com" className="text-sm text-[#6F6F6F] hover:text-black">
                kishanmpatil1@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-[#6F6F6F] flex items-center gap-1">
            © 2026 Geleya. Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for Indian students.
          </div>
          <div className="text-xs text-[#6F6F6F]">Powered by Gemma 4 + Google AI Studio</div>
        </div>
      </div>
    </footer>
  );
}
