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

// Trả về một data mới với kết quả: là sau khi lặp qua và thực hiện thao tác tính toán trên mỗi lần lặp.

// Điểm lưu ý:
// Trả về một data(object, array, string, ...) mới so với array ban đầu.
// .reduce sẽ không làm thay đổi array ban đầu.

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

//============= array new
const beforeColors = ["red", "blue", "green", "black"];

const afterColors = beforeColors.reduce((currentColors, item, index) => {
  if (item.startsWith("b")) {
    return [...currentColors, `hello ${item}`];
  }
  return currentColors;
}, []);

console.log('beforeColors', beforeColors);
// beforeColors ["red", "blue", "green", "black"]

console.log('afterColors', afterColors);
// afterColors ["hello blue", "hello black"]
//========== object new
const beforeColors1 = ["red", "blue", "green", "black"];

const afterColorObj = beforeColors1.reduce((currentColors, item, index) => {
  if (item.startsWith("b")) {
    return {
      ...currentColors,
      [`color_${item}`]: `hello ${item}`,
    };
  }
  return currentColors;
}, {});

console.log('beforeColors', beforeColors1);
// beforeColors ["red", "blue", "green", "black"]

console.log('afterColorObj', afterColorObj);
// afterColorObj {color_blue: "hello blue", color_black: "hello black"}
//============== string new
const beforeColors2 = ["red", "blue", "green", "black"];

const afterColorStr = beforeColors2.reduce((currentColors, item, index) => {
  return `${currentColors} ${item}`;
}, '');

console.log('beforeColors', beforeColors2);
// beforeColors ["red", "blue", "green", "black"]

console.log('afterColorStr', afterColorStr);
// afterColorStr "red blue green black "
