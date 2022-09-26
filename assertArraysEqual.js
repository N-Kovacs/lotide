const assertArraysEqual = function(firstArray, secondArray) {
  let arrayMaxLength = firstArray.length
  if (secondArray.length > arrayMaxLength){
    arrayMaxLength = secondArray.length
  }
  for (let i = 0; i < arrayMaxLength; i++) {
    if (firstArray[i] !== secondArray[i]) {
      console.log(`🛑🛑🛑 Assertion Failed, [${firstArray}] is not equal to [${secondArray}]`);
      return;
    }
  }
  console.log(`✅✅✅ Assertion Passed, [${firstArray}] is equal to [${secondArray}]`);
};

module.exports = assertArraysEqual;


