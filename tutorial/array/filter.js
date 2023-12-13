// Tạo một array mới với kết quả là: lặp qua và chỉ trả vể các phần tử pass điều kiện filter.

// Điểm lưu ý:
// Callback function luôn trả về các giá trị truthy, falsy
// Trả về một array mới có length nhỏ hơn hoặc bằng với length của array ban đầu.
// Value của các phần tử sau khi filter sẽ không biến đổi.
// .filter sẽ không làm thay đổi array ban đầu.

var arr=[3,5,7,8];
// callback function lon hon 5
var newArr = arr.filter((num)=>{
    return num>5;
});

var newArr2 = arr.filter((element, index, thisArg)=>{
    console.log(element);
    console.log(index);
    console.log(thisArg);
    return element>5;
});
console.log(newArr2);

const beforeColors = ["red", "blue", "green", "black"];

const afterColors = beforeColors.filter((item, index) => item.startsWith("b"));

console.log('beforeColors', beforeColors);
// beforeColors ["red", "blue", "green", "black"]

console.log('afterColors', afterColors);
// afterColors ["blue", "black"]
