import { Link } from "react-router-dom"
import { ArrowRight, ClipboardCheck, TrendingUp, Warehouse, Database, BarChart3, Users, Scale, Target, Package, FileText, LayoutDashboard, CheckCircle2, BookOpen, Wrench, TrendingUp as TrendingUpIcon } from "lucide-react"
import Container from "../components/layout/Container"
import ArticleCard from "../components/cards/ArticleCard"
import { useArticles } from "../lib/useArticles"
import { useLang, type Localized } from "../lib/i18n"
import { learningPaths } from "../data/learningPaths"

// Target audience cards
const targetUsers: { title: Localized; description: Localized; icon: typeof Package }[] = [
  {
    title: { en: "SCM / Logistics / Warehouse Manager", vi: "SCM / Logistics / Warehouse Manager" },
    description: {
      en: "Needs to standardize processes, KPIs, 3PL SLAs, logistics cost and warehouse performance.",
      vi: "Cần chuẩn hóa quy trình, KPI, SLA 3PL, Logistics Cost và hiệu quả vận hành kho.",
    },
    icon: Package,
  },
  {
    title: { en: "Planning / Procurement / Inventory", vi: "Planning / Procurement / Inventory" },
    description: {
      en: "Needs a solid grasp of forecasting, demand planning, supplier lead time, safety stock and replenishment policy.",
      vi: "Cần hiểu Forecasting, Demand Planning, Supplier Lead Time, Safety Stock và chính sách bổ sung hàng.",
    },
    icon: FileText,
  },
  {
    title: { en: "Operations Manager / SME Owner", vi: "Operations Manager / SME Owner" },
    description: {
      en: "Needs to see the supply chain in plain language to make operating decisions and control costs.",
      vi: "Cần nhìn Supply Chain bằng ngôn ngữ dễ hiểu để ra quyết định vận hành và kiểm soát chi phí.",
    },
    icon: Users,
  },
  {
    title: { en: "ERP / WMS / SAP Project Team", vi: "ERP / WMS / SAP Project Team" },
    description: {
      en: "Needs clean master data, processes, RACI and readiness before a system rollout.",
      vi: "Cần chuẩn hóa Master Data, process, RACI và readiness trước khi triển khai hệ thống.",
    },
    icon: Database,
  },
]

// Pain points
const painPoints: { title: Localized; description: Localized; icon: typeof Package }[] = [
  {
    title: { en: "High inventory, yet still out of stock", vi: "Tồn kho cao nhưng vẫn thiếu hàng" },
    description: {
      en: "There is plenty of inventory, but the SKUs you need to ship are short, sitting in the wrong warehouse or with unclear availability.",
      vi: "Doanh nghiệp có nhiều inventory nhưng SKU cần giao lại thiếu, hàng nằm sai kho hoặc chưa rõ trạng thái khả dụng.",
    },
    icon: Warehouse,
  },
  {
    title: { en: "Wrong forecasts, reactive planning", vi: "Forecast sai, planning bị động" },
    description: {
      en: "Sales, Planning and Production don't share the same demand assumptions, so purchasing and production swing back and forth.",
      vi: "Sales, Planning và Production không dùng cùng một demand assumption, dẫn đến mua hàng và sản xuất thiếu ổn định.",
    },
    icon: TrendingUp,
  },
  {
    title: { en: "Dirty master data", vi: "Master Data không sạch" },
    description: {
      en: "Wrong UoM, gross weight, shelf life, batch rules or location master corrupt inventory, cost and reporting.",
      vi: "Sai UoM, gross weight, shelf-life, batch rule hoặc location master làm sai tồn kho, chi phí và báo cáo.",
    },
    icon: Database,
  },
  {
    title: { en: "3PL, warehouse and logistics cost are hard to control", vi: "3PL, Warehouse và Logistics Cost khó kiểm soát" },
    description: {
      en: "The data exists, but SLAs, KPIs, cost-to-serve and a discrepancy process are missing.",
      vi: "Doanh nghiệp có dữ liệu nhưng chưa đủ SLA, KPI, cost-to-serve và cơ chế xử lý discrepancy.",
    },
    icon: BarChart3,
  },
  {
    title: { en: "Dashboards that don't drive decisions", vi: "Dashboard không giúp ra quyết định" },
    description: {
      en: "Lots of reports, but no action owners, alert thresholds or management rhythm attached to them.",
      vi: "Báo cáo nhiều nhưng chưa gắn với action owner, ngưỡng cảnh báo và management rhythm.",
    },
    icon: ClipboardCheck,
  },
]

