import { PeopleIcon, MicIcon, ChartIcon, MoonIcon, MeditationIcon, TargetIcon, TeacherIcon, PhoneIcon } from './Icons';

export default function ComingSoon() {
  const features = [
    {
      Icon: PeopleIcon,
      color: 'bg-purple-100',
      textColor: 'text-purple-600',
      title: 'Geleya Buddies',
      desc: 'Find your wellness buddy and grow together',
    },
    {
      Icon: MicIcon,
      color: 'bg-blue-100',
      textColor: 'text-blue-600',
      title: 'Voice Journal',
      desc: 'Speak your mind — Geleya listens and responds',
    },
    {
      Icon: ChartIcon,
      color: 'bg-green-100',
      textColor: 'text-green-600',
      title: 'Weekly Wellness Report',
      desc: 'Your personal mental health trends every week',
    },
    {
      Icon: MoonIcon,
      color: 'bg-indigo-100',
      textColor: 'text-indigo-600',
      title: 'Sleep Tracker',
      desc: 'Track rest patterns linked to your stress score',
    },
    {
      Icon: MeditationIcon,
      color: 'bg-rose-100',
      textColor: 'text-rose-600',
      title: 'Breathing Exercises',
      desc: 'Guided breathing to calm anxiety instantly',
    },
    {
      Icon: TargetIcon,
      color: 'bg-orange-100',
      textColor: 'text-orange-600',
      title: 'Habit Builder',
      desc: 'Build small, lasting wellness habits daily',
    },
    {
      Icon: TeacherIcon,
      color: 'bg-teal-100',
      textColor: 'text-teal-600',
      title: 'Faculty Dashboard',
      desc: 'Anonymous class-level stress insights',
    },
    {
      Icon: PhoneIcon,
      color: 'bg-gray-100',
      textColor: 'text-gray-600',
      title: 'Mobile App',
      desc: 'Geleya on iOS and Android — coming soon',
    },
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-block rounded-full bg-amber-100 text-amber-700 text-xs px-4 py-1.5 flex items-center gap-2">
            What's Coming Next
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
            </svg>
          </div>

          <h2
            className="text-3xl md:text-4xl text-black mt-4"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            We're just getting started.
          </h2>

          <p className="text-sm text-[#6F6F6F] mt-2">
            These features are in development and coming very soon to Geleya.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.Icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 opacity-80 hover:opacity-100 hover:shadow-sm hover:scale-[1.01] transition-all"
              >
                <div className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${feature.textColor}`} />
                </div>

                <div className="font-semibold text-sm text-black mt-4">{feature.title}</div>

                <div className="text-xs text-[#6F6F6F] mt-1">{feature.desc}</div>

                <div className="inline-block rounded-full bg-amber-100 text-amber-700 text-xs px-3 py-1 mt-3">
                  COMING SOON
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
