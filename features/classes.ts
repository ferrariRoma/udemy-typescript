// Blueprint to create an object with some fields(values) and methods (functions) to represent a ‘thing’

// this sentence can be seperated two part.

// First, Define a set of ***fields (values)*** and methods (functions) to represent a ‘thing’

// Second, Define a set of fields (values) and ***methods (functions)*** to represent a ‘thing’

class Vehicle {
  constructor(protected color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('Orange');
console.log(vehicle.color);

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car('blue');
car.startDrivingProcess();
