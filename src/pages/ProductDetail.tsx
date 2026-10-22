import { Link, useParams } from "react-router-dom"
import Container from "@/components/layout/Container"
import { StatusBadge } from "@/components/StatusBadge"
import { seedBooks } from "@/data/seedData"
import { useLang } from "@/lib/i18n"

const en = {
  notFound: "Product not found",
  back: "← Back to Digital Products",
  inProgressMessage: "This product is being built. Leave your email to hear when the first version is released.",
  almostReadyMessage: "The main content structure is in place and the product is being finalized before release.",
  price: "Price",
  problemTitle: "What problem does it solve?",
  problemBody: "It helps supply chain teams standardize how they analyze, report or run a specific process without starting from a blank page.",
  audienceTitle: "Who should use it?",
  audienceBody: "Warehouse leads, logistics managers, supply chain analysts, planners, buyers, inventory accountants and operations managers who need practical tools they can apply quickly.",
  contentsTitle: "What's inside?",
  contents: [
    "The main template or playbook file",
    "A user guide",
    "Sample data or an applied case",
    "A pre-rollout checklist",
    "Suggested KPIs to track",
  ],
  statusTitle: "Development status",
  notifyButton: "Leave your email for updates",
}

const vi: typeof en = {
  notFound: "Không tìm thấy sản phẩm",
  back: "← Quay lại Sản phẩm số",
  inProgressMessage: "Sản phẩm đang được xây dựng. Anh/chị có thể để lại email để nhận thông báo khi bản đầu tiên được phát hành.",
  almostReadyMessage: "Sản phẩm đã có cấu trúc nội dung chính và đang được hoàn thiện trước khi phát hành.",
  price: "Giá",
  problemTitle: "Sản phẩm này giải quyết vấn đề gì?",
  problemBody: "Sản phẩm giúp đội ngũ Supply Chain chuẩn hóa cách phân tích, báo cáo hoặc triển khai một nghiệp vụ cụ thể mà không phải bắt đầu từ trang trắng.",
  audienceTitle: "Ai nên dùng?",
  audienceBody: "Phù hợp với trưởng kho, logistics manager, supply chain analyst, planning, procurement, kế toán kho và quản lý vận hành cần công cụ thực tế để áp dụng nhanh.",
  contentsTitle: "Bên trong sẽ có gì?",
  contents: [
    "File template hoặc playbook chính",
    "Hướng dẫn sử dụng",
    "Ví dụ dữ liệu mẫu hoặc case áp dụng",
    "Checklist kiểm tra trước khi triển khai",
    "Gợi ý KPI theo dõi",
  ],
  statusTitle: "Trạng thái phát triển",
  notifyButton: "Để lại email nhận thông báo",
}

const copy = { en, vi }

export function ProductDetail() {
  const { slug } = useParams()
  const { lang } = useLang()
  const c = copy[lang]
  const product = seedBooks.find((book) => book.slug === slug)

  if (!product) {
    return (
      <Container>
        <div className="py-16">
          <h1 className="font-[var(--font-display)] text-4xl font-bold text-[var(--color-text)]">{c.notFound}</h1>
          <Link to="/solutions/products" className="mt-6 inline-flex text-sm font-medium text-[var(--color-primary)] hover:underline">
            {c.back}
          </Link>
        </div>
      </Container>
    )
  }

  const statusMessage = product.status === "in-progress" ? c.inProgressMessage : c.almostReadyMessage

  return (
    <Container>
      <div className="py-16">
        <Link to="/solutions/products" className="inline-flex text-sm font-medium text-[var(--color-primary)] hover:underline">
          {c.back}
        </Link>

        <section className="surface-panel mt-6 rounded-[var(--radius-xl)] p-8 lg:p-10">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)]">
              {product.category[lang]}
            </span>
            <StatusBadge status={product.status} />
          </div>

          <p className="mt-5 font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            SCHUB.VN DIGITAL PRODUCT
          </p>
          <h1 className="mt-4 font-[var(--font-display)] text-4xl font-bold text-[var(--color-text)]">
            {product.title[lang]}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--color-text-muted)]">
            {product.description[lang]}
          </p>

          <div className="mt-8 border-t border-[var(--color-border)] pt-6">
            <p className="text-sm text-[var(--color-text-muted)]">{c.price}</p>
            <p className="mt-1 font-[var(--font-display)] text-2xl text-[var(--color-text)]">{product.price[lang]}</p>
          </div>

          <Link
            to="/solutions/checklist"
            className="focus-ring mt-8 inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-colors hover:brightness-110"
          >
            {product.ctaLabel[lang]}
          </Link>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="surface-panel card-hover rounded-[var(--radius-xl)] p-6">
            <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">{c.problemTitle}</h2>
            <p className="mt-3 text-[var(--color-text-muted)]">{c.problemBody}</p>
          </div>

          <div className="surface-panel card-hover rounded-[var(--radius-xl)] p-6">
            <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">{c.audienceTitle}</h2>
            <p className="mt-3 text-[var(--color-text-muted)]">{c.audienceBody}</p>
          </div>

          <div className="surface-panel card-hover rounded-[var(--radius-xl)] p-6">
            <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">{c.contentsTitle}</h2>
            <ul className="mt-4 space-y-3 text-[var(--color-text-muted)]">
              {c.contents.map((item) => (
                <li key={item} className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]" />{item}</li>
              ))}
            </ul>
          </div>

          <div className="surface-panel card-hover rounded-[var(--radius-xl)] p-6">
            <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">{c.statusTitle}</h2>
            <p className="mt-3 text-[var(--color-text-muted)]">{statusMessage}</p>
            <Link
              to="/solutions/checklist"
              className="focus-ring mt-6 inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-secondary)] px-6 py-3 font-medium text-white transition-colors hover:brightness-105"
            >
              {c.notifyButton}
            </Link>
          </div>
        </section>
      </div>
    </Container>
  )
}
