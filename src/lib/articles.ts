import { db, isDemoMode } from "./firebase"
import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
  Timestamp,
} from "firebase/firestore"
import { seedArticles } from "@/data/seedData"

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
}

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
  }
}

const COLLECTION = "articles"

// Seed data stores publishedAt as { seconds }, this module works in milliseconds
const seeds: Article[] = seedArticles.map((a) => ({ ...a, publishedAt: a.publishedAt.seconds * 1000 }))

export async function getAllArticles(): Promise<Article[]> {
  if (isDemoMode) return seeds
  try {
    const q = query(collection(db, COLLECTION), orderBy("publishedAt", "desc"))
    const snapshot = await getDocs(q)
    if (snapshot.empty) return seeds
    return snapshot.docs.map((d) => toArticle(d.id, d.data() as Record<string, unknown>))
  } catch {
    return seeds
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  if (isDemoMode) return seeds.find((a) => a.slug === slug) ?? null
  try {
    const q = query(collection(db, COLLECTION), where("slug", "==", slug))
    const snapshot = await getDocs(q)
    if (!snapshot.empty) {
      return toArticle(snapshot.docs[0].id, snapshot.docs[0].data() as Record<string, unknown>)
    }
    return seeds.find((a) => a.slug === slug) ?? null
  } catch {
    return seeds.find((a) => a.slug === slug) ?? null
  }
}

export async function createArticle(data: Article): Promise<string | null> {
  if (isDemoMode) {
    console.warn("Cannot create articles in demo mode. Set up Firebase credentials in .env")
    return null
  }
  try {
    const rest = data
    const docRef = await addDoc(collection(db, COLLECTION), {
      ...rest,
      publishedAt: Timestamp.fromMillis(rest.publishedAt),
    })
    return docRef.id
  } catch {
    return null
  }
}

export async function updateArticle(id: string, data: Partial<Article>): Promise<boolean> {
  if (isDemoMode) {
    console.warn("Cannot update articles in demo mode. Set up Firebase credentials in .env")
    return false
  }
  try {
    const updates: Record<string, unknown> = { ...data }
    delete updates.id
    if (data.publishedAt) {
      updates.publishedAt = Timestamp.fromMillis(data.publishedAt)
    }
    await updateDoc(doc(db, COLLECTION, id), updates)
    return true
  } catch {
    return false
  }
}

export async function deleteArticle(id: string): Promise<boolean> {
  if (isDemoMode) {
    console.warn("Cannot delete articles in demo mode. Set up Firebase credentials in .env")
    return false
  }
  try {
    await deleteDoc(doc(db, COLLECTION, id))
    return true
  } catch {
    return false
  }
}
