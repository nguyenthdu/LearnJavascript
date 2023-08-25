var musketeers = ["Athos","Porthos","Aramis"];
musketeers.push("D`Artagnan"); // Push "D'Artagnan" into the array.
var index = musketeers.indexOf("Aramis");  //Get the index of the array whose value is ‘Aramis’.
if (index > -1) { // True if index greater than -1 
    console.log(musketeers.splice(index, 2));
}