// JavaScript ke saare data types ko samjho in simple Hinglish

// 1. String
// String ka matlab text. Isko single quotes ya double quotes me likhte hain.
let name = 'Prince';
console.log('String example:', name);

// 2. Number
// Number me integers aur decimals dono aate hain.
let age = 21;
let price = 99.99;
console.log('Number example:', age, price);

// 3. Boolean
// Boolean sirf do values leta hai: true ya false.
let isStudent = true;
console.log('Boolean example:', isStudent);

// 4. Undefined
// Variable declare kiya hai, lekin value assign nahi ki gayi.
let city;
console.log('Undefined example:', city);

// 5. Null
// Null ka matlab khali ya explicit empty value.
let emptyValue = null;
console.log('Null example:', emptyValue);

// 6. BigInt
// BigInt bade integers ke liye use hota hai, jo Number ke bahar ho sakte hain.
let bigNumber = 123456789012345678901234567890n;
console.log('BigInt example:', bigNumber);

// 7. Symbol
// Symbol unique aur immutable value hota hai.
let uniqueId = Symbol('id');
console.log('Symbol example:', uniqueId);

// 8. Object
// Object me multiple values ek saath store hoti hain.
let person = {
  name: 'Prince',
  age: 21,
  isStudent: true
};
console.log('Object example:', person);

// Extra: Array
// Array ek special type hota hai jisme multiple values store hoti hain.
let colors = ['red', 'blue', 'green'];
console.log('Array example:', colors);

// Simple summary
// Primitive types: String, Number, Boolean, Undefined, Null, BigInt, Symbol
// Non-primitive type: Object (aur Array bhi object ka type mana jata hai)
