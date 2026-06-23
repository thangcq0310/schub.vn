import { Link } from "react-router-dom"
import { ArrowRight, ClipboardCheck, TrendingUp, Warehouse, Database, BarChart3, Users, Scale, Target, Package, FileText, LayoutDashboard, CheckCircle2, BookOpen, Wrench, TrendingUp as TrendingUpIcon } from "lucide-react"
import Container from "../components/layout/Container"
import ArticleCard from "../components/cards/ArticleCard"
import { seedArticles } from "../data/seedData"
import { learningPaths } from "../data/learningPaths"

// Target audience cards
const targetUsers = [
  {
    title: "SCM / Logistics / Warehouse Manager",
    description: "Cần chuẩn hóa quy trình, KPI, SLA 3PL, Logistics Cost và hiệu quả vận hành kho.",
    icon: Package,
  },
  {
    title: "Planning / Procurement / Inventory",
    description: "Cần hiểu Forecasting, Demand Planning, Supplier Lead Time, Safety Stock và chính sách bổ sung hàng.",
    icon: FileText,
  },
  {
    title: "Operations Manager / SME Owner",
    description: "Cần nhìn Supply Chain bằng ngôn ngữ dễ hiểu để ra quyết định vận hành và kiểm soát chi phí.",
    icon: Users,
  },
  {
    title: "ERP / WMS / SAP Project Team",
    description: "Cần chuẩn hóa Master Data, process, RACI và readiness trước khi triển khai hệ thống.",
    icon: Database,
  },
]

// Pain points
const painPoints = [
  {
    title: "Tồn kho cao nhưng vẫn thiếu hàng",
    description: "Doanh nghiệp có nhiều inventory nhưng SKU cần giao lại thiếu, hàng nằm sai kho hoặc chưa rõ trạng thái khả dụng.",
    icon: Warehouse,
  },
  {
    title: "Forecast sai, planning bị động",
    description: "Sales, Planning và Production không dùng cùng một demand assumption, dẫn đến mua hàng và sản xuất thiếu ổn định.",
    icon: TrendingUp,
  },
  {
    title: "Master Data không sạch",
    description: "Sai UoM, gross weight, shelf-life, batch rule hoặc location master làm sai tồn kho, chi phí và báo cáo.",
    icon: Database,
  },
  {
    title: "3PL, Warehouse và Logistics Cost khó kiểm soát",
    description: "Doanh nghiệp có dữ liệu nhưng chưa đủ SLA, KPI, cost-to-serve và cơ chế xử lý discrepancy.",
    icon: BarChart3,
  },
  {
    title: "Dashboard không giúp ra quyết định",
    description: "Báo cáo nhiều nhưng chưa gắn với action owner, ngưỡng cảnh báo và management rhythm.",
    icon: ClipboardCheck,
  },
]

// Four main paths
const mainPaths = [
  {
    title: "About",
    description: "Hiểu SCHub.vn là gì, dành cho ai và phương pháp tiếp cận Supply Chain thực chiến.",
    href: "/about",
    cta: "Tìm hiểu SCHub",
  },
  {
    title: "Learning Hub",
    description: "Học Supply Chain theo lộ trình từ Foundation đến Forecasting, S&OP và Operations Planning.",
    href: "/learning",
    cta: "Xem Learning Hub",
  },
  {
    title: "Solutions",
    description: "Tìm checklist, template, tool, digital product hoặc service để xử lý một bài toán cụ thể.",
    href: "/solutions",
    cta: "Xem Solutions",
  },
  {
    title: "Blog",
    description: "Đọc các bài viết thực chiến về Planning, Inventory, Warehouse, 3PL, Master Data, KPI và Logistics Cost.",
    href: "/blog",
    cta: "Đọc Blog",
  },
]

// Solutions 4 groups
const solutionsGroups = [
  {
    title: "Resources",
    description: "Checklist, assessment và sample template để bắt đầu nhanh.",
    href: "/solutions/resources",
  },
  {
    title: "Digital Products",
    description: "Template, eBook, playbook, SOP pack và dashboard starter.",
    href: "/solutions/products",
  },
  {
    title: "Tools",
    description: "Calculator, analyzer và mini tool hỗ trợ phân tích nhanh.",
    href: "/solutions/tools",
  },
  {
    title: "Services",
    description: "Tư vấn, dashboard, chuẩn hóa KPI/SOP và triển khai internal tool.",
    href: "/solutions/services",
  },
]

