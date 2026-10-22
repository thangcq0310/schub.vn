import { useEffect, useMemo, useState } from "react"
import { bundledArticles, getAllArticles, localizeArticle, type LocalizedArticle } from "./articles"
import { isDemoMode } from "./firebase"
import { useLang } from "./i18n"

/**
 * Renders the bundled articles right away, then adds the ones published from the admin page.
 * Each article comes back in the visitor's language when a translation exists.
 */
export function useArticles(): { articles: LocalizedArticle[]; loading: boolean } {
  const { lang } = useLang()
  const [state, setState] = useState({ articles: bundledArticles, loading: !isDemoMode })

  useEffect(() => {
    let active = true
    getAllArticles().then((articles) => {
      if (active) setState({ articles, loading: false })
    })
    return () => {
      active = false
    }
  }, [])

  const articles = useMemo(() => state.articles.map((a) => localizeArticle(a, lang)), [state.articles, lang])

  return { articles, loading: state.loading }
}
