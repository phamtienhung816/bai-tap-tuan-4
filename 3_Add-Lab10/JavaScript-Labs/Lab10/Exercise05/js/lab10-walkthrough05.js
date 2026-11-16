/* Exercise 10.5 – Inserting DOM elements */
$(function () {
   // create a new DOM element
   var img = $('<img src="../assets/images/art/thumbs/13030.jpg" >');
   var panel = $('.panel');

   // Bước 8 (bản cuối của tài liệu): chèn ảnh trước panel
   img.insertBefore(panel);

   /* Các bước 2–7 đã thử:
      panel.after(img);   panel.before(img);   panel.append(img);
      panel.prepend(img); img.appendTo(panel); img.prependTo(panel); */

   // Phần mở rộng để minh họa: bấm nút để thử từng phương thức chèn
   $('#methods button').on('click', function () {
      var method = $(this).data('method');
      switch (method) {
         case 'after':        panel.after(img); break;
         case 'before':       panel.before(img); break;
         case 'append':       panel.append(img); break;
         case 'prepend':      panel.prepend(img); break;
         case 'appendTo':     img.appendTo(panel); break;
         case 'prependTo':    img.prependTo(panel); break;
         case 'insertBefore': img.insertBefore(panel); break;
      }
      $('#current').text(method);
   });
});
