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