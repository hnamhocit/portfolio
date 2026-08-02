import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Code2, Activity, Server, Zap, Target, Lightbulb } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "High-Frequency Trading Engine",
    role: "Kỹ sư Hệ thống Lõi",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200",
    problem: "Hệ thống khớp lệnh cũ gặp tình trạng nghẽn cổ chai (latency spikes) khi thị trường biến động mạnh, dẫn đến trượt giá của trader.",
    solution: "Thiết kế lại toàn bộ matching engine bằng ngôn ngữ Rust. Ứng dụng cấu trúc dữ liệu Ring Buffer để loại bỏ hoàn toàn cơ chế khóa (lock-free concurrency) và dùng ZeroMQ để giao tiếp liên tiến trình (IPC).",
    results: [
      { icon: <Zap className="w-4 h-4 text-yellow-400" />, text: "Giảm độ trễ p99 xuống dưới 12µs" },
      { icon: <Activity className="w-4 h-4 text-green-400" />, text: "Khớp lệnh liên tục 100k+ orders/giây" }
    ],
    tags: ["Rust", "ZeroMQ", "Docker", "AWS"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Global E-Commerce Microservices",
    role: "Kiến trúc sư Backend",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
    problem: "Kiến trúc Monolith nguyên khối không thể chịu tải vào các dịp Black Friday, gây ra hiệu ứng domino sập toàn bộ database.",
    solution: "Chuyển đổi hoàn toàn sang kiến trúc Microservices hướng sự kiện (Event-driven) với NestJS và Kafka. Triển khai mô hình CQRS để tách biệt logic đọc/ghi.",
    results: [
      { icon: <Server className="w-4 h-4 text-purple-400" />, text: "Đạt mốc 0 downtime trong đỉnh tải 50M+ requests" },
      { icon: <Activity className="w-4 h-4 text-green-400" />, text: "Giảm 80% độ trễ truy vấn dữ liệu" }
    ],
    tags: ["NestJS", "Kafka", "PostgreSQL", "Kubernetes"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "FinTech Mobile App",
    role: "Kỹ sư Mobile (Lead)",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
    problem: "Việc duy trì hai source code native (iOS và Android) riêng biệt làm chậm tiến độ ra mắt tính năng và gây ra lỗi giao diện không đồng nhất.",
    solution: "Viết lại toàn bộ ứng dụng bằng Flutter với một Design System đồng nhất. Tích hợp xác thực sinh trắc học phức tạp và mã hóa dữ liệu cục bộ.",
    results: [
      { icon: <Zap className="w-4 h-4 text-yellow-400" />, text: "Giao diện mượt mà 60fps trên mọi thiết bị" },
      { icon: <Activity className="w-4 h-4 text-green-400" />, text: "Giảm 50% thời gian ra mắt tính năng mới" }
    ],
    tags: ["Flutter", "Dart", "Firebase", "WebSockets"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Distributed Web Crawler",
    role: "Backend Engineer",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
    problem: "Hệ thống thu thập dữ liệu cũ quá chậm chạp và ngốn tài nguyên, không đáp ứng được yêu cầu cập nhật hàng triệu bản ghi theo thời gian thực mỗi ngày.",
    solution: "Viết lại toàn bộ hệ thống bằng Golang. Tận dụng goroutines để crawl song song hàng trăm ngàn URL, kết hợp Redis phân tán hàng đợi và ElasticSearch để index dữ liệu tốc độ cao.",
    results: [
      { icon: <Zap className="w-4 h-4 text-yellow-400" />, text: "Tăng tốc độ thu thập dữ liệu lên gấp 20 lần" },
      { icon: <Activity className="w-4 h-4 text-green-400" />, text: "Giảm 70% chi phí server nhờ tối ưu hóa RAM/CPU" }
    ],
    tags: ["Golang", "ElasticSearch", "Redis", "gRPC"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Web3 DeFi Dashboard",
    role: "Frontend Lead",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f4fec07?auto=format&fit=crop&q=80&w=1200",
    problem: "Người dùng gặp khó khăn khi theo dõi tài sản phi tập trung của họ trên nhiều blockchain khác nhau vì giao diện quá phân mảnh.",
    solution: "Phát triển một Dashboard tổng hợp, tương thích đa thiết bị bằng React và Ethers.js, tích hợp cùng lúc 5 blockchain thông qua các proxy RPC tự xây dựng.",
    results: [
      { icon: <Server className="w-4 h-4 text-purple-400" />, text: "Hỗ trợ mượt mà khối lượng giao dịch $50M+/ngày" },
      { icon: <Activity className="w-4 h-4 text-green-400" />, text: "Tăng 300% lượng người dùng mới chỉ trong 2 tháng" }
    ],
    tags: ["React", "Ethers.js", "Solidity", "TailwindCSS"],
    demoLink: "#",
    githubLink: "#"
  }
];

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.project-panel');
      
      panels.forEach((panel: any, i) => {
        const isEven = i % 2 === 0;
        gsap.fromTo(panel, 
          { 
            opacity: 0, 
            x: isEven ? -100 : 100 
          }, 
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 80%", // Trigger when the top of the element hits 80% down the viewport
              toggleActions: "play none none reverse" // Play on enter, reverse on leave back up
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="py-32 bg-[#050505] relative border-t border-neutral-900">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white flex items-center gap-4">
          <span className="w-12 h-[2px] bg-purple-500 hidden md:block"></span>
          Dự án <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Tiêu biểu</span>
        </h2>
        <p className="text-neutral-400 text-lg max-w-2xl md:ml-16">
          Phân tích chuyên sâu về các bài toán kỹ thuật phức tạp mà tôi đã giải quyết, tập trung vào khả năng mở rộng (scalability), hiệu suất và kiến trúc hệ thống.
        </p>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-40">
          {projects.map((project, i) => (
            <div key={i} className="project-panel w-full">
              
              <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center w-full`}>
                {/* Image Column */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl opacity-20 group-hover:opacity-40 transition duration-500 blur"></div>
                  <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 aspect-video shadow-2xl">
                    <div className="absolute inset-0 bg-neutral-950/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Floating Tech Stack */}
                    <div className="absolute bottom-4 left-4 z-20 flex gap-2 flex-wrap">
                      {project.tags.map(tag => (
                        <Badge key={tag} className="bg-black/80 backdrop-blur-md border border-neutral-700/50 text-neutral-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Content Column */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="text-purple-400 font-mono text-sm mb-2 uppercase tracking-widest">{project.role}</div>
                  <h3 className="text-4xl font-bold text-white mb-6 font-heading tracking-tight">{project.title}</h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:bottom-1.5 before:w-[2px] before:bg-purple-500/50">
                      <h4 className="text-sm font-bold text-neutral-200 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4 text-purple-400" /> Bài Toán
                      </h4>
                      <p className="text-neutral-400 leading-relaxed text-base">{project.problem}</p>
                    </div>
                    
                    <div className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:bottom-1.5 before:w-[2px] before:bg-indigo-500/50">
                      <h4 className="text-sm font-bold text-neutral-200 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 text-indigo-400" /> Giải Pháp
                      </h4>
                      <p className="text-neutral-400 leading-relaxed text-base">{project.solution}</p>
                    </div>
                  </div>

                  <div className="border-t border-b border-neutral-800/60 py-5 mb-8">
                    <h4 className="text-xs font-bold text-neutral-500 mb-4 flex items-center gap-2 uppercase tracking-widest font-mono">
                      // Tac_dong_Va_Ket_qua
                    </h4>
                    <ul className="space-y-3">
                      {project.results.map((res, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-neutral-300">
                          <span className="text-neutral-600 font-mono mt-0.5">{`>`}</span>
                          <span className="font-mono text-sm leading-relaxed">{res.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-4">
                    <Button size="lg" className="bg-white text-black hover:bg-neutral-200 transition-all font-medium rounded-md px-8 w-full sm:w-auto">
                      <ExternalLink className="mr-2 h-4 w-4" /> Xem Demo
                    </Button>
                    <Button size="lg" variant="outline" className="border-neutral-700 text-white bg-transparent hover:bg-neutral-900 transition-all rounded-md px-8 w-full sm:w-auto">
                      <Code2 className="mr-2 h-4 w-4" /> Mã Nguồn
                    </Button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
