// JavaScript Objects: ways of creation and methods

// 1. Object literal
const person = {
  name: "Alice",
  age: 25,
  greet() {
    return `Hello, my name is ${this.name}`;
  }
};

console.log("Object literal:", person);
console.log("Method call:", person.greet());

// 2. Creating object with new Object()
const car = new Object();
car.brand = "Toyota";
car.model = "Corolla";
car.showInfo = function () {
  return `${this.brand} ${this.model}`;
};

console.log("new Object():", car);
console.log("Method call:", car.showInfo());

// 3. Creating object with Object.create()
const prototype = {
  country: "India",
  showCountry() {
    return this.country;
  }
};

const student = Object.create(prototype);
student.name = "Rahul";

console.log("Object.create():", student);
console.log("Inherited method:", student.showCountry());

// 4. Constructor function
function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}`;
};

const book = new Book("JavaScript Basics", "Prakash");
console.log("Constructor function:", book);
console.log("Prototype method:", book.info());

// 5. Class syntax
class Employee {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  describe() {
    return `${this.name} works as ${this.role}`;
  }
}

const emp = new Employee("Sita", "Developer");
console.log("Class syntax:", emp);
console.log("Class method:", emp.describe());

// 6. Prototypes
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name} makes a sound`;
};

const dog = new Animal("Dog");
console.log("Prototype example:", dog.speak());
console.log("Prototype property:", Object.getPrototypeOf(dog) === Animal.prototype);

// Object methods
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

console.log("Keys:", Object.keys(user));
console.log("Values:", Object.values(user));
console.log("Entries:", Object.entries(user));

const extraInfo = { city: "Mumbai", profession: "Engineer" };
console.log("Assign:", Object.assign({}, user, extraInfo));
console.log("Has own property:", user.hasOwnProperty("age"));

// Freeze example
const frozenUser = Object.freeze({ name: "Nina" });
console.log("Frozen object:", frozenUser);

// Seal example
const sealedUser = Object.seal({ name: "Karan" });
sealedUser.name = "Arjun";
console.log("Sealed object:", sealedUser);
