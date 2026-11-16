/* Lab 08 – Bài tập cuối Lab (exercise.html)
   Thay các danh sách viết cứng trong HTML bằng lời gọi hàm,
   dữ liệu lấy từ js/travel-data.js (continents, countries, posts). */

/* Danh sách châu lục */
function outputContinents(list) {
   var html = '<ul class="list-group">';
   for (var i = 0; i < list.length; i++) {
      html += '<li class="list-group-item"><a href="#">' + list[i] + '</a></li>';
   }
   html += '</ul>';
   return html;
}

/* Danh sách quốc gia, quốc gia đang chọn được đánh dấu active (không có link) */
function outputCountries(list, activeCountry) {
   var html = '<ul class="list-group">';
   for (var i = 0; i < list.length; i++) {
      if (list[i] == activeCountry) {
         html += '<li class="list-group-item active">' + list[i] + '</li>';
      } else {
         html += '<li class="list-group-item"><a href="#">' + list[i] + '</a></li>';
      }
   }
   html += '</ul>';
   return html;
}

/* Một bài viết (một hàng) */
function outputPost(post) {
   var link = 'post.php?id=' + post.id;
   var html = '<div class="row">';
   html += '<div class="col-md-2">';
   html += '<a href="' + link + '"><img src="../assets/images/travel/' + post.thumb +
           '" alt="' + post.title + '" class="img-thumbnail"/></a>';
   html += '</div>';
   html += '<div class="col-md-10">';
   html += '<h2>' + post.title + '</h2>';
   html += '<div class="details">Posted by ' + post.user +
           '<span class="pull-right">' + post.postdate + '</span></div>';
   html += '<p class="excerpt">' + post.excerpt + '</p>';
   html += '<p><a href="' + link + '" class="btn btn-primary btn-sm">Read more</a></p>';
   html += '</div></div>';
   return html;
}

/* Toàn bộ danh sách bài viết, ngăn cách bằng <hr/> */
function outputPosts(list) {
   var html = '';
   for (var i = 0; i < list.length; i++) {
      html += outputPost(list[i]);
      if (i < list.length - 1) html += '<hr/>';
   }
   return html;
}

/* Thanh phân trang: total trang, trang hiện tại có class active */
function outputPagination(total, current) {
   var html = '<ul class="pagination">';
   html += '<li><a href="#">&laquo;</a></li>';
   for (var i = 1; i <= total; i++) {
      html += (i == current) ? '<li class="active">' : '<li>';
      html += '<a href="#">' + i + '</a></li>';
   }
   html += '<li><a href="#">&raquo;</a></li>';
   html += '</ul>';
   return html;
}
