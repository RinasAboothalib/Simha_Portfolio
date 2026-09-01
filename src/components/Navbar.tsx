import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sun, 
  Moon, 
  Github, 
  FileDown, 
  Menu, 
  X, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenCvModal: () => void;
}

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Project', href: '#project' },
  { name: 'Education', href: '#education' },
  { name: 'Strengths', href: '#strengths' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 py-3 sm:py-4 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo Container */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto flex items-center gap-2 group px-3 py-2 rounded-full bg-[#FFF9FB]/85 dark:bg-[#241A25]/90 backdrop-blur-md border border-[#F6D7E3] dark:border-[#3D273E] shadow-sm hover:border-[#D85C8B]/60 transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#3B193F] via-[#8E3D62] to-[#D85C8B] flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
            FS
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#3B193F] dark:text-[#FFF7FB] group-hover:text-[#D85C8B] transition-colors">
              {PERSONAL_INFO.shortName.toUpperCase()}
            </span>
            <span className="text-[10px] tracking-widest text-[#8E3D62] dark:text-[#E56B9F] font-medium hidden sm:inline">
              PORTFOLIO
            </span>
          </div>
        </motion.a>

        {/* Center Desktop Navigation Pill */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pointer-events-auto hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#FFF9FB]/85 dark:bg-[#241A25]/90 backdrop-blur-md border border-[#F6D7E3] dark:border-[#3D273E] shadow-sm"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-[#3B193F] dark:text-[#FFF7FB] font-semibold'
                    : 'text-[#746A73] dark:text-[#BAAEB7] hover:text-[#D85C8B] dark:hover:text-[#E56B9F]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-[#F6D7E3] dark:bg-[#8E3D62]/50 rounded-full -z-10 border border-[#D85C8B]/30"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </motion.nav>

        {/* Right Action Icons & Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto flex items-center gap-1.5 sm:gap-2"
        >
          {/* GitHub Button */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:px-3 sm:py-2 rounded-full bg-[#FFF9FB]/85 dark:bg-[#241A25]/90 backdrop-blur-md border border-[#F6D7E3] dark:border-[#3D273E] text-[#1F1B24] dark:text-[#FFF7FB] hover:text-[#D85C8B] dark:hover:text-[#E56B9F] hover:border-[#D85C8B]/40 transition-all flex items-center gap-1.5 text-xs font-medium shadow-sm"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
            <span className="hidden xl:inline">GitHub</span>
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 sm:p-2.5 rounded-full bg-[#FFF9FB]/85 dark:bg-[#241A25]/90 backdrop-blur-md border border-[#F6D7E3] dark:border-[#3D273E] text-[#8E3D62] dark:text-[#C59AE8] hover:bg-[#F6D7E3]/50 dark:hover:bg-[#3D273E] hover:border-[#D85C8B]/40 transition-all shadow-sm cursor-pointer"
            aria-label="Toggle light or dark theme"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun className="w-4 h-4 text-[#F6C7B6]" /> : <Moon className="w-4 h-4 text-[#8E3D62]" />}
          </button>

          {/* Download / View CV Trigger */}
          <button
            onClick={onOpenCvModal}
            className="px-3.5 py-2 rounded-full bg-gradient-to-r from-[#D85C8B] via-[#8E3D62] to-[#3B193F] text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md hover:opacity-95 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <FileDown className="w-4 h-4" />
            <span className="hidden sm:inline">Download CV</span>
            <span className="sm:hidden">CV</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-[#FFF9FB]/85 dark:bg-[#241A25]/90 backdrop-blur-md border border-[#F6D7E3] dark:border-[#3D273E] text-[#1F1B24] dark:text-[#FFF7FB] hover:border-[#D85C8B]/40 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="pointer-events-auto lg:hidden mt-3 max-w-md mx-auto rounded-2xl bg-[#FFF9FB]/95 dark:bg-[#241A25]/95 backdrop-blur-xl border border-[#D85C8B]/30 shadow-2xl p-4 overflow-hidden"
          >
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#F6D7E3] dark:bg-[#8E3D62]/40 text-[#3B193F] dark:text-[#FFF7FB] font-semibold border border-[#D85C8B]/20'
                        : 'text-[#746A73] dark:text-[#BAAEB7] hover:bg-[#FBEAF0] dark:hover:bg-[#1F1722]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <Sparkles className="w-3.5 h-3.5 text-[#D85C8B]" />}
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-[#F6D7E3] dark:border-[#3D273E] flex items-center justify-between gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-[#FBEAF0] dark:bg-[#1F1722] text-xs font-medium text-[#1F1B24] dark:text-[#FFF7FB]"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCvModal();
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-gradient-to-r from-[#D85C8B] to-[#8E3D62] text-xs font-medium text-white shadow-sm"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  Curriculum Vitae
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
