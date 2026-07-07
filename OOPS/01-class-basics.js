// Class basics concept
// Class ek blueprint hoti hai jisse objects banaye ja sakte hain.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  info() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const person1 = new Person('Prince', 21);
person1.greet();
person1.info();
