const song = "Honky Tonk Women";
console.log(song.indexOf("onk")); // 1
console.log(song.indexOf("Onk")); // -1 because of case mismatch

// tim dau
console.log(song.startsWith("Honk")); // true
console.log(song.startsWith("honk")); // false
console.log(song.startsWith("Tonk")); // false
// tim cuoi
console.log(song.endsWith("men")); // true
console.log(song.endsWith("Men")); // false
console.log(song.endsWith("Tonk")); // false