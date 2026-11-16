# JavaScript Labs – Phạm Tiến Hưng

Bài thực hành cá nhân **Chương 4: JavaScript**, học phần *Phát triển ứng dụng TMĐT*.

| Thông tin | |
|---|---|
| Họ và tên | Phạm Tiến Hưng |
| Mã số sinh viên | 31241025521 |
| Lớp học phần | 26C1INF50902701 |
| GitHub | https://github.com/phamtienhung816 |
| Repository | https://github.com/phamtienhung816/bai-tap-css-tuan-3 |
| **GitHub Pages** | **https://phamtienhung816.github.io/bai-tap-css-tuan-3/JavaScript-Labs/** |

## Mục tiêu

Hoàn thành đầy đủ các Exercise của 03 bài Lab, qua đó dùng JavaScript để thêm tương tác cho trang web:

- **Lab 08 – JavaScript 1: Language Foundations**: cú pháp, cách nhúng script, Console, String/Date/Math, mảng, hàm, đối tượng.
- **Lab 09 – JavaScript 2: DOM and Events**: chọn và thay đổi phần tử, tạo/xóa node, xử lý sự kiện, load event, debug, form và kiểm tra dữ liệu.
- **Lab 10 – JavaScript 3: jQuery**: cài jQuery, selectors, listeners, chèn phần tử, hiệu ứng, animate, GET request và jqXHR.

## Truy cập nhanh

| Trang | Đường dẫn |
|---|---|
| Trang chủ | https://phamtienhung816.github.io/bai-tap-css-tuan-3/JavaScript-Labs/ |
| Lab 08 | https://phamtienhung816.github.io/bai-tap-css-tuan-3/JavaScript-Labs/Lab08/ |
| Lab 09 | https://phamtienhung816.github.io/bai-tap-css-tuan-3/JavaScript-Labs/Lab09/ |
| Lab 10 | https://phamtienhung816.github.io/bai-tap-css-tuan-3/JavaScript-Labs/Lab10/ |

Mỗi trang Lab liệt kê các Exercise kèm nút **Mở bài** (chạy trực tiếp) và **Xem code** (mở thư mục mã nguồn trên GitHub). Trong mỗi trang Exercise có nút nổi góc phải dưới để quay về danh sách Lab.

## Cấu trúc thư mục

```
JavaScript-Labs/
├── index.html              # Trang chủ portfolio: thông tin cá nhân, giới thiệu, liên kết, kiến thức, tự đánh giá
├── README.md
├── css/style.css           # Giao diện trang chủ và các trang danh sách Lab
├── js/main.js              # Menu mobile, tabs, hiệu ứng cuộn, demo giỏ hàng
├── images/avatar.jpg
├── Lab08/
│   ├── index.html          # Danh sách Exercise 8.1 – 8.11 + bài tập cuối Lab
│   ├── assets/             # css, ảnh travel, cờ quốc gia dùng chung
│   ├── Exercise01/ … Exercise11/   # Exercise 8.1 – 8.11
│   └── Exercise12/         # Bài tập cuối Lab: Travel Posts dựng bằng hàm
├── Lab09/
│   ├── index.html          # Danh sách Exercise 9.1 – 9.8
│   ├── assets/             # css, ảnh dùng chung
│   └── Exercise01/ … Exercise08/
└── Lab10/
    ├── index.html          # Danh sách Exercise 10.1 – 10.10
    ├── assets/             # css, ảnh, js/jquery-3.1.1.min.js (dự phòng), data/cities.json
    └── Exercise01/ … Exercise10/
```

Mỗi thư mục `ExerciseNN/` gồm `index.html` và thư mục `js/` chứa file JavaScript của bài đó (tên file giữ theo tài liệu, ví dụ `lab09-walkthrough04.js`).

## Nội dung từng Lab

