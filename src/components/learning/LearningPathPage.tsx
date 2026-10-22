import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import Container from "@/components/layout/Container"
import { StatusBadge } from "@/components/StatusBadge"
import { seedBooks, seedTools } from "@/data/seedData"
import type { LearningLesson, LearningPath } from "@/data/learningPaths"
import { useLang } from "@/lib/i18n"
import { useArticles } from "@/lib/useArticles"

interface LearningPathPageProps {
  path: LearningPath
}

const en = {
  readArticle: "Read the article",
  relatedProduct: "Related digital product",
  relatedTool: "Related tool",
  inProgress: "In progress",
  inPreparation: "In preparation",
  ctaResource: "Get resources when ready",
  lessonsTitle: "Lessons in this learning path",
  lessonsIntro: "Each lesson focuses on one concept or operating situation, with related blog posts, tools or digital products where available.",
  resourcesTitle: "Companion resources",
  relatedBlog: "Related blog posts",
  relatedProducts: "Related digital products",
  relatedTools: "Related tools",
  blogPlaceholder: ["Blog posts in preparation", "SCHub will add practical articles on this topic as the Learning Hub grows."],
  productPlaceholder: ["Digital product in preparation", "When a fitting template or playbook is ready, SCHub will attach it to this learning path."],
  toolPlaceholder: ["Tool in development", "SCHub will add a calculator or assessment for this topic as the tool set matures."],
  applyTitle: "Want to go from learning to doing?",
  applyBody: "Start with the 50-point checklist to find your current bottlenecks, then pick the learning path and resources that fit.",
  applyButton: "Take the 50-point checklist",
}

const vi: typeof en = {
  readArticle: "Đọc bài viết",
  relatedProduct: "Digital Product liên quan",
  relatedTool: "Tool liên quan",
  inProgress: "Đang phát triển",
  inPreparation: "Đang biên soạn",
  ctaResource: "Nhận resource khi hoàn thiện",
  lessonsTitle: "Bài học trong Learning Path",
  lessonsIntro: "Mỗi bài học tập trung vào một concept hoặc tình huống vận hành, kèm Blog, tool hoặc digital product liên quan nếu đã có.",
  resourcesTitle: "Resources đi kèm",
  relatedBlog: "Blog liên quan",
  relatedProducts: "Digital Product liên quan",
  relatedTools: "Tool liên quan",
  blogPlaceholder: ["Blog đang được biên soạn", "SCHub sẽ bổ sung bài viết thực chiến cho chủ đề này khi Learning Hub hoàn thiện hơn."],
  productPlaceholder: ["Digital Product đang được chuẩn bị", "Khi có template hoặc playbook phù hợp, SCHub sẽ gắn vào Learning Path này."],
  toolPlaceholder: ["Tool đang được phát triển", "SCHub sẽ bổ sung calculator hoặc assessment phù hợp khi nhóm tool sẵn sàng hơn."],
  applyTitle: "Muốn đi từ học đến áp dụng?",
  applyBody: "Bắt đầu với checklist 50 điểm để xác định điểm nghẽn hiện tại, sau đó chọn Learning Path và resource phù hợp.",
  applyButton: "Làm checklist 50 điểm",
}

const copy = { en, vi }

function LessonActions({ lesson }: { lesson: LearningLesson }) {
  const c = copy[useLang().lang]
  const tool = lesson.toolSlug ? seedTools.find((item) => item.slug === lesson.toolSlug) : null

  return (
    <div className="mt-4 flex flex-col gap-2 text-sm">
      {lesson.articleSlug ? (
        <Link to={`/blog/${lesson.articleSlug}`} className="font-medium text-[var(--color-primary)] hover:underline">
          {c.readArticle}
        </Link>
      ) : null}
      {lesson.productSlug ? (
        <Link to={`/solutions/products/${lesson.productSlug}`} className="font-medium text-[var(--color-primary)] hover:underline">
          {c.relatedProduct}
        </Link>
      ) : null}
      {lesson.toolSlug ? (
        tool ? (
          <Link to="/solutions/tools" className="font-medium text-[var(--color-primary)] hover:underline">
            {c.relatedTool}: {tool.name}
          </Link>
        ) : (
          <span className="text-[var(--color-text-muted)]">{c.relatedTool}</span>
        )
      ) : null}
      {!lesson.articleSlug && !lesson.productSlug && !lesson.toolSlug ? (
        <span className="text-[var(--color-text-muted)]">{c.inProgress}</span>
      ) : null}
    </div>
  )
}

