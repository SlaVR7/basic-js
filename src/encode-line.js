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
function encodeLine(str) {
    let arr = str.split('');
    let sum = 1;
    return  arr.reduce(function (accumulator, item, index, array) {
        if (array[index] === array[index + 1]) {
            sum++;
        } else {
            let rate = sum === 1 ? '' : sum.toString();

            accumulator += rate + item;
            sum = 1;
        }
        return accumulator;
    }, '')
}

// надо чтобы стало так a2b2ca

module.exports = {
  encodeLine
};
