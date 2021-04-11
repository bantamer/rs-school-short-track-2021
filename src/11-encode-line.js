/* eslint-disable arrow-parens */

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
  const arrStr = str.split('');
  const result = [];
  let count = 1;
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] === arrStr[i + 1]) {
      count += 1;
    } else if (count !== 1) {
      result.push(`${count}${arrStr[i]}`);
      count = 1;
    } else {
      result.push(`${arrStr[i]}`);
    }
  }
  return result.join('');
}

module.exports = encodeLine;
