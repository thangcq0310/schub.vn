import { Link } from "react-router-dom"
import { Clock, User } from "lucide-react"
import type { Article } from "../../data/articles"

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const primaryTag = article.tags[0] ?? "Supply Chain"

  return (
    <Link
      to={`/blog/${article.slug}`}
      className="surface-panel card-hover flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)]"
    >
      <div className="bg-[var(--color-primary)] p-5 text-white">
        <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-white/70">
          THỰC CHIẾN SCM
        </p>
        <div className="mt-5 h-px w-12 bg-[var(--color-secondary)]" />
        <p className="mt-4 text-xs uppercase tracking-wide text-white/70">
          {primaryTag}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {article.tags.slice(0, 2).map(tag => (
            <span
              key={tag}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-[var(--color-text-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-[var(--font-display)] text-xl leading-tight text-[var(--color-text)]">
          {article.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm text-[var(--color-text-muted)]">
          {article.excerpt}
        </p>
        <div className="mt-auto flex items-center gap-4 pt-5 text-xs text-[var(--color-text-muted)]">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {article.readTimeMinutes} phút
          </span>
          <span className="flex items-center gap-1">
            <User className="h-3 w-3" />
            {article.authorName}
          </span>
        </div>
      </div>
    </Link>
  )
}
