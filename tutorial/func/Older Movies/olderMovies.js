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

function olderMovies(movieList){
    //Xác định hàm before2000 cung cấp các phim phát hành trước năm 2000.
  const before2000 = movie => movie.year < 2000;
  //filter hàm nhận hai tham số tức là moviesvà funcxác định tiêu chí lọc.
  const filter = (movies,func) => movies.filter(func);
  //Tạo hàm titles cung cấp mảng tiêu đề.
  const titles = movie => movie.map(m => m.title);
  const moviesBefore2000 = titles(filter(movieLi    st,before2000));
  console.log(moviesBefore2000);
}

olderMovies(movieList);