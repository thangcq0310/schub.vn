// Seed data for when Firestore is empty
export const seedArticles = [
  {
    id: "17",
    title: "Nỗi đau dự báo nhu cầu trong doanh nghiệp nông sản — Và cách xử lý tận gốc",
    slug: "noi đau-du-bao-nhu-cau-nong-san-va-cach-xu-ly-tan-goc",
    excerpt: "Ngành nông sản tươi sống có lẽ là ngành khó dự báo nhất trong chuỗi cung ứng. FAO ước tính 28–55% rau quả bị thất thoát sau thu hoạch — phần lớn đến từ dự báo sai và đứt gãy chuỗi lạnh.",
    body: `# Nỗi đau dự báo nhu cầu trong doanh nghiệp nông sản — Và cách xử lý tận gốc

## Giới thiệu

Ngành nông sản tươi sống có lẽ là một trong những ngành **khó dự báo nhất** trong toàn bộ chuỗi cung ứng. Sản phẩm **mau hỏng**, sản xuất phụ thuộc **thời tiết & mùa vụ**, chuỗi cung ứng **phân mảnh**, và thị trường **dao động dữ dội** theo khuyến mãi, xu hướng tiêu dùng.

> 📊 **Thực tế đau lòng:** FAO ước tính **28–55% rau quả bị thất thoát sau thu hoạch** — phần lớn đến từ dự báo sai và đứt gãy chuỗi lạnh, chứ không phải do sản phẩm "xấu".

---

## 6 Nỗi Đau Cốt Lõi & Giải Pháp Xử Lý Tận Gốc

---

### 1. Sản phẩm mau hỏng – Sai một ly, vứt cả lô

**Triệu chứng:**
- Hàng tồn quá ít → hết hàng, mất khách
- Hàng tồn quá nhiều → hư hỏng, phải đổ bỏ hoặc bán giảm giá cắt lỗ
- Quyết định dựa trên cảm tính ("năm ngoái bán được, năm nay nhập y vậy")

**Phân tích gốc rễ:** Không phải do "sản phẩm mau hỏng" — đó là bản chất tự nhiên. Gốc rễ là **thiếu dữ liệu thời gian thực** về hạn sử dụng, độ chín, và tốc độ tiêu thụ theo từng lô hàng cụ thể.

**Giải pháp tận gốc:**

| Giải pháp | Cụ thể |
|---|---|
| **FEFO thay vì FIFO** | First Expired First Out — ưu tiên xuất lô có hạn sử dụng ngắn nhất trước, cần hệ thống quản lý lô + ngày hết hạn |
| **Cảnh báo "cửa sổ tươi" tự động** | ERP gửi alert khi sản phẩm sắp hết thời gian tươi ngon, kích hoạt khuyến mãi / điều chuyển kho kịp thời |
| **Dynamic pricing** | Tự động giảm giá theo độ tươi còn lại (như siêu thị Nhật làm với sushi, cơm hộp) |

---

### 2. Dự báo "xa rời thực địa" – Trồng một đằng, bán một nẻo

**Triệu chứng:**
- Dự báo làm trên Excel, cập nhật 1 lần/tháng, trong khi nhu cầu thay đổi từng ngày
- Bộ phận sales biết khách sắp có promotion lớn, nhưng bên thu mua không biết → đặt hàng thiếu
- POS (điểm bán) không kết nối với kế hoạch thu hoạch

**Phân tích gốc rễ:** Không phải do "con người kém" mà do **dữ liệu bị chia cắt theo silo phòng ban**. Sales có tín hiệu thị trường, nhưng thông tin không chảy ngược về sản xuất & thu mua kịp thời.

**Giải pháp tận gốc:**

| Giải pháp | Cụ thể |
|---|---|
| **Hệ thống S&OP tích hợp** | Sales & Operations Planning — một quy trình + một nền tảng duy nhất để sales, marketing, sản xuất, tài chính cùng ngồi lại dự báo dựa trên một bộ dữ liệu chung |
| **Kết nối POS → Harvest Plan** | Dữ liệu từ quầy bán lẻ chảy thẳng về hoạch định thu hoạch/vùng trồng, tự động cập nhật hằng ngày |
| **Rolling Forecast** | Thay vì dự báo cố định 1 lần/tháng, lăn liên tục mỗi tuần, luôn dùng 4-6 tuần gần nhất làm đầu vào |

---

### 3. Thời tiết & khí hậu – "Ông trời" làm loạn mọi kế hoạch

**Triệu chứng:**
- Mưa trái mùa → thu hoạch chậm 2 tuần → vỡ cam kết giao hàng
- Nắng nóng bất thường → sản lượng giảm 30% → không đủ hàng cho siêu thị
- Không có phương án B khi thời tiết xấu

**Phân tích gốc rễ:** Đa số doanh nghiệp dùng dữ liệu thời tiết **chung chung (regional)**, không đủ mịn để dự báo cho từng cánh đồng cụ thể. Hơn nữa, kế hoạch sản xuất là "tĩnh" — không có kịch bản dự phòng.

**Giải pháp tận gốc:**

| Giải pháp | Cụ thể |
|---|---|
| **Dự báo vi khí hậu (microclimate)** | Dùng IoT cảm biến độ ẩm đất, nhiệt độ, lượng mưa tại chính cánh đồng → AI dự báo cửa sổ thu hoạch tối ưu |
| **Scenario Planning** | Lập sẵn 3 kịch bản (tốt / trung bình / xấu) cho mỗi vụ, kèm danh sách nhà cung cấp dự phòng, kho lạnh dự phòng, tuyến vận chuyển thay thế |
| **Diversified Sourcing** | Không phụ thuộc 1 vùng trồng; cam kết bao tiêu nhiều vùng địa lý khác nhau để bù đắp khi 1 vùng mất mùa |

---

### 4. Chuỗi lạnh đứt đoạn – Mỗi khâu một "ốc đảo" dữ liệu

**Triệu chứng:**
- Xe lạnh đến trễ, nhiệt độ bị phá vỡ nhưng không ai biết cho đến khi khách trả hàng
- Kho lạnh không đồng bộ: nơi chất đầy, nơi trống rỗng
- Không biết lô hàng đang ở đâu, tình trạng nhiệt độ ra sao

**Phân tích gốc rễ:** "Cold chain" thực ra không phải một chuỗi — nó là tập hợp các mắt xích rời rạc, mỗi bên tự quản lý một đoạn, **không chia sẻ dữ liệu** cho nhau.

**Giải pháp tận gốc:**

| Giải pháp | Cụ thể |
|---|---|
| **IoT xuyên suốt chuỗi lạnh** | Cảm biến nhiệt/độ ẩm gắn trên từng pallet, phát dữ liệu real-time lên cloud **dùng chung** giữa nông trại → vận tải → kho → siêu thị |
| **Control Tower** | Một "tháp kiểm soát" tập trung: màn hình dashboard hiển thị vị trí + nhiệt độ + thời gian dự kiến của mọi lô hàng đang lưu thông |
| **Cảnh báo chủ động** | Khi nhiệt độ vượt ngưỡng, hệ thống tự động gửi alert → điều phối viên có thể chuyển hướng xe, tìm kho lạnh gần nhất |

---

### 5. Truy xuất nguồn gốc – "Biết rồi, khổ lắm, nói mãi"

**Triệu chứng:**
- Khách hàng (đặc biệt là siêu thị lớn, xuất khẩu EU/US) yêu cầu truy xuất từng lô, từng ngày thu hoạch
- Khi bị trả hàng, không biết lỗi phát sinh ở đâu: giống? đồng ruộng? vận chuyển? kho?
- Làm báo cáo truy xuất mất 2-3 ngày, khách không chờ được

**Phân tích gốc rễ:** Dữ liệu nằm rải rác trong sổ tay, file Excel, giấy chứng nhận photo. Không có **một ID duy nhất** xâu chuỗi từ hạt giống → cây trồng → thu hoạch → đóng gói → vận chuyển → kệ hàng.

**Giải pháp tận gốc:**

| Giải pháp | Cụ thể |
|---|---|
| **Blockchain / Digital Ledger** | Mỗi lô hàng có 1 mã hash duy nhất, mỗi khâu ghi 1 block không thể sửa → truy xuất trong **vài giây** |
| **QR Code cấp lô** | Mỗi thùng hàng có QR liên kết đến toàn bộ lịch sử: ngày thu hoạch, tên nông dân, loại phân bón, chứng nhận |
| **Hệ thống quản lý chứng nhận tự động** | ERP tự động theo dõi hạn chứng nhận (GlobalGAP, Organic...), cảnh báo trước khi hết hạn |

---

### 6. Mùa vụ & biến động cung-cầu – "Được mùa mất giá, được giá mất mùa"

**Triệu chứng:**
- Vào chính vụ: sản lượng quá nhiều → giá rớt thảm → phải "giải cứu"
- Trái vụ: khan hàng → giá cao nhưng không có hàng để bán
- Không dự báo được đỉnh/đáy để lên kế hoạch chế biến sâu, trữ kho

**Phân tích gốc rễ:** Đây là vấn đề **cấu trúc**: sản xuất nông nghiệp theo mùa tự nhiên nhưng tiêu dùng diễn ra quanh năm. Thiếu cơ chế **điều tiết** giữa chính vụ và trái vụ.

**Giải pháp tận gốc:**

| Giải pháp | Cụ thể |
|---|---|
| **Chế biến sâu (value-added processing)** | Đầu tư dây chuyền sấy, cấp đông, ép nước, nghiền bột... để hấp thụ sản lượng dư thừa chính vụ |
| **Contract farming có điều tiết** | Ký hợp đồng bao tiêu với nông dân **theo lịch xuống giống so le** — chia vùng trồng thành nhiều đợt gieo trồng cách nhau 2-3 tuần |
| **AI Demand Sensing** | Dùng machine learning phân tích tín hiệu ngầm (xu hướng mạng xã hội, thời tiết, ngày lễ, giá đối thủ...) |
| **Đa dạng thị trường** | Không chỉ bán nội địa — kết nối sàn TMĐT xuyên biên giới, ký hợp đồng xuất khẩu |

---

## Bức Tranh Tổng Thể

\`\`\`
                      GIẢI PHÁP TẬN GỐC
                      ═══════════════════

   ERP chuyên ngành nông sản (AgriERP / Fresh Produce ERP)
   ┌──────────────────────────────────────────────────────┐
   │  AI Forecasting  │  IoT Cold Chain  │  Blockchain   │
   │  (dự báo thông   │  (giám sát       │  (truy xuất   │
   │   minh)          │   nhiệt độ)      │   nguồn gốc)  │
   ├──────────────────────────────────────────────────────┤
   │  Control Tower   │  S&OP tích hợp   │  Scenario     │
   │  (tháp kiểm      │  (sales + mua    │  Planning     │
   │   soát)          │   + sx cùng bàn) │  (phương án B)│
   └──────────────────────────────────────────────────────┘
         │                                          │
         ▼                                          ▼
   Ra quyết định                          Linh hoạt
   dựa trên dữ liệu                      thích ứng thời
   thời gian thực                         tiết, mùa vụ
\`\`\`

---

## Tổng kết: Công thức 3 trụ cột

| Trụ cột | Mô tả | Ví dụ cụ thể |
|---|---|---|
| **Số hóa + Tích hợp** | Mọi dữ liệu (ruộng, kho, xe, quầy) trên 1 nền tảng, real-time | ERP nông sản + IoT + QR code |
| **AI & Predictive** | Máy học từ quá khứ, bắt tín hiệu tương lai sớm | Demand sensing, dự báo vi khí hậu |
| **Hợp tác chuỗi** | Chia sẻ dữ liệu & rủi ro giữa nông dân – doanh nghiệp – nhà bán lẻ | Contract farming, control tower dùng chung |`,
    type: "article" as const,
    tags: ["Demand Planning", "Forecasting", "Agriculture"],
    authorName: "SCHub.vn",
    readTimeMinutes: 12,
    featured: true,
    publishedAt: { seconds: 1753036800, nanoseconds: 0 },
  },
  {
    id: "18",
    title: "Chiến lược mua hàng khi nông sản nhảy giá hàng ngày",
    slug: "chiens-luoc-mua-hang-khi-nong-san-nhay-gia-hang-ngay",
    excerpt: "Giá nông sản thay đổi từng ngày — thậm chí từng phiên chợ. Bài viết phân tích mối quan hệ hai chiều giữa giá và dự báo, cùng 4 chiến lược mua hàng hybrid giúp doanh nghiệp kiểm soát chi phí.",
    body: `# Chiến lược mua hàng khi nông sản nhảy giá hàng ngày

## Giới thiệu

Khi giá thay đổi từng ngày — thậm chí từng phiên chợ — không thể có **một** chiến lược mua cố định. Cần một **bộ chiến lược lai (hybrid)** và quy tắc kích hoạt rõ ràng.

---

## Phần 1: Giá cả ảnh hưởng đến sản lượng dự báo như thế nào?

### Cơ chế "vòng xoáy" giá – dự báo

\`\`\`
                     GIÁ TĂNG ĐỘT BIẾN
                           │
           ┌───────────────┼───────────────┐
           ▼               ▼               ▼
      Nhu cầu mua      Doanh nghiệp     Nông dân
      giảm (co dãn)    hạ dự báo        găm hàng
           │               │               │
           └───────────────┼───────────────┘
                           ▼
                  DỰ BÁO BỊ "BẺ CONG"
                  (Sai lệch càng xa thực tế)
\`\`\`

**Ba tác động chính:**

| Tác động | Cơ chế | Hệ quả lên dự báo |
|---|---|---|
| **Co dãn của cầu** | Giá tăng → người tiêu dùng mua ít hơn hoặc chuyển sang sản phẩm thay thế | Mô hình dự báo dựa trên lịch sử doanh số **không còn đúng** |
| **Hiệu ứng "bầy đàn"** | Giá đang lên → khách hàng B2B đổ xô đặt hàng sớm → tạo cầu ảo | Dự báo bị **phóng đại tạm thời**, rồi sụp đổ khi giá hạ nhiệt |
| **Tâm lý đầu cơ** | Giá lên → nông dân găm hàng chờ giá cao hơn → cung giảm nhân tạo | Mô hình cung–cầu truyền thống **gãy hoàn toàn** |

### Giải pháp: Mô hình dự báo "nhạy giá" (Price-Sensitive Forecasting)

| Cấp độ | Cách làm | Ví dụ cụ thể |
|---|---|---|
| **Cơ bản** | Thêm biến giá vào mô hình hồi quy | \`Doanh số = α + β1×Giá + β2×Mùa_vụ + β3×Khuyến_mãi\` |
| **Trung cấp** | Tính hệ số co dãn giá (Price Elasticity) theo từng mặt hàng | Cà chua: ε = -1.8 (co dãn mạnh). Dưa hấu: ε = -0.4 (ít co dãn) |
| **Nâng cao** | Machine Learning với "price-aware" features | Mô hình XGBoost/LSTM nhận đầu vào: giá hôm nay, giá 7 ngày trước, tốc độ thay đổi giá... |

---

## Phần 2: 4 Chiến lược mua hàng

### Chiến lược 1: Portfolio Mix (Kết hợp đa kênh mua)

Đây là chiến lược **nền tảng** — không bao giờ bỏ tất cả trứng vào một giỏ.

| Kênh mua | Tỷ trọng gợi ý | Khi nào dùng nhiều hơn? | Rủi ro |
|---|---|---|---|
| **Hợp đồng kỳ hạn (Forward Contract)** | 40–60% | Khi thị trường đang lên, giá có xu hướng tăng dài hạn | Giá spot xuống thấp hơn giá forward |
| **Mua giao ngay (Spot Buying)** | 20–30% | Khi giá đang giảm, thị trường dư cung | Giá spot vọt lên đột ngột |
| **Hợp đồng linh hoạt (Flex Contract)** | 10–20% | Luôn duy trì để "điều tiết" | Cần quan hệ đối tác tốt |
| **Tự sản xuất / Liên kết vùng trồng** | 10–20% | Doanh nghiệp có vùng trồng riêng | Rủi ro mùa vụ, thời tiết |

**Ví dụ minh họa:** Doanh nghiệp rau củ quả, nhu cầu 100 tấn/tháng

- 50 tấn ── Hợp đồng forward 3 tháng, giá cố định
- 25 tấn ── Mua spot hàng ngày từ chợ đầu mối
- 15 tấn ── Flex contract: cam kết mua tối thiểu, giá = avg(spot 7 ngày) ± 5%
- 10 tấn ── Vùng trồng liên kết, giá sàn bảo hộ nông dân

---

### Chiến lược 2: Trigger-Based Buying (Mua hàng theo "ngưỡng kích hoạt")

Đặt ra các **mức giá kích hoạt** (trigger price) được tính toán từ dữ liệu lịch sử.

| Tín hiệu | Hành động | Logic |
|---|---|---|
| 🟢 Giá ≤ **P25** (phân vị 25% của 12 tháng) | **Mua gấp đôi** — gom hàng, đàm phán hợp đồng dài hạn | Đây là đáy tương đối, cơ hội khóa giá thấp |
| 🟡 **P25 < giá < P75** | Mua bình thường theo kế hoạch | Vùng giá "fair", không cần phản ứng đặc biệt |
| 🔴 Giá ≥ **P75** | **Giảm mua spot, kích hoạt forward** — chỉ mua tối thiểu cầm chừng | Đang vào vùng giá cao |
| 🚨 Giá ≥ **P90** (sốt) | **Dừng mua spot**, xả hàng tồn kho nếu có lãi | Giá bong bóng — mua lúc này là "bắt dao rơi" |

> 💡 **P25, P75, P90** là các phân vị (percentile) từ chuỗi giá lịch sử 12 tháng.

---

### Chiến lược 3: Hedging & Bảo hiểm giá

| Công cụ | Mô tả | Phù hợp với |
|---|---|---|
| **Hợp đồng tương lai (Futures)** | Mua/bán trên sàn hàng hóa với giá khóa trước | Doanh nghiệp xuất khẩu nông sản khô |
| **Hợp đồng quyền chọn (Options)** | Mua quyền (không nghĩa vụ) mua hàng ở giá X trong tương lai | Doanh nghiệp muốn bảo vệ giá trần |
| **Hợp đồng CFD / Swap** | Hoán đổi chênh lệch giá với đối tác tài chính | Doanh nghiệp muốn hedge thuần túy tài chính |
| **Bảo hiểm giá hàng hóa** | Trả phí bảo hiểm, nếu giá vượt ngưỡng cam kết thì được bồi thường | Doanh nghiệp vừa, không muốn phức tạp |

---

### Chiến lược 4: Dynamic Contracting (Hợp đồng "thông minh")

| Loại hợp đồng linh hoạt | Cách hoạt động | Dùng khi |
|---|---|---|
| **Giá thả nổi theo chỉ số (Index-Linked)** | Giá mua = Giá tham chiếu chợ đầu mối × Hệ số điều chỉnh (±5-10%) | Cả 2 bên cùng chấp nhận biến động |
| **Giá sàn – giá trần (Collar Contract)** | Cam kết: giá không thấp hơn X, không cao hơn Y | Mối quan hệ đối tác dài hạn |
| **Giá trung bình động (Moving Average Price)** | Giá mua = Trung bình giá spot 7/14/30 ngày gần nhất | Giá biến động mạnh nhưng không có xu hướng dài hạn |
| **Giá 2 phần (Two-Part Tariff)** | Phần cố định + Phần biến đổi theo giá thị trường | Đảm bảo nông dân có thu nhập tối thiểu |

---

## Phần 3: Playbook mua hàng ngày (5 bước)

\`\`\`
⏰ 6:00 AM: Nhận báo cáo giá thị trường
        │
        ▼
📊 BƯỚC 1 — Phân loại tín hiệu giá
   • Giá hôm nay vs. P25/P50/P75 (12 tháng)
   • Tốc độ thay đổi: tăng/giảm bao nhiêu % trong 3-5 ngày qua?
   • So sánh với giá forward đã ký → chênh lệch?
        │
        ▼
🔮 BƯỚC 2 — Điều chỉnh dự báo sản lượng
   • Áp dụng hệ số co dãn giá: Dự báo mới = Dự báo cũ × (1 + ε × %ΔGiá)
   • Ví dụ: ε = -0.8, giá tăng 10% → dự báo giảm 8%
   • Kiểm tra chéo với tín hiệu từ sales
        │
        ▼
🛒 BƯỚC 3 — Phân bổ tỷ trọng kênh mua
   ┌──────────────────────────────────────────────────┐
   │  Giá ≤ P25  →  Spot 60% | Forward 20% | Flex 20% │
   │  P25 < Giá < P75 → Spot 30% | Forward 50% | Flex 20% │
   │  Giá ≥ P75  →  Spot 10% | Forward 70% | Flex 20% │
   │  Giá ≥ P90  →  Spot 0%  | Forward 80% | Flex 20% │
   └──────────────────────────────────────────────────┘
        │
        ▼
🤝 BƯỚC 4 — Đàm phán & Chốt đơn
   • Gọi 3 nhà cung cấp, so sánh giá + chất lượng + thời gian giao
   • Ưu tiên nhà cung cấp có flex contract
        │
        ▼
📝 BƯỚC 5 — Ghi nhận & học hỏi
   • Ghi lại: Giá mua thực tế, lý do chọn chiến lược
   • Cuối tuần: So sánh giá mua thực tế vs giá trung bình thị trường
   • Cuối tháng: Đánh giá hiệu quả portfolio mix
\`\`\`

---

## Kết quả mô phỏng: 12 Tuần – 100 Tấn/Tháng Cà Chua

| Chỉ số | Chiến lược A (100% spot) | Chiến lược B (Portfolio Mix) |
|---|---|---|
| **Tổng chi phí** | 4.76 tỷ | 4.37 tỷ |
| **Tiết kiệm** | - | 400 triệu (8.3%) |
| **Biến động chi phí** | Cao | Giảm 66% |

> 💡 **Tỷ lệ claim/phí bảo hiểm:** 21 triệu "thua" ở tuần 9 vs 397 triệu tiết kiệm khi giá sốt = **19 lần**.

---

## 5 Nguyên tắc vàng

| # | Nguyên tắc | Tại sao? |
|---|---|---|
| 1 | **Không bao giờ mua 100% spot** | Một ngày giá vọt 30% là "cháy" cả tháng lợi nhuận |
| 2 | **Luôn có trigger price** | Quyết định dựa trên dữ liệu, không cảm tính |
| 3 | **Dự báo phải "nhạy giá"** | Mô hình không có biến giá = mô hình mù |
| 4 | **Quan hệ > Giao dịch** | Flex contract, chia sẻ rủi ro với nông dân/nhà cung cấp bền hơn |
| 5 | **Dữ liệu là vũ khí** | Chuỗi giá lịch sử 12-24 tháng + AI forecasting = lợi thế cạnh tranh |`,
    type: "article" as const,
    tags: ["Procurement", "Pricing", "Forecasting"],
    authorName: "SCHub.vn",
    readTimeMinutes: 15,
    featured: true,
    publishedAt: { seconds: 1752950400, nanoseconds: 0 },
  },
  {
    id: "1",
    title: "Vì sao doanh nghiệp vừa tồn kho cao vừa thiếu hàng?",
    slug: "vi-sao-ton-kho-cao-van-thieu-hang",
    excerpt: "Bài toán phổ biến trong doanh nghiệp Việt Nam: sales cần hàng, kho báo tồn cao, nhưng sản xuất và mua hàng vẫn bị động. Nguyên nhân thường nằm ở forecast, master data và chính sách tồn kho.",
    body: `# Vì sao doanh nghiệp vừa tồn kho cao vừa thiếu hàng?

## Hiện tượng
Sales cần giao hàng cho khách, hệ thống ghi nhận tồn kho cao, nhưng lượng hàng khả dụng để xuất bán lại không đáp ứng nhu cầu thực tế. Hoặc hàng tồn ở kho khác, hàng đang chờ check-in, hàng bị hold...

## Nguyên nhân gốc

### 1. Forecast không chính xác
Không có quy trình demand forecasting rõ ràng. Sales đoán bằng cảm tính, không có số liệu lịch sử phân tích.

### 2. Master data không chuẩn
- Sai UoM (đơn vị tính)
- Sai quy cách đóng gói
- Không có cross-reference giữa các kho

### 3. Chính sách tồn kho không rõ
Không có định mức tồn kho an toàn, không có điểm đặt hàng lại (reorder point).

## Giải pháp

### Bước 1: Rà soát master data
Kiểm tra và chuẩn hóa UoM, quy cách, weight, dimension cho tất cả SKU.

### Bước 2: Thiết lập safety stock
Áp dụng công thức:
\`\`\`
SS = (Max daily usage × Max lead time) - (Avg daily usage × Avg lead time)
\`\`\`

### Bước 3: Thiết lập reorder point
\`\`\`
ROP = (Avg daily usage × Lead time) + Safety Stock
\`\`\`

## Kết luận
Bài toán tồn kho cao nhưng thiếu hàng thường không phải do thiếu hàng trong kho mà do không biết hàng ở đâu, hàng đó có dùng được không.`,
    type: "article" as const,
    tags: ["Inventory", "Planning", "Master Data"],
    authorName: "SCHub.vn",
    readTimeMinutes: 8,
    featured: true,
    publishedAt: { seconds: 1704067200, nanoseconds: 0 },
  },
  {
    id: "2",
    title: "ABC/XYZ Analysis: cách phân loại SKU để ưu tiên quản trị tồn kho",
    slug: "abc-xyz-analysis-phan-loai-sku",
    excerpt: "Không phải SKU nào cũng cần quản trị như nhau. ABC/XYZ giúp doanh nghiệp xác định SKU quan trọng, SKU biến động cao và nhóm hàng cần kiểm soát chặt.",
    body: `# ABC/XYZ Analysis: Phân loại SKU để ưu tiên

## Tại sao cần ABC/XYZ?

Không phải SKU nào cũng quan trọng như nhau. 20% SKU có thể chiếm 80% giá trị tồn kho. Việc quản trị tất cả SKU như nhau là lãng phí nguồn lực.

## Phân loại ABC

Dựa trên giá trị tiêu thụ hàng năm:

| Loại | % SKU | % Giá trị | Đặc điểm |
|------|-------|-----------|----------|
| A | 20% | 80% | Quan trọng nhất, cần quản lý chặt |
| B | 30% | 15% | Trung gian |
| C | 50% | 5% | ít quan trọng |

### Cách tính:
1. Tính giá trị tiêu thụ annual = Usage × Unit Cost
2. Sắp xếp giảm dần
3. Tính % tích lũy
4. Phân loại theo ngưỡng

## Phân loại XYZ

Dựa trên biến động tiêu thụ:

| Loại | Biến động | Đặc điểm |
|------|-----------|----------|
| X | Thấp (<15%) | Ổn định, dễ dự báo |
| Y | Trung bình (15-30%) | Biến động vừa |
| Z | Cao (>30%) | Khó dự báo |

## Kết hợp ABC + XYZ

| | X | Y | Z |
|---|---|---|---|
| A | AX: Ổn định, quan trọng | AY: Cần theo dõi | AZ: Cần chú ý đặc biệt |
| B | BX: Kiểm soát thường xuyên | BY: Theo dõi định kỳ | BZ: Cân nhắc inventory kỹ |
| C | CX: Kiểm soát cơ bản | CY: Đơn giản hóa | CZ: Không cần đầu tư nhiều |

## Template
Sử dụng template ABC/XYZ để phân loại nhanh.`,
    type: "article" as const,
    tags: ["Inventory", "ABC/XYZ", "KPI"],
    authorName: "SCHub.vn",
    readTimeMinutes: 10,
    featured: true,
    publishedAt: { seconds: 1703980800, nanoseconds: 0 },
  },
  {
    id: "3",
    title: "S&OP cho doanh nghiệp Việt Nam: bắt đầu từ đâu?",
    slug: "sop-cho-doanh-nghiep-viet-nam",
    excerpt: "S&OP không nhất thiết phải phức tạp. Doanh nghiệp có thể bắt đầu bằng một lịch họp cố định, bộ số liệu thống nhất và nguyên tắc ra quyết định rõ ràng.",
    body: `# S&OP cho doanh nghiệp Việt Nam

## Định nghĩa
Sales & Operations Planning (S&OP) là quy trình giúp cân bằng cung - cầu, liên kết bộ phận sales, planning, procurement, production.

## Bắt đầu từ đâu?

### 1. Xác định tần suất
- Hàng tháng là phổ biến nhất
- Tuần nếu biến động cao

### 2. Chuẩn bị data
Trước họp, cần có:
- Forecast từ Sales
- Supply plan từ Planning/Production
- Inventory status từ Warehouse
- Supplier lead time từ Procurement

### 3. Cuộc họp
Nên có 4 cuộc họp:

| Cuộc họp | Ai tham gia | Nội dung |
|---------|------------|----------|
| 1. Data preparation | SCM lead | Tổng hợp số liệu |
| 2. Pre-S&OP | SCM team | Review chi tiết |
| 3. S&OP chính | Sales + SCM + Finance | Quyết định |
| 4. Post-S&OP | SCM lead | Theo dõi |

### 4. Output
- Demand forecast đã cân bằng
- Supply plan khả thi
- Action items rõ ràng

## Lưu ý
Không cần phần mềm đắt tiền. Bắt đầu bằng Excel, sau đó nâng cấp nếu cần.`,
    type: "article" as const,
    tags: ["S&OP", "Demand Planning", "Governance"],
    authorName: "SCHub.vn",
    readTimeMinutes: 12,
    featured: true,
    publishedAt: { seconds: 1703894400, nanoseconds: 0 },
  },
  {
    id: "4",
    title: "Checklist đánh giá 3PL: đừng chỉ nhìn giá thuê kho",
    slug: "checklist-danh-gia-3pl",
    excerpt: "Giá thuê kho chỉ là một phần. Khi chọn 3PL, doanh nghiệp cần đánh giá SLA, tồn kho, khả năng xử lý sự cố, báo cáo và trách nhiệm khi phát sinh lỗi.",
    body: `# Checklist đánh giá 3PL

## Đừng chỉ nhìn giá

Nhiều doanh nghiệp chọn 3PL chỉ vì giá rẻ. Nhưng chi phí ẩn có thể cao hơn nhiều.

## Tiêu chí đánh giá 3PL

### 1. Vận hành (40%)
- Hệ thống WMS
- Quy trình nhập xuất
- FEFO/FIFO compliance
- Accuracy rate (>=98%)
- On-time delivery (>=95%)

### 2. Báo cáo (20%)
- Daily inventory report
- Monthly summary
- Exception alert

### 3. Phí ẩn (15%)
- Phí Handling
- Phí Storage
- Phí Outbound
- Phí COD

### 4. SLA & Liability (15%)
- Xử lý discrepancy
- Bồi thường khi mất hàng
- Response time khi có issue

### 5. Khả năng mở rộng (10%)
- Peak season handling
- Multi-location
- Value-added services

## Template checklist
Sử dụng file đính kèm để đánh giá 3PL.`,
    type: "article" as const,
    tags: ["3PL", "Warehouse", "Logistics Cost"],
    authorName: "SCHub.vn",
    readTimeMinutes: 8,
    featured: true,
    publishedAt: { seconds: 1703808000, nanoseconds: 0 },
  },
  {
    id: "5",
    title: "Master Data trong SAP/WMS: lỗi nhỏ, hậu quả lớn",
    slug: "master-data-sap-wms-loi-nho-hau-qua-lon",
    excerpt: "Sai UoM, gross weight, batch rule hoặc shelf-life có thể làm sai tồn kho, sai kế hoạch, sai chi phí logistics và gây lỗi vận hành hàng ngày.",
    body: `# Master Data: Lỗi nhỏ, hậu quả lớn

## Tại sao Master Data quan trọng?

Master data sai = Tất cả báo cáo sai.

## Các lỗi phổ biến

### 1. UoM (Đơn vị tính)
- Mua = GB (gallon)
- Stock = L (liter)
- Không quy đổi -> Sai tồn kho

### 2. Weight & Volume
- Gross weight sai -> Tính sai cước vận chuyển
- Volume sai -> Sắp xếp container sai

### 3. Shelf-life
- Không nhập -> Hàng hết hạn mới biết
- Nhập sai -> Bị reject khi xuất

### 4. Batch rules
- Không có -> Không tracking được hàng cũ

## Cách phòng ngừa

### Validation checklist
- [ ] Cross-check giữa Purchase và Inventory UoM
- [ ] Verify weight với supplier
- [ ] Set shelf-life cho mọi SKU
- [ ] Review master data hàng quý

### Quy trình
1. Supplier gửi spec
2. SCM verify
3. Import vào system
4. Spot-check random

## Hậu quả nếu không làm
- Inventory không khớp
- Chi phí logistics sai
- Kế hoạch sản xuất sai
- Compliance issues`,
    type: "article" as const,
    tags: ["Master Data", "ERP/WMS", "Digital SCM"],
    authorName: "SCHub.vn",
    readTimeMinutes: 7,
    featured: false,
    publishedAt: { seconds: 1703721600, nanoseconds: 0 },
  },
  {
    id: "6",
    title: "KPI Supply Chain: nên đo gì để không báo cáo cho có?",
    slug: "kpi-supply-chain-nen-do-gi",
    excerpt: "Một bộ KPI tốt phải giúp ra quyết định, không chỉ làm đẹp báo cáo. Cần liên kết KPI từ planning, procurement, inventory, warehouse đến logistics cost.",
    body: `# KPI Supply Chain: Đo gì?

## Nguyên tắc

KPI tốt phải:
1. Có action khi deviate
2. Ai chịu trách nhiệm rõ
3. Có target cụ thể

## KPI theo chức năng

### Planning
- Forecast accuracy (>=85%)
- Plan vs Actual

### Procurement
- On-time delivery (>=95%)
- Supplier defect rate (<2%)

### Inventory
- Inventory accuracy (>=98%)
- Days of inventory (30-60 days)
- Dead stock ratio (<5%)

### Warehouse
- Order accuracy (>=99%)
- Cycle time (<24h)
- Space utilization (>=70%)

### Logistics
- On-time delivery (>=95%)
- Lead time
- Transportation cost (% sales)

## Dashboard mẫu

| KPI | Target | Current | Status |
|-----|-------|---------|--------|
| Forecast acc | 85% | 78% | Warning |
| Inventory acc | 98% | 96.5% | OK |
| OTD | 95% | 97% | Good |

## Lưu ý
Không cần quá nhiều KPI. 10-15 KPI là đủ.`,
    type: "article" as const,
    tags: ["KPI", "Dashboard", "Governance"],
    authorName: "SCHub.vn",
    readTimeMinutes: 6,
    featured: false,
    publishedAt: { seconds: 1703635200, nanoseconds: 0 },
  },
  {
    id: "7",
    title: "Supply Chain là gì và khác Logistics như thế nào?",
    slug: "supply-chain-la-gi-khac-logistics-nhu-the-nao",
    excerpt: "Supply Chain rộng hơn logistics vì bao gồm cả lập kế hoạch, mua hàng, sản xuất, tồn kho, phân phối và cơ chế ra quyết định toàn chuỗi.",
    body: `# Supply Chain là gì và khác Logistics như thế nào?

## Vấn đề thực tế

Nhiều doanh nghiệp gọi mọi việc liên quan đến kho vận là logistics, trong khi gốc vấn đề lại nằm ở planning, mua hàng hoặc phối hợp giữa các phòng ban.

## Khái niệm cốt lõi

Supply Chain là hệ thống điều phối dòng vật chất, thông tin và quyết định từ nhà cung cấp đến khách hàng cuối. Logistics là một phần trong hệ thống đó, tập trung nhiều hơn vào vận chuyển, lưu kho và thực thi dòng hàng.

## Áp dụng tại doanh nghiệp Việt Nam

Nếu chỉ tối ưu giao nhận mà không chạm vào forecast, master data hoặc chính sách tồn kho, doanh nghiệp rất dễ giảm được chi phí cục bộ nhưng vẫn thiếu hàng hoặc dư hàng toàn hệ thống.

## Template / tool liên quan

Có thể bắt đầu bằng Supply Chain Maturity Assessment để xác định doanh nghiệp đang yếu ở logistics execution hay ở năng lực quản trị chuỗi cung ứng tổng thể.

## Kết luận hành động

Trước khi sửa một chỉ số logistics, hãy xác định vấn đề đang nằm ở execution hay ở cấu trúc supply chain rộng hơn.`,
    type: "article" as const,
    tags: ["SCM", "Logistics", "Governance"],
    authorName: "SCHub.vn",
    readTimeMinutes: 7,
    featured: false,
    publishedAt: { seconds: 1703548800, nanoseconds: 0 },
  },
  {
    id: "8",
    title: "Trend, Seasonality, Cycle và Random Variation khác nhau thế nào?",
    slug: "trend-seasonality-cycle-random-variation",
    excerpt: "Muốn forecast tốt hơn, trước hết cần hiểu dữ liệu đang tăng trưởng dài hạn, lặp theo mùa hay chỉ nhiễu ngắn hạn.",
    body: `# Trend, Seasonality, Cycle và Random Variation khác nhau thế nào?

## Vấn đề thực tế

Nhiều đội planning nhìn doanh số tăng giảm theo vài tháng rồi kết luận vội rằng thị trường đang tăng mạnh hoặc sản phẩm đã yếu đi.

## Khái niệm cốt lõi

Trend là xu hướng dài hạn, seasonality là mô hình lặp theo mùa, cycle là biến động theo chu kỳ kinh doanh dài hơn và random variation là nhiễu không có quy luật rõ ràng.

## Áp dụng tại doanh nghiệp Việt Nam

Nếu không phân biệt đúng các dạng biến động, doanh nghiệp dễ tăng tồn kho trước một biến động ngắn hạn hoặc cắt mua hàng quá sớm khi nhu cầu đang mang tính mùa vụ.

## Template / tool liên quan

Demand Pattern Analyzer có thể là khung đầu tiên để nhóm planning ghi nhận và phân loại từng dạng biến động trước khi chọn phương pháp forecast.

## Kết luận hành động

Đừng tranh luận bằng cảm giác. Hãy đọc dữ liệu theo pattern rồi mới quyết định mô hình forecast và mức độ can thiệp thủ công.`,
    type: "article" as const,
    tags: ["Demand Planning", "Forecasting"],
    authorName: "SCHub.vn",
    readTimeMinutes: 7,
    featured: false,
    publishedAt: { seconds: 1703462400, nanoseconds: 0 },
  },
  {
    id: "9",
    title: "Demand Management không phải chỉ là Forecast",
    slug: "demand-management-khong-phai-chi-la-forecast",
    excerpt: "Forecast chỉ là một đầu vào. Demand management còn bao gồm điều chỉnh thương mại, truyền thông giả định và đồng bộ quyết định giữa sales với supply.",
    body: `# Demand Management không phải chỉ là Forecast

## Vấn đề thực tế

Nhiều công ty có file forecast nhưng khi sale chạy chương trình, supply không biết, còn nhà máy thì vẫn sản xuất theo nhịp cũ.

## Khái niệm cốt lõi

Demand management là quá trình tạo, điều chỉnh, truyền thông và chốt nhu cầu thống nhất. Forecast là một thành phần, không phải toàn bộ hệ thống.

## Áp dụng tại doanh nghiệp Việt Nam

Doanh nghiệp nên có demand plan thể hiện lịch sử bán hàng, thay đổi thương mại, giả định thị trường và phiên bản consensus giữa sales, planning và vận hành.

## Template / tool liên quan

Demand Plan Template giúp lưu lại demand history, commercial adjustment và assumption log để mọi người nhìn cùng một bức tranh.

## Kết luận hành động

Nếu forecast đang lệch liên tục, đừng chỉ đổi công thức. Hãy xem demand management đã có cơ chế giao tiếp và chốt giả định hay chưa.`,
    type: "article" as const,
    tags: ["Demand Planning", "S&OP"],
    authorName: "SCHub.vn",
    readTimeMinutes: 8,
    featured: false,
    publishedAt: { seconds: 1703376000, nanoseconds: 0 },
  },
  {
    id: "10",
    title: "Forecast luôn sai — vậy tại sao vẫn phải forecast?",
    slug: "forecast-luon-sai-vay-tai-sao-van-phai-forecast",
    excerpt: "Forecast không phải để đoán đúng tuyệt đối mà để doanh nghiệp chuẩn bị năng lực, tồn kho, vật tư và cash flow tốt hơn hiện tại.",
    body: `# Forecast luôn sai — vậy tại sao vẫn phải forecast?

## Vấn đề thực tế

Nhiều đội ngũ bỏ qua forecast vì cho rằng số nào cũng sai, nên cuối cùng chỉ phản ứng theo đơn hàng đến đâu xử lý đến đó.

## Khái niệm cốt lõi

Forecast là công cụ định hướng quyết định trong điều kiện không chắc chắn. Giá trị của forecast nằm ở việc giúp chuẩn bị trước, không nằm ở việc đoán trúng từng dòng SKU.

## Áp dụng tại doanh nghiệp Việt Nam

Doanh nghiệp có thể dùng forecast để chốt mua nguyên vật liệu, chuẩn bị năng lực kho, lên khung sản xuất và nhìn trước rủi ro thiếu hàng hoặc tồn kho dư thừa.

## Template / tool liên quan

Forecasting Starter Template và Forecast Error Calculator là hai khung phù hợp để bắt đầu theo dõi cả forecast lẫn sai số forecast một cách có hệ thống.

## Kết luận hành động

Đừng hỏi forecast có đúng 100% không. Hãy hỏi forecast hiện tại có đủ tốt để ra quyết định tốt hơn hôm qua hay chưa.`,
    type: "article" as const,
    tags: ["Forecasting", "Planning"],
    authorName: "SCHub.vn",
    readTimeMinutes: 7,
    featured: false,
    publishedAt: { seconds: 1703289600, nanoseconds: 0 },
  },
  {
    id: "11",
    title: "S&OP không phải là cuộc họp báo cáo",
    slug: "sop-khong-phai-la-cuoc-hop-bao-cao",
    excerpt: "Nếu S&OP chỉ là nơi các phòng ban đọc số liệu, doanh nghiệp sẽ không bao giờ có one-number plan thực sự để hành động.",
    body: `# S&OP không phải là cuộc họp báo cáo

## Vấn đề thực tế

Nhiều cuộc họp S&OP kéo dài nhưng kết thúc mà không có quyết định nào rõ ràng về nhu cầu, năng lực hay ưu tiên khách hàng.

## Khái niệm cốt lõi

S&OP là cơ chế ra quyết định liên phòng ban nhằm cân bằng demand, supply và tài chính. Báo cáo chỉ là đầu vào, không phải mục tiêu cuối cùng.

## Áp dụng tại doanh nghiệp Việt Nam

Doanh nghiệp nên tách rõ demand review, supply review và executive review để mỗi vòng họp có câu hỏi quyết định riêng thay vì gom tất cả vào một buổi trình bày.

## Template / tool liên quan

S&OP Calendar & Meeting Pack và S&OP Readiness Check giúp xây nhịp họp, agenda và tiêu chí đánh giá mức độ sẵn sàng triển khai.

## Kết luận hành động

Nếu sau mỗi kỳ S&OP mà không có quyết định, owner và action rõ ràng, thì đó vẫn chỉ là cuộc họp báo cáo.`,
    type: "article" as const,
    tags: ["S&OP", "Governance"],
    authorName: "SCHub.vn",
    readTimeMinutes: 8,
    featured: false,
    publishedAt: { seconds: 1703203200, nanoseconds: 0 },
  },
  {
    id: "12",
    title: "Từ Forecast đến MRP: luồng kế hoạch sản xuất nên hiểu thế nào?",
    slug: "tu-forecast-den-mrp-luong-ke-hoach-san-xuat",
    excerpt: "Từ forecast đến master plan, rồi đến MRP và capacity planning là một luồng liên kết. Gãy ở bất kỳ bước nào cũng khiến kế hoạch thực thi sai lệch.",
    body: `# Từ Forecast đến MRP: luồng kế hoạch sản xuất nên hiểu thế nào?

## Vấn đề thực tế

Nhiều doanh nghiệp có forecast nhưng nhà máy vẫn thiếu vật tư hoặc quá tải vì forecast không được chuyển thành một chuỗi kế hoạch có logic.

## Khái niệm cốt lõi

Forecast là đầu vào của planning, master plan chuyển nhu cầu thành định hướng vận hành, còn MRP và capacity planning giúp kiểm tra tính khả thi theo vật tư và nguồn lực.

## Áp dụng tại doanh nghiệp Việt Nam

Nếu doanh nghiệp nhảy thẳng từ forecast sang đặt mua hoặc sản xuất mà không có tầng kế hoạch trung gian, rủi ro lệch vật tư, quá tải năng lực và tồn kho sai cấu trúc sẽ tăng mạnh.

## Template / tool liên quan

S&OP Calendar & Meeting Pack có thể giúp doanh nghiệp chốt nhịp kế hoạch, còn Warehouse Capacity Calculator hỗ trợ nhìn sớm constraint phía kho và phân phối.

## Kết luận hành động

Hãy kiểm tra luồng planning từ forecast đến MRP như một chuỗi kết nối, không phải các file rời rạc chạy song song.`,
    type: "article" as const,
    tags: ["Planning", "MRP", "Capacity"],
    authorName: "SCHub.vn",
    readTimeMinutes: 8,
    featured: false,
    publishedAt: { seconds: 1703116800, nanoseconds: 0 },
  },
  {
    id: "13",
    title: "Cách tính Lead Time và Reorder Point cho nhà cung cấp Việt Nam",
    slug: "cach-tinh-lead-time-reorder-point-cho-nha-cung-cap-viet-nam",
    excerpt: "Lead Time không chỉ là số ngày supplier báo. Doanh nghiệp cần tính lead time thực tế, biến động lead time và từ đó thiết lập reorder point phù hợp với điều kiện mua hàng tại Việt Nam.",
    body: `# Cách tính Lead Time và Reorder Point cho nhà cung cấp Việt Nam

## Vấn đề thực tế

Nhiều doanh nghiệp mua hàng dựa trên lead time supplier báo qua email: 7 ngày, 14 ngày, 30 ngày. Nhưng thực tế hàng về sớm hơn hoặc trễ hơn liên tục, dẫn đến:
- Hàng về sớm → Tồn kho tăng, chiếm chỗ
- Hàng về trễ → Thiếu hàng, ngừng sản xuất
- Kho không biết lịch nhận → Check-in chậm, sai location

Gốc vấn đề: lead time không chỉ là con số supplier hứa. Nó là distribution có biến động.

## Khái niệm cốt lõi

### Lead Time (LT)
Thời gian từ lúc đặt hàng đến lúc nhận được hàng tại kho. Gồm:
- **Procurement LT**: Supplier processing + sản xuất
- **Transport LT**: Vận chuyển từ supplier đến kho
- **Receiving LT**: Check-in, kiểm đếm, put-away

Công thức:
\`\`\`
Total LT = Procurement LT + Transport LT + Receiving LT
\`\`\`

### Lead Time Variability
Độ biến động của LT — đo bằng Standard Deviation:
\`\`\`
SD_LT = STDEV.S(lịch sử lead time ít nhất 10-15 lần gần nhất)
\`\`\`

### Reorder Point (ROP)
Mức tồn kho kích hoạt đặt hàng mới:
\`\`\`
ROP = (Avg Daily Usage × Avg LT) + Safety Stock
\`\`\`

### Safety Stock (SS)
Lượng hàng dự trữ an toàn đề phòng biến động:
\`\`\`
SS = Z × √(LT_avg × SD_usage² + Usage_avg² × SD_LT²)
\`\`\`
Với Z = 1.65 (95% service level) hoặc Z = 2.33 (99% service level).

## Áp dụng tại doanh nghiệp Việt Nam

### Vấn đề thường gặp ở supplier VN:

1. **Supplier báo 7 ngày nhưng thực tế 10-15 ngày**
   - Lý do: Thiếu nguyên liệu đầu vào, production scheduling kém
   - Cách xử lý: Track historical LT 3 tháng, lấy P90 thay vì average

2. **Vận chuyển nội địa không ổn định**
   - Tết: tăng 3-5 ngày
   - Mưa bão: tăng 2-3 ngày
   - Cách xử lý: Cộng seasonal buffer (2-5 ngày tùy tháng)

3. **Check-in chậm do quá tải kho**
   - Container dồn về cuối tuần
   - Thiếu nhân sự kiểm đếm
   - Cách xử lý: Phân bổ lịch nhận hàng đều trong tuần

### Các bước thực hiện:

**Bước 1: Thu thập data lịch sử**
Lấy 10-15 PO gần nhất mỗi supplier, ghi:
- PO date, confirm date, hàng thực tế vào kho date

**Bước 2: Tính toán**
\`\`\`
Avg LT = AVERAGE(lịch sử LT)
SD LT = STDEV.S(lịch sử LT)
P90 LT = PERCENTILE.INC(lịch sử LT, 0.90)
\`\`\`

**Bước 3: Thiết lập ROP**
\`\`\`
Safety Stock = Z × √(LT_avg × SD_usage² + Usage_avg² × SD_LT²)
ROP = (Avg Daily Usage × Avg LT) + Safety Stock
\`\`\`

**Bước 4: Review hàng tháng**
Cập nhật LT mới nhất. Nếu SD_LT tăng → đàm phán lại hoặc tìm supplier thay thế.

## Template / tool liên quan

Supplier Lead Time Tracker và Reorder Point Calculator là hai template Excel giúp theo dõi historical LT, tính toán ROP và safety stock tự động.

## Kết luận hành động

Lead Time không thể đoán bằng cảm tính. Hãy track historical LT tối thiểu 3 tháng, tính biến động (SD), và thiết lập ROP dựa trên cả usage lẫn lead time variability. Bắt đầu bằng 1 supplier quan trọng nhất trước, sau đó nhân rộng.`,
    type: "article" as const,
    tags: ["Procurement", "Inventory", "Safety Stock"],
    authorName: "SCHub.vn",
    readTimeMinutes: 9,
    featured: false,
    publishedAt: { seconds: 1710086400, nanoseconds: 0 },
  },
  {
    id: "14",
    title: "Khi nào Demand và Supply không cân? Cách xử lý trong S&OP",
    slug: "demand-supply-khong-can-xu-ly-trong-sop",
    excerpt: "Demand > Supply hoặc Demand < Supply là chuyện thường. Vấn đề là doanh nghiệp có cơ chế ra quyết định rõ ràng để xử lý gap này trong S&OP hay cứ họp xong không có action.",
    body: `# Khi nào Demand và Supply không cân? Cách xử lý trong S&OP

## Vấn đề thực tế

Sau khi tổng hợp demand và supply, đội S&OP thường phát hiện gap: demand cao hơn năng lực cung ứng, hoặc demand thấp hơn sản lượng tối thiểu. Nhưng cuộc họp kết thúc mà không có quyết định phân bổ hoặc giảm hàng cụ thể.

## 2 dạng gap

### 1. Demand > Supply (thiếu hàng)

Nguyên nhân:
- Sales chạy chương trình không báo trước
- Supplier giao trễ hoặc thiếu công suất
- Kho không đủ sức chứa / nhân sự

**Quyết định cần có trong S&OP:**

| Tình huống | Cách xử lý | Ai quyết định |
|------------|-----------|--------------|
| Thiếu ngắn hạn (1-2 tuần) | Phân bổ theo KP priority | Sales Director |
| Thiếu trung hạn (1-3 tháng) | Overtime + thuê 3PL | Ops Director |
| Thiếu dài hạn (>3 tháng) | Đầu tư capacity / new supplier | CEO + CFO |

**Nguyên tắc phân bổ khi thiếu:**

1. **Customer Priority**: Khách hàng chiến lược được ưu tiên
2. **Margin**: SKU margin cao được ưu tiên
3. **Contractual**: Cam kết hợp đồng phải đáp ứng trước

\`\`\`
Allocation % = (Customer Score × Weight) / Total Score
Customer Score = (Revenue × 0.3) + (Margin × 0.3) + (Strategic Flag × 0.4)
\`\`\`

### 2. Demand < Supply (dư hàng)

Nguyên nhân:
- Forecast quá lạc quan
- Đối thủ cạnh tranh giảm giá
- Thị trường chững lại

**Quyết định cần có:**

| Tình huống | Cách xử lý | Ai quyết định |
|------------|-----------|--------------|
| Dư ngắn (1-2 tuần) | Giữ inventory, không điều chỉnh production | Supply Chain Manager |
| Dư trung hạn (1-3 tháng) | Giảm production rate, delay supplier PO | Procurement + Planning |
| Dư dài hạn (>3 tháng) | Promotion / giảm giá, giảm stock target | Sales + CFO |

## Công cụ hỗ trợ

**Supply-Demand Gap Analysis** — file excel đối chiếu:
- Demand plan (latest consensus)
- Supply plan (inventory + production + PO in transit)
- Gap = Supply - Demand
- Action: phân bổ nếu gap âm, giảm mua nếu gap dương

## Kết luận hành động

Sau mỗi kỳ S&OP, phải có:
- Gap số (bao nhiêu, SKU nào, khoảng thời gian)
- Quyết định xử lý cụ thể (phân bổ, tăng/giảm production, delay PO)
- Owner rõ ràng cho mỗi action
- Review ở kỳ S&OP sau

Nếu S&OP không có gap resolution, nó chỉ là meeting báo cáo.`,
    type: "article" as const,
    tags: ["S&OP", "Demand Planning", "Supply Planning"],
    authorName: "SCHub.vn",
    readTimeMinutes: 9,
    featured: false,
    publishedAt: { seconds: 1710172800, nanoseconds: 0 },
  },
  {
    id: "15",
    title: "Từ Demand Review đến Executive S&OP: ai làm gì trong từng vòng?",
    slug: "demand-review-den-executive-sop-ai-lam-gi",
    excerpt: "S&OP không phải một cuộc họp mà là bốn vòng. Mỗi vòng có mục tiêu, người tham gia và quyết định riêng. Làm lẫn vòng nào cũng khiến S&OP mất tác dụng.",
    body: `# Từ Demand Review đến Executive S&OP: ai làm gì trong từng vòng?

## Vấn đề thực tế

Nhiều doanh nghiệp gọi một cuộc họp hàng tháng có mặt Sales, Planning, Production, Finance, CEO là "họp S&OP". Nhưng thực tế cuộc họp đó ôm đồm quá nhiều thông tin, không đủ thời gian để ra quyết định, và mọi người về vẫn không biết ai làm gì.

S&OP là một quy trình bốn vòng (phases). Mỗi vòng có đầu vào, đầu ra riêng. Làm đúng vòng nào ra vòng đó.

## Vòng 1: Demand Review

**Mục tiêu**: Chốt một demand plan thống nhất

**Ai tham gia**:
- Sales (chính)
- Marketing
- Planning/SCM (hỗ trợ data)

**Đầu vào**:
- Historical sales data
- Promotion calendar
- Market intelligence
- New product launch plan

**Nội dung chính**:
1. Review sales thực tế vs forecast kỳ trước
2. Cập nhật forecast kỳ tới (baseline + promotional)
3. Ghi nhận giả định (assumption log)
4. Chốt demand plan cho 12-18 tháng

**Đầu ra**: Demand plan (consensus) — chưa cần supply

**Template**: Demand Plan Template — forecast theo customer/SKU/tháng, có ghi assumption và commercial adjustment.

## Vòng 2: Supply Review

**Mục tiêu**: Xây supply plan để đáp ứng demand

**Ai tham gia**:
- Planning/SCM (chính)
- Production
- Procurement
- Warehouse & Logistics

**Đầu vào**:
- Demand plan từ vòng 1
- Inventory status (on-hand, in-transit)
- Production capacity
- Supplier lead time & capacity
- Warehouse capacity

**Nội dung chính**:
1. Run supply plan (MRP hoặc Excel)
2. Check capacity constraints (production, warehouse, supplier)
3. Đề xuất giải pháp (OT, subcontract, delay)
4. Identify supply gaps

**Đầu ra**: Supply plan + Supply-Demand Gap Analysis

**Template**: Supply Plan Template — đối chiếu supply và demand từng SKU, ghi rõ action đang thực hiện.

## Vòng 3: Pre-S&OP (Integrated Reconciliation)

**Mục tiêu**: Cân bằng demand, supply và finance

**Ai tham gia**:
- SCM Lead (chính)
- Sales Manager
- Production Manager
- Finance (cost impact)

**Đầu vào**:
- Demand plan (confirmed)
- Supply plan (feasible)
- Gap analysis
- Financial constraints (budget, cash flow)

**Nội dung chính**:
1. Giải quyết gap không thể đóng ở vòng 1, 2
2. Đề xuất allocation scenarios (if demand > supply)
3. Đề xuất inventory / production adjustment (if demand < supply)
4. Tính financial impact
5. Chuẩn bị recommendation cho Executive

**Đầu ra**: Pre-S&OP pack — summary, gap, recommendation, action items

**Template**: Pre-S&OP Pack — 1-page summary: Demand vs Supply, Gap, Recommended Decision, Financial Impact, Risk.

## Vòng 4: Executive S&OP

**Mục tiêu**: Ra quyết định cuối cùng

**Ai tham gia**:
- CEO (chủ trì)
- CFO
- Sales Director
- Operations Director
- SCM Director (trình bày)

**Đầu vào**:
- Pre-S&OP pack (1-page summary)
- Các vấn đề chưa giải quyết được

**Nội dung chính**:
1. Không trình bày lại số liệu chi tiết — chỉ decisions
2. Phê duyệt các recommendation từ Pre-S&OP
3. Quyết định allocation, budget, capacity đầu tư
4. Approve one-number plan

**Đầu ra**: One-number plan được approve + action items + decision log

**Template**: Executive S&OP Meeting Deck — tối đa 5 slides: Summary, Demand vs Supply, Key Decisions, Financial Impact, Action Log.

## Tóm tắt 4 vòng

| Vòng | Tên | Thời gian | Lead | Đầu ra |
|------|-----|-----------|------|--------|
| 1 | Demand Review | Tuần 1 | Sales | Demand plan |
| 2 | Supply Review | Tuần 1-2 | Planning/SCM | Supply plan + Gap |
| 3 | Pre-S&OP | Tuần 2-3 | SCM Lead | Recommendation pack |
| 4 | Executive S&OP | Tuần 3 | CEO | Approved one-number plan |

## Lưu ý

- **Không bỏ vòng 3**: Nhiều doanh nghiệp nhảy từ Supply Review thẳng lên Executive, dẫn đến Executive phải xử lý quá nhiều chi tiết
- **Không gộp vòng 1 và 2**: Demand Review cần có Sales mindset, Supply Review cần Operations mindset — gộp lại không ai tập trung được
- **Executive không xem số**: Executive S&OP là quyết định, không phải meeting báo cáo

## Kết luận hành động

Bắt đầu bằng lịch 4 vòng rõ ràng: ai, làm gì, khi nào, output là gì. Sau 3 kỳ, doanh nghiệp sẽ thấy khác biệt giữa "họp báo cáo" và "S&OP thực sự".`,
    type: "article" as const,
    tags: ["S&OP", "Governance", "Meeting"],
    authorName: "SCHub.vn",
    readTimeMinutes: 11,
    featured: false,
    publishedAt: { seconds: 1710259200, nanoseconds: 0 },
  },
  {
    id: "16",
    title: "S&OP trong doanh nghiệp sản xuất vs trading: khác gì nhau?",
    slug: "sop-san-xuat-vs-trading-khac-gi",
    excerpt: "S&OP sản xuất bị ràng buộc bởi capacity, batch size, raw material. S&OP trading bị ràng buộc bởi MOQ, inventory aging, cash flow. Mỗi loại cần cách tiếp cận khác.",
    body: `# S&OP trong doanh nghiệp sản xuất vs trading: khác gì nhau?

## Vấn đề thực tế

Nhiều doanh nghiệp tìm template S&OP trên mạng và copy áp dụng, nhưng không phân biệt mình là manufacturing hay trading. Kết quả: supply plan không khả thi vì áp sai constraint.

## S&OP trong doanh nghiệp sản xuất

### Đặc điểm

| Yếu tố | Tác động đến S&OP |
|--------|------------------|
| Capacity cố định | Không thể tăng production overnight |
| Batch size tối thiểu | Nhu cầu nhỏ lẻ không đủ batch → phải chạy stock |
| Raw material lead time | Mua hàng phải tính trước 1-3 tháng |
| Changeover time | Chạy nhiều SKU → mất thời gian chuyển đổi |
| Machine maintenance | Lịch bảo trì ảnh hưởng capacity |

### Quyết định S&OP trong sản xuất

**Demand Review:**
- Demand > capacity → không thể đơn giản tăng production
- Phải quyết định: chạy overtime? Outsourcing? Delay khách nào?

**Supply Review:**
- Constraint chính: Machine hours, labor, raw material availability
- Cần capacity plan (RCCP — Rough Cut Capacity Planning) để kiểm tra

\`\`\`
Available Capacity = (Số máy × Giờ chạy/ngày × Ngày/tháng) × Utilisation %
Required Capacity = Σ (Demand (units) × Run time per unit) + Changeover time
Gap = Available - Required
\`\`\`

**Đầu ra khác biệt:**
- Production plan: lịch sản xuất theo tuần, theo line
- Raw material plan: PO plan cho supplier (3-6 tháng)
- Capacity plan: sử dụng máy, cần OT/subcontract không

### Pain point điển hình

- Sales bán được nhưng nhà máy không đủ capacity
- Raw material không kịp vì supplier lead time dài
- Batch size tối thiểu tạo inventory không cần thiết

## S&OP trong doanh nghiệp trading (phân phối)

### Đặc điểm

| Yếu tố | Tác động đến S&OP |
|--------|------------------|
| Supplier MOQ | Phải mua quantity lớn hơn nhu cầu |
| Inventory aging | Hàng tồn lâu → giảm margin hoặc hủy |
| Cash flow | Mua hàng = chi tiền trước, bán = thu tiền sau |
| 3PL capacity | Phụ thuộc vào kho thuê ngoài |
| Promotion-driven | Biến động demand lớn theo chương trình |

### Quyết định S&OP trong trading

**Demand Review:**
- Demand theo mùa + promotion (không đều như sản xuất)
- Cần phân biệt baseline vs promotional demand

**Supply Review:**
- Constraint chính: Supplier MOQ, 3PL capacity, cash
- Cần cân bằng: mua đủ MOQ nhưng không ôm quá nhiều inventory

\`\`\`
MOQ Units = max(supplier MOQ, (Demand + Safety Stock) × Order Cycles)
Inventory Days = Current Stock / Avg Daily Sales
\`\`\`

**Đầu ra khác biệt:**
- Procurement plan: PO plan theo supplier, tính MOQ
- Inventory plan: target days of inventory, slow-moving SKU review
- Cash flow plan: dòng tiền chi cho mua hàng

### Pain point điển hình

- Mua theo MOQ → tồn quá nhiều → aging → phải giảm giá
- 3PL capacity mùa peak không đủ → phải thuê thêm kho
- Cash flow bóp nghẹt → không dám mua hàng mới

## So sánh trực tiếp

| Tiêu chí | Sản xuất | Trading |
|----------|---------|---------|
| Constraint chính | Capacity, raw material | MOQ, cash flow, 3PL |
| Kỳ hạn planning | Dài hơn (3-12 tháng) | Ngắn hơn (1-6 tháng) |
| Độ phức tạp supply plan | Cao (BOM, routing, machine) | Trung bình (PO + 3PL) |
| Inventory risk | Raw material aging | Finished goods aging |
| Quyết định khó nhất | Phân bổ capacity khi thiếu | Cân bằng MOQ vs inventory days |

## Áp dụng tại doanh nghiệp Việt Nam

- **Sản xuất** thường ở miền Bắc (công nghiệp hỗ trợ). Vấn đề: supplier lead time từ Trung Quốc dài, capacity theo mùa (Tết worker về quê)
- **Trading** tập trung ở TP HCM. Vấn đề: 3PL peak season, MOQ từ supplier lớn (Unilever, P&G, Nestlé) rất cao

## Kết luận hành động

Trước khi triển khai S&OP, xác định doanh nghiệp thuộc loại nào. Đừng copy template từ sản xuất sang trading và ngược lại. Điều chỉnh:
- Constraint set cho supply review
- Kỳ hạn planning
- Quyết định chính trong Executive S&OP`,
    type: "article" as const,
    tags: ["S&OP", "Manufacturing", "Trading"],
    authorName: "SCHub.vn",
    readTimeMinutes: 10,
    featured: false,
    publishedAt: { seconds: 1710345600, nanoseconds: 0 },
  },
]

