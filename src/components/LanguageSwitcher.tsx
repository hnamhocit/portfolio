import React from 'react';
import { useLanguage, type Language } from '@/store/useLanguage';
import { translations } from '@/i18n/translations';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);

  const languages: { code: Language; label: string }[] = [
    { code: 'vi', label: 'Tiếng Việt' },
    { code: 'en', label: 'English' },
    { code: 'ja', label: '日本語' },
    { code: 'zh', label: '中文' },
  ];

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900/80 border border-neutral-700 text-neutral-300 hover:text-white hover:border-purple-500 backdrop-blur-md transition-all shadow-lg"
        >
          <Globe className="w-5 h-5" />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                  lang === l.code 
                    ? 'bg-purple-600/20 text-purple-400 font-medium' 
                    : 'text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
