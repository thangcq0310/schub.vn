import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { Briefcase, FileText, LayoutDashboard, Wrench } from "lucide-react"
import Container from "@/components/layout/Container"
import { SEO } from "@/components/SEO"
import { SolutionCategoryCard } from "@/components/solutions/SolutionCategoryCard"
import { SolutionCard } from "@/components/solutions/SolutionCard"
import { categories, solutions, useCases } from "@/data/solutions"

const categoryIcons: Record<string, typeof Wrench> = {
  resources: FileText,
  products: LayoutDashboard,
  tools: Wrench,
  services: Briefcase,
}

export function Solutions() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const filteredSolutions = useMemo(() => {
    if (selectedCategory === "all") return solutions
    const activeCategory = categories.find((item) => item.slug === selectedCategory)?.title
    return solutions.filter((item) => item.category === activeCategory)
  }, [selectedCategory])

  return (
    <>
      <SEO
        title="Solutions cho Supply Chain thực chiến"
        description="Resources, digital products, tools và services giúp tối ưu vận hành, quản trị dữ liệu và cải thiện Supply Chain."
        url="https://schub.vn/solutions"
      />

      <div className="bg-[linear-gradient(180deg,rgba(7,44,44,0.06)_0%,rgba(237,234,222,1)_40%,rgba(237,234,222,1)_100%)]">
        <section className="py-20 lg:py-24">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--color-secondary)]">
                  Solutions / Giải pháp Supply Chain
                </p>
                <h1 className="mt-4 font-[var(--font-display)] text-4xl font-bold text-[var(--color-text)] md:text-5xl">
                  Solutions cho Supply Chain thực chiến
                </h1>
                 <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-text-muted)]">
                   Từ Resources miễn phí, Digital Products, Tools đến Services — SCHub.vn giúp doanh nghiệp bắt đầu nhỏ, áp dụng nhanh và mở rộng theo nhu cầu thực tế.
                 </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#categories"
                    className="focus-ring inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-colors hover:brightness-110"
                  >
                    Xem 4 nhóm Solutions
                  </a>
                  <Link
                    to="/solutions/resources"
                    className="focus-ring inline-flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-6 py-3 font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-border-strong)]"
                  >
                    Bắt đầu với Resources miễn phí
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
                        <p className="mt-2 text-sm text-[var(--color-text-muted)]">{category.description}</p>
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
              <h2 className="font-[var(--font-display)] text-3xl text-[var(--color-text)]">4 nhóm Solutions</h2>
              <p className="mt-3 text-[var(--color-text-muted)]">
                Mỗi nhóm đại diện cho một cách doanh nghiệp bắt đầu xử lý bài toán Supply Chain: từ resources miễn phí, digital products, tools đến services.
              </p>
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
                <h2 className="font-[var(--font-display)] text-3xl text-[var(--color-text)]">Solutions theo bài toán vận hành</h2>
                <p className="mt-3 text-[var(--color-text-muted)]">
                  Chọn theo vấn đề doanh nghiệp đang gặp: Warehouse, Logistics Cost, SOP, Inventory, system readiness hoặc Dashboard.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedCategory("all")}
                  className={selectedCategory === "all"
                    ? "rounded-full border border-[var(--color-primary)] bg-[var(--color-primary)] px-3 py-1.5 text-sm font-medium text-white"
                    : "rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-1.5 text-sm font-medium text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"}
                >
                  Tất cả
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
                Chưa có solution cho nhóm này. SCHub sẽ bổ sung thêm khi hoàn thiện từng nhóm.
              </div>
            )}
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <div className="mb-8 max-w-3xl">
              <h2 className="font-[var(--font-display)] text-3xl text-[var(--color-text)]">Use cases thực tế</h2>
              <p className="mt-3 text-[var(--color-text-muted)]">
                Các use case giúp doanh nghiệp xác định nên bắt đầu từ resource, tool, digital product hay service.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {useCases.map((useCase, index) => (
                <div key={useCase} className="surface-panel card-hover flex items-start gap-3 rounded-[var(--radius-xl)] p-5">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-secondary)]/12 text-sm font-semibold text-[var(--color-secondary)]">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-6 text-[var(--color-text)]">{useCase}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <div className="surface-panel rounded-[var(--radius-xl)] border border-[var(--color-border-strong)] p-8 text-center lg:p-10">
              <h2 className="font-[var(--font-display)] text-3xl text-[var(--color-text)]">
                Bạn cần một tool hoặc solution riêng cho doanh nghiệp?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-muted)]">
                SCHub có thể hỗ trợ thiết kế checklist, dashboard, template hoặc internal tool phù hợp với quy trình vận hành thực tế.
              </p>
              <Link
                to="/solutions/services"
                className="focus-ring mt-6 inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-secondary)] px-6 py-3 font-medium text-white transition-colors hover:brightness-105"
              >
                Liên hệ tư vấn
              </Link>
            </div>
          </Container>
        </section>
      </div>
    </>
  )
}