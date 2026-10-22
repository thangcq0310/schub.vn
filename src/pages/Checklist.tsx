import { useState } from "react"
import { ClipboardCheck, Send, CheckCircle } from "lucide-react"
import Container from "../components/layout/Container"
import { submitLead } from "../lib/leads"

const checklistSections = [
  {
    title: "Planning",
    description: "Kiểm tra độ chính xác forecast, cadence S&OP và cách doanh nghiệp chốt supply plan.",
  },
  {
    title: "Procurement",
    description: "Rà lead time, MOQ, năng lực nhà cung cấp và tính kỷ luật của quy trình mua hàng.",
  },
  {
    title: "Inventory",
    description: "Đánh giá safety stock, logic replenishment, aging và độ cân bằng giữa tồn kho và service level.",
  },
  {
    title: "Warehouse & Logistics",
    description: "Xem lại chuẩn FIFO/FEFO, vận hành 3PL, độ chính xác tồn kho và chi phí logistics.",
  },
  {
    title: "Data, KPI & Digital",
    description: "Kiểm tra chất lượng master data, dashboard và mức độ số hóa trong vận hành hằng ngày.",
  },
  {
    title: "People, Process & Governance",
    description: "Đo mức rõ ràng của SOP, RACI, review cadence và cơ chế ra quyết định liên phòng ban.",
  },
]

const categories = ["Tất cả", ...checklistSections.map((section) => section.title)]
const fieldClassName = "focus-ring w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-4 py-2 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]"
const labelClassName = "mb-1 block text-sm font-medium text-[var(--color-text)]"

export function Checklist() {
  const [form, setForm] = useState({ name: "", email: "", company: "", role: "" })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("Tất cả")

  const filteredSections = checklistSections.filter((section) => {
    if (selectedCategory !== "Tất cả" && section.title !== selectedCategory) return false
    return true
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError(false)
    try {
      await submitLead({
        source: "checklist",
        name: form.name.trim(),
        email: form.email.trim(),
        company: form.company.trim(),
        role: form.role.trim(),
      })
      setSubmitted(true)
    } catch (err) {
      console.error("Could not save checklist request", err)
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <Container>
      <div className="py-16">
        <div className="mb-12 text-center">
          <ClipboardCheck className="mx-auto mb-4 h-16 w-16 text-[var(--color-primary)]" />
          <h1 className="font-[var(--font-display)] text-4xl font-bold text-[var(--color-text)]">
            Checklist 50 điểm tự đánh giá năng lực Supply Chain
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
            Tự đánh giá 6 nhóm: Planning, Procurement, Inventory, Warehouse &amp; Logistics, Data/KPI/Digital, People/Process/Governance.
          </p>
        </div>

        {!submitted ? (
          <div className="surface-panel mx-auto mb-12 max-w-xl rounded-[var(--radius-xl)] p-8">
            <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">Nhận checklist miễn phí</h2>
            <p className="mt-2 text-[var(--color-text-muted)]">Để lại thông tin để SCHub gửi checklist và hướng dẫn áp dụng nhanh.</p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className={labelClassName}>Họ tên *</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={fieldClassName}
                />
              </div>
              <div>
                <label className={labelClassName}>Email *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={fieldClassName}
                />
              </div>
              <div>
                <label className={labelClassName}>Công ty</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className={fieldClassName}
                />
              </div>
              <div>
                <label className={labelClassName}>Vai trò</label>
                <input
                  type="text"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className={fieldClassName}
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="focus-ring flex w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-secondary)] px-6 py-3 font-medium text-white transition-colors hover:brightness-110 disabled:opacity-60"
              >
                <Send className="h-5 w-5" />
                {sending ? "Đang gửi..." : "Nhận checklist"}
              </button>
              {error && (
                <p className="text-sm text-red-500">
                  Chưa gửi được thông tin. Vui lòng thử lại hoặc email <a href="mailto:contact@schub.vn" className="underline">contact@schub.vn</a>.
                </p>
              )}
            </form>
          </div>
        ) : (
          <div className="mx-auto mb-12 max-w-xl rounded-[var(--radius-xl)] border border-[var(--color-success)]/20 bg-[var(--color-success)]/10 px-8 py-10 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-success)] text-white">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">Đã nhận thông tin!</h2>
            <p className="mt-2 text-[var(--color-text-muted)]">SCHub sẽ gửi checklist tới {form.email} trong thời gian sớm nhất.</p>
          </div>
        )}

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={
                selectedCategory === cat
                  ? "rounded-full border border-[var(--color-primary)] bg-[var(--color-primary)] px-3 py-1.5 text-sm font-medium text-white"
                  : "rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-1.5 text-sm font-medium text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              }
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredSections.map((section) => (
            <div key={section.title} className="surface-panel rounded-[var(--radius-xl)] p-6">
              <div className="mb-4 h-1.5 w-12 rounded-full bg-[var(--color-secondary)]" />
              <h3 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">{section.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
