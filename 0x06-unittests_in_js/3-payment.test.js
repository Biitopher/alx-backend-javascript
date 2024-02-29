const {describe, it} = require('mocha');
const sinon = require('sinon');
const { sendPaymentRequestToApi } = require('./3-payment');
const assert = require("assert");
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() => {
  it('should call Utils.calculateNumber with the correct arguments and log the result', function() => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    assert(calculateNumberSpy.calledOnce);

    calculateNumberSpy.restore();
  });
});
