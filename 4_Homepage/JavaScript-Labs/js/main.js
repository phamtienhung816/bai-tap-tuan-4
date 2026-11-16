/* =========================================================
   JavaScript Labs – trang chủ portfolio
   Phạm Tiến Hưng – 31241025521
   Dùng DOM thuần + sự kiện (kiến thức Lab 08, Lab 09)
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

   /* 1. Menu trên điện thoại: bấm nút ☰ để mở / đóng */
   var toggle = document.querySelector(".menu-toggle");
   var menu = document.querySelector(".menu");
   if (toggle && menu) {
      toggle.addEventListener("click", function () {
         menu.classList.toggle("open");
      });
      menu.querySelectorAll("a").forEach(function (a) {
         a.addEventListener("click", function () { menu.classList.remove("open"); });
      });
   }

   /* 2. Ảnh đại diện: nếu chưa có file images/avatar.jpg thì hiện chữ viết tắt */
   var avatarImg = document.querySelector(".avatar img");
   if (avatarImg) {
      avatarImg.addEventListener("error", function () {
         avatarImg.remove();
      });
   }

   /* 3. Dòng code "gõ chữ" ở phần hero – dùng mảng, chuỗi và setTimeout */
   var typed = document.getElementById("typed-text");
   if (typed) {
      var lines = [
         'const sv = { ten: "Phạm Tiến Hưng", mssv: "31241025521" };',
         'document.querySelector("#cart").textContent = total;',
         '$("#product").fadeIn(400);',
         '$.get("cities.json").done(render).fail(showError);'
      ];
      var lineIndex = 0, charIndex = 0, deleting = false;
      function tick() {
         var line = lines[lineIndex];
         if (!deleting) {
            charIndex++;
            if (charIndex > line.length) { deleting = true; setTimeout(tick, 1400); return; }
         } else {
            charIndex--;
            if (charIndex === 0) { deleting = false; lineIndex = (lineIndex + 1) % lines.length; }
         }
         typed.textContent = line.substring(0, charIndex);
         setTimeout(tick, deleting ? 18 : 45);
      }
      tick();
   }

   /* 4. Tabs "Kiến thức đã học" */
   var tabButtons = document.querySelectorAll(".tab-btn");
   tabButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
         tabButtons.forEach(function (b) { b.classList.remove("active"); b.setAttribute("aria-selected", "false"); });
         document.querySelectorAll(".tab-panel").forEach(function (p) { p.classList.remove("active"); });
         btn.classList.add("active");
         btn.setAttribute("aria-selected", "true");
         document.getElementById(btn.dataset.target).classList.add("active");
      });
   });

   /* 5. Hiện dần các khối khi cuộn tới (IntersectionObserver) */
   var reveals = document.querySelectorAll(".reveal");
   if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
         entries.forEach(function (entry) {
            if (entry.isIntersecting) { entry.target.classList.add("show"); io.unobserve(entry.target); }
         });
      }, { threshold: 0.12 });
      reveals.forEach(function (el) { io.observe(el); });
   } else {
      reveals.forEach(function (el) { el.classList.add("show"); });
   }
   // dự phòng: sau 2 giây hiện hết các khối (tránh trường hợp observer không kích hoạt)
   setTimeout(function () { reveals.forEach(function (el) { el.classList.add("show"); }); }, 2000);

   /* 6. Đánh dấu mục menu đang xem */
   var sections = document.querySelectorAll("main section[id]");
   var links = document.querySelectorAll(".menu a[href^='#']");
   window.addEventListener("scroll", function () {
      var current = "";
      sections.forEach(function (s) {
         if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      links.forEach(function (a) {
         a.classList.toggle("active", a.getAttribute("href") === "#" + current);
      });
   });

   /* 7. Demo giỏ hàng mini: ví dụ vận dụng vào TMĐT
         (đối tượng, hàm, sự kiện click, cập nhật DOM) */
   var cart = {
      price: 159000,
      quantity: 1,
      total: function () { return this.price * this.quantity; }
   };
   var qtyEl = document.getElementById("qty");
   var totalEl = document.getElementById("cart-total");
   function renderCart() {
      if (!qtyEl) return;
      qtyEl.textContent = cart.quantity;
      totalEl.textContent = cart.total().toLocaleString("vi-VN") + " ₫";
   }
   var plus = document.getElementById("qty-plus");
   var minus = document.getElementById("qty-minus");
   if (plus && minus) {
      plus.addEventListener("click", function () { cart.quantity++; renderCart(); });
      minus.addEventListener("click", function () {
         if (cart.quantity > 1) cart.quantity--;
         renderCart();
      });
   }
   renderCart();

   /* 8. Năm hiện tại ở footer (đối tượng Date) */
   var year = document.getElementById("year");
   if (year) year.textContent = new Date().getFullYear();
});
