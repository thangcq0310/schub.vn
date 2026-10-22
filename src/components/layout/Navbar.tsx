import { Link, useLocation } from "react-router-dom"
import { BookOpen, ChevronDown, GraduationCap, Lightbulb, Menu, Package, X } from "lucide-react"
import { useMemo, useState, useEffect } from "react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useLang, type Localized } from "@/lib/i18n"
import { LanguageToggle } from "@/components/LanguageToggle"

type NavLink = {
  to: string
  label: Localized
  icon: typeof Package
  children?: { to: string; label: Localized }[]
}

const navLinks: NavLink[] = [
  { to: "/about", label: { en: "About", vi: "Về SCHub" }, icon: Package },
  {
    to: "/learning",
    label: { en: "Learning Hub", vi: "Learning Hub" },
    icon: GraduationCap,
    children: [
      { to: "/learning/supply-chain-foundation", label: { en: "Supply Chain Foundation", vi: "Supply Chain Foundation" } },
      { to: "/learning/demand-analysis", label: { en: "Demand Analysis", vi: "Demand Analysis" } },
      { to: "/learning/demand-management", label: { en: "Demand Management", vi: "Demand Management" } },
      { to: "/learning/forecasting", label: { en: "Forecasting", vi: "Forecasting" } },
      { to: "/learning/sop", label: { en: "S&OP", vi: "S&OP" } },
      { to: "/learning/operations-planning-control", label: { en: "Operations Planning & Control", vi: "Operations Planning & Control" } },
    ],
  },
  {
    to: "/solutions",
    label: { en: "Solutions", vi: "Giải pháp" },
    icon: Lightbulb,
    children: [
      { to: "/solutions/resources", label: { en: "Resources", vi: "Tài nguyên" } },
      { to: "/solutions/products", label: { en: "Digital Products", vi: "Sản phẩm số" } },
      { to: "/solutions/tools", label: { en: "Tools", vi: "Công cụ" } },
      { to: "/solutions/services", label: { en: "Services", vi: "Dịch vụ" } },
      { to: "/solutions/checklist", label: { en: "Checklist", vi: "Checklist" } },
    ],
  },
  { to: "/blog", label: { en: "Blog", vi: "Blog" }, icon: BookOpen },
]

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

