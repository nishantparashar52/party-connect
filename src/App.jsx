import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ThemeSpotlight from './components/ThemeSpotlight';
import SafetyFeatures from './components/SafetyFeatures';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FormModal from './components/FormModal';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [showHostForm, setShowHostForm] = useState(false);
  const [showGuestForm, setShowGuestForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // TODO: Replace with your Google Form URLs
  const hostFormUrl = "https://docs.google.com/forms/d/e/YOUR_HOST_FORM_ID/viewform";
  const guestFormUrl = "https://docs.google.com/forms/d/e/YOUR_GUEST_FORM_ID/viewform";

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-50">
      <Hero 
        scrollY={scrollY} 
        onHostClick={() => setShowHostForm(true)}
        onGuestClick={() => setShowGuestForm(true)}
      />
      <HowItWorks scrollY={scrollY} />
      <ThemeSpotlight scrollY={scrollY} />
      <SafetyFeatures />
      <CTA 
        onHostClick={() => setShowHostForm(true)}
        onGuestClick={() => setShowGuestForm(true)}
      />
      <Footer />

      {showHostForm && (
        <FormModal
          title="Host Registration"
          formUrl={hostFormUrl}
          onClose={() => setShowHostForm(false)}
        />
      )}

      {showGuestForm && (
        <FormModal
          title="Guest Registration"
          formUrl={guestFormUrl}
          onClose={() => setShowGuestForm(false)}
        />
      )}
    </div>
  );
}

export default App;