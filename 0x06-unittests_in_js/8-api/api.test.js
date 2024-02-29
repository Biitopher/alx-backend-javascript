const request = require('request');
const server = require('./api');
const assert = require('assert');

describe('API Test', function () {
    after(function () {
        server.close();
    });

    describe('GET /', function () {
        it('responds with status code 200', function (done) {
            request.get('http://localhost:7865', function (error, response) {
                assert.equal(response.statusCode, 200);
                done();
            });
        });

        it('responds with correct result', function (done) {
            request.get('http://localhost:7865', function (error, response, body) {
                assert.equal(body, 'Welcome to the payment system');
                done();
            });
        });
    });
});