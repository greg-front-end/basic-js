const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  const seasons = ['winter', 'spring', 'summer', 'autumn']
  const dateNotPassed = 'Unable to determine the time of year!'
  const invalidDate = new Error("Invalid date!")
  let month = ''

  if (date === undefined) {
    return dateNotPassed
  }

  for (let key in date) {
    if (date[key]) {
      throw invalidDate
    }
  }

  if (date instanceof Date) {
    month = date.getMonth() === 11 ? 0 : Math.floor((date.getMonth() + 1) / 3)
    return seasons[month]
  } else {
    throw invalidDate
  }

}

module.exports = {
  getSeason
};
