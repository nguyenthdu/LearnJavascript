const movieList = [
  {
    title: "Batman",
    year: 1989,
    director: "Tim Burton",
    imdbRating: 7.6
  },
  {
    title: "Batman Returns",
    year: 1992,
    director: "Tim Burton",
    imdbRating: 7.0
  },
  {
    title: "Batman Forever",
    year: 1995,
    director: "Joel Schumacher",
    imdbRating: 5.4
  },
  {
    title: "Batman & Robin",
    year: 1997,
    director: "Joel Schumacher",
    imdbRating: 3.7
  },
  {
    title: "Batman Begins",
    year: 2005,
    director: "Christopher Nolan",
    imdbRating: 8.3
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    imdbRating: 9.0
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    director: "Christopher Nolan",
    imdbRating: 8.5
  }
];


//get movie titles
const titles  = [];
for(const movie of movieList){
  titles.push(movie.title);
}
console.log(titles);
// Count movies by Christopher Nolan
const NolanMovieList = [];
for(const movie of movieList){
  if(movie.director === "Christopher Nolan"){
    NolanMovieList.push(movie);
  }
}

console.log("There are"+NolanMovieList.length+"movies by Christopher Nolan");

// Get titles of movies with an IMDB rating greater or equal 5to 7.5
const goodMovieTitles = [];
for(const movie of movieList){
  if(movie.imdbRating >=7.5){
    goodMovieTitles.push(movie.title);
  }
}
console.log(goodMovieTitles);
// Compute average movie rating of chirstopher nolan's movis
let ratingSum = 0;
let averageRating = 0;
for(const movie of NolanMovieList){
    ratingSum += movie.imdbRating;
    }

averageRating = ratingSum / NolanMovieList.length;
console.log(averageRating);