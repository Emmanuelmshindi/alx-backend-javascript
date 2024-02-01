const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should round and add two floats', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.2), 5);
  });

  it('should round and subtract an integer from a float', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 4.6, 3), 2);
  });

  it('should round and divide two floats', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

   it('should round and divide two numbers, one being zero, and return an error', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
