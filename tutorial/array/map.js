var arr =[1,2,3,4,5,6,7,8,9,10];
var newArr = arr.map(()=>{});
//1. map() tra ve 1 mang moi new array
//2. function hoat nhu the nao?
//--> mỗi phần tử cũ sẽ biến thành một phần tử mới
// tùy thuộc vào kết quả trả về của callback function


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
