import React from 'react';
import { GridScan } from './GridScan';
import { Button } from './ui/button';
import { FileText, ChevronRight } from 'lucide-react';
import { useLanguage, initLanguage } from '@/store/useLanguage';
import { translations } from '@/i18n/translations';

export function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  React.useEffect(() => {
    initLanguage();
  }, []);

  return (
    <div className="sticky top-0 z-0 w-full h-screen overflow-hidden bg-[#030014] text-white flex flex-col items-center justify-center">
      {/* Background Component */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <GridScan
            sensitivity={0.55}
            lineThickness={1}
            linesColor="#2F293A"
            gridScale={0.1}
            scanColor="#FF9FFC"
            scanOpacity={0.4}
            enablePost={true}
            bloomIntensity={0.6}
            chromaticAberration={0.002}
            noiseIntensity={0.01}
            lineJitter={0.1}
            scanGlow={0.5}
            scanSoftness={2}
            enableWebcam={false}
            showPreview={false}
          />
        </div>
      </div>
      
      {/* Overlay Content */}
      <div className="z-10 relative flex flex-col items-center justify-center px-4 text-center max-w-4xl mx-auto mt-[-10vh]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm md:text-base mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          {t.status}
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
          {t.greeting} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400">hnamhocit</span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-neutral-300 mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          {t.role}
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl text-neutral-400 mb-10 md:mb-12 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 leading-relaxed px-2">
          {t.desc}
        </p>
        
        <div className="flex flex-wrap gap-4 md:gap-6 justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500 mt-4">
          <Button 
            size="lg" 
            className="group relative bg-white text-black hover:bg-neutral-200 rounded-full px-10 h-14 text-lg font-medium transition-all hover:scale-105 cursor-pointer overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10 flex items-center">
              {t.viewProjects} 
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </Button>

          <Button 
            size="lg" 
            variant="outline" 
            className="relative group rounded-full px-10 h-14 border-neutral-700 bg-[#0a0a0a] text-white hover:border-fuchsia-500 hover:bg-neutral-900 text-lg font-medium transition-all hover:scale-105 cursor-pointer overflow-hidden shadow-[0_0_0_rgba(217,70,239,0)] hover:shadow-[0_0_30px_rgba(217,70,239,0.3)]"
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10 flex items-center">
              <FileText className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" /> {t.downloadCV}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </div>
      </div>
    </div>
  );
}
