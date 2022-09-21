const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(inputstring){
  const lettercount = {};
  const lowercase = inputstring.toLowerCase();
  for (let letters of lowercase){
    if(!lettercount[letters]){
      lettercount[letters] = 0;
    }
    lettercount[letters] ++;
  }
  delete lettercount[" "];
  delete lettercount["\n"]
  return lettercount;
}

let string = "lighthouse in the house"
let testcases = countLetters(string)

assertEqual(testcases.l, 1)
assertEqual(testcases.i, 2)
assertEqual(testcases.h, 4)