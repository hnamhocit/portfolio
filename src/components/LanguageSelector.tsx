import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage, LANGUAGES, type Language } from '@/store/useLanguage';
import { Globe, ChevronDown, Check } from 'lucide-react';

export default function LanguageSelector() {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
        className="px-2.5 py-1.5 rounded-lg text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-sm font-mono font-medium flex items-center gap-1.5 cursor-pointer"
        title="Select language"
      >
        <span className="text-sm leading-none">{current.flag}</span>
        <span className="font-bold text-xs uppercase tracking-wider">{current.short}</span>
        <ChevronDown size={13} className={`transition-transform duration-200 opacity-60 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 mt-2 w-44 rounded-2xl border border-[var(--border)]/70 bg-[var(--surface)] p-1.5 shadow-xl shadow-black/10 z-50 origin-top-right"
          >
            <div className="space-y-0.5">
              {LANGUAGES.map((item) => {
                const active = item.code === lang;
                return (
                  <button
                    key={item.code}
                    onClick={() => {
                      setLang(item.code);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-sans transition-colors cursor-pointer ${
                      active
                        ? 'bg-slate-900/10 text-slate-900 dark:bg-white/10 dark:text-white font-bold'
                        : 'text-[var(--text)] hover:bg-[var(--surface-subtle)]/70'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{item.flag}</span>
                      <span>{item.label}</span>
                    </div>
                    {active && <Check size={14} className="text-slate-900 dark:text-white shrink-0" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
