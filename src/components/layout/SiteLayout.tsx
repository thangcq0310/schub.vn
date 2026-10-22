import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useLang } from "@/lib/i18n"

export function SiteLayout() {
  const { lang } = useLang()

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-surface)] text-[var(--color-text)]">
      <a href="#main-content" className="skip-link">{lang === "en" ? "Skip to content" : "Bỏ qua điều hướng"}</a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default SiteLayout