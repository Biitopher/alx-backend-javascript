// 2-calcul_chai.test.js
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber function', () => {
  it('should return the sum of rounded numbers when type is SUM', () => {
    const res = calculateNumber('SUM', 4, 2);
    expect(res).to.equal(6);
  });

  it('should return the subtraction of rounded numbers when type is SUBTRACT', () => {
    const res = calculateNumber('SUBTRACT', 1.4, 2.2);
    expect(res).to.equal(-1);
  });

  it('should return the subtraction of rounded numbers when type is SUBTRACT', () => {
    const res = calculateNumber('SUBTRACT', 4.9, 2.7);
    expect(res).to.equal(2);
  });

  it('should return the division of rounded numbers when type is DIVIDE', () => {
    const res = calculateNumber('DIVIDE', 10, 2);
    expect(res).to.equal(5);
  });

  it('should return the division of rounded numbers when type is DIVIDE', () => {
    const res = calculateNumber('DIVIDE', 1.7, 0);
    expect(res).to.equal('Error');
  });

  it('should return the division of rounded numbers when type is DIVIDE', () => {
    const res = calculateNumber('DIVIDE', 1.4, 4.6);
    expect(res).to.equal(0.2);
  });
});
