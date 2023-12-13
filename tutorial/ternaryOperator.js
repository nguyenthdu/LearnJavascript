const age =25;
const isOldEnough = age >= 18;
console.log(isOldEnough);
const age1 = 15;
const age_2 = age >=30 ? 'old enough' : 'not old enough';
console.log(age_2);
//Hàm kiểm tra chẳn lẻ:
function isEvenOrOdd(number) {
  return number & 1 ? 'odd' : 'even' 
}
/* 
isEvenOrOdd(0) // even
isEvenOrOdd(1) // odd
isEvenOrOdd(2) // even
isEvenOrOdd(3) // odd
*/
function isEvenOrOdd(number) {
  return ["even", "odd"][numer % 2]
}
/* 
isEvenOrOdd(0) // even
isEvenOrOdd(1) // odd
isEvenOrOdd(2) // even
isEvenOrOdd(3) // odd
*/