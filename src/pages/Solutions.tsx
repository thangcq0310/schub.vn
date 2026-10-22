import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { Briefcase, FileText, LayoutDashboard, Wrench } from "lucide-react"
import Container from "@/components/layout/Container"
import { SEO } from "@/components/SEO"
import { SolutionCategoryCard } from "@/components/solutions/SolutionCategoryCard"
import { SolutionCard } from "@/components/solutions/SolutionCard"
import { categories, solutions, useCases } from "@/data/solutions"
import { useLang } from "@/lib/i18n"

const categoryIcons: Record<string, typeof Wrench> = {
  resources: FileText,
  products: LayoutDashboard,
  tools: Wrench,
  services: Briefcase,
}

const en = {
  seoTitle: "Solutions for practical supply chain",
  seoDescription: "Resources, digital products, tools and services that help optimize operations, manage data and improve the supply chain.",
  eyebrow: "Solutions / Supply chain solutions",
  title: "Solutions for practical supply chain",
  intro: "From free Resources to Digital Products, Tools and Services, SCHub.vn helps businesses start small, apply quickly and scale with real needs.",
  primaryCta: "See the 4 solution groups",
  secondaryCta: "Start with free Resources",
  groupsTitle: "4 solution groups",
  groupsIntro: "Each group is one way a business can start tackling a supply chain problem: free resources, digital products, tools or services.",
  listTitle: "Solutions by operating problem",
  listIntro: "Pick by the problem you face: Warehouse, Logistics Cost, SOP, Inventory, system readiness or dashboards.",
  all: "All",
  empty: "No solutions in this group yet. SCHub will add more as each group is completed.",
  useCasesTitle: "Real use cases",
  useCasesIntro: "Use cases that help you decide whether to start from a resource, tool, digital product or service.",
  customTitle: "Need a tool or solution built for your business?",
  customBody: "SCHub can help design checklists, dashboards, templates or internal tools that fit how you actually operate.",
  customCta: "Talk to us",
}

const vi: typeof en = {
  seoTitle: "Solutions cho Supply Chain thực chiến",
  seoDescription: "Resources, digital products, tools và services giúp tối ưu vận hành, quản trị dữ liệu và cải thiện Supply Chain.",
  eyebrow: "Solutions / Giải pháp Supply Chain",
  title: "Solutions cho Supply Chain thực chiến",
  intro: "Từ Resources miễn phí, Digital Products, Tools đến Services — SCHub.vn giúp doanh nghiệp bắt đầu nhỏ, áp dụng nhanh và mở rộng theo nhu cầu thực tế.",
  primaryCta: "Xem 4 nhóm Solutions",
  secondaryCta: "Bắt đầu với Resources miễn phí",
  groupsTitle: "4 nhóm Solutions",
  groupsIntro: "Mỗi nhóm đại diện cho một cách doanh nghiệp bắt đầu xử lý bài toán Supply Chain: từ resources miễn phí, digital products, tools đến services.",
  listTitle: "Solutions theo bài toán vận hành",
  listIntro: "Chọn theo vấn đề doanh nghiệp đang gặp: Warehouse, Logistics Cost, SOP, Inventory, system readiness hoặc Dashboard.",
  all: "Tất cả",
  empty: "Chưa có solution cho nhóm này. SCHub sẽ bổ sung thêm khi hoàn thiện từng nhóm.",
  useCasesTitle: "Use cases thực tế",
  useCasesIntro: "Các use case giúp doanh nghiệp xác định nên bắt đầu từ resource, tool, digital product hay service.",
  customTitle: "Bạn cần một tool hoặc solution riêng cho doanh nghiệp?",
  customBody: "SCHub có thể hỗ trợ thiết kế checklist, dashboard, template hoặc internal tool phù hợp với quy trình vận hành thực tế.",
  customCta: "Liên hệ tư vấn",
}

const copy = { en, vi }

