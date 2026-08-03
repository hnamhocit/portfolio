import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Code2, Activity, Server, Zap, Target, Lightbulb } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLanguage } from '@/store/useLanguage';
import { translations } from '@/i18n/translations';

gsap.registerPlugin(ScrollTrigger);



export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();
  const t = translations[lang].projects;

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
              start: "top 80%", 
              toggleActions: "play none none reverse" 
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="py-20 md:py-32 bg-[#050505] relative border-t border-neutral-900 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white flex items-center gap-4">
          <span className="w-12 h-[2px] bg-purple-500 hidden md:block"></span>
          {t.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">{t.highlight}</span>
        </h2>
        <p className="text-neutral-400 text-lg max-w-2xl md:ml-16">
          {t.desc}
        </p>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-24 md:gap-40">
          {t.list.map((project, i) => (
            <div key={i} className="project-panel w-full">
              
              <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-20 items-center w-full`}>
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl opacity-20 group-hover:opacity-40 transition duration-500 blur"></div>
                  <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 aspect-video shadow-2xl">
                    <div className="absolute inset-0 bg-neutral-950/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    <div className="absolute bottom-4 left-4 z-20 flex gap-2 flex-wrap">
                      {project.tags.map(tag => (
                        <Badge key={tag} className="bg-black/80 backdrop-blur-md border border-neutral-700/50 text-neutral-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="text-purple-400 font-mono text-sm mb-2 uppercase tracking-widest">{project.role}</div>
                  <h3 className="text-4xl font-bold text-white mb-6 font-heading tracking-tight">{project.title}</h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:bottom-1.5 before:w-[2px] before:bg-purple-500/50">
                      <h4 className="text-sm font-bold text-neutral-200 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4 text-purple-400" /> {t.problem}
                      </h4>
                      <p className="text-neutral-400 leading-relaxed text-base">{project.problem}</p>
                    </div>
                    
                    <div className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:bottom-1.5 before:w-[2px] before:bg-indigo-500/50">
                      <h4 className="text-sm font-bold text-neutral-200 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 text-indigo-400" /> {t.solution}
                      </h4>
                      <p className="text-neutral-400 leading-relaxed text-base">{project.solution}</p>
                    </div>
                  </div>

                  <div className="border-t border-b border-neutral-800/60 py-5 mb-8">
                    <h4 className="text-xs font-bold text-neutral-500 mb-4 flex items-center gap-2 uppercase tracking-widest font-mono">
                      // {t.impact}
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
                      <ExternalLink className="mr-2 h-4 w-4" /> {t.demo}
                    </Button>
                    <Button size="lg" variant="outline" className="border-neutral-700 text-white bg-transparent hover:bg-neutral-900 transition-all rounded-md px-8 w-full sm:w-auto">
                      <Code2 className="mr-2 h-4 w-4" /> {t.source}
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
