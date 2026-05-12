import { LockIcon, ShieldIcon, BlockIcon, TrashIcon, UserIcon } from './Icons';

export default function PrivacySection() {
  const pillars = [
    {
      Icon: ShieldIcon,
      title: 'End-to-End Encrypted',
      desc: 'All conversations are fully encrypted',
    },
    {
      Icon: BlockIcon,
      title: 'Never Sold',
      desc: 'Your data is never sold to third parties',
    },
    {
      Icon: TrashIcon,
      title: 'Delete Anytime',
      desc: 'Remove your data at any time, instantly',
    },
    {
      Icon: UserIcon,
      title: 'Anonymous Mode',
      desc: 'Use Geleya without revealing your identity',
    },
  ];

  return (
    <div className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto">
          <LockIcon className="w-8 h-8 text-white" />
        </div>

        <h2
          className="text-3xl md:text-4xl text-white mt-6"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Your thoughts are private. Always.
        </h2>

        <p className="text-base text-white/70 mt-4 max-w-xl mx-auto">
          Geleya is built with privacy at its core. Your journal entries and conversations are never shared, never
          sold, and always protected.
        </p>

        {/* Privacy Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.Icon;
            return (
              <div
                key={index}
                className="bg-white/5 rounded-2xl p-6 text-center border border-white/10"
              >
                <div className="flex justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="font-semibold text-sm text-white mt-4">{pillar.title}</div>
                <div className="text-xs text-white/50 mt-2">{pillar.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
