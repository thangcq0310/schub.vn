# Cấu hình Firebase cho SCHub.vn

Website dùng 3 dịch vụ của Firebase (project `schubvn-93939461-d648d`):

| Dịch vụ | Dùng cho |
| --- | --- |
| Firestore | Bài blog đăng từ `/admin/blog` (collection `articles`) và thông tin khách để lại qua form Checklist / Tư vấn (collection `leads`) |
| Authentication | Đăng nhập trang quản trị bằng tài khoản Google |
| Hosting | Chạy website, tự deploy khi có commit mới trên `main` |

Các bước dưới đây chỉ cần làm **một lần**.

## 1. Tạo Firestore

Firebase Console → **Build → Firestore Database → Create database**

- Chọn **Production mode**.
- Vị trí: `asia-southeast1 (Singapore)`. Không đổi được sau khi tạo.

## 2. Bật đăng nhập Google

1. **Build → Authentication → Get started → Sign-in method → Google → Enable → Save**.
2. **Authentication → Settings → Authorized domains**: thêm `schub.vn` và `www.schub.vn` (tên miền đang chạy website). Thiếu bước này thì nút "Đăng nhập bằng Google" sẽ báo lỗi `auth/unauthorized-domain`.

## 3. Đưa Security Rules lên Firestore

File `firestore.rules` quy định ai được đọc/ghi dữ liệu:

- Ai cũng đọc được bài blog. Chỉ email admin được đăng, sửa, xoá.
- Ai cũng gửi được form. Chỉ email admin xem được danh sách.

Cách dễ nhất: **Firestore Database → Rules**, xoá nội dung cũ, dán toàn bộ file `firestore.rules`, bấm **Publish**.

Hoặc dùng dòng lệnh:

```bash
npx firebase-tools login
npx firebase-tools deploy --only firestore:rules
```

GitHub Actions chỉ deploy website, **không** deploy rules. Mỗi lần sửa `firestore.rules` cần làm lại bước này.

> Đổi hoặc thêm email admin: sửa danh sách trong `isAdmin()` ở `firestore.rules` **và** `ADMIN_EMAILS` trong `src/lib/auth.ts`, rồi làm lại bước 3.

## 4. Khai báo config web

Firebase Console → **Project settings → General → Your apps**. Nếu chưa có Web app thì bấm biểu tượng `</>` để tạo. Trong phần **SDK setup and configuration → Config** có 6 giá trị cần dùng.

**Trên GitHub** (để bản deploy dùng được Firestore): repo → **Settings → Secrets and variables → Actions → tab Variables → New repository variable**, tạo 6 biến:

| Tên biến | Lấy từ config |
| --- | --- |
| `VITE_FIREBASE_API_KEY` | `apiKey` |
| `VITE_FIREBASE_AUTH_DOMAIN` | `authDomain` |
| `VITE_FIREBASE_PROJECT_ID` | `projectId` |
| `VITE_FIREBASE_STORAGE_BUCKET` | `storageBucket` |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | `messagingSenderId` |
| `VITE_FIREBASE_APP_ID` | `appId` |

Thiếu các biến này thì bước deploy sẽ dừng với thông báo `Missing VITE_FIREBASE_* repository variables`, để tránh đưa lên một website không lưu được form.

**Trên máy** (khi chạy `npm run dev`): copy `.env.example` thành `.env` rồi điền 6 giá trị trên.

## 5. Cấp quyền deploy cho GitHub Actions

Chạy trên máy, trong thư mục repo:

```bash
npx firebase-tools init hosting:github
```

- Nhập repo `thangcq0310/schub.vn` khi được hỏi. Lệnh sẽ tự tạo service account và lưu secret `FIREBASE_SERVICE_ACCOUNT_SCHUBVN_93939461_D648D` vào GitHub.
- Trả lời **No** cho câu hỏi về build script và tự động deploy khi merge PR.
- Nếu lệnh tạo thêm file `firebase-hosting-*.yml` trong `.github/workflows/` thì xoá đi. Việc deploy đã có `ci.yml` lo.

Xong bước này, mỗi lần push lên `main`, GitHub Actions sẽ kiểm tra code, build rồi deploy. Xem kết quả ở tab **Actions** của repo.

## 6. Dùng trang quản trị

- Vào `https://schub.vn/admin/blog` → **Đăng nhập bằng Google** bằng email admin.
- Nếu trước đây từng đăng bài khi blog còn lưu trên trình duyệt, trang sẽ hiện khung **"Đẩy lên Firestore"**. Bấm để đăng các bài đó chính thức (phải dùng đúng trình duyệt đã viết bài).
- Tab **Khách để lại thông tin** liệt kê người điền form Checklist và Tư vấn. Website **không tự gửi email** cho admin khi có người điền form, nên cần vào xem định kỳ.

## Chạy thử trên máy với Firebase Emulator (không đụng dữ liệu thật)

Cần Java 11 trở lên.

```bash
# Terminal 1
npx firebase-tools emulators:start --project demo-schub

# Terminal 2
VITE_USE_EMULATORS=true VITE_FIREBASE_PROJECT_ID=demo-schub npm run dev
```

Khi đăng nhập admin, emulator mở một cửa sổ Google giả. Nhập email admin ở trên để vào trang quản trị.
