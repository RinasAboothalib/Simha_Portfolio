import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, UserCheck, Terminal } from 'lucide-react';
import { PERSONAL_INFO, FOCUS_AREAS } from '../data/portfolioData';
import { DynamicIcon } from './DynamicIcon';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FBEAF0] dark:bg-[#241A25] text-[#8E3D62] dark:text-[#E56B9F] text-xs font-mono font-bold tracking-wider mb-2 border border-[#F6D7E3] dark:border-[#3D273E]">
            <span>01 / ABOUT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3B193F] dark:text-[#FFF7FB] tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#D85C8B] to-[#B08DD9] rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: In-depth Professional Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] shadow-sm space-y-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F6D7E3]/30 dark:bg-[#8E3D62]/10 rounded-bl-full pointer-events-none" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FBEAF0] dark:bg-[#3D273E] flex items-center justify-center text-[#D85C8B]">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-[#3B193F] dark:text-[#FFF7FB]">
                    Student & Developer
                  </h3>
                  <p className="text-xs text-[#8E3D62] dark:text-[#E56B9F] font-medium">
                    HND in Information Technology
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-[#1F1B24]/90 dark:text-[#FFF7FB]/90 font-normal">
                {PERSONAL_INFO.bio}
              </p>

              <p className="text-sm leading-relaxed text-[#746A73] dark:text-[#BAAEB7]">
                Currently pursuing my Higher National Diploma in IT at the Advanced Technology Institute (ATI), Trincomalee under SLIATE. I strive to write well-structured, maintainable code with a strong appreciation for interface clarity, visual symmetry, and user satisfaction.
              </p>

              <div className="pt-4 border-t border-[#F6D7E3] dark:border-[#3D273E] flex flex-wrap gap-2 text-xs font-medium">
                <span className="px-3 py-1 rounded-lg bg-[#FBEAF0] dark:bg-[#1F1722] text-[#8E3D62] dark:text-[#E56B9F] border border-[#F6D7E3] dark:border-[#3D273E]">
                  📍 Trincomalee, Sri Lanka
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#FBEAF0] dark:bg-[#1F1722] text-[#8E3D62] dark:text-[#E56B9F] border border-[#F6D7E3] dark:border-[#3D273E]">
                  🎓 SLIATE ATI Student
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: What I Focus On */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#3B193F] dark:text-[#FFF7FB]">
                  What I Focus On
                </h3>
                <p className="text-xs sm:text-sm text-[#746A73] dark:text-[#BAAEB7] mt-0.5">
                  Core disciplines bridging code architecture and interface design
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FOCUS_AREAS.map((area, idx) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-5 rounded-2xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] hover:border-[#D85C8B]/50 dark:hover:border-[#D85C8B]/50 hover:shadow-md transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#FBEAF0] dark:bg-[#3D273E] flex items-center justify-center text-[#D85C8B] mb-3 group-hover:scale-105 transition-transform">
                    <DynamicIcon name={area.icon} className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-[#3B193F] dark:text-[#FFF7FB] group-hover:text-[#D85C8B] transition-colors">
                    {area.title}
                  </h4>
                  <p className="text-xs text-[#746A73] dark:text-[#BAAEB7] leading-relaxed mt-1.5">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
