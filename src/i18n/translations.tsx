export type Language = 'vi' | 'en' | 'zh' | 'ja';

export interface CredentialItem {
  id: string;
  name: string;
  issuer: string;
  code: string;
  date: string;
  badge: string;
  category: string;
  highlight: string;
}

export const CREDENTIALS_LIST: Record<Language, CredentialItem[]> = {
  vi: [
    {
      id: 'aws-saa',
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services (AWS)',
      code: 'SAA-84920',
      date: '2024 – 2027',
      badge: 'AWS CERTIFIED',
      category: 'CLOUD ARCHITECTURE',
      highlight: 'Multi-Region HA & Edge Computing'
    },
    {
      id: 'comptia-sec',
      name: 'CompTIA Security+ (SY0-701)',
      issuer: 'CompTIA International',
      code: 'COMP001021',
      date: '2024 – 2027',
      badge: 'COMPTIA SECURITY',
      category: 'CYBERSECURITY',
      highlight: 'Zero-Trust, PKCE & Cryptography'
    },
    {
      id: 'stanford-ml',
      name: 'Machine Learning Specialization',
      issuer: 'Stanford Online & DeepLearning.AI',
      code: 'STAN-ML-9924',
      date: '2024',
      badge: 'STANFORD ONLINE',
      category: 'AI & MACHINE LEARNING',
      highlight: 'Neural Nets, Embeddings & Agents'
    },
    {
      id: 'scrum-csm',
      name: 'Certified ScrumMaster® (CSM)',
      issuer: 'Scrum Alliance International',
      code: 'CSM-001594832',
      date: '2024 – 2026',
      badge: 'SCRUM ALLIANCE',
      category: 'AGILE LEADERSHIP',
      highlight: 'Iterative Delivery & Sprint Velocity'
    }
  ],
  en: [
    {
      id: 'aws-saa',
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services (AWS)',
      code: 'SAA-84920',
      date: '2024 – 2027',
      badge: 'AWS CERTIFIED',
      category: 'CLOUD ARCHITECTURE',
      highlight: 'Multi-Region HA & Edge Computing'
    },
    {
      id: 'comptia-sec',
      name: 'CompTIA Security+ (SY0-701)',
      issuer: 'CompTIA International',
      code: 'COMP001021',
      date: '2024 – 2027',
      badge: 'COMPTIA SECURITY',
      category: 'CYBERSECURITY',
      highlight: 'Zero-Trust, PKCE & Cryptography'
    },
    {
      id: 'stanford-ml',
      name: 'Machine Learning Specialization',
      issuer: 'Stanford Online & DeepLearning.AI',
      code: 'STAN-ML-9924',
      date: '2024',
      badge: 'STANFORD ONLINE',
      category: 'AI & MACHINE LEARNING',
      highlight: 'Neural Nets, Embeddings & Agents'
    },
    {
      id: 'scrum-csm',
      name: 'Certified ScrumMaster® (CSM)',
      issuer: 'Scrum Alliance International',
      code: 'CSM-001594832',
      date: '2024 – 2026',
      badge: 'SCRUM ALLIANCE',
      category: 'AGILE LEADERSHIP',
      highlight: 'Iterative Delivery & Sprint Velocity'
    }
  ],
  zh: [
    {
      id: 'aws-saa',
      name: 'AWS 认证解决方案架构师 – 助理级',
      issuer: 'Amazon Web Services (AWS)',
      code: 'SAA-84920',
      date: '2024 – 2027',
      badge: 'AWS CERTIFIED',
      category: '云架构',
      highlight: '多区域高可用与边缘计算'
    },
    {
      id: 'comptia-sec',
      name: 'CompTIA Security+ 安全认证 (SY0-701)',
      issuer: 'CompTIA International',
      code: 'COMP001021',
      date: '2024 – 2027',
      badge: 'COMPTIA SECURITY',
      category: '网络安全',
      highlight: '零信任架构与 PKCE 密码学'
    },
    {
      id: 'stanford-ml',
      name: '机器学习专业认证',
      issuer: '斯坦福在线 & DeepLearning.AI',
      code: 'STAN-ML-9924',
      date: '2024',
      badge: 'STANFORD ONLINE',
      category: '人工智能与机器学习',
      highlight: '神经网络与大模型智能体'
    },
    {
      id: 'scrum-csm',
      name: '专业敏捷教练认证 (CSM)',
      issuer: 'Scrum Alliance International',
      code: 'CSM-001594832',
      date: '2024 – 2026',
      badge: 'SCRUM ALLIANCE',
      category: '敏捷领导力',
      highlight: '敏捷交付与冲刺效能'
    }
  ],
  ja: [
    {
      id: 'aws-saa',
      name: 'AWS 認定ソリューションアーキテクト – アソシエイト',
      issuer: 'Amazon Web Services (AWS)',
      code: 'SAA-84920',
      date: '2024 – 2027',
      badge: 'AWS CERTIFIED',
      category: 'クラウド設計',
      highlight: '高可用性設計＆エッジコンピューティング'
    },
    {
      id: 'comptia-sec',
      name: 'CompTIA Security+ (SY0-701)',
      issuer: 'CompTIA International',
      code: 'COMP001021',
      date: '2024 – 2027',
      badge: 'COMPTIA SECURITY',
      category: 'セキュリティ',
      highlight: 'ゼロトラスト＆暗号化技術'
    },
    {
      id: 'stanford-ml',
      name: '機械学習スペシャライゼーション',
      issuer: 'スタンフォード大学 & DeepLearning.AI',
      code: 'STAN-ML-9924',
      date: '2024',
      badge: 'STANFORD ONLINE',
      category: 'AI / 機械学習',
      highlight: 'ニューラルネットワーク＆エージェント'
    },
    {
      id: 'scrum-csm',
      name: '認定スクラムマスター® (CSM)',
      issuer: 'Scrum Alliance International',
      code: 'CSM-001594832',
      date: '2024 – 2026',
      badge: 'SCRUM ALLIANCE',
      category: 'アジャイル開発',
      highlight: 'スプリントデリバリー＆開発ベロシティ'
    }
  ]
};

