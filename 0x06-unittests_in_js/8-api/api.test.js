const request = require('request');
const { expect } = require('assert');
const server = require('./api');

const BASE_URL = 'http://localhost:7865';

describe('Index Page', () => {
    after( () {
        server.close();
    });
describe('GET /', () {
  it('returns status code 200', (done) => {
    request.get(BASE_URL, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('returns the correct result', (done) => {
    request.get(BASE_URL, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

});
