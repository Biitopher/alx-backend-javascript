const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function() {

    it('should return the sum of rounded numbers when type is SUM', function() {
      const res = calculateNumber("SUM", 1, 2);
      assert.strictEqual(res, 3);
    });
    it('should return the subtraction of rounded numbers when type is SUBTRACT', function() {
      const res = calculateNumber("SUBTRACT", 1.4, 2.2);
      assert.strictEqual(res, -1);
    });
    it('should return the subtraction of rounded numbers when type is SUBTRACT', function() {
      const res = calculateNumber("SUBTRACT", 4.9, 2.7);
      assert.strictEqual(res, 2);
    });
    it('should return the division of rounded numbers when type is DIVIDE', function() {
      const res = calculateNumber("DIVIDE", 4, 2);
      assert.strictEqual(res, 2);
    });
    it('should return the division of rounded numbers when type is DIVIDE', function() {
      const res = calculateNumber("DIVIDE", 1.7, 0);
      assert.strictEqual(res, "Error");
    });
    it('should return the division of rounded numbers when type is DIVIDE', function() {
      const res = calculateNumber("DIVIDE", 1.4, 4.6);
      assert.strictEqual(res, 0.2);
    });
});