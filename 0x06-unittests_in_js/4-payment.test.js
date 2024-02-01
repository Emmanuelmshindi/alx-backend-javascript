const sinon = require('sinon');

const { assert } = require('chai');

const Utils = require('./utils');
const calculateNumber = Utils.calculateNumber;
const sendPaymentRequestToApi = require('./3-payment');

describe('4-payment.js', () => {
  it('should call Utils.calculateNumber with correct arguments and log the correct message', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    const consoleSpy = sinon.spy(console, 'log');
    
    const result = sendPaymentRequestToApi(100, 20);

    assert.isTrue(calculateNumberStub.calledWith('SUM', 100, 20));

    assert.isTrue(consoleSpy.calledWith('The total is: 10'));

    calculateNumberStub.restore();
    consoleSpy.restore();
  });
});
