const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.deep.equal({ data: 'Successful response from the API' });

        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('should return a rejected promise when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then(() => {
        done(new Error('Expected promise to be rejected, but it resolved.'));
      })
      .catch((error) => {
        expect(error.message).to.equal('API request failed');

        done();
      });
  });
});
