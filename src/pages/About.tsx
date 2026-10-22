import { Mail, Package, Target, Database, Warehouse, BarChart3, Users, FileText, CheckCircle2, ExternalLink, Award, GraduationCap, Quote } from "lucide-react"
import Container from "../components/layout/Container"
import founderImg from "../assets/founder.jpg"
import { useLang, type Localized } from "../lib/i18n"

const certificates = [
  { title: "CSCM — Certified Supply Chain Manager", issuer: "ISCEA", file: "ISCEA-CSCM-Chu Quang Thang.pdf" },
  { title: "Supply Chain Principles", issuer: "Georgia Institute of Technology", file: "Coursera 6WMJWK6PVFG3.pdf" },
  { title: "Supply Chain Planning", issuer: "University of California, Irvine", file: "Coursera S8HMEBP66H4P.pdf" },
  { title: "Supply Chain Management and Analytics", issuer: "Unilever", file: "Coursera B3L0PDWQDF59.pdf" },
  { title: "Using Data Analytics in Supply Chain", issuer: "Unilever", file: "Coursera O8LV8LH5NCVT.pdf" },
  { title: "Supply Chain Software Tools", issuer: "Unilever", file: "Coursera JJ1D4HXZREW2.pdf" },
  { title: "Foundations of Project Management", issuer: "Google", file: "Coursera C3SD4AV6D92E.pdf" },
  { title: "Project Initiation: Starting a Successful Project", issuer: "Google", file: "Coursera OZDPM504E2GK.pdf" },
  { title: "Project Planning: Putting It All Together", issuer: "Google", file: "Coursera 6IWDW64T5WPE.pdf" },
]

const pillars: { title: string; description: Localized; icon: typeof Target }[] = [
  {
    title: "Planning & Forecast",
    description: {
      en: "Turn demand data into a clear decision cadence for the forecast, supply plan and S&OP.",
      vi: "Biến dữ liệu nhu cầu thành cadence ra quyết định rõ ràng cho forecast, supply plan và S&OP.",
    },
    icon: Target,
  },
  {
    title: "Procurement & Supplier",
    description: {
      en: "Standardize purchasing logic, lead time, MOQ and KPI-based supplier tracking.",
      vi: "Chuẩn hóa logic mua hàng, lead time, MOQ và cơ chế theo dõi nhà cung cấp theo KPI.",
    },
    icon: FileText,
  },
  {
    title: "Inventory Control",
    description: {
      en: "Design safety stock, replenishment and dashboards to cut excess stock while keeping service level.",
      vi: "Thiết kế safety stock, replenishment và dashboard để giảm tồn cao nhưng vẫn giữ service level.",
    },
    icon: Database,
  },
  {
    title: "Warehouse & Logistics",
    description: {
      en: "Optimize warehouse processes, FIFO/FEFO, 3PL and cost-to-serve with clear operating rules.",
      vi: "Tối ưu quy trình kho, FIFO/FEFO, 3PL và cost-to-serve bằng nguyên tắc vận hành rõ ràng.",
    },
    icon: Warehouse,
  },
  {
    title: "KPI & Digital Tools",
    description: {
      en: "Connect master data, reporting and digital tools so the team sees the same operating picture.",
      vi: "Kết nối master data, reporting và công cụ số hóa để đội ngũ nhìn cùng một bức tranh vận hành.",
    },
    icon: BarChart3,
  },
  {
    title: "People & Governance",
    description: {
      en: "Set up SOPs, RACI and review rhythms so departments coordinate instead of firefighting separately.",
      vi: "Thiết lập SOP, RACI và nhịp review giúp các phòng ban phối hợp thay vì xử lý sự vụ rời rạc.",
    },
    icon: Users,
  },
]

