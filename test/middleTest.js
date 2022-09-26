const middle = require('../middle');
const assert = require('chai').assert;

describe("#head", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual(middle(['5']), []); 
  });
  it("returns [Lighthouse, Labs]  for [Hello, Lighthouse, Labs, Middle]", () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs", "Middle"]), ["Lighthouse", "Labs"]); 
  });
});


// assertArraysEqual(middle([], []), []);
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]),  [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);