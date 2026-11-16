
// this variable has global scope
var boxClass = 'movingDiv';

function outputBox(num) {
   var box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}

/* Exercise 9.6 – Debugging events
   Mở DevTools > Sources, đặt breakpoint tại dòng alert(...) để xem biến e và e.target */
window.addEventListener("load", function () {
   var divs = document.querySelectorAll(".movingDiv");
   for (var i = 0; i < divs.length; i++) {
      divs[i].addEventListener("mouseover", function (e) {
         alert("triggered by " + e.target.id);
      });
   }
});
