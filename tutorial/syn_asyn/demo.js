// đọc tên các file của một thư mục
// đồng bộ
var fs = require('fs'),
    filenames,
    i,
    processId;
filenames = fs.readFileSync(".");
for (i = 0; i< filenames.length; i++){
    console.log(filenames[i]);
}
console.log("Ready.");
console.log("Done");
// Bất đồng bộ
var fs = require('fs'),
    processId;

fs.readdir(".", function (err, filenames) {
    var i;
    for (i = 0; i < filenames.length; i++) {
        console.log(filenames[i]);
    }
    console.log("Ready.");
});

console.log("Done");
/* 
Một số ứng dụng thực tiễn liên quan : Ajax, hàm setTimeout()
Một số khái niệm, từ khóa liên quan : Promises, Async/Await
*/