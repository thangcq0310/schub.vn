import { useLang, type Lang } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const options: { value: Lang; label: string; name: string }[] = [
  { value: "en", label: "EN", name: "English" },
  { value: "vi", label: "VI", name: "Tiếng Việt" },
]

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLang()

  return (
    <div
      role="group"
      aria-label="Language / Ngôn ngữ"
      className={cn(
        "inline-flex rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-0.5",
        className,
      )}
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          lang={option.value}
          title={option.name}
          aria-pressed={lang === option.value}
          onClick={() => setLang(option.value)}
          className={cn(
            "focus-ring min-w-[2.5rem] rounded-[calc(var(--radius-md)-2px)] px-2.5 py-1.5 text-xs font-semibold tracking-wide transition-colors",
            lang === option.value
              ? "bg-[var(--color-primary)] text-white"
              : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
