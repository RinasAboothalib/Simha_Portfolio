import React from 'react';
import { MARQUEE_ITEMS } from '../data/portfolioData';
import { DynamicIcon } from './DynamicIcon';

export const TechMarquee: React.FC = () => {
  // Duplicate array for seamless infinite marquee loop
  const marqueeList = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="w-full py-6 border-y border-[#F6D7E3] dark:border-[#3D273E] bg-[#FBEAF0]/30 dark:bg-[#1F1722]/50 overflow-hidden relative">
      {/* Edge gradient masks for smooth fade */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#FFF9FB] dark:from-[#171218] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#FFF9FB] dark:from-[#171218] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-6 sm:gap-10">
        {marqueeList.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FFF9FB] dark:bg-[#241A25] border border-[#F6D7E3] dark:border-[#3D273E] text-[#1F1B24] dark:text-[#FFF7FB] shadow-2xs hover:border-[#D85C8B]/50 transition-colors shrink-0"
          >
            <div className="w-5 h-5 rounded-full bg-[#FBEAF0] dark:bg-[#3D273E] flex items-center justify-center text-[#D85C8B]">
              <DynamicIcon name={item.icon} className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-tight">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
