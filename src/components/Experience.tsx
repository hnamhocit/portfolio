import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/store/useLanguage';
import { translations } from '@/i18n/translations';
import { Briefcase, GraduationCap, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();
  const t = translations[lang].experience;

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
    <section id="experience" ref={containerRef} className="py-20 md:py-32 bg-[#02000a] relative border-t border-neutral-900 overflow-hidden">
      {/* Aurora Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 md:mb-24 text-white text-center font-heading">
          {t.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">{t.highlight}</span>
        </h2>
        
        <div className="relative ml-4 md:ml-8 pb-12">
          {/* Background Track Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-neutral-800 rounded-full -translate-x-1/2"></div>
          
          {/* Glowing Progress Line */}
          <div 
            ref={lineRef}
            className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-purple-500 via-indigo-500 to-fuchsia-500 rounded-full -translate-x-1/2 origin-top shadow-[0_0_20px_rgba(168,85,247,0.8)] z-0"
          ></div>

          {t.timeline.map((item, index) => (
            <div key={index} className="timeline-item relative pl-10 md:pl-16 mb-16 last:mb-0 group">
              
              {/* Timeline Icon / Dot Wrapper (to prevent GSAP from overwriting transform) */}
              <div className="absolute left-0 top-0.5 md:top-1 -translate-x-1/2 z-10">
                <div className="timeline-dot bg-[#0a0a0a] p-2 md:p-3 border-[1.5px] md:border-2 border-neutral-700 rounded-xl text-neutral-400 group-hover:border-purple-500 group-hover:text-purple-400 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {item.type === 'work' ? <Briefcase className="w-4 h-4 md:w-5 md:h-5 relative z-10" /> : <GraduationCap className="w-4 h-4 md:w-5 md:h-5 relative z-10" />}
                </div>
              </div>
              
              {/* Content Card */}
              <div className="timeline-content bg-[#050505]/80 backdrop-blur-xl p-5 md:p-8 rounded-2xl border border-neutral-800/80 hover:border-purple-500/30 transition-colors duration-500 shadow-xl group-hover:shadow-[0_0_40px_rgba(168,85,247,0.05)]">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6 gap-2">
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

