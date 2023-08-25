let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)

//slice - trích xuất 1 phẩn từ trong chuỗi
let a = text.slice(-6,-3)
console.log(a)
let str = "Apple,Samsung, Sony"
let pstr = str.substring(3,6)
console.log(pstr)
let cstr = str.substr(7,8)
console.log(cstr)

// thay doi phan tu trong chuoi va tra ve chuoi moi
let newStr = str.replace("Apple","Xiaomi")
console.log(newStr)
console.log(str)
// mat dinh replace se phan biet chu hoa va chu thuong vi vay can them i
let newStr2 = str.replace(/APPLE/i, "Huawei")
console.log(newStr2)
console.log(str)
// de thay the tat ca cac ket qua co trong chuoi tim thay can them /g
let newText = str.replace(/Microsoft/g, "W3Schools");

// Phương thức này replaceAll()cho phép bạn chỉ định một biểu thức chính quy thay vì một chuỗi được thay thế.

// Nếu tham số là một biểu thức chính quy, cờ chung (g) phải được đặt, nếu không thì TypeError sẽ được đưa ra.
text = text.replaceAll(/Cats/g,"Dogs");
text = text.replaceAll(/cats/g,"dogs");
//Noi chuoi
let text11 = "Hello";
let text12 = "World";
let text3 = text11.concat(" ", text12);
//bo khoang trang 2 dau chuoi
let text1 = "      Hello World!      ";
let text2 = text1.trim();
//Phương thức này trimStart()hoạt động như trim(), nhưng chỉ loại bỏ khoảng trắng ở đầu chuỗi.
//Phương thức này trimEnd()hoạt động như trim(), nhưng chỉ loại bỏ khoảng trắng ở cuối chuỗi.

//dem chuoiĐệm một chuỗi bằng "0" cho đến khi nó đạt đến độ dài 4:

let tex11t = "5";
let padded = tex11t.padStart(4,"0");
//Đệm một chuỗi bằng "0" cho đến khi nó đạt đến độ dài 4:

let text111 = "5";
let padded1 = text111.padStart(4,"0");
// neu muon dem so thi phai chuyen no ve chuoi: let a = c.toString()
//padStart()

//Tri xuat chuoi
//charAt(position)
//charCodeAt(position)
//a[3]
let text33 = "HELLO WORLD";
let char = text33.charAt(0);
//UTF 16
let text5 = "HELLO WORLD";
let char5 = text5.charCodeAt(0);

let text4 = "HELLO WORLD";
let char4 = text4[0];

// phan tach chuoi
// text.split(",")    // Split on commas
// text.split(" ")    // Split on spaces
// text.split("|")    // Split on pipe
let text65 = "a,b,c,d,e,f";
const myArray = text65.split(",");
document.getElementById("demo").innerHTML = myArray[0];//->a