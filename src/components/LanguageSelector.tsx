import React, { useState, useRef, useEffect } from 'react';
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
        className="px-2.5 py-1.5 rounded-lg border border-[var(--border)]/60 bg-[var(--surface)] text-[var(--text)] hover:border-purple-500/40 transition-colors shadow-2xs text-xs font-mono font-medium flex items-center gap-1.5 cursor-pointer"
        title="Select language"
      >
        <span className="text-sm leading-none">{current.flag}</span>
        <span className="font-bold text-[11px] uppercase tracking-wider">{current.short}</span>
        <ChevronDown size={12} className={`transition-transform duration-200 opacity-60 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-2xl border border-[var(--border)]/70 bg-[var(--surface)] p-1.5 shadow-xl shadow-black/10 z-50 animate-in fade-in zoom-in-95 duration-150">
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
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-sans transition-colors cursor-pointer ${
                    active
                      ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold'
                      : 'text-[var(--text)] hover:bg-[var(--surface-subtle)]/70'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{item.flag}</span>
                    <span>{item.label}</span>
                  </div>
                  {active && <Check size={14} className="text-purple-600 dark:text-purple-400 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