// SCHub Method steps
const methodSteps = [
  {
    title: "Diagnose",
    description: "Xác định điểm nghẽn trong Planning, Inventory, Warehouse, Logistics Cost, Master Data hoặc 3PL.",
    icon: CheckCircle2,
  },
  {
    title: "Learn",
    description: "Hiểu khái niệm cốt lõi qua Learning Hub và các bài Blog thực chiến.",
    icon: BookOpen,
  },
  {
    title: "Apply",
    description: "Sử dụng checklist, template, tool hoặc playbook phù hợp trong Solutions.",
    icon: Wrench,
  },
  {
    title: "Improve",
    description: "Theo dõi KPI, chuẩn hóa SOP/RACI và cải tiến theo nhịp vận hành.",
    icon: TrendingUpIcon,
  },
]

export function Home() {
  const featuredArticles = seedArticles.filter(a => a.featured).slice(0, 3)
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
                Supply Chain thực chiến cho doanh nghiệp Việt Nam
              </h1>
              <p className="mt-6 mb-8 max-w-xl text-lg text-[var(--color-text-muted)]">
                SCHub.vn giúp người làm Supply Chain hiểu đúng vấn đề, học theo lộ trình và áp dụng các framework, checklist, template, tool vào vận hành thực tế.
              </p>
              <div className="mb-8 flex flex-wrap gap-4">
                <Link to="/learning" className="rounded-[var(--radius-md)] border border-[var(--color-primary)] bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-colors hover:bg-[#0a4242]">
                  Bắt đầu với Learning Hub
                </Link>
                <Link to="/solutions" className="flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-6 py-3 font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-border-strong)]">
                  <Scale className="h-5 w-5" />
                  Xem Solutions
                </Link>
              </div>
              <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
                <li className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-[var(--color-primary)]" />
                  Tập trung vào các bài toán vận hành thực tế của doanh nghiệp Việt Nam
                </li>
                <li className="flex items-center gap-2">
                  <Scale className="h-4 w-4 text-[var(--color-primary)]" />
                  Kết nối Learning Hub, Blog, Solutions và Checklist thành một flow rõ ràng
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-[var(--color-primary)]" />
                  Phù hợp cho Planning, Inventory, Warehouse, Logistics, Procurement và Operations
                </li>
              </ul>
            </div>

            {/* SCHub Method Panel */}
            <div className="rounded-[var(--radius-xl)] bg-[#072C2C] p-6 shadow-[var(--shadow-panel-hover)]">
              <div className="mb-6">
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-white/50">SCHub Method</p>
                <h3 className="mt-2 font-[var(--font-display)] text-xl font-semibold text-white">Từ vấn đề vận hành đến hành động cụ thể</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {methodSteps.map((step, i) => (
                  <div key={i} className="rounded-[var(--radius-md)] border border-white/10 bg-white/5 p-4">
                    <step.icon className="mb-2 h-5 w-5 text-[var(--color-secondary)]" />
                    <p className="text-sm font-medium text-white">{step.title}</p>
                    <p className="mt-1 text-xs text-white/60">{step.description}</p>
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
          <h2 className="mb-4 text-center font-[var(--font-display)] text-2xl font-bold text-[var(--color-text)]">SCHub.vn dành cho ai?</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--color-text-muted)]">Nội dung được thiết kế cho người cần hiểu đúng vấn đề Supply Chain và áp dụng được vào vận hành, không chỉ đọc lý thuyết.</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {targetUsers.map((user, i) => (
              <div key={i} className="surface-panel card-hover rounded-[var(--radius-xl)] p-6">
                <user.icon className="mb-4 h-8 w-8 text-[var(--color-primary)]" />
                <h3 className="mb-2 font-[var(--font-display)] font-semibold text-[var(--color-text)]">{user.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{user.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Pain points */}
      <section className="py-20">
        <Container>
          <h2 className="mb-4 text-center font-[var(--font-display)] text-2xl font-bold text-[var(--color-text)]">Những điểm nghẽn SCHub.vn tập trung giải quyết</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--color-text-muted)]">Các vấn đề thường gặp khiến doanh nghiệp vừa thiếu hàng, vừa tồn cao, vừa khó kiểm soát chi phí và dữ liệu.</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((pain, i) => (
              <div key={i} className="surface-panel card-hover rounded-[var(--radius-xl)] p-6">
                <pain.icon className="mb-4 h-8 w-8 text-[var(--color-primary)]" />
                <h3 className="mb-2 font-[var(--font-display)] font-semibold text-[var(--color-text)]">{pain.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{pain.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Four main paths */}
      <section className="bg-[var(--color-surface-raised)] py-20">
        <Container>
          <h2 className="mb-4 text-center font-[var(--font-display)] text-2xl font-bold text-[var(--color-text)]">Bắt đầu từ đâu?</h2>
           <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--color-text-muted)]">Chọn một hướng phù hợp với nhu cầu hiện tại: hiểu SCHub.vn, học theo lộ trình, xem Solutions hoặc đọc Blog thực chiến.</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {mainPaths.map((path) => (
              <Link key={path.title} to={path.href} className="surface-panel card-hover block rounded-[var(--radius-xl)] p-6">
                <h3 className="mb-3 font-[var(--font-display)] text-xl font-semibold text-[var(--color-text)]">{path.title}</h3>
                <p className="mb-4 text-sm text-[var(--color-text-muted)]">{path.description}</p>
                <span className="text-sm font-medium text-[var(--color-primary)]">{path.cta}</span>
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
              <p className="mt-3 max-w-2xl text-[var(--color-text-muted)]">Các learning path giúp bạn hiểu vấn đề, đọc bài liên quan và tìm resource phù hợp để áp dụng vào vận hành.</p>
            </div>
            <Link to="/learning" className="flex items-center gap-1 text-[var(--color-primary)] hover:opacity-80">
              Xem toàn bộ Learning Hub <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredLearningPaths.map((path) => (
              <Link key={path.slug} to={`/learning/${path.slug}`} className="surface-panel card-hover block rounded-[var(--radius-xl)] p-6">
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">Learning Path</p>
                <h3 className="mt-3 font-[var(--font-display)] text-2xl text-[var(--color-text)]">{path.vietnameseTitle}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">{path.description}</p>
                <div className="mt-5 text-sm font-medium text-[var(--color-primary)]">Xem lộ trình</div>
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
              <p className="mt-3 max-w-2xl text-[var(--color-text-muted)]">Resources, digital products, tools và services được đóng gói theo các bài toán Supply Chain thực tế.</p>
            </div>
            <Link to="/solutions" className="flex items-center gap-1 text-[var(--color-primary)] hover:opacity-80">
              Xem tất cả Solutions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {solutionsGroups.map((group) => (
              <Link key={group.title} to={group.href} className="surface-panel card-hover block rounded-[var(--radius-xl)] p-6">
                <LayoutDashboard className="mb-4 h-8 w-8 text-[var(--color-primary)]" />
                <h3 className="mb-2 font-[var(--font-display)] text-xl text-[var(--color-text)]">{group.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{group.description}</p>
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
              <h2 className="font-[var(--font-display)] text-2xl font-bold text-[var(--color-text)]">Blog thực chiến</h2>
              <p className="mt-3 max-w-2xl text-[var(--color-text-muted)]">Các bài viết ngắn, thực dụng, tập trung vào vấn đề vận hành và cách xử lý.</p>
            </div>
            <Link to="/blog" className="flex items-center gap-1 text-[var(--color-primary)] hover:opacity-80">
              Xem tất cả bài viết <ArrowRight className="h-4 w-4" />
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
            <h2 className="mb-4 font-[var(--font-display)] text-2xl font-bold text-white md:text-3xl">
              Bắt đầu bằng việc tự đánh giá Supply Chain
            </h2>
            <p className="mb-8 text-slate-300">
              Làm checklist 50 điểm để xác định điểm nghẽn trong Planning, Procurement, Inventory, Warehouse & Logistics, Data/KPI/Digital và Governance.
            </p>
            <Link to="/solutions/checklist" className="inline-flex rounded-[var(--radius-md)] bg-[var(--color-secondary)] px-8 py-4 font-medium text-white transition-colors hover:brightness-105">
              Làm checklist 50 điểm
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}