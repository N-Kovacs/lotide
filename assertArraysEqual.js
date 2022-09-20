const assertArraysEqual = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      console.log(`🛑🛑🛑 Assertion Failed, arrays are not equal`);
      return;
    }
  }
  console.log(`✅✅✅ Assertion Passed, arrays are equal`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [1, 2, 1]); // => false

