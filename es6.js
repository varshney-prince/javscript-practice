// ES6 kya hota hai?
// ES6 ya ECMAScript 2015 JavaScript ka ek naya version hai.
// Isme code likhne ka tareeka zyada simple aur readable ban gaya.
// Iske through hum let, const, arrow functions, template literals, destructuring jaise features use karte hain.

// ES6 me let aur const aane ke baad var ka use kam ho gaya
// var ka main disadvantage hai ki wo function scope hota hai aur block scope nahi maanta
// isliye same name ke variable ko baar-baar declare kar sakte ho, jo bugs la sakta hai

console.log('var ka problem:');
if (true) {
  var name = 'Prince';
}
console.log(name); // bahar se bhi access ho raha hai

// let ka use kyun karte hain?
// let block scope hota hai, matlab woh sirf us block me kaam karta hai jahan declare kiya jata hai
let x = 6;
if (true) {
  let x = 10;
  console.log('Block ke andar x =', x);
}
console.log('Block ke bahar x =', x);

// const ka use kyun karte hain?
// const ka matlab hota hai constant / fixed value
// ek baar value assign ho gayi to phir change nahi kar sakte
const y = 7;
console.log('y =', y);

// Why we need const and let?
// 1. Better code safety
// 2. Fewer bugs
// 3. Block scope support
// 4. Prevents accidental re-declaration and value changes

// Example of const ko change karne ki koshish
try {
  y = 10;
} catch (error) {
  console.log('Const ko change karne par error:', error.message);
}

// Arrow function kya hota hai?
// Arrow function short syntax me function likhne ka tareeka hai.
const add = (a, b) => a + b;
console.log('Arrow function result:', add(3, 4));

// Normal function aur arrow function me this ka behaviour alag hota hai.
// Normal function me this us object ko refer karta hai jahan function call hota hai.
function normalFunction() {
  console.log('Normal function this:', this);
}

// Arrow function me this lexical scope se liya jata hai,
// yani parent ke this ko use karta hai.
const arrowFunction = () => {
  console.log('Arrow function this:', this);
};

normalFunction();
arrowFunction();

const user = {
  name: 'Prince',
  greet: function () {
    console.log('Normal function inside object:', this.name);
  },
  greetWithArrow: () => {
    console.log('Arrow function inside object:', this.name);
  }
};

user.greet();
user.greetWithArrow();

// Template literal
// Backticks ke andar variables ko direct inject kar sakte hain.
const firstName = 'Prince';
const lastName = 'Kumar';
console.log(`My name is ${firstName} ${lastName}`);

// Enhanced object literal
// Object me shorthand property aur method shorthand use kar sakte hain.
const age = 21;
const student = {
  firstName,
  lastName,
  age,
  showInfo() {
    console.log(`Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`);
  }
};
console.log(student);
student.showInfo();

// Destructuring
// Object ya array ke elements ko direct variables me nikal sakte hain.
const person = { name: 'Asha', city: 'Delhi' };
const { name, city } = person;
console.log(`Name: ${name}, City: ${city}`);

const numbers = [10, 20, 30];
const [first, second] = numbers;
console.log('First number:', first);
console.log('Second number:', second);

// Default parameters
// Agar argument na diya jaye to default value use ho jati hai.
function greet(name = 'Guest') {
  console.log(`Hello ${name}`);
}

greet();
greet('Prince');

// Rest operator
// Rest operator ... se multiple values ko ek array me collect kar sakte hain.
function sum(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}

console.log('Sum using rest:', sum(1, 2, 3, 4));

// Spread operator
// Spread operator ... se array ya object ko expand kar sakte hain.
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log('Spread array:', arr2);

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log('Spread object:', obj2);
