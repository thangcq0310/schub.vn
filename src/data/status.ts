import type { Localized } from "@/lib/i18n"

export type ContentStatus = "available" | "free" | "in-progress" | "coming-soon"

export const statusLabels: Record<ContentStatus, Localized> = {
  available: { en: "Available", vi: "Có bài" },
  free: { en: "Free", vi: "Miễn phí" },
  "in-progress": { en: "In progress", vi: "Đang phát triển" },
  "coming-soon": { en: "Coming soon", vi: "Sắp ra mắt" },
}
