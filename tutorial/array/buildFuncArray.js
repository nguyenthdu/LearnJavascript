// xây dựng hàm trong array
const array = [1, 2, 3, 4, 5];
Array.prototype.forEach1 = function () {
    console.log(this);
    console.log('This is forEach1');
};
console.log(array.forEach1());
Array.prototype.forEach2 = function () {
    var length = this.length;
    for (var i = 0; i < length; i++) {
        console.log(this[i]);
    }  
    return this;
};
var result = array.forEach2();
console.log(result);


Array.prototype.forEach3 = function (fc) {
   // fc(5);
    //fc();
    for(let i=0;i<this.length;i++){
        fc(this[i]);
    }
};
/* 
var fc = (num)=>{
    console.log(num);
}
*/
var result1 = array.forEach3((num)=>{
    console.log(num);
});
console.log(result1);
//TODO: viết hàm map return new array dựa trên new element trong callback function
Array.prototype.map1 = function (fc) {
    var length = this.length;//
    var newArr = [];
    for (var i = 0; i < length; i++) {
        newArr.push(fc(this[i]));
    }  
    return newArr;
};
var result2 = array.map1((num)=>{
    return num*2;
});
console.log('Callback function map1');
console.log(result2);