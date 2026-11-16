/* Exercise 8.10 – Creating JavaScript objects */

/* Bước 1–3: new Object() + gán thuộc tính bằng dấu chấm
var order = new Object();
order.product = "Self Portrait in a Straw Hat";
order.price = 15.0;
order.quantity = 2;
order.total = function() { return this.price * this.quantity; };
document.write("Product=" + order.product);
document.write("<br>Price=" + order.price);
document.write("<br>Quantity=" + order.quantity);
document.write("<br>Total=" + order.total());
document.write("<br>Total=" + order.total);   // bước 3: không có () -> in ra nội dung hàm
*/

/* Bước 4–5: var order = {}; và ký pháp ngoặc vuông
var order = {};
order["product"] = "Self Portrait in a Straw Hat";
order["price"] = 15.0;
order["quantity"] = 2;
order["total"] = function() { return this.price * this.quantity; };
*/

/* Bước 6: object literal notation
var order = {
   product: "Self Portrait in a Straw Hat",
   price: 15.0,
   quantity: 2,
   total: function() { return this.price * this.quantity; }
};
*/

/* Bước 7–11: constructor function */
function order(product, price, quantity) {
   this.product = product;
   this.price = price;
   this.quantity = quantity;
   this.total = function() { return this.price * this.quantity; },
   this.output = function() {
      document.write("<p>Product=" + this.product);
      document.write("<br>Price=" + this.price);
      document.write("<br>Quantity=" + this.quantity);
      document.write("<br>Total=" + this.total());
   }
}

var example1 = new order("Self Portrait in a Straw Hat", 15, 2);
var example2 = new order("Untitled #23", 10, 4);
example1.output();
example2.output();