const copy = {
  en: {
    mainNav: "Main navigation",
    solutionsOverview: "Solutions overview",
    learningOverview: "Learning Hub overview",
    checklistCta: "50-point checklist",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  vi: {
    mainNav: "Điều hướng chính",
    solutionsOverview: "Tổng quan giải pháp",
    learningOverview: "Tổng quan Learning Hub",
    checklistCta: "Checklist 50 điểm",
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
  },
} satisfies Localized<Record<string, string>>

export default function Navbar() {
  const location = useLocation()
  const { lang } = useLang()
  const c = copy[lang]
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
   const [solutionsOpen, setSolutionsOpen] = useState(false)
   const [learningOpen, setLearningOpen] = useState(false)
   const [solutionsTimeout, setSolutionsTimeout] = useState<ReturnType<typeof setTimeout> | null>(null)
   const [learningTimeout, setLearningTimeout] = useState<ReturnType<typeof setTimeout> | null>(null)

  const activeSolutions = useMemo(
    () => location.pathname === "/solutions" || location.pathname.startsWith("/solutions/"),
    [location.pathname],
  )

   const activeLearning = useMemo(
     () => location.pathname === "/learning" || location.pathname.startsWith("/learning/"),
     [location.pathname],
   )

   // Clean up timeouts on unmount
   useEffect(() => {
     return () => {
       if (solutionsTimeout) {
         clearTimeout(solutionsTimeout)
       }
       if (learningTimeout) {
         clearTimeout(learningTimeout)
       }
     };
   }, [solutionsTimeout, learningTimeout]);

   return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[color:rgba(247,245,238,0.92)] backdrop-blur supports-[backdrop-filter]:bg-[color:rgba(247,245,238,0.82)]">
      <nav aria-label={c.mainNav} className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="focus-ring flex items-center gap-3 rounded-[var(--radius-md)] px-1 py-1.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-primary)] text-white shadow-[var(--shadow-panel)]">
            <Package className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-[var(--font-display)] text-[1.375rem] leading-none text-[var(--color-text)]">SCHub.vn</span>
            <span className="hidden text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-text-muted)] sm:block">Supply Chain Knowledge Hub</span>
          </div>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(location.pathname, link.to)
            const Icon = link.icon

             if (link.children) {
               const isSolutionsMenu = link.to === "/solutions"
               const isLearningMenu = link.to === "/learning"
               const open = isSolutionsMenu ? solutionsOpen : learningOpen
               const setOpen = isSolutionsMenu ? setSolutionsOpen : setLearningOpen
               const activeMenu = isSolutionsMenu ? activeSolutions : activeLearning
               const overviewLabel = isSolutionsMenu ? c.solutionsOverview : c.learningOverview
               
               return (
                 <div
                   key={link.to}
                   className="group relative"
                   onMouseEnter={() => {
                     if (isSolutionsMenu && solutionsTimeout) {
                       clearTimeout(solutionsTimeout)
                       setSolutionsTimeout(null)
                     }
                     if (isLearningMenu && learningTimeout) {
                       clearTimeout(learningTimeout)
                       setLearningTimeout(null)
                     }
                     setOpen(true);
                   }}
                   onMouseLeave={() => {
                     if (isSolutionsMenu) {
                       const timeout = setTimeout(() => setSolutionsOpen(false), 300)
                       setSolutionsTimeout(timeout)
                     }
                     if (isLearningMenu) {
                       const timeout = setTimeout(() => setLearningOpen(false), 300)
                       setLearningTimeout(timeout)
                     }
                   }}
                 >
                   <button
                     type="button"
                     aria-expanded={open}
                     className={[
                       "focus-ring inline-flex items-center gap-2 rounded-[var(--radius-md)] px-4 py-2 text-sm font-medium transition-colors",
                       activeMenu
                         ? "bg-[var(--color-primary)] text-white"
                         : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface-raised)] hover:text-[var(--color-text)]",
                     ].join(" ")}
                     onClick={(e) => {
                       e.stopPropagation();
                       if (isSolutionsMenu && solutionsTimeout) {
                         clearTimeout(solutionsTimeout)
                         setSolutionsTimeout(null)
                       }
                       if (isLearningMenu && learningTimeout) {
                         clearTimeout(learningTimeout)
                         setLearningTimeout(null)
                       }
                       setOpen((prev) => !prev);
                     }}
                   >
                     <Icon className="h-4 w-4" />
                     {link.label[lang]}
                     <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
                   </button>

{open && (
                       <div
                         className="absolute left-0 top-full mt-2 z-[100] min-w-[260px] rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-2 shadow-[var(--shadow-panel-hover)]"
                        onMouseEnter={() => {
                          if (isSolutionsMenu && solutionsTimeout) {
                            clearTimeout(solutionsTimeout)
                            setSolutionsTimeout(null)
                          }
                          if (isLearningMenu && learningTimeout) {
                            clearTimeout(learningTimeout)
                            setLearningTimeout(null)
                          }
                        }}
                        onMouseLeave={() => {
                          if (isSolutionsMenu) {
                            const timeout = setTimeout(() => setSolutionsOpen(false), 300)
                            setSolutionsTimeout(timeout)
                          }
                          if (isLearningMenu) {
                            const timeout = setTimeout(() => setLearningOpen(false), 300)
                            setLearningTimeout(timeout)
                          }
                        }}
                      >
                        <Link
                          to={link.to}
                          className="focus-ring block rounded-[var(--radius-md)] px-3 py-2 text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-surface)]"
                        >
                          {overviewLabel}
                        </Link>
                        {link.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className="focus-ring block rounded-[var(--radius-md)] px-3 py-2 text-sm text-[var(--color-text-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
                          >
                            {child.label[lang]}
                          </Link>
                        ))}
                      </div>
                    )}
                 </div>
               )
            }

            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={active ? "page" : undefined}
                className={[
                  "focus-ring inline-flex items-center gap-2 rounded-[var(--radius-md)] px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-[var(--color-primary)] text-white"
                    : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface-raised)] hover:text-[var(--color-text)]",
                ].join(" ")}
              >
                <Icon className="h-4 w-4" />
                {link.label[lang]}
              </Link>
            )
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <Link to="/solutions/checklist" className={buttonVariants({ variant: "secondary", size: "default" })}>
            {c.checklistCta}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <button
            type="button"
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] text-[var(--color-text)]"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? c.closeMenu : c.openMenu}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div id="mobile-menu" className="border-t border-[var(--color-border)] bg-[var(--color-surface-raised)] lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navLinks.map((link) => {
              const active = isActive(location.pathname, link.to)
              const Icon = link.icon

              if (link.children) {
                const isSolutionsMenu = link.to === "/solutions"
                const open = isSolutionsMenu ? solutionsOpen : learningOpen
                const setOpen = isSolutionsMenu ? setSolutionsOpen : setLearningOpen
                const activeMenu = isSolutionsMenu ? activeSolutions : activeLearning
                const overviewLabel = isSolutionsMenu ? c.solutionsOverview : c.learningOverview

                return (
                  <div key={link.to} className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)]">
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setOpen((prev) => !prev)}
                      className={[
                        "focus-ring flex w-full items-center justify-between rounded-[var(--radius-md)] px-4 py-3 text-sm font-medium transition-colors",
                        activeMenu ? "text-[var(--color-primary)]" : "text-[var(--color-text)]",
                      ].join(" ")}
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="h-4 w-4" />
                        {link.label[lang]}
                      </span>
                      <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
                    </button>
                    {open && (
                      <div className="space-y-1 px-2 pb-2">
                        <Link
                          to={link.to}
                          onClick={() => setMobileMenuOpen(false)}
                          className="focus-ring block rounded-[var(--radius-md)] px-3 py-2 text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-surface-raised)]"
                        >
                          {overviewLabel}
                        </Link>
                        {link.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            onClick={() => setMobileMenuOpen(false)}
                            className="focus-ring block rounded-[var(--radius-md)] px-3 py-2 text-sm text-[var(--color-text-muted)] hover:bg-[var(--color-surface-raised)] hover:text-[var(--color-text)]"
                          >
                            {child.label[lang]}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className={[
                    "focus-ring flex items-center gap-3 rounded-[var(--radius-md)] border px-4 py-3 text-sm font-medium transition-colors",
                    active
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                      : "border-transparent bg-[var(--color-surface)] text-[var(--color-text)] hover:border-[var(--color-border)]",
                  ].join(" ")}
                >
                  <Icon className="h-4 w-4" />
                  {link.label[lang]}
                </Link>
              )
            })}
            <Link
              to="/solutions/checklist"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(buttonVariants({ variant: "secondary", size: "default" }), "mt-2 w-full")}
            >
              {c.checklistCta}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
