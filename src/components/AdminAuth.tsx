import { useState, type ReactNode } from "react"
import { Lock, Package } from "lucide-react"

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || "admin"
const AUTH_KEY = "schub_admin_auth"

function isAuthed(): boolean {
  return sessionStorage.getItem(AUTH_KEY) === "true"
}

export function AdminGuard({ children }: { children: ReactNode }) {
  const [authed, setAuthed] = useState(isAuthed)

  if (authed) return <>{children}</>

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-surface)]">
      <div className="w-full max-w-sm rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-8 text-center shadow-[var(--shadow-panel)]">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--color-primary)] text-white">
          <Package className="h-7 w-7" />
        </div>
        <h1 className="font-[var(--font-display)] text-xl text-[var(--color-text)]">SCHub.vn Admin</h1>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">Nhập mật khẩu để quản lý blog</p>
        <LoginForm onSuccess={() => setAuthed(true)} />
      </div>
    </div>
  )
}

function LoginForm({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, "true")
      onSuccess()
    } else {
      setError(true)
      setPassword("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); setError(false) }}
          placeholder="Mật khẩu"
          className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-center text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none"
          autoFocus
        />
        {error && <p className="mt-2 text-xs text-red-500">Sai mật khẩu</p>}
      </div>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-primary)] px-4 py-2.5 text-sm font-medium text-white hover:brightness-110"
      >
        <Lock className="h-4 w-4" /> Đăng nhập
      </button>
    </form>
  )
}
