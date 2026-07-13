import { Mail, Package, Target, Database, Warehouse, BarChart3, Users, FileText, CheckCircle2, ExternalLink, Award, GraduationCap, Quote } from "lucide-react"
import Container from "../components/layout/Container"
import founderImg from "../assets/founder.jpg"

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

const pillars = [
  {
    title: "Planning & Forecast",
    description: "Biến dữ liệu nhu cầu thành cadence ra quyết định rõ ràng cho forecast, supply plan và S&OP.",
    icon: Target,
  },
  {
    title: "Procurement & Supplier",
    description: "Chuẩn hóa logic mua hàng, lead time, MOQ và cơ chế theo dõi nhà cung cấp theo KPI.",
    icon: FileText,
  },
  {
    title: "Inventory Control",
    description: "Thiết kế safety stock, replenishment và dashboard để giảm tồn cao nhưng vẫn giữ service level.",
    icon: Database,
  },
  {
    title: "Warehouse & Logistics",
    description: "Tối ưu quy trình kho, FIFO/FEFO, 3PL và cost-to-serve bằng nguyên tắc vận hành rõ ràng.",
    icon: Warehouse,
  },
  {
    title: "KPI & Digital Tools",
    description: "Kết nối master data, reporting và công cụ số hóa để đội ngũ nhìn cùng một bức tranh vận hành.",
    icon: BarChart3,
  },
  {
    title: "People & Governance",
    description: "Thiết lập SOP, RACI và nhịp review giúp các phòng ban phối hợp thay vì xử lý sự vụ rời rạc.",
    icon: Users,
  },
]

const trustCards = [
  {
    title: "Bắt đầu từ vấn đề vận hành thật",
    description: "Nội dung không bắt đầu từ thuật ngữ, mà từ các vấn đề như tồn cao nhưng thiếu hàng, forecast sai, Master Data lỗi, SLA 3PL yếu và Dashboard không ra quyết định.",
    icon: CheckCircle2,
  },
  {
    title: "Có Learning Hub và resource đi kèm",
    description: "Mỗi chủ đề được kết nối với Learning Hub, Blog, checklist, tool hoặc digital product liên quan.",
    icon: CheckCircle2,
  },
  {
    title: "Tập trung bối cảnh doanh nghiệp Việt Nam",
    description: "Ưu tiên cách triển khai đơn giản, linh hoạt, phù hợp với dữ liệu phân tán, nguồn lực hạn chế và vận hành thực tế.",
    icon: CheckCircle2,
  },
]

