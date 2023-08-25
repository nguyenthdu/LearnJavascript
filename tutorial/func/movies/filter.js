//TODO: su dung filter
const numbers1 = [1, 5, 10, 15];
// Keep only the number greater than or equal to 10
const bigOnes = numbers1.filter(x => x >= 10);

console.log(numbers1); // [1, 5, 10, 15] (no change)
console.log(bigOnes); // [10, 15]

// Get movies by Christopher Nolan
const nolanMovies = movies => {
  /* Previous code
  const nolanMovies = [];
  for (const movie of movies) {
    if (movie.director === "Christopher Nolan") {
      nolanMovies.push(movie);
    }
  }
  return nolanMovies;
  */

  // Return a new array containing only movies by Christopher Nolan
  return movies.filter(movie => movie.director === "Christopher Nolan");
};