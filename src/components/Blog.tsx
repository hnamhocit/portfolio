import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, X, ArrowLeft, Calendar, Clock, Tag, Share2, Check,
  BookOpen, Sparkles, ChevronRight, ArrowUp, Sun, Moon, ExternalLink
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { marked } from 'marked';
import { useLanguage } from '@/store/useLanguage';
import { translations } from '@/i18n/translations';
import LanguageSelector from '@/components/LanguageSelector';
import { BLOG_POSTS, BLOG_CATEGORIES, type BlogPost } from '@/data/blogPosts';

export default function Blog() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.vi;
  const tb = t.blog;

  const [isDark, setIsDark] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Khởi tạo Theme
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle('dark', nextDark);
    localStorage.setItem('theme', nextDark ? 'dark' : 'light');
  };

  // Đồng bộ URL với bài viết đang chọn (?post=slug)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const postParam = params.get('post');
    if (postParam && BLOG_POSTS.some(p => p.slug === postParam)) {
      setSelectedSlug(postParam);
    }

    const handlePopState = () => {
      const p = new URLSearchParams(window.location.search);
      setSelectedSlug(p.get('post'));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Lắng nghe scroll để hiện nút Back to top
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPost = (slug: string) => {
    setSelectedSlug(slug);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('post', slug);
      window.history.pushState({}, '', url.toString());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToList = () => {
    setSelectedSlug(null);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('post');
      window.history.pushState({}, '', url.toString());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleShare = (post: BlogPost) => {
    if (typeof window !== 'undefined') {
      const shareUrl = `${window.location.origin}/blog?post=${post.slug}`;
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      });
    }
  };

  // Lọc bài viết theo danh mục & tìm kiếm
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === 'Tất cả' || post.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesQuery =
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q)) ||
        post.content.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  const activePost = useMemo(() => {
    if (!selectedSlug) return null;
    return BLOG_POSTS.find((p) => p.slug === selectedSlug) || null;
  }, [selectedSlug]);

  // Render markdown thành HTML an toàn với marked
  const renderedMarkdownHtml = useMemo(() => {
    if (!activePost) return '';
    try {
      return marked.parse(activePost.content, { async: false }) as string;
    } catch (e) {
      return '<p>Lỗi hiển thị nội dung bài viết.</p>';
    }
  }, [activePost]);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] font-sans antialiased selection:bg-purple-500/25 selection:text-purple-600 dark:selection:text-purple-300 transition-colors duration-300">
      
      {/* ============================================================ */}
      {/* HEADER: Đồng bộ hoàn toàn với trang chủ */}
      {/* ============================================================ */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)]/40 bg-white/95 dark:bg-[#10141E]/95 backdrop-blur-lg transition-colors">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Brand & Avatar */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src="/avatar.png" 
                alt="Hoàng Nam" 
                className="w-9 h-9 rounded-full object-cover border border-purple-500/40 group-hover:border-purple-500 transition-all duration-300 shadow-xs"
                onError={(e) => { e.currentTarget.src = "/favicon.svg"; }}
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[var(--bg)]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-[var(--text)] group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Hoàng Nam
              </span>
              <span className="text-[11px] text-[var(--muted)] font-mono leading-none">
                hnamhocit
              </span>
            </div>
          </a>

          {/* Navigation Links (Trang chủ & Blog) */}
          <nav className="flex items-center gap-6 sm:gap-8 text-xs sm:text-sm font-medium">
            <a href="/" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors">
              {t.nav.home}
            </a>
            <a href="/blog" className="text-purple-600 dark:text-purple-400 font-bold">
              {t.nav.blog}
            </a>
          </nav>

          {/* Right Actions: Language Switcher, GitHub, Theme Toggle */}
          <div className="flex items-center gap-2.5">
            <LanguageSelector />

            <a 
              href="https://github.com/hnamhocit" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-lg border border-[var(--border)]/60 bg-[var(--surface)] text-[var(--muted)] hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-500/40 transition-colors shadow-2xs"
              title="GitHub Profile"
            >
              <FaGithub size={15} />
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-[var(--border)]/60 bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--text)] transition-colors cursor-pointer shadow-2xs"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={15} className="text-purple-300" /> : <Moon size={15} />}
            </button>
          </div>

        </div>
      </header>

      {/* ============================================================ */}
      {/* MAIN CONTENT */}
      {/* ============================================================ */}
      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* NẾU ĐANG XEM CHI TIẾT BÀI VIẾT (MARKDOWN DETAIL VIEW) */}
          {activePost ? (
            <article className="animate-in fade-in duration-300">
              
              {/* Back Button & Share */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--border)]/30">
                <button
                  onClick={handleBackToList}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-medium text-purple-600 dark:text-purple-400 hover:underline cursor-pointer"
                >
                  <ArrowLeft size={16} />
                  <span>{tb.backToList}</span>
                </button>

                <button
                  onClick={() => handleShare(activePost)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[var(--border)]/60 bg-[var(--surface)] text-xs font-mono font-medium text-[var(--muted)] hover:text-purple-600 hover:border-purple-500/40 transition-all shadow-2xs cursor-pointer"
                  title={tb.sharePost}
                >
                  {copiedLink ? (
                    <>
                      <Check size={14} className="text-emerald-500" />
                      <span className="text-emerald-500 font-bold">{tb.linkCopied}</span>
                    </>
                  ) : (
                    <>
                      <Share2 size={14} />
                      <span>{tb.sharePost}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Article Header */}
              <header className="mb-10 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold">
                    {activePost.category}
                  </span>
                  <span className="text-[var(--dim)] flex items-center gap-1">
                    <Calendar size={13} />
                    <span>{activePost.publishedAt}</span>
                  </span>
                  <span className="text-[var(--dim)] flex items-center gap-1">
                    <Clock size={13} />
                    <span>{activePost.readTime} {tb.readTime}</span>
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-display font-extrabold text-[var(--text)] tracking-tight leading-snug">
                  {activePost.title}
                </h1>

                <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed italic border-l-2 border-purple-500/40 pl-4 py-1">
                  {activePost.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {activePost.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[var(--surface-subtle)] text-[var(--muted)]"
                    >
                      <Tag size={10} className="opacity-60" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </header>

              {/* Markdown Content Container */}
              <div 
                className="markdown-body text-sm sm:text-base leading-relaxed text-[var(--text)] space-y-6 pt-4 border-t border-[var(--border)]/30"
                dangerouslySetInnerHTML={{ __html: renderedMarkdownHtml }}
              />

              {/* Author Bio Box */}
              <div className="mt-16 p-6 rounded-3xl bg-[var(--surface)] border border-[var(--border)]/60 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.3)] flex flex-col sm:flex-row items-center gap-4">
                <img 
                  src="/avatar.png" 
                  alt="Hoàng Nam" 
                  className="w-14 h-14 rounded-full object-cover border-2 border-purple-500/30"
                  onError={(e) => { e.currentTarget.src = "/favicon.svg"; }}
                />
                <div className="space-y-1 text-center sm:text-left flex-1">
                  <h4 className="font-display font-bold text-base text-[var(--text)]">
                    Nguyễn Hoàng Nam (hnamhocit)
                  </h4>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    {tb.authorRole}
                  </p>
                </div>
                <button
                  onClick={handleBackToList}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-xs hover:brightness-110 transition-all shadow-sm cursor-pointer shrink-0"
                >
                  {tb.backToList}
                </button>
              </div>

            </article>
          ) : (

            /* NẾU ĐANG Ở DANH SÁCH BÀI VIẾT (LIST VIEW) */
            <div className="space-y-10">
              
              {/* Blog Hero Heading */}
              <div className="text-center space-y-3">
                <span className="text-xs font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5">
                  <BookOpen size={14} />
                  <span>TECHNICAL ARCHITECTURE &amp; DEEP-DIVES</span>
                </span>
                <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-[var(--text)] tracking-tight">
                  {tb.heroTitle}
                </h1>
                <p className="text-xs sm:text-sm text-[var(--muted)] max-w-xl mx-auto leading-relaxed">
                  {tb.heroSubtitle}
                </p>
              </div>

              {/* Search & Categories Bar */}
              <div className="space-y-4">
                
                {/* Search Input Box */}
                <div className="relative">
                  <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--dim)]" />
                  <input 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={tb.searchPlaceholder}
                    className="w-full pl-11 pr-10 py-3 rounded-2xl bg-[var(--surface)] border border-[var(--border)]/60 text-xs sm:text-sm text-[var(--text)] placeholder:text-[var(--dim)] focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/10 shadow-sm transition-all"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--dim)] hover:text-[var(--text)] p-1 rounded-full cursor-pointer"
                      title="Clear search"
                    >
                      <X size={15} />
                    </button>
                  )}
                </div>

                {/* Category Pills Filter */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                  {BLOG_CATEGORIES.map((cat) => {
                    const isSelected = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-purple-600 text-white font-bold shadow-sm shadow-purple-500/20'
                            : 'bg-[var(--surface)] border border-[var(--border)]/60 text-[var(--muted)] hover:border-purple-500/40 hover:text-[var(--text)]'
                        }`}
                      >
                        {cat === 'Tất cả' ? tb.allCategories : cat}
                      </button>
                    );
                  })}
                </div>

                {/* Results count */}
                <div className="flex items-center justify-between text-xs font-mono text-[var(--dim)] px-1">
                  <span>{tb.filterCount(filteredPosts.length)}</span>
                  {selectedCategory !== 'Tất cả' && (
                    <button 
                      onClick={() => setSelectedCategory('Tất cả')}
                      className="text-purple-600 dark:text-purple-400 hover:underline cursor-pointer"
                    >
                      {tb.allCategories}
                    </button>
                  )}
                </div>

              </div>

              {/* Articles Grid / List */}
              {filteredPosts.length > 0 ? (
                <div className="space-y-4">
                  {filteredPosts.map((post) => (
                    <div 
                      key={post.slug}
                      onClick={() => handleSelectPost(post.slug)}
                      className="p-6 sm:p-7 rounded-3xl bg-[var(--surface)] border border-[var(--border)]/40 hover:border-purple-500/40 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.25)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        {/* Meta strip */}
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                          <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold text-[11px]">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-3 text-[var(--dim)] text-[11px]">
                            <span>{post.publishedAt}</span>
                            <span>·</span>
                            <span>{post.readTime} {tb.readTime}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h2 className="font-display font-bold text-lg sm:text-xl text-[var(--text)] group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-snug">
                          {post.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Footer tags and read more */}
                      <div className="mt-5 pt-4 border-t border-[var(--border)]/30 flex items-center justify-between">
                        <div className="flex flex-wrap gap-1.5">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span 
                              key={tag}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-subtle)] text-[var(--dim)]"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <span className="text-xs font-mono font-medium text-purple-600 dark:text-purple-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          <span>Đọc tiếp</span>
                          <ChevronRight size={13} />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* No Results State */
                <div className="text-center py-16 px-4 rounded-3xl bg-[var(--surface)] border border-[var(--border)]/40 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mx-auto">
                    <Search size={20} />
                  </div>
                  <h3 className="font-display font-bold text-base text-[var(--text)]">
                    {tb.noResults}
                  </h3>
                  <p className="text-xs text-[var(--muted)] max-w-sm mx-auto">
                    {tb.noResultsDesc}
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('Tất cả');
                    }}
                    className="mt-2 px-4 py-2 rounded-xl bg-purple-600 text-white font-mono text-xs hover:brightness-110 transition-all cursor-pointer"
                  >
                    {tb.allCategories}
                  </button>
                </div>
              )}

            </div>
          )}

        </div>
      </main>

      {/* ============================================================ */}
      {/* FOOTER */}
      {/* ============================================================ */}
      <footer className="border-t border-[var(--border)]/30 bg-white dark:bg-[#10141E] py-8 text-center text-xs text-[var(--dim)] font-mono transition-colors">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Nguyễn Hoàng Nam (hnamhocit).</span>
          <span className="flex items-center gap-1 text-[var(--muted)]">
            {t.footer.quote}
          </span>
        </div>
      </footer>

      {/* ============================================================ */}
      {/* SCROLL TO TOP BUTTON */}
      {/* ============================================================ */}
      <button
        onClick={scrollToTop}
        aria-label={t.footer.scrollTop}
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-white dark:bg-[#10141E] border border-[var(--border)]/60 text-[var(--muted)] hover:text-purple-600 dark:hover:text-purple-400 shadow-lg shadow-black/5 hover:shadow-xl hover:border-purple-500/40 transition-all duration-300 cursor-pointer ${
          showScrollTop 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        title={t.footer.scrollTop}
      >
        <ArrowUp size={18} />
      </button>

    </div>
  );
}
