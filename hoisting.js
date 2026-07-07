// Hoisting ka matlab kya hota hai?
// JavaScript me, variable aur function declarations ko top pe le jaaya jata hai,
// lekin unki value ko initial value ke saath top pe nahi laaya jata.
// Isliye aap declaration se pehle use kar sakte ho, lekin result alag ho sakta hai.

// Example 1: var ke saath hoisting
console.log('Value of a before declaration:', a); // undefined
var a = 5;
console.log('Value of a after declaration:', a); // 5

// Example 2: function declaration bhi hoist hota hai
sayHello(); // function ko pehle call kar diya, aur kaam kar gaya

function sayHello() {
  console.log('Hello bhai, main hoisting se aaya hoon!');
}

// Example 3: let aur const ke saath hoisting hota hai, lekin unhe use karne se pehle
// initialize karna zaroori hota hai. Isko Temporal Dead Zone kehte hain.
try {
  console.log('Value of b before declaration:', b);
} catch (error) {
  console.log('Error mila:', error.message);
}

let b = 10;
console.log('Value of b after declaration:', b);