const pen ={
    yourName: "Lux",
    color: "Pink",
    main: "Middle"
}
console.log(pen.yourName);
console.log(pen.color);
console.log(pen.main);
console.log(`My name is ${pen.yourName} and my pen color is ${pen.color} and my pen main is ${pen.main}`);
pen.color = "Blue";
console.log(`My name is ${pen.yourName} and my pen color is ${pen.color} and my pen main is ${pen.main}`);
pen.owner = "Vakly";
console.log(`my pen owner is ${pen.owner}`);
console.log(pen);
delete pen.main;