const trustCards: { title: Localized; description: Localized }[] = [
  {
    title: { en: "Starts from real operating problems", vi: "Bắt đầu từ vấn đề vận hành thật" },
    description: {
      en: "The content does not start from jargon but from problems like high stock with shortages, wrong forecasts, broken master data, weak 3PL SLAs and dashboards that don't drive decisions.",
      vi: "Nội dung không bắt đầu từ thuật ngữ, mà từ các vấn đề như tồn cao nhưng thiếu hàng, forecast sai, Master Data lỗi, SLA 3PL yếu và Dashboard không ra quyết định.",
    },
  },
  {
    title: { en: "Learning Hub and resources included", vi: "Có Learning Hub và resource đi kèm" },
    description: {
      en: "Every topic links to the Learning Hub, blog posts, checklists, tools or related digital products.",
      vi: "Mỗi chủ đề được kết nối với Learning Hub, Blog, checklist, tool hoặc digital product liên quan.",
    },
  },
  {
    title: { en: "Built for the Vietnamese business context", vi: "Tập trung bối cảnh doanh nghiệp Việt Nam" },
    description: {
      en: "Favors simple, flexible rollouts that fit scattered data, limited resources and real-world operations.",
      vi: "Ưu tiên cách triển khai đơn giản, linh hoạt, phù hợp với dữ liệu phân tán, nguồn lực hạn chế và vận hành thực tế.",
    },
  },
]

const strong = "font-medium text-[var(--color-text)]"
const bold = "text-[var(--color-text)]"

const en = {
  title: "Supply chain knowledge for Vietnam",
  intro: "SCHub.vn helps people working in logistics, warehousing and supply chain operations at Vietnamese businesses access practical knowledge, tools and experience in a way that is easy to understand, structured and ready to apply.",
  focusTitle: "What SCHub.vn focuses on",
  focusIntro: "SCHub's content prioritizes concrete operating problems, from familiar day-to-day issues to complex, timely challenges for businesses in Vietnam:",
  focusItems: [
    <><span className={strong}>From simple problems:</span> shortages despite high stock, unclean master data, hard-to-use dashboards, processes without clear ownership, and no cross-functional management rhythm.</>,
    <><span className={strong}>To tactical challenges:</span> building and running S&amp;OP to match supply and demand, improving forecast accuracy, optimizing stock norms (safety stock, reorder points), managing supplier performance and lead time, and measuring and improving supply chain KPIs (service level, fill rate, inventory turnover).</>,
  ],
  contactTitle: "Contact",
  contactBody: "Need a checklist, template or rollout direction? SCHub can help from a hands-on operations perspective.",
  founderLabel: "Founder",
  founderBio: [
    <><strong className={bold}>Head of Logistics & Warehouse</strong> at Nafoods Group, coordinating and optimizing logistics across all 5 plants in the group's vertically integrated supply chain in Nghe An.</>,
    <>Holds the <strong className={bold}>CSCM (Certified Supply Chain Manager)</strong> certification from ISCEA. Expertise spans SAP S/4HANA (EWM, TM, IM, SD), warehouse layout design and optimization, cold chain operations, 3PL management and export/import coordination to global markets.</>,
    <>Alongside operations, leads <strong className={bold}>digital transformation</strong> projects at Nafoods, from WMS rollouts to process standardization, combining logistics expertise with technology skills to build management tools that are genuinely useful.</>,
  ],
  quote: "\"Supply chain is not management theory. It is the daily decisions about stock, trucks, orders and data. SCHub.vn was created to share that hands-on experience.\"",
  certLabel: "Certificates",
  certTitle: "Courses & Professional Certificates",
  viewCert: "View certificate",
  trustTitle: "How is SCHub.vn different from a typical supply chain blog?",
  pillarsTitle: "6 core content pillars",
  pillarsIntro: "Each pillar follows an enterprise format: the problem, management principles, an applied template and the KPIs used to control operating quality.",
}

