/* Exercise 8.9 – Functions as objects */
var isCanadian = true;

/* Bước 1 (ban đầu):
function taxRate() { if (isCanadian) { return 0.05; } else { return 0.0; } }
function calculateTax(amount) { return amount * taxRate(); }

   Bước 3: lồng taxRate() vào trong calculateTax()
   Bước 4: var tax = function taxRate() {...}   (hàm như một đối tượng)
   Bước 5: var tax = function () {...}          (hàm ẩn danh)
   Bước 6 (phiên bản cuối): truyền hàm ẩn danh làm tham số */

function calculateTax(amount, tax) {
   return amount * tax();
}

function calculateTotal(price, quantity) {
   var amount = price * quantity;
   return amount + calculateTax(amount, function () {
      if (isCanadian) {
         return 0.05;
      } else {
         return 0.0;
      }
   });
}
