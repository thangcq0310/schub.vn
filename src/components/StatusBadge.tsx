import { statusLabels, type ContentStatus } from "@/data/status"
import { useLang } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const statusClasses: Record<ContentStatus, string> = {
  available: "border-[var(--color-success)]/20 bg-[var(--color-success)]/10 text-[var(--color-success)]",
  free: "border-[var(--color-success)]/20 bg-[var(--color-success)]/10 text-[var(--color-success)]",
  "in-progress": "border-[var(--color-warning)]/20 bg-[var(--color-warning)]/10 text-[var(--color-warning)]",
  "coming-soon": "border-[var(--color-secondary)]/20 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]",
}

export function StatusBadge({ status, className }: { status: ContentStatus; className?: string }) {
  const { lang } = useLang()

  return (
    <span className={cn("rounded-full border px-3 py-1 text-xs font-medium", statusClasses[status], className)}>
      {statusLabels[status][lang]}
    </span>
  )
}
