import React from 'react';

const orbit1 = [
  { name: "Rust", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg", invert: true },
  { name: "TypeScript", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Zig", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zig/zig-original.svg" },
  { name: "Go", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" }
];

const orbit2 = [
  { name: "Docker", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Kubernetes", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
  { name: "PostgreSQL", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Kafka", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg", invert: true },
  { name: "Linux", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  { name: "Redis", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-plain.svg" }
];

const orbit3 = [
  { name: "React", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Node.js", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Flutter", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
  { name: "Tailwind", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "NestJS", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
  { name: "Dart", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
  { name: "Git", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" }
];

const OrbitRing = ({ size, items, ringClass, iconClass }: any) => {
  return (
    <div 
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ width: size, height: size }}
    >
      <div className={`w-full h-full border border-purple-500/20 rounded-full ${ringClass}`}>
        {items.map((item: any, index: number) => {
          const angle = (index / items.length) * 2 * Math.PI;
          const x = Math.cos(angle) * 50;
          const y = Math.sin(angle) * 50;
          return (
            <div 
              key={index} 
              className="absolute"
              style={{
                left: `${50 + x}%`,
                top: `${50 + y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div 
                className={`w-10 h-10 md:w-16 md:h-16 bg-[#0a0a0a] rounded-full p-2 md:p-3 border border-neutral-700 hover:border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.15)] flex items-center justify-center transition-colors cursor-pointer group ${iconClass}`} 
              >
                <img src={item.svg} alt={item.name} className={`w-full h-full object-contain group-hover:scale-110 transition-transform ${item.invert ? 'invert opacity-80' : ''}`} />
                <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono text-neutral-300 bg-black/80 px-2 py-1 rounded whitespace-nowrap pointer-events-none">
                  {item.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export function TechStack() {
  return (
    <section id="tech" className="py-20 md:py-32 bg-[#030014] relative border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white font-heading">
            Năng lực <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Cốt lõi</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
            Hộp đồ nghề kỹ sư của tôi. Thay vì chỉ học cú pháp, tôi tập trung hiểu sâu về bản chất và kiến trúc để luôn chọn đúng công cụ cho từng bài toán.
          </p>
        </div>
        
        {/* Orbit Animation Container */}
        <div className="relative w-full aspect-square max-w-[800px] mx-auto flex items-center justify-center min-h-[320px] md:min-h-[800px]">
          
          {/* Center Hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-28 md:h-28 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-full z-20 flex items-center justify-center shadow-[0_0_60px_rgba(147,51,234,0.6)] border-4 border-[#030014]">
            <span className="font-bold text-white text-sm md:text-xl font-heading tracking-wider">CORE</span>
          </div>

          {/* Glowing background behind hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-48 md:h-48 bg-purple-500/20 rounded-full blur-3xl z-0 pointer-events-none"></div>

          {/* Orbits */}
          <OrbitRing 
            size="45%" 
            items={orbit1} 
            ringClass="orbit-ring-1" 
            iconClass="orbit-icon-1" 
          />
          <OrbitRing 
            size="70%" 
            items={orbit2} 
            ringClass="orbit-ring-2" 
            iconClass="orbit-icon-2" 
          />
          <OrbitRing 
            size="95%" 
            items={orbit3} 
            ringClass="orbit-ring-3" 
            iconClass="orbit-icon-3" 
          />

        </div>
      </div>
    </section>
  );
}
