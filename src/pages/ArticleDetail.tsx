import { useParams, Link, Navigate } from "react-router-dom"
import { Clock, User, ArrowLeft } from "lucide-react"
import Container from "../components/layout/Container"
import { useArticles } from "../lib/useArticles"
import { ArticleMarkdown } from "../components/ArticleMarkdown"
import { useLang } from "../lib/i18n"

// Old slugs of renamed posts, kept so links already shared still work
const renamedSlugs: Record<string, string> = {
  "noi đau-du-bao-nhu-cau-nong-san-va-cach-xu-ly-tan-goc": "noi-dau-du-bao-nhu-cau-nong-san-va-cach-xu-ly-tan-goc",
  "chiens-luoc-mua-hang-khi-nong-san-nhay-gia-hang-ngay": "chien-luoc-mua-hang-khi-nong-san-nhay-gia-hang-ngay",
}

const en = {
  loading: "Loading article...",
  notFound: "Article not found",
  back: "Back to Blog",
  minRead: "min read",
  onlyVietnamese: "This article is currently only available in Vietnamese.",
  ctaTitle: "Want to apply this in your operations?",
  ctaBody: "Start with the 50-point checklist or browse related resources in Solutions to move from reading to action.",
  ctaChecklist: "Take the 50-point checklist",
  ctaSolutions: "Browse Solutions",
  related: "Related articles",
}

const vi: typeof en = {
  loading: "Đang tải bài viết...",
  notFound: "Bài viết không tồn tại",
  back: "Quay lại Blog",
  minRead: "phút đọc",
  onlyVietnamese: "Bài viết này hiện chỉ có bản tiếng Việt.",
  ctaTitle: "Muốn áp dụng vào vận hành?",
  ctaBody: "Bắt đầu bằng checklist 50 điểm hoặc xem các resources liên quan trong Solutions để chuyển từ đọc bài sang hành động.",
  ctaChecklist: "Làm checklist 50 điểm",
  ctaSolutions: "Xem Solutions",
  related: "Bài viết liên quan",
}

const copy = { en, vi }

export function ArticleDetail() {
  const { lang } = useLang()
  const c = copy[lang]
  const { slug } = useParams()
  const { articles: allArticles, loading } = useArticles()
  const article = slug ? allArticles.find((a) => a.slug === slug) ?? null : null
  const related = article
    ? allArticles.filter((x) => x.id !== article.id && x.tags.some((t) => article.tags.includes(t))).slice(0, 3)
    : []

  if (slug && renamedSlugs[slug]) {
    return <Navigate to={`/blog/${renamedSlugs[slug]}`} replace />
  }

  if (!article) {
    if (loading) {
      return (
        <Container>
          <div className="py-12 text-center text-[var(--color-text-muted)]">{c.loading}</div>
        </Container>
      )
    }
    return (
      <Container>
        <div className="py-12 text-center">
          <h1 className="font-[var(--font-display)] text-2xl font-bold text-[var(--color-text)] mb-4">{c.notFound}</h1>
          <Link to="/blog" className="text-[var(--color-primary)] hover:opacity-80">← {c.back}</Link>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <div className="py-12">
        <article className="max-w-3xl">
        <Link to="/blog" className="focus-ring inline-flex items-center gap-1 text-[var(--color-primary)] hover:opacity-80 mb-6">
          <ArrowLeft className="h-4 w-4" /> {c.back}
        </Link>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map(tag => (
            <span key={tag} className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)]">
              {tag}
            </span>
          ))}
        </div>
        
        <h1 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">{article.title}</h1>
        
        <div className="flex items-center gap-6 text-sm text-[var(--color-text-muted)] mb-8">
          <span className="flex items-center gap-1">
            <User className="h-4 w-4" />
            {article.authorName}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {article.readTimeMinutes} {c.minRead}
          </span>
        </div>
        
{article.contentLang !== lang && (
  <p className="mb-6 rounded-[var(--radius-md)] border border-[var(--color-secondary)]/30 bg-[var(--color-secondary)]/10 px-4 py-3 text-sm text-[var(--color-text)]">
    {c.onlyVietnamese}
  </p>
)}
<div className="prose max-w-none" lang={article.contentLang}>
  <p className="text-lg text-[var(--color-text-muted)] mb-8">{article.excerpt}</p>
  <div className="markdown-body text-[var(--color-text)]">
    <ArticleMarkdown>{article.body}</ArticleMarkdown>
  </div>
</div>
      </article>
      
      {/* CTA at end of article */}
      <section className="surface-panel mt-12 rounded-[var(--radius-xl)] p-8 text-center">
        <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">{c.ctaTitle}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-[var(--color-text-muted)]">{c.ctaBody}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            to="/solutions/checklist"
            className="focus-ring inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-colors hover:brightness-110"
          >
            {c.ctaChecklist}
          </Link>
          <Link
            to="/solutions"
            className="focus-ring inline-flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-6 py-3 font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-border-strong)]"
          >
            {c.ctaSolutions}
          </Link>
        </div>
      </section>
      
      {related.length > 0 && (
          <div className="mt-12 pt-12 border-t border-[var(--color-border)]">
            <h2 className="font-[var(--font-display)] text-xl text-[var(--color-text)] mb-6">{c.related}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map(a => (
                <Link key={a.id} to={`/blog/${a.slug}`} className="surface-panel card-hover block rounded-[var(--radius-xl)] p-5">
                  <h3 className="font-[var(--font-display)] text-lg text-[var(--color-text)] mb-2">{a.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] line-clamp-2">{a.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}