const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let mx = 0
  const arrN = (n).toString().split('')

  for (let i = 0; i < arrN.length; i++) {
      const copArrN = arrN.slice()
      copArrN.splice(i, 1)
      mx = Math.max(mx, copArrN.join(''))
  }
  
  return mx
}

module.exports = {
  deleteDigit
};
