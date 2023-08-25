console.log("ABC".length); // 3
const str = "I am a string";
const len = str.length;
console.log(len); // 13


const originalWord = "Bora-Bora";

const lowercaseWord = originalWord.toLowerCase();
console.log(lowercaseWord); // "bora-bora"

const uppercaseWord = originalWord.toUpperCase();
console.log(uppercaseWord); // "BORA-BORA"

const word = "koala";
console.log(word === "koala");    // true
console.log(word === "kangaroo"); // false

console.log("Qwerty" === "qwerty");               // false
console.log("Qwerty".toLowerCase() === "qwerty"); // true