// Four main paths
const mainPaths: { title: string; description: Localized; href: string; cta: Localized }[] = [
  {
    title: "About",
    description: {
      en: "What SCHub.vn is, who it is for, and its practical approach to supply chain.",
      vi: "Hiểu SCHub.vn là gì, dành cho ai và phương pháp tiếp cận Supply Chain thực chiến.",
    },
    href: "/about",
    cta: { en: "About SCHub", vi: "Tìm hiểu SCHub" },
  },
  {
    title: "Learning Hub",
    description: {
      en: "Learn supply chain step by step, from Foundation to Forecasting, S&OP and Operations Planning.",
      vi: "Học Supply Chain theo lộ trình từ Foundation đến Forecasting, S&OP và Operations Planning.",
    },
    href: "/learning",
    cta: { en: "Explore the Learning Hub", vi: "Xem Learning Hub" },
  },
  {
    title: "Solutions",
    description: {
      en: "Find a checklist, template, tool, digital product or service for a specific problem.",
      vi: "Tìm checklist, template, tool, digital product hoặc service để xử lý một bài toán cụ thể.",
    },
    href: "/solutions",
    cta: { en: "Browse Solutions", vi: "Xem Solutions" },
  },
  {
    title: "Blog",
    description: {
      en: "Practical articles on Planning, Inventory, Warehouse, 3PL, Master Data, KPIs and Logistics Cost.",
      vi: "Đọc các bài viết thực chiến về Planning, Inventory, Warehouse, 3PL, Master Data, KPI và Logistics Cost.",
    },
    href: "/blog",
    cta: { en: "Read the blog", vi: "Đọc Blog" },
  },
]

// Solutions 4 groups
const solutionsGroups: { title: string; description: Localized; href: string }[] = [
  {
    title: "Resources",
    description: {
      en: "Checklists, assessments and sample templates to get started quickly.",
      vi: "Checklist, assessment và sample template để bắt đầu nhanh.",
    },
    href: "/solutions/resources",
  },
  {
    title: "Digital Products",
    description: {
      en: "Templates, eBooks, playbooks, SOP packs and starter dashboards.",
      vi: "Template, eBook, playbook, SOP pack và dashboard starter.",
    },
    href: "/solutions/products",
  },
  {
    title: "Tools",
    description: {
      en: "Calculators, analyzers and mini tools for quick analysis.",
      vi: "Calculator, analyzer và mini tool hỗ trợ phân tích nhanh.",
    },
    href: "/solutions/tools",
  },
  {
    title: "Services",
    description: {
      en: "Consulting, dashboards, KPI/SOP standardization and internal tool builds.",
      vi: "Tư vấn, dashboard, chuẩn hóa KPI/SOP và triển khai internal tool.",
    },
    href: "/solutions/services",
  },
]

// SCHub Method steps
const methodSteps: { title: string; description: Localized; icon: typeof Package }[] = [
  {
    title: "Diagnose",
    description: {
      en: "Find the bottleneck in Planning, Inventory, Warehouse, Logistics Cost, Master Data or 3PL.",
      vi: "Xác định điểm nghẽn trong Planning, Inventory, Warehouse, Logistics Cost, Master Data hoặc 3PL.",
    },
    icon: CheckCircle2,
  },
  {
    title: "Learn",
    description: {
      en: "Understand the core concepts through the Learning Hub and practical blog posts.",
      vi: "Hiểu khái niệm cốt lõi qua Learning Hub và các bài Blog thực chiến.",
    },
    icon: BookOpen,
  },
  {
    title: "Apply",
    description: {
      en: "Use the right checklist, template, tool or playbook from Solutions.",
      vi: "Sử dụng checklist, template, tool hoặc playbook phù hợp trong Solutions.",
    },
    icon: Wrench,
  },
  {
    title: "Improve",
    description: {
      en: "Track KPIs, standardize SOP/RACI and improve with a steady operating rhythm.",
      vi: "Theo dõi KPI, chuẩn hóa SOP/RACI và cải tiến theo nhịp vận hành.",
    },
    icon: TrendingUpIcon,
  },
]

