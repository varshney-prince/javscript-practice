// JavaScript classes ko simple Hinglish me samjho

// Class kya hoti hai?
// Class ek blueprint hoti hai jisse objects banaye ja sakte hain.
// Object-oriented programming me classes ka bahut important role hota hai.

class Person {
  // Constructor -> object create hote waqt initial values set karta hai
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Instance method
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  // Another method
  info() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Object create karna
const person1 = new Person('Prince', 21);
person1.greet();
person1.info();

// Inheritance concept
// Child class parent class ke properties aur methods inherit karti hai.
class Student extends Person {
  constructor(name, age, course) {
    super(name, age); // parent class ka constructor call hota hai
    this.course = course;
  }

  study() {
    console.log(`${this.name} is studying ${this.course}`);
  }
}

const student1 = new Student('Asha', 20, 'JavaScript');
student1.greet();
student1.study();

// Method overriding concept
// Child class parent class ka method override kar sakti hai.
class Employee extends Person {
  constructor(name, age, department) {
    super(name, age);
    this.department = department;
  }

  greet() {
    console.log(`Hello, I am ${this.name} from ${this.department} department.`);
  }

  work() {
    console.log(`${this.name} is working in ${this.department}`);
  }
}

const employee1 = new Employee('Riya', 28, 'IT');
employee1.greet();
employee1.info();
employee1.work();

// Multi-level inheritance concept
// Ek child class dusri child class se inherit kar sakti hai.
class Manager extends Employee {
  constructor(name, age, department, teamSize) {
    super(name, age, department);
    this.teamSize = teamSize;
  }

  manage() {
    console.log(`${this.name} manages a team of ${this.teamSize}`);
  }
}

const manager1 = new Manager('Kiran', 35, 'HR', 8);
manager1.greet();
manager1.manage();

// Static method concept
// Static methods class ke object ke bina directly class par call hote hain.
// Ye methods kisi specific object ke data par depend nahi hote.
class MathHelper {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

console.log('Static add:', MathHelper.add(3, 5));
console.log('Static multiply:', MathHelper.multiply(4, 6));

// Getter and setter
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get area() {
    return Math.PI * this.radius * this.radius;
  }

  set diameter(d) {
    this.radius = d / 2;
  }
}

const circle = new Circle(5);
console.log('Circle area:', circle.area);

circle.diameter = 10;
console.log('Updated radius:', circle.radius);

// Encapsulation concept
// Data ko private rakh kar sirf methods ke through access karna.
class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log('Encapsulation balance:', account.getBalance());

// Abstraction concept
// Complex implementation ko hide karke sirf important behavior expose karna.
class Vehicle {
  start() {
    throw new Error('start() method must be implemented');
  }

  stop() {
    throw new Error('stop() method must be implemented');
  }
}

class Car extends Vehicle {
  start() {
    console.log('Car started');
  }

  stop() {
    console.log('Car stopped');
  }
}

const myCar = new Car();
myCar.start();
myCar.stop();

// Polymorphism concept
// Same method different classes me different behavior ke saath.
class Animal {
  makeSound() {
    console.log('Animal sound');
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('Bark');
  }
}

class Cat extends Animal {
  makeSound() {
    console.log('Meow');
  }
}

const animals = [new Animal(), new Dog(), new Cat()];
animals.forEach((animal) => animal.makeSound());

// Class ke important points
// 1. class keyword se class define hoti hai
// 2. constructor se initial values set hoti hain
// 3. methods class ke andar define hote hain
// 4. inheritance ke liye extends use hota hai
// 5. super() parent constructor ko call karta hai
// 6. static methods class level par hote hain

// Example: class ke through data type create karna aur validation karna
class UserAccount {
  constructor(username, age, email) {
    this.username = this.validateUsername(username);
    this.age = this.validateAge(age);
    this.email = this.validateEmail(email);
  }

  validateUsername(name) {
    if (typeof name !== 'string' || name.trim() === '') {
      throw new Error('Username string hona chahiye');
    }
    return name.trim();
  }

  validateAge(age) {
    if (!Number.isInteger(age) || age < 18) {
      throw new Error('Age 18 ya usse zyada hona chahiye');
    }
    return age;
  }

  validateEmail(email) {
    if (typeof email !== 'string' || !email.includes('@')) {
      throw new Error('Email valid hona chahiye');
    }
    return email;
  }

  showInfo() {
    console.log(`User: ${this.username}, Age: ${this.age}, Email: ${this.email}`);
  }
}

try {
  const user = new UserAccount('Prince', 21, 'prince@example.com');
  user.showInfo();
} catch (error) {
  console.log('Validation error:', error.message);
}

try {
  const invalidUser = new UserAccount('', 15, 'wrong-email');
  invalidUser.showInfo();
} catch (error) {
  console.log('Validation error:', error.message);
}
