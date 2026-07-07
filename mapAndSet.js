// Map aur Set ke baare me simple Hinglish me samjho

// Map kya hota hai?
// Map ek collection hota hai jisme key-value pairs store hote hain.
// Map me keys kisi bhi type ki ho sakti hain, including objects.

const userMap = new Map();
userMap.set('name', 'Prince');
userMap.set('age', 21);
userMap.set(true, 'student');

console.log('Map:', userMap);

// Map ke important operations
// 1. set() -> key-value pair add karta hai
userMap.set('city', 'Delhi');
console.log('After set:', userMap);

// 2. get() -> key ke hisaab se value laata hai
console.log('Get name:', userMap.get('name'));

// 3. has() -> key present hai ya nahi
console.log('Has age:', userMap.has('age'));

// 4. delete() -> key remove karta hai
userMap.delete('age');
console.log('After delete:', userMap);

// 5. clear() -> saara map clear kar deta hai
// userMap.clear();
// console.log('After clear:', userMap);

// 6. size -> map me kitne entries hain
console.log('Map size:', userMap.size);

// 7. forEach() -> map par loop chala sakte hain
userMap.forEach((value, key) => {
  console.log('Map entry:', key, '=>', value);
});

// 8. keys(), values(), entries()
console.log('Keys:', [...userMap.keys()]);
console.log('Values:', [...userMap.values()]);
console.log('Entries:', [...userMap.entries()]);

// Set kya hota hai?
// Set ek unique values ki collection hota hai.
// Duplicate values automatically remove ho jaate hain.

const numbers = new Set();
numbers.add(10);
numbers.add(20);
numbers.add(10); // duplicate, ignore ho jayega
numbers.add(30);

console.log('Set:', numbers);

// Set ke important operations
// 1. add() -> value add karta hai
console.log('Set size:', numbers.size);

// 2. has() -> value present hai ya nahi
console.log('Has 20:', numbers.has(20));

// 3. delete() -> value remove karta hai
numbers.delete(20);
console.log('After delete:', numbers);

// 4. clear() -> saara set clear kar deta hai
// numbers.clear();
// console.log('After clear:', numbers);

// 5. forEach() -> set par loop chala sakte hain
numbers.forEach((value) => {
  console.log('Set value:', value);
});

// 6. values(), keys(), entries()
console.log('Set values:', [...numbers.values()]);
console.log('Set keys:', [...numbers.keys()]);
console.log('Set entries:', [...numbers.entries()]);

// Map vs Set
// Map -> key-value pairs ke liye
// Set -> unique values ke liye
