var arr =[1,2,3,4,5,6,7,8,9,10];
var newArr = arr.map(()=>{});
//1. map() tra ve 1 mang moi new array
//2. function hoat nhu the nao?
//--> mỗi phần tử cũ sẽ biến thành một phần tử mới
// tùy thuộc vào kết quả trả về của callback function
// Tạo một array mới với kết quả: là sau khi lặp qua và thực hiện thao tác tính toán trên mỗi phần tử của array ban đầu.

// Điểm lưu ý:
// Trả về một array mới có length bằng với length của array ban đầu.
// Trả về một array mới với các phần tử bên trong đã biến đổi (đây là giá trị trả về của callback function trong .map).
// .map sẽ không làm thay đổi array ban đầu.

var newArr2 = arr.map(()=>{return num+1;});//[2,3,4,5,6,7,8,9,10,11]
//Cac viết khác
var fc = (num)=>{return num+1;};
var newArr3 = arr.map(Math.sqrt);
// giải thích và ví dụ về callback function trong map() 3 tham số element, index, array
var newArr4 = arr.map((element,index,array)=>{
    console.log(element);
    console.log(index);
    console.log(array);
    return element*2;
});
console.log(newArr4);
//3. map() có thể nhận tham số thứ 2 là thisArg
//4. map() không thay đổi giá trị của mảng gốc
//5. map() không thể break
//6. map() không thể skip

const beforeColors = ['red','blue','green','black']
const afterColors = beforeColors.map((item, index)=>`hello ${item}`)
console.log('beforeColor',beforeColors);

console.log('afterColors',afterColors);
