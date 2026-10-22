import type { Localized } from "@/lib/i18n"

export interface SolutionCategory {
  title: string
  slug: string
  description: Localized
  href: string
}

export interface SolutionItem {
  title: Localized
  slug: string
  category: string
  description: Localized
  tags: string[]
  href: string
}

export const categories: SolutionCategory[] = [
  {
    title: "Resources",
    slug: "resources",
    description: {
      en: "Free checklists, assessments, sample templates and guides to get started quickly.",
      vi: "Checklist, assessment, sample template và tài liệu miễn phí để bắt đầu nhanh.",
    },
    href: "/solutions/resources",
  },
  {
    title: "Digital Products",
    slug: "products",
    description: {
      en: "Templates, eBooks, playbooks, SOP packs and starter dashboards for real rollouts.",
      vi: "Template, eBook, playbook, SOP pack và dashboard starter phục vụ triển khai thực tế.",
    },
    href: "/solutions/products",
  },
  {
    title: "Tools",
    slug: "tools",
    description: {
      en: "Calculators, analyzers and mini tools for quick analysis of supply chain problems.",
      vi: "Calculator, analyzer và mini tool hỗ trợ phân tích nhanh các bài toán Supply Chain.",
    },
    href: "/solutions/tools",
  },
  {
    title: "Services",
    slug: "services",
    description: {
      en: "Consulting, dashboards, process/KPI standardization and internal tool builds.",
      vi: "Tư vấn, dashboard, chuẩn hóa process/KPI và triển khai internal tool.",
    },
    href: "/solutions/services",
  },
]

export const solutions: SolutionItem[] = [
  {
    title: {
      en: "Warehouse location management without a full WMS",
      vi: "Warehouse Location Management khi chưa có WMS đầy đủ",
    },
    slug: "kho-vi-tri-kho",
    category: "Digital Products",
    description: {
      en: "A solution framework to manage pallets, batches, SKUs and locations while the business does not yet have a complete WMS.",
      vi: "Khung solution giúp quản lý pallet, batch, SKU và location trong giai đoạn doanh nghiệp chưa có WMS hoàn chỉnh.",
    },
    tags: ["Warehouse", "Location", "Pallet", "Batch"],
    href: "/solutions/products",
  },
  {
    title: { en: "Logistics Cost Dashboard", vi: "Logistics Cost Dashboard" },
    slug: "dashboard-chi-phi-logistics",
    category: "Tools",
    description: {
      en: "Track logistics cost by ton, plant, vendor, route and shipment type.",
      vi: "Theo dõi Logistics Cost theo tấn, plant, vendor, route và shipment type.",
    },
    tags: ["Logistics Cost", "Dashboard", "Vendor"],
    href: "/solutions/tools",
  },
  {
    title: { en: "SOP Builder Framework", vi: "SOP Builder Framework" },
    slug: "sop-van-hanh",
    category: "Resources",
    description: {
      en: "A framework to build operating SOPs by process, owner, control point and escalation flow.",
      vi: "Bộ khung xây SOP vận hành theo process, owner, control point và escalation flow.",
    },
    tags: ["SOP", "Process", "Governance", "RACI"],
    href: "/solutions/resources",
  },
  {
    title: { en: "Internal Inventory Assistant", vi: "Internal Inventory Assistant" },
    slug: "tro-ly-truy-van-ton-kho",
    category: "Services",
    description: {
      en: "An internal assistant to query inventory, batches and locations and flag unusual stock levels.",
      vi: "Trợ lý nội bộ hỗ trợ truy vấn inventory, batch, location và cảnh báo tồn bất thường.",
    },
    tags: ["Inventory", "Internal Tool", "Dashboard"],
    href: "/solutions/services",
  },
  {
    title: { en: "SAP EWM Readiness Checklist", vi: "SAP EWM Readiness Checklist" },
    slug: "ewm-readiness-checklist",
    category: "Resources",
    description: {
      en: "A checklist to assess process, master data, warehouse layout and user role readiness before an SAP EWM rollout.",
      vi: "Checklist đánh giá readiness về process, master data, warehouse layout và user roles trước khi triển khai SAP EWM.",
    },
    tags: ["SAP", "EWM", "Warehouse", "Master Data"],
    href: "/solutions/resources",
  },
]

export const useCases: Localized[] = [
  {
    en: "Control inventory and locations without a full WMS",
    vi: "Kiểm soát inventory và location khi chưa có WMS đầy đủ",
  },
  {
    en: "Track logistics cost by plant, route, vendor and shipment type",
    vi: "Theo dõi Logistics Cost theo plant, route, vendor và shipment type",
  },
  {
    en: "Standardize SOPs, RACI and operating checklists",
    vi: "Chuẩn hóa SOP, RACI và checklist vận hành",
  },
  {
    en: "Build dashboards for management reviews",
    vi: "Xây dashboard phục vụ management review",
  },
  {
    en: "Assess readiness before an ERP/WMS/SAP rollout",
    vi: "Đánh giá readiness trước khi triển khai ERP/WMS/SAP",
  },
  {
    en: "Design internal tools that fit how you really operate",
    vi: "Thiết kế internal tool phù hợp với quy trình thực tế",
  },
]
