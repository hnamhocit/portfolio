import { create } from 'zustand';

export type Language = 'vi' | 'en' | 'ja' | 'zh';

interface LanguageState {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const useLanguage = create<LanguageState>((set) => ({
  lang: 'vi',
  setLang: (lang) => {
    set({ lang });
    // Save to localStorage if client-side
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred_lang', lang);
      document.documentElement.lang = lang;
    }
  },
}));

// Init function to run on mount
export const initLanguage = () => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('preferred_lang') as Language;
    if (saved && ['vi', 'en', 'ja', 'zh'].includes(saved)) {
      useLanguage.getState().setLang(saved);
    }
  }
};
