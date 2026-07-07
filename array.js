// JavaScript Array methods ko simple Hinglish me samjho

let fruits = ['apple', 'banana', 'mango'];
console.log('Original array:', fruits);

// 1. push() -> array ke end me naya element add karta hai
fruits.push('orange');
console.log('After push:', fruits);

// 2. pop() -> array ke end ka element remove karta hai
fruits.pop();
console.log('After pop:', fruits);

// 3. unshift() -> array ke start me element add karta hai
fruits.unshift('grapes');
console.log('After unshift:', fruits);

// 4. shift() -> array ke start ka element remove karta hai
fruits.shift();
console.log('After shift:', fruits);

// 5. length -> array ka size batata hai
console.log('Length:', fruits.length);

// 6. indexOf() -> element ki position batata hai, agar nahi mile to -1
console.log('Index of banana:', fruits.indexOf('banana'));

// 7. includes() -> element present hai ya nahi, true/false deta hai
console.log('Includes mango:', fruits.includes('mango'));

// 8. slice() -> copy banata hai bina original ko change kiye
let sliced = fruits.slice(1, 3);
console.log('Slice result:', sliced);
console.log('Original after slice:', fruits);

// 9. splice() -> original array ko change karta hai, add/remove dono kar sakta hai
let numbers = [10, 20, 30, 40];
numbers.splice(1, 2, 25, 35);
console.log('After splice:', numbers);

// 10. concat() -> do arrays ko jod deta hai
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = arr1.concat(arr2);
console.log('Concat result:', merged);

// 11. forEach() -> har element par loop chalta hai
fruits.forEach(function (fruit) {
  console.log('Fruit:', fruit);
});

// 12. map() -> har element par change karke naya array banata hai
let upperFruits = fruits.map(function (fruit) {
  return fruit.toUpperCase();
});
console.log('Map result:', upperFruits);

// 13. filter() -> condition ke hisaab se elements select karta hai
let longFruits = fruits.filter(function (fruit) {
  return fruit.length > 5;
});
console.log('Filter result:', longFruits);

// 14. find() -> pehla matching element de deta hai
let found = fruits.find(function (fruit) {
  return fruit === 'banana';
});
console.log('Find result:', found);

// 15. findIndex() -> pehli matching element ki index de deta hai
let foundIndex = fruits.findIndex(function (fruit) {
  return fruit === 'banana';
});
console.log('Find index:', foundIndex);

// 16. sort() -> array ko sort karta hai
let nums = [5, 2, 9, 1];
nums.sort();
console.log('Sorted numbers:', nums);

// 17. reverse() -> array ko ulta karta hai
nums.reverse();
console.log('Reversed numbers:', nums);

// 18. join() -> array ko string me convert karta hai
let joined = fruits.join(' - ');
console.log('Joined string:', joined);

// 19. every() -> sab elements condition ko satisfy karte hain to true
let allAreStrings = fruits.every(function (fruit) {
  return typeof fruit === 'string';
});
console.log('Every result:', allAreStrings);

// 20. some() -> koi ek element condition ko satisfy kare to true
let someAreLong = fruits.some(function (fruit) {
  return fruit.length > 6;
});
console.log('Some result:', someAreLong);
