const mocha = require('mocha');
const sinon = require('sinon');
const { expect, assert } = require('chai');

const utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const { spy } = require('sinon');

describe('sendPaymentRequestToApi', () => {
  it('should return the same output', () => {
    const calcSpy = sinon.spy(utils, 'calculateNumber');
    const consoleSpy = sinon.spy(console, 'log');

    const apiRequestRes = sendPaymentRequestToApi(100, 20);

    expect(calcSpy.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
    expect(consoleSpy.calledWithExactly('The total is: 120')).to.equal(true);
    expect(utils.calculateNumber('SUM', 100, 20)).to.equal(apiRequestRes);

    calcSpy.restore();
    consoleSpy.restore();
  });
});
