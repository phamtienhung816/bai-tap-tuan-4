/* Exercise 10.2 – Basic selectors */

// chọn textarea theo id và đặt giá trị
var msg = $('#msgArea');
msg.val("here is some new text");

// html(): đọc / ghi nội dung HTML
$('#first').html("new Title");
// ghi chú: dòng trên thay toàn bộ nội dung #first (kể cả textarea) theo đúng tài liệu Lab

// attr(): đọc / ghi thuộc tính
$('#msgArea').val("My class is " + $('#msgArea').attr("class"));

// css() áp dụng cho cả tập phần tử, không cần vòng lặp
var buttons = $('button');
buttons.css('background-color', 'red');

var temp = $('body');
temp.css("background-color", "ivory");

// addClass() – nối chuỗi trực tiếp vào bộ chọn
$('.center-icons').addClass('selected');
