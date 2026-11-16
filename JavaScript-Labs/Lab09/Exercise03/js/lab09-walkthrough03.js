/* Exercise 9.3 – Modifying the DOM */

// tạo <p> mới chứa text node rồi gắn vào div#first
var first = document.getElementById("first");
var text = document.createTextNode("this is programmatically created");
var p = document.createElement("p");
p.appendChild(text);
first.appendChild(p);

// xóa phần tử <li id="deleteThisOne"> khỏi danh sách
var icons = document.getElementById("iconList");
icons.removeChild(document.getElementById("deleteThisOne"));
