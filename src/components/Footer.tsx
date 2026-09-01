import React from 'react';
import { Github, Mail, ArrowUp, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-12 border-t border-[#F6D7E3] dark:border-[#3D273E] bg-[#FBEAF0]/40 dark:bg-[#171218] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-[#F6D7E3] dark:border-[#3D273E]">
          
          {/* Brand & Identity */}
          <div className="space-y-2">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#3B193F] via-[#8E3D62] to-[#D85C8B] flex items-center justify-center text-white font-bold text-sm shadow-xs">
                FS
              </div>
              <span className="font-extrabold text-base tracking-tight text-[#3B193F] dark:text-[#FFF7FB]">
                {PERSONAL_INFO.name.toUpperCase()}
              </span>
            </a>
            <p className="text-xs sm:text-sm text-[#8E3D62] dark:text-[#E56B9F] font-semibold">
              {PERSONAL_INFO.primaryBadge}
            </p>
            <p className="text-xs text-[#746A73] dark:text-[#BAAEB7] max-w-sm">
              HND IT student passionate about building intuitive, responsive web platforms and thoughtful user journeys.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-[#746A73] dark:text-[#BAAEB7]">
            <a href="#home" className="hover:text-[#D85C8B] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#D85C8B] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#D85C8B] transition-colors">Skills</a>
            <a href="#project" className="hover:text-[#D85C8B] transition-colors">Project</a>
            <a href="#education" className="hover:text-[#D85C8B] transition-colors">Education</a>
            <a href="#strengths" className="hover:text-[#D85C8B] transition-colors">Strengths</a>
            <a href="#contact" className="hover:text-[#D85C8B] transition-colors">Contact</a>
          </div>

          {/* Social & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] text-[#1F1B24] dark:text-[#FFF7FB] hover:text-[#D85C8B] hover:border-[#D85C8B]/50 transition-all shadow-xs"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-full bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] text-[#1F1B24] dark:text-[#FFF7FB] hover:text-[#D85C8B] hover:border-[#D85C8B]/50 transition-all shadow-xs"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#FBEAF0] dark:bg-[#241A25] border border-[#D85C8B]/30 text-[#8E3D62] dark:text-[#E56B9F] hover:bg-[#F6D7E3] transition-colors shadow-xs cursor-pointer"
              aria-label="Scroll back to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#746A73] dark:text-[#BAAEB7]">
          <p>© 2026 {PERSONAL_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Built with precision for full stack & UX opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
