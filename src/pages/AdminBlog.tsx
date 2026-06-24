import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Plus, Save, Trash2, Eye, ArrowLeft, FileText } from "lucide-react"
import { getAllArticles, createArticle, updateArticle, deleteArticle, type Article } from "../lib/articles"
import { VideoEmbed } from "../components/VideoEmbed"

function toSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

const emptyForm = {
  title: "",
  slug: "",
  excerpt: "",
  body: "",
  tags: "",
  authorName: "SCHub.vn",
  readTimeMinutes: 5,
  featured: false,
}

export default function AdminBlog() {
  const [articles, setArticles] = useState<Article[]>([])
  const [editing, setEditing] = useState<Article | null>(null)
  const [form, setForm] = useState(emptyForm)
  const [showPreview, setShowPreview] = useState(false)
  const [tab, setTab] = useState<"list" | "editor">("list")
  const [message, setMessage] = useState("")

  const loadList = () => {
    getAllArticles().then(setArticles)
  }

  useEffect(() => { loadList() }, [])

  const resetForm = () => {
    setForm(emptyForm)
    setEditing(null)
    setShowPreview(false)
  }

  const handleEdit = (a: Article) => {
    setEditing(a)
    setForm({
      title: a.title,
      slug: a.slug,
      excerpt: a.excerpt,
      body: a.body,
      tags: a.tags.join(", "),
      authorName: a.authorName,
      readTimeMinutes: a.readTimeMinutes,
      featured: a.featured,
    })
    setTab("editor")
    setShowPreview(false)
  }

  const handleSave = async () => {
    if (!form.title.trim()) { setMessage("Tiêu đề không được để trống"); return }
    if (!form.slug.trim()) { setMessage("Slug không được để trống"); return }

    const articleData = {
      title: form.title.trim(),
      slug: form.slug.trim(),
      excerpt: form.excerpt.trim(),
      body: form.body,
      type: "article" as const,
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
      authorName: form.authorName.trim() || "SCHub.vn",
      readTimeMinutes: form.readTimeMinutes,
      featured: form.featured,
      publishedAt: Date.now(),
    }

    let ok = false
    if (editing) {
      ok = await updateArticle(editing.id, articleData)
      setMessage(ok ? "Đã cập nhật bài viết" : "Lỗi khi cập nhật")
    } else {
      const id = await createArticle({ ...articleData, id: "" })
      ok = id !== null
      setMessage(ok ? "Đã tạo bài viết mới" : "Lỗi khi tạo bài viết")
    }

    if (ok) {
      resetForm()
      setTab("list")
      loadList()
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Xoá bài viết này?")) return
    const ok = await deleteArticle(id)
    setMessage(ok ? "Đã xoá" : "Lỗi khi xoá")
    loadList()
  }

  return (
    <div className="min-h-screen bg-[var(--color-surface)]">
      <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface-raised)]">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
              <ArrowLeft className="h-4 w-4" /> Về trang chủ
            </Link>
            <div className="h-4 w-px bg-[var(--color-border)]" />
            <h1 className="text-sm font-bold text-[var(--color-text)]">Quản lý Blog</h1>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => { setTab("list"); resetForm() }} className={`flex items-center gap-1.5 rounded-[var(--radius-md)] px-3 py-1.5 text-xs font-medium ${tab === "list" ? "bg-[var(--color-primary)] text-white" : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface)]"}`}>
              <FileText className="h-3.5 w-3.5" /> Bài viết
            </button>
            <button onClick={() => setTab("editor")} className={`flex items-center gap-1.5 rounded-[var(--radius-md)] px-3 py-1.5 text-xs font-medium ${tab === "editor" ? "bg-[var(--color-primary)] text-white" : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface)]"}`}>
              <Plus className="h-3.5 w-3.5" /> {editing ? "Sửa" : "Thêm"}
            </button>
          </div>
        </div>
      </header>

      {message && (
        <div className="mx-auto mt-4 max-w-7xl px-4">
          <div className="flex items-center justify-between rounded-[var(--radius-md)] bg-[var(--color-primary)] px-4 py-2 text-sm text-white">
            <span>{message}</span>
            <button onClick={() => setMessage("")} className="ml-2 text-white/70 hover:text-white">✕</button>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 py-6">
        {tab === "list" ? (
          <div className="space-y-3">
            {articles.length === 0 ? (
              <p className="py-12 text-center text-sm text-[var(--color-text-muted)]">Chưa có bài viết nào.</p>
            ) : articles.map((a) => (
              <div key={a.id} className="flex items-center justify-between rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4">
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-medium text-[var(--color-text)]">{a.title}</h3>
                  <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">/{a.slug}</p>
                </div>
                <div className="ml-4 flex items-center gap-2">
                  <button onClick={() => handleEdit(a)} className="rounded-[var(--radius-md)] px-3 py-1.5 text-xs font-medium text-[var(--color-primary)] hover:bg-[var(--color-surface)]">Sửa</button>
                  <button onClick={() => handleDelete(a.id)} className="rounded-[var(--radius-md)] px-3 py-1.5 text-xs font-medium text-red-500 hover:bg-[var(--color-surface)]"><Trash2 className="h-3.5 w-3.5" /></button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
            <aside className="space-y-4">
              <div>
                <label className="mb-1 block text-xs font-medium text-[var(--color-text-muted)]">Tiêu đề</label>
                <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value, slug: toSlug(e.target.value) })} placeholder="Nhập tiêu đề..." className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-[var(--color-text-muted)]">Slug (URL)</label>
                <input type="text" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} placeholder="slug-bai-viet" className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-[var(--color-text-muted)]">Mô tả ngắn</label>
                <textarea value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} rows={3} placeholder="Tóm tắt 1-2 câu..." className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none resize-none" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-xs font-medium text-[var(--color-text-muted)]">Tác giả</label>
                  <input type="text" value={form.authorName} onChange={(e) => setForm({ ...form, authorName: e.target.value })} className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none" />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-[var(--color-text-muted)]">Phút đọc</label>
                  <input type="number" value={form.readTimeMinutes} onChange={(e) => setForm({ ...form, readTimeMinutes: Number(e.target.value) })} min={1} className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-[var(--color-text-muted)]">Tags (ngăn cách bằng dấu phẩy)</label>
                <input type="text" value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} placeholder="Warehouse, Inventory, 3PL" className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none" />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="featured" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} className="rounded border-[var(--color-border)]" />
                <label htmlFor="featured" className="text-xs text-[var(--color-text-muted)]">Bài viết nổi bật</label>
              </div>
              <button onClick={handleSave} className="flex w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-primary)] px-4 py-2.5 text-sm font-medium text-white hover:brightness-110">
                <Save className="h-4 w-4" /> {editing ? "Cập nhật" : "Đăng bài"}
              </button>
            </aside>

            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-sm font-medium text-[var(--color-text)]">Nội dung (Markdown)</h2>
                <button onClick={() => setShowPreview(!showPreview)} className={`flex items-center gap-1.5 rounded-[var(--radius-md)] px-3 py-1.5 text-xs font-medium ${showPreview ? "bg-[var(--color-primary)] text-white" : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface)]"}`}>
                  <Eye className="h-3.5 w-3.5" /> {showPreview ? "Soạn thảo" : "Xem trước"}
                </button>
              </div>
              {showPreview ? (
                <div className="markdown-body rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      img: ({ src, alt }) => {
                        if (!src) return null
                        if (/(youtube\.com|youtu\.be|vimeo\.com)/i.test(src) || /\.(mp4|webm|ogg)$/i.test(src)) {
                          return <VideoEmbed src={src} title={alt} />
                        }
                        return <img src={src} alt={alt ?? ""} className="max-w-full rounded-[var(--radius-md)]" />
                      },
                    }}
                  >{form.body || "*Chưa có nội dung*"}</ReactMarkdown>
                </div>
              ) : (
                <textarea value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })} rows={25} placeholder="Viết nội dung Markdown tại đây..." className="w-full rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none resize-none font-mono" />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
