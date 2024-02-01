const assert = require('assert');
const sinon = require('sinon');

const { sendPaymentRequestToApi } = require('./4-payment');

const consoleSpy = sinon.spy(console, 'log');

describe('Payment Test Suite', () => {
  beforeEach(() => {
    consoleSpy.resetHistory();
  });

  afterEach(() => {
    assert.strictEqual(consoleSpy.calledOnce, true)
  });

  it('should log "The total is: 120" for payment request with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    assert.strictEqual(consoleSpy.calledWith('The total is: 120'), true);
  });

  it('should log "The total is: 20" for payment request with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    assert.strictEqual(consoleSpy.calledWith('The total is: 20'), true);
  });
});
