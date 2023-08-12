console.log("Data Type");

//Khai bao bien
let t, f;
let tt = "a",
  ff = "tt";
//let va var =====================
var y = 10;
// Here x is 10

{
  var y = 2;
  // Here x is 2
}

// Here x is 2
//======================
let x = 10;
// Here x is 10

{
  let x = 2;
  // Here x is 2
}

// Here x is 10

let a1 = 5;
console.log(typeof a1);
let b = "Hello";
console.log(typeof b);
let c = [];
console.log(typeof c);
let d = {
  fistname: "Nguyen",
  lastname: "Thanh",
};
console.log(typeof d);

let aa = 5,
  bb = 5,
  cc = 7;
console.log("Test program: ", "a=", aa, "b=", bb, "c=", cc);

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