const en = {
  heroTitle: "Practical supply chain for businesses in Vietnam",
  heroBody: "SCHub.vn helps supply chain professionals understand the real problem, learn step by step, and apply frameworks, checklists, templates and tools to day-to-day operations.",
  heroPrimary: "Start with the Learning Hub",
  heroSecondary: "Browse Solutions",
  heroPoints: [
    "Focused on the real operating problems of businesses in Vietnam",
    "Learning Hub, Blog, Solutions and Checklist connected in one clear flow",
    "For Planning, Inventory, Warehouse, Logistics, Procurement and Operations",
  ],
  methodTitle: "From operating problems to concrete actions",
  audienceTitle: "Who is SCHub.vn for?",
  audienceIntro: "The content is built for people who need to understand supply chain problems correctly and apply the answers in operations, not just read theory.",
  painTitle: "The bottlenecks SCHub.vn focuses on",
  painIntro: "Common problems that leave a business short of stock, overstocked and struggling to control cost and data, all at once.",
  startTitle: "Where should you start?",
  startIntro: "Pick the direction that fits your current need: learn about SCHub.vn, follow a learning path, browse Solutions or read the practical blog.",
  learningIntro: "Learning paths that help you understand the problem, read related articles and find the right resources to apply in operations.",
  learningAll: "See the whole Learning Hub",
  viewPath: "View learning path",
  solutionsIntro: "Resources, digital products, tools and services packaged around real supply chain problems.",
  solutionsAll: "See all Solutions",
  blogTitle: "Practical blog",
  blogIntro: "Short, practical articles focused on operating problems and how to fix them.",
  blogAll: "See all articles",
  ctaTitle: "Start with a supply chain self-assessment",
  ctaBody: "Take the 50-point checklist to find bottlenecks in Planning, Procurement, Inventory, Warehouse & Logistics, Data/KPI/Digital and Governance.",
  ctaButton: "Take the 50-point checklist",
}

const vi: typeof en = {
  heroTitle: "Supply Chain thực chiến cho doanh nghiệp Việt Nam",
  heroBody: "SCHub.vn giúp người làm Supply Chain hiểu đúng vấn đề, học theo lộ trình và áp dụng các framework, checklist, template, tool vào vận hành thực tế.",
  heroPrimary: "Bắt đầu với Learning Hub",
  heroSecondary: "Xem Solutions",
  heroPoints: [
    "Tập trung vào các bài toán vận hành thực tế của doanh nghiệp Việt Nam",
    "Kết nối Learning Hub, Blog, Solutions và Checklist thành một flow rõ ràng",
    "Phù hợp cho Planning, Inventory, Warehouse, Logistics, Procurement và Operations",
  ],
  methodTitle: "Từ vấn đề vận hành đến hành động cụ thể",
  audienceTitle: "SCHub.vn dành cho ai?",
  audienceIntro: "Nội dung được thiết kế cho người cần hiểu đúng vấn đề Supply Chain và áp dụng được vào vận hành, không chỉ đọc lý thuyết.",
  painTitle: "Những điểm nghẽn SCHub.vn tập trung giải quyết",
  painIntro: "Các vấn đề thường gặp khiến doanh nghiệp vừa thiếu hàng, vừa tồn cao, vừa khó kiểm soát chi phí và dữ liệu.",
  startTitle: "Bắt đầu từ đâu?",
  startIntro: "Chọn một hướng phù hợp với nhu cầu hiện tại: hiểu SCHub.vn, học theo lộ trình, xem Solutions hoặc đọc Blog thực chiến.",
  learningIntro: "Các learning path giúp bạn hiểu vấn đề, đọc bài liên quan và tìm resource phù hợp để áp dụng vào vận hành.",
  learningAll: "Xem toàn bộ Learning Hub",
  viewPath: "Xem lộ trình",
  solutionsIntro: "Resources, digital products, tools và services được đóng gói theo các bài toán Supply Chain thực tế.",
  solutionsAll: "Xem tất cả Solutions",
  blogTitle: "Blog thực chiến",
  blogIntro: "Các bài viết ngắn, thực dụng, tập trung vào vấn đề vận hành và cách xử lý.",
  blogAll: "Xem tất cả bài viết",
  ctaTitle: "Bắt đầu bằng việc tự đánh giá Supply Chain",
  ctaBody: "Làm checklist 50 điểm để xác định điểm nghẽn trong Planning, Procurement, Inventory, Warehouse & Logistics, Data/KPI/Digital và Governance.",
  ctaButton: "Làm checklist 50 điểm",
}

