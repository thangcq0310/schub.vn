import { seedArticles } from "./seedData"

export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  body: string
  type: "article"
  tags: string[]
  authorName: string
  readTimeMinutes: number
  featured: boolean
  publishedAt: { seconds: number; nanoseconds: number }
}

const STORAGE_KEY = "schub_user_articles"

function loadUserArticles(): Article[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveUserArticles(articles: Article[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles))
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/đ/g, "d")
    .replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, "a")
    .replace(/[èéẹẻẽêềếệểễ]/g, "e")
    .replace(/[ìíịỉĩ]/g, "i")
    .replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, "o")
    .replace(/[ùúụủũưừứựửữ]/g, "u")
    .replace(/[ỳýỵỷỹ]/g, "y")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
}

export function getAllArticles(): Article[] {
  const userArticles = loadUserArticles()
  const merged = [...seedArticles, ...userArticles]
  return merged.sort((a, b) => b.publishedAt.seconds - a.publishedAt.seconds)
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((a) => a.slug === slug)
}

export function saveArticle(article: Article): void {
  const articles = loadUserArticles()
  const idx = articles.findIndex((a) => a.id === article.id)
  if (idx >= 0) {
    articles[idx] = article
  } else {
    articles.push(article)
  }
  saveUserArticles(articles)
}

export function deleteArticle(id: string): void {
  const articles = loadUserArticles().filter((a) => a.id !== id)
  saveUserArticles(articles)
}

export function getPublishedArticles(): Article[] {
  return loadUserArticles()
}
