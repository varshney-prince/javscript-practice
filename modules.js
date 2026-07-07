// JavaScript modules ko simple Hinglish me samjho
// Module ka matlab hota hai code ko alag-alag files me divide karna.
// Isse code organize rehta hai aur maintain karna easy hota hai.

// ES6 modules me hum export aur import use karte hain.

// Example 1: Named export
// Isko import karte waqt exact name likhna padta hai.
export const name = 'Prince';
export function greetUser() {
  console.log('Hello from module!');
}

// Example 2: Default export
// Har file me sirf ek default export ho sakta hai.
const message = 'This is a default export';
export default message;

// Example 3: Exporting class
export class User {
  constructor(name) {
    this.name = name;
  }

  showInfo() {
    console.log(`User name: ${this.name}`);
  }
}

// Note:
// - Named export: import { name, greetUser } from './modules.js'
// - Default export: import message from './modules.js'
// - Mixed export: import message, { name, User } from './modules.js'

// Important points
// 1. Modules code ko reusable banate hain.
// 2. Code ko organized aur clean rakhte hain.
// 3. Variables aur functions ko private-ish banane ke liye export use karte hain.
// 4. Browser aur Node.js me ES6 modules support karte hain.
