import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import MeetNaya from './components/MeetNaya';
import LiveFeatures from './components/LiveFeatures';
import ComingSoon from './components/ComingSoon';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import ForInstitutions from './components/ForInstitutions';
import PrivacySection from './components/PrivacySection';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <TrustBar />
      <MeetNaya />
      <LiveFeatures />
      <div id="coming-soon">
        <ComingSoon />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <Testimonials />
      <div id="for-institutions">
        <ForInstitutions />
      </div>
      <div id="privacy-section">
        <PrivacySection />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <FinalCTA />
      <Footer />
    </div>
  );
}
