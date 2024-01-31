const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should round and return the sum of two integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round and return the sum of an integer and a float', () => {
    assert.strictEqual(calculateNumber(1.6, 3), 5);
  });

  it('should round and return the sum of two floats with one being a half', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
