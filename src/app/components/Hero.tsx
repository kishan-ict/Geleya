import { useEffect, useRef } from 'react';
import logoImg from '../../imports/Geleya-logo.svg';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId: number;

    const checkFade = () => {
      const { currentTime, duration } = video;
      const fadeStart = duration - 0.5;

      if (currentTime < 0.5) {
        video.style.opacity = String(currentTime / 0.5);
      } else if (currentTime >= fadeStart) {
        video.style.opacity = String((duration - currentTime) / 0.5);
      } else {
        video.style.opacity = '1';
      }

      rafId = requestAnimationFrame(checkFade);
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        video.play();
      }, 100);
    };

    video.addEventListener('ended', handleEnded);
    video.play();
    rafId = requestAnimationFrame(checkFade);

    return () => {
      video.removeEventListener('ended', handleEnded);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 z-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-transparent to-background" />

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="Geleya" className="w-10 h-10" />
          <div
            className="text-3xl tracking-tight text-black cursor-pointer"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Geleya
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <button onClick={() => scrollTo('hero')} className="text-black">
            Home
          </button>
          <button onClick={() => scrollTo('meet-naya')} className="text-[#6F6F6F]">
            About
          </button>
          <button onClick={() => scrollTo('live-features')} className="text-[#6F6F6F]">
            Features
          </button>
          <button onClick={() => scrollTo('testimonials')} className="text-[#6F6F6F]">
            Community
          </button>
          <button onClick={() => scrollTo('footer')} className="text-[#6F6F6F]">
            Contact
          </button>
        </div>

        <button
          onClick={() => scrollTo('final-cta')}
          className="rounded-full px-6 py-2.5 bg-black text-white text-sm transition-transform hover:scale-105"
        >
          Try Geleya Free
        </button>
      </nav>

      {/* Hero Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center pb-40"
        style={{ paddingTop: 'calc(8rem - 75px)' }}
        id="hero"
      >
        <h1
          className="text-5xl md:text-6xl lg:text-8xl font-normal text-black max-w-5xl animate-fade-rise"
          style={{
            fontFamily: "'Instrument Serif', serif",
            lineHeight: 0.95,
            letterSpacing: '-2.46px',
          }}
        >
          Your mind deserves a{' '}
          <span className="italic text-[#6F6F6F]">calm,</span> <span className="italic text-[#6F6F6F]">intelligent</span> space.
        </h1>

        <p className="text-base md:text-lg text-[#6F6F6F] max-w-2xl mt-8 animate-fade-rise-delay px-4">
          Geleya listens, understands, and supports you — powered by AI trained to care.
        </p>

        <button
          onClick={() => scrollTo('live-features')}
          className="mt-12 rounded-full px-14 py-5 bg-black text-white transition-transform hover:scale-105 animate-fade-rise-delay-2"
        >
          Start Your Journey
        </button>
      </div>
    </div>
  );
}
