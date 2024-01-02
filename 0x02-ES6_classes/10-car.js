const cloneSymbol = Symbol('cloneSymbol');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this[cloneSymbol] = {};
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    // Create a new instance of the class
    const clone = new this.constructor();
    
    // Copy the original values to the clone
    for (const key of Object.keys(this)) {
      clone[key] = this[key];
      this[cloneSymbol][key] = this[key];
    }
    
    // Return the clone
    return clone;
  }
}

export default Car;
