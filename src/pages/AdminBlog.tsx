import { useState, useEffect, useCallback } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Save, Plus, Trash2, Eye, Edit3, Film, Copy, Check, Inbox, LogOut, Upload } from "lucide-react"
import {
  bundledArticles,
  createArticle,
  deleteArticle,
  generateSlug,
  getRemoteArticles,
  updateArticle,
  type Article,
  type ArticleInput,
} from "../lib/articles"
import { getLeads, type Lead } from "../lib/leads"
import { auth, signOutAdmin } from "../lib/auth"
import { ArticleMarkdown } from "../components/ArticleMarkdown"

function extractYoutubeId(url: string): string {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
    /^([a-zA-Z0-9_-]{11})$/,
  ]
  for (const p of patterns) {
    const m = url.match(p)
    if (m) return m[1]
  }
  return ""
}

function youtubeEmbedMarkdown(id: string): string {
  return `![YouTube video](https://www.youtube.com/watch?v=${id})`
}

function errorMessage(err: unknown): string {
  const code = (err as { code?: string }).code
  if (code === "permission-denied") return "Không có quyền ghi (kiểm tra tài khoản admin và Firestore Security Rules)."
  return err instanceof Error ? err.message : String(err)
}

const SLUG_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/

// Before Firestore, posts were kept only in the admin's browser under this key
const LOCAL_DRAFTS_KEY = "schub_user_articles"

interface LocalDraft {
  title: string
  slug?: string
  excerpt?: string
  body?: string
  tags?: string[]
  authorName?: string
  readTimeMinutes?: number
  featured?: boolean
  publishedAt?: { seconds: number }
}

function loadLocalDrafts(): LocalDraft[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(LOCAL_DRAFTS_KEY) ?? "[]")
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function saveLocalDrafts(drafts: LocalDraft[]): void {
  try {
    if (drafts.length > 0) localStorage.setItem(LOCAL_DRAFTS_KEY, JSON.stringify(drafts))
    else localStorage.removeItem(LOCAL_DRAFTS_KEY)
  } catch {
    // storage unavailable, nothing to clean up
  }
}

// The old editor inserted videos as raw HTML, which the article page shows as text
function convertHtmlEmbeds(body: string): string {
  return body.replace(
    /<div class="youtube-embed">[\s\S]*?youtube\.com\/embed\/([a-zA-Z0-9_-]{11})[\s\S]*?<\/div>/g,
    (_, id: string) => youtubeEmbedMarkdown(id),
  )
}

const emptyForm = {
  title: "",
  slug: "",
  excerpt: "",
  body: "",
  titleEn: "",
  excerptEn: "",
  bodyEn: "",
  tags: "",
  authorName: "SCHub.vn",
  readTimeMinutes: 5,
  featured: false,
}

const leadSourceLabels: Record<Lead["source"], string> = {
  checklist: "Checklist",
  services: "Tư vấn",
}

