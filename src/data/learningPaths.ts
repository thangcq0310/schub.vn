import type { Localized } from "@/lib/i18n"
import type { ContentStatus } from "./status"

export interface LearningLesson {
  title: Localized
  slug: string
  status: ContentStatus
  description: Localized
  articleSlug?: string
  productSlug?: string
  toolSlug?: string
}

export interface LearningPath {
  slug: string
  /** Short English name, shown under the heading in Vietnamese */
  title: string
  heading: Localized
  status: ContentStatus
  description: Localized
  lessons: LearningLesson[]
  relatedTags: string[]
  relatedProducts: string[]
  relatedTools: string[]
}

export const learningPaths: LearningPath[] = [
  {
    slug: "supply-chain-foundation",
    title: "Supply Chain Foundation",
    heading: { en: "Supply Chain Foundation", vi: "Nền tảng Supply Chain" },
    status: "in-progress",
    description: {
      en: "Understand supply chains through models, entities, flows, integration and maturity.",
      vi: "Hiểu supply chain qua mô hình, entities, flows, integration và maturity.",
    },
    lessons: [
      {
        title: { en: "What is a supply chain?", vi: "Supply Chain là gì?" },
        slug: "supply-chain-la-gi",
        status: "available",
        description: {
          en: "A supply chain is an end-to-end coordination system, not just shipping or warehousing.",
          vi: "Làm rõ supply chain là hệ thống phối hợp đầu-cuối chứ không chỉ là giao nhận hay lưu kho.",
        },
        articleSlug: "supply-chain-la-gi-khac-logistics-nhu-the-nao",
        toolSlug: "supply-chain-maturity-assessment",
      },
      {
        title: { en: "The 4 flows of a supply chain", vi: "4 dòng chảy trong Supply Chain" },
        slug: "4-dong-chay-trong-supply-chain",
        status: "in-progress",
        description: {
          en: "Separate the flows of goods, information, money and decisions to see operational problems clearly.",
          vi: "Phân biệt dòng vật chất, thông tin, tiền và quyết định để nhìn đúng vấn đề vận hành.",
        },
      },
      {
        title: { en: "Supplier – Producer – Customer", vi: "Supplier – Producer – Customer" },
        slug: "supplier-producer-customer",
        status: "in-progress",
        description: {
          en: "Define the role of each link and how each party affects lead time, cost and service level.",
          vi: "Xác định vai trò từng mắt xích và cách mỗi bên ảnh hưởng đến lead time, cost và service level.",
        },
      },
      {
        title: { en: "Vertical vs Horizontal Integration", vi: "Vertical vs Horizontal Integration" },
        slug: "vertical-vs-horizontal-integration",
        status: "coming-soon",
        description: {
          en: "Compare supply chain integration strategies so a business can pick a model that fits its current capabilities.",
          vi: "So sánh các hướng tích hợp chuỗi cung ứng để doanh nghiệp chọn mô hình phù hợp với năng lực hiện tại.",
        },
      },
      {
        title: { en: "5 levels of supply chain maturity", vi: "5 mức độ trưởng thành Supply Chain" },
        slug: "5-muc-do-truong-thanh-supply-chain",
        status: "in-progress",
        description: {
          en: "Use a maturity model to define the current state, capability gaps and improvement priorities.",
          vi: "Dùng maturity model để xác định current state, khoảng cách năng lực và thứ tự ưu tiên cải thiện.",
        },
        productSlug: "master-data-audit-checklist",
        toolSlug: "supply-chain-maturity-assessment",
      },
    ],
    relatedTags: ["SCM", "Governance", "Master Data"],
    relatedProducts: ["master-data-audit-checklist"],
    relatedTools: ["supply-chain-maturity-assessment"],
  },
  {
    slug: "demand-analysis",
    title: "Demand Analysis",
    heading: { en: "Demand Analysis", vi: "Phân tích nhu cầu" },
    status: "in-progress",
    description: {
      en: "Analyze the market, SWOT, product portfolio and demand patterns before forecasting.",
      vi: "Phân tích thị trường, SWOT, product assessment và demand patterns trước khi forecast.",
    },
    lessons: [
      {
        title: { en: "What is demand analysis?", vi: "Demand Analysis là gì?" },
        slug: "demand-analysis-la-gi",
        status: "in-progress",
        description: {
          en: "Demand analysis means understanding the nature of demand before calculating a forecast or a purchase plan.",
          vi: "Xác định demand analysis là bước hiểu bản chất nhu cầu trước khi tính forecast hoặc lên purchase plan.",
        },
      },
      {
        title: { en: "SWOT in the supply chain", vi: "SWOT trong Supply Chain" },
        slug: "swot-trong-supply-chain",
        status: "coming-soon",
        description: {
          en: "Use SWOT to weigh market pressure and internal capability before inventory or supply decisions.",
          vi: "Dùng SWOT để nhìn cả áp lực thị trường và năng lực nội bộ trước khi ra quyết định tồn kho hoặc cung ứng.",
        },
      },
      {
        title: { en: "Market research for supply chain", vi: "Market Research cho Supply Chain" },
        slug: "market-research-cho-supply-chain",
        status: "in-progress",
        description: {
          en: "Read market signals so forecasts are not based on gut feeling or the latest orders.",
          vi: "Biết cách đọc tín hiệu thị trường để tránh forecast chỉ dựa trên cảm giác hoặc đơn hàng gần nhất.",
        },
        productSlug: "demand-plan-template",
      },
      {
        title: { en: "Product portfolio assessment", vi: "Product Portfolio Assessment" },
        slug: "product-portfolio-assessment",
        status: "in-progress",
        description: {
          en: "Prioritize the product portfolio by revenue role, margin and cost to serve.",
          vi: "Ưu tiên danh mục sản phẩm theo vai trò doanh thu, biên lợi nhuận và độ khó phục vụ.",
        },
      },
      {
        title: { en: "Trend, Seasonality, Cycle, Random Variation", vi: "Trend, Seasonality, Cycle, Random Variation" },
        slug: "trend-seasonality-cycle-random-variation",
        status: "available",
        description: {
          en: "Tell demand variation patterns apart to choose how to read the data and how planning should respond.",
          vi: "Phân biệt các dạng biến động nhu cầu để chọn cách đọc dữ liệu và phản ứng planning phù hợp.",
        },
        articleSlug: "trend-seasonality-cycle-random-variation",
        toolSlug: "demand-pattern-analyzer",
      },
    ],
    relatedTags: ["Demand Planning", "Forecasting"],
    relatedProducts: ["demand-plan-template"],
    relatedTools: ["demand-pattern-analyzer"],
  },
  {
    slug: "demand-management",
    title: "Demand Management",
    heading: { en: "Demand Management", vi: "Quản trị nhu cầu" },
    status: "in-progress",
    description: {
      en: "Plan, communicate, influence and prioritize demand to keep supply in sync with it.",
      vi: "Lập kế hoạch, truyền thông, tác động và ưu tiên nhu cầu để đồng bộ supply với demand.",
    },
    lessons: [
      {
        title: { en: "Demand management is more than a forecast", vi: "Demand Management không chỉ là Forecast" },
        slug: "demand-management-khong-chi-la-forecast",
        status: "available",
        description: {
          en: "See demand management as coordination between sales, planning and operations rather than a single forecast file.",
          vi: "Nhìn demand management như cơ chế phối hợp giữa sales, planning và vận hành thay vì một file forecast đơn lẻ.",
        },
        articleSlug: "demand-management-khong-phai-chi-la-forecast",
        productSlug: "demand-plan-template",
      },
      {
        title: { en: "The 4 components of demand management", vi: "4 thành phần Demand Management" },
        slug: "4-thanh-phan-demand-management",
        status: "in-progress",
        description: {
          en: "Separate sensing, planning, communication and adjustment so no responsibility falls between teams.",
          vi: "Tách rõ sensing, planning, communication và adjustment để tránh bỏ sót trách nhiệm giữa các nhóm.",
        },
      },
      {
        title: { en: "What should a demand plan include?", vi: "Demand Plan nên gồm gì?" },
        slug: "demand-plan-nen-gom-gi",
        status: "in-progress",
        description: {
          en: "Build a demand plan with history, assumptions, commercial adjustments and consensus instead of a single number.",
          vi: "Xây demand plan có lịch sử, giả định, điều chỉnh thương mại và consensus thay vì chỉ có một con số.",
        },
        productSlug: "demand-plan-template",
      },
      {
        title: { en: "Communicating demand", vi: "Communicating Demand" },
        slug: "communicating-demand",
        status: "coming-soon",
        description: {
          en: "Design how demand is communicated so sales, supply and finance share the same picture.",
          vi: "Thiết kế cách truyền thông nhu cầu để sales, supply và finance cùng hiểu một bức tranh.",
        },
      },
      {
        title: { en: "The demand manager role", vi: "Demand Manager role" },
        slug: "demand-manager-role",
        status: "coming-soon",
        description: {
          en: "Clarify the coordinating role of a demand manager in organizations without a mature planning structure.",
          vi: "Làm rõ vai trò điều phối demand manager trong tổ chức chưa có cấu trúc planning trưởng thành.",
        },
        toolSlug: "sop-readiness-check",
      },
    ],
    relatedTags: ["Demand Planning", "S&OP"],
    relatedProducts: ["demand-plan-template"],
    relatedTools: ["sop-readiness-check"],
  },
  {
    slug: "forecasting",
    title: "Forecasting",
    heading: { en: "Demand Forecasting", vi: "Dự báo nhu cầu" },
    status: "in-progress",
    description: {
      en: "Understand forecasting principles, moving averages, exponential smoothing, seasonality and forecast error.",
      vi: "Hiểu forecasting principles, moving average, exponential smoothing, seasonality và forecast error.",
    },
    lessons: [
      {
        title: { en: "Forecasts are always wrong — so what are they for?", vi: "Forecast luôn sai — vậy dùng để làm gì?" },
        slug: "forecast-luon-sai-vay-dung-de-lam-gi",
        status: "available",
        description: {
          en: "Why forecasts matter in planning even though they are never exactly right.",
          vi: "Giải thích vai trò của forecast trong planning dù forecast không bao giờ đúng tuyệt đối.",
        },
        articleSlug: "forecast-luon-sai-vay-tai-sao-van-phai-forecast",
        productSlug: "forecasting-starter-template",
        toolSlug: "forecast-error-calculator",
      },
      {
        title: { en: "Forecast demand, not just orders", vi: "Forecast nên dựa trên demand, không chỉ order" },
        slug: "forecast-nen-dua-tren-demand-khong-chi-order",
        status: "coming-soon",
        description: {
          en: "Tell real demand apart from recorded orders to avoid skewed plans.",
          vi: "Phân biệt nhu cầu thực tế với đơn hàng ghi nhận để tránh sai lệch kế hoạch.",
        },
        productSlug: "demand-plan-template",
      },
      {
        title: { en: "Moving Average", vi: "Moving Average" },
        slug: "moving-average",
        status: "in-progress",
        description: {
          en: "When a moving average is good enough, and when it slows your response to market changes.",
          vi: "Hiểu khi nào moving average đủ tốt và khi nào nó làm chậm phản ứng với biến động thị trường.",
        },
        productSlug: "forecasting-starter-template",
      },
      {
        title: { en: "Weighted Moving Average", vi: "Weighted Moving Average" },
        slug: "weighted-moving-average",
        status: "in-progress",
        description: {
          en: "Weight recent data more heavily so the forecast reflects new signals without too much noise.",
          vi: "Áp trọng số cho dữ liệu gần hơn để forecast phản ánh tín hiệu mới mà không quá nhiễu.",
        },
        productSlug: "forecasting-starter-template",
      },
      {
        title: { en: "Exponential Smoothing", vi: "Exponential Smoothing" },
        slug: "exponential-smoothing",
        status: "in-progress",
        description: {
          en: "Use a smoothing factor to balance stability against responsiveness to change.",
          vi: "Dùng hệ số làm mượt để cân bằng giữa ổn định dữ liệu và khả năng phản ứng với thay đổi.",
        },
        productSlug: "forecasting-starter-template",
      },
      {
        title: { en: "Forecast Error", vi: "Forecast Error" },
        slug: "forecast-error",
        status: "in-progress",
        description: {
          en: "Read MAD, MAPE, bias and tracking signal to see how your forecast is wrong.",
          vi: "Đọc MAD, MAPE, bias và tracking signal để biết forecast đang sai theo kiểu nào.",
        },
        toolSlug: "forecast-error-calculator",
      },
    ],
    relatedTags: ["Forecasting", "Planning"],
    relatedProducts: ["forecasting-starter-template"],
    relatedTools: ["forecast-error-calculator"],
  },
  {
    slug: "sop",
    title: "S&OP",
    heading: { en: "Sales & Operations Planning", vi: "Sales & Operations Planning" },
    status: "in-progress",
    description: {
      en: "Align demand, supply and finance into one agreed plan.",
      vi: "Đồng bộ demand, supply và finance để tạo một kế hoạch thống nhất.",
    },
    lessons: [
      {
        title: { en: "What is S&OP?", vi: "S&OP là gì?" },
        slug: "sop-la-gi",
        status: "available",
        description: {
          en: "S&OP is a cross-functional decision process, not just a meeting that compiles numbers.",
          vi: "Hiểu S&OP là cơ chế ra quyết định liên phòng ban, không phải chỉ là cuộc họp tổng hợp số liệu.",
        },
        articleSlug: "sop-khong-phai-la-cuoc-hop-bao-cao",
        productSlug: "sop-calendar-meeting-pack",
      },
      {
        title: { en: "Demand Review", vi: "Demand Review" },
        slug: "demand-review",
        status: "in-progress",
        description: {
          en: "Design a demand review where sales and planning agree on assumptions, risks and major changes.",
          vi: "Thiết kế demand review để sales và planning cùng chốt giả định, rủi ro và thay đổi lớn.",
        },
        toolSlug: "sop-readiness-check",
      },
      {
        title: { en: "Supply Review", vi: "Supply Review" },
        slug: "supply-review",
        status: "in-progress",
        description: {
          en: "Bring capacity, material and logistics constraints to the same table.",
          vi: "Đưa constraint về capacity, nguyên vật liệu và logistics vào cùng một bàn thảo luận.",
        },
      },
      {
        title: { en: "Finance Review", vi: "Finance Review" },
        slug: "finance-review",
        status: "coming-soon",
        description: {
          en: "Link the volume plan to margin, cash flow and working capital to avoid one-sided plans.",
          vi: "Liên kết volume plan với margin, cash flow và working capital để tránh kế hoạch một chiều.",
        },
      },
      {
        title: { en: "Executive S&OP", vi: "Executive S&OP" },
        slug: "executive-sop",
        status: "coming-soon",
        description: {
          en: "Where leadership approves trade-offs and signs off a one-number plan for the whole business.",
          vi: "Xác định nơi ban điều hành phê duyệt trade-off và chốt one-number plan cho toàn doanh nghiệp.",
        },
      },
      {
        title: { en: "One-number plan", vi: "One-number plan" },
        slug: "one-number-plan",
        status: "in-progress",
        description: {
          en: "Turn forecast, supply and finance into one plan the whole organization follows.",
          vi: "Biến forecast, supply và tài chính thành một kế hoạch thống nhất để toàn tổ chức cùng bám theo.",
        },
        productSlug: "sop-calendar-meeting-pack",
      },
    ],
    relatedTags: ["S&OP", "Governance"],
    relatedProducts: ["sop-calendar-meeting-pack"],
    relatedTools: ["sop-readiness-check"],
  },
  {
    slug: "operations-planning-control",
    title: "Operations Planning & Control",
    heading: { en: "Operations Planning & Control", vi: "Hoạch định và kiểm soát vận hành" },
    status: "coming-soon",
    description: {
      en: "Connect forecasting, master planning, MRP, DRP and capacity planning.",
      vi: "Liên kết forecast, master planning, MRP, DRP và capacity planning.",
    },
    lessons: [
      {
        title: { en: "What is operations planning & control?", vi: "Operations Planning & Control là gì?" },
        slug: "operations-planning-control-la-gi",
        status: "in-progress",
        description: {
          en: "The big picture from market demand to production, supply and distribution orders.",
          vi: "Tạo bức tranh tổng thể từ nhu cầu thị trường đến lệnh sản xuất, cung ứng và phân phối.",
        },
      },
      {
        title: { en: "Master Planning", vi: "Master Planning" },
        slug: "master-planning",
        status: "in-progress",
        description: {
          en: "Master planning is the layer that turns the forecast into a controllable operating direction.",
          vi: "Hiểu master planning là lớp trung gian biến forecast thành định hướng vận hành có thể kiểm soát.",
        },
      },
      {
        title: { en: "Master Scheduling", vi: "Master Scheduling" },
        slug: "master-scheduling",
        status: "coming-soon",
        description: {
          en: "How the master production schedule balances output, inventory and service level.",
          vi: "Làm rõ vai trò lịch sản xuất chính trong việc cân bằng sản lượng, tồn kho và service level.",
        },
      },
      {
        title: { en: "MRP", vi: "MRP" },
        slug: "mrp",
        status: "in-progress",
        description: {
          en: "MRP turns the plan into time-phased material requirements based on the BOM.",
          vi: "Hiểu MRP như công cụ chuyển kế hoạch thành nhu cầu vật tư theo thời gian và cấu trúc BOM.",
        },
        articleSlug: "tu-forecast-den-mrp-luong-ke-hoach-san-xuat",
      },
      {
        title: { en: "DRP", vi: "DRP" },
        slug: "drp",
        status: "coming-soon",
        description: {
          en: "How DRP allocates inventory and replenishes stock across distribution points.",
          vi: "Biết DRP hỗ trợ phân bổ tồn kho và bổ sung hàng giữa các điểm phân phối như thế nào.",
        },
      },
      {
        title: { en: "Capacity Planning", vi: "Capacity Planning" },
        slug: "capacity-planning",
        status: "available",
        description: {
          en: "Connect forecast, MRP and execution capacity so plans that look good on paper don't break in the plant or warehouse.",
          vi: "Nối forecast, MRP và năng lực thực thi để tránh kế hoạch đẹp trên giấy nhưng vỡ ở nhà máy hoặc kho.",
        },
        articleSlug: "tu-forecast-den-mrp-luong-ke-hoach-san-xuat",
        toolSlug: "warehouse-capacity-calculator",
      },
    ],
    relatedTags: ["Planning", "MRP", "Capacity"],
    relatedProducts: ["sop-calendar-meeting-pack"],
    relatedTools: ["warehouse-capacity-calculator"],
  },
]
