// TEST/ASSERTION FUNCTIONS
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ACTUAL FUNCTION
const assertArraysEqual = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      console.log(`🛑🛑🛑 Assertion Failed, [${firstArray}] is not equal to [${secondArray}]`);
      return;
    }
  }
  console.log(`✅✅✅ Assertion Passed, [${firstArray}] is equal to [${secondArray}]`);
};

const middle = function(inputArray) {
  let outputArray = [];
  if (inputArray.length > 2 && inputArray.length % 2 === 0) {
    outputArray = [inputArray[(inputArray.length / 2) - 1], inputArray[(inputArray.length / 2)]];
  }
  if (inputArray.length > 2 && inputArray.length % 2 === 1) {
    outputArray = [inputArray[Math.floor(inputArray.length / 2)]];
  }
  return outputArray;
};

// Testcode

assertArraysEqual(middle([], []), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),  [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);