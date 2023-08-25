/* var arr = [];
arr.push(1);
arr.push(2);
arr.push({});
arr.push([]);
console.log(arr);
console.log(arr.length);
//trong javascript co the gan 
arr[1000]=5;
console.log(arr);
 */

var arr2=[];
arr2.push(1);
arr2.push(2);
arr2.push(100);
//arr2[1]=200;
//console.log('arr2: '+arr2[1]);
console.log(arr2);
//pop() lay phan tu cuoi cung cua mang
var element = arr2.pop();
console.log(element);


var arr3= new Array(30);
console.log(arr3);
console.log(arr3.length);
console.log(arr3[0]);

// prototype trong array
var ar = [];
Array.prototype.myFunction=()=>{
    console.log('this is my function');
}
ar.myFunction();
[1,2,3,4,5].myFunction();
Array.prototype.myFunction2 = function test(){
    console.log(this);
    console.log('this is my function 2');
}
ar.myFunction2();
[1,2,3,4,5].myFunction2();