const copy = { en, vi }
const heroPointIcons = [Target, Scale, Users]

export function Home() {
  const { lang } = useLang()
  const c = copy[lang]
  const { articles } = useArticles()
  const featuredArticles = articles.filter(a => a.featured).slice(0, 3)
  const featuredLearningPaths = learningPaths.filter((path) =>
    ["supply-chain-foundation", "forecasting", "sop"].includes(path.slug)
  )

  return (
    <div>
      {/* 1. Hero */}
      <section className="bg-[var(--color-surface)] py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[var(--color-secondary)]">SCHub.vn</p>
              <h1 className="font-[var(--font-display)] text-3xl font-bold leading-tight text-[var(--color-text)] md:text-4xl lg:text-5xl">
                {c.heroTitle}
              </h1>
              <p className="mt-6 mb-8 max-w-xl text-lg text-[var(--color-text-muted)]">{c.heroBody}</p>
              <div className="mb-8 flex flex-wrap gap-4">
                <Link to="/learning" className="rounded-[var(--radius-md)] border border-[var(--color-primary)] bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-colors hover:bg-[#0a4242]">
                  {c.heroPrimary}
                </Link>
                <Link to="/solutions" className="flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-6 py-3 font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-border-strong)]">
                  <Scale className="h-5 w-5" />
                  {c.heroSecondary}
                </Link>
              </div>
              <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
                {c.heroPoints.map((point, i) => {
                  const Icon = heroPointIcons[i]
                  return (
                    <li key={point} className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-[var(--color-primary)]" />
                      {point}
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* SCHub Method Panel */}
            <div className="rounded-[var(--radius-xl)] bg-[#072C2C] p-6 shadow-[var(--shadow-panel-hover)]">
              <div className="mb-6">
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-white/50">SCHub Method</p>
                <h3 className="mt-2 font-[var(--font-display)] text-xl font-semibold text-white">{c.methodTitle}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {methodSteps.map((step, i) => (
                  <div key={i} className="rounded-[var(--radius-md)] border border-white/10 bg-white/5 p-4">
                    <step.icon className="mb-2 h-5 w-5 text-[var(--color-secondary)]" />
                    <p className="text-sm font-medium text-white">{step.title}</p>
                    <p className="mt-1 text-xs text-white/60">{step.description[lang]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Who is this for? */}
      <section className="bg-[var(--color-surface-raised)] py-20">
        <Container>
          <h2 className="mb-4 text-center font-[var(--font-display)] text-2xl font-bold text-[var(--color-text)]">{c.audienceTitle}</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--color-text-muted)]">{c.audienceIntro}</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {targetUsers.map((user, i) => (
              <div key={i} className="surface-panel card-hover rounded-[var(--radius-xl)] p-6">
                <user.icon className="mb-4 h-8 w-8 text-[var(--color-primary)]" />
                <h3 className="mb-2 font-[var(--font-display)] font-semibold text-[var(--color-text)]">{user.title[lang]}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{user.description[lang]}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Pain points */}
      <section className="py-20">
        <Container>
          <h2 className="mb-4 text-center font-[var(--font-display)] text-2xl font-bold text-[var(--color-text)]">{c.painTitle}</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--color-text-muted)]">{c.painIntro}</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((pain, i) => (
              <div key={i} className="surface-panel card-hover rounded-[var(--radius-xl)] p-6">
                <pain.icon className="mb-4 h-8 w-8 text-[var(--color-primary)]" />
                <h3 className="mb-2 font-[var(--font-display)] font-semibold text-[var(--color-text)]">{pain.title[lang]}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{pain.description[lang]}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Four main paths */}
      <section className="bg-[var(--color-surface-raised)] py-20">
        <Container>
          <h2 className="mb-4 text-center font-[var(--font-display)] text-2xl font-bold text-[var(--color-text)]">{c.startTitle}</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--color-text-muted)]">{c.startIntro}</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {mainPaths.map((path) => (
              <Link key={path.title} to={path.href} className="surface-panel card-hover block rounded-[var(--radius-xl)] p-6">
                <h3 className="mb-3 font-[var(--font-display)] text-xl font-semibold text-[var(--color-text)]">{path.title}</h3>
                <p className="mb-4 text-sm text-[var(--color-text-muted)]">{path.description[lang]}</p>
                <span className="text-sm font-medium text-[var(--color-primary)]">{path.cta[lang]}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Learning Hub preview */}
      <section className="py-20">
        <Container>
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-bold text-[var(--color-text)]">Learning Hub</h2>
              <p className="mt-3 max-w-2xl text-[var(--color-text-muted)]">{c.learningIntro}</p>
            </div>
            <Link to="/learning" className="flex items-center gap-1 text-[var(--color-primary)] hover:opacity-80">
              {c.learningAll} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredLearningPaths.map((path) => (
              <Link key={path.slug} to={`/learning/${path.slug}`} className="surface-panel card-hover block rounded-[var(--radius-xl)] p-6">
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">Learning Path</p>
                <h3 className="mt-3 font-[var(--font-display)] text-2xl text-[var(--color-text)]">{path.heading[lang]}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">{path.description[lang]}</p>
                <div className="mt-5 text-sm font-medium text-[var(--color-primary)]">{c.viewPath}</div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Solutions preview */}
      <section className="bg-[var(--color-surface-raised)] py-20">
        <Container>
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-bold text-[var(--color-text)]">Solutions</h2>
              <p className="mt-3 max-w-2xl text-[var(--color-text-muted)]">{c.solutionsIntro}</p>
            </div>
            <Link to="/solutions" className="flex items-center gap-1 text-[var(--color-primary)] hover:opacity-80">
              {c.solutionsAll} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {solutionsGroups.map((group) => (
              <Link key={group.title} to={group.href} className="surface-panel card-hover block rounded-[var(--radius-xl)] p-6">
                <LayoutDashboard className="mb-4 h-8 w-8 text-[var(--color-primary)]" />
                <h3 className="mb-2 font-[var(--font-display)] text-xl text-[var(--color-text)]">{group.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{group.description[lang]}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Blog preview */}
      <section className="py-20">
        <Container>
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-bold text-[var(--color-text)]">{c.blogTitle}</h2>
              <p className="mt-3 max-w-2xl text-[var(--color-text-muted)]">{c.blogIntro}</p>
            </div>
            <Link to="/blog" className="flex items-center gap-1 text-[var(--color-primary)] hover:opacity-80">
              {c.blogAll} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </Container>
      </section>

      {/* 8. Final CTA - Checklist */}
      <section className="bg-[var(--color-primary)] py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-[var(--font-display)] text-2xl font-bold text-white md:text-3xl">{c.ctaTitle}</h2>
            <p className="mb-8 text-slate-300">{c.ctaBody}</p>
            <Link to="/solutions/checklist" className="inline-flex rounded-[var(--radius-md)] bg-[var(--color-secondary)] px-8 py-4 font-medium text-white transition-colors hover:brightness-105">
              {c.ctaButton}
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}
