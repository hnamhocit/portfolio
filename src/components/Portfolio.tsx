import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Mail, Smartphone, Bot, Globe, BadgeCheck, TrendingUp, Compass, Layers, Server } from 'lucide-react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { SiFlutter, SiDart, SiGo, SiPostgresql, SiDocker, SiRust, SiZig, SiLinux, SiKubernetes } from 'react-icons/si';
import ParticleBackground from './ParticleBackground';
import VirtualPets from './VirtualPets';

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle('dark', nextDark);
    localStorage.setItem('theme', nextDark ? 'dark' : 'light');
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-[var(--border)]/50 bg-[var(--bg)]/70 backdrop-blur-md transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex items-center justify-between py-4 md:py-5">
            <div className="flex items-center gap-1">
              <span className="font-black font-display text-2xl tracking-tight text-[var(--text)]">
                hnam<span className="text-[var(--pink)]">hocit</span>
              </span>
            </div>
            <div className="flex items-center gap-8 text-base font-medium text-[var(--muted)]">
              <a href="#about" className="hover:text-[var(--pink)] transition-colors hidden sm:inline-block">About</a>
              <a href="#projects" className="hover:text-[var(--pink)] transition-colors hidden sm:inline-block">Projects</a>
              <a href="#skills" className="hover:text-[var(--pink)] transition-colors hidden sm:inline-block">Skills</a>
              <a href="/cv.pdf" target="_blank" className="hover:text-[var(--pink)] transition-colors hidden sm:inline-block">CV</a>
              <button onClick={toggleTheme} className="p-2 hover:bg-[var(--surface)] hover:text-[var(--text)] rounded-full transition-colors text-[var(--text)]" aria-label="Toggle Theme">
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative pt-24 pb-32 flex flex-col items-center justify-center text-center overflow-hidden min-h-[100vh]"
        >
          {/* CSS Ambient Glows & Starfield */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[var(--bg)]">
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--violet)] rounded-full blur-[120px] opacity-10 translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--pink)] rounded-full blur-[120px] opacity-[0.08] -translate-x-1/3 translate-y-1/3" />
            
            {/* CSS Starfield */}
            <div 
              className="absolute inset-0 opacity-25" 
              style={{
                backgroundImage: `
                  radial-gradient(1.5px 1.5px at 20px 30px, white, rgba(0,0,0,0)),
                  radial-gradient(1.5px 1.5px at 40px 70px, white, rgba(0,0,0,0)),
                  radial-gradient(2px 2px at 50px 160px, white, rgba(0,0,0,0)),
                  radial-gradient(1.5px 1.5px at 90px 40px, white, rgba(0,0,0,0)),
                  radial-gradient(2px 2px at 130px 80px, white, rgba(0,0,0,0)),
                  radial-gradient(1.5px 1.5px at 160px 120px, white, rgba(0,0,0,0)),
                  radial-gradient(2px 2px at 200px 50px, white, rgba(0,0,0,0)),
                  radial-gradient(1.5px 1.5px at 250px 180px, white, rgba(0,0,0,0))
                `,
                backgroundRepeat: 'repeat',
                backgroundSize: '300px 300px'
              }}
            />
          </div>
          
          <div className="max-w-4xl mx-auto px-6 flex flex-col items-center relative z-10">
            
            <img 
              src="/avatar.png" 
              alt="Hoàng Nam" 
              className="w-28 h-28 rounded-[24px] object-cover mb-8 shadow-lg border-2 border-[var(--surface2)] bg-[var(--bg)]" 
            />

            <span className="font-mono text-[var(--pink)] uppercase tracking-wider text-sm font-bold mb-5">
              XIN CHÀO, TÔI LÀ
            </span>
            
            <h1 className="text-6xl md:text-[6rem] font-display font-black tracking-[-0.03em] leading-[1.1] text-[var(--text)] mb-4">
              Hoàng Nam<span className="text-[var(--pink)]">.</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[var(--text)]">
              Fullstack & Mobile <span className="bg-gradient-to-r from-[var(--pink)] to-[var(--violet)] bg-clip-text text-transparent">Developer</span>
            </h2>

            <p className="text-lg md:text-xl max-w-2xl font-medium mt-10 text-[var(--muted)] mx-auto leading-relaxed italic">
              "Tôi tương đối thất vọng với thế giới này, nhưng code thì khác."
            </p>
            
            <div className="flex flex-wrap gap-4 mt-12 justify-center items-center">
              <a href="#projects" className="bg-[var(--pink)] text-white px-8 py-4 rounded-full font-sans font-bold hover:brightness-110 transition-all text-[17px] shadow-sm">
                Xem dự án
              </a>
              <a href="/cv.pdf" target="_blank" rel="noreferrer" className="border border-[var(--border)] text-[var(--text)] px-8 py-4 rounded-full font-sans font-bold hover:border-[var(--pink)] transition-colors text-[17px] flex items-center gap-2 bg-[var(--surface)] backdrop-blur-sm">
                Xem CV ↗
              </a>
            </div>
            
            <div className="mt-10 inline-flex items-center gap-3 text-sm font-mono text-[var(--text)] border border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-md px-5 py-2.5 rounded-full w-fit mx-auto shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--pink)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--pink)]"></span>
              </span>
              open to junior remote
            </div>
            
          </div>
        </motion.section>

        {/* About */}
        <section id="about" className="py-24 relative overflow-hidden bg-[var(--surface2)]">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <h3 className="text-3xl md:text-4xl font-display font-black mb-10 flex flex-col gap-2">
              <span className="text-[var(--pink)] text-sm font-mono tracking-widest font-normal uppercase">01 · About</span> 
              Câu chuyện của tôi
            </h3>
            <div className="border border-[var(--border)] p-8 md:p-10 rounded-2xl text-[var(--text)] text-base md:text-lg leading-[1.8] bg-[var(--surface)] shadow-sm">
              <p className="mb-6">
                Tôi là Hoàng Nam, một sinh viên 19 tuổi với đam mê mãnh liệt dành cho <strong className="text-[var(--cyan)] font-bold">kỹ thuật phần mềm</strong>, đặc biệt là tầng <strong className="text-[var(--pink)] font-bold">low-level</strong> và <strong className="bg-[var(--yellow)]/15 text-[var(--yellow)] px-2 py-0.5 rounded-md font-bold">tối ưu hiệu năng</strong>.
              </p>
              <p className="mb-6">
                Trong 2 năm qua, tôi đã xây dựng các dự án cá nhân từ một ứng dụng <strong className="bg-[var(--cyan)]/15 text-[var(--cyan)] px-2 py-0.5 rounded-md font-bold">local-first</strong> hoàn toàn offline (Hallow) đến các bot đồng bộ <strong className="text-[var(--pink)] font-bold">thời gian thực</strong> (HNSync). Tôi thích đào sâu tìm hiểu cách mọi thứ hoạt động bên dưới lớp vỏ bóng bẩy của framework.
              </p>
              <p>
                Hiện tại, tôi đang mở rộng bộ kỹ năng sang <strong className="text-[var(--pink)] font-bold">Golang</strong> và <strong className="text-[var(--violet)] font-bold">PostgreSQL</strong> để xây dựng các hệ thống backend vững chắc, đồng thời mày mò với <strong className="bg-[var(--cyan)]/15 text-[var(--cyan)] px-2 py-0.5 rounded-md font-bold">Zig</strong> và <strong className="bg-[#F97316]/15 text-[#F97316] px-2 py-0.5 rounded-md font-bold">Rust</strong> vào cuối tuần để thỏa mãn sự tò mò về <strong className="text-[var(--yellow)] font-bold">memory safety</strong> và hệ điều hành.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24 bg-[var(--bg)] relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <h3 className="text-3xl md:text-4xl font-display font-black mb-10 flex flex-col gap-2">
              <span className="text-[var(--pink)] text-sm font-mono tracking-widest font-normal uppercase">02 · Projects</span> 
              Dự án nổi bật
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              <ProjectCard 
                title="Hallow"
                type="PERSONAL"
                stack={['Flutter', 'appflowy', 'drift']}
                problem="note/task/budget phân mảnh 4-5 app, dữ liệu kẹt cloud."
                solution="super-app local-first, 5 tab go_router shell."
                result="1 codebase cross-platform, offline 100%, 60fps."
                bullets={["Kiến trúc local-first", "UI mượt mà, render tối ưu"]}
                repoLink="https://github.com/hnamhocit"
                imgId="hallow"
              />
              <ProjectCard 
                title="HNSync Bot"
                type="OPEN SOURCE"
                stack={['Go', 'WebSocket', 'PostgreSQL']}
                problem="đọc HN nhiều thiết bị mất bookmark, sync thủ công."
                solution="bot đồng bộ save/reading-list qua WebSocket."
                result="dùng cá nhân hằng ngày, uptime 99%+."
                bullets={["Xử lý real-time event", "Deploy độc lập bằng Docker"]}
                repoLink="https://github.com/hnamhocit"
                imgId="hnsync"
              />
              <ProjectCard 
                title="Portfolio"
                type="OPEN SOURCE"
                stack={['Astro', 'React', 'Tailwind']}
                problem="portfolio cũ nặng animation, không scan nhanh."
                solution="F-pattern, Laracasts vibe UI."
                result="Lighthouse > 95, trải nghiệm thân thiện."
                bullets={["Thiết kế màu sắc vui tươi", "Typography chuẩn mực"]}
                repoLink="https://github.com/hnamhocit/portfolio"
                imgId="portfolio"
              />
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-24 bg-[var(--surface2)] relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <h3 className="text-3xl md:text-4xl font-display font-black mb-12 flex flex-col gap-2">
              <span className="text-[var(--pink)] text-sm font-mono tracking-widest font-normal uppercase">03 · Skills</span> 
              Kỹ năng & Công cụ
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              <SkillCard 
                title="Thành thạo"
                icon={<BadgeCheck size={20} />}
                items={[
                  { name: 'Flutter', icon: <SiFlutter /> },
                  { name: 'Dart', icon: <SiDart /> },
                  { name: 'Golang', icon: <SiGo /> },
                  { name: 'PostgreSQL', icon: <SiPostgresql /> }
                ]}
                colorVar="pink"
              />
              <SkillCard 
                title="Đang đào sâu"
                icon={<TrendingUp size={20} />}
                items={[
                  { name: 'Clean Architecture', icon: <Layers /> },
                  { name: 'Docker', icon: <SiDocker /> },
                  { name: 'REST / gRPC', icon: <Server /> }
                ]}
                colorVar="cyan"
              />
              <SkillCard 
                title="Đang khám phá"
                icon={<Compass size={20} />}
                items={[
                  { name: 'Rust', icon: <SiRust /> },
                  { name: 'Zig', icon: <SiZig /> },
                  { name: 'Linux internals', icon: <SiLinux /> },
                  { name: 'Kubernetes', icon: <SiKubernetes /> }
                ]}
                colorVar="yellow"
              />
            </div>
          </div>
        </section>

        {/* Career */}
        <motion.section 
          id="career"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
          className="py-24 scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-3xl md:text-4xl font-display font-black mb-12 flex flex-col gap-2">
              <span className="text-[var(--pink)] text-sm font-mono tracking-widest font-normal uppercase">04 · Career</span> 
              Hành trình
            </h3>
            <div className="flex flex-col border-l border-[var(--border)] ml-3 md:ml-4">
              <div className="relative pl-8 pb-12 group">
                <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--pink)] ring-4 ring-[var(--bg)]" />
                <div className="font-mono text-[var(--pink)] text-sm mb-2 font-bold">2024 - nay</div>
                <div className="text-base md:text-[17px] text-[var(--text)]">Làm Hallow + freelance Flutter nhỏ</div>
              </div>
              <div className="relative pl-8 pb-12 group">
                <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--cyan)] ring-4 ring-[var(--bg)]" />
                <div className="font-mono text-[var(--cyan)] text-sm mb-2 font-bold">2022 - 2024</div>
                <div className="text-base md:text-[17px] text-[var(--text)]">Tự học thuật toán (Dijkstra, Prim, graph) + dự án cá nhân</div>
              </div>
              <div className="relative pl-8 group">
                <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--yellow)] ring-4 ring-[var(--bg)]" />
                <div className="font-mono text-[var(--yellow)] text-sm mb-2 font-bold">2020 - nay</div>
                <div className="text-base md:text-[17px] text-[var(--text)]">Sinh viên CNTT, đào sâu low-level cuối tuần</div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-[var(--muted)] font-medium">
          <div>Built with ☕ & sự tò mò — © {new Date().getFullYear()} Nam</div>
          <div className="flex gap-6">
            <a href="mailto:hnamhocit@gmail.com" aria-label="Email" className="hover:text-[var(--pink)] transition-colors"><Mail size={22} /></a>
            <a href="https://github.com/hnamhocit" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white transition-colors"><FaGithub size={20} /></a>
            <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[var(--cyan)] transition-colors"><FaLinkedin size={20} /></a>
            <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-[var(--violet)] transition-colors"><FaFacebook size={20} /></a>
          </div>
        </div>
      </footer>
      <VirtualPets />
    </div>
  );
}

