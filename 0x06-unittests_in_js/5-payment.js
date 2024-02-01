const utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  return `The total is: ${total}`;
}

module.exports = sendPaymentRequestToApi;
