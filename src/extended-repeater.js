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
function repeater(str, options ) {
  let separator,
      addSeparator,
      addition;
  options.addition || options.addition === false || options.addition === null ? addition = options.addition : addition = '';
  options.separator ? separator = options.separator : separator = '+';
  options.additionSeparator ? addSeparator = options.additionSeparator : addSeparator = '|';

    let addRepeat = addition + (addSeparator + addition).repeat(options.additionRepeatTimes - 1);
    return str + addRepeat + (separator + str + addRepeat).repeat(options.repeatTimes - 1);

}

//console.log(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }))
//str ((addition addSepar) * addRepTimes) separator



module.exports = {
  repeater
};