export const seedBooks = [
  {
    id: "1",
    title: "ABC/XYZ Inventory Analysis Template",
    slug: "abc-xyz-inventory-analysis-template",
    category: "Template Excel",
    status: "Đang phát triển",
    description:
      "Template giúp phân loại SKU theo giá trị và độ biến động nhu cầu, từ đó xác định nhóm hàng cần kiểm soát tồn kho chặt hơn.",
    price: "Sắp công bố",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: true,
    addedAt: { seconds: 1704067200, nanoseconds: 0 },
  },
  {
    id: "2",
    title: "3PL SLA & Cost Evaluation Pack",
    slug: "3pl-sla-cost-evaluation-pack",
    category: "SOP Pack",
    status: "Đang phát triển",
    description:
      "Bộ biểu mẫu giúp đánh giá nhà cung cấp kho thuê/3PL theo SLA, chi phí, độ chính xác tồn kho, xử lý sự cố và năng lực báo cáo.",
    price: "Sắp công bố",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: true,
    addedAt: { seconds: 1703980800, nanoseconds: 0 },
  },
  {
    id: "3",
    title: "Supply Chain KPI Dashboard Starter Pack",
    slug: "supply-chain-kpi-dashboard-starter-pack",
    category: "Dashboard Pack",
    status: "Đang phát triển",
    description:
      "Bộ khung KPI và dashboard starter cho Planning, Procurement, Inventory, Warehouse và Logistics Cost.",
    price: "Sắp công bố",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: true,
    addedAt: { seconds: 1703894400, nanoseconds: 0 },
  },
  {
    id: "4",
    title: "Master Data Audit Checklist",
    slug: "master-data-audit-checklist",
    category: "Checklist Pack",
    status: "Sắp ra mắt",
    description:
      "Checklist rà soát master data trước khi triển khai SAP/WMS, tập trung vào UoM, gross weight, batch rule, shelf-life và location master.",
    price: "Miễn phí",
    ctaLabel: "Nhận checklist",
    featured: false,
    addedAt: { seconds: 1703808000, nanoseconds: 0 },
  },
  {
    id: "5",
    title: "S&OP Calendar & Meeting Pack",
    slug: "sop-calendar-meeting-pack",
    category: "Playbook / eBook",
    status: "Sắp ra mắt",
    description:
      "Bộ khung lịch họp, agenda và nguyên tắc ra quyết định giúp doanh nghiệp bắt đầu S&OP một cách đơn giản.",
    price: "Sắp công bố",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: false,
    addedAt: { seconds: 1703721600, nanoseconds: 0 },
  },
  {
    id: "6",
    title: "30 Công Cụ Quản Trị Supply Chain Thực Chiến",
    slug: "30-cong-cu-quan-tri-supply-chain-thuc-chien",
    category: "Playbook / eBook",
    status: "Đang phát triển",
    description:
      "Mini eBook hệ thống hóa 30 công cụ thực chiến cho Planning, Inventory, Warehouse, Logistics Cost và KPI, giúp đội ngũ Supply Chain áp dụng nhanh vào vận hành doanh nghiệp Việt Nam.",
    price: "199.000 – 399.000 VND",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: true,
    addedAt: { seconds: 1703635200, nanoseconds: 0 },
  },
  {
    id: "7",
    title: "Forecasting Starter Template",
    slug: "forecasting-starter-template",
    category: "Template Excel",
    status: "Đang phát triển",
    description:
      "Template starter cho moving average, weighted moving average, exponential smoothing và forecast error.",
    price: "Sắp công bố",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: false,
    addedAt: { seconds: 1703548800, nanoseconds: 0 },
  },
  {
    id: "8",
    title: "Demand Plan Template",
    slug: "demand-plan-template",
    category: "Template Excel",
    status: "Đang phát triển",
    description:
      "Template giúp ghi nhận demand history, forecast, commercial adjustment, assumption log và consensus demand plan.",
    price: "Sắp công bố",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: false,
    addedAt: { seconds: 1703462400, nanoseconds: 0 },
  },
]

