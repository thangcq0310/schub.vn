import { useSearchParams } from "react-router-dom"
import Container from "../components/layout/Container"
import ArticleCard from "../components/cards/ArticleCard"
import { useArticles } from "../lib/useArticles"
import { useLang } from "../lib/i18n"

const ALL = "all"
const topics = [ALL, "Warehouse", "Inventory", "Cold Chain", "FEFO/FIFO", "WMS", "3PL", "S&OP", "Demand Planning", "Procurement", "Logistics Cost", "Digital SCM"]

const en = {
  all: "All",
  intro: "Practical articles on Planning, Inventory, Warehouse, 3PL, Master Data, KPIs and Logistics Cost: short, easy to follow and tied to real operating situations.",
  empty: "No articles in this topic yet.",
}

const vi: typeof en = {
  all: "Tất cả",
  intro: "Bài viết thực chiến về Planning, Inventory, Warehouse, 3PL, Master Data, KPI và Logistics Cost — viết ngắn, dễ hiểu và gắn với tình huống vận hành.",
  empty: "Chưa có bài viết nào cho nhóm nội dung này.",
}

const copy = { en, vi }

export function Articles() {
  const c = copy[useLang().lang]
  const { articles } = useArticles()
  const [searchParams, setSearchParams] = useSearchParams()
  const tagFromUrl = searchParams.get("tag")
  const selectedTag = tagFromUrl && topics.includes(tagFromUrl) ? tagFromUrl : ALL

  const filtered = articles.filter((article) => {
    if (selectedTag !== ALL && !article.tags.includes(selectedTag)) return false
    return true
  })

  const handleSelectTag = (topic: string) => {
    if (topic === ALL) {
      setSearchParams({})
      return
    }

    setSearchParams({ tag: topic })
  }

  return (
    <Container>
      <div className="py-16">
        <div className="mb-10 max-w-3xl">
          <h1 className="font-[var(--font-display)] text-4xl font-bold text-[var(--color-text)]">Blog</h1>
          <p className="mt-4 text-lg text-[var(--color-text-muted)]">{c.intro}</p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {topics.map((topic) => (
            <button
              key={topic}
              type="button"
              onClick={() => handleSelectTag(topic)}
              className={
                selectedTag === topic
                  ? "rounded-full border border-[var(--color-primary)] bg-[var(--color-primary)] px-3 py-1.5 text-sm font-medium text-white"
                  : "rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-1.5 text-sm font-medium text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              }
            >
              {topic === ALL ? c.all : topic}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="surface-panel rounded-[var(--radius-xl)] px-6 py-12 text-center text-[var(--color-text-muted)]">
            {c.empty}
          </div>
        )}
      </div>
    </Container>
  )
}