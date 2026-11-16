/* Exercise 8.7 – Arrays */
var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");
// document.write(daysOfWeek + "<br>");

daysOfWeek.push("Sat");          // thêm vào cuối mảng
// document.write(daysOfWeek + "<br/>");

daysOfWeek.unshift("Sun");       // thêm vào đầu mảng
// document.write(daysOfWeek + "<br/>");

var i, day;
document.write("<table border=1>");

// hàng tiêu đề: tên các ngày, tên dài hơn 3 ký tự được in nghiêng màu đỏ
document.write("<tr>");
for (i = 0; i < daysOfWeek.length; i++) {
   if (daysOfWeek[i].length < 4)
      day = daysOfWeek[i];
   else
      day = "<em>" + daysOfWeek[i] + "</em>";
   document.write("<th>" + day + "</th>");
}
document.write("</tr>");

// Bước 8: in các ngày 1 -> 30, tháng bắt đầu vào Chủ nhật
var daysInMonth = 30;
var dayNumber = 1;
while (dayNumber <= daysInMonth) {
   document.write("<tr>");
   for (i = 0; i < daysOfWeek.length; i++) {
      if (dayNumber <= daysInMonth) {
         document.write("<td>" + dayNumber + "</td>");
      } else {
         document.write("<td></td>");   // ô trống cuối tháng
      }
      dayNumber++;
   }
   document.write("</tr>");
}
document.write("</table>");
