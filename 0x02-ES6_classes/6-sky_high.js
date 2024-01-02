import Building from './5-building.js';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft)
    this._floors = this.validateNumber(floors, 'Floors');
  }

  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }

  validateNumber(value, attribute) {
    const num = Number(value);
    if (isNaN(num) || typeof num !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
    return num;
  }
}

export default SkyHighBuilding;
