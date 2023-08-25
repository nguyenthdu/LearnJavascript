/* 
Phương thức này reduce()áp dụng một hàm được cung cấp cho từng phần tử mảng để giảm nó thành một giá trị. 
Phương pháp này thường được sử dụng để thực hiện các phép tính trên một mảng.
Phương thức này reduce()có thể có một số tham số:

Đầu tiên là hàm được liên kết reduce()và gọi cho từng phần tử mảng. 
Nó nhận vào hai tham số: tham số đầu tiên là bộ tích lũy chứa giá trị tích lũy được trả về trước đó bởi lệnh gọi hàm cuối cùng. Tham số chức năng khác là phần tử mảng.

Giá trị thứ hai là giá trị ban đầu của bộ tích lũy (thường là 0).
*/


const numbers = [1, 5, 10, 15];
// Compute the sum of array elements
const sum = numbers.reduce((acc, value) => acc + value, 0);

console.log(numbers); // [1, 5, 10, 15] (no change)
console.log(sum);     // 31



//TODO:  Compute average rating of a movie list
const averageRating = movies => {
  /* Previous code
  let ratingSum = 0;
  for (const movie of movies) {
    ratingSum += movie.imdbRating;
  }
  return ratingSum / movies.length;
  */

  // Compute the sum of all movie IMDB ratings
  const ratingSum = movies.reduce((acc, movie) => acc + movie.imdbRating, 0);
  return ratingSum / movies.length;
};
console.log(averageRating(movieList))

//TODO: Một giải pháp khả thi khác là tính tổng xếp hạng bằng cách sử dụng map()trước khi giảm một mảng chỉ chứa xếp hạng phim.
// Compute average rating of a movie list
const averageRating = movies => {
  /* Previous code
  let ratingSum = 0;
  for (const movie of movies) {
    ratingSum += movie.imdbRating;
  }
  return ratingSum / movies.length;
  */

  // Compute the sum of all movie IMDB ratings
  const ratingSum = movies.map(movie => movie.imdbRating).reduce((acc, value) => acc + value, 0);
  return ratingSum / movies.length;
};
console.log(averageRating(movieList))