import React, { useEffect, useRef } from 'react';
import { Briefcase, GraduationCap, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  {
    type: "work",
    period: "2023 - Hiện tại",
    role: "Kỹ sư Hệ thống Cao cấp",
    company: "FinTech Global",
    description: [
      "Thiết kế kiến trúc và triển khai hệ thống sổ cái phân đất bằng Rust và Kafka, giảm 40% thời gian xử lý giao dịch.",
      "Dẫn dắt quá trình chuyển đổi hệ thống Monolith cũ sang kiến trúc Microservices với NestJS chạy trên Kubernetes, đạt uptime 99.99%.",
      "Đào tạo đội ngũ gồm 5 kỹ sư trẻ và thiết lập luồng CI/CD nội bộ bằng GitHub Actions cùng Docker."
    ]
  },
  {
    type: "work",
    period: "2020 - 2023",
    role: "Lập trình viên Fullstack",
    company: "TechNova Solutions",
    description: [
      "Xây dựng ứng dụng di động đa nền tảng hiệu năng cao bằng Flutter, đạt mốc 500k+ lượt tải ngay trong năm đầu tiên.",
      "Phát triển trang quản trị phân tích thời gian thực với React, TypeScript và WebSockets để giám sát thiết bị IoT.",
      "Tối ưu hóa các truy vấn phức tạp trên PostgreSQL, giảm thời gian xuất báo cáo trung bình từ 45 giây xuống dưới 3 giây."
    ]
  },
  {
    type: "education",
    period: "2016 - 2020",
    role: "Cử nhân Khoa học Máy tính",
    company: "Đại học Bách Khoa",
    description: [
      "Tốt nghiệp loại Giỏi (GPA: 3.8/4.0).",
      "Xuất bản bài báo nghiên cứu khoa học về 'Cấu trúc dữ liệu đồng thời không khóa (Lock-free) trong C++' tại Hội nghị Hệ thống Toàn quốc.",
      "Trưởng nhóm lập trình cho Đội tuyển Robot của trường, lập trình hệ thống dẫn đường tự động bằng C++ và ROS."
    ]
  }
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Glowing Line Progress Animation
      gsap.fromTo(lineRef.current, 
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 1, // Smooth scrubbing
          }
        }
      );

      // 2. Animate each timeline item (Dot + Content)
      const items = gsap.utils.toArray('.timeline-item');
      items.forEach((item: any, i) => {
        const dot = item.querySelector('.timeline-dot');
        const content = item.querySelector('.timeline-content');
        const listItems = item.querySelectorAll('li');

        // Initial states
        gsap.set(dot, { scale: 0, opacity: 0, rotation: -180 });
        gsap.set(content, { x: 50, opacity: 0 });
        gsap.set(listItems, { x: 20, opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        });

        // Pop in the dot with spin
        tl.to(dot, { scale: 1, opacity: 1, rotation: 0, duration: 0.6, ease: "back.out(1.7)" })
          // Slide in the main content card
          .to(content, { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, "-=0.3")
          // Stagger the bullet points
          .to(listItems, { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" }, "-=0.2");
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={containerRef} className="py-32 bg-[#050505] relative border-t border-neutral-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-24 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-heading">
            Kinh nghiệm & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Học vấn</span>
          </h2>
          <p className="text-neutral-400 text-lg">Hành trình sự nghiệp và nền tảng học thuật của tôi.</p>
        </div>
        
        <div className="relative ml-4 md:ml-8 pb-12">
          {/* Background Track Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-neutral-800 rounded-full -translate-x-1/2"></div>
          
          {/* Glowing Progress Line */}
          <div 
            ref={lineRef}
            className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-purple-500 via-indigo-500 to-fuchsia-500 rounded-full -translate-x-1/2 origin-top shadow-[0_0_20px_rgba(168,85,247,0.8)] z-0"
          ></div>

          {timeline.map((item, index) => (
            <div key={index} className="timeline-item mb-20 relative pl-16 md:pl-24 group">
              
              {/* Timeline Icon / Dot Wrapper (to prevent GSAP from overwriting transform) */}
              <div className="absolute left-0 top-1 -translate-x-1/2 z-10">
                <div className="timeline-dot bg-[#0a0a0a] p-3 border-2 border-neutral-700 rounded-xl text-neutral-400 group-hover:border-purple-500 group-hover:text-purple-400 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {item.type === 'work' ? <Briefcase className="w-5 h-5 relative z-10" /> : <GraduationCap className="w-5 h-5 relative z-10" />}
                </div>
              </div>
              
              {/* Content Card */}
              <div className="timeline-content bg-neutral-900/30 border border-neutral-800/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-neutral-900/60 transition-colors shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6">
                  <h3 className="text-2xl font-bold text-white font-heading">{item.role}</h3>
                  <span className="text-purple-400 font-mono text-sm hidden md:block opacity-50">—</span>
                  <span className="text-lg font-medium text-neutral-300 flex items-center gap-2">
                    {item.company}
                  </span>
                </div>
                
                <div className="text-sm font-mono text-purple-300/80 mb-8 px-4 py-1.5 bg-purple-500/10 inline-block rounded-md border border-purple-500/20 shadow-inner">
                  {item.period}
                </div>
                
                <ul className="space-y-4">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-neutral-400 flex items-start group/item">
                      <ChevronRight className="w-4 h-4 text-indigo-500/70 mr-3 mt-1 shrink-0 group-hover/item:text-indigo-400 group-hover/item:translate-x-1 transition-all" />
                      <span className="leading-relaxed group-hover/item:text-neutral-300 transition-colors">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

