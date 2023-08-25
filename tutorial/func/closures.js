function createAdder(a) {
    function f(b) {
      const sum = a + b;
      return sum;
    }
    return f;
  }
  const f = createAdder(3);
  console.log(f(4)); // 7


/*   const sayHello = (firstName, lastName) => `Hello, ${firstName} ${lastName}!`;
  
const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");
console.log(sayHello(firstName, lastName)); */

const sum = (a,b)=> a+b;
console.log('Tong la: ')
console.log(sum(3,5));