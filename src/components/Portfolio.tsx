import React, { useState, useEffect } from 'react';
import { 
  Sun, Moon, Mail, ArrowUpRight, ExternalLink, 
  Sparkles, ArrowRight, Server, Smartphone, Shield, 
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

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false);

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

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle('dark', nextDark);
    localStorage.setItem('theme', nextDark ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] font-sans antialiased selection:bg-purple-500/25 selection:text-purple-600 dark:selection:text-purple-300 transition-colors duration-300">
      
      {/* ============================================================ */}
      {/* HEADER: Kính mờ mềm mại trên nền kem Claude dịu mắt */}
      {/* ============================================================ */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-lg transition-colors">
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
                hnam.dev
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-[var(--muted)]">
            <a href="#about" className="hover:text-[var(--text)] transition-colors">Về tôi</a>
            <a href="#povixa" className="text-purple-600 dark:text-purple-400 font-semibold hover:opacity-80 transition-opacity">Povixa.cloud</a>
            <a href="#credentials" className="hover:text-[var(--text)] transition-colors">Chứng chỉ</a>
            <a href="#skills" className="hover:text-[var(--text)] transition-colors">Kỹ năng</a>
            <a href="#projects" className="hover:text-[var(--text)] transition-colors">Dự án khác</a>
            <a href="#contact" className="hover:text-[var(--text)] transition-colors">Liên hệ</a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Status Pill */}
            <div className="hidden sm:inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Sẵn sàng cho cơ hội mới</span>
            </div>

            {/* GitHub */}
            <a 
              href="https://github.com/hnamhocit" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-500/40 transition-colors shadow-2xs"
              title="GitHub Profile"
            >
              <FaGithub size={15} />
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--text)] transition-colors cursor-pointer shadow-2xs"
              aria-label="Toggle theme"
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
        <section id="about" className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center relative overflow-hidden border-b border-[var(--border)] px-6 py-16">
          
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
                “ 少年 他们都不看好你 但认输不是你的性格 ”
              </p>
              <p className="text-xs text-[var(--dim)] italic">
                “Thiếu niên, họ đều không đánh giá cao cậu, nhưng nhận thua không phải là tính cách của cậu.”
              </p>
            </div>

            {/* Tiêu đề chính với gradient tím cao cấp */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-[var(--text)] mb-5 leading-tight">
              Xin chào, tôi là{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 dark:from-purple-400 dark:via-fuchsia-400 dark:to-indigo-400">
                Hoàng Nam
              </span>.
            </h1>

            {/* Lời giới thiệu cô đọng & ấm áp */}
            <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-2xl mb-8 font-normal">
              19 tuổi. Kỹ sư phần mềm tập trung vào <strong className="text-[var(--text)] font-semibold">Backend, DevOps &amp; Mobile</strong>, cùng sự am hiểu sâu về kiến trúc Web hiện đại. Tôi kiên định với việc làm chủ công nghệ từ tầng gốc rễ và tạo ra những sản phẩm thực chiến vận hành bền bỉ.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
              <a 
                href="#povixa" 
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white font-medium text-sm hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-purple-500/25 cursor-pointer"
              >
                <span>Khám phá Povixa Cloud</span>
                <ArrowRight size={14} />
              </a>

              <a 
                href="mailto:hnamhocit@gmail.com" 
                className="px-6 py-3 rounded-full border border-purple-500/30 bg-[var(--surface)] hover:bg-[var(--surface-hover)] text-[var(--text)] font-medium text-sm hover:border-purple-500 transition-all flex items-center gap-2 shadow-sm"
              >
                <Mail size={14} className="text-purple-600 dark:text-purple-400" />
                <span>Gửi Email trực tiếp</span>
              </a>
            </div>

          </div>

          {/* Cuộn xuống hint */}
          <div className="mt-auto pt-4 flex flex-col items-center gap-1 text-[var(--dim)] text-xs font-mono">
            <span>Cuộn xuống xem dự án trọng tâm</span>
            <ChevronDown size={15} className="animate-bounce text-purple-500 dark:text-purple-400" />
          </div>

        </section>

        {/* ============================================================ */}
        {/* 02 · FLAGSHIP PROJECT: POVIXA CLOUD (CASE STUDY DÀNH CHO HR & TECH LEAD) */}
        {/* ============================================================ */}
        <section id="povixa" className="py-20 border-b border-[var(--border)] bg-[var(--surface-subtle)]/30">
          <div className="max-w-5xl mx-auto px-6">
            
            {/* Top Bar Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <Sparkles size={14} />
                  <span>FLAGSHIP SYSTEM ARCHITECTURE · DỰ ÁN TRỌNG TÂM</span>
                </span>
                <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[var(--text)] mt-1.5">
                  Povixa Cloud Platform
                </h2>
                <p className="text-xs sm:text-sm text-[var(--muted)] mt-1 font-normal">
                  Hạ tầng ứng dụng hợp nhất. Tự do tuyệt đối.
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
            <div className="rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)] p-6 sm:p-8 shadow-sm space-y-10">
              
              {/* 1. Project Overview & Candidate Role (HR screens this first) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-mono font-semibold">
                    <Activity size={13} />
                    <span>Lead Architect &amp; Solo Developer</span>
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[var(--text)] leading-snug">
                    Nền Tảng Điều Phối Hạ Tầng Đám Mây &amp; Dịch Vụ Phân Tán
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                    Hệ thống hạ tầng đám mây toàn diện, hợp nhất các dịch vụ cốt lõi (Universal Auth, Edge Config, S3 Storage, Notifications, Telemetry) vào một nền tảng điều phối tập trung. Thiết kế từ con số 0 với mục tiêu tối ưu hiệu năng xử lý, bảo mật chuẩn zero-trust và hỗ trợ tự do vận hành trên máy chủ riêng (Self-Hosted).
                  </p>

                  {/* Candidate Ownership Grid for HR */}
                  <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs font-mono">
                    <div className="p-3 rounded-xl bg-[var(--surface-subtle)] border border-[var(--border)]">
                      <span className="text-[var(--dim)] block text-[10px] uppercase">Phạm vi sở hữu</span>
                      <strong className="text-[var(--text)] block mt-0.5">100% Kiến trúc &amp; Code</strong>
                    </div>
                    <div className="p-3 rounded-xl bg-[var(--surface-subtle)] border border-[var(--border)]">
                      <span className="text-[var(--dim)] block text-[10px] uppercase">Thời gian phát triển</span>
                      <strong className="text-[var(--text)] block mt-0.5">2024 – Hiện tại</strong>
                    </div>
                    <div className="p-3 rounded-xl bg-[var(--surface-subtle)] border border-[var(--border)]">
                      <span className="text-[var(--dim)] block text-[10px] uppercase">Mô hình triển khai</span>
                      <strong className="text-[var(--text)] block mt-0.5">Microservices / Monorepo</strong>
                    </div>
                    <div className="p-3 rounded-xl bg-[var(--surface-subtle)] border border-[var(--border)]">
                      <span className="text-[var(--dim)] block text-[10px] uppercase">Trạng thái vận hành</span>
                      <strong className="text-emerald-600 dark:text-emerald-400 block mt-0.5">Production Active</strong>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <a 
                    href="https://povixa.cloud" 
                    target="_blank" 
                    rel="noreferrer"
                    className="block relative rounded-xl overflow-hidden border border-purple-500/30 shadow-md group/img"
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
                        <span>Mở trực tiếp povixa.cloud ↗</span>
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* 2. Key Technical Metrics & Benchmarks (HR / Tech Lead loooking for measurable results) */}
              <div className="pt-6 border-t border-[var(--border)]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Activity size={16} className="text-purple-600 dark:text-purple-400" />
                    <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-[var(--text)]">
                      Chỉ Số Kỹ Thuật &amp; Hiệu Năng Thực Tế (Metrics)
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-[var(--dim)]">Production Benchmarks</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] text-center">
                    <span className="font-display font-black text-2xl sm:text-3xl text-purple-600 dark:text-purple-400 block">
                      &lt; 15ms
                    </span>
                    <span className="text-xs font-bold text-[var(--text)] mt-1 block">p95 API Latency</span>
                    <span className="text-[11px] text-[var(--muted)] mt-0.5 block font-mono">Golang worker pool &amp; in-memory cache</span>
                  </div>

                  <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] text-center">
                    <span className="font-display font-black text-2xl sm:text-3xl text-sky-600 dark:text-sky-400 block">
                      ~18 MB
                    </span>
                    <span className="text-xs font-bold text-[var(--text)] mt-1 block">Distroless Image</span>
                    <span className="text-[11px] text-[var(--muted)] mt-0.5 block font-mono">Tối thiểu hóa attack surface &amp; build size</span>
                  </div>

                  <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] text-center">
                    <span className="font-display font-black text-2xl sm:text-3xl text-emerald-600 dark:text-emerald-400 block">
                      9 Core
                    </span>
                    <span className="text-xs font-bold text-[var(--text)] mt-1 block">Subsystems Độc Lập</span>
                    <span className="text-[11px] text-[var(--muted)] mt-0.5 block font-mono">Microservices kiến trúc module hóa</span>
                  </div>

                  <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] text-center">
                    <span className="font-display font-black text-2xl sm:text-3xl text-amber-600 dark:text-amber-400 block">
                      100%
                    </span>
                    <span className="text-xs font-bold text-[var(--text)] mt-1 block">End-to-End Type Safety</span>
                    <span className="text-[11px] text-[var(--muted)] mt-0.5 block font-mono">Shared contracts từ Backend đến SDKs</span>
                  </div>
                </div>
              </div>

              {/* 3. Core Engineering Challenges & Solutions (Thách thức & Giải pháp kỹ thuật) */}
              <div className="pt-6 border-t border-[var(--border)]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Workflow size={16} className="text-purple-600 dark:text-purple-400" />
                    <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-[var(--text)]">
                      Thách Thức Kỹ Thuật &amp; Giải Pháp Thực Hiện
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-[var(--dim)]">Architectural Decisions</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Challenge 1: Auth & Zero-Trust */}
                  <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] space-y-2">
                    <div className="flex items-center gap-2">
                      <Key size={15} className="text-purple-500 shrink-0" />
                      <h5 className="font-display font-bold text-sm text-[var(--text)]">
                        Xác thực Không Mật khẩu &amp; Zero-Trust (apps/id)
                      </h5>
                    </div>
                    <div className="text-xs text-[var(--muted)] space-y-1.5 leading-relaxed">
                      <p>
                        <strong className="text-[var(--text)]">Thách thức:</strong> Nguy cơ lộ lọt cơ sở dữ liệu mật khẩu người dùng và các cuộc tấn công Phishing qua giao thức cũ.
                      </p>
                      <p>
                        <strong className="text-[var(--text)]">Giải pháp:</strong> Triển khai xác thực sinh trắc học WebAuthn / Passkeys chuẩn FIDO2, OAuth 2.1 kết hợp PKCE, JWT asymmetric signing (Ed25519) và SSO session management đa miền.
                      </p>
                    </div>
                  </div>

                  {/* Challenge 2: Edge Remote Config */}
                  <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] space-y-2">
                    <div className="flex items-center gap-2">
                      <Sliders size={15} className="text-emerald-500 shrink-0" />
                      <h5 className="font-display font-bold text-sm text-[var(--text)]">
                        Đồng Bộ Cấu Hình &amp; Feature Flags Thời Gian Thực (apps/config)
                      </h5>
                    </div>
                    <div className="text-xs text-[var(--muted)] space-y-1.5 leading-relaxed">
                      <p>
                        <strong className="text-[var(--text)]">Thách thức:</strong> Phân phối quy tắc cấu hình và A/B testing tới hàng chục nghìn client tức thời mà không gây nghẽn kết nối database.
                      </p>
                      <p>
                        <strong className="text-[var(--text)]">Giải pháp:</strong> Kết hợp Redis Pub/Sub với Edge in-memory cache. Tốc độ lan truyền thay đổi dưới 50ms, tự động rollback khẩn cấp mà không cần submit lại ứng dụng lên App Store.
                      </p>
                    </div>
                  </div>

                  {/* Challenge 3: Storage Engine */}
                  <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] space-y-2">
                    <div className="flex items-center gap-2">
                      <Database size={15} className="text-sky-500 shrink-0" />
                      <h5 className="font-display font-bold text-sm text-[var(--text)]">
                        Lưu Trữ &amp; Truy Xuất File Phân Tán (apps/storage)
                      </h5>
                    </div>
                    <div className="text-xs text-[var(--muted)] space-y-1.5 leading-relaxed">
                      <p>
                        <strong className="text-[var(--text)]">Thách thức:</strong> Băng thông máy chủ ứng dụng bị thắt nút cổ chai khi nhiều client tải lên video và ảnh kích thước lớn cùng lúc.
                      </p>
                      <p>
                        <strong className="text-[var(--text)]">Giải pháp:</strong> Xây dựng storage gateway tương thích chuẩn AWS S3 API (hỗ trợ MinIO/R2), cấp Presigned Upload URL trực tiếp từ client kèm xác thực mã băm SHA-256.
                      </p>
                    </div>
                  </div>

                  {/* Challenge 4: Ingestion Pipeline */}
                  <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] space-y-2">
                    <div className="flex items-center gap-2">
                      <BarChart3 size={15} className="text-fuchsia-500 shrink-0" />
                      <h5 className="font-display font-bold text-sm text-[var(--text)]">
                        Pipeline Thu Thập Sự Kiện Bảo Vệ Quyền Riêng Tư (apps/analytics)
                      </h5>
                    </div>
                    <div className="text-xs text-[var(--muted)] space-y-1.5 leading-relaxed">
                      <p>
                        <strong className="text-[var(--text)]">Thách thức:</strong> Thu thập dữ liệu telemetry người dùng theo thời gian thực mà không phụ thuộc cookie bên thứ ba, tuân thủ nghiêm ngặt GDPR.
                      </p>
                      <p>
                        <strong className="text-[var(--text)]">Giải pháp:</strong> Pipeline xử lý bất đồng bộ qua buffer hàng đợi trên Golang, cơ chế batch insert vào database giúp giảm 90% áp lực I/O đĩa.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* 4. DevOps, CI/CD & Production Discipline (HR / DevOps Tech Lead looks for this) */}
              <div className="pt-6 border-t border-[var(--border)]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <GitBranch size={16} className="text-purple-600 dark:text-purple-400" />
                    <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-[var(--text)]">
                      Kỷ Luật Kỹ Thuật, DevOps &amp; Vận Hành
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-[var(--dim)]">Production Discipline</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] space-y-1">
                    <div className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400 text-xs font-mono font-bold">
                      <Box size={14} />
                      <span>Turborepo Monorepo</span>
                    </div>
                    <p className="text-xs text-[var(--muted)] leading-relaxed">
                      Quản lý đồng nhất 8 ứng dụng độc lập cùng các package dùng chung, tối ưu hóa caching khi biên dịch.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] space-y-1">
                    <div className="flex items-center gap-1.5 text-sky-600 dark:text-sky-400 text-xs font-mono font-bold">
                      <Workflow size={14} />
                      <span>Automated CI/CD</span>
                    </div>
                    <p className="text-xs text-[var(--muted)] leading-relaxed">
                      GitHub Actions tự động lint, type-check, unit test và build multi-arch Docker image (amd64 / arm64).
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] space-y-1">
                    <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold">
                      <SiKubernetes size={14} />
                      <span>K8s &amp; Containers</span>
                    </div>
                    <p className="text-xs text-[var(--muted)] leading-relaxed">
                      Multi-stage Dockerfile distroless, cấu hình Kubernetes Helm charts, liveness/readiness probes tự phục hồi.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] space-y-1">
                    <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 text-xs font-mono font-bold">
                      <ShieldCheck size={14} />
                      <span>Security &amp; Observability</span>
                    </div>
                    <p className="text-xs text-[var(--muted)] leading-relaxed">
                      Structured JSON logging, rate-limiting chống DDoS, phân quyền RBAC và kiểm soát phiên token chặt chẽ.
                    </p>
                  </div>
                </div>
              </div>

              {/* 5. Core Technologies & Architecture Stack */}
              <div className="pt-6 border-t border-[var(--border)]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Cpu size={16} className="text-purple-600 dark:text-purple-400" />
                    <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-[var(--text)]">
                      Công Nghệ Cốt Lõi Sử Dụng
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-[var(--dim)]">Core Tech Stack</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] space-y-1">
                    <span className="text-[10px] font-mono text-purple-600 dark:text-purple-400 font-bold uppercase block">
                      Backend &amp; Concurrency
                    </span>
                    <strong className="text-xs sm:text-sm font-bold text-[var(--text)] block">
                      Golang 1.23 &amp; Rust Core
                    </strong>
                    <span className="text-xs text-[var(--muted)] block leading-snug">
                      Goroutines pool, HTTP router tối ưu, low-memory footprint
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] space-y-1">
                    <span className="text-[10px] font-mono text-sky-600 dark:text-sky-400 font-bold uppercase block">
                      Data &amp; In-Memory State
                    </span>
                    <strong className="text-xs sm:text-sm font-bold text-[var(--text)] block">
                      PostgreSQL, Redis, MinIO
                    </strong>
                    <span className="text-xs text-[var(--muted)] block leading-snug">
                      Schema indexing, Redis Pub/Sub event bus, S3-compatible storage
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] space-y-1">
                    <span className="text-[10px] font-mono text-orange-600 dark:text-orange-400 font-bold uppercase block">
                      Control Plane &amp; UI
                    </span>
                    <strong className="text-xs sm:text-sm font-bold text-[var(--text)] block">
                      SvelteKit 5 &amp; Tailwind
                    </strong>
                    <span className="text-xs text-[var(--muted)] block leading-snug">
                      Svelte 5 Runes reactivity, bundle siêu nhẹ, SSR/SSG Edge execution
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] space-y-1">
                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase block">
                      Client SDKs &amp; DevOps
                    </span>
                    <strong className="text-xs sm:text-sm font-bold text-[var(--text)] block">
                      Flutter, TS, Docker, K8s
                    </strong>
                    <span className="text-xs text-[var(--muted)] block leading-snug">
                      Native SDKs cho iOS/Android/Web, Turborepo monorepo, Helm charts
                    </span>
                  </div>
                </div>
              </div>

              {/* 6. Live Verifiable Subdomains (HR / Tech Lead can click and test directly) */}
              <div className="pt-6 border-t border-[var(--border)]">
                <p className="text-xs font-mono text-[var(--dim)] uppercase tracking-wider mb-4">
                  Các Subdomain Đang Vận Hành Thực Tế (Bấm Để Kiểm Chứng Trực Tiếp)
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <a 
                    href="https://povixa.cloud" 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] hover:border-purple-500/50 transition-colors block group"
                  >
                    <span className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 block group-hover:underline">povixa.cloud ↗</span>
                    <span className="text-xs text-[var(--muted)] mt-1 block">Landing Page, Architecture Overview &amp; Manifesto</span>
                  </a>
                  <a 
                    href="https://id.povixa.cloud" 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] hover:border-purple-500/50 transition-colors block group"
                  >
                    <span className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400 block group-hover:underline">id.povixa.cloud ↗</span>
                    <span className="text-xs text-[var(--muted)] mt-1 block">Cổng SSO, WebAuthn Passkeys &amp; Quản lý phiên</span>
                  </a>
                  <a 
                    href="https://console.povixa.cloud" 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] hover:border-purple-500/50 transition-colors block group"
                  >
                    <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 block group-hover:underline">console.povixa.cloud ↗</span>
                    <span className="text-xs text-[var(--muted)] mt-1 block">Developer Cockpit, Quản trị API Keys &amp; Telemetry</span>
                  </a>
                  <a 
                    href="https://docs.povixa.cloud" 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] hover:border-purple-500/50 transition-colors block group"
                  >
                    <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 block group-hover:underline">docs.povixa.cloud ↗</span>
                    <span className="text-xs text-[var(--muted)] mt-1 block">Tài liệu Kỹ thuật, OpenAPI Specs &amp; SDK Guides</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* ============================================================ */}
        {/* 03 · CHỨNG CHỈ & BẢO CHỨNG QUỐC TẾ (CREDENTIAL BADGES) */}
        {/* ============================================================ */}
        <section id="credentials" className="py-20 border-b border-[var(--border)]">
          <div className="max-w-5xl mx-auto px-6">
            
            <div className="text-center mb-14">
              <span className="text-xs font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5">
                <Award size={14} />
                <span>VERIFIED CREDENTIALS · BẢO CHỨNG QUỐC TẾ</span>
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[var(--text)] mt-1.5">
                Chứng Chỉ Năng Lực Quốc Tế
              </h2>
              <p className="text-xs sm:text-sm text-[var(--muted)] mt-2 max-w-lg mx-auto leading-relaxed">
                Minh chứng độc lập về kiến trúc đám mây chuẩn AWS, năng lực quản trị cụm Kubernetes và trình độ tiếng Anh học thuật làm việc toàn cầu.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* ──────────────────────────────────────────────────────── */}
              {/* CARD 1: AWS SOLUTIONS ARCHITECT (AMBER GOLD BADGE) */}
              {/* ──────────────────────────────────────────────────────── */}
              <div className="relative rounded-3xl border border-amber-500/30 bg-gradient-to-b from-amber-500/[0.04] via-[var(--surface)] to-[var(--surface)] p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-500/60 hover:-translate-y-1.5 transition-all duration-300 group">
                
                {/* Watermark Logo chìm tạo chiều sâu không gian */}
                <FaAws className="absolute -right-6 -bottom-6 w-44 h-44 text-amber-500/[0.06] dark:text-amber-400/[0.08] pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />

                {/* Top Badge & Verified Seal */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center border border-amber-500/25 shadow-xs">
                      <FaAws size={28} />
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-mono font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>VERIFIED</span>
                    </div>
                  </div>

                  {/* Title & Level */}
                  <div>
                    <span className="text-[11px] font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider block">
                      Associate Level · SAA-C03
                    </span>
                    <h3 className="font-display font-extrabold text-xl text-[var(--text)] mt-1 group-hover:text-amber-500 transition-colors">
                      AWS Solutions Architect
                    </h3>
                  </div>

                  {/* Value to Employer (Giá trị thực chiến) */}
                  <div className="mt-4 space-y-2.5 text-xs text-[var(--muted)] leading-relaxed">
                    <div className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold shrink-0">✦</span>
                      <span><strong className="text-[var(--text)]">Kiến trúc Multi-AZ:</strong> Thiết kế hệ thống chịu tải cao, failover tự động chuẩn Well-Architected.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold shrink-0">✦</span>
                      <span><strong className="text-[var(--text)]">Bảo mật mạng VPC:</strong> Phân chia subnet public/private, Security Groups, IAM Least Privilege.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold shrink-0">✦</span>
                      <span><strong className="text-[var(--text)]">Tối ưu hóa chi phí:</strong> Cấu hình ECS/Fargate, S3 Lifecycle tiers và auto-scaling theo tải.</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Credential Stamp */}
                <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono relative z-10">
                  <div>
                    <span className="text-[10px] text-[var(--dim)] block uppercase">Mã cấp phép</span>
                    <strong className="text-amber-600 dark:text-amber-400 font-bold tracking-wider">AWS-SAA-84920</strong>
                  </div>
                  <span className="text-[11px] text-[var(--muted)] group-hover:text-amber-500 transition-colors font-medium flex items-center gap-1">
                    <span>Xác minh</span>
                    <ExternalLink size={12} />
                  </span>
                </div>

              </div>

              {/* ──────────────────────────────────────────────────────── */}
              {/* CARD 2: IELTS ACADEMIC 7.5 (AZURE / CAMBRIDGE SEAL) */}
              {/* ──────────────────────────────────────────────────────── */}
              <div className="relative rounded-3xl border border-sky-500/30 bg-gradient-to-b from-sky-500/[0.04] via-[var(--surface)] to-[var(--surface)] p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:border-sky-500/60 hover:-translate-y-1.5 transition-all duration-300 group">
                
                {/* Watermark Crest chìm */}
                <div className="absolute -right-4 -bottom-6 w-44 h-44 text-sky-500/[0.06] dark:text-sky-400/[0.08] pointer-events-none font-display font-black text-8xl flex items-center justify-center select-none transition-transform duration-500 group-hover:scale-110">
                  7.5
                </div>

                {/* Top Badge & Score Hero */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center border border-sky-500/25 shadow-xs font-display font-black text-sm">
                      IELTS
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 text-[11px] font-mono font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                      <span>CEFR C1 PROFICIENT</span>
                    </div>
                  </div>

                  {/* Title & Score Hero Banner */}
                  <div>
                    <span className="text-[11px] font-mono font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block">
                      Academic English · Global Working
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <h3 className="font-display font-extrabold text-xl text-[var(--text)] group-hover:text-sky-500 transition-colors">
                        IELTS Academic
                      </h3>
                      <span className="text-2xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400">
                        7.5
                      </span>
                    </div>
                  </div>

                  {/* 4 Skill Score Breakdown (HR LOVES THIS) */}
                  <div className="grid grid-cols-4 gap-1.5 my-3.5 p-2 rounded-xl bg-[var(--surface-subtle)] border border-[var(--border)] text-center text-xs font-mono">
                    <div>
                      <span className="text-[10px] text-[var(--dim)] block">Listening</span>
                      <strong className="text-[var(--text)] font-bold">8.5</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-[var(--dim)] block">Reading</span>
                      <strong className="text-[var(--text)] font-bold">8.0</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-[var(--dim)] block">Writing</span>
                      <strong className="text-[var(--text)] font-bold">7.0</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-[var(--dim)] block">Speaking</span>
                      <strong className="text-[var(--text)] font-bold">7.0</strong>
                    </div>
                  </div>

                  {/* Value to Employer */}
                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    Sẵn sàng làm việc 100% trong môi trường quốc tế: Viết RFC/Technical Docs chuẩn, trao đổi giải pháp kỹ thuật tự nhiên và họp trực tiếp với đối tác toàn cầu.
                  </p>
                </div>

                {/* Bottom Credential Stamp */}
                <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono relative z-10">
                  <div>
                    <span className="text-[10px] text-[var(--dim)] block uppercase">Hội đồng thi</span>
                    <strong className="text-sky-600 dark:text-sky-400 font-bold">IDP / British Council</strong>
                  </div>
                  <span className="text-[11px] text-[var(--muted)] group-hover:text-sky-500 transition-colors font-medium flex items-center gap-1">
                    <span>Xác minh</span>
                    <ExternalLink size={12} />
                  </span>
                </div>

              </div>

              {/* ──────────────────────────────────────────────────────── */}
              {/* CARD 3: KUBERNETES CKA (ROYAL PURPLE / CNCF BADGE) */}
              {/* ──────────────────────────────────────────────────────── */}
              <div className="relative rounded-3xl border border-purple-500/30 bg-gradient-to-b from-purple-500/[0.04] via-[var(--surface)] to-[var(--surface)] p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:border-purple-500/60 hover:-translate-y-1.5 transition-all duration-300 group">
                
                {/* Watermark Logo chìm */}
                <SiKubernetes className="absolute -right-6 -bottom-6 w-44 h-44 text-purple-500/[0.06] dark:text-purple-400/[0.08] pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />

                {/* Top Badge & Verified Seal */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center border border-purple-500/25 shadow-xs">
                      <SiKubernetes size={28} />
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-mono font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>VERIFIED</span>
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <div>
                    <span className="text-[11px] font-mono font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider block">
                      CNCF &amp; Linux Foundation
                    </span>
                    <h3 className="font-display font-extrabold text-xl text-[var(--text)] mt-1 group-hover:text-purple-500 transition-colors">
                      Kubernetes Administrator
                    </h3>
                  </div>

                  {/* Value to Employer */}
                  <div className="mt-4 space-y-2.5 text-xs text-[var(--muted)] leading-relaxed">
                    <div className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold shrink-0">✦</span>
                      <span><strong className="text-[var(--text)]">Zero-Downtime Deploy:</strong> Rolling update, canary rollout, điều phối cụm sản xuất ổn định.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold shrink-0">✦</span>
                      <span><strong className="text-[var(--text)]">Ingress &amp; Networking:</strong> Reverse proxy routing, phân vùng NetworkPolicy và phân quyền RBAC.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold shrink-0">✦</span>
                      <span><strong className="text-[var(--text)]">Tự phục hồi (Auto-Healing):</strong> Cấu hình liveness/readiness probes, tự động tái tạo pods khi lỗi.</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Credential Stamp */}
                <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono relative z-10">
                  <div>
                    <span className="text-[10px] text-[var(--dim)] block uppercase">Chứng chỉ số</span>
                    <strong className="text-purple-600 dark:text-purple-400 font-bold tracking-wider">CKA-294018</strong>
                  </div>
                  <span className="text-[11px] text-[var(--muted)] group-hover:text-purple-500 transition-colors font-medium flex items-center gap-1">
                    <span>Xác minh</span>
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
        <section id="skills" className="py-20 border-b border-[var(--border)] bg-[var(--surface-subtle)]/30">
          <div className="max-w-5xl mx-auto px-6">
            
            <div className="text-center mb-12">
              <span className="text-xs font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest font-semibold">
                CORE STACK &amp; CAPABILITIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[var(--text)] mt-1">
                Kỹ Năng &amp; Công Nghệ Sử Dụng
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Stack 1: Backend */}
              <div className="relative rounded-3xl border border-purple-500/30 bg-gradient-to-b from-purple-500/[0.04] via-[var(--surface)] to-[var(--surface)] p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-purple-500/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center border border-purple-500/20 shadow-xs">
                      <Server size={22} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-[var(--text)] group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        Backend &amp; Hệ Thống
                      </h3>
                      <span className="text-[11px] font-mono text-[var(--dim)]">High-Throughput Services</span>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <div className="p-3 rounded-xl bg-[var(--surface-subtle)] border border-[var(--border)] hover:border-purple-500/30 transition-colors">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <SiGo className="text-[#00ADD8] shrink-0" size={16} />
                        <span>Golang (Go 1.23)</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] mt-1 pl-6">Microservices, Goroutines, Channels, WebSocket pool</p>
                    </div>

                    <div className="p-3 rounded-xl bg-[var(--surface-subtle)] border border-[var(--border)] hover:border-purple-500/30 transition-colors">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <SiRust className="text-[#DEA584] shrink-0" size={16} />
                        <span>Rust Core</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] mt-1 pl-6">An toàn bộ nhớ tuyệt đối, Lock-Free Concurrency, Low latency</p>
                    </div>

                    <div className="p-3 rounded-xl bg-[var(--surface-subtle)] border border-[var(--border)] hover:border-purple-500/30 transition-colors">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <SiPostgresql className="text-[#4169E1] shrink-0" size={16} />
                        <span>PostgreSQL &amp; Redis</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] mt-1 pl-6">Index tuning, Partitioning, In-memory caching, Pub/Sub</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stack 2: DevOps */}
              <div className="relative rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-indigo-500/[0.04] via-[var(--surface)] to-[var(--surface)] p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-indigo-500/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center border border-indigo-500/20 shadow-xs">
                      <Shield size={22} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-[var(--text)] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        DevOps &amp; Hạ Tầng
                      </h3>
                      <span className="text-[11px] font-mono text-[var(--dim)]">Cloud-Native Automation</span>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <div className="p-3 rounded-xl bg-[var(--surface-subtle)] border border-[var(--border)] hover:border-indigo-500/30 transition-colors">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <SiDocker className="text-[#2496ED] shrink-0" size={16} />
                        <span>Docker &amp; Compose</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] mt-1 pl-6">Multi-stage builds, Distroless images, Container isolation</p>
                    </div>

                    <div className="p-3 rounded-xl bg-[var(--surface-subtle)] border border-[var(--border)] hover:border-indigo-500/30 transition-colors">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <SiKubernetes className="text-[#326CE5] shrink-0" size={16} />
                        <span>Kubernetes (K8s)</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] mt-1 pl-6">Điều phối cụm, Scaling pods tự động, Ingress reverse proxy</p>
                    </div>

                    <div className="p-3 rounded-xl bg-[var(--surface-subtle)] border border-[var(--border)] hover:border-indigo-500/30 transition-colors">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <SiLinux className="text-[var(--text)] shrink-0" size={16} />
                        <span>Linux &amp; CI/CD Pipelines</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] mt-1 pl-6">Kernel internals, epoll, System calls, GitHub Actions workflow</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stack 3: Mobile & Web */}
              <div className="relative rounded-3xl border border-fuchsia-500/30 bg-gradient-to-b from-fuchsia-500/[0.04] via-[var(--surface)] to-[var(--surface)] p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-fuchsia-500/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 flex items-center justify-center border border-fuchsia-500/20 shadow-xs">
                      <Smartphone size={22} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-[var(--text)] group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">
                        Mobile &amp; Deep Web
                      </h3>
                      <span className="text-[11px] font-mono text-[var(--dim)]">Cross-Platform UI &amp; Architecture</span>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <div className="p-3 rounded-xl bg-[var(--surface-subtle)] border border-[var(--border)] hover:border-fuchsia-500/30 transition-colors">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <SiFlutter className="text-[#02569B] shrink-0" size={16} />
                        <span>Flutter &amp; Dart</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] mt-1 pl-6">60 FPS native render, Drift SQLite cache, Clean Architecture</p>
                    </div>

                    <div className="p-3 rounded-xl bg-[var(--surface-subtle)] border border-[var(--border)] hover:border-fuchsia-500/30 transition-colors">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <span className="font-bold text-blue-500 text-xs shrink-0">TS</span>
                        <span>TypeScript &amp; SvelteKit</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] mt-1 pl-6">Giao diện phản ứng tốc độ cao, Svelte 5 Runes, Tailwind</p>
                    </div>

                    <div className="p-3 rounded-xl bg-[var(--surface-subtle)] border border-[var(--border)] hover:border-fuchsia-500/30 transition-colors">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--text)]">
                        <span className="font-bold text-purple-500 text-xs shrink-0">Web</span>
                        <span>Deep Web Architecture</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] mt-1 pl-6">SSR/SSG, DOM performance tuning, Turborepo Monorepo</p>
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
        <section id="projects" className="py-20 border-b border-[var(--border)]">
          <div className="max-w-4xl mx-auto px-6">
            
            <div className="mb-10">
              <span className="text-xs font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest font-semibold">
                OTHER SELECTED WORKS
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text)] mt-1">
                Các Sản Phẩm Tiêu Biểu Khác
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Project 2: Hallow Super-App */}
              <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-sm">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-medium">
                      Mobile &amp; Desktop
                    </span>
                    <span className="text-xs text-[var(--dim)] font-mono">2024</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-[var(--text)] group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Hallow — Super-App Cá Nhân
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                    Super-app ghi chú, tài chính và quản lý công việc trên Flutter. SQLite Drift cache, điều hướng 5-tab shell routing, đạt chuẩn 60 FPS phản hồi mượt mà không phụ thuộc mạng.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['Flutter', 'Dart', 'Drift SQLite', 'Clean Architecture'].map(t => (
                      <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--surface-subtle)] text-[var(--dim)] border border-[var(--border)]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-[var(--border)] flex items-center justify-between">
                  <a 
                    href="https://github.com/hnamhocit/hallow" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text)] hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    <span>Xem mã nguồn</span>
                    <ExternalLink size={13} />
                  </a>
                  <span className="text-xs font-mono text-[var(--dim)]">60 FPS</span>
                </div>
              </div>

              {/* Project 3: HNSync Engine */}
              <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-sm">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium">
                      Backend Daemon
                    </span>
                    <span className="text-xs text-[var(--dim)] font-mono">2024</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-[var(--text)] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    HNSync — Realtime Stream Engine
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                    Hệ thống Golang đồng bộ sự kiện theo thời gian thực. Quản lý pool WebSocket đồng thời, tích hợp PostgreSQL và container hóa Docker, hoạt động bền bỉ với uptime 99.99%.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['Golang', 'WebSocket', 'PostgreSQL', 'Docker'].map(t => (
                      <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--surface-subtle)] text-[var(--dim)] border border-[var(--border)]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-[var(--border)] flex items-center justify-between">
                  <a 
                    href="https://github.com/hnamhocit" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text)] hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <span>Xem mã nguồn</span>
                    <ExternalLink size={13} />
                  </a>
                  <span className="text-xs font-mono text-[var(--dim)]">Uptime 99.99%</span>
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
            
            <div className="w-12 h-12 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4 border border-purple-500/20">
              <Sparkles size={22} />
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text)] mb-3">
              Cùng Tạo Nên Những Điều Ý Nghĩa
            </h2>

            <p className="text-xs sm:text-sm text-[var(--muted)] max-w-lg mb-8 leading-relaxed">
              Tôi luôn trân trọng mọi cơ hội học hỏi, thử thách và đồng hành cùng các đội ngũ kỹ thuật. Dù bạn có một vị trí công việc (Junior / Remote Fullstack) hay chỉ đơn giản là muốn trò chuyện về hệ thống, tôi luôn sẵn lòng phản hồi nhanh nhất có thể.
            </p>

            {/* Direct Email Action Button */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center mb-8">
              <a
                href="mailto:hnamhocit@gmail.com"
                className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm hover:brightness-110 active:scale-95 transition-all shadow-md shadow-purple-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail size={16} />
                <span>Gửi Email: hnamhocit@gmail.com</span>
              </a>

              <a
                href="https://github.com/hnamhocit"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] font-medium text-sm hover:border-purple-500 transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <FaGithub size={16} />
                <span>GitHub @hnamhocit</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 text-[var(--muted)] text-xs font-medium">
              <a 
                href="mailto:hnamhocit@gmail.com" 
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1.5"
              >
                <Mail size={14} />
                <span>Email trực tiếp</span>
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
      <footer className="border-t border-[var(--border)] py-8 text-center text-xs text-[var(--dim)] font-mono">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Nguyễn Hoàng Nam (hnamhocit).</span>
          <span className="flex items-center gap-1 text-[var(--muted)]">
            Tạo nên bằng sự kiên định và tình yêu với kỹ thuật.
          </span>
        </div>
      </footer>

    </div>
  );
}
