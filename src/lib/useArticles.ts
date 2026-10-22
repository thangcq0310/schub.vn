import { useEffect, useState } from "react"
import { bundledArticles, getAllArticles, type Article } from "./articles"
import { isDemoMode } from "./firebase"

/** Renders the bundled articles right away, then adds the ones published from the admin page */
export function useArticles(): { articles: Article[]; loading: boolean } {
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

  return state
}
