import React from 'react';
import { GridScan } from './GridScan';
import { Button } from './ui/button';
import { Code2, Briefcase, Mail, FileText, ChevronRight } from 'lucide-react';

export function Hero() {
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
        <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-300 backdrop-blur-xl mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2 animate-pulse"></span>
          Đang tìm kiếm cơ hội mới
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
          Chào bạn, tôi là <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400">hnamhocit</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-neutral-300 mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          Kỹ sư Fullstack / Hệ thống
        </h2>
        
        <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 leading-relaxed">
          Xây dựng hạ tầng mạnh mẽ, mở rộng linh hoạt và các ứng dụng đa nền tảng mượt mà. Biến những bài toán kiến trúc phức tạp thành các giải pháp tinh tế và tối ưu hiệu năng.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white rounded-md px-8 h-12 shadow-[0_0_20px_-5px_rgba(168,85,247,0.5)] transition-all hover:scale-105 cursor-pointer">
            Xem Dự án <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-md px-8 h-12 border-neutral-700 bg-neutral-900/50 hover:bg-neutral-800 backdrop-blur-xl text-white transition-all hover:scale-105 cursor-pointer">
            <FileText className="mr-2 h-4 w-4" /> Tải CV
          </Button>
          
          <div className="flex gap-3 ml-2">
            <a href="#" className="p-3 rounded-md bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-800 hover:text-purple-400 hover:border-purple-500/50 transition-all text-neutral-400 backdrop-blur-xl">
              <Code2 className="h-5 w-5" />
            </a>
            <a href="#" className="p-3 rounded-md bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-800 hover:text-purple-400 hover:border-purple-500/50 transition-all text-neutral-400 backdrop-blur-xl">
              <Briefcase className="h-5 w-5" />
            </a>
            <a href="#" className="p-3 rounded-md bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-800 hover:text-purple-400 hover:border-purple-500/50 transition-all text-neutral-400 backdrop-blur-xl">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