export const translations = {
  vi: {
    nav: {
      home: "Trang chủ",
      credentials: "Chứng chỉ",
      blog: "Blog",
      themeToggle: "Chuyển giao diện",
      selectLanguage: "Chọn ngôn ngữ",
    },
    hero: {
      greeting: "Xin chào, tôi là",
      name: "Hoàng Nam",
      role: "Fullstack AI Engineering",
      tagline: "Không có vinh quang nào nảy mầm từ những đêm dễ chịu. Ta chấp nhận kỷ luật khắc nghiệt hôm nay, không phải để chứng minh với thế giới, mà để ngày mai không bao giờ phải cúi đầu trước bất kỳ ai.",
      ctaResume: "Xem CV",
      ctaVntez: "vntez",
      ctaBlog: "Blog",
      credentialsBtn: "Chứng chỉ",
      statusText: "Est. 2024 • TP. Hồ Chí Minh",
    },
    credentialsModal: {
      title: "Chứng chỉ & Năng lực Quốc tế",
      subtitle: "Xác thực chuyên môn từ AWS, CompTIA, Stanford & Scrum Alliance.",
      close: "Đóng",
      verified: "Đã xác thực",
      idLabel: "ID",
      escHint: "Bấm ESC hoặc nhấn ra ngoài để đóng",
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
      credentials: "Credentials",
      blog: "Blog",
      themeToggle: "Toggle theme",
      selectLanguage: "Select language",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Hoàng Nam",
      role: "Fullstack AI Engineering",
      tagline: "No glory ever sprouted from comfortable nights. We embrace harsh discipline today, not to prove anything to the world, but so tomorrow we never have to bow to anyone.",
      ctaResume: "My Resume",
      ctaVntez: "vntez",
      ctaBlog: "Blog",
      credentialsBtn: "Credentials",
      statusText: "Est. 2024 • Ho Chi Minh City",
    },
    credentialsModal: {
      title: "Verified Global Credentials",
      subtitle: "Verified competencies from AWS, CompTIA, Stanford & Scrum Alliance.",
      close: "Close",
      verified: "Verified",
      idLabel: "ID",
      escHint: "Press ESC or click outside to close",
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
      credentials: "专业认证",
      blog: "博客",
      themeToggle: "切换主题",
      selectLanguage: "选择语言",
    },
    hero: {
      greeting: "你好，我是",
      name: "黄南 (Hoàng Nam)",
      role: "Fullstack AI Engineering",
      tagline: "安逸之夜，绝难孕育荣耀之花。今日甘受严苛自律，非为向世人证明什么，而是为了明日不再向任何人低头。",
      ctaResume: "个人简历",
      ctaVntez: "vntez",
      ctaBlog: "博客",
      credentialsBtn: "专业认证",
      statusText: "Est. 2024 • 胡志明市",
    },
    credentialsModal: {
      title: "国际专业能力认证",
      subtitle: "经 AWS、CompTIA、斯坦福及 Scrum Alliance 官方权威验证。",
      close: "关闭",
      verified: "已验证",
      idLabel: "编号",
      escHint: "按 ESC 或点击外部以关闭",
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
      credentials: "保有資格",
      blog: "ブログ",
      themeToggle: "テーマ切り替え",
      selectLanguage: "言語選択",
    },
    hero: {
      greeting: "こんにちは、",
      name: "ホアン・ナム (Hoàng Nam)",
      role: "Fullstack AI Engineering",
      tagline: "心地よい夜から栄光が芽吹くことはない。今日、過酷な規律を受け入れるのは、世界に証明するためではなく、明日誰にも頭を下げないためだ。",
      ctaResume: "履歴書 (CV)",
      ctaVntez: "vntez",
      ctaBlog: "ブログ",
      credentialsBtn: "保有資格",
      statusText: "Est. 2024 • ホーチミン市",
    },
    credentialsModal: {
      title: "国際認定資格・証明",
      subtitle: "AWS、CompTIA、スタンフォード大学、Scrum Alliance 公認。",
      close: "閉じる",
      verified: "認証済み",
      idLabel: "ID",
      escHint: "ESCキーまたは外側クリックで閉じる",
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
