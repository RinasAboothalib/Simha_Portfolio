import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Layers,
  Sparkles 
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { DynamicIcon } from './DynamicIcon';

type CategoryFilter = 'All' | 'Frontend' | 'Backend' | 'Database' | 'Tools';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const categories: { label: CategoryFilter; icon: React.ReactNode }[] = [
    { label: 'All', icon: <Layers className="w-3.5 h-3.5" /> },
    { label: 'Frontend', icon: <Code2 className="w-3.5 h-3.5" /> },
    { label: 'Backend', icon: <Server className="w-3.5 h-3.5" /> },
    { label: 'Database', icon: <Database className="w-3.5 h-3.5" /> },
    { label: 'Tools', icon: <Wrench className="w-3.5 h-3.5" /> },
  ];

  const filteredSkills = activeCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((skill) => skill.category === activeCategory);

  const getCategoryCount = (cat: CategoryFilter) => {
    if (cat === 'All') return SKILLS_DATA.length;
    return SKILLS_DATA.filter((s) => s.category === cat).length;
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-[#FBEAF0]/20 dark:bg-[#171218]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FBEAF0] dark:bg-[#241A25] text-[#8E3D62] dark:text-[#E56B9F] text-xs font-mono font-bold tracking-wider mb-2 border border-[#F6D7E3] dark:border-[#3D273E]">
              <span>02 / SKILLS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3B193F] dark:text-[#FFF7FB] tracking-tight">
              Technical Skills
            </h2>
            <p className="text-xs sm:text-sm text-[#746A73] dark:text-[#BAAEB7] mt-2 max-w-xl">
              Real, verified toolsets and programming frameworks utilized across academic coursework and full stack projects.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] shadow-2xs">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.label;
              return (
                <button
                  key={cat.label}
                  onClick={() => setActiveCategory(cat.label)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#D85C8B] to-[#8E3D62] text-white shadow-xs'
                      : 'text-[#746A73] dark:text-[#BAAEB7] hover:text-[#3B193F] dark:hover:text-[#FFF7FB] hover:bg-[#FBEAF0] dark:hover:bg-[#3D273E]'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-[#FBEAF0] dark:bg-[#171218] text-[#8E3D62] dark:text-[#BAAEB7]'}`}>
                    {getCategoryCount(cat.label)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              key={skill.name}
              className="p-5 rounded-2xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] hover:border-[#D85C8B] dark:hover:border-[#D85C8B] hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group relative overflow-hidden"
            >
              {/* Subtle hover glow backdrop */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#D85C8B]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#FBEAF0] dark:bg-[#3D273E] border border-[#F6D7E3] dark:border-[#3D273E] flex items-center justify-center text-[#D85C8B] group-hover:scale-110 group-hover:text-[#8E3D62] dark:group-hover:text-[#E56B9F] transition-all">
                  <DynamicIcon name={skill.icon} className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#FBEAF0] dark:bg-[#171218] text-[#8E3D62] dark:text-[#E56B9F] border border-[#F6D7E3] dark:border-[#3D273E]">
                  {skill.category}
                </span>
              </div>

              <h3 className="font-bold text-base text-[#3B193F] dark:text-[#FFF7FB] group-hover:text-[#D85C8B] transition-colors">
                {skill.name}
              </h3>

              {skill.description && (
                <p className="text-xs text-[#746A73] dark:text-[#BAAEB7] mt-1.5 leading-relaxed">
                  {skill.description}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Categorized Summary Bar */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-[#3B193F] dark:text-[#FFF7FB] font-semibold">
            <Sparkles className="w-4 h-4 text-[#D85C8B]" />
            <span>Honest Technical Scope: Categorized strictly per verified academic & project experience</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-[#746A73] dark:text-[#BAAEB7]">
            <span>Frontend: <strong>5 Technologies</strong></span>
            <span>•</span>
            <span>Backend: <strong>5 Technologies</strong></span>
            <span>•</span>
            <span>Database: <strong>MySQL</strong></span>
            <span>•</span>
            <span>Tools: <strong>4 Core Utilities</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
};
