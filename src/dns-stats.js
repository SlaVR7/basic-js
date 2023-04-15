const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
    for(let i = 0; i < domains.length; i++) {
      let arr = domains[i].split('.');
      obj['.' + arr[arr.length - 1]] ? obj['.' + arr[arr.length - 1]]++ : obj['.' + arr[arr.length - 1]] = 1;
      obj['.' + arr[arr.length - 1] + '.' + arr[arr.length - 2]] ? obj['.' + arr[arr.length - 1] + '.' + arr[arr.length - 2]]++ : obj['.' + arr[arr.length - 1] + '.' + arr[arr.length - 2]] = 1;
      if (arr[arr.length - 3]) {
        obj['.' + arr[arr.length - 1] + '.' + arr[arr.length - 2] + '.' + arr[arr.length - 3]] ? obj['.' + arr[arr.length - 1] + '.' + arr[arr.length - 2] + '.' + arr[arr.length - 3]]++ : obj['.' + arr[arr.length - 1] + '.' + arr[arr.length - 2] + '.' + arr[arr.length - 3]] = 1;
      }
    }
}

module.exports = {
  getDNSStats
};
