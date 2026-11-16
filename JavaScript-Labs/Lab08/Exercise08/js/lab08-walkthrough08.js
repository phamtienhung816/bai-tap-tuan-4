// define functions in this file

// this variable has global scope
var boxClass = 'movingDiv';

function outputBox(num) {
   // Bước 10: bỏ từ khóa var -> box trở thành biến toàn cục (global)
   // (nếu viết "var box = ..." thì console.log(box) bên ngoài sẽ báo lỗi
   //  "box is not defined" vì box chỉ có phạm vi trong hàm)
   box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}
