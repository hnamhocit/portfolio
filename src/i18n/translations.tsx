import React from 'react';
import { Activity, Server, Zap } from 'lucide-react';

export const translations = {
  vi: {
    hero: {
      status: "Đang tìm kiếm cơ hội mới",
      greeting: "Chào bạn, tôi là",
      role: "Kỹ sư Fullstack / Hệ thống",
      desc: "Xây dựng hạ tầng mạnh mẽ, mở rộng linh hoạt và các ứng dụng đa nền tảng mượt mà. Biến những bài toán kiến trúc phức tạp thành các giải pháp tinh tế và tối ưu hiệu năng.",
      viewProjects: "Xem Dự án",
      downloadCV: "Tải CV"
    },
    about: {
      quote_zh: "少年 他们都不看好你 但认输不是你的性格",
      quote_trans: '"Thiếu niên, họ đều không đánh giá cao cậu, nhưng nhận thua không phải là tính cách của cậu."',
      whoAmI: "Tôi là ai?",
      desc1: "Tôi là một Kỹ sư Phần mềm đam mê giải quyết các bài toán hóc búa. Tôi thích đi sâu vào lõi của hệ thống để hiểu rõ bản chất vấn đề thay vì chỉ viết code trên bề mặt.",
      desc2: "Từ việc tối ưu hoá microservices với Rust & Go, đến việc xây dựng giao diện tương tác cao với React & Tailwind, mục tiêu của tôi là tạo ra những sản phẩm hoàn chỉnh mang lại giá trị thực cho người dùng.",
      skipToProjects: "Bỏ qua & Xem Dự án",
      p1: (age: number) => [
        `Xin chào. | `,
        <span key="name" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-bold">Tôi là Nam,</span>,
        ` ${age} tuổi. | Niềm đam mê với | `,
        <span key="mt" className="text-neutral-100">máy tính</span>,
        ` | bắt đầu bùng cháy | từ mùa hè năm lớp 10.`
      ],
      p2: () => [
        "Từ đó, | thế giới của tôi | xoay quanh | ",
        <span key="lg" className="text-purple-400">logic</span>,
        " | và | ",
        <span key="kt" className="text-pink-400">kiến trúc hệ thống</span>,
        ". | Tôi tập trung chuyên sâu vào ",
        <span key="fs" className="text-indigo-400 font-bold">Fullstack</span>,
        " | và ",
        <span key="mb" className="text-blue-400 font-bold">Mobile Cross-platform</span>,
        "."
      ],
      p3: () => [
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
      ],
      p4: () => [
        "Tôi không chỉ | ",
        <span key="vc" className="text-blue-400">viết code</span>,
        ". | Tôi kiến tạo | những giải pháp | ",
        <span key="bn" className="text-neutral-100">bền vững</span>,
        " | giải quyết | ",
        <span key="bt" className="text-rose-400">bài toán thực tế</span>,
        ", | và | vượt qua giới hạn | của | sự trì trệ."
      ],
      techDesc: {
        zig: "Ngôn ngữ đa năng cấp thấp & thay thế hoàn hảo cho C",
        rust: "Hiệu năng cao, tự động hóa & an toàn bộ nhớ",
        go: "Backend Cloud mở rộng & kiến trúc Microservices",
        js: "Giao diện Frontend động & đa nền tảng"
      }
    },
    projects: {
      title: "Dự án",
      highlight: "Tiêu biểu",
      desc: "Phân tích chuyên sâu về các bài toán kỹ thuật phức tạp mà tôi đã giải quyết, tập trung vào khả năng mở rộng (scalability), hiệu suất và kiến trúc hệ thống.",
      problem: "Bài Toán",
      solution: "Giải Pháp",
      impact: "Tác động & Kết quả",
      demo: "Xem Demo",
      source: "Mã Nguồn",
      list: [
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
          tags: ["Rust", "ZeroMQ", "Docker", "AWS"]
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
          tags: ["NestJS", "Kafka", "PostgreSQL", "Kubernetes"]
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
          tags: ["Flutter", "Dart", "Firebase", "WebSockets"]
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
          tags: ["Golang", "ElasticSearch", "Redis", "gRPC"]
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
          tags: ["React", "Ethers.js", "Solidity", "TailwindCSS"]
        }
      ]
    },
    tech: {
      title: "Năng lực",
      highlight: "Cốt lõi",
      desc: "Hộp đồ nghề kỹ sư của tôi. Thay vì chỉ học cú pháp, tôi tập trung hiểu sâu về bản chất và kiến trúc để luôn chọn đúng công cụ cho từng bài toán."
    },
    experience: {
      title: "Hành trình",
      highlight: "Nghề nghiệp",
      timeline: [
        {
          type: "work",
          period: "2023 - Hiện tại",
          role: "Kỹ sư Hệ thống Cao cấp",
          company: "FinTech Global",
          description: [
            "Thiết kế kiến trúc và triển khai hệ thống sổ cái phân tán bằng Rust và Kafka, giảm 40% thời gian xử lý giao dịch.",
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
      ]
    },
    contact: {
      title1: "Cùng Nhau Tạo Nên",
      title2: "Điều Kỳ Diệu",
      desc: "Tôi luôn mở cửa đón nhận các cơ hội mới. Bất kể bạn có câu hỏi hay chỉ muốn chào một tiếng, tôi sẽ cố gắng phản hồi sớm nhất có thể!",
      sayHi: "Gửi Lời Chào",
      viewProfile: "Xem Hồ Sơ",
      copyright: "© {year} Nam. Đã đăng ký Bản quyền."
    }
  },
  en: {
    hero: {
      status: "Open to new opportunities",
      greeting: "Hello, I am",
      role: "Fullstack / Systems Engineer",
      desc: "Building robust infrastructure, highly scalable backends, and smooth cross-platform applications. Turning complex architectural problems into elegant, performant solutions.",
      viewProjects: "View Projects",
      downloadCV: "Download CV"
    },
    about: {
      quote_zh: "少年 他们都不看好你 但认输不是你的性格",
      quote_trans: '"Young man, they all underestimate you, but admitting defeat is not in your nature."',
      whoAmI: "Who am I?",
      desc1: "I am a Software Engineer passionate about solving tough problems. I love diving deep into the core of systems to understand the root cause rather than just writing code on the surface.",
      desc2: "From optimizing microservices with Rust & Go to building highly interactive UIs with React & Tailwind, my goal is to create end-to-end products that deliver real value to users.",
      skipToProjects: "Skip & View Projects",
      p1: (age: number) => [
        `Hello. | `,
        <span key="name" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-bold">I am Nam,</span>,
        ` ${age} years old. | My passion for | `,
        <span key="mt" className="text-neutral-100">computers</span>,
        ` | ignited during | the summer of 10th grade.`
      ],
      p2: () => [
        "Since then, | my world | has revolved around | ",
        <span key="lg" className="text-purple-400">logic</span>,
        " | and | ",
        <span key="kt" className="text-pink-400">system architecture</span>,
        ". | I deeply focus on ",
        <span key="fs" className="text-indigo-400 font-bold">Fullstack</span>,
        " | and ",
        <span key="mb" className="text-blue-400 font-bold">Mobile Cross-platform</span>,
        "."
      ],
      p3: () => [
        "Why | ",
        <span key="zg" className="text-yellow-500 font-bold">Zig</span>,
        ", | ",
        <span key="rs" className="text-orange-500 font-bold">Rust</span>,
        ", | and | ",
        <span key="go" className="text-cyan-400 font-bold">Golang</span>,
        "? | Because I believe in | ",
        <span key="tn" className="text-emerald-400">long-term vision</span>,
        " | and | ",
        <span key="tu" className="text-red-400">absolute optimization</span>,
        ". | My code | strongly carries the | ",
        <span key="vb" className="text-fuchsia-400 font-bold">"vibe"</span>,
        " | of | ",
        <span key="tr" className="text-yellow-400 font-bold">Tauri</span>,
        " — | ",
        <span key="tg" className="text-teal-300">lean</span>,
        ", | ",
        <span key="hn" className="text-green-400">high-performance</span>,
        ", | and | ",
        <span key="hd" className="text-blue-300">modern</span>,
        "."
      ],
      p4: () => [
        "I don't just | ",
        <span key="vc" className="text-blue-400">write code</span>,
        ". | I architect | ",
        <span key="bn" className="text-neutral-100">sustainable solutions</span>,
        " | to solve | ",
        <span key="bt" className="text-rose-400">real-world problems</span>,
        ", | and | break the boundaries | of | stagnation."
      ],
      techDesc: {
        zig: "General purpose low-level & C drop-in",
        rust: "High performance automation & safety",
        go: "Scalable cloud backend & microservices",
        js: "Dynamic frontend UI & cross-platform"
      }
    },
    projects: {
      title: "Featured",
      highlight: "Projects",
      desc: "In-depth analysis of complex technical challenges I have solved, focusing on scalability, performance, and system architecture.",
      problem: "The Problem",
      solution: "The Solution",
      impact: "Impact & Results",
      demo: "Live Demo",
      source: "Source Code",
      list: [
        {
          title: "High-Frequency Trading Engine",
          role: "Core Systems Engineer",
          image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200",
          problem: "The legacy matching engine suffered from latency spikes during high market volatility, causing slippage for traders.",
          solution: "Redesigned the entire matching engine in Rust. Utilized a Ring Buffer data structure for lock-free concurrency and ZeroMQ for inter-process communication (IPC).",
          results: [
            { icon: <Zap className="w-4 h-4 text-yellow-400" />, text: "Reduced p99 latency to under 12µs" },
            { icon: <Activity className="w-4 h-4 text-green-400" />, text: "Sustained 100k+ orders/sec throughput" }
          ],
          tags: ["Rust", "ZeroMQ", "Docker", "AWS"]
        },
        {
          title: "Global E-Commerce Microservices",
          role: "Backend Architect",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
          problem: "The monolithic architecture failed to handle Black Friday traffic, causing a domino effect that crashed the entire database.",
          solution: "Fully migrated to an Event-driven Microservices architecture using NestJS and Kafka. Implemented CQRS pattern to decouple read/write operations.",
          results: [
            { icon: <Server className="w-4 h-4 text-purple-400" />, text: "Achieved 0 downtime during 50M+ requests peak" },
            { icon: <Activity className="w-4 h-4 text-green-400" />, text: "Reduced data query latency by 80%" }
          ],
          tags: ["NestJS", "Kafka", "PostgreSQL", "Kubernetes"]
        },
        {
          title: "FinTech Mobile App",
          role: "Lead Mobile Engineer",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
          problem: "Maintaining two separate native codebases (iOS & Android) slowed down feature releases and caused UI inconsistencies.",
          solution: "Rewrote the entire app in Flutter with a unified Design System. Integrated complex biometric authentication and local data encryption.",
          results: [
            { icon: <Zap className="w-4 h-4 text-yellow-400" />, text: "Smooth 60fps UI on all devices" },
            { icon: <Activity className="w-4 h-4 text-green-400" />, text: "Reduced new feature time-to-market by 50%" }
          ],
          tags: ["Flutter", "Dart", "Firebase", "WebSockets"]
        },
        {
          title: "Distributed Web Crawler",
          role: "Backend Engineer",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
          problem: "The legacy crawler was slow and resource-heavy, unable to meet the requirement of updating millions of records in real-time daily.",
          solution: "Rewrote the system in Golang. Leveraged goroutines to concurrently crawl hundreds of thousands of URLs, combined with distributed Redis queues and ElasticSearch for high-speed indexing.",
          results: [
            { icon: <Zap className="w-4 h-4 text-yellow-400" />, text: "Increased data collection speed by 20x" },
            { icon: <Activity className="w-4 h-4 text-green-400" />, text: "Reduced server costs by 70% through RAM/CPU optimization" }
          ],
          tags: ["Golang", "ElasticSearch", "Redis", "gRPC"]
        },
        {
          title: "Web3 DeFi Dashboard",
          role: "Frontend Lead",
          image: "https://images.unsplash.com/photo-1639762681485-074b7f4fec07?auto=format&fit=crop&q=80&w=1200",
          problem: "Users struggled to track their decentralized assets across multiple blockchains due to highly fragmented interfaces.",
          solution: "Developed a comprehensive, responsive Dashboard using React and Ethers.js, simultaneously integrating 5 blockchains via custom RPC proxies.",
          results: [
            { icon: <Server className="w-4 h-4 text-purple-400" />, text: "Seamlessly supported $50M+/day transaction volume" },
            { icon: <Activity className="w-4 h-4 text-green-400" />, text: "Increased new user acquisition by 300% in 2 months" }
          ],
          tags: ["React", "Ethers.js", "Solidity", "TailwindCSS"]
        }
      ]
    },
    tech: {
      title: "Core",
      highlight: "Competencies",
      desc: "My engineering toolkit. Rather than just learning syntax, I focus on understanding principles and architecture to always pick the right tool for the job."
    },
    experience: {
      title: "Career",
      highlight: "Journey",
      timeline: [
        {
          type: "work",
          period: "2023 - Present",
          role: "Senior Systems Engineer",
          company: "FinTech Global",
          description: [
            "Architected and deployed a distributed ledger system using Rust and Kafka, reducing transaction processing time by 40%.",
            "Led the migration of a legacy Monolith to a Microservices architecture using NestJS on Kubernetes, achieving 99.99% uptime.",
            "Mentored a team of 5 junior engineers and established an internal CI/CD pipeline with GitHub Actions and Docker."
          ]
        },
        {
          type: "work",
          period: "2020 - 2023",
          role: "Fullstack Developer",
          company: "TechNova Solutions",
          description: [
            "Built a high-performance cross-platform mobile app in Flutter, hitting 500k+ downloads in the first year.",
            "Developed a real-time analytics admin dashboard using React, TypeScript, and WebSockets to monitor IoT devices.",
            "Optimized complex PostgreSQL queries, reducing average report generation time from 45 seconds to under 3 seconds."
          ]
        },
        {
          type: "education",
          period: "2016 - 2020",
          role: "B.S. in Computer Science",
          company: "University of Technology",
          description: [
            "Graduated with Honors (GPA: 3.8/4.0).",
            "Published a research paper on 'Lock-free Concurrent Data Structures in C++' at the National Systems Conference.",
            "Lead Programmer for the University Robotics Team, writing autonomous navigation systems in C++ and ROS."
          ]
        }
      ]
    },
    contact: {
      title1: "Let's Create",
      title2: "Magic Together",
      desc: "My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      sayHi: "Say Hello",
      viewProfile: "View Profile",
      copyright: "© {year} Nam. All rights reserved."
    }
  },
  ja: {
    hero: {
      status: "新たな機会を探しています",
      greeting: "こんにちは、私は",
      role: "フルスタック / システムエンジニア",
      desc: "堅牢なインフラ、スケーラブルなバックエンド、スムーズなクロスプラットフォームアプリを構築します。複雑なアーキテクチャの課題を、洗練された高性能なソリューションに変えます。",
      viewProjects: "プロジェクトを見る",
      downloadCV: "履歴書をダウンロード"
    },
    about: {
      quote_zh: "少年 他们都不看好你 但认输不是你的性格",
      quote_trans: "「少年よ、誰も君を評価していないが、負けを認めるのは君の性格ではない。」",
      whoAmI: "私について",
      desc1: "私は難問の解決に情熱を注ぐソフトウェアエンジニアです。表面的なコードを書くのではなく、システムの奥深くへ潜り込み、本質を理解することを好みます。",
      desc2: "RustやGoによるマイクロサービスの最適化から、ReactとTailwindを使ったインタラクティブなUIの構築まで、ユーザーに真の価値をもたらす完全な製品を創ることが目標です。",
      skipToProjects: "スキップしてプロジェクトを見る",
      p1: (age: number) => [
        `こんにちは。 | `,
        <span key="name" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-bold">Namです、</span>,
        ` ${age}歳です。 | `,
        <span key="mt" className="text-neutral-100">コンピュータ</span>,
        ` | への情熱は | 高校1年生の夏から | 燃え上がりました。`
      ],
      p2: () => [
        "それ以来、 | 私の世界は | ",
        <span key="lg" className="text-purple-400">論理</span>,
        " | と | ",
        <span key="kt" className="text-pink-400">システムアーキテクチャ</span>,
        " | を中心に回っています。 | 私は ",
        <span key="fs" className="text-indigo-400 font-bold">フルスタック</span>,
        " | と ",
        <span key="mb" className="text-blue-400 font-bold">モバイルクロスプラットフォーム</span>,
        " | に深く焦点を当てています。"
      ],
      p3: () => [
        "なぜ | ",
        <span key="zg" className="text-yellow-500 font-bold">Zig</span>,
        "、 | ",
        <span key="rs" className="text-orange-500 font-bold">Rust</span>,
        "、 | そして | ",
        <span key="go" className="text-cyan-400 font-bold">Golang</span>,
        " | なのか？ | それは私が | ",
        <span key="tn" className="text-emerald-400">長期的なビジョン</span>,
        " | と | ",
        <span key="tu" className="text-red-400">究極の最適化</span>,
        " | を信じているからです。 | 私のコードは | ",
        <span key="tr" className="text-yellow-400 font-bold">Tauri</span>,
        " | のような | ",
        <span key="vb" className="text-fuchsia-400 font-bold">「バイブス」</span>,
        " | を強く持っています — | ",
        <span key="tg" className="text-teal-300">無駄がなく</span>,
        "、 | ",
        <span key="hn" className="text-green-400">高性能</span>,
        "、 | そして | ",
        <span key="hd" className="text-blue-300">モダン</span>,
        "。"
      ],
      p4: () => [
        "私はただ | ",
        <span key="vc" className="text-blue-400">コードを書く</span>,
        " | だけではありません。 | ",
        <span key="bt" className="text-rose-400">現実の課題</span>,
        " | を解決し、 | 停滞の限界を | 打ち破る | ",
        <span key="bn" className="text-neutral-100">持続可能なソリューション</span>,
        " | を設計します。"
      ],
      techDesc: {
        zig: "汎用ローレベル & Cの代替",
        rust: "高性能な自動化 & メモリ安全性",
        go: "スケーラブルなクラウドバックエンド & マイクロサービス",
        js: "動的なフロントエンドUI & クロスプラットフォーム"
      }
    },
    projects: {
      title: "注目の",
      highlight: "プロジェクト",
      desc: "拡張性（スケーラビリティ）、パフォーマンス、システムアーキテクチャに焦点を当て、私が解決してきた複雑な技術的課題を深く分析します。",
      problem: "課題",
      solution: "解決策",
      impact: "影響と結果",
      demo: "デモを見る",
      source: "ソースコード",
      list: [
        {
          title: "高頻度取引エンジン",
          role: "コアシステムエンジニア",
          image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200",
          problem: "従来の取引エンジンは市場の変動時に遅延スパイクが発生し、トレーダーにスリッページを引き起こしていました。",
          solution: "Rustでマッチングエンジン全体を再設計。ロックフリー並行性のためのリングバッファ構造と、プロセス間通信（IPC）のためのZeroMQを活用しました。",
          results: [
            { icon: <Zap className="w-4 h-4 text-yellow-400" />, text: "p99遅延を12µs未満に削減" },
            { icon: <Activity className="w-4 h-4 text-green-400" />, text: "毎秒10万件以上の注文処理を維持" }
          ],
          tags: ["Rust", "ZeroMQ", "Docker", "AWS"]
        },
        {
          title: "グローバルEコマース・マイクロサービス",
          role: "バックエンドアーキテクト",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
          problem: "モノリスアーキテクチャはブラックフライデーのトラフィックに耐えられず、データベース全体がダウンするドミノ効果を引き起こしました。",
          solution: "NestJSとKafkaを使用したイベント駆動型マイクロサービスへ完全移行。CQRSパターンを実装し、読み書き操作を分離しました。",
          results: [
            { icon: <Server className="w-4 h-4 text-purple-400" />, text: "5000万リクエストのピーク時にダウンタイム0を達成" },
            { icon: <Activity className="w-4 h-4 text-green-400" />, text: "データクエリ遅延を80%削減" }
          ],
          tags: ["NestJS", "Kafka", "PostgreSQL", "Kubernetes"]
        },
        {
          title: "FinTech モバイルアプリ",
          role: "リードモバイルエンジニア",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
          problem: "2つのネイティブコード（iOS・Android）を維持することで機能リリースが遅れ、UIの不整合が発生していました。",
          solution: "Flutterで統一されたデザインシステムを用いてアプリ全体を書き換え。複雑な生体認証とローカルデータ暗号化を統合しました。",
          results: [
            { icon: <Zap className="w-4 h-4 text-yellow-400" />, text: "全デバイスで滑らかな60fpsのUIを実現" },
            { icon: <Activity className="w-4 h-4 text-green-400" />, text: "新機能のリリース期間を50%短縮" }
          ],
          tags: ["Flutter", "Dart", "Firebase", "WebSockets"]
        },
        {
          title: "分散型ウェブクローラー",
          role: "バックエンドエンジニア",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
          problem: "従来のクローラーは遅くリソースを消費し、毎日何百万ものレコードをリアルタイムで更新する要件を満たせませんでした。",
          solution: "Golangでシステムを再構築。goroutineを活用して数十万のURLを並行クロールし、分散RedisキューとElasticSearchを組み合わせた高速インデックスを実装しました。",
          results: [
            { icon: <Zap className="w-4 h-4 text-yellow-400" />, text: "データ収集速度を20倍に向上" },
            { icon: <Activity className="w-4 h-4 text-green-400" />, text: "RAM/CPUの最適化によりサーバーコストを70%削減" }
          ],
          tags: ["Golang", "ElasticSearch", "Redis", "gRPC"]
        },
        {
          title: "Web3 DeFi ダッシュボード",
          role: "フロントエンドリード",
          image: "https://images.unsplash.com/photo-1639762681485-074b7f4fec07?auto=format&fit=crop&q=80&w=1200",
          problem: "インターフェースが断片化されているため、ユーザーは複数のブロックチェーン間で分散型資産を追跡するのに苦労していました。",
          solution: "ReactとEthers.jsを使用し、独自のRPCプロキシを介して5つのブロックチェーンを同時に統合する、応答性の高いダッシュボードを開発しました。",
          results: [
            { icon: <Server className="w-4 h-4 text-purple-400" />, text: "1日5000万ドル以上の取引量をスムーズにサポート" },
            { icon: <Activity className="w-4 h-4 text-green-400" />, text: "2ヶ月で新規ユーザー獲得が300%増加" }
          ],
          tags: ["React", "Ethers.js", "Solidity", "TailwindCSS"]
        }
      ]
    },
    tech: {
      title: "コア",
      highlight: "スキル",
      desc: "私のエンジニアリングツールキット。単なる構文を学ぶのではなく、常に最適なツールを選択するために、本質とアーキテクチャの理解に焦点を当てています。"
    },
    experience: {
      title: "キャリアの",
      highlight: "軌跡",
      timeline: [
        {
          type: "work",
          period: "2023 - 現在",
          role: "シニアシステムエンジニア",
          company: "FinTech Global",
          description: [
            "RustとKafkaを用いた分散型台帳システムを設計・導入し、トランザクション処理時間を40%削減。",
            "Kubernetes上のNestJSを使用したマイクロサービスアーキテクチャへの移行を主導し、99.99%の稼働率を達成。",
            "5人の若手エンジニアの指導にあたり、GitHub ActionsとDockerを使用した社内CI/CDパイプラインを確立。"
          ]
        },
        {
          type: "work",
          period: "2020 - 2023",
          role: "フルスタックデベロッパー",
          company: "TechNova Solutions",
          description: [
            "Flutterで高性能なクロスプラットフォームモバイルアプリを構築し、初年度で50万件以上のダウンロードを達成。",
            "React、TypeScript、WebSocketsを使用して、IoTデバイスを監視するリアルタイム分析管理ダッシュボードを開発。",
            "複雑なPostgreSQLクエリを最適化し、平均レポート生成時間を45秒から3秒未満に短縮。"
          ]
        },
        {
          type: "education",
          period: "2016 - 2020",
          role: "コンピュータサイエンス学士",
          company: "工科大学",
          description: [
            "優秀な成績（GPA: 3.8/4.0）で卒業。",
            "全国システム会議で「C++におけるロックフリー並行データ構造」に関する研究論文を発表。",
            "大学ロボットチームのリードプログラマーとして、C++とROSで自律ナビゲーションシステムを開発。"
          ]
        }
      ]
    },
    contact: {
      title1: "共に魔法を",
      title2: "創り出しましょう",
      desc: "常に新たな機会に対してオープンです。質問がある場合や、単に挨拶したい場合でも、できるだけ早くお返事します！",
      sayHi: "挨拶する",
      viewProfile: "プロフィールを見る",
      copyright: "© {year} Nam. 無断転載を禁じます。"
    }
  },
  zh: {
    hero: {
      status: "正在寻找新机会",
      greeting: "你好，我是",
      role: "全栈 / 系统工程师",
      desc: "构建强大的基础设施、高度可扩展的后端和流畅的跨平台应用程序。将复杂的架构问题转化为优雅、高性能的解决方案。",
      viewProjects: "查看项目",
      downloadCV: "下载简历"
    },
    about: {
      quote_zh: "少年 他们都不看好你 但认输不是你的性格",
      quote_trans: "“少年，他们都不看好你，但认输不是你的性格。”",
      whoAmI: "我是谁？",
      desc1: "我是一名热衷于解决难题的软件工程师。我喜欢深入系统的核心以了解问题的本质，而不是仅仅在表面编写代码。",
      desc2: "从使用Rust和Go优化微服务，到使用React和Tailwind构建高交互性的UI，我的目标是创造能为用户带来真正价值的完整产品。",
      skipToProjects: "跳过并查看项目",
      p1: (age: number) => [
        `你好。 | `,
        <span key="name" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-bold">我是Nam，</span>,
        ` ${age}岁。 | 对 `,
        <span key="mt" className="text-neutral-100">计算机</span>,
        ` | 的热爱 | 从高一的夏天 | 开始燃烧。`
      ],
      p2: () => [
        "从那时起， | 我的世界 | 就围绕着 | ",
        <span key="lg" className="text-purple-400">逻辑</span>,
        " | 和 | ",
        <span key="kt" className="text-pink-400">系统架构</span>,
        " | 旋转。 | 我专注于 ",
        <span key="fs" className="text-indigo-400 font-bold">全栈</span>,
        " | 和 ",
        <span key="mb" className="text-blue-400 font-bold">移动跨平台开发</span>,
        "。"
      ],
      p3: () => [
        "为什么选择 | ",
        <span key="zg" className="text-yellow-500 font-bold">Zig</span>,
        "、 | ",
        <span key="rs" className="text-orange-500 font-bold">Rust</span>,
        " | 和 | ",
        <span key="go" className="text-cyan-400 font-bold">Golang</span>,
        "？ | 因为我相信 | ",
        <span key="tn" className="text-emerald-400">长期愿景</span>,
        " | 和 | ",
        <span key="tu" className="text-red-400">极致优化</span>,
        "。 | 我的代码 | 充满了 | ",
        <span key="tr" className="text-yellow-400 font-bold">Tauri</span>,
        " | 的 | ",
        <span key="vb" className="text-fuchsia-400 font-bold">“氛围”</span>,
        " —— | ",
        <span key="tg" className="text-teal-300">精简</span>,
        "、 | ",
        <span key="hn" className="text-green-400">高性能</span>,
        " | 且 | ",
        <span key="hd" className="text-blue-300">现代</span>,
        "。"
      ],
      p4: () => [
        "我不只是 | ",
        <span key="vc" className="text-blue-400">写代码</span>,
        "。 | 我构建 | ",
        <span key="bn" className="text-neutral-100">可持续的解决方案</span>,
        " | 来解决 | ",
        <span key="bt" className="text-rose-400">实际问题</span>,
        "， | 并打破 | 停滞的界限。"
      ],
      techDesc: {
        zig: "通用底层开发 & C语言完美替代",
        rust: "高性能自动化 & 内存安全",
        go: "可扩展云后端 & 微服务架构",
        js: "动态前端UI & 跨平台应用"
      }
    },
    projects: {
      title: "精选",
      highlight: "项目",
      desc: "深入分析我解决过的复杂技术挑战，重点关注可扩展性、性能和系统架构。",
      problem: "面临问题",
      solution: "解决方案",
      impact: "影响与结果",
      demo: "查看演示",
      source: "源代码",
      list: [
        {
          title: "高频交易引擎",
          role: "核心系统工程师",
          image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200",
          problem: "旧的撮合引擎在市场剧烈波动时遭遇延迟激增，导致交易员滑点。",
          solution: "使用Rust重新设计了整个撮合引擎。利用Ring Buffer数据结构实现无锁并发，并使用ZeroMQ进行进程间通信（IPC）。",
          results: [
            { icon: <Zap className="w-4 h-4 text-yellow-400" />, text: "将p99延迟降低至12µs以下" },
            { icon: <Activity className="w-4 h-4 text-green-400" />, text: "保持10万+订单/秒的持续处理量" }
          ],
          tags: ["Rust", "ZeroMQ", "Docker", "AWS"]
        },
        {
          title: "全球电商微服务",
          role: "后端架构师",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
          problem: "单体架构无法承受黑色星期五的流量，引发多米诺骨牌效应导致整个数据库崩溃。",
          solution: "全面迁移到基于NestJS和Kafka的事件驱动微服务架构。实现CQRS模式以解耦读写操作。",
          results: [
            { icon: <Server className="w-4 h-4 text-purple-400" />, text: "在5000万+请求峰值期间实现零停机" },
            { icon: <Activity className="w-4 h-4 text-green-400" />, text: "将数据查询延迟降低了80%" }
          ],
          tags: ["NestJS", "Kafka", "PostgreSQL", "Kubernetes"]
        },
        {
          title: "FinTech 移动应用",
          role: "移动端负责人",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
          problem: "维护两套独立的本地代码（iOS和Android）减慢了功能发布速度，并导致UI不一致。",
          solution: "使用Flutter和统一的设计系统重写了整个应用程序。集成了复杂的生物识别认证和本地数据加密。",
          results: [
            { icon: <Zap className="w-4 h-4 text-yellow-400" />, text: "在所有设备上实现60fps流畅UI" },
            { icon: <Activity className="w-4 h-4 text-green-400" />, text: "将新功能上市时间缩短了50%" }
          ],
          tags: ["Flutter", "Dart", "Firebase", "WebSockets"]
        },
        {
          title: "分布式网络爬虫",
          role: "后端工程师",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
          problem: "旧版爬虫缓慢且极其消耗资源，无法满足每天实时更新数百万条记录的要求。",
          solution: "使用Golang重写了系统。利用goroutine并发抓取数十万个URL，结合分布式Redis队列和ElasticSearch进行高速索引。",
          results: [
            { icon: <Zap className="w-4 h-4 text-yellow-400" />, text: "将数据收集速度提高了20倍" },
            { icon: <Activity className="w-4 h-4 text-green-400" />, text: "通过RAM/CPU优化降低了70%的服务器成本" }
          ],
          tags: ["Golang", "ElasticSearch", "Redis", "gRPC"]
        },
        {
          title: "Web3 DeFi 仪表板",
          role: "前端负责人",
          image: "https://images.unsplash.com/photo-1639762681485-074b7f4fec07?auto=format&fit=crop&q=80&w=1200",
          problem: "由于界面高度碎片化，用户很难跨多个区块链跟踪他们的去中心化资产。",
          solution: "使用React和Ethers.js开发了一个全面、响应式的仪表板，通过自定义RPC代理同时整合了5个区块链。",
          results: [
            { icon: <Server className="w-4 h-4 text-purple-400" />, text: "流畅支持每日5000万美元以上的交易量" },
            { icon: <Activity className="w-4 h-4 text-green-400" />, text: "2个月内新用户获取量增加300%" }
          ],
          tags: ["React", "Ethers.js", "Solidity", "TailwindCSS"]
        }
      ]
    },
    tech: {
      title: "核心",
      highlight: "能力",
      desc: "我的工程师工具箱。我不仅学习语法，更注重理解本质和架构，以便始终为每个问题选择正确的工具。"
    },
    experience: {
      title: "职业",
      highlight: "历程",
      timeline: [
        {
          type: "work",
          period: "2023 - 至今",
          role: "高级系统工程师",
          company: "FinTech Global",
          description: [
            "使用Rust和Kafka架构并部署了分布式账本系统，将交易处理时间缩短了40%。",
            "领导将旧的单体架构迁移到基于Kubernetes和NestJS的微服务架构，实现了99.99%的正常运行时间。",
            "指导了5名初级工程师，并使用GitHub Actions和Docker建立了内部CI/CD流水线。"
          ]
        },
        {
          type: "work",
          period: "2020 - 2023",
          role: "全栈开发人员",
          company: "TechNova Solutions",
          description: [
            "使用Flutter构建了高性能跨平台移动应用程序，第一年下载量突破50万次。",
            "使用React、TypeScript和WebSockets开发了实时分析管理仪表板，用于监控物联网设备。",
            "优化了复杂的PostgreSQL查询，将平均报告生成时间从45秒缩短至3秒以下。"
          ]
        },
        {
          type: "education",
          period: "2016 - 2020",
          role: "计算机科学学士",
          company: "理工大学",
          description: [
            "以优异成绩毕业（GPA: 3.8/4.0）。",
            "在全国系统会议上发表了关于“C++中的无锁并发数据结构”的研究论文。",
            "担任大学机器人团队的首席程序员，使用C++和ROS编写自主导航系统。"
          ]
        }
      ]
    },
    contact: {
      title1: "让我们一起",
      title2: "创造奇迹",
      desc: "我总是对新机会敞开大门。无论您有问题还是只是想打个招呼，我都会尽量尽快回复！",
      sayHi: "打个招呼",
      viewProfile: "查看个人资料",
      copyright: "© {year} Nam. 保留所有权利。"
    }
  }
};