export const seedTools = [
  {
    id: "1",
    name: "ABC/XYZ Calculator",
    slug: "abc-xyz-calculator",
    category: "Inventory",
    status: "Đang phát triển",
    description: "Khung tính nhanh giúp phân loại SKU theo giá trị và biến động nhu cầu để ưu tiên kiểm soát tồn kho.",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: true,
    addedAt: { seconds: 1704067200, nanoseconds: 0 },
  },
  {
    id: "2",
    name: "Safety Stock Calculator",
    slug: "safety-stock-calculator",
    category: "Planning",
    status: "Sắp ra mắt",
    description: "Công cụ starter để ước lượng safety stock theo lead time, độ biến động nhu cầu và service level mục tiêu.",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: true,
    addedAt: { seconds: 1703980800, nanoseconds: 0 },
  },
  {
    id: "3",
    name: "3PL Cost Estimator",
    slug: "3pl-cost-estimator",
    category: "3PL",
    status: "Đang phát triển",
    description: "Bộ khung so sánh chi phí 3PL theo handling, storage, outbound, SLA và các chi phí ẩn thường bị bỏ sót.",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: true,
    addedAt: { seconds: 1703894400, nanoseconds: 0 },
  },
  {
    id: "4",
    name: "Logistics Cost per Ton Calculator",
    slug: "logistics-cost-per-ton-calculator",
    category: "Logistics Cost",
    status: "Sắp ra mắt",
    description: "Starter calculator giúp chuẩn hóa cách nhìn chi phí logistics trên mỗi tấn, mỗi chuyến và mỗi SKU chính.",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: false,
    addedAt: { seconds: 1703808000, nanoseconds: 0 },
  },
  {
    id: "5",
    name: "Warehouse Capacity Calculator",
    slug: "warehouse-capacity-calculator",
    category: "Warehouse",
    status: "Đang phát triển",
    description: "Khung tính dung lượng kho theo pallet position, zone usage, slotting logic và tốc độ quay vòng tồn kho.",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: false,
    addedAt: { seconds: 1703721600, nanoseconds: 0 },
  },
  {
    id: "6",
    name: "Pallet / Container Calculator",
    slug: "pallet-container-calculator",
    category: "Warehouse",
    status: "Sắp ra mắt",
    description: "Công cụ hỗ trợ ước lượng số pallet, container fill rate và phương án xếp hàng phù hợp với quy cách sản phẩm.",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: false,
    addedAt: { seconds: 1703635200, nanoseconds: 0 },
  },
  {
    id: "7",
    name: "Forecast Error Calculator",
    slug: "forecast-error-calculator",
    category: "Forecasting",
    status: "Đang phát triển",
    description: "Công cụ skeleton để tính MAD, MAPE, tracking signal và forecast bias.",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: false,
    addedAt: { seconds: 1703548800, nanoseconds: 0 },
  },
  {
    id: "8",
    name: "Demand Pattern Analyzer",
    slug: "demand-pattern-analyzer",
    category: "Demand Planning",
    status: "Đang phát triển",
    description: "Công cụ skeleton giúp phân biệt trend, seasonality, cycle và random variation.",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: false,
    addedAt: { seconds: 1703462400, nanoseconds: 0 },
  },
  {
    id: "9",
    name: "S&OP Readiness Check",
    slug: "sop-readiness-check",
    category: "S&OP",
    status: "Sắp ra mắt",
    description: "Checklist nhanh để đánh giá mức độ sẵn sàng triển khai S&OP.",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: false,
    addedAt: { seconds: 1703376000, nanoseconds: 0 },
  },
  {
    id: "10",
    name: "Supply Chain Maturity Assessment",
    slug: "supply-chain-maturity-assessment",
    category: "Governance",
    status: "Sắp ra mắt",
    description: "Assessment skeleton dựa trên các cấp độ trưởng thành Supply Chain, dùng để xác định current state và gap.",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: false,
    addedAt: { seconds: 1703289600, nanoseconds: 0 },
  },
]

