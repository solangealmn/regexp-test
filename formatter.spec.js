const mocha = require("mocha");
const chai = require("chai");
const formatter = require("./formatter");
const expect = chai.expect;

// "" -> "0"
// "12" -> "12.00"
// "12.30" ->  "12.30"
// "12.999" -> "13.00"
// "12,30" ->  "12.30"
// "12,999" -> "13.00"


describe("formatter", function() {
  describe("#valueToAPIFormat", function() {

  });
});