const vi: typeof en = {
  title: "Nền tảng kiến thức Supply Chain cho người Việt",
  intro: "SCHub.vn được xây dựng để giúp những người làm logistics, warehouse và supply chain operations tại doanh nghiệp Việt Nam tiếp cận kiến thức, công cụ và kinh nghiệm thực chiến theo cách dễ hiểu, có cấu trúc và áp dụng được ngay.",
  focusTitle: "SCHub.vn tập trung vào",
  focusIntro: "Nội dung của SCHub ưu tiên các vấn đề vận hành cụ thể, trải từ những việc quen thuộc hằng ngày cho tới các bài toán phức tạp và mang tính thời sự với doanh nghiệp Việt Nam:",
  focusItems: [
    <><span className={strong}>Từ những vấn đề đơn giản:</span> thiếu hàng nhưng tồn vẫn cao, master data chưa sạch, dashboard khó dùng, quy trình chưa rõ trách nhiệm, thiếu nhịp quản trị liên phòng ban.</>,
    <><span className={strong}>Cho tới các bài toán ở tầm tactical:</span> xây dựng và vận hành S&amp;OP để khớp cung – cầu, nâng độ chính xác dự báo nhu cầu, tối ưu định mức tồn kho (safety stock, điểm đặt hàng), quản trị hiệu suất nhà cung cấp và lead time, cùng đo lường – cải thiện các KPI chuỗi cung ứng (service level, fill rate, vòng quay tồn kho).</>,
  ],
  contactTitle: "Liên hệ",
  contactBody: "Cần checklist, template hoặc định hướng triển khai? SCHub có thể hỗ trợ từ góc nhìn vận hành thực tế.",
  founderLabel: "Người sáng lập",
  founderBio: [
    <><strong className={bold}>Head of Logistics & Warehouse</strong> tại Nafoods Group — điều phối và tối ưu hóa hoạt động logistics trên toàn bộ 5 nhà máy trong cấu trúc chuỗi cung ứng tích hợp dọc của tập đoàn tại Nghệ An.</>,
    <>Sở hữu chứng chỉ <strong className={bold}>CSCM (Certified Supply Chain Manager)</strong> của ISCEA. Nền tảng chuyên môn trải rộng trên SAP S/4HANA (EWM, TM, IM, SD), thiết kế và tối ưu layout kho, vận hành chuỗi lạnh, quản lý 3PL, cùng điều phối xuất nhập khẩu tới các thị trường toàn cầu.</>,
    <>Bên cạnh vai trò vận hành, còn dẫn dắt các dự án <strong className={bold}>chuyển đổi số</strong> tại Nafoods — từ triển khai hệ thống WMS đến chuẩn hóa quy trình, kết hợp chuyên môn logistics với năng lực công nghệ để tạo ra những công cụ quản trị thực sự hữu ích.</>,
  ],
  quote: "\"Supply Chain không phải là lý thuyết quản trị, mà là những quyết định hàng ngày về hàng tồn, chuyến xe, đơn hàng và dữ liệu. SCHub.vn ra đời để chia sẻ những kinh nghiệm thực chiến đó.\"",
  certLabel: "Chứng chỉ",
  certTitle: "Khóa học & Chứng chỉ chuyên môn",
  viewCert: "Xem chứng chỉ",
  trustTitle: "SCHub.vn khác gì một blog Supply Chain thông thường?",
  pillarsTitle: "6 trụ cột nội dung chính",
  pillarsIntro: "Mỗi trụ cột được xây theo format enterprise: mô tả vấn đề, nguyên tắc quản trị, template áp dụng và KPI dùng để kiểm soát chất lượng vận hành.",
}

const copy = { en, vi }

