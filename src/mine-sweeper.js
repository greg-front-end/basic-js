const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let mineCount = []

  for (let r = 0; r < matrix.length; r++) {
      mineCount.push([])
      for (let c = 0; c < matrix[r].length; c++) {
          mineCount[r][c] = 0
          // above
          if (matrix[r][c - 1] === true) {
              mineCount[r][c]++
          }
          // below
          if (matrix[r][c + 1] !== undefined) {
              if (matrix[r][c + 1] === true) {
                  mineCount[r][c]++
              }
          }
          // left
          if (matrix[r - 1] !== undefined) {
              if (matrix[r - 1][c] === true) {
                  mineCount[r][c]++
              }
          }
          // right
          if (matrix[r + 1] !== undefined) {
              if (matrix[r + 1][c] === true) {
                  mineCount[r][c]++
              }
          }
          // donw right
          if (matrix[r + 1] !== undefined) {
              if (matrix[r + 1][c + 1] === true) {
                  mineCount[r][c]++
              } 
          }
          // down left
          if (matrix[r + 1] !== undefined) {
              if (matrix[r + 1][c - 1] === true) {
                  mineCount[r][c]++
              } 
          }
          // top right
          if (matrix[r - 1] !== undefined) {
              if (matrix[r - 1][c + 1] === true) {
                  mineCount[r][c]++
              } 
          }
          // top left
          if (matrix[r - 1] !== undefined) {
              if (matrix[r - 1][c - 1] === true) {
                  mineCount[r][c]++
              } 
          }
      }
  }
  return mineCount
}

module.exports = {
  minesweeper
};
