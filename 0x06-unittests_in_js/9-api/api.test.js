const chai = require('chai');
const chaiHttp = require('chai-http');
const api = require('./api');

const app = api.app;

chai.use(chaiHttp);
const expect = chai.expect;

describe('Index page', () => {
  it('should return status code 200 for GET /', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return the correct result for GET /', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });

  it('should have the "content-type" header set to "text/html"', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.header('content-type', 'text/html; charset=utf-8');
        done();
      });
  });
});

describe('Cart page', () => {
  it('should return status code 200 when cart id is a number', (done) => {
    chai.request(app)
      .get('/cart/2')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should returun status code 404 when cart id is not a number', (done) => {
    chai.request(app)
      .get('/cart/abc')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

  it('should return status code 404 when cart id is a negative number', (done) => {
    chai.request(app)
      .get('cart/-5')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

  it('should return status code 404 when cart id is not provided', (done) => {
    chai.request(app)
      .get('cart/')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});
