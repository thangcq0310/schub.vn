import { Link } from "react-router-dom"
import Container from "@/components/layout/Container"
import { StatusBadge } from "@/components/StatusBadge"
import type { ContentStatus } from "@/data/status"
import { useLang, type Localized } from "@/lib/i18n"

interface Resource {
  title: Localized
  type: string
  status: ContentStatus
  learningPath: Localized
  description: Localized
  href: string
  ctaLabel: Localized
}

const viewTool: Localized = { en: "View tool", vi: "Xem tool" }

const resources: Resource[] = [
  {
    title: { en: "50-point supply chain self-assessment checklist", vi: "Checklist 50 điểm tự đánh giá Supply Chain" },
    type: "Checklist",
    status: "free",
    learningPath: { en: "All", vi: "Tất cả" },
    description: {
      en: "Assess 6 capability groups: Planning, Procurement, Inventory, Warehouse & Logistics, Data/KPI/Digital and Governance.",
      vi: "Tự đánh giá 6 nhóm năng lực: Planning, Procurement, Inventory, Warehouse & Logistics, Data/KPI/Digital và Governance.",
    },
    href: "/solutions/checklist",
    ctaLabel: { en: "Take the checklist", vi: "Làm checklist" },
  },
  {
    title: { en: "Master Data Audit Checklist", vi: "Master Data Audit Checklist" },
    type: "Checklist",
    status: "free",
    learningPath: { en: "Supply Chain Foundation", vi: "Supply Chain Foundation" },
    description: {
      en: "Review master data before an ERP/WMS/SAP rollout, focused on UoM, gross weight, batch rules, shelf life and location master.",
      vi: "Rà soát Master Data trước khi triển khai ERP/WMS/SAP, tập trung vào UoM, gross weight, batch rule, shelf-life và location master.",
    },
    href: "/solutions/products/master-data-audit-checklist",
    ctaLabel: { en: "View checklist", vi: "Xem checklist" },
  },
  {
    title: { en: "Supply Chain Maturity Assessment", vi: "Supply Chain Maturity Assessment" },
    type: "Assessment",
    status: "coming-soon",
    learningPath: { en: "Supply Chain Foundation", vi: "Supply Chain Foundation" },
    description: {
      en: "Assess supply chain maturity from ad hoc to integrated planning, cross-functional governance and data-driven decisions.",
      vi: "Đánh giá mức độ trưởng thành SCM từ ad-hoc đến integrated planning, cross-functional governance và data-driven decision.",
    },
    href: "/solutions/tools",
    ctaLabel: viewTool,
  },
  {
    title: { en: "S&OP Readiness Check", vi: "S&OP Readiness Check" },
    type: "Assessment",
    status: "coming-soon",
    learningPath: { en: "S&OP", vi: "S&OP" },
    description: {
      en: "Assess readiness across data, meeting cadence, decision rights, demand review, supply review and executive alignment.",
      vi: "Đánh giá readiness về data, meeting cadence, decision rights, demand review, supply review và executive alignment.",
    },
    href: "/solutions/tools",
    ctaLabel: viewTool,
  },
  {
    title: { en: "Forecast Error Calculator", vi: "Forecast Error Calculator" },
    type: "Tool",
    status: "in-progress",
    learningPath: { en: "Forecasting", vi: "Forecasting" },
    description: {
      en: "For when you have forecast and actuals but don't yet measure error with MAD, MAPE, tracking signal or forecast bias.",
      vi: "Dùng khi bạn có forecast và actual nhưng chưa biết đo sai số bằng MAD, MAPE, tracking signal hoặc forecast bias.",
    },
    href: "/solutions/tools",
    ctaLabel: viewTool,
  },
  {
    title: { en: "ABC/XYZ Inventory Analysis Template", vi: "ABC/XYZ Inventory Analysis Template" },
    type: "Template",
    status: "in-progress",
    learningPath: { en: "Inventory Control", vi: "Inventory Control" },
    description: {
      en: "Classify SKUs by value and demand variability to find the items that need tighter inventory control.",
      vi: "Phân loại SKU theo value và demand variability để xác định nhóm hàng cần kiểm soát inventory chặt hơn.",
    },
    href: "/solutions/products/abc-xyz-inventory-analysis-template",
    ctaLabel: { en: "View digital product", vi: "Xem digital product" },
  },
]

const en = {
  title: "Supply Chain Resources",
  intro: "Checklists, assessments, sample templates and tools that help you start from a real problem before going deeper into digital products or services.",
  ctaTitle: "Not sure which resource to start with?",
  ctaBody: "Take the 50-point checklist first to find the main bottleneck in your supply chain operations.",
  ctaButton: "Take the 50-point checklist",
}

const vi: typeof en = {
  title: "Resources cho Supply Chain",
  intro: "Checklist, assessment, sample template và tool giúp bạn bắt đầu từ vấn đề thực tế trước khi đi sâu vào digital product hoặc service.",
  ctaTitle: "Không biết nên bắt đầu từ resource nào?",
  ctaBody: "Hãy làm checklist 50 điểm trước để xác định điểm nghẽn chính trong vận hành Supply Chain.",
  ctaButton: "Làm checklist 50 điểm",
}

const copy = { en, vi }

export function Resources() {
  const { lang } = useLang()
  const c = copy[lang]

  return (
    <Container>
      <div className="py-16">
        <div className="mb-10 max-w-4xl">
          <h1 className="font-[var(--font-display)] text-4xl font-bold text-[var(--color-text)]">{c.title}</h1>
          <p className="mt-4 text-lg text-[var(--color-text-muted)]">{c.intro}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((resource) => (
            <Link key={resource.title.en} to={resource.href} className="surface-panel card-hover block rounded-[var(--radius-xl)] p-6">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)]">
                  {resource.type}
                </span>
                <StatusBadge status={resource.status} />
              </div>
              <h2 className="mt-4 font-[var(--font-display)] text-xl text-[var(--color-text)]">{resource.title[lang]}</h2>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{resource.description[lang]}</p>
              <div className="mt-2 text-xs text-[var(--color-text-muted)]">
                Learning Path: <span className="text-[var(--color-primary)]">{resource.learningPath[lang]}</span>
              </div>
              <div className="mt-4 text-sm font-medium text-[var(--color-primary)]">{resource.ctaLabel[lang]}</div>
            </Link>
          ))}
        </div>

        <section className="surface-panel mt-12 rounded-[var(--radius-xl)] p-8 text-center">
          <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">{c.ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-xl text-[var(--color-text-muted)]">{c.ctaBody}</p>
          <Link
            to="/solutions/checklist"
            className="focus-ring mt-6 inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-secondary)] px-6 py-3 font-medium text-white transition-colors hover:brightness-105"
          >
            {c.ctaButton}
          </Link>
        </section>
      </div>
    </Container>
  )
}
