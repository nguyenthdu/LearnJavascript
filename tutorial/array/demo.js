const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];

console.log(movies.length); // 3
console.log(movies[0]); // "The Wolf of Wall Street"
console.log(movies[1]); // "Zootopia"
console.log(movies[2]); // "Babysitting"
const elements = ["Hello", 7, { message: "Hi mom" }, true];

const emptyArray = []; // Create an empty array
console.log(emptyArray.length); // 0
//Trộn ngẫu nhiên một mảng
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(shuffleArray(arr));
//cuon len dau
const scrollToTop = (element) =>
  element.scrollIntoView({ behavior: "smooth", block: "start" });
// cuon xuong cuoi
const scrollToBottom = (element) =>
  element.scrollIntoView({ behavior: "smooth", block: "end" });