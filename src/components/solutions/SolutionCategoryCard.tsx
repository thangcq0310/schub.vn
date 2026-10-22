import { Link } from "react-router-dom"
import type { SolutionCategory } from "@/data/solutions"
import { useLang } from "@/lib/i18n"

interface SolutionCategoryCardProps {
  category: SolutionCategory
}

export function SolutionCategoryCard({ category }: SolutionCategoryCardProps) {
  const { lang } = useLang()

  return (
    <Link to={category.href} className="surface-panel card-hover block rounded-[var(--radius-xl)] p-6">
      <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
        {category.slug}
      </p>
      <h3 className="mt-3 font-[var(--font-display)] text-2xl text-[var(--color-text)]">
        {category.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
        {category.description[lang]}
      </p>
      <div className="mt-5 text-sm font-medium text-[var(--color-primary)]">{lang === "en" ? "Open this group" : "Mở nhóm giải pháp"}</div>
    </Link>
  )
}
