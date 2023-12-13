// vi du ve foreach
// Dùng để lặp qua các phần tử của một array và thực hiện thao tác xử lý qua mỗi lần lặp (tương tự vòng lặp for).

// Điểm lưu ý:
// Method này không trả về một array mới.
// Không làm thay đổi array ban đầu, chỉ đơn giản là lặp qua và thực hiện xử lý bên trong mỗi lần lặp.

var arr = [1, 2, 3, 4, 5];
arr.forEach((num)=>{
    return  num+1;
    console.log(num);
});
//========
const beforeColors = ["red", "blue", "green", "black"]

const afterColors = beforeColors.forEach((item, index) => {
  // logic here
  return item;
})

console.log('beforeColors', beforeColors)
// beforeColors ["red", "blue", "green", "black"]

console.log('afterColors', afterColors)
// afterColors undefined
//.forEach là method lặp tổng quát của array và có thể dùng để thay thế bất kỳ các methods ở trên (.map .filter .reduce)
//==== thay the map
const beforeColors1 = ["red", "blue", "green", "black"];
const afterColors1 = [];
beforeColors1.forEach((item, index) => {
  afterColors1.push(`hello ${item}`);
})

console.log('beforeColors', beforeColors1);
// beforeColors ["red", "blue", "green", "black"]

console.log('afterColors', afterColors1);
// afterColors ["hello red", "hello blue", "hello green", "hello black"]
//=== thay theo filter
const beforeColors2 = ["red", "blue", "green", "black"];
const afterColors2 = [];
beforeColors2.forEach((item, index) => {
  if (item.startsWith("b")) {
    afterColors2.push(item);
  }
})

console.log('beforeColors', beforeColors2);
// beforeColors ["red", "blue", "green", "black"]

console.log('afterColors', afterColors2);
// afterColors ["blue", "black"]
//==== thay the reduce
const beforeColors3 = ["red", "blue", "green", "black"];
const afterColors3 = [];
beforeColors.forEach((item, index) => {
  if (item.startsWith("b")) {
    afterColors3.push(`hello ${item}`);
  }
})

console.log('beforeColors', beforeColors3);
// beforeColors ["red", "blue", "green", "black"]

console.log('afterColors', afterColors3);
// afterColors ["hello blue", "hello black"]

