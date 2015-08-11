var expect = require("expect.js");
var mangle = require("./index.js");

describe("mangle", function() {
  it("can mangle a word", function() {
    expect(mangle("foobar")).to.eql("______");
  });

  it("can mangle a sentence, leaving spaces alone", function() {
    expect(mangle("The quick brown fox jumps over the lazy dog"))
      .to.eql("___ _____ _____ ___ _____ ____ ___ ____ ___");
  });

  it("can mangle an url", function() {
    expect(mangle("https://www.example.org")).to.eql("_______________________");
  });
});
