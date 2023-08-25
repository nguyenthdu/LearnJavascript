// reduce là 1 phương thức có sẵn dùng để thực thi 1 hàm lên từng phần tử của mảng,
//  và trả về 1 giá trị duy nhất sau khi đã thực thi hàm lên tất cả các phần tử của mảng.
/* array.reduce(function(accumulator, currentValue, index, array) {
  // Thực hiện tích hợp ở đây và trả về kết quả
}, initialValue); */
/* 
- accumulator: Giá trị tích hợp tạm thời, được cập nhật trong mỗi lần gọi hàm tích hợp.
- currentValue: Giá trị của phần tử hiện tại trong mảng.
- index: Chỉ số của phần tử hiện tại trong mảng.
- array: Mảng đang được tích hợp.
- initialValue (tùy chọn): Giá trị khởi đầu của accumulator.
*/

// Mảng chứa các số nguyên dương
const numbers = [1, 2, 3, 4, 5];

// Tính tổng của các số trong mảng
const sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum);  // Kết quả: 15
const array1=[1,2,3,4,6];
const initialValue=0;
const sumWithInitial = array1.reduce((accumulator,currentValue)=>accumulator + currentValue,initialValue);
console.log(sumWithInitial);