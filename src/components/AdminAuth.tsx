import { useEffect, useState, type ReactNode } from "react"
import { onAuthStateChanged, type User } from "firebase/auth"
import { LogIn, LogOut, Package } from "lucide-react"
import { isDemoMode } from "@/lib/firebase"
import { auth, isAdmin, signInWithGoogle, signOutAdmin } from "@/lib/auth"

const buttonClassName = "flex w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-primary)] px-4 py-2.5 text-sm font-medium text-white hover:brightness-110 disabled:opacity-60"

export function AdminGuard({ children }: { children: ReactNode }) {
  // undefined while Firebase restores the previous session
  const [user, setUser] = useState<User | null | undefined>(undefined)
  const [signingIn, setSigningIn] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => onAuthStateChanged(auth, setUser), [])

  if (isAdmin(user)) return <>{children}</>

  const handleSignIn = async () => {
    setSigningIn(true)
    setError("")
    try {
      await signInWithGoogle()
    } catch (err) {
      const code = (err as { code?: string }).code ?? ""
      if (code !== "auth/popup-closed-by-user" && code !== "auth/cancelled-popup-request") {
        setError(`Không đăng nhập được (${code || String(err)})`)
      }
    } finally {
      setSigningIn(false)
    }
  }

  let content: ReactNode
  if (isDemoMode) {
    content = <p className="mt-6 text-sm text-[var(--color-text-muted)]">Chưa cấu hình Firebase. Xem hướng dẫn trong docs/setup-firebase.md.</p>
  } else if (user === undefined) {
    content = <p className="mt-6 text-sm text-[var(--color-text-muted)]">Đang kiểm tra đăng nhập...</p>
  } else if (user) {
    content = (
      <div className="mt-6 space-y-4">
        <p className="text-sm text-[var(--color-text)]">
          Tài khoản <strong>{user.email}</strong> không có quyền quản trị.
        </p>
        <button type="button" onClick={() => signOutAdmin()} className={buttonClassName}>
          <LogOut className="h-4 w-4" /> Đăng xuất
        </button>
      </div>
    )
  } else {
    content = (
      <div className="mt-6 space-y-3">
        <button type="button" onClick={handleSignIn} disabled={signingIn} className={buttonClassName}>
          <LogIn className="h-4 w-4" /> {signingIn ? "Đang mở cửa sổ đăng nhập..." : "Đăng nhập bằng Google"}
        </button>
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-surface)]">
      <div className="w-full max-w-sm rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-8 text-center shadow-[var(--shadow-panel)]">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--color-primary)] text-white">
          <Package className="h-7 w-7" />
        </div>
        <h1 className="font-[var(--font-display)] text-xl text-[var(--color-text)]">SCHub.vn Admin</h1>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">Đăng nhập để quản lý blog</p>
        {content}
      </div>
    </div>
  )
}
