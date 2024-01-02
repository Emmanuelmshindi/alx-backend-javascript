class Building {
  constructor(sqft) {
    this._sqft = this.validateNumber(sqft, 'Sqft');
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }

  // Validation function for numbers
  validateNumber(value, attribute) {
    const num = Number(value);
    if (isNaN(num) || typeof num !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
    return num;
  }
}

export default Building;
