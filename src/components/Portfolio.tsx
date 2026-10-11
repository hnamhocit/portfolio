import React, { useState, useEffect } from 'react';
import { 
  Sun, Moon, Mail, ArrowUpRight, ExternalLink, 
  Sparkles, ArrowRight, ArrowUp, Server, Smartphone, Shield, 
  Award, CheckCircle2, Globe, ChevronDown,
  Key, Sliders, Bell, Database, BarChart3, Terminal, Cpu, Layers, DollarSign, Users, Zap, ShieldCheck, Lock, Check,
  Activity, GitBranch, Box, Clock, Workflow, FileCode2
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaFacebook, FaAws } from 'react-icons/fa';
import { 
  SiFlutter, SiGo, SiRust, SiDocker, 
  SiKubernetes, SiLinux, SiPostgresql, SiRedis,
  SiSvelte, SiTailwindcss, SiTypescript
} from 'react-icons/si';
import { useLanguage } from '../store/useLanguage';
import { translations } from '../i18n/translations';
import LanguageSelector from './LanguageSelector';

export default function Portfolio() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.vi;
  const [isDark, setIsDark] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Tính tuổi động theo năm hiện tại trừ đi năm sinh 2007
  const currentAge = new Date().getFullYear() - 2007;

  // Khởi tạo theme: ưu tiên theme đã lưu, mặc định theo light để tận hưởng tone Claude dịu
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

  // Lắng nghe cuộn trang để hiển thị nút Scroll To Top
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle('dark', nextDark);
    localStorage.setItem('theme', nextDark ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] font-sans antialiased selection:bg-purple-500/25 selection:text-purple-600 dark:selection:text-purple-300 transition-colors duration-300">
      
      {/* ============================================================ */}
      {/* HEADER: Nền trắng tinh khôi, chỉ gồm Trang chủ và Blog */}
      {/* ============================================================ */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)]/40 bg-white/95 dark:bg-[#10141E]/95 backdrop-blur-lg transition-colors">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Brand & Avatar */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src="/avatar.png" 
                alt="Hoàng Nam" 
                className="w-9 h-9 rounded-full object-cover border border-purple-500/40 group-hover:border-purple-500 transition-all duration-300 shadow-xs"
                onError={(e) => { e.currentTarget.src = "/favicon.svg"; }}
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[var(--bg)]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-[var(--text)] group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Hoàng Nam
              </span>
              <span className="text-[11px] text-[var(--muted)] font-mono leading-none">
                hnamhocit
              </span>
            </div>
          </a>

          {/* Navigation Links: Chỉ gồm Trang chủ và Blog */}
          <nav className="flex items-center gap-6 sm:gap-8 text-xs sm:text-sm font-medium">
            <a href="#" className="text-purple-600 dark:text-purple-400 font-semibold hover:opacity-80 transition-opacity">
              {t.nav.home}
            </a>
            <a href="/blog" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors">
              {t.nav.blog}
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <LanguageSelector />

            {/* GitHub */}
            <a 
              href="https://github.com/hnamhocit" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-lg border border-[var(--border)]/60 bg-[var(--surface)] text-[var(--muted)] hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-500/40 transition-colors shadow-2xs"
              title="GitHub Profile"
            >
              <FaGithub size={15} />
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-[var(--border)]/60 bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--text)] transition-colors cursor-pointer shadow-2xs"
              aria-label={t.nav.themeToggle}
              title={t.nav.themeToggle}
            >
              {isDark ? <Sun size={15} className="text-purple-300" /> : <Moon size={15} />}
            </button>
          </div>

        </div>
      </header>

      <main className="flex-grow pt-16">
        
        {/* ============================================================ */}
        {/* 01 · HERO FULL SCREEN VỚI BACKGROUND AURORA TÍM DỊU DÀNG */}
        {/* ============================================================ */}
        <section id="about" className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center relative overflow-hidden border-b border-[var(--border)]/30 px-6 py-16">
          
          {/* Subtle Organic Aurora Background Glowing Blobs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
            {/* Purple Ambient Orb */}
            <div className="aurora-blob-1 absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[750px] h-[450px] rounded-full bg-purple-500/15 dark:bg-purple-600/15 blur-[120px] opacity-80" />
            
            {/* Indigo Ambient Orb */}
            <div className="aurora-blob-2 absolute top-1/3 left-1/3 w-[500px] sm:w-[650px] h-[400px] rounded-full bg-indigo-500/15 dark:bg-indigo-600/15 blur-[130px] opacity-70" />
            
            {/* Fuchsia/Pink Subtle Highlight */}
            <div className="aurora-blob-3 absolute top-1/2 right-1/4 w-[450px] sm:w-[550px] h-[380px] rounded-full bg-fuchsia-500/10 dark:bg-fuchsia-600/10 blur-[110px] opacity-60" />
            
            {/* Subtle Tech Grid Texture with radial mask */}
            <div className="absolute inset-0 bg-grid-tech opacity-20 dark:opacity-15 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
          </div>

          <div className="max-w-3xl mx-auto flex flex-col items-center text-center relative z-10 my-auto">
            
            {/* Avatar lớn với viền hào quang tím nhẹ nhàng */}
            <div className="relative mb-6 group">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition duration-700" />
              <img 
                src="/avatar.png" 
                alt="Hoàng Nam" 
                className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-2 border-purple-400/50 z-10 shadow-xl transition-transform duration-500 group-hover:scale-105"
                onError={(e) => { e.currentTarget.src = "/favicon.svg"; }}
              />
              <span className="absolute bottom-1.5 right-2 z-20 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[var(--surface)] shadow-xs" />
            </div>

            {/* Châm ngôn truyền cảm hứng */}
            <div className="mb-6 space-y-1">
              <p className="font-mono text-xs sm:text-sm text-purple-600 dark:text-purple-300 font-medium tracking-wide">
                {t.hero.quote_zh}
              </p>
              <p className="text-xs text-[var(--dim)] italic">
                {t.hero.quote_trans}
              </p>
            </div>

            {/* Tiêu đề chính với gradient tím cao cấp */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-[var(--text)] mb-5 leading-tight">
              {t.hero.greeting}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 dark:from-purple-400 dark:via-fuchsia-400 dark:to-indigo-400">
                {t.hero.name}
              </span>.
            </h1>

            {/* Lời giới thiệu cô đọng & ấm áp */}
            <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-2xl mb-8 font-normal">
              {t.hero.bio(currentAge)}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
              <a 
                href="#povixa" 
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white font-medium text-sm hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-purple-500/25 cursor-pointer"
              >
                <span>{t.hero.ctaPovixa}</span>
                <ArrowRight size={14} />
              </a>

              <a 
                href="mailto:hnamhocit@gmail.com" 
                className="px-6 py-3 rounded-full border border-purple-500/30 bg-[var(--surface)] hover:bg-[var(--surface-hover)] text-[var(--text)] font-medium text-sm hover:border-purple-500 transition-all flex items-center gap-2 shadow-sm"
              >
                <Mail size={14} className="text-purple-600 dark:text-purple-400" />
                <span>{t.hero.ctaEmail}</span>
              </a>
            </div>

          </div>

          {/* Cuộn xuống hint */}
          <div className="mt-auto pt-4 flex flex-col items-center gap-1 text-[var(--dim)] text-xs font-mono">
            <span>{t.hero.scrollHint}</span>
            <ChevronDown size={15} className="animate-bounce text-purple-500 dark:text-purple-400" />
          </div>

        </section>

        {/* ============================================================ */}
        {/* 02 · FLAGSHIP PROJECT: POVIXA CLOUD (CASE STUDY DÀNH CHO HR & TECH LEAD) */}
        {/* ============================================================ */}
        <section id="povixa" className="py-20 border-b border-[var(--border)]/30 bg-[var(--surface-subtle)]/20">
          <div className="max-w-5xl mx-auto px-6">
            
            {/* Top Bar Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <Sparkles size={14} />
                  <span>{t.povixa.badge}</span>
                </span>
                <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[var(--text)] mt-1.5">
                  {t.povixa.title}
                </h2>
                <p className="text-xs sm:text-sm text-[var(--muted)] mt-1 font-normal">
                  {t.povixa.tagline}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href="https://povixa.cloud" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <span>povixa.cloud</span>
                  <ExternalLink size={13} />
                </a>
                <a 
                  href="https://github.com/hnamhocit/povixa" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-purple-400 transition-colors shadow-2xs"
                >
                  <FaGithub size={13} />
                  <span>hnamhocit/povixa</span>
                </a>
              </div>
            </div>

            {/* Showcase Main Container */}
            <div className="rounded-3xl bg-[var(--surface)] p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)] border border-[var(--border)]/60 space-y-12">
              
              {/* 1. Project Overview & Candidate Role (HR screens this first) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-mono font-semibold">
                    <Activity size={13} />
                    <span>{t.povixa.roleTag}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[var(--text)] leading-snug">
                    {t.povixa.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                    {t.povixa.desc}
                  </p>

                  {/* Candidate Ownership Grid (Clean & Breathable) */}
                  <div className="grid grid-cols-2 gap-y-3.5 gap-x-6 pt-3 text-xs font-mono">
                    <div>
                      <span className="text-[var(--dim)] block text-[10px] uppercase tracking-wider">{t.povixa.scopeLabel}</span>
                      <strong className="text-[var(--text)] text-xs sm:text-sm block mt-0.5">{t.povixa.scopeVal}</strong>
                    </div>
                    <div>
                      <span className="text-[var(--dim)] block text-[10px] uppercase tracking-wider">{t.povixa.timeLabel}</span>
                      <strong className="text-[var(--text)] text-xs sm:text-sm block mt-0.5">{t.povixa.timeVal}</strong>
                    </div>
                    <div>
                      <span className="text-[var(--dim)] block text-[10px] uppercase tracking-wider">{t.povixa.modelLabel}</span>
                      <strong className="text-[var(--text)] text-xs sm:text-sm block mt-0.5">{t.povixa.modelVal}</strong>
                    </div>
                    <div>
                      <span className="text-[var(--dim)] block text-[10px] uppercase tracking-wider">{t.povixa.statusLabel}</span>
                      <strong className="text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm flex items-center gap-1.5 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {t.povixa.statusVal}
                      </strong>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <a 
                    href="https://povixa.cloud" 
                    target="_blank" 
                    rel="noreferrer"
                    className="block relative rounded-2xl overflow-hidden border border-[var(--border)] shadow-md hover:shadow-xl hover:border-purple-500/40 transition-all group/img"
                  >
                    <img 
                      src="/povixa-preview.png" 
                      alt="Povixa Cloud Platform Preview" 
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover/img:scale-105"
                      onError={(e) => { e.currentTarget.src = "/lofi_bg.jpg"; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                      <span className="text-white text-xs font-mono font-medium flex items-center gap-1.5">
                        <Globe size={13} className="text-purple-400" />
                        <span>{t.povixa.openLiveHint}</span>
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* 2. Key Technical Metrics & Benchmarks (Clean, open stat counter strip) */}
              <div className="pt-8 border-t border-[var(--border)]/40">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <Activity size={16} className="text-purple-600 dark:text-purple-400" />
                    <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-[var(--text)]">
                      {t.povixa.metricsTitle}
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-[var(--dim)]">{t.povixa.metricsSub}</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-1">
                  <div className="space-y-1">
                    <span className="font-display font-black text-3xl sm:text-4xl text-purple-600 dark:text-purple-400 block tracking-tight">
                      {t.povixa.metric1Val}
                    </span>
                    <span className="text-xs font-bold text-[var(--text)] block">{t.povixa.metric1Label}</span>
                    <span className="text-[11px] text-[var(--muted)] block leading-snug">{t.povixa.metric1Desc}</span>
                  </div>

                  <div className="space-y-1">
                    <span className="font-display font-black text-3xl sm:text-4xl text-sky-600 dark:text-sky-400 block tracking-tight">
                      {t.povixa.metric2Val}
                    </span>
                    <span className="text-xs font-bold text-[var(--text)] block">{t.povixa.metric2Label}</span>
                    <span className="text-[11px] text-[var(--muted)] block leading-snug">{t.povixa.metric2Desc}</span>
                  </div>

                  <div className="space-y-1">
                    <span className="font-display font-black text-3xl sm:text-4xl text-emerald-600 dark:text-emerald-400 block tracking-tight">
                      {t.povixa.metric3Val}
                    </span>
                    <span className="text-xs font-bold text-[var(--text)] block">{t.povixa.metric3Label}</span>
                    <span className="text-[11px] text-[var(--muted)] block leading-snug">{t.povixa.metric3Desc}</span>
                  </div>

                  <div className="space-y-1">
                    <span className="font-display font-black text-3xl sm:text-4xl text-amber-600 dark:text-amber-400 block tracking-tight">
                      {t.povixa.metric4Val}
                    </span>
                    <span className="text-xs font-bold text-[var(--text)] block">{t.povixa.metric4Label}</span>
                    <span className="text-[11px] text-[var(--muted)] block leading-snug">{t.povixa.metric4Desc}</span>
                  </div>
                </div>
              </div>

              {/* 3. Core Engineering Challenges & Solutions (Clean semantic list) */}
              <div className="pt-8 border-t border-[var(--border)]/40">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <Workflow size={16} className="text-purple-600 dark:text-purple-400" />
                    <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-[var(--text)]">
                      {t.povixa.challengesTitle}
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-[var(--dim)]">{t.povixa.challengesSub}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7">
                  
                  {/* Challenge 1: Auth & Zero-Trust */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Key size={15} className="text-purple-500 shrink-0" />
                      <h5 className="font-display font-bold text-sm text-[var(--text)]">
                        {t.povixa.challenges[0]?.title}
                      </h5>
                    </div>
                    <div className="text-xs text-[var(--muted)] leading-relaxed pl-6 space-y-1">
                      <p>{t.povixa.challenges[0]?.problem}</p>
                      <p>{t.povixa.challenges[0]?.solution}</p>
                    </div>
                  </div>

                  {/* Challenge 2: Edge Remote Config */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Sliders size={15} className="text-emerald-500 shrink-0" />
                      <h5 className="font-display font-bold text-sm text-[var(--text)]">
                        {t.povixa.challenges[1]?.title}
                      </h5>
                    </div>
                    <div className="text-xs text-[var(--muted)] leading-relaxed pl-6 space-y-1">
                      <p>{t.povixa.challenges[1]?.problem}</p>
                      <p>{t.povixa.challenges[1]?.solution}</p>
                    </div>
                  </div>

                  {/* Challenge 3: Storage Engine */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Database size={15} className="text-sky-500 shrink-0" />
                      <h5 className="font-display font-bold text-sm text-[var(--text)]">
                        {t.povixa.challenges[2]?.title}
                      </h5>
                    </div>
                    <div className="text-xs text-[var(--muted)] leading-relaxed pl-6 space-y-1">
                      <p>{t.povixa.challenges[2]?.problem}</p>
                      <p>{t.povixa.challenges[2]?.solution}</p>
                    </div>
                  </div>

                  {/* Challenge 4: Ingestion Pipeline */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <BarChart3 size={15} className="text-fuchsia-500 shrink-0" />
                      <h5 className="font-display font-bold text-sm text-[var(--text)]">
                        {t.povixa.challenges[3]?.title}
                      </h5>
                    </div>
                    <div className="text-xs text-[var(--muted)] leading-relaxed pl-6 space-y-1">
                      <p>{t.povixa.challenges[3]?.problem}</p>
                      <p>{t.povixa.challenges[3]?.solution}</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* 4. DevOps, CI/CD & Production Discipline (Clean spacious 4 columns) */}
              <div className="pt-8 border-t border-[var(--border)]/40">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <GitBranch size={16} className="text-purple-600 dark:text-purple-400" />
                    <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-[var(--text)]">
                      {t.povixa.disciplineTitle}
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-[var(--dim)]">{t.povixa.disciplineSub}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400 text-xs font-mono font-bold">
                      <Box size={14} />
                      <span>{t.povixa.disciplines[0]?.title}</span>
                    </div>
                    <p className="text-xs text-[var(--muted)] leading-relaxed">
                      {t.povixa.disciplines[0]?.desc}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-sky-600 dark:text-sky-400 text-xs font-mono font-bold">
                      <Workflow size={14} />
                      <span>{t.povixa.disciplines[1]?.title}</span>
                    </div>
                    <p className="text-xs text-[var(--muted)] leading-relaxed">
                      {t.povixa.disciplines[1]?.desc}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold">
                      <SiKubernetes size={14} />
                      <span>{t.povixa.disciplines[2]?.title}</span>
                    </div>
                    <p className="text-xs text-[var(--muted)] leading-relaxed">
                      {t.povixa.disciplines[2]?.desc}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 text-xs font-mono font-bold">
                      <ShieldCheck size={14} />
                      <span>{t.povixa.disciplines[3]?.title}</span>
                    </div>
                    <p className="text-xs text-[var(--muted)] leading-relaxed">
                      {t.povixa.disciplines[3]?.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* 5. Core Technologies & Architecture Stack (Clean 4 columns) */}
              <div className="pt-8 border-t border-[var(--border)]/40">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <Cpu size={16} className="text-purple-600 dark:text-purple-400" />
                    <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-[var(--text)]">
                      {t.povixa.techTitle}
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-[var(--dim)]">{t.povixa.techSub}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {t.povixa.techStacks.map((stack, i) => {
                    const colors = [
                      "text-purple-600 dark:text-purple-400",
                      "text-sky-600 dark:text-sky-400",
                      "text-orange-600 dark:text-orange-400",
                      "text-emerald-600 dark:text-emerald-400"
                    ];
                    return (
                      <div key={i} className="space-y-1">
                        <span className={`text-[10px] font-mono ${colors[i % colors.length]} font-bold uppercase block`}>
                          {stack.category}
                        </span>
                        <strong className="text-xs sm:text-sm font-bold text-[var(--text)] block">
                          {stack.strong}
                        </strong>
                        <span className="text-xs text-[var(--muted)] block leading-relaxed">
                          {stack.desc}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 6. Live Verifiable Subdomains (Clean interactive links without border clutter) */}
              <div className="pt-8 border-t border-[var(--border)]/40">
                <p className="text-xs font-mono text-[var(--dim)] uppercase tracking-wider mb-4">
                  {t.povixa.subdomainsTitle}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {t.povixa.subdomains.map((sub, i) => {
                    const cfgs = [
                      { hover: "hover:bg-purple-500/[0.06]", text: "text-purple-600 dark:text-purple-400", href: "https://povixa.cloud" },
                      { hover: "hover:bg-sky-500/[0.06]", text: "text-sky-600 dark:text-sky-400", href: "https://id.povixa.cloud" },
                      { hover: "hover:bg-emerald-500/[0.06]", text: "text-emerald-600 dark:text-emerald-400", href: "https://console.povixa.cloud" },
                      { hover: "hover:bg-indigo-500/[0.06]", text: "text-indigo-600 dark:text-indigo-400", href: "https://docs.povixa.cloud" },
                    ];
                    const cfg = cfgs[i % cfgs.length];
                    return (
                      <a 
                        key={i}
                        href={cfg.href} 
                        target="_blank" 
                        rel="noreferrer"
                        className={`p-3.5 rounded-2xl bg-[var(--surface-subtle)]/40 ${cfg.hover} transition-all block group`}
                      >
                        <span className={`text-xs font-mono font-bold ${cfg.text} block group-hover:underline`}>{sub.url}</span>
                        <span className="text-xs text-[var(--muted)] mt-1 block leading-relaxed">{sub.desc}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* ============================================================ */}
        {/* 03 · CHỨNG CHỈ & BẢO CHỨNG QUỐC TẾ (CREDENTIAL BADGES) */}
        {/* ============================================================ */}
        <section id="credentials" className="py-20 border-b border-[var(--border)]/30">
          <div className="max-w-5xl mx-auto px-6">
            
            <div className="text-center mb-14">
              <span className="text-xs font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5">
                <Award size={14} />
                <span>{t.credentials.badge}</span>
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[var(--text)] mt-1.5">
                {t.credentials.title}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--muted)] mt-2 max-w-lg mx-auto leading-relaxed">
                {t.credentials.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* ──────────────────────────────────────────────────────── */}
              {/* CARD 1: AWS SOLUTIONS ARCHITECT (AMBER GOLD BADGE) */}
              {/* ──────────────────────────────────────────────────────── */}
              <div className="relative rounded-3xl bg-[var(--surface)] border border-amber-500/15 p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.3)] hover:shadow-xl hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 group">
                
                {/* Watermark Logo chìm tạo chiều sâu không gian */}
                <FaAws className="absolute -right-6 -bottom-6 w-44 h-44 text-amber-500/[0.05] dark:text-amber-400/[0.07] pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />

                {/* Top Badge & Verified Seal */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                      <FaAws size={28} />
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{t.credentials.verified}</span>
                    </div>
                  </div>

                  {/* Title & Level */}
                  <div>
                    <span className="text-[11px] font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider block">
                      {t.credentials.aws.level}
                    </span>
                    <h3 className="font-display font-extrabold text-xl text-[var(--text)] mt-1 group-hover:text-amber-500 transition-colors">
                      {t.credentials.aws.title}
                    </h3>
                  </div>

                  {/* Value to Employer (Giá trị thực chiến) */}
                  <div className="mt-4 space-y-2.5 text-xs text-[var(--muted)] leading-relaxed">
                    <div className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold shrink-0">✦</span>
                      <span><strong className="text-[var(--text)]">{t.credentials.aws.p1Title}</strong> {t.credentials.aws.p1Desc}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold shrink-0">✦</span>
                      <span><strong className="text-[var(--text)]">{t.credentials.aws.p2Title}</strong> {t.credentials.aws.p2Desc}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold shrink-0">✦</span>
                      <span><strong className="text-[var(--text)]">{t.credentials.aws.p3Title}</strong> {t.credentials.aws.p3Desc}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Credential Stamp */}
                <div className="mt-6 pt-4 border-t border-[var(--border)]/40 flex items-center justify-between text-xs font-mono relative z-10">
                  <div>
                    <span className="text-[10px] text-[var(--dim)] block uppercase">{t.credentials.aws.codeLabel}</span>
                    <strong className="text-amber-600 dark:text-amber-400 font-bold tracking-wider">AWS-SAA-84920</strong>
                  </div>
                  <span className="text-[11px] text-[var(--muted)] group-hover:text-amber-500 transition-colors font-medium flex items-center gap-1">
                    <span>{t.credentials.verifyAction}</span>
                    <ExternalLink size={12} />
                  </span>
                </div>

              </div>

              {/* ──────────────────────────────────────────────────────── */}
              {/* CARD 2: IELTS ACADEMIC 7.5 (AZURE / CAMBRIDGE SEAL) */}
              {/* ──────────────────────────────────────────────────────── */}
              <div className="relative rounded-3xl bg-[var(--surface)] border border-sky-500/15 p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.3)] hover:shadow-xl hover:border-sky-500/40 hover:-translate-y-1 transition-all duration-300 group">
                
                {/* Watermark Crest chìm */}
                <div className="absolute -right-4 -bottom-6 w-44 h-44 text-sky-500/[0.05] dark:text-sky-400/[0.07] pointer-events-none font-display font-black text-8xl flex items-center justify-center select-none transition-transform duration-500 group-hover:scale-110">
                  7.5
                </div>

                {/* Top Badge & Score Hero */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center font-display font-black text-sm">
                      IELTS
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-[11px] font-mono font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                      <span>{t.credentials.ielts.badge}</span>
                    </div>
                  </div>

                  {/* Title & Score Hero Banner */}
                  <div>
                    <span className="text-[11px] font-mono font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block">
                      {t.credentials.ielts.level}
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <h3 className="font-display font-extrabold text-xl text-[var(--text)] group-hover:text-sky-500 transition-colors">
                        {t.credentials.ielts.title}
                      </h3>
                      <span className="text-2xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400">
                        7.5
                      </span>
                    </div>
                  </div>

                  {/* 4 Skill Score Breakdown (Clean, breathable stats) */}
                  <div className="grid grid-cols-4 gap-1.5 my-3.5 py-2 border-y border-[var(--border)]/30 text-center text-xs font-mono">
                    <div>
                      <span className="text-[10px] text-[var(--dim)] block">{t.credentials.ielts.listening}</span>
                      <strong className="text-[var(--text)] font-bold text-sm">8.5</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-[var(--dim)] block">{t.credentials.ielts.reading}</span>
                      <strong className="text-[var(--text)] font-bold text-sm">8.0</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-[var(--dim)] block">{t.credentials.ielts.writing}</span>
                      <strong className="text-[var(--text)] font-bold text-sm">7.0</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-[var(--dim)] block">{t.credentials.ielts.speaking}</span>
                      <strong className="text-[var(--text)] font-bold text-sm">7.0</strong>
                    </div>
                  </div>

                  {/* Value to Employer */}
                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    {t.credentials.ielts.desc}
                  </p>
                </div>

                {/* Bottom Credential Stamp */}
                <div className="mt-6 pt-4 border-t border-[var(--border)]/40 flex items-center justify-between text-xs font-mono relative z-10">
                  <div>
                    <span className="text-[10px] text-[var(--dim)] block uppercase">{t.credentials.ielts.boardLabel}</span>
                    <strong className="text-sky-600 dark:text-sky-400 font-bold">{t.credentials.ielts.boardVal}</strong>
                  </div>
                  <span className="text-[11px] text-[var(--muted)] group-hover:text-sky-500 transition-colors font-medium flex items-center gap-1">
                    <span>{t.credentials.verifyAction}</span>
                    <ExternalLink size={12} />
                  </span>
                </div>

              </div>

              {/* ──────────────────────────────────────────────────────── */}
              {/* CARD 3: KUBERNETES CKA (ROYAL PURPLE / CNCF BADGE) */}
              {/* ──────────────────────────────────────────────────────── */}
              <div className="relative rounded-3xl bg-[var(--surface)] border border-purple-500/15 p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.3)] hover:shadow-xl hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300 group">
                
                {/* Watermark Logo chìm */}
                <SiKubernetes className="absolute -right-6 -bottom-6 w-44 h-44 text-purple-500/[0.05] dark:text-purple-400/[0.07] pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />

                {/* Top Badge & Verified Seal */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                      <SiKubernetes size={28} />
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{t.credentials.verified}</span>
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <div>
                    <span className="text-[11px] font-mono font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider block">
                      {t.credentials.cka.level}
                    </span>
                    <h3 className="font-display font-extrabold text-xl text-[var(--text)] mt-1 group-hover:text-purple-500 transition-colors">
                      {t.credentials.cka.title}
                    </h3>
                  </div>

                  {/* Value to Employer */}
                  <div className="mt-4 space-y-2.5 text-xs text-[var(--muted)] leading-relaxed">
                    <div className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold shrink-0">✦</span>
                      <span><strong className="text-[var(--text)]">{t.credentials.cka.p1Title}</strong> {t.credentials.cka.p1Desc}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold shrink-0">✦</span>
                      <span><strong className="text-[var(--text)]">{t.credentials.cka.p2Title}</strong> {t.credentials.cka.p2Desc}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold shrink-0">✦</span>
                      <span><strong className="text-[var(--text)]">{t.credentials.cka.p3Title}</strong> {t.credentials.cka.p3Desc}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Credential Stamp */}
                <div className="mt-6 pt-4 border-t border-[var(--border)]/40 flex items-center justify-between text-xs font-mono relative z-10">
                  <div>
                    <span className="text-[10px] text-[var(--dim)] block uppercase">{t.credentials.cka.codeLabel}</span>
                    <strong className="text-purple-600 dark:text-purple-400 font-bold tracking-wider">CKA-294018</strong>
                  </div>
                  <span className="text-[11px] text-[var(--muted)] group-hover:text-purple-500 transition-colors font-medium flex items-center gap-1">
                    <span>{t.credentials.verifyAction}</span>
                    <ExternalLink size={12} />
                  </span>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 04 · KỸ NĂNG & CÔNG NGHỆ CỐT LÕI (NỔI BẬT & PHÂN CẤP RÕ RÀNG) */}
        {/* ============================================================ */}
        <section id="skills" className="py-20 border-b border-[var(--border)]/30 bg-[var(--surface-subtle)]/20">
          <div className="max-w-5xl mx-auto px-6">
            
            <div className="text-center mb-12">
              <span className="text-xs font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest font-semibold">
                {t.skills.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[var(--text)] mt-1">
                {t.skills.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Stack 1: Backend */}
              <div className="relative rounded-3xl bg-[var(--surface)] border border-purple-500/15 p-6 sm:p-7 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.3)] hover:shadow-xl hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                      <Server size={22} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-[var(--text)] group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {t.skills.backend.title}
                      </h3>
                      <span className="text-[11px] font-mono text-[var(--dim)]">{t.skills.backend.sub}</span>
                    </div>
                  </div>

                  <div className="space-y-4 pt-1">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <SiGo className="text-[#00ADD8] shrink-0" size={16} />
                        <span>Golang (Go 1.23)</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] pl-6 leading-relaxed">
                        {t.skills.backend.goDesc}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <SiRust className="text-[#DEA584] shrink-0" size={16} />
                        <span>Rust Core</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] pl-6 leading-relaxed">
                        {t.skills.backend.rustDesc}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <SiPostgresql className="text-[#4169E1] shrink-0" size={16} />
                        <span>PostgreSQL &amp; Redis</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] pl-6 leading-relaxed">
                        {t.skills.backend.dbDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stack 2: DevOps */}
              <div className="relative rounded-3xl bg-[var(--surface)] border border-indigo-500/15 p-6 sm:p-7 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.3)] hover:shadow-xl hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                      <Shield size={22} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-[var(--text)] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {t.skills.devops.title}
                      </h3>
                      <span className="text-[11px] font-mono text-[var(--dim)]">{t.skills.devops.sub}</span>
                    </div>
                  </div>

                  <div className="space-y-4 pt-1">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <SiDocker className="text-[#2496ED] shrink-0" size={16} />
                        <span>Docker &amp; Compose</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] pl-6 leading-relaxed">
                        {t.skills.devops.dockerDesc}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <SiKubernetes className="text-[#326CE5] shrink-0" size={16} />
                        <span>Kubernetes (K8s)</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] pl-6 leading-relaxed">
                        {t.skills.devops.k8sDesc}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <SiLinux className="text-[var(--text)] shrink-0" size={16} />
                        <span>Linux &amp; CI/CD Pipelines</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] pl-6 leading-relaxed">
                        {t.skills.devops.linuxDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stack 3: Mobile & Web */}
              <div className="relative rounded-3xl bg-[var(--surface)] border border-fuchsia-500/15 p-6 sm:p-7 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.3)] hover:shadow-xl hover:border-fuchsia-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 flex items-center justify-center">
                      <Smartphone size={22} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-[var(--text)] group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">
                        {t.skills.mobile.title}
                      </h3>
                      <span className="text-[11px] font-mono text-[var(--dim)]">{t.skills.mobile.sub}</span>
                    </div>
                  </div>

                  <div className="space-y-4 pt-1">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <SiFlutter className="text-[#02569B] shrink-0" size={16} />
                        <span>Flutter &amp; Dart</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] pl-6 leading-relaxed">
                        {t.skills.mobile.flutterDesc}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <span className="font-bold text-blue-500 text-xs shrink-0">TS</span>
                        <span>TypeScript &amp; SvelteKit</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] pl-6 leading-relaxed">
                        {t.skills.mobile.tsDesc}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <span className="font-bold text-purple-500 text-xs shrink-0">Web</span>
                        <span>Deep Web Architecture</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] pl-6 leading-relaxed">
                        {t.skills.mobile.webDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 05 · DỰ ÁN NỔI BẬT KHÁC (HALLOW & HNSYNC) */}
        {/* ============================================================ */}
        <section id="projects" className="py-20 border-b border-[var(--border)]/30">
          <div className="max-w-4xl mx-auto px-6">
            
            <div className="mb-10">
              <span className="text-xs font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest font-semibold">
                {t.projects.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text)] mt-1">
                {t.projects.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Project 2: Hallow Super-App */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[var(--surface)] border border-purple-500/15 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.3)] hover:shadow-xl hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold">
                      {t.projects.hallow.tag}
                    </span>
                    <span className="text-xs text-[var(--dim)] font-mono">2024</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-[var(--text)] group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {t.projects.hallow.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                    {t.projects.hallow.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['Flutter', 'Dart', 'Drift SQLite', 'Clean Architecture'].map(item => (
                      <span key={item} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[var(--surface-subtle)]/70 text-[var(--muted)] font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-[var(--border)]/40 flex items-center justify-between">
                  <a 
                    href="https://github.com/hnamhocit/hallow" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text)] hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    <span>{t.projects.sourceAction}</span>
                    <ExternalLink size={13} />
                  </a>
                  <span className="text-xs font-mono text-[var(--dim)]">{t.projects.hallow.metric}</span>
                </div>
              </div>

              {/* Project 3: HNSync Engine */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[var(--surface)] border border-indigo-500/15 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.3)] hover:shadow-xl hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold">
                      {t.projects.hnsync.tag}
                    </span>
                    <span className="text-xs text-[var(--dim)] font-mono">2024</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-[var(--text)] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {t.projects.hnsync.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                    {t.projects.hnsync.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['Golang', 'WebSocket', 'PostgreSQL', 'Docker'].map(item => (
                      <span key={item} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[var(--surface-subtle)]/70 text-[var(--muted)] font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-[var(--border)]/40 flex items-center justify-between">
                  <a 
                    href="https://github.com/hnamhocit" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text)] hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <span>{t.projects.sourceAction}</span>
                    <ExternalLink size={13} />
                  </a>
                  <span className="text-xs font-mono text-[var(--dim)]">{t.projects.hnsync.metric}</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 06 · LIÊN HỆ CHÂN THÀNH (MAILTO TRỰC TIẾP) */}
        {/* ============================================================ */}
        <section id="contact" className="py-20">
          <div className="max-w-2xl mx-auto px-6 text-center flex flex-col items-center">
            
            <div className="w-12 h-12 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
              <Sparkles size={22} />
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text)] mb-3">
              {t.contact.title}
            </h2>

            <p className="text-xs sm:text-sm text-[var(--muted)] max-w-lg mb-8 leading-relaxed">
              {t.contact.desc}
            </p>

            {/* Direct Email Action Button */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center mb-8">
              <a
                href="mailto:hnamhocit@gmail.com"
                className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm hover:brightness-110 active:scale-95 transition-all shadow-md shadow-purple-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail size={16} />
                <span>{t.contact.emailBtn}</span>
              </a>

              <a
                href="https://github.com/hnamhocit"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] font-medium text-sm hover:border-purple-500 transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <FaGithub size={16} />
                <span>{t.contact.githubBtn}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 text-[var(--muted)] text-xs font-medium">
              <a 
                href="mailto:hnamhocit@gmail.com" 
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1.5"
              >
                <Mail size={14} />
                <span>{t.contact.directEmail}</span>
              </a>
              <a 
                href="https://github.com/hnamhocit" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-[var(--text)] transition-colors flex items-center gap-1.5"
              >
                <FaGithub size={14} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://facebook.com/hnamhocit" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1.5"
              >
                <FaFacebook size={14} />
                <span>Facebook</span>
              </a>
            </div>

          </div>
        </section>

      </main>

      {/* ============================================================ */}
      {/* FOOTER */}
      {/* ============================================================ */}
      <footer className="border-t border-[var(--border)]/30 bg-white dark:bg-[#10141E] py-8 text-center text-xs text-[var(--dim)] font-mono transition-colors">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Nguyễn Hoàng Nam (hnamhocit).</span>
          <span className="flex items-center gap-1 text-[var(--muted)]">
            {t.footer.quote}
          </span>
        </div>
      </footer>

      {/* ============================================================ */}
      {/* SCROLL TO TOP BUTTON */}
      {/* ============================================================ */}
      <button
        onClick={scrollToTop}
        aria-label={t.footer.scrollTop}
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-white dark:bg-[#10141E] border border-[var(--border)]/60 text-[var(--muted)] hover:text-purple-600 dark:hover:text-purple-400 shadow-lg shadow-black/5 hover:shadow-xl hover:border-purple-500/40 transition-all duration-300 cursor-pointer ${
          showScrollTop 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        title={t.footer.scrollTop}
      >
        <ArrowUp size={18} />
      </button>

    </div>
  );
}
