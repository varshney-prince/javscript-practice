// JavaScript loops ko simple Hinglish me samjho

// 1. for loop
// Jab hume ek fixed number of times repeat karna ho.
for (let i = 1; i <= 5; i++) {
  console.log('for loop:', i);
}

// 2. while loop
// Jab condition true ho tab tak chalta hai.
let j = 1;
while (j <= 3) {
  console.log('while loop:', j);
  j++;
}

// 3. do...while loop
// Ye loop kam se kam ek baar to chalta hi hai, phir condition check hota hai.
do {
  console.log('do while loop:', j);
  j++;
} while (j <= 5);

// 4. for...of loop
// Array ke elements ko iterate karne ke liye use hota hai.
let fruits = ['apple', 'banana', 'mango'];
for (let fruit of fruits) {
  console.log('for of loop:', fruit);
}

// 5. for...in loop
// Object ke keys ko iterate karne ke liye use hota hai.
let person = { name: 'Prince', age: 21, city: 'Delhi' };
for (let key in person) {
  console.log('for in loop key:', key, 'value:', person[key]);
}

// 6. break statement
// Loop ko early stop karne ke liye use hota hai.
for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    break;
  }
  console.log('break example:', i);
}

// 7. continue statement
// Current iteration skip kar ke agle par chala jata hai.
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log('continue example:', i);
}
