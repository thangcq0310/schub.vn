import { Link } from "react-router-dom"
import type { Product } from "@/data/seedData"
import { StatusBadge } from "@/components/StatusBadge"
import { useLang } from "@/lib/i18n"
import { cn } from "@/lib/utils"

interface BookCardProps {
  book: Product
}

const copy = {
  en: { details: "View details", price: "Price" },
  vi: { details: "Xem chi tiết", price: "Giá" },
}

export default function BookCard({ book }: BookCardProps) {
  const { lang } = useLang()
  const c = copy[lang]
  const priceClassName = book.free
    ? "border-[var(--color-success)]/20 bg-[var(--color-success)]/10 text-[var(--color-success)]"
    : "border-[var(--color-border)] bg-[var(--color-surface-raised)] text-[var(--color-text-muted)]"

  return (
    <div className="surface-panel card-hover flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] border-[var(--color-border)]">
      <div className="bg-[var(--color-primary)] p-5 text-white">
        <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-white/70">SCHUB.VN DIGITAL PRODUCT</p>
        <div className="mt-5 h-px w-12 bg-[var(--color-secondary)]" />
        <p className="mt-4 text-xs uppercase tracking-wide text-white/70">{book.category[lang]}</p>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex flex-wrap gap-2">
          <StatusBadge status={book.status} className="px-2.5" />
          <span className={cn("rounded-full border px-2.5 py-1 text-xs font-medium", priceClassName)}>
            {book.price[lang]}
          </span>
        </div>

        <h3 className="font-[var(--font-display)] text-xl leading-tight text-[var(--color-text)]">
          <Link to={`/solutions/products/${book.slug}`} className="hover:text-[var(--color-primary)]">
            {book.title[lang]}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-[var(--color-text-muted)]">{book.description[lang]}</p>
        <Link to={`/solutions/products/${book.slug}`} className="mt-4 text-sm font-medium text-[var(--color-primary)] hover:underline">
          {c.details}
        </Link>

        <div className="mt-5 border-t border-[var(--color-border)] pt-5">
          <div className="text-sm text-[var(--color-text-muted)]">{c.price}</div>
          <div className="mt-1 font-[var(--font-display)] text-xl text-[var(--color-text)]">{book.price[lang]}</div>
        </div>

        <Link
          to="/solutions/checklist"
          className="focus-ring mt-5 inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)] px-4 py-3 text-sm font-medium text-white transition-colors hover:brightness-110"
        >
          {book.ctaLabel[lang]}
        </Link>
      </div>
    </div>
  )
}
