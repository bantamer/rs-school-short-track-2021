/**
 * Given a sorted array, find the index of the element with the given result.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} result
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    const middle = parseInt((end + start) / 2, 10);
    const result = array[middle];
    if (result === value) {
      return middle;
    }
    if (result > value) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return null;
}

module.exports = findIndex;
