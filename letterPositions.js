const assertArraysEqual = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      console.log(`🛑🛑🛑 Assertion Failed, [${firstArray}] is not equal to [${secondArray}]`);
      return;
    }
  }
  console.log(`✅✅✅ Assertion Passed, [${firstArray}] is equal to [${secondArray}]`);
};


const letterPositions = function(sentence) {
  const results = {};
  const lowercase = sentence.toLowerCase();
  let position = 0
  for (let letters of lowercase){
    if(!results[letters]){
      results[letters] = [];
    }
    results[letters].push(position);
    position ++
  }
  delete results[" "];
  delete results["\n"]
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);