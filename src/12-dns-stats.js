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
  const domeinsObject = {};
  for (let i = 0; i < domains.length; i++) {
    const key = domains[i].split('.').reverse();

    for (let j = 0; j < key.length; j++) {
      if (domeinsObject[`.${key[j]}`] === undefined) {
        domeinsObject[`.${key[j]}`] = 1;

        if (key[j + 1] !== undefined) {
          key[j + 1] = `${key[j]}.${key[j + 1]}`;
        }
      } else {
        domeinsObject[`.${key[j]}`] += 1;

        if (key[j + 1] !== undefined) {
          key[j + 1] = `${key[j]}.${key[j + 1]}`;
        }
      }
    }
  }
  return domeinsObject;
}

module.exports = getDNSStats;
