import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Clock, User, ArrowLeft } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Container from "../components/layout/Container"
import { getArticleBySlug, getAllArticles, type Article } from "../lib/articles"
import { VideoEmbed } from "../components/VideoEmbed"

export function ArticleDetail() {
  const { slug } = useParams()
  const [article, setArticle] = useState<Article | null>(null)
  const [related, setRelated] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return
    getArticleBySlug(slug).then((a) => {
      setArticle(a)
      if (a) {
        getAllArticles().then((all) => {
          setRelated(all.filter((x) => x.id !== a.id && x.tags.some((t) => a.tags.includes(t))).slice(0, 3))
        })
      }
      setLoading(false)
    })
  }, [slug])

  if (loading) {
    return (
      <Container>
        <div className="py-12 text-center text-[var(--color-text-muted)]">Đang tải...</div>
      </Container>
    )
  }

  if (!article) {
    return (
      <Container>
        <div className="py-12 text-center">
          <h1 className="font-[var(--font-display)] text-2xl font-bold text-[var(--color-text)] mb-4">Bài viết không tồn tại</h1>
          <Link to="/blog" className="text-[var(--color-primary)] hover:opacity-80">← Quay lại Blog</Link>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <div className="py-12">
        <article className="max-w-3xl">
        <Link to="/blog" className="focus-ring inline-flex items-center gap-1 text-[var(--color-primary)] hover:opacity-80 mb-6">
          <ArrowLeft className="h-4 w-4" /> Quay lại Blog
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
            {article.readTimeMinutes} phút đọc
          </span>
        </div>
        
<div className="prose max-w-none">
  <p className="text-lg text-[var(--color-text-muted)] mb-8">{article.excerpt}</p>
  <div className="markdown-body text-[var(--color-text)]">
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        img: ({ src, alt }) => {
          if (!src) return null
          if (src.startsWith("video:") || /\.(mp4|webm|ogg)$/i.test(src)) {
            const videoSrc = src.startsWith("video:") ? src.slice(6) : src
            return <VideoEmbed src={videoSrc} title={alt} />
          }
          if (/(youtube\.com|youtu\.be|vimeo\.com)/i.test(src)) {
            return <VideoEmbed src={src} title={alt} />
          }
          return <img src={src} alt={alt ?? ""} className="max-w-full rounded-[var(--radius-md)]" />
        },
      }}
    >{article.body}</ReactMarkdown>
  </div>
</div>
      </article>
      
      {/* CTA at end of article */}
      <section className="surface-panel mt-12 rounded-[var(--radius-xl)] p-8 text-center">
        <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">Muốn áp dụng vào vận hành?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-[var(--color-text-muted)]">
          Bắt đầu bằng checklist 50 điểm hoặc xem các resources liên quan trong Solutions để chuyển từ đọc bài sang hành động.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            to="/solutions/checklist"
            className="focus-ring inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-colors hover:brightness-110"
          >
            Làm checklist 50 điểm
          </Link>
          <Link
            to="/solutions"
            className="focus-ring inline-flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-6 py-3 font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-border-strong)]"
          >
            Xem Solutions
          </Link>
        </div>
      </section>
      
      {related.length > 0 && (
          <div className="mt-12 pt-12 border-t border-[var(--color-border)]">
            <h2 className="font-[var(--font-display)] text-xl text-[var(--color-text)] mb-6">Bài viết liên quan</h2>
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