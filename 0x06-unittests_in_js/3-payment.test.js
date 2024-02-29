const { expect } = require('chai');
const sinon = require('sinon');
const { sendPaymentRequestToApi } = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with the correct arguments and log the result', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

    expect(sinon.stub(console, 'log').calledWith('The total is: 120')).to.be.true;

    calculateNumberSpy.restore();
  });
});
