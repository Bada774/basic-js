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
function repeater(str, options) {
  let addition = []
  if (options.addition !== undefined) {
    let repeatTimes = options.additionRepeatTimes || 1;
    for (let i = 0; i < repeatTimes; i++) {
      addition.push('' + options.addition);
    }
  }
  let additionString = addition.join(options.additionSeparator || '|');

  let opRepeatTimes = options.repeatTimes || 1; 
  let array = [];
  
  for (let i = 0; i < opRepeatTimes; i++) {
    array.push(str + additionString);
  }

  return array.join(options.separator || '+');
}

module.exports = {
  repeater
};
