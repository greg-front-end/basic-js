const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const k = 0.693

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (Number(sampleActivity) === NaN || Number(sampleActivity) <= 0 || typeof sampleActivity !== 'string' || sampleActivity.length === 0) {
    return false
  }
  let time = Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / (k / HALF_LIFE_PERIOD)
  if (Math.ceil(time) > 0) return Math.ceil(time)
  else return false
}

module.exports = {
  dateSample
};
