import Car from "./10-car.js";

const cloneSymbol = Symbol('cloneSymbol');

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
    this[cloneSymbol] = {};
  }

  get range() {
    return this._range;
  }

  // Override the cloneCar method to return an instance of Car
  cloneCar() {
    const clone = new Car();
    
    for (const key of Object.keys(this)) {
      clone[key] = this[key];
      this[cloneSymbol][key] = this[key];
    }
    
    return clone;
  }
}

export default EVCar;
