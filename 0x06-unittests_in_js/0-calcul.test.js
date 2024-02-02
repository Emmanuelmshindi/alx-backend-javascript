const assert = require('assert');
const mocha = require('mocha');

const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should round and return the sum of two integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, -1), 0);
    assert.strictEqual(calculateNumber(1, -4), -3);
  });

  it('should round and return the sum of an integer and a rounded float', () => {
    assert.strictEqual(calculateNumber(1.6, 3), 5);
    assert.strictEqual(calculateNumber(1, -2.3), -1);
    assert.strictEqual(calculateNumber(0.1, 0), 0);
  });

  it('should round and return the sum of two floats with one being a half', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return a rounded float if only one is provided', () => {
    assert.strictEqual(calculateNumber(1.5), 2);
    assert.strictEqual(calculateNumber(3), 3);
  });

  it('should cast non-numbers into numbers', () => {
    assert.strictEqual(calculateNumber(true, '3'), 4);
    assert.strictEqual(calculateNumber(1, '3.2'), 4);
    assert.strictEqual(calculateNumber('1.5', '2.1'), 4);
  });

  it('should throw typeError if either parameter cannot be typecast into a number', () => {
    assert.throws(() => calculateNumber('hello'), {
      name: 'TypeError',
      message: 'Parameters must be numbers'
    });
    assert.throws(() => calculateNumber('abc', 3), {
      name: 'TypeError',
      message: 'Parameters must be numbers'
    });
  });
});
