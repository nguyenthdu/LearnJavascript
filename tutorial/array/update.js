const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
// them cuoi mang
movies.push("Ghostbusters");
// them dau mang
movies.unshift("The Hangover");
// xoa cuoi mang
movies.pop();
// xoa dau mang
movies.shift();
// su dung splice de xoa phan tu
movies.splice(1, 1);
console.log(movies); 