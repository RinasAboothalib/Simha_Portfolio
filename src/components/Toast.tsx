import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Info } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-[#3B193F] dark:bg-[#241A25] text-white border border-[#D85C8B]/40 shadow-xl backdrop-blur-md cursor-pointer text-sm font-medium"
          onClick={onClose}
        >
          {type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-[#D85C8B] shrink-0" />
          ) : (
            <Info className="w-5 h-5 text-[#B08DD9] shrink-0" />
          )}
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
