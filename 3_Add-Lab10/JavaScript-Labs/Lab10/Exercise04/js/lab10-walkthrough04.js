/* Exercise 10.4 – jQuery listeners
   Bước 2: $(".panel").click(...)        (phương thức tắt)
   Bước 3: $(".panel").on("click", ...)  (on() dùng được cho mọi sự kiện)
   Bước 4: bọc trong $(function(){...})  (document ready)
   Bước 5 (bản cuối): nối chuỗi nhiều handler, click thì tắt mousemove bằng off() */
$(function () {
   // chaining handlers
   $(".panel")
      .on("mousemove", function (e) {
         $("#message").html("x=" + e.pageX + " y=" + e.pageY);
      })
      .on("mouseleave", function (e) {
         $("#message").html("goodbye!");
      })
      .on("click", function () {
         $("#message").html("stopped move reporting");
         $(".panel").off("mousemove");
      });
});
