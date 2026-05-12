import { WriteIcon, BrainIcon, LightbulbIcon } from './Icons';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      Icon: WriteIcon,
      title: 'Write your thoughts',
      desc: 'Open Geleya and write freely in your daily journal — no rules, no judgment.',
    },
    {
      number: '02',
      Icon: BrainIcon,
      title: 'Geleya analyzes',
      desc: 'Our AI reads your entry, detects your stress level, and understands your academic situation.',
    },
    {
      number: '03',
      Icon: LightbulbIcon,
      title: 'Get your support',
      desc: 'Receive a personalized response, your stress score, and coping strategies — all in under 30 seconds.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-24">
      {/* Section Header */}
      <div className="text-center">
        <div className="inline-block rounded-full border border-gray-200 text-xs px-4 py-1.5 text-[#6F6F6F]">
          Simple & Fast
        </div>

        <h2
          className="text-4xl md:text-5xl text-black mt-4"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Feel better in 3 simple steps.
        </h2>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 relative">
        {steps.map((step, index) => {
          const Icon = step.Icon;
          return (
            <div key={index} className="relative">
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                <div
                  className="text-6xl text-gray-200 font-normal"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {step.number}
                </div>

                <div className="my-4">
                  <Icon className="w-10 h-10 text-black" />
                </div>

                <h3
                  className="text-xl text-black"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {step.title}
                </h3>

                <p className="text-sm text-[#6F6F6F] mt-2 leading-relaxed">{step.desc}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-2xl text-gray-200">
                  →
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
