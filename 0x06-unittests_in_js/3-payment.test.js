const sinon = require('sinon');

const { assert } = require('chai');

const Utils = require('./utils');
const calculateNumber = Utils.calculateNumber;
const sendPaymentRequestToApi = require('./3-payment');

describe('Function tests', () => {
  it('should return the same output', () => {
    const calcSpy = sinon.spy(calculateNumber);
    const sendSpy = sinon.spy(sendPaymentRequestToApi);

    const resultCalc = Utils.calculateNumber('SUM', 100, 20);
    const resultSend = sendPaymentRequestToApi(100, 20);

    assert.equal(resultCalc, resultSend);

    calcSpy.restore();
    sendSpy.restore();
  })
})
