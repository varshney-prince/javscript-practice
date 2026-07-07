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
