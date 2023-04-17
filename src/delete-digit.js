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
  let numberString = n.toString();
  let max = 0;
  
  for (var i = 0; i < numberString.length; i++) {
    let holder = Number(numberString.slice(0, i) + numberString.slice(i + 1));
    if (holder > max) {
      max = holder;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
