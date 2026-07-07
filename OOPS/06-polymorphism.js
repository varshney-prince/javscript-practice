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
