import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export type Lang = "en" | "vi"

/** The same text in every supported language */
export type Localized<T = string> = Record<Lang, T>

const STORAGE_KEY = "schub_lang"
export const DEFAULT_LANG: Lang = "en"

function isLang(value: unknown): value is Lang {
  return value === "en" || value === "vi"
}

// A ?lang=vi link (shared with Vietnamese readers) wins over the saved choice
function initialLang(): Lang {
  const fromUrl = new URLSearchParams(window.location.search).get("lang")
  if (isLang(fromUrl)) return fromUrl
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (isLang(saved)) return saved
  } catch {
    // storage unavailable (private mode), fall back to the default
  }
  return DEFAULT_LANG
}

const LanguageContext = createContext<{ lang: Lang; setLang: (lang: Lang) => void }>({
  lang: DEFAULT_LANG,
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // storage unavailable, the choice lasts for this visit only
    }
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang: setLangState }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
