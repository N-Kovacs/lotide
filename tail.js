const tail = function(inputArray) {
  let newArray = [];
  for (let i = 1; i < inputArray.length; i++) {
    newArray.push(inputArray[i]);
  }
  return newArray;
};

module.exports = tail;

