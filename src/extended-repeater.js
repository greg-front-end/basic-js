const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, { addition, additionRepeatTimes, repeatTimes = 1, separator = '+', additionSeparator = '|' } = {}) {
  let newStr = ''
  if (addition === undefined && addition !== null) {
    newStr = Array(repeatTimes).fill(str).join(separator)
  } else {
    let strSeparator = Array(additionRepeatTimes).fill(String(addition)).join(additionSeparator)
    newStr = Array(repeatTimes).fill(str + strSeparator).join(separator)
  }
  return newStr
}
module.exports = {
  repeater
};
