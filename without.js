const assertArraysEqual = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      console.log(`🛑🛑🛑 Assertion Failed, arrays are not equal`);
      return;
    }
  }
  console.log(`✅✅✅ Assertion Passed, arrays are equal`);
};

const without = function(inputArray, removedArray) {
  let outputArray = inputArray.slice(0);
  let matchs = [];
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < removedArray.length; j++) {
      if (inputArray[i] === removedArray[j]) {
        matchs.push(i);
      }
    }
  }
  for (let i = (matchs.length - 1); i >= 0; i--) {
    outputArray.splice(matchs[i], 1);
  }
  return outputArray;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

assertArraysEqual(without(["1", "2", "3", "4"], [1, 2, "3"]), ["1", "2", "4"]);
assertArraysEqual(without([2, 1, 2, 3], [1, 2]), [3]);
assertArraysEqual(without([3, 2, 1, 2, 3], [1, 2]), [3,3]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
//Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
