/* Exercise 9.5 – bước 2–3: phiên bản CHƯA dùng sự kiện load.
   Script nằm trong <head> nên chạy trước khi div1 tồn tại -> lỗi trong Console. */
var boxClass = 'movingDiv';
function outputBox(num) {
   var box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}
var divToGet = document.getElementById("div1");
alert(divToGet.innerHTML);
