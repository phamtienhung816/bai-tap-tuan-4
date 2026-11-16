/* Exercise 10.10 – jqXHR handling: done() / fail() / always() */
var SERVICE_URL = "http://www.randyconnolly.com/funwebdev/services/travel/cities.php";
var LOCAL_URL = "../assets/data/cities.json";

function loadCities(url) {
   $('.animLoading').show();
   $("div#results ul").empty();
   $("#status").text("Đang gửi GET request tới: " + url);

   $.get(url, null, null, "json")
      // done will happen first
      .done(function (data, textStatus, jqXHR) {
         $.each(data, function (index, value) {
            var li = $('<li/>').html(value.name);
            li.appendTo("div#results ul");
         });
         $("#status").text("done(): " + data.length + " thành phố – HTTP " + jqXHR.status + " " + textStatus);
      })
      // if error occurs will execute, but before always()
      .fail(function (xhr, status, error) {
         alert("failed loading data - status=" + status + " error=" + error);
         $("#status").text("fail(): status=" + status + ", HTTP " + xhr.status + ", error=" + error);
      })
      // always should be last
      .always(function (data) {
         $('.animLoading').fadeOut("slow");
      });
}

$(function () {
   $('.animLoading').hide();

   $("#consume").click(function () {
      // URL gốc chỉ có http:// nên bị chặn trên GitHub Pages (https, mixed content)
      // -> dùng bản sao dữ liệu JSON trong repository
      loadCities(LOCAL_URL);
   });

   // thử gọi dịch vụ gốc trong tài liệu (thường sẽ vào fail())
   $("#consumeOriginal").click(function () {
      loadCities(SERVICE_URL);
   });

   // nút thử lỗi: gọi URL không tồn tại để quan sát fail()
   $("#consumeError").click(function () {
      loadCities("../assets/data/khong-ton-tai.json");
   });
});
