import React from 'react';
import { motion } from 'motion/react';
import { 
  Smile, 
  Maximize2, 
  HeartHandshake, 
  ArrowRight,
  Search,
  PenTool,
  Code,
  ShieldCheck,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { UX_PRINCIPLES, DESIGN_PROCESS } from '../data/portfolioData';
import { DynamicIcon } from './DynamicIcon';

export const UxSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FBEAF0] dark:bg-[#241A25] text-[#8E3D62] dark:text-[#E56B9F] text-xs font-mono font-bold tracking-wider mb-2 border border-[#F6D7E3] dark:border-[#3D273E]">
            <span>UX PERSPECTIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3B193F] dark:text-[#FFF7FB] tracking-tight">
            How I Think About UX
          </h2>
          <p className="text-sm sm:text-base text-[#746A73] dark:text-[#BAAEB7] mt-3">
            Balancing functional software engineering with user empathy, visual clarity, and intuitive interaction flow.
          </p>
        </div>

        {/* 3 Core UX Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {UX_PRINCIPLES.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] hover:border-[#D85C8B] hover:shadow-lg transition-all group relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FBEAF0] dark:bg-[#3D273E] flex items-center justify-center text-[#D85C8B] mb-5 group-hover:scale-110 transition-transform">
                <DynamicIcon name={item.icon} className="w-6 h-6" />
              </div>

              <span className="text-xs font-semibold text-[#8E3D62] dark:text-[#E56B9F] tracking-wide block uppercase">
                {item.subtitle}
              </span>

              <h3 className="text-xl font-bold text-[#3B193F] dark:text-[#FFF7FB] mt-1 mb-2 group-hover:text-[#D85C8B] transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-[#746A73] dark:text-[#BAAEB7] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Simple Visual Design & Development Process */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FBEAF0]/30 dark:bg-[#1F1722]/60 border border-[#F6D7E3] dark:border-[#3D273E] relative">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#F6D7E3] dark:border-[#3D273E]">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#3B193F] dark:text-[#FFF7FB]">
                My Development & Design Flow
              </h3>
              <p className="text-xs sm:text-sm text-[#746A73] dark:text-[#BAAEB7] mt-1">
                A structured philosophy from initial requirement understanding to iterative refinement.
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF9FB] dark:bg-[#241A25] text-xs font-medium text-[#8E3D62] dark:text-[#E56B9F] border border-[#F6D7E3] dark:border-[#3D273E] w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#D85C8B]" />
              <span>Continuous Iteration</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {DESIGN_PROCESS.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-5 rounded-2xl bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] hover:border-[#D85C8B]/60 transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono font-bold text-xs px-2 py-0.5 rounded bg-[#FBEAF0] dark:bg-[#3D273E] text-[#8E3D62] dark:text-[#E56B9F]">
                      {step.step}
                    </span>
                    <div className="text-[#D85C8B] group-hover:scale-110 transition-transform">
                      <DynamicIcon name={step.icon} className="w-4 h-4" />
                    </div>
                  </div>

                  <h4 className="font-bold text-base text-[#3B193F] dark:text-[#FFF7FB] mb-1.5">
                    {step.name}
                  </h4>

                  <p className="text-xs text-[#746A73] dark:text-[#BAAEB7] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {idx < DESIGN_PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-[#FFF9FB] dark:bg-[#171218] border border-[#D85C8B]/40 flex items-center justify-center text-[#D85C8B] shadow-xs">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
