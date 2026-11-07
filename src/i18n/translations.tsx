export type Language = 'vi' | 'en' | 'zh' | 'ja';

export interface CredentialItem {
  id: string;
  name: string;
  issuer: string;
  code: string;
  date: string;
  badge: string;
  skills: string[];
}

export const CREDENTIALS_LIST: Record<Language, CredentialItem[]> = {
  vi: [
    {
      id: 'aws-saa',
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services (AWS)',
      code: 'SAA-84920',
      date: '2024 – 2027',
      badge: 'ARCHITECT',
      skills: ['Multi-Region HA', 'Edge Computing', 'S3 / VPC / CloudFront', 'Well-Architected Framework']
    },
    {
      id: 'comptia-sec',
      name: 'CompTIA Security+ (SY0-701)',
      issuer: 'CompTIA',
      code: 'COMP001021',
      date: '2024 – 2027',
      badge: 'SECURITY',
      skills: ['Zero-Trust Architecture', 'PKCE & Cryptography', 'Threat Modeling', 'Identity & Access (IAM)']
    },
    {
      id: 'stanford-ml',
      name: 'Machine Learning Specialization',
      issuer: 'Stanford Online & DeepLearning.AI',
      code: 'STAN-ML-9924',
      date: '2024',
      badge: 'AI / ML',
      skills: ['Supervised Learning', 'Neural Networks', 'Vector Embeddings', 'LLM Agentic Systems']
    },
    {
      id: 'scrum-csm',
      name: 'Certified ScrumMaster® (CSM)',
      issuer: 'Scrum Alliance',
      code: 'CSM-001594832',
      date: '2024 – 2026',
      badge: 'AGILE',
      skills: ['Iterative Delivery', 'Sprint Planning', 'Engineering Velocity', 'Cross-Functional Alignment']
    }
  ],
  en: [
    {
      id: 'aws-saa',
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services (AWS)',
      code: 'SAA-84920',
      date: '2024 – 2027',
      badge: 'ARCHITECT',
      skills: ['Multi-Region HA', 'Edge Computing', 'S3 / VPC / CloudFront', 'Well-Architected Framework']
    },
    {
      id: 'comptia-sec',
      name: 'CompTIA Security+ (SY0-701)',
      issuer: 'CompTIA',
      code: 'COMP001021',
      date: '2024 – 2027',
      badge: 'SECURITY',
      skills: ['Zero-Trust Architecture', 'PKCE & Cryptography', 'Threat Modeling', 'Identity & Access (IAM)']
    },
    {
      id: 'stanford-ml',
      name: 'Machine Learning Specialization',
      issuer: 'Stanford Online & DeepLearning.AI',
      code: 'STAN-ML-9924',
      date: '2024',
      badge: 'AI / ML',
      skills: ['Supervised Learning', 'Neural Networks', 'Vector Embeddings', 'LLM Agentic Systems']
    },
    {
      id: 'scrum-csm',
      name: 'Certified ScrumMaster® (CSM)',
      issuer: 'Scrum Alliance',
      code: 'CSM-001594832',
      date: '2024 – 2026',
      badge: 'AGILE',
      skills: ['Iterative Delivery', 'Sprint Planning', 'Engineering Velocity', 'Cross-Functional Alignment']
    }
  ],
  zh: [
    {
      id: 'aws-saa',
      name: 'AWS 认证解决方案架构师 – 助理级',
      issuer: 'Amazon Web Services (AWS)',
      code: 'SAA-84920',
      date: '2024 – 2027',
      badge: 'ARCHITECT',
      skills: ['多区域高可用', '边缘计算', 'S3 / VPC / CloudFront', '架构完善框架']
    },
    {
      id: 'comptia-sec',
      name: 'CompTIA Security+ 安全认证 (SY0-701)',
      issuer: 'CompTIA',
      code: 'COMP001021',
      date: '2024 – 2027',
      badge: 'SECURITY',
      skills: ['零信任架构', 'PKCE 密码学', '威胁建模', '身份与访问管理 (IAM)']
    },
    {
      id: 'stanford-ml',
      name: '机器学习专业认证',
      issuer: '斯坦福在线 & DeepLearning.AI',
      code: 'STAN-ML-9924',
      date: '2024',
      badge: 'AI / ML',
      skills: ['监督学习', '神经网络', '向量检索', '大语言模型智能体']
    },
    {
      id: 'scrum-csm',
      name: '专业敏捷教练认证 (CSM)',
      issuer: 'Scrum Alliance',
      code: 'CSM-001594832',
      date: '2024 – 2026',
      badge: 'AGILE',
      skills: ['敏捷迭代', '冲刺规划', '工程效能', '跨职能团队协作']
    }
  ],
  ja: [
    {
      id: 'aws-saa',
      name: 'AWS 認定ソリューションアーキテクト – アソシエイト',
      issuer: 'Amazon Web Services (AWS)',
      code: 'SAA-84920',
      date: '2024 – 2027',
      badge: 'ARCHITECT',
      skills: ['マルチリージョン高可用性', 'エッジコンピューティング', 'S3 / VPC / CloudFront', 'Well-Architected']
    },
    {
      id: 'comptia-sec',
      name: 'CompTIA Security+ (SY0-701)',
      issuer: 'CompTIA',
      code: 'COMP001021',
      date: '2024 – 2027',
      badge: 'SECURITY',
      skills: ['ゼロトラスト設計', 'PKCE ＆ 暗号化技術', '脅威モデリング', 'IAM 認証基盤']
    },
    {
      id: 'stanford-ml',
      name: '機械学習スペシャライゼーション',
      issuer: 'スタンフォード大学 & DeepLearning.AI',
      code: 'STAN-ML-9924',
      date: '2024',
      badge: 'AI / ML',
      skills: ['機械学習アルゴリズム', 'ニューラルネットワーク', 'ベクトル検索', 'LLM エージェント']
    },
    {
      id: 'scrum-csm',
      name: '認定スクラムマスター® (CSM)',
      issuer: 'Scrum Alliance',
      code: 'CSM-001594832',
      date: '2024 – 2026',
      badge: 'AGILE',
      skills: ['アジャイル開発', 'スプリント運用', '開発ベロシティ向上', 'チームビルディング']
    }
  ]
};

