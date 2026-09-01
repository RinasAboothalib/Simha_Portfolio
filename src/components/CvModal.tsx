import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  GraduationCap, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA, FEATURED_PROJECT, EDUCATION_DATA, LANGUAGES_DATA, SOFT_SKILLS_DATA, CORE_STRENGTHS } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyEmail: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, onCopyEmail }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const cvText = `
=====================================================
CURRICULUM VITAE - ${PERSONAL_INFO.name.toUpperCase()}
=====================================================
${PERSONAL_INFO.primaryBadge}
Location: ${PERSONAL_INFO.location}
Phone: ${PERSONAL_INFO.phone}
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.github}

PROFESSIONAL SUMMARY:
${PERSONAL_INFO.bio}

EDUCATION:
- ${EDUCATION_DATA.degree} (${EDUCATION_DATA.shortName})
  ${EDUCATION_DATA.institution} - ${EDUCATION_DATA.parentOrg}
  ${EDUCATION_DATA.expectedYear} | ${EDUCATION_DATA.location}

TECHNICAL SKILLS:
- Frontend: HTML5, CSS3, JavaScript ES6, React.js, Bootstrap
- Backend: PHP, Laravel, Java, Python, Node.js
- Database: MySQL
- Tools: Git, GitHub, Visual Studio Code, XAMPP

FEATURED ACADEMIC PROJECT:
- ${FEATURED_PROJECT.title}
  Technologies: ${FEATURED_PROJECT.technologies.join(', ')}
  Summary: ${FEATURED_PROJECT.summary}
  Features:
${FEATURED_PROJECT.features.map(f => `  • ${f.title}: ${f.description}`).join('\n')}

CORE STRENGTHS:
${CORE_STRENGTHS.map(s => `• ${s.title}: ${s.description}`).join('\n')}

LANGUAGES:
${LANGUAGES_DATA.map(l => `• ${l.name} (${l.proficiency})`).join('\n')}

PROFESSIONAL / SOFT SKILLS:
${SOFT_SKILLS_DATA.map(s => `• ${s.name}`).join('\n')}
=====================================================
`;
    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CV_Fowser_Fathima_Simha.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1F1B24]/70 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#FFF9FB] dark:bg-[#1F1722] text-[#1F1B24] dark:text-[#FFF7FB] rounded-2xl shadow-2xl border border-[#D85C8B]/30 flex flex-col overflow-hidden z-10"
        >
          {/* Header Action Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#F6D7E3] dark:border-[#3D273E] bg-[#FBEAF0]/60 dark:bg-[#2A1D2B]/80 backdrop-blur-md">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-[#D85C8B]"></span>
              <h2 className="font-semibold text-lg text-[#3B193F] dark:text-[#FFF7FB]">
                Curriculum Vitae Preview
              </h2>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleDownloadText}
                className="flex items-center space-x-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-[#FFF9FB] dark:bg-[#241A25] border border-[#D85C8B]/30 text-[#8E3D62] dark:text-[#E56B9F] hover:bg-[#F6D7E3]/40 transition-colors cursor-pointer"
                title="Download text file"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download CV</span>
                <span className="sm:hidden">Save</span>
              </button>
              <button
                onClick={handlePrint}
                className="flex items-center space-x-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-gradient-to-r from-[#D85C8B] to-[#8E3D62] text-white hover:opacity-95 transition-opacity cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print / PDF</span>
                <span className="sm:hidden">Print</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-[#746A73] dark:text-[#BAAEB7] hover:bg-[#F6D7E3]/50 dark:hover:bg-[#3D273E] transition-colors cursor-pointer ml-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable CV Document View */}
          <div className="overflow-y-auto p-6 sm:p-10 space-y-8 print:p-0 print:space-y-6">
            {/* CV Header */}
            <div className="border-b border-[#F6D7E3] dark:border-[#3D273E] pb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#3B193F] dark:text-[#FFF7FB]">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm sm:text-base font-semibold text-[#8E3D62] dark:text-[#E56B9F] mt-1">
                  {PERSONAL_INFO.primaryBadge}
                </p>
                <p className="text-xs text-[#746A73] dark:text-[#BAAEB7] mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D85C8B]" />
                  {PERSONAL_INFO.location}
                </p>
              </div>

              <div className="flex flex-col text-xs sm:text-sm gap-1.5 text-[#746A73] dark:text-[#BAAEB7] bg-[#FBEAF0]/50 dark:bg-[#241A25] p-3 rounded-xl border border-[#F6D7E3]/70 dark:border-[#3D273E]">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2 hover:text-[#D85C8B] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D85C8B]" />
                  {PERSONAL_INFO.email}
                </a>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-2 hover:text-[#D85C8B] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D85C8B]" />
                  {PERSONAL_INFO.phone}
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#D85C8B] transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-[#D85C8B]" />
                  {PERSONAL_INFO.githubHandle}
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#8E3D62] dark:text-[#E56B9F] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Professional Summary
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#1F1B24]/90 dark:text-[#FFF7FB]/90 bg-[#FBEAF0]/30 dark:bg-[#241A25]/50 p-4 rounded-xl border border-[#F6D7E3]/50 dark:border-[#3D273E]">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#8E3D62] dark:text-[#E56B9F] mb-3 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" /> Education
              </h3>
              <div className="bg-[#FFF9FB] dark:bg-[#241A25] p-4 rounded-xl border border-[#F6D7E3] dark:border-[#3D273E]">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h4 className="font-bold text-sm sm:text-base text-[#3B193F] dark:text-[#FFF7FB]">
                    {EDUCATION_DATA.degree} ({EDUCATION_DATA.shortName})
                  </h4>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#F6D7E3] dark:bg-[#8E3D62]/40 text-[#8E3D62] dark:text-[#E56B9F] w-fit">
                    {EDUCATION_DATA.expectedYear}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#8E3D62] dark:text-[#C59AE8] font-medium mt-0.5">
                  {EDUCATION_DATA.institution} • {EDUCATION_DATA.parentOrg}
                </p>
                <p className="text-xs text-[#746A73] dark:text-[#BAAEB7] mt-2">
                  {EDUCATION_DATA.description}
                </p>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#8E3D62] dark:text-[#E56B9F] mb-3 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" /> Technical Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#FBEAF0]/40 dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E]">
                  <span className="text-xs font-bold text-[#8E3D62] dark:text-[#E56B9F] block mb-1.5">Frontend</span>
                  <div className="flex flex-wrap gap-1.5">
                    {SKILLS_DATA.filter(s => s.category === 'Frontend').map(s => (
                      <span key={s.name} className="text-xs px-2 py-1 rounded bg-[#FFF9FB] dark:bg-[#171218] text-[#1F1B24] dark:text-[#FFF7FB] border border-[#F6D7E3] dark:border-[#3D273E]">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FBEAF0]/40 dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E]">
                  <span className="text-xs font-bold text-[#8E3D62] dark:text-[#E56B9F] block mb-1.5">Backend</span>
                  <div className="flex flex-wrap gap-1.5">
                    {SKILLS_DATA.filter(s => s.category === 'Backend').map(s => (
                      <span key={s.name} className="text-xs px-2 py-1 rounded bg-[#FFF9FB] dark:bg-[#171218] text-[#1F1B24] dark:text-[#FFF7FB] border border-[#F6D7E3] dark:border-[#3D273E]">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FBEAF0]/40 dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E]">
                  <span className="text-xs font-bold text-[#8E3D62] dark:text-[#E56B9F] block mb-1.5">Database</span>
                  <div className="flex flex-wrap gap-1.5">
                    {SKILLS_DATA.filter(s => s.category === 'Database').map(s => (
                      <span key={s.name} className="text-xs px-2 py-1 rounded bg-[#FFF9FB] dark:bg-[#171218] text-[#1F1B24] dark:text-[#FFF7FB] border border-[#F6D7E3] dark:border-[#3D273E]">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FBEAF0]/40 dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E]">
                  <span className="text-xs font-bold text-[#8E3D62] dark:text-[#E56B9F] block mb-1.5">Tools & Environment</span>
                  <div className="flex flex-wrap gap-1.5">
                    {SKILLS_DATA.filter(s => s.category === 'Tools').map(s => (
                      <span key={s.name} className="text-xs px-2 py-1 rounded bg-[#FFF9FB] dark:bg-[#171218] text-[#1F1B24] dark:text-[#FFF7FB] border border-[#F6D7E3] dark:border-[#3D273E]">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Academic Project */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#8E3D62] dark:text-[#E56B9F] mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Featured Academic Project
              </h3>
              <div className="p-4 rounded-xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h4 className="font-bold text-sm sm:text-base text-[#3B193F] dark:text-[#FFF7FB]">
                    {FEATURED_PROJECT.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {FEATURED_PROJECT.technologies.map(t => (
                    <span key={t} className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#F6D7E3] dark:bg-[#8E3D62]/40 text-[#8E3D62] dark:text-[#E56B9F]">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#1F1B24]/90 dark:text-[#FFF7FB]/90 leading-relaxed">
                  {FEATURED_PROJECT.summary}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-[#F6D7E3]/60 dark:border-[#3D273E]">
                  {FEATURED_PROJECT.features.slice(0, 6).map(f => (
                    <div key={f.title} className="flex items-start gap-1.5 text-xs text-[#746A73] dark:text-[#BAAEB7]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D85C8B] shrink-0 mt-0.5" />
                      <span><strong>{f.title}</strong></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Languages & Soft Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#8E3D62] dark:text-[#E56B9F] mb-2">
                  Languages
                </h3>
                <div className="space-y-2">
                  {LANGUAGES_DATA.map(l => (
                    <div key={l.name} className="p-2.5 rounded-lg bg-[#FBEAF0]/40 dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] text-xs">
                      <div className="flex justify-between font-semibold text-[#3B193F] dark:text-[#FFF7FB]">
                        <span>{l.name}</span>
                        <span className="text-[#8E3D62] dark:text-[#E56B9F]">{l.proficiency}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#8E3D62] dark:text-[#E56B9F] mb-2">
                  Soft Skills
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {SOFT_SKILLS_DATA.map(s => (
                    <span key={s.name} className="text-xs px-2.5 py-1 rounded-full bg-[#F6D7E3]/60 dark:bg-[#8E3D62]/30 text-[#8E3D62] dark:text-[#FFF7FB] border border-[#F6D7E3] dark:border-[#3D273E]">
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
