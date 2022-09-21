const eqArrays = function(firstArray, secondArray) {
  
  let arrayMaxLength = firstArray.length;
  if (secondArray.length > arrayMaxLength) {
    arrayMaxLength = secondArray.length;
  }

  for (let i = 0; i < arrayMaxLength; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //console.log(Object.keys(object1).length, Object.keys(object2).length)
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    //console.log(`🛑🛑🛑 Assertion Failed object length`)
    return false;
  }
  for (let checks in object1) {
    //console.log(object1[checks], object2[checks])
    if (Array.isArray(object1[checks]) && Array.isArray(object2[checks])) {
      //console.log(eqArrays(object1[checks], object2[checks]))
      if (eqArrays(object1[checks], object2[checks]) === false) {
        //console.log(`🛑🛑🛑 Assertion Failed (eqarrays)`)
        return false;
      }
    } else {
      if (object1[checks] !== object2[checks]) {
        //console.log(`🛑🛑🛑 Assertion Failed value mismatch`)
        return false;
      }
    }
  }
  //console.log(`✅✅✅ Assertion Passed`);
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed, ${inspect(actual)} is equal to ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed, ${inspect(actual)} is not equal to ${inspect(expected)}`);
  }
};

assertObjectsEqual({a:2, b:4}, {a:2,b:3});