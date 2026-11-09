import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sun, Moon, ArrowUpRight, 
  ShieldCheck, X, Award,
  Cpu, Workflow, Check, Copy, Mail
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaFacebook, FaTelegramPlane, FaAws } from 'react-icons/fa';
import { 
  SiFlutter, SiTypescript, SiCloudflare, SiNextdotjs,
  SiDotnet, SiNestjs
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

  // Tech stack: Dark muted gray logos with concise labels (Giải pháp 3: Tech Lead style)
  const coreSkills = [
    { name: 'ASP.NET Core', shortName: '.NET', icon: <SiDotnet size={17} /> },
    { name: 'NestJS', shortName: 'NestJS', icon: <SiNestjs size={16} /> },
    { name: 'TypeScript', shortName: 'TypeScript', icon: <SiTypescript size={15} /> },
    { name: 'Next.js', shortName: 'Next.js', icon: <SiNextdotjs size={15} /> },
    { name: 'Flutter', shortName: 'Flutter', icon: <SiFlutter size={15} /> },
    { name: 'Cloudflare Edge', shortName: 'Cloudflare', icon: <SiCloudflare size={16} /> },
  ];

  return (
    <div className="min-h-screen sm:h-screen min-h-[100dvh] sm:h-[100dvh] w-full flex flex-col justify-between px-4 sm:px-12 lg:px-16 xl:px-24 py-4 sm:py-8 box-border overflow-y-auto sm:overflow-hidden bg-[var(--bg)] transition-colors select-none font-sans">
      
      {/* ============================================================ */}
      {/* HEADER: Gọn gàng, tối giản (Responsive Kyky.dev style) */}
      {/* ============================================================ */}
      <motion.header 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-4xl lg:max-w-5xl mx-auto flex items-center justify-between z-10 shrink-0"
      >
        
        {/* Minimalist Logo Mark (Larger, more readable) */}
        <a href="/" className="flex items-center gap-2 group">
          <span className="font-mono text-xs sm:text-sm font-bold px-2 py-0.5 rounded-md bg-[#1E3A5F]/10 text-[#1E3A5F] dark:bg-sky-500/15 dark:text-sky-300">
            hn
          </span>
          <span className="font-mono text-sm sm:text-base tracking-tight text-slate-800 dark:text-slate-200 font-semibold">
            hnamhocit<span className="text-[#1E3A5F] dark:text-sky-400 font-bold">.dev</span>
          </span>
        </a>

        {/* Right Navigation & Tools (Flat buttons, no harsh white bg) */}
        <div className="flex items-center gap-1 sm:gap-2">
          
          {/* Credentials Modal Trigger */}
          <button
            onClick={() => setShowCredentials(true)}
            className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5"
            title={t.nav.credentials}
          >
            <Award size={16} className="text-amber-500 shrink-0" />
            <span className="hidden sm:inline">{t.nav.credentials}</span>
          </button>

          {/* Language Selector (Flat, animated) */}
          <LanguageSelector />

          {/* Theme Toggle Button (Flat, no white circular card) */}
          <button 
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg bg-transparent hover:bg-black/5 dark:hover:bg-white/5 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            title={t.nav.themeToggle}
            aria-label={t.nav.themeToggle}
          >
            {isDark ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-slate-700 dark:text-slate-200" />}
          </button>

        </div>
      </motion.header>

      {/* ============================================================ */}
      {/* CENTER HERO: Co gọn vào giữa, sát nhau, nhiều khoảng thở */}
      {/* ============================================================ */}
      <main className="w-full my-auto py-3 sm:py-6 flex items-center justify-center">
        <div className="w-full max-w-4xl lg:max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Greeting, Role, Direct CTAs & Tech Row */}
            <div className="md:col-span-7 space-y-4 sm:space-y-5 text-center md:text-left">
              
              {/* Main Greeting (1 line on desktop, at most 2 lines on mobile, NEVER 3 lines) */}
              <motion.div 
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="space-y-2"
              >
                <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-[2.2rem] lg:text-[2.65rem] text-slate-900 dark:text-slate-100 tracking-tight leading-tight flex flex-wrap items-baseline justify-center md:justify-start gap-x-2 md:whitespace-nowrap">
                  <span className="whitespace-nowrap">{t.hero.greeting}</span>
                  <span className="text-[#1E3A5F] dark:text-sky-300 font-extrabold whitespace-nowrap">{t.hero.name}</span>
                </h1>
                
                <p className="text-sm sm:text-base md:text-lg font-medium text-slate-700 dark:text-slate-300 tracking-tight">
                  {t.hero.role}
                </p>

                <p className="quote-bio text-slate-800 dark:text-slate-100 max-w-xl mx-auto md:mx-0 md:border-l-[3px] md:border-[#1E3A5F]/40 md:dark:border-sky-400/50 md:pl-4 py-1">
                  &ldquo;{t.hero.tagline}&rdquo;
                </p>
              </motion.div>

              {/* Action Buttons: Primary (Xem CV ↗) vs Secondary (vntez) + Social Icons (GitHub, LinkedIn, Telegram) */}
              <motion.div 
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-2.5 pt-1"
              >
                
                {/* 1. Nút chính (Primary CTA): Xem CV ↗ (Nền xanh navy đậm #1E3A5F, chữ trắng) */}
                <a 
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#1E3A5F] hover:bg-[#152843] dark:bg-sky-600 dark:hover:bg-sky-500 text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5 shadow-xs transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>{t.hero.ctaResume}</span>
                  <ArrowUpRight size={14} className="shrink-0" />
                </a>

                {/* 2. Nút phụ (Secondary): vntez (Nền viền trong suốt border border-slate-300, hover đổi màu nhẹ) */}
                <a 
                  href="https://vntez.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 sm:py-2.5 rounded-full border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 bg-transparent hover:bg-slate-100/70 dark:hover:bg-slate-800/70 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-medium inline-flex items-center transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>{t.hero.ctaVntez}</span>
                </a>

                {/* 3. Icon mạng xã hội: Gom GitHub, LinkedIn, Telegram thành các icon tròn đồng cỡ nằm cạnh nhau */}
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/hnamhocit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 bg-transparent hover:bg-slate-100/70 dark:hover:bg-slate-800/70 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                    title="GitHub"
                  >
                    <FaGithub size={15} />
                  </a>

                  <a
                    href="https://linkedin.com/in/hnamhocit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 bg-transparent hover:bg-slate-100/70 dark:hover:bg-slate-800/70 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                    title="LinkedIn"
                  >
                    <FaLinkedin size={15} />
                  </a>

                  <a
                    href="https://t.me/hnamhocit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 bg-transparent hover:bg-slate-100/70 dark:hover:bg-slate-800/70 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                    title="Telegram"
                  >
                    <FaTelegramPlane size={15} />
                  </a>
                </div>

              </motion.div>

              {/* ============================================================ */}
              {/* Giải pháp 3: Tách hẳn tech stack thành một hàng icon phẳng tinh tế */}
              {/* nằm ngang phía dưới (chỉ gồm logo xám tối màu và tên ngắn gọn) */}
              {/* ============================================================ */}
              <motion.div 
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="pt-3.5 sm:pt-4 border-t border-slate-200/60 dark:border-slate-800/60"
              >
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 sm:gap-x-6 gap-y-2">
                  {coreSkills.map((s) => (
                    <div 
                      key={s.name}
                      className="group flex items-center gap-1.5 transition-all duration-200 cursor-default"
                      title={s.name}
                    >
                      <span className="text-slate-400 dark:text-slate-500 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                        {s.icon}
                      </span>
                      <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 tracking-tight transition-colors">
                        {s.shortName}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* Right Column: Layered Card Character Portrait (Vibrant Blue Light Palette) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="md:col-span-5 flex justify-center md:justify-center py-2 sm:py-0"
            >
              <div className="relative w-44 h-52 sm:w-56 sm:h-64 md:w-68 md:h-80 select-none group transition-transform duration-500 hover:scale-[1.02]">
                
                {/* Layer 1: Bottom-Left Rich Navy Card (#1c4473) */}
                <div 
                  className="absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] bg-[#1c4473] dark:bg-[#143254] -translate-x-3.5 translate-y-3.5 sm:-translate-x-6 sm:translate-y-6 transition-transform duration-500 ease-out group-hover:-translate-x-5 group-hover:translate-y-5 sm:group-hover:-translate-x-8 sm:group-hover:translate-y-8 shadow-md"
                  aria-hidden="true"
                />

                {/* Layer 2: Top-Right Lighter Slate Blue Card (#49698f) */}
                <div 
                  className="absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] bg-[#49698f] dark:bg-[#345376] translate-x-3.5 -translate-y-3.5 sm:translate-x-6 sm:-translate-y-6 transition-transform duration-500 ease-out group-hover:translate-x-5 group-hover:-translate-y-5 sm:group-hover:translate-x-8 sm:group-hover:-translate-y-8 shadow-md"
                  aria-hidden="true"
                />

                {/* Layer 3: Front Character Portrait Card (Vibrant Blue Light Gradient) */}
                <div className="relative h-full w-full rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-b from-[#3b6a9c] via-[#275382] to-[#1c4473] border border-white/20 overflow-hidden shadow-2xl flex items-end justify-center">
                  
                  {/* Subtle ambient light sky-blue radial glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-200/30 via-sky-300/10 to-transparent pointer-events-none" />

                  {/* Cutout Portrait Image without any dark haze */}
                  <img 
                    src="/avatar.png" 
                    alt="Hoàng Nam" 
                    className="w-full h-full object-cover object-top select-none transition-transform duration-500 group-hover:scale-105 relative z-10"
                    loading="eager"
                    onError={(e) => { e.currentTarget.src = "/favicon.svg"; }}
                  />
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </main>

      {/* ============================================================ */}
      {/* BOTTOM BAR: Minimalist & Clean (Enhanced typography) */}
      {/* ============================================================ */}
      <motion.footer 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
        className="w-full max-w-4xl lg:max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-sm text-slate-600 dark:text-slate-400 z-10 shrink-0 pt-3 pb-1"
      >
        
        {/* Left: Email & Facebook */}
        <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
          <a 
            href="mailto:hnamhocit@gmail.com" 
            className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2"
            title="Email"
          >
            <Mail size={16} />
            <span className="font-mono text-xs sm:text-sm">hnamhocit@gmail.com</span>
          </a>

          <a 
            href="https://facebook.com/hnamhocit" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            title="Facebook"
          >
            <FaFacebook size={17} />
          </a>
        </div>

        {/* Right: Est. Year & Location */}
        <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500"></span>
          <span>{t.hero.statusText}</span>
        </div>

      </motion.footer>

      {/* ============================================================ */}
      {/* VERIFIED CREDENTIALS MODAL: Executive Luxury Design (2x2 Grid) */}
      {/* ============================================================ */}
      <AnimatePresence>
        {showCredentials && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-md"
            onClick={() => setShowCredentials(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
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
                <span className="font-mono text-[11px]">{t.credentialsModal.escHint}</span>
                <button
                  onClick={() => setShowCredentials(false)}
                  className="px-5 py-1.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium text-xs hover:opacity-90 transition-opacity cursor-pointer shadow-xs"
                >
                  {t.credentialsModal.close}
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
