import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Languages, 
  Sparkles, 
  MapPin, 
  Calendar, 
  BookOpen, 
  CheckCircle2, 
  Users, 
  MessageCircle, 
  Clock, 
  RefreshCw, 
  Compass,
  Award
} from 'lucide-react';
import { EDUCATION_DATA, LANGUAGES_DATA, SOFT_SKILLS_DATA } from '../data/portfolioData';
import { DynamicIcon } from './DynamicIcon';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FBEAF0] dark:bg-[#241A25] text-[#8E3D62] dark:text-[#E56B9F] text-xs font-mono font-bold tracking-wider mb-2 border border-[#F6D7E3] dark:border-[#3D273E]">
            <span>05 / EDUCATION & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3B193F] dark:text-[#FFF7FB] tracking-tight">
            Education & Capabilities
          </h2>
          <p className="text-sm sm:text-base text-[#746A73] dark:text-[#BAAEB7] mt-2 max-w-xl">
            Formal technical qualification, language proficiencies, and interpersonal communication capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Education Timeline Card */}
          <div className="lg:col-span-7">
            <h3 className="text-xl font-bold text-[#3B193F] dark:text-[#FFF7FB] mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#D85C8B]" />
              <span>Academic Timeline</span>
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-gradient-to-b border-[#D85C8B]/40 space-y-6">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gradient-to-r from-[#D85C8B] to-[#8E3D62] ring-4 ring-[#FFF9FB] dark:ring-[#171218] shadow-sm" />

              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-6 sm:p-8 rounded-3xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] shadow-sm space-y-4 relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#F6D7E3] dark:bg-[#8E3D62]/40 text-[#8E3D62] dark:text-[#E56B9F] w-fit">
                    {EDUCATION_DATA.expectedYear}
                  </span>
                  <span className="text-xs text-[#746A73] dark:text-[#BAAEB7] flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#D85C8B]" />
                    {EDUCATION_DATA.location}
                  </span>
                </div>

                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#3B193F] dark:text-[#FFF7FB]">
                    {EDUCATION_DATA.degree}
                  </h4>
                  <p className="text-sm font-semibold text-[#8E3D62] dark:text-[#E56B9F] mt-1">
                    {EDUCATION_DATA.institution}
                  </p>
                  <p className="text-xs text-[#746A73] dark:text-[#BAAEB7] mt-0.5">
                    {EDUCATION_DATA.parentOrg}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#1F1B24]/90 dark:text-[#FFF7FB]/90 leading-relaxed bg-[#FBEAF0]/30 dark:bg-[#171218]/40 p-3.5 rounded-xl border border-[#F6D7E3]/60 dark:border-[#3D273E]">
                  {EDUCATION_DATA.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-[#3B193F] dark:text-[#FFF7FB] uppercase tracking-wider block">
                    Curriculum Highlights:
                  </span>
                  {EDUCATION_DATA.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#746A73] dark:text-[#BAAEB7]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D85C8B] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT: Languages & Soft Skills */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Languages Section */}
            <div>
              <h3 className="text-xl font-bold text-[#3B193F] dark:text-[#FFF7FB] mb-6 flex items-center gap-2">
                <Languages className="w-5 h-5 text-[#D85C8B]" />
                <span>Languages</span>
              </h3>

              <div className="space-y-3">
                {LANGUAGES_DATA.map((lang, idx) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-5 rounded-2xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] flex items-center justify-between shadow-2xs hover:border-[#D85C8B]/40 transition-colors"
                  >
                    <div>
                      <h4 className="font-bold text-base text-[#3B193F] dark:text-[#FFF7FB]">
                        {lang.name}
                      </h4>
                      <p className="text-xs text-[#746A73] dark:text-[#BAAEB7] mt-0.5">
                        {lang.notes}
                      </p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FBEAF0] dark:bg-[#1F1722] text-[#8E3D62] dark:text-[#E56B9F] border border-[#F6D7E3] dark:border-[#3D273E] shrink-0">
                      {lang.proficiency}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Soft / Professional Skills */}
            <div>
              <h3 className="text-xl font-bold text-[#3B193F] dark:text-[#FFF7FB] mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#D85C8B]" />
                <span>Professional Skills</span>
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {SOFT_SKILLS_DATA.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FBEAF0]/80 dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] text-xs font-semibold text-[#3B193F] dark:text-[#FFF7FB] hover:border-[#D85C8B]/60 hover:bg-[#F6D7E3] transition-all shadow-2xs group"
                  >
                    <div className="text-[#D85C8B] group-hover:scale-110 transition-transform">
                      <DynamicIcon name={skill.icon} className="w-3.5 h-3.5" />
                    </div>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
