class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log("nothing");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private driver(): void {
    console.log("anything");
  } // --> only this class can take the methode driver
  startDrivingProcess(): void {
    this.driver();
    this.honk();
  }
}

const car = new Car(4, "violette");
car.startDrivingProcess();
