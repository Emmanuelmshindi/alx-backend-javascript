const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with successful response', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({data: 'Successful response from the API' });
        done();
      })
      .catch(done);
  });
  it('should return a rejected promise when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then((respond) => {
        done(new Error('Expected promise to be rejected'));
      })
      .catch((error) => {
        expect(error.message).to.equal('API request failed');
        done();
      });
  });
});
