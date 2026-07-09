import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import JourneySection from './sections/JourneySection';
import ContactSection from './sections/ContactSection';


export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-[#F8FAFC] font-sans selection:bg-[#38BDF8]/30 overflow-x-hidden">
      {/* Global CSS for elements difficult to target with basic Tailwind classes in this environment */}

      <Navbar isScrolled={isScrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <main>
        <HeroSection />
        <div className="w-full max-w-360 mx-auto px-6 md:px-12"><div className="h-px w-full bg-linear-to-r from-transparent via-[#1E293B] to-transparent"></div></div>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <JourneySection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}