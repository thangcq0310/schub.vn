import { useState } from "react"
import { FileText, Package, Wrench, Send, CheckCircle2 } from "lucide-react"
import Container from "../components/layout/Container"
import { submitLead } from "../lib/leads"
import { useLang, type Localized } from "../lib/i18n"

const services: { title: string; icon: typeof Wrench; description: Localized; deliverables: Localized<string[]> }[] = [
  {
    title: "Supply Chain Assessment",
    icon: FileText,
    description: { en: "A full assessment of your current supply chain", vi: "Đánh giá toàn diện hiện trạng supply chain" },
    deliverables: {
      en: ["Current-state report across the 6 SCM pillars", "Prioritized list of issues", "30–90 day improvement roadmap"],
      vi: ["Báo cáo hiện trạng 6 trụ cột SCM", "Danh sách vấn đề ưu tiên", "Roadmap cải thiện 30–90 ngày"],
    },
  },
  {
    title: "Dashboard & Reporting",
    icon: Package,
    description: { en: "Build an automated reporting system", vi: "Xây dựng hệ thống báo cáo tự động" },
    deliverables: {
      en: ["Forecast, inventory, purchasing and logistics cost dashboards", "Recommended KPI set by function", "Guide to updating and maintaining the data"],
      vi: ["Dashboard forecast, tồn kho, mua hàng, logistics cost", "Bộ KPI đề xuất theo chức năng", "Hướng dẫn cập nhật và duy trì dữ liệu"],
    },
  },
  {
    title: "Process & KPI Standardization",
    icon: Wrench,
    description: { en: "Standardize processes and KPIs", vi: "Chuẩn hóa quy trình và KPI" },
    deliverables: {
      en: ["Operating SOPs and flows", "KPIs by function", "RACI across departments"],
      vi: ["SOP/flow vận hành", "KPI theo chức năng", "RACI trách nhiệm giữa các phòng ban"],
    },
  },
  {
    title: "Digital SCM Tools",
    icon: Wrench,
    description: { en: "Build digital tools", vi: "Phát triển công cụ số hóa" },
    deliverables: {
      en: ["Excel template / Power BI / Power Apps", "User guide", "Input data structure"],
      vi: ["Excel template / Power BI / Power Apps", "Hướng dẫn sử dụng", "Cấu trúc dữ liệu đầu vào"],
    },
  },
]

const serviceTypes = services.map((service) => service.title)
const fieldClassName = "focus-ring w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-4 py-2 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]"
const labelClassName = "mb-1 block text-sm font-medium text-[var(--color-text)]"

const en = {
  title: "Hands-on implementation services",
  intro: "Service packages that help a business review its current state, standardize data, processes and KPIs, and build supply chain management tools that fit its current maturity.",
  formTitle: "Request a consultation",
  formIntro: "Tell us briefly what you need and SCHub will suggest a suitable approach.",
  sentTitle: "Request sent!",
  sentBody: "We will get back to you within 24 hours.",
  name: "Full name *",
  email: "Email *",
  phone: "Phone",
  company: "Company",
  service: "Service of interest",
  chooseService: "Choose a service",
  message: "Message",
  sending: "Sending...",
  submit: "Send request",
  error: "Your request could not be sent. Please try again or email",
}

const vi: typeof en = {
  title: "Dịch vụ triển khai thực tế",
  intro: "Các gói dịch vụ giúp doanh nghiệp rà soát hiện trạng, chuẩn hóa dữ liệu – quy trình – KPI và xây dựng công cụ quản trị Supply Chain phù hợp với mức độ trưởng thành hiện tại.",
  formTitle: "Yêu cầu tư vấn",
  formIntro: "Chia sẻ nhanh nhu cầu để SCHub đề xuất hướng triển khai phù hợp.",
  sentTitle: "Đã gửi yêu cầu!",
  sentBody: "Chúng tôi sẽ liên hệ lại trong 24h.",
  name: "Họ tên *",
  email: "Email *",
  phone: "Điện thoại",
  company: "Công ty",
  service: "Dịch vụ quan tâm",
  chooseService: "Chọn dịch vụ",
  message: "Nội dung",
  sending: "Đang gửi...",
  submit: "Gửi yêu cầu",
  error: "Chưa gửi được yêu cầu. Vui lòng thử lại hoặc email",
}

const copy = { en, vi }

export function Services() {
  const { lang } = useLang()
  const c = copy[lang]
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", serviceType: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError(false)
    try {
      await submitLead({
        source: "services",
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        company: form.company.trim(),
        serviceType: form.serviceType,
        message: form.message.trim(),
      })
      setSubmitted(true)
    } catch (err) {
      console.error("Could not save consulting request", err)
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <Container>
      <div className="py-16">
        <div className="mb-12 max-w-4xl">
          <h1 className="font-[var(--font-display)] text-4xl font-bold text-[var(--color-text)]">{c.title}</h1>
          <p className="mt-4 text-lg text-[var(--color-text-muted)]">{c.intro}</p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="surface-panel card-hover rounded-[var(--radius-xl)] p-6">
              <service.icon className="mb-4 h-10 w-10 text-[var(--color-primary)]" />
              <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">{service.title}</h2>
              <p className="mt-2 text-[var(--color-text-muted)]">{service.description[lang]}</p>
              <div className="mt-5 border-t border-[var(--color-border)] pt-4">
                <h3 className="font-[var(--font-display)] text-lg text-[var(--color-text)]">Deliverables</h3>
                <ul className="mt-3 space-y-2">
                  {service.deliverables[lang].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="surface-panel max-w-2xl rounded-[var(--radius-xl)] p-8">
          <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">{c.formTitle}</h2>
          <p className="mt-2 text-[var(--color-text-muted)]">{c.formIntro}</p>

          {submitted ? (
            <div className="py-10 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-success)]/20 bg-[var(--color-success)]/10 text-[var(--color-success)]">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h3 className="font-[var(--font-display)] text-xl text-[var(--color-text)]">{c.sentTitle}</h3>
              <p className="mt-2 text-[var(--color-text-muted)]">{c.sentBody}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className={labelClassName}>{c.phone}</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
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
              </div>

              <div>
                <label className={labelClassName}>{c.service}</label>
                <select
                  value={form.serviceType}
                  onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                  className={fieldClassName}
                >
                  <option value="">{c.chooseService}</option>
                  {serviceTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClassName}>{c.message}</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={fieldClassName}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="focus-ring flex w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-colors hover:brightness-110 disabled:opacity-60"
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
          )}
        </div>
      </div>
    </Container>
  )
}
