const taxCalculator = require("../Tax App.js");

const chai = require("chai");
const expect = chai.expect;

describe("Calculating Tax according to Salary...", function() {
    it("should correctly calculate Tax owed", function() {
        let income = 354301;
        let expected = 63774.18;
        let actual = taxCalculator.calculate(income);
        expect(actual).to.equal(expected);
    });
});