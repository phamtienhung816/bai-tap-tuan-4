/* Exercise 9.2 – DOM family relations
   Bước 2–5 gõ trong Console:
     document.getElementById("first")
     document.getElementById("first").firstChild              -> #text (khoảng trắng)
     document.getElementById("first").firstChild.nextSibling  -> <h1>
     document.getElementById("first").parentNode              -> div.container  */

var stories = document.getElementById("stories");
for (var i = 0; i < stories.childNodes.length; i++) {
   var node = stories.childNodes[i];
   console.log("child " + i + " =" + node + " nodeType=" + node.nodeType);

   // Bước 7: chỉ đổi màu nền các node phần tử (nodeType 1), bỏ qua text node (nodeType 3)
   if (node.nodeType == 1) {
      node.style.backgroundColor = "#d9edf7";
   }
}