export function About() {
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
                <h1 className="mt-2 font-[var(--font-display)] text-4xl font-bold text-[var(--color-text)]">Nền tảng kiến thức Supply Chain cho người Việt</h1>
              </div>
            </div>

            <p className="max-w-3xl text-lg leading-8 text-[var(--color-text-muted)]">
              SCHub.vn được xây dựng để giúp những người làm logistics, warehouse và supply chain operations tại doanh nghiệp Việt Nam tiếp cận kiến thức, công cụ và kinh nghiệm thực chiến theo cách dễ hiểu, có cấu trúc và áp dụng được ngay.
            </p>

            <div className="mt-8 border-t border-[var(--color-border)] pt-8">
              <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">SCHub.vn tập trung vào</h2>
              <p className="mt-3 max-w-3xl text-[var(--color-text-muted)]">
                Nội dung của SCHub ưu tiên các vấn đề vận hành cụ thể, trải từ những việc quen thuộc hằng ngày cho tới các bài toán phức tạp và mang tính thời sự với doanh nghiệp Việt Nam:
              </p>

              <ul className="mt-4 max-w-3xl space-y-2 text-[var(--color-text-muted)]">
                <li>
                  <span className="font-medium text-[var(--color-text)]">Từ những vấn đề đơn giản:</span> thiếu hàng nhưng tồn vẫn cao, master data chưa sạch, dashboard khó dùng, quy trình chưa rõ trách nhiệm, thiếu nhịp quản trị liên phòng ban.
                </li>
                <li>
                  <span className="font-medium text-[var(--color-text)]">Cho tới các bài toán ở tầm tactical:</span> xây dựng và vận hành S&amp;OP để khớp cung – cầu, nâng độ chính xác dự báo nhu cầu, tối ưu định mức tồn kho (safety stock, điểm đặt hàng), quản trị hiệu suất nhà cung cấp và lead time, cùng đo lường – cải thiện các KPI chuỗi cung ứng (service level, fill rate, vòng quay tồn kho).
                </li>
              </ul>
            </div>
          </section>

          <aside className="surface-panel mt-8 flex flex-col gap-4 rounded-[var(--radius-xl)] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-[var(--font-display)] text-xl text-[var(--color-text)]">Liên hệ</h2>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">Cần checklist, template hoặc định hướng triển khai? SCHub có thể hỗ trợ từ góc nhìn vận hành thực tế.</p>
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
                  <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">Người sáng lập</p>
                  <h2 className="font-[var(--font-display)] text-2xl font-bold text-[var(--color-text)]">Chu Quang Thang (Milan)</h2>
                </div>
              </div>
               <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
                <p>
                  <strong className="text-[var(--color-text)]">Head of Logistics & Warehouse</strong> tại Nafoods Group — điều phối và tối ưu hóa hoạt động logistics trên toàn bộ 5 nhà máy trong cấu trúc chuỗi cung ứng tích hợp dọc của tập đoàn tại Nghệ An.
                </p>
                <p>
                  Sở hữu chứng chỉ <strong className="text-[var(--color-text)]">CSCM (Certified Supply Chain Manager)</strong> của ISCEA. Nền tảng chuyên môn trải rộng trên SAP S/4HANA (EWM, TM, IM, SD), thiết kế và tối ưu layout kho, vận hành chuỗi lạnh, quản lý 3PL, cùng điều phối xuất nhập khẩu tới các thị trường toàn cầu.
                </p>
                <p>
                  Bên cạnh vai trò vận hành, còn dẫn dắt các dự án <strong className="text-[var(--color-text)]">chuyển đổi số</strong> tại Nafoods — từ triển khai hệ thống WMS đến chuẩn hóa quy trình, kết hợp chuyên môn logistics với năng lực công nghệ để tạo ra những công cụ quản trị thực sự hữu ích.
                </p>
                <div className="flex items-start gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4">
                  <Quote className="mt-1 h-4 w-4 shrink-0 text-[var(--color-secondary)]" />
                  <p className="italic text-sm">
                    "Supply Chain không phải là lý thuyết quản trị, mà là những quyết định hàng ngày về hàng tồn, chuyến xe, 
                    đơn hàng và dữ liệu. SCHub.vn ra đời để chia sẻ những kinh nghiệm thực chiến đó."
                  </p>
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
              <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">Chứng chỉ</p>
              <h2 className="font-[var(--font-display)] text-3xl font-bold text-[var(--color-text)]">Khóa học & Chứng chỉ chuyên môn</h2>
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
                  Xem chứng chỉ <ExternalLink className="h-3 w-3" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Trust section */}
        <section className="mt-10">
          <div className="mb-8 max-w-3xl">
            <h2 className="font-[var(--font-display)] text-3xl text-[var(--color-text)]">SCHub.vn khác gì một blog Supply Chain thông thường?</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {trustCards.map((card) => (
              <div key={card.title} className="surface-panel rounded-[var(--radius-xl)] p-6">
                <card.icon className="mb-4 h-8 w-8 text-[var(--color-primary)]" />
                <h3 className="font-[var(--font-display)] text-xl text-[var(--color-text)]">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-8 max-w-3xl">
            <h2 className="font-[var(--font-display)] text-3xl text-[var(--color-text)]">6 trụ cột nội dung chính</h2>
            <p className="mt-3 text-[var(--color-text-muted)]">
              Mỗi trụ cột được xây theo format enterprise: mô tả vấn đề, nguyên tắc quản trị, template áp dụng và KPI dùng để kiểm soát chất lượng vận hành.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="surface-panel card-hover rounded-[var(--radius-xl)] p-6">
                <pillar.icon className="mb-4 h-8 w-8 text-[var(--color-primary)]" />
                <h3 className="font-[var(--font-display)] text-xl text-[var(--color-text)]">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Container>
  )
}