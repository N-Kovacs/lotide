const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(firstArray, secondArray) {
  
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  for (let i = 0; i < secondArray.length; i++) {
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
  if (Object.keys(object1).length !== Object.keys(object2).length){
    //console.log(`🛑🛑🛑 Assertion Failed object length`)
    return false
  }
  for(let checks in object1){
    //console.log(object1[checks], object2[checks])
    if (Array.isArray(object1[checks]) && Array.isArray(object2[checks])){
      //console.log(eqArrays(object1[checks], object2[checks]))
      if(eqArrays(object1[checks], object2[checks]) === false){
        //console.log(`🛑🛑🛑 Assertion Failed (eqarrays)`)
        return false
      }
    } else {
      if (object1[checks] !== object2[checks]){
        //console.log(`🛑🛑🛑 Assertion Failed value mismatch`)
        return false
      }
    }
  }
  //console.log(`✅✅✅ Assertion Passed`);
  return true
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true) ; // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
