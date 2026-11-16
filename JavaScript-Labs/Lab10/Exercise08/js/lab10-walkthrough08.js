/* Exercise 10.8 – Complex animations
   Bước 2: .animate({left: '495px'})
   Bước 3: animate 3 thuộc tính cùng lúc
   Bước 4 (bản cuối): chuỗi 3 animation, cái sau chạy khi cái trước kết thúc */
$(function () {
   $("button").click(function () {
      $("#box")
         .animate({
            left: '495px',
            opacity: '1',
            height: '50px'
         })
         .animate({ top: '400px', opacity: '0.2' })
         .animate({ height: '200px' }, 2000);
   });
});