export function Solutions() {
  const { lang } = useLang()
  const c = copy[lang]
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const filteredSolutions = useMemo(() => {
    if (selectedCategory === "all") return solutions
    const activeCategory = categories.find((item) => item.slug === selectedCategory)?.title
    return solutions.filter((item) => item.category === activeCategory)
  }, [selectedCategory])

  return (
    <>
      <SEO
        title={c.seoTitle}
        description={c.seoDescription}
        url="https://schub.vn/solutions"
      />

      <div className="bg-[linear-gradient(180deg,rgba(7,44,44,0.06)_0%,rgba(237,234,222,1)_40%,rgba(237,234,222,1)_100%)]">
        <section className="py-20 lg:py-24">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--color-secondary)]">
                  {c.eyebrow}
                </p>
                <h1 className="mt-4 font-[var(--font-display)] text-4xl font-bold text-[var(--color-text)] md:text-5xl">
                  {c.title}
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-text-muted)]">{c.intro}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#categories"
                    className="focus-ring inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-colors hover:brightness-110"
                  >
                    {c.primaryCta}
                  </a>
                  <Link
                    to="/solutions/resources"
                    className="focus-ring inline-flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-6 py-3 font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-border-strong)]"
                  >
                    {c.secondaryCta}
                  </Link>
                </div>
              </div>

              <div className="surface-panel rounded-[var(--radius-xl)] p-6 lg:p-8">
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                  Solution Architecture
                </p>
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {categories.map((category) => {
                    const Icon = categoryIcons[category.slug] ?? Wrench
                    return (
                      <div key={category.slug} className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4">
                        <Icon className="h-5 w-5 text-[var(--color-primary)]" />
                        <h2 className="mt-3 font-[var(--font-display)] text-xl text-[var(--color-text)]">{category.title}</h2>
                        <p className="mt-2 text-sm text-[var(--color-text-muted)]">{category.description[lang]}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="categories" className="py-16">
          <Container>
            <div className="mb-8 max-w-3xl">
              <h2 className="font-[var(--font-display)] text-3xl text-[var(--color-text)]">{c.groupsTitle}</h2>
              <p className="mt-3 text-[var(--color-text-muted)]">{c.groupsIntro}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {categories.map((category) => (
                <SolutionCategoryCard key={category.slug} category={category} />
              ))}
            </div>
          </Container>
        </section>

        <section id="solutions-list" className="py-16">
          <Container>
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="font-[var(--font-display)] text-3xl text-[var(--color-text)]">{c.listTitle}</h2>
                <p className="mt-3 text-[var(--color-text-muted)]">{c.listIntro}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedCategory("all")}
                  className={selectedCategory === "all"
                    ? "rounded-full border border-[var(--color-primary)] bg-[var(--color-primary)] px-3 py-1.5 text-sm font-medium text-white"
                    : "rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-1.5 text-sm font-medium text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"}
                >
                  {c.all}
                </button>
                {categories.map((category) => (
                  <button
                    key={category.slug}
                    type="button"
                    onClick={() => setSelectedCategory(category.slug)}
                    className={selectedCategory === category.slug
                      ? "rounded-full border border-[var(--color-primary)] bg-[var(--color-primary)] px-3 py-1.5 text-sm font-medium text-white"
                      : "rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-1.5 text-sm font-medium text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>

            {filteredSolutions.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredSolutions.map((solution) => (
                  <SolutionCard key={solution.slug} solution={solution} />
                ))}
              </div>
            ) : (
              <div className="surface-panel rounded-[var(--radius-xl)] p-8 text-center text-[var(--color-text-muted)]">
                {c.empty}
              </div>
            )}
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <div className="mb-8 max-w-3xl">
              <h2 className="font-[var(--font-display)] text-3xl text-[var(--color-text)]">{c.useCasesTitle}</h2>
              <p className="mt-3 text-[var(--color-text-muted)]">{c.useCasesIntro}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {useCases.map((useCase, index) => (
                <div key={useCase.en} className="surface-panel card-hover flex items-start gap-3 rounded-[var(--radius-xl)] p-5">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-secondary)]/12 text-sm font-semibold text-[var(--color-secondary)]">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-6 text-[var(--color-text)]">{useCase[lang]}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <div className="surface-panel rounded-[var(--radius-xl)] border border-[var(--color-border-strong)] p-8 text-center lg:p-10">
              <h2 className="font-[var(--font-display)] text-3xl text-[var(--color-text)]">{c.customTitle}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-muted)]">{c.customBody}</p>
              <Link
                to="/solutions/services"
                className="focus-ring mt-6 inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-secondary)] px-6 py-3 font-medium text-white transition-colors hover:brightness-105"
              >
                {c.customCta}
              </Link>
            </div>
          </Container>
        </section>
      </div>
    </>
  )
}