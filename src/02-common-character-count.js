function count(array) {
  const numbers = {};
  array.forEach((element) => {
    if (numbers[element]) {
      numbers[element] += 1;
    } else {
      numbers[element] = 1;
    }
  });
  return numbers;
}
/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let result = 0;
  const objectStr1 = count(s1.split(''));
  const objectStr2 = count(s2.split(''));
  Object.keys(objectStr1).forEach((key) => {
    if (objectStr2[key]) {
      result += Math.min(objectStr1[key], objectStr2[key]);
    }
  });
  return result;
}
module.exports = getCommonCharacterCount;