### Lab 08
| Thư mục | Exercise | Nội dung |
|---|---|---|
| Exercise01 | 8.1 | Bật/tắt JavaScript, thông báo enabled/disabled |
| Exercise02 | 8.2 | Script nhúng trong `<head>`, alert |
| Exercise03 | 8.3 | File JavaScript ngoài `hello.js` |
| Exercise04 | 8.4 | `<noscript>` |
| Exercise05 | 8.5 | Browser Console, bản lỗi `doccumment` (`error-demo.html`), console.log/warn/error |
| Exercise06 | 8.6 | String object vs literal, Date, Math |
| Exercise07 | 8.7 | Mảng, push/unshift, bảng lịch 30 ngày |
| Exercise08 | 8.8 | Hàm `outputBox()`, phạm vi biến |
| Exercise09 | 8.9 | Hàm như đối tượng, hàm ẩn danh làm tham số |
| Exercise10 | 8.10 | Tạo object: `new Object()`, `{}`, literal, constructor |
| Exercise11 | 8.11 | Mảng object, ký pháp ngoặc vuông, `for..in` |
| Exercise12 | Exercise | Trang Travel Posts tạo bằng hàm từ `travel-data.js` |

### Lab 09
| Thư mục | Exercise | Nội dung |
|---|---|---|
| Exercise01 | 9.1 | Chọn phần tử DOM, innerHTML/innerText, attribute, style |
| Exercise02 | 9.2 | Quan hệ node: firstChild, nextSibling, parentNode, childNodes |
| Exercise03 | 9.3 | createElement, appendChild, removeChild |
| Exercise04 | 9.4 | click, mouseover, mouseout, setTimeout + CSS transition |
| Exercise05 | 9.5 | Sự kiện load (kèm bản lỗi `error-demo.html`) |
| Exercise06 | 9.6 | Debug sự kiện với breakpoint |
| Exercise07 | 9.7 | focus/blur trong form |
| Exercise08 | 9.8 | Kiểm tra form, preventDefault, hiển thị lỗi |

### Lab 10
| Thư mục | Exercise | Nội dung |
|---|---|---|
| Exercise01 | 10.1 | Cài jQuery qua CDN + fallback |
| Exercise02 | 10.2 | Basic selectors |
| Exercise03 | 10.3 | Advanced selectors |
| Exercise04 | 10.4 | Listeners: on, off, document ready |
| Exercise05 | 10.5 | Chèn phần tử DOM (có nút thử từng phương thức) |
| Exercise06 | 10.6 | fade / slide |
| Exercise07 | 10.7 | Popup ảnh lớn theo chuột |
| Exercise08 | 10.8 | Chuỗi `animate()` |
| Exercise09 | 10.9 | `$.get()` + `$.each()` |
| Exercise10 | 10.10 | jqXHR: done / fail / always |

## Ghi chú kỹ thuật

- Các thư viện được tải qua **HTTPS** (Bootstrap 3.3.5 và Font Awesome 4.4.0 từ jsDelivr, jQuery 3.1.1 từ code.jquery.com) để không bị chặn trên GitHub Pages. jQuery có thêm bản dự phòng `Lab10/assets/js/jquery-3.1.1.min.js`.
- Dịch vụ `http://www.randyconnolly.com/funwebdev/services/travel/cities.php` trong tài liệu chỉ chạy qua HTTP, nên trên GitHub Pages (HTTPS) trình duyệt chặn (mixed content). Exercise 10.9 thử dịch vụ gốc rồi chuyển sang `Lab10/assets/data/cities.json` nếu lỗi; Exercise 10.10 có thêm nút gọi URL sai để minh họa `fail()`.
- Một vài bài cố ý giữ `alert()` và `document.write()` vì đó là nội dung của tài liệu Lab.

## Chạy trên máy

Mở thư mục `JavaScript-Labs` bằng VS Code → chuột phải `index.html` → **Open with Live Server** (để các GET request đọc file JSON chạy được).
