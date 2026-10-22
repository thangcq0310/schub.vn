import { useState } from "react"
import { ClipboardCheck, Send, CheckCircle } from "lucide-react"
import Container from "../components/layout/Container"
import { submitLead } from "../lib/leads"
import { useLang, type Localized } from "../lib/i18n"

const checklistSections: { title: string; description: Localized }[] = [
  {
    title: "Planning",
    description: {
      en: "Check forecast accuracy, the S&OP cadence and how the business signs off the supply plan.",
      vi: "Kiểm tra độ chính xác forecast, cadence S&OP và cách doanh nghiệp chốt supply plan.",
    },
  },
  {
    title: "Procurement",
    description: {
      en: "Review lead time, MOQ, supplier capability and the discipline of the purchasing process.",
      vi: "Rà lead time, MOQ, năng lực nhà cung cấp và tính kỷ luật của quy trình mua hàng.",
    },
  },
  {
    title: "Inventory",
    description: {
      en: "Assess safety stock, replenishment logic, aging and the balance between inventory and service level.",
      vi: "Đánh giá safety stock, logic replenishment, aging và độ cân bằng giữa tồn kho và service level.",
    },
  },
  {
    title: "Warehouse & Logistics",
    description: {
      en: "Revisit FIFO/FEFO rules, 3PL operations, inventory accuracy and logistics cost.",
      vi: "Xem lại chuẩn FIFO/FEFO, vận hành 3PL, độ chính xác tồn kho và chi phí logistics.",
    },
  },
  {
    title: "Data, KPI & Digital",
    description: {
      en: "Check master data quality, dashboards and how digital your daily operations are.",
      vi: "Kiểm tra chất lượng master data, dashboard và mức độ số hóa trong vận hành hằng ngày.",
    },
  },
  {
    title: "People, Process & Governance",
    description: {
      en: "Measure how clear your SOPs, RACI, review cadence and cross-functional decision-making are.",
      vi: "Đo mức rõ ràng của SOP, RACI, review cadence và cơ chế ra quyết định liên phòng ban.",
    },
  },
]

const ALL = "all"

const en = {
  title: "50-point supply chain self-assessment checklist",
  intro: "Assess 6 areas: Planning, Procurement, Inventory, Warehouse & Logistics, Data/KPI/Digital and People/Process/Governance.",
  formTitle: "Get the free checklist",
  formIntro: "Leave your details and SCHub will send you the checklist and a quick-start guide.",
  name: "Full name *",
  email: "Email *",
  company: "Company",
  role: "Role",
  sending: "Sending...",
  submit: "Get the checklist",
  error: "Your details could not be sent. Please try again or email",
  sentTitle: "Thanks, we got your details!",
  sentBody: (email: string) => `SCHub will send the checklist to ${email} as soon as possible.`,
  all: "All",
}

const vi: typeof en = {
  title: "Checklist 50 điểm tự đánh giá năng lực Supply Chain",
  intro: "Tự đánh giá 6 nhóm: Planning, Procurement, Inventory, Warehouse & Logistics, Data/KPI/Digital, People/Process/Governance.",
  formTitle: "Nhận checklist miễn phí",
  formIntro: "Để lại thông tin để SCHub gửi checklist và hướng dẫn áp dụng nhanh.",
  name: "Họ tên *",
  email: "Email *",
  company: "Công ty",
  role: "Vai trò",
  sending: "Đang gửi...",
  submit: "Nhận checklist",
  error: "Chưa gửi được thông tin. Vui lòng thử lại hoặc email",
  sentTitle: "Đã nhận thông tin!",
  sentBody: (email: string) => `SCHub sẽ gửi checklist tới ${email} trong thời gian sớm nhất.`,
  all: "Tất cả",
}

const copy = { en, vi }
const fieldClassName = "focus-ring w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-4 py-2 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]"
const labelClassName = "mb-1 block text-sm font-medium text-[var(--color-text)]"

export function Checklist() {
  const { lang } = useLang()
  const c = copy[lang]
  const [form, setForm] = useState({ name: "", email: "", company: "", role: "" })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(ALL)

  const filteredSections = checklistSections.filter((section) => {
    if (selectedCategory !== ALL && section.title !== selectedCategory) return false
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
          <h1 className="font-[var(--font-display)] text-4xl font-bold text-[var(--color-text)]">{c.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">{c.intro}</p>
        </div>

        {!submitted ? (
          <div className="surface-panel mx-auto mb-12 max-w-xl rounded-[var(--radius-xl)] p-8">
            <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">{c.formTitle}</h2>
            <p className="mt-2 text-[var(--color-text-muted)]">{c.formIntro}</p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className={labelClassName}>{c.name}</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={fieldClassName}
                />
              </div>
              <div>
                <label className={labelClassName}>{c.email}</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={fieldClassName}
                />
              </div>
              <div>
                <label className={labelClassName}>{c.company}</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className={fieldClassName}
                />
              </div>
              <div>
                <label className={labelClassName}>{c.role}</label>
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
                {sending ? c.sending : c.submit}
              </button>
              {error && (
                <p className="text-sm text-red-500">
                  {c.error} <a href="mailto:contact@schub.vn" className="underline">contact@schub.vn</a>.
                </p>
              )}
            </form>
          </div>
        ) : (
          <div className="mx-auto mb-12 max-w-xl rounded-[var(--radius-xl)] border border-[var(--color-success)]/20 bg-[var(--color-success)]/10 px-8 py-10 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-success)] text-white">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">{c.sentTitle}</h2>
            <p className="mt-2 text-[var(--color-text-muted)]">{c.sentBody(form.email)}</p>
          </div>
        )}

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {[ALL, ...checklistSections.map((section) => section.title)].map((cat) => (
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
              {cat === ALL ? c.all : cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredSections.map((section) => (
            <div key={section.title} className="surface-panel rounded-[var(--radius-xl)] p-6">
              <div className="mb-4 h-1.5 w-12 rounded-full bg-[var(--color-secondary)]" />
              <h3 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">{section.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">{section.description[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
