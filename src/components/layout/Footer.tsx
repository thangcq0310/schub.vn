import { Link } from "react-router-dom"
import { Mail, Package } from "lucide-react"
import { useLang } from "@/lib/i18n"

const en = {
  tagline: "Enterprise supply chain knowledge",
  about: "Supply chain knowledge, templates and playbooks that help operations teams make decisions with clear data and processes that are easy to apply.",
  sections: [
    {
      title: "Content",
      links: [
        { to: "/blog", label: "Articles" },
        { to: "/learning", label: "Learning paths" },
        { to: "/solutions", label: "Tools & Solutions" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { to: "/solutions/products", label: "Digital products" },
        { to: "/solutions/tools", label: "Tools" },
        { to: "/solutions/services", label: "Implementation services" },
        { to: "/solutions/checklist", label: "Assessment checklist" },
      ],
    },
  ],
  contact: "Contact",
  rights: "© 2024 SCHub.vn. All rights reserved.",
  motto: "Built for clear, data-driven supply chain workflows.",
}

const vi: typeof en = {
  tagline: "Enterprise supply chain knowledge",
  about: "Nền tảng kiến thức, template và playbook supply chain giúp đội ngũ vận hành chuẩn hóa quyết định bằng dữ liệu rõ ràng và quy trình dễ áp dụng.",
  sections: [
    {
      title: "Nội dung",
      links: [
        { to: "/blog", label: "Bài viết" },
        { to: "/learning", label: "Học theo lộ trình" },
        { to: "/solutions", label: "Công cụ & Giải pháp" },
      ],
    },
    {
      title: "Giải pháp",
      links: [
        { to: "/solutions/products", label: "Sản phẩm số" },
        { to: "/solutions/tools", label: "Công cụ" },
        { to: "/solutions/services", label: "Dịch vụ triển khai" },
        { to: "/solutions/checklist", label: "Checklist đánh giá" },
      ],
    },
  ],
  contact: "Liên hệ",
  rights: "© 2024 SCHub.vn. All rights reserved.",
  motto: "Built for clear, data-driven supply chain workflows.",
}

const copy = { en, vi }

export default function Footer() {
  const { lang } = useLang()
  const c = copy[lang]

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface-inverse)] text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div className="max-w-sm">
            <Link to="/" className="focus-ring inline-flex items-center gap-3 rounded-[var(--radius-md)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-secondary)] text-white">
                <Package className="h-5 w-5" />
              </div>
              <div>
                <div className="font-[var(--font-display)] text-[1.375rem] leading-none text-white">SCHub.vn</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-400">{c.tagline}</div>
              </div>
            </Link>
            <p className="mt-5 text-sm leading-6 text-slate-300">{c.about}</p>
          </div>

          {c.sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-[var(--font-display)] text-lg text-white">{section.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {section.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="focus-ring rounded-[var(--radius-sm)] hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-[var(--font-display)] text-lg text-white">{c.contact}</h3>
            <div className="mt-4 rounded-[var(--radius-lg)] border border-white/10 bg-white/5 p-4">
              <div className="flex items-start gap-3 text-sm text-slate-200">
                <Mail className="mt-0.5 h-4 w-4 text-[var(--color-secondary)]" />
                <div>
                  <div className="font-medium text-white">Email</div>
                  <a href="mailto:contact@schub.vn" className="focus-ring mt-1 inline-block rounded-[var(--radius-sm)] text-slate-300 hover:text-white">
                    contact@schub.vn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>{c.rights}</p>
          <p>{c.motto}</p>
        </div>
      </div>
    </footer>
  )
}
