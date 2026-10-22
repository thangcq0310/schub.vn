import { db, isDemoMode } from "./firebase"
import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  deleteField,
  Timestamp,
} from "firebase/firestore/lite"
import { seedArticles } from "@/data/seedData"
import { seedArticlesEn } from "@/data/seedArticlesEn"
import type { Lang } from "./i18n"

export interface ArticleTranslation {
  title: string
  excerpt: string
  body: string
}

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
  publishedAt: number
  /** English version; the base fields above are the Vietnamese original */
  en?: ArticleTranslation
}

/** An article with its text in the visitor's language, when a translation exists */
export type LocalizedArticle = Article & { contentLang: Lang }

export function localizeArticle(article: Article, lang: Lang): LocalizedArticle {
  if (lang === "en" && article.en) return { ...article, ...article.en, contentLang: "en" }
  return { ...article, contentLang: "vi" }
}

function toTranslation(raw: unknown): ArticleTranslation | undefined {
  if (!raw || typeof raw !== "object") return undefined
  const { title, excerpt, body } = raw as Record<string, unknown>
  if (typeof title !== "string" || typeof body !== "string" || !title || !body) return undefined
  return { title, excerpt: typeof excerpt === "string" ? excerpt : "", body }
}

/** Fields the admin page writes to Firestore */
export type ArticleInput = Omit<Article, "id" | "type">

function toArticle(id: string, data: Record<string, unknown>): Article {
  const raw = data.publishedAt
  let publishedAt = Date.now()
  if (raw instanceof Timestamp) publishedAt = raw.toMillis()
  else if (raw && typeof raw === "object" && "seconds" in raw)
    publishedAt = (raw as { seconds: number }).seconds * 1000

  return {
    id,
    title: (data.title as string) ?? "",
    slug: (data.slug as string) ?? "",
    excerpt: (data.excerpt as string) ?? "",
    body: (data.body as string) ?? "",
    type: "article",
    tags: (data.tags as string[]) ?? [],
    authorName: (data.authorName as string) ?? "SCHub.vn",
    readTimeMinutes: (data.readTimeMinutes as number) ?? 5,
    featured: (data.featured as boolean) ?? false,
    publishedAt,
    en: toTranslation(data.en),
  }
}

const COLLECTION = "articles"

const byNewest = (a: Article, b: Article) => b.publishedAt - a.publishedAt

// Seed data stores publishedAt as { seconds }, this module works in milliseconds
/** Articles shipped in the code, available before Firestore answers */
export const bundledArticles: Article[] = seedArticles
  .map((a) => ({ ...a, publishedAt: a.publishedAt.seconds * 1000, en: seedArticlesEn[a.id] }))
  .sort(byNewest)

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

/** Articles published from the admin page. Throws when Firestore is unreachable or denies access. */
export async function getRemoteArticles(): Promise<Article[]> {
  const snapshot = await getDocs(collection(db, COLLECTION))
  return snapshot.docs.map((d) => toArticle(d.id, d.data())).sort(byNewest)
}

// One Firestore read per visit; admin writes reset it
let allArticles: Promise<Article[]> | null = null

/** Bundled articles plus the ones published from the admin page, newest first */
export function getAllArticles(): Promise<Article[]> {
  if (isDemoMode) return Promise.resolve(bundledArticles)
  allArticles ??= getRemoteArticles()
    .then((remote) => {
      const remoteSlugs = new Set(remote.map((a) => a.slug))
      return [...remote, ...bundledArticles.filter((a) => !remoteSlugs.has(a.slug))].sort(byNewest)
    })
    .catch((err) => {
      console.error("Could not load articles from Firestore", err)
      allArticles = null
      return bundledArticles
    })
  return allArticles
}

function toFirestore(data: Omit<ArticleInput, "en">) {
  return { ...data, publishedAt: Timestamp.fromMillis(data.publishedAt) }
}

export async function createArticle({ en, ...data }: ArticleInput): Promise<string> {
  const docRef = await addDoc(collection(db, COLLECTION), { ...toFirestore(data), ...(en && { en }) })
  allArticles = null
  return docRef.id
}

export async function updateArticle(id: string, { en, ...data }: ArticleInput): Promise<void> {
  // Clearing the English fields in the editor removes the translation
  await updateDoc(doc(db, COLLECTION, id), { ...toFirestore(data), en: en ?? deleteField() })
  allArticles = null
}

export async function deleteArticle(id: string): Promise<void> {
  await deleteDoc(doc(db, COLLECTION, id))
  allArticles = null
}
