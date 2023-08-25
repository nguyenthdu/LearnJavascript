//every dùng để kiểm tra các phần tử trong mảng có thỏa mãn 1 điều kiện nào đó hay không    
/* array.every(function(currentValue, index, array) {
  // Kiểm tra điều kiện ở đây
}, thisValue); */
/* 
- currentValue: Giá trị của phần tử hiện tại trong mảng.
- index: Chỉ số của phần tử hiện tại trong mảng.
- array: Mảng đang được kiểm tra.
- thisValue (tùy chọn): Đối tượng được sử dụng như this trong hàm kiểm tra điều kiện.

*/
//TODO:  Mảng chứa các số nguyên dương
const numbers = [2, 4, 6, 8, 10];

// Kiểm tra xem tất cả các số trong mảng có chia hết cho 2 không
const allEven = numbers.every(function(number) {
  return number % 2 === 0;
});

console.log(allEven);  // Kết quả: true, vì tất cả các số đều chia hết cho 2

console.log('=====================================================');
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));