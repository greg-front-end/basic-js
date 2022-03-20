const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrixOfCats) {
  return matrixOfCats.reduce((res, arr) => {

    arr.forEach(item => {
      if (item === "^^") res++
    });

    return res
  }, 0)
}

module.exports = {
  countCats
};
