// Inheritance concept
// Child class parent class ke properties aur methods inherit karti hai.

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

class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
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
