const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  const regExp = /[A-Za-z]/g
  let res = ''
  if (!Array.isArray(arr)) {
    return false
  }
  arr.forEach(name => {
    if (typeof name === 'string' && name.includes(name)) {
      name = name.trim()
      res += name[0]
    }
  })
  if (res) {
    return res.toUpperCase().split('').sort().join('').toUpperCase()
  } else {
    return false
  }
}

module.exports = {
  createDreamTeam
};
