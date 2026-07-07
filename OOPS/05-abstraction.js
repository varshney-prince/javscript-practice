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
