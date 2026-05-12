import { BrainIcon, BookIcon, ChatIcon, MoonIcon } from './Icons';

export default function MeetNaya() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="meet-naya" className="max-w-7xl mx-auto px-8 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div>
          <div className="inline-block rounded-full bg-black text-white text-xs px-4 py-1.5">
            Your AI Companion
          </div>

          <h2
            className="text-4xl md:text-5xl font-normal text-black mt-6 max-w-lg"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Meet Naya — your personal mental wellness companion
          </h2>

          <p className="text-base text-[#6F6F6F] max-w-md mt-6 leading-relaxed">
            Naya is Geleya's AI-powered wellness guide — trained to listen with empathy, understand your academic
            stress, and respond with science-backed support. Available 24/7, Naya gets to know you better with every
            conversation.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <div className="rounded-full border border-gray-200 px-4 py-2 text-sm text-black flex items-center gap-2">
              <BrainIcon className="w-4 h-4" />
              Stress Detection
            </div>
            <div className="rounded-full border border-gray-200 px-4 py-2 text-sm text-black flex items-center gap-2">
              <BookIcon className="w-4 h-4" />
              Academic Awareness
            </div>
            <div className="rounded-full border border-gray-200 px-4 py-2 text-sm text-black flex items-center gap-2">
              <ChatIcon className="w-4 h-4" />
              Empathetic Chat
            </div>
            <div className="rounded-full border border-gray-200 px-4 py-2 text-sm text-black flex items-center gap-2">
              <MoonIcon className="w-4 h-4" />
              24/7 Available
            </div>
          </div>

          <button
            onClick={() => scrollTo('live-features')}
            className="text-sm text-black mt-8 underline-offset-4 hover:underline"
          >
            Chat with Naya →
          </button>
        </div>

        {/* Right Column - Chat UI */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6">
          {/* Chat Header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-semibold">
              N
            </div>
            <div className="flex-1">
              <div className="font-semibold text-black">Naya</div>
              <div className="flex items-center gap-2 text-xs text-[#6F6F6F]">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse-glow" />
                Online
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="space-y-4">
            <div className="flex justify-end">
              <div className="bg-black text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                I have 3 exams this week and I can't sleep
              </div>
            </div>

            <div className="flex justify-start">
              <div className="bg-gray-50 text-black rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                I hear you — that's a lot. Let's figure this out together. First, what's worrying you most right now?
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-black text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                Everything honestly...
              </div>
            </div>
          </div>

          {/* Stress Indicator */}
          <div className="mt-6 p-4 bg-purple-50 rounded-xl border border-purple-100">
            <div className="text-xs text-[#6F6F6F] mb-2">Detected Stress Level</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: '70%' }} />
            </div>
            <div className="text-sm text-purple-600 font-semibold">Moderate — 7/10</div>
          </div>
        </div>
      </div>
    </div>
  );
}
