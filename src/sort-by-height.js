const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const output = [...arr].sort((a,b) => a - b).filter(x => x !== -1);

  arr.forEach((i, x) => {
    if(i == -1) {
      output.splice(x, 0, -1);
    }
  })

  return output;
}

module.exports = {
  sortByHeight
};