const getTechColor = (tech: string) => {
  const t = tech.toLowerCase();
  if (t.includes('flutter') || t.includes('docker')) return 'text-[var(--cyan)] bg-[var(--cyan)]/10 border-[var(--cyan)]/20';
  if (t.includes('go') || t.includes('appflowy')) return 'text-[var(--pink)] bg-[var(--pink)]/10 border-[var(--pink)]/20';
  if (t.includes('postgres') || t.includes('drift')) return 'text-[var(--violet)] bg-[var(--violet)]/10 border-[var(--violet)]/20';
  if (t.includes('astro') || t.includes('react')) return 'text-[var(--yellow)] bg-[var(--yellow)]/10 border-[var(--yellow)]/20';
  return 'text-[var(--muted)] bg-[var(--surface2)] border-[var(--border)]';
};

function SkillCard({ title, items, icon, colorVar }: any) {
  return (
    <div className={`p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--${colorVar})]/50 hover:-translate-y-1 transition-all duration-300 shadow-sm group flex flex-col h-full`}>
      <div className={`w-12 h-12 rounded-xl bg-[var(--${colorVar})]/10 text-[var(--${colorVar})] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
        {icon}
      </div>
      <h4 className="text-xl font-display font-bold mb-6 text-[var(--text)]">{title}</h4>
      <ul className="space-y-3 flex-grow">
        {items.map((item: any, i: number) => (
          <li key={i} className="flex items-center gap-4 text-[var(--muted)] font-medium group-hover:text-[var(--text)] transition-colors duration-300 p-2 -mx-2 rounded-lg hover:bg-[var(--surface2)]/50 cursor-default">
            <div className={`text-[var(--${colorVar})] text-xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
              {item.icon}
            </div>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, type, stack, problem, solution, result, bullets, demoLink, repoLink, imgId }: any) {
  // Using placehold.co for an ultra-reliable, themed placeholder image
  const formattedTitle = title.replace(/\s+/g, '+');
  const fallbackImg = `https://placehold.co/800x450/161B2C/F65C8A?text=${formattedTitle}`;

  return (
    <div className="group flex flex-col h-full overflow-hidden transition-all duration-300">
      
      {/* Thumbnail */}
      <div className="w-full aspect-video rounded-2xl border border-[var(--border)] overflow-hidden bg-[var(--surface2)] relative flex-shrink-0 mb-6 shadow-sm group-hover:border-[var(--pink)]/50 group-hover:-translate-y-1 transition-all duration-300">
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[var(--yellow)]/15 text-[var(--yellow)] text-xs font-bold font-mono tracking-wider rounded-full backdrop-blur-sm border border-[var(--yellow)]/20 shadow-sm">
          {type}
        </div>
        <img 
          src={fallbackImg} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" 
        />
      </div>

      <div className="flex flex-col flex-grow px-1">
        <div className="flex flex-wrap gap-2 mb-5">
          {stack.map((s: string) => (
            <span key={s} className={`px-2.5 py-1 text-xs font-mono uppercase font-bold tracking-wider border rounded-full ${getTechColor(s)}`}>
              {s}
            </span>
          ))}
        </div>
        
        <h4 className="font-black font-display text-xl md:text-2xl mb-4 text-[var(--text)]">
          {title}
        </h4>
        
        <div className="flex flex-col gap-3 text-[15px] md:text-base text-[var(--muted)] mb-6 flex-grow leading-[1.7]">
          <p><strong className="text-[var(--text)] font-semibold">Bài toán:</strong> {problem}</p>
          <p><strong className="text-[var(--text)] font-semibold">Giải pháp:</strong> {solution}</p>
          <p className="text-[var(--text)]"><span className="text-[var(--pink)] font-bold mr-1">→</span>Kết quả: {result}</p>
        </div>
        
        <div className="flex gap-5 mt-auto pt-5 border-t border-[var(--border)] text-[15px] font-sans font-bold">
          {repoLink && (
            <a href={repoLink} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[var(--pink)] hover:brightness-110 transition-colors">
              Mã nguồn ↗
            </a>
          )}
          {demoLink ? (
            <a href={demoLink} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[var(--muted)] hover:text-[var(--text)] transition-colors">
              Demo ↗
            </a>
          ) : (
            <a href={repoLink} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[var(--muted)] hover:text-[var(--text)] transition-colors">
              Chi tiết ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
