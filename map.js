const assertArraysEqual = function(firstArray, secondArray) {
  let arrayMaxLength = firstArray.length;
  if (secondArray.length > arrayMaxLength) {
    arrayMaxLength = secondArray.length;
  }
  for (let i = 0; i < arrayMaxLength; i++) {
    if (firstArray[i] !== secondArray[i]) {
      console.log(`🛑🛑🛑 Assertion Failed, [${firstArray}] is not equal to [${secondArray}]`);
      return;
    }
  }
  console.log(`✅✅✅ Assertion Passed, [${firstArray}] is equal to [${secondArray}]`);
};


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const words = ["ground", "control", "to", "major", "tom"];


assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(map(words, word => word[1]), ["r", "o", "o", "a", "o"]);
assertArraysEqual(map(words, word => word[0].toUpperCase()), ["G", "C", "T", "M", "T"]);