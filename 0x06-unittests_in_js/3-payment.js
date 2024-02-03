const utils = require('./utils');

module.exports = sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const total = utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${total}`);
  return total;
};
