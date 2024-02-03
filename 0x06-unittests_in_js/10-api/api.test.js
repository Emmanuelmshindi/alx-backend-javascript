const request = require('request');
const { expect } = require('chai');

describe('Integration Testing', () => {
  describe('GET /', () => {
    it('Code: 200 | Body: Welcome to the payment system', (done) => {
      const options = {
        url: 'http://localhost:7865',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('GET /cart/12', () => {
    it('Responds with status code 200 and correct message', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/12',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });
  });
  
  describe('GET /cart/3', () => {
    it('Responds with status code 200 and correct message', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/3',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 3');
        done();
      });
    });
  });

  describe('GET /cart/115', () => {
    it('Responds with status code 200 and correct message', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/115',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 115');
        done();
      });
    });
  });

  describe('GET /cart/5b', () => {
    it('Responds with status code 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/5b',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/a21b', () => {
    it('Responds with status code 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/a21b',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/', () => {
    it('Responds with status code 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /available_payments JSON string', () => {
    it('Responds with status code 200 and correct json string in the body', (done) => {
      const options = {
        url: 'http://localhost:7865/available_payments',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal(
	  '{"payment_methods":{"credit_cards":true,"paypal":false}}'
	);
        done();
      });
    });
  });

  describe('GET /available_payments JSON parsed', () => {
    it('Responds with status code 200 and correct json obj when parsed', (done) => {
      const options = {
        url: 'http://localhost:7865/available_payments',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        const bodyParsed = JSON.parse(body);
        const referenceBody = {
	  payment_methods: {
            credit_cards: true,
            paypal: false
          }
	};
        expect(bodyParsed).to.deep.equal(referenceBody);
        done();
      });
    });
  });

  describe('POST /login with body', () => {
    it('Responds with 200 status code and name Betty', () => {
      const options = {
        url: 'http://localhost:7865/login',
        method: 'GET',
        json: {
	  username: 'Betty'
	}
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });

  describe('POST /login with no body', () => {
    it('Responds with 200 and correct name Undefined', (done) => {
      const options = {
        url: 'http://localhost:7865/login',
        method: 'POST'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome undefined');
        done();
      });
    });
  });
});
