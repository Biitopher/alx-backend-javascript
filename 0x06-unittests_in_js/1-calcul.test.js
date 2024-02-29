const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers when type is SUM', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 2.6), 4);
    assert.strictEqual(calculateNumber('SUM', 5.5, 2.3), 8);
  });

  it('should return the subtraction of rounded numbers when type is SUBTRACT', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 2.3), 3);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.6), -1);
  });

  it('should return the division of rounded numbers when type is DIVIDE', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 6, 3), 2);
    assert.strictEqual(calculateNumber('DIVIDE', 7.8, 2.6), 3);
  });

  it('should return "Error" when attempting to divide by 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 8, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 3.6, 0), 'Error');
  });

  it('should throw an error for invalid type', () => {
    assert.throws(() => calculateNumber('INVALID_TYPE', 1, 2), { message: 'Invalid type. Use SUM, SUBTRACT, or DIVIDE.' });
  });
});
