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


const takeUntil = function(array, callback) {
  let outputArray = [];
  for (let value of array) {
    if (callback(value)) {
      break;
    }
    outputArray.push(value);
  }
  return outputArray;
};



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2,]);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ',') , ["I've", "been", "to", "Hollywood"]);
const data3 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data3, x => x === 'been') , ["I've"]);