export function LearningPathPage({ path }: LearningPathPageProps) {
  const { lang } = useLang()
  const c = copy[lang]
  const { articles } = useArticles()
  const relatedArticles = articles.filter((article) =>
    article.tags.some((tag) => path.relatedTags.includes(tag)),
  ).slice(0, 3)

  const relatedProducts = seedBooks.filter((product) => path.relatedProducts.includes(product.slug))
  const relatedTools = seedTools.filter((tool) => path.relatedTools.includes(tool.slug))

  const placeholderCard = ([title, body]: string[]): ReactNode => (
    <div className="surface-panel rounded-[var(--radius-xl)] p-5">
      <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">{c.inPreparation}</p>
      <h4 className="mt-3 font-[var(--font-display)] text-xl text-[var(--color-text)]">{title}</h4>
      <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">{body}</p>
    </div>
  )

  return (
    <Container>
      <div className="py-16">
        <div className="mb-6 text-sm text-[var(--color-text-muted)]">
          <Link to="/learning" className="hover:text-[var(--color-primary)]">Learning Hub</Link>
          <span className="mx-2">/</span>
          <span>{path.heading[lang]}</span>
        </div>

        <section className="surface-panel rounded-[var(--radius-xl)] p-8 lg:p-10">
          <div className="flex flex-wrap gap-2">
            <StatusBadge status={path.status} />
            <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)]">
              Learning Path
            </span>
          </div>
          <p className="mt-5 font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            SCHUB.VN LEARNING HUB
          </p>
          <h1 className="mt-4 font-[var(--font-display)] text-4xl font-bold text-[var(--color-text)]">
            {path.heading[lang]}
          </h1>
          {path.heading[lang] !== path.title && (
            <p className="mt-2 text-lg text-[var(--color-text-muted)]">{path.title}</p>
          )}
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--color-text-muted)]">
            {path.description[lang]}
          </p>
          <Link
            to="/solutions/checklist"
            className="focus-ring mt-8 inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-colors hover:brightness-110"
          >
            {c.ctaResource}
          </Link>
        </section>

        <section className="mt-10">
          <div className="mb-8 max-w-3xl">
            <h2 className="font-[var(--font-display)] text-3xl text-[var(--color-text)]">{c.lessonsTitle}</h2>
            <p className="mt-3 text-[var(--color-text-muted)]">{c.lessonsIntro}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {path.lessons.map((lesson) => (
              <div key={lesson.slug} className="surface-panel card-hover rounded-[var(--radius-xl)] p-5">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">Preview</p>
                  <StatusBadge status={lesson.status} />
                </div>
                <h3 className="mt-3 font-[var(--font-display)] text-xl text-[var(--color-text)]">{lesson.title[lang]}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">{lesson.description[lang]}</p>
                <LessonActions lesson={lesson} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-text)] mb-6">{c.resourcesTitle}</h2>
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <h3 className="font-[var(--font-display)] text-xl text-[var(--color-text)] mb-4">{c.relatedBlog}</h3>
              <div className="space-y-4">
                {relatedArticles.length > 0
                  ? relatedArticles.map((article) => (
                      <Link key={article.slug} to={`/blog/${article.slug}`} className="surface-panel card-hover block rounded-[var(--radius-xl)] p-5">
                        <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">Blog</p>
                        <h4 className="mt-3 font-[var(--font-display)] text-lg text-[var(--color-text)]">{article.title}</h4>
                        <p className="mt-2 text-sm text-[var(--color-text-muted)]">{article.excerpt}</p>
                      </Link>
                    ))
                  : placeholderCard(c.blogPlaceholder)}
              </div>
            </div>

            <div>
              <h3 className="font-[var(--font-display)] text-xl text-[var(--color-text)] mb-4">{c.relatedProducts}</h3>
              <div className="space-y-4">
                {relatedProducts.length > 0
                  ? relatedProducts.map((product) => (
                      <Link key={product.slug} to={`/solutions/products/${product.slug}`} className="surface-panel card-hover block rounded-[var(--radius-xl)] p-5">
                        <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">Digital Product</p>
                        <h4 className="mt-3 font-[var(--font-display)] text-lg text-[var(--color-text)]">{product.title[lang]}</h4>
                        <p className="mt-2 text-sm text-[var(--color-text-muted)]">{product.description[lang]}</p>
                      </Link>
                    ))
                  : placeholderCard(c.productPlaceholder)}
              </div>
            </div>

            <div>
              <h3 className="font-[var(--font-display)] text-xl text-[var(--color-text)] mb-4">{c.relatedTools}</h3>
              <div className="space-y-4">
                {relatedTools.length > 0
                  ? relatedTools.map((tool) => (
                      <div key={tool.slug} className="surface-panel card-hover rounded-[var(--radius-xl)] p-5">
                        <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">Tool</p>
                        <h4 className="mt-3 font-[var(--font-display)] text-lg text-[var(--color-text)]">{tool.name}</h4>
                        <p className="mt-2 text-sm text-[var(--color-text-muted)]">{tool.description[lang]}</p>
                      </div>
                    ))
                  : placeholderCard(c.toolPlaceholder)}
              </div>
            </div>
          </div>
        </section>

        <section className="surface-panel mt-12 rounded-[var(--radius-xl)] p-8 text-center">
          <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">{c.applyTitle}</h2>
          <p className="mx-auto mt-3 max-w-xl text-[var(--color-text-muted)]">{c.applyBody}</p>
          <Link
            to="/solutions/checklist"
            className="focus-ring mt-6 inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-secondary)] px-6 py-3 font-medium text-white transition-colors hover:brightness-105"
          >
            {c.applyButton}
          </Link>
        </section>
      </div>
    </Container>
  )
}
