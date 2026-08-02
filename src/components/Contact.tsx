import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Timeline for revealing contact elements
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });

      tl.from('.contact-title', { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" })
        .from('.contact-desc', { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
        .from('.contact-btn', { scale: 0.8, opacity: 0, duration: 0.5, stagger: 0.2, ease: "back.out(1.5)" }, "-=0.2")
        .from('.contact-footer', { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.1");

      // Slowly rotating background aurora
      gsap.to('.contact-aurora', {
        rotate: 360,
        scale: 1.1,
        duration: 25,
        repeat: -1,
        yoyo: true,
        ease: "none"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={containerRef} className="py-20 md:py-32 bg-[#02000a] relative border-t border-neutral-900 overflow-hidden">
      {/* Massive animated glowing aurora in background */}
      <div className="contact-aurora absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[900px] h-[90vw] max-h-[900px] bg-gradient-to-tr from-purple-900/20 via-fuchsia-900/10 to-indigo-900/20 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="contact-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 text-white font-heading tracking-tight leading-tight">
          Cùng Nhau Tạo Nên <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-400 inline-block mt-2 sm:mt-0">Điều Kỳ Diệu</span>
        </h2>
        
        <p className="contact-desc text-neutral-400 text-base md:text-lg lg:text-xl mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Tôi luôn mở cửa đón nhận các cơ hội mới. Bất kể bạn có câu hỏi hay chỉ muốn chào một tiếng, tôi sẽ cố gắng phản hồi sớm nhất có thể!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <Button size="lg" className="contact-btn relative group bg-white text-black hover:bg-neutral-200 rounded-full px-8 md:px-10 h-12 md:h-14 text-base md:text-lg font-medium transition-all w-full sm:w-auto overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            <span className="relative z-10">Gửi Lời Chào</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </Button>
          
          <Button size="lg" variant="outline" className="contact-btn relative group rounded-full px-8 md:px-10 h-12 md:h-14 border-neutral-700 bg-[#0a0a0a] text-white hover:border-fuchsia-500 hover:bg-neutral-900 text-base md:text-lg font-medium transition-all w-full sm:w-auto overflow-hidden shadow-[0_0_0_rgba(217,70,239,0)] hover:shadow-[0_0_20px_rgba(217,70,239,0.3)]">
            <span className="relative z-10">Xem Hồ Sơ</span>
          </Button>
        </div>
        
        <div className="contact-footer mt-20 md:mt-32 pt-8 border-t border-neutral-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-500 font-mono text-xs md:text-sm text-center md:text-left">© {new Date().getFullYear()} Nam. Đã đăng ký Bản quyền.</p>
          <div className="flex gap-4 md:gap-6">
            {[
              { name: 'Facebook', url: 'https://facebook.com/hnamhocit' },
              { name: 'GitHub', url: 'https://github.com/hnamhocit' },
              { name: 'LinkedIn', url: 'https://linkedin.com/in/hnamhocit' }
            ].map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-fuchsia-400 transition-colors hover:-translate-y-1 transform duration-300">
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