export function About() {
  const { lang } = useLang()
  const c = copy[lang]

  return (
    <Container>
      <div className="py-16">
        <div>
          <section className="surface-panel rounded-[var(--radius-xl)] p-8 lg:p-10">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)] text-white shadow-[var(--shadow-panel)]">
                <Package className="h-7 w-7" />
              </div>
              <div>
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">About SCHub.vn</p>
                <h1 className="mt-2 font-[var(--font-display)] text-4xl font-bold text-[var(--color-text)]">{c.title}</h1>
              </div>
            </div>

            <p className="max-w-3xl text-lg leading-8 text-[var(--color-text-muted)]">{c.intro}</p>

            <div className="mt-8 border-t border-[var(--color-border)] pt-8">
              <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">{c.focusTitle}</h2>
              <p className="mt-3 max-w-3xl text-[var(--color-text-muted)]">{c.focusIntro}</p>

              <ul className="mt-4 max-w-3xl space-y-2 text-[var(--color-text-muted)]">
                {c.focusItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <aside className="surface-panel mt-8 flex flex-col gap-4 rounded-[var(--radius-xl)] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-[var(--font-display)] text-xl text-[var(--color-text)]">{c.contactTitle}</h2>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">{c.contactBody}</p>
            </div>
            <a href="mailto:chuquangthangftu@gmail.com"
              className="focus-ring inline-flex shrink-0 items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-4 py-3 text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]">
              <Mail className="h-5 w-5 text-[var(--color-secondary)]" />
              chuquangthangftu@gmail.com
            </a>
          </aside>
        </div>

        {/* Founder section */}
        <section className="mt-10 surface-panel rounded-[var(--radius-xl)] p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[auto_1fr]">
            <div className="mx-auto w-48 shrink-0 lg:mx-0">
              <img src={founderImg} alt="Chu Quang Thang"
                className="h-48 w-48 rounded-[var(--radius-xl)] border-4 border-[var(--color-primary)] object-cover shadow-[var(--shadow-panel)]" />
            </div>
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)] text-white">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">{c.founderLabel}</p>
                  <h2 className="font-[var(--font-display)] text-2xl font-bold text-[var(--color-text)]">Chu Quang Thang (Milan)</h2>
                </div>
              </div>
              <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
                {c.founderBio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
                <div className="flex items-start gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4">
                  <Quote className="mt-1 h-4 w-4 shrink-0 text-[var(--color-secondary)]" />
                  <p className="italic text-sm">{c.quote}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates section */}
        <section className="mt-10">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)] text-white shadow-[var(--shadow-panel)]">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">{c.certLabel}</p>
              <h2 className="font-[var(--font-display)] text-3xl font-bold text-[var(--color-text)]">{c.certTitle}</h2>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certificates.map((cert) => (
              <a key={cert.file} href={`/certificates/${encodeURIComponent(cert.file)}`} target="_blank" rel="noopener noreferrer"
                className="group surface-panel card-hover rounded-[var(--radius-xl)] p-5 transition-all hover:-translate-y-0.5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--color-primary)] text-white transition-colors group-hover:bg-[var(--color-secondary)]">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="font-[var(--font-display)] text-base font-bold text-[var(--color-text)]">{cert.title}</h3>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">{cert.issuer}</p>
                <div className="mt-3 flex items-center gap-1 text-xs font-medium text-[var(--color-primary)] opacity-0 transition-opacity group-hover:opacity-100">
                  {c.viewCert} <ExternalLink className="h-3 w-3" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Trust section */}
        <section className="mt-10">
          <div className="mb-8 max-w-3xl">
            <h2 className="font-[var(--font-display)] text-3xl text-[var(--color-text)]">{c.trustTitle}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {trustCards.map((card) => (
              <div key={card.title.en} className="surface-panel rounded-[var(--radius-xl)] p-6">
                <CheckCircle2 className="mb-4 h-8 w-8 text-[var(--color-primary)]" />
                <h3 className="font-[var(--font-display)] text-xl text-[var(--color-text)]">{card.title[lang]}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">{card.description[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-8 max-w-3xl">
            <h2 className="font-[var(--font-display)] text-3xl text-[var(--color-text)]">{c.pillarsTitle}</h2>
            <p className="mt-3 text-[var(--color-text-muted)]">{c.pillarsIntro}</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="surface-panel card-hover rounded-[var(--radius-xl)] p-6">
                <pillar.icon className="mb-4 h-8 w-8 text-[var(--color-primary)]" />
                <h3 className="font-[var(--font-display)] text-xl text-[var(--color-text)]">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">{pillar.description[lang]}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Container>
  )
}
