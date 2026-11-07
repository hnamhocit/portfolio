import React, { useState, useEffect } from 'react';
import { 
  Sun, Moon, ArrowUpRight, ExternalLink, 
  ShieldCheck, X, Award, CheckCircle2, BookOpen,
  Cpu, Workflow, Check, Copy
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaTelegramPlane, FaAws } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import { 
  SiFlutter, SiGo, SiRust, SiTypescript, SiCloudflare, SiNextdotjs 
} from 'react-icons/si';
import { useLanguage } from '../store/useLanguage';
import { translations, CREDENTIALS_LIST, type CredentialItem } from '../i18n/translations';
import LanguageSelector from './LanguageSelector';

export default function Portfolio() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.vi;
  const credentials = CREDENTIALS_LIST[lang] || CREDENTIALS_LIST.vi;

  const [isDark, setIsDark] = useState(false);
  const [showCredentials, setShowCredentials] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

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

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedId(code);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

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
      {/* HEADER: Gọn gàng, không trùng lặp link (Kyky.dev style) */}
      {/* ============================================================ */}
      <header className="w-full max-w-4xl lg:max-w-5xl mx-auto flex items-center justify-between z-10 shrink-0">
        
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
        <div className="flex items-center gap-3">
          
          {/* Credentials Modal Trigger */}
          <button
            onClick={() => setShowCredentials(true)}
            className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5"
          >
            <Award size={15} className="text-amber-500 shrink-0" />
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
      {/* CENTER HERO: Co gọn vào giữa, sát nhau, nhiều khoảng thở bao quanh */}
      {/* ============================================================ */}
      <main className="w-full my-auto py-2 sm:py-4 flex items-center justify-center">
        <div className="w-full max-w-4xl lg:max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Greeting, Role, All Direct CTAs & Tech Chips */}
            <div className="md:col-span-7 space-y-5 text-center md:text-left">
              
              {/* Main Greeting */}
              <div className="space-y-2.5">
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.25rem] text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
                  {t.hero.greeting} <span className="text-[#1E3A5F] dark:text-sky-300">{t.hero.name}</span>
                </h1>
                
                <p className="text-base sm:text-lg font-medium text-slate-700 dark:text-slate-300">
                  {t.hero.role}
                </p>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
                  {t.hero.tagline}
                </p>
              </div>

              {/* Direct Action Buttons: Resume, VNTEZ, Blog, GitHub */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 pt-1">
                
                {/* 1. Primary: My Resume PDF */}
                <a 
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#1E3A5F] hover:bg-[#152843] dark:bg-[#25466F] dark:hover:bg-[#1B3558] text-white text-xs sm:text-sm font-medium inline-flex items-center gap-1.5 shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <span>{t.hero.ctaResume}</span>
                  <ArrowUpRight size={14} />
                </a>

                {/* 2. Secondary: vntez.vercel.app */}
                <a 
                  href="https://vntez.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 bg-white/70 dark:bg-slate-800/70 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-medium inline-flex items-center gap-1.5 shadow-2xs transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>{t.hero.ctaVntez}</span>
                  <ExternalLink size={12} className="opacity-70" />
                </a>

                {/* 3. Tech Blog */}
                <a 
                  href="/blog"
                  className="px-4 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 bg-white/70 dark:bg-slate-800/70 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-medium inline-flex items-center gap-1.5 shadow-2xs transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <BookOpen size={13} className="opacity-70" />
                  <span>{t.hero.ctaBlog}</span>
                </a>

                {/* 4. GitHub Profile */}
                <a
                  href="https://github.com/hnamhocit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 bg-white/70 dark:bg-slate-800/70 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-all hover:scale-[1.05] cursor-pointer"
                  title="GitHub Profile"
                >
                  <FaGithub size={15} />
                </a>

              </div>

              {/* Glanceable Tech Chips */}
              <div className="pt-1">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5">
                  {coreSkills.map((s) => (
                    <span 
                      key={s.name}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-slate-200/80 dark:border-slate-800 bg-white/60 dark:bg-slate-900/50 text-[11px] font-mono font-medium text-slate-600 dark:text-slate-300 shadow-2xs"
                    >
                      {s.icon}
                      <span>{s.name}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Layered Card Character Portrait (Sitting close to text) */}
            <div className="md:col-span-5 flex justify-center md:justify-center">
              <div className="relative w-56 h-68 sm:w-64 sm:h-76 md:w-72 md:h-84 select-none group transition-transform duration-500 hover:scale-[1.02]">
                
                {/* Layer 1: Dark Navy Card */}
                <div 
                  className="absolute inset-0 rounded-[2.2rem] bg-[#1E3A5F] dark:bg-[#152843] translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-3.5 group-hover:translate-y-3.5"
                  aria-hidden="true"
                />

                {/* Layer 2: Slate Blue Card */}
                <div 
                  className="absolute inset-0 rounded-[2.2rem] bg-[#3B628B] dark:bg-[#25466F] translate-x-1.5 translate-y-1.5 opacity-90 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"
                  aria-hidden="true"
                />

                {/* Layer 3: Character Portrait Card */}
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
        </div>
      </main>

      {/* ============================================================ */}
      {/* BOTTOM BAR: Social Links on Left, Verified Credential on Right */}
      {/* ============================================================ */}
      <footer className="w-full max-w-4xl lg:max-w-5xl mx-auto flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 z-10 shrink-0 pt-2">
        
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
      {/* VERIFIED CREDENTIALS MODAL: Executive Luxury Design (2x2 Grid) */}
      {/* ============================================================ */}
      {showCredentials && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setShowCredentials(false)}
        >
          <div 
            className="relative w-full max-w-3xl bg-[var(--surface)] border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-[var(--border)] pb-4">
              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                    <Award size={18} />
                  </div>
                  <span>{t.credentialsModal.title}</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {t.credentialsModal.subtitle}
                </p>
              </div>

              <button
                onClick={() => setShowCredentials(false)}
                className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                title={t.credentialsModal.close}
              >
                <X size={16} />
              </button>
            </div>

            {/* 2x2 Executive Credential Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto pr-1">
              
              {/* CARD 1: AWS SOLUTIONS ARCHITECT */}
              <div className="relative rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/[0.05] via-transparent to-transparent p-5 flex flex-col justify-between hover:border-amber-500/60 hover:shadow-md transition-all group overflow-hidden">
                <FaAws className="absolute -right-5 -bottom-5 w-32 h-32 text-amber-500/[0.06] dark:text-amber-400/[0.07] pointer-events-none transition-transform group-hover:scale-110" />

                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shadow-xs">
                      <FaAws size={24} />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{t.credentialsModal.verified}</span>
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider block">
                      {credentials[0]?.badge || "AWS CERTIFIED"}
                    </span>
                    <h4 className="font-display font-bold text-base text-slate-900 dark:text-slate-100 mt-0.5 leading-snug">
                      {credentials[0]?.name || "AWS Certified Solutions Architect – Associate"}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {credentials[0]?.issuer} • {credentials[0]?.date}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono relative z-10">
                  <button 
                    onClick={() => handleCopyCode(credentials[0]?.code || "SAA-84920")}
                    className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-amber-600 transition-colors cursor-pointer"
                    title="Sao chép ID xác minh"
                  >
                    <span>ID: <strong className="font-semibold">{credentials[0]?.code}</strong></span>
                    {copiedId === credentials[0]?.code ? (
                      <Check size={12} className="text-emerald-500" />
                    ) : (
                      <Copy size={12} className="opacity-60" />
                    )}
                  </button>
                  <span className="text-[11px] text-amber-700 dark:text-amber-400 font-sans font-medium">
                    {credentials[0]?.highlight}
                  </span>
                </div>
              </div>

              {/* CARD 2: COMPTIA SECURITY+ */}
              <div className="relative rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-transparent p-5 flex flex-col justify-between hover:border-indigo-500/60 hover:shadow-md transition-all group overflow-hidden">
                <ShieldCheck className="absolute -right-5 -bottom-5 w-32 h-32 text-indigo-500/[0.06] dark:text-indigo-400/[0.07] pointer-events-none transition-transform group-hover:scale-110" />

                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-xs">
                      <ShieldCheck size={22} />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{t.credentialsModal.verified}</span>
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">
                      {credentials[1]?.badge || "COMPTIA SECURITY"}
                    </span>
                    <h4 className="font-display font-bold text-base text-slate-900 dark:text-slate-100 mt-0.5 leading-snug">
                      {credentials[1]?.name || "CompTIA Security+ (SY0-701)"}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {credentials[1]?.issuer} • {credentials[1]?.date}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono relative z-10">
                  <button 
                    onClick={() => handleCopyCode(credentials[1]?.code || "COMP001021")}
                    className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors cursor-pointer"
                    title="Sao chép ID xác minh"
                  >
                    <span>ID: <strong className="font-semibold">{credentials[1]?.code}</strong></span>
                    {copiedId === credentials[1]?.code ? (
                      <Check size={12} className="text-emerald-500" />
                    ) : (
                      <Copy size={12} className="opacity-60" />
                    )}
                  </button>
                  <span className="text-[11px] text-indigo-600 dark:text-indigo-400 font-sans font-medium">
                    {credentials[1]?.highlight}
                  </span>
                </div>
              </div>

              {/* CARD 3: STANFORD ONLINE MACHINE LEARNING */}
              <div className="relative rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/[0.05] via-transparent to-transparent p-5 flex flex-col justify-between hover:border-purple-500/60 hover:shadow-md transition-all group overflow-hidden">
                <Cpu className="absolute -right-5 -bottom-5 w-32 h-32 text-purple-500/[0.06] dark:text-purple-400/[0.07] pointer-events-none transition-transform group-hover:scale-110" />

                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shadow-xs">
                      <Cpu size={22} />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{t.credentialsModal.verified}</span>
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider block">
                      {credentials[2]?.badge || "STANFORD ONLINE"}
                    </span>
                    <h4 className="font-display font-bold text-base text-slate-900 dark:text-slate-100 mt-0.5 leading-snug">
                      {credentials[2]?.name || "Machine Learning Specialization"}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {credentials[2]?.issuer} • {credentials[2]?.date}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono relative z-10">
                  <button 
                    onClick={() => handleCopyCode(credentials[2]?.code || "STAN-ML-9924")}
                    className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-purple-600 transition-colors cursor-pointer"
                    title="Sao chép ID xác minh"
                  >
                    <span>ID: <strong className="font-semibold">{credentials[2]?.code}</strong></span>
                    {copiedId === credentials[2]?.code ? (
                      <Check size={12} className="text-emerald-500" />
                    ) : (
                      <Copy size={12} className="opacity-60" />
                    )}
                  </button>
                  <span className="text-[11px] text-purple-600 dark:text-purple-400 font-sans font-medium">
                    {credentials[2]?.highlight}
                  </span>
                </div>
              </div>

              {/* CARD 4: SCRUM ALLIANCE CSM */}
              <div className="relative rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/[0.05] via-transparent to-transparent p-5 flex flex-col justify-between hover:border-emerald-500/60 hover:shadow-md transition-all group overflow-hidden">
                <Workflow className="absolute -right-5 -bottom-5 w-32 h-32 text-emerald-500/[0.06] dark:text-emerald-400/[0.07] pointer-events-none transition-transform group-hover:scale-110" />

                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-xs">
                      <Workflow size={22} />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{t.credentialsModal.verified}</span>
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
                      {credentials[3]?.badge || "SCRUM ALLIANCE"}
                    </span>
                    <h4 className="font-display font-bold text-base text-slate-900 dark:text-slate-100 mt-0.5 leading-snug">
                      {credentials[3]?.name || "Certified ScrumMaster® (CSM)"}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {credentials[3]?.issuer} • {credentials[3]?.date}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono relative z-10">
                  <button 
                    onClick={() => handleCopyCode(credentials[3]?.code || "CSM-001594832")}
                    className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-emerald-600 transition-colors cursor-pointer"
                    title="Sao chép ID xác minh"
                  >
                    <span>ID: <strong className="font-semibold">{credentials[3]?.code}</strong></span>
                    {copiedId === credentials[3]?.code ? (
                      <Check size={12} className="text-emerald-500" />
                    ) : (
                      <Copy size={12} className="opacity-60" />
                    )}
                  </button>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-sans font-medium">
                    {credentials[3]?.highlight}
                  </span>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="pt-2 border-t border-[var(--border)] flex items-center justify-between text-xs text-slate-500">
              <span className="font-mono text-[11px]">Press ESC or click outside to close</span>
              <button
                onClick={() => setShowCredentials(false)}
                className="px-5 py-1.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium text-xs hover:opacity-90 transition-opacity cursor-pointer shadow-xs"
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
