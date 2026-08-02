import React from 'react';
import ScrollReveal from './ScrollReveal';

export function AboutStory() {
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const birthDate = new Date('2007-06-01');
  const ageDifMs = Date.now() - birthDate.getTime();
  const ageDate = new Date(ageDifMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  return (
    <section id="story" className="py-24 bg-[#030014] relative z-10 border-t border-purple-500/10 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.8)] font-sans">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Scattered Aurora Blobs across the entire section height */}
        <div className="absolute top-[5%] left-[5%] w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] aurora-gradient-1 aurora-blob-1"></div>
        <div className="absolute top-[20%] right-[5%] w-[70vw] h-[70vw] md:w-[45vw] md:h-[45vw] aurora-gradient-2 aurora-blob-2"></div>
        <div className="absolute top-[40%] left-[15%] w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] aurora-gradient-3 aurora-blob-3"></div>
        <div className="absolute top-[65%] right-[15%] w-[85vw] h-[85vw] md:w-[55vw] md:h-[55vw] aurora-gradient-1 aurora-blob-1"></div>
        <div className="absolute bottom-[5%] left-[25%] w-[75vw] h-[75vw] md:w-[50vw] md:h-[50vw] aurora-gradient-2 aurora-blob-2"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col gap-24">
        
        {/* Top Row: Avatar & Bio */}
        <div className="flex flex-col items-center gap-8">
          
          <div className="w-full flex flex-col items-center text-center">
            <div className="relative group mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full opacity-40 group-hover:opacity-75 transition duration-500 blur-md"></div>
              <img 
                src="https://avatars.githubusercontent.com/u/100000000?v=4" 
                alt="Nam's Avatar" 
                className="relative w-40 h-40 rounded-full object-cover border-2 border-neutral-800 z-10 filter grayscale group-hover:grayscale-0 transition-all duration-500"
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400"; }}
              />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight">Ng Hoang Nam (hnamhocit)</h2>
            <div className="flex flex-col gap-4">
              <p className="text-xl md:text-2xl text-neutral-300 font-medium font-heading">
                少年 他们都不看好你 但认输不是你的性格
              </p>
              <p className="text-lg md:text-xl text-neutral-500 italic">
                "Thiếu niên, họ đều không đánh giá cao cậu, nhưng nhận thua không phải là tính cách của cậu."
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <a href="#" className="p-3 rounded-full bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-800 hover:border-purple-500/50 transition-all text-neutral-400 hover:text-white group">
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a href="#" className="p-3 rounded-full bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-800 hover:border-purple-500/50 transition-all text-neutral-400 hover:text-white group">
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="p-3 rounded-full bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-800 hover:border-purple-500/50 transition-all text-neutral-400 hover:text-white group">
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Spacer to ensure the Avatar section scrolls away before the sticky text starts */}
        <div className="h-[50vh] w-full"></div>

        {/* Bottom Row: Scroll Reveal Story (Split into paragraphs, with highlights) */}
        <div className="w-full max-w-4xl mx-auto flex flex-col text-left text-neutral-200">
          
          <div className="scroll-trigger-wrapper h-[400vh] w-full relative">
            <div className="sticky top-1/2 -translate-y-1/2 w-full flex items-center justify-center">
              <ScrollReveal containerClassName="text-4xl md:text-5xl lg:text-6xl font-heading font-medium leading-relaxed md:leading-[1.6]">
                  {[
                    `Xin chào. | `,
                    <span key="name" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-bold">Tôi là Nam</span>,
                    `, | ${age} tuổi. | Niềm đam mê | với `,
                    <span key="mt" className="text-neutral-100">máy tính</span>,
                    ` | bắt đầu bùng cháy | từ mùa hè | năm lớp 10.`
                  ]}
              </ScrollReveal>
            </div>
          </div>

          <div className="scroll-trigger-wrapper h-[400vh] w-full relative">
            <div className="sticky top-1/2 -translate-y-1/2 w-full flex items-center justify-center">
              <ScrollReveal containerClassName="text-4xl md:text-5xl lg:text-6xl font-heading font-medium leading-relaxed md:leading-[1.6]">
                  {[
                    "Từ đó, | thế giới của tôi | xoay quanh | ",
                    <span key="lg" className="text-purple-400">logic</span>,
                    " | và | ",
                    <span key="kt" className="text-pink-400">kiến trúc hệ thống</span>,
                    ". | Tôi tập trung chuyên sâu vào ",
                    <span key="fs" className="text-indigo-400 font-bold">Fullstack</span>,
                    " | và ",
                    <span key="mb" className="text-blue-400 font-bold">Mobile Cross-platform</span>,
                    "."
                  ]}
              </ScrollReveal>
            </div>
          </div>

          <div className="scroll-trigger-wrapper h-[400vh] w-full relative">
            <div className="sticky top-1/2 -translate-y-1/2 w-full flex items-center justify-center">
              <ScrollReveal containerClassName="text-4xl md:text-5xl lg:text-6xl font-heading font-medium leading-relaxed md:leading-[1.6]">
                  {[
                    "Tại sao lại là | ",
                    <span key="zg" className="text-yellow-500 font-bold">Zig</span>,
                    ", | ",
                    <span key="rs" className="text-orange-500 font-bold">Rust</span>,
                    ", | và | ",
                    <span key="go" className="text-cyan-400 font-bold">Golang</span>,
                    "? | Vì tôi tin vào | ",
                    <span key="tn" className="text-emerald-400">tầm nhìn dài hạn</span>,
                    " | và | ",
                    <span key="tu" className="text-red-400">sự tối ưu tuyệt đối</span>,
                    ". | Mã nguồn của tôi | mang đậm | ",
                    <span key="vb" className="text-fuchsia-400 font-bold">"vibe"</span>,
                    " | của | ",
                    <span key="tr" className="text-yellow-400 font-bold">Tauri</span>,
                    " — | ",
                    <span key="tg" className="text-teal-300">tinh gọn</span>,
                    ", | ",
                    <span key="hn" className="text-green-400">hiệu năng cao</span>,
                    ", | và | ",
                    <span key="hd" className="text-blue-300">hiện đại</span>,
                    "."
                  ]}
              </ScrollReveal>
            </div>
          </div>

          <div className="scroll-trigger-wrapper h-[400vh] w-full relative">
            <div className="sticky top-1/2 -translate-y-1/2 w-full flex items-center justify-center">
              <ScrollReveal containerClassName="text-4xl md:text-5xl lg:text-6xl font-heading font-medium leading-relaxed md:leading-[1.6]">
                  {[
                    "Tôi không chỉ | ",
                    <span key="vc" className="text-blue-400">viết code</span>,
                    ". | Tôi kiến tạo | những giải pháp | ",
                    <span key="bn" className="text-neutral-100">bền vững</span>,
                    " | giải quyết | ",
                    <span key="bt" className="text-rose-400">bài toán thực tế</span>,
                    ", | và | vượt qua giới hạn | của | sự trì trệ."
                  ]}
              </ScrollReveal>
            </div>
          </div>

        </div>

        {/* Tech Stack Highlights with SVG Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          
          <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/60 backdrop-blur-md hover:bg-neutral-800 hover:border-yellow-500/50 transition-all group flex flex-col items-center text-center gap-3">
            <div className="p-4 bg-black/50 rounded-2xl group-hover:scale-110 group-hover:-translate-y-1 transition-transform shadow-lg shadow-black/50">
              <svg className="w-8 h-8 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="m23.53 1.02-7.686 3.45h-7.06l-2.98 3.452h7.173L.47 22.98l7.681-3.607h7.065v-.002l2.978-3.45-7.148-.001 12.482-14.9zM0 4.47v14.901h1.883l2.98-3.45H3.451v-8h.942l2.824-3.45H0zm22.117 0-2.98 3.608h1.412v7.844h-.942l-2.98 3.45H24V4.47h-1.883z"/>
              </svg>
            </div>
            <span className="font-heading font-semibold text-white tracking-wide text-lg">Zig</span>
            <span className="text-sm text-neutral-400">General purpose low-level & C drop-in</span>
          </div>
          
          <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/60 backdrop-blur-md hover:bg-neutral-800 hover:border-orange-500/50 transition-all group flex flex-col items-center text-center gap-3">
            <div className="p-4 bg-black/50 rounded-2xl group-hover:scale-110 group-hover:-translate-y-1 transition-transform shadow-lg shadow-black/50">
              <svg className="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.8346 11.7033l-1.0073-.6236a13.7268 13.7268 0 00-.0283-.2936l.8656-.8069a.3483.3483 0 00-.1154-.578l-1.1066-.414a8.4958 8.4958 0 00-.087-.2856l.6904-.9587a.3462.3462 0 00-.2257-.5446l-1.1663-.1894a9.3574 9.3574 0 00-.1407-.2622l.49-1.0761a.3437.3437 0 00-.0274-.3361.3486.3486 0 00-.3006-.154l-1.1845.0416a6.7444 6.7444 0 00-.1873-.2268l.2723-1.153a.3472.3472 0 00-.417-.4172l-1.1532.2724a14.0183 14.0183 0 00-.2278-.1873l.0415-1.1845a.3442.3442 0 00-.49-.328l-1.076.491c-.0872-.0476-.1742-.0952-.2623-.1407l-.1903-1.1673A.3483.3483 0 0016.256.955l-.9597.6905a8.4867 8.4867 0 00-.2855-.086l-.414-1.1066a.3483.3483 0 00-.5781-.1154l-.8069.8666a9.2936 9.2936 0 00-.2936-.0284L12.2946.1683a.3462.3462 0 00-.5892 0l-.6236 1.0073a13.7383 13.7383 0 00-.2936.0284L9.9803.3374a.3462.3462 0 00-.578.1154l-.4141 1.1065c-.0962.0274-.1903.0567-.2855.086L7.744.955a.3483.3483 0 00-.5447.2258L7.009 2.348a9.3574 9.3574 0 00-.2622.1407l-1.0762-.491a.3462.3462 0 00-.49.328l.0416 1.1845a7.9826 7.9826 0 00-.2278.1873L3.8413 3.425a.3472.3472 0 00-.4171.4171l.2713 1.1531c-.0628.075-.1255.1509-.1863.2268l-1.1845-.0415a.3462.3462 0 00-.328.49l.491 1.0761a9.167 9.167 0 00-.1407.2622l-1.1662.1894a.3483.3483 0 00-.2258.5446l.6904.9587a13.303 13.303 0 00-.087.2855l-1.1065.414a.3483.3483 0 00-.1155.5781l.8656.807a9.2936 9.2936 0 00-.0283.2935l-1.0073.6236a.3442.3442 0 000 .5892l1.0073.6236c.008.0982.0182.1964.0283.2936l-.8656.8079a.3462.3462 0 00.1155.578l1.1065.4141c.0273.0962.0567.1914.087.2855l-.6904.9587a.3452.3452 0 00.2268.5447l1.1662.1893c.0456.088.0922.1751.1408.2622l-.491 1.0762a.3462.3462 0 00.328.49l1.1834-.0415c.0618.0769.1235.1528.1873.2277l-.2713 1.1541a.3462.3462 0 00.4171.4161l1.153-.2713c.075.0638.151.1255.2279.1863l-.0415 1.1845a.3442.3442 0 00.49.327l1.0761-.49c.087.0486.1741.0951.2622.1407l.1903 1.1662a.3483.3483 0 00.5447.2268l.9587-.6904a9.299 9.299 0 00.2855.087l.414 1.1066a.3452.3452 0 00.5781.1154l.8079-.8656c.0972.0111.1954.0203.2936.0294l.6236 1.0073a.3472.3472 0 00.5892 0l.6236-1.0073c.0982-.0091.1964-.0183.2936-.0294l.8069.8656a.3483.3483 0 00.578-.1154l.4141-1.1066a8.4626 8.4626 0 00.2855-.087l.9587.6904a.3452.3452 0 00.5447-.2268l.1903-1.1662c.088-.0456.1751-.0931.2622-.1407l1.0762.49a.3472.3472 0 00.49-.327l-.0415-1.1845a6.7267 6.7267 0 00.2267-.1863l1.1531.2713a.3472.3472 0 00.4171-.416l-.2713-1.1542c.0628-.0749.1255-.1508.1863-.2278l1.1845.0415a.3442.3442 0 00.328-.49l-.49-1.076c.0475-.0872.0951-.1742.1407-.2623l1.1662-.1893a.3483.3483 0 00.2258-.5447l-.6904-.9587.087-.2855 1.1066-.414a.3462.3462 0 00.1154-.5781l-.8656-.8079c.0101-.0972.0202-.1954.0283-.2936l1.0073-.6236a.3442.3442 0 000-.5892zm-6.7413 8.3551a.7138.7138 0 01.2986-1.396.714.714 0 11-.2997 1.396zm-.3422-2.3142a.649.649 0 00-.7715.5l-.3573 1.6685c-1.1035.501-2.3285.7795-3.6193.7795a8.7368 8.7368 0 01-3.6951-.814l-.3574-1.6684a.648.648 0 00-.7714-.499l-1.473.3158a8.7216 8.7216 0 01-.7613-.898h7.1676c.081 0 .1356-.0141.1356-.088v-2.536c0-.074-.0536-.0881-.1356-.0881h-2.0966v-1.6077h2.2677c.2065 0 1.1065.0587 1.394 1.2088.0901.3533.2875 1.5044.4232 1.8729.1346.413.6833 1.2381 1.2685 1.2381h3.5716a.7492.7492 0 00.1296-.0131 8.7874 8.7874 0 01-.8119.9526zM6.8369 20.024a.714.714 0 11-.2997-1.396.714.714 0 01.2997 1.396zM4.1177 8.9972a.7137.7137 0 11-1.304.5791.7137.7137 0 011.304-.579zm-.8352 1.9813l1.5347-.6824a.65.65 0 00.33-.8585l-.3158-.7147h1.2432v5.6025H3.5669a8.7753 8.7753 0 01-.2834-3.348zm6.7343-.5437V8.7836h2.9601c.153 0 1.0792.1772 1.0792.8697 0 .575-.7107.7815-1.2948.7815zm10.7574 1.4862c0 .2187-.008.4363-.0243.651h-.9c-.09 0-.1265.0586-.1265.1477v.413c0 .973-.5487 1.1846-1.0296 1.2382-.4576.0517-.9648-.1913-1.0275-.4717-.2704-1.5186-.7198-1.8436-1.4305-2.4034.8817-.5599 1.799-1.386 1.799-2.4915 0-1.1936-.819-1.9458-1.3769-2.3153-.7825-.5163-1.6491-.6195-1.883-.6195H5.4682a8.7651 8.7651 0 014.907-2.7699l1.0974 1.151a.648.648 0 00.9182.0213l1.227-1.1743a8.7753 8.7753 0 016.0044 4.2762l-.8403 1.8982a.652.652 0 00.33.8585l1.6178.7188c.0283.2875.0425.577.0425.8717zm-9.3006-9.5993a.7128.7128 0 11.984 1.0316.7137.7137 0 01-.984-1.0316zm8.3389 6.71a.7107.7107 0 01.9395-.3625.7137.7137 0 11-.9405.3635z"/>
              </svg>
            </div>
            <span className="font-heading font-semibold text-white tracking-wide text-lg">Rust</span>
            <span className="text-sm text-neutral-400">High performance automation & safety</span>
          </div>
          
          <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/60 backdrop-blur-md hover:bg-neutral-800 hover:border-cyan-500/50 transition-all group flex flex-col items-center text-center gap-3">
            <div className="p-4 bg-black/50 rounded-2xl group-hover:scale-110 group-hover:-translate-y-1 transition-transform shadow-lg shadow-black/50">
              <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z"/>
              </svg>
            </div>
            <span className="font-heading font-semibold text-white tracking-wide text-lg">Golang</span>
            <span className="text-sm text-neutral-400">Scalable cloud backend & microservices</span>
          </div>
          
          <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/60 backdrop-blur-md hover:bg-neutral-800 hover:border-yellow-400/50 transition-all group flex flex-col items-center text-center gap-3">
            <div className="p-4 bg-black/50 rounded-2xl group-hover:scale-110 group-hover:-translate-y-1 transition-transform shadow-lg shadow-black/50">
              <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
              </svg>
            </div>
            <span className="font-heading font-semibold text-white tracking-wide text-lg">JavaScript</span>
            <span className="text-sm text-neutral-400">Dynamic frontend UI & cross-platform</span>
          </div>
        </div>

      </div>
    </section>
  );
}
