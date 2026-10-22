import { Link } from "react-router-dom"
import type { Tool } from "@/data/seedData"
import { StatusBadge } from "@/components/StatusBadge"
import { useLang } from "@/lib/i18n"

interface ToolCardProps {
  tool: Tool
}

export default function ToolCard({ tool }: ToolCardProps) {
  const { lang } = useLang()

  return (
    <div className="surface-panel card-hover flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] border-[var(--color-border)]">
      <div className="bg-[var(--color-secondary)] p-5 text-white">
        <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-white/70">SCHUB.VN TOOLKIT</p>
        <div className="mt-5 h-px w-12 bg-white/70" />
        <p className="mt-4 text-xs uppercase tracking-wide text-white/70">{tool.category}</p>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4">
          <StatusBadge status={tool.status} className="px-2.5" />
        </div>
        <h3 className="font-[var(--font-display)] text-xl leading-tight text-[var(--color-text)]">{tool.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-[var(--color-text-muted)]">{tool.description[lang]}</p>
        <div className="mt-5 border-t border-[var(--color-border)] pt-5">
          <div className="text-xs uppercase tracking-wide text-[var(--color-text-muted)]">Category</div>
          <div className="mt-1 text-sm font-medium text-[var(--color-text)]">{tool.category}</div>
        </div>
        <Link
          to="/solutions/checklist"
          className="focus-ring mt-5 inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-secondary)] px-4 py-3 text-sm font-medium text-white transition-colors hover:brightness-105"
        >
          {tool.ctaLabel[lang]}
        </Link>
      </div>
    </div>
  )
}
