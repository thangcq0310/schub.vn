import { useId } from "react"

interface VideoEmbedProps {
  src: string
  title?: string
}

export function VideoEmbed({ src, title }: VideoEmbedProps) {
  const id = useId()

  const youtubeMatch = src.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/
  )
  const vimeoMatch = src.match(/vimeo\.com\/(\d+)/)

  if (youtubeMatch) {
    return (
      <div className="relative my-6 aspect-video overflow-hidden rounded-[var(--radius-md)]">
        <iframe
          title={title ?? `YouTube video ${id}`}
          src={`https://www.youtube.com/embed/${youtubeMatch[1]}`}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  if (vimeoMatch) {
    return (
      <div className="relative my-6 aspect-video overflow-hidden rounded-[var(--radius-md)]">
        <iframe
          title={title ?? `Vimeo video ${id}`}
          src={`https://player.vimeo.com/video/${vimeoMatch[1]}`}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className="my-6">
      <video controls className="w-full rounded-[var(--radius-md)]" aria-label={title}>
        <source src={src} />
      </video>
    </div>
  )
}