export function AdminBlog() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loadError, setLoadError] = useState("")
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const [saveError, setSaveError] = useState("")
  const [youtubeUrl, setYoutubeUrl] = useState("")
  const [previewYoutubeId, setPreviewYoutubeId] = useState("")
  const [showPreview, setShowPreview] = useState(false)
  // Which language version the body editor and preview show
  const [editLang, setEditLang] = useState<"vi" | "en">("vi")
  const [tab, setTab] = useState<"editor" | "list" | "leads">("editor")
  const [copied, setCopied] = useState(false)
  const [leads, setLeads] = useState<Lead[] | null>(null)
  const [leadsError, setLeadsError] = useState("")
  const [localDrafts, setLocalDrafts] = useState<LocalDraft[]>(loadLocalDrafts)
  const [migrating, setMigrating] = useState(false)
  const [migrateError, setMigrateError] = useState("")

  const refreshArticles = useCallback(async () => {
    try {
      setArticles(await getRemoteArticles())
      setLoadError("")
    } catch (err) {
      setLoadError(errorMessage(err))
    }
  }, [])

  useEffect(() => {
    refreshArticles()
  }, [refreshArticles])

  useEffect(() => {
    if (tab !== "leads" || leads !== null) return
    getLeads()
      .then((result) => {
        setLeads(result)
        setLeadsError("")
      })
      .catch((err) => setLeadsError(errorMessage(err)))
  }, [tab, leads])

  const resetForm = () => {
    setEditingId(null)
    setForm(emptyForm)
    setShowPreview(false)
    setEditLang("vi")
    setSaveError("")
  }

  const bodyKey = editLang === "en" ? "bodyEn" : "body"

  const handleTitleChange = (title: string) => {
    setForm(prev => ({
      ...prev,
      title,
      slug: editingId ? prev.slug : generateSlug(title),
    }))
  }

  const handleYoutubeUrl = (url: string) => {
    setYoutubeUrl(url)
    setPreviewYoutubeId(extractYoutubeId(url))
  }

  const insertYoutubeEmbed = () => {
    if (!previewYoutubeId) return
    const embed = youtubeEmbedMarkdown(previewYoutubeId)
    setForm(prev => ({ ...prev, [bodyKey]: prev[bodyKey] + (prev[bodyKey] ? "\n\n" : "") + embed }))
    setYoutubeUrl("")
    setPreviewYoutubeId("")
  }

  const handleSave = async () => {
    if (!form.title.trim() || !form.body.trim()) {
      setSaveError("Cần có tiêu đề và nội dung.")
      return
    }
    const slug = form.slug.trim() || generateSlug(form.title)
    if (!SLUG_PATTERN.test(slug)) {
      setSaveError("Slug chỉ gồm chữ thường không dấu, số và dấu gạch ngang.")
      return
    }
    const slugTaken =
      bundledArticles.some(a => a.slug === slug) || articles.some(a => a.slug === slug && a.id !== editingId)
    if (slugTaken) {
      setSaveError("Slug này đã được dùng cho bài khác.")
      return
    }

    const titleEn = form.titleEn.trim()
    const bodyEn = form.bodyEn.trim()
    if (!!titleEn !== !!bodyEn) {
      setSaveError("Bản tiếng Anh cần có cả tiêu đề và nội dung (hoặc để trống cả hai).")
      return
    }

    const tags = form.tags.split(",").map(t => t.trim()).filter(Boolean)
    const editing = editingId ? articles.find(a => a.id === editingId) : undefined
    const data: ArticleInput = {
      title: form.title.trim(),
      slug,
      excerpt: form.excerpt.trim(),
      body: form.body,
      tags: tags.length > 0 ? tags : ["Supply Chain"],
      authorName: form.authorName.trim() || "SCHub.vn",
      readTimeMinutes: Math.max(1, Math.round(form.readTimeMinutes) || 1),
      featured: form.featured,
      publishedAt: editing?.publishedAt ?? Date.now(),
      en: titleEn ? { title: titleEn, excerpt: form.excerptEn.trim(), body: form.bodyEn } : undefined,
    }

    setSaving(true)
    setSaveError("")
    try {
      if (editingId) await updateArticle(editingId, data)
      else await createArticle(data)
      resetForm()
      await refreshArticles()
      setTab("list")
    } catch (err) {
      setSaveError(errorMessage(err))
    } finally {
      setSaving(false)
    }
  }

  const handleEdit = (a: Article) => {
    setForm({
      title: a.title,
      slug: a.slug,
      excerpt: a.excerpt,
      body: a.body,
      titleEn: a.en?.title ?? "",
      excerptEn: a.en?.excerpt ?? "",
      bodyEn: a.en?.body ?? "",
      tags: a.tags.join(", "),
      authorName: a.authorName,
      readTimeMinutes: a.readTimeMinutes,
      featured: a.featured,
    })
    setEditingId(a.id)
    setTab("editor")
    setShowPreview(false)
    setEditLang("vi")
    setSaveError("")
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Xoá bài viết này?")) return
    try {
      await deleteArticle(id)
      await refreshArticles()
    } catch (err) {
      setLoadError(errorMessage(err))
    }
  }

  const handleMigrateDrafts = async () => {
    setMigrating(true)
    setMigrateError("")
    const taken = new Set([...bundledArticles, ...articles].map(a => a.slug))
    let remaining = [...localDrafts]
    try {
      for (const draft of localDrafts) {
        const base = generateSlug(draft.slug || draft.title) || "bai-viet"
        let slug = base
        for (let n = 2; taken.has(slug); n++) slug = `${base}-${n}`
        await createArticle({
          title: draft.title,
          slug,
          excerpt: draft.excerpt ?? "",
          body: convertHtmlEmbeds(draft.body ?? ""),
          tags: draft.tags?.length ? draft.tags : ["Supply Chain"],
          authorName: draft.authorName || "SCHub.vn",
          readTimeMinutes: draft.readTimeMinutes || 5,
          featured: !!draft.featured,
          publishedAt: draft.publishedAt ? draft.publishedAt.seconds * 1000 : Date.now(),
        })
        taken.add(slug)
        // Drop each draft as soon as it is saved so a retry never duplicates it
        remaining = remaining.filter(d => d !== draft)
        saveLocalDrafts(remaining)
      }
    } catch (err) {
      setMigrateError(errorMessage(err))
    } finally {
      setLocalDrafts(remaining)
      setMigrating(false)
      await refreshArticles()
    }
  }

  const handleCopyBackup = () => {
    navigator.clipboard.writeText(JSON.stringify(articles, null, 2))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const tabStyle = (active: boolean) => ({
    background: active ? "var(--color-primary)" : "var(--color-surface-raised)",
    color: active ? "#fff" : "var(--color-text)",
    border: active ? "none" : "1px solid var(--color-border)",
  })

  return (
    <div className="min-h-screen" style={{ background: "var(--color-surface)" }}>
      <div className="sticky top-0 z-50" style={{ background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <Link to="/blog" className="flex items-center gap-1 text-sm" style={{ color: "var(--color-primary)" }}>
              <ArrowLeft className="h-4 w-4" /> Blog
            </Link>
            <div style={{ width: 1, height: 20, background: "var(--color-border)" }} />
            <h1 className="font-[var(--font-display)] font-semibold" style={{ color: "var(--color-text)" }}>Quản lý bài viết</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button onClick={() => setTab("editor")} className="px-3 py-1.5 rounded-[var(--radius-sm)] text-sm font-medium flex items-center gap-1" style={tabStyle(tab === "editor")}>
              <Edit3 className="h-3.5 w-3.5" /> Viết bài
            </button>
            <button onClick={() => setTab("list")} className="px-3 py-1.5 rounded-[var(--radius-sm)] text-sm font-medium flex items-center gap-1" style={tabStyle(tab === "list")}>
              <Eye className="h-3.5 w-3.5" /> Đã đăng ({articles.length})
            </button>
            <button onClick={() => setTab("leads")} className="px-3 py-1.5 rounded-[var(--radius-sm)] text-sm font-medium flex items-center gap-1" style={tabStyle(tab === "leads")}>
              <Inbox className="h-3.5 w-3.5" /> Khách để lại thông tin{leads ? ` (${leads.length})` : ""}
            </button>
            <button onClick={() => signOutAdmin()} title={auth.currentUser?.email ?? undefined} className="px-3 py-1.5 rounded-[var(--radius-sm)] text-sm flex items-center gap-1" style={{ color: "var(--color-text-muted)" }}>
              <LogOut className="h-3.5 w-3.5" /> Đăng xuất
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {localDrafts.length > 0 && (
          <div className="mb-6 p-4 rounded-[var(--radius-lg)] flex flex-wrap items-center justify-between gap-3" style={{ background: "var(--color-surface-raised)", border: "1px solid var(--color-warning)" }}>
            <div className="text-sm" style={{ color: "var(--color-text)" }}>
              <p>Có <strong>{localDrafts.length} bài</strong> chỉ đang lưu trên trình duyệt này nên khách chưa xem được. Đẩy lên Firestore để đăng chính thức.</p>
              {migrateError && <p className="mt-1 text-xs text-red-500">{migrateError}</p>}
            </div>
            <button onClick={handleMigrateDrafts} disabled={migrating} className="flex items-center gap-1 px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-medium text-white disabled:opacity-60" style={{ background: "var(--color-primary)" }}>
              <Upload className="h-3.5 w-3.5" /> {migrating ? "Đang đẩy lên..." : "Đẩy lên Firestore"}
            </button>
          </div>
        )}

        {loadError && (
          <p className="mb-6 text-sm text-red-500">Không tải được danh sách bài viết: {loadError}</p>
        )}

        {tab === "editor" ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-4">
              <div className="p-5 rounded-[var(--radius-lg)]" style={{ background: "var(--color-surface-raised)", border: "1px solid var(--color-border)" }}>
                <h2 className="font-[var(--font-display)] font-semibold mb-4 text-sm" style={{ color: "var(--color-text)" }}>{editingId ? "Sửa bài" : "Bài viết mới"}</h2>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: "var(--color-text-muted)" }}>Tiêu đề</label>
                    <input value={form.title} onChange={e => handleTitleChange(e.target.value)} className="w-full px-3 py-2 rounded-[var(--radius-sm)] text-sm" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", color: "var(--color-text)" }} />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: "var(--color-text-muted)" }}>Slug (URL)</label>
                    <input value={form.slug} onChange={e => setForm(prev => ({ ...prev, slug: e.target.value }))} className="w-full px-3 py-2 rounded-[var(--radius-sm)] text-sm" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", color: "var(--color-text)" }} />
                    <p className="text-[10px] mt-0.5" style={{ color: "var(--color-text-muted)" }}>Tự động tạo từ tiêu đề nếu để trống</p>
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: "var(--color-text-muted)" }}>Mô tả ngắn</label>
                    <textarea value={form.excerpt} onChange={e => setForm(prev => ({ ...prev, excerpt: e.target.value }))} rows={2} className="w-full px-3 py-2 rounded-[var(--radius-sm)] text-sm resize-none" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", color: "var(--color-text)" }} />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-medium mb-1" style={{ color: "var(--color-text-muted)" }}>Tags (cách nhau bằng dấu phẩy)</label>
                      <input value={form.tags} onChange={e => setForm(prev => ({ ...prev, tags: e.target.value }))} placeholder="Inventory, Planning" className="w-full px-3 py-2 rounded-[var(--radius-sm)] text-sm" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", color: "var(--color-text)" }} />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1" style={{ color: "var(--color-text-muted)" }}>Thời gian đọc (phút)</label>
                      <input type="number" min={1} value={form.readTimeMinutes} onChange={e => setForm(prev => ({ ...prev, readTimeMinutes: Number(e.target.value) }))} className="w-full px-3 py-2 rounded-[var(--radius-sm)] text-sm" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", color: "var(--color-text)" }} />
                    </div>
                  </div>

                  <div className="space-y-3 rounded-[var(--radius-sm)] p-3" style={{ border: "1px dashed var(--color-border)" }}>
                    <p className="text-xs font-medium" style={{ color: "var(--color-text)" }}>Bản tiếng Anh (không bắt buộc)</p>
                    <div>
                      <label className="block text-xs font-medium mb-1" style={{ color: "var(--color-text-muted)" }}>Title (English)</label>
                      <input value={form.titleEn} onChange={e => setForm(prev => ({ ...prev, titleEn: e.target.value }))} className="w-full px-3 py-2 rounded-[var(--radius-sm)] text-sm" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", color: "var(--color-text)" }} />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1" style={{ color: "var(--color-text-muted)" }}>Excerpt (English)</label>
                      <textarea value={form.excerptEn} onChange={e => setForm(prev => ({ ...prev, excerptEn: e.target.value }))} rows={2} className="w-full px-3 py-2 rounded-[var(--radius-sm)] text-sm resize-none" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", color: "var(--color-text)" }} />
                    </div>
                    <p className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>Nội dung tiếng Anh soạn ở tab "English" bên phải. Để trống thì khách xem tiếng Anh sẽ thấy bản tiếng Việt.</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="featured" checked={form.featured} onChange={e => setForm(prev => ({ ...prev, featured: e.target.checked }))} />
                    <label htmlFor="featured" className="text-sm" style={{ color: "var(--color-text)" }}>Bài nổi bật (featured)</label>
                  </div>

                  <button onClick={handleSave} disabled={saving} className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-[var(--radius-sm)] text-sm font-medium text-white disabled:opacity-60" style={{ background: "var(--color-primary)" }}>
                    <Save className="h-4 w-4" /> {saving ? "Đang lưu..." : editingId ? "Cập nhật" : "Đăng bài"}
                  </button>
                  {saveError && <p className="text-xs text-red-500">{saveError}</p>}

                  {editingId && (
                    <button onClick={resetForm} className="w-full text-sm" style={{ color: "var(--color-text-muted)" }}>
                      Hủy
                    </button>
                  )}
                </div>
              </div>

              <div className="p-5 rounded-[var(--radius-lg)]" style={{ background: "var(--color-surface-raised)", border: "1px solid var(--color-border)" }}>
                <h2 className="font-[var(--font-display)] font-semibold mb-3 text-sm flex items-center gap-1" style={{ color: "var(--color-text)" }}>
                  <Film className="h-4 w-4" style={{ color: "#ef4444" }} /> Nhúng YouTube
                </h2>
                <div className="space-y-2">
                  <input value={youtubeUrl} onChange={e => handleYoutubeUrl(e.target.value)} placeholder="Paste YouTube URL..." className="w-full px-3 py-2 rounded-[var(--radius-sm)] text-sm" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", color: "var(--color-text)" }} />
                  {previewYoutubeId && (
                    <div className="aspect-video rounded-[var(--radius-sm)] overflow-hidden bg-black/10">
                      <img src={`https://img.youtube.com/vi/${previewYoutubeId}/mqdefault.jpg`} alt="" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <button onClick={insertYoutubeEmbed} disabled={!previewYoutubeId} className="w-full flex items-center justify-center gap-1 px-3 py-2 rounded-[var(--radius-sm)] text-xs font-medium text-white disabled:opacity-40" style={{ background: previewYoutubeId ? "#ef4444" : "var(--color-surface)" }}>
                    <Plus className="h-3.5 w-3.5" /> Chèn video vào bài viết
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between p-2 rounded-[var(--radius-lg)]" style={{ background: "var(--color-surface-raised)", border: "1px solid var(--color-border)" }}>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2" style={{ color: "var(--color-text-muted)" }}>Nội dung (Markdown)</span>
                  {(["vi", "en"] as const).map(l => (
                    <button key={l} onClick={() => setEditLang(l)} aria-pressed={editLang === l} className="px-2.5 py-1 rounded-[var(--radius-sm)] text-xs font-medium" style={{ background: editLang === l ? "var(--color-primary)" : "var(--color-surface)", color: editLang === l ? "#fff" : "var(--color-text)", border: "1px solid var(--color-border)" }}>
                      {l === "vi" ? "Tiếng Việt" : "English"}
                    </button>
                  ))}
                </div>
                <button onClick={() => setShowPreview(!showPreview)} className="flex items-center gap-1 px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-medium" style={{ background: showPreview ? "var(--color-primary)" : "var(--color-surface)", color: showPreview ? "#fff" : "var(--color-text)", border: "1px solid var(--color-border)" }}>
                  <Eye className="h-3 w-3" /> {showPreview ? "Soạn thảo" : "Xem trước"}
                </button>
              </div>

              {showPreview ? (
                <div className="p-6 rounded-[var(--radius-lg)]" style={{ background: "var(--color-surface-raised)", border: "1px solid var(--color-border)" }}>
                  <h1 className="font-[var(--font-display)] text-2xl font-bold mb-2" style={{ color: "var(--color-text)" }}>{(editLang === "en" ? form.titleEn : form.title) || "Tiêu đề bài viết"}</h1>
                  <p className="text-sm mb-4" style={{ color: "var(--color-text-muted)" }}>{form.authorName} · {form.readTimeMinutes} {editLang === "en" ? "min read" : "phút đọc"}</p>
                  {(editLang === "en" ? form.excerptEn : form.excerpt) && (
                    <p className="text-base mb-6 p-4 rounded-[var(--radius-md)]" style={{ background: "var(--color-surface)", borderLeft: "3px solid var(--color-primary)", color: "var(--color-text-muted)" }}>
                      {editLang === "en" ? form.excerptEn : form.excerpt}
                    </p>
                  )}
                  <div className="markdown-body" style={{ color: "var(--color-text)" }}>
                    <ArticleMarkdown>{form[bodyKey] || "*Chưa có nội dung...*"}</ArticleMarkdown>
                  </div>
                </div>
              ) : (
                <textarea value={form[bodyKey]} onChange={e => setForm(prev => ({ ...prev, [bodyKey]: e.target.value }))} aria-label={editLang === "en" ? "English content" : "Nội dung tiếng Việt"} rows={24} className="w-full px-4 py-4 rounded-[var(--radius-lg)] text-sm font-mono resize-none" style={{ background: "var(--color-surface-raised)", border: "1px solid var(--color-border)", color: "var(--color-text)", lineHeight: 1.7 }} placeholder={`Viết nội dung bằng Markdown...

Tiêu đề ##
In đậm **text**
Danh sách - item
Link [text](url)

Dùng công cụ YouTube bên trái để chèn video`} />
              )}
            </div>
          </div>
        ) : tab === "list" ? (
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                {articles.length} bài viết đăng từ trang quản trị (cộng với {bundledArticles.length} bài có sẵn trong code)
              </p>
              <div className="flex gap-2">
                <button onClick={handleCopyBackup} className="flex items-center gap-1 px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-medium" style={{ background: "var(--color-surface-raised)", border: "1px solid var(--color-border)", color: "var(--color-text)" }}>
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? "Đã copy" : "Sao lưu JSON"}
                </button>
                <button onClick={() => { resetForm(); setTab("editor") }} className="flex items-center gap-1 px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-medium text-white" style={{ background: "var(--color-primary)" }}>
                  <Plus className="h-3.5 w-3.5" /> Bài mới
                </button>
              </div>
            </div>

            {articles.length === 0 ? (
              <div className="text-center py-20" style={{ color: "var(--color-text-muted)" }}>
                <Edit3 className="h-10 w-10 mx-auto mb-3 opacity-40" />
                <p className="text-sm">Chưa có bài viết nào. Bấm "Viết bài" để tạo bài đầu tiên.</p>
              </div>
            ) : (
              <div className="space-y-2">
                {articles.map(a => (
                  <div key={a.id} className="flex items-start gap-4 p-4 rounded-[var(--radius-lg)]" style={{ background: "var(--color-surface-raised)", border: "1px solid var(--color-border)" }}>
                    <div className="flex-1 min-w-0">
                      <Link to={`/blog/${a.slug}`} className="block font-medium text-sm truncate hover:underline" style={{ color: "var(--color-text)" }}>{a.title}</Link>
                      <p className="text-xs mt-0.5 line-clamp-1" style={{ color: "var(--color-text-muted)" }}>{a.excerpt || "Không có mô tả"}</p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>{new Date(a.publishedAt).toLocaleDateString("vi-VN")} · {a.readTimeMinutes} phút</span>
                        {a.featured && <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: "var(--color-primary)", color: "#fff" }}>Featured</span>}
                        {a.en && <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: "var(--color-secondary)", color: "#fff" }}>EN</span>}
                        {a.tags.slice(0, 2).map(t => (
                          <span key={t} className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: "var(--color-surface)", color: "var(--color-text-muted)", border: "1px solid var(--color-border)" }}>{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-1 shrink-0">
                      <button onClick={() => handleEdit(a)} className="p-1.5 rounded-[var(--radius-sm)] text-xs" style={{ color: "var(--color-primary)" }}>Sửa</button>
                      <button onClick={() => handleDelete(a.id)} aria-label="Xoá" className="p-1.5 rounded-[var(--radius-sm)] text-xs" style={{ color: "var(--color-danger)" }}><Trash2 className="h-3.5 w-3.5" /></button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>
            {leadsError ? (
              <p className="text-sm text-red-500">Không tải được danh sách: {leadsError}</p>
            ) : leads === null ? (
              <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>Đang tải...</p>
            ) : leads.length === 0 ? (
              <div className="text-center py-20" style={{ color: "var(--color-text-muted)" }}>
                <Inbox className="h-10 w-10 mx-auto mb-3 opacity-40" />
                <p className="text-sm">Chưa có ai để lại thông tin qua form Checklist hoặc Tư vấn.</p>
              </div>
            ) : (
              <div className="space-y-2">
                {leads.map(lead => (
                  <div key={lead.id} className="p-4 rounded-[var(--radius-lg)] text-sm" style={{ background: "var(--color-surface-raised)", border: "1px solid var(--color-border)", color: "var(--color-text)" }}>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: "var(--color-primary)", color: "#fff" }}>{leadSourceLabels[lead.source] ?? lead.source}</span>
                      <strong>{lead.name}</strong>
                      <a href={`mailto:${lead.email}`} style={{ color: "var(--color-primary)" }}>{lead.email}</a>
                      {lead.phone && <span>· {lead.phone}</span>}
                      <span className="ml-auto text-xs" style={{ color: "var(--color-text-muted)" }}>{lead.createdAt ? new Date(lead.createdAt).toLocaleString("vi-VN") : ""}</span>
                    </div>
                    <p className="mt-1 text-xs" style={{ color: "var(--color-text-muted)" }}>
                      {[lead.company, lead.role, lead.serviceType].filter(Boolean).join(" · ")}
                    </p>
                    {lead.message && <p className="mt-2 whitespace-pre-line">{lead.message}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
