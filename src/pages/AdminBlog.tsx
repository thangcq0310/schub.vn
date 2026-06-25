import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { ArrowLeft, Save, Plus, Trash2, Eye, Edit3, Film, Copy, Check } from "lucide-react"
import { getAllArticles, saveArticle, deleteArticle, getPublishedArticles, generateSlug, type Article } from "../data/articles"

function getDateSeconds(): { seconds: number; nanoseconds: number } {
  return { seconds: Math.floor(Date.now() / 1000), nanoseconds: 0 }
}

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

function youtubeEmbedHtml(id: string): string {
  return `<div class="youtube-embed">
  <iframe src="https://www.youtube.com/embed/${id}" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>`
}

export function AdminBlog() {
  const [articles, setArticles] = useState<Article[]>([])
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    body: "",
    tags: "",
    authorName: "SCHub.vn",
    readTimeMinutes: 5,
    featured: false,
  })
  const [editingId, setEditingId] = useState<string | null>(null)
  const [youtubeUrl, setYoutubeUrl] = useState("")
  const [previewYoutubeId, setPreviewYoutubeId] = useState("")
  const [showPreview, setShowPreview] = useState(false)
  const [tab, setTab] = useState<"editor" | "list">("editor")
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setArticles(getPublishedArticles())
  }, [])

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
    const embed = youtubeEmbedHtml(previewYoutubeId)
    setForm(prev => ({ ...prev, body: prev.body + (prev.body ? "\n\n" : "") + embed }))
    setYoutubeUrl("")
    setPreviewYoutubeId("")
  }

  const handleSave = () => {
    if (!form.title.trim() || !form.body.trim()) return
    const tags = form.tags.split(",").map(t => t.trim()).filter(Boolean)
    const article: Article = {
      id: editingId || Date.now().toString(),
      title: form.title,
      slug: form.slug || generateSlug(form.title),
      excerpt: form.excerpt,
      body: form.body,
      type: "article",
      tags: tags.length > 0 ? tags : ["Supply Chain"],
      authorName: form.authorName,
      readTimeMinutes: form.readTimeMinutes,
      featured: form.featured,
      publishedAt: getDateSeconds(),
    }
    saveArticle(article)
    setEditingId(null)
    setForm({ title: "", slug: "", excerpt: "", body: "", tags: "", authorName: "SCHub.vn", readTimeMinutes: 5, featured: false })
    setArticles(getPublishedArticles())
    setTab("list")
  }

  const handleEdit = (a: Article) => {
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
    setEditingId(a.id)
    setTab("editor")
    setShowPreview(false)
  }

  const handleDelete = (id: string) => {
    if (!confirm("Xoá bài viết này?")) return
    deleteArticle(id)
    setArticles(getPublishedArticles())
  }

  const handleCopyCode = () => {
    const a = getAllArticles()
    navigator.clipboard.writeText(JSON.stringify(a, null, 2))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--color-surface)" }}>
      <div className="sticky top-0 z-50" style={{ background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/blog" className="flex items-center gap-1 text-sm" style={{ color: "var(--color-primary)" }}>
              <ArrowLeft className="h-4 w-4" /> Blog
            </Link>
            <div style={{ width: 1, height: 20, background: "var(--color-border)" }} />
            <h1 className="font-[var(--font-display)] font-semibold" style={{ color: "var(--color-text)" }}>Quản lý bài viết</h1>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setTab("editor")} className="px-3 py-1.5 rounded-[var(--radius-sm)] text-sm font-medium flex items-center gap-1" style={{ background: tab === "editor" ? "var(--color-primary)" : "var(--color-surface-raised)", color: tab === "editor" ? "#fff" : "var(--color-text)", border: tab === "editor" ? "none" : "1px solid var(--color-border)" }}>
              <Edit3 className="h-3.5 w-3.5" /> Viết bài
            </button>
            <button onClick={() => setTab("list")} className="px-3 py-1.5 rounded-[var(--radius-sm)] text-sm font-medium flex items-center gap-1" style={{ background: tab === "list" ? "var(--color-primary)" : "var(--color-surface-raised)", color: tab === "list" ? "#fff" : "var(--color-text)", border: tab === "list" ? "none" : "1px solid var(--color-border)" }}>
              <Eye className="h-3.5 w-3.5" /> Đã đăng ({articles.length})
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
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
                      <input type="number" value={form.readTimeMinutes} onChange={e => setForm(prev => ({ ...prev, readTimeMinutes: Number(e.target.value) }))} className="w-full px-3 py-2 rounded-[var(--radius-sm)] text-sm" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", color: "var(--color-text)" }} />
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="featured" checked={form.featured} onChange={e => setForm(prev => ({ ...prev, featured: e.target.checked }))} />
                    <label htmlFor="featured" className="text-sm" style={{ color: "var(--color-text)" }}>Bài nổi bật (featured)</label>
                  </div>

                  <button onClick={handleSave} className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-[var(--radius-sm)] text-sm font-medium text-white" style={{ background: "var(--color-primary)" }}>
                    <Save className="h-4 w-4" /> {editingId ? "Cập nhật" : "Đăng bài"}
                  </button>

                  {editingId && (
                    <button onClick={() => { setEditingId(null); setForm({ title: "", slug: "", excerpt: "", body: "", tags: "", authorName: "SCHub.vn", readTimeMinutes: 5, featured: false }); setShowPreview(false) }} className="w-full text-sm" style={{ color: "var(--color-text-muted)" }}>
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
                <span className="text-xs px-2" style={{ color: "var(--color-text-muted)" }}>Nội dung (Markdown)</span>
                <button onClick={() => setShowPreview(!showPreview)} className="flex items-center gap-1 px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-medium" style={{ background: showPreview ? "var(--color-primary)" : "var(--color-surface)", color: showPreview ? "#fff" : "var(--color-text)", border: "1px solid var(--color-border)" }}>
                  <Eye className="h-3 w-3" /> {showPreview ? "Soạn thảo" : "Xem trước"}
                </button>
              </div>

              {showPreview ? (
                <div className="p-6 rounded-[var(--radius-lg)]" style={{ background: "var(--color-surface-raised)", border: "1px solid var(--color-border)" }}>
                  <h1 className="font-[var(--font-display)] text-2xl font-bold mb-2" style={{ color: "var(--color-text)" }}>{form.title || "Tiêu đề bài viết"}</h1>
                  <p className="text-sm mb-4" style={{ color: "var(--color-text-muted)" }}>{form.authorName} · {form.readTimeMinutes} phút đọc</p>
                  {form.excerpt && (
                    <p className="text-base mb-6 p-4 rounded-[var(--radius-md)]" style={{ background: "var(--color-surface)", borderLeft: "3px solid var(--color-primary)", color: "var(--color-text-muted)" }}>
                      {form.excerpt}
                    </p>
                  )}
                  <div className="markdown-body" style={{ color: "var(--color-text)" }}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{form.body || "*Chưa có nội dung...*"}</ReactMarkdown>
                  </div>
                </div>
              ) : (
                <textarea value={form.body} onChange={e => setForm(prev => ({ ...prev, body: e.target.value }))} rows={24} className="w-full px-4 py-4 rounded-[var(--radius-lg)] text-sm font-mono resize-none" style={{ background: "var(--color-surface-raised)", border: "1px solid var(--color-border)", color: "var(--color-text)", lineHeight: 1.7 }} placeholder={`Viết nội dung bằng Markdown...

Tiêu đề ##
In đậm **text**
Danh sách - item
Link [text](url)

Dùng công cụ YouTube bên trái để chèn video`} />
              )}
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                {articles.length} bài viết đã đăng {articles.length > 0 && <>(cộng với {getAllArticles().length - articles.length} bài mặc định)</>}
              </p>
              <div className="flex gap-2">
                <button onClick={handleCopyCode} className="flex items-center gap-1 px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-medium" style={{ background: "var(--color-surface-raised)", border: "1px solid var(--color-border)", color: "var(--color-text)" }}>
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? "Đã copy" : "Xuất code"}
                </button>
                <button onClick={() => setTab("editor")} className="flex items-center gap-1 px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-medium text-white" style={{ background: "var(--color-primary)" }}>
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
                      <h3 className="font-medium text-sm truncate" style={{ color: "var(--color-text)" }}>{a.title}</h3>
                      <p className="text-xs mt-0.5 line-clamp-1" style={{ color: "var(--color-text-muted)" }}>{a.excerpt || "Không có mô tả"}</p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>{a.readTimeMinutes} phút</span>
                        {a.featured && <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: "var(--color-primary)", color: "#fff" }}>Featured</span>}
                        {a.tags.slice(0, 2).map(t => (
                          <span key={t} className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: "var(--color-surface)", color: "var(--color-text-muted)", border: "1px solid var(--color-border)" }}>{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-1 shrink-0">
                      <button onClick={() => handleEdit(a)} className="p-1.5 rounded-[var(--radius-sm)] text-xs" style={{ color: "var(--color-primary)" }}>Sửa</button>
                      <button onClick={() => handleDelete(a.id)} className="p-1.5 rounded-[var(--radius-sm)] text-xs" style={{ color: "var(--color-danger)" }}><Trash2 className="h-3.5 w-3.5" /></button>
                    </div>
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
