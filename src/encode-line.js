const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
encodeLine('aaaatttt');
function encodeLine(str) {
  let result = '';
  let counter = 1;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == str.charAt(i + 1)) {
      counter++;
    } else {
      result += counter > 1 ? `${counter.toString()}${str.charAt(i)}` : str.charAt(i);
      counter = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
