const name = "Sarah";
const nameArray = Array.from(name);
nameArray.forEach(letter => {
  console.log(letter);
});


const monthList = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
const months = monthList.split(","); // `,` is the separator in monthList.
console.log(months[0]);  // "Jan"
console.log(months[11]); // "Dec"
//months is the array containing substrings at distinct array indices