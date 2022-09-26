const eqArrays = function(firstArray, secondArray) {
  let arrayMaxLength = firstArray.length
  if (secondArray.length > arrayMaxLength){
    arrayMaxLength = secondArray.length
  }

  for (let i = 0; i < arrayMaxLength; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  
  return true
};

module.exports = eqArrays
