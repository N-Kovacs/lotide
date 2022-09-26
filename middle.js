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

module.exports = middle;

