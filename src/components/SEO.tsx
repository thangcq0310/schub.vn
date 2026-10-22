import { Helmet } from "react-helmet-async"
import { useLang } from "@/lib/i18n"

const defaults = {
  en: {
    title: "SCHub.vn — Practical Supply Chain Knowledge Hub",
    description: "Practical supply chain knowledge, Excel templates, eBooks and consulting services for businesses in Vietnam.",
  },
  vi: {
    title: "SCHub.vn — Kiến thức Supply Chain cho người Việt",
    description: "Chia sẻ kiến thức Supply Chain thực chiến, template Excel, eBook, và dịch vụ tư vấn cho doanh nghiệp Việt Nam.",
  },
}

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: "website" | "article"
}

export function SEO({
  title,
  description,
  image = "/og-image.png",
  url = "https://schub.vn",
  type = "website",
}: SEOProps) {
  const { lang } = useLang()
  title ??= defaults[lang].title
  description ??= defaults[lang].description
  const siteName = "SCHub.vn"

  return (
    <Helmet>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  )
}