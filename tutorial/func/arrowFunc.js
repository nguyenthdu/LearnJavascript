//tip viet arrow func
//Inline  - ham chi co 1 bieu thuc
const array = [1, 2, 3];

array.map(number => {
  return number * 2;
});
//--
array.map(number => number * 2);
//so sanh
const negativeToZero = number => number <= 0 ? 0 : number;
const negativeToZero1 = number => (number <= 0 ? 0 : number);
const negativeToZero2 = number => {
  return number <= 0 ? 0 : number;
};
//object literal
const array1 = [1, 2, 3];
// throws SyntaxError!
//array1.map(number => {'number': number});
// Works!
array1.map(number => ({ 'number': number }));
//object have attributes
array.map(number => ({
  'number': number,
  'propA': 'value A',
  'propB': 'value B'
}));
//Hạn chế lồng nhiều arrow function
//Thí dụ có một button, sau khi click chúng ta request lên server, sau khi nhận được giá trị, log xuống trình duyệt

myButton.addEventListener('click', () => {
  fetch('/items.json')
    .then(response => response.json())
    .then(json => {
      json.forEach(item => {
        console.log(item.name);
      });
    });
});
// để tường minh tốt nhất nên tách các hàm riêng ra, đặt tên biến cho từng hàm mô tả chính xác nhiệm vụ mỗi hàm thì có thể bạn nên xem xét qua như này


const readItemsJson = json => {
  json.forEach(item => console.log(item.name));
};

const handleButtonClick = () => {
  fetch('/items.json')
    .then(response => response.json())
    .then(readItemsJson);
};

myButton.addEventListener('click', handleButtonClick);

// dung async/await de toi uu
const handleButtonClick1 = async() => {
  const response = await fetch("/items.json");
  const json = await response.json();
  json.forEach(item => console.log(item.name));
};

myButton.addEventListener("click", handleButtonClick1);
