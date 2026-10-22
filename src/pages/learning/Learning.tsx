import { Link } from "react-router-dom"
import Container from "@/components/layout/Container"
import { StatusBadge } from "@/components/StatusBadge"
import { learningPaths } from "@/data/learningPaths"
import { useLang } from "@/lib/i18n"

// Recommended learning order
const learningOrder = [
  { label: "Supply Chain Foundation", href: "/learning/supply-chain-foundation" },
  { label: "Demand Analysis", href: "/learning/demand-analysis" },
  { label: "Demand Management", href: "/learning/demand-management" },
  { label: "Forecasting", href: "/learning/forecasting" },
  { label: "S&OP", href: "/learning/sop" },
  { label: "Operations Planning", href: "/learning/operations-planning-control" },
]

const en = {
  title: "Supply Chain Learning Hub",
  intro: "Practical learning paths that take you from Supply Chain Foundation to Demand Analysis, Demand Management, Forecasting, S&OP and Operations Planning.",
  orderTitle: "In what order should I learn?",
  orderBody: "If you are just starting, begin with the foundation, then move on to demand, forecasting, S&OP and planning control.",
  viewPath: "View learning path",
}

const vi: typeof en = {
  title: "Learning Hub Supply Chain",
  intro: "Các learning path thực chiến giúp bạn đi từ Supply Chain Foundation đến Demand Analysis, Demand Management, Forecasting, S&OP và Operations Planning.",
  orderTitle: "Nên học theo thứ tự nào?",
  orderBody: "Nếu mới bắt đầu, hãy đi từ foundation trước, sau đó chuyển sang demand, forecast, S&OP và planning control.",
  viewPath: "Xem lộ trình",
}

const copy = { en, vi }

export function Learning() {
  const { lang } = useLang()
  const c = copy[lang]

  return (
    <Container>
      <div className="py-16">
        <div className="mb-10 max-w-4xl">
          <h1 className="font-[var(--font-display)] text-4xl font-bold text-[var(--color-text)]">{c.title}</h1>
          <p className="mt-4 text-lg text-[var(--color-text-muted)]">{c.intro}</p>
        </div>

        {/* Learning order recommendation */}
        <div className="surface-panel mb-10 rounded-[var(--radius-xl)] p-6">
          <h2 className="font-[var(--font-display)] text-xl text-[var(--color-text)]">{c.orderTitle}</h2>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">{c.orderBody}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {learningOrder.map((item, i) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-1.5 text-sm text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-xs font-medium text-[var(--color-primary)]">
                  {i + 1}
                </span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {learningPaths.map((path) => (
            <Link key={path.slug} to={`/learning/${path.slug}`} className="surface-panel card-hover block rounded-[var(--radius-xl)] p-6">
              <div className="flex flex-wrap gap-2">
                <StatusBadge status={path.status} />
              </div>
              <p className="mt-4 font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">Learning Path</p>
              <h2 className="mt-3 font-[var(--font-display)] text-2xl text-[var(--color-text)]">{path.heading[lang]}</h2>
              {path.heading[lang] !== path.title && (
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{path.title}</p>
              )}
              <p className="mt-4 text-sm leading-6 text-[var(--color-text-muted)]">{path.description[lang]}</p>
              <div className="mt-5 text-sm font-medium text-[var(--color-primary)]">{c.viewPath}</div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  )
}
