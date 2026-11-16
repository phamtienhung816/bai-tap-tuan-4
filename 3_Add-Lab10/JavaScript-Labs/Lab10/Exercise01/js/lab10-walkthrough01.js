/* Exercise 10.1 – Set up jQuery
   Kiểm tra jQuery đã được tải (từ CDN hoặc từ file dự phòng ../assets/js) */
if (window.jQuery) {
   var source = document.querySelector('script[src*="assets/js/jquery"]') ? "file cục bộ (fallback)" : "CDN code.jquery.com";
   $('#pageTitle').html("jQuery " + $.fn.jquery + " đã sẵn sàng");
   $('#msgArea').val("jQuery version: " + $.fn.jquery + "\nNguồn tải: " + source);
   console.log("jQuery loaded:", $.fn.jquery, "-", source);
} else {
   document.getElementById("msgArea").value = "jQuery chưa được tải!";
}
