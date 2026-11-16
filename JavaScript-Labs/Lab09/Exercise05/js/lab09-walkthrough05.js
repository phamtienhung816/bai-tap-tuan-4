
// this variable has global scope
var boxClass = 'movingDiv';

function outputBox(num) {
   var box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}

/* Exercise 9.5 – Responding to load events
   Bước 2 (lỗi): script trong <head> chạy trước khi DOM được tạo
      var divToGet = document.getElementById("div1");
      alert(divToGet.innerHTML);   // TypeError: Cannot read properties of null
   Bước 4 (sửa): đợi sự kiện load rồi mới truy cập DOM */
window.addEventListener("load", function () {
   var divToGet = document.getElementById("div1");
   alert(divToGet.innerHTML);
});
