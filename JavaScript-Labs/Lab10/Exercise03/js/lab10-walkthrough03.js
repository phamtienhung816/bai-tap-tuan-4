/* Exercise 10.3 – Advanced selectors */

// Bước 2–3: chọn mọi ô password (đã comment lại theo hướng dẫn)
// $(':password').css('background-color', 'yellow');

// Bước 4: mỗi phần tử con thứ 4n trong form
$('form :nth-child(4n)').css('background-color', 'yellow');

// Bước 5: các <label> có chứa chữ "word"
$('label:contains("word")').css("color", "black");
