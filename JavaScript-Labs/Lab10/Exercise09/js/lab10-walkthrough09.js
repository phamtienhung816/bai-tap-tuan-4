/* Exercise 10.9 – GET requests
   URL gốc của tài liệu dùng http://. GitHub Pages chạy https:// nên trình duyệt
   chặn yêu cầu http (mixed content). Vì vậy code thử URL gốc trước, nếu không
   được thì đọc bản sao dữ liệu JSON đặt trong repository (../assets/data/cities.json). */
var SERVICE_URL = "http://www.randyconnolly.com/funwebdev/services/travel/cities.php";
var LOCAL_URL = "../assets/data/cities.json";

$(function () {
   $("#consume").click(function () {
      $("#results").html("<ul></ul>");

      // Bước 3–5: $.get(url, callback) + kiểm tra status + duyệt dữ liệu bằng $.each()
      function showCities(data, status) {
         if (status == "success") {
            $.each(data, function (index, value) {
               var li = $('<li/>').html(value.name);
               li.appendTo("div#results ul");
            });
         }
      }

      var url = (location.protocol == "https:") ? LOCAL_URL : SERVICE_URL;
      $.get(url, function (data, status) {
         showCities(data, status);
         $("#source").text("Nguồn dữ liệu: " + url);
      }, "json").fail(function () {
         // dịch vụ gốc không truy cập được -> dùng dữ liệu cục bộ
         $.get(LOCAL_URL, function (data, status) {
            showCities(data, status);
            $("#source").text("Nguồn dữ liệu: " + LOCAL_URL + " (dự phòng)");
         }, "json");
      });
   });
});
