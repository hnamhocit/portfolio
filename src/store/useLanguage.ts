import { create } from 'zustand';

export type Language = 'vi' | 'en' | 'ja' | 'zh';

export const LANGUAGES: { code: Language; label: string; flag: string; short: string }[] = [
  { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳', short: 'VI' },
  { code: 'en', label: 'English', flag: '🇺🇸', short: 'EN' },
  { code: 'zh', label: '简体中文', flag: '🇨🇳', short: 'ZH' },
  { code: 'ja', label: '日本語', flag: '🇯🇵', short: 'JA' },
];

interface LanguageState {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const useLanguage = create<LanguageState>((set) => ({
  lang: 'vi',
  setLang: (lang) => {
    set({ lang });
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred_lang', lang);
      document.documentElement.lang = lang;
    }
  },
}));

export const initLanguage = () => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('preferred_lang') as Language;
    if (saved && ['vi', 'en', 'ja', 'zh'].includes(saved)) {
      useLanguage.getState().setLang(saved);
    }
  }
};
