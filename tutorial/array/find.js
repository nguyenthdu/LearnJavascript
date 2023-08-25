// dùng để tìm phần tử đầu tiên trong mảng thỏa điều kiện cụ thể
var array = [3,8,4,6,9,1];
array.find(function(currentValue, index, array) {
  // Kiểm tra điều kiện ở đây
}, thisValue);

const found = array1.find((element) => element > 5);

console.log(found);
// Expected output: 12

console.log('=====================================================');
//TODO: Mảng chứa thông tin về các sản phẩm
const products = [
  { id: 1, name: 'Áo', price: 20 },
  { id: 2, name: 'Quần', price: 30 },
  { id: 3, name: 'Giày', price: 50 }
];

// Tìm sản phẩm có giá lớn hơn 25
const expensiveProduct = products.find(function(product) {
  return product.price > 25;
});

console.log(expensiveProduct);  // Kết quả: { id: 2, name: 'Quần', price: 30 }
