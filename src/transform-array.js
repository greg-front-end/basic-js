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
function transform(arr) {

  const msg = `'arr' parameter must be an instance of the Array!`

  if(!Array.isArray(arr)) {
    throw new Error(msg)
 }

  const discardNext = '--discard-next'
  const discardPrev = '--discard-prev'
  const doubleNext = '--double-next'
  const doublePrev = '--double-prev'
  const newArr = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === discardNext && arr[i + 1]) i += 2
    if (arr[i] ===  doublePrev && arr[i - 2] !== discardNext && typeof arr[i - 1] === 'number') newArr.push(arr[i - 1])
    if (arr[i] === discardPrev && arr[i - 2] !== discardNext) newArr.pop()
    if (arr[i] === doubleNext && typeof arr[i + 1] === 'number') newArr.push(arr[i + 1])
    if (arr[i] !== discardNext && arr[i] !== discardPrev && arr[i] !== doubleNext && arr[i] !== doublePrev) {
      newArr.push(arr[i])
    } 
 }
  
  return newArr
}

module.exports = {
  transform
};
