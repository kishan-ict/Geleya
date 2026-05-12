import { BrainIcon, BookIcon, CalendarIcon, DocumentIcon, SleepIcon, PersonStandingIcon } from './Icons';

export default function LiveFeatures() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="live-features" className="max-w-7xl mx-auto px-8 py-24">
      {/* Section Header */}
      <div className="text-center">
        <div className="inline-block rounded-full border border-gray-200 text-xs px-4 py-1.5 text-[#6F6F6F]">
          What Makes Geleya Different
        </div>

        <h2
          className="text-4xl md:text-5xl text-black mt-4"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Two features no one else has.
        </h2>

        <p className="text-base text-[#6F6F6F] mt-4">
          Built specifically for Indian college students — free, intelligent, and always available.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
        {/* Card 1 - AI Stress Score */}
        <div className="bg-black rounded-3xl p-10 text-white">
          <div className="inline-flex items-center gap-2 bg-green-500/20 rounded-full px-3 py-1 text-xs">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse-glow" />
            LIVE NOW
          </div>

          <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mt-6">
            <BrainIcon className="w-7 h-7 text-white" />
          </div>

          <h3 className="text-3xl mt-6" style={{ fontFamily: "'Instrument Serif', serif" }}>
            AI Stress Score
          </h3>

          <p className="text-base text-white/70 mt-4 leading-relaxed">
            Get your personalized stress level scored from 0 to 10 in real time. Geleya uses a Neural Network +
            Sentiment Analysis to read your journal entry and calculate exactly how stressed you are — then tells you
            WHY.
          </p>

          {/* Mock Score Display */}
          <div className="mt-8">
            <div className="text-6xl text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>
              7.2
            </div>
            <div className="text-sm text-white/50">/10 Stress Score</div>

            <div className="w-full bg-white/10 rounded-full h-3 mt-4 relative overflow-hidden">
              <div
                className="h-3 rounded-full"
                style={{
                  width: '72%',
                  background: 'linear-gradient(to right, #EF4444, #F59E0B, #10B981)',
                }}
              />
            </div>

            <div className="text-sm text-white/70 mt-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              Moderate Stress Detected
            </div>
          </div>

          <button
            onClick={() => scrollTo('final-cta')}
            className="text-sm text-white underline underline-offset-4 mt-8 hover:opacity-80"
          >
            Check Your Score →
          </button>
        </div>

        {/* Card 2 - Academic Load Tracker */}
        <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
          <div className="inline-flex items-center gap-2 bg-green-500/20 rounded-full px-3 py-1 text-xs text-green-700">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse-glow" />
            LIVE NOW
          </div>

          <div className="w-14 h-14 rounded-full bg-black/10 flex items-center justify-center mt-6">
            <BookIcon className="w-7 h-7 text-black" />
          </div>

          <h3 className="text-3xl text-black mt-6" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Academic Load Tracker
          </h3>

          <p className="text-base text-[#6F6F6F] mt-4 leading-relaxed">
            Tell Geleya about your exam week, assignment load, and sleep hours. Our Neural Network predicts your stress
            BEFORE it hits — so you can take action early, not after a crisis.
          </p>

          {/* Mock Tracker */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                Exam Week
              </span>
              <div className="w-12 h-6 bg-black rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="flex items-center gap-2">
                  <DocumentIcon className="w-4 h-4" />
                  Assignments
                </span>
                <span className="text-red-500">8/10</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '80%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="flex items-center gap-2">
                  <SleepIcon className="w-4 h-4" />
                  Sleep
                </span>
                <span className="text-amber-500">4/10</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '40%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="flex items-center gap-2">
                  <PersonStandingIcon className="w-4 h-4" />
                  Isolation
                </span>
                <span className="text-yellow-500">6/10</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '60%' }} />
              </div>
            </div>

            {/* Prediction Box */}
            <div className="rounded-xl bg-red-50 border border-red-100 p-4 mt-6">
              <div className="text-sm text-red-600 font-semibold flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="currentColor"/>
                </svg>
                Prediction: AT RISK
              </div>
              <div className="text-sm text-red-600 mt-1">
                High stress likely in 48 hours — take a break now.
              </div>
            </div>
          </div>

          <button
            onClick={() => scrollTo('final-cta')}
            className="text-sm text-black underline underline-offset-4 mt-8 hover:opacity-80"
          >
            Track Your Load →
          </button>
        </div>
      </div>
    </div>
  );
}
