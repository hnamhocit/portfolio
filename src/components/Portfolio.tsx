import React, { useState, useEffect } from 'react';
import { 
  Sun, Moon, Mail, ArrowUpRight, ExternalLink, 
  Sparkles, ArrowRight, ArrowUp, Server, Smartphone, Shield, 
  Award, CheckCircle2, Globe, ChevronDown,
  Key, Sliders, Bell, Database, BarChart3, Terminal, Cpu, Layers, DollarSign, Users, Zap, ShieldCheck, Lock, Check,
  Activity, GitBranch, Box, Clock, Workflow, FileCode2, Play, RefreshCw, Send, CheckCircle, XCircle, Copy, Bot, MessageSquare, Heart
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaFacebook, FaAws, FaTelegramPlane } from 'react-icons/fa';
import { 
  SiFlutter, SiGo, SiRust, SiDocker, 
  SiKubernetes, SiLinux, SiPostgresql, SiRedis,
  SiSvelte, SiTailwindcss, SiTypescript, SiCloudflare, SiNextdotjs, SiAnthropic
} from 'react-icons/si';
import { useLanguage } from '../store/useLanguage';
import { translations } from '../i18n/translations';
import LanguageSelector from './LanguageSelector';
import {
  IsometricStorageArt,
  IsometricSecurityArt,
  IsometricOfflineArt,
  IsometricTelemetryArt,
  IsometricTypingArt,
  IsometricReaderArt,
  IsometricGitKanbanArt
} from './illustrations/ProjectIllustrations';