export const translations = {
  vi: {
    nav: {
      home: "Trang chủ",
      vntezPlatform: "vntez.vercel.app ↗",
      credentials: "Chứng chỉ",
      blog: "Blog",
      themeToggle: "Chuyển giao diện",
      selectLanguage: "Chọn ngôn ngữ",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Hoàng Nam",
      role: "Software Engineer & Systems Architect",
      tagline: "Tác giả kiến trúc nền tảng VNTEZ — High-performance Edge & Distributed Systems.",
      ctaResume: "My Resume",
      ctaVntez: "vntez.vercel.app",
      credentialsBtn: "Chứng chỉ",
      statusText: "AWS SAA-C03 & CompTIA Security+ • TP. Hồ Chí Minh",
    },
    credentialsModal: {
      title: "Chứng chỉ Năng lực Quốc tế",
      subtitle: "Xác thực năng lực kiến trúc điện toán đám mây, an ninh mạng và AI.",
      close: "Đóng",
      verified: "Đã xác thực",
      idLabel: "Mã định danh",
    },
    footer: {
      quote: "Tạo nên bằng sự kiên định và tình yêu với kỹ thuật.",
      scrollTop: "Cuộn lên đầu trang",
    },
    blog: {
      heroTitle: "Góc Nhìn Kỹ Thuật & Kiến Trúc",
      heroSubtitle: "Bài viết chuyên sâu về Distributed Systems, Concurrency, Linux Kernel, và Cloud Native DevOps.",
      searchPlaceholder: "Tìm kiếm bài viết theo tiêu đề, tag, nội dung...",
      allCategories: "Tất cả",
      readTime: "phút đọc",
      backToList: "← Quay lại danh sách bài viết",
      sharePost: "Chia sẻ bài viết",
      linkCopied: "Đã sao chép liên kết vào clipboard!",
      noResults: "Không tìm thấy bài viết phù hợp",
      noResultsDesc: "Thử tìm kiếm với từ khóa khác hoặc bấm chọn danh mục 'Tất cả'.",
      filterCount: (n: number) => `Hiển thị ${n} bài viết`,
      authorRole: "Lead Architect @ VNTEZ Ecosystem · Backend, Edge & Mobile Engineer",
    },
  },

  en: {
    nav: {
      home: "Home",
      vntezPlatform: "vntez.vercel.app ↗",
      credentials: "Credentials",
      blog: "Blog",
      themeToggle: "Toggle theme",
      selectLanguage: "Select language",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Hoàng Nam",
      role: "Software Engineer & Systems Architect",
      tagline: "Author & Architect of VNTEZ Platform — High-performance Edge & Distributed Systems.",
      ctaResume: "My Resume",
      ctaVntez: "vntez.vercel.app",
      credentialsBtn: "Credentials",
      statusText: "AWS SAA-C03 & CompTIA Security+ • Ho Chi Minh City",
    },
    credentialsModal: {
      title: "Verified Global Credentials",
      subtitle: "Verified competencies in Cloud Architecture, Cybersecurity, and Machine Learning.",
      close: "Close",
      verified: "Verified",
      idLabel: "Credential ID",
    },
    footer: {
      quote: "Built with persistence and engineering precision.",
      scrollTop: "Scroll to top",
    },
    blog: {
      heroTitle: "Engineering & Architecture Journal",
      heroSubtitle: "In-depth explorations into Distributed Systems, Concurrency, Linux Kernel, and Cloud Native DevOps.",
      searchPlaceholder: "Search posts by title, tag, content...",
      allCategories: "All",
      readTime: "min read",
      backToList: "← Back to articles",
      sharePost: "Share article",
      linkCopied: "Link copied to clipboard!",
      noResults: "No matching articles found",
      noResultsDesc: "Try searching with different keywords or reset to 'All' category.",
      filterCount: (n: number) => `Showing ${n} articles`,
      authorRole: "Lead Architect @ VNTEZ Ecosystem · Backend, Edge & Mobile Engineer",
    },
  },

  zh: {
    nav: {
      home: "首页",
      vntezPlatform: "vntez.vercel.app ↗",
      credentials: "专业认证",
      blog: "博客",
      themeToggle: "切换主题",
      selectLanguage: "选择语言",
    },
    hero: {
      greeting: "你好，我是",
      name: "黄南 (Hoàng Nam)",
      role: "软件工程师 & 系统架构师",
      tagline: "VNTEZ 平台架构作者 — 高性能边缘计算与分布式系统。",
      ctaResume: "个人简历",
      ctaVntez: "vntez.vercel.app",
      credentialsBtn: "专业认证",
      statusText: "AWS SAA-C03 & CompTIA Security+ • 胡志明市",
    },
    credentialsModal: {
      title: "国际专业能力认证",
      subtitle: "已验证的云计算架构、网络安全与机器学习专业能力。",
      close: "关闭",
      verified: "已验证",
      idLabel: "证书编号",
    },
    footer: {
      quote: "始于坚持，成于技术。",
      scrollTop: "回到顶部",
    },
    blog: {
      heroTitle: "技术与系统架构思考",
      heroSubtitle: "关于分布式系统、并发模型、Linux 内核及云原生的深度解析。",
      searchPlaceholder: "搜索文章标题、标签或内容...",
      allCategories: "全部",
      readTime: "分钟阅读",
      backToList: "← 返回文章列表",
      sharePost: "分享文章",
      linkCopied: "已复制链接到剪贴板！",
      noResults: "未找到相关文章",
      noResultsDesc: "请尝试使用其他关键词搜索或选择“全部”分类。",
      filterCount: (n: number) => `共显示 ${n} 篇文章`,
      authorRole: "VNTEZ 生态架构师 · 后端、边缘与移动端工程师",
    },
  },

  ja: {
    nav: {
      home: "ホーム",
      vntezPlatform: "vntez.vercel.app ↗",
      credentials: "保有資格",
      blog: "ブログ",
      themeToggle: "テーマ切り替え",
      selectLanguage: "言語選択",
    },
    hero: {
      greeting: "こんにちは、",
      name: "ホアン・ナム (Hoàng Nam)",
      role: "ソフトウェアエンジニア & システムアーキテクト",
      tagline: "VNTEZプラットフォーム設計者 — 高性能エッジ＆分散システム。",
      ctaResume: "履歴書 (CV)",
      ctaVntez: "vntez.vercel.app",
      credentialsBtn: "保有資格",
      statusText: "AWS SAA-C03 & CompTIA Security+ • ホーチミン市",
    },
    credentialsModal: {
      title: "国際認定資格・証明",
      subtitle: "クラウド設計、サイバーセキュリティ、機械学習の実証された専門性。",
      close: "閉じる",
      verified: "認証済み",
      idLabel: "資格ID",
    },
    footer: {
      quote: "技術への情熱と弛まぬ探求心によって構築。",
      scrollTop: "トップに戻る",
    },
    blog: {
      heroTitle: "技術・アーキテクチャ考察",
      heroSubtitle: "分散システム、並行処理、Linuxカーネル、クラウドネイティブに関する技術録。",
      searchPlaceholder: "タイトル、タグ、キーワードで検索...",
      allCategories: "すべて",
      readTime: "分で読める",
      backToList: "← 記事一覧に戻る",
      sharePost: "記事をシェア",
      linkCopied: "リンクをクリップボードにコピーしました！",
      noResults: "該当する記事が見つかりません",
      noResultsDesc: "別のキーワードで検索するか、「すべて」のカテゴリを選択してください。",
      filterCount: (n: number) => `${n} 件の記事を表示中`,
      authorRole: "VNTEZ Lead Architect · バックエンド、エッジ＆モバイルエンジニア",
    },
  },
};
