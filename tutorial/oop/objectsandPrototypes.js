const anObject = {
  myProp: 2
};

// Create anotherObject using anObject as a prototype
const anotherObject = Object.create(anObject);

console.log(anotherObject.myProp); // 2

// Create an object linked to myPrototypeObject
const myObject = Object.create(myPrototypeObject);

//==============================================================================
const anObject1 = {
  myProp: 2
};

// Create anotherObject using anObject as a prototype
const anotherObjec1t = Object.create(anObject1);

// Create yetAnotherObject using anotherObject as a prototype
const yetAnotherObject1 = Object.create(anotherObject1);

// myProp is found in yetAnotherObject's prototype chain (in anObject)
console.log(yetAnotherObject1.myProp); // 2

// myOtherProp can't be found in yetAnotherObject's prototype chain
console.log(yetAnotherObject1.myOtherProp); // undefined