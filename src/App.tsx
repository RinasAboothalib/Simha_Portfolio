import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/TechMarquee';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { UxSection } from './components/UxSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { StrengthsSection } from './components/StrengthsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { Toast } from './components/Toast';
import { PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    showToast('Email address copied to clipboard!');
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#FFF9FB] text-[#1F1B24] dark:bg-[#171218] dark:text-[#FFF7FB] transition-colors duration-300 font-sans selection:bg-[#F6D7E3] selection:text-[#3B193F] dark:selection:bg-[#8E3D62] dark:selection:text-[#FFF7FB] relative overflow-x-hidden">
        
        {/* Navigation Bar */}
        <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* Main Page Content */}
        <main>
          <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />
          <TechMarquee />
          <AboutSection />
          <SkillsSection />
          <UxSection />
          <ProjectShowcase />
          <StrengthsSection />
          <EducationSection />
          <ContactSection onShowToast={showToast} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Curriculum Vitae Modal */}
        <CvModal
          isOpen={isCvModalOpen}
          onClose={() => setIsCvModalOpen(false)}
          onCopyEmail={handleCopyEmail}
        />

        {/* Notification Toast */}
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      </div>
    </ThemeProvider>
  );
}
