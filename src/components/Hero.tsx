import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  FileDown, 
  Sparkles, 
  Code, 
  Flame, 
  Layers, 
  MapPin, 
  CheckCircle2,
  Atom,
  Palette,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO, HERO_STATS } from '../data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomPhotoUrl(url);
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#F6D7E3]/40 via-[#FBEAF0]/30 to-transparent dark:from-[#3B193F]/30 dark:via-[#8E3D62]/20 dark:to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-[#B08DD9]/20 dark:bg-[#B08DD9]/10 rounded-full blur-2xl -z-10 pointer-events-none" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#F6C7B6]/20 dark:bg-[#8E3D62]/15 rounded-full blur-2xl -z-10 pointer-events-none" />

      {/* Subtle Background Pattern Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#D85C8B_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06] dark:opacity-[0.08] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Content & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status & Professional Identity Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2.5"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FBEAF0] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] text-[#8E3D62] dark:text-[#E56B9F] text-xs font-semibold tracking-wide shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#D85C8B]" />
                <span>{PERSONAL_INFO.primaryBadge}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF9FB] dark:bg-[#1F1722] border border-[#D85C8B]/30 text-[#1F1B24] dark:text-[#FFF7FB] text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D85C8B] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D85C8B]"></span>
                </span>
                <span>{PERSONAL_INFO.status}</span>
              </div>
            </motion.div>

            {/* Main Greeting Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#3B193F] dark:text-[#FFF7FB] leading-[1.12]">
                Hi, I'm <br className="hidden sm:inline" />
                <span className="text-[#3B193F] dark:text-[#FFF7FB]">Fowser Fathima Simha</span>.
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#1F1B24]/85 dark:text-[#FFF7FB]/90 max-w-2xl leading-snug">
                I build thoughtful, responsive and{' '}
                <span className="bg-gradient-to-r from-[#D85C8B] via-[#8E3D62] to-[#B08DD9] bg-clip-text text-transparent font-bold">
                  user-friendly digital experiences
                </span>.
              </p>
            </motion.div>

            {/* Professional Introduction Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-[#746A73] dark:text-[#BAAEB7] leading-relaxed max-w-2xl"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* Location indicator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex items-center gap-2 text-xs text-[#746A73] dark:text-[#BAAEB7] font-medium"
            >
              <MapPin className="w-3.5 h-3.5 text-[#D85C8B]" />
              <span>Based in {PERSONAL_INFO.location}</span>
            </motion.div>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto"
            >
              {/* Primary CTA */}
              <a
                href="#project"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D85C8B] via-[#8E3D62] to-[#3B193F] text-white font-semibold text-sm shadow-md hover:shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>View My Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Download CV CTA */}
              <button
                onClick={onOpenCvModal}
                className="px-5 py-3.5 rounded-xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#D85C8B]/40 hover:border-[#D85C8B] text-[#3B193F] dark:text-[#FFF7FB] hover:bg-[#FBEAF0] dark:hover:bg-[#3D273E] font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-[#D85C8B]" />
                <span>Download CV</span>
              </button>

              {/* Secondary Let's Connect Link */}
              <a
                href="#contact"
                className="px-4 py-3.5 text-xs sm:text-sm font-semibold text-[#8E3D62] dark:text-[#E56B9F] hover:text-[#D85C8B] transition-colors flex items-center gap-1.5 cursor-pointer ml-1"
              >
                <span>Let's Connect</span>
                <span className="text-base leading-none">→</span>
              </a>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Asymmetric Profile Portrait & Floating Badges */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[360px] sm:max-w-[380px]"
            >
              {/* Abstract decorative background card shape */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#F6D7E3] via-[#FBEAF0] to-[#B08DD9]/30 dark:from-[#3B193F]/50 dark:via-[#8E3D62]/40 dark:to-[#B08DD9]/20 rounded-3xl transform rotate-2 blur-md -z-10" />

              {/* Outer Decorative Orbit Ring */}
              <div className="absolute -inset-2 rounded-3xl border border-[#B08DD9]/40 dark:border-[#B08DD9]/20 -z-10 animate-float-slow pointer-events-none" />

              {/* Main Vertical Portrait Frame */}
              <div className="relative rounded-2xl bg-[#FFF9FB] dark:bg-[#241A25] border-2 border-[#D85C8B]/40 shadow-xl overflow-hidden p-3 transition-all duration-300">
                
                {/* Visual Canvas Container */}
                <div className="relative w-full h-[400px] sm:h-[430px] rounded-xl overflow-hidden bg-gradient-to-b from-[#FBEAF0] via-[#F6D7E3]/60 to-[#FFF9FB] dark:from-[#2A1D2B] dark:via-[#241A25] dark:to-[#171218] flex flex-col items-center justify-center text-center p-6 border border-[#F6D7E3] dark:border-[#3D273E]">
                  
                  {customPhotoUrl ? (
                    <img
                      src={customPhotoUrl}
                      alt="Fowser Fathima Simha"
                      className="w-full h-full object-cover object-top rounded-lg"
                    />
                  ) : (
                    /* Elegant Developer & UX Designer Monogram Frame */
                    <div className="w-full h-full flex flex-col items-center justify-between py-6 relative">
                      
                      {/* Geometric backdrop elements */}
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-full border border-[#D85C8B]/30 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-[#D85C8B]" />
                      </div>
                      <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full border border-[#B08DD9]/40" />

                      {/* Top Insignia */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF9FB]/90 dark:bg-[#1F1722]/90 border border-[#D85C8B]/20 text-[11px] font-semibold text-[#8E3D62] dark:text-[#E56B9F] shadow-xs">
                        <span>HND IT • Software Engineering</span>
                      </div>

                      {/* Center Stylized Developer Emblem */}
                      <div className="relative group">
                        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-[#3B193F] via-[#8E3D62] to-[#D85C8B] p-1 shadow-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                          <div className="w-full h-full bg-[#FFF9FB] dark:bg-[#241A25] rounded-xl flex flex-col items-center justify-center p-2">
                            <span className="font-extrabold text-2xl sm:text-3xl text-[#3B193F] dark:text-[#FFF7FB] tracking-tight">
                              FS
                            </span>
                            <span className="text-[10px] font-bold text-[#D85C8B] tracking-wider mt-0.5">
                              SIMHA
                            </span>
                          </div>
                        </div>

                        {/* Pulsing halo */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#D85C8B] to-[#B08DD9] rounded-2xl blur-sm opacity-30 -z-10 animate-pulse-glow" />
                      </div>

                      {/* Bottom Details */}
                      <div className="space-y-1">
                        <h3 className="font-bold text-base sm:text-lg text-[#3B193F] dark:text-[#FFF7FB]">
                          {PERSONAL_INFO.name}
                        </h3>
                        <p className="text-xs text-[#746A73] dark:text-[#BAAEB7]">
                          Trincomalee, Sri Lanka
                        </p>
                      </div>

                      {/* Optional Photo Upload/Replace prompt */}
                      <label className="text-[11px] text-[#8E3D62] dark:text-[#E56B9F] hover:underline cursor-pointer flex items-center gap-1 bg-[#FFF9FB]/80 dark:bg-[#171218]/80 px-2.5 py-1 rounded-md border border-[#D85C8B]/30">
                        <span>Upload Custom Photo</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                  )}

                  {/* Inner subtle frame corner accents */}
                  <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-[#D85C8B]" />
                  <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-[#D85C8B]" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-[#D85C8B]" />
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-[#D85C8B]" />
                </div>
              </div>

              {/* FLOATING TECHNOLOGY BADGES (Positioned aesthetically without covering face) */}
              {/* Badge 1: React */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 px-3 py-1.5 rounded-xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#D85C8B]/40 shadow-lg flex items-center gap-2 z-20 backdrop-blur-md"
              >
                <div className="w-6 h-6 rounded-lg bg-[#FBEAF0] dark:bg-[#3D273E] flex items-center justify-center text-[#D85C8B]">
                  <Atom className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#3B193F] dark:text-[#FFF7FB]">React</span>
              </motion.div>

              {/* Badge 2: Laravel */}
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#D85C8B]/40 shadow-lg flex items-center gap-2 z-20 backdrop-blur-md"
              >
                <div className="w-6 h-6 rounded-lg bg-[#FBEAF0] dark:bg-[#3D273E] flex items-center justify-center text-[#8E3D62] dark:text-[#E56B9F]">
                  <Flame className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#3B193F] dark:text-[#FFF7FB]">Laravel</span>
              </motion.div>

              {/* Badge 3: UX */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/2 -right-5 px-3.5 py-1.5 rounded-xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#B08DD9]/50 shadow-lg flex items-center gap-2 z-20 backdrop-blur-md"
              >
                <div className="w-6 h-6 rounded-lg bg-[#FBEAF0] dark:bg-[#3D273E] flex items-center justify-center text-[#B08DD9]">
                  <Palette className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#3B193F] dark:text-[#FFF7FB]">UX Design</span>
              </motion.div>

            </motion.div>
          </div>

        </div>

        {/* HERO STATISTICS ROW (Accurate CV-based facts only) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 sm:mt-20 pt-8 border-t border-[#F6D7E3] dark:border-[#3D273E]"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {HERO_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-[#FFF9FB]/80 dark:bg-[#241A25]/60 border border-[#F6D7E3] dark:border-[#3D273E] hover:border-[#D85C8B]/40 transition-all group"
              >
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#3B193F] dark:text-[#FFF7FB] group-hover:text-[#D85C8B] transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#8E3D62] dark:text-[#E56B9F] mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#746A73] dark:text-[#BAAEB7] mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
