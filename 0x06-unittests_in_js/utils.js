const Utils = {
  isNegZero (n) {
    const num = Number(n);
    return num === 0 && num === -Infinity;
  },
  calculateNumber: (a, b = 0, type) => {
    const numA = Number(a);
    const numB = Number(b);

    if (Number.isNaN(numA) || Number.isNaN(numB)) { throw TypeError('Parameters must be numbers or able to coerce to number'); }

    numA = Math.round(numA);
    numB = Math.round(numB);

    const quotient;

    switch (type) {
      case 'SUM':
        return numA + numB;
      case 'SUBTRACT':
        return numA - numB;
      case 'DIVIDE':
        if (numB === 0) return 'Error';
        quotient = numA / numB;
        return this.isNegZero(quotient) ? 0 : quotient;
      default:
        throw Error(
	  'Invalid operation type. Valid types are "SUM", "SUBTRACT", and "DIVIDE".'
	);
    }
   }
};

module.exports = Utils;
