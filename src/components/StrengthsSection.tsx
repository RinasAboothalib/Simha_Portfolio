import React from 'react';
import { motion } from 'motion/react';
import { 
  Layers, 
  Smartphone, 
  Network, 
  Database, 
  Bug, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { CORE_STRENGTHS } from '../data/portfolioData';

const STRENGTH_ICONS = [
  <Layers className="w-5 h-5" />,
  <Smartphone className="w-5 h-5" />,
  <Network className="w-5 h-5" />,
  <Database className="w-5 h-5" />,
  <Bug className="w-5 h-5" />,
];

export const StrengthsSection: React.FC = () => {
  return (
    <section id="strengths" className="py-20 md:py-28 relative bg-[#FBEAF0]/20 dark:bg-[#171218]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FBEAF0] dark:bg-[#241A25] text-[#8E3D62] dark:text-[#E56B9F] text-xs font-mono font-bold tracking-wider mb-2 border border-[#F6D7E3] dark:border-[#3D273E]">
            <span>04 / STRENGTHS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3B193F] dark:text-[#FFF7FB] tracking-tight">
            Core Strengths
          </h2>
          <p className="text-sm sm:text-base text-[#746A73] dark:text-[#BAAEB7] mt-2 max-w-xl">
            Foundational competencies honed through continuous programming practice, design challenges, and academic software engineering.
          </p>
        </div>

        {/* Bento / Staggered Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_STRENGTHS.map((strength, index) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`p-6 sm:p-8 rounded-3xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] hover:border-[#D85C8B] hover:shadow-lg transition-all group flex flex-col justify-between ${
                index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#FBEAF0] dark:bg-[#3D273E] flex items-center justify-center text-[#D85C8B] group-hover:scale-105 transition-transform">
                    {STRENGTH_ICONS[index % STRENGTH_ICONS.length]}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FBEAF0] dark:bg-[#1F1722] text-[#8E3D62] dark:text-[#E56B9F] border border-[#F6D7E3] dark:border-[#3D273E]">
                    {strength.tag}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#3B193F] dark:text-[#FFF7FB] group-hover:text-[#D85C8B] transition-colors mb-2">
                  {strength.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#746A73] dark:text-[#BAAEB7] leading-relaxed">
                  {strength.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F6D7E3]/60 dark:border-[#3D273E] flex items-center gap-1.5 text-xs text-[#8E3D62] dark:text-[#E56B9F] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D85C8B]" />
                <span>Verified in Academic Coursework</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