export const checklist50 = [
  { id: 1, category: "Planning", question: "Doanh nghiệp có kế hoạch chiến lược SCM dài hạn (3-5 năm) không?", weight: 2 },
  { id: 2, category: "Planning", question: "Có quy trình lập kế hoạch năm/tháng/tuần không?", weight: 2 },
  { id: 3, category: "Planning", question: "Có dự báo cầu (demand forecasting) không?", weight: 3 },
  { id: 4, category: "Planning", question: "Có quy trình S&OP (Sales & Operations Planning) không?", weight: 2 },
  { id: 5, category: "Planning", question: "Có hệ thống MRP (Material Requirements Planning) không?", weight: 2 },
  { id: 6, category: "Planning", question: "Có quản lý capacity planning không?", weight: 2 },
  { id: 7, category: "Planning", question: "Có benchmark với đối thủ cạnh tranh không?", weight: 1 },
  { id: 8, category: "Planning", question: "Có KPI cho bộ phận Planning không?", weight: 2 },
  { id: 9, category: "Procurement", question: "Có danh sách nhà cung cấp (supplier list) không?", weight: 2 },
  { id: 10, category: "Procurement", question: "Có quy trình đánh giá nhà cung cấp (supplier evaluation) không?", weight: 2 },
  { id: 11, category: "Procurement", question: "Có supplier scorecard không?", weight: 2 },
  { id: 12, category: "Procurement", question: "Có theo dõi lead time của các NCC chính không?", weight: 2 },
  { id: 13, category: "Procurement", question: "Có quản lý rủi ro nhà cung cấp (supplier risk) không?", weight: 3 },
  { id: 14, category: "Procurement", question: "Có chính sách mua hàng (procurement policy) không?", weight: 2 },
  { id: 15, category: "Procurement", question: "Có quản lý hợp đồng (contract management) không?", weight: 2 },
  { id: 16, category: "Procurement", question: "Có đa dạng hóa NCC (supplier diversification) không?", weight: 1 },
  { id: 17, category: "Inventory", question: "Có hệ thống theo dõi tồn kho (inventory tracking) không?", weight: 3 },
  { id: 18, category: "Inventory", question: "Có định mức tồn kho (stock norm) không?", weight: 2 },
  { id: 19, category: "Inventory", question: "Có quy trình kiểm kê định kỳ (physical inventory) không?", weight: 2 },
  { id: 20, category: "Inventory", question: "Có áp dụng FIFO/FEFO không?", weight: 2 },
  { id: 21, category: "Inventory", question: "Có quản lý hàng tồn đọng (slow moving) không?", weight: 2 },
  { id: 22, category: "Inventory", question: "Có chính sách đặt hàng (reorder policy) không?", weight: 2 },
  { id: 23, category: "Inventory", question: "Có phân tích ABC/XYZ cho hàng tồn kho không?", weight: 2 },
  { id: 24, category: "Inventory", question: "Có tối ưu batch size/MOQ không?", weight: 2 },
  { id: 25, category: "Warehouse & Logistics", question: "Có hệ thống WMS không?", weight: 3 },
  { id: 26, category: "Warehouse & Logistics", question: "Có quy trình nhập xuất kho (SOP) không?", weight: 2 },
  { id: 27, category: "Warehouse & Logistics", question: "Có sắp xếp kho theo vùng (zone) không?", weight: 2 },
  { id: 28, category: "Warehouse & Logistics", question: "Có quản lý vị trí kho (slotting) không?", weight: 2 },
  { id: 29, category: "Warehouse & Logistics", question: "Có theo dõi Pick/Pack/Ship không?", weight: 2 },
  { id: 30, category: "Warehouse & Logistics", question: "Có đóng gói chuẩn (standard packaging) không?", weight: 1 },
  { id: 31, category: "Warehouse & Logistics", question: "Có quản lý return/hàng lỗi không?", weight: 2 },
  { id: 32, category: "Warehouse & Logistics", question: "Có đối tác 3PL không?", weight: 2 },
  { id: 33, category: "Warehouse & Logistics", question: "Có theo dõi on-time delivery không?", weight: 2 },
  { id: 34, category: "Warehouse & Logistics", question: "Có tối ưu lộ trình giao hàng không?", weight: 2 },
  { id: 35, category: "Data, KPI & Digital", question: "Có dashboard SCM không?", weight: 3 },
  { id: 36, category: "Data, KPI & Digital", question: "Có bộ KPI cho SCM không?", weight: 2 },
  { id: 37, category: "Data, KPI & Digital", question: "Có báo cáo tồn kho hàng ngày không?", weight: 2 },
  { id: 38, category: "Data, KPI & Digital", question: "Có báo cáo logistics cost hàng tháng không?", weight: 2 },
  { id: 39, category: "Data, KPI & Digital", question: "Có hệ thống ERP/WMS không?", weight: 3 },
  { id: 40, category: "Data, KPI & Digital", question: "Có tích hợp dữ liệu giữa các phần mềm không?", weight: 2 },
  { id: 41, category: "Data, KPI & Digital", question: "Có sử dụng AI/Automation cho SCM không?", weight: 1 },
  { id: 42, category: "Data, KPI & Digital", question: "Có quy trình backup dữ liệu không?", weight: 2 },
  { id: 43, category: "Data, KPI & Digital", question: "Có quy trình bảo mật dữ liệu không?", weight: 2 },
  { id: 44, category: "Data, KPI & Digital", question: "Có quy trình báo cáo tự động không?", weight: 1 },
  { id: 45, category: "People, Process & Governance", question: "Có job description cho các vị trí SCM không?", weight: 2 },
  { id: 46, category: "People, Process & Governance", question: "Có đào tạo SCM định kỳ cho nhân viên không?", weight: 2 },
  { id: 47, category: "People, Process & Governance", question: "Có KPIs cho nhân viên SCM không?", weight: 2 },
  { id: 48, category: "People, Process & Governance", question: "Có SOP cho các quy trình SCM chính không?", weight: 2 },
  { id: 49, category: "People, Process & Governance", question: "Có RACI matrix cho các phòng ban liên quan không?", weight: 2 },
  { id: 50, category: "People, Process & Governance", question: "Có quy trình audit SCM định kỳ không?", weight: 2 },
  { id: 51, category: "People, Process & Governance", question: "Có quản lý chuỗi cung ứng bền vững (sustainability) không?", weight: 1 },
  { id: 52, category: "People, Process & Governance", question: "Có compliance An toàn Lao động cho kho không?", weight: 2 },
]
