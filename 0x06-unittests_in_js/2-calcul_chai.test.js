const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should round and add two floats', () => {
    expect(calculateNumber('SUM', 1.5, 3.2)).to.equal(5);
  });

  it('should round and subtract an integer from a float', () => {
    expect(calculateNumber('SUBTRACT', 4.6, 3)).to.equal(2);
  });

  it('should round and divide two floats', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('should round and divide two numbers, one being zero, and return an error', () => {
   expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
