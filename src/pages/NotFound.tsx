import { Link } from "react-router-dom"
import Container from "../components/layout/Container"
import { useLang } from "../lib/i18n"

const en = {
  title: "Page not found",
  body: "The link may have changed or no longer exists.",
  home: "Back to home",
  blog: "Read the blog",
}

const vi: typeof en = {
  title: "Không tìm thấy trang",
  body: "Đường dẫn có thể đã thay đổi hoặc không còn tồn tại.",
  home: "Về trang chủ",
  blog: "Xem Blog",
}

const copy = { en, vi }

export function NotFound() {
  const c = copy[useLang().lang]

  return (
    <Container>
      <div className="py-24 text-center">
        <p className="font-[var(--font-mono)] text-sm uppercase tracking-[0.18em] text-[var(--color-secondary)]">404</p>
        <h1 className="mt-3 font-[var(--font-display)] text-3xl font-bold text-[var(--color-text)]">{c.title}</h1>
        <p className="mx-auto mt-3 max-w-xl text-[var(--color-text-muted)]">
          {c.body}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="focus-ring inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-colors hover:brightness-110"
          >
            {c.home}
          </Link>
          <Link
            to="/blog"
            className="focus-ring inline-flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-6 py-3 font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-border-strong)]"
          >
            {c.blog}
          </Link>
        </div>
      </div>
    </Container>
  )
}
