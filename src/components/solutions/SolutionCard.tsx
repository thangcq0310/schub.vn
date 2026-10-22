import { Link } from "react-router-dom"
import type { SolutionItem } from "@/data/solutions"
import { useLang } from "@/lib/i18n"

interface SolutionCardProps {
  solution: SolutionItem
}

export function SolutionCard({ solution }: SolutionCardProps) {
  const { lang } = useLang()

  return (
    <article className="surface-panel card-hover flex h-full flex-col rounded-[var(--radius-xl)] p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)]">
          {solution.category}
        </span>
      </div>

      <h3 className="mt-4 font-[var(--font-display)] text-2xl text-[var(--color-text)]">
        {solution.title[lang]}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-[var(--color-text-muted)]">
        {solution.description[lang]}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {solution.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[var(--color-border)] px-2.5 py-1 text-xs text-[var(--color-text-muted)]"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        to={solution.href}
        className="mt-6 text-sm font-medium text-[var(--color-primary)] hover:underline"
      >
        {lang === "en" ? "View details" : "Xem chi tiết"}
      </Link>
    </article>
  )
}
