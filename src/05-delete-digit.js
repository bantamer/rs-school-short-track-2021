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
  let nArr = String(n).split('');
  let maxNum = 0;
  for (let i = 0; i < nArr.length; i++) {
    nArr.splice(i, 1);
    maxNum = Math.max(maxNum, +nArr.join(''));

    nArr = String(n).split('');
  }
  return maxNum;
}

module.exports = deleteDigit;
