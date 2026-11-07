import React, { useState, useEffect } from 'react';
import { 
  Sun, Moon, ArrowUpRight, ExternalLink, 
  ShieldCheck, X, Award, CheckCircle2, ChevronRight
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import { 
  SiFlutter, SiGo, SiRust, SiTypescript, SiCloudflare, SiNextdotjs 
} from 'react-icons/si';
import { useLanguage } from '../store/useLanguage';
import { translations, CREDENTIALS_LIST } from '../i18n/translations';
import LanguageSelector from './LanguageSelector';

export default function Portfolio() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.vi;
  const credentials = CREDENTIALS_LIST[lang] || CREDENTIALS_LIST.vi;

  const [isDark, setIsDark] = useState(false);
  const [showCredentials, setShowCredentials] = useState(false);

  // Theme initialization
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle('dark', nextDark);
    localStorage.setItem('theme', nextDark ? 'dark' : 'light');
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowCredentials(false);
      }
    };
    if (showCredentials) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showCredentials]);

  const coreSkills = [
    { name: 'Golang', icon: <SiGo className="text-[#00ADD8]" size={14} /> },
    { name: 'Rust', icon: <SiRust className="text-[#DEA584]" size={14} /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" size={13} /> },
    { name: 'Cloudflare Edge', icon: <SiCloudflare className="text-[#F38020]" size={14} /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-slate-900 dark:text-white" size={14} /> },
    { name: 'Flutter', icon: <SiFlutter className="text-[#02569B]" size={13} /> },
  ];

  return (
    <div className="h-screen w-full flex flex-col justify-between px-6 sm:px-12 lg:px-16 xl:px-24 py-6 sm:py-8 box-border overflow-hidden bg-[var(--bg)] transition-colors select-none">
      
      {/* ============================================================ */}
      {/* HEADER: Tối giản, thanh lịch, thoáng đạt (Kyky.dev style) */}
      {/* ============================================================ */}
      <header className="w-full flex items-center justify-between z-10 shrink-0">
        
        {/* Minimalist Logo Mark */}
        <a href="/" className="flex items-center gap-2 group">
          <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-md bg-[#1E3A5F]/10 text-[#1E3A5F] dark:bg-sky-500/15 dark:text-sky-300">
            hn
          </span>
          <span className="font-mono text-sm tracking-tight text-slate-800 dark:text-slate-200 font-medium">
            hnamhocit<span className="text-[#1E3A5F] dark:text-sky-400 font-bold">.dev</span>
          </span>
        </a>

        {/* Right Navigation & Tools */}
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* Direct link to VNTEZ Platform */}
          <a
            href="https://vntez.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-slate-300 dark:border-slate-700/80 bg-white/70 dark:bg-slate-800/70 hover:bg-white dark:hover:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-200 transition-all shadow-2xs hover:scale-[1.02] cursor-pointer"
            title="Khám phá toàn bộ hệ sinh thái sản phẩm VNTEZ"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>vntez.vercel.app</span>
            <ArrowUpRight size={13} className="opacity-70" />
          </a>

          {/* Blog Link */}
          <a
            href="/blog"
            className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            {t.nav.blog}
          </a>

          {/* Credentials Modal Trigger */}
          <button
            onClick={() => setShowCredentials(true)}
            className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5"
          >
            <Award size={14} className="opacity-70 text-amber-500" />
            <span>{t.nav.credentials}</span>
          </button>

          {/* Language Selector */}
          <LanguageSelector />

          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/80 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all shadow-2xs cursor-pointer"
            title={t.nav.themeToggle}
            aria-label={t.nav.themeToggle}
          >
            {isDark ? <Sun size={14} className="text-amber-400" /> : <Moon size={14} className="text-slate-700" />}
          </button>

        </div>
      </header>

      {/* ============================================================ */}
      {/* CENTER HERO: Pure Kyky.dev Minimalist Aesthetic */}
      {/* ============================================================ */}
      <main className="w-full my-auto py-2 sm:py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Greeting, Role, Direct CTAs & Tech Badges */}
          <div className="md:col-span-7 space-y-6 text-center md:text-left">
            
            {/* Main Greeting */}
            <div className="space-y-3">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
                {t.hero.greeting} <span className="text-[#1E3A5F] dark:text-sky-300">{t.hero.name}</span>
              </h1>
              
              <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300">
                {t.hero.role}
              </p>

              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed">
                {t.hero.tagline}
              </p>
            </div>

            {/* Direct HR-Friendly Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 pt-2">
              
              {/* Primary: My Resume PDF */}
              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-[#1E3A5F] hover:bg-[#152843] dark:bg-[#25466F] dark:hover:bg-[#1B3558] text-white text-sm font-medium inline-flex items-center gap-2 shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>{t.hero.ctaResume}</span>
                <ArrowUpRight size={15} />
              </a>

              {/* Secondary: Explore Live Products on vntez.vercel.app */}
              <a 
                href="https://vntez.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 bg-white/70 dark:bg-slate-800/70 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-medium inline-flex items-center gap-2 shadow-2xs transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>{t.hero.ctaVntez}</span>
                <ExternalLink size={13} className="opacity-70" />
              </a>

              {/* GitHub Button */}
              <a
                href="https://github.com/hnamhocit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 bg-white/70 dark:bg-slate-800/70 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-all hover:scale-[1.05] cursor-pointer"
                title="GitHub Profile"
              >
                <FaGithub size={16} />
              </a>

            </div>

            {/* Quick Glanceable Core Tech Chips (Instant 2-second scan for recruiters) */}
            <div className="pt-2">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                {coreSkills.map((s) => (
                  <span 
                    key={s.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 text-xs font-mono font-medium text-slate-600 dark:text-slate-300 shadow-2xs"
                  >
                    {s.icon}
                    <span>{s.name}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Layered Card Character Portrait (KyKy.dev Signature Style) */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative w-60 h-72 sm:w-68 sm:h-80 md:w-76 md:h-92 select-none group transition-transform duration-500 hover:scale-[1.02]">
              
              {/* Layer 1: Dark Navy Card (Bottom-Left Offset) */}
              <div 
                className="absolute inset-0 rounded-[2.2rem] bg-[#1E3A5F] dark:bg-[#152843] translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4"
                aria-hidden="true"
              />

              {/* Layer 2: Slate Blue Card (Middle Offset) */}
              <div 
                className="absolute inset-0 rounded-[2.2rem] bg-[#3B628B] dark:bg-[#25466F] translate-x-1.5 translate-y-1.5 opacity-90 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"
                aria-hidden="true"
              />

              {/* Layer 3: Character Portrait Card (Top Layer) */}
              <div className="relative h-full w-full rounded-[2.2rem] bg-[var(--surface)] border border-slate-200/60 dark:border-slate-700/60 overflow-hidden shadow-md flex items-center justify-center">
                <img 
                  src="/avatar.png" 
                  alt="Hoàng Nam" 
                  className="w-full h-full object-cover select-none"
                  loading="eager"
                  onError={(e) => { e.currentTarget.src = "/favicon.svg"; }}
                />
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* ============================================================ */}
      {/* BOTTOM BAR: Social Links on Left, Verified Credential on Right */}
      {/* ============================================================ */}
      <footer className="w-full flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 z-10 shrink-0 pt-2">
        
        {/* Left: Social Icons */}
        <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
          <a 
            href="https://github.com/hnamhocit" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            title="GitHub"
          >
            <FaGithub size={16} />
          </a>

          <a 
            href="https://linkedin.com/in/hnamhocit" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            title="LinkedIn"
          >
            <FaLinkedin size={16} />
          </a>

          <a 
            href="mailto:hnamhocit@gmail.com" 
            className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            title="Email"
          >
            <Mail size={16} />
          </a>

          <a 
            href="https://t.me/hnamhocit" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            title="Telegram"
          >
            <FaTelegramPlane size={16} />
          </a>
        </div>

        {/* Right: Verified Credentials Badge Trigger */}
        <button
          onClick={() => setShowCredentials(true)}
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer"
          title="Nhấn để xem chi tiết chứng chỉ quốc tế đã xác thực"
        >
          <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
          <span className="hidden sm:inline">{t.hero.statusText}</span>
          <span className="sm:hidden">AWS SAA & Security+</span>
        </button>

      </footer>

      {/* ============================================================ */}
      {/* VERIFIED CREDENTIALS MODAL: Clean, Accessible on Demand */}
      {/* ============================================================ */}
      {showCredentials && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowCredentials(false)}
        >
          <div 
            className="relative w-full max-w-2xl bg-[var(--surface)] border border-[var(--border-strong)] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-[var(--border)] pb-4">
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Award className="text-amber-500 shrink-0" size={20} />
                  <span>{t.credentialsModal.title}</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {t.credentialsModal.subtitle}
                </p>
              </div>

              <button
                onClick={() => setShowCredentials(false)}
                className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                title={t.credentialsModal.close}
              >
                <X size={16} />
              </button>
            </div>

            {/* Credentials Grid */}
            <div className="overflow-y-auto space-y-3.5 pr-1">
              {credentials.map((c) => (
                <div 
                  key={c.id}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface-subtle)]/50 p-4 transition-colors hover:border-slate-400 dark:hover:border-slate-600"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#1E3A5F]/10 dark:bg-sky-500/15 text-[#1E3A5F] dark:text-sky-300 font-bold">
                          {c.badge}
                        </span>
                        <h4 className="font-display font-bold text-sm text-slate-900 dark:text-slate-100">
                          {c.name}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {c.issuer} • {t.credentialsModal.idLabel}: <span className="font-mono font-semibold text-slate-700 dark:text-slate-300">{c.code}</span> ({c.date})
                      </p>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium shrink-0">
                      <CheckCircle2 size={13} />
                      <span>{t.credentialsModal.verified}</span>
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {c.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="pt-2 border-t border-[var(--border)] flex items-center justify-between text-xs text-slate-500">
              <span className="font-mono">Press ESC or click outside to close</span>
              <button
                onClick={() => setShowCredentials(false)}
                className="px-4 py-1.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium text-xs hover:opacity-90 transition-opacity cursor-pointer"
              >
                {t.credentialsModal.close}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
