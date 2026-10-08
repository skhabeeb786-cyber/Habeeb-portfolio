import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/common/LoadingScreen';
import SEOHead from './components/common/SEOHead';
import Navbar from './components/common/Navbar';
import HeroSection from './components/sections/HeroSection';
import StatsSection from './components/sections/StatsSection';
import AboutSection from './components/sections/AboutSection';
import ExperienceSection from './components/sections/ExperienceSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ResultsSection from './components/sections/ResultsSection';
import CertificationsSection from './components/sections/CertificationsSection';
import MarketingProcess from './components/sections/MarketingProcess';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/common/Footer';
import BackToTop from './components/common/BackToTop';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Dynamic SEO Meta */}
      <SEOHead />

      {/* Loading Screen Animation */}
      {loading && <LoadingScreen onFinished={() => setLoading(false)} />}

      {/* Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ResultsSection />
        <CertificationsSection />
        <MarketingProcess />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Floating Button */}
      <BackToTop />
    </div>
  );
}
