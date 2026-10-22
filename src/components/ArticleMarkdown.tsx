import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { VideoEmbed } from "./VideoEmbed"

// Videos are written as Markdown images: ![title](https://www.youtube.com/watch?v=...)
export function ArticleMarkdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        img: ({ src, alt }) => {
          if (!src) return null
          if (src.startsWith("video:") || /\.(mp4|webm|ogg)$/i.test(src)) {
            const videoSrc = src.startsWith("video:") ? src.slice(6) : src
            return <VideoEmbed src={videoSrc} title={alt} />
          }
          if (/(youtube\.com|youtu\.be|vimeo\.com)/i.test(src)) {
            return <VideoEmbed src={src} title={alt} />
          }
          return <img src={src} alt={alt ?? ""} className="max-w-full rounded-[var(--radius-md)]" />
        },
      }}
    >{children}</ReactMarkdown>
  )
}
