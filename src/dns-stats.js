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
  let result = {};
  for (let i = 0; i < domains.length; i++) {
    let domain = domains[i].split('.');
    let dns = '';
    for (let j = domain.length - 1; j >= 0; j--) {
      dns += '.' + domain[j];
      console.log(dns); 
      if (result[dns] == undefined) {
        result[dns] = 0
      } 
      result[dns] = result[dns] + 1
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