export default function Portfolio() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.vi;
  const [isDark, setIsDark] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Active tab in Flagship Interactive Studio: 'pkce' | 'rbac' | 'code'
  const [activeTab, setActiveTab] = useState<'pkce' | 'rbac' | 'code'>('pkce');

  // Interactive PKCE flow step (0 to 3)
  const [pkceStep, setPkceStep] = useState(0);

  // Interactive RBAC tester state
  const [selectedRole, setSelectedRole] = useState<'admin' | 'devops' | 'developer' | 'auditor'>('developer');
  const [selectedAction, setSelectedAction] = useState<string>('workers:deploy');

  // Code tab language
  const [codeLang, setCodeLang] = useState<'curl' | 'ts' | 'go'>('ts');
  const [copiedCode, setCopiedCode] = useState(false);

  // Dynamic age calculation based on birth year 2007
  const currentAge = new Date().getFullYear() - 2007;

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

  // Scroll listener for back-to-top button
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

  // RBAC Permission logic evaluator
  const rolesPermissions: Record<string, string[]> = {
    admin: ["*:*"],
    devops: ["workers:*", "storage:*", "telemetry:read"],
    developer: ["iam:read", "workers:deploy", "storage:write"],
    auditor: ["audit_logs:read", "iam:read"]
  };

  const checkPermission = (role: string, action: string): boolean => {
    const permissions = rolesPermissions[role] || [];
    if (permissions.includes("*:*")) return true;
    if (permissions.includes(action)) return true;
    const [resource] = action.split(":");
    return permissions.includes(`${resource}:*`);
  };

  const isAllowed = checkPermission(selectedRole, selectedAction);

  // Sample code snippets for Tab 3
  const codeSnippets = {
    ts: `// Cloudflare Worker Edge Middleware: Zero-DB RBAC Verification
import { verifyJwt } from "./crypto";

export async function authorizeRequest(req: Request, requiredScope: string) {
  const token = req.headers.get("Authorization")?.replace("Bearer ", "");
  if (!token) return new Response("Unauthorized", { status: 401 });

  // 1. Asymmetric Ed25519 verification via Web Crypto API (< 0.2ms)
  const payload = await verifyJwt(token, PUBLIC_ED25519_KEY);
  const userPermissions: string[] = payload.claims?.scopes || [];

  // 2. Direct in-memory claim matching (Zero Database Round-trip)
  const isAllowed = 
    userPermissions.includes("*:*") ||
    userPermissions.includes(requiredScope) ||
    userPermissions.includes(\`\${requiredScope.split(":")[0]}:*\`);

  if (!isAllowed) {
    return new Response(JSON.stringify({ error: "Forbidden: Insufficient Scope" }), {
      status: 403,
      headers: { "Content-Type": "application/json" }
    });
  }

  return null; // Authorization passed, proceed to next handler
}`,
    curl: `# 1. Initiate OAuth 2.0 PKCE Authorization (Public Client)
curl -X GET "https://iam.vntez.cloud/oauth/authorize?
  response_type=code&
  client_id=vntez_console_web&
  redirect_uri=https://vntez-console.vercel.app/auth/callback&
  code_challenge=E9Melhoa20wvFReMTJguCHaoeK1t8URWbuGJSstw-cM&
  code_challenge_method=S256&
  scope=openid%20profile%20workers:deploy"

# 2. Exchange Authorization Code + Verifier for Ed25519 JWT
curl -X POST "https://iam.vntez.cloud/oauth/token" \\
  -H "Content-Type: application/json" \\
  -d '{
    "grant_type": "authorization_code",
    "client_id": "vntez_console_web",
    "code": "auth_code_78291a8f",
    "code_verifier": "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk"
  }'`,
    go: `// Go Microservice: Verify Ed25519 JWT at Edge
package auth

import (
  "crypto/ed25519"
  "github.com/golang-jwt/jwt/v5"
)

func VerifyEdgeToken(tokenStr string, pubKey ed25519.PublicKey) (*jwt.Token, error) {
  return jwt.Parse(tokenStr, func(t *jwt.Token) (interface{}, error) {
    if _, ok := t.Method.(*jwt.SigningMethodEd25519); !ok {
      return nil, jwt.ErrSignatureInvalid
    }
    return pubKey, nil
  })
}`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[codeLang]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // PKCE steps data for visual simulation
  const pkceSteps = [
    {
      num: 1,
      name: "Tạo Code Challenge (S256)",
      detail: "Client tạo ngẫu nhiên code_verifier bí mật, sau đó băm SHA-256 để tạo code_challenge = Base64URL(SHA256(verifier)). Client_secret không bao giờ được nhúng vào client.",
      sender: "Public Client (Web/Mobile)",
      receiver: "Trình duyệt nội bộ",
      payload: "code_challenge = S256(verifier)"
    },
    {
      num: 2,
      name: "Gửi Yêu Cầu Authorize",
      detail: "Client gửi GET /oauth/authorize kèm code_challenge và redirect_uri. IAM Worker tại Cloudflare Edge ghi nhận challenge vào bộ nhớ tạm thời và cấp authorization_code ngắn hạn.",
      sender: "Public Client",
      receiver: "iam-worker (Edge Node)",
      payload: "GET /oauth/authorize?code_challenge=... -> Trả về code"
    },
    {
      num: 3,
      name: "Tráo Token kèm Code Verifier",
      detail: "Client gửi POST /oauth/token kèm authorization_code và code_verifier nguyên bản qua kết nối HTTPS an toàn.",
      sender: "Public Client",
      receiver: "iam-worker (Edge Node)",
      payload: "POST /oauth/token { code, code_verifier }"
    },
    {
      num: 4,
      name: "Băm So Khớp & Ký Ed25519 JWT",
      detail: "iam-worker băm SHA-256(code_verifier) và so khớp với code_challenge ban đầu. Khi trùng khớp tuyệt đối, Worker ký Access Token (JWT Ed25519) kèm danh sách quyền RBAC và trả về Client.",
      sender: "iam-worker (Edge Node)",
      receiver: "Resource Server / Client",
      payload: "Cấp Ed25519 JWT (sub-35ms p95 latency)"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] font-sans antialiased selection:bg-purple-500/25 selection:text-purple-600 dark:selection:text-purple-300 transition-colors duration-300">
      
      {/* ============================================================ */}
      {/* HEADER: Rộng rãi, thoáng đạt, tương phản chuẩn chỉnh */}
      {/* ============================================================ */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-white/95 dark:bg-[#10141E]/95 backdrop-blur-lg transition-colors">
        <div className="w-full max-w-[96rem] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 h-16 flex items-center justify-between">
          
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

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-xs sm:text-sm font-medium">
            <a href="#" className="text-purple-700 dark:text-purple-400 font-semibold hover:opacity-80 transition-opacity">
              {t.nav.home}
            </a>
            <a href="#flagship" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors">
              VNTEZ Edge
            </a>
            <a href="#ecosystem" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors">
              {t.nav.projects}
            </a>
            <a href="#credentials" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors">
              {t.nav.credentials}
            </a>
            <a href="#skills" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors">
              {t.nav.skills}
            </a>
            <a href="/blog" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors">
              {t.nav.blog}
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5">
            <LanguageSelector />

            <a 
              href="https://github.com/hnamhocit" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-500/40 transition-colors shadow-xs"
              title="GitHub Profile"
            >
              <FaGithub size={15} />
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--text)] transition-colors cursor-pointer shadow-xs"
              aria-label={t.nav.themeToggle}
              title={t.nav.themeToggle}
            >
              {isDark ? <Sun size={15} className="text-purple-300" /> : <Moon size={15} className="text-stone-700" />}
            </button>
          </div>

        </div>
      </header>

      <main className="flex-grow pt-16">
        
        {/* ============================================================ */}
        {/* 01 · EXPANSIVE HERO SECTION (FULL SCREEN & WIDE LAYOUT) */}
        {/* ============================================================ */}
        <section id="about" className="min-h-[92vh] flex flex-col justify-center relative overflow-hidden border-b border-[var(--border)] py-16">
          
          {/* Subtle Organic Aurora Background Glowing Blobs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
            <div className="aurora-blob-1 absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] rounded-full bg-purple-500/12 dark:bg-purple-600/15 blur-[140px] opacity-80" />
            <div className="aurora-blob-2 absolute top-1/2 right-1/4 w-[700px] h-[500px] rounded-full bg-indigo-500/12 dark:bg-indigo-600/15 blur-[150px] opacity-70" />
            <div className="aurora-blob-3 absolute bottom-10 left-1/2 w-[600px] h-[450px] rounded-full bg-amber-500/10 dark:bg-fuchsia-600/10 blur-[130px] opacity-60" />
            <div className="absolute inset-0 bg-grid-tech opacity-20 dark:opacity-15 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_75%,transparent_100%)]" />
          </div>

          <div className="w-full max-w-[96rem] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 my-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Direct Results & Credentials */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Status Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/25 bg-purple-500/10 text-purple-700 dark:text-purple-400 text-xs font-mono font-medium shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{t.hero.badge}</span>
                </div>

                {/* Main Heading */}
                <div className="space-y-2">
                  <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-[var(--text)] leading-[1.08]">
                    {t.hero.greeting}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-600 to-indigo-600 dark:from-purple-400 dark:via-fuchsia-400 dark:to-indigo-300">
                      {t.hero.name}
                    </span>.
                  </h1>
                  <p className="text-xs sm:text-sm font-mono font-semibold text-purple-700 dark:text-purple-400">
                    {t.hero.role}
                  </p>
                </div>

                {/* Bio: Direct, Honest, Result-driven */}
                <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed font-normal max-w-2xl">
                  {t.hero.bio(currentAge)}
                </p>

                {/* Proof Pills: International Credentials right upfront */}
                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  {t.hero.proofBadges.map((badge, idx) => (
                    <a
                      key={idx}
                      href="#credentials"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-purple-400/50 hover:bg-purple-500/5 transition-all text-xs font-mono shadow-2xs group cursor-pointer"
                    >
                      <CheckCircle2 size={13} className="text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
                      <span className="font-bold text-[var(--text)]">{badge.label}</span>
                      <span className="text-[var(--dim)] text-[11px]">#{badge.code}</span>
                    </a>
                  ))}
                </div>

                {/* Call-to-Action Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <a 
                    href="#flagship" 
                    className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 text-white font-semibold text-sm hover:brightness-110 active:scale-98 transition-all flex items-center gap-2 shadow-md shadow-purple-500/25 cursor-pointer"
                  >
                    <span>{t.hero.ctaFlagship}</span>
                    <ArrowRight size={15} />
                  </a>

                  <a 
                    href="https://github.com/hnamhocit" 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-5 py-3.5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] text-[var(--text)] font-semibold text-sm hover:border-purple-500/40 transition-all flex items-center gap-2 shadow-xs cursor-pointer"
                  >
                    <FaGithub size={15} />
                    <span>GitHub @hnamhocit</span>
                    <ArrowUpRight size={13} className="text-[var(--dim)]" />
                  </a>

                  <a 
                    href="mailto:hnamhocit@gmail.com" 
                    className="px-5 py-3.5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] text-[var(--text)] font-semibold text-sm hover:border-purple-500/40 transition-all flex items-center gap-2 shadow-xs cursor-pointer"
                  >
                    <Mail size={15} className="text-purple-600 dark:text-purple-400" />
                    <span>{t.hero.ctaEmail}</span>
                  </a>

                  <a 
                    href="https://t.me/hnamhocit" 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3.5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:text-sky-500 hover:border-sky-500/40 transition-colors shadow-xs cursor-pointer"
                    title="Telegram @hnamhocit"
                  >
                    <FaTelegramPlane size={16} />
                  </a>
                </div>

              </div>

              {/* Right Column: Live Production System Artifact Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-7 shadow-[var(--card-shadow)] overflow-hidden space-y-5">
                  
                  {/* Card Header: Live Edge Indicator */}
                  <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                      <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400">
                        {t.hero.livePreview.status}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-purple-500/10 text-purple-700 dark:text-purple-400 font-semibold">
                      Cloudflare Edge
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <h3 className="font-display font-extrabold text-lg text-[var(--text)] tracking-tight">
                      {t.hero.livePreview.title}
                    </h3>
                    <p className="text-xs text-[var(--muted)] leading-relaxed">
                      {t.hero.livePreview.subtitle}
                    </p>
                  </div>

                  {/* Production Live Endpoints */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--dim)] block font-semibold">
                      Phân hệ đang chạy trực tiếp (Live Endpoints)
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {t.hero.livePreview.subdomains.map((sub, idx) => (
                        <a
                          key={idx}
                          href={sub.url}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] hover:border-purple-400/60 hover:bg-purple-500/5 transition-all block group"
                        >
                          <div className="font-mono text-xs font-bold text-purple-700 dark:text-purple-400 group-hover:underline flex items-center justify-between">
                            <span>{sub.label}</span>
                          </div>
                          <div className="text-[10px] text-[var(--muted)] truncate mt-0.5">
                            {sub.desc}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Verified Technical Specifications */}
                  <div className="space-y-1.5 pt-2 border-t border-[var(--border)]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--dim)] block font-semibold">
                      Thông số kỹ thuật kiểm chứng (Specs)
                    </span>
                    <div className="space-y-1.5">
                      {t.hero.livePreview.specs.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs font-mono p-2 rounded-lg bg-[var(--surface-subtle)]/70">
                          <span className="text-[var(--muted)] text-[11px]">{item.label}</span>
                          <span className="font-bold text-[var(--text)] text-[11px] text-right">{item.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-2 flex items-center gap-2.5">
                    <a
                      href="https://vntez.cloud"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2.5 px-3 rounded-xl bg-purple-700 dark:bg-purple-600 text-white font-medium text-xs text-center hover:brightness-110 transition-all flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <span>Mở VNTEZ Portal</span>
                      <ExternalLink size={12} />
                    </a>
                    <a
                      href="https://vntez-docs.vercel.app/docs/vntez-iam"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2.5 px-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-subtle)] text-[var(--text)] font-medium text-xs text-center hover:border-purple-400 transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                    >
                      <span>OpenAPI Specs</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>

                </div>
              </div>

            </div>

          </div>

          {/* Cuộn xuống hint */}
          <div className="mt-auto pt-8 flex flex-col items-center gap-1 text-[var(--dim)] text-xs font-mono">
            <span>{t.hero.scrollHint}</span>
            <ChevronDown size={15} className="animate-bounce text-purple-600 dark:text-purple-400" />
          </div>

        </section>

        {/* ============================================================ */}
        {/* 02 · FLAGSHIP PROJECT: VNTEZ EDGE CLOUD PLATFORM */}
        {/* ============================================================ */}
        <section id="flagship" className="py-24 border-b border-[var(--border)] bg-[var(--surface-subtle)]/40">
          <div className="w-full max-w-[96rem] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
            
            {/* Top Bar Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
              <div className="space-y-2">
                <span className="text-xs font-mono text-purple-700 dark:text-purple-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <Sparkles size={15} />
                  <span>{t.flagship.badge}</span>
                </span>
                <h2 className="text-3xl sm:text-5xl font-display font-black text-[var(--text)] tracking-tight">
                  {t.flagship.title}
                </h2>
                <p className="text-sm sm:text-base text-[var(--muted)] max-w-2xl font-normal">
                  {t.flagship.tagline}
                </p>
              </div>

              {/* Direct Live Action Subdomain Links */}
              <div className="flex flex-wrap items-center gap-3">
                <a 
                  href="https://vntez.cloud" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-700 to-indigo-600 text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <span>vntez.cloud</span>
                  <ExternalLink size={13} />
                </a>
                <a 
                  href="https://vntez-docs.vercel.app" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-purple-400 transition-colors shadow-xs"
                >
                  <span>vntez-docs</span>
                  <ExternalLink size={13} />
                </a>
                <a 
                  href="https://github.com/hnamhocit" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-purple-400 transition-colors shadow-xs"
                >
                  <FaGithub size={14} />
                  <span>Mã nguồn</span>
                </a>
              </div>
            </div>

            {/* Showcase Main Container: 2-Column Wide Layout */}
            <div className="rounded-3xl bg-[var(--surface)] p-6 sm:p-10 lg:p-12 shadow-[var(--card-shadow)] border border-[var(--border)] space-y-14">
              
              {/* Row 1: Left Narrative & Right Interactive Studio */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                
                {/* Left Column (5 Cols): Deep Dive Narrative & Specs */}
                <div className="lg:col-span-5 space-y-6">
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 text-purple-700 dark:text-purple-400 text-xs font-mono font-semibold">
                    <Activity size={13} />
                    <span>{t.flagship.roleTag}</span>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-[var(--text)] leading-snug">
                    Zero-Trust IAM &amp; Micro-workers tại Cloudflare Edge
                  </h3>

                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {t.flagship.desc}
                  </p>

                  {/* Architecture Ownership Grid */}
                  <div className="grid grid-cols-2 gap-y-4 gap-x-6 pt-4 border-t border-[var(--border)] text-xs font-mono">
                    <div>
                      <span className="text-[10px] text-[var(--dim)] block uppercase tracking-wider">{t.flagship.scopeLabel}</span>
                      <strong className="text-[var(--text)] text-sm block mt-0.5">{t.flagship.scopeVal}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-[var(--dim)] block uppercase tracking-wider">{t.flagship.timeLabel}</span>
                      <strong className="text-[var(--text)] text-sm block mt-0.5">{t.flagship.timeVal}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-[var(--dim)] block uppercase tracking-wider">{t.flagship.modelLabel}</span>
                      <strong className="text-[var(--text)] text-sm block mt-0.5">{t.flagship.modelVal}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-[var(--dim)] block uppercase tracking-wider">{t.flagship.statusLabel}</span>
                      <strong className="text-emerald-700 dark:text-emerald-400 text-sm flex items-center gap-1.5 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        {t.flagship.statusVal}
                      </strong>
                    </div>
                  </div>

                  {/* Live Subdomain Badges */}
                  <div className="pt-4 border-t border-[var(--border)] space-y-2.5">
                    <span className="text-[11px] font-mono text-[var(--dim)] block uppercase tracking-wider">
                      Phân hệ vận hành trực tiếp
                    </span>
                    <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
                      <a 
                        href="https://vntez.cloud" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-3 rounded-2xl bg-[var(--surface-subtle)] hover:bg-purple-500/10 hover:text-purple-700 transition-colors block border border-[var(--border)]"
                      >
                        <span className="font-bold block text-sm">vntez.cloud ↗</span>
                        <span className="text-[11px] text-[var(--muted)]">Platform Portal</span>
                      </a>
                      <a 
                        href="https://iam.vntez.cloud" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-3 rounded-2xl bg-[var(--surface-subtle)] hover:bg-purple-500/10 hover:text-purple-700 transition-colors block border border-[var(--border)]"
                      >
                        <span className="font-bold block text-sm">iam.vntez.cloud ↗</span>
                        <span className="text-[11px] text-[var(--muted)]">OAuth / SSO</span>
                      </a>
                    </div>
                  </div>

                </div>

                {/* Right Column (7 Cols): Interactive Visual Control Panel */}
                <div className="lg:col-span-7">
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-subtle)]/50 p-5 sm:p-6 shadow-xs overflow-hidden">
                    
                    {/* Tab Switcher */}
                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-[var(--border)]">
                      <div className="flex items-center gap-1.5 bg-[var(--surface)] p-1 rounded-xl border border-[var(--border)] text-xs font-mono">
                        <button
                          onClick={() => setActiveTab('pkce')}
                          className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                            activeTab === 'pkce' 
                              ? 'bg-purple-700 text-white shadow-xs' 
                              : 'text-[var(--muted)] hover:text-[var(--text)]'
                          }`}
                        >
                          {t.flagship.tabLabels.pkce}
                        </button>
                        <button
                          onClick={() => setActiveTab('rbac')}
                          className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                            activeTab === 'rbac' 
                              ? 'bg-purple-700 text-white shadow-xs' 
                              : 'text-[var(--muted)] hover:text-[var(--text)]'
                          }`}
                        >
                          {t.flagship.tabLabels.rbac}
                        </button>
                        <button
                          onClick={() => setActiveTab('code')}
                          className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                            activeTab === 'code' 
                              ? 'bg-purple-700 text-white shadow-xs' 
                              : 'text-[var(--muted)] hover:text-[var(--text)]'
                          }`}
                        >
                          {t.flagship.tabLabels.code}
                        </button>
                      </div>

                      <span className="hidden sm:inline-block font-mono text-[11px] text-[var(--dim)]">
                        Interactive Studio
                      </span>
                    </div>

                    {/* TAB CONTENT 1: INTERACTIVE OAUTH 2.0 PKCE SEQUENCE VISUALIZER */}
                    {activeTab === 'pkce' && (
                      <div className="space-y-6">
                        
                        {/* 3 Architecture Actors / Nodes */}
                        <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center text-xs font-mono">
                          
                          <div className={`p-3 rounded-2xl border transition-all ${
                            pkceStep === 0 || pkceStep === 1
                              ? 'border-purple-500 bg-purple-500/10 text-purple-700 dark:text-purple-400 font-bold'
                              : 'border-[var(--border)] bg-[var(--surface)] text-[var(--muted)]'
                          }`}>
                            <Smartphone size={16} className="mx-auto mb-1 text-purple-600" />
                            <div className="font-bold text-[11px] sm:text-xs">Public Client</div>
                            <div className="text-[9px] text-[var(--dim)]">Next.js / Flutter</div>
                          </div>

                          <div className={`p-3 rounded-2xl border transition-all ${
                            pkceStep === 1 || pkceStep === 2 || pkceStep === 3
                              ? 'border-sky-500 bg-sky-500/10 text-sky-700 dark:text-sky-400 font-bold'
                              : 'border-[var(--border)] bg-[var(--surface)] text-[var(--muted)]'
                          }`}>
                            <SiCloudflare size={16} className="mx-auto mb-1 text-sky-600" />
                            <div className="font-bold text-[11px] sm:text-xs">iam-worker</div>
                            <div className="text-[9px] text-[var(--dim)]">Cloudflare Edge</div>
                          </div>

                          <div className={`p-3 rounded-2xl border transition-all ${
                            pkceStep === 3
                              ? 'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-bold'
                              : 'border-[var(--border)] bg-[var(--surface)] text-[var(--muted)]'
                          }`}>
                            <Server size={16} className="mx-auto mb-1 text-emerald-600" />
                            <div className="font-bold text-[11px] sm:text-xs">Resource API</div>
                            <div className="text-[9px] text-[var(--dim)]">Console / Backend</div>
                          </div>

                        </div>

                        {/* Current Step Interactive Description Card */}
                        <div className="p-4 sm:p-5 rounded-2xl bg-[var(--surface)] border border-purple-500/25 shadow-xs space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs font-bold text-purple-700 dark:text-purple-400 uppercase tracking-wider flex items-center gap-2">
                              <span className="w-5 h-5 rounded-full bg-purple-700 text-white text-[11px] flex items-center justify-center font-bold">
                                {pkceSteps[pkceStep].num}
                              </span>
                              <span>{pkceSteps[pkceStep].name}</span>
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-subtle)] text-[var(--dim)]">
                              Bước {pkceStep + 1} / 4
                            </span>
                          </div>

                          <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                            {pkceSteps[pkceStep].detail}
                          </p>

                          <div className="pt-2 border-t border-[var(--border)] font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[var(--dim)]">
                            <div><strong className="text-[var(--text)]">Từ:</strong> {pkceSteps[pkceStep].sender}</div>
                            <div><strong className="text-[var(--text)]">Đến:</strong> {pkceSteps[pkceStep].receiver}</div>
                          </div>

                          <div className="p-2.5 rounded-xl bg-[var(--surface-subtle)] font-mono text-[11px] text-purple-700 dark:text-purple-400 break-all border border-[var(--border)]">
                            📦 Payload: {pkceSteps[pkceStep].payload}
                          </div>
                        </div>

                        {/* Step Navigation Controls */}
                        <div className="flex items-center justify-between pt-1">
                          <button
                            onClick={() => setPkceStep((prev) => (prev > 0 ? prev - 1 : 3))}
                            className="px-3.5 py-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-xs font-mono font-medium hover:border-purple-400 transition-colors cursor-pointer"
                          >
                            ← Quay lại
                          </button>

                          <div className="flex items-center gap-1.5">
                            {[0, 1, 2, 3].map((stepIdx) => (
                              <button
                                key={stepIdx}
                                onClick={() => setPkceStep(stepIdx)}
                                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                                  pkceStep === stepIdx ? 'bg-purple-700 w-6' : 'bg-[var(--border)] hover:bg-purple-300'
                                }`}
                                aria-label={`Step ${stepIdx + 1}`}
                              />
                            ))}
                          </div>

                          <button
                            onClick={() => setPkceStep((prev) => (prev < 3 ? prev + 1 : 0))}
                            className="px-4 py-2 rounded-xl bg-purple-700 text-white text-xs font-mono font-bold hover:brightness-110 transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
                          >
                            <span>{pkceStep === 3 ? "Lặp lại từ đầu" : "Bước tiếp theo"}</span>
                            <ArrowRight size={13} />
                          </button>
                        </div>

                      </div>
                    )}

                    {/* TAB CONTENT 2: LIVE INTERACTIVE RBAC CLAIMS TESTER */}
                    {activeTab === 'rbac' && (
                      <div className="space-y-6">
                        
                        <div className="space-y-2">
                          <label className="text-xs font-mono font-bold text-[var(--muted)] uppercase tracking-wider block">
                            1. Chọn Vai trò người dùng (User Role):
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                            {[
                              { id: 'admin', label: 'Super Admin', claims: '*:*' },
                              { id: 'devops', label: 'DevOps Lead', claims: 'workers:*' },
                              { id: 'developer', label: 'Developer', claims: 'workers:deploy' },
                              { id: 'auditor', label: 'Auditor', claims: 'audit:read' }
                            ].map((r) => (
                              <button
                                key={r.id}
                                onClick={() => setSelectedRole(r.id as any)}
                                className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer ${
                                  selectedRole === r.id
                                    ? 'border-purple-500 bg-purple-500/10 text-purple-700 dark:text-purple-400 font-bold shadow-xs'
                                    : 'border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:border-purple-300'
                                }`}
                              >
                                <div className="font-bold text-xs">{r.label}</div>
                                <div className="text-[10px] opacity-70 font-mono mt-0.5">{r.claims}</div>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-mono font-bold text-[var(--muted)] uppercase tracking-wider block">
                            2. Chọn Hành động yêu cầu (Target Action):
                          </label>
                          <div className="flex flex-wrap gap-2 text-xs font-mono">
                            {[
                              'iam:read',
                              'workers:deploy',
                              'storage:write',
                              'database:manage',
                              'audit_logs:read'
                            ].map((act) => (
                              <button
                                key={act}
                                onClick={() => setSelectedAction(act)}
                                className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                                  selectedAction === act
                                    ? 'border-indigo-500 bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 font-bold'
                                    : 'border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:border-indigo-300'
                                }`}
                              >
                                {act}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className={`p-5 rounded-2xl border transition-all ${
                          isAllowed 
                            ? 'bg-emerald-500/10 border-emerald-500/30' 
                            : 'bg-rose-500/10 border-rose-500/30'
                        }`}>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              {isAllowed ? (
                                <CheckCircle size={18} className="text-emerald-600" />
                              ) : (
                                <XCircle size={18} className="text-rose-600" />
                              )}
                              <span className={`font-mono text-sm font-bold uppercase tracking-wide ${
                                isAllowed ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'
                              }`}>
                                {isAllowed ? "HTTP 200 · ALLOWED (ĐƯỢC CẤP QUYỀN)" : "HTTP 403 · FORBIDDEN (TỪ CHỐI TRUY CẬP)"}
                              </span>
                            </div>
                            <span className="font-mono text-[11px] text-[var(--dim)]">
                              Edge Evaluated in &lt; 0.2ms
                            </span>
                          </div>

                          <p className="text-xs text-[var(--muted)] leading-relaxed font-mono">
                            {isAllowed 
                              ? `✓ Vai trò [${selectedRole}] sở hữu quyền phù hợp với [${selectedAction}]. Middleware xử lý ngay tại V8 Isolate mà không cần query Database.`
                              : `✗ Vai trò [${selectedRole}] KHÔNG chứa quyền [${selectedAction}]. Request bị ngắt ngay tại Cloudflare Edge node.`
                            }
                          </p>

                          <div className="mt-3 pt-3 border-t border-[var(--border)] font-mono text-[11px] text-[var(--dim)] flex items-center justify-between">
                            <span>Claims Token: [{rolesPermissions[selectedRole].join(", ")}]</span>
                            <span className="text-purple-700 dark:text-purple-400 font-bold">Zero DB Round-trip</span>
                          </div>
                        </div>

                      </div>
                    )}

                    {/* TAB CONTENT 3: INTEGRATION CODE SNIPPETS */}
                    {activeTab === 'code' && (
                      <div className="space-y-4">
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs font-mono">
                            {(['ts', 'curl', 'go'] as const).map((l) => (
                              <button
                                key={l}
                                onClick={() => setCodeLang(l)}
                                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                                  codeLang === l 
                                    ? 'bg-purple-700 text-white font-bold' 
                                    : 'bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--text)] border border-[var(--border)]'
                                }`}
                              >
                                {l.toUpperCase()}
                              </button>
                            ))}
                          </div>

                          <button
                            onClick={handleCopyCode}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:text-purple-600 text-xs font-mono transition-colors cursor-pointer"
                          >
                            {copiedCode ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                            <span>{copiedCode ? "Đã chép!" : "Sao chép"}</span>
                          </button>
                        </div>

                        {/* High-craft code container */}
                        <div className="rounded-2xl bg-[#18181B] text-[#E4E4E7] dark:bg-[#0B0F19] dark:text-slate-200 border border-stone-800 dark:border-slate-800 overflow-hidden shadow-sm">
                          <div className="px-4 py-2 border-b border-stone-800 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-stone-400">
                            <span className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-500" />
                              <span>edge-middleware.{codeLang}</span>
                            </span>
                            <span>UTF-8</span>
                          </div>
                          <pre className="p-4 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto max-h-[340px]">
                            <code>{codeSnippets[codeLang]}</code>
                          </pre>
                        </div>

                        <div className="text-[11px] font-mono text-[var(--dim)] flex items-center justify-between">
                          <span>Chuẩn OpenAPI 3.1 &amp; Web Crypto API</span>
                          <a href="https://vntez-docs.vercel.app" target="_blank" rel="noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">
                            Xem tài liệu đầy đủ ↗
                          </a>
                        </div>

                      </div>
                    )}

                  </div>
                </div>

              </div>

              {/* Row 2: Production Metrics Benchmarks */}
              <div className="pt-10 border-t border-[var(--border)]">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Activity size={18} className="text-purple-700 dark:text-purple-400" />
                    <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-[var(--text)]">
                      {t.flagship.metricsTitle}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-[var(--dim)]">{t.flagship.metricsSub}</span>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-2">
                  <div className="space-y-1">
                    <span className="font-display font-black text-3xl sm:text-4xl text-purple-700 dark:text-purple-400 block tracking-tight">
                      {t.flagship.metric1Val}
                    </span>
                    <span className="text-xs font-bold text-[var(--text)] block">{t.flagship.metric1Label}</span>
                    <span className="text-[11px] text-[var(--muted)] block leading-snug">{t.flagship.metric1Desc}</span>
                  </div>

                  <div className="space-y-1">
                    <span className="font-display font-black text-3xl sm:text-4xl text-sky-700 dark:text-sky-400 block tracking-tight">
                      {t.flagship.metric2Val}
                    </span>
                    <span className="text-xs font-bold text-[var(--text)] block">{t.flagship.metric2Label}</span>
                    <span className="text-[11px] text-[var(--muted)] block leading-snug">{t.flagship.metric2Desc}</span>
                  </div>

                  <div className="space-y-1">
                    <span className="font-display font-black text-3xl sm:text-4xl text-emerald-700 dark:text-emerald-400 block tracking-tight">
                      {t.flagship.metric3Val}
                    </span>
                    <span className="text-xs font-bold text-[var(--text)] block">{t.flagship.metric3Label}</span>
                    <span className="text-[11px] text-[var(--muted)] block leading-snug">{t.flagship.metric3Desc}</span>
                  </div>

                  <div className="space-y-1">
                    <span className="font-display font-black text-3xl sm:text-4xl text-amber-700 dark:text-amber-400 block tracking-tight">
                      {t.flagship.metric4Val}
                    </span>
                    <span className="text-xs font-bold text-[var(--text)] block">{t.flagship.metric4Label}</span>
                    <span className="text-[11px] text-[var(--muted)] block leading-snug">{t.flagship.metric4Desc}</span>
                  </div>
                </div>
              </div>

              {/* Row 3: Architectural Decisions (4 Columns) */}
              <div className="pt-10 border-t border-[var(--border)]">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Workflow size={18} className="text-purple-700 dark:text-purple-400" />
                    <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-[var(--text)]">
                      {t.flagship.challengesTitle}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-[var(--dim)]">{t.flagship.challengesSub}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7">
                  {t.flagship.challenges.map((c, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <Key size={15} className="text-purple-600 shrink-0" />
                        <h5 className="font-display font-bold text-sm text-[var(--text)]">
                          {c.title}
                        </h5>
                      </div>
                      <div className="text-xs text-[var(--muted)] leading-relaxed pl-6 space-y-1">
                        <p>{c.problem}</p>
                        <p>{c.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 4: Production Disciplines (4 Columns) */}
              <div className="pt-10 border-t border-[var(--border)]">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <GitBranch size={18} className="text-purple-700 dark:text-purple-400" />
                    <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-[var(--text)]">
                      {t.flagship.disciplineTitle}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-[var(--dim)]">{t.flagship.disciplineSub}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {t.flagship.disciplines.map((d, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center gap-1.5 text-purple-700 dark:text-purple-400 text-xs font-mono font-bold">
                        <Box size={14} />
                        <span>{d.title}</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] leading-relaxed">
                        {d.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 03 · EXPANSIVE ECOSYSTEM BENTO GRID */}
        {/* ============================================================ */}
        <section id="ecosystem" className="py-24 border-b border-[var(--border)]">
          <div className="w-full max-w-[96rem] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
            
            {/* Header */}
            <div className="mb-14">
              <span className="text-xs font-mono text-purple-700 dark:text-purple-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <Layers size={14} />
                <span>{t.ecosystem.badge}</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-[var(--text)] mt-1.5">
                {t.ecosystem.title}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--muted)] mt-1 max-w-2xl font-normal">
                {t.ecosystem.subtitle}
              </p>
            </div>

            {/* Expansive Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              
              {t.ecosystem.projects.map((proj) => {
                const renderIllustration = (id: string) => {
                  switch (id) {
                    case 'bman':
                      return <IsometricOfflineArt className="w-full h-36 mx-auto" />;
                    case 'storage':
                      return <IsometricStorageArt className="w-full h-36 mx-auto" />;
                    case 'solotype':
                      return <IsometricTypingArt className="w-full h-36 mx-auto" />;
                    case 'reader':
                      return <IsometricReaderArt className="w-full h-36 mx-auto" />;
                    case 'gitvn':
                      return <IsometricGitKanbanArt className="w-full h-36 mx-auto" />;
                    case 'telebot':
                      return <IsometricTelemetryArt className="w-full h-36 mx-auto" />;
                    default:
                      return <IsometricSecurityArt className="w-full h-36 mx-auto" />;
                  }
                };

                return (
                  <div 
                    key={proj.id}
                    className="relative rounded-3xl bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300 group"
                  >
                    
                    <div className="space-y-4">
                      
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-400 font-bold uppercase tracking-wider">
                          {proj.tag}
                        </span>
                        <div className="text-right">
                          <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 block">
                            {proj.metric}
                          </span>
                        </div>
                      </div>

                      {/* Isometric Illustration Artwork */}
                      <div className="py-2 opacity-95 group-hover:opacity-100 group-hover:scale-102 transition-all duration-300">
                        {renderIllustration(proj.id)}
                      </div>

                      {/* Title & Description */}
                      <div>
                        <h3 className="font-display font-extrabold text-lg sm:text-xl text-[var(--text)] group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                          {proj.title}
                        </h3>
                        <p className="text-xs text-[var(--muted)] mt-2 leading-relaxed">
                          {proj.desc}
                        </p>
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {proj.tech.map((item) => (
                          <span 
                            key={item} 
                            className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[var(--surface-subtle)] text-[var(--muted)] font-medium border border-[var(--border)]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                    </div>

                    {/* Bottom Action Links */}
                    <div className="pt-5 mt-5 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono">
                      <a 
                        href={proj.githubUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-[var(--text)] hover:text-purple-700 dark:hover:text-purple-400 font-medium transition-colors"
                      >
                        <FaGithub size={13} />
                        <span>{t.ecosystem.sourceAction}</span>
                      </a>

                      {proj.liveUrl ? (
                        <a 
                          href={proj.liveUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-purple-700 dark:text-purple-400 font-bold hover:underline"
                        >
                          <span>{t.ecosystem.liveAction}</span>
                          <ExternalLink size={12} />
                        </a>
                      ) : (
                        <span className="text-[11px] text-[var(--dim)]">{proj.metricSub}</span>
                      )}
                    </div>

                  </div>
                );
              })}

            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 04 · CHỨNG CHỈ NĂNG LỰC QUỐC TẾ */}
        {/* ============================================================ */}
        <section id="credentials" className="py-24 border-b border-[var(--border)]">
          <div className="w-full max-w-[96rem] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
            
            <div className="text-center mb-14">
              <span className="text-xs font-mono text-purple-700 dark:text-purple-400 uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5">
                <Award size={15} />
                <span>{t.credentials.badge}</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[var(--text)] mt-1.5">
                {t.credentials.title}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--muted)] mt-2 max-w-xl mx-auto leading-relaxed">
                {t.credentials.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              
              {/* CARD 1: AWS SOLUTIONS ARCHITECT */}
              <div className="relative rounded-3xl bg-[var(--surface)] border border-amber-500/25 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] hover:border-amber-500/50 hover:-translate-y-1 transition-all duration-300 group">
                <FaAws className="absolute -right-6 -bottom-6 w-44 h-44 text-amber-500/[0.05] dark:text-amber-400/[0.07] pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                      <FaAws size={28} />
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[11px] font-mono font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{t.credentials.verified}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider block">
                      {t.credentials.aws.level}
                    </span>
                    <h3 className="font-display font-extrabold text-xl text-[var(--text)] mt-1 group-hover:text-amber-600 transition-colors">
                      {t.credentials.aws.title}
                    </h3>
                  </div>

                  <div className="mt-4 space-y-2.5 text-xs text-[var(--muted)] leading-relaxed">
                    <div className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold shrink-0">✦</span>
                      <span><strong className="text-[var(--text)]">{t.credentials.aws.p1Title}</strong> {t.credentials.aws.p1Desc}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold shrink-0">✦</span>
                      <span><strong className="text-[var(--text)]">{t.credentials.aws.p2Title}</strong> {t.credentials.aws.p2Desc}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold shrink-0">✦</span>
                      <span><strong className="text-[var(--text)]">{t.credentials.aws.p3Title}</strong> {t.credentials.aws.p3Desc}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono relative z-10">
                  <div>
                    <span className="text-[10px] text-[var(--dim)] block uppercase">{t.credentials.aws.codeLabel}</span>
                    <strong className="text-amber-700 dark:text-amber-400 font-bold tracking-wider">AWS-SAA-84920</strong>
                  </div>
                  <span className="text-[11px] text-[var(--muted)] group-hover:text-amber-600 transition-colors font-medium flex items-center gap-1">
                    <span>{t.credentials.verifyAction}</span>
                    <ExternalLink size={12} />
                  </span>
                </div>
              </div>

              {/* CARD 2: IELTS ACADEMIC 7.5 */}
              <div className="relative rounded-3xl bg-[var(--surface)] border border-sky-500/25 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] hover:border-sky-500/50 hover:-translate-y-1 transition-all duration-300 group">
                <div className="absolute -right-4 -bottom-6 w-44 h-44 text-sky-500/[0.05] dark:text-sky-400/[0.07] pointer-events-none font-display font-black text-8xl flex items-center justify-center select-none transition-transform duration-500 group-hover:scale-110">
                  7.5
                </div>

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-700 dark:text-sky-400 flex items-center justify-center font-display font-black text-sm">
                      IELTS
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 text-sky-700 dark:text-sky-400 text-[11px] font-mono font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                      <span>{t.credentials.ielts.badge}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono font-bold text-sky-700 dark:text-sky-400 uppercase tracking-wider block">
                      {t.credentials.ielts.level}
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <h3 className="font-display font-extrabold text-xl text-[var(--text)] group-hover:text-sky-600 transition-colors">
                        {t.credentials.ielts.title}
                      </h3>
                      <span className="text-2xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-indigo-600 dark:from-sky-400 dark:to-indigo-400">
                        7.5
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-1.5 my-3.5 py-2 border-y border-[var(--border)] text-center text-xs font-mono">
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

                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    {t.credentials.ielts.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono relative z-10">
                  <div>
                    <span className="text-[10px] text-[var(--dim)] block uppercase">{t.credentials.ielts.boardLabel}</span>
                    <strong className="text-sky-700 dark:text-sky-400 font-bold">{t.credentials.ielts.boardVal}</strong>
                  </div>
                  <span className="text-[11px] text-[var(--muted)] group-hover:text-sky-600 transition-colors font-medium flex items-center gap-1">
                    <span>{t.credentials.verifyAction}</span>
                    <ExternalLink size={12} />
                  </span>
                </div>
              </div>

              {/* CARD 3: KUBERNETES CKA */}
              <div className="relative rounded-3xl bg-[var(--surface)] border border-purple-500/25 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300 group">
                <SiKubernetes className="absolute -right-6 -bottom-6 w-44 h-44 text-purple-500/[0.05] dark:text-purple-400/[0.07] pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-700 dark:text-purple-400 flex items-center justify-center">
                      <SiKubernetes size={28} />
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[11px] font-mono font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{t.credentials.verified}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono font-bold text-purple-700 dark:text-purple-400 uppercase tracking-wider block">
                      {t.credentials.cka.level}
                    </span>
                    <h3 className="font-display font-extrabold text-xl text-[var(--text)] mt-1 group-hover:text-purple-600 transition-colors">
                      {t.credentials.cka.title}
                    </h3>
                  </div>

                  <div className="mt-4 space-y-2.5 text-xs text-[var(--muted)] leading-relaxed">
                    <div className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold shrink-0">✦</span>
                      <span><strong className="text-[var(--text)]">{t.credentials.cka.p1Title}</strong> {t.credentials.cka.p1Desc}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold shrink-0">✦</span>
                      <span><strong className="text-[var(--text)]">{t.credentials.cka.p2Title}</strong> {t.credentials.cka.p2Desc}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold shrink-0">✦</span>
                      <span><strong className="text-[var(--text)]">{t.credentials.cka.p3Title}</strong> {t.credentials.cka.p3Desc}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono relative z-10">
                  <div>
                    <span className="text-[10px] text-[var(--dim)] block uppercase">{t.credentials.cka.codeLabel}</span>
                    <strong className="text-purple-700 dark:text-purple-400 font-bold tracking-wider">CKA-294018</strong>
                  </div>
                  <span className="text-[11px] text-[var(--muted)] group-hover:text-purple-600 transition-colors font-medium flex items-center gap-1">
                    <span>{t.credentials.verifyAction}</span>
                    <ExternalLink size={12} />
                  </span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 05 · KỸ NĂNG CỐT LÕI & AI ENGINEERING (4 CỘT RỘNG MỞ) */}
        {/* ============================================================ */}
        <section id="skills" className="py-24 border-b border-[var(--border)] bg-[var(--surface-subtle)]/40">
          <div className="w-full max-w-[96rem] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
            
            <div className="text-center mb-14">
              <span className="text-xs font-mono text-purple-700 dark:text-purple-400 uppercase tracking-widest font-semibold">
                {t.skills.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[var(--text)] mt-1">
                {t.skills.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
              
              {/* Stack 1: Backend & Edge */}
              <div className="relative rounded-3xl bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-7 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-purple-500/10 text-purple-700 dark:text-purple-400 flex items-center justify-center">
                      <Server size={20} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-[var(--text)] group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                        {t.skills.backend.title}
                      </h3>
                      <span className="text-[11px] font-mono text-[var(--dim)]">{t.skills.backend.sub}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-1">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <SiGo className="text-[#00ADD8] shrink-0" size={15} />
                        <span>Golang (Go 1.23)</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] pl-6 leading-relaxed">
                        {t.skills.backend.goDesc}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <SiRust className="text-[#DEA584] shrink-0" size={15} />
                        <span>Rust Core</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] pl-6 leading-relaxed">
                        {t.skills.backend.rustDesc}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <SiPostgresql className="text-[#4169E1] shrink-0" size={15} />
                        <span>PostgreSQL &amp; Redis</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] pl-6 leading-relaxed">
                        {t.skills.backend.dbDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stack 2: DevOps & Edge */}
              <div className="relative rounded-3xl bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-7 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 flex items-center justify-center">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-[var(--text)] group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors">
                        {t.skills.devops.title}
                      </h3>
                      <span className="text-[11px] font-mono text-[var(--dim)]">{t.skills.devops.sub}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-1">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <SiDocker className="text-[#2496ED] shrink-0" size={15} />
                        <span>Docker &amp; Compose</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] pl-6 leading-relaxed">
                        {t.skills.devops.dockerDesc}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <SiKubernetes className="text-[#326CE5] shrink-0" size={15} />
                        <span>Kubernetes (K8s)</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] pl-6 leading-relaxed">
                        {t.skills.devops.k8sDesc}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <SiLinux className="text-[var(--text)] shrink-0" size={15} />
                        <span>Linux &amp; Wrangler CI/CD</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] pl-6 leading-relaxed">
                        {t.skills.devops.linuxDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stack 3: Mobile & Modern Web */}
              <div className="relative rounded-3xl bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-7 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] hover:border-fuchsia-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-400 flex items-center justify-center">
                      <Smartphone size={20} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-[var(--text)] group-hover:text-fuchsia-700 dark:group-hover:text-fuchsia-400 transition-colors">
                        {t.skills.mobile.title}
                      </h3>
                      <span className="text-[11px] font-mono text-[var(--dim)]">{t.skills.mobile.sub}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-1">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <SiFlutter className="text-[#02569B] shrink-0" size={15} />
                        <span>Flutter &amp; Dart</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] pl-6 leading-relaxed">
                        {t.skills.mobile.flutterDesc}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <span className="font-bold text-blue-600 text-xs shrink-0">TS</span>
                        <span>TypeScript &amp; Next.js 15</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] pl-6 leading-relaxed">
                        {t.skills.mobile.tsDesc}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <span className="font-bold text-purple-600 text-xs shrink-0">Web</span>
                        <span>Edge SSR &amp; Web Crypto</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] pl-6 leading-relaxed">
                        {t.skills.mobile.webDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stack 4: AI Engineering & Modern FE (NEW HUMAN-CENTRIC PILLAR) */}
              <div className="relative rounded-3xl bg-[var(--surface)] border border-purple-500/25 p-6 sm:p-7 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-purple-500/10 text-purple-700 dark:text-purple-400 flex items-center justify-center">
                      <Bot size={20} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-[var(--text)] group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                        {t.skills.ai.title}
                      </h3>
                      <span className="text-[11px] font-mono text-[var(--dim)]">{t.skills.ai.sub}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-1">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <SiAnthropic className="text-amber-600 shrink-0" size={15} />
                        <span>LLM APIs &amp; Streaming UI</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] pl-6 leading-relaxed">
                        {t.skills.ai.llmDesc}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <Sparkles className="text-purple-600 shrink-0" size={15} />
                        <span>Agentic Workflows &amp; MCP</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] pl-6 leading-relaxed">
                        {t.skills.ai.agentDesc}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <Heart className="text-rose-500 shrink-0" size={15} />
                        <span>Human-in-the-Loop UX</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] pl-6 leading-relaxed">
                        {t.skills.ai.uxDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 06 · LIÊN HỆ & KẾT NỐI */}
        {/* ============================================================ */}
        <section id="contact" className="py-24">
          <div className="w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
            
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-700 dark:text-purple-400 flex items-center justify-center mb-5 shadow-xs">
              <Sparkles size={26} />
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-black text-[var(--text)] mb-3">
              {t.contact.title}
            </h2>

            <p className="text-sm sm:text-base text-[var(--muted)] max-w-2xl mb-8 leading-relaxed">
              {t.contact.desc}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-8">
              <a
                href="mailto:hnamhocit@gmail.com"
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-purple-700 to-indigo-600 text-white font-semibold text-sm hover:brightness-110 active:scale-98 transition-all shadow-md shadow-purple-500/25 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Mail size={16} />
                <span>{t.contact.emailBtn}</span>
              </a>

              <a
                href="https://github.com/hnamhocit"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] font-semibold text-sm hover:border-purple-500 transition-colors flex items-center justify-center gap-2.5 shadow-xs"
              >
                <FaGithub size={16} />
                <span>{t.contact.githubBtn}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 text-[var(--muted)] text-xs font-mono">
              <a 
                href="mailto:hnamhocit@gmail.com" 
                className="hover:text-purple-700 dark:hover:text-purple-400 transition-colors flex items-center gap-1.5"
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
                href="https://t.me/hnamhocit" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-sky-600 transition-colors flex items-center gap-1.5"
              >
                <FaTelegramPlane size={14} />
                <span>Telegram</span>
              </a>
              <a 
                href="https://facebook.com/hnamhocit" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-purple-700 dark:hover:text-purple-400 transition-colors flex items-center gap-1.5"
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
      <footer className="border-t border-[var(--border)] bg-white dark:bg-[#10141E] py-8 text-center text-xs text-[var(--dim)] font-mono transition-colors">
        <div className="w-full max-w-[96rem] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 flex flex-col sm:flex-row items-center justify-between gap-3">
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
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-white dark:bg-[#10141E] border border-[var(--border)] text-[var(--muted)] hover:text-purple-700 dark:hover:text-purple-400 shadow-lg shadow-black/5 hover:shadow-xl hover:border-purple-500/40 transition-all duration-300 cursor-pointer ${
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
