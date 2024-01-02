class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateString(name, 'Name');
    this._length = this.validateNumber(length, 'Length');
    this._students = this.validateStudents(students, 'Students');
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this.validateString(newName, 'name');
  }

  // Getter and setter for length
  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this.validateNumber(newLength, 'length');
  }

  // Getter and setter for students
  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this.validateStudents(newStudents, 'students')
  }

  // Validation functions
  validateString(value, attribute) {
    if (typeof value != 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }

  validateNumber(value, attribute) {
    const num = Number(value);
    if (isNaN(num) || typeof num !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
    return num;
  }

  validateStudents(value, attribute) {
    if (!Array.isArray(value) || !value.every(item => typeof item === 'string')) {
      throw new TypeError(`${attribute} must be an array of strings`);
    }
    return value;
  }
}

export default HolbertonCourse;
