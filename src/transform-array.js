const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let arrayCopy = arr.map((item) => item);
  let newArray = [];

  for (let i = 0; i < arrayCopy.length; i++) {
      if (typeof arrayCopy[i] === 'string') {
        let nextElem = arrayCopy[i+1];
        let prevElem = arrayCopy[i-1];
        if (arrayCopy[i] === '--discard-next') {
          if (nextElem) {
            arrayCopy.splice(i+1, 1);
          }
        } else if (arrayCopy[i] === '--double-next') {
          if (nextElem) {
            arrayCopy.splice(i+1, 0, nextElem);}
        } else if(arrayCopy[i] === '--double-prev') {
          let prevElem = arrayCopy[i-1];
          if (prevElem) {
            newArray.splice(i - 1, 0, prevElem);
          }
        } else if (arrayCopy[i] === '--discard-prev') {
          if (prevElem){
            newArray.splice(i-1,1);
          }
        }
      } else {
        newArray.push(arrayCopy[i]);
      }
  }
return newArray;
}

module.exports = {
  transform
};
