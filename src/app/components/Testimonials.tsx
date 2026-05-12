export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Geleya understood my exam stress better than I could explain it myself.',
      name: 'Arjun K.',
      tag: '3rd Year Engineering Student',
    },
    {
      quote: 'I check in every morning now. It takes 2 minutes and I feel so much more in control of my day.',
      name: 'Priya M.',
      tag: '1st Year, New to City',
    },
    {
      quote: 'The Stress Score is so accurate. It knew I was burning out before I did.',
      name: 'Rahul S.',
      tag: 'MBA Student',
    },
    {
      quote: 'Finally something free that actually works for Indian college students.',
      name: 'Sneha T.',
      tag: '2nd Year, Commerce',
    },
    {
      quote: "It's like having a counselor available at 2AM during exam week.",
      name: 'Dev P.',
      tag: 'Final Year, Medical',
    },
  ];

  return (
    <div id="testimonials" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-block rounded-full bg-purple-100 text-purple-700 text-xs px-4 py-1.5 flex items-center gap-2">
            What Students Say
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="currentColor"/>
            </svg>
          </div>

          <h2
            className="text-3xl md:text-4xl text-black mt-4"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Real students. Real relief.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="text-sm text-amber-400">★★★★★</div>

              <blockquote
                className="text-lg text-black italic leading-snug mt-4"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                "{item.quote}"
              </blockquote>

              <div className="mt-4">
                <div className="font-semibold text-sm text-black">{item.name}</div>
                <div className="text-xs text-[#6F6F6F]">{item.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
