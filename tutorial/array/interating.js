const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}

myArray.forEach(myElement => {
  // Use myElement to access each array element one by one
});
movies.forEach(movie => {
  console.log(movie);
});


for (const myElement of myArray) {
  // Use myElement to access each array element one by one
}

for (const movie of movies) {
  console.log(movie);
}