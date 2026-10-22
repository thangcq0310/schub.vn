import { useState } from "react"
import Container from "../components/layout/Container"
import ToolCard from "../components/cards/ToolCard"
import { seedTools } from "../data/seedData"
import { useLang } from "../lib/i18n"

const ALL = "all"
const categories = ["Inventory", "Planning", "3PL", "Logistics Cost", "Warehouse"]

const en = {
  all: "All",
  title: "Tools",
  intro: "Early-stage tools that show where SCHub is heading: calculators, estimators and planners that help supply chain teams decide faster.",
  ctaTitle: "Want the checklist and news about new products?",
  ctaBody: "Leave your email and SCHub.vn will send you the free checklist and let you know when new templates, playbooks or tools are released.",
  ctaButton: "Leave your email",
}

const vi: typeof en = {
  all: "Tất cả",
  title: "Công cụ",
  intro: "Các công cụ skeleton giúp SCHub thể hiện định hướng sản phẩm: calculator, estimator và planner hỗ trợ đội ngũ Supply Chain ra quyết định nhanh hơn.",
  ctaTitle: "Muốn nhận checklist và thông báo sản phẩm mới?",
  ctaBody: "Để lại email để SCHub.vn gửi checklist miễn phí và thông báo khi template, playbook hoặc công cụ mới được phát hành.",
  ctaButton: "Để lại email",
}

const copy = { en, vi }

export function Tools() {
  const c = copy[useLang().lang]
  const [selectedCategory, setSelectedCategory] = useState(ALL)

  const filtered = seedTools.filter((tool) => {
    if (selectedCategory !== ALL && tool.category !== selectedCategory) return false
    return true
  })

  const filters = [{ key: ALL, label: c.all }, ...categories.map((category) => ({ key: category, label: category }))]

  return (
    <Container>
      <div className="py-16">
        <div className="mb-10 max-w-4xl">
          <h1 className="font-[var(--font-display)] text-4xl font-bold text-[var(--color-text)]">{c.title}</h1>
          <p className="mt-4 text-lg text-[var(--color-text-muted)]">{c.intro}</p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              onClick={() => setSelectedCategory(filter.key)}
              className={
                selectedCategory === filter.key
                  ? "rounded-full border border-[var(--color-secondary)] bg-[var(--color-secondary)] px-3 py-1.5 text-sm font-medium text-white"
                  : "rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-1.5 text-sm font-medium text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              }
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        <div className="surface-panel mt-12 rounded-[var(--radius-xl)] p-8 text-center">
          <h2 className="font-[var(--font-display)] text-3xl text-[var(--color-text)]">{c.ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[var(--color-text-muted)]">{c.ctaBody}</p>
          <a
            href="/solutions/checklist"
            className="focus-ring mt-6 inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-colors hover:brightness-110"
          >
            {c.ctaButton}
          </a>
        </div>
      </div>
    </Container>
  )
}
