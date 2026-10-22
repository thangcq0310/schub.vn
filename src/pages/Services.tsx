import { useState } from "react"
import { FileText, Package, Wrench, Send, CheckCircle2 } from "lucide-react"
import Container from "../components/layout/Container"
import { submitLead } from "../lib/leads"

const services = [
  {
    title: "Supply Chain Assessment",
    icon: FileText,
    description: "Đánh giá toàn diện hiện trạng supply chain",
    deliverables: [
      "Báo cáo hiện trạng 6 trụ cột SCM",
      "Danh sách vấn đề ưu tiên",
      "Roadmap cải thiện 30–90 ngày",
    ],
  },
  {
    title: "Dashboard & Reporting",
    icon: Package,
    description: "Xây dựng hệ thống báo cáo tự động",
    deliverables: [
      "Dashboard forecast, tồn kho, mua hàng, logistics cost",
      "Bộ KPI đề xuất theo chức năng",
      "Hướng dẫn cập nhật và duy trì dữ liệu",
    ],
  },
  {
    title: "Process & KPI Standardization",
    icon: Wrench,
    description: "Chuẩn hóa quy trình và KPI",
    deliverables: [
      "SOP/flow vận hành",
      "KPI theo chức năng",
      "RACI trách nhiệm giữa các phòng ban",
    ],
  },
  {
    title: "Digital SCM Tools",
    icon: Wrench,
    description: "Phát triển công cụ số hóa",
    deliverables: [
      "Excel template / Power BI / Power Apps",
      "Hướng dẫn sử dụng",
      "Cấu trúc dữ liệu đầu vào",
    ],
  },
]

const serviceTypes = services.map((service) => service.title)
const fieldClassName = "focus-ring w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-4 py-2 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]"
const labelClassName = "mb-1 block text-sm font-medium text-[var(--color-text)]"

export function Services() {
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
          <h1 className="font-[var(--font-display)] text-4xl font-bold text-[var(--color-text)]">Dịch vụ triển khai thực tế</h1>
          <p className="mt-4 text-lg text-[var(--color-text-muted)]">
            Các gói dịch vụ giúp doanh nghiệp rà soát hiện trạng, chuẩn hóa dữ liệu – quy trình – KPI và xây dựng công cụ quản trị Supply Chain phù hợp với mức độ trưởng thành hiện tại.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="surface-panel card-hover rounded-[var(--radius-xl)] p-6">
              <service.icon className="mb-4 h-10 w-10 text-[var(--color-primary)]" />
              <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">{service.title}</h2>
              <p className="mt-2 text-[var(--color-text-muted)]">{service.description}</p>
              <div className="mt-5 border-t border-[var(--color-border)] pt-4">
                <h3 className="font-[var(--font-display)] text-lg text-[var(--color-text)]">Deliverables</h3>
                <ul className="mt-3 space-y-2">
                  {service.deliverables.map((item) => (
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
          <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">Yêu cầu tư vấn</h2>
          <p className="mt-2 text-[var(--color-text-muted)]">Chia sẻ nhanh nhu cầu để SCHub đề xuất hướng triển khai phù hợp.</p>

          {submitted ? (
            <div className="py-10 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-success)]/20 bg-[var(--color-success)]/10 text-[var(--color-success)]">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h3 className="font-[var(--font-display)] text-xl text-[var(--color-text)]">Đã gửi yêu cầu!</h3>
              <p className="mt-2 text-[var(--color-text-muted)]">Chúng tôi sẽ liên hệ lại trong 24h.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className={labelClassName}>Điện thoại</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
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
              </div>

              <div>
                <label className={labelClassName}>Dịch vụ quan tâm</label>
                <select
                  value={form.serviceType}
                  onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                  className={fieldClassName}
                >
                  <option value="">Chọn dịch vụ</option>
                  {serviceTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClassName}>Nội dung</label>
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
                {sending ? "Đang gửi..." : "Gửi yêu cầu"}
              </button>
              {error && (
                <p className="text-sm text-red-500">
                  Chưa gửi được yêu cầu. Vui lòng thử lại hoặc email <a href="mailto:contact@schub.vn" className="underline">contact@schub.vn</a>.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </Container>
  )
}
