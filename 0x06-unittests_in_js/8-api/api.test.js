const request = require('request');
const { expect } = require('chai');

describe('API Test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET /responds with status code 200', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});